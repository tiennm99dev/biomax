<script>
  import { onMount, untrack } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    MAX_SALT,
    NOTHING_SEEN,
    SAP,
    describeCell,
    isSettled,
    sapStrength,
    settledVolume,
    stepVolume,
    stomaOpening,
    updateSeen,
  } from './engine.js';

  const CELL = { x: 20, y: 16, w: 240, h: 138 };
  const CX = CELL.x + CELL.w / 2;
  const CY = CELL.y + CELL.h / 2;
  const INNER = 6;

  let salt = $state(SAP);
  let volume = $state(1);
  let alive = $state(true);
  let seen = $state(NOTHING_SEEN);
  let reduced = $state(false);

  const note = $derived(describeCell(volume, salt, alive));
  const side = $derived(Math.sqrt(volume));
  const protoW = $derived((CELL.w - 2 * INNER) * side);
  const protoH = $derived((CELL.h - 2 * INNER) * side);
  const vacW = $derived(protoW * 0.82);
  const vacH = $derived(protoH * 0.8);
  const inflow = $derived(
    alive && !isSettled(volume, salt, alive) ? volume < settledVolume(salt) : null,
  );
  const stoma = $derived(stomaOpening(volume) * 8);
  const percent = $derived(formatNumber(volume * 100, 0));
  const goals = $derived([
    { done: seen.shrunk, text: 'Tạo được co nguyên sinh rõ rệt.' },
    { done: seen.shut, text: 'Thấy khí khổng đóng khi tế bào mất nước.' },
    { done: seen.refilled, text: 'Sau khi co, làm tế bào phản co nguyên sinh.' },
  ]);

  onMount(() => {
    reduced = reducedMotion();
  });

  $effect(() => {
    const medium = salt;
    const living = alive;
    if (reduced) {
      if (living) {
        volume = settledVolume(medium);
        seen = untrack(() => updateSeen(seen, settledVolume(medium)));
      }
      return;
    }
    if (!living) return;
    /** @type {() => void} */
    const stop = frameLoop((dt) => {
      volume = stepVolume(volume, medium, dt, living);
      seen = updateSeen(seen, volume);
      if (isSettled(volume, medium, living)) {
        volume = settledVolume(medium);
        seen = updateSeen(seen, volume);
        stop();
      }
    });
    return stop;
  });

  function addWater() {
    salt = 0;
  }

  function newSample() {
    alive = true;
    salt = SAP;
    volume = 1;
    seen = NOTHING_SEEN;
  }

  function killSample() {
    alive = false;
    salt = SAP;
    volume = 1;
  }
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-[3fr_1fr]">
    <svg
      viewBox="0 0 280 170"
      class="mx-auto block w-full max-w-lg rounded-xl bg-sky-50"
      role="img"
      aria-label="Tế bào biểu bì lá thài lài tía: nguyên sinh chất bằng {percent} phần trăm kích thước ban đầu, {volume <
      0.97
        ? 'đã tách khỏi thành tế bào'
        : 'áp sát thành tế bào'}"
    >
      <rect
        x={CELL.x}
        y={CELL.y}
        width={CELL.w}
        height={CELL.h}
        rx="14"
        fill="#f0fdf4"
        stroke="#166534"
        stroke-width="5"
      />
      <rect
        x={CX - protoW / 2}
        y={CY - protoH / 2}
        width={protoW}
        height={protoH}
        rx={10 + (1 - volume) * 40}
        fill={alive ? '#bbf7d0' : '#e7e5e4'}
        stroke={alive ? '#15803d' : '#78716c'}
        stroke-width="2"
      />
      <rect
        x={CX - vacW / 2}
        y={CY - vacH / 2}
        width={vacW}
        height={vacH}
        rx={8 + (1 - volume) * 34}
        fill={alive ? '#a21caf' : '#a8a29e'}
        opacity={0.35 + (1 - volume) * 0.55}
      />
      <circle cx={CX - protoW / 2 + 10} cy={CY} r="6" fill={alive ? '#14532d' : '#57534e'} />
      {#if inflow !== null}
        {#each [-1, 1] as dir (dir)}
          {@const x = CX + dir * (protoW / 2 + 10)}
          <text {x} y={CY + 5} text-anchor="middle" font-size="16" font-weight="700" fill="#0369a1"
            >{dir > 0 === inflow ? '←' : '→'}</text
          >
        {/each}
      {/if}
    </svg>

    <svg
      viewBox="0 0 90 170"
      class="mx-auto block h-full max-h-44 rounded-xl bg-emerald-50"
      role="img"
      aria-label="Khí khổng {stoma === 0 ? 'đóng' : stoma >= 8 ? 'mở' : 'đang khép lại'}"
    >
      <ellipse cx={45} cy="80" rx={stoma} ry="34" fill="#334155" />
      <ellipse
        cx={45 - 16 - stoma}
        cy="80"
        rx="16"
        ry="50"
        fill="#86efac"
        stroke="#166534"
        stroke-width="2"
      />
      <ellipse
        cx={45 + 16 + stoma}
        cy="80"
        rx="16"
        ry="50"
        fill="#86efac"
        stroke="#166534"
        stroke-width="2"
      />
      <text x="45" y="156" text-anchor="middle" font-size="12" font-weight="600" fill="#14532d">
        Khí khổng
      </text>
    </svg>
  </div>

  <SliderField
    label="Nồng độ dung dịch NaCl bên ngoài"
    bind:value={salt}
    min={0}
    max={MAX_SALT}
    step={0.1}
    format={(v) => `${formatNumber(v, 1)}%`}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={addWater}
      >Nhỏ nước cất, hút bằng giấy thấm</button
    >
    <button type="button" class={button.quiet} onclick={newSample}>Mẫu tươi mới</button>
    <button type="button" class={button.quiet} onclick={killSample}>Mẫu đã đun sôi</button>
  </div>

  <p class="text-sm text-slate-700">
    Nguyên sinh chất: {percent}% kích thước ban đầu. Dịch bào đặc tương đương NaCl
    {formatNumber(sapStrength(volume), 1)}%, môi trường NaCl {formatNumber(salt, 1)}%.
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        {goal.text}
      </li>
    {/each}
  </ul>
</div>

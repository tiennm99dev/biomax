<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatFixed, intText } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { onDestroy } from 'svelte';
  import {
    PEAK,
    PHASE_NAMES,
    REST,
    SPAN,
    THRESHOLD,
    T_STIM,
    potential,
    stateAt,
    verdict,
  } from './engine.js';

  let strength = $state(20);
  let blocked = $state(false);
  let time = $state(1.6);
  /** @type {(() => void) | null} */
  let stopLoop = null;

  const now = $derived(stateAt(time, strength, blocked));
  const note = $derived(verdict(strength, blocked));

  const LEFT = 40;
  const RIGHT = 330;
  const TOP = 10;
  const BOTTOM = 140;
  const x = linear(0, SPAN, LEFT, RIGHT).map;
  const y = linear(-90, 50, BOTTOM, TOP).map;

  const curve = $derived(
    Array.from({ length: 201 }, (_, i) => {
      const t = (i * SPAN) / 200;
      return `${x(t)},${y(potential(t, strength, blocked))}`;
    }).join(' '),
  );

  const inside = $derived(now.v < 0 ? '−' : '+');
  const outside = $derived(now.v < 0 ? '+' : '−');

  function stop() {
    stopLoop?.();
    stopLoop = null;
  }

  function play() {
    stop();
    if (reducedMotion()) {
      time = 2.5;
      return;
    }
    time = 0;
    stopLoop = frameLoop((dt) => {
      time = Math.min(SPAN, time + dt * 1.2);
      if (time >= SPAN) stop();
    });
  }

  onDestroy(stop);
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Cường độ kích thích (đưa màng lên)"
      bind:value={strength}
      min={0}
      max={40}
      step={1}
      format={(v) => `${intText(REST + v)} mV`}
    />
    <SliderField
      label="Xem thời điểm"
      bind:value={time}
      min={0}
      max={SPAN}
      step={0.1}
      format={(v) => `${formatFixed(v, 1)} ms`}
      oninput={stop}
    />
  </div>
  <div class="flex flex-wrap items-center gap-3">
    <button type="button" class={button.primary} onclick={play}>Kích thích và chạy</button>
    <label class="inline-flex min-h-11 items-center gap-2 text-sm">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={blocked} />
      Thuốc tê (chặn kênh Na⁺)
    </label>
  </div>

  <svg
    viewBox="0 0 340 230"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Đồ thị điện thế màng theo thời gian. Ở {formatFixed(time, 1)} ms: {intText(
      Math.round(now.v),
    )} mV, {PHASE_NAMES[now.phase]}"
  >
    <line x1={LEFT} y1={y(0)} x2={RIGHT} y2={y(0)} stroke="#cbd5e1" />
    <line
      x1={LEFT}
      y1={y(THRESHOLD)}
      x2={RIGHT}
      y2={y(THRESHOLD)}
      stroke="#b45309"
      stroke-dasharray="5 4"
    />
    <text x={RIGHT} y={y(THRESHOLD) - 3} text-anchor="end" font-size="10" fill="#92400e"
      >ngưỡng {intText(THRESHOLD)} mV</text
    >
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    {#each [REST, 0, PEAK] as v (v)}
      <text x={LEFT - 4} y={y(v) + 4} text-anchor="end" font-size="10" fill="#334155"
        >{v > 0 ? `+${v}` : intText(v)}</text
      >
    {/each}
    <text x={LEFT + 2} y={TOP + 8} font-size="9" fill="#334155">mV</text>
    <line
      x1={x(T_STIM)}
      y1={BOTTOM}
      x2={x(T_STIM)}
      y2={BOTTOM - 8}
      stroke="#7c3aed"
      stroke-width="2"
    />
    <text x={x(T_STIM)} y={BOTTOM + 11} text-anchor="middle" font-size="9" fill="#7c3aed"
      >kích thích</text
    >
    <text x={RIGHT} y={BOTTOM + 11} text-anchor="end" font-size="9" fill="#334155">{SPAN} ms</text>
    <polyline points={curve} fill="none" stroke="#4f46e5" stroke-width="2.5" />
    <line x1={x(time)} y1={TOP} x2={x(time)} y2={BOTTOM} stroke="#f59e0b" stroke-width="1.5" />
    <circle cx={x(time)} cy={y(now.v)} r="4" fill="#f59e0b" />

    <g aria-hidden="true">
      <text x="20" y="172" font-size="10" fill="#334155">Ngoài</text>
      <text x="20" y="214" font-size="10" fill="#334155">Trong</text>
      <rect x="60" y="180" width="270" height="16" fill="#fde68a" />
      {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as i (i)}
        <text x={72 + i * 30} y="173" text-anchor="middle" font-size="13" fill="#be123c"
          >{outside}</text
        >
        <text x={72 + i * 30} y="214" text-anchor="middle" font-size="13" fill="#1d4ed8"
          >{inside}</text
        >
      {/each}
      <rect x="135" y="178" width="18" height="20" rx="3" fill={now.na ? '#22c55e' : '#94a3b8'} />
      <text x="144" y="226" text-anchor="middle" font-size="9" fill="#166534">kênh Na⁺</text>
      {#if now.na}
        <path
          d="M144 162 L144 210 M139 204 L144 211 L149 204"
          stroke="#15803d"
          stroke-width="2"
          fill="none"
        />
      {/if}
      <rect x="235" y="178" width="18" height="20" rx="3" fill={now.k ? '#ec4899' : '#94a3b8'} />
      <text x="244" y="226" text-anchor="middle" font-size="9" fill="#9d174d">kênh K⁺</text>
      {#if now.k}
        <path
          d="M244 210 L244 162 M239 168 L244 161 L249 168"
          stroke="#be185d"
          stroke-width="2"
          fill="none"
        />
      {/if}
    </g>
  </svg>

  <p class="text-sm tabular-nums" aria-live="polite">
    {formatFixed(time, 1)} ms: điện thế màng {intText(Math.round(now.v))} mV — {PHASE_NAMES[
      now.phase
    ]}.
    {now.na ? 'Kênh Na⁺ mở, Na⁺ đi vào trong.' : ''}
    {now.k ? 'Kênh K⁺ mở, K⁺ đi ra ngoài.' : ''}
    Mặt trong màng mang điện {now.v < 0 ? 'âm' : 'dương'}.
  </p>
  <FeedbackNote tone={note.tone} text={note.text} />
</div>

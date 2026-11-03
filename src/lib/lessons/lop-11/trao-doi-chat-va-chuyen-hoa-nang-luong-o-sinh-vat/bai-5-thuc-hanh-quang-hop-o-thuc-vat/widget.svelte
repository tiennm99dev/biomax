<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    FULL_SPOTS,
    PIGMENTS,
    RUN_MINUTES,
    bands,
    describeRun,
    frontAt,
    rfOf,
  } from './engine.js';

  /** @type {import('./engine.js').SolventId} */
  let solvent = $state('petroleum');
  /** @type {import('./engine.js').LeafId} */
  let leaf = $state('xanh');
  let spots = $state(FULL_SPOTS);
  let touching = $state(false);
  let minutes = $state(0);
  let playing = $state(false);
  /** @type {Record<string, string>} */
  let named = $state({});
  /** @type {string | null} */
  let picked = $state(null);
  let message = $state('');

  const setup = $derived({ solvent, leaf, spots, touching });
  const run = $derived(bands(setup, minutes));
  const front = $derived(frontAt(minutes));
  const note = $derived(describeRun(setup, minutes));
  const ready = $derived(
    minutes >= RUN_MINUTES && solvent === 'petroleum' && !touching && spots >= 5,
  );
  const allNamed = $derived(PIGMENTS.every((p) => named[p.id] === p.id));

  const BASE_Y = 190;
  const MM = 1.8;
  const JAR_Y = 212;

  $effect(() => {
    if (!playing) return;
    return frameLoop((dt) => {
      minutes = Math.min(RUN_MINUTES, minutes + dt * 2);
      if (minutes >= RUN_MINUTES) playing = false;
    });
  });

  function start() {
    if (reducedMotion()) {
      minutes = RUN_MINUTES;
      return;
    }
    if (minutes >= RUN_MINUTES) minutes = 0;
    playing = true;
  }

  function reset() {
    playing = false;
    minutes = 0;
    named = {};
    picked = null;
    message = '';
  }

  /** @param {string | number} next */
  function chooseSolvent(next) {
    solvent = next === 'nuoc' ? 'nuoc' : 'petroleum';
    reset();
  }

  /** @param {string | number} next */
  function chooseLeaf(next) {
    leaf = next === 'vang' ? 'vang' : 'xanh';
    reset();
  }

  /** @param {string} bandId @param {number} place */
  function pickBand(bandId, place) {
    picked = bandId;
    message = `Dải thứ ${place} tính từ vạch xuất phát: chọn tên của nó.`;
  }

  /** @param {string} nameId @param {string} name */
  function nameBand(nameId, name) {
    if (!picked) {
      message = 'Hãy chọn một dải trước.';
      return;
    }
    if (picked === nameId) {
      named = { ...named, [picked]: nameId };
      message = `Đúng: dải này là ${name.toLowerCase()}.`;
      picked = null;
    } else {
      message = `Chưa đúng: dải này không phải ${name.toLowerCase()}. Xem màu và khoảng cách đến vạch xuất phát.`;
    }
  }
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-[150px_1fr]">
    <svg
      viewBox="0 0 150 240"
      class="mx-auto h-72 w-auto"
      role="img"
      aria-label="Giấy sắc kí treo trong bình dung môi, các dải sắc tố tách dần"
    >
      <path
        d="M 20 10 L 20 230 Q 75 240 130 230 L 130 10"
        fill="#f8fafc"
        stroke="#475569"
        stroke-width="2"
      />
      <rect
        x="22"
        y={JAR_Y}
        width="106"
        height="20"
        fill={solvent === 'nuoc' ? '#bae6fd' : '#fef9c3'}
      />
      <rect x="55" y="14" width="40" height={JAR_Y + 4 - 14} fill="#ffffff" stroke="#94a3b8" />
      {#if front > 0}
        <rect
          x="55"
          y={BASE_Y - front * MM}
          width="40"
          height={front * MM}
          fill={solvent === 'nuoc' ? '#bae6fd' : '#fef3c7'}
          opacity="0.6"
        />
        <line
          x1="55"
          y1={BASE_Y - front * MM}
          x2="95"
          y2={BASE_Y - front * MM}
          stroke="#0284c7"
          stroke-dasharray="3 2"
        />
      {/if}
      <line
        x1="55"
        y1={touching ? JAR_Y + 2 : BASE_Y}
        x2="95"
        y2={touching ? JAR_Y + 2 : BASE_Y}
        stroke="#64748b"
        stroke-width="0.8"
      />
      {#each run as band (band.id)}
        {#if band.strength > 0}
          <rect
            x="58"
            y={(touching ? JAR_Y + 2 : BASE_Y) - band.distance * MM - 3}
            width="34"
            height="6"
            rx="2"
            fill={band.color}
            opacity={Math.max(0.1, band.strength)}
          />
        {/if}
      {/each}
      <text x="75" y="8" text-anchor="middle" font-size="10" fill="#475569">giấy sắc kí</text>
    </svg>

    <div class="space-y-3">
      <SegmentedControl
        label="Dung môi chạy"
        value={solvent}
        onchange={chooseSolvent}
        options={[
          { value: 'petroleum', label: 'Petroleum ether : ethanol' },
          { value: 'nuoc', label: 'Nước' },
        ]}
      />
      <SegmentedControl
        label="Lá lấy mẫu"
        value={leaf}
        onchange={chooseLeaf}
        options={[
          { value: 'xanh', label: 'Lá xanh' },
          { value: 'vang', label: 'Lá vàng' },
        ]}
      />
      <SliderField
        label="Số lần chấm dịch"
        bind:value={spots}
        min={1}
        max={FULL_SPOTS}
        step={1}
        oninput={reset}
      />
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} onclick={start} disabled={playing}>
          {playing ? 'Đang chạy…' : 'Chạy sắc kí 10 phút'}
        </button>
        <button
          type="button"
          class={button.secondary}
          aria-pressed={touching}
          onclick={() => {
            touching = !touching;
            reset();
          }}
        >
          {touching ? 'Vạch đang ngập dung môi: bấm để nhấc' : 'Vạch trên mặt dung môi: bấm để hạ'}
        </button>
        <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
      </div>
      <p class="text-sm tabular-nums" aria-live="polite">
        {formatNumber(minutes, 0)} phút. Dung môi đi được {formatNumber(front, 0)} mm.
      </p>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if ready}
    <div class="rounded-xl bg-slate-50 p-3 text-sm">
      <p class="mb-2 font-semibold">Gọi tên các dải: chọn một dải, rồi chọn tên.</p>
      <ul class="grid gap-2 sm:grid-cols-2">
        {#each run as band, i (band.id)}
          <li>
            <button
              type="button"
              class="flex min-h-11 w-full items-center gap-2 rounded-lg border px-3 py-2 text-left {picked ===
              band.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-slate-300 bg-white'} {focusRing}"
              aria-pressed={picked === band.id}
              onclick={() => pickBand(band.id, i + 1)}
            >
              <span class="h-4 w-8 rounded" style="background: {band.color}" aria-hidden="true"
              ></span>
              <span>
                Dải {i + 1}: {formatNumber(band.distance, 1)} mm, Rf = {formatFixed(
                  rfOf(band.distance, front),
                  2,
                )}
                {#if named[band.id]}
                  <span class="font-semibold text-emerald-800">({band.name})</span>
                {/if}
              </span>
            </button>
          </li>
        {/each}
      </ul>
      <div class="mt-3 flex flex-wrap gap-2" role="group" aria-label="Tên các sắc tố">
        {#each PIGMENTS as p (p.id)}
          <button type="button" class={button.quiet} onclick={() => nameBand(p.id, p.name)}
            >{p.name}</button
          >
        {/each}
      </div>
      <p class="mt-2" aria-live="polite">
        {#if allNamed}
          <span class="font-semibold text-emerald-800"
            ><LiveRichText
              text="Đủ bốn sắc tố. Từ vạch xuất phát lên: diệp lục b, diệp lục a, xanthophyll, carotene."
            /></span
          >
        {:else}
          {message}
        {/if}
      </p>
    </div>
  {/if}
</div>

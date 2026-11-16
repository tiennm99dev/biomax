<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    DAYS,
    EXPERIMENTS,
    KINDS,
    MAX_DOSE,
    METHODS,
    POTS,
    burnt,
    checkDesign,
    conclusion,
    heights,
    isControl,
    plainPot,
  } from './engine.js';

  /** @typedef {import('./engine.js').Experiment} Experiment */

  const expOptions = EXPERIMENTS.map((e) => ({ value: e.value, label: e.label }));
  const select = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm ${focusRing}`;
  const TOP_CM = 45;

  /** @type {Experiment} */
  let exp = $state('loai');
  let pots = $state(Array.from({ length: POTS }, plainPot));
  let ran = $state(false);
  let day = $state(DAYS);

  const design = $derived(checkDesign(exp, pots));
  const series = $derived(pots.map((p) => heights(p)));
  const result = $derived(ran ? conclusion(exp, pots) : null);

  function reset() {
    pots = Array.from({ length: POTS }, plainPot);
    ran = false;
  }

  function run() {
    if (!design.ok) return;
    ran = true;
    day = DAYS;
  }

  /** @param {number} h */
  const y = (h) => 120 - (Math.min(TOP_CM, h) / TOP_CM) * 100;
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Thí nghiệm chứng minh tác dụng của"
    options={expOptions}
    bind:value={exp}
    onchange={() => (ran = false)}
  />

  <ol class="grid gap-2 sm:grid-cols-2" aria-label="Các chậu cây ngô">
    {#each pots as pot, i (i)}
      <li class="space-y-2 rounded-xl border border-slate-200 p-3">
        <p class="text-sm font-bold text-slate-800">
          Chậu {i + 1}{isControl(pot) ? ' (đối chứng)' : ''}
        </p>
        <label class="block text-sm text-slate-700">
          Loại phân
          <select
            class={select}
            aria-label="Loại phân của chậu {i + 1}"
            bind:value={pot.kind}
            onchange={() => (ran = false)}
          >
            {#each KINDS as k (k.value)}
              <option value={k.value}>{k.label}</option>
            {/each}
          </select>
        </label>
        {#if pot.kind !== 'none'}
          <div class="flex items-center justify-between gap-2 text-sm text-slate-700">
            <span>Lượng phân</span>
            <Stepper
              label="Lượng phân của chậu {i + 1}"
              bind:value={pot.dose}
              min={0}
              max={MAX_DOSE}
              format={(v) => `${formatNumber(v)} g`}
              onchange={() => (ran = false)}
            />
          </div>
          <label class="block text-sm text-slate-700">
            Cách bón
            <select
              class={select}
              aria-label="Cách bón của chậu {i + 1}"
              bind:value={pot.method}
              onchange={() => (ran = false)}
            >
              {#each METHODS as m (m.value)}
                <option value={m.value}>{m.label}</option>
              {/each}
            </select>
          </label>
        {/if}
      </li>
    {/each}
  </ol>

  <FeedbackNote tone={design.ok ? 'ok' : 'warn'} text={design.text} />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={!design.ok} onclick={run}>
      Theo dõi {DAYS} ngày
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Bố trí lại</button>
  </div>

  {#if ran && result}
    <SliderField label="Ngày theo dõi" bind:value={day} min={0} max={DAYS} />
    <svg
      viewBox="0 0 340 150"
      class="block w-full rounded-xl bg-amber-50"
      role="img"
      aria-label="Ngày {day}: {pots
        .map((_, i) => `chậu ${i + 1} cao ${formatNumber(series[i][day], 1)} cm`)
        .join(', ')}."
    >
      {#each pots as pot, i (i)}
        {@const x = 45 + i * 83}
        {@const h = series[i][day]}
        <line x1={x} y1="120" x2={x} y2={y(h)} stroke="#15803d" stroke-width="4" />
        {#each [0.35, 0.6, 0.85] as f (f)}
          <path
            d="M{x} {120 - (120 - y(h)) * f} q {f > 0.5 ? 18 : -18} -6 {f > 0.5 ? 26 : -26} 4"
            fill="none"
            stroke={burnt(pot) && day > 3 ? '#a16207' : '#16a34a'}
            stroke-width="4"
            stroke-linecap="round"
          />
        {/each}
        <path d="M{x - 24} 120 h48 l-6 26 h-36 z" fill="#b45309" />
        <text {x} y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">
          {formatNumber(h, 1)} cm
        </text>
        <text {x} y="138" text-anchor="middle" font-size="12" fill="#ffffff">Chậu {i + 1}</text>
      {/each}
    </svg>
    <FeedbackNote tone={result.tone} text={result.text} />
  {/if}
  <p class="text-xs text-slate-600">
    Tốc độ lớn của cây là mô hình minh hoạ cho xu hướng của thí nghiệm thật, không phải số liệu đo.
  </p>
</div>

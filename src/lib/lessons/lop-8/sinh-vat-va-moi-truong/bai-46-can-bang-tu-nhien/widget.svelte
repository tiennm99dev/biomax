<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { OUTCOME_TEXT, PARAMS, YEARS, simulate, verdict } from './engine.js';

  const W = 360;
  const H = 230;
  const L = 42;
  const R = 322;
  const TOP = 20;
  const BOTTOM = 192;
  const R_MAX = PARAMS.K;
  const F_MAX = 200;

  const DEFAULTS = { rabbits: 500, foxes: 20, huntFox: 0, huntRabbit: 0 };

  let rabbits = $state(DEFAULTS.rabbits);
  let foxes = $state(DEFAULTS.foxes);
  let huntFox = $state(DEFAULTS.huntFox);
  let huntRabbit = $state(DEFAULTS.huntRabbit);
  let year = $state(10);

  const run = $derived(
    simulate({ rabbits, foxes, huntFox: huntFox / 100, huntRabbit: huntRabbit / 100 }),
  );
  const result = $derived(verdict(run, huntFox / 100));
  const last = $derived(run[run.length - 1]);
  const atYear = $derived(run[Math.round(year * 4)] ?? last);

  /** @param {number} t */
  const xOf = (t) => L + (t / YEARS) * (R - L);
  /** @param {number} n */
  const yRabbit = (n) => BOTTOM - (Math.min(n, R_MAX) / R_MAX) * (BOTTOM - TOP);
  /** @param {number} n */
  const yFox = (n) => BOTTOM - (Math.min(n, F_MAX) / F_MAX) * (BOTTOM - TOP);

  const rabbitLine = $derived(
    run.map((p) => `${xOf(p.t).toFixed(1)},${yRabbit(p.rabbits).toFixed(1)}`).join(' '),
  );
  const foxLine = $derived(
    run.map((p) => `${xOf(p.t).toFixed(1)},${yFox(p.foxes).toFixed(1)}`).join(' '),
  );

  /** @param {number} n */
  const count = (n) => fmt(Math.round(n));

  const verdictText = $derived.by(() => {
    let text = OUTCOME_TEXT[result];
    if (result === 'balanced' && last.foxes < 10)
      text += ` Nhưng chỉ còn khoảng ${count(last.foxes)} con cáo: quần thể cáo có nguy cơ biến mất.`;
    return text;
  });
  const tone = $derived(
    result === 'balanced' && last.foxes >= 10 ? 'ok' : result === 'swinging' ? 'info' : 'warn',
  );

  function reset() {
    rabbits = DEFAULTS.rabbits;
    foxes = DEFAULTS.foxes;
    huntFox = DEFAULTS.huntFox;
    huntRabbit = DEFAULTS.huntRabbit;
  }

  /** @param {number} v */
  const pct = (v) => `${v}%`;
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-xl select-none"
    role="img"
    aria-label="Đồ thị số lượng thỏ và cáo trong {YEARS} năm. Sau {YEARS} năm còn {count(
      last.rabbits,
    )} con thỏ và {count(last.foxes)} con cáo."
  >
    {#each [0, 0.25, 0.5, 0.75, 1] as q (q)}
      <line
        x1={L}
        x2={R}
        y1={BOTTOM - q * (BOTTOM - TOP)}
        y2={BOTTOM - q * (BOTTOM - TOP)}
        stroke="#e2e8f0"
      />
      <text
        x={L - 4}
        y={BOTTOM - q * (BOTTOM - TOP) + 3}
        font-size="9"
        fill="#0369a1"
        text-anchor="end">{fmt(q * R_MAX)}</text
      >
      <text
        x={R + 4}
        y={BOTTOM - q * (BOTTOM - TOP) + 3}
        font-size="9"
        fill="#c2410c"
        text-anchor="start">{fmt(q * F_MAX)}</text
      >
    {/each}
    {#each [0, 10, 20, 30, 40, 50, 60] as t (t)}
      <text x={xOf(t)} y={BOTTOM + 13} font-size="9" fill="#334155" text-anchor="middle">{t}</text>
    {/each}
    <text x={(L + R) / 2} y={BOTTOM + 28} font-size="9" fill="#334155" text-anchor="middle"
      >thời gian (năm)</text
    >
    <text x={L - 30} y="11" font-size="9" fill="#0369a1">số thỏ</text>
    <text x={R + 30} y="11" font-size="9" fill="#c2410c" text-anchor="end">số cáo</text>
    <line x1={L} y1={BOTTOM} x2={R} y2={BOTTOM} stroke="#334155" />
    <line
      x1={xOf(year)}
      x2={xOf(year)}
      y1={TOP}
      y2={BOTTOM}
      stroke="#64748b"
      stroke-dasharray="2 3"
    />
    <polyline points={rabbitLine} fill="none" stroke="#0284c7" stroke-width="2" />
    <polyline
      points={foxLine}
      fill="none"
      stroke="#ea580c"
      stroke-width="2"
      stroke-dasharray="6 3"
    />
    <circle cx={xOf(atYear.t)} cy={yRabbit(atYear.rabbits)} r="3.5" fill="#0284c7" />
    <circle cx={xOf(atYear.t)} cy={yFox(atYear.foxes)} r="3.5" fill="#ea580c" />
  </svg>

  <p class="flex flex-wrap gap-x-4 gap-y-1 text-sm">
    <span class="font-semibold text-sky-700">── Thỏ (trục trái)</span>
    <span class="font-semibold text-orange-700">- - Cáo (trục phải)</span>
  </p>

  <SliderField
    label="Xem năm thứ"
    bind:value={year}
    min={0}
    max={YEARS}
    step={0.25}
    format={(v) => fmt(Math.floor(v))}
  />
  <p class="text-sm text-slate-700 tabular-nums" aria-live="polite">
    Năm thứ {fmt(Math.floor(atYear.t))}: khoảng {count(atYear.rabbits)} con thỏ và {count(
      atYear.foxes,
    )} con cáo.
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Số thỏ ban đầu" bind:value={rabbits} min={50} max={1500} step={50} />
    <SliderField label="Số cáo ban đầu" bind:value={foxes} min={5} max={150} step={5} />
    <SliderField
      label="Săn bắt cáo mỗi năm"
      bind:value={huntFox}
      min={0}
      max={100}
      step={5}
      format={pct}
    />
    <SliderField
      label="Săn bắt thỏ mỗi năm"
      bind:value={huntRabbit}
      min={0}
      max={100}
      step={5}
      format={pct}
    />
  </div>

  <FeedbackNote {tone} text={verdictText} />

  <button type="button" class="{button.quiet} text-sm" onclick={reset}
    >Đặt lại: không săn bắt</button
  >
</div>

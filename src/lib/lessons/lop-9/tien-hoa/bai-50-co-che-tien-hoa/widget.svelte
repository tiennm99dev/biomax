<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { rng } from '#lib/core/drill.js';
  import { formatFixed } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { FACTORS, alleleA, explain, noFactors, randomMating, simulate } from './engine.js';

  const GENS = 30;
  const W = 340;
  const H = 200;
  const L = 34;
  const R = 10;
  const T = 12;
  const B = 28;

  let factors = $state(noFactors());
  let startP = $state(0.5);
  let seed = $state(1);
  let shownGen = $state(GENS);

  const history = $derived(simulate(randomMating(startP), factors, GENS, rng(seed)));
  const now = $derived(history[Math.min(shownGen, history.length - 1)]);

  const x = (/** @type {number} */ g) => L + (g / GENS) * (W - L - R);
  const y = (/** @type {number} */ v) => T + (1 - v) * (H - T - B);
  const line = (/** @type {(g: import('./engine.js').Genotypes) => number} */ f) =>
    history.map((g, i) => `${x(i)},${y(f(g))}`).join(' ');
  const f2 = (/** @type {number} */ v) => formatFixed(v, 2);

  /** @param {keyof import('./engine.js').Factors} key */
  function toggle(key) {
    factors = { ...factors, [key]: !factors[key] };
  }

  function rerun() {
    seed += 1;
  }

  function clearAll() {
    factors = noFactors();
  }

  const feedback = $derived(explain(history, factors));
  const changed = $derived(Math.abs(alleleA(history[GENS]) - alleleA(history[0])) > 0.005);
  const tone = $derived(changed ? 'ok' : 'info');
  const bars = $derived([
    { key: 'AA', label: 'AA', value: now.AA, color: '#3730a3' },
    { key: 'Aa', label: 'Aa', value: now.Aa, color: '#d97706' },
    { key: 'aa', label: 'aa', value: now.aa, color: '#cbd5e1' },
  ]);
</script>

<div class="space-y-4">
  <fieldset class="space-y-1">
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Bật các nhân tố tiến hoá tác động lên quần thể
    </legend>
    {#each FACTORS as fac (fac.key)}
      <label
        class="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2 text-sm hover:bg-slate-50"
      >
        <input
          type="checkbox"
          class="h-5 w-5 accent-indigo-600 {focusRing}"
          checked={factors[fac.key]}
          onchange={() => toggle(fac.key)}
        />
        <span>{fac.label}</span>
      </label>
    {/each}
  </fieldset>
  <p class="text-xs text-slate-600">
    Tốc độ đột biến và di - nhập gene ở đây được phóng đại để dễ quan sát; trong tự nhiên, đột biến
    làm đổi tần số allele rất chậm.
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Tần số allele A ban đầu"
      bind:value={startP}
      min={0.1}
      max={0.9}
      step={0.1}
      format={(v) => formatFixed(v, 1)}
    />
    <SliderField label="Xem thế hệ" bind:value={shownGen} min={0} max={GENS} />
  </div>

  <figure class="space-y-1">
    <svg
      viewBox="0 0 {W} {H}"
      class="mx-auto block h-auto w-full max-w-xl select-none"
      role="img"
      aria-label="Đồ thị qua {GENS} thế hệ: tần số allele A từ {f2(alleleA(history[0]))} đến {f2(
        alleleA(history[GENS]),
      )}; tần số kiểu gene Aa từ {f2(history[0].Aa)} đến {f2(history[GENS].Aa)}."
    >
      {#each [0, 0.25, 0.5, 0.75, 1] as t (t)}
        <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#e2e8f0" />
        <text x={L - 4} y={y(t) + 4} text-anchor="end" font-size="10" fill="#64748b"
          >{formatFixed(t, 2)}</text
        >
      {/each}
      {#each [0, 10, 20, 30] as g (g)}
        <text x={x(g)} y={H - 10} text-anchor="middle" font-size="10" fill="#64748b">{g}</text>
      {/each}
      <text x={W - R} y={H - 1} text-anchor="end" font-size="10" fill="#334155">thế hệ</text>
      <line x1={L} x2={L} y1={T} y2={H - B} stroke="#334155" />
      <line x1={L} x2={W - R} y1={H - B} y2={H - B} stroke="#334155" />
      <line
        x1={x(shownGen)}
        x2={x(shownGen)}
        y1={T}
        y2={H - B}
        stroke="#94a3b8"
        stroke-dasharray="3 3"
      />
      <polyline points={line(alleleA)} fill="none" stroke="#4f46e5" stroke-width="2.5" />
      <polyline
        points={line((g) => g.Aa)}
        fill="none"
        stroke="#d97706"
        stroke-width="2"
        stroke-dasharray="6 4"
      />
    </svg>
    <figcaption class="flex flex-wrap justify-center gap-4 text-xs text-slate-700">
      <span><span class="font-bold text-indigo-600">━</span> Tần số allele A</span>
      <span><span class="font-bold text-amber-600">╍</span> Tần số kiểu gene Aa</span>
    </figcaption>
  </figure>

  <div>
    <p class="mb-1 text-sm font-semibold text-slate-700">
      Thế hệ {shownGen}: tần số allele A = {f2(alleleA(now))}, a = {f2(1 - alleleA(now))}
    </p>
    <div
      class="flex h-8 w-full overflow-hidden rounded-lg"
      role="img"
      aria-label="Thành phần kiểu gene: AA {f2(now.AA)}, Aa {f2(now.Aa)}, aa {f2(now.aa)}"
    >
      {#each bars as b (b.key)}
        {#if b.value > 0.0001}
          <div
            class="flex items-center justify-center overflow-hidden text-xs font-bold {b.key ===
            'aa'
              ? 'text-slate-700'
              : 'text-white'}"
            style:width="{b.value * 100}%"
            style:background={b.color}
            aria-hidden="true"
          >
            {#if b.value > 0.12}{b.label} {f2(b.value)}{/if}
          </div>
        {/if}
      {/each}
    </div>
    <p class="mt-1 text-xs text-slate-600">
      AA, Aa: lông tối (A trội); aa: lông sáng. Bắt đầu từ quần thể giao phối ngẫu nhiên.
    </p>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={rerun}>
      Chạy lại (ngẫu nhiên mới)
    </button>
    <button type="button" class={button.quiet} onclick={clearAll}>Tắt hết các nhân tố</button>
  </div>

  <FeedbackNote {tone} text={feedback} />
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { rng } from '#lib/core/drill.js';
  import { fmt, formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import {
    SYSTEMS,
    gameteKinds,
    maleShare,
    ratioText,
    run,
    systemById,
    tallyText,
  } from './engine.js';

  let systemId = $state(SYSTEMS[0].id);
  let seed = $state(2024);
  let rand = rng(2024);
  /** @type {import('./engine.js').Tally} */
  let tally = $state({ cai: 0, duc: 0 });
  /** @type {ReturnType<typeof import('./engine.js').fertilize> | null} */
  let last = $state(null);
  /** Share of males after each batch, for the trend line. @type {Array<{ total: number, share: number }>} */
  let history = $state([]);

  const system = $derived(systemById(systemId));
  const total = $derived(tally.cai + tally.duc);
  const share = $derived(maleShare(tally));
  /** @type {Array<{ sex: import('./engine.js').Sex, pair: [string, string] }>} */
  const parentsList = $derived([
    { sex: 'cai', pair: system.female },
    { sex: 'duc', pair: system.male },
  ]);

  /** @param {string | number} id */
  function chooseSystem(id) {
    systemId = id === 'ga' ? 'ga' : 'nguoi';
    reset();
  }

  function reset() {
    seed += 1;
    rand = rng(seed);
    tally = { cai: 0, duc: 0 };
    last = null;
    history = [];
  }

  /** @param {number} times */
  function go(times) {
    // Record the trend after every step for small batches, in ten steps for big ones.
    const steps = times <= 10 ? times : 10;
    let t = tally;
    /** @type {Array<{ total: number, share: number }>} */
    const points = [];
    let lastOne = last;
    for (let i = 0; i < steps; i++) {
      const size = Math.round(times / steps);
      const r = run(system, t, size, rand);
      t = r.tally;
      lastOne = r.last;
      points.push({ total: t.cai + t.duc, share: maleShare(t) });
    }
    tally = t;
    last = lastOne;
    history = [...history, ...points].slice(-400);
  }

  const W = 300;
  const H = 120;
  const maxTotal = $derived(Math.max(10, total));
  /** x by number of fertilizations on a square-root scale, so the early swings show. @param {number} n */
  const xOf = (n) => 30 + (W - 40) * Math.sqrt(n / maxTotal);
  /** @param {number} s */
  const yOf = (s) => 10 + (H - 30) * (1 - s);
  const line = $derived(history.map((p) => `${xOf(p.total)},${yOf(p.share)}`).join(' '));

  /** @param {string} c */
  const chip = (c) => (c === 'Y' ? 'bg-sky-600 text-white' : 'bg-rose-500 text-white');
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Loài"
    options={SYSTEMS.map((s) => ({ value: s.id, label: s.label }))}
    value={systemId}
    onchange={chooseSystem}
  />

  <div class="grid gap-3 sm:grid-cols-2">
    {#each parentsList as { sex, pair } (sex)}
      <div class="rounded-xl border border-slate-200 bg-white p-3 text-sm">
        <p class="font-semibold text-slate-800">
          {sex === 'cai' ? '♀' : '♂'}
          {system.parents[sex]}: {pair.join('')}
        </p>
        <p class="mt-1 text-slate-600">
          {gameteKinds(pair).length === 1 ? 'Một loại giao tử:' : 'Hai loại giao tử ngang nhau:'}
          {#each gameteKinds(pair) as g, i (g.chromosome)}
            {i ? ' và ' : ''}<span class="rounded px-1.5 font-bold {chip(g.chromosome)}"
              >{g.chromosome}</span
            >
            ({formatNumber(g.share * 100, 0)}%)
          {/each}
        </p>
      </div>
    {/each}
  </div>

  <div class="flex flex-wrap gap-2">
    {#each [1, 10, 100, 1000] as k (k)}
      <button type="button" class={button.primary} onclick={() => go(k)}>
        Thụ tinh {fmt(k)} lần
      </button>
    {/each}
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  {#if last}
    <p class="flex flex-wrap items-center gap-2 text-sm" aria-live="polite">
      Lần gần nhất: trứng
      <span class="rounded px-2 font-bold {chip(last.egg)}">{last.egg}</span>
      + tinh trùng
      <span class="rounded px-2 font-bold {chip(last.sperm)}">{last.sperm}</span>
      → hợp tử <strong>{last.zygote}</strong> → {system.names[last.sex]}
    </p>
  {/if}

  <div>
    <div class="flex h-8 overflow-hidden rounded-lg bg-slate-100" aria-hidden="true">
      {#if total}
        <div
          class="flex items-center justify-center bg-sky-600 text-xs font-bold text-white"
          style="width:{share * 100}%"
        >
          {share > 0.12 ? fmt(tally.duc) : ''}
        </div>
        <div
          class="flex items-center justify-center bg-rose-500 text-xs font-bold text-white"
          style="width:{(1 - share) * 100}%"
        >
          {share < 0.88 ? fmt(tally.cai) : ''}
        </div>
      {/if}
    </div>
    <p class="mt-1 flex justify-between text-xs text-slate-600">
      <span>{system.names.duc}</span><span>đực : cái = {ratioText(tally)}</span><span
        >{system.names.cai}</span
      >
    </p>
  </div>

  <figure>
    <svg
      viewBox="0 0 {W} {H}"
      class="h-auto w-full max-w-lg"
      role="img"
      aria-label="Tỉ lệ phần trăm {system.names.duc} theo số lần thụ tinh"
    >
      <line
        x1="30"
        x2={W - 10}
        y1={yOf(0.5)}
        y2={yOf(0.5)}
        stroke="#6366f1"
        stroke-dasharray="4 4"
      />
      <line x1="30" x2="30" y1="10" y2={H - 20} stroke="#94a3b8" />
      <line x1="30" x2={W - 10} y1={H - 20} y2={H - 20} stroke="#94a3b8" />
      {#each [0, 0.5, 1] as s (s)}
        <text x="26" y={yOf(s) + 4} text-anchor="end" font-size="9" fill="#475569">{s * 100}%</text>
      {/each}
      <text x={W - 10} y={H - 6} text-anchor="end" font-size="9" fill="#475569"
        >{fmt(total)} lần</text
      >
      <text x="34" y={H - 6} font-size="9" fill="#475569">0</text>
      {#if history.length > 1}
        <polyline points={line} fill="none" stroke="#0284c7" stroke-width="2" />
      {/if}
    </svg>
    <figcaption class="text-xs text-slate-600">
      Đường xanh: tỉ lệ {system.names.duc} sau mỗi lần; đường đứt nét: 50%.
    </figcaption>
  </figure>

  <FeedbackNote
    tone={total >= 1000 && Math.abs(share - 0.5) <= 0.03 ? 'ok' : 'info'}
    text={tallyText(system, tally)}
  />
</div>

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { niceAxis } from '#lib/stats-engine/ticks.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import {
    PYRAMID_LABELS,
    ageShares,
    curve,
    doublingTime,
    exponential,
    growthSpeed,
    inflection,
    logistic,
    pyramidShape,
  } from './population.js';

  /**
   * Population charts in two kinds.
   *
   * `kind="growth"`: population size over time. The J curve (exponential
   * growth, unlimited resources) and the S curve (logistic growth up to the
   * carrying capacity K, dashed line) can be shown alone or together.
   * Sliders set N₀, r, K and the time t; the readout gives N(t), the growth
   * speed at t, the doubling time of the J curve and when the S curve grows
   * fastest (at K/2).
   *
   * `kind="pyramid"`: an age pyramid of the three ecological age groups
   * (trước sinh sản, đang sinh sản, sau sinh sản). The − / + buttons change
   * each group and the readout names the shape: developing, stable or declining.
   *
   * - `model`: 'exponential', 'logistic' or 'both' (growth only).
   * - `n0`, `r`, `k`, `until` (bindable): curve parameters; `until` is the time span.
   * - `controls`: show the sliders and the model switch.
   * - `unit`: time unit in labels ('năm', 'giờ', ...).
   * - `groups` (bindable): pyramid group sizes.
   *
   * @type {{
   *   kind?: 'growth' | 'pyramid';
   *   model?: 'exponential' | 'logistic' | 'both';
   *   n0?: number;
   *   r?: number;
   *   k?: number;
   *   until?: number;
   *   controls?: boolean;
   *   unit?: string;
   *   groups?: { pre: number, reproductive: number, post: number };
   *   label?: string;
   * }}
   */
  let {
    kind = 'growth',
    model = $bindable('both'),
    n0 = $bindable(20),
    r = $bindable(0.5),
    k = $bindable(500),
    until = $bindable(20),
    controls = true,
    unit = 'năm',
    groups = $bindable({ pre: 45, reproductive: 40, post: 15 }),
    label = kind === 'growth' ? 'Đồ thị tăng trưởng quần thể' : 'Tháp tuổi',
  } = $props();

  const W = 480;
  const H = 280;
  const M = { left: 52, right: 16, top: 30, bottom: 40 };
  let t = $state(5);
  const tNow = $derived(Math.min(t, until));

  const showJ = $derived(model !== 'logistic');
  const showS = $derived(model !== 'exponential');
  const axis = $derived(
    niceAxis(
      0,
      Math.max(
        showS ? k * 1.25 : 0,
        showJ ? Math.min(exponential(n0, r, until), k * 2.5) : 0,
        n0 * 2,
      ),
    ),
  );
  const yMax = $derived(axis.max);
  const sx = $derived(linear(0, until, M.left, W - M.right).map);
  const sy = $derived(linear(0, yMax, H - M.bottom, M.top).map);
  const xTicks = $derived(niceAxis(0, until).ticks.filter((v) => v <= until));

  /** @param {Array<{ t: number, n: number }>} pts */
  function path(pts) {
    /** @type {string[]} */
    const out = [];
    let clipped = false;
    for (const p of pts) {
      if (clipped) break;
      let y = p.n;
      if (y > yMax) {
        y = yMax;
        clipped = true;
      }
      out.push(`${out.length ? 'L' : 'M'} ${sx(p.t).toFixed(1)} ${sy(y).toFixed(1)}`);
    }
    return out.join(' ');
  }

  const jPath = $derived(path(curve('exponential', { n0, r, until, steps: 120 })));
  const sPath = $derived(path(curve('logistic', { n0, r, k, until, steps: 120 })));
  const nJ = $derived(exponential(n0, r, tNow));
  const nS = $derived(logistic(n0, r, k, tNow));
  const turn = $derived(inflection(n0, r, k));

  /** @param {number} v */
  const fmt = (v) => (v >= 1e6 ? `${formatNumber(v / 1e6, 2)} triệu` : formatNumber(Math.round(v)));

  const MODELS = [
    { value: 'exponential', label: 'Chữ J' },
    { value: 'logistic', label: 'Chữ S' },
    { value: 'both', label: 'Cả hai' },
  ];

  // Age pyramid.
  const shares = $derived(ageShares(groups));
  const shape = $derived(pyramidShape(groups));
  const GROUPS = /** @type {const} */ ([
    { key: 'post', name: 'Sau sinh sản', color: '#94a3b8' },
    { key: 'reproductive', name: 'Đang sinh sản', color: '#1B998B' },
    { key: 'pre', name: 'Trước sinh sản', color: '#E9B10A' },
  ]);
  /** @param {'pre' | 'reproductive' | 'post'} key @param {number} delta */
  function change(key, delta) {
    groups = { ...groups, [key]: Math.max(0, Math.min(100, groups[key] + delta)) };
  }
  const stepBtn = `inline-flex size-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 ${focusRing}`;
</script>

{#if kind === 'growth'}
  <figure class="space-y-4" aria-label={label}>
    {#if controls}
      <SegmentedControl label="Kiểu tăng trưởng" options={MODELS} bind:value={model} />
    {/if}
    <svg
      viewBox="0 0 {W} {H}"
      class="mx-auto block w-full max-w-xl"
      role="img"
      aria-label="{label}. {showJ
        ? `Đường J: N bằng ${fmt(nJ)} lúc t = ${formatNumber(tNow)}.`
        : ''} {showS ? `Đường S: N bằng ${fmt(nS)}, sức chứa K = ${fmt(k)}.` : ''}"
    >
      {#each axis.ticks as v (v)}
        <line x1={M.left} x2={W - M.right} y1={sy(v)} y2={sy(v)} stroke="#e2e8f0" />
        <text x={M.left - 6} y={sy(v) + 4} font-size="11" text-anchor="end" fill="#64748b"
          >{fmt(v)}</text
        >
      {/each}
      {#each xTicks as v (v)}
        <text x={sx(v)} y={H - M.bottom + 16} font-size="11" text-anchor="middle" fill="#64748b"
          >{formatNumber(v)}</text
        >
      {/each}
      <line x1={M.left} x2={W - M.right} y1={H - M.bottom} y2={H - M.bottom} stroke="#334155" />
      <line x1={M.left} x2={M.left} y1={M.top} y2={H - M.bottom} stroke="#334155" />
      <text
        x={(M.left + W - M.right) / 2}
        y={H - 6}
        font-size="12"
        text-anchor="middle"
        fill="#334155">Thời gian ({unit})</text
      >
      <text x={M.left} y="14" font-size="12" text-anchor="middle" fill="#334155">N</text>
      {#if showS}
        <line
          x1={M.left}
          x2={W - M.right}
          y1={sy(k)}
          y2={sy(k)}
          stroke="#D7263D"
          stroke-width="1.5"
          stroke-dasharray="6 4"
        />
        <text x={W - M.right - 4} y={sy(k) - 6} font-size="12" text-anchor="end" fill="#D7263D"
          >K = {fmt(k)}</text
        >
        <path d={sPath} fill="none" stroke="#1B998B" stroke-width="3" />
        <circle cx={sx(tNow)} cy={sy(nS)} r="6" fill="#1B998B" stroke="#fff" stroke-width="2" />
      {/if}
      {#if showJ}
        <path
          d={jPath}
          fill="none"
          stroke="#4F46E5"
          stroke-width="3"
          stroke-dasharray={showS ? '8 4' : undefined}
        />
        {#if nJ <= yMax}
          <circle cx={sx(tNow)} cy={sy(nJ)} r="6" fill="#4F46E5" stroke="#fff" stroke-width="2" />
        {/if}
      {/if}
      <line
        x1={sx(tNow)}
        x2={sx(tNow)}
        y1={M.top}
        y2={H - M.bottom}
        stroke="#94a3b8"
        stroke-dasharray="3 3"
      />
    </svg>

    <SliderField
      label="Thời điểm t"
      bind:value={t}
      min={0}
      max={until}
      step={until / 100}
      format={(v) => `${formatNumber(v, 1)} ${unit}`}
    />
    {#if controls}
      <div class="grid gap-3 sm:grid-cols-3">
        <SliderField
          label="Số cá thể ban đầu N₀"
          bind:value={n0}
          min={2}
          max={Math.max(2, Math.round(k / 2))}
          step={1}
        />
        <SliderField
          label="Tốc độ tăng trưởng r"
          bind:value={r}
          min={0.05}
          max={1.5}
          step={0.05}
          format={(v) => formatNumber(v, 2)}
        />
        {#if showS}
          <SliderField label="Sức chứa K" bind:value={k} min={100} max={2000} step={50} />
        {/if}
      </div>
    {/if}

    <dl
      class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-slate-50 p-4 text-sm"
      aria-live="polite"
    >
      {#if showJ}
        <dt class="font-semibold text-indigo-700">Đường cong J</dt>
        <dd class="tabular-nums">
          N = {fmt(nJ)}, tăng {fmt(growthSpeed(nJ, r))} cá thể/{unit}; cứ khoảng {formatNumber(
            doublingTime(r),
            1,
          )}
          {unit} số lượng tăng gấp đôi.
        </dd>
      {/if}
      {#if showS}
        <dt class="font-semibold text-teal-700">Đường cong S</dt>
        <dd class="tabular-nums">
          N = {fmt(nS)} ({formatNumber((nS / k) * 100, 1)}% sức chứa), tăng {fmt(
            growthSpeed(nS, r, k),
          )} cá thể/{unit}; tăng nhanh nhất khi N = K/2 = {fmt(turn.n)}, lúc t ≈ {formatNumber(
            turn.t,
            1,
          )}
          {unit}.
        </dd>
      {/if}
    </dl>
  </figure>
{:else}
  <figure class="space-y-4" aria-label={label}>
    <div class="space-y-2">
      {#each GROUPS as g (g.key)}
        <div class="grid grid-cols-[7.5rem_1fr_auto] items-center gap-2">
          <span class="text-sm font-semibold text-slate-700">{g.name}</span>
          <div class="flex h-10 justify-center rounded bg-slate-50">
            <div
              class="h-full rounded"
              style="width: {Math.max(shares[g.key], 1)}%; background-color: {g.color}"
              aria-hidden="true"
            ></div>
          </div>
          <span class="flex items-center gap-1">
            <button
              type="button"
              class={stepBtn}
              aria-label="Giảm nhóm {g.name.toLowerCase()}"
              disabled={groups[g.key] <= 0}
              onclick={() => change(g.key, -5)}>−</button
            >
            <span class="w-12 text-center text-sm tabular-nums"
              >{formatNumber(shares[g.key], 0)}%</span
            >
            <button
              type="button"
              class={stepBtn}
              aria-label="Tăng nhóm {g.name.toLowerCase()}"
              disabled={groups[g.key] >= 100}
              onclick={() => change(g.key, 5)}>+</button
            >
          </span>
        </div>
      {/each}
    </div>
    <p class="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
      <strong>{PYRAMID_LABELS[shape]}</strong>:
      {shape === 'developing'
        ? 'nhóm trước sinh sản đông, đáy tháp rộng; quần thể đang tăng số lượng.'
        : shape === 'stable'
          ? 'nhóm trước sinh sản xấp xỉ nhóm đang sinh sản; số lượng quần thể ổn định.'
          : 'nhóm trước sinh sản ít hơn nhóm đang sinh sản, đáy tháp hẹp; quần thể có xu hướng giảm.'}
    </p>
  </figure>
{/if}

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { SOIL_NAME, budget, explain, pointAt } from './engine.js';

  let humidity = $state(60);
  let light = $state('sang');
  /** @type {import('./engine.js').Soil} */
  let soil = $state('am');
  let playing = $state(true);
  let phase = $state(0);
  let sugarPhase = $state(0);
  let reduced = $state(false);

  const weather = $derived({ humidity, light: light === 'sang', soil });
  const b = $derived(budget(weather));
  const text = $derived(explain(weather));

  const WATER = [
    { x: 40, y: 262 },
    { x: 92, y: 258 },
    { x: 128, y: 246 },
    { x: 152, y: 236 },
    { x: 160, y: 205 },
    { x: 160, y: 95 },
    { x: 205, y: 84 },
    { x: 268, y: 74 },
    { x: 288, y: 50 },
    { x: 312, y: 20 },
  ];
  const SUGAR = [
    { x: 240, y: 86 },
    { x: 172, y: 104 },
    { x: 172, y: 236 },
    { x: 172, y: 262 },
  ];
  const N = 12;

  const STAGES = [
    { x: 92, y: 274, t: 'lông hút' },
    { x: 124, y: 228, t: 'vỏ rễ' },
    { x: 108, y: 150, t: 'mạch gỗ' },
    { x: 196, y: 150, t: 'mạch rây' },
    { x: 225, y: 124, t: 'lá' },
    { x: 300, y: 104, t: 'khí khổng' },
  ];

  $effect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced = mq.matches;
    const on = () => (reduced = mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  });

  $effect(() => {
    if (!playing || reduced) return;
    const speed = b.uptake;
    const sugar = b.sugar;
    let last = performance.now();
    let id = requestAnimationFrame(function step(now) {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      phase = (phase + dt * 0.12 * speed) % 1;
      sugarPhase = (sugarPhase + dt * 0.08 * sugar) % 1;
      id = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(id);
  });

  const drops = $derived(Array.from({ length: N }, (_, i) => pointAt(WATER, (phase + i / N) % 1)));
  const sugars = $derived(
    Array.from({ length: 6 }, (_, i) => pointAt(SUGAR, (sugarPhase + i / 6) % 1)),
  );
  /** @param {number} x */
  const pct = (x) => Math.round(Math.min(1, x) * 100);
  const leafColor = $derived(b.wilting ? '#a3a33a' : '#22c55e');
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Độ ẩm không khí"
      bind:value={humidity}
      min={10}
      max={100}
      step={5}
      unit="%"
    />
    <SegmentedControl
      label="Ánh sáng"
      options={[
        { value: 'sang', label: 'Ban ngày' },
        { value: 'toi', label: 'Ban đêm' },
      ]}
      bind:value={light}
    />
  </div>
  <SegmentedControl
    label="Đất trồng"
    options={[
      { value: 'am', label: 'Ẩm, tơi xốp' },
      { value: 'kho', label: 'Khô hạn' },
      { value: 'ngap', label: 'Ngập úng' },
    ]}
    bind:value={soil}
  />

  <svg
    viewBox="0 0 340 290"
    class="block w-full"
    role="img"
    aria-label="Cây trong {SOIL_NAME[
      soil
    ]}, độ ẩm không khí {humidity}%: dòng nước đi từ lông hút qua vỏ rễ, mạch gỗ lên lá rồi thoát ra qua khí khổng với tốc độ {pct(
      b.uptake,
    )}% mức tối đa"
  >
    <rect x="0" y="0" width="340" height="220" fill={weather.light ? '#e0f2fe' : '#1e293b'} />
    <rect
      x="0"
      y="220"
      width="340"
      height="70"
      fill={soil === 'kho' ? '#d6b98c' : soil === 'ngap' ? '#64748b' : '#92400e'}
    />
    {#if soil === 'ngap'}
      <rect x="0" y="212" width="340" height="14" fill="#38bdf8" opacity="0.6" />
    {/if}
    <!-- roots -->
    <path
      d="M 166 220 L 166 262 M 166 236 L 128 250 M 166 244 L 206 262 M 128 250 L 92 258"
      stroke="#f5deb3"
      stroke-width="5"
      fill="none"
    />
    {#each [0, 1, 2, 3, 4] as k (k)}
      <line
        x1={96 + k * 8}
        y1={257 - k * 2}
        x2={94 + k * 8}
        y2={268 - k * 2}
        stroke="#fef3c7"
        stroke-width="1.5"
      />
    {/each}
    <!-- stem with xylem and phloem -->
    <rect x="152" y="80" width="28" height="142" rx="6" fill="#4ade80" />
    <rect x="156" y="80" width="8" height="160" fill="#bae6fd" />
    <rect x="168" y="80" width="8" height="160" fill="#fed7aa" />
    <!-- leaves -->
    <path
      d={b.wilting
        ? 'M 176 90 Q 236 52 290 72 Q 250 110 176 98 Z'
        : 'M 176 90 Q 230 40 300 62 Q 236 104 176 98 Z'}
      fill={leafColor}
      stroke="#15803d"
    />
    <path
      d={b.wilting
        ? 'M 156 100 Q 110 100 84 140 Q 124 130 156 108 Z'
        : 'M 156 100 Q 110 60 50 78 Q 104 118 156 108 Z'}
      fill={leafColor}
      stroke="#15803d"
    />
    <!-- stoma -->
    <ellipse cx="268" cy="74" rx="7" ry="4" fill="#14532d" />
    <ellipse cx="268" cy="74" rx={1 + 3 * b.aperture} ry="2.4" fill="#0f172a" />

    {#if reduced || !playing}
      <path
        d={WATER.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ')}
        stroke="#0284c7"
        stroke-width={1 + 4 * b.uptake}
        stroke-dasharray="6 5"
        fill="none"
        opacity={b.uptake > 0.02 ? 0.9 : 0.25}
      />
      <path
        d={SUGAR.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ')}
        stroke="#ea580c"
        stroke-width={1 + 3 * b.sugar}
        stroke-dasharray="4 4"
        fill="none"
        opacity={b.sugar > 0.02 ? 0.9 : 0.2}
      />
    {:else}
      {#each drops as d, i (i)}
        <circle
          cx={d.x}
          cy={d.y}
          r="3.4"
          fill="#0284c7"
          opacity={0.35 + 0.65 * Math.min(1, b.uptake * 2)}
        />
      {/each}
      {#each sugars as d, i (i)}
        <rect
          x={d.x - 2.5}
          y={d.y - 2.5}
          width="5"
          height="5"
          fill="#ea580c"
          opacity={b.sugar > 0.02 ? 1 : 0.2}
        />
      {/each}
    {/if}

    {#each STAGES as s (s.t)}
      <text
        x={s.x}
        y={s.y}
        font-size="10"
        text-anchor="middle"
        fill={s.y < 220 && !weather.light ? '#f8fafc' : '#0f172a'}
        font-weight="600">{s.t}</text
      >
    {/each}
    <text
      x="318"
      y="36"
      font-size="10"
      text-anchor="end"
      fill={weather.light ? '#0369a1' : '#bae6fd'}>hơi nước</text
    >
  </svg>

  <div class="grid gap-2 sm:grid-cols-3">
    {#each [{ k: 'Hút nước ở rễ', v: b.uptake, c: 'bg-sky-600' }, { k: 'Thoát hơi nước ở lá', v: b.transpiration, c: 'bg-cyan-500' }, { k: 'Chất hữu cơ trong mạch rây', v: b.sugar, c: 'bg-orange-500' }] as row (row.k)}
      <div>
        <p class="text-xs font-semibold text-slate-700">{row.k}: {pct(row.v)}%</p>
        <div
          class="h-3 overflow-hidden rounded-full bg-slate-200"
          role="meter"
          aria-label={row.k}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={pct(row.v)}
        >
          <div
            class="h-full rounded-full {row.c} motion-safe:transition-[width]"
            style="width: {pct(row.v)}%"
          ></div>
        </div>
      </div>
    {/each}
  </div>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {b.wilting || soil === 'ngap'
      ? 'bg-red-50 text-red-900'
      : 'bg-amber-50 text-amber-950'}"
    aria-live="polite"
  >
    {text}
  </p>
  {#if !reduced}
    <button type="button" class={button.quiet} onclick={() => (playing = !playing)}
      >{playing ? 'Dừng hoạt hình' : 'Chạy hoạt hình'}</button
    >
  {/if}
</div>

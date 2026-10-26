<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { ACTIVITIES, eat, emptyCell, minute } from './engine.js';

  let cell = $state(eat(emptyCell()));
  /** @type {import('./engine.js').Activity} */
  let activity = $state('di-bo');
  let oxygen = $state('co');
  let broken = $state(0);
  let tick = $state(0);
  let message = $state(
    'Chọn hoạt động, rồi bấm "Hoạt động 1 phút" để xem ti thể phân giải glucose.',
  );

  function run() {
    const r = minute(cell, activity, oxygen === 'co');
    cell = r.state;
    broken = r.broken;
    message = r.text;
    tick += 1;
  }

  function feed() {
    cell = eat(cell);
    broken = 0;
    message = 'Em vừa ăn: chất dinh dưỡng được tiêu hoá, glucose theo máu đến tế bào.';
  }

  function reset() {
    cell = eat(emptyCell());
    broken = 0;
    tick = 0;
    message = 'Đã làm lại từ đầu.';
  }

  const IN = [
    { key: 'glucose', label: 'Glucose', color: '#a16207', y: 70 },
    { key: 'oxygen', label: 'Oxygen', color: '#dc2626', y: 130 },
  ];
  const OUT = [
    { key: 'co2', label: 'Carbon dioxide', color: '#475569', y: 46 },
    { key: 'water', label: 'Nước', color: '#0284c7', y: 88 },
    { key: 'atp', label: 'ATP', color: '#7c3aed', y: 130 },
    { key: 'heat', label: 'Nhiệt', color: '#ea580c', y: 172 },
  ];
  const outCount = (/** @type {string} */ k) =>
    k === 'co2' ? cell.co2 : k === 'water' ? cell.water : k === 'atp' ? cell.atp : cell.heat;
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl
      label="Hoạt động"
      options={Object.entries(ACTIVITIES).map(([value, a]) => ({ value, label: a.label }))}
      bind:value={activity}
    />
    <SegmentedControl
      label="Oxygen đến tế bào"
      options={[
        { value: 'co', label: 'Có' },
        { value: 'khong', label: 'Không' },
      ]}
      bind:value={oxygen}
    />
  </div>

  <svg
    viewBox="0 0 360 210"
    class="block w-full"
    role="img"
    aria-label="Ti thể: glucose còn {cell.glucose} phần; đã dùng {cell.oxygen} phần oxygen; đã thải {cell.co2} phần carbon dioxide và nước; năng lượng ATP {cell.atp} phần, nhiệt {cell.heat} phần"
  >
    <rect width="360" height="210" rx="12" fill="#fff7ed" />
    <text x="12" y="20" font-size="10" fill="#9a3412">Tế bào chất</text>
    <!-- mitochondrion -->
    <ellipse cx="180" cy="110" rx="78" ry="48" fill="#fdba74" stroke="#9a3412" stroke-width="3" />
    <path
      d="M 116 110 q 10 -34 20 0 q 10 34 20 0 q 10 -34 20 0 q 10 34 20 0 q 10 -34 20 0 q 10 34 20 0"
      fill="none"
      stroke="#9a3412"
      stroke-width="2.5"
    />
    <text x="180" y="176" font-size="11" font-weight="700" text-anchor="middle" fill="#7c2d12"
      >Ti thể</text
    >

    {#each IN as a (a.key)}
      <line x1="12" y1={a.y} x2="100" y2={a.y} stroke={a.color} stroke-width="3" />
      <path d="M 100 {a.y - 6} L 110 {a.y} L 100 {a.y + 6} z" fill={a.color} />
      <text x="14" y={a.y - 8} font-size="11" font-weight="700" fill={a.color}
        >{a.key === 'glucose'
          ? `Glucose còn: ${cell.glucose}`
          : `Oxygen đã dùng: ${cell.oxygen}`}</text
      >
    {/each}
    {#each OUT as o (o.key)}
      <line x1="252" y1="110" x2="332" y2={o.y} stroke={o.color} stroke-width="3" />
      <circle cx="336" cy={o.y} r="4" fill={o.color} />
      <text x="342" y={o.y - 8} font-size="11" font-weight="700" text-anchor="end" fill={o.color}
        >{o.label}: {outCount(o.key)}</text
      >
    {/each}

    {#if broken > 0}
      {#key tick}
        {#each Array.from({ length: broken }, (_, i) => i) as i (i)}
          <circle
            class="vao"
            cx="20"
            cy="70"
            r="5"
            fill="#a16207"
            style="animation-delay: {i * 120}ms"
          />
          <circle
            class="ra"
            cx="252"
            cy="110"
            r="5"
            fill="#7c3aed"
            style="animation-delay: {i * 120}ms"
          />
        {/each}
      {/key}
    {/if}
  </svg>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {broken > 0
      ? 'bg-emerald-50 text-emerald-900'
      : 'bg-amber-50 text-amber-950'}"
    aria-live="polite"
  >
    {message}
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={run}>Hoạt động 1 phút</button>
    <button type="button" class={button.secondary} onclick={feed}>Ăn một bữa</button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
  <p class="text-xs text-slate-600">
    Số đếm theo "phần" chỉ để so sánh, không phải số phân tử thật. Năng lượng giải phóng một phần
    được tích luỹ trong ATP để tế bào sử dụng, phần còn lại toả ra dưới dạng nhiệt.
  </p>
</div>

<style>
  .vao {
    animation: vao 0.8s ease-in both;
  }
  .ra {
    animation: ra 0.8s ease-out both;
  }
  @keyframes vao {
    from {
      transform: translate(0, 0);
      opacity: 1;
    }
    to {
      transform: translate(150px, 40px);
      opacity: 0;
    }
  }
  @keyframes ra {
    from {
      transform: translate(0, 0);
      opacity: 1;
    }
    to {
      transform: translate(80px, 20px);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .vao,
    .ra {
      animation: none;
      opacity: 0;
    }
  }
</style>

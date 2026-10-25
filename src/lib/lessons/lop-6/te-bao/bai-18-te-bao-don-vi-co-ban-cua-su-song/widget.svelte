<script>
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import {
    CELLS,
    CLEAR_UM,
    EYE_LIMIT_UM,
    STOPS,
    firstClearStop,
    formatLength,
    logPosition,
    toolFor,
    viewState,
  } from './engine.js';

  let stop = $state(0);
  let cellId = $state('trung-ca');

  const mag = $derived(STOPS[stop]);
  const tool = $derived(toolFor(mag));
  const cell = $derived(CELLS.find((c) => c.id === cellId) ?? CELLS[0]);
  const seen = $derived(viewState(cell.size, mag));
  // Clear and still small enough to fit in about four fields of view.
  const clearList = $derived(
    CELLS.filter((c) => viewState(c.size, mag) === 'clear' && c.size * mag <= 40000),
  );

  // The field of view stands for 10 mm of image: 1 mm of image is 32 px.
  const W = 320;
  const H = 180;
  const PX_PER_MM = W / 10;
  const cx = W / 2;
  const cy = H / 2;
  /** Longest side of the drawn cell, in px. */
  const px = $derived(((cell.size * mag) / 1000) * PX_PER_MM);
  const huge = $derived(px > W * 4);

  const STATE_TEXT = {
    hidden: 'không nhìn thấy: ảnh nhỏ hơn 0,1 mm',
    dot: 'chỉ hiện như một chấm nhỏ, chưa thấy rõ hình dạng',
    clear: 'đã thấy rõ hình dạng',
  };

  /** Hexagon-like outline of a flat cheek cell. */
  const flatPath = $derived.by(() => {
    const r = px / 2;
    const k = [1, 0.86, 0.95, 0.8, 1, 0.9];
    return (
      k
        .map((f, i) => {
          const a = (Math.PI / 3) * i + 0.3;
          return `${i ? 'L' : 'M'} ${cx + r * f * Math.cos(a)} ${cy + r * f * Math.sin(a)}`;
        })
        .join(' ') + ' Z'
    );
  });

  // Logarithmic ruler from 1 µm to 1 cm.
  const RW = 340;
  const R0 = 14;
  const R1 = RW - 14;
  /** @param {number} um */
  const rx = (um) => R0 + logPosition(um) * (R1 - R0);
  const TICKS = [
    { v: 1, label: '1 µm' },
    { v: 10, label: '10 µm' },
    { v: 100, label: '100 µm' },
    { v: 1000, label: '1 mm' },
    { v: 10000, label: '1 cm' },
  ];
  const dotFrom = $derived(rx(EYE_LIMIT_UM / mag));
  const clearFrom = $derived(rx(CLEAR_UM / mag));
</script>

<div class="space-y-4">
  <SliderField
    label="Độ phóng đại"
    bind:value={stop}
    min={0}
    max={STOPS.length - 1}
    format={(i) => `${STOPS[i]} lần`}
  />
  <p class="text-sm text-slate-700">
    Dụng cụ: <strong class="text-indigo-800">{tool}</strong>
    {#if mag > 1}(phóng to {mag} lần){/if}
  </p>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn loại tế bào">
    {#each CELLS as c (c.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 text-sm font-semibold {cellId === c.id
          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} {focusRing}"
        aria-pressed={cellId === c.id}
        onclick={() => (cellId = c.id)}>{c.name}</button
      >
    {/each}
  </div>

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl border border-slate-300 bg-slate-50"
    role="img"
    aria-label="Trường nhìn: {cell.name} ở độ phóng đại {mag} lần, {STATE_TEXT[seen]}"
  >
    <defs>
      <clipPath id="truong-nhin-18">
        <rect x="0" y="0" width={W} height={H} rx="12" />
      </clipPath>
    </defs>
    <g clip-path="url(#truong-nhin-18)">
      {#if huge}
        <rect x="0" y="0" width={W} height={H} fill="#fde68a" />
        <circle cx={cx + 40} cy={cy - 10} r="3" fill="#b45309" opacity="0.4" />
      {:else if seen === 'dot'}
        <circle {cx} {cy} r={Math.max(1.5, px / 2)} fill="#64748b" opacity="0.7" />
      {:else if seen === 'clear'}
        {#if cell.shape === 'rod'}
          <rect
            x={cx - px / 2}
            y={cy - px * 0.2}
            width={px}
            height={px * 0.4}
            rx={px * 0.2}
            fill="#bbf7d0"
            stroke="#15803d"
            stroke-width="2"
          />
        {:else if cell.shape === 'round'}
          <ellipse
            {cx}
            {cy}
            rx={px / 2}
            ry={px * 0.42}
            fill="#fef3c7"
            stroke="#a16207"
            stroke-width="2"
          />
          <circle cx={cx + px * 0.1} {cy} r={px * 0.12} fill="#a16207" opacity="0.6" />
        {:else if cell.shape === 'disc'}
          <circle {cx} {cy} r={px / 2} fill="#dc2626" />
          <circle {cx} {cy} r={px * 0.24} fill="#f87171" />
        {:else if cell.shape === 'flat'}
          <path d={flatPath} fill="#fce7f3" stroke="#be185d" stroke-width="2" />
          <circle {cx} {cy} r={px * 0.09} fill="#7c3aed" />
        {:else if cell.shape === 'box'}
          <rect
            x={cx - px / 2}
            y={cy - px * 0.15}
            width={px}
            height={px * 0.3}
            fill="#f0fdf4"
            stroke="#166534"
            stroke-width="3"
          />
          <ellipse
            cx={cx + px * 0.18}
            {cy}
            rx={px * 0.05}
            ry={px * 0.07}
            fill="#7c3aed"
            opacity="0.8"
          />
        {:else}
          <circle {cx} {cy} r={px / 2} fill="#fde68a" stroke="#b45309" stroke-width="2" />
          <circle cx={cx + px * 0.18} cy={cy - px * 0.12} r={px * 0.08} fill="#b45309" />
        {/if}
      {/if}
    </g>
    <line x1="16" x2={16 + PX_PER_MM} y1={H - 16} y2={H - 16} stroke="#0f172a" stroke-width="3" />
    <text x="16" y={H - 24} font-size="11" fill="#0f172a"
      >vạch này = {formatLength(1000 / mag)} ngoài thực tế</text
    >
  </svg>

  <div class="space-y-1 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
    <p>
      <strong>{cell.name}</strong> ({cell.note}) Ở {mag} lần, ảnh của nó dài {formatLength(
        cell.size * mag,
      )}:
      <span class={seen === 'clear' ? 'font-semibold text-emerald-800' : 'text-amber-800'}
        >{huge ? 'tế bào lớn hơn cả trường nhìn, chỉ thấy một phần' : STATE_TEXT[seen]}</span
      >.
    </p>
    {#if seen !== 'clear'}
      <p>
        Cần phóng to ít nhất {firstClearStop(cell.size)} lần ({toolFor(
          firstClearStop(cell.size) ?? 1,
        ).toLowerCase()}) để thấy rõ tế bào này.
      </p>
    {/if}
    <p>
      Thấy rõ cả tế bào ở độ phóng đại này: {clearList.length
        ? clearList.map((c) => c.name.toLowerCase()).join(', ')
        : 'chưa có tế bào nào'}.
    </p>
  </div>

  <svg
    viewBox="0 0 {RW} 100"
    class="block w-full"
    role="img"
    aria-label="Thước kích thước chia theo luỹ thừa của 10, từ 1 micromet đến 1 centimet, cho thấy vùng nhìn rõ ở độ phóng đại {mag} lần"
  >
    <rect x={R0} y="34" width={Math.max(0, dotFrom - R0)} height="14" fill="#e2e8f0" />
    <rect
      x={Math.min(R1, dotFrom)}
      y="34"
      width={Math.max(0, Math.min(R1, clearFrom) - Math.min(R1, dotFrom))}
      height="14"
      fill="#fef3c7"
    />
    <rect
      x={Math.min(R1, clearFrom)}
      y="34"
      width={Math.max(0, R1 - clearFrom)}
      height="14"
      fill="#dcfce7"
    />
    {#each TICKS as t (t.v)}
      <line x1={rx(t.v)} x2={rx(t.v)} y1="48" y2="54" stroke="#64748b" />
      <text x={rx(t.v)} y="66" font-size="9" text-anchor="middle" fill="#64748b">{t.label}</text>
    {/each}
    {#each CELLS as c, i (c.id)}
      <circle
        cx={rx(c.size)}
        cy="41"
        r={c.id === cellId ? 6 : 4}
        fill={c.id === cellId ? '#4f46e5' : '#0f172a'}
      />
      <text
        x={rx(c.size)}
        y={i % 2 ? 84 : 24}
        font-size="9"
        font-weight="700"
        text-anchor="middle"
        fill={c.id === cellId ? '#4f46e5' : '#334155'}>{i + 1}</text
      >
    {/each}
    <text x={R0} y="98" font-size="9" fill="#475569">xám: không thấy · vàng: chấm · xanh: rõ</text>
  </svg>
  <ol class="grid gap-x-4 text-xs text-slate-600 sm:grid-cols-2">
    {#each CELLS as c, i (c.id)}
      <li>{i + 1}. {c.name}: khoảng {formatLength(c.size)}</li>
    {/each}
  </ol>
</div>

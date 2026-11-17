<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, tidy } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { barShare, pyramid } from './engine.js';

  const W = 340;
  const ROW = 40;
  const BAR = 26;
  const COLORS = ['#16a34a', '#84cc16', '#eab308', '#f97316', '#ef4444', '#a855f7'];

  let start = $state(10000);
  let percent = $state(10);
  let levels = $state(4);
  let scale = $state(/** @type {'linear' | 'log'} */ ('log'));

  const rows = $derived(pyramid(start, percent, levels));
  const top = $derived(rows[rows.length - 1]);
  const H = $derived(levels * ROW + 8);

  /** @param {number} v */
  const energyText = (v) => formatNumber(tidy(v), v < 1 ? 4 : 2);

  const text = $derived(
    `Hiệu suất sinh thái ${percent}%: mỗi bậc chỉ chuyển lên bậc trên ${percent}% năng lượng của nó, còn ${100 - percent}% mất đi qua hô hấp (toả nhiệt), chất thải, phần rơi rụng hoặc không được ăn. ${top.name} (bậc dinh dưỡng cấp ${top.level}) chỉ nhận ${energyText(top.energy)} kcal/m²/năm, bằng ${formatNumber(tidy(top.share), 4)}% năng lượng của sinh vật sản xuất. Vì năng lượng giảm rất nhanh qua mỗi bậc, chuỗi thức ăn thường ngắn, ít khi dài quá 5 – 6 mắt xích.`,
  );
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-xl"
    role="img"
    aria-label="Tháp năng lượng {levels} bậc: {rows
      .map((r) => `bậc ${r.level} ${energyText(r.energy)} kcal/m²/năm`)
      .join('; ')}"
  >
    {#each rows as r (r.level)}
      {@const w = Math.max(3, (W - 20) * barShare(r.energy, start, scale))}
      {@const y = H - 4 - r.level * ROW + (ROW - BAR) / 2}
      <rect
        x={(W - w) / 2}
        {y}
        width={w}
        height={BAR}
        rx="4"
        fill={COLORS[r.level - 1]}
        opacity="0.85"
      />
      <text
        x={W / 2}
        y={y + BAR / 2 + 4}
        text-anchor="middle"
        font-size="12"
        font-weight="600"
        fill="#0f172a"
        stroke="white"
        stroke-width="3"
        paint-order="stroke"
      >
        Bậc {r.level}: {energyText(r.energy)} kcal/m²/năm
      </text>
    {/each}
  </svg>
  <p class="text-center text-xs text-slate-600">
    {scale === 'log'
      ? 'Thang logarit: mỗi bậc hẹp đi một khoảng như nhau khi năng lượng giảm cùng một tỉ lệ.'
      : 'Thang tuyến tính: chiều rộng tỉ lệ thuận với năng lượng; các bậc cao gần như biến mất.'}
  </p>

  <div class="grid gap-3 sm:grid-cols-3">
    <SliderField
      label="Năng lượng ở sinh vật sản xuất"
      bind:value={start}
      min={1000}
      max={20000}
      step={1000}
      unit="kcal/m²/năm"
    />
    <SliderField label="Hiệu suất sinh thái" bind:value={percent} min={5} max={20} unit="%" />
    <SliderField label="Số bậc dinh dưỡng" bind:value={levels} min={2} max={6} />
  </div>
  <SegmentedControl
    label="Thang vẽ"
    options={[
      { value: 'log', label: 'Logarit' },
      { value: 'linear', label: 'Tuyến tính' },
    ]}
    bind:value={scale}
  />

  <div class="overflow-x-auto">
    <table class="w-full text-sm tabular-nums">
      <caption class="mb-1 text-left font-semibold">Năng lượng qua các bậc dinh dưỡng</caption>
      <thead>
        <tr class="border-b border-slate-300 text-left">
          <th class="py-1 pr-2">Bậc</th>
          <th class="py-1 pr-2">Nhóm sinh vật</th>
          <th class="py-1 pr-2">Năng lượng</th>
          <th class="py-1">Mất đi khi chuyển lên</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as r (r.level)}
          <tr class="border-b border-slate-100">
            <td class="py-1 pr-2">{r.level}</td>
            <td class="py-1 pr-2">{r.name}</td>
            <td class="py-1 pr-2">{energyText(r.energy)}</td>
            <td class="py-1">{r.lost === null ? '–' : energyText(r.lost)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <FeedbackNote tone="info" {text} />
</div>

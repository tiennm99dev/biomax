<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { PRIMARY, PROTECT, SECONDARY, antibody, daysToProtect } from './engine.js';

  const DAYS = 70;

  let first = $state('vaccine');
  let again = $state(35);

  const contacts = $derived([0, again]);
  const LEFT = 36;
  const RIGHT = 330;
  const TOP = 16;
  const BOTTOM = 118;
  const x = linear(0, DAYS, LEFT, RIGHT).map;
  const y = linear(0, 120, BOTTOM, TOP).map;

  const line = $derived(
    Array.from({ length: DAYS * 2 + 1 }, (_, i) => {
      const t = i / 2;
      return `${x(t)},${y(antibody(t, contacts))}`;
    }).join(' '),
  );
  const firstDays = daysToProtect(PRIMARY);
  const secondDays = daysToProtect(SECONDARY);

  const note = $derived({
    tone: /** @type {'info'} */ ('info'),
    text:
      (first === 'vaccine'
        ? 'Tiêm vaccine: kháng nguyên đã mất khả năng gây bệnh, người không bị bệnh nhưng vẫn có đáp ứng nguyên phát và tạo tế bào nhớ. '
        : 'Nhiễm mầm bệnh lần đầu: đáp ứng nguyên phát chậm, mầm bệnh kịp nhân lên nên người thường bị bệnh. ') +
      `Ngày ${again}, gặp mầm bệnh thật: tế bào nhớ có sẵn tạo đáp ứng thứ phát nhanh và mạnh, người ít khi phát bệnh hoặc bệnh rất nhẹ.`,
  });
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Lần tiếp xúc đầu tiên (ngày 0)"
    value={first}
    options={[
      { value: 'vaccine', label: 'Tiêm vaccine' },
      { value: 'mam-benh', label: 'Nhiễm mầm bệnh' },
    ]}
    onchange={(v) => (first = String(v))}
  />
  <SliderField
    label="Ngày gặp lại mầm bệnh"
    bind:value={again}
    min={25}
    max={55}
    format={(v) => `ngày ${v}`}
  />

  <svg
    viewBox="0 0 340 140"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Nồng độ kháng thể theo ngày: đáp ứng lần đầu thấp và chậm, lần sau từ ngày {again} cao và nhanh"
  >
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
    <line
      x1={LEFT}
      y1={y(PROTECT)}
      x2={RIGHT}
      y2={y(PROTECT)}
      stroke="#16a34a"
      stroke-dasharray="4 3"
    />
    <text x={RIGHT} y={y(PROTECT) - 3} text-anchor="end" font-size="10" fill="#166534"
      >mức bảo vệ</text
    >
    {#each [0, again] as d, i (i)}
      <line x1={x(d)} y1={TOP} x2={x(d)} y2={BOTTOM} stroke="#f59e0b" stroke-dasharray="2 3" />
      <text x={x(d) + 3} y={TOP + 8} font-size="10" fill="#92400e"
        >{i === 0 ? (first === 'vaccine' ? 'vaccine' : 'mầm bệnh') : 'mầm bệnh'}</text
      >
    {/each}
    <polyline points={line} fill="none" stroke="#4f46e5" stroke-width="2.5" />
    <text x={LEFT - 4} y={TOP + 4} text-anchor="end" font-size="10" fill="#334155">120</text>
    <text x={LEFT - 4} y={BOTTOM + 4} text-anchor="end" font-size="10" fill="#334155">0</text>
    <text x={LEFT} y="132" font-size="10" fill="#334155">ngày 0</text>
    <text x={RIGHT} y="132" text-anchor="end" font-size="10" fill="#334155">ngày {DAYS}</text>
    <text x={LEFT + 4} y="10" font-size="10" fill="#334155">kháng thể (đơn vị mô hình)</text>
  </svg>

  <table class="w-full text-sm tabular-nums">
    <caption class="sr-only">So sánh hai đáp ứng</caption>
    <thead>
      <tr class="text-left">
        <th class="py-1"></th>
        <th class="py-1">Nguyên phát</th>
        <th class="py-1">Thứ phát</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-1">Đạt mức bảo vệ sau</td>
        <td>{formatNumber(firstDays)} ngày</td>
        <td>{formatNumber(secondDays)} ngày</td>
      </tr>
      <tr>
        <td class="py-1">Đỉnh kháng thể</td>
        <td>{PRIMARY.height}</td>
        <td>{SECONDARY.height}</td>
      </tr>
    </tbody>
  </table>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

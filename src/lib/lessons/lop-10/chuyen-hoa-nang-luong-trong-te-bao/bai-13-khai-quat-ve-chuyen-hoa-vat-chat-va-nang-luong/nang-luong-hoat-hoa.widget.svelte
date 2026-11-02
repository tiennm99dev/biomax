<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { PROFILE, ballOn, energyAt } from './engine.js';

  const W = 340;
  const H = 210;
  const LEFT = 34;
  const RIGHT = 12;
  const TOP = 12;
  const BOTTOM = 26;

  let mode = $state('plain');
  let given = $state(10);

  const barrier = $derived(mode === 'enzyme' ? PROFILE.withEnzyme : PROFILE.plain);
  const ball = $derived(ballOn(given, barrier));

  /** @param {number} x */
  const sx = (x) => LEFT + x * (W - LEFT - RIGHT);
  /** @param {number} e */
  const sy = (e) => H - BOTTOM - (e / PROFILE.top) * (H - TOP - BOTTOM);

  /** @param {number} b */
  const line = (b) =>
    pointsAttr(
      Array.from({ length: 61 }, (_, i) => {
        const x = i / 60;
        return { x: sx(x), y: sy(energyAt(x, b)) };
      }),
    );

  const note = $derived.by(() => {
    const what =
      mode === 'enzyme'
        ? `Có enzyme, năng lượng hoạt hoá chỉ còn ${PROFILE.withEnzyme} đơn vị`
        : `Không có enzyme, năng lượng hoạt hoá là ${PROFILE.plain} đơn vị`;
    return ball.crossed
      ? /** @type {const} */ ({
          tone: 'ok',
          text: `${what}. Cơ chất đã nhận đủ năng lượng nên vượt qua "đỉnh" và biến đổi thành sản phẩm.`,
        })
      : /** @type {const} */ ({
          tone: 'info',
          text: `${what}. Cơ chất mới nhận ${formatNumber(given, 0)} đơn vị, chưa đủ nên chưa phản ứng.`,
        });
  });
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Phản ứng"
    bind:value={mode}
    options={[
      { value: 'plain', label: 'Không có enzyme' },
      { value: 'enzyme', label: 'Có enzyme' },
    ]}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Đồ thị năng lượng của phản ứng: năng lượng hoạt hoá {barrier} đơn vị, cơ chất {ball.crossed
      ? 'đã thành sản phẩm'
      : 'chưa vượt được đỉnh'}"
  >
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={H - BOTTOM} stroke="#64748b" stroke-width="1.5" />
    <line
      x1={LEFT}
      y1={H - BOTTOM}
      x2={W - RIGHT}
      y2={H - BOTTOM}
      stroke="#64748b"
      stroke-width="1.5"
    />
    <text
      x="12"
      y={(H - BOTTOM + TOP) / 2}
      font-size="11"
      fill="#475569"
      text-anchor="middle"
      transform="rotate(-90 12 {(H - BOTTOM + TOP) / 2})">Năng lượng</text
    >
    <text x={(LEFT + W - RIGHT) / 2} y={H - 8} font-size="11" fill="#475569" text-anchor="middle"
      >Tiến trình phản ứng</text
    >

    <polyline
      points={line(mode === 'enzyme' ? PROFILE.plain : PROFILE.withEnzyme)}
      fill="none"
      stroke="#94a3b8"
      stroke-width="2"
      stroke-dasharray="5 4"
    />
    <polyline points={line(barrier)} fill="none" stroke="#4338ca" stroke-width="3" />

    <line
      x1={sx(0.5)}
      y1={sy(PROFILE.reactant)}
      x2={sx(0.5)}
      y2={sy(PROFILE.reactant + barrier)}
      stroke="#dc2626"
      stroke-width="2"
    />
    <line
      x1={sx(0)}
      y1={sy(PROFILE.reactant)}
      x2={sx(0.5)}
      y2={sy(PROFILE.reactant)}
      stroke="#dc2626"
      stroke-width="1"
      stroke-dasharray="3 3"
    />
    <text
      x={sx(0.5)}
      y={sy(PROFILE.reactant + barrier) - 6}
      text-anchor="middle"
      font-size="11"
      font-weight="600"
      fill="#b91c1c">Eₐ = {barrier}</text
    >
    <text x={sx(0)} y={sy(PROFILE.reactant) + 16} font-size="11" fill="#334155">Cơ chất</text>
    <text x={sx(1)} y={sy(PROFILE.product) + 16} font-size="11" fill="#334155" text-anchor="end"
      >Sản phẩm</text
    >

    <circle
      cx={sx(ball.x)}
      cy={sy(energyAt(ball.x, barrier))}
      r="8"
      fill={ball.crossed ? '#16a34a' : '#f59e0b'}
      stroke="#1e293b"
      stroke-width="1.5"
    />
  </svg>

  <SliderField
    label="Năng lượng cấp cho cơ chất"
    bind:value={given}
    min={0}
    max={70}
    step={1}
    unit="đơn vị"
    format={(v) => formatNumber(v, 0)}
  />

  <FeedbackNote tone={note.tone} text={note.text} />

  <p class="text-sm text-slate-700">
    Đường nét đứt là phản ứng ở trường hợp còn lại. Hiệu năng lượng giữa cơ chất và sản phẩm luôn là
    {PROFILE.reactant - PROFILE.product} đơn vị: enzyme chỉ hạ "đỉnh", không đổi kết quả của phản ứng.
  </p>
</div>

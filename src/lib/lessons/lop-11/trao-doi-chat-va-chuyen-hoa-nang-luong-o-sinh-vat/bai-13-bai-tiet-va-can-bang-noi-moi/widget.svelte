<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { EVENTS, HIGH, KIDNEY, LOW, SPAN, judge, simulate } from './engine.js';

  let start = $state(5);
  /** @type {import('./engine.js').EventId} */
  let event = $state('bua-an');
  let insulin = $state(true);
  let glucagon = $state(true);
  let minute = $state(60);

  const setup = $derived({ start, event, insulin, glucagon });
  const run = $derived(simulate(setup));
  const now = $derived(run[minute]);
  const note = $derived(judge(run, setup));

  const LEFT = 34;
  const RIGHT = 330;
  const TOP = 10;
  const BOTTOM = 110;
  const x = linear(0, SPAN, LEFT, RIGHT).map;
  const y = linear(0, 15, BOTTOM, TOP).map;
  const yh = linear(0, 6, 150, 122).map;

  const gLine = $derived(
    run
      .filter((_, i) => i % 3 === 0)
      .map((r) => `${x(r.t)},${y(r.g)}`)
      .join(' '),
  );
  const insLine = $derived(
    run
      .filter((_, i) => i % 3 === 0)
      .map((r) => `${x(r.t)},${yh(Math.min(6, r.ins))}`)
      .join(' '),
  );
  const gluLine = $derived(
    run
      .filter((_, i) => i % 3 === 0)
      .map((r) => `${x(r.t)},${yh(Math.min(6, r.glu))}`)
      .join(' '),
  );

  /** Which hormone is acting now. */
  const acting = $derived(
    now.ins > 0.2
      ? 'insulin'
      : now.glu > 0.2
        ? 'glucagon'
        : now.g > HIGH || now.g < LOW
          ? 'none'
          : 'rest',
  );

  const loop = $derived(
    acting === 'insulin'
      ? [
          'Tiếp nhận: tế bào tuyến tuỵ nhận biết glucose máu tăng.',
          'Điều khiển: tế bào β tuyến tuỵ tiết insulin.',
          'Thực hiện: tế bào nhận glucose; gan chuyển glucose thành glycogen.',
          'Liên hệ ngược: glucose máu giảm về bình thường, tuyến tuỵ giảm tiết insulin.',
        ]
      : acting === 'glucagon'
        ? [
            'Tiếp nhận: tế bào tuyến tuỵ nhận biết glucose máu giảm.',
            'Điều khiển: tế bào α tuyến tuỵ tiết glucagon.',
            'Thực hiện: gan phân giải glycogen thành glucose đưa vào máu.',
            'Liên hệ ngược: glucose máu tăng về bình thường, tuyến tuỵ giảm tiết glucagon.',
          ]
        : acting === 'none'
          ? [
              'Tiếp nhận: glucose máu lệch khỏi khoảng bình thường.',
              'Điều khiển: tuyến tuỵ không tiết được hormone cần thiết.',
              'Thực hiện: gan và tế bào không nhận được tín hiệu.',
              'Liên hệ ngược bị gián đoạn: cân bằng nội môi bị phá vỡ.',
            ]
          : [
              'Tiếp nhận: glucose máu trong khoảng bình thường.',
              'Điều khiển: tuyến tuỵ tiết rất ít insulin và glucagon.',
              'Thực hiện: gan và tế bào giữ nguyên hoạt động.',
              'Cân bằng động: glucose máu dao động nhỏ quanh mức ổn định.',
            ],
  );

  /** @param {string | number} v @returns {import('./engine.js').EventId} */
  const asEvent = (v) => EVENTS.find((e) => e.id === v)?.id ?? 'khong';
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Đường huyết lúc đầu"
      bind:value={start}
      min={2.5}
      max={12}
      step={0.5}
      unit="mmol/L"
      format={(v) => formatFixed(v, 1)}
    />
    <SegmentedControl
      label="Sau 15 phút"
      value={event}
      options={EVENTS.map((e) => ({ value: e.id, label: e.name }))}
      onchange={(v) => (event = asEvent(v))}
    />
  </div>
  <div class="flex flex-wrap gap-4 text-sm">
    <label class="inline-flex min-h-11 items-center gap-2">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={insulin} />
      Tế bào β tiết insulin
    </label>
    <label class="inline-flex min-h-11 items-center gap-2">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={glucagon} />
      Tế bào α tiết glucagon
    </label>
  </div>

  <svg
    viewBox="0 0 340 170"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Đường huyết theo thời gian trong {SPAN} phút; phút {minute}: {formatFixed(
      now.g,
      1,
    )} mmol/L"
  >
    <rect x={LEFT} y={y(HIGH)} width={RIGHT - LEFT} height={y(LOW) - y(HIGH)} fill="#dcfce7" />
    <line
      x1={LEFT}
      y1={y(KIDNEY)}
      x2={RIGHT}
      y2={y(KIDNEY)}
      stroke="#b45309"
      stroke-dasharray="5 4"
    />
    <text x={RIGHT} y={y(KIDNEY) - 3} text-anchor="end" font-size="10" fill="#92400e"
      >ngưỡng thận</text
    >
    <text x={RIGHT} y={y(HIGH) + 10} text-anchor="end" font-size="10" fill="#166534"
      >3,9–6,4 mmol/L</text
    >
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
    {#each [0, 5, 10, 15] as v (v)}
      <text x={LEFT - 4} y={y(v) + 4} text-anchor="end" font-size="10" fill="#334155">{v}</text>
    {/each}
    <polyline points={gLine} fill="none" stroke="#4f46e5" stroke-width="2.5" />
    <polyline points={insLine} fill="none" stroke="#0891b2" stroke-width="2" />
    <polyline
      points={gluLine}
      fill="none"
      stroke="#db2777"
      stroke-width="2"
      stroke-dasharray="4 3"
    />
    <line x1={LEFT} y1="150" x2={RIGHT} y2="150" stroke="#94a3b8" />
    <text x={LEFT + 2} y="121" font-size="10" fill="#0891b2">insulin</text>
    <text x={LEFT + 46} y="121" font-size="10" fill="#db2777">glucagon (nét đứt)</text>
    <line x1={x(minute)} y1={TOP} x2={x(minute)} y2="150" stroke="#f59e0b" stroke-width="1.5" />
    <circle cx={x(minute)} cy={y(now.g)} r="4" fill="#f59e0b" />
    <text x={LEFT} y="164" font-size="10" fill="#334155">0 phút</text>
    <text x={RIGHT} y="164" text-anchor="end" font-size="10" fill="#334155">{SPAN} phút</text>
  </svg>

  <SliderField
    label="Xem thời điểm"
    bind:value={minute}
    min={0}
    max={SPAN}
    step={5}
    format={(v) => `phút ${v}`}
  />

  <p class="text-sm tabular-nums" aria-live="polite">
    Phút {minute}: đường huyết {formatFixed(now.g, 1)} mmol/L.
    {acting === 'insulin'
      ? 'Insulin đang được tiết.'
      : acting === 'glucagon'
        ? 'Glucagon đang được tiết.'
        : ''}
    {now.urine > 0 ? 'Có glucose trong nước tiểu.' : ''}
  </p>

  <ol class="grid gap-2 text-sm sm:grid-cols-2">
    {#each loop as step, i (i)}
      <li
        class="rounded-lg border px-3 py-2 {acting === 'insulin'
          ? 'border-cyan-300 bg-cyan-50'
          : acting === 'glucagon'
            ? 'border-pink-300 bg-pink-50'
            : acting === 'none'
              ? 'border-amber-300 bg-amber-50'
              : 'border-slate-200 bg-white'}"
      >
        {step}
      </li>
    {/each}
  </ol>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

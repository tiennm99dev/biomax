<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { FILTRATE, WATER, kidney } from './engine.js';

  /** @type {import('./engine.js').WaterId} */
  let id = $state('binh-thuong');
  let adh = $state(true);

  const k = $derived(kidney(id, adh));
  /** Width of the urine stream, by litres a day. */
  const stream = $derived(2 + Math.min(14, k.urine));

  const note = $derived({
    tone: /** @type {'ok' | 'warn' | 'info'} */ (!adh ? 'warn' : 'info'),
    text: !adh
      ? `Không có ADH: ống lượn xa và ống góp tái hấp thụ rất ít nước, mỗi ngày thải khoảng ${formatNumber(k.urine)} L nước tiểu loãng, người luôn khát. Cân bằng nước bị phá vỡ.`
      : k.pressure === 'tăng'
        ? 'Áp suất thẩm thấu máu tăng: vùng dưới đồi tiết nhiều ADH, ống lượn xa và ống góp tăng tái hấp thụ nước, nước tiểu ít và đặc; đồng thời gây khát để uống bù nước. Áp suất thẩm thấu máu trở về bình thường.'
        : k.pressure === 'giảm'
          ? 'Áp suất thẩm thấu máu giảm: ADH được tiết ít, ống lượn xa và ống góp tái hấp thụ ít nước, nước tiểu nhiều và loãng, thải bớt nước thừa.'
          : 'Áp suất thẩm thấu máu bình thường: ADH tiết vừa phải, mỗi ngày khoảng $1{,}5$ L nước tiểu.',
  });

  /** @param {string | number} v @returns {import('./engine.js').WaterId} */
  const asId = (v) => WATER.find((w) => w.id === v)?.id ?? 'binh-thuong';
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Tình huống"
    value={id}
    options={WATER.map((w) => ({ value: w.id, label: w.name }))}
    onchange={(v) => (id = asId(v))}
  />
  <label class="inline-flex min-h-11 items-center gap-2 text-sm">
    <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={adh} />
    Cơ thể tiết được ADH
  </label>

  <svg
    viewBox="0 0 340 150"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Sơ đồ nephron: lọc {FILTRATE} lít mỗi ngày, ADH {k.adh}, còn {formatNumber(
      k.urine,
    )} lít nước tiểu"
  >
    <!-- glomerulus in Bowman's capsule -->
    <circle cx="44" cy="44" r="24" fill="#fee2e2" stroke="#b91c1c" />
    <circle cx="44" cy="44" r="12" fill="#ef4444" />
    <text x="44" y="82" text-anchor="middle" font-size="10" fill="#334155">cầu thận</text>
    <!-- tubule -->
    <path
      d="M 68 44 H 150 Q 170 44 170 64 V 110 Q 170 124 184 124 H 196 Q 210 124 210 110 V 50 Q 210 36 224 36 H 270"
      fill="none"
      stroke="#f59e0b"
      stroke-width="8"
      stroke-linecap="round"
    />
    <text x="110" y="34" text-anchor="middle" font-size="10" fill="#334155">ống thận</text>
    <!-- collecting duct -->
    <rect x="270" y="20" width="22" height="104" rx="6" fill="#fde68a" stroke="#b45309" />
    <text x="281" y="14" text-anchor="middle" font-size="10" fill="#334155">ống góp</text>
    <!-- ADH arrow -->
    {#if adh}
      <path d="M 320 30 L 296 52" stroke="#7c3aed" stroke-width="2.5" />
      <path d="M 296 52 l 9 -2 l -5 -7 z" fill="#7c3aed" />
      <text x="322" y="26" text-anchor="end" font-size="11" fill="#7c3aed">ADH {k.adh}</text>
    {/if}
    <!-- urine leaving -->
    <rect x={281 - stream / 2} y="124" width={stream} height="18" fill="#facc15" />
    <text x="262" y="144" text-anchor="end" font-size="11" fill="#334155"
      >nước tiểu {formatNumber(k.urine)} L/ngày</text
    >
    <text x="70" y="62" font-size="10" fill="#b91c1c">lọc {FILTRATE} L/ngày</text>
    <text x="120" y="140" text-anchor="middle" font-size="10" fill="#1d4ed8"
      >tái hấp thụ về máu</text
    >
  </svg>

  <table class="w-full text-sm tabular-nums" aria-live="polite">
    <caption class="sr-only">Phản ứng của cơ thể</caption>
    <tbody>
      <tr><td class="py-1">Áp suất thẩm thấu máu</td><td class="text-right">{k.pressure}</td></tr>
      <tr><td class="py-1">ADH</td><td class="text-right">{k.adh}</td></tr>
      <tr
        ><td class="py-1">Nước được tái hấp thụ</td><td class="text-right"
          >{formatNumber(k.reabsorbed, 1)} L ({formatNumber(k.percent, 1)}%)</td
        ></tr
      >
      <tr
        ><td class="py-1">Nước tiểu chính thức</td><td class="text-right"
          >{formatNumber(k.urine, 1)} L/ngày</td
        ></tr
      >
      <tr
        ><td class="py-1">Cảm giác khát</td><td class="text-right">{k.thirst ? 'có' : 'không'}</td
        ></tr
      >
    </tbody>
  </table>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

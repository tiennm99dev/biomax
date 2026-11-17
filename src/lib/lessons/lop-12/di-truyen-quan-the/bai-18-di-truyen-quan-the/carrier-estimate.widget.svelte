<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { fmt, formatNumber, numTex } from '#lib/core/number-format.js';
  import { PREVALENCES, carrierEstimate } from './engine.js';

  let n = $state(10000);
  const est = $derived(carrierEstimate(n));

  const note = $derived(
    `Tỉ lệ người bệnh $q^2 = \\dfrac{1}{${numTex(n)}}$, nên $q = ${numTex(est.q, 4)}$, $p = ${numTex(est.p, 4)}$. Tần số người dị hợp $2pq = ${numTex(est.carrierShare, 6)}$: trong ${fmt(n)} người có khoảng ${fmt(est.carriers)} người mang allele bệnh mà không biểu hiện, gấp ${fmt(est.carriers)} lần số người bệnh.`,
  );

  const W = 320;
  const L = 96;
  const R = 300;
  /** @param {number} c */
  const width = (c) => Math.max(2, (c / est.carriers) * (R - L));
</script>

<div class="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
  <p class="text-sm font-semibold text-slate-700">
    Ước tính số người mang allele gây bệnh lặn trong một quần thể cân bằng
  </p>
  <SegmentedControl
    label="Tỉ lệ người mắc bệnh (kiểu gene aa)"
    options={PREVALENCES.map((v) => ({ value: v, label: `1/${fmt(v)}` }))}
    value={n}
    onchange={(v) => (n = Number(v))}
  />
  <svg
    viewBox="0 0 {W} 74"
    class="w-full max-w-md"
    role="img"
    aria-label="Trong {fmt(n)} người: 1 người bệnh, {fmt(
      est.carriers,
    )} người dị hợp mang allele bệnh."
  >
    <text x="4" y="22" font-size="11" fill="#334155">Người bệnh aa</text>
    <rect x={L} y="10" width={width(1)} height="16" fill="#dc2626" />
    <text x={L + width(1) + 4} y="22" font-size="11" fill="#334155">1</text>
    <text x="4" y="52" font-size="11" fill="#334155">Mang gene Aa</text>
    <rect x={L} y="40" width={width(est.carriers)} height="16" fill="#f59e0b" />
    <text x={R - 4} y="52" text-anchor="end" font-size="11" fill="#1e293b" font-weight="700"
      >{fmt(est.carriers)}</text
    >
    <text x="4" y="70" font-size="9" fill="#64748b"
      >Người bình thường AA: {fmt(est.normal)} ({formatNumber((est.normal / n) * 100, 2)}%)</text
    >
  </svg>
  <FeedbackNote tone="info" text={note} />
</div>

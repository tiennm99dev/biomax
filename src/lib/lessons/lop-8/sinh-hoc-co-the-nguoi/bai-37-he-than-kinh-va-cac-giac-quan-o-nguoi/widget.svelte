<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { EYES, clearRange, describeLook, look } from './engine.js';

  /** @type {import('./engine.js').EyeType} */
  let type = $state('binh-thuong');
  let cm = $state(300);
  let glasses = $state(false);

  const eye = $derived(EYES[type]);
  const wearing = $derived(glasses && type !== 'binh-thuong');
  const r = $derived(look(type, cm, wearing));
  const range = $derived(clearRange(type, wearing));
  const text = $derived(describeLook(type, cm, wearing));

  // Drawing: optical axis at y = 90, lens at x = 150, retina at x = 268.
  const RETINA = 268;
  const LENS = 150;
  const ox = $derived(115 - 103 * (Math.log(cm / 10) / Math.log(50)));
  const ix = $derived(Math.min(340, Math.max(190, RETINA + 40 * r.shiftMm)));
  /** Where a ray through a lens edge at height `ly` meets the retina. */
  const hit = (/** @type {number} */ ly) => ly + (90 - ly) * ((RETINA - LENS) / (ix - LENS));
  const spot = $derived(Math.abs(hit(64) - 90));
  const lensRx = $derived(6 + 7 * r.bulge);

  /** @param {number} ly */
  function ray(ly) {
    const start = `M ${ox} 90 L ${LENS} ${ly}`;
    if (ix <= RETINA) return `${start} L ${ix} 90 L ${RETINA} ${hit(ly)}`;
    return `${start} L ${RETINA} ${hit(ly)}`;
  }

  /** @param {number} v */
  const cmText = (v) => `${fmt(v)} cm`;
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Loại mắt"
      options={[
        { value: 'binh-thuong', label: 'Bình thường' },
        { value: 'can-thi', label: 'Cận thị' },
        { value: 'vien-thi', label: 'Viễn thị' },
      ]}
      bind:value={type}
    />
    <SliderField
      label="Khoảng cách từ vật đến mắt"
      bind:value={cm}
      min={10}
      max={500}
      step={5}
      unit="cm"
    />
  </div>
  <label
    class="flex min-h-11 items-center gap-2 text-sm {type === 'binh-thuong' ? 'opacity-50' : ''}"
  >
    <input
      type="checkbox"
      class="h-5 w-5 accent-indigo-600 {focusRing}"
      bind:checked={glasses}
      disabled={type === 'binh-thuong'}
    />
    {type === 'binh-thuong'
      ? 'Đeo kính (mắt bình thường không cần kính)'
      : `Đeo ${eye.glassesName}`}
  </label>

  <svg
    viewBox="0 0 320 180"
    class="mx-auto block w-full max-w-lg"
    role="img"
    aria-label="{eye.name}{wearing ? ' có đeo ' + eye.glassesName : ''} nhìn vật cách {cmText(
      cm,
    )}. {r.image === 'ro'
      ? 'Ảnh hiện rõ trên màng lưới'
      : r.image === 'truoc'
        ? 'Ảnh hiện ở trước màng lưới'
        : 'Ảnh hiện ở sau màng lưới'}."
  >
    <rect x="0" y="0" width="320" height="180" rx="14" fill="#f8fafc" />
    <line x1="4" y1="90" x2="316" y2="90" stroke="#cbd5e1" stroke-dasharray="4 3" />
    <!-- eyeball -->
    <circle cx="205" cy="90" r="66" fill="#ffffff" stroke="#94a3b8" stroke-width="3" />
    <path d="M 142 62 Q 128 90 142 118" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
    <path
      d="M {RETINA - 6} 40 Q {RETINA + 8} 90 {RETINA - 6} 140"
      fill="none"
      stroke="#e11d48"
      stroke-width="4"
    />
    {#if wearing}
      <rect
        x="120"
        y="54"
        width="8"
        height="72"
        rx="3"
        fill={type === 'can-thi' ? '#c7d2fe' : '#bbf7d0'}
        stroke="#475569"
      />
      <text x="124" y="48" font-size="9" text-anchor="middle" fill="#334155">kính</text>
    {/if}
    <ellipse
      cx={LENS}
      cy="90"
      rx={lensRx}
      ry="28"
      fill="#fde68a"
      stroke="#b45309"
      stroke-width="2"
      opacity="0.9"
    />
    <!-- object -->
    <path
      d="M {ox} 90 L {ox} 58 M {ox - 5} 64 L {ox} 58 L {ox + 5} 64"
      stroke="#16a34a"
      stroke-width="3"
      fill="none"
    />
    <text x={ox} y="108" font-size="9" text-anchor="middle" fill="#166534">vật</text>
    <!-- rays -->
    <path d={ray(64)} stroke="#f59e0b" stroke-width="1.6" fill="none" />
    <path d={ray(116)} stroke="#f59e0b" stroke-width="1.6" fill="none" />
    {#if r.image === 'ro'}
      <circle cx={RETINA} cy="90" r="4" fill="#16a34a" />
    {:else}
      <line
        x1={RETINA}
        y1={90 - spot}
        x2={RETINA}
        y2={90 + spot}
        stroke="#dc2626"
        stroke-width="5"
        stroke-linecap="round"
        opacity="0.6"
      />
    {/if}
    <g font-size="9" fill="#334155">
      <text x={LENS} y="132" text-anchor="middle">thể thủy tinh</text>
      <text x="276" y="30" text-anchor="middle">màng lưới</text>
      <text x="8" y="170">(khoảng cách và độ lệch ảnh vẽ không theo tỉ lệ)</text>
    </g>
  </svg>

  <dl class="grid gap-2 text-sm sm:grid-cols-2">
    <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
      <dt class="text-slate-600">Vị trí ảnh</dt>
      <dd class="font-semibold">
        {r.image === 'ro'
          ? 'Trên màng lưới'
          : r.image === 'truoc'
            ? 'Trước màng lưới'
            : 'Sau màng lưới'}
      </dd>
    </div>
    <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
      <dt class="text-slate-600">Mắt này nhìn rõ vật cách mắt</dt>
      <dd class="font-semibold">
        từ {cmText(range.near)} đến {range.far === null ? 'rất xa' : cmText(range.far)}
      </dd>
    </div>
  </dl>
  <FeedbackNote tone={r.image === 'ro' ? 'ok' : 'warn'} {text} />
</div>

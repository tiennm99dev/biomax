<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { SHELL, nearMembraneShare, ratioAdvantage, sizeClass, sphere } from './engine.js';

  /** Drawing scale: SVG units per micrometre of diameter, the same for both cells. */
  const UNITS_PER_UM = 8.5;
  const MAX_RATIO = 6;

  let diameter = $state(5);
  /** @type {number | null} */
  let pinned = $state(null);

  const cell = $derived(sphere(diameter));
  const share = $derived(nearMembraneShare(diameter));
  const percent = $derived(Math.round(share * 100));
  const status = $derived.by(() => {
    const kind = sizeClass(diameter);
    const size = formatNumber(diameter);
    if (kind === 'nhan-so') {
      return `Đường kính ${size} µm nằm trong khoảng của tế bào nhân sơ. Tế bào rất nhỏ nên ${percent}% thể tích nằm sát màng, các chất trao đổi với môi trường rất nhanh.`;
    }
    if (kind === 'giua') {
      return `Đường kính ${size} µm: tế bào đã lớn hơn hầu hết tế bào nhân sơ, chỉ còn ${percent}% thể tích nằm sát màng.`;
    }
    return `Đường kính ${size} µm là cỡ của tế bào nhân thực. Chỉ ${percent}% thể tích nằm sát màng, phần lõi cách xa môi trường.`;
  });
  const comparison = $derived.by(() => {
    if (pinned === null) return null;
    if (pinned === diameter) return 'Hai tế bào đang bằng nhau. Kéo thanh trượt để đổi đường kính.';
    const small = formatNumber(Math.min(pinned, diameter));
    const big = formatNumber(Math.max(pinned, diameter));
    const times = formatNumber(ratioAdvantage(pinned, diameter), 2);
    return `Tế bào ${small} µm có S/V gấp ${times} lần tế bào ${big} µm.`;
  });

  /** @param {number} v */
  const num = (v) => formatNumber(v, 2);
</script>

{#snippet crossSection(
  /** @type {number} */ cx,
  /** @type {number} */ d,
  /** @type {string} */ name,
)}
  {@const r = (d * UNITS_PER_UM) / 2}
  <circle {cx} cy="92" {r} fill="#99f6e4" stroke="#0f766e" stroke-width="1.5" />
  <circle {cx} cy="92" r={Math.max(0, r - SHELL * UNITS_PER_UM)} fill="#cbd5e1" />
  <text x={cx} y="184" font-size="12" text-anchor="middle" fill="#334155"
    >{name}: {formatNumber(d)} µm</text
  >
{/snippet}

<div class="space-y-3">
  <svg
    viewBox="0 0 360 190"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label="Mặt cắt tế bào đường kính {formatNumber(
      diameter,
    )} micromet, {percent}% thể tích nằm sát màng{pinned === null
      ? ''
      : `, cạnh tế bào đã ghim đường kính ${formatNumber(pinned)} micromet`}"
  >
    {#if pinned !== null}
      {@render crossSection(92, pinned, 'Đã ghim')}
    {/if}
    {@render crossSection(268, diameter, 'Đang xét')}
  </svg>

  <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
    <li class="flex items-center gap-1">
      <span class="inline-block size-3 rounded-full bg-teal-200 ring-1 ring-teal-700"></span>
      Cách màng không quá {formatNumber(SHELL)} µm
    </li>
    <li class="flex items-center gap-1">
      <span class="inline-block size-3 rounded-full bg-slate-300"></span>
      Lõi xa màng
    </li>
  </ul>

  <SliderField
    label="Đường kính tế bào"
    bind:value={diameter}
    min={1}
    max={20}
    step={0.5}
    unit="µm"
  />

  <dl class="grid grid-cols-3 gap-2 text-center text-sm">
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-xs text-slate-600">Diện tích S</dt>
      <dd class="font-semibold tabular-nums">{num(cell.surface)} µm²</dd>
    </div>
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-xs text-slate-600">Thể tích V</dt>
      <dd class="font-semibold tabular-nums">{num(cell.volume)} µm³</dd>
    </div>
    <div class="rounded-lg bg-indigo-50 p-2">
      <dt class="text-xs text-indigo-900">Tỉ lệ S/V</dt>
      <dd class="font-semibold tabular-nums text-indigo-900">{num(cell.ratio)} µm⁻¹</dd>
    </div>
  </dl>

  <div class="h-3 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
    <div
      class="h-full rounded-full bg-indigo-500"
      style="width: {(cell.ratio / MAX_RATIO) * 100}%"
    ></div>
  </div>

  <FeedbackNote tone="info" text={status} />

  <div class="flex flex-wrap items-center gap-2">
    <button type="button" class={button.secondary} onclick={() => (pinned = diameter)}
      >Ghim tế bào này để so sánh</button
    >
    {#if pinned !== null}
      <button type="button" class={button.quiet} onclick={() => (pinned = null)}>Bỏ ghim</button>
    {/if}
  </div>
  {#if comparison}
    <p class="text-sm font-semibold text-slate-800" aria-live="polite">{comparison}</p>
  {/if}
</div>

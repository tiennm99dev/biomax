<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/units-engine/format.js';
  import {
    EYEPIECE,
    LENSES,
    SPECIMENS,
    blurAt,
    lensById,
    observe,
    specimenById,
  } from './engine.js';

  let specimenId = $state(/** @type {import('./engine.js').SpecimenId} */ ('vay-hanh'));
  let lensId = $state(/** @type {import('./engine.js').LensId} */ ('vat-kinh-10'));
  let coarse = $state(20);
  let fine = $state(0);

  const uid = $props.id();
  const lens = $derived(lensById(lensId));
  const sp = $derived(specimenById(specimenId));
  const focus = $derived(coarse + fine);
  const blur = $derived(blurAt(lens, focus));
  const VIEW = 300;
  const C = 160;
  const view = $derived(observe(specimenId, lensId, focus, VIEW));
  const s = $derived(view.scale);
  const isLoupe = $derived(lensId === 'kinh-lup');

  // Pattern tile of the specimen at the current scale.
  const cw = $derived(sp.length * s);
  const ch = $derived(sp.width * s);
  const tile = $derived(specimenId === 'trung-ca' ? sp.length * 1.1 * s : cw);

  const magText = $derived(
    isLoupe
      ? `Kính lúp phóng to khoảng ${lens.mag} lần`
      : `Độ phóng đại: ${EYEPIECE} × ${lens.mag / EYEPIECE} = ${lens.mag} lần`,
  );

  const verdictText = $derived.by(() => {
    if (view.verdict === 'blurred') {
      const far = Math.abs(focus - lens.focus) > 6;
      if (isLoupe) return 'Ảnh còn mờ: nâng hoặc hạ kính lúp cho đến khi ảnh rõ nét.';
      return far
        ? 'Ảnh còn mờ: vặn ốc to để tìm ảnh, sau đó dùng ốc nhỏ.'
        : 'Gần rõ rồi: vặn ốc nhỏ từng chút để ảnh thật nét.';
    }
    if (view.verdict === 'too-small')
      return `Ảnh đã nét nhưng tế bào còn quá nhỏ (mỗi tế bào chỉ khoảng ${formatNumber(view.cellPx, 0)} điểm ảnh): chưa phân biệt được các thành phần. Hãy dùng độ phóng đại lớn hơn.`;
    if (view.verdict === 'too-big')
      return `Ảnh nét, nhưng tế bào lớn hơn cả trường nhìn: chỉ thấy một phần tế bào. Thấy được ${view.seen.join(', ')}. Tế bào trứng cá nên quan sát bằng kính lúp.`;
    return `Ảnh rõ nét. Trường nhìn rộng khoảng ${formatNumber(view.across, 0)} lần chiều dài một tế bào. Quan sát được: ${view.seen.join(', ')}.`;
  });
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Mẫu vật"
      options={SPECIMENS.map((x) => ({ value: x.id, label: x.label }))}
      bind:value={specimenId}
    />
    <SegmentedControl
      label="Dụng cụ"
      options={LENSES.map((l) => ({
        value: l.id,
        label: l.id === 'kinh-lup' ? 'Kính lúp' : `Vật kính ${l.mag / EYEPIECE}×`,
      }))}
      bind:value={lensId}
    />
  </div>

  <svg
    viewBox="0 0 320 320"
    class="mx-auto block w-full max-w-xs"
    role="img"
    aria-label="Trường nhìn: {sp.label}, {lens.label}. {verdictText}"
  >
    <defs>
      <clipPath id="{uid}-khung">
        <circle cx={C} cy={C} r={VIEW / 2} />
      </clipPath>
      <filter id="{uid}-mo" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation={blur} />
      </filter>
      {#if specimenId === 'vay-hanh'}
        <pattern id="{uid}-mau" patternUnits="userSpaceOnUse" width={cw} height={ch * 2}>
          <rect x="0" y="0" width={cw} height={ch * 2} fill="#faf5ff" />
          {#each [[0, 0], [-cw / 2, ch], [cw / 2, ch]] as [x, y], i (i)}
            <rect
              {x}
              {y}
              width={cw}
              height={ch}
              fill="none"
              stroke="#65a30d"
              stroke-width={Math.max(0.4, 3 * s)}
            />
          {/each}
          <ellipse cx={cw * 0.6} cy={ch / 2} rx={10 * s} ry={8 * s} fill="#7c3aed" opacity="0.75" />
          <ellipse
            cx={cw * 0.15}
            cy={ch * 1.5}
            rx={10 * s}
            ry={8 * s}
            fill="#7c3aed"
            opacity="0.75"
          />
        </pattern>
      {:else}
        <pattern id="{uid}-mau" patternUnits="userSpaceOnUse" width={tile} height={tile}>
          <rect x="0" y="0" width={tile} height={tile} fill="#e0f2fe" />
          <circle
            cx={tile / 2}
            cy={tile / 2}
            r={(sp.length / 2) * s}
            fill="#fde68a"
            stroke="#b45309"
            stroke-width={Math.max(0.5, 6 * s)}
          />
          <circle
            cx={tile / 2 + 180 * s}
            cy={tile / 2 - 150 * s}
            r={70 * s}
            fill="#b45309"
            opacity="0.7"
          />
        </pattern>
      {/if}
    </defs>
    <rect x="0" y="0" width="320" height="320" fill="#0f172a" rx="16" />
    <g clip-path="url(#{uid}-khung)">
      <g filter={blur > 0 ? `url(#${uid}-mo)` : undefined}>
        <rect x={C - VIEW / 2} y={C - VIEW / 2} width={VIEW} height={VIEW} fill="url(#{uid}-mau)" />
      </g>
    </g>
    <circle cx={C} cy={C} r={VIEW / 2} fill="none" stroke="#334155" stroke-width="4" />
  </svg>

  <p class="text-center text-sm font-semibold text-slate-700">{magText}</p>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label={isLoupe ? 'Nâng, hạ kính lúp' : 'Ốc to (chỉnh thô)'}
      bind:value={coarse}
      min={0}
      max={100}
      step={5}
    />
    <SliderField
      label="Ốc nhỏ (chỉnh tinh)"
      bind:value={fine}
      min={-4}
      max={4}
      step={1}
      format={(v) => (v > 0 ? `+${v}` : v < 0 ? `−${-v}` : '0')}
    />
  </div>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {view.verdict === 'clear'
      ? 'bg-emerald-50 text-emerald-900'
      : 'bg-amber-50 text-amber-900'}"
    aria-live="polite"
  >
    {verdictText}
  </p>
</div>

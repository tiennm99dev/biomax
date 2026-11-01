<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    OBJECTIVES,
    SPECIMENS,
    blurOf,
    fieldOfView,
    isSharp,
    isThin,
    judgePhoto,
    magnification,
    scaleBar,
    specimenOf,
    visibleItems,
  } from './engine.js';

  /** @typedef {import('./engine.js').SpecimenId} SpecimenId */
  /**
   * @typedef {{
   *   specimen: SpecimenId;
   *   objective: number;
   *   x: number;
   *   blur: number;
   * }} Photo
   */

  const START_X = -500;
  const START_FOCUS = 20;
  const specimenOptions = SPECIMENS.map((s) => ({ value: s.id, label: s.name }));
  const objectiveOptions = OBJECTIVES.map((o) => ({ value: o, label: `${o}×` }));

  /** @type {SpecimenId} */
  let specimen = $state('vi-khuan');
  let objective = $state(10);
  let focus = $state(START_FOCUS);
  let x = $state(START_X);
  let stained = $state(false);
  let oil = $state(false);
  let located = $state(false);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Nhuộm tiêu bản, tìm vùng mỏng và lấy nét ở vật kính 10×, rồi chuyển vật kính 40× và chụp ảnh.',
  });
  /** @type {Partial<Record<SpecimenId, Photo>>} */
  let photos = $state({});

  /** The objective in use before the latest change. */
  let previous = 10;

  const fov = $derived(fieldOfView(objective));
  const blur = $derived(blurOf(specimen, objective, focus, oil));
  const bar = $derived(scaleBar(objective));
  const done = $derived(SPECIMENS.filter((s) => photos[s.id]).length);

  function changeSpecimen() {
    objective = 10;
    previous = 10;
    focus = START_FOCUS;
    x = START_X;
    stained = false;
    oil = false;
    located = false;
    note = { tone: 'info', text: `Đã đặt tiêu bản ${specimenOf(specimen).name.toLowerCase()}.` };
  }

  function changeObjective() {
    if (previous === 10 && objective > 10) {
      located = isSharp(specimen, 10, focus) && isThin(x);
      if (!located) {
        note = {
          tone: 'warn',
          text: 'Em chuyển vật kính khi chưa lấy nét ở vùng mỏng với vật kính 10×. Dễ bỏ lỡ vùng cần xem: hãy quay lại 10× trước.',
        };
      } else {
        note = {
          tone: 'info',
          text:
            objective === 100 && !oil
              ? 'Vật kính 100× cần một giọt dầu soi. Nhỏ dầu rồi vặn nhẹ ốc điều chỉnh để lấy nét lại.'
              : `Vật kính ${objective}×: vặn nhẹ ốc điều chỉnh để lấy nét lại.`,
        };
      }
    } else if (objective === 100 && !oil) {
      note = { tone: 'info', text: 'Vật kính 100× cần một giọt dầu soi.' };
    }
    previous = objective;
  }

  function takePhoto() {
    const result = judgePhoto({ specimen, objective, located, stained, x, focus, oil });
    note = { tone: result.ok ? 'ok' : 'warn', text: result.text };
    if (result.ok) photos[specimen] = { specimen, objective, x, blur };
  }
</script>

{#snippet field(
  /** @type {SpecimenId} */ id,
  /** @type {number} */ centre,
  /** @type {number} */ power,
  /** @type {boolean} */ dyed,
  /** @type {number} */ blurred,
  /** @type {string} */ label,
)}
  {@const size = fieldOfView(power)}
  <svg
    viewBox="{centre - size / 2} {-size / 2} {size} {size}"
    class="block size-full"
    style="filter: blur({blurred}px); background: {dyed ? '#eff6ff' : '#f8fafc'}"
    role="img"
    aria-label={label}
  >
    {#each visibleItems(id, centre, power) as item, i (i)}
      {#if item.kind === 'te-bao-thuc-vat'}
        <rect
          x={item.x}
          y={item.y}
          width={item.w}
          height={item.h}
          fill={dyed ? '#bfdbfe' : '#f1f5f9'}
          fill-opacity="0.55"
          stroke={dyed ? '#1e3a8a' : '#cbd5e1'}
          stroke-width="1.5"
          vector-effect="non-scaling-stroke"
        />
        <ellipse
          cx={item.nx}
          cy={item.ny}
          rx="20"
          ry="14"
          fill={dyed ? '#1e3a8a' : '#e2e8f0'}
          opacity={dyed ? 0.85 : 0.5}
        />
      {:else if item.kind === 'te-bao-niem-mac'}
        <path
          d={item.d}
          fill={dyed ? '#bfdbfe' : '#f1f5f9'}
          fill-opacity="0.7"
          stroke={dyed ? '#1e40af' : '#cbd5e1'}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
        <circle
          cx={item.x}
          cy={item.y}
          r={item.nr}
          fill={dyed ? '#1e3a8a' : '#e2e8f0'}
          opacity={dyed ? 0.9 : 0.5}
        />
      {:else if item.kind === 'que'}
        <line
          x1={item.x1}
          y1={item.y1}
          x2={item.x2}
          y2={item.y2}
          stroke={dyed ? '#1d4ed8' : '#cbd5e1'}
          stroke-width="1.3"
          stroke-linecap="round"
        />
      {:else if item.kind === 'cau'}
        <circle cx={item.x} cy={item.y} r={item.r} fill={dyed ? '#1d4ed8' : '#cbd5e1'} />
      {:else}
        <path d={item.d} fill="none" stroke={dyed ? '#1d4ed8' : '#cbd5e1'} stroke-width="1.1" />
      {/if}
    {/each}
  </svg>
{/snippet}

<div class="space-y-3">
  <SegmentedControl
    label="Tiêu bản"
    options={specimenOptions}
    bind:value={specimen}
    onchange={changeSpecimen}
  />

  <div class="flex flex-wrap items-center gap-2">
    <button
      type="button"
      class={button.secondary}
      disabled={stained}
      onclick={() => {
        stained = true;
        note = { tone: 'info', text: 'Đã nhuộm xanh methylene: tế bào và nhân bắt màu rõ hơn.' };
      }}>{stained ? 'Đã nhuộm' : specimenOf(specimen).stain}</button
    >
    <SegmentedControl
      label="Vật kính"
      options={objectiveOptions}
      bind:value={objective}
      onchange={changeObjective}
    />
    {#if objective === 100}
      <button type="button" class={button.quiet} disabled={oil} onclick={() => (oil = true)}
        >{oil ? 'Đã nhỏ dầu soi' : 'Nhỏ dầu soi'}</button
      >
    {/if}
  </div>

  <div
    class="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border-8 border-slate-800 bg-slate-900"
  >
    {@render field(
      specimen,
      x,
      objective,
      stained,
      blur,
      `Thị trường kính hiển vi, độ phóng đại ${magnification(objective)} lần, ${isThin(x) ? 'vùng mỏng' : 'vùng dày'}, ${blur > 0 ? 'ảnh mờ' : 'ảnh nét'}`,
    )}
  </div>

  <div class="mx-auto max-w-xs text-center text-xs text-slate-700">
    <div class="mx-auto h-1 bg-slate-800" style="width: calc((100% - 16px) * {bar / fov})"></div>
    <p class="mt-1">
      {bar} µm. Độ phóng đại {magnification(objective)}× (thị kính 10×, vật kính {objective}×).
    </p>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Ốc điều chỉnh (lấy nét)" bind:value={focus} min={0} max={100} />
    <SliderField
      label="Di chuyển lam kính"
      bind:value={x}
      min={-900}
      max={900}
      step={20}
      format={() => (isThin(x) ? 'Vùng mỏng' : 'Vùng dày')}
    />
  </div>

  <button type="button" class={button.primary} onclick={takePhoto}>Chụp ảnh tiêu bản</button>
  <FeedbackNote tone={note.tone} text={note.text} />

  <div>
    <p class="mb-1 text-sm font-semibold text-slate-700">
      Sổ thực hành: {done}/{SPECIMENS.length} ảnh đạt
    </p>
    <ul class="grid grid-cols-3 gap-2 text-center text-xs text-slate-700">
      {#each SPECIMENS as s (s.id)}
        {@const photo = photos[s.id]}
        <li>
          <div class="mx-auto aspect-square overflow-hidden rounded-full border-2 border-slate-400">
            {#if photo}
              {@render field(
                s.id,
                photo.x,
                photo.objective,
                true,
                photo.blur,
                `Ảnh ${s.name} ở độ phóng đại ${magnification(photo.objective)} lần`,
              )}
            {:else}
              <div class="flex size-full items-center justify-center bg-slate-100 text-slate-500">
                Chưa có
              </div>
            {/if}
          </div>
          <p class="mt-1 font-semibold">{s.name}</p>
        </li>
      {/each}
    </ul>
    {#if done === SPECIMENS.length}
      <p class="mt-2 text-sm font-semibold text-emerald-800">
        Em đã có đủ ảnh. So sánh kích thước, hình dạng và thành phần nhìn thấy được của ba loại tế
        bào rồi ghi vào báo cáo.
      </p>
    {/if}
  </div>
</div>

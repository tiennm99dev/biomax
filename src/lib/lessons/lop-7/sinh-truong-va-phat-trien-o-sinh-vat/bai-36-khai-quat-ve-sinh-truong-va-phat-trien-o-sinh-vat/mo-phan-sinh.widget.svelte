<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { stemAt, stemText } from './engine.js';

  let group = $state('hai');
  let years = $state(0);
  let apical = $state(true);
  let lateral = $state(true);

  const g = $derived(/** @type {import('./engine.js').PlantGroup} */ (group));
  const stem = $derived(stemAt(g, years, apical, lateral));
  const text = $derived(stemText(g, years, apical, lateral));

  const GROUND = 180;
  const trunkH = $derived(stem.height * 34);
  const trunkW = $derived(Math.max(4, stem.diameter * 1.1));
  const top = $derived(GROUND - trunkH);
  const radius = $derived(Math.max(8, stem.diameter * 2.6));
  /** Rings drawn from the centre out; the youngest is next to the meristem. */
  const rings = $derived(
    Array.from({ length: stem.rings }, (_, i) => 5 + ((radius - 9) * (i + 1)) / (stem.rings + 1)),
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Loại cây"
    options={[
      { value: 'hai', label: 'Cây cam (Hai lá mầm)' },
      { value: 'mot', label: 'Cây cau (Một lá mầm)' },
    ]}
    bind:value={group}
    onchange={() => (years = 0)}
  />
  <SliderField label="Số năm" bind:value={years} min={0} max={6} unit="năm" />
  <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
    <label class="flex min-h-11 items-center gap-2">
      <input type="checkbox" class="h-5 w-5 accent-rose-600 {focusRing}" bind:checked={apical} />
      Mô phân sinh đỉnh hoạt động
    </label>
    <label class="flex min-h-11 items-center gap-2 {group === 'mot' ? 'text-slate-400' : ''}">
      <input
        type="checkbox"
        class="h-5 w-5 accent-amber-600 {focusRing}"
        bind:checked={lateral}
        disabled={group === 'mot'}
      />
      Mô phân sinh bên hoạt động{group === 'mot' ? ' (cây cau không có)' : ''}
    </label>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <figure class="rounded-2xl border border-slate-200 bg-sky-50 p-2">
      <svg
        viewBox="0 0 200 230"
        class="mx-auto block w-full max-w-60"
        role="img"
        aria-label="Cây sau {years} năm: cao {formatNumber(
          stem.height,
          1,
        )} m, thân rộng {formatNumber(stem.diameter)} cm"
      >
        <rect x="0" y={GROUND} width="200" height="50" fill="#d6b48a" />
        <path
          d="M 100 {GROUND} q -16 20 -24 40 M 100 {GROUND} q 4 24 0 44 M 100 {GROUND} q 16 18 26 38"
          fill="none"
          stroke="#78350f"
          stroke-width="3"
        />
        <rect x={100 - trunkW / 2} y={top} width={trunkW} height={trunkH} fill="#a16207" />
        {#if group === 'hai'}
          <ellipse
            cx="100"
            cy={top}
            rx={22 + stem.height * 8}
            ry={14 + stem.height * 5}
            fill="#4ade80"
            opacity="0.85"
          />
        {:else}
          {#each [-60, -25, 25, 60] as a (a)}
            <path
              d="M 100 {top} q {a * 0.5} -18 {a} 6"
              fill="none"
              stroke="#16a34a"
              stroke-width="5"
              stroke-linecap="round"
            />
          {/each}
        {/if}
        <circle cx="100" cy={top - 2} r="5" fill={apical ? '#e11d48' : '#94a3b8'} />
        <circle cx="100" cy={GROUND + 44} r="4" fill={apical ? '#e11d48' : '#94a3b8'} />
      </svg>
      <figcaption class="text-center text-xs text-slate-600">
        Chấm đỏ: mô phân sinh đỉnh ở chồi ngọn và đầu rễ · cao {formatNumber(stem.height, 1)} m
      </figcaption>
    </figure>
    <figure class="rounded-2xl border border-slate-200 bg-white p-2">
      <svg
        viewBox="-70 -70 140 140"
        class="mx-auto block w-full max-w-52"
        role="img"
        aria-label="Lát cắt ngang thân: đường kính {formatNumber(
          stem.diameter,
        )} cm, {stem.rings} vòng do mô phân sinh bên tạo ra"
      >
        {#if group === 'hai'}
          <circle r={radius + 4} fill="#78350f" />
          <circle r={radius} fill="#fde68a" />
          {#each rings as r, i (i)}
            <circle {r} fill="none" stroke="#b45309" stroke-width="1.2" />
          {/each}
          <circle
            r={radius}
            fill="none"
            stroke={lateral ? '#d97706' : '#94a3b8'}
            stroke-width="2.5"
            stroke-dasharray="4 2"
          />
        {:else}
          <circle r={radius} fill="#fef3c7" stroke="#a16207" stroke-width="3" />
          {#each { length: 14 } as _, i (i)}
            <circle
              cx={Math.cos(i * 1.7) * radius * 0.6 * ((i % 3) / 3 + 0.3)}
              cy={Math.sin(i * 1.7) * radius * 0.6 * ((i % 3) / 3 + 0.3)}
              r="2"
              fill="#a16207"
            />
          {/each}
        {/if}
      </svg>
      <figcaption class="text-center text-xs text-slate-600">
        Lát cắt ngang thân · rộng {formatNumber(stem.diameter)} cm{group === 'hai'
          ? ' · vòng nét đứt: mô phân sinh bên'
          : ''}
      </figcaption>
    </figure>
  </div>

  <FeedbackNote
    tone={years === 0 ? 'info' : apical && (lateral || group === 'mot') ? 'ok' : 'warn'}
    {text}
  />
</div>

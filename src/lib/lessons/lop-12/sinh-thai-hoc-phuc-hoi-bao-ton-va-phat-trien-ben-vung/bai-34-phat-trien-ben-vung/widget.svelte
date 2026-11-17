<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    BIOCAPACITY,
    DEFAULT_HABITS,
    DIETS,
    GOODS,
    RIDES,
    earths,
    footprint,
    parts,
    suggestions,
  } from './engine.js';

  /** @typedef {import('./engine.js').Habits} Habits */

  let habits = $state(/** @type {Habits} */ ({ ...DEFAULT_HABITS }));

  const PART_INFO = /** @type {const} */ ([
    ['food', 'Ăn uống', '#16a34a'],
    ['transport', 'Đi lại', '#2563eb'],
    ['energy', 'Điện', '#d97706'],
    ['goods', 'Mua sắm, rác', '#9333ea'],
    ['shared', 'Dịch vụ chung', '#64748b'],
  ]);
  const SCALE = 4.5;

  const p = $derived(parts(habits));
  const total = $derived(footprint(habits));
  const planets = $derived(earths(total));
  const ideas = $derived(suggestions(habits));
  const verdict = $derived(
    total <= BIOCAPACITY
      ? {
          tone: /** @type {const} */ ('ok'),
          text: `Dấu chân sinh thái ${formatFixed(total, 2)} gha, không vượt khả năng tái tạo của Trái Đất (khoảng ${formatNumber(BIOCAPACITY)} gha mỗi người): lối sống này bền vững.`,
        }
      : {
          tone: /** @type {const} */ ('warn'),
          text: `Dấu chân sinh thái ${formatFixed(total, 2)} gha. Nếu mọi người đều sống như vậy, nhân loại cần khoảng ${formatNumber(planets)} Trái Đất.`,
        },
  );

  /** @param {Partial<Habits>} change */
  function apply(change) {
    habits = { ...habits, ...change };
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Bữa ăn hằng ngày"
    options={Object.entries(DIETS).map(([value, d]) => ({ value, label: d.name }))}
    bind:value={habits.diet}
  />
  <label class="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-slate-800">
    <input
      type="checkbox"
      class="h-4 w-4 accent-emerald-700 {focusRing}"
      bind:checked={habits.waste}
    />
    Thường bỏ phí thức ăn thừa
  </label>
  <SegmentedControl
    label="Phương tiện đi học, đi làm"
    options={Object.entries(RIDES).map(([value, r]) => ({ value, label: r.name }))}
    bind:value={habits.ride}
  />
  <SliderField label="Quãng đường mỗi ngày" bind:value={habits.km} min={0} max={40} unit="km" />
  <SliderField
    label="Điện gia đình dùng mỗi tháng, tính cho một người"
    bind:value={habits.kwh}
    min={0}
    max={400}
    step={10}
    unit="kWh"
  />
  <SegmentedControl
    label="Mua sắm và rác thải"
    options={Object.entries(GOODS).map(([value, g]) => ({ value, label: g.name }))}
    bind:value={habits.goods}
  />

  <figure class="space-y-2">
    <svg
      viewBox="0 0 340 74"
      class="block w-full"
      role="img"
      aria-label="Dấu chân sinh thái {formatFixed(
        total,
        2,
      )} gha, so với khả năng tái tạo {formatNumber(BIOCAPACITY)} gha mỗi người"
    >
      {#each PART_INFO as [key, , color], i (key)}
        {@const start = PART_INFO.slice(0, i).reduce((s, [k]) => s + p[k], 0)}
        <rect
          x={10 + (start / SCALE) * 320}
          y="22"
          width={(p[key] / SCALE) * 320}
          height="28"
          fill={color}
        />
      {/each}
      <line
        x1={10 + (BIOCAPACITY / SCALE) * 320}
        y1="10"
        x2={10 + (BIOCAPACITY / SCALE) * 320}
        y2="62"
        stroke="#0f172a"
        stroke-width="2"
        stroke-dasharray="4 3"
      />
      <text x={14 + (BIOCAPACITY / SCALE) * 320} y="12" font-size="11" fill="#0f172a">
        1 Trái Đất ({formatNumber(BIOCAPACITY)} gha)
      </text>
      <text x="10" y="70" font-size="11" fill="#334155">0</text>
      <text x="330" y="70" font-size="11" fill="#334155" text-anchor="end">
        {formatNumber(SCALE)} gha
      </text>
    </svg>
    <figcaption class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
      {#each PART_INFO as [key, label, color] (key)}
        <span class="inline-flex items-center gap-1">
          <span class="inline-block h-3 w-3 rounded-sm" style:background={color}></span>
          {label}: {formatFixed(p[key], 2)} gha
        </span>
      {/each}
    </figcaption>
  </figure>

  <FeedbackNote tone={verdict.tone} text={verdict.text} />

  {#if ideas.length > 0}
    <div class="space-y-2">
      <p class="text-sm font-semibold text-slate-800">Gợi ý giảm tác động (lớn nhất trước)</p>
      <ul class="space-y-2">
        {#each ideas as idea (idea.text)}
          <li
            class="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 p-2 text-sm text-slate-800"
          >
            <span class="min-w-0 flex-1">
              <LiveRichText text={idea.text} />
              <span class="font-semibold text-emerald-800">
                (giảm {formatFixed(idea.saving, 2)} gha)
              </span>
            </span>
            <button type="button" class={button.quiet} onclick={() => apply(idea.change)}>
              Áp dụng
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  <button type="button" class={button.quiet} onclick={() => apply({ ...DEFAULT_HABITS })}>
    Đặt lại
  </button>
  <p class="text-xs text-slate-600">
    Hệ số tính là ước lượng làm tròn để minh hoạ; gha (hecta toàn cầu) là diện tích đất, biển cho
    năng suất trung bình của thế giới.
  </p>
</div>

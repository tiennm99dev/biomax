<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import TraceChart from '../_shared/trace-chart.svelte';
  import {
    DAY_MAX,
    DOSE_MAX,
    LIMIT,
    LOW_OXYGEN,
    OXYGEN_MAX,
    POLLUTANTS,
    addDose,
    advance,
    fresh,
    harvest,
    note,
    scatter,
    setAir,
  } from './engine.js';

  const WATER = { x: 40, y: 34, w: 260, h: 54 };
  const SLUDGE = { x: 115, y: 104, w: 110, h: 12 };

  /** @type {'huu-co' | 'kim-loai'} */
  let pollutant = $state('huu-co');
  let pond = $state(fresh('huu-co'));
  let flash = $state('');

  const organic = $derived(pond.pollutant === 'huu-co');
  const verdict = $derived(note(pond));
  const stuff = $derived(scatter(Math.round(pond.level / 4), WATER, 0.13));
  const cells = $derived(scatter(Math.min(24, Math.round(pond.microbes * 5)), WATER, 0.47));
  const sludge = $derived(scatter(Math.round(pond.held / 4), SLUDGE, 0.71));
  const oxygenShare = $derived((pond.oxygen / OXYGEN_MAX) * 100);

  /** @param {string | number} value */
  function choose(value) {
    pond = fresh(value === 'kim-loai' ? 'kim-loai' : 'huu-co');
    flash = '';
  }

  function dose() {
    flash = pond.doses >= DOSE_MAX ? `Đã thêm đủ ${DOSE_MAX} liều, hãy cho thời gian trôi.` : '';
    pond = addDose(pond);
  }

  /** @param {number} days */
  function pass(days) {
    flash = pond.day >= DAY_MAX ? `Đã hết ${DAY_MAX} ngày của thí nghiệm. Hãy làm lại.` : '';
    for (let i = 0; i < days; i += 1) pond = advance(pond);
  }

  function collect() {
    flash = pond.held > 0 ? '' : 'Chưa có sinh khối chứa kim loại để thu.';
    pond = harvest(pond);
  }

  function restart() {
    pond = fresh(pollutant);
    flash = '';
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Chất gây ô nhiễm trong hồ"
    options={POLLUTANTS}
    bind:value={pollutant}
    onchange={choose}
  />

  <svg
    viewBox="0 0 340 130"
    class="mx-auto block w-full max-w-lg rounded-xl bg-emerald-50"
    role="img"
    aria-label="Hồ ngày {pond.day}: chất ô nhiễm trong nước còn {formatNumber(
      pond.level,
      1,
    )} phần trăm, có {pond.doses} liều vi sinh vật đã thêm."
  >
    <text x="12" y="20" font-size="13" font-weight="700" fill="#334155">Ngày {pond.day}</text>
    {#if organic && pond.air}
      <text x="328" y="20" text-anchor="end" font-size="12" fill="#0369a1">Đang sục khí</text>
    {/if}
    <path
      d="M12 30 H328 C326 92 300 124 170 124 C40 124 14 92 12 30 Z"
      fill={organic ? '#bae6fd' : '#c7d2fe'}
      stroke="#0ea5e9"
    />
    {#each sludge as spot, i (i)}
      <circle cx={spot.x} cy={spot.y} r="3.5" fill="#92400e" />
    {/each}
    {#each stuff as spot, i (i)}
      <circle cx={spot.x} cy={spot.y} r="4" fill={organic ? '#65a30d' : '#475569'} />
    {/each}
    {#each cells as spot, i (i)}
      <rect
        x={spot.x - 5}
        y={spot.y - 2.5}
        width="10"
        height="5"
        rx="2.5"
        fill="#be185d"
        transform="rotate({(i * 47) % 180} {spot.x} {spot.y})"
      />
    {/each}
  </svg>
  <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
    <li class="flex items-center gap-1">
      <span
        class="inline-block size-3 rounded-full {organic ? 'bg-lime-600' : 'bg-slate-600'}"
        aria-hidden="true"
      ></span>
      {organic ? 'Chất hữu cơ' : 'Ion kim loại trong nước'}
    </li>
    <li class="flex items-center gap-1">
      <span class="inline-block h-2 w-3 rounded-full bg-pink-700" aria-hidden="true"></span>
      Vi sinh vật
    </li>
    {#if !organic}
      <li class="flex items-center gap-1">
        <span class="inline-block size-3 rounded-full bg-amber-800" aria-hidden="true"></span>
        Kim loại trong sinh khối, bùn đáy
      </li>
    {/if}
  </ul>

  <div class="grid grid-cols-2 gap-2">
    <button type="button" class={button.primary} onclick={dose}>
      Thêm vi sinh vật ({pond.doses}/{DOSE_MAX})
    </button>
    {#if organic}
      <button
        type="button"
        class={pond.air ? button.primary : button.quiet}
        aria-pressed={pond.air}
        onclick={() => (pond = setAir(pond, !pond.air))}
      >
        Sục khí: {pond.air ? 'bật' : 'tắt'}
      </button>
    {:else}
      <button type="button" class={button.quiet} onclick={collect}>Thu sinh khối, bùn</button>
    {/if}
    <button type="button" class={button.secondary} onclick={() => pass(1)}>Qua 1 ngày</button>
    <button type="button" class={button.secondary} onclick={() => pass(5)}>Qua 5 ngày</button>
  </div>

  {#if flash}
    <p class="text-sm font-semibold text-amber-900" aria-live="polite">{flash}</p>
  {/if}
  <FeedbackNote tone={verdict.tone} text={verdict.text} />

  <TraceChart
    values={pond.history}
    max={100}
    level={LIMIT}
    levelLabel="Mức cho phép"
    unit="% còn trong nước"
    label="Đồ thị chất ô nhiễm còn trong nước theo ngày: hiện còn {formatNumber(
      pond.level,
      1,
    )} phần trăm ở ngày {pond.day}, mức cho phép là {LIMIT} phần trăm."
  />

  {#if organic}
    <div>
      <div class="flex justify-between text-sm font-semibold text-slate-800">
        <span>Oxygen hoà tan</span>
        <span class="tabular-nums">{formatNumber(pond.oxygen, 1)} mg/L</span>
      </div>
      <div class="mt-1 h-3 rounded bg-slate-200" aria-hidden="true">
        <div
          class="h-3 rounded {pond.oxygen < LOW_OXYGEN ? 'bg-amber-600' : 'bg-sky-600'}"
          style:width="{oxygenShare}%"
        ></div>
      </div>
    </div>
  {:else}
    <dl class="grid grid-cols-3 gap-2 text-center text-sm">
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-xs text-slate-700">Trong nước</dt>
        <dd class="font-bold tabular-nums">{formatNumber(pond.level, 1)}%</dd>
      </div>
      <div class="rounded-lg bg-amber-50 p-2">
        <dt class="text-xs text-slate-700">Sinh khối, bùn</dt>
        <dd class="font-bold tabular-nums">{formatNumber(pond.held, 1)}%</dd>
      </div>
      <div class="rounded-lg bg-emerald-50 p-2">
        <dt class="text-xs text-slate-700">Đã thu ra ngoài</dt>
        <dd class="font-bold tabular-nums">{formatNumber(pond.removed, 1)}%</dd>
      </div>
    </dl>
  {/if}

  <p class="text-xs text-slate-600">
    Các số liệu là mô hình minh hoạ, tính theo phần trăm lượng chất ô nhiễm ban đầu, không phải số
    đo của một hồ thật.
  </p>
  <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { fmt, formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { ACTIONS, biggestCo2, impact, treeYears } from './engine.js';

  const PERIODS = [
    { value: 1, label: '1 tuần' },
    { value: 4, label: '1 tháng (4 tuần)' },
    { value: 52, label: '1 năm (52 tuần)' },
  ];

  /** @type {string[]} */
  let chosen = $state(['tui-vai']);
  let people = $state(1);
  let weeks = $state(1);

  const allIds = ACTIONS.map((a) => a.id);
  const total = $derived(impact(chosen, people, weeks));
  const most = $derived(impact(allIds, people, weeks));
  const best = $derived(biggestCo2(chosen));
  const period = $derived(PERIODS.find((p) => p.value === weeks)?.label ?? '');

  /** @param {number} kg */
  const kgText = (kg) => (kg >= 100 ? fmt(Math.round(kg)) : formatNumber(kg, kg >= 10 ? 1 : 2));

  /** @param {number} trees */
  const treeText = (trees) =>
    trees >= 10 ? fmt(Math.round(trees)) : formatNumber(trees, trees >= 1 ? 1 : 2);

  /** @param {string} id */
  function toggle(id) {
    chosen = chosen.includes(id) ? chosen.filter((x) => x !== id) : [...chosen, id];
  }

  const summary = $derived.by(() => {
    if (chosen.length === 0) return 'Hãy chọn ít nhất một hành động để xem tác động.';
    const who = people === 1 ? 'Một bạn làm' : `${people} bạn cùng làm`;
    let text = `${who} trong ${period} bớt được khoảng ${kgText(total.waste)} kg rác và ${kgText(total.co2)} kg CO₂.`;
    if (total.co2 > 0)
      text += ` Lượng CO₂ này bằng lượng khoảng ${treeText(treeYears(total.co2))} cây xanh hấp thụ trong một năm.`;
    if (best) text += ` Hành động giảm CO₂ nhiều nhất em đã chọn: ${best.label.toLowerCase()}.`;
    if (people === 1) text += ' Thử tăng số bạn cùng làm để thấy việc nhỏ nhân lên thế nào.';
    return text;
  });

  /** @param {number} v @param {number} max */
  const width = (v, max) => (max > 0 ? Math.max(0, Math.min(100, (v / max) * 100)) : 0);
</script>

<div class="space-y-4">
  <fieldset class="space-y-2">
    <legend class="mb-1 text-sm font-semibold text-slate-700"
      >Chọn những việc em và các bạn sẽ làm</legend
    >
    {#each ACTIONS as a (a.id)}
      <label
        class="flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition {chosen.includes(
          a.id,
        )
          ? 'border-emerald-500 bg-emerald-50'
          : 'border-slate-200 bg-white hover:bg-slate-50'}"
      >
        <input
          type="checkbox"
          class="mt-0.5 size-5 shrink-0 accent-emerald-600 {focusRing}"
          checked={chosen.includes(a.id)}
          onchange={() => toggle(a.id)}
        />
        <span>
          <span class="block font-semibold text-slate-800">{a.label}</span>
          <span class="block text-xs text-slate-600">{a.basis}</span>
        </span>
      </label>
    {/each}
  </fieldset>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Số bạn cùng làm" bind:value={people} min={1} max={45} unit="bạn" />
    <SegmentedControl label="Trong thời gian" options={PERIODS} bind:value={weeks} />
  </div>

  <div class="space-y-3 rounded-xl border border-slate-200 p-4">
    <div>
      <div class="flex justify-between text-sm">
        <span class="font-semibold text-slate-700">Rác thải bớt được</span>
        <span class="font-semibold tabular-nums text-amber-800">{kgText(total.waste)} kg</span>
      </div>
      <div class="mt-1 h-4 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
        <div
          class="h-full rounded-full bg-amber-500 transition-[width] motion-reduce:transition-none"
          style="width: {width(total.waste, most.waste)}%"
        ></div>
      </div>
    </div>
    <div>
      <div class="flex justify-between text-sm">
        <span class="font-semibold text-slate-700">Khí CO₂ bớt thải</span>
        <span class="font-semibold tabular-nums text-sky-800">{kgText(total.co2)} kg</span>
      </div>
      <div class="mt-1 h-4 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
        <div
          class="h-full rounded-full bg-sky-500 transition-[width] motion-reduce:transition-none"
          style="width: {width(total.co2, most.co2)}%"
        ></div>
      </div>
    </div>
    <p class="text-xs text-slate-500">
      Thanh đầy khi cả {people} bạn làm đủ cả sáu việc. Các con số chỉ là ước tính gần đúng.
    </p>
  </div>

  <FeedbackNote tone={chosen.length === 0 ? 'info' : 'ok'} text={summary} />
</div>

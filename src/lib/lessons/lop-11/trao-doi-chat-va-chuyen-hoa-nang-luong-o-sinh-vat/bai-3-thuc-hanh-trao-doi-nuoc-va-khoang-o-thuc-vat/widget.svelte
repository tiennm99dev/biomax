<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import LineChart from '#lib/core/visuals/line-chart.svelte';
  import {
    END_MINUTES,
    PLACES,
    SETUPS,
    STEP_MINUTES,
    ratePerHour,
    reading,
    runTable,
    waterLost,
  } from './engine.js';

  /** @type {import('./engine.js').PlaceId} */
  let place = $state('nang');
  let minutes = $state(0);
  /** @type {string[]} */
  let finished = $state([]);

  const rows = $derived(runTable(place, minutes));
  const labels = $derived(rows.map((r) => String(r.minutes)));
  const series = $derived(
    SETUPS.map((s, i) => ({
      name: s.name,
      values: rows.map((r) => waterLost(r.masses[i])),
    })),
  );
  const done = $derived(minutes >= END_MINUTES);
  const leafy = $derived(reading('la', place, minutes));
  const bare = $derived(reading('khong-la', place, minutes));

  const note = $derived.by(() => {
    if (minutes === 0) {
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Ba ống đều nặng như nhau lúc bắt đầu. Dự đoán xem ống nào nhẹ đi nhanh nhất, rồi đợi và cân.',
      };
    }
    if (!done) {
      return {
        tone: /** @type {const} */ ('info'),
        text: `Sau ${minutes} phút, ống còn nguyên lá đã mất ${formatNumber(waterLost(leafy), 2)} g nước, ống đã ngắt lá mất ${formatNumber(waterLost(bare), 2)} g.`,
      };
    }
    return {
      tone: /** @type {const} */ ('ok'),
      text: `Hết ${END_MINUTES} phút: cành có lá thoát khoảng ${formatNumber(ratePerHour(leafy, minutes), 2)} g/giờ, cành đã ngắt lá chỉ ${formatNumber(ratePerHour(bare, minutes), 2)} g/giờ. Lá là cơ quan thoát hơi nước chủ yếu, và thoát hơi nước kéo nước đi lên.`,
    };
  });

  const goals = $derived([
    { done: finished.includes('nang'), text: 'Cân hết 60 phút ở chỗ có nắng.' },
    { done: finished.includes('ram'), text: 'Làm lại trong bóng râm và so sánh.' },
    { done: finished.includes('am'), text: 'Làm lại với túi nylon kín: không khí ẩm thì sao?' },
  ]);

  function weigh() {
    minutes += STEP_MINUTES;
    if (minutes >= END_MINUTES && !finished.includes(place)) finished = [...finished, place];
  }

  /** @param {string | number} next */
  function choosePlace(next) {
    place = next === 'ram' ? 'ram' : next === 'am' ? 'am' : 'nang';
    minutes = 0;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Đặt ba ống ở"
    value={place}
    onchange={choosePlace}
    options={PLACES.map((p) => ({ value: p.id, label: p.name }))}
  />

  <div class="flex flex-wrap items-center gap-2">
    <button type="button" class={button.primary} onclick={weigh} disabled={done}>
      Đợi {STEP_MINUTES} phút rồi cân
    </button>
    <button
      type="button"
      class={button.quiet}
      onclick={() => (minutes = 0)}
      disabled={minutes === 0}
    >
      Làm lại
    </button>
    <span class="text-sm font-semibold tabular-nums" aria-live="polite">{minutes} phút</span>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <caption class="sr-only">Khối lượng ba ống thí nghiệm theo thời gian</caption>
      <thead>
        <tr class="border-b border-slate-300">
          <th scope="col" class="py-1 pr-2">Phút</th>
          <th scope="col" class="py-1 pr-2">Nguyên lá (g)</th>
          <th scope="col" class="py-1 pr-2">Ngắt lá (g)</th>
          <th scope="col" class="py-1">Đối chứng (g)</th>
        </tr>
      </thead>
      <tbody class="tabular-nums">
        {#each rows as row (row.minutes)}
          <tr class="border-b border-slate-100">
            <td class="py-1 pr-2 font-semibold">{row.minutes}</td>
            {#each row.masses as mass, i (i)}
              <td class="py-1 pr-2">{formatFixed(mass, 2)}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <LineChart
    {labels}
    {series}
    min={0}
    max={8}
    showValues={false}
    unit="Nước mất (g)"
    title="Lượng nước mất theo thời gian (phút)"
  />

  <FeedbackNote tone={note.tone} text={note.text} />

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        {goal.text}
      </li>
    {/each}
  </ul>
</div>

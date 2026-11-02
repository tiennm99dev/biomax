<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import TraceChart from '../_shared/trace-chart.svelte';
  import {
    COMPOST_DAY_MAX,
    HOT,
    MOISTURES,
    dayInPile,
    freshPile,
    pileNote,
    pileStage,
    turnPile,
  } from './engine.js';

  /** @type {import('./engine.js').Moisture} */
  let moisture = $state('vua');
  let pile = $state(freshPile('vua'));
  let flash = $state('');

  const verdict = $derived(pileNote(pile));
  const stage = $derived(pileStage(pile));
  const bars = $derived([
    { name: 'Oxygen', value: pile.oxygen, color: 'bg-sky-600' },
    { name: 'Chất dễ phân giải', value: pile.food, color: 'bg-lime-600' },
  ]);

  /** @param {string | number} value */
  function changeMoisture(value) {
    pile = { ...pile, moisture: value === 'kho' ? 'kho' : value === 'uot' ? 'uot' : 'vua' };
  }

  /** @param {number} days */
  function pass(days) {
    flash = pile.day >= COMPOST_DAY_MAX ? `Đã hết ${COMPOST_DAY_MAX} ngày. Hãy làm lại.` : '';
    for (let i = 0; i < days; i += 1) pile = dayInPile(pile);
  }

  function restart() {
    pile = freshPile(moisture);
    flash = '';
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Độ ẩm của đống ủ"
    options={MOISTURES}
    bind:value={moisture}
    onchange={changeMoisture}
  />
  <p class="text-sm font-semibold text-slate-800">
    Ngày {pile.day}: {formatNumber(pile.temp, 1)} °C, giai đoạn {stage.toLowerCase()}, đã đảo {pile.turns}
    lần.
  </p>

  <TraceChart
    values={pile.history}
    min={20}
    max={80}
    minDays={30}
    level={HOT}
    levelLabel="{HOT} °C"
    unit="°C"
    label="Đồ thị nhiệt độ đống ủ theo ngày: hiện {formatNumber(
      pile.temp,
      1,
    )} độ C ở ngày {pile.day}."
  />

  <div class="grid grid-cols-3 gap-2">
    <button type="button" class={button.secondary} onclick={() => pass(1)}>Qua 1 ngày</button>
    <button type="button" class={button.secondary} onclick={() => pass(5)}>Qua 5 ngày</button>
    <button type="button" class={button.primary} onclick={() => (pile = turnPile(pile))}>
      Đảo đống ủ
    </button>
  </div>

  {#if flash}
    <p class="text-sm font-semibold text-amber-900" aria-live="polite">{flash}</p>
  {/if}
  <FeedbackNote tone={verdict.tone} text={verdict.text} />

  {#each bars as bar (bar.name)}
    <div>
      <div class="flex justify-between text-sm font-semibold text-slate-800">
        <span>{bar.name}</span>
        <span class="tabular-nums">{formatNumber(bar.value, 0)}%</span>
      </div>
      <div class="mt-1 h-3 rounded bg-slate-200" aria-hidden="true">
        <div class="h-3 rounded {bar.color}" style:width="{bar.value}%"></div>
      </div>
    </div>
  {/each}

  <p class="text-xs text-slate-600">
    Đường cong nhiệt độ là mô hình minh hoạ. Đống ủ thật còn phụ thuộc vào nguyên liệu và kích
    thước.
  </p>
  <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
</div>

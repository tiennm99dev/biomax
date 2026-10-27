<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import PopulationChart from '#lib/domain/population-chart.svelte';
  import { PYRAMID_LABELS, pyramidShape } from '#lib/domain/population.js';
  import { SCENARIOS, SHAPE_CHOICES, forecast, shapeOf } from './engine.js';

  let scenarioId = $state(SCENARIOS[0].id);
  /** @type {string | null} */
  let guess = $state(null);
  let groups = $state({ ...SCENARIOS[0].groups });

  const scenario = $derived(SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0]);
  const answer = $derived(shapeOf(scenario));
  const shape = $derived(pyramidShape(groups));
  const changed = $derived(
    groups.pre !== scenario.groups.pre ||
      groups.reproductive !== scenario.groups.reproductive ||
      groups.post !== scenario.groups.post,
  );

  /** @param {string | number} id */
  function choose(id) {
    scenarioId = String(id);
    guess = null;
    const s = SCENARIOS.find((x) => x.id === scenarioId) ?? SCENARIOS[0];
    groups = { ...s.groups };
  }

  const verdict = $derived(
    guess === null
      ? null
      : guess === answer
        ? `Đúng: ${PYRAMID_LABELS[answer].toLowerCase()}. ${scenario.why}`
        : `Chưa đúng. Quan sát tháp tuổi bên dưới: ${scenario.why}`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Tình huống"
    options={SCENARIOS.map((s) => ({ value: s.id, label: s.title }))}
    value={scenarioId}
    onchange={choose}
  />
  <p class="text-sm text-slate-700">{scenario.text}</p>

  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-700">Em dự đoán tháp tuổi của quần thể có dạng:</p>
    <div class="flex flex-wrap gap-2">
      {#each SHAPE_CHOICES as c (c.value)}
        <button
          type="button"
          class={guess === c.value ? button.primary : button.quiet}
          aria-pressed={guess === c.value}
          onclick={() => (guess = c.value)}>{c.label}</button
        >
      {/each}
    </div>
  </div>

  {#if verdict}
    <FeedbackNote tone={guess === answer ? 'ok' : 'warn'} text={verdict} />
    {#key scenarioId}
      <PopulationChart
        kind="pyramid"
        bind:groups
        label="Tháp tuổi của quần thể {scenario.title.toLowerCase()}"
      />
    {/key}
    <p class="text-sm text-slate-700">
      Dùng nút − / + để thay đổi các nhóm tuổi.
      {#if changed}
        Với tỉ lệ mới, tháp có dạng {PYRAMID_LABELS[shape].toLowerCase()}.
      {/if}
      {forecast(shape)}
    </p>
  {/if}
</div>

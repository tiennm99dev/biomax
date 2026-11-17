<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import GenerationChart from '../_shared/generation-chart.svelte';
  import { FACTORS, GENERATIONS, STRENGTH, factorNote, trajectories } from './engine.js';

  const COLORS = ['#4f46e5', '#e11d48', '#059669', '#d97706', '#0284c7', '#7c3aed'];

  let factor = $state(/** @type {import('./engine.js').Factor} */ ('chon-loc'));
  /** @type {Record<import('./engine.js').Factor, number>} */
  let strength = $state({
    'dot-bien': 2,
    'dong-gene': 10,
    'phieu-bat': 20,
    'giao-phoi': 100,
    'chon-loc': 30,
  });
  let startPercent = $state(50);
  /** @type {'lan' | 'troi'} */
  let against = $state('lan');
  let seed = $state(1);

  const control = $derived(STRENGTH[factor]);
  const k = $derived(factor === 'phieu-bat' ? strength[factor] : strength[factor] / 100);
  const lines = $derived(trajectories(factor, startPercent / 100, k, { against, seed }));
  const series = $derived(lines.map((l, i) => ({ ...l, color: COLORS[i % COLORS.length] })));
  const note = $derived(factorNote(factor, lines, strength[factor], against));

  /** @param {string | number} v */
  function setFactor(v) {
    const found = FACTORS.find((f) => f.id === v);
    if (found) factor = found.id;
  }

  /** @param {number} v */
  function setStrength(v) {
    strength = { ...strength, [factor]: v };
  }

  const summary = $derived(
    series
      .map(
        (s) =>
          `${s.name}: từ ${formatNumber(s.values[0], 2)} đến ${formatNumber(s.values[GENERATIONS], 2)}`,
      )
      .join('; '),
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Nhân tố tiến hoá"
    options={FACTORS.map((f) => ({ value: f.id, label: f.name }))}
    value={factor}
    onchange={setFactor}
  />

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Tần số allele A ban đầu (p)"
      value={startPercent}
      min={10}
      max={90}
      step={5}
      format={(v) => formatNumber(v / 100, 2)}
      oninput={(v) => (startPercent = v)}
    />
    {#key factor}
      <SliderField
        label={control.label}
        value={strength[factor]}
        min={control.min}
        max={control.max}
        step={control.step}
        unit={control.unit}
        oninput={setStrength}
      />
    {/key}
  </div>

  {#if factor === 'chon-loc'}
    <SegmentedControl
      label="Kiểu hình bị đào thải"
      options={[
        { value: 'lan', label: 'Kiểu hình lặn (aa)' },
        { value: 'troi', label: 'Kiểu hình trội (AA, Aa)' },
      ]}
      value={against}
      onchange={(v) => (against = v === 'troi' ? 'troi' : 'lan')}
    />
  {/if}
  {#if factor === 'phieu-bat'}
    <button type="button" class={button.secondary} onclick={() => (seed += 1)}>Chạy lại</button>
  {/if}

  <GenerationChart
    {series}
    min={0}
    max={1}
    generations={GENERATIONS}
    unit="tần số"
    faded={factor === 'phieu-bat'}
    label="Biến đổi qua {GENERATIONS} thế hệ. {summary}."
  />

  <FeedbackNote tone="info" text={note} />
</div>

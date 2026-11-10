<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { PRESSURE_TEXT, classifyPressure } from './engine.js';

  let systolic = $state(118);
  let diastolic = $state(76);

  const kind = $derived(classifyPressure(systolic, diastolic));
  const info = $derived(PRESSURE_TEXT[kind]);
</script>

<div class="space-y-3">
  <div
    class="mx-auto max-w-xs rounded-2xl border-4 border-slate-700 bg-slate-800 p-4 font-mono text-emerald-300"
    role="img"
    aria-label="Màn hình máy đo: huyết áp tối đa {systolic}, tối thiểu {diastolic} milimét thuỷ ngân"
  >
    <div class="flex items-baseline justify-between">
      <span class="text-xs text-slate-300">Tối đa (SYS)</span>
      <span class="text-3xl tabular-nums">{systolic}</span>
    </div>
    <div class="flex items-baseline justify-between">
      <span class="text-xs text-slate-300">Tối thiểu (DIA)</span>
      <span class="text-3xl tabular-nums">{diastolic}</span>
    </div>
    <p class="text-right text-xs text-slate-300">mmHg</p>
  </div>

  <SliderField label="Huyết áp tối đa" bind:value={systolic} min={70} max={200} unit="mmHg" />
  <SliderField label="Huyết áp tối thiểu" bind:value={diastolic} min={40} max={130} unit="mmHg" />

  <FeedbackNote tone={info.tone} text="{info.name}. {info.text}" />
</div>

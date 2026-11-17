<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import SeriesChart from '../_shared/series-chart.svelte';
  import {
    RIVALS,
    competition,
    competitionOutcome,
    explainPredation,
    predatorPrey,
  } from './engine.js';

  const PREY_SPAN = 60;
  const RIVAL_SPAN = 120;

  let mode = $state(/** @type {'san-moi' | 'canh-tranh'} */ ('san-moi'));
  let prey0 = $state(200);
  let predators0 = $state(30);
  let t = $state(0);
  let overlap = $state(0.4);

  const hunt = $derived(predatorPrey(prey0, predators0, PREY_SPAN));
  const rivals = $derived(competition(overlap, RIVAL_SPAN));
  const outcome = $derived(competitionOutcome(overlap));

  /** @param {number} v */
  const whole = (v) => formatNumber(Math.round(v));
  /** @param {number} v */
  const alpha = (v) => formatNumber(v, 1);

  const huntText = $derived(
    `Thời điểm t = ${t}: ${whole(hunt.a[t])} con mồi, ${whole(hunt.b[t])} vật ăn thịt. ${explainPredation(hunt, t)}`,
  );

  const rivalText = $derived.by(() => {
    if (overlap === 0)
      return `Hai loài không dùng chung nguồn sống (ổ sinh thái tách biệt): không cạnh tranh, mỗi loài tăng tới sức chứa riêng, ${whole(RIVALS.k1)} và ${whole(RIVALS.k2)} cá thể.`;
    if (outcome.kind === 'coexist')
      return `Ổ sinh thái trùng nhau một phần (α = ${alpha(overlap)}): hai loài cạnh tranh nên đều có số lượng thấp hơn khi sống riêng, nhưng vẫn cùng tồn tại, khoảng ${whole(outcome.a)} và ${whole(outcome.b)} cá thể. Trùng càng ít, cạnh tranh càng nhẹ.`;
    return `Ổ sinh thái trùng nhau quá nhiều (α = ${alpha(overlap)}): loài 1 cạnh tranh mạnh hơn, loài 2 giảm dần tới bị loại trừ khỏi quần xã (cạnh tranh loại trừ). Muốn cùng tồn tại, hai loài phải phân li ổ sinh thái.`;
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Mối quan hệ"
    options={[
      { value: 'san-moi', label: 'Vật ăn thịt – con mồi' },
      { value: 'canh-tranh', label: 'Cạnh tranh' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'san-moi'}
    <SeriesChart
      series={[
        { name: 'Con mồi (thỏ)', values: hunt.a, color: '#16a34a' },
        { name: 'Vật ăn thịt (linh miêu)', values: hunt.b, color: '#dc2626', dash: '6 4' },
      ]}
      at={t}
      unit="Số cá thể"
      timeUnit="t ="
      label="Số con mồi và vật ăn thịt theo thời gian; tại t = {t}: {whole(
        hunt.a[t],
      )} con mồi, {whole(hunt.b[t])} vật ăn thịt"
    />
    <div class="grid gap-3 sm:grid-cols-3">
      <SliderField label="Con mồi ban đầu" bind:value={prey0} min={50} max={400} step={10} />
      <SliderField label="Vật ăn thịt ban đầu" bind:value={predators0} min={0} max={100} step={5} />
      <SliderField label="Thời điểm t" bind:value={t} min={0} max={PREY_SPAN} />
    </div>
    <FeedbackNote tone="info" text={huntText} />
  {:else}
    <SeriesChart
      series={[
        { name: 'Loài 1', values: rivals.a, color: '#2563eb' },
        { name: 'Loài 2', values: rivals.b, color: '#d97706', dash: '6 4' },
      ]}
      unit="Số cá thể"
      timeUnit="t ="
      label="Số cá thể của hai loài cạnh tranh với mức trùng ổ sinh thái {alpha(
        overlap,
      )}: cuối cùng loài 1 có {whole(rivals.a[RIVAL_SPAN])}, loài 2 có {whole(
        rivals.b[RIVAL_SPAN],
      )} cá thể"
    />
    <SliderField
      label="Mức trùng lặp ổ sinh thái α"
      bind:value={overlap}
      min={0}
      max={1}
      step={0.1}
      format={alpha}
    />
    <FeedbackNote tone={outcome.kind === 'coexist' ? 'ok' : 'warn'} text={rivalText} />
  {/if}
</div>

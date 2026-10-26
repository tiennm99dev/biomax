<script>
  import BarChart from '#lib/core/visuals/bar-chart.svelte';
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { ACTION_BINS, ACTION_CARDS, BIOMES, biomeById, predictionFeedback } from './engine.js';

  let mode = $state(/** @type {'compare' | 'protect'} */ ('compare'));

  let guess = $state(BIOMES.map((b) => ({ label: b.short, value: 100 })));
  let revealed = $state(false);
  let message = $state(
    'Kéo đỉnh mỗi cột (hoặc dùng phím mũi tên) để dự đoán số loài thực vật ở mỗi môi trường, rồi bấm "Kiểm tra dự đoán".',
  );
  let biomeId = $state(BIOMES[0].id);
  const biome = $derived(biomeById(biomeId));
  const actual = BIOMES.map((b) => ({ label: b.short, value: b.species }));
  const cards = shuffled(ACTION_CARDS, 38);

  function check() {
    const r = predictionFeedback(guess.map((g) => g.value));
    message = r.text;
    if (r.ok) revealed = true;
  }

  function showAnyway() {
    revealed = true;
    message =
      'Số liệu minh họa: rừng mưa nhiệt đới khoảng 300 loài, hoang mạc khoảng 40 loài, đới lạnh khoảng 25 loài trên ô quan sát cùng diện tích.';
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hoạt động"
    options={[
      { value: 'compare', label: 'So sánh môi trường' },
      { value: 'protect', label: 'Bảo vệ đa dạng sinh học' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'compare'}
    <div class="grid gap-4 lg:grid-cols-2">
      <div>
        <BarChart
          bind:data={guess}
          interactive
          max={400}
          step={10}
          unit="Số loài"
          title="Dự đoán của em"
          width={420}
          height={280}
        />
      </div>
      {#if revealed}
        <div>
          <BarChart
            data={actual}
            max={400}
            unit="Số loài"
            title="Số liệu minh họa"
            width={420}
            height={280}
          />
        </div>
      {/if}
    </div>
    <p class="text-xs text-slate-600">
      Số loài thực vật trên một ô quan sát có cùng diện tích; số liệu minh họa, làm tròn, chỉ để so
      sánh.
    </p>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={check}>Kiểm tra dự đoán</button>
      {#if !revealed}
        <button type="button" class={button.quiet} onclick={showAnyway}>Xem số liệu</button>
      {/if}
    </div>
    <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
      {message}
    </p>

    <SegmentedControl
      label="Tìm hiểu môi trường"
      options={BIOMES.map((b) => ({ value: b.id, label: b.short }))}
      bind:value={biomeId}
    />
    <article
      class="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-sm"
      aria-live="polite"
    >
      <h3 class="font-bold text-emerald-900">{biome.name}</h3>
      <p class="mt-1 text-slate-800"><strong>Khí hậu:</strong> {biome.climate}</p>
      <p class="text-slate-800"><strong>Sinh vật tiêu biểu:</strong> {biome.organisms}</p>
      <p class="text-slate-800"><strong>Vì sao:</strong> {biome.adaptation}</p>
    </article>
  {:else}
    <p class="text-sm text-slate-700">
      Xếp mỗi hoạt động của con người vào ô phù hợp: nó làm suy giảm hay bảo vệ đa dạng sinh học?
    </p>
    <CardSorter
      {cards}
      bins={ACTION_BINS}
      label="Hoạt động làm suy giảm hay bảo vệ đa dạng sinh học"
      hintOnWrong
    />
  {/if}
</div>

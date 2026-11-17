<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import LineChart from '#lib/core/visuals/line-chart.svelte';
  import { MEASURES, YEARS, planNotes, speciesByYear, summary } from './engine.js';

  /** @typedef {import('./engine.js').MeasureId} MeasureId */

  /** @type {MeasureId[]} */
  let chosen = $state([]);

  const shown = Array.from({ length: YEARS / 2 + 1 }, (_, i) => i * 2);
  const labels = shown.map((t) => String(t));
  /** @param {number[]} s */
  const sample = (s) => shown.map((t) => s[t]);
  const baseline = sample(speciesByYear([]));

  const series = $derived([
    { name: 'Theo kế hoạch đã chọn', values: sample(speciesByYear(chosen)), color: '#047857' },
    { name: 'Không can thiệp', values: baseline, color: '#b45309' },
  ]);
  const notes = $derived(planNotes(chosen));
  const line = $derived(summary(chosen));
</script>

<div class="space-y-4">
  <fieldset class="space-y-2">
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Chọn các biện pháp phục hồi khu đầm tôm bỏ hoang
    </legend>
    {#each MEASURES as m (m.id)}
      <label
        class="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 text-sm has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50 has-[:focus-visible]:ring-2 border-slate-300 has-[:focus-visible]:ring-indigo-500"
      >
        <input
          type="checkbox"
          class="mt-1 h-4 w-4 shrink-0 accent-emerald-700 {focusRing}"
          value={m.id}
          bind:group={chosen}
        />
        <span class="min-w-0 flex-1">
          <span class="block text-slate-900">{m.name}</span>
          {#if chosen.includes(m.id)}
            <span
              class="mt-0.5 inline-block rounded bg-white px-1.5 text-xs font-semibold text-emerald-800"
            >
              {m.tag}
            </span>
          {/if}
        </span>
      </label>
    {/each}
  </fieldset>

  <LineChart
    {labels}
    {series}
    min={0}
    max={60}
    unit="Số loài"
    title="Số loài trong khu vực theo năm (trục ngang: năm)"
    showValues={false}
    height={260}
  />
  <p class="text-xs text-slate-600">Mô hình minh hoạ xu hướng, số liệu không phải số đo thực tế.</p>

  <FeedbackNote tone={notes[0].tone === 'ok' ? 'ok' : 'info'} text={line} />
  <ul class="space-y-2" aria-label="Nhận xét về kế hoạch">
    {#each notes as n (n.text)}
      <li><FeedbackNote tone={n.tone} text={n.text} /></li>
    {/each}
  </ul>
</div>

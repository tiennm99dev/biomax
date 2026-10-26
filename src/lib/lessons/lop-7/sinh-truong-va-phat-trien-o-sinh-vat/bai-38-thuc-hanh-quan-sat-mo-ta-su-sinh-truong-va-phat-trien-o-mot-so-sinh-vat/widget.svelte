<script>
  import LineChart from '#lib/core/visuals/line-chart.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { DAYS, SAMPLE, analyse, leadingHeights, readHeight } from './engine.js';

  /** @type {string[]} */
  let texts = $state(Array.from({ length: DAYS }, () => ''));

  const heights = $derived(leadingHeights(texts));
  const result = $derived(analyse(heights));
  const labels = $derived(heights.map((_, i) => `Ngày ${i + 1}`));
  const series = $derived([{ name: 'Chiều cao cây', values: heights, color: '#059669' }]);
  const badCell = $derived(texts.findIndex((t) => readHeight(t) === null));

  function sample() {
    texts = [...SAMPLE];
  }

  function clear() {
    texts = Array.from({ length: DAYS }, () => '');
  }
</script>

<div class="space-y-4">
  <div class="overflow-x-auto">
    <table class="w-full min-w-[20rem] border-collapse text-sm">
      <caption class="mb-2 text-left font-semibold text-slate-700">
        Sổ theo dõi chiều cao cây đậu (cm)
      </caption>
      <thead>
        <tr class="bg-slate-100 text-slate-700">
          <th scope="col" class="px-2 py-2 text-left">Ngày</th>
          <th scope="col" class="px-2 py-2 text-left">Chiều cao (cm)</th>
          <th scope="col" class="px-2 py-2 text-left">Cao thêm so với hôm trước</th>
        </tr>
      </thead>
      <tbody>
        {#each texts as _, i (i)}
          <tr class="border-b border-slate-200">
            <th scope="row" class="px-2 py-1 text-left font-semibold text-slate-700">{i + 1}</th>
            <td class="px-2 py-1">
              <input
                type="text"
                inputmode="decimal"
                class="min-h-11 w-24 rounded-lg border px-2 tabular-nums {badCell === i
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-slate-300'} {focusRing}"
                aria-label="Chiều cao cây ngày {i + 1}, xăng-ti-mét"
                aria-invalid={badCell === i}
                bind:value={texts[i]}
              />
            </td>
            <td class="px-2 py-1 tabular-nums text-slate-700">
              {i >= 1 && i < heights.length
                ? `${formatNumber(result.increases[i - 1] ?? 0, 1)} cm`
                : ''}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={sample}>Dùng số liệu mẫu</button>
    <button type="button" class={button.quiet} onclick={clear}>Xoá bảng</button>
  </div>

  {#if heights.length >= 2}
    <LineChart {labels} {series} unit="cm" title="Đồ thị sinh trưởng của cây đậu" />
  {/if}

  <FeedbackNote
    tone={badCell >= 0 ? 'warn' : result.ok ? 'ok' : heights.length >= 2 ? 'warn' : 'info'}
    text={badCell >= 0
      ? `Ô ngày ${badCell + 1} chưa đọc được: nhập một số từ 0 đến 200, dùng dấu phẩy cho phần thập phân (ví dụ 3,5).`
      : result.text}
  />
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import BarChart from '#lib/core/visuals/bar-chart.svelte';
  import { DISEASES, MAX_HOUSEHOLDS, SAMPLE, emptyTally, observations, shares } from './engine.js';

  let households = $state(0);
  let tally = $state(emptyTally());
  let usingSample = $state(false);

  const rows = $derived(shares(tally, households));
  const chart = $derived(rows.map((r) => ({ label: r.name, value: r.share })));
  const notes = $derived(observations(tally, households));
  const any = $derived(households > 0 && rows.some((r) => r.count > 0));

  function useSample() {
    households = SAMPLE.households;
    tally = { ...emptyTally(), ...SAMPLE.tally };
    usingSample = true;
  }

  function clear() {
    households = 0;
    tally = emptyTally();
    usingSample = false;
  }
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={useSample}>Dùng số liệu mẫu</button>
    <button type="button" class={button.quiet} onclick={clear}>Xoá số liệu</button>
  </div>
  {#if usingSample}
    <p class="text-xs text-slate-600">
      Số liệu mẫu của 40 hộ là số liệu tự đặt để luyện cách xử lí; hãy thay bằng kết quả điều tra
      thật của nhóm.
    </p>
  {/if}

  <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 p-2">
    <span class="text-sm font-semibold text-slate-800">Số hộ đã khảo sát</span>
    <Stepper
      label="Số hộ đã khảo sát"
      bind:value={households}
      min={0}
      max={MAX_HOUSEHOLDS}
      format={(v) => `${formatNumber(v)} hộ`}
    />
  </div>

  <p class="text-sm font-semibold text-slate-800">
    Trong 12 tháng qua, gia đình có người mắc bệnh nào dưới đây? (chọn được nhiều bệnh)
  </p>
  <ul class="space-y-2" aria-label="Số hộ có người mắc mỗi bệnh">
    {#each DISEASES as d (d.id)}
      <li class="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 p-2">
        <span class="min-w-0 flex-1 text-sm text-slate-800">{d.name}</span>
        <Stepper
          label="Số hộ có người mắc {d.name.toLowerCase()}"
          bind:value={tally[d.id]}
          min={0}
          max={MAX_HOUSEHOLDS}
          format={(v) => `${formatNumber(v)} hộ`}
        />
      </li>
    {/each}
  </ul>

  {#if any}
    <BarChart
      data={chart}
      max={100}
      unit="Tỉ lệ số hộ (%)"
      title="Tỉ lệ số hộ có người mắc mỗi bệnh trong 12 tháng"
      height={280}
    />
    <p class="text-xs text-slate-600">
      Một hộ có thể có người mắc nhiều bệnh, nên tổng các tỉ lệ có thể khác 100%.
    </p>
  {/if}

  <section aria-label="Nhận xét cho báo cáo" class="space-y-2">
    <h4 class="text-sm font-bold text-slate-800">Nhận xét cho báo cáo</h4>
    {#each notes as note, i (i)}
      <FeedbackNote tone={note.tone} text={note.text} />
    {/each}
  </section>
</div>

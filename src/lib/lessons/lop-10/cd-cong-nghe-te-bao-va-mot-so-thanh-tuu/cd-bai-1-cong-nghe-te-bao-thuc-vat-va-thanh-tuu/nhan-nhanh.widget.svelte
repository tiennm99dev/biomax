<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { WEEKS_PER_CYCLE, compareText, shootChain } from './engine.js';

  let factor = $state(3);
  let cycles = $state(6);

  const chain = $derived(shootChain(factor, cycles));
  const top = $derived(chain[chain.length - 1]);
</script>

<div class="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
  <p class="text-sm font-bold text-slate-900">Một chồi sau nhiều lần cấy chuyền</p>
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Số chồi mới từ mỗi chồi" min={2} max={5} bind:value={factor} />
    <SliderField
      label="Số chu kì ({WEEKS_PER_CYCLE} tuần mỗi chu kì)"
      min={1}
      max={8}
      bind:value={cycles}
    />
  </div>
  <ol class="space-y-1 text-sm" aria-label="Số chồi sau mỗi chu kì">
    {#each chain as count, i (i)}
      <li class="grid grid-cols-[4.5rem_1fr_5rem] items-center gap-2">
        <span class="text-slate-600">{i === 0 ? 'Ban đầu' : `Chu kì ${i}`}</span>
        <span class="h-3 rounded bg-slate-100" aria-hidden="true">
          <span
            class="block h-3 rounded bg-emerald-500"
            style:width="{Math.max(1, (count / top) * 100)}%"
          ></span>
        </span>
        <span class="text-right font-semibold tabular-nums text-slate-800">{fmt(count)}</span>
      </li>
    {/each}
  </ol>
  <FeedbackNote tone="info" text={compareText(factor, cycles)} />
  <p class="text-xs text-slate-600">
    Các con số là giả định để so sánh: mỗi chu kì {WEEKS_PER_CYCLE} tuần, mọi chồi đều sống, và một cây
    mẹ cho khoảng 20 cành giâm mỗi năm. Thực tế phụ thuộc vào từng loài.
  </p>
</div>

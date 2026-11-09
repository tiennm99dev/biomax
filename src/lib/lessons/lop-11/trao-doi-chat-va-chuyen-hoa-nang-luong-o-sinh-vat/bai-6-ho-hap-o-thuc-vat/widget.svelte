<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { PATHS, atpPerGlucose, glucoseFor, pathAtOxygen, stageNote, totals } from './engine.js';

  let o2 = $state(21);
  /** @type {'ethanol' | 'lactate'} */
  let ferment = $state('ethanol');
  let done = $state(0);

  /** @type {import('./engine.js').PathId} */
  const path = $derived(pathAtOxygen(o2) === 'hieu-khi' ? 'aerobic' : ferment);
  const stages = $derived(PATHS[path]);
  const sum = $derived(totals(path, done));
  const note = $derived(stageNote(path, done));
  const finished = $derived(done >= stages.length);
  const NEED = 64;
  const BARS = [
    { id: 'aerobic', name: 'Hô hấp hiếu khí', atp: atpPerGlucose('aerobic') },
    { id: 'ferment', name: 'Lên men', atp: atpPerGlucose('ethanol') },
  ];

  const o2Note = $derived(
    o2 < 5
      ? 'Dưới khoảng $5\\%$ $\\mathrm{O_2}$: cây chuyển sang lên men.'
      : o2 < 10
        ? 'Dưới khoảng $10\\%$ $\\mathrm{O_2}$: hô hấp hiếu khí đã bị ảnh hưởng.'
        : 'Đủ $\\mathrm{O_2}$: hô hấp hiếu khí.',
  );

  function reset() {
    done = 0;
  }

  /** @param {string | number} v */
  function chooseFerment(v) {
    ferment = v === 'lactate' ? 'lactate' : 'ethanol';
    reset();
  }
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Nồng độ O₂ quanh tế bào"
      bind:value={o2}
      min={0}
      max={21}
      unit="%"
      oninput={reset}
    />
    {#if path !== 'aerobic'}
      <SegmentedControl
        label="Kiểu lên men"
        value={ferment}
        onchange={chooseFerment}
        options={[
          { value: 'ethanol', label: 'Lên men rượu' },
          { value: 'lactate', label: 'Lên men lactic' },
        ]}
      />
    {/if}
  </div>
  <p class="text-sm text-slate-700"><LiveRichText text={o2Note} /></p>

  <ol class="space-y-2" aria-label="Các giai đoạn phân giải một phân tử glucose">
    {#each stages as s, i (s.id)}
      <li
        class="rounded-xl border px-3 py-2 text-sm {i < done
          ? 'border-emerald-400 bg-emerald-50'
          : 'border-slate-200 bg-white text-slate-500'}"
      >
        <div class="flex flex-wrap justify-between gap-2">
          <span class="font-semibold">{i + 1}. {s.name}</span>
          <span>{s.place}</span>
        </div>
        {#if i < done}
          <div class="mt-1 text-slate-700">
            <LiveRichText
              text={`Tạo ra: ${s.atp > 0 ? `${formatNumber(s.atp)} ATP; ` : ''}${s.nadh > 0 ? `${s.nadh} NADH; ` : ''}${s.fadh2 > 0 ? `${s.fadh2} FADH₂; ` : ''}${s.nadh < 0 ? `dùng ${-s.nadh} NADH; ` : ''}${s.fadh2 < 0 ? `dùng ${-s.fadh2} FADH₂; ` : ''}sản phẩm ${s.product}.`}
            />
          </div>
        {/if}
      </li>
    {/each}
  </ol>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={finished} onclick={() => (done += 1)}>
      Chạy giai đoạn tiếp
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  <p class="text-sm tabular-nums" aria-live="polite">
    Cộng dồn: {formatNumber(sum.atp)} ATP, {Math.max(0, sum.nadh)} NADH, {Math.max(0, sum.fadh2)} FADH₂,
    {sum.co2} CO₂.
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="rounded-xl bg-slate-50 p-3 text-sm">
    <p class="mb-2 font-semibold">ATP thu được từ một phân tử glucose</p>
    {#each BARS as row (row.id)}
      <div class="mb-1 flex items-center gap-2">
        <span class="w-32 shrink-0">{row.name}</span>
        <div class="h-3 flex-1 overflow-hidden rounded bg-slate-200">
          <div
            class="h-3 rounded {row.id === 'aerobic' ? 'bg-emerald-600' : 'bg-amber-500'}"
            style="width: {(row.atp / 32) * 100}%"
          ></div>
        </div>
        <span class="w-14 text-right tabular-nums">{row.atp} ATP</span>
      </div>
    {/each}
    {#if finished}
      <p class="mt-2" aria-live="polite">
        Muốn có {NEED} ATP, tế bào cần {glucoseFor(path, NEED)} phân tử glucose theo con đường vừa chạy.
      </p>
    {/if}
  </div>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { PATHWAYS, pairBonds } from './engine.js';

  let id = $state(PATHWAYS[0].id);
  const path = $derived(PATHWAYS.find((p) => p.id === id) ?? PATHWAYS[0]);
  let shown = $state(1);
  const finished = $derived(shown >= path.steps.length);
  const first = $derived(path.steps[0].pair);
  const last = $derived(path.steps[path.steps.length - 1].pair);

  /** @param {string} b */
  const odd = (b) => b.includes('*') || b === '5-BU';

  const note = $derived(
    finished
      ? {
          tone: /** @type {const} */ ('ok'),
          text: `${path.steps[shown - 1].text} Kết quả: ${path.result}; số liên kết hydrogen của cặp này đổi từ ${pairBonds(first)} thành ${pairBonds(last)}. Phân tử DNA con ở các nhánh còn lại vẫn bình thường.`,
        }
      : { tone: /** @type {const} */ ('info'), text: path.steps[shown - 1].text },
  );
</script>

<div class="space-y-3 rounded-xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">
    Đột biến thay thế phát sinh qua các lần tái bản
  </p>
  <SegmentedControl
    label="Nguyên nhân"
    bind:value={id}
    onchange={() => (shown = 1)}
    options={PATHWAYS.map((p) => ({ value: p.id, label: p.label }))}
  />
  <ol class="flex flex-wrap items-center gap-2" aria-label="Các cặp nucleotide qua từng bước">
    {#each path.steps.slice(0, shown) as s, i (i)}
      <li class="flex items-center gap-2">
        {#if i > 0}<span aria-hidden="true" class="text-slate-400">→</span>{/if}
        <span
          class="flex flex-col items-center rounded-lg border border-slate-300 px-2 py-1 font-mono text-sm font-bold"
        >
          {#each s.pair as b, k (k)}
            <span class={odd(b) ? 'text-rose-700' : 'text-slate-800'}>{b}</span>
            {#if k === 0}<span class="text-xs text-slate-400" aria-hidden="true">|</span><span
                class="sr-only">bắt cặp với</span
              >{/if}
          {/each}
        </span>
      </li>
    {/each}
  </ol>
  <FeedbackNote tone={note.tone} text={note.text} />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} disabled={finished} onclick={() => (shown += 1)}
      >Bước tiếp theo</button
    >
    <button type="button" class={button.quiet} onclick={() => (shown = 1)}>Làm lại</button>
  </div>
</div>

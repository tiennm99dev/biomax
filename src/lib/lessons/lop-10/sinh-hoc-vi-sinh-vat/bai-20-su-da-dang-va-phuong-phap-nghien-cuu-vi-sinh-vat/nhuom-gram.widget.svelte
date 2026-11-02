<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { button } from '#lib/core/ui.js';
  import { COLOURS, REAGENTS, colourAfter, isNextReagent, nextReagent } from './engine.js';

  /** Cells of each sample: a tight cluster of rods. */
  const CELLS = [
    [28, 24],
    [52, 20],
    [76, 26],
    [36, 44],
    [62, 42],
    [84, 48],
    [24, 62],
    [50, 66],
    [74, 68],
  ];

  let done = $state(0);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Hai mẫu vi khuẩn đã được cố định trên lam kính. Chọn thuốc đầu tiên cần nhỏ lên.',
  });

  const finished = $derived(nextReagent(done) === null);
  const samples = $derived(
    /** @type {const} */ (['positive', 'negative']).map((wall) => ({
      wall,
      title: wall === 'positive' ? 'Mẫu A' : 'Mẫu B',
      colour: COLOURS[colourAfter(wall, done)],
    })),
  );

  /** @param {string} id */
  function add(id) {
    const reagent = REAGENTS.find((r) => r.id === id);
    if (!reagent) return;
    if (!isNextReagent(done, id)) {
      note = {
        tone: 'warn',
        text: `Chưa đến lượt ${reagent.name}. Thuốc tẩy chỉ có tác dụng sau khi tế bào đã bắt màu, và thuốc nhuộm bổ sung dùng sau cùng.`,
      };
      return;
    }
    done += 1;
    note = {
      tone: 'ok',
      text: `${reagent.does}${finished ? ' Mẫu tím là vi khuẩn Gram dương, mẫu đỏ là vi khuẩn Gram âm.' : ''}`,
    };
  }

  function reset() {
    done = 0;
    note = { tone: 'info', text: 'Chọn thuốc đầu tiên cần nhỏ lên hai mẫu.' };
  }
</script>

<div class="space-y-3 rounded-2xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">Nhuộm Gram thử trên hai mẫu</p>

  <div class="grid grid-cols-2 gap-2">
    {#each samples as s (s.wall)}
      <figure class="rounded-xl bg-slate-50 p-2 text-center">
        <svg
          viewBox="0 0 110 90"
          class="mx-auto block w-full max-w-44"
          role="img"
          aria-label="{s.title}: tế bào {s.colour.name}"
        >
          {#each CELLS as [x, y], i (i)}
            <rect
              x={x - 9}
              y={y - 4}
              width="18"
              height="8"
              rx="4"
              fill={s.colour.fill}
              stroke={s.colour.stroke}
              stroke-width="1"
              transform="rotate({(i * 37) % 60} {x} {y})"
            />
          {/each}
        </svg>
        <figcaption class="text-sm font-semibold text-slate-700">
          {s.title}: {s.colour.name}
          {#if finished}
            <span class="block font-normal">
              {s.wall === 'positive' ? 'Gram dương (Gr+)' : 'Gram âm (Gr−)'}
            </span>
          {/if}
        </figcaption>
      </figure>
    {/each}
  </div>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn thuốc nhỏ lên mẫu">
    {#each REAGENTS as r, i (r.id)}
      <button type="button" class={button.quiet} disabled={i < done} onclick={() => add(r.id)}>
        <LiveRichText text={r.name} />
      </button>
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <button type="button" class={button.secondary} onclick={reset}>Nhuộm lại</button>
</div>

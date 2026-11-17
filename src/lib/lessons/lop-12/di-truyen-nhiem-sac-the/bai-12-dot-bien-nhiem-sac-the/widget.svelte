<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import ChromosomeStrip from '../_shared/chromosome-strip.svelte';
  import { OP_NAMES, START_A, START_B, applyOp, makeChromosome } from '../_shared/mutations.js';
  import { explain } from './engine.js';

  const ORIGINAL = makeChromosome('A', START_A);
  const OPS = /** @type {const} */ (['mat', 'lap', 'dao', 'chuyen']);

  let a = $state(makeChromosome('A', START_A));
  let b = $state(makeChromosome('B', START_B));
  /** @type {number | null} */
  let from = $state(null);
  /** @type {number | null} */
  let to = $state(null);
  /** @type {string[]} */
  let history = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Chạm vào gene đầu và gene cuối của một đoạn trên nhiễm sắc thể vàng, rồi chọn một dạng đột biến.',
  });

  /** @param {number} i */
  function pick(i) {
    if (from === null || to !== null) {
      from = i;
      to = null;
      note = {
        tone: 'info',
        text: `Đã chọn gene ${a[i].label}. Chạm gene cuối của đoạn (hoặc chọn luôn dạng đột biến cho đoạn 1 gene).`,
      };
    } else {
      to = i;
      const lo = Math.min(from, i);
      const hi = Math.max(from, i);
      note = {
        tone: 'info',
        text: `Đoạn đã chọn: ${a
          .slice(lo, hi + 1)
          .map((g) => g.label)
          .join('')}. Chọn một dạng đột biến.`,
      };
    }
  }

  /** @param {import('../_shared/mutations.js').StructuralOp} op */
  function run(op) {
    if (from === null) {
      note = { tone: 'warn', text: 'Hãy chọn một đoạn trước.' };
      return;
    }
    const lo = Math.min(from, to ?? from);
    const hi = Math.max(from, to ?? from);
    const before = { a, b };
    const out = applyOp(op, a, b, lo, hi);
    if ('error' in out) {
      note = { tone: 'warn', text: out.error };
      return;
    }
    note = { tone: 'ok', text: explain(op, before, out, lo, hi) };
    history = [...history, OP_NAMES[op]];
    a = out.a;
    b = out.b;
    from = null;
    to = null;
  }

  function reset() {
    a = makeChromosome('A', START_A);
    b = makeChromosome('B', START_B);
    from = null;
    to = null;
    history = [];
    note = { tone: 'info', text: 'Đã đặt lại hai nhiễm sắc thể ban đầu.' };
  }
</script>

<div class="space-y-4">
  <div class="space-y-3 rounded-xl bg-slate-50 p-3">
    <ChromosomeStrip genes={ORIGINAL} label="Nhiễm sắc thể ban đầu (để so sánh)" />
    <ChromosomeStrip genes={a} label="Nhiễm sắc thể đang biến đổi" {from} {to} onpick={pick} />
    <ChromosomeStrip genes={b} label="Một nhiễm sắc thể khác, không tương đồng" />
  </div>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Dạng đột biến cấu trúc">
    {#each OPS as op (op)}
      <button type="button" class={button.secondary} onclick={() => run(op)}>{OP_NAMES[op]}</button>
    {/each}
    <button type="button" class={button.quiet} onclick={reset}>Đặt lại</button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if history.length}
    <p class="text-sm text-slate-600">Các biến đổi đã làm: {history.join(' → ')}.</p>
  {/if}
</div>

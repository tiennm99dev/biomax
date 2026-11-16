<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { AMINO_ACIDS, CODON_TABLE, RNA_BASES, STOP } from '#lib/domain/codons.js';
  import {
    GENES,
    cut,
    intronIndices,
    matureMrna,
    preMrna,
    proteinText,
    readCodons,
    spliced,
  } from './engine.js';

  let geneId = $state(GENES[0].id);
  const gene = $derived(GENES.find((g) => g.id === geneId) ?? GENES[0]);

  /** 'gene' → 'pre' (processing) → 'mature' (translation) */
  let stage = $state('gene');
  /** @type {number[]} */
  let removed = $state([]);
  let capped = $state(false);
  let tailed = $state(false);
  /** Codons read by the ribosome so far. */
  let read = $state(0);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Gene phân mảnh: exon (xanh) xen kẽ intron (xám). Bấm "Phiên mã" để tạo tiền mRNA.',
  });

  const pre = $derived(preMrna(gene));
  const introns = $derived(intronIndices(gene));
  const allCut = $derived(introns.every((i) => removed.includes(i)));
  const ready = $derived(allCut && capped && tailed);
  const mrna = $derived(matureMrna(gene));
  const codons = $derived(readCodons(mrna));
  const current = $derived(read > 0 ? codons[read - 1] : null);
  const chain = $derived(
    codons
      .slice(0, read)
      .filter((c) => c.aa !== STOP)
      .map((c) => c.aa),
  );

  function restart() {
    stage = 'gene';
    removed = [];
    capped = false;
    tailed = false;
    read = 0;
    note = {
      tone: 'info',
      text: 'Gene phân mảnh: exon (xanh) xen kẽ intron (xám). Bấm "Phiên mã" để tạo tiền mRNA.',
    };
  }

  function transcribe() {
    stage = 'pre';
    note = {
      tone: 'ok',
      text: "RNA polymerase trượt trên mạch khuôn theo chiều 3' → 5', tạo tiền mRNA 5' → 3' chứa cả exon lẫn intron. Hãy chế biến: chạm vào từng intron để cắt bỏ, gắn mũ và đuôi poly A.",
    };
  }

  /** @param {number} i */
  function tap(i) {
    const r = cut(gene, i, removed);
    removed = r.removed;
    note = { tone: r.ok ? 'ok' : 'warn', text: r.text };
  }

  function toCytoplasm() {
    if (!ready) {
      const missing = [
        !allCut && 'cắt hết intron',
        !capped && "gắn mũ ở đầu 5'",
        !tailed && "gắn đuôi poly A ở đầu 3'",
      ].filter(Boolean);
      note = {
        tone: 'warn',
        text: `Tiền mRNA chưa trưởng thành, cần ${missing.join(', ')}.${allCut ? '' : ` Nếu giữ intron, chuỗi polypeptide sẽ là ${proteinText(spliced(gene, removed))}, khác hẳn chuỗi đúng ${proteinText(mrna)}.`}`,
      };
      return;
    }
    stage = 'mature';
    read = 0;
    note = {
      tone: 'ok',
      text: 'mRNA trưởng thành qua lỗ màng nhân ra tế bào chất. Bấm "Ribosome dịch một bộ ba" để dịch mã từ bộ ba mở đầu AUG.',
    };
  }

  function step() {
    if (read >= codons.length) return;
    read += 1;
    const c = codons[read - 1];
    note =
      c.aa === STOP
        ? {
            tone: 'ok',
            text: `Bộ ba ${c.codon} là mã kết thúc: không có tRNA nào khớp, ribosome tách khỏi mRNA và chuỗi polypeptide ${chainText([...chain])} được giải phóng; sau đó Met mở đầu được cắt bỏ, còn ${chainText(chain.slice(1)) || '(trống)'}.`,
          }
        : {
            tone: 'ok',
            text: `Bộ ba ${c.codon} khớp với bộ ba đối mã ${c.anticodon} của tRNA mang ${c.aa} (${AMINO_ACIDS[c.aa]?.name}); ${read === 1 ? 'đây là bộ ba mở đầu.' : 'liên kết peptide hình thành với amino acid trước.'}`,
          };
  }

  /** @param {string[]} aas */
  const chainText = (aas) => aas.join(' – ');

  /** @type {Record<string, string>} */
  const SEG = {
    exon: 'border-sky-500 bg-sky-50 text-sky-900',
    intron: 'border-slate-400 bg-slate-100 text-slate-600',
  };
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chọn gene"
    bind:value={geneId}
    onchange={restart}
    options={GENES.map((g) => ({ value: g.id, label: g.label }))}
  />

  <ol class="grid gap-1 text-xs text-slate-600 sm:grid-cols-3" aria-label="Các giai đoạn">
    <li class={stage === 'gene' ? 'font-bold text-indigo-700' : ''}>1. Phiên mã (trong nhân)</li>
    <li class={stage === 'pre' ? 'font-bold text-indigo-700' : ''}>2. Chế biến tiền mRNA</li>
    <li class={stage === 'mature' ? 'font-bold text-indigo-700' : ''}>3. Dịch mã (tế bào chất)</li>
  </ol>

  {#if stage === 'gene'}
    <div class="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
      <p class="text-xs text-slate-500">Mạch mã hoá của gene (5' → 3'), vùng mã hoá</p>
      <div class="flex flex-wrap gap-1 font-mono text-sm">
        {#each gene.segments as s, i (i)}
          <span class="rounded border-2 px-1 {SEG[s.kind]}" title={s.kind}
            >{s.seq}<span class="sr-only"> ({s.kind})</span></span
          >
        {/each}
      </div>
      <button type="button" class={button.primary} onclick={transcribe}>Phiên mã</button>
    </div>
  {:else if stage === 'pre'}
    <div class="space-y-3 rounded-xl border border-slate-200 bg-white p-3">
      <p class="text-xs text-slate-500">Tiền mRNA (5' → 3'): chạm vào đoạn cần cắt bỏ</p>
      <div class="flex flex-wrap items-center gap-1 font-mono text-sm">
        {#if capped}<span class="rounded bg-violet-600 px-1 font-sans text-xs text-white">mũ</span
          >{/if}
        {#each pre as s, i (i)}
          {#if !removed.includes(i)}
            <button
              type="button"
              class="min-h-11 rounded border-2 px-1 {SEG[s.kind]} {focusRing}"
              aria-label="Đoạn {s.seq}, {s.kind}"
              onclick={() => tap(i)}>{s.seq}</button
            >
          {/if}
        {/each}
        {#if tailed}<span class="rounded bg-violet-600 px-1 text-xs text-white">AAAA…</span>{/if}
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.secondary}
          disabled={capped}
          onclick={() => {
            capped = true;
            note = { tone: 'ok', text: "Đã gắn mũ 7-methyl guanine ở đầu 5' của mRNA." };
          }}>Gắn mũ 5'</button
        >
        <button
          type="button"
          class={button.secondary}
          disabled={tailed}
          onclick={() => {
            tailed = true;
            note = { tone: 'ok', text: "Đã gắn đuôi poly A ở đầu 3' của mRNA." };
          }}>Gắn đuôi poly A</button
        >
        <button type="button" class={button.primary} onclick={toCytoplasm}
          >Đưa ra tế bào chất</button
        >
      </div>
    </div>
  {:else}
    <div class="space-y-3 rounded-xl border border-slate-200 bg-white p-3">
      <p class="text-xs text-slate-500">mRNA trưởng thành (5' → 3'), đọc từng bộ ba</p>
      <div class="flex flex-wrap gap-1 font-mono text-sm">
        {#each codons as c, i (i)}
          <span
            class="rounded px-1 {i === read - 1
              ? 'bg-indigo-600 text-white'
              : i < read
                ? 'bg-emerald-100 text-emerald-900'
                : 'bg-slate-100 text-slate-700'}">{c.codon}</span
          >
        {/each}
      </div>
      {#if current}
        <dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          <dt class="text-slate-500">Bộ ba mã sao</dt>
          <dd class="font-mono">5'-{current.codon}-3'</dd>
          <dt class="text-slate-500">Bộ ba đối mã (tRNA)</dt>
          <dd class="font-mono">
            {current.anticodon ? `3'-${current.anticodon}-5'` : 'không có tRNA'}
          </dd>
          <dt class="text-slate-500">Chuỗi polypeptide</dt>
          <dd class="font-semibold">{chainText(chain) || '(chưa có)'}</dd>
        </dl>
      {/if}
      <button type="button" class={button.primary} disabled={read >= codons.length} onclick={step}
        >Ribosome dịch một bộ ba</button
      >
    </div>

    <p id="codon-table-title" class="pb-1 text-sm text-slate-600">
      Bảng mã di truyền (bộ ba trên mRNA); ô được tô màu là bộ ba đang đọc
    </p>
    <div class="overflow-x-auto">
      <table
        class="w-full min-w-[30rem] border-collapse text-center font-mono text-xs"
        aria-labelledby="codon-table-title"
      >
        <thead>
          <tr>
            <th class="border border-slate-200 bg-slate-50 p-1 font-sans">1 \ 2</th>
            {#each RNA_BASES as b (b)}<th class="border border-slate-200 bg-slate-50 p-1">{b}</th
              >{/each}
          </tr>
        </thead>
        <tbody>
          {#each RNA_BASES as f (f)}
            <tr>
              <th class="border border-slate-200 bg-slate-50 p-1">{f}</th>
              {#each RNA_BASES as s (s)}
                <td class="border border-slate-200 p-0.5">
                  {#each RNA_BASES as t (t)}
                    {@const c = `${f}${s}${t}`}
                    <div
                      class="rounded {current?.codon === c
                        ? 'bg-indigo-600 text-white'
                        : CODON_TABLE[c] === STOP
                          ? 'text-rose-700'
                          : ''}"
                    >
                      {c}
                      {CODON_TABLE[c] === STOP ? 'KT' : CODON_TABLE[c]}
                    </div>
                  {/each}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
      <p class="pt-1 text-xs text-slate-500">
        KT: bộ ba kết thúc. AUG là bộ ba mở đầu, mã hoá Met.
      </p>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
  <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
</div>

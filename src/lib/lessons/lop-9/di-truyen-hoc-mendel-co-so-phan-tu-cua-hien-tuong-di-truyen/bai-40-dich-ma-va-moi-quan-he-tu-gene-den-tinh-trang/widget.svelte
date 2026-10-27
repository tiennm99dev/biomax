<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import { AMINO_ACIDS, CODON_TABLE, RNA_BASES, STOP } from '#lib/domain/codons.js';
  import {
    MAX_BASES,
    PRESETS,
    anticodon,
    chainText,
    checkLookup,
    readingFrame,
    sanitize,
  } from './engine.js';

  let mrna = $state(PRESETS[0]);
  /** Number of codons already decoded. */
  let done = $state(0);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let note = $state(null);

  const frame = $derived(readingFrame(mrna));
  const current = $derived(frame.codons[done] ?? null);
  const chain = $derived(
    frame.codons
      .slice(0, done)
      .map((c) => c.aa)
      .filter((aa) => aa !== STOP),
  );
  const finished = $derived(frame.start >= 0 && done === frame.codons.length);

  /** @param {string} next */
  function load(next) {
    mrna = sanitize(next);
    done = 0;
    note = null;
  }

  /** @param {string} codon */
  function pick(codon) {
    const c = current;
    if (!c) return;
    const r = checkLookup(c.codon, codon);
    if (!r.ok) {
      note = { tone: 'warn', text: r.text };
      return;
    }
    done += 1;
    if (c.aa === STOP || done === frame.codons.length) {
      note = {
        tone: 'ok',
        text:
          c.aa === STOP
            ? `${codon} là bộ ba kết thúc: không có tRNA nào khớp, ribosome rời mRNA và chuỗi polypeptide ${chainText(chain)} được giải phóng.`
            : `Đã đọc hết mRNA mà chưa gặp bộ ba kết thúc; chuỗi hiện có: ${chainText(chain)}.`,
      };
    } else {
      const aa = CODON_TABLE[codon];
      note = {
        tone: 'ok',
        text: `${codon} mã hoá ${AMINO_ACIDS[aa]?.name ?? aa} (${aa}). tRNA có bộ ba đối mã ${anticodon(codon)} mang ${aa} tới ribosome; ${done === 1 ? 'đây là amino acid mở đầu.' : 'liên kết peptide nối nó vào chuỗi.'}`,
      };
    }
  }

  function autoRun() {
    done = frame.codons.length;
    note = {
      tone: 'ok',
      text: frame.stopped
        ? `Chuỗi polypeptide: ${chainText(frame.codons.filter((c) => c.aa !== STOP).map((c) => c.aa))}.`
        : 'Đã dịch hết mRNA nhưng chưa gặp bộ ba kết thúc.',
    };
  }

  const status = $derived.by(() => {
    if (note) return note;
    if (frame.start < 0) {
      return {
        tone: /** @type {const} */ ('warn'),
        text: 'Không có bộ ba mở đầu AUG: ribosome không bắt đầu dịch mã được. Hãy thêm AUG vào mRNA.',
      };
    }
    return {
      tone: /** @type {const} */ ('info'),
      text: `Ribosome trượt trên mRNA và dừng ở bộ ba mở đầu AUG (vị trí ${frame.start + 1}). Tìm bộ ba đang sáng trong bảng mã di truyền và chạm vào nó.`,
    };
  });

  /** Groups of the mRNA for display: bases outside the frame, then codons. */
  const groups = $derived.by(() => {
    /** @type {Array<{ text: string, codon: number }>} */
    const out = [];
    const s = sanitize(mrna);
    const start = frame.start < 0 ? s.length : frame.start;
    const end = frame.start < 0 ? s.length : start + frame.codons.length * 3;
    for (let i = 0; i < start; i++) out.push({ text: s[i], codon: -1 });
    frame.codons.forEach((c, k) => out.push({ text: c.codon, codon: k }));
    for (let i = end; i < s.length; i++) out.push({ text: s[i], codon: -1 });
    return out;
  });
</script>

<div class="space-y-4">
  <div class="space-y-2">
    <label class="block text-sm font-semibold text-slate-700">
      mRNA (5' → 3'), tối đa {MAX_BASES} nucleotide
      <input
        class="{textInput} mt-1 font-mono tracking-wider uppercase"
        value={mrna}
        oninput={(e) => {
          load(e.currentTarget.value);
          e.currentTarget.value = mrna;
        }}
        autocomplete="off"
        spellcheck="false"
      />
    </label>
    <div class="flex flex-wrap gap-2" role="group" aria-label="mRNA mẫu">
      {#each PRESETS as p, i (p)}
        <button type="button" class={button.quiet} onclick={() => load(p)}>Mẫu {i + 1}</button>
      {/each}
    </div>
  </div>

  <ol class="flex flex-wrap gap-1 font-mono text-base" aria-label="mRNA chia theo bộ ba">
    {#each groups as g, i (i)}
      <li
        class="rounded px-1.5 py-1 {g.codon < 0
          ? 'text-slate-400'
          : g.codon < done
            ? 'bg-emerald-100 text-emerald-900'
            : g.codon === done
              ? 'bg-indigo-600 font-bold text-white'
              : 'bg-slate-100 text-slate-800'}"
        aria-current={g.codon === done ? 'step' : undefined}
      >
        {g.text}
      </li>
    {/each}
  </ol>

  <div class="flex min-h-11 flex-wrap items-center gap-1" aria-label="Chuỗi polypeptide">
    <span class="text-sm font-semibold text-slate-700">Chuỗi polypeptide:</span>
    {#each chain as aa, i (i)}
      <span
        class="rounded-full px-2.5 py-1 text-sm font-bold {aa === 'Met'
          ? 'bg-emerald-600 text-white'
          : 'bg-amber-200 text-amber-950'}">{aa}</span
      >{#if i < chain.length - 1}<span aria-hidden="true">–</span>{/if}
    {/each}
    {#if !chain.length}<span class="text-sm text-slate-500">(chưa có)</span>{/if}
    {#if finished && frame.stopped}
      <span class="rounded-full bg-rose-600 px-2.5 py-1 text-sm font-bold text-white"
        >được giải phóng</span
      >
    {/if}
  </div>

  {#if current}
    <p class="text-sm text-slate-700">
      Bộ ba đang đọc: <strong class="font-mono">{current.codon}</strong>{current.aa !== STOP
        ? `, tRNA khớp sẽ có bộ ba đối mã ${anticodon(current.codon)}`
        : ''}.
    </p>
  {/if}

  <FeedbackNote tone={status.tone} text={status.text} />

  <div class="overflow-x-auto">
    <table class="w-full min-w-[20rem] border-collapse text-xs">
      <caption class="pb-1 text-left text-sm font-semibold text-slate-700">
        Bảng mã di truyền: khối hàng theo chữ cái thứ nhất, cột theo chữ cái thứ hai
      </caption>
      <thead>
        <tr>
          <th class="w-6"></th>
          {#each RNA_BASES as second (second)}
            <th class="py-1 text-center font-bold text-slate-700">{second}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each RNA_BASES as first (first)}
          {#each RNA_BASES as third, k (third)}
            <tr class={k === 0 ? 'border-t-2 border-slate-400' : ''}>
              {#if k === 0}
                <th rowspan="4" class="text-center text-sm font-bold text-slate-700">{first}</th>
              {/if}
              {#each RNA_BASES as second (second)}
                {@const codon = `${first}${second}${third}`}
                {@const aa = CODON_TABLE[codon]}
                <td class="p-0.5">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between gap-1 rounded px-1 py-1.5 font-mono {aa ===
                    STOP
                      ? 'bg-rose-50 text-rose-800'
                      : codon === 'AUG'
                        ? 'bg-emerald-50 text-emerald-800'
                        : 'bg-white text-slate-800'} hover:bg-indigo-50 disabled:cursor-default {focusRing}"
                    disabled={!current}
                    aria-label="{codon}: {aa === STOP ? 'bộ ba kết thúc' : AMINO_ACIDS[aa].name}"
                    onclick={() => pick(codon)}
                  >
                    <span>{codon}</span>
                    <span class="font-sans font-semibold">{aa === STOP ? 'KT' : aa}</span>
                  </button>
                </td>
              {/each}
            </tr>
          {/each}
        {/each}
      </tbody>
    </table>
    <p class="mt-1 text-xs text-slate-600">
      KT: bộ ba kết thúc (UAA, UAG, UGA). AUG: bộ ba mở đầu, mã hoá Met.
    </p>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={() => load(mrna)}>Dịch lại từ đầu</button>
    <button type="button" class={button.quiet} onclick={autoRun} disabled={frame.start < 0}
      >Dịch tự động</button
    >
  </div>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { GENES, afterRounds, check, dnaPartner, replicate } from './engine.js';

  /** @type {Record<string, string>} */
  const COLORS = { A: '#dc2626', T: '#d97706', G: '#059669', C: '#0284c7', U: '#7c3aed' };
  /** @type {Record<string, string>} */
  const NAMES = { A: 'adenine', T: 'thymine', G: 'guanine', C: 'cytosine', U: 'uracil' };

  let mode = $state('rep');
  let geneIndex = $state(0);
  const s1 = $derived(GENES[geneIndex]);
  const s2 = $derived([...s1].map(dnaPartner).join(''));

  // Replication: phase 'intact' → 'fill' → 'done'. New strand 1 pairs with
  // s1 (top), new strand 2 with s2 (bottom); filled in that order.
  let phase = $state('intact');
  /** @type {string[]} */
  let new1 = $state([]);
  /** @type {string[]} */
  let new2 = $state([]);
  // Transcription.
  /** @type {string[]} */
  let rna = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({ tone: 'info', text: '' });
  let rounds = $state(1);

  const L = $derived(s1.length);
  const repSlot = $derived(
    new1.length < L
      ? { row: 1, i: new1.length, template: s1[new1.length] }
      : new2.length < L
        ? { row: 2, i: new2.length, template: s2[new2.length] }
        : null,
  );
  const rnaDone = $derived(rna.length === L);
  const palette = $derived(mode === 'rep' ? ['A', 'T', 'G', 'C'] : ['A', 'U', 'G', 'C', 'T']);
  const canPlace = $derived(mode === 'rep' ? phase === 'fill' && repSlot !== null : !rnaDone);

  function intro() {
    note =
      mode === 'rep'
        ? {
            tone: 'info',
            text: 'Phân tử DNA mẹ gồm hai mạch liên kết bổ sung. Bấm "Tháo xoắn" để tách hai mạch.',
          }
        : {
            tone: 'info',
            text: "Enzyme RNA polymerase trượt trên mạch khuôn theo chiều 3' → 5'. Chọn ribonucleotide bổ sung cho vị trí đang sáng.",
          };
  }
  intro();

  function reset() {
    phase = 'intact';
    new1 = [];
    new2 = [];
    rna = [];
    intro();
  }

  function nextGene() {
    geneIndex = (geneIndex + 1) % GENES.length;
    reset();
  }

  function unzip() {
    phase = 'fill';
    note = {
      tone: 'info',
      text: 'Hai mạch đã tách nhau, mỗi mạch làm khuôn. Chọn (hoặc kéo) nucleotide tự do bổ sung cho vị trí đang sáng.',
    };
  }

  /** @param {string} b */
  function place(b) {
    if (!canPlace) return;
    if (mode === 'rep') {
      const slot = repSlot;
      if (!slot) return;
      const r = check('dna', slot.template, b);
      if (!r.ok) {
        note = { tone: 'warn', text: `Chưa đúng: ${r.reason}` };
        return;
      }
      if (slot.row === 1) new1 = [...new1, b];
      else new2 = [...new2, b];
      if (new2.length === L) {
        phase = 'done';
        note = {
          tone: 'ok',
          text: 'Hoàn thành: từ một phân tử DNA mẹ tạo ra hai phân tử DNA con giống hệt nhau và giống mẹ. Mỗi phân tử con có một mạch cũ (xanh đậm) và một mạch mới (cam): nguyên tắc bán bảo toàn.',
        };
      } else if (slot.row === 1 && new1.length === L) {
        note = { tone: 'ok', text: 'Xong mạch mới thứ nhất. Tiếp tục với mạch khuôn thứ hai.' };
      } else {
        note = { tone: 'ok', text: `Đúng: ${r.reason}` };
      }
    } else {
      const r = check('rna', s2[rna.length], b);
      if (!r.ok) {
        note = { tone: 'warn', text: `Chưa đúng: ${r.reason}` };
        return;
      }
      rna = [...rna, b];
      note =
        rna.length === L
          ? {
              tone: 'ok',
              text: `Hoàn thành: mRNA 5' → 3' là ${rna.join('')}. So với mạch mã hoá ${s1}: giống hệt, chỉ khác U thay cho T. mRNA rời nhân ra tế bào chất.`,
            }
          : { tone: 'ok', text: `Đúng: ${r.reason}` };
    }
  }

  function autoFill() {
    if (mode === 'rep') {
      if (phase === 'intact') phase = 'fill';
      new1 = [...s2];
      new2 = [...s1];
      phase = 'done';
      note = {
        tone: 'ok',
        text: 'Đã điền nhanh. Mỗi phân tử con có một mạch cũ và một mạch mới: nguyên tắc bán bảo toàn.',
      };
    } else {
      rna = [...s1.replace(/T/g, 'U')];
      note = {
        tone: 'ok',
        text: `Đã điền nhanh: mRNA là ${rna.join('')}, giống mạch mã hoá với U thay T.`,
      };
    }
  }

  /** @param {DragEvent} e @param {string} b */
  function dragStart(e, b) {
    e.dataTransfer?.setData('text/plain', b);
  }
  /** @param {DragEvent} e */
  function drop(e) {
    e.preventDefault();
    const b = e.dataTransfer?.getData('text/plain');
    if (b) place(b);
  }

  const counts = $derived(afterRounds(rounds, 2 * L));
  const daughters = $derived(replicate(s1));
</script>

{#snippet strand(
  /** @type {string} */ label,
  /** @type {Array<string | undefined>} */ cells,
  /** @type {'old' | 'new' | 'rna'} */ kind,
  /** @type {number} */ active,
)}
  <div class="flex items-center gap-2">
    <span class="w-24 shrink-0 text-[11px] leading-tight text-slate-600">{label}</span>
    <ol class="grid flex-1 gap-1" style="grid-template-columns: repeat({L}, minmax(0, 1fr))">
      {#each Array.from({ length: L }, (_, i) => cells[i]) as b, i (i)}
        <li
          class="flex h-9 items-center justify-center rounded-md border-2 font-mono text-base font-bold {kind ===
          'old'
            ? 'border-blue-900'
            : kind === 'new'
              ? 'border-orange-500'
              : 'border-violet-500'} {i === active ? 'ring-2 ring-indigo-500 ring-offset-1' : ''}"
          style={b ? `background-color: ${COLORS[b]}; color: white` : 'background-color: #f8fafc'}
          aria-label={b ? `${NAMES[b]} (${b})` : i === active ? 'vị trí đang chờ' : 'trống'}
        >
          {b ?? ''}
        </li>
      {/each}
    </ol>
  </div>
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Quá trình"
    bind:value={mode}
    onchange={reset}
    options={[
      { value: 'rep', label: 'Tái bản DNA' },
      { value: 'tx', label: 'Phiên mã' },
    ]}
  />

  <div
    class="space-y-1 rounded-xl border border-slate-200 bg-white p-3"
    role="group"
    aria-label={mode === 'rep' ? 'Đoạn DNA đang tái bản' : 'Gene đang phiên mã'}
    ondragover={(e) => e.preventDefault()}
    ondrop={drop}
  >
    {#if mode === 'rep'}
      {#if phase === 'intact'}
        {@render strand("Mạch 1 (5' → 3')", [...s1], 'old', -1)}
        {@render strand("Mạch 2 (3' → 5')", [...s2], 'old', -1)}
      {:else if phase === 'fill'}
        {@render strand("Mạch khuôn 1 (5' → 3')", [...s1], 'old', -1)}
        {@render strand("Mạch mới (3' → 5')", new1, 'new', repSlot?.row === 1 ? repSlot.i : -1)}
        <div class="h-4 border-b border-dashed border-slate-300" aria-hidden="true"></div>
        {@render strand("Mạch mới (5' → 3')", new2, 'new', repSlot?.row === 2 ? repSlot.i : -1)}
        {@render strand("Mạch khuôn 2 (3' → 5')", [...s2], 'old', -1)}
      {:else}
        <p class="text-xs font-semibold text-slate-700">Phân tử DNA con thứ nhất</p>
        {@render strand('Mạch cũ', [...daughters[0].old], 'old', -1)}
        {@render strand('Mạch mới', [...daughters[0].fresh], 'new', -1)}
        <p class="pt-2 text-xs font-semibold text-slate-700">Phân tử DNA con thứ hai</p>
        {@render strand('Mạch mới', [...daughters[1].fresh], 'new', -1)}
        {@render strand('Mạch cũ', [...daughters[1].old], 'old', -1)}
      {/if}
    {:else}
      {@render strand("Mạch mã hoá (5' → 3')", [...s1], 'old', -1)}
      {@render strand("Mạch khuôn (3' → 5')", [...s2], 'old', rnaDone ? -1 : rna.length)}
      <div class="h-3" aria-hidden="true"></div>
      {@render strand("mRNA (5' → 3')", rna, 'rna', rnaDone ? -1 : rna.length)}
    {/if}
  </div>

  {#if mode === 'rep' && phase === 'intact'}
    <button type="button" class={button.primary} onclick={unzip}>Tháo xoắn, tách hai mạch</button>
  {/if}

  {#if canPlace}
    <div
      class="flex flex-wrap gap-2"
      role="group"
      aria-label={mode === 'rep' ? 'Nucleotide tự do' : 'Ribonucleotide tự do'}
    >
      {#each palette as b (b)}
        <button
          type="button"
          draggable="true"
          ondragstart={(e) => dragStart(e, b)}
          class="min-h-11 min-w-11 cursor-grab rounded-full font-mono text-lg font-bold text-white {focusRing}"
          style="background-color: {COLORS[b]}"
          aria-label="Đặt {NAMES[b]} ({b})"
          onclick={() => place(b)}>{b}</button
        >
      {/each}
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
    <button type="button" class={button.quiet} onclick={nextGene}>Đoạn DNA khác</button>
    <button type="button" class={button.quiet} onclick={autoFill}>Điền nhanh</button>
  </div>

  {#if mode === 'rep'}
    <div class="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
      <Stepper label="Số lần tái bản k" bind:value={rounds} min={1} max={6} />
      <div class="flex flex-wrap gap-1" aria-hidden="true">
        {#each Array.from({ length: counts.molecules }, (_, i) => i) as i (i)}
          <span class="flex h-6 w-4 overflow-hidden rounded-sm">
            <span class="w-1/2 {i < 2 ? 'bg-blue-900' : 'bg-orange-400'}"></span>
            <span class="w-1/2 bg-orange-400"></span>
          </span>
        {/each}
      </div>
      <p class="text-sm text-slate-700" aria-live="polite">
        Sau {rounds} lần tái bản: {counts.molecules} phân tử DNA con; chỉ {counts.withOldStrand} phân
        tử còn mang một mạch cũ của DNA mẹ, {counts.allNew} phân tử gồm hai mạch hoàn toàn mới. Với đoạn
        {2 * L} nucleotide này, môi trường cung cấp {fmt(counts.freeNucleotides)} nucleotide tự do.
      </p>
    </div>
  {/if}
</div>

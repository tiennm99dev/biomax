<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { polar } from '#lib/core/visuals/svg-math.js';
  import {
    CELLS,
    ENZYME_IDS,
    cutDonor,
    cutPlasmid,
    ligate,
    pcrPositive,
    stickyEnd,
  } from './engine.js';

  /** @typedef {import('./engine.js').Enzyme} Enzyme */

  /** Angle (0 = top, clockwise) of each site on the plasmid ring. @type {Record<Enzyme, number>} */
  const ANGLE = { EcoRI: 0, BamHI: 70, HindIII: 200 };
  /** x of each site on the donor DNA (HindIII inside the gene, no BamHI). */
  const DONOR_X = { left: 248, right: 352, inner: 300 };

  /** @type {Enzyme | null} */
  let vectorCut = $state(null);
  /** @type {Enzyme | null} */
  let geneCut = $state(null);
  let joined = $state(false);
  let transformed = $state(false);
  let screened = $state(false);
  /** @type {number | null} */
  let grown = $state(null);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Bước 1: chọn enzyme cắt giới hạn để cắt mở plasmid (thể truyền).',
  });

  const vectorOk = $derived(vectorCut !== null && cutPlasmid(vectorCut).ok);
  const geneOk = $derived(geneCut !== null && cutDonor(geneCut).ok);

  /** @param {Enzyme} e */
  function cutVector(e) {
    vectorCut = e;
    joined = false;
    transformed = false;
    screened = false;
    grown = null;
    const r = cutPlasmid(e);
    note = {
      tone: r.ok ? 'ok' : 'warn',
      text: r.ok ? `${r.text} Bước 2: cắt DNA chứa gene insulin.` : r.text,
    };
  }

  /** @param {Enzyme} e */
  function cutGene(e) {
    geneCut = e;
    joined = false;
    transformed = false;
    screened = false;
    grown = null;
    const r = cutDonor(e);
    note = {
      tone: r.ok ? 'ok' : 'warn',
      text: r.ok ? `${r.text} Bước 3: nối gene vào plasmid.` : r.text,
    };
  }

  function join() {
    if (!vectorCut || !geneCut) {
      note = { tone: 'warn', text: 'Cần cắt cả plasmid và DNA chứa gene trước khi nối.' };
      return;
    }
    const r = ligate(vectorCut, geneCut);
    joined = r.ok;
    note = {
      tone: r.ok ? 'ok' : 'warn',
      text: r.ok ? `${r.text} Bước 4: đưa DNA tái tổ hợp vào vi khuẩn.` : r.text,
    };
  }

  function transform() {
    transformed = true;
    note = {
      tone: 'info',
      text: `Xử lí E. coli bằng $\\mathrm{CaCl_2}$ (hoặc xung điện) để màng dãn, DNA đi vào tế bào. Chỉ một số tế bào nhận plasmid, và có plasmid đã đóng vòng lại mà không mang gene. Bước 5: sàng lọc bằng PCR.`,
    };
  }

  function screen() {
    screened = true;
    note = {
      tone: 'ok',
      text: `PCR với cặp mồi đặc hiệu gene insulin chỉ cho sản phẩm ở ${CELLS.filter(pcrPositive).length} tế bào mang DNA tái tổ hợp (viền xanh). Chọn một tế bào đó để nhân nuôi.`,
    };
  }

  /** @param {number} i */
  function pick(i) {
    if (!screened) return;
    if (!pcrPositive(CELLS[i])) {
      note = {
        tone: 'warn',
        text:
          CELLS[i] === 'empty'
            ? 'Tế bào này chỉ mang plasmid không có gene insulin, PCR âm tính.'
            : 'Tế bào này không nhận plasmid nào, PCR âm tính.',
      };
      return;
    }
    grown = i;
    note = {
      tone: 'ok',
      text: 'Dòng vi khuẩn mang gene insulin được nuôi cấy, sinh sản rất nhanh; gene được phiên mã, dịch mã tạo insulin người, sau đó tách chiết và tinh sạch để làm thuốc chữa bệnh tiểu đường.',
    };
  }

  function reset() {
    vectorCut = null;
    geneCut = null;
    joined = false;
    transformed = false;
    screened = false;
    grown = null;
    note = {
      tone: 'info',
      text: 'Bước 1: chọn enzyme cắt giới hạn để cắt mở plasmid (thể truyền).',
    };
  }

  const R = 46;
  const C = { x: 92, y: 82 };
  /** SVG arc along the ring, clockwise from a to b degrees. @param {number} a @param {number} b */
  function arc(a, b) {
    const p = polar(C.x, C.y, R, a);
    const q = polar(C.x, C.y, R, b);
    const large = (b - a + 360) % 360 > 180 ? 1 : 0;
    return `M ${p.x} ${p.y} A ${R} ${R} 0 ${large} 1 ${q.x} ${q.y}`;
  }
  const gap = $derived(vectorOk && vectorCut ? ANGLE[vectorCut] : null);

  const pill = `min-h-11 rounded-lg border px-3 text-sm font-semibold ${focusRing}`;
</script>

<div class="space-y-4">
  <figure class="rounded-xl border border-slate-200 bg-white p-2">
    <svg
      viewBox="0 0 400 160"
      class="h-auto w-full"
      role="img"
      aria-label="Plasmid và đoạn DNA chứa gene insulin"
    >
      <!-- plasmid ring -->
      {#if gap === null}
        <circle cx={C.x} cy={C.y} r={R} fill="none" stroke="#0f766e" stroke-width="6" />
      {:else}
        <path d={arc(gap + 10, gap + 350)} fill="none" stroke="#0f766e" stroke-width="6" />
        {#if joined}
          <path d={arc(gap - 10, gap + 10)} fill="none" stroke="#f97316" stroke-width="9" />
        {/if}
      {/if}
      <path d={arc(170, 230)} fill="none" stroke="#7c3aed" stroke-width="6" />
      {#each ENZYME_IDS as e (e)}
        {@const p = polar(C.x, C.y, R + 14, ANGLE[e])}
        <text x={p.x} y={p.y + 3} font-size="11" text-anchor="middle" fill="#334155">{e}</text>
      {/each}
      <text x={C.x} y={C.y - 2} font-size="12" text-anchor="middle" fill="#0f766e">plasmid</text>
      <text x={C.x} y={C.y + 11} font-size="10" text-anchor="middle" fill="#7c3aed"
        >tím: vùng Ori</text
      >

      <!-- donor DNA -->
      {#if geneOk}
        <line x1="200" y1="110" x2={DONOR_X.left - 6} y2="110" stroke="#94a3b8" stroke-width="6" />
        <line x1={DONOR_X.right + 6} y1="110" x2="392" y2="110" stroke="#94a3b8" stroke-width="6" />
        {#if !joined}
          <line
            x1={DONOR_X.left}
            y1="74"
            x2={DONOR_X.right}
            y2="74"
            stroke="#f97316"
            stroke-width="8"
          />
          <text x="300" y="64" font-size="11" text-anchor="middle" fill="#9a3412"
            >gene insulin (đầu dính {stickyEnd('EcoRI')})</text
          >
        {/if}
      {:else}
        <line x1="200" y1="110" x2="392" y2="110" stroke="#94a3b8" stroke-width="6" />
        <line
          x1={DONOR_X.left}
          y1="110"
          x2={geneCut === 'HindIII' ? DONOR_X.inner - 4 : DONOR_X.right}
          y2="110"
          stroke="#f97316"
          stroke-width="8"
        />
        {#if geneCut === 'HindIII'}
          <line
            x1={DONOR_X.inner + 4}
            y1="110"
            x2={DONOR_X.right}
            y2="110"
            stroke="#f97316"
            stroke-width="8"
          />
        {/if}
        <text x="300" y="130" font-size="11" text-anchor="middle" fill="#9a3412">gene insulin</text>
      {/if}
      <text x={DONOR_X.left} y="100" font-size="10" text-anchor="middle" fill="#334155">EcoRI</text>
      <text x={DONOR_X.right} y="100" font-size="10" text-anchor="middle" fill="#334155">EcoRI</text
      >
      <text x={DONOR_X.inner} y="100" font-size="10" text-anchor="middle" fill="#334155"
        >HindIII</text
      >
      <text x="296" y="150" font-size="11" text-anchor="middle" fill="#475569"
        >DNA tế bào người</text
      >
    </svg>
  </figure>

  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-700">1. Cắt plasmid bằng</p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Enzyme cắt plasmid">
      {#each ENZYME_IDS as e (e)}
        <button
          type="button"
          class="{pill} {vectorCut === e
            ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
            : 'border-slate-300 bg-white text-slate-700'}"
          aria-pressed={vectorCut === e}
          onclick={() => cutVector(e)}>{e}</button
        >
      {/each}
    </div>
    <p class="text-sm font-semibold text-slate-700">2. Cắt DNA chứa gene bằng</p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Enzyme cắt DNA chứa gene">
      {#each ENZYME_IDS as e (e)}
        <button
          type="button"
          class="{pill} {geneCut === e
            ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
            : 'border-slate-300 bg-white text-slate-700'}"
          aria-pressed={geneCut === e}
          onclick={() => cutGene(e)}>{e}</button
        >
      {/each}
    </div>
  </div>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.secondary}
      disabled={!vectorOk || !geneOk || joined}
      onclick={join}>3. Nối bằng DNA ligase</button
    >
    <button
      type="button"
      class={button.secondary}
      disabled={!joined || transformed}
      onclick={transform}>4. Biến nạp vào E. coli</button
    >
    <button
      type="button"
      class={button.secondary}
      disabled={!transformed || screened}
      onclick={screen}>5. Sàng lọc bằng PCR</button
    >
  </div>

  {#if transformed}
    <div class="grid grid-cols-6 gap-2" role="group" aria-label="Các tế bào vi khuẩn sau biến nạp">
      {#each CELLS as c, i (i)}
        {@const plus = screened && pcrPositive(c)}
        <button
          type="button"
          class="flex min-h-11 flex-col items-center justify-center rounded-full border-4 bg-amber-50 text-xs {focusRing} {plus
            ? 'border-emerald-500'
            : screened
              ? 'border-slate-200 opacity-60'
              : 'border-amber-300'} {grown === i ? 'ring-2 ring-indigo-500' : ''}"
          aria-label="Tế bào {i + 1}{screened ? (plus ? ', PCR dương tính' : ', PCR âm tính') : ''}"
          disabled={!screened}
          onclick={() => pick(i)}
        >
          {#if screened && c !== 'none'}
            <span
              aria-hidden="true"
              class="h-3 w-3 rounded-full border-2 {c === 'recombinant'
                ? 'border-orange-500'
                : 'border-teal-600'}"
            ></span>
          {/if}
        </button>
      {/each}
    </div>
    <p class="text-xs text-slate-500">
      Sau sàng lọc, vòng nhỏ trong tế bào cho biết plasmid nó mang (cam: có gene insulin, xanh:
      không có gene).
    </p>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
  <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
</div>

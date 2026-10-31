<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { rng } from '#lib/core/drill.js';
  import { polar } from '#lib/core/visuals/svg-math.js';
  import { button } from '#lib/core/ui.js';
  import {
    ENZYMES,
    GENE_SPAN,
    HUMAN_DNA,
    PLASMID,
    STEPS,
    canJoin,
    complement,
    cutHuman,
    cutPlasmid,
    enzymeById,
    findCircularSites,
    findSites,
    humanCutText,
    plasmidCutText,
    stickyEnd,
    transform,
  } from './engine.js';

  const CELLS = 24;
  const BOTTOM = complement(HUMAN_DNA);

  let step = $state(0);
  let geneEnzymeId = $state(ENZYMES[1].id);
  let plasmidEnzymeId = $state(ENZYMES[2].id);
  let humanCut = $state(false);
  let plasmidCut = $state(false);
  let seed = $state(7);
  /** @type {boolean[]} */
  let cells = $state([]);
  let selected = $state(false);

  const geneEnzyme = $derived(enzymeById(geneEnzymeId));
  const plasmidEnzyme = $derived(enzymeById(plasmidEnzymeId));
  const human = $derived(cutHuman(geneEnzyme));
  const plasmid = $derived(cutPlasmid(plasmidEnzyme));
  const joined = $derived(step >= 3);
  const taken = $derived(cells.filter(Boolean).length);

  // Which bases are in a recognition site, and where the two strands are cut.
  const siteBases = $derived(
    new Set(
      findSites(HUMAN_DNA, geneEnzyme.site).flatMap((i) =>
        Array.from({ length: geneEnzyme.site.length }, (_, k) => i + k),
      ),
    ),
  );
  const topCuts = $derived(new Set(humanCut ? human.sites.map((i) => i + geneEnzyme.cut) : []));
  const bottomCuts = $derived(
    new Set(humanCut ? human.sites.map((i) => i + geneEnzyme.site.length - geneEnzyme.cut) : []),
  );

  /** @param {number} i */
  const inGene = (i) => i >= GENE_SPAN[0] && i < GENE_SPAN[1];

  /** @param {string | number} id */
  function chooseGeneEnzyme(id) {
    geneEnzymeId = String(id);
    humanCut = false;
  }

  /** @param {string | number} id */
  function choosePlasmidEnzyme(id) {
    plasmidEnzymeId = String(id);
    plasmidCut = false;
  }

  function goTo(/** @type {number} */ n) {
    step = n;
  }

  function join() {
    if (canJoin(geneEnzyme, plasmidEnzyme)) step = 3;
  }

  function addToBacteria() {
    seed += 1;
    cells = transform(CELLS, 0.3, rng(seed));
    if (!cells.some(Boolean)) cells[0] = true;
    selected = false;
    step = 4;
  }

  function select() {
    selected = true;
  }

  function restart() {
    step = 0;
    geneEnzymeId = ENZYMES[1].id;
    plasmidEnzymeId = ENZYMES[2].id;
    humanCut = false;
    plasmidCut = false;
    cells = [];
    selected = false;
  }

  const feedback = $derived.by(() => {
    if (step === 0)
      return humanCut
        ? humanCutText(geneEnzyme)
        : `${geneEnzyme.name} nhận ra trình tự ${geneEnzyme.site} (tô vàng). Gene insulin là đoạn tô xanh. Bấm "Cắt" để xem enzyme cắt ở đâu.`;
    if (step === 1)
      return plasmidCut
        ? plasmidCutText(plasmidEnzyme, geneEnzyme)
        : `Gene insulin đã có đầu dính ${stickyEnd(geneEnzyme)}. Chọn enzyme để mở vòng plasmid.`;
    if (step === 2)
      return 'Gene insulin và plasmid có đầu dính bổ sung với nhau. Thêm enzyme nối (ligase) để nối chúng thành DNA tái tổ hợp.';
    if (step === 3)
      return 'Đã tạo plasmid tái tổ hợp mang gene insulin. Chuyển plasmid này vào tế bào vi khuẩn E. coli.';
    if (!selected)
      return `${taken}/${CELLS} tế bào nhận được plasmid tái tổ hợp (có vòng tím), các tế bào khác thì không. Làm sao giữ lại đúng những tế bào đã nhận gene?`;
    return `Trên môi trường có kháng sinh, chỉ ${taken} tế bào mang plasmid (có gene kháng kháng sinh) sống sót. Chúng sinh sản rất nhanh, tạo dòng vi khuẩn mang gene insulin và sản xuất insulin người để chữa bệnh đái tháo đường.`;
  });

  const tone = $derived(
    (step === 0 && humanCut && human.outcome !== 'excised') ||
      (step === 1 && plasmidCut && !canJoin(geneEnzyme, plasmidEnzyme))
      ? 'warn'
      : (step === 0 && humanCut) || (step === 1 && plasmidCut) || selected
        ? 'ok'
        : 'info',
  );

  // Plasmid drawing.
  const C = 90;
  const R = 58;
  /** @param {number} i base index on the plasmid */
  const angleAt = (i) => (i / PLASMID.length) * 360;
  /** Arc along the ring from a to b degrees (clockwise from the top). @param {number} a @param {number} b @param {number} r */
  function arc(a, b, r) {
    const p = polar(C, C, r, a);
    const q = polar(C, C, r, b);
    return `M ${p.x} ${p.y} A ${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${q.x} ${q.y}`;
  }
  const marks = $derived(
    ENZYMES.flatMap((e) => findCircularSites(PLASMID, e.site).map((i) => ({ e, a: angleAt(i) }))),
  );
  const opened = $derived(step >= 1 && plasmidCut && plasmid.outcome === 'opened');
  const openAt = $derived(opened ? angleAt(plasmid.sites[0]) : 0);
</script>

<div class="space-y-4">
  <ol class="flex flex-wrap gap-1 text-xs" aria-label="Các bước">
    {#each STEPS as s, i (s)}
      <li
        class="rounded-full px-3 py-1 font-semibold {i === step
          ? 'bg-indigo-600 text-white'
          : i < step
            ? 'bg-emerald-100 text-emerald-800'
            : 'bg-slate-100 text-slate-500'}"
        aria-current={i === step ? 'step' : undefined}
      >
        {i + 1}. {s}
      </li>
    {/each}
  </ol>

  {#if step === 0}
    <SegmentedControl
      label="Enzyme cắt giới hạn cho DNA người"
      options={ENZYMES.map((e) => ({ value: e.id, label: `${e.name} (${e.site})` }))}
      value={geneEnzymeId}
      onchange={chooseGeneEnzyme}
    />
    <div
      class="flex flex-wrap font-mono text-sm leading-tight"
      role="img"
      aria-label="Đoạn DNA người hai mạch, gene insulin ở giữa{humanCut
        ? `, bị cắt tại ${human.sites.length} vị trí`
        : ''}"
    >
      {#each HUMAN_DNA as base, i (i)}
        <span
          class="inline-flex w-3.5 flex-col items-center {inGene(i)
            ? 'text-sky-800'
            : 'text-slate-500'}"
          aria-hidden="true"
        >
          <span
            class="w-full text-center {siteBases.has(i)
              ? 'bg-amber-200'
              : inGene(i)
                ? 'bg-sky-100'
                : ''} {topCuts.has(i) ? 'border-l-2 border-rose-600' : ''}">{base}</span
          >
          <span
            class="w-full text-center {siteBases.has(i)
              ? 'bg-amber-200'
              : inGene(i)
                ? 'bg-sky-100'
                : ''} {bottomCuts.has(i) ? 'border-l-2 border-rose-600' : ''}">{BOTTOM[i]}</span
          >
        </span>
      {/each}
    </div>
    <p class="text-xs text-slate-600">
      Trên: mạch 1; dưới: mạch bổ sung. Xanh: gene insulin (trình tự rút gọn, minh hoạ). Vàng: vị
      trí enzyme nhận ra. Vạch đỏ: chỗ cắt.
    </p>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={() => (humanCut = true)}>Cắt</button>
      {#if humanCut && human.outcome === 'excised'}
        <button type="button" class={button.secondary} onclick={() => goTo(1)}>
          Sang bước 2: mở plasmid
        </button>
      {/if}
    </div>
  {/if}

  {#if step >= 1}
    <div class="grid items-center gap-4 sm:grid-cols-[200px_1fr]">
      <svg
        viewBox="0 0 180 180"
        class="mx-auto h-auto w-48"
        role="img"
        aria-label={joined
          ? 'Plasmid tái tổ hợp mang gene insulin'
          : opened
            ? `Plasmid đã mở vòng tại vị trí ${plasmidEnzyme.name}`
            : 'Plasmid dạng vòng của vi khuẩn'}
      >
        {#if joined}
          <path d={arc(25, 335, R)} fill="none" stroke="#64748b" stroke-width="8" />
          <path d={arc(-25, 25, R)} fill="none" stroke="#0284c7" stroke-width="10" />
          <text x={C} y="20" text-anchor="middle" font-size="10" fill="#0369a1" font-weight="700"
            >gene insulin</text
          >
        {:else if opened}
          <path
            d={arc(openAt + 8, openAt + 352, R)}
            fill="none"
            stroke="#64748b"
            stroke-width="8"
          />
        {:else}
          <circle cx={C} cy={C} r={R} fill="none" stroke="#64748b" stroke-width="8" />
        {/if}
        <path d={arc(150, 260, R)} fill="none" stroke="#16a34a" stroke-width="8" />
        <text x={C} y={C + 4} text-anchor="middle" font-size="10" fill="#15803d"
          >kháng kháng sinh</text
        >
        {#if !joined}
          {#each marks as m (m.e.id)}
            {@const p = polar(C, C, R + 14, m.a)}
            {@const q = polar(C, C, R - 6, m.a)}
            {@const r = polar(C, C, R + 6, m.a)}
            <line x1={q.x} y1={q.y} x2={r.x} y2={r.y} stroke="#f59e0b" stroke-width="3" />
            <text
              x={p.x}
              y={p.y}
              text-anchor={m.a < 180 ? 'start' : 'end'}
              font-size="10"
              fill="#92400e">{m.e.name}</text
            >
          {/each}
        {/if}
      </svg>

      <div class="space-y-3">
        {#if step === 1}
          <SegmentedControl
            label="Enzyme cắt giới hạn cho plasmid"
            options={ENZYMES.map((e) => ({ value: e.id, label: e.name }))}
            value={plasmidEnzymeId}
            onchange={choosePlasmidEnzyme}
          />
          <div class="flex flex-wrap gap-2">
            <button type="button" class={button.primary} onclick={() => (plasmidCut = true)}>
              Cắt plasmid
            </button>
            {#if plasmidCut && canJoin(geneEnzyme, plasmidEnzyme)}
              <button type="button" class={button.secondary} onclick={() => goTo(2)}>
                Sang bước 3: nối
              </button>
            {/if}
          </div>
        {:else if step === 2}
          <p class="font-mono text-sm">
            gene: …{stickyEnd(geneEnzyme)} ↔ plasmid: …{complement(stickyEnd(plasmidEnzyme))}
          </p>
          <button type="button" class={button.primary} onclick={join}>
            Thêm enzyme nối (ligase)
          </button>
        {:else if step === 3}
          <button type="button" class={button.primary} onclick={addToBacteria}>
            Chuyển vào vi khuẩn E. coli
          </button>
        {/if}
      </div>
    </div>
  {/if}

  {#if step >= 4}
    <div class="space-y-3">
      <ul
        class="grid grid-cols-6 gap-2 sm:grid-cols-8"
        aria-label="Tế bào vi khuẩn: {taken} mang plasmid tái tổ hợp{selected
          ? `, ${CELLS - taken} bị kháng sinh tiêu diệt`
          : ''}"
      >
        {#each cells as has, i (i)}
          <li
            class="flex h-8 items-center justify-center rounded-full border-2 text-xs font-bold transition {has
              ? 'border-violet-600 bg-violet-50 text-violet-700'
              : selected
                ? 'border-slate-200 bg-slate-100 text-slate-400 opacity-50'
                : 'border-slate-400 bg-white text-slate-500'}"
            aria-hidden="true"
          >
            {#if has}◎{:else if selected}✗{:else}·{/if}
          </li>
        {/each}
      </ul>
      <div class="flex flex-wrap gap-2">
        {#if !selected}
          <button type="button" class={button.primary} onclick={select}>
            Nuôi trên môi trường có kháng sinh
          </button>
        {/if}
        <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
      </div>
    </div>
  {/if}

  <FeedbackNote {tone} text={feedback} />
</div>

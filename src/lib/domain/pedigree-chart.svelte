<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    MODES,
    MODE_LABELS,
    conflict,
    consistentModes,
    layoutPedigree,
    possibleGenotypes,
  } from './pedigree.js';

  /**
   * A pedigree (sơ đồ phả hệ) with the textbook symbols: squares for males,
   * circles for females, filled when affected; a horizontal line joins
   * partners and a bracket hangs their children below. Generations are
   * numbered I, II, III and people within them 1, 2, 3. Tap a person (or
   * Tab to them and press Enter) to see the genotypes they can have; with
   * `editable`, a button toggles their affected status. The analysis says
   * which inheritance modes fit and, for those that do not, which family
   * rules them out.
   *
   * - `pedigree` (bindable): `{ people, couples? }` from `pedigree.js`.
   * - `editable`: allow toggling affected status.
   * - `analysis`: show the inheritance-mode verdicts and genotypes.
   * - `trait`: name of the trait in the legend, e.g. 'bệnh bạch tạng'.
   *
   * @type {{
   *   pedigree: import('./pedigree.js').Pedigree;
   *   editable?: boolean;
   *   analysis?: boolean;
   *   trait?: string;
   *   label?: string;
   *   onchange?: (pedigree: import('./pedigree.js').Pedigree) => void;
   * }}
   */
  let {
    pedigree = $bindable(),
    editable = false,
    analysis = true,
    trait = 'tính trạng',
    label = 'Sơ đồ phả hệ',
    onchange,
  } = $props();

  const COL = 64;
  const ROW = 96;
  const S = 30;
  const PAD = 36;

  const layout = $derived(layoutPedigree(pedigree));
  const W = $derived(layout.width * COL + PAD);
  const H = $derived(layout.depth * ROW + 10);
  const byId = $derived(new Map(pedigree.people.map((p) => [p.id, p])));
  const labelOf = $derived(new Map(layout.nodes.map((n) => [n.id, n.label])));
  const fits = $derived(consistentModes(pedigree));
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {import('./pedigree.js').Mode} */
  let mode = $state('AR');
  const shownMode = $derived(fits.includes(mode) ? mode : (fits[0] ?? mode));
  const genotypes = $derived(analysis ? possibleGenotypes(pedigree, shownMode) : {});

  /** @param {number} x */
  const px = (x) => PAD + x * COL;
  /** @param {number} g */
  const py = (g) => g * ROW + S / 2 + 10;
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

  const selectedPerson = $derived(selected ? byId.get(selected) : undefined);

  /** @param {string} id */
  function toggle(id) {
    selected = selected === id ? null : id;
  }

  function toggleAffected() {
    if (!selected) return;
    const id = selected;
    pedigree = {
      ...pedigree,
      people: pedigree.people.map((p) => (p.id === id ? { ...p, affected: !p.affected } : p)),
    };
    onchange?.(pedigree);
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(id);
    }
  }

  /** @param {import('./pedigree.js').Mode} m */
  function reason(m) {
    const c = conflict(pedigree, m);
    if (!c) return 'không có cách gán kiểu gene phù hợp cho cả phả hệ';
    return `con ${labelOf.get(c.child)} không thể sinh ra từ bố ${labelOf.get(c.father)} và mẹ ${labelOf.get(c.mother)}`;
  }

  /** @param {import('./pedigree.js').Person} p */
  const describe = (p) =>
    `${labelOf.get(p.id)}, ${p.sex === 'M' ? 'nam' : 'nữ'}, ${p.affected ? `mắc ${trait}` : 'bình thường'}`;
</script>

<figure class="space-y-4" aria-label={label}>
  <div class="overflow-x-auto">
    <svg
      viewBox="0 0 {W} {H}"
      class="mx-auto block w-full"
      style="min-width: {Math.min(W, 560)}px; max-width: {W * 1.2}px"
      role="group"
      aria-label={label}
    >
      {#each { length: layout.depth } as _, g (g)}
        <text x="4" y={py(g) + 5} font-size="14" font-weight="700" fill="#64748b">{ROMAN[g]}</text>
      {/each}
      {#each layout.couples as c (c.a + c.b)}
        <line
          x1={px(c.x1)}
          x2={px(c.x2)}
          y1={py(c.gen)}
          y2={py(c.gen)}
          stroke="#334155"
          stroke-width="2"
        />
      {/each}
      {#each layout.sibships as s, i (i)}
        {@const yMid = py(s.gen) + ROW / 2}
        {@const xs = s.children.map(px)}
        <path
          d="M {px(s.from)} {py(s.gen)} V {yMid} M {Math.min(...xs, px(s.from))} {yMid} H {Math.max(
            ...xs,
            px(s.from),
          )} {xs.map((x) => `M ${x} ${yMid} V ${py(s.gen + 1) - S / 2}`).join(' ')}"
          fill="none"
          stroke="#334155"
          stroke-width="2"
        />
      {/each}
      {#each layout.nodes as n (n.id)}
        {@const p = byId.get(n.id)}
        {#if p}
          {@const x = px(n.x)}
          {@const y = py(n.gen)}
          <g
            role="button"
            tabindex="0"
            aria-pressed={selected === n.id}
            aria-label={describe(p)}
            class="group cursor-pointer outline-none"
            onclick={() => toggle(n.id)}
            onkeydown={(e) => onKey(e, n.id)}
          >
            <circle
              cx={x}
              cy={y}
              r={S / 2 + 10}
              fill="none"
              stroke="#6366f1"
              stroke-width="3"
              class="opacity-0 group-focus-visible:opacity-100"
            />
            {#if selected === n.id}
              <circle cx={x} cy={y} r={S / 2 + 7} fill="#c7d2fe" />
            {/if}
            {#if p.sex === 'M'}
              <rect
                x={x - S / 2}
                y={y - S / 2}
                width={S}
                height={S}
                fill={p.affected ? '#334155' : '#ffffff'}
                stroke="#334155"
                stroke-width="2"
              />
            {:else}
              <circle
                cx={x}
                cy={y}
                r={S / 2}
                fill={p.affected ? '#334155' : '#ffffff'}
                stroke="#334155"
                stroke-width="2"
              />
            {/if}
            <text {x} y={y + S / 2 + 15} font-size="12" text-anchor="middle" fill="#475569"
              >{n.label.split('.')[1]}</text
            >
          </g>
        {/if}
      {/each}
    </svg>
  </div>

  <ul class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600" aria-label="Chú thích">
    <li class="flex items-center gap-1">
      <span class="inline-block size-3.5 border-2 border-slate-700 bg-white"></span> Nam bình thường
    </li>
    <li class="flex items-center gap-1">
      <span class="inline-block size-3.5 rounded-full border-2 border-slate-700 bg-white"></span> Nữ bình
      thường
    </li>
    <li class="flex items-center gap-1">
      <span class="inline-block size-3.5 border-2 border-slate-700 bg-slate-700"></span> Nam mắc {trait}
    </li>
    <li class="flex items-center gap-1">
      <span class="inline-block size-3.5 rounded-full border-2 border-slate-700 bg-slate-700"
      ></span>
      Nữ mắc {trait}
    </li>
  </ul>

  <div class="min-h-12 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
    {#if selectedPerson}
      <p>
        <strong>{describe(selectedPerson)}</strong>{#if analysis && fits.length}. Kiểu gene có thể ({shownMode}):
          <span class="font-mono font-semibold"
            >{genotypes[selectedPerson.id]?.join(' hoặc ') || '—'}</span
          >{/if}.
      </p>
      {#if editable}
        <button type="button" class="{button.quiet} mt-2" onclick={toggleAffected}>
          {selectedPerson.affected ? 'Đánh dấu bình thường' : `Đánh dấu mắc ${trait}`}
        </button>
      {/if}
    {:else}
      Chạm vào một người trong phả hệ để xem thông tin{analysis ? ' và kiểu gene' : ''}.
    {/if}
  </div>

  {#if analysis}
    <div class="space-y-3">
      <ul class="space-y-1 text-sm" aria-live="polite">
        {#each MODES as m (m)}
          <li class="flex gap-2">
            {#if fits.includes(m)}
              <span class="font-bold text-emerald-700" aria-hidden="true">✓</span>
              <span><strong>{MODE_LABELS[m]}</strong>: phù hợp với phả hệ.</span>
            {:else}
              <span class="font-bold text-rose-700" aria-hidden="true">✗</span>
              <span><strong>{MODE_LABELS[m]}</strong>: loại, vì {reason(m)}.</span>
            {/if}
          </li>
        {/each}
      </ul>
      {#if fits.length > 1}
        <SegmentedControl
          label="Xem kiểu gene theo"
          options={fits.map((m) => ({ value: m, label: m }))}
          bind:value={mode}
        />
      {/if}
      <p class="text-xs text-slate-500">
        AD, AR: gene trội, lặn trên nhiễm sắc thể thường; XD, XR: gene trội, lặn trên X. Allele A
        trội hoàn toàn so với a.
      </p>
    </div>
  {/if}
</figure>

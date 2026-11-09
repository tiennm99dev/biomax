<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { HERB_NAMES, PARTS, partById, progressNote } from './engine.js';

  let herb = $state(/** @type {import('./engine.js').HerbId} */ ('nhai-lai'));
  /** @type {import('./engine.js').PartId} */
  let selected = $state('rang');
  /** @type {import('./engine.js').PartId[]} */
  let seen = $state(['rang']);

  const part = $derived(partById(selected));
  const note = $derived(progressNote(seen));

  /** @param {import('./engine.js').PartId} id */
  function pick(id) {
    selected = id;
    if (!seen.includes(id)) seen = [...seen, id];
  }

  /** @param {import('./engine.js').PartId} id */
  const stroke = (id) => (selected === id ? '#dc2626' : '#475569');
  /** @param {import('./engine.js').PartId} id */
  const width = (id) => (selected === id ? 4 : 2);

  /**
   * Zigzag small intestine from y0 to y1 with `bends` turns.
   * @param {number} cx @param {number} y0 @param {number} y1 @param {number} bends @param {number} half
   */
  function gut(cx, y0, y1, bends, half) {
    const step = (y1 - y0) / bends;
    let d = `M ${cx} ${y0}`;
    for (let i = 0; i < bends; i++) {
      const side = i % 2 === 0 ? 1 : -1;
      d += ` Q ${cx + side * half * 2} ${y0 + step * (i + 0.5)} ${cx} ${y0 + step * (i + 1)}`;
    }
    return d;
  }

  const DIAGRAMS = $derived([
    { id: 'thit', title: 'Chó (ăn thịt)', ox: 0, bends: 3, half: 18, caecum: 4, chambers: 1 },
    {
      id: 'co',
      title: herb === 'nhai-lai' ? 'Bò (nhai lại)' : 'Thỏ',
      ox: 175,
      bends: 9,
      half: 30,
      caecum: herb === 'tho' ? 16 : 9,
      chambers: herb === 'nhai-lai' ? 4 : 1,
    },
  ]);
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Thú ăn thực vật để so sánh"
    value={herb}
    onchange={(v) => (herb = v === 'tho' ? 'tho' : 'nhai-lai')}
    options={[
      { value: 'nhai-lai', label: HERB_NAMES['nhai-lai'] },
      { value: 'tho', label: HERB_NAMES.tho },
    ]}
  />

  <svg
    viewBox="0 0 340 300"
    class="mx-auto w-full max-w-md"
    role="img"
    aria-label="Sơ đồ ống tiêu hoá của chó và của {herb === 'nhai-lai'
      ? 'bò'
      : 'thỏ'}, đang làm nổi bật {part.name.toLowerCase()}"
  >
    {#each DIAGRAMS as g (g.id)}
      {@const cx = g.ox + 82}
      <text x={cx} y="14" text-anchor="middle" font-size="13" font-weight="600" fill="#0f172a"
        >{g.title}</text
      >
      <!-- teeth -->
      <rect
        x={cx - 40}
        y="22"
        width="80"
        height="20"
        rx="6"
        fill="#fef3c7"
        stroke={stroke('rang')}
        stroke-width={width('rang')}
      />
      {#if g.id === 'thit'}
        {#each [-28, -14, 14, 28] as dx (dx)}
          <path
            d="M {cx + dx - 5} 42 L {cx + dx} {Math.abs(dx) === 28 ? 58 : 50} L {cx + dx + 5} 42 Z"
            fill="#fffbeb"
            stroke="#78716c"
          />
        {/each}
      {:else}
        {#each [-28, -18, 18, 28] as dx (dx)}
          <rect x={cx + dx - 5} y="42" width="10" height="8" fill="#fffbeb" stroke="#78716c" />
        {/each}
      {/if}
      <line x1={cx} y1="50" x2={cx} y2="72" stroke="#475569" stroke-width="5" />
      <!-- stomach -->
      {#if g.chambers === 4}
        {#each [{ x: -28, y: 92, r: 20 }, { x: 4, y: 82, r: 10 }, { x: 18, y: 100, r: 10 }, { x: 0, y: 116, r: 11 }] as c, i (i)}
          <circle
            cx={cx + c.x}
            cy={c.y}
            r={c.r}
            fill={i === 0 ? '#bbf7d0' : '#dcfce7'}
            stroke={stroke('da-day')}
            stroke-width={width('da-day')}
          />
          <text x={cx + c.x} y={c.y + 4} text-anchor="middle" font-size="10" fill="#14532d"
            >{i + 1}</text
          >
        {/each}
      {:else}
        <ellipse
          {cx}
          cy="98"
          rx="30"
          ry="22"
          fill="#fee2e2"
          stroke={stroke('da-day')}
          stroke-width={width('da-day')}
        />
      {/if}
      <!-- small intestine -->
      <path
        d={gut(cx, 128, 236, g.bends, g.half)}
        fill="none"
        stroke={selected === 'ruot-non' ? '#dc2626' : '#f59e0b'}
        stroke-width={selected === 'ruot-non' ? 6 : 4}
      />
      <!-- caecum and large intestine -->
      <circle
        cx={cx - g.caecum - 4}
        cy={246 + g.caecum / 2}
        r={g.caecum}
        fill="#e9d5ff"
        stroke={stroke('manh-trang')}
        stroke-width={width('manh-trang')}
      />
      <path d="M {cx} 236 L {cx} 290" stroke="#7c3aed" stroke-width="7" fill="none" />
    {/each}
    <text x="170" y="296" text-anchor="middle" font-size="10" fill="#64748b"
      >Sơ đồ minh hoạ, không theo tỉ lệ thật</text
    >
  </svg>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn bộ phận để so sánh">
    {#each PARTS as p (p.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 py-2 text-sm font-semibold {selected === p.id
          ? 'border-red-600 bg-red-50 text-red-800'
          : 'border-slate-300 bg-white'} {focusRing}"
        aria-pressed={selected === p.id}
        onclick={() => pick(p.id)}
      >
        {p.name}
      </button>
    {/each}
  </div>

  <div class="grid gap-2 text-sm sm:grid-cols-2" aria-live="polite">
    <div class="rounded-xl bg-rose-50 p-3">
      <p class="font-semibold">{part.name} ở thú ăn thịt</p>
      <p>{part.meat}</p>
    </div>
    <div class="rounded-xl bg-emerald-50 p-3">
      <p class="font-semibold">{part.name} ở {HERB_NAMES[herb].toLowerCase()}</p>
      <p>{part.plant[herb]}</p>
    </div>
    <p class="rounded-xl bg-slate-50 p-3 sm:col-span-2">Vì sao khác nhau: {part.why}</p>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

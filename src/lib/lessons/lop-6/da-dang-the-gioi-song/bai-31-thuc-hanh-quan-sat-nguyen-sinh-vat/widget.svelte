<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import ProtistShape from '../_shared/protist-shape.svelte';
  import { frameLoop, reducedMotion } from '../_shared/motion.js';
  import {
    KINDS,
    LENSES,
    SOURCES,
    blurAt,
    canName,
    kindById,
    lensById,
    makeDrop,
    nameFeedback,
    protistCount,
    sourceById,
    stepDrop,
    tally,
  } from './engine.js';

  const uid = $props.id();
  const VIEW = 300;
  const C = 160;

  let sourceId = $state(/** @type {import('./engine.js').SourceId} */ ('vang-ao'));
  let lensId = $state(/** @type {import('./engine.js').LensId} */ ('vat-kinh-10'));
  let focus = $state(3);
  let cotton = $state(false);
  let playing = $state(!reducedMotion());
  let t = $state(0);
  let drop = $state(makeDrop('vang-ao'));
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {string[]} */
  let named = $state([]);
  let center = $state({ x: 0, y: 0 });
  let message = $state(
    'Ở vật kính 10×, bấm vào một đối tượng để chọn nó, rồi chuyển sang vật kính 40× để quan sát kĩ.',
  );

  $effect(() => {
    if (!playing) return;
    return frameLoop((dt) => {
      t = (t + dt) % 60;
      drop = stepDrop(drop, dt, cotton);
    });
  });

  const lens = $derived(lensById(lensId));
  const scale = $derived(VIEW / lens.fov);
  const sel = $derived(drop.find((d) => d.id === selected) ?? null);
  const view = $derived(
    lensId === 'vat-kinh-40' ? (sel ? { x: sel.x, y: sel.y } : center) : { x: 0, y: 0 },
  );
  const blur = $derived(blurAt(focus));
  const rows = $derived(tally(drop, named));
  const check = $derived(
    sel && !named.includes(sel.id)
      ? canName({ kind: sel.kind, lens: lensId, focus, cotton })
      : null,
  );
  const living = $derived(protistCount(drop));
  const namedLiving = $derived(rows.reduce((s, r) => s + r.found, 0));
  const finished = $derived(named.length === drop.length);

  /** @param {string} id */
  const numberOf = (id) => drop.findIndex((d) => d.id === id) + 1;

  /** @param {string | number} v */
  function changeSource(v) {
    sourceId = /** @type {import('./engine.js').SourceId} */ (v);
    drop = makeDrop(sourceId);
    named = [];
    selected = null;
    lensId = 'vat-kinh-10';
    center = { x: 0, y: 0 };
    message = `Mẫu mới: ${sourceById(sourceId).name.toLowerCase()}. Bấm vào một đối tượng để chọn.`;
  }

  /** @param {string} id */
  function choose(id) {
    selected = id;
    const d = drop.find((x) => x.id === id);
    if (!d) return;
    center = { x: d.x, y: d.y };
    message = named.includes(id)
      ? `Đối tượng ${numberOf(id)} là ${kindById(d.kind).name.toLowerCase()}, em đã gọi tên rồi.`
      : `Đã chọn đối tượng ${numberOf(id)}.${lensId === 'vat-kinh-10' ? ' Chuyển sang vật kính 40× để quan sát kĩ.' : ''}`;
  }

  /** @param {import('./engine.js').KindId} kind */
  function guess(kind) {
    if (!sel) return;
    message = nameFeedback(sel.kind, kind);
    if (sel.kind === kind) {
      named = [...named, sel.id];
      selected = null;
    }
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      choose(id);
    }
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Lấy giọt nước từ"
    options={SOURCES.map((s) => ({ value: s.id, label: s.name }))}
    value={sourceId}
    onchange={changeSource}
  />

  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Vật kính (thị kính 10×)"
      options={LENSES.map((l) => ({ value: l.id, label: `${l.label}: ${l.mag} lần` }))}
      bind:value={lensId}
    />
    <SliderField
      label="Điều chỉnh nét (ốc vi cấp)"
      bind:value={focus}
      min={0}
      max={10}
      step={0.5}
    />
  </div>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={cotton ? button.secondary : button.quiet}
      aria-pressed={cotton}
      onclick={() => (cotton = !cotton)}
      >{cotton ? 'Đã thêm sợi bông' : 'Thêm vài sợi bông vào giọt nước'}</button
    >
    <button
      type="button"
      class={button.quiet}
      aria-pressed={!playing}
      onclick={() => (playing = !playing)}>{playing ? 'Dừng hình' : 'Cho chuyển động'}</button
    >
  </div>

  <svg
    viewBox="0 0 320 320"
    class="mx-auto block w-full max-w-sm touch-manipulation select-none"
    role="group"
    aria-label="Trường nhìn kính hiển vi, {sourceById(
      sourceId,
    ).name.toLowerCase()}, {lens.label}{blur > 1.5 ? ', ảnh mờ' : ''}"
  >
    <defs>
      <clipPath id="{uid}-khung"><circle cx={C} cy={C} r={VIEW / 2} /></clipPath>
      <filter id="{uid}-mo" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation={blur} />
      </filter>
    </defs>
    <rect x="0" y="0" width="320" height="320" rx="16" fill="#0f172a" />
    <circle cx={C} cy={C} r={VIEW / 2} fill="#ecfeff" />
    <g clip-path="url(#{uid}-khung)">
      <g filter={blur > 0 ? `url(#${uid}-mo)` : undefined}>
        {#if cotton}
          {#each [0, 1, 2] as i (i)}
            <path
              d="M {-900 + i * 500} {-700 + i * 420} q 300 {200 - i * 160} 900 {300 + i * 60}"
              transform="translate({C - view.x * scale} {C - view.y * scale}) scale({scale})"
              fill="none"
              stroke="#cbd5e1"
              stroke-width={3 / scale}
            />
          {/each}
        {/if}
        {#each drop as d (d.id)}
          {@const k = kindById(d.kind)}
          {@const px = C + (d.x - view.x) * scale}
          {@const py = C + (d.y - view.y) * scale}
          {@const L = k.size * scale}
          {#if Math.hypot(px - C, py - C) < VIEW / 2 + L}
            <g transform="translate({px} {py}) rotate({(Math.atan2(d.vy, d.vx) * 180) / Math.PI})">
              <ProtistShape kind={d.kind} {L} {t} dotBelow={8} />
            </g>
          {/if}
        {/each}
      </g>
      {#each drop as d (d.id)}
        {@const k = kindById(d.kind)}
        {@const px = C + (d.x - view.x) * scale}
        {@const py = C + (d.y - view.y) * scale}
        {@const ring = Math.max(14, (k.size * scale) / 2 + 6)}
        {@const done = named.includes(d.id)}
        {#if Math.hypot(px - C, py - C) < VIEW / 2}
          <g
            role="button"
            tabindex="0"
            class="cursor-pointer outline-none [&:focus-visible_.vong]:stroke-indigo-600"
            aria-label="Đối tượng {numberOf(d.id)}{done ? `: ${k.name}` : ''}{selected === d.id
              ? ', đang chọn'
              : ''}"
            aria-pressed={selected === d.id}
            onclick={() => choose(d.id)}
            onkeydown={(e) => onKey(e, d.id)}
          >
            <circle cx={px} cy={py} r={Math.max(22, ring)} fill="transparent" />
            <circle
              class="vong"
              cx={px}
              cy={py}
              r={ring}
              fill="none"
              stroke={selected === d.id ? '#4f46e5' : done ? '#059669' : 'transparent'}
              stroke-width="2"
              stroke-dasharray={selected === d.id ? '5 3' : undefined}
            />
            {#if lensId === 'vat-kinh-10'}
              <text
                x={px + ring}
                y={py - ring + 4}
                font-size="11"
                font-weight="700"
                fill={done ? '#047857' : '#1e293b'}>{numberOf(d.id)}</text
              >
            {/if}
          </g>
        {/if}
      {/each}
    </g>
    <circle cx={C} cy={C} r={VIEW / 2} fill="none" stroke="#334155" stroke-width="4" />
    <line x1="24" x2={24 + 100 * scale} y1="304" y2="304" stroke="#f8fafc" stroke-width="3" />
    <text x="24" y="296" font-size="10" fill="#f8fafc">100 µm</text>
  </svg>

  {#if check && !check.ok}
    <p class="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">{check.reason}</p>
  {:else if check?.ok}
    <div
      class="flex flex-wrap gap-2"
      role="group"
      aria-label="Chọn tên đối tượng {sel ? numberOf(sel.id) : ''}"
    >
      {#each KINDS as k (k.id)}
        <button type="button" class={button.secondary} onclick={() => guess(k.id)}>{k.name}</button>
      {/each}
    </div>
  {/if}

  <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {message}
  </p>

  <div class="overflow-x-auto">
    <table class="w-full min-w-[20rem] text-left text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700">
        Bảng đếm: đã nhận dạng {namedLiving}/{living} nguyên sinh vật, {named.length}/{drop.length} đối
        tượng
      </caption>
      <thead>
        <tr class="border-b border-slate-300 text-slate-600">
          <th class="py-1 pr-2">Nguyên sinh vật</th>
          <th class="py-1 pr-2">Đã đếm</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as r (r.kind.id)}
          <tr class="border-b border-slate-200">
            <td class="py-1 pr-2 font-semibold">{r.kind.name}</td>
            <td class="py-1 pr-2 tabular-nums">{r.found}</td>
          </tr>
        {:else}
          <tr
            ><td colspan="2" class="py-2 text-slate-500">Giọt nước này không có nguyên sinh vật.</td
            ></tr
          >
        {/each}
      </tbody>
    </table>
  </div>

  {#if finished}
    <p class="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900">
      Đã nhận dạng hết các đối tượng. {sourceById(sourceId).note}
    </p>
  {/if}
</div>

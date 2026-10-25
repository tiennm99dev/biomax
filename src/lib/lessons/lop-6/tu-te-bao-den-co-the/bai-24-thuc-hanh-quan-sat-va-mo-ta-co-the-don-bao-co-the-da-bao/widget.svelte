<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    DROP,
    KINDS,
    LENSES,
    SHAPE_PX,
    checkGuess,
    kindById,
    lensById,
    recordRows,
  } from './engine.js';

  const uid = $props.id();
  const VIEW = 300;
  const C = 160;

  let lensId = $state(/** @type {import('./engine.js').LensId} */ ('vat-kinh-10'));
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {string[]} */
  let identified = $state([]);
  let message = $state(
    'Ở vật kính 10×, bấm vào một đối tượng trong giọt nước để đánh dấu nó, rồi chuyển sang vật kính 40× để quan sát kĩ.',
  );

  const lens = $derived(lensById(lensId));
  const scale = $derived(VIEW / lens.fov);
  const sel = $derived(DROP.find((d) => d.id === selected) ?? null);
  const center = $derived(
    lensId === 'vat-kinh-40' && sel ? { x: sel.x, y: sel.y } : { x: 0, y: 0 },
  );
  const rows = $derived(recordRows(identified));
  const canName = $derived(
    lensId === 'vat-kinh-40' && sel !== null && !identified.includes(sel.id),
  );

  /** @param {string} id */
  const numberOf = (id) => DROP.findIndex((d) => d.id === id) + 1;

  /** @param {string} id */
  function mark(id) {
    selected = id;
    const d = DROP.find((x) => x.id === id);
    if (!d) return;
    const small = kindById(d.kind).size * scale < SHAPE_PX;
    if (identified.includes(id))
      message = `Đối tượng ${numberOf(id)} là ${kindById(d.kind).name.toLowerCase()}, em đã gọi tên đúng.`;
    else if (lensId === 'vat-kinh-10')
      message = `Đã đánh dấu đối tượng ${numberOf(id)}. ${small ? 'Ảnh còn quá nhỏ, chỉ là một chấm: ' : ''}Chuyển sang vật kính 40× để thấy rõ hình dạng rồi gọi tên.`;
    else
      message = `Đối tượng ${numberOf(id)} ở giữa trường nhìn. Quan sát hình dạng, roi, lông bơi, lục lạp rồi chọn tên.`;
  }

  /** @param {string | number} value */
  function changeLens(value) {
    if (value === 'vat-kinh-40')
      message = sel
        ? `Vật kính 40×: đối tượng ${numberOf(sel.id)} ở giữa trường nhìn. Quan sát kĩ rồi chọn tên.`
        : 'Hãy về vật kính 10× và đánh dấu một đối tượng trước: ở 40× trường nhìn rất hẹp, khó tìm mẫu.';
    else message = 'Vật kính 10×: trường nhìn rộng, dễ tìm mẫu. Bấm vào một đối tượng để đánh dấu.';
  }

  /** @param {import('./engine.js').KindId} kind */
  function guess(kind) {
    if (!sel) return;
    if (checkGuess(sel.id, kind)) {
      identified = [...identified, sel.id];
      const k = kindById(kind);
      message = `Đúng: đối tượng ${numberOf(sel.id)} là ${k.name.toLowerCase()}. ${k.living ? `Hình dạng: ${k.shape}. Di chuyển: ${k.moves}. Đã ghi vào bảng thu hoạch.` : 'Nó không có cấu tạo tế bào nên không ghi vào bảng thu hoạch sinh vật.'}`;
    } else {
      const real = kindById(sel.kind);
      message = real.living
        ? 'Chưa đúng. Gợi ý: nhìn kĩ cách di chuyển (roi, lông bơi hay chân giả) và màu xanh của lục lạp.'
        : 'Chưa đúng. Gợi ý: vật này có màng, tế bào chất và nhân không? Nó có tự di chuyển không?';
    }
  }

  /**
   * Outline of an object `L` px long, centred at 0, along the x axis.
   * @param {import('./engine.js').KindId} kind @param {number} L
   */
  function outline(kind, L) {
    const h = L / 2;
    if (kind === 'trung-roi')
      // Blunt front end (with the flagellum and eyespot) at +x, pointed tail at -x.
      return `M ${h} 0 C ${h} ${-L * 0.18} ${-h * 0.2} ${-L * 0.16} ${-h} 0 C ${-h * 0.2} ${L * 0.16} ${h} ${L * 0.18} ${h} 0 Z`;
    if (kind === 'trung-giay')
      return `M ${-h} 0 C ${-h} ${-L * 0.24} ${h} ${-L * 0.26} ${h} 0 C ${h} ${L * 0.2} ${h * 0.2} ${L * 0.14} 0 ${L * 0.1} C ${-h * 0.3} ${L * 0.22} ${-h} ${L * 0.22} ${-h} 0 Z`;
    if (kind === 'trung-bien-hinh') {
      // Lobed blob: smooth curve through the midpoints of uneven radii.
      const k = [1, 0.55, 0.9, 0.5, 0.75, 0.45, 1, 0.6];
      const pts = k.map((f, i) => {
        const a = (Math.PI / 4) * i;
        return [h * f * Math.cos(a), h * f * Math.sin(a)];
      });
      /** @param {number} i */
      const mid = (i) => {
        const p = pts[i % pts.length];
        const q = pts[(i + 1) % pts.length];
        return `${(p[0] + q[0]) / 2} ${(p[1] + q[1]) / 2}`;
      };
      return (
        `M ${mid(pts.length - 1)} ` +
        pts.map((p, i) => `Q ${p[0]} ${p[1]} ${mid(i)}`).join(' ') +
        ' Z'
      );
    }
    if (kind === 'manh-vun')
      return `M ${-h} ${-L * 0.1} L ${-h * 0.3} ${-L * 0.3} L ${h * 0.5} ${-L * 0.2} L ${h} ${L * 0.1} L ${h * 0.2} ${L * 0.3} L ${-h * 0.6} ${L * 0.2} Z`;
    return '';
  }

  /** Short cilia around the slipper outline. @param {number} L */
  function cilia(L) {
    /** @type {string[]} */
    const out = [];
    for (let i = 0; i < 28; i++) {
      const a = (Math.PI * 2 * i) / 28;
      const rx = L / 2;
      const ry = L * 0.2;
      const x = rx * Math.cos(a);
      const y = ry * Math.sin(a);
      out.push(`M ${x} ${y} l ${Math.cos(a) * 5} ${Math.sin(a) * 5}`);
    }
    return out.join(' ');
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      mark(id);
    }
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Vật kính (thị kính 10×)"
    options={LENSES.map((l) => ({ value: l.id, label: `${l.label} (${l.mag} lần)` }))}
    bind:value={lensId}
    onchange={changeLens}
  />

  <svg
    viewBox="0 0 320 320"
    class="mx-auto block w-full max-w-sm"
    role="group"
    aria-label="Trường nhìn của kính hiển vi, giọt nước ao, {lens.label}"
  >
    <defs>
      <clipPath id="{uid}-khung"><circle cx={C} cy={C} r={VIEW / 2} /></clipPath>
    </defs>
    <rect x="0" y="0" width="320" height="320" rx="16" fill="#0f172a" />
    <circle cx={C} cy={C} r={VIEW / 2} fill="#ecfeff" />
    <g clip-path="url(#{uid}-khung)">
      {#each DROP as d (d.id)}
        {@const k = kindById(d.kind)}
        {@const L = k.size * scale}
        {@const px = C + (d.x - center.x) * scale}
        {@const py = C + (d.y - center.y) * scale}
        {@const isSel = selected === d.id}
        {@const done = identified.includes(d.id)}
        {#if Math.hypot(px - C, py - C) < VIEW / 2 + L}
          <g
            role="button"
            tabindex="0"
            class="cursor-pointer outline-none [&:focus-visible_.vong]:stroke-indigo-600"
            aria-label="Đối tượng {numberOf(d.id)}{done ? `: ${k.name}` : ''}{isSel
              ? ', đang đánh dấu'
              : ''}"
            aria-pressed={isSel}
            onclick={() => mark(d.id)}
            onkeydown={(e) => onKey(e, d.id)}
          >
            <circle cx={px} cy={py} r={Math.max(22, L / 2 + 4)} fill="transparent" />
            <g transform="translate({px} {py}) rotate({d.angle})">
              {#if L < SHAPE_PX}
                <circle r={Math.max(2.5, L / 2)} fill={k.chloroplast ? '#16a34a' : '#78716c'} />
              {:else if d.kind === 'tao-luc'}
                <circle r={L / 2} fill="#dcfce7" stroke="#15803d" stroke-width="1.5" />
                <path
                  d="M {-L * 0.35} {-L * 0.1} A {L * 0.36} {L * 0.36} 0 0 0 {L * 0.35} {-L *
                    0.1} L {L * 0.2} {-L * 0.05} A {L * 0.22} {L * 0.22} 0 0 1 {-L * 0.2} {-L *
                    0.05} Z"
                  fill="#16a34a"
                />
              {:else if d.kind === 'trung-roi'}
                <path
                  d="M {L / 2} 0 q {L * 0.3} {-L * 0.25} {L * 0.6} 0 t {L * 0.5} 0"
                  fill="none"
                  stroke="#166534"
                  stroke-width="1.2"
                />
                <path
                  d={outline('trung-roi', L)}
                  fill="#bbf7d0"
                  stroke="#15803d"
                  stroke-width="1.5"
                />
                {#each [-0.25, -0.05, 0.15] as f (f)}
                  <ellipse cx={L * f} cy="0" rx={L * 0.07} ry={L * 0.04} fill="#16a34a" />
                {/each}
                <circle cx={L * 0.38} cy={-L * 0.03} r={Math.max(1.2, L * 0.035)} fill="#dc2626" />
                <circle cx={-L * 0.1} cy={L * 0.05} r={L * 0.05} fill="#7c3aed" opacity="0.7" />
              {:else if d.kind === 'trung-giay'}
                {#if L > 60}
                  <path d={cilia(L)} stroke="#64748b" stroke-width="1" />
                {/if}
                <path
                  d={outline('trung-giay', L)}
                  fill="#e0e7ff"
                  stroke="#4338ca"
                  stroke-width="1.5"
                />
                <circle cx={-L * 0.05} cy={-L * 0.03} r={L * 0.07} fill="#7c3aed" opacity="0.7" />
                <circle cx={L * 0.25} cy={-L * 0.05} r={L * 0.04} fill="none" stroke="#4338ca" />
              {:else if d.kind === 'trung-bien-hinh'}
                <path
                  d={outline('trung-bien-hinh', L)}
                  fill="#fef3c7"
                  stroke="#b45309"
                  stroke-width="1.5"
                />
                <circle cx={-L * 0.05} cy={L * 0.03} r={L * 0.06} fill="#7c3aed" opacity="0.7" />
              {:else}
                <path d={outline('manh-vun', L)} fill="#57534e" opacity="0.85" />
              {/if}
            </g>
            <circle
              class="vong"
              cx={px}
              cy={py}
              r={Math.max(14, L / 2 + 6)}
              fill="none"
              stroke={isSel ? '#4f46e5' : done ? '#059669' : 'transparent'}
              stroke-width="2"
              stroke-dasharray={isSel ? '5 3' : undefined}
            />
            {#if lensId === 'vat-kinh-10'}
              <text
                x={px + Math.max(14, L / 2 + 6)}
                y={py - Math.max(10, L / 2)}
                font-size="12"
                font-weight="700"
                fill={done ? '#047857' : '#1e293b'}>{numberOf(d.id)}</text
              >
            {/if}
          </g>
        {/if}
      {/each}
    </g>
    <circle cx={C} cy={C} r={VIEW / 2} fill="none" stroke="#334155" stroke-width="4" />
    <line x1="24" x2={24 + 50 * scale} y1="304" y2="304" stroke="#f8fafc" stroke-width="3" />
    <text x="24" y="296" font-size="10" fill="#f8fafc">50 µm</text>
  </svg>

  {#if canName}
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn tên đối tượng">
      {#each KINDS as k (k.id)}
        <button type="button" class={button.secondary} onclick={() => guess(k.id)}>{k.name}</button>
      {/each}
    </div>
  {/if}

  <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {message}
  </p>

  <div class="overflow-x-auto">
    <table class="w-full min-w-[34rem] text-left text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700">
        Bảng thu hoạch: đã gọi tên {identified.length}/{DROP.length} đối tượng
      </caption>
      <thead>
        <tr class="border-b border-slate-300 text-slate-600">
          <th class="py-1 pr-2">Tên</th>
          <th class="py-1 pr-2">Hình dạng</th>
          <th class="py-1 pr-2">Di chuyển</th>
          <th class="py-1">Lục lạp</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as k (k.id)}
          <tr class="border-b border-slate-200 align-top">
            <td class="py-1 pr-2 font-semibold">{k.name}</td>
            <td class="py-1 pr-2">{k.shape}</td>
            <td class="py-1 pr-2">{k.moves}</td>
            <td class="py-1">{k.chloroplast ? 'Có (quang hợp được)' : 'Không'}</td>
          </tr>
        {:else}
          <tr><td colspan="4" class="py-2 text-slate-500">Chưa có dòng nào.</td></tr>
        {/each}
      </tbody>
    </table>
  </div>
  {#if identified.length === DROP.length}
    <p class="text-sm font-semibold text-emerald-800">
      Hoàn thành! Các cơ thể đơn bào có lục lạp, quang hợp được: trùng roi xanh và tảo lục đơn bào.
    </p>
  {/if}
  <button
    type="button"
    class={button.quiet}
    onclick={() => {
      identified = [];
      selected = null;
      lensId = 'vat-kinh-10';
      message = 'Đã làm lại. Bấm vào một đối tượng ở vật kính 10× để đánh dấu.';
    }}>Làm lại</button
  >
</div>

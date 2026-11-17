<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import {
    CONDITIONS,
    PRIMULA,
    RICE,
    TEMPERATURES,
    bestAt,
    normRange,
    seenColors,
    seenRange,
    varietyOf,
    yieldText,
  } from './engine.js';

  let trait = $state('lua');

  // Rice yield
  let varietyId = $state('A');
  let level = $state(2);
  /** @type {Record<string, number[]>} */
  let tried = $state({ A: [2], B: [], C: [] });
  const variety = $derived(varietyOf(varietyId));
  const seen = $derived(seenRange(variety, tried[varietyId]));
  const full = $derived(tried[varietyId].length === CONDITIONS.length);

  /** @param {string} id @param {number} l */
  function markTried(id, l) {
    if (!tried[id].includes(l)) tried[id] = [...tried[id], l];
  }

  /** @param {string | number} v */
  function chooseVariety(v) {
    varietyId = String(v);
    markTried(varietyId, level);
  }

  /** @param {string | number} v */
  function chooseLevel(v) {
    level = Number(v);
    markTried(varietyId, level);
  }

  // Chart geometry: x by condition, y by yield 0..10 tấn/ha.
  const W = 340;
  const H = 220;
  const L = 40;
  const R = 300;
  const T = 22;
  const B = 180;
  /** @param {number} i */
  const xAt = (i) => L + 10 + (i * (R - L - 20)) / (CONDITIONS.length - 1);
  /** @param {number} t */
  const yAt = (t) => B - (t / 10) * (B - T);
  const COLORS = { A: '#4f46e5', B: '#d97706', C: '#059669' };

  const riceNote = $derived.by(() => {
    const here = `${variety.label}, điều kiện ${CONDITIONS[level].toLowerCase()}: năng suất ${yieldText(variety.values[level])}. Ở điều kiện này, giống cho năng suất cao nhất là giống ${bestAt(level).id}.`;
    if (full) {
      const r = normRange(variety);
      return {
        tone: /** @type {const} */ ('ok'),
        text: `${here} Em đã thử đủ ${CONDITIONS.length} điều kiện: mức phản ứng về năng suất của giống ${variety.id} là từ ${yieldText(r.min)} đến ${yieldText(r.max)} (${r.max - r.min >= 3 ? 'rộng' : 'hẹp'}).`,
      };
    }
    return {
      tone: /** @type {const} */ ('info'),
      text: `${here} Đã thử ${tried[varietyId].length}/${CONDITIONS.length} điều kiện; thử hết để tìm mức phản ứng.`,
    };
  });

  // Primula flower colour
  let genotype = $state(0);
  let temp = $state(0);
  /** @type {number[][]} */
  let triedTemps = $state([[0], []]);
  const flower = $derived(PRIMULA[genotype].colors[temp]);

  /** @param {string | number} v */
  function chooseGenotype(v) {
    genotype = Number(v);
    if (!triedTemps[genotype].includes(temp))
      triedTemps[genotype] = [...triedTemps[genotype], temp];
  }

  /** @param {string | number} v */
  function chooseTemp(v) {
    temp = Number(v);
    if (!triedTemps[genotype].includes(temp))
      triedTemps[genotype] = [...triedTemps[genotype], temp];
  }

  const primulaNote = $derived.by(() => {
    const name = PRIMULA[genotype].id;
    const here = `Cây ${name} trồng ở ${TEMPERATURES[temp]} °C ra hoa ${flower}.`;
    if (triedTemps[genotype].length < TEMPERATURES.length)
      return {
        tone: /** @type {const} */ ('info'),
        text: `${here} Đổi nhiệt độ để xem kiểu hình có đổi không.`,
      };
    const colors = seenColors(PRIMULA[genotype], triedTemps[genotype]);
    return {
      tone: /** @type {const} */ ('ok'),
      text:
        colors.length > 1
          ? `${here} Cùng kiểu gene ${name} nhưng hoa đỏ ở 20 °C, trắng ở 35 °C: đó là thường biến. Hoa mới mọc ra lại đỏ nếu đưa cây về 20 °C.`
          : `${here} Kiểu gene ${name} cho hoa trắng ở cả hai nhiệt độ: kiểu hình do kiểu gene quyết định, nhiệt độ không làm đổi màu.`,
    };
  });

  const PETALS = [0, 72, 144, 216, 288];
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Tính trạng"
    options={[
      { value: 'lua', label: 'Năng suất lúa (số lượng)' },
      { value: 'anh-thao', label: 'Màu hoa anh thảo (chất lượng)' },
    ]}
    bind:value={trait}
  />

  {#if trait === 'lua'}
    <div class="grid gap-3 sm:grid-cols-2">
      <SegmentedControl
        label="Giống lúa (kiểu gene)"
        options={RICE.map((v) => ({ value: v.id, label: v.label }))}
        value={varietyId}
        onchange={chooseVariety}
      />
      <SegmentedControl
        label="Điều kiện canh tác (môi trường)"
        options={CONDITIONS.map((c, i) => ({ value: i, label: c }))}
        value={level}
        onchange={chooseLevel}
      />
    </div>

    <svg
      viewBox="0 0 {W} {H}"
      class="w-full max-w-lg"
      role="img"
      aria-label="Đồ thị năng suất của ba giống lúa theo điều kiện canh tác; {variety.label} được tô đậm."
    >
      <line x1={L} y1={B} x2={R} y2={B} stroke="#94a3b8" />
      <line x1={L} y1={T} x2={L} y2={B} stroke="#94a3b8" />
      {#each [0, 2, 4, 6, 8, 10] as t (t)}
        <line x1={L - 3} y1={yAt(t)} x2={R} y2={yAt(t)} stroke="#e2e8f0" />
        <text x={L - 6} y={yAt(t) + 3} text-anchor="end" font-size="9" fill="#475569">{t}</text>
      {/each}
      <text x="4" y="11" font-size="9" fill="#475569">tấn/ha</text>
      {#each CONDITIONS as c, i (c)}
        <text
          x={xAt(i)}
          y={B + 14}
          text-anchor="middle"
          font-size="8.5"
          fill={i === level ? '#1e293b' : '#64748b'}
          font-weight={i === level ? 700 : 400}>{c}</text
        >
      {/each}
      <line x1={xAt(level)} y1={T} x2={xAt(level)} y2={B} stroke="#94a3b8" stroke-dasharray="3 3" />
      {#if seen}
        <rect
          x={R + 22}
          y={yAt(seen.max)}
          width="8"
          height={Math.max(2, yAt(seen.min) - yAt(seen.max))}
          rx="3"
          fill={COLORS[/** @type {'A' | 'B' | 'C'} */ (varietyId)]}
          opacity="0.35"
        />
      {/if}
      {#each RICE as v (v.id)}
        {@const on = v.id === varietyId}
        {@const col = COLORS[/** @type {'A' | 'B' | 'C'} */ (v.id)]}
        <polyline
          points={v.values.map((t, i) => `${xAt(i)},${yAt(t)}`).join(' ')}
          fill="none"
          stroke={col}
          stroke-width={on ? 3 : 1.2}
          opacity={on ? 1 : 0.45}
        />
        <text x={xAt(4) + 10} y={yAt(v.values[4]) + 3} font-size="9" fill={col} font-weight="700"
          >{v.id}</text
        >
        {#if on}
          {#each tried[v.id] as l (l)}
            <circle cx={xAt(l)} cy={yAt(v.values[l])} r="3" fill={col} />
          {/each}
          <circle
            cx={xAt(level)}
            cy={yAt(v.values[level])}
            r="6"
            fill="white"
            stroke={col}
            stroke-width="3"
          />
        {/if}
      {/each}
      <text x={L + 4} y={H - 4} font-size="9" fill="#475569">
        Điều kiện canh tác → (số liệu minh hoạ)
      </text>
    </svg>
    <p class="text-sm text-slate-600">
      Dải màu bên phải đồ thị là khoảng năng suất đã quan sát của giống {variety.id}: từ {seen
        ? formatNumber(seen.min, 1)
        : '…'} đến {seen ? formatNumber(seen.max, 1) : '…'} tấn/ha.
    </p>
    <FeedbackNote tone={riceNote.tone} text={riceNote.text} />
  {:else}
    <div class="grid gap-3 sm:grid-cols-2">
      <SegmentedControl
        label="Kiểu gene cây anh thảo"
        options={PRIMULA.map((g, i) => ({ value: i, label: g.id }))}
        value={genotype}
        onchange={chooseGenotype}
      />
      <SegmentedControl
        label="Nhiệt độ trồng"
        options={TEMPERATURES.map((t, i) => ({ value: i, label: `${t} °C` }))}
        value={temp}
        onchange={chooseTemp}
      />
    </div>
    <svg
      viewBox="0 0 200 150"
      class="mx-auto w-48"
      role="img"
      aria-label="Hoa anh thảo màu {flower}"
    >
      <rect
        x="0"
        y="0"
        width="200"
        height="150"
        rx="12"
        fill={temp === 1 ? '#fff7ed' : '#eff6ff'}
      />
      <path d="M100 140 L100 80" stroke="#15803d" stroke-width="4" />
      <ellipse cx="80" cy="118" rx="18" ry="7" fill="#22c55e" transform="rotate(-25 80 118)" />
      {#each PETALS as a (a)}
        <ellipse
          cx="100"
          cy="42"
          rx="13"
          ry="24"
          fill={flower === 'đỏ' ? '#dc2626' : '#f8fafc'}
          stroke="#94a3b8"
          transform="rotate({a} 100 62)"
        />
      {/each}
      <circle cx="100" cy="62" r="8" fill="#facc15" />
      <text x="10" y="18" font-size="12" fill="#334155">{TEMPERATURES[temp]} °C</text>
    </svg>
    <FeedbackNote tone={primulaNote.tone} text={primulaNote.text} />
  {/if}
</div>

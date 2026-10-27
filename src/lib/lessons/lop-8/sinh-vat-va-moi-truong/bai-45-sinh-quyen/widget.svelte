<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import { intText } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { BIOMES, P_MAX, P_MIN, REGIONS, T_MAX, T_MIN, biomeAt } from './engine.js';

  const W = 340;
  const H = 260;
  const L = 40;
  const R = 330;
  const TOP = 26;
  const BOTTOM = 222;

  /** @param {number} t */
  const xOf = (t) => L + ((t - T_MIN) / (T_MAX - T_MIN)) * (R - L);
  /** @param {number} p */
  const yOf = (p) => BOTTOM - ((p - P_MIN) / (P_MAX - P_MIN)) * (BOTTOM - TOP);
  /** @param {number} x */
  const tOf = (x) => Math.round(T_MIN + ((x - L) / (R - L)) * (T_MAX - T_MIN));
  /** @param {number} y */
  const pOf = (y) =>
    Math.round((P_MIN + ((BOTTOM - y) / (BOTTOM - TOP)) * (P_MAX - P_MIN)) / 5) * 5;
  /** @param {number} v @param {number} lo @param {number} hi */
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  const colorOf = (/** @type {string} */ id) => BIOMES.find((b) => b.id === id)?.color ?? '#fff';

  let t = $state(24);
  let p = $state(170);
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  const handle = $state({ x: xOf(24), y: yOf(170) });

  const biome = $derived(biomeAt(t, p));

  /** @param {number} nt @param {number} np */
  function setClimate(nt, np) {
    t = clamp(Math.round(nt), T_MIN, T_MAX);
    p = clamp(Math.round(np / 5) * 5, P_MIN, P_MAX);
    handle.x = xOf(t);
    handle.y = yOf(p);
  }

  const drag = {
    point: handle,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    /** @param {{x: number, y: number}} q */
    projector: (q) => ({
      x: xOf(clamp(tOf(q.x), T_MIN, T_MAX)),
      y: yOf(clamp(pOf(q.y), P_MIN, P_MAX)),
    }),
    onChange: () => setClimate(tOf(handle.x), pOf(handle.y)),
    /** @param {-1 | 0 | 1} dx @param {-1 | 0 | 1} dy @param {boolean} big */
    onKeyMove: (dx, dy, big) => setClimate(t + dx * (big ? 5 : 1), p - dy * (big ? 50 : 10)),
  };
</script>

<div class="space-y-4">
  <div class="grid gap-4 md:grid-cols-[3fr_2fr]">
    <svg
      bind:this={svgEl}
      viewBox="0 0 {W} {H}"
      class="mx-auto block w-full max-w-xl touch-none select-none"
      role="group"
      aria-label="Biểu đồ khí hậu các khu sinh học trên cạn: trục ngang là nhiệt độ trung bình năm, trục đứng là lượng mưa trong năm"
    >
      {#each REGIONS as [id, t0, t1, p0, p1], i (i)}
        <rect
          x={xOf(t0)}
          y={yOf(p1)}
          width={xOf(t1) - xOf(t0)}
          height={yOf(p0) - yOf(p1)}
          fill={colorOf(id)}
          stroke="#fff"
          stroke-width="1"
          opacity={id === biome.id ? 1 : 0.55}
        />
      {/each}
      <g font-size="8" fill="#0f172a" text-anchor="middle" pointer-events="none">
        <text x={xOf(-10)} y={yOf(200)}>đồng rêu</text>
        <text x={xOf(0)} y={yOf(200)}>rừng lá kim</text>
        <text x={xOf(12.5)} y={yOf(220)}>rừng ôn đới</text>
        <text x={xOf(12.5)} y={yOf(47)}>thảo nguyên</text>
        <text x={xOf(13)} y={yOf(6)}>hoang mạc</text>
        <text x={xOf(25)} y={yOf(95)}>savan</text>
        <text x={xOf(25)} y={yOf(280)}>rừng mưa</text>
        <text x={xOf(25)} y={yOf(258)}>nhiệt đới</text>
      </g>
      <line x1={L} y1={BOTTOM} x2={R} y2={BOTTOM} stroke="#334155" />
      <line x1={L} y1={TOP} x2={L} y2={BOTTOM} stroke="#334155" />
      <g font-size="9" fill="#334155">
        {#each [-15, -5, 5, 20, 30] as v (v)}
          <text x={xOf(v)} y={BOTTOM + 12} text-anchor="middle">{intText(v)}</text>
        {/each}
        {#each [0, 100, 200, 300, 400] as v (v)}
          <text x={L - 4} y={yOf(v) + 3} text-anchor="end">{v}</text>
        {/each}
        <text x={(L + R) / 2} y={BOTTOM + 26} text-anchor="middle"
          >nhiệt độ trung bình năm (°C)</text
        >
        <text x="4" y="12">lượng mưa (cm/năm)</text>
      </g>
      <g
        class="drag-handle"
        role="slider"
        tabindex="0"
        aria-label="Khí hậu một vùng: phím trái phải đổi nhiệt độ, lên xuống đổi lượng mưa"
        aria-valuemin={T_MIN}
        aria-valuemax={T_MAX}
        aria-valuenow={t}
        aria-valuetext="{intText(t)} độ C, {p} xentimét mưa mỗi năm: {biome.name}"
        style="cursor: grab; outline: none"
        use:draggable={drag}
      >
        <circle
          class="drag-knob"
          cx={handle.x}
          cy={handle.y}
          r="8"
          fill="#fff"
          stroke="#0f172a"
          stroke-width="2.5"
        />
      </g>
    </svg>

    <div class="space-y-2 rounded-xl border border-slate-200 p-4 text-sm">
      <p class="text-xs text-slate-600 tabular-nums">
        Nhiệt độ {intText(t)} °C · lượng mưa {p} cm/năm
      </p>
      <p class="text-lg font-bold" aria-live="polite">{biome.name}</p>
      <p><span class="font-semibold">Khí hậu:</span> {biome.climate}</p>
      <p><span class="font-semibold">Thực vật:</span> {biome.plants}</p>
      <p><span class="font-semibold">Động vật:</span> {biome.animals}</p>
      <p><span class="font-semibold">Phân bố:</span> {biome.where}</p>
    </div>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class="{button.quiet} text-sm" onclick={() => setClimate(24, 170)}
      >Hà Nội</button
    >
    {#each BIOMES as b (b.id)}
      <button
        type="button"
        class="{b.id === biome.id ? button.primary : button.quiet} text-sm"
        aria-pressed={b.id === biome.id}
        onclick={() => setClimate(b.sample.t, b.sample.p)}>{b.name}</button
      >
    {/each}
  </div>
  <p class="text-xs text-slate-600">
    Biểu đồ đơn giản hóa: ranh giới giữa các khu sinh học trong thực tế không rõ nét như vậy và còn
    phụ thuộc vào đất, địa hình, sự phân bố mưa trong năm.
  </p>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import {
    N_MAX,
    PHASES,
    SPAN_HOURS,
    cellsAt,
    divisionsAt,
    exponentialEnd,
    phaseAt,
    phaseSpans,
    sciTex,
    sciText,
  } from './engine.js';

  /** @typedef {import('./engine.js').CultureMode} CultureMode */

  const W = 360;
  const H = 230;
  const LEFT = 42;
  const RIGHT = 10;
  const TOP = 12;
  const BOTTOM = 34;

  const modeOptions = [
    { value: 'khong-lien-tuc', label: 'Không liên tục' },
    { value: 'lien-tuc', label: 'Liên tục' },
  ];
  const scaleOptions = [
    { value: 'log', label: 'Thang luỹ thừa' },
    { value: 'linear', label: 'Thang thường' },
  ];
  const X_TICKS = [0, 12, 24, 36, 48];
  const LOG_TICKS = [3, 5, 7, 9];

  let g = $state(30);
  let lag = $state(2);
  let t = $state(8);
  /** @type {CultureMode} */
  let mode = $state('khong-lien-tuc');
  let scale = $state('log');

  const culture = $derived({
    g,
    lag,
    mode,
  });
  const x = linear(0, SPAN_HOURS, LEFT, W - RIGHT).map;
  const yLog = linear(3, 9, H - BOTTOM, TOP).map;
  const yLin = linear(0, N_MAX, H - BOTTOM, TOP).map;
  /** @param {number} n */
  const y = (n) => (scale === 'log' ? yLog(Math.log10(n)) : yLin(n));

  const path = $derived.by(() => {
    const parts = [];
    for (let h = 0; h <= SPAN_HOURS; h += 0.25) {
      parts.push(`${x(h).toFixed(1)},${y(cellsAt(culture, h)).toFixed(1)}`);
    }
    return parts.join(' ');
  });
  const spans = $derived(phaseSpans(culture));
  const phase = $derived(phaseAt(culture, t));
  const cells = $derived(cellsAt(culture, t));
  const n = $derived(divisionsAt(culture, t));
  const end = $derived(exponentialEnd(culture));
  const note = $derived(
    `${PHASES[phase].name}. Sau $${numTex(t, 1)}$ giờ có khoảng $${sciTex(cells)}$ tế bào/mL; quần thể đã phân chia $n \\approx ${numTex(n, 1)}$ lần. ${PHASES[phase].text}`,
  );
  const compare = $derived(
    `Với $g = ${g}$ phút và pha tiềm phát $${lag}$ giờ, pha luỹ thừa kết thúc sau khoảng $${numTex(end, 1)}$ giờ. Thời gian thế hệ càng ngắn, đường cong càng dốc.`,
  );
  const label = $derived(
    `Đồ thị số tế bào theo thời gian. Tại ${formatNumber(t, 1)} giờ: ${PHASES[phase].name}, khoảng ${sciText(cells)} tế bào trên mililit.`,
  );
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl label="Kiểu nuôi cấy" options={modeOptions} bind:value={mode} />
    <SegmentedControl label="Trục số tế bào" options={scaleOptions} bind:value={scale} />
  </div>

  <svg viewBox="0 0 {W} {H}" class="block w-full rounded-xl bg-white" role="img" aria-label={label}>
    {#each spans as s (s.id)}
      <rect
        x={x(s.from)}
        y={TOP}
        width={x(s.to) - x(s.from)}
        height={H - TOP - BOTTOM}
        fill={PHASES[s.id].color}
      />
    {/each}
    {#if scale === 'log'}
      {#each LOG_TICKS as v (v)}
        <line x1={LEFT} x2={W - RIGHT} y1={yLog(v)} y2={yLog(v)} stroke="#cbd5e1" />
        <text x={LEFT - 4} y={yLog(v) + 4} font-size="11" text-anchor="end" fill="#334155">
          10<tspan dy="-4" font-size="8">{v}</tspan>
        </text>
      {/each}
    {:else}
      <text x={LEFT - 4} y={yLin(N_MAX) + 4} font-size="11" text-anchor="end" fill="#334155">
        10<tspan dy="-4" font-size="8">9</tspan>
      </text>
      <text x={LEFT - 4} y={yLin(0) + 4} font-size="11" text-anchor="end" fill="#334155">0</text>
    {/if}
    {#each X_TICKS as v (v)}
      <text x={x(v)} y={H - BOTTOM + 14} font-size="11" text-anchor="middle" fill="#334155">
        {v}
      </text>
    {/each}
    <text x={(LEFT + W - RIGHT) / 2} y={H - 6} font-size="11" text-anchor="middle" fill="#334155">
      Thời gian (giờ)
    </text>
    <text x={LEFT} y={TOP - 3} font-size="10" fill="#334155">Số tế bào/mL</text>
    <polyline points={path} fill="none" stroke="#4338ca" stroke-width="2.5" />
    <line x1={x(t)} x2={x(t)} y1={TOP} y2={H - BOTTOM} stroke="#0f172a" stroke-dasharray="3 3" />
    <circle cx={x(t)} cy={y(cells)} r="5" fill="#0f172a" />
  </svg>

  <ul class="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
    {#each spans as s (s.id)}
      <li class="rounded px-2 py-1" style:background={PHASES[s.id].color}>{PHASES[s.id].name}</li>
    {/each}
  </ul>

  <div class="grid gap-3 sm:grid-cols-3">
    <SliderField label="Thời gian thế hệ g" bind:value={g} min={20} max={60} step={5} unit="phút" />
    <SliderField label="Pha tiềm phát" bind:value={lag} min={1} max={6} unit="giờ" />
    <SliderField label="Thời điểm" bind:value={t} min={0} max={SPAN_HOURS} step={0.5} unit="giờ" />
  </div>

  <FeedbackNote tone="info" text={note} />
  <p class="text-sm text-slate-700"><LiveRichText text={compare} /></p>
  <p class="text-sm text-slate-700">
    {mode === 'lien-tuc'
      ? 'Nuôi cấy liên tục: thường xuyên bổ sung dinh dưỡng và lấy đi sản phẩm, nên không có pha suy vong.'
      : 'Nuôi cấy không liên tục: không bổ sung dinh dưỡng và không lấy đi sản phẩm, nên quần thể đi qua cả bốn pha.'}
    <span class="text-slate-500">Đồ thị là mô hình sơ đồ hoá.</span>
  </p>
</div>

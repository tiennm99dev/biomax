<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { focusRing } from '#lib/core/ui.js';
  import { VESSELS, describeVessel, velocity } from './engine.js';

  let output = $state(5);
  let selected = $state('dm-chu');

  const vessel = $derived(VESSELS.find((v) => v.id === selected) ?? VESSELS[0]);
  const speeds = $derived(VESSELS.map((v) => velocity(output, v.area)));
  const note = $derived(describeVessel(selected));

  const LEFT = 34;
  const RIGHT = 326;
  const TOP = 16;
  const BOTTOM = 112;
  const x = linear(0, VESSELS.length - 1, LEFT + 10, RIGHT - 10).map;
  const yP = linear(0, 100, BOTTOM, TOP).map;
  const yV = linear(0, velocity(20, VESSELS[0].area), BOTTOM, TOP).map;
  const pressureLine = VESSELS.map((v, i) => `${x(i)},${yP(v.pressure)}`).join(' ');
  const speedLine = $derived(speeds.map((s, i) => `${x(i)},${yV(s)}`).join(' '));
  const index = $derived(VESSELS.indexOf(vessel));

  /** @param {number} v */
  const speedText = (v) => formatNumber(v, v < 10 ? 2 : 0);
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 340 130"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Huyết áp giảm dần từ động mạch chủ đến tĩnh mạch chủ; vận tốc máu chậm nhất ở mao mạch"
  >
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    <line
      x1={x(index)}
      y1={TOP}
      x2={x(index)}
      y2={BOTTOM}
      stroke="#f59e0b"
      stroke-width="2"
      stroke-dasharray="4 3"
    />
    <polyline points={pressureLine} fill="none" stroke="#dc2626" stroke-width="2.5" />
    <polyline
      points={speedLine}
      fill="none"
      stroke="#2563eb"
      stroke-width="2.5"
      stroke-dasharray="6 3"
    />
    {#each VESSELS as v, i (v.id)}
      <circle cx={x(i)} cy={yP(v.pressure)} r="3.5" fill="#dc2626" />
      <circle cx={x(i)} cy={yV(speeds[i])} r="3.5" fill="#2563eb" />
    {/each}
    <text x={LEFT} y="11" font-size="11" fill="#dc2626">— huyết áp</text>
    <text x={RIGHT} y="11" text-anchor="end" font-size="11" fill="#2563eb">- - vận tốc máu</text>
    <text x={LEFT} y="125" font-size="11" fill="#334155">từ tim đi</text>
    <text x={RIGHT} y="125" text-anchor="end" font-size="11" fill="#334155">về tim</text>
  </svg>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn loại mạch">
    {#each VESSELS as v (v.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 py-2 text-sm {selected === v.id
          ? 'border-amber-500 bg-amber-50 font-semibold'
          : 'border-slate-300 bg-white'} {focusRing}"
        aria-pressed={selected === v.id}
        onclick={() => (selected = v.id)}
      >
        {v.name}
      </button>
    {/each}
  </div>

  <SliderField label="Lưu lượng tim" bind:value={output} min={5} max={20} unit="L/phút" />

  <table class="w-full text-sm tabular-nums" aria-live="polite">
    <caption class="sr-only">Số liệu của {vessel.name.toLowerCase()}</caption>
    <tbody>
      <tr><th class="py-1 text-left font-semibold">{vessel.name}</th><td></td></tr>
      <tr
        ><td class="py-1">Tổng tiết diện</td><td class="text-right"
          >{formatNumber(vessel.area)} cm²</td
        ></tr
      >
      <tr
        ><td class="py-1">Huyết áp trung bình</td><td class="text-right"
          >{formatNumber(vessel.pressure)} mmHg</td
        ></tr
      >
      <tr
        ><td class="py-1">Vận tốc máu trung bình</td><td class="text-right"
          >{speedText(speeds[index])} mm/s</td
        ></tr
      >
    </tbody>
  </table>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

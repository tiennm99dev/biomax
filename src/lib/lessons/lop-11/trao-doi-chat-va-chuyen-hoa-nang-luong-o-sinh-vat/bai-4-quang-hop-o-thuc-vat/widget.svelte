<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import {
    AIR_CO2,
    PLANTS,
    compensationPoint,
    describeLeaf,
    gross,
    net,
    respiration,
    saturationPoint,
  } from './engine.js';

  let plantId = $state('c3');
  let light = $state(50);
  let co2 = $state(AIR_CO2);
  let temp = $state(28);
  /** @type {string[]} */
  let zones = $state([]);

  const plant = $derived(PLANTS.find((p) => p.id === plantId) ?? PLANTS[0]);
  const air = $derived({ co2, temp });
  const lc = $derived(compensationPoint(plant, air));
  const ls = $derived(saturationPoint(plant, air));
  const note = $derived(describeLeaf(plant, air, light));
  const goals = $derived([
    { done: zones.includes('at'), text: 'Kéo ánh sáng đến điểm bù.' },
    {
      done: zones.includes('flat'),
      text: 'Tìm vùng mà thêm ánh sáng không còn làm quang hợp tăng.',
    },
    { done: zones.includes('c4'), text: 'So sánh điểm bão hoà của ngô với lúa.' },
    { done: zones.includes('never'), text: 'Tăng nhiệt độ đến khi quang hợp không bù nổi hô hấp.' },
  ]);

  const W = 360;
  const H = 240;
  const X = linear(0, 100, 40, W - 12).map;
  const Y = linear(-12, 40, H - 26, 14).map;

  const curve = $derived.by(() => {
    let d = '';
    for (let L = 0; L <= 100; L += 1) {
      const n = Math.max(-12, net(plant, air, L));
      d += `${L === 0 ? 'M' : 'L'} ${X(L).toFixed(1)} ${Y(n).toFixed(1)} `;
    }
    return d;
  });

  function record() {
    /** @type {string[]} */
    const next = [describeLeaf(plant, air, light).zone];
    if (plantId === 'c4') next.push('c4');
    zones = [...new Set([...zones, ...next])];
  }

  /** @param {string | number} next */
  function choosePlant(next) {
    plantId = String(next);
    record();
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Loại cây"
    value={plantId}
    onchange={choosePlant}
    options={PLANTS.map((p) => ({ value: p.id, label: p.name }))}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="w-full rounded-xl bg-slate-50"
    role="img"
    aria-label="Đồ thị quang hợp thực theo cường độ ánh sáng, với điểm bù và điểm bão hoà"
  >
    <line x1={X(0)} y1={Y(0)} x2={X(100)} y2={Y(0)} stroke="#475569" />
    <line x1={X(0)} y1={Y(-12)} x2={X(0)} y2={Y(40)} stroke="#475569" />
    {#each [0, 25, 50, 75, 100] as t (t)}
      <text x={X(t)} y={H - 10} text-anchor="middle" font-size="11" fill="#475569">{t}</text>
    {/each}
    {#each [-10, 0, 10, 20, 30, 40] as t (t)}
      <text x={X(0) - 5} y={Y(t) + 4} text-anchor="end" font-size="11" fill="#475569">{t}</text>
    {/each}
    <text x={W - 12} y={H - 26} text-anchor="end" font-size="10" fill="#475569">ánh sáng (%)</text>
    <text x={X(0) + 4} y="12" font-size="10" fill="#475569">quang hợp thực</text>

    <path d={curve} fill="none" stroke="#16a34a" stroke-width="3" />

    {#if lc !== null && lc <= 100}
      <circle cx={X(lc)} cy={Y(0)} r="5" fill="#dc2626" />
      <text x={X(lc) + 8} y={Y(0) + 15} font-size="11" fill="#b91c1c">điểm bù</text>
    {/if}
    {#if ls !== null && ls <= 100 && lc !== null}
      <line x1={X(ls)} y1={Y(-12)} x2={X(ls)} y2={Y(40)} stroke="#7c3aed" stroke-dasharray="4 3" />
      <text x={Math.min(X(ls) + 4, W - 70)} y="26" font-size="11" fill="#6d28d9">bão hoà</text>
    {/if}
    <circle
      cx={X(light)}
      cy={Y(Math.max(-12, Math.min(40, net(plant, air, light))))}
      r="6"
      fill="#2563eb"
      stroke="#fff"
      stroke-width="2"
    />
  </svg>

  <SliderField
    label="Cường độ ánh sáng"
    bind:value={light}
    min={0}
    max={100}
    step={1}
    unit="%"
    oninput={record}
  />
  <SliderField
    label="Nồng độ CO₂"
    bind:value={co2}
    min={0}
    max={0.2}
    step={0.005}
    unit="%"
    format={(v) => formatNumber(v, 3)}
    oninput={record}
  />
  <SliderField
    label="Nhiệt độ"
    bind:value={temp}
    min={5}
    max={50}
    step={1}
    unit="°C"
    oninput={record}
  />

  <dl class="grid grid-cols-3 gap-2 text-center text-sm">
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Quang hợp</dt>
      <dd class="font-semibold">{formatNumber(gross(plant, air, light), 1)}</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Hô hấp</dt>
      <dd class="font-semibold">{formatNumber(respiration(plant, temp), 1)}</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Tích luỹ</dt>
      <dd class="font-semibold">{formatNumber(net(plant, air, light), 1)}</dd>
    </div>
  </dl>

  <FeedbackNote tone={note.tone} text={note.text} />

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        {goal.text}
      </li>
    {/each}
  </ul>
</div>

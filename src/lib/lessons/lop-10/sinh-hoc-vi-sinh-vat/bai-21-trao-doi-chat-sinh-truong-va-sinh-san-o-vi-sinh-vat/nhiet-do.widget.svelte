<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { GROUPS, PLACES, groupAt } from './engine.js';

  const W = 340;
  const x = linear(0, 100, 10, W - 10).map;
  const TICKS = [0, 20, 40, 60, 80, 100];

  let t = $state(37);
  const group = $derived(groupAt(t));
  const place = $derived(PLACES.find((p) => p.t === t) ?? null);
  const text = $derived(
    `${t} °C: ${group ? `thuộc khoảng thích hợp của nhóm ${group.name.toLowerCase()}, thường gặp ở ${group.where}.` : 'nằm ngoài khoảng thích hợp của cả bốn nhóm.'}${place ? ` ${place.name}: ${place.use}` : ''}`,
  );
</script>

<div class="space-y-3 rounded-2xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">Nhiệt độ và bốn nhóm vi sinh vật</p>

  <svg
    viewBox="0 0 {W} 150"
    class="block w-full"
    role="img"
    aria-label="Khoảng nhiệt độ thích hợp của bốn nhóm vi sinh vật; đang chọn {t} độ C"
  >
    {#each GROUPS as gr, i (gr.id)}
      <rect
        x={x(gr.lo)}
        y={8 + i * 28}
        width={x(gr.hi) - x(gr.lo)}
        height="20"
        rx="4"
        fill={gr.color}
        opacity={group?.id === gr.id ? 1 : 0.4}
      />
      <text x={x(gr.lo) + 4} y={22 + i * 28} font-size="11" font-weight="600" fill="#0f172a">
        {gr.name}
      </text>
    {/each}
    {#each TICKS as v (v)}
      <text x={x(v)} y="136" font-size="10" text-anchor="middle" fill="#334155">{v}</text>
    {/each}
    <line x1={x(t)} x2={x(t)} y1="2" y2="124" stroke="#0f172a" stroke-width="2" />
    <text x={W / 2} y="149" font-size="10" text-anchor="middle" fill="#334155">Nhiệt độ (°C)</text>
  </svg>

  <SliderField label="Nhiệt độ" bind:value={t} min={0} max={100} unit="°C" />

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn nhanh một nơi">
    {#each PLACES as p (p.name)}
      <button type="button" class={button.quiet} onclick={() => (t = p.t)}>{p.name}</button>
    {/each}
  </div>

  <FeedbackNote tone={group ? 'ok' : 'info'} {text} />
</div>

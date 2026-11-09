<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { PHASES, REST_RATE, cycleOf, durations, phaseAt } from './engine.js';

  /** Real seconds per simulated second: the beat is shown four times slower. */
  const SLOW = 4;

  let rate = $state(REST_RATE);
  let t = $state(0);
  let playing = $state(false);

  const phase = $derived(phaseAt(t, rate));
  const d = $derived(durations(rate));
  const atriaSqueeze = $derived(phase.id === 'nhi-co');
  const ventSqueeze = $derived(phase.id === 'that-co');

  $effect(() => {
    if (!playing) return;
    return frameLoop((dt) => {
      t += dt / SLOW;
    });
  });

  function toggle() {
    if (reducedMotion()) {
      step();
      return;
    }
    playing = !playing;
  }

  /** Jump to the start of the next phase. */
  function step() {
    playing = false;
    const cycle = cycleOf(rate);
    const inCycle = ((t % cycle) + cycle) % cycle;
    let start = 0;
    for (const p of PHASES) {
      start += d[p.id];
      if (inCycle < start - 1e-9) {
        t = t - inCycle + start + 1e-6;
        return;
      }
    }
    t = t - inCycle + cycle + 1e-6;
  }

  const note = $derived({
    tone: /** @type {'info'} */ ('info'),
    text: `${phase.name}: ${phase.blood} Van nhĩ thất ${phase.avOpen ? 'mở' : 'đóng'}, van động mạch ${phase.slOpen ? 'mở' : 'đóng'}. ${phase.signal}`,
  });

  /** @param {boolean} on */
  const glow = (on) => (on ? '#facc15' : '#e2e8f0');
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 320 240"
    class="mx-auto w-full max-w-sm"
    role="img"
    aria-label="Mô hình tim bốn ngăn, pha {phase.name.toLowerCase()}"
  >
    <!-- atria -->
    {#each [{ x: 40, fill: '#93c5fd', name: 'Nhĩ phải' }, { x: 170, fill: '#fca5a5', name: 'Nhĩ trái' }] as a (a.name)}
      <rect
        x={a.x + (atriaSqueeze ? 8 : 0)}
        y={30 + (atriaSqueeze ? 6 : 0)}
        width={110 - (atriaSqueeze ? 16 : 0)}
        height={60 - (atriaSqueeze ? 10 : 0)}
        rx="18"
        fill={a.fill}
        stroke="#334155"
        stroke-width={atriaSqueeze ? 4 : 2}
      />
      <text x={a.x + 55} y="64" text-anchor="middle" font-size="12" fill="#0f172a">{a.name}</text>
    {/each}
    <!-- ventricles -->
    {#each [{ x: 40, fill: '#60a5fa', name: 'Thất phải' }, { x: 170, fill: '#f87171', name: 'Thất trái' }] as v (v.name)}
      <path
        d="M {v.x + (ventSqueeze ? 8 : 0)} 104 H {v.x + 110 - (ventSqueeze ? 8 : 0)} V {ventSqueeze
          ? 170
          : 180} Q {v.x + 55} {ventSqueeze ? 205 : 222} {v.x + (ventSqueeze ? 8 : 0)} {ventSqueeze
          ? 170
          : 180} Z"
        fill={v.fill}
        stroke="#334155"
        stroke-width={ventSqueeze ? 4 : 2}
      />
      <text x={v.x + 55} y="150" text-anchor="middle" font-size="12" fill="#0f172a">{v.name}</text>
      <!-- atrioventricular valve -->
      {#if phase.avOpen}
        <path
          d="M {v.x + 30} 94 L {v.x + 42} 112 M {v.x + 80} 94 L {v.x + 68} 112"
          stroke="#0f172a"
          stroke-width="3"
        />
      {:else}
        <path d="M {v.x + 30} 97 L {v.x + 80} 97" stroke="#0f172a" stroke-width="3" />
      {/if}
      <!-- artery leaving the ventricle, with its semilunar valve -->
      {@const tube = v.x === 40 ? 12 : 290}
      <rect x={tube} y="22" width="18" height="118" rx="6" fill={v.fill} stroke="#334155" />
      <rect
        x={v.x === 40 ? 30 : 280}
        y="122"
        width="10"
        height="14"
        fill={phase.slOpen ? '#fde68a' : '#475569'}
        stroke="#334155"
      />
      <text x={tube + 9} y="14" text-anchor="middle" font-size="10" fill="#0f172a"
        >{v.x === 40 ? 'ĐM phổi' : 'ĐM chủ'}</text
      >
    {/each}
    <!-- conduction system -->
    <circle cx="58" cy="42" r="7" fill={glow(phase.id === 'nhi-co')} stroke="#a16207" />
    <circle cx="158" cy="98" r="7" fill={glow(phase.id === 'that-co')} stroke="#a16207" />
    <path
      d="M 158 105 L 158 180 M 158 150 L 110 196 M 158 150 L 206 196"
      stroke={glow(phase.id === 'that-co')}
      stroke-width="4"
      fill="none"
    />
  </svg>

  <p class="text-xs text-slate-600">
    Chấm và đường vàng sáng: xung đang ở nút xoang nhĩ (trong tâm nhĩ phải) hoặc ở nút nhĩ thất, bó
    His, mạng Purkinje (vách tim). Ô vàng ở chân động mạch: van động mạch mở; ô xám: van đóng.
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={toggle}>
      {playing ? 'Tạm dừng' : 'Cho tim đập (chậm 4 lần)'}
    </button>
    <button type="button" class={button.secondary} onclick={step}>Sang pha tiếp</button>
  </div>

  <SliderField label="Nhịp tim" bind:value={rate} min={50} max={150} step={5} unit="lần/phút" />

  <ul class="grid gap-1 text-sm sm:grid-cols-3" aria-live="polite">
    {#each PHASES as p (p.id)}
      <li
        class="rounded-lg px-3 py-2 {phase.id === p.id
          ? 'bg-amber-100 font-semibold'
          : 'bg-slate-50'} tabular-nums"
      >
        {p.name}: {formatFixed(d[p.id], 2)} s
      </li>
    {/each}
  </ul>
  <p class="text-sm tabular-nums">
    Một chu kì tim kéo dài {formatFixed(cycleOf(rate), 2)} s, tức {formatNumber(rate)} chu kì mỗi phút.
    {rate > REST_RATE
      ? 'Tim đập nhanh: pha dãn chung ngắn đi nhiều nhất, tim ít thời gian nghỉ và nhận máu.'
      : ''}
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { JARS, cloudiness, describeJar } from './engine.js';

  /** @type {import('./engine.js').JarId} */
  let jarA = $state('nay-mam');
  let minutes = $state(0);

  const a = $derived(cloudiness(jarA, minutes));
  const b = $derived(cloudiness('trong', minutes));

  const note = $derived(describeJar(jarA, minutes));

  /** @param {number} c */
  const milk = (c) => `rgba(241, 245, 249, ${0.15 + 0.85 * c})`;
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 300 150"
    class="mx-auto w-full max-w-sm"
    role="img"
    aria-label="Chuông A: nước vôi {a > 0.3 ? 'vẩn đục' : 'còn trong'}; chuông B: nước vôi {b > 0.3
      ? 'vẩn đục'
      : 'còn trong'}"
  >
    {#each [{ id: 'A', cx: 75, c: a, seeds: jarA }, { id: 'B', cx: 225, c: b, seeds: 'trong' }] as j (j.id)}
      <path
        d="M {j.cx - 60} 140 L {j.cx - 60} 60 Q {j.cx - 60} 15 {j.cx} 15 Q {j.cx + 60} 15 {j.cx +
          60} 60 L {j.cx + 60} 140"
        fill="#e0f2fe"
        fill-opacity="0.4"
        stroke="#0369a1"
        stroke-width="2"
      />
      <line x1={j.cx - 70} y1="140" x2={j.cx + 70} y2="140" stroke="#475569" stroke-width="3" />
      {#if j.seeds !== 'trong'}
        <ellipse
          cx={j.cx - 25}
          cy="134"
          rx="24"
          ry="5"
          fill={j.seeds === 'nay-mam' ? '#ca8a04' : '#a8a29e'}
        />
      {/if}
      <rect x={j.cx + 4} y="100" width="40" height="38" fill="#cbd5e1" stroke="#475569" />
      <rect x={j.cx + 6} y="106" width="36" height="31" fill="#bae6fd" />
      <rect
        x={j.cx + 6}
        y="106"
        width="36"
        height="6"
        fill={milk(j.c)}
        stroke="#94a3b8"
        stroke-width="0.5"
      />
      <text x={j.cx} y="12" text-anchor="middle" font-size="12" font-weight="600" fill="#0f172a"
        >Chuông {j.id}</text
      >
    {/each}
  </svg>

  <SegmentedControl
    label="Đặt vào chuông A"
    value={jarA}
    options={Object.entries(JARS).map(([value, j]) => ({ value, label: j.name }))}
    onchange={(v) => {
      jarA = v === 'luoc' ? 'luoc' : v === 'trong' ? 'trong' : 'nay-mam';
    }}
  />
  <SliderField
    label="Thời gian để chuông"
    bind:value={minutes}
    min={0}
    max={60}
    step={5}
    unit="phút"
  />
  <FeedbackNote tone={note.tone} text={note.text} />
</div>

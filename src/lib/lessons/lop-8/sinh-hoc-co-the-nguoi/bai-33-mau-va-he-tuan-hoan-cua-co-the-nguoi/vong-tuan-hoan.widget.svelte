<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { button } from '#lib/core/ui.js';
  import { CHAMBERS, STEPS, along, richAt } from './engine.js';

  let i = $state(0);
  let t = $state(1);
  let playing = $state(false);
  let show = $state('ca-hai');

  const step = $derived(STEPS[i]);
  const dot = $derived(along(step.points, t));
  const rich = $derived(richAt(i, t));

  /** @param {Array<[number, number]>} pts */
  const line = (pts) => pts.map((p) => p.join(',')).join(' ');

  /** @param {import('./engine.js').Step} s */
  function visible(s) {
    if (show === 'ca-hai') return true;
    return s.loop === show;
  }

  function next() {
    i = (i + 1) % STEPS.length;
    t = reducedMotion() ? 1 : 0;
  }

  function prev() {
    i = (i - 1 + STEPS.length) % STEPS.length;
    t = 1;
  }

  $effect(() => {
    if (!playing) return;
    return frameLoop((dt) => {
      if (reducedMotion()) {
        t = 1;
        return;
      }
      t += dt / 1.6;
      if (t >= 1) {
        t = 1;
        playing = false;
      }
    });
  });

  function go() {
    next();
    playing = !reducedMotion();
  }

  const DARK = '#7f1d1d';
  const BRIGHT = '#ef4444';
  /** @param {import('./engine.js').Step} s */
  const colorOf = (s) => (s.loop === 'tim' ? '#94a3b8' : s.rich ? BRIGHT : DARK);
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Làm nổi bật"
    options={[
      { value: 'ca-hai', label: 'Cả hai vòng' },
      { value: 'nho', label: 'Vòng tuần hoàn nhỏ' },
      { value: 'lon', label: 'Vòng tuần hoàn lớn' },
    ]}
    bind:value={show}
  />
  <div class="grid items-start gap-4 sm:grid-cols-[minmax(0,18rem)_1fr]">
    <svg
      viewBox="0 0 320 360"
      class="mx-auto block w-full max-w-72"
      role="img"
      aria-label="Sơ đồ hai vòng tuần hoàn; máu đang ở {step.name.toLowerCase()}"
    >
      <rect x="0" y="0" width="320" height="360" rx="14" fill="#f8fafc" />
      <rect x="105" y="25" width="110" height="40" rx="14" fill="#e0f2fe" stroke="#0284c7" />
      <text x="160" y="20" font-size="11" text-anchor="middle" fill="#075985">Phổi</text>
      <rect x="105" y="300" width="110" height="40" rx="14" fill="#fef3c7" stroke="#d97706" />
      <text x="160" y="354" font-size="11" text-anchor="middle" fill="#92400e"
        >Các cơ quan (tế bào)</text
      >
      {#each STEPS as s, k (s.id)}
        <polyline
          points={line(s.points)}
          fill="none"
          stroke={colorOf(s)}
          stroke-width={k === i ? 9 : 6}
          stroke-linejoin="round"
          stroke-linecap="round"
          opacity={visible(s) ? 1 : 0.2}
        />
      {/each}
      {#each Object.values(CHAMBERS) as c (c.name)}
        <rect
          x={c.x - 30}
          y={c.y - 24}
          width="60"
          height="48"
          rx="12"
          fill={c.x > 160 ? '#fecaca' : '#e2e8f0'}
          stroke="#475569"
        />
        <text x={c.x} y={c.y - 2} font-size="9" text-anchor="middle" fill="#0f172a"
          >{c.name.split(' ').slice(0, 2).join(' ')}</text
        >
        <text x={c.x} y={c.y + 10} font-size="9" text-anchor="middle" fill="#0f172a"
          >{c.name.split(' ').slice(2).join(' ')}</text
        >
      {/each}
      <circle
        cx={dot[0]}
        cy={dot[1]}
        r="9"
        fill={rich ? BRIGHT : DARK}
        stroke="#ffffff"
        stroke-width="2.5"
      />
    </svg>

    <div class="space-y-3 text-sm" aria-live="polite">
      <p class="text-base font-semibold text-slate-800">
        {i + 1}. {step.name}
        <span class="text-sm font-normal text-slate-600"
          >({step.loop === 'nho'
            ? 'vòng tuần hoàn nhỏ'
            : step.loop === 'lon'
              ? 'vòng tuần hoàn lớn'
              : 'trong tim'})</span
        >
      </p>
      <p>{step.text}</p>
      <p class="flex items-center gap-2">
        <span
          class="inline-block h-3 w-3 rounded-full"
          style="background: {rich ? BRIGHT : DARK}"
          aria-hidden="true"
        ></span>
        {rich ? 'Máu đỏ tươi, giàu O₂' : 'Máu đỏ thẫm, giàu CO₂'}
      </p>
    </div>
  </div>
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={prev}>← Bước trước</button>
    <button type="button" class={button.primary} onclick={go}>Cho máu chảy tiếp →</button>
  </div>
</div>

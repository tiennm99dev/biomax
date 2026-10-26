<script>
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { airflow, chest, describeBreath } from './engine.js';

  let p = $state(0);
  /** @type {'vao' | 'ra' | 'dung'} */
  let dir = $state('dung');
  /** @type {number | null} */
  let target = $state(null);
  let auto = $state(false);

  const c = $derived(chest(p));
  const info = $derived(describeBreath(dir));
  const percent = $derived(Math.round(100 * p));

  /** @param {number} next */
  function setP(next) {
    const v = Math.min(1, Math.max(0, next));
    const d = airflow(p, v);
    if (d !== 'dung') dir = d;
    p = v;
  }

  /** @param {number} to */
  function breathe(to) {
    if (reducedMotion()) {
      setP(to);
      return;
    }
    target = to;
  }

  $effect(() => {
    if (target === null && !auto) return;
    return frameLoop((dt) => {
      if (target === null) {
        if (!auto) return;
        target = p < 0.5 ? 1 : 0;
      }
      const step = dt / 1.4;
      const next = target > p ? Math.min(target, p + step) : Math.max(target, p - step);
      setP(next);
      if (next === target) target = auto ? (target === 1 ? 0 : 1) : null;
    });
  });

  function toggleAuto() {
    auto = !auto;
    if (auto && reducedMotion()) auto = false;
    if (!auto) target = null;
  }

  /** Rib k on one side (`s` = −1 left, 1 right), lifting with the breath. */
  /** @param {number} k @param {number} s */
  function rib(k, s) {
    const y = 108 + k * 24;
    const x2 = 130 + s * (66 + 4 * p);
    return `M ${130 + s * 6} ${y} Q ${130 + s * 52} ${y - 6 - c.ribLift / 2} ${x2} ${y + 20 - c.ribLift}`;
  }
</script>

<div class="space-y-4">
  <div class="grid items-center gap-4 sm:grid-cols-2">
    <svg
      viewBox="0 0 260 300"
      class="mx-auto block w-full max-w-xs"
      role="img"
      aria-label="Mô hình lồng ngực: phổi {dir === 'vao'
        ? 'đang phồng lên'
        : dir === 'ra'
          ? 'đang xẹp xuống'
          : 'đứng yên'}, thể tích lồng ngực {percent}% mức hít vào"
    >
      <rect x="0" y="0" width="260" height="300" rx="14" fill="#f0f9ff" />
      <!-- air -->
      {#if dir !== 'dung'}
        <g fill="#0284c7" font-size="10" font-weight="700">
          <path
            d={dir === 'vao'
              ? 'M 160 8 L 160 34 L 154 28 M 160 34 L 166 28'
              : 'M 160 34 L 160 8 L 154 14 M 160 8 L 166 14'}
            stroke="#0284c7"
            stroke-width="2.5"
            fill="none"
          />
          <text x="172" y="26">{dir === 'vao' ? 'không khí vào' : 'không khí ra'}</text>
        </g>
      {/if}
      <!-- airway -->
      <path
        d="M 130 14 L 130 96 M 130 96 L 104 118 M 130 96 L 156 118"
        stroke="#64748b"
        stroke-width="7"
        fill="none"
        stroke-linecap="round"
      />
      <!-- lungs -->
      <ellipse
        cx="92"
        cy={150 + 10 * p}
        rx={c.lungRx}
        ry={c.lungRy}
        fill="#fda4af"
        stroke="#be123c"
        stroke-width="2"
      />
      <ellipse
        cx="168"
        cy={150 + 10 * p}
        rx={c.lungRx}
        ry={c.lungRy}
        fill="#fda4af"
        stroke="#be123c"
        stroke-width="2"
      />
      <!-- ribs and breastbone -->
      <rect
        x="125"
        y={100 - c.ribLift / 2}
        width="10"
        height="92"
        rx="4"
        fill="#e7e5e4"
        stroke="#78716c"
      />
      {#each [0, 1, 2, 3, 4] as k (k)}
        <path d={rib(k, -1)} stroke="#a8a29e" stroke-width="5" fill="none" stroke-linecap="round" />
        <path d={rib(k, 1)} stroke="#a8a29e" stroke-width="5" fill="none" stroke-linecap="round" />
      {/each}
      <!-- diaphragm -->
      <path
        d="M 40 {c.rim} Q 130 {c.rim - 2 * c.dome} 220 {c.rim}"
        stroke="#b45309"
        stroke-width="7"
        fill="none"
        stroke-linecap="round"
      />
      <text x="130" y="290" font-size="11" text-anchor="middle" fill="#78350f" font-weight="700"
        >cơ hoành {dir === 'vao' ? 'co, hạ xuống' : dir === 'ra' ? 'dãn, nâng lên' : ''}</text
      >
    </svg>

    <div class="space-y-3">
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} onclick={() => breathe(1)}>Hít vào</button>
        <button type="button" class={button.secondary} onclick={() => breathe(0)}>Thở ra</button>
        <button type="button" class={button.quiet} aria-pressed={auto} onclick={toggleAuto}
          >{auto ? 'Dừng thở' : 'Thở đều'}</button
        >
      </div>
      <SliderField
        label="Mức hít vào"
        value={percent}
        min={0}
        max={100}
        step={5}
        unit="%"
        oninput={(v) => {
          target = null;
          auto = false;
          setP(v / 100);
        }}
      />
      <dl class="space-y-2 text-sm">
        <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
          <dt class="text-slate-600">Các cơ hô hấp</dt>
          <dd class="font-semibold">{info.muscles}</dd>
        </div>
        <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
          <dt class="text-slate-600">Lồng ngực</dt>
          <dd class="font-semibold">{info.chest}</dd>
        </div>
      </dl>
    </div>
  </div>
  <p class="min-h-12 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
    {info.text}
  </p>
  <p class="text-xs text-slate-600">Mô hình nhìn từ phía trước, vẽ sơ lược.</p>
</div>

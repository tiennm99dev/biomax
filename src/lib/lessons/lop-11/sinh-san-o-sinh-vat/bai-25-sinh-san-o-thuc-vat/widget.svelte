<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { CELLS, FUSE_STEP, STEPS, fuse, judge } from './engine.js';

  /** @typedef {import('./engine.js').Target} Target */

  let step = $state(0);
  /** @type {Target | ''} */
  let first = $state('');
  /** @type {Target | ''} */
  let second = $state('');
  let checked = $state(false);

  const verdict = $derived(judge(first || null, second || null));
  const fused = $derived(checked && verdict.ok);
  const canNext = $derived(step < STEPS.length - 1 && (step !== FUSE_STEP || fused));

  const targetOptions = /** @type {Target[]} */ (Object.keys(CELLS)).map((t) => ({
    value: t,
    label: CELLS[t].name,
  }));

  /** Pollen tube length along its path, 0 to 1, at each step. */
  const TUBE = [0, 0.55, 1, 1, 1];
  const tube = $derived(TUBE[step]);

  /** Where the two sperm sit, in SVG units. */
  const sperm = $derived.by(() => {
    if (step === 0) return [];
    if (step === 1)
      return [
        { x: 117, y: 128 },
        { x: 123, y: 136 },
      ];
    if (step === 2 || !fused)
      return [
        { x: 114, y: 262 },
        { x: 126, y: 262 },
      ];
    return [];
  });

  /** @param {number} to */
  function go(to) {
    step = to;
  }

  function check() {
    checked = true;
  }

  function reset() {
    step = 0;
    first = '';
    second = '';
    checked = false;
  }
</script>

<div class="space-y-3">
  <ol class="flex flex-wrap gap-1 text-xs" aria-label="Các bước">
    {#each STEPS as s, i (i)}
      <li
        class="rounded-full px-2 py-1 {i === step
          ? 'bg-indigo-600 text-white'
          : i < step
            ? 'bg-indigo-100 text-indigo-800'
            : 'bg-slate-100 text-slate-600'}"
        aria-current={i === step ? 'step' : undefined}
      >
        {i + 1}. {s.title}
      </li>
    {/each}
  </ol>

  <svg
    viewBox="0 0 240 300"
    class="mx-auto block w-full max-w-xs"
    role="img"
    aria-label="Nhuỵ hoa cắt dọc ở bước {step + 1}: {STEPS[step].title}"
  >
    <!-- bầu nhuỵ, vòi nhuỵ, núm nhuỵ -->
    <ellipse
      cx="120"
      cy="220"
      rx="85"
      ry="70"
      fill={step === 4 ? '#fdba74' : '#bbf7d0'}
      stroke="#15803d"
    />
    <rect x="110" y="34" width="20" height="124" fill="#bbf7d0" stroke="#15803d" />
    <ellipse cx="120" cy="30" rx="34" ry="11" fill="#86efac" stroke="#15803d" />
    <!-- noãn và túi phôi -->
    <ellipse
      cx="120"
      cy="222"
      rx="44"
      ry="52"
      fill={step === 4 ? '#fef3c7' : '#dcfce7'}
      stroke="#166534"
    />
    <path d="M 112 274 L 120 266 L 128 274" fill="none" stroke="#166534" />
    <ellipse
      cx="120"
      cy="222"
      rx="30"
      ry="40"
      fill={fused && step === 4 ? '#fde68a' : '#f0fdf4'}
      stroke="#166534"
      stroke-dasharray="3 2"
    />
    {#if step < 4}
      {#each [108, 120, 132] as x (x)}
        <circle cx={x} cy="192" r="5" fill="#e9d5ff" stroke="#6b21a8" />
      {/each}
      <circle cx="104" cy="252" r="6" fill="#e0e7ff" stroke="#3730a3" />
      <circle cx="136" cy="252" r="6" fill="#e0e7ff" stroke="#3730a3" />
      <circle cx="120" cy="250" r="8" fill={fused ? '#fca5a5' : '#fecdd3'} stroke="#9f1239" />
      {#if fused}
        <circle cx="120" cy="222" r="6" fill="#fcd34d" stroke="#92400e" />
        <text x="120" y="253" font-size="7" text-anchor="middle">2n</text>
        <text x="120" y="225" font-size="7" text-anchor="middle">3n</text>
      {:else}
        <circle cx="115" cy="222" r="4" fill="#fde68a" stroke="#92400e" />
        <circle cx="125" cy="222" r="4" fill="#fde68a" stroke="#92400e" />
      {/if}
    {:else}
      <text x="120" y="215" font-size="9" text-anchor="middle">Nội nhũ (3n)</text>
      <ellipse cx="120" cy="246" rx="10" ry="7" fill="#fca5a5" stroke="#9f1239" />
      <text x="120" y="249" font-size="7" text-anchor="middle">Phôi</text>
      <text x="120" y="180" font-size="9" text-anchor="middle" font-weight="bold">Hạt</text>
      <text x="196" y="205" font-size="9" text-anchor="middle" font-weight="bold">Quả</text>
    {/if}
    <!-- ống phấn -->
    <path
      d="M 120 34 L 120 160 C 208 166 210 292 120 274"
      fill="none"
      stroke="#ca8a04"
      stroke-width="3"
      pathLength="1"
      stroke-dasharray="1"
      stroke-dashoffset={1 - tube}
      class="motion-safe:transition-[stroke-dashoffset] motion-safe:duration-700"
    />
    {#if step >= 0 && step < 4}
      <circle cx="120" cy="22" r="7" fill="#facc15" stroke="#a16207" />
    {/if}
    {#each sperm as p, i (i)}
      <circle cx={p.x} cy={p.y} r="3.5" fill="#1d4ed8" />
    {/each}
    <text x="168" y="30" font-size="9">Núm nhuỵ</text>
    <text x="136" y="100" font-size="9">Vòi nhuỵ</text>
    {#if step < 4}
      <text x="196" y="215" font-size="9" text-anchor="middle">Bầu</text>
      <text x="120" y="292" font-size="8" text-anchor="middle">Lỗ noãn</text>
    {/if}
  </svg>

  <p class="rounded-lg bg-white px-3 py-2 text-sm" aria-live="polite">
    <strong>{STEPS[step].title}.</strong>
    <LiveRichText text={STEPS[step].text} />
  </p>

  {#if step === FUSE_STEP}
    <div class="space-y-2">
      <SegmentedControl
        label="Giao tử đực thứ nhất kết hợp với"
        options={targetOptions}
        bind:value={first}
        onchange={() => (checked = false)}
      />
      <SegmentedControl
        label="Giao tử đực thứ hai kết hợp với"
        options={targetOptions}
        bind:value={second}
        onchange={() => (checked = false)}
      />
      <p class="text-sm text-slate-700">
        {#if first}Giao tử đực thứ nhất (n) + {CELLS[first].name} → tế bào {fuse(first)}n.
        {/if}
        {#if second}Giao tử đực thứ hai + {CELLS[second].name} → tế bào {fuse(second)}n.{/if}
      </p>
      <button type="button" class={button.secondary} onclick={check} disabled={!first || !second}>
        Kiểm tra
      </button>
      {#if checked}
        <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
      {/if}
    </div>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={() => go(step - 1)} disabled={step === 0}>
      Bước trước
    </button>
    <button type="button" class={button.primary} onclick={() => go(step + 1)} disabled={!canNext}>
      Bước tiếp
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Từ đầu</button>
  </div>
</div>

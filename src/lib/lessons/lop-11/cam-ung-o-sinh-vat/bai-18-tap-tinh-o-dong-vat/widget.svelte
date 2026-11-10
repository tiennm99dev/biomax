<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { FIRM, FULL_DROPS, SIGNALS, drops, explain, signal, stage, trial } from './engine.js';

  /** @type {import('./engine.js').SignalId} */
  let sig = $state('chuong');
  let strength = $state(0);
  let pairs = $state(0);
  /** @type {import('./engine.js').TrialId | null} */
  let lastKind = $state(null);
  let last = $state(/** @type {import('./engine.js').Trial | null} */ (null));
  /** Bell-alone saliva the dog would give after each trial, from the start. */
  let history = $state([0]);

  const s = $derived(signal(sig));
  const note = $derived(explain(lastKind, last, pairs, sig));
  const st = $derived(stage(strength));

  /** @param {import('./engine.js').TrialId} kind @param {number} [times] */
  function run(kind, times = 1) {
    /** @type {import('./engine.js').Trial | null} */
    let t = null;
    let v = strength;
    /** @type {number[]} */
    const added = [];
    for (let i = 0; i < times; i++) {
      t = trial(v, kind);
      v = t.after;
      if (kind === 'cap') pairs += 1;
      added.push(drops(v));
    }
    strength = v;
    last = t;
    lastKind = kind;
    history = [...history, ...added].slice(-41);
  }

  function reset() {
    strength = 0;
    pairs = 0;
    last = null;
    lastKind = null;
    history = [0];
  }

  /** @param {string | number} v @returns {import('./engine.js').SignalId} */
  const asSignal = (v) => SIGNALS.find((x) => x.id === v)?.id ?? 'chuong';

  const showSignal = $derived(lastKind !== null && lastKind !== 'chi-an');
  const showFood = $derived(lastKind === 'cap' || lastKind === 'nguoc' || lastKind === 'chi-an');
  const saliva = $derived(last ? last.saliva : 0);

  const cx = linear(0, 40, 40, 320).map;
  const cy = linear(0, FULL_DROPS, 232, 182).map;
  const curve = $derived(history.map((d, i) => `${cx(i)},${cy(d)}`).join(' '));
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Kích thích có điều kiện"
    value={sig}
    options={SIGNALS.map((x) => ({ value: x.id, label: x.name }))}
    onchange={(v) => {
      sig = asSignal(v);
      reset();
    }}
  />

  <svg
    viewBox="0 0 340 250"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Chó trong thí nghiệm Pavlov. Lần thử cuối: {saliva} giọt nước bọt. Đã ghép {pairs} lần."
  >
    <!-- the dog -->
    <ellipse cx="200" cy="90" rx="62" ry="34" fill="#d6a76c" />
    <circle cx="130" cy="68" r="28" fill="#d6a76c" />
    <ellipse cx="112" cy="52" rx="9" ry="18" fill="#a16207" transform="rotate(-20 112 52)" />
    <circle cx="124" cy="62" r="3.5" fill="#1e293b" />
    <ellipse cx="104" cy="78" rx="10" ry="7" fill="#d6a76c" />
    <circle cx="96" cy="76" r="3" fill="#1e293b" />
    {#each [160, 180, 225, 245] as lx (lx)}
      <rect x={lx} y="115" width="9" height="28" fill="#b98a52" />
    {/each}
    <!-- saliva tube and drops -->
    <path d="M108 86 L108 100 L62 100 L62 112" fill="none" stroke="#64748b" stroke-width="2" />
    <rect x="50" y="112" width="24" height="30" rx="3" fill="#fff" stroke="#64748b" />
    <rect
      x="51"
      y={141 - (saliva / FULL_DROPS) * 28}
      width="22"
      height={(saliva / FULL_DROPS) * 28}
      fill="#38bdf8"
    />
    <text x="62" y="156" text-anchor="middle" font-size="10" fill="#0369a1">{saliva} giọt</text>

    <!-- conditioned stimulus -->
    {#if sig === 'chuong'}
      <path
        d="M22 40 Q22 18 36 18 Q50 18 50 40 L54 46 L18 46 Z"
        fill={showSignal ? '#facc15' : '#e2e8f0'}
        stroke="#a16207"
      />
      <circle cx="36" cy="50" r="3" fill="#a16207" />
      {#if showSignal}
        <path
          d="M58 26 Q64 32 58 38 M64 20 Q74 32 64 44"
          fill="none"
          stroke="#a16207"
          stroke-width="2"
        />
      {/if}
    {:else}
      <circle cx="36" cy="32" r="14" fill={showSignal ? '#fde047' : '#e2e8f0'} stroke="#a16207" />
      <rect x="31" y="46" width="10" height="8" fill="#94a3b8" />
      {#if showSignal}
        {#each [0, 60, 120, 180, 240, 300] as a (a)}
          <line
            x1={36 + 18 * Math.cos((a * Math.PI) / 180)}
            y1={32 + 18 * Math.sin((a * Math.PI) / 180)}
            x2={36 + 25 * Math.cos((a * Math.PI) / 180)}
            y2={32 + 25 * Math.sin((a * Math.PI) / 180)}
            stroke="#eab308"
            stroke-width="2"
          />
        {/each}
      {/if}
    {/if}
    <!-- food bowl -->
    <path
      d="M85 128 L125 128 L119 142 L91 142 Z"
      fill={showFood ? '#f97316' : '#e2e8f0'}
      stroke="#9a3412"
    />
    {#if showFood}
      <circle cx="99" cy="126" r="4" fill="#92400e" />
      <circle cx="109" cy="125" r="4" fill="#92400e" />
    {/if}

    <!-- learning curve -->
    <line x1="40" y1="232" x2="320" y2="232" stroke="#94a3b8" />
    <line x1="40" y1="178" x2="40" y2="232" stroke="#94a3b8" />
    <line
      x1="40"
      y1={cy(FULL_DROPS * FIRM)}
      x2="320"
      y2={cy(FULL_DROPS * FIRM)}
      stroke="#16a34a"
      stroke-dasharray="4 3"
    />
    <polyline points={curve} fill="none" stroke="#4f46e5" stroke-width="2" />
    <text x="44" y="174" font-size="9" fill="#334155">giọt khi chỉ {s.verb}</text>
    <text x="320" y="245" text-anchor="end" font-size="9" fill="#334155">lần thử gần đây →</text>
  </svg>

  <div class="grid gap-2 sm:grid-cols-2">
    <button type="button" class={button.primary} onclick={() => run('cap')}>
      {s.verb[0].toUpperCase() + s.verb.slice(1)} rồi cho ăn
    </button>
    <button type="button" class={button.secondary} onclick={() => run('cap', 5)}>
      Ghép 5 lần liền
    </button>
    <button type="button" class={button.quiet} onclick={() => run('chi-tin-hieu')}>
      Chỉ {s.verb}
    </button>
    <button type="button" class={button.quiet} onclick={() => run('chi-an')}>Chỉ cho ăn</button>
    <button type="button" class={button.quiet} onclick={() => run('nguoc')}>
      Cho ăn rồi mới {s.verb}
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  <p class="text-sm tabular-nums" aria-live="polite">
    Số lần ghép: {pairs}. Nếu chỉ {s.verb} lúc này, chó tiết khoảng {drops(strength)} giọt nước bọt (mức
    liên hệ {formatNumber(strength * 100, 0)}%). Phản xạ có điều kiện: {st === 'vung'
      ? 'đã vững'
      : st === 'dang'
        ? 'đang hình thành'
        : 'chưa có'}.
  </p>
  <FeedbackNote tone={note.tone} text={note.text} />
</div>

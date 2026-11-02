<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { CYCLE_STEPS, NO_FIT, nextStep, turnFinished } from './engine.js';

  let substrate = $state('tinh-bot');
  let step = $state(0);
  let turns = $state(0);
  let tried = $state(false);

  const fits = $derived(substrate === 'tinh-bot');
  const note = $derived(
    !fits && tried
      ? /** @type {const} */ ({ tone: 'warn', text: NO_FIT })
      : /** @type {const} */ ({ tone: step === 3 ? 'ok' : 'info', text: CYCLE_STEPS[step] }),
  );

  /** Vertical lift of the substrate above the active site, by step. */
  const lift = $derived(step === 0 ? 46 : step === 3 ? 54 : 0);
  const spread = $derived(step === 2 ? 4 : step === 3 ? 34 : 0);

  function advance() {
    if (!fits) {
      tried = true;
      return;
    }
    step = nextStep(step);
    if (turnFinished(step)) turns += 1;
  }

  /** @param {string | number} _value */
  function restart(_value) {
    step = 0;
    tried = false;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Đưa cơ chất nào đến amylase?"
    bind:value={substrate}
    onchange={restart}
    options={[
      { value: 'tinh-bot', label: 'Tinh bột' },
      { value: 'protein', label: 'Protein' },
    ]}
  />

  <svg
    viewBox="0 0 280 180"
    class="mx-auto block w-full max-w-md rounded-xl bg-sky-50"
    role="img"
    aria-label="Enzyme amylase với trung tâm hoạt động ở phía trên. {fits
      ? `Tinh bột, ${CYCLE_STEPS[step]}`
      : 'Protein không khớp với trung tâm hoạt động.'}"
  >
    <path
      d="M 30 130 Q 30 76 90 76 L 115 76 L 125 101 L 155 101 L 165 76 L 190 76 Q 250 76 250 130 Q 250 172 140 172 Q 30 172 30 130 Z"
      fill="#c7d2fe"
      stroke="#4338ca"
      stroke-width="2.5"
    />
    <text x="140" y="142" text-anchor="middle" font-size="13" font-weight="600" fill="#312e81"
      >Enzyme amylase</text
    >
    {#if fits}
      <g
        fill={step >= 2 ? '#86efac' : '#fde68a'}
        stroke={step >= 2 ? '#15803d' : '#b45309'}
        stroke-width="2"
      >
        <path
          d="M {115 - spread} {76 - lift} L {140 - spread} {76 - lift} L {140 - spread} {101 -
            lift} L {125 - spread} {101 - lift} Z"
        />
        <path
          d="M {140 + spread} {76 - lift} L {165 + spread} {76 - lift} L {155 + spread} {101 -
            lift} L {140 + spread} {101 - lift} Z"
        />
      </g>
      <text
        x="140"
        y={step === 3 ? 12 : Math.max(12, 66 - lift)}
        text-anchor="middle"
        font-size="11"
        fill="#334155"
      >
        {step >= 2 ? 'Sản phẩm: maltose' : 'Cơ chất: tinh bột'}
      </text>
    {:else}
      <path d="M 140 14 L 170 62 L 110 62 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="2" />
      <text x="140" y="50" text-anchor="middle" font-size="10" fill="#7f1d1d">Protein</text>
    {/if}
  </svg>

  <div class="flex flex-wrap items-center gap-2">
    <button type="button" class={button.primary} onclick={advance}>
      {!fits ? 'Thử gắn vào enzyme' : step === 3 ? 'Bắt đầu lượt mới' : 'Giai đoạn tiếp theo'}
    </button>
    <span class="text-sm text-slate-700">Số lượt enzyme đã xúc tác: {turns}</span>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

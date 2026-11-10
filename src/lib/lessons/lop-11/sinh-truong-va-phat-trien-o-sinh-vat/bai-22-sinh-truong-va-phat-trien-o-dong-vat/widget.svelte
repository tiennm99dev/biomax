<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { onDestroy } from 'svelte';
  import { CYCLES, NYMPH_MOULTS, compare, instar, stageIndex, stageProgress } from './engine.js';

  /** Progress through both cycles, in percent. */
  let pct = $state(0);
  let playing = $state(false);
  /** @type {(() => void) | null} */
  let stop = null;

  const p = $derived(pct / 100);
  const bi = $derived(stageIndex('buom', p));
  const bp = $derived(stageProgress('buom', p));
  const ci = $derived(stageIndex('chau-chau', p));
  const n = $derived(instar(p));
  const note = $derived(compare(p));

  /** Every point where either insect changes stage or moults. */
  const BREAKS = [
    ...CYCLES.buom.stages.map((s) => s.from),
    ...CYCLES['chau-chau'].stages.map((s) => s.from),
    ...Array.from({ length: NYMPH_MOULTS - 1 }, (_, k) => 0.3 + (0.6 * (k + 1)) / NYMPH_MOULTS),
  ]
    .map((x) => Math.round(x * 100))
    .sort((a, b) => a - b);

  function halt() {
    stop?.();
    stop = null;
    playing = false;
  }

  function play() {
    if (playing) {
      halt();
      return;
    }
    if (pct >= 100) pct = 0;
    if (reducedMotion()) {
      next();
      return;
    }
    playing = true;
    stop = frameLoop((dt) => {
      pct = Math.min(100, pct + dt * 8);
      if (pct >= 100) halt();
    });
  }

  function next() {
    halt();
    pct = BREAKS.find((b) => b > pct) ?? 100;
  }

  onDestroy(halt);

  const caterpillar = $derived(0.55 + 0.6 * bp);
  const nymph = $derived(0.45 + 0.1 * n);
</script>

<div class="space-y-3">
  <div class="grid gap-2 sm:grid-cols-2">
    <figure class="rounded-xl bg-emerald-50 p-2">
      <figcaption class="text-sm font-semibold">
        Bướm ({CYCLES.buom.kind}): {CYCLES.buom.stages[bi].name}
      </figcaption>
      <svg
        viewBox="0 0 160 100"
        class="block w-full"
        role="img"
        aria-label="Bướm ở giai đoạn {CYCLES.buom.stages[bi].name.toLowerCase()}"
      >
        <path d="M 10 90 Q 80 60 150 90 Z" fill="#86efac" />
        {#if bi === 0}
          {#each [70, 80, 90] as x (x)}
            <ellipse cx={x} cy="74" rx="3" ry="4" fill="#fef08a" stroke="#a16207" />
          {/each}
        {:else if bi === 1}
          <g transform="translate(80 70) scale({caterpillar})">
            {#each [-30, -20, -10, 0, 10, 20] as x (x)}
              <circle cx={x} cy="0" r="7" fill="#65a30d" stroke="#365314" />
            {/each}
            <circle cx="32" cy="-3" r="8" fill="#4d7c0f" stroke="#365314" />
            <circle cx="35" cy="-5" r="1.5" fill="#000" />
          </g>
        {:else if bi === 2}
          <line x1="80" y1="8" x2="80" y2="22" stroke="#78350f" />
          <path
            d="M 80 22 C 92 30 92 60 80 70 C 68 60 68 30 80 22 Z"
            fill="#a3a35b"
            stroke="#57534e"
          />
        {:else}
          <g transform="translate(80 45)">
            <ellipse cx="-22" cy="-12" rx="22" ry="16" fill="#fb923c" stroke="#7c2d12" />
            <ellipse cx="22" cy="-12" rx="22" ry="16" fill="#fb923c" stroke="#7c2d12" />
            <ellipse cx="-16" cy="14" rx="14" ry="11" fill="#fdba74" stroke="#7c2d12" />
            <ellipse cx="16" cy="14" rx="14" ry="11" fill="#fdba74" stroke="#7c2d12" />
            <ellipse cx="0" cy="0" rx="3.5" ry="22" fill="#292524" />
          </g>
        {/if}
      </svg>
    </figure>

    <figure class="rounded-xl bg-amber-50 p-2">
      <figcaption class="text-sm font-semibold">
        Châu chấu ({CYCLES['chau-chau'].kind}): {CYCLES['chau-chau'].stages[ci].name}{n > 0
          ? `, tuổi ${n}`
          : ''}
      </figcaption>
      <svg
        viewBox="0 0 160 100"
        class="block w-full"
        role="img"
        aria-label="Châu chấu ở giai đoạn {CYCLES['chau-chau'].stages[ci].name.toLowerCase()}{n > 0
          ? ` tuổi ${n}`
          : ''}"
      >
        <rect x="0" y="80" width="160" height="20" fill="#d6b88a" />
        {#if ci === 0}
          {#each [60, 68, 76, 84, 92] as x (x)}
            <ellipse cx={x} cy="90" rx="3" ry="6" fill="#fde68a" stroke="#92400e" />
          {/each}
        {:else}
          {@const s = ci === 1 ? nymph : 1}
          <g transform="translate(80 62) scale({s})">
            <line x1="-5" y1="2" x2="-24" y2="-14" stroke="#3f6212" stroke-width="3" />
            <line x1="-24" y1="-14" x2="-36" y2="16" stroke="#3f6212" stroke-width="2.5" />
            <line x1="14" y1="6" x2="20" y2="18" stroke="#3f6212" stroke-width="2" />
            <line x1="6" y1="6" x2="6" y2="18" stroke="#3f6212" stroke-width="2" />
            <ellipse cx="0" cy="0" rx="34" ry="8" fill="#84cc16" stroke="#3f6212" />
            <ellipse cx="38" cy="-3" rx="9" ry="8" fill="#65a30d" stroke="#3f6212" />
            <circle cx="41" cy="-6" r="1.8" fill="#000" />
            <line x1="44" y1="-9" x2="58" y2="-24" stroke="#3f6212" />
            {#if ci === 2}
              <ellipse
                cx="-4"
                cy="-8"
                rx="30"
                ry="5"
                fill="#a3e635"
                stroke="#3f6212"
                opacity="0.9"
              />
            {:else}
              <ellipse
                cx="14"
                cy="-7"
                rx={3 + 3 * n}
                ry="3"
                fill="#a3e635"
                stroke="#3f6212"
                opacity="0.9"
              />
            {/if}
          </g>
        {/if}
      </svg>
    </figure>
  </div>

  <SliderField
    label="Thời gian trong vòng đời"
    bind:value={pct}
    min={0}
    max={100}
    step={1}
    format={(v) => `${Math.round(v)}% vòng đời`}
    oninput={halt}
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={play}>
      {playing ? 'Tạm dừng' : 'Chạy hoạt hình'}
    </button>
    <button type="button" class={button.quiet} onclick={next} disabled={pct >= 100}>
      Mốc tiếp theo
    </button>
    <button
      type="button"
      class={button.quiet}
      onclick={() => {
        halt();
        pct = 0;
      }}>Từ đầu</button
    >
  </div>

  <div aria-live="polite">
    <FeedbackNote tone="info" text={note} />
  </div>
  <div class="grid gap-2 text-sm sm:grid-cols-2">
    <p class="rounded-lg bg-white px-3 py-2">{CYCLES.buom.stages[bi].what}</p>
    <p class="rounded-lg bg-white px-3 py-2">{CYCLES['chau-chau'].stages[ci].what}</p>
  </div>
</div>

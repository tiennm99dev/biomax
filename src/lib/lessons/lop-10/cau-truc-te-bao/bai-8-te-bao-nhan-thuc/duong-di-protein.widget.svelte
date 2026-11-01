<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { ROUTE, STATIONS, pressStation, stationOf } from './engine.js';

  const BOARD_WIDTH = 360;
  const BOARD_HEIGHT = 270;

  let step = $state(0);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Một tế bào cần tiết một protein ra ngoài. Thông tin để tạo protein này nằm ở đâu? Chạm vào trạm đầu tiên.',
  });

  const atStation = $derived(step === 0 ? null : stationOf(ROUTE[step - 1]));
  const done = $derived(step === ROUTE.length);
  const trail = $derived(ROUTE.slice(0, step).map(stationOf));

  /** @param {string} id */
  function press(id) {
    if (done) return;
    const result = pressStation(step, id);
    step = result.step;
    note = {
      tone: result.ok ? 'ok' : 'warn',
      text: result.done
        ? `${result.text} Protein đã đi qua đủ ${ROUTE.length} trạm của hệ thống nội màng.`
        : result.text,
    };
  }

  function restart() {
    step = 0;
    note = { tone: 'info', text: 'Bắt đầu lại: thông tin để tạo protein nằm ở đâu?' };
  }
</script>

<div class="space-y-3">
  <div class="relative mx-auto max-w-md">
    <svg
      viewBox="0 0 {BOARD_WIDTH} {BOARD_HEIGHT}"
      class="block w-full rounded-xl bg-slate-50"
      role="img"
      aria-label="Đường đi của protein đã qua {step} trên {ROUTE.length} trạm{atStation
        ? `, hiện ở ${atStation.name}`
        : ''}"
    >
      <rect
        x="24"
        y="6"
        width="330"
        height="258"
        rx="36"
        fill="#fdf2f8"
        stroke="#be185d"
        stroke-width="3"
      />
      {#each trail as s, i (s.id)}
        {#if i > 0}
          <line
            x1={trail[i - 1].x}
            y1={trail[i - 1].y}
            x2={s.x}
            y2={s.y}
            stroke="#059669"
            stroke-width="5"
            stroke-linecap="round"
          />
        {/if}
      {/each}
      {#if done}
        <line
          x1={trail[trail.length - 1].x}
          y1={trail[trail.length - 1].y}
          x2="6"
          y2={trail[trail.length - 1].y}
          stroke="#059669"
          stroke-width="5"
          stroke-linecap="round"
        />
      {/if}
    </svg>
    <div class="absolute inset-0">
      {#each STATIONS as s (s.id)}
        {@const passed = ROUTE.indexOf(s.id) < step && ROUTE.includes(s.id)}
        <button
          type="button"
          class="absolute flex min-h-11 w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border px-0.5 text-center text-xs leading-tight font-semibold {passed
            ? 'border-emerald-700 bg-emerald-100 text-emerald-950'
            : 'border-slate-400 bg-white text-slate-800 hover:bg-slate-100'} {focusRing}"
          style="left: {(s.x / BOARD_WIDTH) * 100}%; top: {(s.y / BOARD_HEIGHT) * 100}%"
          aria-pressed={passed}
          onclick={() => press(s.id)}>{s.name}</button
        >
      {/each}
    </div>
  </div>
  <FeedbackNote tone={note.tone} text={note.text} />
  {#if step > 0}
    <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
  {/if}
</div>

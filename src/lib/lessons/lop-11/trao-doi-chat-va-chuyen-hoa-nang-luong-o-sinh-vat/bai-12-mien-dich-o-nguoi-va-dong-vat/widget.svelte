<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { DEFENDERS, INVADERS, defend, tally } from './engine.js';

  let index = $state(0);
  /** @type {Array<string | null>} */
  let winners = $state(INVADERS.map(() => null));
  /** @type {boolean[]} */
  let firstTry = $state(INVADERS.map(() => true));
  /** @type {string[]} */
  let tried = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({ tone: 'info', text: 'Chọn lực lượng phòng thủ có thể chặn mầm bệnh này.' });

  const invader = $derived(INVADERS[index]);
  const won = $derived(winners[index]);
  const winner = $derived(DEFENDERS.find((d) => d.id === won));
  const score = $derived(firstTry.filter((f, i) => f && winners[i] !== null).length);
  const done = $derived(winners.every((w) => w !== null));
  const lines = $derived(tally(winners));

  /** @param {string} id */
  function pick(id) {
    if (won) return;
    const r = defend(invader, id);
    if (r.ok) {
      winners[index] = id;
    } else {
      firstTry[index] = false;
      tried = [...tried, id];
    }
    note = { tone: r.ok ? 'ok' : 'warn', text: r.text };
  }

  function next() {
    index = (index + 1) % INVADERS.length;
    tried = [];
    note = winners[index]
      ? { tone: 'info', text: 'Mầm bệnh này đã bị chặn. Bấm "Mầm bệnh tiếp theo".' }
      : { tone: 'info', text: 'Chọn lực lượng phòng thủ có thể chặn mầm bệnh này.' };
  }

  function restart() {
    index = 0;
    winners = INVADERS.map(() => null);
    firstTry = INVADERS.map(() => true);
    tried = [];
    note = { tone: 'info', text: 'Chọn lực lượng phòng thủ có thể chặn mầm bệnh này.' };
  }

  /** Where the invader is drawn: outside, or in the band of the line that stopped it. */
  const spot = $derived(
    !winner
      ? { x: 300, y: 30 }
      : winner.line === 'dac-hieu'
        ? { x: 170, y: 95 }
        : { x: 250, y: 60 },
  );

  /** @param {'khong-dac-hieu' | 'dac-hieu'} line */
  const group = (line) => DEFENDERS.filter((d) => d.line === line);
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 340 150"
    class="mx-auto block w-full max-w-lg"
    role="img"
    aria-label="Cơ thể với hai tuyến phòng thủ; mầm bệnh {invader.name.toLowerCase()} {winner
      ? `bị chặn bởi ${winner.name.toLowerCase()}`
      : 'đang tấn công'}"
  >
    <rect x="10" y="12" width="320" height="130" rx="40" fill="#fef3c7" stroke="#d97706" />
    <text x="24" y="32" font-size="11" fill="#92400e">Tuyến 1: không đặc hiệu (bẩm sinh)</text>
    <rect x="60" y="48" width="220" height="86" rx="30" fill="#dbeafe" stroke="#2563eb" />
    <text x="74" y="68" font-size="11" fill="#1e3a8a">Tuyến 2: đặc hiệu (thu được)</text>
    <text x="170" y="122" text-anchor="middle" font-size="10" fill="#1e3a8a"
      >tế bào B, kháng thể, tế bào T</text
    >
    <g transform="translate({spot.x} {spot.y})">
      {#each [0, 45, 90, 135, 180, 225, 270, 315] as a (a)}
        <line
          x1="0"
          y1="0"
          x2={14 * Math.cos((a * Math.PI) / 180)}
          y2={14 * Math.sin((a * Math.PI) / 180)}
          stroke="#b91c1c"
          stroke-width="2"
        />
      {/each}
      <circle r="9" fill={winner ? '#9ca3af' : '#ef4444'} stroke="#7f1d1d" />
      {#if winner}
        <path d="M -5 0 L -1 4 L 6 -5" stroke="#ffffff" stroke-width="2.5" fill="none" />
      {/if}
    </g>
  </svg>

  <div class="rounded-xl bg-slate-50 p-3">
    <p class="text-sm text-slate-600">Mầm bệnh {index + 1}/{INVADERS.length}</p>
    <p class="font-semibold">{invader.name}</p>
    <p class="text-sm">{invader.where}</p>
  </div>

  {#each [{ line: /** @type {const} */ ('khong-dac-hieu'), title: 'Miễn dịch không đặc hiệu' }, { line: /** @type {const} */ ('dac-hieu'), title: 'Miễn dịch đặc hiệu' }] as g (g.line)}
    <div role="group" aria-label={g.title}>
      <p class="mb-1 text-sm font-semibold text-slate-700">{g.title}</p>
      <div class="flex flex-wrap gap-2">
        {#each group(g.line) as d (d.id)}
          <button
            type="button"
            class="min-h-11 rounded-lg border px-3 py-2 text-sm {won === d.id
              ? 'border-emerald-500 bg-emerald-50 font-semibold'
              : tried.includes(d.id)
                ? 'border-amber-400 bg-amber-50 text-slate-500'
                : 'border-slate-300 bg-white'} {focusRing}"
            aria-pressed={won === d.id}
            onclick={() => pick(d.id)}
          >
            {d.name}
          </button>
        {/each}
      </div>
    </div>
  {/each}

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="flex flex-wrap items-center gap-2">
    <button type="button" class={button.primary} onclick={next}>Mầm bệnh tiếp theo</button>
    <button type="button" class={button.quiet} onclick={restart}>Chơi lại</button>
    <span class="text-sm tabular-nums" aria-live="polite">
      Đúng ngay lần đầu: {score}/{INVADERS.length}.
      {done
        ? `Hoàn thành! Tuyến không đặc hiệu chặn ${lines.khong}, tuyến đặc hiệu chặn ${lines.dac} mầm bệnh.`
        : ''}
    </span>
  </div>
</div>

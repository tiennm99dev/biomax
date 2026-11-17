<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { errorPercent, makePond, markFirst, recapture, scatter } from './engine.js';

  const W = 340;
  const H = 210;

  let seed = $state(1);
  const first = makePond(1);
  let pond = $state.raw(first);
  let spots = $state.raw(first.spots);
  let m = $state(50);
  let c = $state(50);
  let phase = $state(/** @type {'ready' | 'marked' | 'caught'} */ ('ready'));
  let marked = $state.raw(/** @type {Set<number>} */ (new Set()));
  let caught = $state.raw(/** @type {Set<number>} */ (new Set()));
  let recaught = $state(0);
  let reveal = $state(false);
  /** @type {Array<{ m: number, c: number, r: number, estimate: number | null }>} */
  let trials = $state([]);

  const valid = $derived(trials.filter((t) => t.estimate !== null));
  const mean = $derived(
    valid.length ? valid.reduce((s, t) => s + (t.estimate ?? 0), 0) / valid.length : null,
  );

  function markStep() {
    marked = markFirst(pond.rand, pond.size, m);
    caught = new Set();
    phase = 'marked';
  }

  function catchStep() {
    spots = scatter(pond.rand, pond.size);
    const res = recapture(pond.rand, pond.size, marked, c);
    caught = new Set(res.caught);
    recaught = res.r;
    trials = [...trials, { m: marked.size, c, r: res.r, estimate: res.estimate }];
    phase = 'caught';
  }

  function again() {
    marked = new Set();
    caught = new Set();
    phase = 'ready';
  }

  function newPond() {
    seed += 1;
    pond = makePond(seed);
    spots = pond.spots;
    trials = [];
    reveal = false;
    again();
  }

  /** @param {number} v */
  const whole = (v) => formatNumber(Math.round(v));

  const message = $derived.by(() => {
    if (phase === 'ready')
      return `Bước 1: bắt ngẫu nhiên $M = ${m}$ con cá, đánh dấu rồi thả lại vào hồ.`;
    if (phase === 'marked')
      return `Đã đánh dấu $M = ${marked.size}$ con (màu cam) và thả lại. Bước 2: chờ cá hoà nhập vào quần thể rồi bắt ngẫu nhiên $C = ${c}$ con.`;
    const last = trials[trials.length - 1];
    if (last.estimate === null)
      return `Lần bắt thứ hai có $C = ${last.c}$ con nhưng không con nào mang dấu ($R = 0$), không ước lượng được. Hãy tăng $M$ hoặc $C$ rồi làm lại.`;
    const est = `$N \\approx \\dfrac{M \\cdot C}{R} = \\dfrac{${last.m} \\cdot ${last.c}}{${last.r}} \\approx ${numTex(Math.round(last.estimate))}$ con`;
    const check = reveal
      ? ` Số thật là ${whole(pond.size)} con, sai lệch khoảng ${formatNumber(errorPercent(last.estimate, pond.size), 0)}%.`
      : '';
    return `Bắt được $C = ${last.c}$ con, trong đó $R = ${last.r}$ con có dấu: ${est}.${check}`;
  });

  /** @param {number} i */
  function fillOf(i) {
    if (phase === 'ready') return '#64748b';
    return marked.has(i) ? '#f97316' : '#64748b';
  }
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-xl"
    role="img"
    aria-label="Hồ cá: {phase === 'ready'
      ? 'chưa có con nào được đánh dấu'
      : `${marked.size} con đã đánh dấu`}{phase === 'caught'
      ? `, lần bắt thứ hai được ${caught.size} con, ${recaught} con có dấu`
      : ''}"
  >
    <rect
      x="0"
      y="0"
      width={W}
      height={H}
      rx="40"
      fill="#dbeafe"
      stroke="#60a5fa"
      stroke-width="3"
    />
    {#each spots as p, i (i)}
      <circle
        cx={8 + p.x * (W - 16)}
        cy={8 + p.y * (H - 16)}
        r="3.2"
        fill={fillOf(i)}
        stroke={phase === 'caught' && caught.has(i) ? '#0f172a' : 'none'}
        stroke-width="1.6"
      />
    {/each}
  </svg>
  <p class="text-center text-xs text-slate-600">
    Chấm cam: cá đã đánh dấu. Viền đen: cá bắt được ở lần thứ hai.
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Số cá bắt lần 1 (M)" bind:value={m} min={20} max={100} step={5} />
    <SliderField label="Số cá bắt lần 2 (C)" bind:value={c} min={20} max={100} step={5} />
  </div>

  <div class="flex flex-wrap gap-2">
    {#if phase === 'ready'}
      <button type="button" class={button.primary} onclick={markStep}>Bắt và đánh dấu</button>
    {:else if phase === 'marked'}
      <button type="button" class={button.primary} onclick={catchStep}
        >Thả lại, rồi bắt lần 2</button
      >
    {:else}
      <button type="button" class={button.primary} onclick={again}>Làm lại trên hồ này</button>
    {/if}
    <button type="button" class={button.secondary} onclick={() => (reveal = !reveal)}>
      {reveal ? 'Ẩn số lượng thật' : 'Xem số lượng thật'}
    </button>
    <button type="button" class={button.quiet} onclick={newPond}>Hồ mới</button>
  </div>

  <FeedbackNote tone={phase === 'caught' && recaught === 0 ? 'warn' : 'info'} text={message} />

  {#if trials.length}
    <div class="overflow-x-auto">
      <table class="w-full text-sm tabular-nums">
        <caption class="mb-1 text-left font-semibold">Các lần ước lượng trên hồ này</caption>
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-1 pr-2">Lần</th>
            <th class="py-1 pr-2">M</th>
            <th class="py-1 pr-2">C</th>
            <th class="py-1 pr-2">R</th>
            <th class="py-1">N ước lượng</th>
          </tr>
        </thead>
        <tbody>
          {#each trials as t, i (i)}
            <tr class="border-b border-slate-100">
              <td class="py-1 pr-2">{i + 1}</td>
              <td class="py-1 pr-2">{t.m}</td>
              <td class="py-1 pr-2">{t.c}</td>
              <td class="py-1 pr-2">{t.r}</td>
              <td class="py-1">{t.estimate === null ? 'không tính được' : whole(t.estimate)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <p class="text-sm" aria-live="polite">
      {#if mean !== null}
        Trung bình {valid.length} lần: N ≈ {whole(mean)} con{reveal
          ? `; số thật ${whole(pond.size)} con (sai lệch ${formatNumber(errorPercent(mean, pond.size), 0)}%)`
          : ''}.
      {/if}
    </p>
  {/if}
</div>

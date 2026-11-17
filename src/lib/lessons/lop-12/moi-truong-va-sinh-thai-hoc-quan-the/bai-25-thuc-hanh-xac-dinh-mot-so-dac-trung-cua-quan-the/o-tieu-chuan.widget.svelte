<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber, numTex } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { FIELD_AREA, FIELD_SIDE, makeField, quadratEstimate, sampleIndices } from './engine.js';

  const SIZE = 300;
  const PAD = 10;
  const CELL = (SIZE - 2 * PAD) / FIELD_SIDE;

  let seed = $state(11);
  let field = $state.raw(makeField(11));
  /** @type {number[]} */
  let chosen = $state([]);
  let reveal = $state(false);

  const est = $derived(quadratEstimate(field.counts, chosen));
  const total = $derived(field.plants.length);

  /** @param {number} k */
  function addRandom(k) {
    const free = field.counts.map((_, i) => i).filter((i) => !chosen.includes(i));
    const picks = sampleIndices(field.rand, free.length, k).map((j) => free[j]);
    chosen = [...chosen, ...picks];
  }

  function clear() {
    chosen = [];
  }

  function newField() {
    seed += 1;
    field = makeField(seed);
    chosen = [];
    reveal = false;
  }

  const message = $derived.by(() => {
    if (!est)
      return `Khu khảo sát rộng $A = ${FIELD_AREA}$ m², chia thành các ô $a = 1$ m². Bấm "Đặt 1 ô ngẫu nhiên" để chọn vị trí lấy mẫu.`;
    const line = `${chosen.length} ô, trung bình $\\bar{n} = ${numTex(est.mean, 2)}$ cây/ô: $N \\approx \\dfrac{A}{a} \\cdot \\bar{n} = ${FIELD_AREA} \\cdot ${numTex(est.mean, 2)} \\approx ${numTex(Math.round(est.size))}$ cây, mật độ khoảng ${formatNumber(est.density, 2)} cây/m².`;
    if (!reveal) return line;
    const err = (Math.abs(est.size - total) / total) * 100;
    return `${line} Số cây thật là ${formatNumber(total)}, sai lệch khoảng ${formatNumber(err, 0)}%.`;
  });
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 {SIZE} {SIZE}"
    class="mx-auto block w-full max-w-sm"
    role="img"
    aria-label="Khu khảo sát 10 m × 10 m với {chosen.length} ô mẫu đã đặt{reveal
      ? `, tổng số ${total} cây`
      : ''}"
  >
    <rect x="0" y="0" width={SIZE} height={SIZE} rx="10" fill="#ecfccb" />
    {#each Array.from({ length: FIELD_SIDE + 1 }, (_, i) => i) as i (i)}
      <line x1={PAD + i * CELL} y1={PAD} x2={PAD + i * CELL} y2={SIZE - PAD} stroke="#d9f99d" />
      <line x1={PAD} y1={PAD + i * CELL} x2={SIZE - PAD} y2={PAD + i * CELL} stroke="#d9f99d" />
    {/each}
    {#each field.plants as p, i (i)}
      <circle cx={PAD + p.x * CELL} cy={PAD + p.y * CELL} r="1.8" fill="#15803d" />
    {/each}
    {#each chosen as q (q)}
      <rect
        x={PAD + (q % FIELD_SIDE) * CELL}
        y={PAD + Math.floor(q / FIELD_SIDE) * CELL}
        width={CELL}
        height={CELL}
        fill="#fde68a"
        fill-opacity="0.45"
        stroke="#b45309"
        stroke-width="2"
      />
      <text
        x={PAD + (q % FIELD_SIDE) * CELL + CELL / 2}
        y={PAD + Math.floor(q / FIELD_SIDE) * CELL + CELL / 2 + 5}
        text-anchor="middle"
        font-size="14"
        font-weight="700"
        fill="#7c2d12">{field.counts[q]}</text
      >
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      onclick={() => addRandom(1)}
      disabled={chosen.length >= FIELD_AREA}>Đặt 1 ô ngẫu nhiên</button
    >
    <button
      type="button"
      class={button.secondary}
      onclick={() => addRandom(5)}
      disabled={chosen.length + 5 > FIELD_AREA}>Đặt thêm 5 ô</button
    >
    <button type="button" class={button.quiet} onclick={clear} disabled={!chosen.length}
      >Bỏ các ô</button
    >
    <button type="button" class={button.secondary} onclick={() => (reveal = !reveal)}>
      {reveal ? 'Ẩn số cây thật' : 'Đếm toàn bộ cây'}
    </button>
    <button type="button" class={button.quiet} onclick={newField}>Khu mới</button>
  </div>

  {#if chosen.length}
    <p class="text-sm">
      Số cây trong các ô: {chosen.map((q) => field.counts[q]).join('; ')}.
    </p>
  {/if}
  <FeedbackNote tone="info" text={message} />
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { bandAtRadius, checkMarks, describeBand, makeTrunk, toggleMark } from './engine.js';

  const C = 110;
  const NEEDLE = (-60 * Math.PI) / 180;
  const MARK = (200 * Math.PI) / 180;

  let seed = $state(1);
  /** Band under the needle: -1 is the pith, bands.length the bark. */
  let at = $state(0);
  /** @type {number[]} */
  let marked = $state([]);
  /** @type {{ tone: 'ok' | 'warn', text: string } | null} */
  let result = $state(null);

  const trunk = $derived(makeTrunk(seed));
  const n = $derived(trunk.bands.length);
  /** Radius in the middle of what the needle points at. */
  const midR = $derived(
    at < 0
      ? trunk.pith / 2
      : at >= n
        ? (trunk.bands[n - 1].r1 + trunk.bark) / 2
        : (trunk.bands[at].r0 + trunk.bands[at].r1) / 2,
  );
  const spot = $derived(describeBand(trunk, at));
  const isMarked = $derived(marked.includes(at));
  const reversed = $derived([...trunk.bands].reverse());

  /** @param {PointerEvent} e */
  function pick(e) {
    const svg = /** @type {SVGSVGElement} */ (e.currentTarget);
    const box = svg.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width) * 220 - C;
    const y = ((e.clientY - box.top) / box.height) * 220 - C;
    at = bandAtRadius(trunk, Math.hypot(x, y));
    result = null;
  }

  function mark() {
    marked = toggleMark(trunk, marked, at);
    result = null;
  }

  function fresh() {
    seed += 1;
    marked = [];
    at = 0;
    result = null;
  }
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 220 220"
    class="mx-auto block w-full max-w-sm touch-none"
    role="img"
    aria-label="Lát cắt ngang thân cây, {marked.length} dấu bút chì đã đánh. Kim đang chỉ vào {at <
    0
      ? 'lõi'
      : at >= n
        ? 'vỏ'
        : `dải thứ ${at + 1} tính từ lõi`}."
    onpointerdown={pick}
  >
    <circle cx={C} cy={C} r={trunk.bark} fill="#78350f" />
    {#each reversed as b (`${b.year}-${b.kind}`)}
      <circle cx={C} cy={C} r={b.r1} fill={b.kind === 'muon' ? '#92400e' : '#fcd9a5'} />
    {/each}
    <circle cx={C} cy={C} r={trunk.pith} fill="#451a03" />
    <line
      x1={C}
      y1={C}
      x2={C + (trunk.bark + 4) * Math.cos(NEEDLE)}
      y2={C + (trunk.bark + 4) * Math.sin(NEEDLE)}
      stroke="#1d4ed8"
      stroke-width="1"
      aria-hidden="true"
    />
    <circle
      cx={C + midR * Math.cos(NEEDLE)}
      cy={C + midR * Math.sin(NEEDLE)}
      r="4"
      fill="none"
      stroke="#2563eb"
      stroke-width="2"
      aria-hidden="true"
    />
    {#each marked as i (i)}
      {@const b = trunk.bands[i]}
      {@const r = (b.r0 + b.r1) / 2}
      <circle
        cx={C + r * Math.cos(MARK)}
        cy={C + r * Math.sin(MARK)}
        r="2.2"
        fill="#0f172a"
        stroke="#ffffff"
        stroke-width="0.6"
      />
    {/each}
  </svg>
  <p class="text-center text-xs text-slate-600">
    Chạm vào lát cắt để đặt kim (vòng xanh), hoặc dùng thanh trượt. Dấu chấm đen là dấu bút chì.
  </p>

  <SliderField
    label="Vị trí kim, từ lõi ra vỏ"
    bind:value={at}
    min={-1}
    max={n}
    step={1}
    format={(v) => (v < 0 ? 'lõi' : v >= n ? 'vỏ' : `dải ${v + 1}`)}
    oninput={() => (result = null)}
  />
  <div aria-live="polite">
    <FeedbackNote tone="info" text={spot} />
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={mark} disabled={at < 0 || at >= n}>
      {isMarked ? 'Bỏ dấu ở dải này' : 'Đánh dấu dải này'}
    </button>
    <button
      type="button"
      class={button.secondary}
      onclick={() => (result = checkMarks(trunk, marked))}
    >
      Kiểm tra tuổi cây
    </button>
    <button
      type="button"
      class={button.quiet}
      onclick={() => {
        marked = [];
        result = null;
      }}>Xoá dấu</button
    >
    <button type="button" class={button.quiet} onclick={fresh}>Lát cắt khác</button>
  </div>
  <p class="text-sm text-slate-700">Số dấu đã đánh: {marked.length}</p>
  <div aria-live="polite">
    {#if result}
      <FeedbackNote tone={result.tone} text={result.text} />
    {/if}
  </div>
</div>

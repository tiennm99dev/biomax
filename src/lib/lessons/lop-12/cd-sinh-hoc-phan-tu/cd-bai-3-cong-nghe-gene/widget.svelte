<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import {
    ENZYME_NAME,
    START,
    TARGET,
    TEMPS,
    copies,
    copiesText,
    hold,
    spanOf,
    strandsAfter,
    targetCopies,
  } from './engine.js';

  /** The most cycles drawn strand by strand; more are only counted. */
  const DRAWN = 3;

  /** @type {'taq' | 'thuong'} */
  let enzyme = $state('taq');
  let cycler = $state(START);
  let temp = $state(25);
  let note = $state({
    tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
    text: 'Ống PCR có DNA khuôn, hai loại mồi, các nucleotide tự do và DNA polymerase. Chọn nhiệt độ cho bước đầu tiên.',
  });
  let cycles = $state(30);

  const pairs = $derived(strandsAfter(Math.min(cycler.cycle, DRAWN)));
  const separated = $derived(cycler.stage !== 'kep');

  /** @param {number} t */
  function setTemp(t) {
    temp = t;
    const step = hold(cycler, t, enzyme);
    cycler = step.cycler;
    note = { tone: step.tone, text: step.text };
  }

  /** @param {string | number} v */
  function setEnzyme(v) {
    enzyme = /** @type {'taq' | 'thuong'} */ (v);
    restart();
  }

  function restart() {
    cycler = START;
    temp = 25;
    note = {
      tone: 'info',
      text: `Ống mới, dùng ${ENZYME_NAME[enzyme]}. Chọn nhiệt độ cho bước đầu tiên.`,
    };
  }

  /** Left and right edge of the drawn DNA, in SVG units. */
  const X0 = 20;
  const X1 = 300;
  /** @param {number} share */
  const xAt = (share) => X0 + share * (X1 - X0);

  /** @param {'goc' | 'dai' | 'ngan'} kind */
  function colorOf(kind) {
    if (kind === 'goc') return '#334155';
    if (kind === 'dai') return '#2563eb';
    return '#16a34a';
  }

  const rowHeight = $derived(separated ? 30 : 18);
  const height = $derived(pairs.length * rowHeight + 24);

  const stateText = $derived.by(() => {
    const kinds = pairs.flat();
    const count = (/** @type {string} */ k) => kinds.filter((s) => s.kind === k).length;
    const form = separated ? 'mạch đơn tách rời' : 'phân tử mạch kép';
    const primers = cycler.stage === 'moi' ? ', mỗi mạch có một mồi bám ở đầu đoạn cần nhân' : '';
    return `Chu kì ${cycler.cycle}: ${pairs.length} ${form}${primers}. Mạch gốc: ${count('goc')}, mạch dài: ${count('dai')}, mạch đúng chiều dài: ${count('ngan')}.`;
  });
</script>

<div class="space-y-3">
  <SegmentedControl
    label="DNA polymerase"
    options={[
      { value: 'taq', label: 'Taq polymerase' },
      { value: 'thuong', label: 'Polymerase của người' },
    ]}
    value={enzyme}
    onchange={setEnzyme}
  />

  <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Đặt nhiệt độ máy PCR">
    {#each TEMPS as t (t.value)}
      <button
        type="button"
        aria-pressed={temp === t.value}
        class="{temp === t.value ? button.primary : button.quiet} tabular-nums"
        onclick={() => setTemp(t.value)}
      >
        {t.value} °C
      </button>
    {/each}
    <span class="ml-auto text-sm text-slate-700">
      Máy đang ở <strong class="tabular-nums">{temp} °C</strong>, chu kì
      <strong class="tabular-nums">{cycler.cycle}</strong>
    </span>
  </div>

  {#if cycler.cycle <= DRAWN}
    <svg
      viewBox="0 0 320 {height}"
      class="block w-full rounded-xl bg-slate-50"
      role="img"
      aria-label={stateText}
    >
      <rect
        x={xAt(TARGET.from)}
        y="4"
        width={xAt(TARGET.to) - xAt(TARGET.from)}
        height={height - 8}
        fill="#fef9c3"
      />
      {#each pairs as [top, bottom], i (i)}
        {@const y = 14 + i * rowHeight}
        {@const gap = separated ? 12 : 5}
        {@const [t0, t1] = spanOf(top)}
        {@const [b0, b1] = spanOf(bottom)}
        <line
          x1={xAt(t0)}
          x2={xAt(t1)}
          y1={y}
          y2={y}
          stroke={colorOf(top.kind)}
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1={xAt(b0)}
          x2={xAt(b1)}
          y1={y + gap}
          y2={y + gap}
          stroke={colorOf(bottom.kind)}
          stroke-width="4"
          stroke-linecap="round"
        />
        {#if !separated}
          {#each Array.from({ length: 12 }, (_, k) => k) as k (k)}
            {@const x =
              xAt(Math.max(t0, b0)) +
              ((xAt(Math.min(t1, b1)) - xAt(Math.max(t0, b0))) * (k + 0.5)) / 12}
            <line x1={x} x2={x} y1={y + 1} y2={y + gap - 1} stroke="#94a3b8" stroke-width="1" />
          {/each}
        {/if}
        {#if cycler.stage === 'moi'}
          <!-- the reverse primer on the T strand, the forward primer on the B strand -->
          <line
            x1={xAt(TARGET.to) - 22}
            x2={xAt(TARGET.to)}
            y1={y + 3}
            y2={y + 3}
            stroke="#dc2626"
            stroke-width="4"
          />
          <line
            x1={xAt(TARGET.from)}
            x2={xAt(TARGET.from) + 22}
            y1={y + gap - 3}
            y2={y + gap - 3}
            stroke="#dc2626"
            stroke-width="4"
          />
        {/if}
      {/each}
    </svg>
    <p class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600" aria-hidden="true">
      <span><span class="font-bold text-slate-700">━</span> mạch gốc</span>
      <span><span class="font-bold text-blue-600">━</span> mạch dài</span>
      <span><span class="font-bold text-green-600">━</span> mạch đúng chiều dài</span>
      <span><span class="font-bold text-red-600">━</span> mồi</span>
      <span><span class="bg-yellow-100 px-1">nền vàng</span> đoạn cần nhân</span>
    </p>
  {:else}
    <p class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800" aria-live="polite">
      Đã có {fmt(copies(cycler.cycle))} phân tử, quá nhiều để vẽ từng mạch. Trong đó
      {fmt(targetCopies(cycler.cycle))} phân tử có đúng chiều dài đoạn cần nhân.
    </p>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
  <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>

  <div class="space-y-2 rounded-xl border border-slate-200 p-3">
    <SliderField label="Số chu kì PCR" min={0} max={35} bind:value={cycles} />
    <p class="text-sm text-slate-800" aria-live="polite">
      <LiveRichText text={copiesText(cycles)} />
    </p>
    <p class="text-xs text-slate-600">
      Tính cho 1 phân tử khuôn ban đầu và mọi chu kì đều nhân đôi. Thực tế sau khoảng 30 chu kì, mồi
      và nucleotide cạn dần nên số bản sao tăng chậm lại.
    </p>
  </div>
</div>

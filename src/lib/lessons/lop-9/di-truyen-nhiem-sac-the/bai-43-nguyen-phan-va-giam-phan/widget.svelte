<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import {
    FORM_LABEL,
    STAGES,
    VIEW,
    assortmentKinds,
    checkPrediction,
    countsText,
    gameteCode,
    gametes,
    homologues,
    layout,
  } from './engine.js';

  let process = $state(/** @type {import('./engine.js').Process} */ ('nguyen-phan'));
  let n = $state(2);
  let stage = $state(0);
  let predict = $state(false);
  let crossover = $state(false);
  /** @type {boolean[]} */
  let flips = $state([false, false, false]);
  let guessCount = $state('');
  /** @type {import('./engine.js').Form} */
  let guessForm = $state('kep');
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let note = $state(null);

  const stages = $derived(STAGES[process]);
  const current = $derived(stages[stage]);
  const view = $derived(layout(process, stage, { n, flips, crossover }));
  const last = $derived(stage === stages.length - 1);
  const meiosis = $derived(process === 'giam-phan');
  const gameteCodes = $derived(
    meiosis ? gametes(homologues(n, crossover), flips).map(gameteCode) : [],
  );
  const distinct = $derived(new Set(gameteCodes).size);

  const COLORS = { bo: '#0284c7', me: '#e11d48' };

  /** @param {string | number} v */
  function chooseProcess(v) {
    process = v === 'giam-phan' ? 'giam-phan' : 'nguyen-phan';
    reset();
  }

  /** @param {string | number} v */
  function chooseN(v) {
    n = Number(v) === 3 ? 3 : 2;
    reset();
  }

  /** @param {string} s */
  const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

  function reset() {
    stage = 0;
    flips = [false, false, false];
    note = null;
    guessCount = '';
  }

  function forward() {
    if (last) return;
    if (predict) {
      const value = Number(guessCount.trim());
      if (!guessCount.trim() || !Number.isInteger(value)) {
        note = {
          tone: 'warn',
          text: 'Nhập số NST trong mỗi tế bào ở kì tiếp theo trước khi đi tiếp.',
        };
        return;
      }
      const r = checkPrediction(process, stage + 1, n, value, guessForm);
      if (!r.ok) {
        note = {
          tone: 'warn',
          text: !r.countOk
            ? 'Chưa đúng số NST. Nhớ lại: NST kép tách ở tâm động thì số NST trong tế bào tăng gấp đôi; tế bào phân chia thì mỗi tế bào con nhận một phần.'
            : 'Đúng số NST nhưng sai trạng thái. NST kép chỉ thành NST đơn khi tách nhau ở tâm động.',
        };
        return;
      }
      note = { tone: 'ok', text: 'Dự đoán đúng!' };
      guessCount = '';
    } else {
      note = null;
    }
    stage += 1;
  }

  function back() {
    if (stage > 0) stage -= 1;
    note = null;
  }

  function flipPairs() {
    // Step through every way the pairs can line up, like a binary counter.
    const next = [...flips];
    for (let p = 0; p < n; p++) {
      next[p] = !next[p];
      if (next[p]) break;
    }
    flips = next;
    note = {
      tone: 'info',
      text: `Đã đổi cách xếp các cặp NST tương đồng. Với $n = ${n}$ cặp, có $2^${n} = ${assortmentKinds(n)}$ cách tổ hợp NST trong giao tử.`,
    };
  }

  /**
   * Spindle drawn as a lens of fibres between the two poles.
   * @param {{ x1: number, x2: number, y: number }} s
   */
  function fibres(s) {
    const mid = (s.x1 + s.x2) / 2;
    return [-0.55, -0.25, 0.25, 0.55].map(
      (k) => `M ${s.x1} ${s.y} Q ${mid} ${s.y + k * (s.x2 - s.x1)} ${s.x2} ${s.y}`,
    );
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-4">
    <SegmentedControl
      label="Quá trình"
      options={[
        { value: 'nguyen-phan', label: 'Nguyên phân' },
        { value: 'giam-phan', label: 'Giảm phân' },
      ]}
      value={process}
      onchange={chooseProcess}
    />
    <SegmentedControl
      label="Bộ NST của tế bào mẹ"
      options={[
        { value: 2, label: '2n = 4' },
        { value: 3, label: '2n = 6' },
      ]}
      value={n}
      onchange={chooseN}
    />
  </div>

  <div class="flex flex-wrap gap-x-5 text-sm">
    <label class="flex min-h-11 items-center gap-2">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={predict} />
      Dự đoán số NST trước mỗi kì
    </label>
    {#if meiosis}
      <label class="flex min-h-11 items-center gap-2">
        <input
          type="checkbox"
          class="h-5 w-5 {focusRing}"
          bind:checked={crossover}
          onchange={() => (note = null)}
        />
        Trao đổi chéo ở cặp NST thứ nhất
      </label>
    {/if}
  </div>

  <ol class="flex flex-wrap gap-1" aria-label="Các kì">
    {#each stages as s, i (s.id)}
      <li>
        <button
          type="button"
          class="min-h-11 rounded-lg px-2 text-xs font-semibold {i === stage
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} disabled:opacity-60 {focusRing}"
          aria-current={i === stage ? 'step' : undefined}
          disabled={predict && i > stage}
          onclick={() => {
            stage = i;
            note = null;
          }}>{s.name}</button
        >
      </li>
    {/each}
  </ol>

  <figure class="rounded-xl border border-slate-200 bg-white p-2">
    <svg
      viewBox="0 0 {VIEW.w} {VIEW.h}"
      class="h-auto w-full"
      role="img"
      aria-label="{current.name}: {countsText(process, stage, n)}"
    >
      {#each view.cells as c, i (i)}
        <ellipse
          cx={c.cx}
          cy={c.cy}
          rx={c.rx}
          ry={c.ry}
          fill="#f8fafc"
          stroke="#94a3b8"
          stroke-width="2"
        />
      {/each}
      {#each view.spindles as s, i (i)}
        {#each fibres(s) as d (d)}
          <path {d} fill="none" stroke="#cbd5e1" stroke-width="1" />
        {/each}
        <line
          x1={(s.x1 + s.x2) / 2}
          x2={(s.x1 + s.x2) / 2}
          y1={s.y - 82}
          y2={s.y + 82}
          stroke="#a5b4fc"
          stroke-dasharray="3 4"
        />
      {/each}
      {#each view.chromosomes as d, i (i)}
        {@const k = d.chromatids.length}
        {@const top = d.y - d.len / 2}
        {@const cut = d.y + d.len * 0.15}
        <g opacity={d.loose ? 0.6 : 1}>
          {#each d.chromatids as c, j (j)}
            {@const x = d.x + (k === 2 ? (j ? 2.8 : -2.8) : 0)}
            <line
              x1={x}
              x2={x}
              y1={top}
              y2={cut}
              stroke={COLORS[c.base]}
              stroke-width={d.loose ? 3.5 : 5}
              stroke-linecap="round"
            />
            <line
              x1={x}
              x2={x}
              y1={cut}
              y2={d.y + d.len / 2}
              stroke={COLORS[c.tip]}
              stroke-width={d.loose ? 3.5 : 5}
              stroke-linecap="round"
            />
          {/each}
          <circle cx={d.x} cy={d.y} r={k === 2 ? 3 : 2.2} fill="#1e293b" />
        </g>
      {/each}
    </svg>
    <figcaption class="flex flex-wrap gap-4 px-1 pt-1 text-xs text-slate-600">
      <span
        ><span class="inline-block h-2 w-4 rounded" style="background:{COLORS.bo}"></span> NST có nguồn
        gốc từ bố</span
      >
      <span
        ><span class="inline-block h-2 w-4 rounded" style="background:{COLORS.me}"></span> NST có nguồn
        gốc từ mẹ</span
      >
      <span>● tâm động</span>
    </figcaption>
  </figure>

  <div class="rounded-xl bg-slate-50 p-3 text-sm" aria-live="polite">
    <p class="font-semibold text-slate-900">{current.name} ({stage + 1}/{stages.length})</p>
    <p class="mt-1 text-slate-700"><LiveRichText text={current.text} /></p>
    <p class="mt-1 font-semibold text-indigo-800">{countsText(process, stage, n)}</p>
    {#if meiosis && last}
      <p class="mt-1 text-slate-700">
        Bốn giao tử có {distinct} tổ hợp NST khác nhau.
        {crossover
          ? 'Trao đổi chéo làm cả bốn giao tử khác nhau.'
          : 'Bấm "Đổi cách xếp" ở kì giữa I hoặc bật trao đổi chéo để được giao tử khác.'}
      </p>
    {/if}
  </div>

  {#if meiosis && current.id === 'giua-1'}
    <button type="button" class={button.secondary} onclick={flipPairs}>
      Đổi cách xếp các cặp NST tương đồng
    </button>
  {/if}

  {#if predict && !last}
    <fieldset class="space-y-2 rounded-xl border border-indigo-200 p-3">
      <legend class="px-1 text-sm font-semibold text-indigo-800">
        Dự đoán: ở {lowerFirst(stages[stage + 1].name)}, mỗi tế bào có
      </legend>
      <div class="flex flex-wrap items-end gap-3">
        <label class="w-32 text-sm">
          Số NST
          <input
            class={textInput}
            inputmode="numeric"
            bind:value={guessCount}
            aria-label="Số NST trong mỗi tế bào"
          />
        </label>
        <SegmentedControl
          label="Trạng thái NST"
          options={[
            { value: 'don', label: FORM_LABEL.don },
            { value: 'kep', label: FORM_LABEL.kep },
          ]}
          bind:value={guessForm}
        />
      </div>
    </fieldset>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} disabled={stage === 0} onclick={back}
      >← Quay lại</button
    >
    <button type="button" class={button.primary} disabled={last} onclick={forward}>
      {predict ? 'Kiểm tra và đi tiếp' : 'Kì tiếp theo'} →
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Bắt đầu lại</button>
  </div>

  {#if note}
    <FeedbackNote tone={note.tone} text={note.text} />
  {/if}
</div>

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { ORGANISMS, QUESTIONS, answerFeedback, flowsOf } from './engine.js';

  let chosen = $state(/** @type {import('./engine.js').Organism} */ ('nguoi'));
  let mode = $state(/** @type {'learn' | 'quiz'} */ ('learn'));
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {string[]} */
  let seen = $state([]);
  let qIndex = $state(0);
  let score = $state(0);
  let answered = $state(false);
  let missed = $state(false);
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);

  const question = $derived(mode === 'quiz' ? (QUESTIONS[qIndex] ?? null) : null);
  const organism = $derived(question ? question.organism : chosen);
  const data = $derived(ORGANISMS[organism]);
  const current = $derived(data.flows.find((f) => f.id === selected) ?? null);
  const allSeen = $derived(data.flows.every((f) => seen.includes(f.id)));
  const quizDone = $derived(qIndex >= QUESTIONS.length);

  /** @param {string} id */
  function tap(id) {
    if (mode === 'learn') {
      selected = id;
      if (!seen.includes(id)) seen = [...seen, id];
      return;
    }
    if (!question || answered) return;
    feedback = answerFeedback(question, id);
    selected = id;
    if (feedback.ok) {
      if (!missed) score += 1;
      answered = true;
    } else missed = true;
  }

  function next() {
    qIndex += 1;
    answered = false;
    missed = false;
    feedback = null;
    selected = null;
  }

  function restart() {
    qIndex = 0;
    score = 0;
    answered = false;
    missed = false;
    feedback = null;
    selected = null;
  }

  /** @param {string | number} v */
  function switchMode(v) {
    selected = null;
    feedback = null;
    if (v === 'quiz') restart();
  }

  /** @param {import('./engine.js').Flow} f */
  const arrowClass = (f) =>
    `relative flex min-h-11 w-full items-center gap-1 rounded-lg border-2 px-2 py-1 text-left text-xs font-semibold sm:text-sm ${focusRing} ${
      selected === f.id
        ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
        : f.kind === 'nang-luong'
          ? 'border-amber-300 bg-amber-50 text-amber-900'
          : f.dir === 'vao'
            ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
            : 'border-sky-300 bg-sky-50 text-sky-900'
    }`;
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl
      label="Chế độ"
      options={[
        { value: 'learn', label: 'Tìm hiểu' },
        { value: 'quiz', label: 'Tìm mũi tên' },
      ]}
      bind:value={mode}
      onchange={switchMode}
    />
    {#if mode === 'learn'}
      <SegmentedControl
        label="Sinh vật"
        options={[
          { value: 'nguoi', label: 'Người' },
          { value: 'cay', label: 'Cây xanh' },
        ]}
        bind:value={chosen}
        onchange={() => (selected = null)}
      />
    {/if}
  </div>

  {#if question}
    <p class="rounded-xl bg-indigo-50 px-4 py-3 text-sm text-indigo-950">
      <strong>Câu {qIndex + 1}/{QUESTIONS.length} ({data.name}):</strong>
      {question.prompt} Bấm vào mũi tên đúng.
    </p>
  {/if}

  <div
    class="grid grid-cols-[1fr_5.5rem_1fr] items-center gap-2 sm:grid-cols-[1fr_8rem_1fr]"
    role="group"
    aria-label="Sơ đồ trao đổi chất của {data.name.toLowerCase()}"
  >
    <div class="space-y-2">
      <p class="text-center text-xs font-bold uppercase text-emerald-800">Lấy vào</p>
      {#each flowsOf(organism, 'vao') as f (f.id)}
        <button
          type="button"
          class={arrowClass(f)}
          aria-pressed={selected === f.id}
          aria-label="Đi vào: {f.label}"
          onclick={() => tap(f.id)}
        >
          <span class="flex-1">{f.label}</span>
          <span aria-hidden="true" class="text-base">→</span>
        </button>
      {/each}
    </div>

    <svg viewBox="0 0 100 160" class="block w-full" role="img" aria-label={data.name}>
      {#if organism === 'nguoi'}
        <circle cx="50" cy="26" r="16" fill="#fcd34d" stroke="#92400e" stroke-width="2" />
        <path
          d="M 30 48 h 40 q 8 0 8 8 v 46 h -10 v 52 h -12 v -46 h -12 v 46 h -12 v -52 h -10 v -46 q 0 -8 8 -8 z"
          fill="#93c5fd"
          stroke="#1e3a8a"
          stroke-width="2"
        />
        <text x="50" y="84" font-size="9" text-anchor="middle" fill="#1e3a8a">tế bào</text>
      {:else}
        <path d="M 50 150 V 60" stroke="#65a30d" stroke-width="6" />
        <ellipse cx="32" cy="58" rx="22" ry="11" fill="#4ade80" stroke="#166534" stroke-width="2" />
        <ellipse cx="68" cy="44" rx="22" ry="11" fill="#4ade80" stroke="#166534" stroke-width="2" />
        <ellipse cx="50" cy="24" rx="14" ry="18" fill="#22c55e" stroke="#166534" stroke-width="2" />
        <rect x="10" y="132" width="80" height="28" fill="#d6a76a" />
        <path
          d="M 50 132 l -14 18 M 50 132 l 12 20 M 50 136 l -2 22"
          stroke="#78350f"
          stroke-width="2"
          fill="none"
        />
        <text x="50" y="110" font-size="9" text-anchor="middle" fill="#14532d">thân</text>
      {/if}
    </svg>

    <div class="space-y-2">
      <p class="text-center text-xs font-bold uppercase text-sky-800">Thải ra</p>
      {#each flowsOf(organism, 'ra') as f (f.id)}
        <button
          type="button"
          class={arrowClass(f)}
          aria-pressed={selected === f.id}
          aria-label="Đi ra: {f.label}"
          onclick={() => tap(f.id)}
        >
          <span aria-hidden="true" class="text-base">→</span>
          <span class="flex-1">{f.label}</span>
        </button>
      {/each}
    </div>
  </div>

  <p class="text-xs text-slate-600">
    Xanh lá: chất lấy vào. Xanh dương: chất thải ra. Vàng: năng lượng.
  </p>

  <div class="min-h-20 rounded-xl px-4 py-3 text-sm" aria-live="polite">
    {#if mode === 'learn'}
      {#if current}
        <p class="text-slate-800">
          <strong>{current.label}</strong>
          ({current.dir === 'vao' ? 'lấy vào' : 'thải ra'} qua {current.via}). {current.info}
        </p>
      {:else}
        <p class="text-slate-600">
          Bấm vào từng mũi tên để xem chất hoặc năng lượng được trao đổi.
        </p>
      {/if}
      {#if allSeen}
        <p class="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-amber-950">
          <strong>Chuyển hoá năng lượng:</strong>
          {data.energy}
        </p>
      {:else}
        <p class="mt-2 text-xs text-slate-600">
          Đã xem {data.flows.filter((f) => seen.includes(f.id)).length}/{data.flows.length} mũi tên.
        </p>
      {/if}
    {:else if quizDone}
      <p class="font-semibold text-emerald-800">
        Hoàn thành: đúng ngay {score}/{QUESTIONS.length} câu.
      </p>
      <button type="button" class="{button.quiet} mt-2" onclick={restart}>Làm lại</button>
    {:else if feedback}
      <p class={feedback.ok ? 'text-emerald-800' : 'font-semibold text-amber-800'}>
        {feedback.text}
      </p>
      {#if answered}
        <button type="button" class="{button.primary} mt-2" onclick={next}>Câu tiếp</button>
      {/if}
    {/if}
  </div>
</div>

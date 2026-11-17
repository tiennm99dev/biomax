<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    LEAVES,
    VERDICTS,
    eggPlastids,
    leafLabel,
    offspring,
    tally,
    verdictOf,
  } from './engine.js';

  const uid = $props.id();

  /** @type {import('./engine.js').Model} */
  let model = $state('ngoai-nhan');
  /** @type {import('./engine.js').Leaf} */
  let plantA = $state('xanh');
  /** @type {import('./engine.js').Leaf} */
  let plantB = $state('kham');
  /** @type {import('./engine.js').Verdict | null} */
  let guess = $state(null);
  let shown = $state(false);
  let seed = $state(15);

  const leafOptions = $derived(
    LEAVES.filter((l) => model === 'ngoai-nhan' || l.id !== 'kham').map((l) => ({
      value: l.id,
      label: l.label,
    })),
  );

  const crosses = $derived(
    [
      { title: 'Lai thuận', mother: plantA, father: plantB, seed },
      { title: 'Lai nghịch', mother: plantB, father: plantA, seed: seed + 100 },
    ].map((c) => ({ ...c, plants: offspring(model, c.mother, c.father, c.seed) })),
  );

  const answer = $derived(verdictOf(model, plantA, plantB));

  /** @param {import('./engine.js').Leaf} leaf */
  const genotype = (leaf) => (leaf === 'xanh' ? 'AA' : 'aa');

  function reset() {
    guess = null;
    shown = false;
  }

  /** @param {string | number} v */
  function chooseModel(v) {
    model = /** @type {import('./engine.js').Model} */ (v);
    if (model === 'trong-nhan') {
      if (plantA === 'kham') plantA = plantB === 'xanh' ? 'trang' : 'xanh';
      if (plantB === 'kham') plantB = plantA === 'xanh' ? 'trang' : 'xanh';
    }
    reset();
  }

  function sow() {
    shown = true;
  }

  function sowAgain() {
    seed += 1;
  }

  /** @param {import('./engine.js').Leaf[]} plants */
  const tallyText = (plants) =>
    tally(plants)
      .map((t) => `${t.n} cây lá ${t.short}`)
      .join(', ');

  const note = $derived.by(() => {
    if (!answer)
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Chọn hai loại cành khác nhau để so sánh phép lai thuận và phép lai nghịch.',
      };
    if (!shown)
      return {
        tone: /** @type {const} */ ('info'),
        text: guess
          ? 'Bấm "Gieo hạt" để kiểm tra dự đoán.'
          : 'Dự đoán kết quả của cặp lai thuận nghịch, rồi bấm "Gieo hạt".',
      };
    const why =
      model === 'ngoai-nhan'
        ? 'Hạt phấn chỉ góp nhân, hợp tử nhận tế bào chất (lục lạp) từ noãn, nên màu lá đời con do cây mẹ quyết định: lai thuận và lai nghịch cho kết quả khác nhau.'
        : 'Gene trong nhân được bố và mẹ góp ngang nhau: $AA \\times aa$ hay $aa \\times AA$ đều cho $F_1$ toàn $Aa$ (lá xanh).';
    if (!guess) return { tone: /** @type {const} */ ('info'), text: why };
    if (guess === answer) return { tone: /** @type {const} */ ('ok'), text: `Đúng. ${why}` };
    return { tone: /** @type {const} */ ('warn'), text: `Chưa đúng. ${why}` };
  });

  /** @param {import('./engine.js').Leaf} leaf */
  const leafFill = (leaf) =>
    leaf === 'xanh' ? '#16a34a' : leaf === 'trang' ? '#f8fafc' : `url(#${uid}-kham)`;
</script>

<div class="space-y-4">
  <svg width="0" height="0" class="absolute" aria-hidden="true">
    <defs>
      <linearGradient id="{uid}-kham" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#16a34a" />
        <stop offset="0.35" stop-color="#16a34a" />
        <stop offset="0.35" stop-color="#f8fafc" />
        <stop offset="0.55" stop-color="#f8fafc" />
        <stop offset="0.55" stop-color="#16a34a" />
        <stop offset="0.8" stop-color="#16a34a" />
        <stop offset="0.8" stop-color="#f8fafc" />
      </linearGradient>
    </defs>
  </svg>

  <SegmentedControl
    label="Gene quy định màu lá nằm ở"
    options={[
      { value: 'ngoai-nhan', label: 'Lục lạp (ngoài nhân)' },
      { value: 'trong-nhan', label: 'Nhân (giả định để so sánh)' },
    ]}
    value={model}
    onchange={chooseModel}
  />

  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Hoa trên cành của cây A"
      options={leafOptions}
      bind:value={plantA}
      onchange={reset}
    />
    <SegmentedControl
      label="Hoa trên cành của cây B"
      options={leafOptions}
      bind:value={plantB}
      onchange={reset}
    />
  </div>

  {#if answer}
    <fieldset class="space-y-2">
      <legend class="text-sm font-semibold text-slate-700">
        Dự đoán: kết quả lai thuận (♀A × ♂B) và lai nghịch (♀B × ♂A)
      </legend>
      <div class="flex flex-wrap gap-2">
        {#each VERDICTS as v (v.id)}
          <button
            type="button"
            class="{guess === v.id ? button.primary : button.quiet} px-3 text-sm"
            aria-pressed={guess === v.id}
            disabled={shown}
            onclick={() => (guess = v.id)}>{v.label}</button
          >
        {/each}
      </div>
    </fieldset>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={sow} disabled={shown}>Gieo hạt</button>
    {#if shown && model === 'ngoai-nhan' && (plantA === 'kham' || plantB === 'kham')}
      <button type="button" class={button.secondary} onclick={sowAgain}>Gieo lứa hạt khác</button>
    {/if}
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    {#each crosses as c (c.title)}
      <section
        class="space-y-2 rounded-xl bg-slate-50 p-3"
        aria-label="{c.title}: ♀ cành lá {leafLabel(c.mother)} × ♂ cành lá {leafLabel(c.father)}"
      >
        <h4 class="text-sm font-semibold text-slate-800">
          {c.title}: ♀ lá {leafLabel(c.mother)} × ♂ lá {leafLabel(c.father)}
        </h4>
        {#if model === 'ngoai-nhan'}
          <svg
            viewBox="0 0 240 90"
            class="w-full"
            role="img"
            aria-label="Noãn chứa lục lạp {c.mother === 'kham'
              ? 'xanh và trắng'
              : leafLabel(c.mother)}; hạt phấn chỉ góp nhân, không góp lục lạp."
          >
            <circle cx="55" cy="45" r="38" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <circle cx="55" cy="45" r="11" fill="#c4b5fd" stroke="#7c3aed" />
            {#each eggPlastids(c.mother) as p, i (i)}
              {@const a = (i / 8) * 2 * Math.PI}
              <ellipse
                cx={55 + 25 * Math.cos(a)}
                cy={45 + 25 * Math.sin(a)}
                rx="6"
                ry="3.5"
                fill={p === 'g' ? '#16a34a' : '#f8fafc'}
                stroke="#64748b"
                stroke-width="0.8"
              />
            {/each}
            <text x="55" y="88" text-anchor="middle" font-size="10" fill="#334155">noãn (♀)</text>
            <text x="120" y="50" text-anchor="middle" font-size="18" fill="#334155">+</text>
            <circle cx="180" cy="45" r="16" fill="#fefce8" stroke="#ca8a04" stroke-width="2" />
            <circle cx="180" cy="45" r="7" fill="#c4b5fd" stroke="#7c3aed" />
            <text x="180" y="88" text-anchor="middle" font-size="10" fill="#334155"
              >hạt phấn (♂): chỉ nhân</text
            >
          </svg>
        {:else}
          <p class="text-sm text-slate-700">
            ♀ {genotype(c.mother)} × ♂ {genotype(c.father)} → F<sub>1</sub>:
            {genotype(c.mother) === genotype(c.father) ? genotype(c.mother) : 'Aa'}
          </p>
        {/if}
        {#if shown}
          <div class="grid grid-cols-6 gap-1" aria-hidden="true">
            {#each c.plants as leaf, i (i)}
              <svg viewBox="0 0 30 30" class="h-8 w-full">
                <path
                  d="M15 28 C4 20 4 8 15 2 C26 8 26 20 15 28 Z"
                  fill={leafFill(leaf)}
                  stroke="#475569"
                  stroke-width="1"
                />
                <path d="M15 28 L15 6" stroke="#475569" stroke-width="0.8" />
              </svg>
            {/each}
          </div>
          <p class="text-sm font-semibold text-slate-700">Đời con: {tallyText(c.plants)}.</p>
        {:else}
          <p class="text-sm text-slate-500">Chưa gieo hạt.</p>
        {/if}
      </section>
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

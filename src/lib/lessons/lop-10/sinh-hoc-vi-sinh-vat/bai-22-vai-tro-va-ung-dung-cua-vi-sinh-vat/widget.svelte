<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { FIELDS, buildQuiz } from './engine.js';

  const modeOptions = [
    { value: 'map', label: 'Xem bản đồ' },
    { value: 'quiz', label: 'Đố vui' },
  ];
  const fieldOptions = FIELDS.map((f) => ({ value: f.id, label: f.name }));

  let mode = $state('map');
  let fieldId = $state(FIELDS[0].id);
  let productId = $state(FIELDS[0].products[0].id);

  let seed = $state(1);
  let index = $state(0);
  let score = $state(0);
  /** @type {number | null} */
  let picked = $state(null);
  let firstTry = $state(true);

  const field = $derived(FIELDS.find((f) => f.id === fieldId) ?? FIELDS[0]);
  const product = $derived(field.products.find((p) => p.id === productId) ?? field.products[0]);
  const quiz = $derived(buildQuiz(seed));
  const question = $derived(quiz[index] ?? null);
  const solved = $derived(question !== null && picked === question.answer);
  const note = $derived.by(() => {
    if (question === null) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Xong: đúng ngay lần đầu ${score}/${quiz.length} ứng dụng. Mỗi ứng dụng dựa trên một khả năng riêng của vi sinh vật tạo ra nó.`,
      };
    }
    if (picked === null) {
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Ứng dụng này dựa vào vi sinh vật nào?',
      };
    }
    if (solved) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Đúng: ${question.product.microbe}. ${question.product.how}`,
      };
    }
    return {
      tone: /** @type {const} */ ('warn'),
      text: `Chưa đúng. Ứng dụng này thuộc lĩnh vực ${question.product.field.toLowerCase()}. Hãy nghĩ xem khả năng nào của vi sinh vật được dùng ở đây.`,
    };
  });

  function changeField() {
    productId = field.products[0].id;
  }

  /** @param {number} i */
  function answer(i) {
    if (solved || question === null) return;
    picked = i;
    if (i === question.answer) {
      if (firstTry) score += 1;
    } else {
      firstTry = false;
    }
  }

  function next() {
    index += 1;
    picked = null;
    firstTry = true;
  }

  function restart() {
    seed += 1;
    index = 0;
    score = 0;
    picked = null;
    firstTry = true;
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Chế độ" options={modeOptions} bind:value={mode} />

  {#if mode === 'map'}
    <SegmentedControl
      label="Lĩnh vực"
      options={fieldOptions}
      bind:value={fieldId}
      onchange={changeField}
    />
    <div
      class="grid gap-2 sm:grid-cols-3"
      role="group"
      aria-label="Sản phẩm của lĩnh vực {field.name}"
    >
      {#each field.products as p (p.id)}
        <button
          type="button"
          aria-pressed={product.id === p.id}
          class="min-h-14 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition {focusRing} {product.id ===
          p.id
            ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
          onclick={() => (productId = p.id)}
        >
          {p.name}
        </button>
      {/each}
    </div>
    <div class="rounded-2xl bg-slate-50 p-4 text-sm" aria-live="polite">
      <p class="font-semibold text-slate-800">{product.name}</p>
      <p class="mt-1 text-slate-700">Vi sinh vật: <strong>{product.microbe}</strong></p>
      <p class="mt-1 text-slate-700"><LiveRichText text={product.how} /></p>
    </div>
  {:else}
    {#if question}
      <p class="text-sm font-semibold text-slate-600">
        Câu {index + 1}/{quiz.length}, đúng ngay lần đầu: {score}
      </p>
      <p class="rounded-xl bg-indigo-50 px-4 py-3 text-base font-semibold text-indigo-900">
        {question.product.name}
      </p>
      <div class="grid gap-2 sm:grid-cols-2" role="group" aria-label="Chọn vi sinh vật">
        {#each question.options as option, i (option)}
          <button
            type="button"
            aria-pressed={picked === i}
            disabled={solved}
            class="min-h-12 rounded-xl border px-3 py-2 text-left text-sm font-medium transition disabled:cursor-default {focusRing} {picked ===
            i
              ? i === question.answer
                ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                : 'border-amber-500 bg-amber-50 text-amber-900'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            onclick={() => answer(i)}
          >
            {option}
          </button>
        {/each}
      </div>
    {/if}
    <FeedbackNote tone={note.tone} text={note.text} />
    {#if solved}
      <button type="button" class={button.primary} onclick={next}>Câu tiếp theo</button>
    {:else if question === null}
      <button type="button" class={button.secondary} onclick={restart}>Đố lại</button>
    {/if}
  {/if}
</div>

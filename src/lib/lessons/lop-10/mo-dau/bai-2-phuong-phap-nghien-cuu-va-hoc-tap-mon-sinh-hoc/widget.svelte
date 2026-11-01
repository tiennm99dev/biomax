<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import OrderInput from '#lib/core/order-input.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { LOOP_BACK, SCENARIOS, STEPS, orderResult, stepOfAction } from './engine.js';

  const items = STEPS.map((s) => s.name);
  const startOrder = shuffled(
    STEPS.map((_, i) => i),
    21,
  );

  let mode = $state(/** @type {'order' | 'apply'} */ ('order'));

  // Ordering the steps
  let order = $state([...startOrder]);
  let orderNote = $state(/** @type {{ tone: 'ok' | 'warn', text: string } | null} */ (null));
  const orderDone = $derived(orderNote?.tone === 'ok');

  /** @type {HTMLButtonElement | undefined} */
  let toApplyButton = $state();

  async function checkOrder() {
    const r = orderResult(order);
    if (r.ok) {
      orderNote = {
        tone: 'ok',
        text: 'Đúng trình tự. Bây giờ hãy áp dụng các bước này vào một tình huống nghiên cứu cụ thể.',
      };
      await tick();
      toApplyButton?.focus();
      return;
    }
    const expected = STEPS[r.firstWrong];
    orderNote = {
      tone: 'warn',
      text: `Có ${r.right} trên ${STEPS.length} bước đúng chỗ. Xem lại vị trí ${r.firstWrong + 1}: ${hint(expected.id)}`,
    };
  }

  /** @param {string} id */
  function hint(id) {
    const clue = /** @type {Record<string, string>} */ ({
      'quan-sat': 'mọi nghiên cứu bắt đầu từ những dữ liệu em nhìn thấy.',
      'cau-hoi': 'ngay sau khi có dữ liệu, em tự hỏi vì sao lại như vậy.',
      'gia-thuyet': 'trước khi làm thí nghiệm, em cần một câu trả lời dự kiến để kiểm chứng.',
      'thi-nghiem': 'giả thuyết chỉ được kiểm chứng khi có thí nghiệm với các lô để so sánh.',
      'phan-tich': 'số liệu của thí nghiệm cần được xử lí trước khi kết luận.',
      'ket-luan': 'bước này chỉ làm được khi đã có kết quả phân tích.',
    });
    return clue[id];
  }

  // Applying the steps to a situation
  let scenarioId = $state(SCENARIOS[0].id);
  let stepIndex = $state(0);
  let wrongText = $state('');
  let loopAnswered = $state(false);
  let loopNote = $state('');
  /** @type {HTMLDivElement | undefined} */
  let choicesBox = $state();
  /** @type {HTMLDivElement | undefined} */
  let loopBox = $state();
  /** @type {HTMLButtonElement | undefined} */
  let redoButton = $state();

  const scenario = $derived(SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0]);
  const actions = $derived(
    shuffled(
      STEPS.map((s) => scenario.actions[s.id]),
      37 + scenarioId.length,
    ),
  );
  const currentStep = $derived(STEPS[stepIndex] ?? null);
  const finished = $derived(stepIndex >= STEPS.length);

  function resetScenario() {
    stepIndex = 0;
    wrongText = '';
    loopAnswered = false;
    loopNote = '';
  }

  // A control that is about to vanish or lock must hand focus on, or a keyboard
  // user lands back at the top of the page.
  async function focusApplyStep() {
    await tick();
    if (finished && loopAnswered) redoButton?.focus();
    else
      (finished ? loopBox : choicesBox)
        ?.querySelector(/** @type {'button'} */ ('button:not(:disabled)'))
        ?.focus();
  }

  function goToApply() {
    mode = 'apply';
    focusApplyStep();
  }

  function redoScenario() {
    resetScenario();
    focusApplyStep();
  }

  /** @param {string} text */
  function pick(text) {
    const belongs = stepOfAction(scenario, text);
    if (belongs?.id === currentStep?.id) {
      stepIndex += 1;
      wrongText = '';
      focusApplyStep();
    } else if (belongs) {
      wrongText = `Việc này thuộc bước "${belongs.name}". Hãy tìm việc của bước "${currentStep?.name}".`;
    }
  }

  /** @param {string} id */
  function answerLoop(id) {
    if (id === LOOP_BACK) {
      loopAnswered = true;
      loopNote =
        'Đúng. Giả thuyết bị bác bỏ thì cần hình thành giả thuyết mới rồi kiểm chứng lại. Giả thuyết được kiểm nghiệm rộng rãi, được cộng đồng khoa học thừa nhận thì trở thành học thuyết khoa học.';
      focusApplyStep();
    } else {
      loopNote = 'Chưa đúng. Dữ liệu và câu hỏi vẫn còn đó; điều bị bác bỏ mới là thứ cần thay.';
    }
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hoạt động"
    options={[
      { value: 'order', label: 'Sắp xếp các bước' },
      { value: 'apply', label: 'Áp vào tình huống' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'order'}
    <p id="research-order-label" class="text-sm text-slate-700">
      Đưa các bước của tiến trình nghiên cứu khoa học về đúng trình tự bằng các nút mũi tên.
    </p>
    <OrderInput
      {items}
      bind:value={order}
      labelledby="research-order-label"
      disabled={orderDone}
      onchange={() => (orderNote = null)}
    />
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} disabled={orderDone} onclick={checkOrder}>
        Kiểm tra
      </button>
      <button
        type="button"
        class={button.quiet}
        onclick={() => {
          order = [...startOrder];
          orderNote = null;
        }}
      >
        Làm lại
      </button>
      {#if orderDone}
        <button
          type="button"
          class={button.secondary}
          bind:this={toApplyButton}
          onclick={goToApply}
        >
          Áp vào tình huống
        </button>
      {/if}
    </div>
    <FeedbackNote
      tone={orderNote?.tone ?? 'info'}
      text={orderNote?.text ?? 'Bấm "Kiểm tra" khi em đã sắp xếp xong.'}
    />
  {:else}
    <SegmentedControl
      label="Tình huống nghiên cứu"
      options={SCENARIOS.map((s) => ({ value: s.id, label: s.name }))}
      bind:value={scenarioId}
      onchange={resetScenario}
    />

    <ol class="space-y-1 text-sm" aria-label="Tiến trình đã hoàn thành">
      {#each STEPS as s, i (s.id)}
        <li
          class="rounded-lg border px-3 py-2 {i < stepIndex
            ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
            : i === stepIndex
              ? 'border-indigo-400 bg-indigo-50 text-indigo-950'
              : 'border-slate-200 text-slate-500'}"
        >
          <span class="font-semibold">{i + 1}. {s.name}</span>
          {#if i < stepIndex}
            <span class="block">{scenario.actions[s.id]}</span>
          {/if}
        </li>
      {/each}
    </ol>

    {#if !finished}
      <div class="space-y-2" bind:this={choicesBox}>
        <p class="text-sm font-semibold text-slate-800">
          Ở bước {stepIndex + 1}, nhà nghiên cứu làm việc nào?
        </p>
        {#each actions as a (a)}
          {@const done = STEPS.findIndex((s) => scenario.actions[s.id] === a) < stepIndex}
          <button
            type="button"
            class="block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm text-slate-800 hover:border-indigo-400 disabled:opacity-40 {focusRing}"
            disabled={done}
            onclick={() => pick(a)}
          >
            {a}
          </button>
        {/each}
      </div>
      <FeedbackNote
        tone={wrongText ? 'warn' : 'info'}
        text={wrongText || `Gợi ý cho bước này: ${currentStep?.note}`}
      />
    {:else}
      <div class="space-y-2 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
        <p class="text-sm font-semibold text-indigo-950">
          Giả sử kết quả lại bác bỏ giả thuyết. Nhà nghiên cứu cần quay lại bước nào?
        </p>
        <div
          class="flex flex-wrap gap-2"
          role="group"
          aria-label="Chọn bước cần quay lại"
          bind:this={loopBox}
        >
          {#each STEPS.slice(0, 4) as s, i (s.id)}
            <button
              type="button"
              class={button.quiet}
              disabled={loopAnswered}
              onclick={() => answerLoop(s.id)}
            >
              {i + 1}. {s.name}
            </button>
          {/each}
        </div>
      </div>
      <FeedbackNote
        tone={loopNote ? (loopAnswered ? 'ok' : 'warn') : 'info'}
        text={loopNote || 'Em đã đi hết tiến trình của tình huống này.'}
      />
      <button type="button" class={button.quiet} bind:this={redoButton} onclick={redoScenario}>
        Làm lại tình huống
      </button>
    {/if}
  {/if}
</div>

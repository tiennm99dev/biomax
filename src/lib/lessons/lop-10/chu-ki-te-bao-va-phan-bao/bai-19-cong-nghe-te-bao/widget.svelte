<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import OrderInput from '#lib/core/order-input.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { PROCESSES, inPlace, mixedOrder } from './engine.js';

  const options = PROCESSES.map((p) => ({ value: p.id, label: p.name }));
  const id = $props.id();

  let processId = $state(PROCESSES[0].id);
  let order = $state(mixedOrder(PROCESSES[0].steps.length, 2));
  /** @type {boolean | null} */
  let checked = $state(null);

  const process = $derived(PROCESSES.find((p) => p.id === processId) ?? PROCESSES[0]);
  const items = $derived(process.steps.map((s) => s.text));
  const score = $derived(inPlace(order));
  const solved = $derived(checked === true);
  const note = $derived(
    solved
      ? { tone: /** @type {const} */ ('ok'), text: process.done }
      : checked === false
        ? {
            tone: /** @type {const} */ ('warn'),
            text: `Có ${score} trên ${items.length} bước đang đúng vị trí. Hãy nghĩ xem mỗi bước cần có gì từ bước trước đó.`,
          }
        : {
            tone: /** @type {const} */ ('info'),
            text: 'Dùng mũi tên để đưa các bước về đúng trình tự, rồi bấm "Kiểm tra".',
          },
  );

  function changeProcess() {
    const p = PROCESSES.find((k) => k.id === processId) ?? PROCESSES[0];
    order = mixedOrder(p.steps.length, 2);
    checked = null;
  }

  function check() {
    checked = inPlace(order) === items.length;
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Quy trình" {options} bind:value={processId} onchange={changeProcess} />

  <p id="{id}-steps" class="text-sm font-semibold text-slate-700">
    Sắp xếp các bước của quy trình: {process.name}
  </p>
  <OrderInput
    {items}
    bind:value={order}
    labelledby="{id}-steps"
    disabled={solved}
    onchange={() => (checked = null)}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={solved} onclick={check}>Kiểm tra</button>
    <button type="button" class={button.quiet} onclick={changeProcess}>Đặt lại</button>
  </div>

  {#if solved}
    <ol
      class="flex flex-wrap items-center gap-1 text-xs font-semibold"
      aria-label="Sơ đồ quy trình"
    >
      {#each process.steps as step, i (step.tag)}
        <li class="flex items-center gap-1">
          {#if i > 0}<span class="text-slate-400" aria-hidden="true">→</span>{/if}
          <span class="rounded-lg bg-emerald-100 px-2 py-1 text-emerald-900">{step.tag}</span>
        </li>
      {/each}
    </ol>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    NOTHING_SEEN,
    PHOTOSYNTHESIS,
    atpText,
    atpUpTo,
    breakdownPath,
    describeBreakdown,
    describePhotosynthesis,
  } from './engine.js';

  let view = $state('ho-hap');
  let oxygen = $state(true);
  /** @type {'ruou' | 'lactic'} */
  let kind = $state('ruou');
  let light = $state(true);
  let index = $state(0);
  let seen = $state(NOTHING_SEEN);

  const inBreakdown = $derived(view === 'ho-hap');
  const path = $derived(inBreakdown ? breakdownPath(oxygen, kind) : PHOTOSYNTHESIS);
  const stage = $derived(path[Math.min(index, path.length - 1)]);
  const running = $derived(atpUpTo(path, Math.min(index, path.length - 1)));
  const note = $derived(
    inBreakdown ? describeBreakdown(oxygen, index, path) : describePhotosynthesis(light, index),
  );
  const halted = $derived(!inBreakdown && !light);

  const goals = $derived([
    { done: seen.chain, text: 'Đi đến chuỗi truyền electron và xem tổng số ATP.' },
    { done: seen.fermented, text: 'Tắt O₂ và so sánh số ATP của lên men.' },
    { done: seen.cycle, text: 'Xem hai pha quang hợp liên hệ với nhau thế nào.' },
    { done: seen.dark, text: 'Tắt ánh sáng và xem cả hai pha phản ứng ra sao.' },
  ]);

  /** @param {number} i */
  function open(i) {
    index = i;
    record();
  }

  function record() {
    const last = index === path.length - 1;
    seen = {
      chain: seen.chain || (inBreakdown && oxygen && last),
      fermented: seen.fermented || (inBreakdown && !oxygen),
      cycle: seen.cycle || (!inBreakdown && light && last),
      dark: seen.dark || (!inBreakdown && !light),
    };
  }

  function toggleOxygen() {
    oxygen = !oxygen;
    index = 0;
    record();
  }

  function toggleLight() {
    light = !light;
    record();
  }

  /** @param {string | number} next */
  function chooseView(next) {
    view = String(next);
    index = 0;
    record();
  }

  /** @param {string | number} next */
  function chooseKind(next) {
    kind = next === 'lactic' ? 'lactic' : 'ruou';
    index = 0;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Xem quá trình"
    value={view}
    onchange={chooseView}
    options={[
      { value: 'ho-hap', label: 'Phân giải glucose' },
      { value: 'quang-hop', label: 'Quang hợp' },
    ]}
  />

  <div class="flex flex-wrap items-center gap-2">
    {#if inBreakdown}
      <button type="button" class={button.secondary} aria-pressed={oxygen} onclick={toggleOxygen}>
        {oxygen ? 'Đang có O₂: bấm để tắt' : 'Không có O₂: bấm để bật'}
      </button>
      {#if !oxygen}
        <SegmentedControl
          label="Kiểu lên men"
          hideLabel
          value={kind}
          onchange={chooseKind}
          options={[
            { value: 'ruou', label: 'Rượu' },
            { value: 'lactic', label: 'Lactic' },
          ]}
        />
      {/if}
    {:else}
      <button type="button" class={button.secondary} aria-pressed={light} onclick={toggleLight}>
        {light ? 'Đang có ánh sáng: bấm để tắt' : 'Trong tối: bấm để bật sáng'}
      </button>
    {/if}
  </div>

  <ol class="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
    {#each path as item, i (item.id)}
      <li class="flex items-center gap-2 sm:flex-1">
        <button
          type="button"
          class="min-h-11 w-full rounded-lg border px-3 py-2 text-left text-sm font-semibold {i ===
          index
            ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
            : halted
              ? 'border-slate-300 bg-slate-100 text-slate-500'
              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'} {focusRing}"
          aria-current={i === index ? 'step' : undefined}
          onclick={() => open(i)}
        >
          {i + 1}. {item.name}
        </button>
      </li>
    {/each}
  </ol>

  <div class="rounded-xl bg-slate-50 p-4 text-sm text-slate-800">
    <p class="font-semibold">{stage.name}: {stage.place}</p>
    <div class="mt-2 grid gap-3 sm:grid-cols-2">
      <div>
        <p class="font-semibold text-sky-800">Đầu vào</p>
        <ul class="list-disc pl-5">
          {#each stage.inputs as item (item)}<li>{item}</li>{/each}
        </ul>
      </div>
      <div>
        <p class="font-semibold text-emerald-800">Đầu ra</p>
        <ul class="list-disc pl-5">
          {#each stage.outputs as item (item)}<li>{item}</li>{/each}
        </ul>
      </div>
    </div>
    <p class="mt-2">{stage.note}</p>
    <p class="mt-2 font-semibold" aria-live="polite">
      {#if halted}
        Trong tối, pha sáng không tạo thêm ATP; pha tối chỉ dùng nốt phần ATP còn lại.
      {:else if stage.usesAtp}
        Giai đoạn này dùng {stage.usesAtp} ATP cho mỗi glucose, không tạo ATP cho tế bào dùng.
      {:else if inBreakdown}
        Cộng dồn đến hết giai đoạn này: {atpText(running)} ATP cho mỗi glucose.
      {:else}
        Giai đoạn này tạo {stage.atp[0]} ATP cho mỗi glucose, dùng ngay trong lục lạp.
      {/if}
    </p>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        {goal.text}
      </li>
    {/each}
  </ul>
</div>

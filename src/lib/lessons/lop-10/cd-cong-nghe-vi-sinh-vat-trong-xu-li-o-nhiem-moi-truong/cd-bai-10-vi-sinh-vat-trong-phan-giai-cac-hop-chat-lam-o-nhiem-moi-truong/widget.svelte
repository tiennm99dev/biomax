<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { CASES, GROUPS, ROUTES, checkCase, groupsOf } from './engine.js';

  const modes = [
    { value: 'learn', label: 'Tìm hiểu' },
    { value: 'quiz', label: 'Thử sức' },
  ];
  /** @type {Record<string, string>} */
  const TINT = {
    'hieu-khi': 'border-sky-500 bg-sky-50',
    'ki-khi': 'border-violet-500 bg-violet-50',
    'len-men': 'border-amber-500 bg-amber-50',
  };

  let mode = $state('learn');
  let selected = $state('hieu-khi');
  let caseIndex = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let answer = $state(null);
  /** @type {HTMLDivElement | undefined} */
  let root = $state();
  /** @type {HTMLButtonElement | undefined} */
  let nextButton = $state();

  const group = $derived(GROUPS.find((g) => g.id === selected) ?? GROUPS[0]);
  const lit = $derived(group.route);
  const quiz = $derived(mode === 'quiz');
  const allDone = $derived(caseIndex >= CASES.length);

  /**
   * @param {'hieu-khi' | 'ki-khi' | 'len-men'} route
   */
  async function pick(route) {
    if (answer?.ok) return;
    const out = checkCase(caseIndex, route);
    answer = out;
    if (out.ok) {
      await tick();
      nextButton?.focus();
    }
  }

  /** The next button leaves after use, so focus goes to the first button left. */
  async function nextCase() {
    caseIndex += 1;
    answer = null;
    await tick();
    root?.querySelector('button')?.focus();
  }

  /** The restart button leaves after use, so focus goes to the first button left. */
  async function restartQuiz() {
    caseIndex = 0;
    answer = null;
    await tick();
    root?.querySelector('button')?.focus();
  }
</script>

<div bind:this={root} class="space-y-3">
  <SegmentedControl label="Cách dùng sơ đồ" options={modes} bind:value={mode} />

  {#if quiz}
    {#if allDone}
      <FeedbackNote
        tone="ok"
        text="Em đã xếp đúng cả {CASES.length} tình huống. Điều kiện oxygen và sản phẩm cho biết vi sinh vật nào đang hoạt động."
      />
      <button type="button" class={button.quiet} onclick={restartQuiz}>Làm lại</button>
    {:else}
      <p class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800">
        <span class="font-semibold">Tình huống {caseIndex + 1}/{CASES.length}.</span>
        {CASES[caseIndex].text} Tình huống này đi theo con đường nào?
      </p>
    {/if}
  {/if}

  {#if !quiz || !allDone}
    <div class="space-y-2 rounded-xl border border-slate-200 bg-white p-2">
      <p class="rounded-lg bg-lime-50 p-2 text-center text-sm font-semibold text-lime-900">
        Polysaccharide, protein, lipid trong chất thải
      </p>
      {#if quiz}
        <p class="text-center text-sm text-slate-700" aria-hidden="true">
          ↓ enzyme thuỷ phân ↓ các đơn phân
        </p>
      {:else}
        <button
          type="button"
          class="min-h-11 w-full rounded-lg border-2 px-2 py-2 text-sm font-semibold transition {focusRing} {selected ===
          'tiet-enzyme'
            ? 'border-lime-600 bg-lime-100 text-lime-950'
            : 'border-slate-300 bg-white text-slate-800'}"
          aria-pressed={selected === 'tiet-enzyme'}
          onclick={() => (selected = 'tiet-enzyme')}
        >
          Vi sinh vật tiết enzyme → các đơn phân
        </button>
      {/if}
      <div class="grid grid-cols-3 gap-2">
        {#each ROUTES as route (route.id)}
          <div
            class="flex min-w-0 flex-col gap-1 rounded-lg border-2 p-1.5 {!quiz &&
            (lit === route.id || lit === 'chung')
              ? TINT[route.id]
              : 'border-slate-200 bg-slate-50'}"
          >
            <p class="text-center text-xs text-slate-700">{route.condition}</p>
            {#if quiz}
              <button
                type="button"
                class="min-h-11 rounded-lg border border-slate-300 bg-white px-1 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-100 {focusRing}"
                onclick={() => pick(route.id)}
              >
                {route.name}
              </button>
            {:else}
              {#each groupsOf(route.id).filter((g) => g.route !== 'chung') as g (g.id)}
                <button
                  type="button"
                  class="min-h-11 rounded-lg border px-1 py-2 text-xs font-semibold {focusRing} {selected ===
                  g.id
                    ? 'border-indigo-600 bg-indigo-600 text-white'
                    : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'}"
                  aria-pressed={selected === g.id}
                  onclick={() => (selected = g.id)}
                >
                  {g.name}
                </button>
              {/each}
            {/if}
            <p class="mt-auto text-center text-xs font-bold text-slate-900">
              → {route.products}
            </p>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if quiz}
    {#if answer}
      <FeedbackNote tone={answer.ok ? 'ok' : 'warn'} text={answer.text} />
      {#if answer.ok}
        <button bind:this={nextButton} type="button" class={button.primary} onclick={nextCase}>
          {caseIndex + 1 < CASES.length ? 'Tình huống tiếp' : 'Xem kết quả'}
        </button>
      {/if}
    {/if}
  {:else}
    <div class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800" aria-live="polite">
      <p class="font-bold text-slate-900">{group.name}</p>
      <dl class="mt-1 space-y-1">
        <div>
          <dt class="inline font-semibold">Điều kiện:</dt>
          <dd class="inline">{group.condition}.</dd>
        </div>
        <div>
          <dt class="inline font-semibold">Hoạt động:</dt>
          <dd class="inline"><LiveRichText text={group.does} /></dd>
        </div>
        <div>
          <dt class="inline font-semibold">Sản phẩm:</dt>
          <dd class="inline">{group.products}.</dd>
        </div>
        <div>
          <dt class="inline font-semibold">Ứng dụng:</dt>
          <dd class="inline">{group.uses}</dd>
        </div>
      </dl>
    </div>
  {/if}
</div>

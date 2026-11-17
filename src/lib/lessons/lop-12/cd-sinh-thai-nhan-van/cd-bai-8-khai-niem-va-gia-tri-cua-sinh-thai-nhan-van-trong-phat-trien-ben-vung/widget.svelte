<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { SCENARIOS, SYSTEMS, canJudge, judge, progressText, scenarioOf } from './engine.js';

  /** @typedef {import('./engine.js').Verdict} Verdict */

  let current = $state(SCENARIOS[0].id);
  let opened = $state({ toNature: false, toSociety: false });
  /** @type {{ right: boolean, tone: 'ok' | 'warn', text: string } | null} */
  let result = $state(null);
  /** @type {Record<string, boolean>} */
  let firstTry = $state({});

  const scenario = $derived(scenarioOf(current));
  const ready = $derived(canJudge(opened));

  /** @param {string} id */
  function choose(id) {
    if (id === current) return;
    current = id;
    opened = { toNature: false, toSociety: false };
    result = null;
  }

  /** @param {Verdict} verdict */
  function decide(verdict) {
    result = judge(scenario, verdict);
    if (!(current in firstTry)) firstTry = { ...firstTry, [current]: result.right };
  }

  const arrow = `flex min-h-11 w-full items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition ${focusRing}`;
</script>

<div class="space-y-4">
  <fieldset class="min-w-0">
    <legend class="mb-1 text-sm font-semibold text-slate-700">Chọn một tình huống</legend>
    <div class="grid gap-2 sm:grid-cols-2">
      {#each SCENARIOS as s (s.id)}
        <button
          type="button"
          class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm {focusRing} {s.id ===
          current
            ? 'border-indigo-600 bg-indigo-50 font-semibold text-indigo-800'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}"
          aria-pressed={s.id === current}
          onclick={() => choose(s.id)}
        >
          {s.name}{#if s.id in firstTry}<span class="ml-1" aria-hidden="true"
              >{firstTry[s.id] ? '✓' : '✗'}</span
            ><span class="sr-only"
              >{firstTry[s.id] ? ', đã nhận định đúng' : ', đã nhận định sai'}</span
            >{/if}
        </button>
      {/each}
    </div>
  </fieldset>

  <div class="grid items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1fr)]">
    <section
      class="rounded-2xl border-2 border-sky-300 bg-sky-50 p-3"
      aria-label={SYSTEMS['xa-hoi'].name}
    >
      <h3 class="text-sm font-bold text-sky-900">{SYSTEMS['xa-hoi'].name}</h3>
      <ul class="mt-1 list-disc pl-5 text-xs text-sky-900">
        {#each SYSTEMS['xa-hoi'].parts as p (p)}<li>{p}</li>{/each}
      </ul>
    </section>

    <div class="flex flex-col justify-center gap-2">
      <button
        type="button"
        class="{arrow} {opened.toNature
          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
          : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
        aria-expanded={opened.toNature}
        onclick={() => (opened = { ...opened, toNature: true })}
      >
        <span aria-hidden="true" class="text-lg">⟶</span>
        Xã hội tác động lên tự nhiên
      </button>
      {#if opened.toNature}
        <p class="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-950">
          {scenario.toNature}
        </p>
      {/if}
      <button
        type="button"
        class="{arrow} {opened.toSociety
          ? 'border-amber-500 bg-amber-50 text-amber-900'
          : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
        aria-expanded={opened.toSociety}
        onclick={() => (opened = { ...opened, toSociety: true })}
      >
        <span aria-hidden="true" class="text-lg">⟵</span>
        Tự nhiên tác động trở lại xã hội
      </button>
      {#if opened.toSociety}
        <p class="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-950">{scenario.toSociety}</p>
      {/if}
    </div>

    <section
      class="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-3"
      aria-label={SYSTEMS['tu-nhien'].name}
    >
      <h3 class="text-sm font-bold text-emerald-900">{SYSTEMS['tu-nhien'].name}</h3>
      <ul class="mt-1 list-disc pl-5 text-xs text-emerald-900">
        {#each SYSTEMS['tu-nhien'].parts as p (p)}<li>{p}</li>{/each}
      </ul>
    </section>
  </div>

  <p class="text-xs text-slate-600">
    Hai hệ thống trao đổi với nhau năng lượng, vật chất và thông tin. Mở cả hai chiều tác động rồi
    nhận định.
  </p>

  <div class="space-y-2" aria-live="polite">
    {#if ready}
      <p class="text-sm font-semibold text-slate-800">
        Quan hệ giữa con người và tự nhiên trong tình huống này là:
      </p>
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.secondary} onclick={() => decide('ben-vung')}
          >Hài hoà, bền vững</button
        >
        <button type="button" class={button.secondary} onclick={() => decide('khong-ben-vung')}
          >Không bền vững</button
        >
      </div>
    {:else}
      <p class="text-sm text-slate-600">Bấm vào hai mũi tên để xem tác động hai chiều.</p>
    {/if}
    {#if result}
      <FeedbackNote tone={result.tone} text={result.text} />
    {/if}
  </div>

  <p class="text-sm text-slate-700" aria-live="polite">{progressText(firstTry)}</p>
</div>

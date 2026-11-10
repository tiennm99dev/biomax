<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { reducedMotion } from '#lib/core/motion.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { onDestroy } from 'svelte';
  import { SCENARIOS, STAGES, outcome, scenario, signalReach } from './engine.js';

  /** @type {import('./engine.js').ScenarioId} */
  let id = $state('rut-tay');
  /** @type {import('./engine.js').StageId | 'none'} */
  let broken = $state('none');
  /** Stages the signal has passed so far; -1 before the stimulus. */
  let pos = $state(-1);
  /** @type {ReturnType<typeof setTimeout> | null} */
  let timer = null;

  const s = $derived(scenario(id));
  const brokenStage = $derived(broken === 'none' ? null : broken);
  const reach = $derived(signalReach(brokenStage));
  const done = $derived(pos >= reach.reached);
  const note = $derived(
    pos < 0
      ? {
          tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
          text: 'Bấm "Gây kích thích" để theo dõi thông tin đi qua từng khâu.',
        }
      : done
        ? outcome(id, brokenStage)
        : {
            tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
            text: 'Thông tin đang được truyền…',
          },
  );

  function stop() {
    if (timer) clearTimeout(timer);
    timer = null;
  }

  function reset() {
    stop();
    pos = -1;
  }

  function tick() {
    if (pos >= reach.reached) {
      timer = null;
      return;
    }
    pos += 1;
    timer = setTimeout(tick, 700);
  }

  function stimulate() {
    stop();
    if (reducedMotion()) {
      pos = reach.reached;
      return;
    }
    pos = 0;
    timer = setTimeout(tick, 700);
  }

  function step() {
    stop();
    if (pos < reach.reached) pos += 1;
  }

  onDestroy(stop);

  /** @param {string | number} v @returns {import('./engine.js').ScenarioId} */
  const asScenario = (v) => SCENARIOS.find((x) => x.id === v)?.id ?? 'rut-tay';
  /** @param {string | number} v @returns {import('./engine.js').StageId | 'none'} */
  const asBroken = (v) => STAGES.find((x) => x.id === v)?.id ?? 'none';

  /** @param {number} i */
  function stateOf(i) {
    if (brokenStage === STAGES[i].id) return pos >= i ? 'blocked' : 'broken';
    if (pos > i || (pos === i && i < reach.reached)) return 'active';
    return 'idle';
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Hiện tượng cảm ứng"
    value={id}
    options={SCENARIOS.map((x) => ({ value: x.id, label: x.name }))}
    onchange={(v) => {
      id = asScenario(v);
      reset();
    }}
  />
  <SegmentedControl
    label="Làm hỏng một bộ phận"
    value={broken}
    options={[
      { value: 'none', label: 'Không' },
      ...STAGES.map((x) => ({ value: x.id, label: x.short })),
    ]}
    onchange={(v) => {
      broken = asBroken(v);
      reset();
    }}
  />

  <p class="rounded-lg bg-indigo-50 px-3 py-2 text-sm">
    <span class="font-semibold">Kích thích ({s.group}):</span>
    {s.stimulus}
  </p>

  <ol class="space-y-1">
    {#each STAGES as stage, i (stage.id)}
      {@const st = stateOf(i)}
      <li
        class="rounded-lg border-2 px-3 py-2 text-sm transition-colors {st === 'active'
          ? 'border-emerald-400 bg-emerald-50'
          : st === 'blocked'
            ? 'border-rose-400 bg-rose-50'
            : st === 'broken'
              ? 'border-dashed border-rose-300 bg-white'
              : 'border-slate-200 bg-white'}"
      >
        <span class="font-semibold">{i + 1}. {stage.name}</span>
        {#if st === 'broken' || st === 'blocked'}
          <span class="text-rose-700"> (bị hỏng)</span>
        {/if}
        <span class="block text-slate-700">{s.parts[i]}</span>
      </li>
      {#if i < STAGES.length - 1}
        <li
          aria-hidden="true"
          class="text-center leading-none {pos > i ? 'text-emerald-600' : 'text-slate-300'}"
        >
          ↓
        </li>
      {/if}
    {/each}
  </ol>

  <p
    class="rounded-lg px-3 py-2 text-sm font-semibold {done && reach.responds && pos >= 0
      ? 'bg-emerald-100 text-emerald-900'
      : 'bg-slate-100 text-slate-500'}"
  >
    Đáp ứng: {done && pos >= 0 ? (reach.responds ? s.response : 'Không có đáp ứng.') : '…'}
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={stimulate}>Gây kích thích</button>
    <button type="button" class={button.quiet} onclick={step} disabled={done && pos >= 0}>
      Bước tiếp
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  <div aria-live="polite">
    <FeedbackNote tone={note.tone} text={note.text} />
  </div>
</div>

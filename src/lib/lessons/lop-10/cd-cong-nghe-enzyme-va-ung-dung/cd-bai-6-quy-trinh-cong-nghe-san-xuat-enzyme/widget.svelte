<script>
  import { tick } from 'svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import {
    MAX_WORK_TEMP,
    MIN_WORK_TEMP,
    ROUTES,
    STAGES,
    STAGE_NAMES,
    STAGE_SHORT,
    attempt,
    batchReport,
    keptShare,
    lineShare,
  } from './engine.js';

  const START = 'Chạm vào công đoạn đầu tiên của dây chuyền.';
  const options = ROUTES.map((r) => ({ value: r.id, label: r.name }));
  /** @type {Record<string, string>} */
  const COLOR = { nguon: '#059669', tach: '#4f46e5', 'che-pham': '#d97706' };

  let routeId = $state(ROUTES[0].id);
  /** @type {string[]} */
  let done = $state([]);
  let message = $state(START);
  let lastOk = $state(true);
  let slips = $state(0);
  let workTemp = $state(25);
  /** @type {HTMLUListElement | undefined} */
  let cardList = $state();
  /** @type {HTMLDivElement | undefined} */
  let batchBox = $state();

  const route = $derived(ROUTES.find((r) => r.id === routeId) ?? ROUTES[0]);
  const cards = $derived(
    shuffled([...route.steps, ...route.traps], routeId.length * 13 + 3).filter(
      (c) => !done.includes(c.id),
    ),
  );
  const finished = $derived(lineShare(route, done) === 1);
  const x = $derived(linear(0, route.steps.length - 1, 26, 314).map);
  const report = $derived(batchReport(workTemp, slips));
  const doneStages = $derived(
    STAGES.map((stage) => ({
      stage,
      steps: route.steps.filter((s) => s.stage === stage && done.includes(s.id)),
    })),
  );

  /**
   * A finished step's button leaves the list, so focus moves to the card that
   * takes its place, or to the temperature slider once the line is done.
   * @param {string} id
   */
  async function run(id) {
    const at = cards.findIndex((c) => c.id === id);
    const out = attempt(route, done, id);
    done = out.done;
    message = out.text;
    lastOk = out.ok;
    if (!out.ok) {
      slips += 1;
      return;
    }
    await tick();
    const left = cardList?.querySelectorAll('button');
    const next = left?.[Math.min(at, left.length - 1)] ?? batchBox?.querySelector('input');
    next?.focus();
  }

  function restart() {
    done = [];
    message = START;
    lastOk = true;
    slips = 0;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Nguồn enzyme của dây chuyền"
    {options}
    bind:value={routeId}
    onchange={restart}
  />
  <p class="text-sm font-semibold text-slate-800">Sản phẩm: {route.enzyme}</p>

  <svg
    viewBox="0 0 340 92"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label="Dây chuyền {route.name}: đã xong {done.length} trong {route.steps
      .length} công đoạn."
  >
    <rect x="14" y="36" width="312" height="10" rx="5" fill="#cbd5e1" />
    {#each route.steps as step, i (step.id)}
      <circle
        cx={x(i)}
        cy="41"
        r="13"
        fill={done.includes(step.id) ? COLOR[step.stage] : '#ffffff'}
        stroke={COLOR[step.stage]}
        stroke-width="2"
      />
      <text
        x={x(i)}
        y="45.5"
        text-anchor="middle"
        font-size="12"
        font-weight="700"
        fill={done.includes(step.id) ? '#ffffff' : '#334155'}
      >
        {i + 1}
      </text>
    {/each}
    {#each STAGES as stage, i (stage)}
      <circle cx={18 + i * 112} cy="76" r="4" fill={COLOR[stage]} />
      <text x={26 + i * 112} y="80" font-size="12" fill="#334155">{STAGE_SHORT[stage]}</text>
    {/each}
  </svg>

  <FeedbackNote tone={lastOk ? 'info' : 'warn'} text={message} />

  {#if !finished}
    <ul bind:this={cardList} class="grid gap-2" aria-label="Các công đoạn chưa làm">
      {#each cards as card (card.id)}
        <li>
          <button
            type="button"
            class="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-800 transition hover:bg-slate-50 {focusRing}"
            onclick={() => run(card.id)}
          >
            {card.text}
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <div bind:this={batchBox} class="space-y-3 rounded-xl bg-slate-50 p-3">
      <SliderField
        label="Nhiệt độ khi tách chiết"
        bind:value={workTemp}
        min={MIN_WORK_TEMP}
        max={MAX_WORK_TEMP}
        unit="°C"
      />
      <div>
        <div class="flex justify-between text-sm font-semibold text-slate-800">
          <span>Hoạt tính còn lại của mẻ enzyme</span>
          <span class="tabular-nums">{formatNumber(keptShare(workTemp))}%</span>
        </div>
        <div class="mt-1 h-3 rounded bg-slate-200" aria-hidden="true">
          <div class="h-3 rounded bg-emerald-600" style:width="{keptShare(workTemp)}%"></div>
        </div>
      </div>
      <FeedbackNote tone={report.tone} text={report.text} />
      <p class="text-xs text-slate-600">
        Số liệu hoạt tính là mô hình minh hoạ cho quy tắc làm lạnh và làm nhanh.
      </p>
    </div>
  {/if}

  <ol class="space-y-2" aria-label="Các giai đoạn đã làm">
    {#each doneStages as group (group.stage)}
      <li class="rounded-xl border border-slate-200 bg-white p-3 text-sm">
        <p class="font-bold" style:color={COLOR[group.stage]}>{STAGE_NAMES[group.stage]}</p>
        {#if group.steps.length > 0}
          <ul class="mt-1 list-disc space-y-1 pl-5 text-slate-800">
            {#each group.steps as step (step.id)}
              <li>{step.text}</li>
            {/each}
          </ul>
        {:else}
          <p class="mt-1 text-slate-600">Chưa có công đoạn nào.</p>
        {/if}
      </li>
    {/each}
  </ol>

  <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { tidy } from '#lib/core/number-format.js';
  import { focusRing } from '#lib/core/ui.js';
  import { ERAS, VIEWS, agoText, clockText, eraAt, eventsIn, groupsBy } from './engine.js';

  const W = 340;
  const H = 96;
  const L = 8;
  const R = 8;
  const BAND_Y = 50;
  const BAND_H = 24;

  let viewId = $state(VIEWS[0].id);
  /** Slider position: 0 is the left end (oldest), view.from is today. */
  let pos = $state(VIEWS[0].from - 3500);

  const view = $derived(VIEWS.find((v) => v.id === viewId) ?? VIEWS[0]);
  const t = $derived(tidy(Math.max(0, view.from - pos), 6));
  const era = $derived(eraAt(t));
  const events = $derived(eventsIn(view));
  const groups = $derived(groupsBy(t));
  const recent = $derived(events.filter((e) => e.t >= t).at(-1));

  const x = (/** @type {number} */ time) => L + (1 - time / view.from) * (W - L - R);
  const bands = $derived(
    ERAS.filter((e) => e.to < view.from).map((e) => ({
      ...e,
      x0: x(Math.min(e.from, view.from)),
      x1: x(e.to),
    })),
  );

  /** @param {string | number} id */
  function chooseView(id) {
    const keep = t;
    viewId = String(id);
    const v = VIEWS.find((vv) => vv.id === id) ?? VIEWS[0];
    pos = Math.round((v.from - Math.min(keep, v.from)) / v.step) * v.step;
  }

  /** @param {number} time */
  function jump(time) {
    pos = view.from - time;
  }

  const feedback = $derived(
    `${agoText(t)}: ${era.name}. ${era.life}` +
      (recent ? ` Sự kiện gần nhất: ${recent.text}` : '') +
      ` Nếu cả lịch sử Trái Đất là một ngày, lúc này là ${clockText(t)}.`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Phóng to dòng thời gian"
    options={VIEWS.map((v) => ({ value: v.id, label: v.label }))}
    value={viewId}
    onchange={chooseView}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="block h-auto w-full select-none"
    role="img"
    aria-label="Dòng thời gian từ {agoText(view.from)} đến ngày nay; điểm đang xem: {agoText(
      t,
    )}, {era.name}."
  >
    {#each bands as b (b.id)}
      <rect x={b.x0} y={BAND_Y} width={Math.max(0.5, b.x1 - b.x0)} height={BAND_H} fill={b.color} />
      {#if b.x1 - b.x0 > 46}
        <text
          x={(b.x0 + b.x1) / 2}
          y={BAND_Y + 16}
          text-anchor="middle"
          font-size="9"
          fill="#fff"
          font-weight="700">{b.name.replace('Đại ', '')}</text
        >
      {/if}
    {/each}
    {#each events as e (e.t)}
      <line
        x1={x(e.t)}
        x2={x(e.t)}
        y1={BAND_Y - 8}
        y2={BAND_Y}
        stroke={e.t >= t ? '#334155' : '#cbd5e1'}
        stroke-width="1.5"
      />
      <circle cx={x(e.t)} cy={BAND_Y - 10} r="3" fill={e.t >= t ? '#4f46e5' : '#cbd5e1'} />
    {/each}
    <line x1={x(t)} x2={x(t)} y1="10" y2={BAND_Y + BAND_H + 4} stroke="#e11d48" stroke-width="2" />
    <text
      x={Math.min(Math.max(x(t), 60), W - 60)}
      y="20"
      text-anchor="middle"
      font-size="10"
      font-weight="700"
      fill="#be123c">{agoText(t)}</text
    >
    <text x={L} y={H - 4} font-size="9" fill="#64748b">{agoText(view.from)}</text>
    <text x={W - R} y={H - 4} text-anchor="end" font-size="9" fill="#64748b">ngày nay</text>
  </svg>

  <SliderField
    label="Đi dọc dòng thời gian"
    bind:value={pos}
    min={0}
    max={view.from}
    step={view.step}
    format={(v) => agoText(tidy(Math.max(0, view.from - v), 6))}
  />

  <div>
    <p class="mb-1 text-sm font-semibold text-slate-700">Các mốc (bấm để đến mốc đó)</p>
    <ul class="flex flex-wrap gap-1">
      {#each events as e (e.t)}
        <li>
          <button
            type="button"
            class="min-h-11 rounded-full border px-3 text-xs font-semibold {e.t >= t
              ? 'border-indigo-300 bg-indigo-50 text-indigo-800'
              : 'border-slate-200 bg-white text-slate-500'} {focusRing}"
            aria-label="{e.short}, {agoText(e.t)}"
            onclick={() => jump(e.t)}
          >
            {e.short}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <div class="rounded-xl border border-slate-200 p-3 text-sm">
    <p class="font-semibold" style:color={era.color}>{era.name}</p>
    <p class="mt-1 text-slate-700">
      {#if groups.length}
        Các nhóm sinh vật đã xuất hiện: {groups.join(', ')}.
      {:else}
        Chưa có sinh vật nào.
      {/if}
    </p>
  </div>

  <FeedbackNote tone="info" text={feedback} />
</div>

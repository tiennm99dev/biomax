<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import {
    EXPERIMENTS,
    TOLERANCE,
    diaryNote,
    experiment,
    heading,
    judgeReading,
    organShape,
    record,
  } from './engine.js';

  /** @type {import('./engine.js').ExperimentId} */
  let id = $state('huong-sang');
  let day = $state(4);
  let reading = $state(0);
  /** @type {Record<string, import('./engine.js').Entry[]>} */
  let logs = $state({ 'huong-sang': [], 'trong-luc': [], 'huong-hoa': [] });
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let last = $state(null);

  const e = $derived(experiment(id));
  const shape = $derived(organShape(e, day));
  const log = $derived(logs[id]);
  const note = $derived(diaryNote(e, log));

  const R = 46;
  /** A point at distance `r` from the pivot in direction `dir`. @param {number} dir @param {number} r */
  function at(dir, r) {
    const h = heading(dir);
    return { x: shape.pivot.x + r * h.x, y: shape.pivot.y + r * h.y };
  }
  const refEnd = $derived(at(e.ref, R + 8));
  const rayEnd = $derived(at(e.ref + e.sign * reading, R + 14));
  const ticks = $derived(
    Array.from({ length: 19 }, (_, i) => ({
      a: i * 10,
      p: at(e.ref + e.sign * i * 10, R),
      q: at(e.ref + e.sign * i * 10, i % 3 === 0 ? R - 8 : R - 4),
      l: at(e.ref + e.sign * i * 10, R - 15),
    })),
  );
  const arc = $derived(Array.from({ length: 37 }, (_, i) => at(e.ref + e.sign * i * 5, R)));

  function save() {
    if (shape.length === 0) {
      last = { tone: 'info', text: `Ngày ${day}: hạt chưa nảy mầm, chưa có gì để đo.` };
      return;
    }
    const verdict = judgeReading(shape.angle, reading);
    last = verdict;
    if (verdict.tone === 'ok') {
      logs[id] = record(log, { day, reading, truth: shape.angle });
    }
  }

  function clear() {
    logs[id] = [];
    last = null;
  }

  /** @param {string | number} v @returns {import('./engine.js').ExperimentId} */
  const asId = (v) => EXPERIMENTS.find((x) => x.id === v)?.id ?? 'huong-sang';
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Thí nghiệm"
    value={id}
    options={EXPERIMENTS.map((x) => ({ value: x.id, label: x.name }))}
    onchange={(v) => {
      id = asId(v);
      day = Math.min(day, experiment(id).days);
      last = null;
    }}
  />
  <p class="text-sm text-slate-700">{e.setup}</p>

  <SliderField
    label="Ngày quan sát"
    bind:value={day}
    min={0}
    max={e.days}
    step={1}
    format={(v) => `ngày ${v}`}
    oninput={() => (last = null)}
  />

  <svg
    viewBox="0 0 300 230"
    class="mx-auto block w-full max-w-md rounded-xl bg-amber-50"
    role="img"
    aria-label="Ngày {day}, {e.organ}{shape.length === 0
      ? ': hạt chưa nảy mầm'
      : `; tia đo đang ở ${reading} độ`}"
  >
    {#if id === 'huong-sang'}
      <rect x="276" y="60" width="18" height="40" fill="#fde68a" />
      <text x="294" y="115" text-anchor="end" font-size="10" fill="#92400e">lỗ sáng</text>
      {#each [70, 80, 90] as y (y)}
        <line x1="250" y1={y} x2="272" y2={y} stroke="#eab308" stroke-width="2" />
      {/each}
      <rect x="80" y="205" width="80" height="20" fill="#d6b88a" />
    {:else if id === 'huong-hoa'}
      <rect x="40" y="25" width="250" height="195" fill="#e7d3ad" opacity="0.6" />
      <circle cx="250" cy="185" r="16" fill="#60a5fa" opacity="0.7" />
      <text x="250" y="212" text-anchor="middle" font-size="10" fill="#1e3a8a">phân NPK</text>
    {:else}
      <rect x="90" y="20" width="80" height="200" fill="#f1f5f9" stroke="#cbd5e1" />
      <text x="130" y="215" text-anchor="middle" font-size="10" fill="#475569">giấy thấm</text>
    {/if}

    {#if shape.length > 0}
      <polyline
        points={pointsAttr(shape.points)}
        fill="none"
        stroke={id === 'huong-sang' ? '#16a34a' : '#a16207'}
        stroke-width="4"
        stroke-linecap="round"
      />
      <g aria-hidden="true">
        <polyline points={pointsAttr(arc)} fill="none" stroke="#6366f1" stroke-width="1" />
        {#each ticks as t (t.a)}
          <line x1={t.p.x} y1={t.p.y} x2={t.q.x} y2={t.q.y} stroke="#6366f1" stroke-width="1" />
          {#if t.a % 30 === 0}
            <text x={t.l.x} y={t.l.y + 3} text-anchor="middle" font-size="7" fill="#4338ca"
              >{t.a}</text
            >
          {/if}
        {/each}
        <line
          x1={shape.pivot.x}
          y1={shape.pivot.y}
          x2={refEnd.x}
          y2={refEnd.y}
          stroke="#475569"
          stroke-dasharray="4 3"
        />
        <line
          x1={shape.pivot.x}
          y1={shape.pivot.y}
          x2={rayEnd.x}
          y2={rayEnd.y}
          stroke="#dc2626"
          stroke-width="2"
        />
        <circle cx={shape.pivot.x} cy={shape.pivot.y} r="2.5" fill="#dc2626" />
      </g>
    {/if}
    <ellipse
      cx={e.base.x}
      cy={e.base.y}
      rx="8"
      ry="6"
      fill={id === 'huong-sang' ? '#4ade80' : '#facc15'}
      stroke="#854d0e"
    />
  </svg>
  <p class="text-center text-xs text-slate-600">
    Nét đứt: hướng ban đầu. Tia đỏ: tia đo của thước đo góc, đặt tại chỗ bắt đầu đoạn ngọn.
  </p>

  <SliderField
    label="Xoay tia đo"
    bind:value={reading}
    min={0}
    max={180}
    step={1}
    format={(v) => `${v}°`}
    oninput={() => (last = null)}
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={save}>Ghi vào nhật kí</button>
    <button type="button" class={button.quiet} onclick={clear}>Xoá nhật kí</button>
  </div>
  <div aria-live="polite">
    {#if last}
      <FeedbackNote tone={last.tone} text={last.text} />
    {/if}
  </div>

  <div class="overflow-x-auto">
    <table class="w-full min-w-[16rem] text-sm tabular-nums">
      <caption class="pb-1 text-left text-slate-600">
        Nhật kí: góc uốn của {e.organ} (sai số cho phép ±{TOLERANCE}°)
      </caption>
      <thead>
        <tr class="text-left">
          <th class="py-1 pr-2">Ngày</th>
          <th class="py-1 pr-2">Góc uốn đo được</th>
        </tr>
      </thead>
      <tbody>
        {#each log as row (row.day)}
          <tr>
            <td class="py-1 pr-2">{row.day}</td>
            <td class="py-1 pr-2">{row.reading}°</td>
          </tr>
        {:else}
          <tr><td colspan="2" class="py-1 text-slate-500">Chưa có số đo nào.</td></tr>
        {/each}
      </tbody>
    </table>
  </div>
  <FeedbackNote tone={note.tone} text={note.text} />
</div>

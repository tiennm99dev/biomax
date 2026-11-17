<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import BarChart from '#lib/core/visuals/bar-chart.svelte';
  import {
    FIELDS,
    MAX_PEOPLE,
    ZONES,
    addMark,
    dotRoom,
    dotSpot,
    emptyMarks,
    emptyTally,
    fieldOf,
    goodShare,
    observations,
    removeMark,
    reportText,
    shares,
    zoneOf,
  } from './engine.js';

  let fieldId = $state(FIELDS[0].id);
  const field = $derived(fieldOf(fieldId));
  let tally = $state(emptyTally(FIELDS[0]));
  let marks = $state(emptyMarks());
  let zone = $state(ZONES[0].id);
  /** @type {string | null} */
  let focusedZone = $state(null);
  let kind = $state(FIELDS[0].marks[0].id);
  let copied = $state('');

  const rows = $derived(shares(field, tally));
  const total = $derived(rows.reduce((s, r) => s + r.count, 0));
  const chart = $derived(
    rows.map((r) => ({ label: r.short, value: r.share, color: r.good ? '#16a34a' : '#f59e0b' })),
  );
  const notes = $derived(observations(field, tally, marks));
  const report = $derived(reportText(field, tally, marks));
  const here = $derived(marks[zone] ?? {});

  /** @param {string | number} id */
  function pickField(id) {
    const f = fieldOf(String(id));
    tally = emptyTally(f);
    marks = emptyMarks();
    kind = f.marks[0].id;
    copied = '';
  }

  /** @param {string} id @param {KeyboardEvent} event */
  function keyZone(id, event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      zone = id;
    }
  }

  /** The dots of a zone, good marks first, as many as fit. @param {string} id */
  function dotsOf(id) {
    /** @type {Array<'tot' | 'xau'>} */
    const out = [];
    for (const m of field.marks) {
      const n = marks[id]?.[m.id] ?? 0;
      for (let i = 0; i < n; i++) out.push(m.tone);
    }
    return out.slice(0, dotRoom(zoneOf(id)));
  }

  /** @param {string} id */
  function countText(id) {
    return field.marks.map((m) => `${m.label.toLowerCase()} ${marks[id]?.[m.id] ?? 0}`).join(', ');
  }

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(report);
      copied = 'Đã sao chép bản tóm tắt.';
    } catch {
      copied = 'Không sao chép tự động được; hãy chọn văn bản trong ô và sao chép.';
    }
  }
</script>

<div class="space-y-5">
  <SegmentedControl
    label="1. Chọn lĩnh vực điều tra"
    options={FIELDS.map((f) => ({ value: f.id, label: f.name }))}
    bind:value={fieldId}
    onchange={pickField}
  />

  <section class="space-y-2" aria-label="Bản đồ quan sát">
    <h3 class="text-sm font-semibold text-slate-900">2. Bản đồ quan sát địa phương</h3>
    <SegmentedControl
      label="Loại điểm cần đánh dấu"
      options={field.marks.map((m) => ({ value: m.id, label: m.label }))}
      bind:value={kind}
    />
    <div class="grid gap-3 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <svg
        viewBox="0 0 300 200"
        class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
        role="group"
        aria-label="Sơ đồ địa phương gồm sáu khu vực; chọn một khu vực để đánh dấu điểm"
      >
        {#each ZONES as z (z.id)}
          <g
            data-zone={z.id}
            role="button"
            tabindex="0"
            aria-pressed={z.id === zone}
            aria-label="{z.name}: {countText(z.id)}"
            class="cursor-pointer outline-none"
            onclick={() => (zone = z.id)}
            onkeydown={(e) => keyZone(z.id, e)}
            onfocus={() => (focusedZone = z.id)}
            onblur={() => (focusedZone = null)}
          >
            <rect
              x={z.x}
              y={z.y}
              width={z.w}
              height={z.h}
              rx="8"
              fill={z.fill}
              stroke={z.id === zone || z.id === focusedZone ? '#4f46e5' : '#94a3b8'}
              stroke-width={z.id === zone || z.id === focusedZone ? 3 : 1}
              stroke-dasharray={z.id === focusedZone && z.id !== zone ? '4 3' : undefined}
            />
            <text x={z.x + 8} y={z.y + 18} font-size="10" font-weight="600" fill="#1e293b"
              >{z.name}</text
            >
            {#each dotsOf(z.id) as tone, i (i)}
              {@const p = dotSpot(z, i)}
              <circle
                cx={p.cx}
                cy={p.cy}
                r="5"
                fill={tone === 'tot' ? '#16a34a' : '#dc2626'}
                stroke="white"
                stroke-width="1"
              />
            {/each}
          </g>
        {/each}
      </svg>

      <div class="space-y-2" aria-live="polite">
        <h4 class="text-sm font-semibold text-slate-900">{zoneOf(zone).name}</h4>
        <ul class="text-sm text-slate-700">
          {#each field.marks as m (m.id)}
            <li class="flex items-center gap-2">
              <span
                class="inline-block h-3 w-3 rounded-full {m.tone === 'tot'
                  ? 'bg-green-600'
                  : 'bg-red-600'}"
                aria-hidden="true"
              ></span>
              {m.label}: <strong>{here[m.id] ?? 0}</strong>
            </li>
          {/each}
        </ul>
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class={button.primary}
            onclick={() => (marks = addMark(marks, zone, kind))}>Thêm điểm</button
          >
          <button
            type="button"
            class={button.quiet}
            onclick={() => (marks = removeMark(marks, zone, kind))}>Bớt điểm</button
          >
        </div>
        <p class="text-xs text-slate-600">
          Chọn khu vực trên sơ đồ và loại điểm, rồi bấm "Thêm điểm" cho mỗi nơi nhóm quan sát được.
        </p>
      </div>
    </div>
  </section>

  <section class="space-y-2" aria-label="Kết quả khảo sát">
    <h3 class="text-sm font-semibold text-slate-900">3. Kết quả khảo sát</h3>
    <p class="text-sm text-slate-800">Câu hỏi: <em>{field.question}</em></p>
    <p class="text-sm font-semibold text-slate-700">Số người chọn mỗi câu trả lời:</p>
    <ul class="space-y-2">
      {#each field.answers as a (a.id)}
        <li class="rounded-lg bg-slate-50 p-2">
          <Stepper
            label={a.label}
            bind:value={tally[a.id]}
            min={0}
            max={MAX_PEOPLE}
            format={(v) => formatNumber(v)}
          />
        </li>
      {/each}
    </ul>
    {#if total > 0}
      <BarChart
        data={chart}
        max={100}
        unit="Tỉ lệ người trả lời (%)"
        title="Tỉ lệ người chọn mỗi câu trả lời"
        height={280}
      />
      <p class="text-sm text-slate-700">
        {total} người trả lời; tỉ lệ có cách làm bền vững (cột xanh):
        <strong>{formatNumber(goodShare(field, tally))}%</strong>.
      </p>
    {/if}
    {#each notes as note, i (i)}
      <FeedbackNote tone={note.tone} text={note.text} />
    {/each}
  </section>

  <section class="space-y-2" aria-label="Bản tóm tắt">
    <h3 class="text-sm font-semibold text-slate-900">4. Bản tóm tắt để đưa vào báo cáo</h3>
    <textarea
      readonly
      rows="8"
      class="w-full rounded-lg border border-slate-300 bg-white p-2 font-mono text-xs text-slate-800 {focusRing}"
      aria-label="Bản tóm tắt kết quả điều tra"
      value={report}></textarea>
    <div class="flex flex-wrap items-center gap-3">
      <button type="button" class={button.secondary} onclick={copyReport}>Sao chép</button>
      <span class="text-sm text-slate-600" aria-live="polite">{copied}</span>
    </div>
  </section>
</div>

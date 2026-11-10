<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { focusRing } from '#lib/core/ui.js';
  import {
    EXTRA_LIFESPANS,
    RULER_MARKS,
    SPECIES,
    cycleEnd,
    durationText,
    lineNote,
    logPosition,
    species,
    stageAt,
    timesLonger,
  } from './engine.js';

  const COLORS = ['#fde68a', '#86efac', '#93c5fd', '#f9a8d4'];
  const LEFT = 16;
  const RIGHT = 324;
  const W = RIGHT - LEFT;

  /** @type {import('./engine.js').SpeciesId} */
  let id = $state('muoi');
  let day = $state(0);

  const s = $derived(species(id));
  const end = $derived(cycleEnd(s));
  const step = $derived(Math.max(1, Math.round(end / 240)));
  const current = $derived(stageAt(s, day));
  const note = $derived(lineNote(s, day));
  /** @param {number} d */
  const lx = (d) => LEFT + (W * d) / end;
  const mosquito = SPECIES[0];
  const ratio = $derived(timesLonger(s.lifespan, mosquito.lifespan));

  const dots = $derived([
    ...SPECIES.map((x) => ({ name: x.name, lifespan: x.lifespan, on: x.id === id })),
    ...EXTRA_LIFESPANS.map((x) => ({ name: x.name, lifespan: x.lifespan, on: false })),
  ]);

  /** @param {string | number} v @returns {import('./engine.js').SpeciesId} */
  const asId = (v) => SPECIES.find((x) => x.id === v)?.id ?? 'muoi';
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Loài"
    value={id}
    options={SPECIES.map((x) => ({ value: x.id, label: x.name }))}
    onchange={(v) => {
      id = asId(v);
      day = 0;
    }}
  />

  <svg
    viewBox="0 0 340 58"
    class="mx-auto block w-full max-w-lg"
    role="img"
    aria-label="Dòng thời gian vòng đời của {s.name.toLowerCase()}, đang ở giai đoạn {s.stages[
      current
    ].name.toLowerCase()}"
  >
    {#each s.stages as st, i (st.name)}
      <rect
        x={lx(st.from)}
        y="14"
        width={Math.max(1.5, lx(st.to) - lx(st.from))}
        height="20"
        fill={COLORS[i % COLORS.length]}
        stroke={i === current ? '#312e81' : '#ffffff'}
        stroke-width={i === current ? 2 : 1}
      />
    {/each}
    <line x1={lx(day)} y1="6" x2={lx(day)} y2="42" stroke="#dc2626" stroke-width="2" />
    <polygon
      points="{lx(day) - 5},4 {lx(day) + 5},4 {lx(day)},11"
      fill="#dc2626"
      aria-hidden="true"
    />
    <text x={LEFT} y="54" font-size="10" fill="#475569">0</text>
    <text x={RIGHT} y="54" font-size="10" fill="#475569" text-anchor="end">{durationText(end)}</text
    >
  </svg>

  <SliderField
    label="Tuổi tính từ {s.start}"
    bind:value={day}
    min={0}
    max={end}
    {step}
    format={(v) => durationText(v)}
  />

  <ol class="grid gap-1 sm:grid-cols-2">
    {#each s.stages as st, i (st.name)}
      <li>
        <button
          type="button"
          class="flex min-h-11 w-full items-center gap-2 rounded-lg border px-3 py-1 text-left text-sm {focusRing} {i ===
          current
            ? 'border-indigo-500 bg-indigo-50 font-semibold'
            : 'border-slate-200 bg-white'}"
          aria-pressed={i === current}
          onclick={() => (day = Math.min(end, Math.round((st.from + st.to) / 2)))}
        >
          <span
            class="inline-block h-3 w-3 shrink-0 rounded-sm"
            style="background:{COLORS[i % COLORS.length]}"
            aria-hidden="true"
          ></span>
          {i + 1}. {st.name}
          <span class="ml-auto text-xs font-normal text-slate-500">
            {durationText(st.to - st.from)}
          </span>
        </button>
      </li>
    {/each}
  </ol>

  <FeedbackNote tone="info" text={note} />

  <figure class="space-y-1">
    <figcaption class="text-sm font-semibold text-slate-700">
      Tuổi thọ trên thước chia theo luỹ thừa của 10
    </figcaption>
    <svg
      viewBox="0 0 340 92"
      class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
      role="img"
      aria-label="Thước tuổi thọ: {dots.map((d) => d.name.toLowerCase()).join(', ')}"
    >
      <line x1={LEFT} y1="56" x2={RIGHT} y2="56" stroke="#94a3b8" stroke-width="2" />
      {#each RULER_MARKS as m (m.days)}
        {@const x = LEFT + W * logPosition(m.days)}
        <line x1={x} y1="52" x2={x} y2="60" stroke="#64748b" />
        <text {x} y="74" font-size="8" fill="#475569" text-anchor="middle">{m.label}</text>
      {/each}
      {#each dots as d, i (d.name)}
        {@const x = LEFT + W * logPosition(d.lifespan)}
        <circle cx={x} cy="56" r={d.on ? 6 : 4} fill={d.on ? '#dc2626' : '#6366f1'} />
        {@const y = 40 - 12 * (i % 3)}
        <text
          {x}
          {y}
          font-size="8.5"
          fill={d.on ? '#b91c1c' : '#334155'}
          font-weight={d.on ? 700 : 400}
          text-anchor={x > 280 ? 'end' : 'middle'}>{d.name}</text
        >
        <line x1={x} y1={y + 3} x2={x} y2="50" stroke="#cbd5e1" aria-hidden="true" />
      {/each}
    </svg>
    <p class="text-sm text-slate-700">
      Tuổi thọ của {s.name.toLowerCase()}: {s.lifespanText}.
      {#if ratio >= 2}
        Gấp khoảng {formatNumber(ratio)} lần tuổi thọ của muỗi.
      {:else if s.id !== 'muoi'}
        Gần bằng tuổi thọ của muỗi.
      {/if}
      Trên thước này, từ 1 năm đến 10 năm dài bằng từ 10 năm đến 100 năm.
    </p>
  </figure>
</div>

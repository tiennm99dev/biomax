<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    CYCLE_MAX,
    CYCLE_MIN,
    PHASES,
    TASKS,
    describe,
    isFertile,
    levels,
    ovulationDay,
    phaseOf,
  } from './engine.js';

  let mode = $state('kham-pha');
  let length = $state(28);
  let day = $state(1);
  let fertilized = $state(false);
  let taskIndex = $state(0);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let verdict = $state(null);

  const challenge = $derived(mode === 'thu-thach');
  const task = $derived(TASKS[taskIndex]);
  const ov = $derived(ovulationDay(length));
  const useFertilized = $derived(!challenge && fertilized);
  const phase = $derived(phaseOf(day, length, useFertilized));
  const level = $derived(levels(day, length, useFertilized));
  const info = $derived(describe(day, length, useFertilized));
  const days = $derived(Array.from({ length }, (_, i) => i + 1));

  /** @type {HTMLButtonElement[]} */
  const cells = [];

  /** @param {string | number} next */
  function switchMode(next) {
    mode = String(next);
    verdict = null;
    if (mode === 'thu-thach') {
      length = task.length;
      day = 1;
    }
  }

  /** @param {number} d */
  function pick(d) {
    day = Math.min(Math.max(d, 1), length);
    if (challenge) verdict = null;
  }

  /** @param {KeyboardEvent} e */
  function onKey(e) {
    /** @type {Record<string, number>} */
    const moves = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 7, ArrowUp: -7 };
    let next;
    if (e.key in moves) next = day + moves[e.key];
    else if (e.key === 'Home') next = 1;
    else if (e.key === 'End') next = length;
    else return;
    e.preventDefault();
    pick(next);
    cells[day - 1]?.focus();
  }

  function check() {
    verdict = task.check(day, length)
      ? { tone: 'ok', text: `Đúng! Ngày ${day}: ${PHASES[phase].name.toLowerCase()}.` }
      : {
          tone: 'warn',
          text: `Chưa đúng: ngày ${day} là giai đoạn "${PHASES[phase].name.toLowerCase()}". Xem lại đồ thị hormone và thử ngày khác.`,
        };
  }

  function nextTask() {
    taskIndex = (taskIndex + 1) % TASKS.length;
    length = TASKS[taskIndex].length;
    day = 1;
    verdict = null;
  }

  /** @param {number} v */
  function setLength(v) {
    length = v;
    if (day > v) day = v;
  }

  // Chart: 320 × 150, days along x, relative level along y.
  const X0 = 30;
  const X1 = 310;
  /** @param {number} d */
  const xOf = (d) => X0 + ((d - 1) / (length - 1)) * (X1 - X0);
  /** @param {number} v */
  const yOf = (v) => 110 - v * 90;
  /** @param {'estrogen' | 'progesterone' | 'lining'} k */
  const curve = (k) =>
    days
      .map((d, i) => `${i ? 'L' : 'M'} ${xOf(d)} ${yOf(levels(d, length, useFertilized)[k])}`)
      .join(' ');

  /** @param {PointerEvent} e */
  function chartPick(e) {
    const svg = /** @type {SVGSVGElement} */ (e.currentTarget);
    const box = svg.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width) * 320;
    pick(Math.round(1 + ((x - X0) / (X1 - X0)) * (length - 1)));
  }

  const pct = (/** @type {number} */ v) => `${Math.round(v * 100)}`;
  const tone = $derived(phase === 'lam-to' ? 'ok' : 'info');
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chế độ"
    options={[
      { value: 'kham-pha', label: 'Khám phá' },
      { value: 'thu-thach', label: 'Thử thách' },
    ]}
    value={mode}
    onchange={switchMode}
  />

  {#if challenge}
    <p class="rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-900">
      Chu kì {task.length} ngày. {task.prompt}
    </p>
  {:else}
    <div class="grid gap-3 sm:grid-cols-2">
      <SliderField
        label="Độ dài chu kì"
        value={length}
        min={CYCLE_MIN}
        max={CYCLE_MAX}
        unit="ngày"
        oninput={setLength}
      />
      <label class="flex min-h-11 items-center gap-2 self-end text-sm">
        <input
          type="checkbox"
          class="h-5 w-5 accent-emerald-600 {focusRing}"
          bind:checked={fertilized}
        />
        Trứng rụng được thụ tinh (có thai)
      </label>
    </div>
  {/if}

  <div
    role="radiogroup"
    aria-label="Lịch chu kì kinh nguyệt {length} ngày, chọn một ngày"
    class="grid grid-cols-7 gap-1"
  >
    {#each days as d (d)}
      {@const p = phaseOf(d, length, useFertilized)}
      <button
        bind:this={cells[d - 1]}
        type="button"
        role="radio"
        aria-checked={d === day}
        aria-label={challenge
          ? `Ngày ${d}`
          : `Ngày ${d}: ${PHASES[p].name}${isFertile(d, length) ? ', dễ thụ thai' : ''}`}
        tabindex={d === day ? 0 : -1}
        class="relative flex min-h-11 items-center justify-center rounded-lg text-sm font-semibold tabular-nums {focusRing} {d ===
        day
          ? 'ring-2 ring-slate-900'
          : ''}"
        style="background: {challenge ? '#e2e8f0' : PHASES[p].color + '33'}; color: #0f172a"
        onclick={() => pick(d)}
        onkeydown={onKey}
      >
        {d}
        {#if !challenge && isFertile(d, length)}
          <span class="absolute right-1 top-0.5 text-[10px] text-violet-700" aria-hidden="true"
            >●</span
          >
        {/if}
      </button>
    {/each}
  </div>

  {#if !challenge}
    <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
      {#each Object.entries(PHASES) as [id, ph] (id)}
        {#if id !== 'lam-to' || fertilized}
          <li class="flex items-center gap-1">
            <span class="inline-block h-3 w-3 rounded" style="background: {ph.color}"
            ></span>{ph.name}
          </li>
        {/if}
      {/each}
      <li class="flex items-center gap-1">
        <span class="text-violet-700" aria-hidden="true">●</span> Ngày dễ thụ thai
      </li>
    </ul>
  {/if}

  <svg
    viewBox="0 0 320 150"
    class="block w-full touch-none"
    role="img"
    aria-label="Đồ thị tương đối theo ngày: estrogen {pct(level.estrogen)}%, progesterone {pct(
      level.progesterone,
    )}%, độ dày niêm mạc tử cung {pct(level.lining)}% so với mức cao nhất, ở ngày {day}."
    onpointerdown={chartPick}
  >
    <rect x="0" y="0" width="320" height="150" rx="12" fill="#f8fafc" />
    {#if !challenge}
      <line x1={xOf(ov)} x2={xOf(ov)} y1="16" y2="112" stroke="#7c3aed" stroke-dasharray="3 3" />
      <text x={xOf(ov)} y="12" font-size="9" fill="#5b21b6" text-anchor="middle">trứng rụng</text>
    {/if}
    <line x1={X0} y1="112" x2={X1} y2="112" stroke="#94a3b8" />
    <path d={curve('lining')} stroke="#fb7185" stroke-width="7" opacity="0.35" fill="none" />
    <path d={curve('estrogen')} stroke="#db2777" stroke-width="2.5" fill="none" />
    <path d={curve('progesterone')} stroke="#2563eb" stroke-width="2.5" fill="none" />
    <line x1={xOf(day)} x2={xOf(day)} y1="16" y2="112" stroke="#0f172a" stroke-width="1.5" />
    <circle cx={xOf(day)} cy={yOf(level.estrogen)} r="4" fill="#db2777" />
    <circle cx={xOf(day)} cy={yOf(level.progesterone)} r="4" fill="#2563eb" />
    <g font-size="9" fill="#334155">
      <text x={X0} y="126">ngày 1</text>
      <text x={X1} y="126" text-anchor="end">ngày {length}</text>
      <text x="8" y="142" fill="#be185d">— estrogen</text>
      <text x="92" y="142" fill="#1d4ed8">— progesterone</text>
      <text x="196" y="142" fill="#e11d48">▬ niêm mạc tử cung</text>
    </g>
  </svg>

  {#if challenge}
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={check}>Kiểm tra ngày {day}</button>
      <button type="button" class={button.quiet} onclick={nextTask}>Câu khác</button>
    </div>
    {#if verdict}
      <FeedbackNote tone={verdict.tone} text={verdict.text} />
    {:else}
      <p class="sr-only" aria-live="polite">Đã chọn ngày {day}.</p>
    {/if}
  {:else}
    <dl class="grid gap-2 text-sm sm:grid-cols-3">
      <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
        <dt class="text-slate-600">Buồng trứng</dt>
        <dd class="font-semibold">{info.ovary}</dd>
      </div>
      <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
        <dt class="text-slate-600">Tử cung</dt>
        <dd class="font-semibold">{info.uterus}</dd>
      </div>
      <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
        <dt class="text-slate-600">Hormone</dt>
        <dd class="font-semibold">{info.hormone}</dd>
      </div>
    </dl>
    <FeedbackNote
      {tone}
      text="Ngày {day}/{length}: {PHASES[phase].name}.{isFertile(day, length)
        ? ' Đây là ngày dễ thụ thai.'
        : ''}{phase === 'lam-to'
        ? ' Có thai: thể vàng được duy trì, niêm mạc không bong, chu kì sau không có kinh nguyệt.'
        : ''}"
    />
  {/if}
  <p class="text-xs text-slate-600">
    Mô hình đơn giản hóa, mức hormone chỉ là tương đối. Trứng rụng khoảng 14 ngày trước kì kinh sau;
    chu kì thực của mỗi người có thể dao động.
  </p>
</div>

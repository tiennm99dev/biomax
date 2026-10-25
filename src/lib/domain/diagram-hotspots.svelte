<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { DIAGRAMS, nameChoices, shuffled } from './diagrams.js';

  /**
   * A labelled biology diagram (cell, organ, molecule) with numbered
   * hotspots on its parts. Three modes:
   *
   * - "Tìm hiểu" (`learn`): tap a number, or a name in the list, to read
   *   the part's name and role.
   * - "Gọi tên" (`name`): tap a number and pick its name from four choices.
   * - "Tìm vị trí" (`find`): the prompt names a part; tap its number.
   *
   * Every hotspot is a button reachable with Tab and Enter; feedback is
   * announced in an aria-live region.
   *
   * - `diagram`: a diagram object from `diagrams.js`, or the id of a built-in
   *   one ('te-bao-dong-vat', 'te-bao-thuc-vat', 'phan-tu-nuoc', 'tim-nguoi').
   * - `mode` (bindable): the starting mode. `modes`: the modes offered.
   * - `seed`: fixes the quiz order and the choice order.
   *
   * @type {{
   *   diagram: import('./diagrams.js').Diagram | string;
   *   mode?: 'learn' | 'name' | 'find';
   *   modes?: Array<'learn' | 'name' | 'find'>;
   *   seed?: number;
   *   label?: string;
   *   onsolved?: (partId: string) => void;
   * }}
   */
  let {
    diagram,
    mode = $bindable('learn'),
    modes = ['learn', 'name', 'find'],
    seed = 1,
    label,
    onsolved,
  } = $props();

  const d = $derived(typeof diagram === 'string' ? DIAGRAMS[diagram] : diagram);
  const title = $derived(label ?? d.title);
  const MODE_LABELS = { learn: 'Tìm hiểu', name: 'Gọi tên', find: 'Tìm vị trí' };

  /** @type {string | null} */
  let selected = $state(null);
  /** @type {string[]} */
  let solved = $state([]);
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);
  let round = $state(0);
  const order = $derived(shuffled(d.parts, seed + round));
  const target = $derived(order.find((p) => !solved.includes(p.id)) ?? null);
  const selectedPart = $derived(d.parts.find((p) => p.id === selected) ?? null);
  const choices = $derived(
    selected && mode === 'name'
      ? nameChoices(
          d,
          selected,
          Math.min(4, d.parts.length),
          seed + d.parts.findIndex((p) => p.id === selected),
        )
      : [],
  );
  const done = $derived(mode !== 'learn' && solved.length === d.parts.length);

  function resetQuiz() {
    selected = null;
    solved = [];
    feedback = null;
  }

  /** @param {string} id */
  function solve(id) {
    if (!solved.includes(id)) {
      solved = [...solved, id];
      onsolved?.(id);
    }
  }

  /** @param {import('./diagrams.js').Part} part */
  function tap(part) {
    if (mode === 'learn') {
      selected = selected === part.id ? null : part.id;
      return;
    }
    if (mode === 'name') {
      if (solved.includes(part.id)) {
        selected = null;
        feedback = { ok: true, text: `Số ${number(part.id)} là ${part.name.toLowerCase()}.` };
        return;
      }
      selected = part.id;
      feedback = null;
      return;
    }
    if (!target) return;
    if (part.id === target.id) {
      solve(part.id);
      feedback = { ok: true, text: `Đúng, đó là ${part.name.toLowerCase()}. ${part.info}` };
    } else {
      feedback = {
        ok: false,
        text: `Chưa đúng: số ${number(part.id)} là ${part.name.toLowerCase()}. Hãy tìm ${target.name.toLowerCase()}.`,
      };
    }
  }

  /** @param {string} name */
  function choose(name) {
    const part = selectedPart;
    if (!part) return;
    if (name === part.name) {
      solve(part.id);
      feedback = {
        ok: true,
        text: `Đúng: số ${number(part.id)} là ${part.name.toLowerCase()}. ${part.info}`,
      };
      selected = null;
    } else {
      feedback = {
        ok: false,
        text: `Chưa đúng, số ${number(part.id)} không phải ${name.toLowerCase()}. Thử lại.`,
      };
    }
  }

  function restart() {
    solved = [];
    selected = null;
    feedback = null;
    round++;
  }

  /** @param {string} id */
  const number = (id) => d.parts.findIndex((p) => p.id === id) + 1;

  /** @param {import('./diagrams.js').Part} part */
  function markerFill(part) {
    if (mode !== 'learn' && solved.includes(part.id)) return '#059669';
    if (selected === part.id) return '#4f46e5';
    return '#0f172a';
  }

  /** @param {import('./diagrams.js').Part} part */
  function markerLabel(part) {
    const n = number(part.id);
    if (mode === 'learn') return `Số ${n}: ${part.name}`;
    if (solved.includes(part.id)) return `Số ${n}: ${part.name}, đã xong`;
    return `Số ${n}`;
  }

  /** @param {import('./diagrams.js').Shape} s */
  const paint = (s) => ({
    fill: s.fill ?? 'none',
    stroke: s.stroke ?? 'none',
    'stroke-width': s.width ?? 1,
    'stroke-dasharray': s.dash,
    opacity: s.opacity,
  });
</script>

<figure class="space-y-4" aria-label={title}>
  {#if modes.length > 1}
    <SegmentedControl
      label="Chế độ"
      options={modes.map((m) => ({ value: m, label: MODE_LABELS[m] }))}
      bind:value={mode}
      onchange={resetQuiz}
    />
  {/if}

  <svg
    viewBox="0 0 {d.width} {d.height}"
    class="mx-auto block w-full max-w-xl"
    role="group"
    aria-label={title}
  >
    {#each d.shapes as s, i (i)}
      {#if s.kind === 'circle'}
        <circle cx={s.cx} cy={s.cy} r={s.r} {...paint(s)} />
      {:else if s.kind === 'ellipse'}
        <ellipse
          cx={s.cx}
          cy={s.cy}
          rx={s.rx}
          ry={s.ry}
          transform={s.rotate ? `rotate(${s.rotate} ${s.cx} ${s.cy})` : undefined}
          {...paint(s)}
        />
      {:else if s.kind === 'rect'}
        <rect x={s.x} y={s.y} width={s.w} height={s.h} rx={s.rx} {...paint(s)} />
      {:else if s.kind === 'path'}
        <path d={s.d} stroke-linecap="round" {...paint(s)} />
      {:else if s.kind === 'line'}
        <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke-linecap="round" {...paint(s)} />
      {:else if s.kind === 'text'}
        <text
          x={s.x}
          y={s.y}
          font-size={s.size ?? 14}
          font-weight="700"
          text-anchor="middle"
          fill={s.fill ?? '#0f172a'}
          aria-hidden="true">{s.text}</text
        >
      {/if}
    {/each}
    {#each d.parts as part, i (part.id)}
      <g
        role="button"
        tabindex="0"
        aria-label={markerLabel(part)}
        aria-pressed={selected === part.id}
        class="group cursor-pointer outline-none"
        onclick={() => tap(part)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            tap(part);
          }
        }}
      >
        <circle cx={part.x} cy={part.y} r="18" fill="transparent" />
        <circle
          cx={part.x}
          cy={part.y}
          r="15"
          fill="none"
          stroke="#6366f1"
          stroke-width="3"
          class="opacity-0 group-focus-visible:opacity-100"
        />
        <circle
          cx={part.x}
          cy={part.y}
          r="11"
          fill={markerFill(part)}
          stroke="#ffffff"
          stroke-width="2"
        />
        <text
          x={part.x}
          y={part.y + 4}
          font-size="11"
          font-weight="700"
          text-anchor="middle"
          fill="#ffffff">{mode !== 'learn' && solved.includes(part.id) ? '✓' : i + 1}</text
        >
      </g>
    {/each}
  </svg>

  <div class="space-y-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
    {#if mode === 'learn'}
      {#if selectedPart}
        <p><strong>{number(selectedPart.id)}. {selectedPart.name}</strong> — {selectedPart.info}</p>
      {:else}
        <p>
          Chạm vào một số trên hình hoặc một tên bên dưới để xem tên và chức năng của bộ phận đó.
        </p>
      {/if}
    {:else}
      <p class="font-semibold">
        Đã xong {solved.length}/{d.parts.length}.
        {#if mode === 'find' && target}
          Hãy chạm vào: <span class="text-indigo-800">{target.name}</span>.
        {:else if mode === 'name' && !done && !selectedPart}
          Chạm vào một số chưa có dấu ✓ rồi chọn tên của nó.
        {/if}
      </p>
      {#if feedback}
        <p class={feedback.ok ? 'text-emerald-800' : 'text-amber-800'}>{feedback.text}</p>
      {/if}
      {#if mode === 'name' && selectedPart}
        <p>Số {number(selectedPart.id)} là:</p>
        <div class="flex flex-wrap gap-2">
          {#each choices as name (name)}
            <button
              type="button"
              class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 {focusRing}"
              onclick={() => choose(name)}>{name}</button
            >
          {/each}
        </div>
      {/if}
      {#if done}
        <p class="font-semibold text-emerald-800">
          Hoàn thành: em đã nhận ra mọi bộ phận của hình.
        </p>
      {/if}
      <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
    {/if}
  </div>

  {#if mode === 'learn'}
    <ol class="grid gap-1 text-sm sm:grid-cols-2">
      {#each d.parts as part, i (part.id)}
        <li>
          <button
            type="button"
            class="flex min-h-11 w-full items-center gap-2 rounded-lg px-2 text-left hover:bg-slate-100 {selected ===
            part.id
              ? 'bg-indigo-50 font-semibold text-indigo-900'
              : 'text-slate-700'} {focusRing}"
            aria-pressed={selected === part.id}
            onclick={() => tap(part)}
          >
            <span
              class="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
              >{i + 1}</span
            >
            {part.name}
          </button>
        </li>
      {/each}
    </ol>
  {/if}
</figure>

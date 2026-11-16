<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import {
    EVENT_NAMES,
    MODE_NAMES,
    PARENT,
    outcome,
    phenotype,
    phenotypeText,
    verdict,
  } from './engine.js';

  /** @typedef {import('./engine.js').Mode} Mode */
  /** @typedef {import('./engine.js').Event} Event */

  /** @type {Mode[]} */
  const MODES = ['vo-tinh', 'huu-tinh'];

  /** @type {Event} */
  let event = $state('on-dinh');
  /** @type {{ mode: Mode, i: number } | null} */
  let picked = $state(null);

  const results = $derived({
    'vo-tinh': outcome('vo-tinh', event),
    'huu-tinh': outcome('huu-tinh', event),
  });
  const pickedText = $derived.by(() => {
    if (!picked) return 'Chạm vào một cây con để xem kiểu gene của nó.';
    const r = results[picked.mode];
    const g = r.born[picked.i];
    if (!g) return 'Chạm vào một cây con để xem kiểu gene của nó.';
    return `${MODE_NAMES[picked.mode]}, cây số ${picked.i + 1}: kiểu gene ${g}, ${phenotypeText(g)}${r.alive[picked.i] ? '' : ', bị chết'}.`;
  });

  const eventOptions = /** @type {Event[]} */ (Object.keys(EVENT_NAMES)).map((v) => ({
    value: v,
    label: EVENT_NAMES[v],
  }));
</script>

<div class="space-y-3">
  <p class="text-sm text-slate-700">
    Cây mẹ có kiểu gene <strong>{PARENT}</strong> (lá xanh đậm, thân cao). Mỗi hình thức sinh sản
    tạo 16 cây con; sinh sản hữu tính ghép cây mẹ với một cây {PARENT} khác.
  </p>

  <SegmentedControl
    label="Điều kiện sống của thế hệ con"
    options={eventOptions}
    bind:value={event}
    onchange={() => (picked = null)}
  />

  <div class="grid gap-3 sm:grid-cols-2">
    {#each MODES as mode (mode)}
      {@const r = results[mode]}
      <figure class="rounded-xl bg-slate-50 p-2">
        <figcaption class="mb-1 text-sm font-semibold">
          {MODE_NAMES[mode]}: {r.survivors}/{r.born.length} cây sống
        </figcaption>
        {#if r.born.length === 0}
          <p class="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
            Không có cây con: thiếu giao tử của cá thể thứ hai.
          </p>
        {:else}
          <div class="grid grid-cols-4 gap-1">
            {#each r.born as g, i (i)}
              {@const p = phenotype(g)}
              {@const dead = !r.alive[i]}
              <button
                type="button"
                class="rounded-lg border p-0.5 {picked?.mode === mode && picked.i === i
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-slate-200 bg-white'} {focusRing}"
                aria-label="Cây con số {i + 1}, kiểu gene {g}, {phenotypeText(g)}{dead
                  ? ', bị chết'
                  : ''}"
                aria-pressed={picked?.mode === mode && picked.i === i}
                onclick={() => (picked = { mode, i })}
              >
                <svg viewBox="0 0 40 44" class="block w-full" aria-hidden="true">
                  <rect x="0" y="38" width="40" height="6" fill="#d6b88a" />
                  <g opacity={dead ? 0.3 : 1}>
                    <line
                      x1="20"
                      y1="38"
                      x2="20"
                      y2={p.tall ? 8 : 22}
                      stroke="#3f6212"
                      stroke-width="2.5"
                    />
                    <ellipse
                      cx="13"
                      cy={p.tall ? 18 : 28}
                      rx="7"
                      ry="4"
                      fill={p.green ? '#15803d' : '#facc15'}
                    />
                    <ellipse
                      cx="27"
                      cy={p.tall ? 14 : 25}
                      rx="7"
                      ry="4"
                      fill={p.green ? '#15803d' : '#facc15'}
                    />
                  </g>
                  {#if dead}
                    <path d="M 8 8 L 32 36 M 32 8 L 8 36" stroke="#b91c1c" stroke-width="3" />
                  {/if}
                </svg>
                <span class="block text-center text-[10px] leading-tight text-slate-600">{g}</span>
              </button>
            {/each}
          </div>
        {/if}
      </figure>
    {/each}
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr class="text-left">
          <th class="p-1">Tiêu chí</th>
          {#each MODES as mode (mode)}
            <th class="p-1">{MODE_NAMES[mode]}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-1">Số cây con</td>
          {#each MODES as mode (mode)}
            <td class="p-1 tabular-nums">{results[mode].born.length}</td>
          {/each}
        </tr>
        <tr>
          <td class="p-1">Số kiểu gene</td>
          {#each MODES as mode (mode)}
            <td class="p-1 tabular-nums">{results[mode].genotypes}</td>
          {/each}
        </tr>
        <tr>
          <td class="p-1">Số kiểu hình</td>
          {#each MODES as mode (mode)}
            <td class="p-1 tabular-nums">{results[mode].phenotypes}</td>
          {/each}
        </tr>
        <tr>
          <td class="p-1">Số cây sống sót</td>
          {#each MODES as mode (mode)}
            <td class="p-1 tabular-nums">{results[mode].survivors}</td>
          {/each}
        </tr>
      </tbody>
    </table>
  </div>

  <p class="rounded-lg bg-white px-3 py-2 text-sm" aria-live="polite">{pickedText}</p>
  <FeedbackNote tone={event === 'on-dinh' ? 'info' : 'ok'} text={verdict(event)} />
</div>

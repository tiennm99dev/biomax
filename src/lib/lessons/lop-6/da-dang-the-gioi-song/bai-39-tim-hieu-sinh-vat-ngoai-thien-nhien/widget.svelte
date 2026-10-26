<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { FIELD_SET, FINDS, STATIONS, findsAt, keyTable, nameOf, readKey } from './engine.js';

  const table = keyTable(FIELD_SET);

  let station = $state(STATIONS[0].id);
  /** @type {string | null} */
  let current = $state(null);
  let row = $state(1);
  /** @type {string[]} */
  let identified = $state([]);
  let message = $state('Chọn một điểm trên bản đồ dã ngoại để bắt đầu quan sát.');

  const here = $derived(findsAt(station));
  const find = $derived(FINDS.find((f) => f.organism === current) ?? null);
  const done = $derived(current !== null && identified.includes(current));
  const stationName = (/** @type {string} */ id) => STATIONS.find((s) => s.id === id)?.name ?? id;

  /** @param {string} id */
  function goTo(id) {
    station = id;
    current = null;
    row = 1;
    const n = findsAt(id).length;
    message = `Đã đến ${stationName(id).toLowerCase()}: có ${n} sinh vật để quan sát. Chọn một sinh vật.`;
  }

  /** @param {string} organism */
  function observe(organism) {
    current = organism;
    row = 1;
    message = identified.includes(organism)
      ? `Sinh vật này đã được định danh: ${nameOf(FIELD_SET, organism)}.`
      : 'Đọc ghi chép, rồi chọn ý đúng của cặp 1 trong khóa lưỡng phân.';
  }

  /** @param {boolean} answer */
  function choose(answer) {
    if (!current) return;
    const r = readKey(current, row, answer);
    message = r.text;
    if (!r.ok) return;
    if (r.found) {
      const f = FINDS.find((x) => x.organism === r.found);
      if (!identified.includes(r.found)) identified = [...identified, r.found];
      message += ` Đã định danh: ${nameOf(FIELD_SET, r.found)}. Vai trò: ${f?.role ?? ''} (${identified.length}/${FINDS.length} sinh vật)`;
      if (identified.length === FINDS.length)
        message += ' Hoàn thành chuyến dã ngoại: em đã định danh tất cả sinh vật!';
    } else if (r.next) row = r.next;
  }

  /** @param {string} organism */
  const label = (organism) => {
    const i = here.findIndex((f) => f.organism === organism) + 1;
    return identified.includes(organism) ? nameOf(FIELD_SET, organism) : `Sinh vật ${i}`;
  };
</script>

<div class="space-y-4">
  <div
    class="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50"
  >
    <svg viewBox="0 0 400 300" class="absolute inset-0 h-full w-full" aria-hidden="true">
      <ellipse cx="300" cy="66" rx="70" ry="38" fill="#bae6fd" />
      <rect x="40" y="56" width="70" height="40" rx="18" fill="#fbcfe8" />
      <circle cx="312" cy="222" r="34" fill="#86efac" />
      <rect x="306" y="222" width="12" height="34" fill="#a16207" />
      <rect x="40" y="210" width="110" height="60" rx="12" fill="#bbf7d0" />
      <path
        d="M72 84 C 160 40, 230 40, 296 66 S 330 200, 312 222 S 150 260, 96 228 S 40 140, 72 84"
        fill="none"
        stroke="#d6a76a"
        stroke-width="8"
        stroke-dasharray="14 8"
      />
    </svg>
    {#each STATIONS as s, i (s.id)}
      {@const all = findsAt(s.id).every((f) => identified.includes(f.organism))}
      <button
        type="button"
        class="absolute flex min-h-11 -translate-x-1/2 whitespace-nowrap -translate-y-1/2 items-center gap-1 rounded-full border-2 px-3 py-1 text-sm font-bold shadow {focusRing} {station ===
        s.id
          ? 'border-indigo-600 bg-indigo-600 text-white'
          : 'border-emerald-600 bg-white text-emerald-900 hover:bg-emerald-100'}"
        style="left: {s.x}%; top: {s.y}%"
        aria-pressed={station === s.id}
        aria-label="Điểm {i + 1}: {s.name}{all ? ', đã định danh hết' : ''}"
        onclick={() => goTo(s.id)}
      >
        {i + 1}. {s.name}
        {#if all}<span aria-hidden="true">✓</span>{/if}
      </button>
    {/each}
  </div>

  <div role="group" aria-label="Sinh vật ở {stationName(station)}">
    <p class="mb-1 text-sm font-semibold text-slate-700">
      Sinh vật ở {stationName(station).toLowerCase()} (đã định danh {identified.length}/{FINDS.length})
    </p>
    <div class="flex flex-wrap gap-2">
      {#each here as f (f.organism)}
        <button
          type="button"
          class="min-h-11 rounded-lg border px-3 py-2 text-sm font-medium {focusRing} {current ===
          f.organism
            ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
          aria-pressed={current === f.organism}
          onclick={() => observe(f.organism)}
        >
          {#if identified.includes(f.organism)}<span aria-hidden="true">✓</span>{/if}
          {label(f.organism)}
        </button>
      {/each}
    </div>
  </div>

  {#if find}
    <div class="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm">
      <p class="font-bold text-amber-950">
        Ghi chép ({find.tool}){done ? `: ${nameOf(FIELD_SET, find.organism)}` : ''}
      </p>
      <p class="mt-1 text-amber-950">{find.note}</p>
      {#if done}<p class="mt-1 text-emerald-900"><strong>Vai trò:</strong> {find.role}</p>{/if}
    </div>

    <ol class="space-y-2" aria-label="Khóa lưỡng phân sinh vật vườn trường">
      {#each table as r (r.n)}
        {@const active = !done && r.n === row}
        <li
          class="rounded-xl border p-2 text-sm {active
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-slate-200 bg-white text-slate-600'}"
        >
          {#if active}
            <p class="mb-2 font-semibold text-indigo-900">Cặp {r.n}: chọn ý đúng với ghi chép</p>
            <div class="grid gap-2 sm:grid-cols-2">
              {#each [true, false] as ans (ans)}
                {@const to = ans ? r.yes : r.no}
                <button
                  type="button"
                  class="min-h-11 rounded-lg border border-indigo-300 bg-white px-3 py-2 text-left hover:bg-indigo-100 {focusRing}"
                  onclick={() => choose(ans)}
                >
                  <strong>{r.n}{ans ? 'a' : 'b'}.</strong>
                  {ans ? r.trait.yes : r.trait.no} → {to.organism
                    ? nameOf(FIELD_SET, to.organism)
                    : `đi đến ${to.step}`}
                </button>
              {/each}
            </div>
          {:else}
            <p>
              <strong>{r.n}a.</strong>
              {r.trait.yes} → {r.yes.organism
                ? nameOf(FIELD_SET, r.yes.organism)
                : `đi đến ${r.yes.step}`}
            </p>
            <p>
              <strong>{r.n}b.</strong>
              {r.trait.no} → {r.no.organism
                ? nameOf(FIELD_SET, r.no.organism)
                : `đi đến ${r.no.step}`}
            </p>
          {/if}
        </li>
      {/each}
    </ol>
  {/if}

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {done
      ? 'bg-emerald-50 font-semibold text-emerald-900'
      : 'bg-slate-100 text-slate-800'}"
    aria-live="polite"
  >
    {message}
  </p>

  <button
    type="button"
    class={button.quiet}
    disabled={identified.length === 0}
    onclick={() => {
      identified = [];
      current = null;
      row = 1;
      message = 'Đã xóa bộ sưu tập. Chọn một điểm trên bản đồ để bắt đầu lại.';
    }}>Làm lại chuyến đi</button
  >
</div>

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    SETS,
    buildKey,
    describe,
    hasTrait,
    keyTable,
    nameOf,
    setById,
    split,
  } from './engine.js';

  let mode = $state(/** @type {'use' | 'build'} */ ('use'));
  let setId = $state(SETS[0].id);
  const set = $derived(setById(setId));
  const table = $derived(keyTable(set));

  // Identify a mystery organism with the ready-made key.
  let mysteryIndex = $state(0);
  let row = $state(1);
  /** @type {string | null} */
  let found = $state(null);
  let useMessage = $state('Đọc đặc điểm của sinh vật bí ẩn, rồi chọn một trong hai ý của cặp 1.');
  const mystery = $derived(set.organisms[mysteryIndex % set.organisms.length].id);
  const current = $derived(table[row - 1]);

  function resetUse() {
    row = 1;
    found = null;
    useMessage = 'Đọc đặc điểm của sinh vật bí ẩn, rồi chọn một trong hai ý của cặp 1.';
  }

  function nextMystery() {
    mysteryIndex = (mysteryIndex + 1) % set.organisms.length;
    resetUse();
  }

  /** @param {boolean} answer */
  function choose(answer) {
    const truth = hasTrait(set, mystery, current.trait.id);
    const picked = answer ? current.trait.yes : current.trait.no;
    if (answer !== truth) {
      useMessage = `Chưa đúng: ý "${picked}" không khớp với sinh vật bí ẩn. Đọc lại bảng đặc điểm rồi chọn ý còn lại.`;
      return;
    }
    const next = answer ? current.yes : current.no;
    if (next.organism) {
      found = next.organism;
      useMessage = `Đúng. ${row}${answer ? 'a' : 'b'}: ${picked} → ${nameOf(set, next.organism)}. Em đã xác định được sinh vật bí ẩn là ${nameOf(set, next.organism).toLowerCase()}.`;
    } else if (next.step) {
      useMessage = `Đúng. ${row}${answer ? 'a' : 'b'}: ${picked} → đi đến cặp ${next.step}.`;
      row = next.step;
    }
  }

  // Build a new key by choosing traits.
  /** @type {string[]} */
  let chosen = $state([]);
  let buildMessage = $state(
    'Chọn một cặp đặc điểm đối lập để chia cả nhóm thành hai nhóm nhỏ hơn.',
  );
  const built = $derived(buildKey(set, chosen));

  /** @param {string} traitId */
  function pickTrait(traitId) {
    if (!built.open) return;
    const s = split(set, built.open, traitId);
    const t = set.traits.find((x) => x.id === traitId);
    if (!t) return;
    if (!s.valid) {
      const all = s.yes.length ? t.yes : t.no;
      buildMessage = `Không chia được: cả nhóm đều "${all.toLowerCase()}". Hãy chọn đặc điểm mà chỉ một phần của nhóm có.`;
      return;
    }
    chosen = [...chosen, traitId];
    const names = (/** @type {string[]} */ ids) => ids.map((id) => nameOf(set, id)).join(', ');
    const after = buildKey(set, chosen);
    buildMessage = `Đã chia: "${t.yes}" gồm ${names(s.yes)}; "${t.no}" gồm ${names(s.no)}. ${after.done ? `Hoàn thành khóa với ${after.steps.length} cặp đặc điểm cho ${set.organisms.length} sinh vật: mỗi nhóm chỉ còn một sinh vật.` : `Tiếp tục chia nhóm: ${names(after.open ?? [])}.`}`;
  }

  function undo() {
    chosen = chosen.slice(0, -1);
    buildMessage = 'Đã bỏ bước chia cuối cùng.';
  }

  /** @param {string} id */
  function changeSet(id) {
    setId = id;
    mysteryIndex = 0;
    chosen = [];
    resetUse();
    buildMessage = 'Chọn một cặp đặc điểm đối lập để chia cả nhóm thành hai nhóm nhỏ hơn.';
  }

  /** @param {import('./engine.js').Group} g */
  const groupText = (g) =>
    g.members.length === 1
      ? nameOf(set, g.members[0])
      : g.step
        ? `đi đến ${g.step}`
        : `(${g.members.map((id) => nameOf(set, id)).join(', ')})`;
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-4">
    <SegmentedControl
      label="Chế độ"
      options={[
        { value: 'use', label: 'Dùng khóa' },
        { value: 'build', label: 'Tự dựng khóa' },
      ]}
      bind:value={mode}
    />
    <SegmentedControl
      label="Nhóm sinh vật"
      options={SETS.map((s) => ({ value: s.id, label: s.label }))}
      value={setId}
      onchange={(v) => changeSet(String(v))}
    />
  </div>

  {#if mode === 'use'}
    <div class="rounded-xl border border-amber-300 bg-amber-50 p-3">
      <p class="mb-1 text-sm font-bold text-amber-900">
        {found ? `Sinh vật bí ẩn: ${nameOf(set, found)}` : 'Sinh vật bí ẩn'}
      </p>
      <ul class="grid gap-x-4 text-sm text-amber-950 sm:grid-cols-2">
        {#each describe(set, mystery) as f (f)}<li>• {f}</li>{/each}
      </ul>
    </div>

    <ol class="space-y-2" aria-label="Khóa lưỡng phân">
      {#each table as r (r.n)}
        {@const active = !found && r.n === row}
        <li
          class="rounded-xl border p-2 text-sm {active
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-slate-200 bg-white text-slate-600'}"
        >
          {#if active}
            <p class="mb-2 font-semibold text-indigo-900">
              Cặp {r.n}: chọn ý đúng với sinh vật bí ẩn
            </p>
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
                    ? nameOf(set, to.organism)
                    : `đi đến ${to.step}`}
                </button>
              {/each}
            </div>
          {:else}
            <p>
              <strong>{r.n}a.</strong>
              {r.trait.yes} → {r.yes.organism
                ? nameOf(set, r.yes.organism)
                : `đi đến ${r.yes.step}`}
            </p>
            <p>
              <strong>{r.n}b.</strong>
              {r.trait.no} → {r.no.organism ? nameOf(set, r.no.organism) : `đi đến ${r.no.step}`}
            </p>
          {/if}
        </li>
      {/each}
    </ol>

    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.quiet} onclick={resetUse}>Làm lại</button>
      <button type="button" class={button.secondary} onclick={nextMystery}
        >Sinh vật bí ẩn khác</button
      >
    </div>
    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {found
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : 'bg-slate-100 text-slate-800'}"
      aria-live="polite"
    >
      {useMessage}
    </p>
  {:else}
    <div>
      <p class="mb-1 text-sm font-semibold text-slate-700">
        {built.done ? 'Khóa đã hoàn thành' : 'Nhóm đang chia:'}
      </p>
      {#if built.open}
        <ul class="flex flex-wrap gap-2">
          {#each built.open as id (id)}
            <li class="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-950">
              {nameOf(set, id)}
            </li>
          {/each}
        </ul>
      {/if}
    </div>

    {#if !built.done}
      <div class="grid gap-2 sm:grid-cols-2" role="group" aria-label="Chọn cặp đặc điểm đối lập">
        {#each set.traits as t (t.id)}
          <button
            type="button"
            class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm hover:bg-slate-100 {focusRing}"
            onclick={() => pickTrait(t.id)}
          >
            {t.yes} / {t.no.charAt(0).toLowerCase() + t.no.slice(1)}
          </button>
        {/each}
      </div>
    {/if}

    {#if built.steps.length}
      <ol
        class="space-y-1 rounded-xl border border-slate-200 bg-white p-3 text-sm"
        aria-label="Khóa em đang dựng"
      >
        {#each built.steps as s (s.n)}
          <li>
            <p><strong>{s.n}a.</strong> {s.trait.yes} → {groupText(s.yes)}</p>
            <p><strong>{s.n}b.</strong> {s.trait.no} → {groupText(s.no)}</p>
          </li>
        {/each}
      </ol>
    {/if}

    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.quiet} disabled={!chosen.length} onclick={undo}
        >Bỏ bước cuối</button
      >
      <button
        type="button"
        class={button.quiet}
        disabled={!chosen.length}
        onclick={() => {
          chosen = [];
          buildMessage = 'Đã xóa khóa. Chọn cặp đặc điểm đầu tiên.';
        }}>Dựng lại</button
      >
    </div>
    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {built.done
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : 'bg-slate-100 text-slate-800'}"
      aria-live="polite"
    >
      {buildMessage}
    </p>
  {/if}
</div>

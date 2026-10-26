<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { BRANCHES, animalById, groupById, groupsOf } from '../_shared/animal-groups.js';
  import { QUIZ, checkBranch, checkGroup } from './engine.js';

  let mode = $state(/** @type {'tree' | 'quiz'} */ ('tree'));

  // Tree: which branches are open, and which group is shown in detail.
  /** @type {string[]} */
  let open = $state([]);
  /** @type {import('./engine.js').GroupId | null} */
  let shown = $state(null);
  /** @type {string[]} */
  let seen = $state([]);
  let treeMessage = $state('Bấm vào một nhánh để mở các nhóm động vật bên trong.');

  /** @param {import('./engine.js').BranchId} id */
  function toggleBranch(id) {
    const b = BRANCHES.find((x) => x.id === id);
    if (open.includes(id)) {
      open = open.filter((x) => x !== id);
      if (shown && groupById(shown).branch === id) shown = null;
      treeMessage = `Đã thu gọn nhánh ${b?.name.toLowerCase()}.`;
    } else {
      open = [...open, id];
      treeMessage = `${b?.name}: ${b?.feature} Gồm ${groupsOf(id).length} nhóm: ${groupsOf(id)
        .map((g) => g.name)
        .join(', ')}.`;
    }
  }

  /** @param {import('./engine.js').GroupId} id */
  function showGroup(id) {
    shown = shown === id ? null : id;
    if (shown && !seen.includes(id)) seen = [...seen, id];
    const g = groupById(id);
    treeMessage = shown
      ? `Nhóm ${g.name}: ${g.features} Đã xem ${seen.length}/9 nhóm.`
      : `Đã đóng nhóm ${g.name}.`;
  }

  const detail = $derived(shown ? groupById(shown) : null);

  // Quiz: file an animal by backbone, then by group.
  let qi = $state(0);
  /** @type {import('./engine.js').BranchId | null} */
  let branchDone = $state(null);
  let solved = $state(false);
  let score = $state(0);
  let firstTry = $state(true);
  let quizMessage = $state('Bước 1: con vật này có xương sống hay không?');
  const animal = $derived(animalById(QUIZ[qi]));

  /** @param {import('./engine.js').BranchId} id */
  function pickBranch(id) {
    const r = checkBranch(animal.id, id);
    quizMessage = r.text;
    if (r.ok) branchDone = id;
    else firstTry = false;
  }

  /** @param {import('./engine.js').GroupId} id */
  function pickGroup(id) {
    const r = checkGroup(animal.id, id);
    quizMessage = r.text;
    if (r.ok) {
      solved = true;
      if (firstTry) score += 1;
    } else firstTry = false;
  }

  function nextAnimal() {
    qi = (qi + 1) % QUIZ.length;
    if (qi === 0) score = 0;
    branchDone = null;
    solved = false;
    firstTry = true;
    quizMessage = 'Bước 1: con vật này có xương sống hay không?';
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chế độ"
    options={[
      { value: 'tree', label: 'Cây phân loại' },
      { value: 'quiz', label: 'Tìm nhóm cho con vật' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'tree'}
    <div class="rounded-xl border border-slate-200 bg-white p-3">
      <p class="rounded-lg bg-indigo-600 px-3 py-2 text-center font-bold text-white">
        Giới Động vật
      </p>
      <ul class="mt-3 grid gap-3 sm:grid-cols-2">
        {#each BRANCHES as b (b.id)}
          {@const isOpen = open.includes(b.id)}
          <li class="border-l-4 border-indigo-200 pl-2">
            <button
              type="button"
              class="flex min-h-11 w-full items-center justify-between rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-2 text-left text-sm font-bold text-indigo-900 hover:bg-indigo-100 {focusRing}"
              aria-expanded={isOpen}
              onclick={() => toggleBranch(b.id)}
            >
              {b.name}
              <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {#if isOpen}
              <ul class="mt-2 space-y-1 border-l-2 border-slate-200 pl-3">
                {#each groupsOf(b.id) as g (g.id)}
                  <li>
                    <button
                      type="button"
                      class="min-h-11 w-full rounded-lg border px-3 py-2 text-left text-sm font-semibold {focusRing} {shown ===
                      g.id
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
                      aria-expanded={shown === g.id}
                      onclick={() => showGroup(g.id)}
                    >
                      {g.name}
                      {#if seen.includes(g.id)}<span class="text-emerald-700" aria-label="đã xem"
                          >✓</span
                        >{/if}
                    </button>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </div>

    {#if detail}
      <article class="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-sm">
        <h3 class="font-bold text-emerald-900">Nhóm {detail.name}</h3>
        <p class="mt-1 text-slate-800"><strong>Đặc điểm:</strong> {detail.features}</p>
        <p class="text-slate-800"><strong>Nơi sống:</strong> {detail.lives}</p>
        <p class="mt-1 font-semibold text-slate-800">Đại diện:</p>
        <ul class="mt-1 flex flex-wrap gap-2">
          {#each detail.examples as e (e)}
            <li class="rounded-full bg-white px-3 py-1 text-slate-800 shadow-sm">{e}</li>
          {/each}
        </ul>
      </article>
    {/if}

    <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
      {treeMessage}
    </p>
  {:else}
    <div class="rounded-xl border border-amber-300 bg-amber-50 p-3">
      <p class="text-sm font-semibold text-amber-900">
        Con vật {qi + 1}/{QUIZ.length} · đúng ngay lần đầu: {score}
      </p>
      <p class="mt-1 text-lg font-bold text-slate-900">{animal.name}</p>
    </div>

    <div role="group" aria-label="Bước 1: chọn nhánh">
      <p class="mb-1 text-sm font-semibold text-slate-700">Bước 1: xương sống</p>
      <div class="grid gap-2 sm:grid-cols-2">
        {#each BRANCHES as b (b.id)}
          <button
            type="button"
            class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm font-semibold {focusRing} {branchDone ===
            b.id
              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            disabled={branchDone !== null}
            onclick={() => pickBranch(b.id)}>{b.name}</button
          >
        {/each}
      </div>
    </div>

    {#if branchDone}
      <div role="group" aria-label="Bước 2: chọn nhóm">
        <p class="mb-1 text-sm font-semibold text-slate-700">Bước 2: nhóm</p>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {#each groupsOf(branchDone) as g (g.id)}
            <button
              type="button"
              class="min-h-11 rounded-lg border px-3 py-2 text-sm font-semibold {focusRing} {solved &&
              animal.group === g.id
                ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
              disabled={solved}
              onclick={() => pickGroup(g.id)}>{g.name}</button
            >
          {/each}
        </div>
      </div>
    {/if}

    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {solved
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : 'bg-slate-100 text-slate-800'}"
      aria-live="polite"
    >
      {quizMessage}
    </p>
    <button type="button" class={button.secondary} onclick={nextAnimal}>Con vật tiếp theo</button>
  {/if}
</div>

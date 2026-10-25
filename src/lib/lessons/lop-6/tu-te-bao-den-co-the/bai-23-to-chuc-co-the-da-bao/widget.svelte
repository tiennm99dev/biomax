<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { BODIES, LEVELS, chainText, nodesAlong, quizItems } from './engine.js';

  let bodyId = $state(/** @type {import('./engine.js').BodyId} */ ('thuc-vat'));
  let mode = $state(/** @type {'explore' | 'quiz'} */ ('explore'));
  /** @type {string[]} */
  let path = $state([]);

  const root = $derived(BODIES[bodyId]);
  const nodes = $derived(nodesAlong(root, path));
  const deepest = $derived(nodes[nodes.length - 1]);

  /**
   * Opens a node at level `level` (1 to 4), keeping the path above it.
   * @param {number} level @param {string} id
   */
  function open(level, id) {
    path = [...path.slice(0, level - 1), id];
  }

  /** @param {number} level */
  function closeTo(level) {
    path = path.slice(0, level);
  }

  const exploreText = $derived.by(() => {
    const lvl = nodes.length - 1;
    const head = `${LEVELS[lvl]}: ${deepest.name}. ${deepest.info}`;
    if (lvl === LEVELS.length - 1) return `${head} Từ tế bào đi ngược lên: ${chainText(nodes)}.`;
    return `${head} Bấm một ${LEVELS[lvl + 1].toLowerCase()} ở tầng dưới để mở tiếp.`;
  });

  // Quiz: name the level of a part.
  let quizIndex = $state(0);
  let score = $state(0);
  let tries = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);
  const items = $derived(quizItems(root, bodyId === 'nguoi' ? 7 : 3));
  const item = $derived(items[quizIndex % items.length]);

  /** @param {number} level */
  function answer(level) {
    if (feedback?.ok) return;
    tries += 1;
    const ok = level === item.level;
    if (ok && !feedback) score += 1;
    const chain = chainText(item.chain);
    feedback = ok
      ? { ok, text: `Đúng: ${item.node.name} là ${LEVELS[item.level].toLowerCase()}. ${chain}.` }
      : {
          ok,
          text: `Chưa đúng: ${item.node.name} không phải ${LEVELS[level].toLowerCase()}. Gợi ý: ${hint(item.level)}`,
        };
  }

  /** @param {number} level */
  function hint(level) {
    return [
      '',
      'nó gồm nhiều cơ quan cùng thực hiện một chức năng.',
      'nó gồm nhiều mô cùng thực hiện một hoạt động sống.',
      'nó là tập hợp nhiều tế bào giống nhau cùng thực hiện một chức năng.',
      'nó là đơn vị nhỏ nhất, không chia thành các phần sống nhỏ hơn.',
    ][level];
  }

  function next() {
    quizIndex += 1;
    feedback = null;
  }

  function switchBody() {
    path = [];
    quizIndex = 0;
    score = 0;
    tries = 0;
    feedback = null;
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl
      label="Cơ thể"
      options={[
        { value: 'thuc-vat', label: 'Cây xanh' },
        { value: 'nguoi', label: 'Cơ thể người' },
      ]}
      bind:value={bodyId}
      onchange={switchBody}
    />
    <SegmentedControl
      label="Chế độ"
      options={[
        { value: 'explore', label: 'Mở từng tầng' },
        { value: 'quiz', label: 'Đố cấp độ' },
      ]}
      bind:value={mode}
    />
  </div>

  {#if mode === 'explore'}
    <ol class="space-y-2" aria-label="Các cấp độ tổ chức của {root.name.toLowerCase()}">
      {#each LEVELS as levelName, lvl (levelName)}
        {@const parent = lvl === 0 ? null : nodes[lvl - 1]}
        {@const chosen = nodes[lvl]}
        <li
          class="rounded-xl border p-2 {chosen
            ? 'border-indigo-300 bg-indigo-50/60'
            : 'border-slate-200 bg-white'}"
        >
          <p class="mb-1 text-xs font-bold tracking-wide text-slate-500 uppercase">
            Tầng {lvl + 1}: {levelName}
          </p>
          {#if lvl === 0}
            <button
              type="button"
              class="min-h-11 rounded-lg border px-3 text-sm font-semibold {focusRing} {path.length ===
              0
                ? 'border-indigo-600 bg-white text-indigo-900'
                : 'border-slate-300 bg-white text-slate-700'}"
              aria-pressed={path.length === 0}
              onclick={() => closeTo(0)}>{root.name}</button
            >
          {:else if parent && parent.children}
            <div class="flex flex-wrap gap-2">
              {#each parent.children as c (c.id)}
                <button
                  type="button"
                  class="min-h-11 rounded-lg border px-3 text-sm font-semibold {focusRing} {chosen?.id ===
                  c.id
                    ? 'border-indigo-600 bg-white text-indigo-900 shadow-sm'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}"
                  aria-pressed={chosen?.id === c.id}
                  onclick={() => (chosen?.id === c.id ? closeTo(lvl) : open(lvl, c.id))}
                  >{c.name}</button
                >
              {/each}
            </div>
          {:else}
            <p class="text-sm text-slate-400">Chọn ở tầng trên để mở tầng này.</p>
          {/if}
        </li>
      {/each}
    </ol>
    <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
      {exploreText}
    </p>
  {:else}
    <div class="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
      <p class="text-base">
        <strong>{item.node.name}</strong> thuộc cấp tổ chức nào trong {root.name.toLowerCase()}?
      </p>
      <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn cấp tổ chức">
        {#each LEVELS.slice(1) as levelName, i (levelName)}
          <button type="button" class={button.secondary} onclick={() => answer(i + 1)}
            >{levelName}</button
          >
        {/each}
      </div>
      <p
        class="min-h-12 rounded-xl px-4 py-3 text-sm {feedback === null
          ? 'bg-slate-100 text-slate-700'
          : feedback.ok
            ? 'bg-emerald-50 text-emerald-900'
            : 'bg-amber-50 text-amber-900'}"
        aria-live="polite"
      >
        {feedback?.text ?? 'Nhớ thứ tự: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.'}
      </p>
      <div class="flex flex-wrap items-center gap-3">
        <button type="button" class={button.primary} onclick={next} disabled={!feedback?.ok}
          >Câu tiếp</button
        >
        <span class="text-sm text-slate-600 tabular-nums"
          >Đúng ngay lần đầu: {score} · Số lần chọn: {tries}</span
        >
      </div>
    </div>
  {/if}
</div>

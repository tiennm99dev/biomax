<script>
  import { rng } from '#lib/core/drill.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { numTex } from '#lib/core/number-format.js';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    HUMAN_N,
    MAX_DRAWN,
    allCombinations,
    combinationIndex,
    combinations,
    randomGamete,
  } from './engine.js';

  const COLOR = ['#2563eb', '#dc2626'];
  const rand = rng(23);

  let n = $state(2);
  /** @type {number[]} */
  let found = $state([]);

  const total = $derived(combinations(n));
  const drawn = $derived(n <= MAX_DRAWN);
  const list = $derived(drawn ? allCombinations(n) : []);
  const allFound = $derived(found.length === total);
  const note = $derived(
    !drawn
      ? `Với $n = ${n}$ có $2^{${n}} = ${numTex(total)}$ tổ hợp NST khác nhau trong giao tử, chưa tính trao đổi chéo${n === HUMAN_N ? '. Đó là số tổ hợp ở người' : ''}.`
      : allFound
        ? `Đã gặp đủ $2^{${n}} = ${total}$ tổ hợp. Thêm một cặp NST thì số tổ hợp tăng gấp đôi.`
        : `Đã gặp ${found.length} trong $2^{${n}} = ${total}$ tổ hợp. Mỗi cặp NST phân li độc lập nên mỗi giao tử nhận chiếc xanh hoặc chiếc đỏ của từng cặp.`,
  );

  function changeN() {
    found = [];
  }

  function makeGamete() {
    const index = combinationIndex(randomGamete(n, rand));
    if (!found.includes(index)) found = [...found, index];
  }
</script>

<div class="space-y-3">
  <Stepper label="Số cặp NST tương đồng" bind:value={n} min={1} max={HUMAN_N} onchange={changeN} />

  {#if drawn}
    <ul class="grid grid-cols-4 gap-2 sm:grid-cols-8">
      {#each list as combination, i (i)}
        {@const seen = found.includes(i)}
        <li
          class="flex h-16 items-center justify-center gap-1 rounded-lg border {seen
            ? 'border-emerald-600 bg-emerald-50'
            : 'border-dashed border-slate-300 bg-white'}"
          aria-label="Tổ hợp {i + 1}: {seen ? 'đã gặp' : 'chưa gặp'}"
        >
          {#each combination as bit, pair (pair)}
            <span
              class="block w-2 rounded-full"
              style="height: {44 - pair * 7}px; background-color: {seen ? COLOR[bit] : '#cbd5e1'}"
            ></span>
          {/each}
        </li>
      {/each}
    </ul>
    <button type="button" class={button.primary} disabled={allFound} onclick={makeGamete}>
      Giảm phân tạo một giao tử
    </button>
  {/if}

  <FeedbackNote tone={allFound && drawn ? 'ok' : 'info'} text={note} />
</div>

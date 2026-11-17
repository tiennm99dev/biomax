<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    PRODUCTS,
    SIDES,
    VOTES,
    cardsOf,
    percents,
    product,
    reportText,
    tallyText,
    voteNote,
  } from './engine.js';

  let productId = $state(PRODUCTS[0].id);
  /** @type {Record<string, import('./engine.js').Vote>} */
  let votes = $state({});
  /** @type {Record<string, number[]>} */
  let tallies = $state({});
  let copied = $state('');

  const current = $derived(product(productId));
  const vote = $derived(votes[productId]);
  const counts = $derived(tallies[productId] ?? [0, 0, 0]);
  const shares = $derived(percents(counts));
  const report = $derived(reportText(votes, tallies));

  /** @param {import('./engine.js').Vote} v */
  function cast(v) {
    votes = { ...votes, [productId]: v };
  }

  /** @param {number} i @param {number} value */
  function setCount(i, value) {
    const next = [...counts];
    next[i] = value;
    tallies = { ...tallies, [productId]: next };
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

<div class="space-y-4">
  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn sản phẩm chuyển gene">
    {#each PRODUCTS as p (p.id)}
      <button
        type="button"
        aria-pressed={p.id === productId}
        class="{p.id === productId ? button.primary : button.quiet} text-sm"
        onclick={() => (productId = p.id)}
      >
        {p.name}
      </button>
    {/each}
  </div>

  <div class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800">
    <p><strong>Gene chuyển:</strong> {current.gene}.</p>
    <p><strong>Công dụng:</strong> {current.use}</p>
  </div>

  <section class="space-y-2" aria-label="Bước 1: xếp lí lẽ">
    <h3 class="text-sm font-semibold text-slate-900">
      1. Xếp các lí lẽ vào cột lợi ích hoặc rủi ro
    </h3>
    {#key productId}
      <CardSorter
        cards={cardsOf(current)}
        bins={SIDES}
        label="Xếp lí lẽ về {current.name} vào lợi ích hoặc rủi ro"
        hintOnWrong
      />
    {/key}
  </section>

  <section class="space-y-2" aria-label="Bước 2: bình chọn">
    <h3 class="text-sm font-semibold text-slate-900">2. Ý kiến của em</h3>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Bình chọn">
      {#each VOTES as v (v.id)}
        <button
          type="button"
          aria-pressed={vote === v.id}
          class="min-h-11 rounded-lg border px-3 py-2 text-sm font-semibold transition {focusRing} {vote ===
          v.id
            ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}"
          onclick={() => cast(v.id)}
        >
          {v.label}
        </button>
      {/each}
    </div>
    <FeedbackNote
      tone="info"
      text={vote
        ? voteNote(current, vote)
        : 'Chọn một ý kiến; không có đáp án đúng sai, nhưng cần có lí lẽ.'}
    />
  </section>

  <section class="space-y-2" aria-label="Bước 3: kết quả của lớp">
    <h3 class="text-sm font-semibold text-slate-900">3. Kết quả bình chọn của lớp</h3>
    <div class="flex flex-wrap gap-x-6 gap-y-2">
      {#each VOTES as v, i (v.id)}
        <Stepper
          label={v.label}
          min={0}
          max={60}
          value={counts[i]}
          onchange={(value) => setCount(i, value)}
        />
      {/each}
    </div>
    {#if shares}
      <div class="space-y-1" aria-hidden="true">
        {#each VOTES as v, i (v.id)}
          <div class="flex items-center gap-2 text-xs text-slate-700">
            <span class="w-36 shrink-0">{v.label}</span>
            <span class="h-3 rounded bg-indigo-500" style="width: {shares[i] * 0.6}%"></span>
            <span class="tabular-nums">{shares[i]}%</span>
          </div>
        {/each}
      </div>
    {/if}
    <p class="text-sm text-slate-800" aria-live="polite">{tallyText(counts)}</p>
  </section>

  <section class="space-y-2" aria-label="Bản tóm tắt">
    <h3 class="text-sm font-semibold text-slate-900">4. Bản tóm tắt để đưa vào báo cáo</h3>
    <textarea
      readonly
      rows="8"
      class="w-full rounded-lg border border-slate-300 bg-white p-2 font-mono text-xs text-slate-800 {focusRing}"
      aria-label="Bản tóm tắt bảng tranh luận"
      value={report}></textarea>
    <div class="flex flex-wrap items-center gap-3">
      <button type="button" class={button.secondary} onclick={copyReport}>Sao chép</button>
      <span class="text-sm text-slate-600" aria-live="polite">{copied}</span>
    </div>
  </section>
</div>

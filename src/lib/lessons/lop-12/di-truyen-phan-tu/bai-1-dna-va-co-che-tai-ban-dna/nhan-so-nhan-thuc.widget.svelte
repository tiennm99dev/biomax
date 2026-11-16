<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import { copiedAt, originsAt, stepsToCopy } from './engine.js';

  const LEN = 60;
  let origins = $state(1);
  let t = $state(0);

  const at = $derived(originsAt(LEN, origins));
  const copied = $derived(copiedAt(LEN, origins, t));
  const need = $derived(stepsToCopy(LEN, origins));
  const done = $derived(t >= need);
  const doneCount = $derived(copied.filter(Boolean).length);

  const note = $derived(
    done
      ? {
          tone: /** @type {const} */ ('ok'),
          text: `Với ${origins} điểm khởi đầu (${2 * origins} chạc tái bản), cả phân tử được sao chép sau ${need} bước. ${origins === 1 ? 'Thử tăng số điểm khởi đầu như ở DNA nhân thực.' : `Một điểm khởi đầu cần ${stepsToCopy(LEN, 1)} bước.`}`,
        }
      : {
          tone: /** @type {const} */ ('info'),
          text: `Bước ${t}: đã sao chép ${doneCount}/${LEN} đoạn. Mỗi điểm khởi đầu mở hai chạc tái bản đi về hai phía.`,
        },
  );

  function reset() {
    t = 0;
  }
</script>

<div class="space-y-3 rounded-xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">Một hay nhiều điểm khởi đầu tái bản?</p>
  <Stepper label="Số điểm khởi đầu (Ori)" bind:value={origins} min={1} max={6} onchange={reset} />
  <svg
    viewBox="0 0 {LEN * 6 + 4} 40"
    class="h-auto w-full"
    role="img"
    aria-label="Phân tử DNA với {origins} điểm khởi đầu, đã sao chép {doneCount} trên {LEN} đoạn"
  >
    {#each copied as c, i (i)}
      <rect x={2 + i * 6} y="14" width="5" height="12" fill={c ? '#f97316' : '#1e3a8a'} />
    {/each}
    {#each at as o (o)}
      <polygon points="{2 + o * 6 + 2.5},12 {o * 6 + 0.5},4 {o * 6 + 8.5},4" fill="#059669" />
    {/each}
  </svg>
  <p class="text-xs text-slate-500">
    Xanh đậm: chưa sao chép; cam: đã sao chép; tam giác xanh lá: điểm khởi đầu.
  </p>
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} disabled={done} onclick={() => (t += 1)}
      >Tiến một bước</button
    >
    <button type="button" class={button.secondary} disabled={done} onclick={() => (t = need)}
      >Chạy đến hết</button
    >
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
  <FeedbackNote tone={note.tone} text={note.text} />
  <p class="text-xs text-slate-600">
    DNA vùng nhân của vi khuẩn là một phân tử vòng, chỉ có một điểm khởi đầu. Mỗi phân tử DNA nhân
    thực rất dài nên có nhiều điểm khởi đầu, nhiều đơn vị tái bản hoạt động cùng lúc.
  </p>
</div>

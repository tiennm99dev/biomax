<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import {
    clearWrong,
    isCorrect,
    moveFeedback,
    place,
    progress,
    shuffled,
  } from '#lib/core/card-sorter.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { CARBON, ENERGY, MICROBES, TYPES, typeAt } from './engine.js';

  const cards = shuffled(MICROBES, 20);
  const bins = TYPES.map((t) => ({ id: t.id, label: t.name }));
  const START =
    'Chọn một vi sinh vật (hoặc kéo thẻ), rồi đặt vào ô đúng nguồn năng lượng và nguồn carbon.';

  /** @type {import('#lib/core/card-sorter.js').Placements} */
  let placements = $state({});
  /** @type {string | null} */
  let selected = $state(null);
  let message = $state(START);
  /** @type {'ok' | 'warn' | 'info'} */
  let tone = $state('info');

  const pool = $derived(cards.filter((c) => placements[c.id] === undefined));
  const stats = $derived(progress(cards, placements));
  const wrong = $derived(stats.placed - stats.correct);

  /** @param {string} id */
  function pick(id) {
    selected = selected === id ? null : id;
    const c = cards.find((x) => x.id === id);
    if (selected && c) {
      message = `Đã chọn "${c.label}". Sinh vật này lấy năng lượng và carbon từ đâu?`;
      tone = 'info';
    }
  }

  /** @param {string} binId */
  function drop(binId) {
    const c = cards.find((x) => x.id === selected);
    if (!c) {
      message = 'Hãy chọn một vi sinh vật trước.';
      tone = 'info';
      return;
    }
    placements = place(placements, c.id, binId);
    selected = null;
    message = moveFeedback(c, binId, bins, true);
    tone = c.bin === binId ? 'ok' : 'warn';
  }

  /** @param {string} id */
  function takeBack(id) {
    placements = place(placements, id, null);
    selected = id;
    message = 'Đã lấy thẻ ra. Chọn ô khác để đặt.';
    tone = 'info';
  }

  function retryWrong() {
    placements = clearWrong(cards, placements);
    selected = null;
    message = 'Các thẻ xếp sai đã trở về hàng chờ. Thử lại nhé.';
    tone = 'info';
  }

  function reset() {
    placements = {};
    selected = null;
    message = START;
    tone = 'info';
  }

  /** Cell name, shown once the learner has placed one right microbe there. @param {string} id */
  const found = (id) => cards.some((c) => c.bin === id && placements[c.id] === id);
</script>

<div class="space-y-3" role="group" aria-label="Xếp vi sinh vật vào ma trận kiểu dinh dưỡng">
  <div class="rounded-2xl border border-slate-200 bg-white p-3">
    <p class="mb-2 text-sm font-semibold text-slate-700">Vi sinh vật chưa xếp ({pool.length})</p>
    {#if pool.length === 0}
      <p class="text-sm text-slate-500">Đã xếp hết thẻ.</p>
    {:else}
      <ul class="flex flex-wrap gap-2">
        {#each pool as c (c.id)}
          <li>
            <button
              type="button"
              draggable="true"
              aria-pressed={selected === c.id}
              class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm font-medium transition {focusRing} {selected ===
              c.id
                ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
              onclick={() => pick(c.id)}
              ondragstart={(e) => {
                selected = c.id;
                e.dataTransfer?.setData('text/plain', c.id);
              }}
            >
              {c.label}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="grid grid-cols-2 gap-2 text-center text-xs font-semibold text-slate-600">
    <p class="col-span-2">Nguồn carbon (cột) và nguồn năng lượng (hàng)</p>
    {#each CARBON as c (c.id)}
      <p class="rounded-lg bg-slate-100 py-1">Carbon: {c.label.toLowerCase()}</p>
    {/each}
  </div>

  {#each ENERGY as e (e.id)}
    <div>
      <p class="mb-1 text-sm font-semibold text-slate-700">Năng lượng: {e.label.toLowerCase()}</p>
      <div class="grid grid-cols-2 gap-2">
        {#each CARBON as carbon (carbon.id)}
          {@const t = typeAt(e.id, carbon.id)}
          <div class="flex min-w-0 flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2">
            <button
              type="button"
              class="min-h-14 rounded-xl border-2 border-dashed px-2 py-2 text-sm font-bold transition {focusRing} {selected
                ? 'border-indigo-400 bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
                : 'border-slate-300 bg-slate-50 text-slate-700'}"
              aria-label="Đặt thẻ đang chọn vào ô năng lượng {e.label.toLowerCase()}, carbon {carbon.label.toLowerCase()}"
              onclick={() => drop(t.id)}
              ondragover={(ev) => ev.preventDefault()}
              ondrop={(ev) => {
                ev.preventDefault();
                const id = ev.dataTransfer?.getData('text/plain');
                if (id) selected = id;
                drop(t.id);
              }}
            >
              {found(t.id) ? t.name : 'Kiểu nào?'}
            </button>
            <ul class="flex flex-col gap-1">
              {#each cards.filter((c) => placements[c.id] === t.id) as c (c.id)}
                {@const ok = isCorrect(c, placements)}
                <li>
                  <button
                    type="button"
                    class="min-h-11 w-full rounded-lg border px-2 py-1 text-left text-xs font-medium {focusRing} {ok
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                      : 'border-amber-500 bg-amber-50 text-amber-900'}"
                    aria-label="{c.label}, {ok ? 'đúng' : 'chưa đúng'}. Chạm để lấy ra"
                    onclick={() => takeBack(c.id)}
                  >
                    {ok ? '✓' : '✗'}
                    {c.label}
                  </button>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  {/each}

  <FeedbackNote {tone} text={message} />

  <p class="text-sm font-semibold text-slate-700">
    Đúng {stats.correct}/{stats.total}.
    {#if stats.done}
      <span class="font-normal text-slate-600">
        Đủ bốn kiểu: tên ghép nguồn năng lượng (quang, hoá) với nguồn carbon (tự: chất vô cơ, dị:
        chất hữu cơ).
      </span>
    {/if}
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} disabled={wrong === 0} onclick={retryWrong}>
      Gỡ thẻ sai
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Xếp lại từ đầu</button>
  </div>
</div>

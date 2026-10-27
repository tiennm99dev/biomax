<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { COMMUNITIES, dominant, richness } from './engine.js';

  let id = $state(COMMUNITIES[0].id);
  /** @type {string | null} */
  let picked = $state(null);

  const c = $derived(COMMUNITIES.find((x) => x.id === id) ?? COMMUNITIES[0]);
  const max = $derived(Math.max(...c.counts.map((x) => x.n)));
  const best = $derived(dominant(c));

  /** @param {string | number} next */
  function choose(next) {
    id = String(next);
    picked = null;
  }

  const feedback = $derived(
    picked === null
      ? `Ô mẫu có ${richness(c)} loài. Bấm vào loài em cho là loài ưu thế.`
      : picked === best
        ? `Đúng: ${best} có số cá thể nhiều nhất trong ô mẫu, là loài ưu thế, đóng vai trò quan trọng trong quần xã ${c.name}.${c.characteristic ? ` ${c.characteristic} cũng là loài đặc trưng của quần xã này.` : ''}`
        : `${picked} chưa phải loài có nhiều cá thể nhất. Hãy so sánh độ dài các thanh.`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Quần xã"
    options={COMMUNITIES.map((x) => ({ value: x.id, label: x.label }))}
    value={id}
    onchange={choose}
  />
  <p class="text-sm text-slate-700">Số cá thể đếm được trong một ô mẫu của quần xã {c.name}:</p>
  <ul class="space-y-2">
    {#each c.counts as x (x.species)}
      <li>
        <button
          type="button"
          class="grid min-h-11 w-full grid-cols-[7.5rem_1fr_2.5rem] items-center gap-2 rounded-lg px-2 text-left text-sm hover:bg-slate-50 {focusRing} {picked ===
          x.species
            ? x.species === best
              ? 'bg-emerald-50 ring-2 ring-emerald-500'
              : 'bg-amber-50 ring-2 ring-amber-500'
            : ''}"
          aria-pressed={picked === x.species}
          aria-label="{x.species}: {x.n} cá thể"
          onclick={() => (picked = x.species)}
        >
          <span class="font-semibold">{x.species}</span>
          <span class="h-5 rounded bg-slate-100" aria-hidden="true">
            <span class="block h-full rounded bg-teal-600" style="width: {(x.n / max) * 100}%"
            ></span>
          </span>
          <span class="text-right tabular-nums">{x.n}</span>
        </button>
      </li>
    {/each}
  </ul>
  <FeedbackNote tone={picked === null ? 'info' : picked === best ? 'ok' : 'warn'} text={feedback} />
</div>

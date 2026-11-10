<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { LARVA_INSTARS, START, moult } from './engine.js';

  /** @type {import('./engine.js').Larva} */
  let larva = $state({ ...START });
  let jh = $state('cao');
  /** @type {string[]} */
  let log = $state([]);
  let text = $state('Sâu tuổi 1 vừa nở. Chọn mức juvenile hormone rồi cho tiết ecdysone.');

  const size = $derived(0.5 + (0.5 * larva.instar) / LARVA_INSTARS);
  const formName = $derived(
    larva.form === 'sau' ? `Sâu tuổi ${larva.instar}` : larva.form === 'nhong' ? 'Nhộng' : 'Bướm',
  );

  function pulse() {
    const before = formName;
    const r = moult(larva, jh === 'cao');
    if (r.next.form !== larva.form || r.next.instar !== larva.instar) log = [...log, before];
    larva = r.next;
    text = r.text;
  }

  function reset() {
    larva = { ...START };
    log = [];
    text = 'Sâu tuổi 1 vừa nở. Chọn mức juvenile hormone rồi cho tiết ecdysone.';
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Mức juvenile hormone (JH)"
    value={jh}
    options={[
      { value: 'cao', label: 'Cao' },
      { value: 'thap', label: 'Thấp' },
    ]}
    onchange={(v) => (jh = String(v))}
  />
  <svg
    viewBox="0 0 200 80"
    class="mx-auto block w-full max-w-sm rounded-xl bg-emerald-50"
    role="img"
    aria-label="Hiện tại: {formName.toLowerCase()}"
  >
    {#if larva.form === 'sau'}
      <g transform="translate(100 45) scale({size})">
        {#each [-40, -28, -16, -4, 8, 20, 32] as x (x)}
          <circle cx={x} cy="0" r="8" fill="#65a30d" stroke="#365314" />
        {/each}
        <circle cx="44" cy="-3" r="9" fill="#4d7c0f" stroke="#365314" />
      </g>
    {:else if larva.form === 'nhong'}
      <path
        d="M 100 {40 - 28 * size} C {100 + 16 * size} 30 {100 + 16 * size} 55 100 {40 +
          28 * size} C {100 - 16 * size} 55 {100 - 16 * size} 30 100 {40 - 28 * size} Z"
        fill="#a3a35b"
        stroke="#57534e"
      />
    {:else}
      <g transform="translate(100 40) scale({size})">
        <ellipse cx="-20" cy="-10" rx="20" ry="14" fill="#fb923c" stroke="#7c2d12" />
        <ellipse cx="20" cy="-10" rx="20" ry="14" fill="#fb923c" stroke="#7c2d12" />
        <ellipse cx="-14" cy="12" rx="12" ry="10" fill="#fdba74" stroke="#7c2d12" />
        <ellipse cx="14" cy="12" rx="12" ry="10" fill="#fdba74" stroke="#7c2d12" />
        <ellipse cx="0" cy="0" rx="3" ry="20" fill="#292524" />
      </g>
    {/if}
  </svg>
  <p class="text-center text-sm font-semibold">{formName}</p>
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={pulse} disabled={larva.form === 'buom'}>
      Tiết ecdysone (lột xác)
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
  <div aria-live="polite">
    <FeedbackNote tone={larva.form === 'buom' ? 'ok' : 'info'} {text} />
  </div>
  {#if log.length > 0}
    <p class="text-sm text-slate-600">Đã đi qua: {[...log, formName].join(' → ')}</p>
  {/if}
</div>

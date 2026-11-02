<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { SOURCES, TARGETS, canBecome } from './engine.js';

  const options = SOURCES.map((s) => ({ value: s.id, label: s.name }));

  let sourceId = $state(SOURCES[0].id);
  /** @type {Record<string, boolean>} */
  let tried = $state({});

  const source = $derived(SOURCES.find((s) => s.id === sourceId) ?? SOURCES[0]);
  const allTried = $derived(TARGETS.every((t) => tried[t.id]));
  const note = $derived(
    allTried
      ? { tone: /** @type {const} */ ('ok'), text: `${source.kind}. ${source.text}` }
      : {
          tone: /** @type {const} */ ('info'),
          text: 'Bấm vào từng đích để xem tế bào này có biệt hoá được thành đích đó không. Thử hết để đọc kết luận.',
        },
  );

  function changeSource() {
    tried = {};
  }

  /** @param {string} id */
  function tryTarget(id) {
    tried = { ...tried, [id]: true };
  }

  /** @param {string} id */
  function classOf(id) {
    if (!tried[id]) return button.quiet;
    return canBecome(sourceId, id)
      ? 'inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-600 bg-emerald-50 px-4 py-2 font-semibold text-emerald-900'
      : 'inline-flex min-h-11 items-center justify-center rounded-lg border border-rose-400 bg-rose-50 px-4 py-2 font-semibold text-rose-900';
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Tế bào xuất phát"
    {options}
    bind:value={sourceId}
    onchange={changeSource}
  />

  <div class="flex flex-wrap gap-2" role="group" aria-label="Các đích biệt hoá">
    {#each TARGETS as t (t.id)}
      <button type="button" class={classOf(t.id)} onclick={() => tryTarget(t.id)}>
        {t.name}{tried[t.id] ? (canBecome(sourceId, t.id) ? ': được' : ': không') : ''}
      </button>
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

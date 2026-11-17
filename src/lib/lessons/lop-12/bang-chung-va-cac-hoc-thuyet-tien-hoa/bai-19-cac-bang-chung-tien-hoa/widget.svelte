<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { BONE_GROUPS, LIMBS, fitBones, limbBones, limbNote } from './engine.js';

  const W = 110;
  const H = 200;

  /** @type {import('./engine.js').BoneGroup | 'all'} */
  let group = $state('all');
  let limbId = $state('nguoi');

  const limb = $derived(LIMBS.find((l) => l.id === limbId) ?? LIMBS[0]);
  const drawings = $derived(LIMBS.map((l) => ({ limb: l, bones: fitBones(limbBones(l), W, H) })));
  const note = $derived(limbNote(group, limb));

  /** @param {string} id */
  const colorOf = (id) => BONE_GROUPS.find((g) => g.id === id)?.color ?? '#334155';

  /** @param {string} id */
  function strokeOf(id) {
    if (group === 'all' || group === id) return colorOf(id);
    return '#cbd5e1';
  }

  /** @param {string | number} v */
  function setGroup(v) {
    const found = BONE_GROUPS.find((g) => g.id === v);
    group = found ? found.id : 'all';
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Tô màu nhóm xương"
    options={[
      { value: 'all', label: 'Tất cả' },
      ...BONE_GROUPS.map((g) => ({ value: g.id, label: g.name })),
    ]}
    value={group}
    onchange={setGroup}
  />

  <div class="flex flex-wrap gap-3 text-sm text-slate-700" aria-hidden="true">
    {#each BONE_GROUPS as g (g.id)}
      <span class="inline-flex items-center gap-1"
        ><span class="inline-block h-3 w-5 rounded-sm" style="background:{g.color}"
        ></span>{g.name}</span
      >
    {/each}
  </div>

  <div class="grid grid-cols-3 gap-2">
    {#each drawings as d (d.limb.id)}
      <button
        type="button"
        class="flex flex-col items-center rounded-xl border p-1 {d.limb.id === limbId
          ? 'border-indigo-500 bg-indigo-50'
          : 'border-slate-200 bg-white hover:bg-slate-50'} {focusRing}"
        aria-pressed={d.limb.id === limbId}
        aria-label="Chi trước của {d.limb.name.toLowerCase()}, dùng để {d.limb.use}"
        onclick={() => (limbId = d.limb.id)}
      >
        <svg viewBox="0 0 {W} {H}" class="w-full" aria-hidden="true">
          {#each d.bones as b, i (i)}
            {#if b.shape === 'dot'}
              <circle cx={b.x1} cy={b.y1} r={b.w} fill={strokeOf(b.group)} />
            {:else}
              <line
                x1={b.x1}
                y1={b.y1}
                x2={b.x2}
                y2={b.y2}
                stroke={strokeOf(b.group)}
                stroke-width={b.w}
                stroke-linecap="round"
              />
            {/if}
          {/each}
        </svg>
        <span class="text-sm font-semibold text-slate-800">{d.limb.name}</span>
        <span class="text-xs text-slate-600">{d.limb.use}</span>
      </button>
    {/each}
  </div>

  <FeedbackNote tone="info" text={note} />
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { LEVELS, SITUATIONS, levelVerdict } from './engine.js';

  /** @type {Record<string, string>} */
  let chosen = $state({});

  const answered = $derived(SITUATIONS.filter((s) => chosen[s.id]));
  const right = $derived(answered.filter((s) => chosen[s.id] === s.level).length);
</script>

<div class="space-y-3">
  <p class="text-sm text-slate-700">
    Đọc từng tình huống và chọn mức lây lan của bệnh: lẻ tẻ, dịch hay đại dịch.
  </p>
  <ol class="space-y-3">
    {#each SITUATIONS as s, k (s.id)}
      <li class="space-y-2 rounded-xl border border-slate-200 p-3">
        <p class="text-sm text-slate-800"><strong>{k + 1}.</strong> {s.text}</p>
        <SegmentedControl
          label="Mức lây lan ở tình huống {k + 1}"
          hideLabel
          options={LEVELS}
          bind:value={() => chosen[s.id] ?? '', (v) => (chosen = { ...chosen, [s.id]: String(v) })}
        />
        {#if chosen[s.id]}
          {@const verdict = levelVerdict(s.id, chosen[s.id])}
          <FeedbackNote tone={verdict.tone} text={verdict.text} />
        {/if}
      </li>
    {/each}
  </ol>
  <p class="text-sm font-semibold text-slate-800" aria-live="polite">
    Đúng {right} trên {answered.length} tình huống đã chọn (tổng {SITUATIONS.length}).
  </p>
</div>

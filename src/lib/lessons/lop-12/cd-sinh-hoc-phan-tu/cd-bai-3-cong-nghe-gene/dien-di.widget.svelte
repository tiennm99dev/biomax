<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { FULL_RUN, LANES, bandPosition, judge, runNote } from './gel.js';

  let minutes = $state(0);
  let poles = $state('am');
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);

  const wellsAtMinus = $derived(poles === 'am');
  const note = $derived(runNote(minutes, wellsAtMinus));

  /** Top of the gel (the wells) and its length, in SVG units. */
  const TOP = 50;
  const LENGTH = 220;
  const LANE_W = 52;
  const LEFT = 30;

  /** @param {number} i */
  const laneX = (i) => LEFT + i * LANE_W;

  /** @param {string} id */
  function pickSuspect(id) {
    verdict = judge(id, minutes, wellsAtMinus);
  }

  const gelText = $derived.by(() => {
    if (minutes > 0 && !wellsAtMinus) return 'Gel trống: DNA đã chạy ra khỏi gel.';
    if (minutes === 0) return 'Mẫu của năm giếng còn nằm trong giếng.';
    return LANES.map((lane) => `${lane.name}: các băng ${lane.bands.map(fmt).join(', ')} bp`).join(
      '; ',
    );
  });
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Phía giếng nạp mẫu nối với"
    options={[
      { value: 'am', label: 'Cực âm (−)' },
      { value: 'duong', label: 'Cực dương (+)' },
    ]}
    bind:value={poles}
  />

  <svg
    viewBox="0 0 300 {TOP + LENGTH + 24}"
    class="mx-auto block w-full max-w-md rounded-xl bg-slate-800"
    role="img"
    aria-label={gelText}
  >
    <text x="150" y="16" text-anchor="middle" font-size="12" fill="#f8fafc">
      {wellsAtMinus ? 'Cực âm (−)' : 'Cực dương (+)'}
    </text>
    <text x="150" y={TOP + LENGTH + 18} text-anchor="middle" font-size="12" fill="#f8fafc">
      {wellsAtMinus ? 'Cực dương (+)' : 'Cực âm (−)'}
    </text>
    <rect
      x="22"
      y={TOP - 8}
      width="262"
      height={LENGTH + 12}
      rx="6"
      fill="#bae6fd"
      opacity="0.25"
    />
    {#each LANES as lane, i (lane.id)}
      <text x={laneX(i) + LANE_W / 2 - 2} y="34" text-anchor="middle" font-size="10" fill="#f8fafc"
        >{lane.name}</text
      >
      <rect x={laneX(i) + 6} y={TOP - 6} width={LANE_W - 16} height="6" fill="#0f172a" />
      {#each lane.bands as bp (bp)}
        {@const pos = bandPosition(bp, minutes, wellsAtMinus)}
        {#if pos !== null}
          <rect
            x={laneX(i) + 6}
            y={TOP + pos * LENGTH}
            width={LANE_W - 16}
            height="4"
            rx="1"
            fill="#fef08a"
          />
          {#if lane.id === 'thang' && minutes >= FULL_RUN / 2}
            <text
              x={laneX(i) + 2}
              y={TOP + pos * LENGTH + 4}
              text-anchor="end"
              font-size="8"
              fill="#f8fafc">{bp}</text
            >
          {/if}
        {/if}
      {/each}
    {/each}
  </svg>
  <p class="text-center text-xs text-slate-600">
    Thang: thang chuẩn; HT: mẫu hiện trường; NP: nghi phạm.
  </p>

  <SliderField
    label="Thời gian chạy điện di"
    min={0}
    max={FULL_RUN}
    step={5}
    unit="phút"
    bind:value={minutes}
    oninput={() => (verdict = null)}
  />
  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-800">
      Mẫu DNA của nghi phạm nào trùng với mẫu hiện trường?
    </p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn nghi phạm">
      {#each LANES.filter((l) => l.id.startsWith('np')) as lane (lane.id)}
        <button type="button" class={button.quiet} onclick={() => pickSuspect(lane.id)}>
          {lane.name}
        </button>
      {/each}
    </div>
    {#if verdict}
      <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
    {/if}
  </div>
</div>

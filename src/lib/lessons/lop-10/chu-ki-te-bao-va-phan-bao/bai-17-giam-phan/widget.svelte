<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import PhasePlayer from '../_shared/phase-player.svelte';
  import { BLUE, distinctTypes, gametesOf, meiosisFrames } from '../_shared/frames.js';

  const crossOptions = [
    { value: 'yes', label: 'Có trao đổi chéo' },
    { value: 'no', label: 'Không trao đổi chéo' },
  ];
  const flipOptions = [
    { value: 'same', label: 'Xanh cùng phía xanh' },
    { value: 'other', label: 'Xanh cùng phía đỏ' },
  ];

  /** @param {string} color */
  const colorName = (color) => (color === BLUE ? 'xanh' : 'đỏ');

  /** @param {{ long: [string, string], short: string }} gamete */
  function gameteText(gamete) {
    const long =
      gamete.long[0] === gamete.long[1]
        ? colorName(gamete.long[0])
        : `${colorName(gamete.long[0])} và ${colorName(gamete.long[1])} do trao đổi chéo`;
    return `NST dài ${long}, NST ngắn ${colorName(gamete.short)}`;
  }

  let cross = $state('yes');
  let flipChoice = $state('same');

  const options = $derived({ crossover: cross === 'yes', flip: flipChoice === 'other' });
  const frames = $derived(meiosisFrames(options));
  const gametes = $derived(gametesOf(options));
  const types = $derived(distinctTypes(gametes));
  const note = $derived(
    options.crossover
      ? `Trao đổi chéo tạo ra NST mang tổ hợp mới, nên một tế bào cho ${types} loại tế bào con.`
      : `Không trao đổi chéo, một tế bào chỉ cho ${types} loại tế bào con. Đổi cách xếp cặp NST ngắn ở kì giữa I sẽ cho ${types} loại khác.`,
  );
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl label="Ở cặp NST dài" options={crossOptions} bind:value={cross} />
    <SegmentedControl
      label="Hai cặp xếp ở kì giữa I"
      options={flipOptions}
      bind:value={flipChoice}
    />
  </div>

  <PhasePlayer {frames} width={360} height={220} label="Các kì của giảm phân" />

  <figure class="rounded-xl bg-slate-50 p-3">
    <figcaption class="mb-2 text-sm font-semibold text-slate-700">
      Bốn tế bào con tạo thành
    </figcaption>
    <ul class="grid grid-cols-4 gap-2">
      {#each gametes as g, i (i)}
        <li>
          <svg
            viewBox="0 0 60 70"
            class="mx-auto block w-full max-w-20"
            role="img"
            aria-label="Tế bào con {i + 1}: {gameteText(g)}"
          >
            <circle cx="30" cy="35" r="28" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
            <g stroke-width="5" stroke-linecap="round">
              <line x1="22" y1="18" x2="22" y2="35" stroke={g.long[0]} />
              <line x1="22" y1="35" x2="22" y2="52" stroke={g.long[1]} />
              <line x1="40" y1="24" x2="40" y2="46" stroke={g.short} />
            </g>
          </svg>
        </li>
      {/each}
    </ul>
  </figure>

  <FeedbackNote tone={options.crossover ? 'ok' : 'info'} text={note} />
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { plantState } from './engine.js';

  /** @type {import('./engine.js').Water} */
  let water = $state('vua');
  /** @type {import('./engine.js').Feed} */
  let feed = $state('vua');
  const plant = $derived(plantState(water, feed));

  const OPTIONS = {
    water: [
      { value: 'khong', label: 'Không tưới' },
      { value: 'vua', label: 'Vừa phải' },
      { value: 'qua-nhieu', label: 'Quá nhiều' },
    ],
    feed: [
      { value: 'khong', label: 'Không bón' },
      { value: 'vua', label: 'Đúng liều' },
      { value: 'qua-nhieu', label: 'Quá liều' },
    ],
  };

  /** @param {string | number} v @returns {import('./engine.js').Water} */
  const level = (v) => (v === 'khong' ? 'khong' : v === 'qua-nhieu' ? 'qua-nhieu' : 'vua');

  const stem = $derived(30 + plant.height * 90);
  const leafColor = $derived(
    `rgb(${Math.round(190 - 170 * plant.green)}, ${Math.round(150 + 13 * plant.green)}, ${Math.round(60 - 16 * plant.green)})`,
  );
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 200 170"
    class="mx-auto w-60 rounded-xl bg-sky-50"
    role="img"
    aria-label="Cây trong chậu, chiều cao và màu lá thay đổi theo cách chăm sóc"
  >
    <path d="M 66 130 L 134 130 L 124 166 L 76 166 Z" fill="#b45309" />
    <rect x="97" y={130 - stem} width="6" height={stem} fill="#65a30d" />
    {#each [0.35, 0.65, 0.95] as at (at)}
      {@const y = 130 - stem * at}
      <ellipse
        cx="72"
        {y}
        rx="24"
        ry="8"
        fill={leafColor}
        transform="rotate({-20 * plant.wilt - 5} 100 {y})"
      />
      <ellipse
        cx="128"
        {y}
        rx="24"
        ry="8"
        fill={leafColor}
        transform="rotate({20 * plant.wilt + 5} 100 {y})"
      />
    {/each}
    {#if water === 'qua-nhieu'}
      <rect x="68" y="128" width="64" height="6" fill="#60a5fa" />
    {/if}
  </svg>

  <SegmentedControl
    label="Tưới nước"
    value={water}
    options={OPTIONS.water}
    onchange={(v) => (water = level(v))}
  />
  <SegmentedControl
    label="Bón phân"
    value={feed}
    options={OPTIONS.feed}
    onchange={(v) => (feed = level(v))}
  />
  <FeedbackNote tone={plant.tone} text={plant.text} />
</div>

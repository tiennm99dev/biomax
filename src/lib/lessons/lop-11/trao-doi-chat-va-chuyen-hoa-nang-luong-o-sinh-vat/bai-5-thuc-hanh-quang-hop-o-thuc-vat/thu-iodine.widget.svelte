<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { BOOK_TEST, describeTest, leafColor, starchIn } from './engine.js';

  let test = $state({ ...BOOK_TEST });
  const starch = $derived(starchIn(test));
  const note = $derived(describeTest(test));

  /** @type {Array<{ key: 'dark' | 'cover' | 'sun' | 'alcohol', on: string, off: string }>} */
  const STEPS = [
    { key: 'dark', on: 'Đã để tối 2 ngày', off: 'Bỏ qua: không để tối' },
    { key: 'cover', on: 'Đã che một phần lá', off: 'Bỏ qua: không che' },
    { key: 'sun', on: 'Đã phơi nắng 4 đến 6 giờ', off: 'Bỏ qua: không phơi nắng' },
    { key: 'alcohol', on: 'Đã đun trong cồn 90°', off: 'Bỏ qua: không tẩy diệp lục' },
  ];

  const openColor = $derived(leafColor(starch.open, test.alcohol));
  const coveredColor = $derived(leafColor(starch.covered, test.alcohol));
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 300 130"
    class="mx-auto w-full max-w-sm"
    role="img"
    aria-label="Lá sau khi nhúng iodine: phần được chiếu sáng {starch.open
      ? 'có tinh bột'
      : 'không có tinh bột'}{test.cover
      ? `, phần bị che ${starch.covered ? 'có tinh bột' : 'không có tinh bột'}`
      : ''}"
  >
    <defs>
      <clipPath id="iodine-leaf">
        <path d="M 20 65 Q 150 -20 280 65 Q 150 150 20 65 Z" />
      </clipPath>
    </defs>
    <g clip-path="url(#iodine-leaf)">
      <rect x="0" y="0" width="300" height="130" fill={openColor} />
      {#if test.cover}
        <rect x="115" y="0" width="70" height="130" fill={coveredColor} />
      {/if}
    </g>
    <path
      d="M 20 65 Q 150 -20 280 65 Q 150 150 20 65 Z"
      fill="none"
      stroke="#3f6212"
      stroke-width="2"
    />
    {#if test.cover}
      <text
        x="150"
        y="70"
        text-anchor="middle"
        font-size="11"
        fill={starch.covered ? '#ffffff' : '#0f172a'}>phần bị che</text
      >
    {/if}
  </svg>

  <div class="grid gap-2 sm:grid-cols-2">
    {#each STEPS as step (step.key)}
      <button
        type="button"
        class={button.secondary}
        aria-pressed={test[step.key]}
        onclick={() => (test[step.key] = !test[step.key])}
      >
        {test[step.key] ? step.on : step.off}
      </button>
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

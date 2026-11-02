<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { BOOK_TUBES, MAX_MINUTES, dentWidth, widestDent } from './engine.js';

  /** Scale of the drawing: 1 mm of the 90 mm plate is 2 units. */
  const MM = 2;
  const SPOTS = [
    { x: 58, y: 58 },
    { x: 122, y: 58 },
    { x: 58, y: 122 },
    { x: 122, y: 122 },
  ];

  let guess = $state(0);
  let dropped = $state(false);
  let minutes = $state(0);
  let iodine = $state(false);

  const best = widestDent(BOOK_TUBES);
  const finished = $derived(dropped && minutes >= MAX_MINUTES);
  const note = $derived.by(() => {
    if (!dropped) {
      return /** @type {const} */ ({
        tone: 'info',
        text: 'Chọn ống mà em đoán có vết lõm lớn nhất, rồi nhỏ dịch enzyme lên đĩa.',
      });
    }
    if (!finished) {
      return /** @type {const} */ ({
        tone: 'info',
        text: 'Tinh bột quanh giọt dịch bị thuỷ phân thành đường tan nên mặt đĩa lõm xuống. Kéo thời gian đến 15 phút rồi đo.',
      });
    }
    if (guess === 0) {
      return /** @type {const} */ ({
        tone: 'info',
        text: `Vết lõm lớn nhất ở ống ${best.id}. Ống đun sôi không có vết lõm vì enzyme đã biến tính; ống để lạnh vẫn lõm khá rộng vì enzyme hoạt động lại khi ấm lên.`,
      });
    }
    return guess === best.id
      ? /** @type {const} */ ({
          tone: 'ok',
          text: `Đúng: ống ${best.id} có vết lõm lớn nhất. Ống đun sôi không có vết lõm vì enzyme đã biến tính; ống để lạnh vẫn lõm khá rộng vì enzyme hoạt động lại khi ấm lên.`,
        })
      : /** @type {const} */ ({
          tone: 'warn',
          text: `Vết lõm lớn nhất ở ống ${best.id}, không phải ống ${guess}. Ống đun sôi không có vết lõm vì enzyme đã biến tính; ống để lạnh vẫn lõm khá rộng vì enzyme hoạt động lại khi ấm lên.`,
        });
  });

  function drop() {
    dropped = true;
  }

  function reset() {
    dropped = false;
    minutes = 0;
    iodine = false;
    guess = 0;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Em đoán ống nào có vết lõm lớn nhất?"
    bind:value={guess}
    options={BOOK_TUBES.map((t) => ({ value: t.id, label: `Ống ${t.id}` }))}
  />

  <svg
    viewBox="0 0 180 180"
    class="mx-auto block w-full max-w-xs"
    role="img"
    aria-label="Đĩa tinh bột với bốn vị trí nhỏ dịch enzyme. {dropped
      ? BOOK_TUBES.map(
          (t) => `Ống ${t.id}: vết lõm ${formatNumber(dentWidth(t, minutes), 0)} mi li mét`,
        ).join(', ')
      : 'Chưa nhỏ dịch enzyme.'}"
  >
    <circle
      cx="90"
      cy="90"
      r="88"
      fill={iodine ? '#1e1b4b' : '#f8fafc'}
      stroke="#64748b"
      stroke-width="2"
    />
    {#each BOOK_TUBES as t, i (t.id)}
      {#if dropped}
        <circle
          cx={SPOTS[i].x}
          cy={SPOTS[i].y}
          r={(dentWidth(t, minutes) / 2) * MM}
          fill={iodine ? '#fbbf24' : '#cbd5e1'}
          stroke="#475569"
        />
      {/if}
      <text
        x={SPOTS[i].x}
        y={SPOTS[i].y + 4}
        text-anchor="middle"
        font-size="11"
        font-weight="700"
        fill={iodine && dentWidth(t, minutes) < 5 ? '#f8fafc' : '#0f172a'}>{t.id}</text
      >
    {/each}
  </svg>

  <SliderField
    label="Thời gian sau khi nhỏ"
    bind:value={minutes}
    min={0}
    max={MAX_MINUTES}
    step={1}
    unit="phút"
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={drop} disabled={dropped}>
      Nhỏ 2 giọt từ mỗi ống
    </button>
    <button
      type="button"
      class={button.secondary}
      aria-pressed={iodine}
      onclick={() => (iodine = !iodine)}
    >
      {iodine ? 'Tráng sạch iodine' : 'Phủ iodine lên đĩa'}
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <caption class="sr-only">Đường kính vết lõm của bốn ống</caption>
      <thead>
        <tr class="border-b border-slate-300">
          <th scope="col" class="py-1 pr-2">Ống</th>
          <th scope="col" class="py-1 pr-2">Xử lí</th>
          <th scope="col" class="py-1">Đường kính (mm)</th>
        </tr>
      </thead>
      <tbody>
        {#each BOOK_TUBES as t (t.id)}
          <tr class="border-b border-slate-100">
            <td class="py-1 pr-2 font-semibold">{t.id}</td>
            <td class="py-1 pr-2"><LiveRichText text={t.name} /></td>
            <td class="py-1 tabular-nums"
              >{dropped ? formatNumber(dentWidth(t, minutes), 0) : '—'}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

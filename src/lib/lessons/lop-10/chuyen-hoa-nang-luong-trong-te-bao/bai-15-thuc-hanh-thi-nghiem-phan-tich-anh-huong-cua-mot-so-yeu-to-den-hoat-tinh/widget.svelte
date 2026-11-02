<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    BOOK_TUBES,
    MAX_MINUTES,
    NOTHING_SEEN,
    describeTube,
    iodineColor,
    starchLeft,
    updateSeen,
  } from './engine.js';

  /** @type {import('./engine.js').Tube[]} */
  let tubes = $state(BOOK_TUBES.map((t) => ({ ...t })));
  let selected = $state(0);
  let minutes = $state(0);
  let iodine = $state(false);
  let playing = $state(false);
  let seen = $state(NOTHING_SEEN);

  const tube = $derived(tubes[selected]);
  const note = $derived(describeTube(tube, minutes, iodine));
  const goals = $derived([
    { done: seen.compared, text: 'Nhỏ iodine vào bốn ống sau $15$ phút và so sánh màu.' },
    { done: seen.fast, text: 'Chỉnh nhiệt độ để một ống hết tinh bột trong $5$ phút.' },
    { done: seen.diluted, text: 'Giảm nồng độ enzyme và thấy tinh bột còn lại lâu hơn.' },
  ]);

  $effect(() => {
    if (!playing) return;
    const stop = frameLoop((dt) => {
      minutes = Math.min(MAX_MINUTES, minutes + dt * 2.5);
      record();
      if (minutes >= MAX_MINUTES) playing = false;
    });
    return stop;
  });

  function record() {
    seen = updateSeen(seen, tubes, minutes, iodine);
  }

  function wait() {
    if (reducedMotion()) {
      minutes = MAX_MINUTES;
      record();
      return;
    }
    if (minutes >= MAX_MINUTES) minutes = 0;
    playing = true;
  }

  /** @param {number} value */
  function setMinutes(value) {
    playing = false;
    minutes = value;
    record();
  }

  /** @param {'temp' | 'ph' | 'amount'} key @param {number} value */
  function setTube(key, value) {
    tubes[selected][key] = value;
    record();
  }

  function toggleIodine() {
    iodine = !iodine;
    record();
  }

  function reset() {
    tubes = BOOK_TUBES.map((t) => ({ ...t }));
    minutes = 0;
    iodine = false;
    playing = false;
  }

  /** @param {import('./engine.js').Tube} t */
  const colorOf = (t) => iodineColor(starchLeft(t, minutes));
</script>

<div class="space-y-3">
  <div class="grid grid-cols-4 gap-2" role="group" aria-label="Chọn ống nghiệm để chỉnh">
    {#each tubes as t, i (t.id)}
      <button
        type="button"
        class="rounded-lg border p-2 text-center text-xs font-semibold {i === selected
          ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
          : 'border-slate-300 bg-white text-slate-700'} {focusRing}"
        aria-pressed={i === selected}
        aria-label="Ống {t.id}: {iodine ? colorOf(t).name : 'chưa thử iodine'}"
        onclick={() => (selected = i)}
      >
        <svg viewBox="0 0 40 90" class="mx-auto h-20 w-10" aria-hidden="true">
          <path
            d="M 8 4 L 8 72 A 12 12 0 0 0 32 72 L 32 4"
            fill="#ffffff"
            stroke="#475569"
            stroke-width="2"
          />
          <path
            d="M 10 28 L 10 72 A 10 10 0 0 0 30 72 L 30 28 Z"
            fill={iodine ? colorOf(t).color : '#e2e8f0'}
          />
        </svg>
        Ống {t.id}
      </button>
    {/each}
  </div>

  <SliderField
    label="Nhiệt độ ống {tube.id}"
    value={tube.temp}
    min={0}
    max={100}
    step={5}
    unit="°C"
    oninput={(v) => setTube('temp', v)}
  />
  <SliderField
    label="Độ pH ống {tube.id}"
    value={tube.ph}
    min={3}
    max={12}
    step={0.5}
    format={(v) => formatNumber(v, 1)}
    oninput={(v) => setTube('ph', v)}
  />
  <SliderField
    label="Nồng độ dịch enzyme ống {tube.id}"
    value={tube.amount}
    min={0}
    max={100}
    step={25}
    unit="%"
    oninput={(v) => setTube('amount', v)}
  />
  <SliderField
    label="Thời gian ủ"
    value={minutes}
    min={0}
    max={MAX_MINUTES}
    step={0.5}
    unit="phút"
    format={(v) => formatNumber(v, 1)}
    oninput={setMinutes}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={wait} disabled={playing}>
      {playing ? 'Đang ủ…' : 'Ủ đến 15 phút'}
    </button>
    <button type="button" class={button.secondary} aria-pressed={iodine} onclick={toggleIodine}>
      {iodine ? 'Bỏ iodine (lấy mẫu mới)' : 'Nhỏ iodine vào các ống'}
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Đặt lại như sách</button>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-left text-sm">
      <caption class="sr-only">Kết quả thử iodine của bốn ống nghiệm</caption>
      <thead>
        <tr class="border-b border-slate-300">
          <th scope="col" class="py-1 pr-2">Ống</th>
          <th scope="col" class="py-1 pr-2">Điều kiện</th>
          <th scope="col" class="py-1">Màu với iodine</th>
        </tr>
      </thead>
      <tbody>
        {#each tubes as t (t.id)}
          <tr class="border-b border-slate-100">
            <td class="py-1 pr-2 font-semibold">{t.id}</td>
            <td class="py-1 pr-2">
              {t.temp} °C, pH {formatNumber(t.ph, 1)}, enzyme {t.amount}%
              {#if t.temp === BOOK_TUBES[t.id - 1].temp && t.ph === BOOK_TUBES[t.id - 1].ph && t.amount === 100}
                <span class="text-slate-500">(<LiveRichText text={t.name} />)</span>
              {/if}
            </td>
            <td class="py-1">{iodine ? colorOf(t).name : 'Chưa thử'}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        <LiveRichText text={goal.text} />
      </li>
    {/each}
  </ul>
</div>

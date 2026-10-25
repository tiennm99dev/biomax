<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { frameLoop, reducedMotion } from '../_shared/motion.js';
  import ProtistShape from '../_shared/protist-shape.svelte';
  import { CLUES, PROTISTS, checkClue, protistById, travel } from './engine.js';

  const uid = $props.id();
  const W = 340;
  const H = 150;
  const BODY = 60;
  const TRACK = 7;

  let id = $state(/** @type {import('./engine.js').ProtistId} */ ('trung-roi'));
  let t = $state(0);
  let playing = $state(!reducedMotion());

  $effect(() => {
    if (!playing) return;
    return frameLoop((dt) => {
      t = (t + dt) % 60;
    });
  });

  const p = $derived(protistById(id));
  const along = $derived(travel(id, t, TRACK));
  const cx = $derived(-BODY + (along / TRACK) * (W + 2 * BODY));
  const cy = H / 2;
  const roll = $derived(id === 'trung-bien-hinh' ? 0 : 8 * Math.sin(2 * Math.PI * t * 0.5));
  const speedText = $derived(
    `Tốc độ trong mô hình: khoảng ${formatNumber(p.speed, 2)} lần chiều dài cơ thể mỗi giây.`,
  );

  let clue = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);
  let score = $state(0);

  /** @param {import('./engine.js').ProtistId} guess */
  function answer(guess) {
    const r = checkClue(clue, guess);
    if (r.ok && !feedback?.ok) score += 1;
    feedback = r;
  }

  function nextClue() {
    clue = (clue + 1) % CLUES.length;
    feedback = null;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chọn nguyên sinh vật"
    options={PROTISTS.map((x) => ({ value: x.id, label: x.name }))}
    bind:value={id}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="w-full max-w-xl rounded-xl border border-slate-200 bg-cyan-50"
    role="img"
    aria-label="{p.name} di chuyển bằng {p.organ.toLowerCase()}. {p.moves}"
  >
    {#each [30, 90, 150, 210, 270, 320] as bx, i (bx)}
      <circle cx={bx} cy={20 + ((i * 37) % 110)} r="2" fill="#a5f3fc" />
    {/each}
    <g transform="translate({cx} {cy}) rotate({roll})">
      <ProtistShape kind={id} L={id === 'trung-bien-hinh' ? 46 : BODY} {t} />
    </g>
    <text x="8" y={H - 8} font-size="10" fill="#0e7490">→ hướng di chuyển</text>
  </svg>

  <div class="flex flex-wrap items-end gap-3">
    <button
      type="button"
      class={button.quiet}
      aria-pressed={playing}
      onclick={() => (playing = !playing)}>{playing ? 'Tạm dừng' : 'Chạy hoạt hình'}</button
    >
    <div class="min-w-48 flex-1">
      <SliderField
        label="Thời gian"
        bind:value={t}
        min={0}
        max={60}
        step={0.1}
        unit="giây"
        format={(v) => formatNumber(v, 1)}
        oninput={() => (playing = false)}
      />
    </div>
  </div>

  <div class="grid gap-2 sm:grid-cols-3">
    {#each PROTISTS as x (x.id)}
      <button
        type="button"
        class="rounded-xl border p-3 text-left text-sm {x.id === id
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-slate-200 bg-white hover:bg-slate-50'} {focusRing}"
        aria-pressed={x.id === id}
        onclick={() => (id = x.id)}
      >
        <span class="block font-bold text-slate-900">{x.name}</span>
        <span class="block text-slate-700"><strong>Di chuyển:</strong> {x.organ}</span>
        <span class="block text-slate-700"><strong>Hình dạng:</strong> {x.shape}</span>
        <span class="block text-slate-700"><strong>Dinh dưỡng:</strong> {x.feeds}</span>
        <span class="block text-slate-700"><strong>Nơi sống:</strong> {x.lives}</span>
      </button>
    {/each}
  </div>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    <strong>{p.name}:</strong>
    {p.moves}
    {speedText}
  </p>

  <section class="space-y-3 rounded-xl border border-slate-200 p-4" aria-labelledby="{uid}-doan">
    <h3 id="{uid}-doan" class="font-bold text-slate-900">
      Đoán xem tôi là ai? (câu {clue + 1}/{CLUES.length}, đúng {score})
    </h3>
    <p class="text-slate-800">"{CLUES[clue].text}"</p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn nguyên sinh vật được tả">
      {#each PROTISTS as x (x.id)}
        <button type="button" class={button.secondary} onclick={() => answer(x.id)}>{x.name}</button
        >
      {/each}
    </div>
    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {feedback === null
        ? 'bg-slate-100 text-slate-700'
        : feedback.ok
          ? 'bg-emerald-50 font-semibold text-emerald-900'
          : 'bg-rose-50 text-rose-900'}"
      aria-live="polite"
    >
      {feedback ? feedback.text : 'Chọn tên nguyên sinh vật phù hợp với lời tả.'}
    </p>
    <button type="button" class={button.quiet} onclick={nextClue}>Câu tiếp theo</button>
  </section>
</div>

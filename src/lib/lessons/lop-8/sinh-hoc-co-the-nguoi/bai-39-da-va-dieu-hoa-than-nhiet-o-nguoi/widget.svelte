<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { skinResponse } from './engine.js';

  let air = $state(25);
  let exercising = $state(false);

  const r = $derived(skinResponse(air, exercising));
  const vesselColor = $derived(
    r.vessel === 'dan' ? '#ef4444' : r.vessel === 'co' ? '#9f1239' : '#dc2626',
  );
  // Hair: slanted when at rest, upright when the muscle contracts.
  const hairTip = $derived(r.hairErect ? [92, 6] : [140, 30]);
  const drops = $derived(r.sweat === 0 ? [] : r.sweat === 1 ? [232, 252] : [212, 232, 252, 272]);
  // Heat leaving the skin: more arrows when the vessels widen.
  const arrows = $derived(
    r.vessel === 'dan' ? [40, 70, 170, 200] : r.vessel === 'co' ? [] : [55, 185],
  );
  const tone = $derived(r.band === 'de-chiu' ? 'ok' : 'info');
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Nhiệt độ môi trường" bind:value={air} min={0} max={45} step={1} unit="°C" />
    <label class="flex min-h-11 items-center gap-2 self-end text-sm">
      <input
        type="checkbox"
        class="h-5 w-5 accent-indigo-600 {focusRing}"
        bind:checked={exercising}
      />
      Đang vận động mạnh (cơ sinh thêm nhiều nhiệt)
    </label>
  </div>

  <svg
    viewBox="0 0 320 220"
    class="mx-auto block w-full max-w-lg"
    role="img"
    aria-label="Lát cắt da ở {air} °C{exercising
      ? ' khi vận động mạnh'
      : ''}: mạch máu {r.vessel === 'dan'
      ? 'dãn ra'
      : r.vessel === 'co'
        ? 'co lại'
        : 'bình thường'}, {r.sweat === 0
      ? 'không tiết mồ hôi'
      : r.sweat === 1
        ? 'tiết ít mồ hôi'
        : 'tiết nhiều mồ hôi'}{r.hairErect ? ', lông dựng lên' : ''}{r.shiver ? ', cơ run' : ''}."
  >
    <rect
      x="0"
      y="0"
      width="320"
      height="220"
      rx="14"
      fill={air >= 30 ? '#fff7ed' : air < 15 ? '#eff6ff' : '#f8fafc'}
    />
    <!-- layers -->
    <rect x="10" y="50" width="300" height="24" fill="#fed7aa" stroke="#92400e" />
    <rect x="10" y="74" width="300" height="96" fill="#fde7d7" stroke="#92400e" />
    <rect x="10" y="170" width="300" height="42" fill="#fef08a" stroke="#92400e" />
    <g font-size="9" fill="#78350f">
      <text x="14" y="66">biểu bì</text>
      <text x="14" y="86">bì</text>
      <text x="14" y="200">mỡ dưới da</text>
    </g>
    <!-- heat leaving the skin -->
    {#each arrows as ax (ax)}
      <path
        d="M {ax} 46 L {ax} 22 M {ax - 5} 28 L {ax} 22 L {ax + 5} 28"
        stroke="#f97316"
        stroke-width="2.5"
        fill="none"
      />
    {/each}
    {#if arrows.length}
      <text x="80" y="18" font-size="9" fill="#9a3412"
        >{air >= 35 ? 'nhiệt mất đi chủ yếu nhờ mồ hôi bay hơi' : 'nhiệt tỏa ra'}</text
      >
    {/if}
    <!-- blood vessel -->
    <path
      d="M 10 140 C 80 154, 160 118, 310 138"
      stroke={vesselColor}
      stroke-width={7 * r.vesselWidth}
      fill="none"
      stroke-linecap="round"
    />
    <text x="250" y="160" font-size="9" fill="#7f1d1d">mạch máu</text>
    <!-- hair, follicle, muscle -->
    <ellipse cx="96" cy="126" rx="8" ry="14" fill="#fcd34d" stroke="#92400e" />
    <path d="M 96 124 L {hairTip[0]} {hairTip[1]}" stroke="#422006" stroke-width="3" />
    <path
      d={r.hairErect ? 'M 98 108 L 128 96' : 'M 98 112 L 134 100'}
      stroke="#be123c"
      stroke-width={r.hairErect ? 6 : 4}
      stroke-linecap="round"
    />
    <text x="120" y="118" font-size="9" fill="#9f1239"
      >cơ co chân lông {r.hairErect ? 'co' : 'dãn'}</text
    >
    <!-- sweat gland -->
    <path
      d="M 252 150 q 12 -6 0 -12 q -12 -6 0 -12 L 246 50"
      stroke="#0284c7"
      stroke-width="2.5"
      fill="none"
    />
    <circle cx="252" cy="150" r="8" fill={r.sweat ? '#7dd3fc' : '#e0f2fe'} stroke="#0284c7" />
    <text x="222" y="100" font-size="9" fill="#075985" text-anchor="end">tuyến mồ hôi</text>
    {#each drops as dx (dx)}
      <path d="M {dx} 36 q -5 8 0 11 q 5 -3 0 -11 Z" fill="#38bdf8" stroke="#0369a1" />
    {/each}
    {#if r.shiver}
      <path
        d="M 150 186 l 6 -6 l 6 6 l 6 -6 l 6 6 l 6 -6 l 6 6"
        stroke="#7c3aed"
        stroke-width="2.5"
        fill="none"
      />
      <text x="200" y="188" font-size="9" fill="#5b21b6">cơ run, sinh nhiệt</text>
    {/if}
  </svg>

  <dl class="grid gap-2 text-sm sm:grid-cols-3">
    <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
      <dt class="text-slate-600">Mạch máu dưới da</dt>
      <dd class="font-semibold">
        {r.vessel === 'dan' ? 'Dãn ra' : r.vessel === 'co' ? 'Co lại' : 'Bình thường'}
      </dd>
    </div>
    <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
      <dt class="text-slate-600">Mồ hôi</dt>
      <dd class="font-semibold">
        {r.sweat === 0 ? 'Không tiết' : r.sweat === 1 ? 'Tiết ít' : 'Tiết nhiều'}
      </dd>
    </div>
    <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
      <dt class="text-slate-600">Thân nhiệt</dt>
      <dd class="font-semibold">Giữ ổn định khoảng 37 °C</dd>
    </div>
  </dl>
  <FeedbackNote {tone} text={r.text} />
  <p class="text-xs text-slate-600">Hình vẽ sơ lược, không theo tỉ lệ.</p>
</div>

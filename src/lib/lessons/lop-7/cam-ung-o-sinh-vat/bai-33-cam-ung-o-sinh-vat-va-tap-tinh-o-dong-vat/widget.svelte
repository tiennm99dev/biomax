<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import Seedling from '../_shared/seedling.svelte';
  import { FULL_DAYS, shootBend, shootLength } from '../_shared/tropism.js';
  import { MIMOSA, MIMOSA_TEXT, leafletAngle, lightText, mimosaStage, openness } from './engine.js';

  let tab = $state('huong-sang');

  // Phototropism
  let light = $state('phai');
  let days = $state(0);
  const MAX_DAYS = 5;
  const bend = $derived(
    shootBend(/** @type {import('../_shared/tropism.js').LightFrom} */ (light), days),
  );
  /** @type {Record<string, { x: number, y: number }>} */
  const SUN = { trai: { x: 26, y: 40 }, tren: { x: 120, y: 22 }, phai: { x: 214, y: 40 } };
  const sun = $derived(SUN[light] ?? SUN.tren);

  // Sensitive plant
  /** @type {number | null} */
  let t = $state(null);
  /** @type {(() => void) | null} */
  let stop = null;
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timer;
  let touches = $state(0);
  const open = $derived(openness(t));
  const stage = $derived(mimosaStage(t));

  function halt() {
    stop?.();
    stop = null;
    clearTimeout(timer);
  }

  function touch() {
    touches += 1;
    halt();
    if (reducedMotion()) {
      t = MIMOSA.close;
      timer = setTimeout(() => (t = null), (MIMOSA.reopen - MIMOSA.close) * 1000);
      return;
    }
    // Touching a half-open leaf folds it from where it is.
    t = (1 - open) * MIMOSA.close;
    stop = frameLoop((dt) => {
      const next = (t ?? 0) + dt;
      if (next >= MIMOSA.reopen) {
        t = null;
        halt();
      } else t = next;
    });
  }

  $effect(() => halt);

  // Leaf geometry: the petiole rises when open and droops when folded.
  const BASE = { x: 40, y: 112 };
  const petioleDir = $derived(-50 + 65 * (1 - open));
  const rad = (/** @type {number} */ d) => (d * Math.PI) / 180;
  const petioleTip = $derived({
    x: BASE.x + 60 * Math.cos(rad(petioleDir)),
    y: BASE.y + 60 * Math.sin(rad(petioleDir)),
  });
  const spread = $derived(0.35 + 0.65 * open);
  const pinnae = $derived(
    [-63, -21, 21, 63].map((a) => {
      const dir = petioleDir + a * spread;
      const leaflets = [1, 2, 3, 4, 5, 6, 7].map((i) => ({
        x: petioleTip.x + i * 7.5 * Math.cos(rad(dir)),
        y: petioleTip.y + i * 7.5 * Math.sin(rad(dir)),
      }));
      return {
        dir,
        end: {
          x: petioleTip.x + 56 * Math.cos(rad(dir)),
          y: petioleTip.y + 56 * Math.sin(rad(dir)),
        },
        leaflets,
      };
    }),
  );
  const angle = $derived(leafletAngle(open));

  const lights = [
    { value: 'trai', label: 'Bên trái' },
    { value: 'tren', label: 'Phía trên' },
    { value: 'phai', label: 'Bên phải' },
  ];
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hiện tượng"
    options={[
      { value: 'huong-sang', label: 'Cây hướng sáng' },
      { value: 'trinh-nu', label: 'Cây trinh nữ' },
    ]}
    bind:value={tab}
  />

  {#if tab === 'huong-sang'}
    <SegmentedControl
      label="Ánh sáng chiếu tới từ"
      options={lights}
      bind:value={light}
      onchange={() => (days = 0)}
    />
    <svg
      viewBox="0 0 240 200"
      class="mx-auto block w-full max-w-sm"
      role="img"
      aria-label="Chậu cây non, ánh sáng chiếu từ {light === 'trai'
        ? 'bên trái'
        : light === 'phai'
          ? 'bên phải'
          : 'phía trên'}, ngày {days}: ngọn cây {bend === 0
        ? 'mọc thẳng'
        : `uốn cong về ${bend < 0 ? 'bên trái' : 'bên phải'}`}"
    >
      <rect width="240" height="200" rx="12" fill="#f8fafc" />
      <circle cx={sun.x} cy={sun.y} r="13" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
      {#each [-14, 0, 14] as k (k)}
        <line
          x1={sun.x + (120 - sun.x) * 0.18 + (light === 'tren' ? k : 0)}
          y1={sun.y + (110 - sun.y) * 0.18 + (light === 'tren' ? 0 : k)}
          x2={sun.x + (120 - sun.x) * 0.45 + (light === 'tren' ? k : 0)}
          y2={sun.y + (110 - sun.y) * 0.45 + (light === 'tren' ? 0 : k)}
          stroke="#eab308"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      {/each}
      <g transform="translate(120 150)">
        <Seedling shoot={bend} length={shootLength(days)} />
      </g>
      <path d="M 86 150 h 68 l -8 40 h -52 z" fill="#c2410c" />
      <rect x="84" y="146" width="72" height="8" rx="3" fill="#78350f" />
    </svg>
    <div class="flex flex-wrap items-center gap-3">
      <button
        type="button"
        class={button.primary}
        disabled={days >= MAX_DAYS}
        onclick={() => (days += 1)}>Thêm 1 ngày</button
      >
      <button type="button" class={button.quiet} onclick={() => (days = 0)}>Làm lại</button>
      <span class="text-sm font-semibold text-slate-700">Ngày {days} / {MAX_DAYS}</span>
    </div>
    <FeedbackNote
      tone={days >= FULL_DAYS && light !== 'tren' ? 'ok' : 'info'}
      text={lightText(/** @type {import('../_shared/tropism.js').LightFrom} */ (light), days)}
    />
  {:else}
    <svg
      viewBox="0 0 240 200"
      class="mx-auto block w-full max-w-sm"
      role="img"
      aria-label={open > 0.9
        ? 'Lá cây trinh nữ đang xoè'
        : open < 0.1
          ? 'Lá cây trinh nữ đã cụp lại, cuống lá rủ xuống'
          : 'Lá cây trinh nữ đang khép mở'}
    >
      <rect width="240" height="200" rx="12" fill="#f0fdf4" />
      <rect x="0" y="176" width="240" height="24" fill="#a16207" />
      <path d="M 40 178 V 110" stroke="#9f1239" stroke-width="5" stroke-linecap="round" />
      <path
        d="M {BASE.x} {BASE.y} L {petioleTip.x} {petioleTip.y}"
        stroke="#9f1239"
        stroke-width="3"
        stroke-linecap="round"
      />
      {#each pinnae as p, i (i)}
        <line
          x1={petioleTip.x}
          y1={petioleTip.y}
          x2={p.end.x}
          y2={p.end.y}
          stroke="#166534"
          stroke-width="1.5"
        />
        {#each p.leaflets as l, j (j)}
          {#each [-1, 1] as side (side)}
            <ellipse
              cx="0"
              cy="-4.5"
              rx="2"
              ry="4.5"
              fill={open > 0.5 ? '#22c55e' : '#16a34a'}
              transform="translate({l.x} {l.y}) rotate({p.dir + 90 + side * angle})"
            />
          {/each}
        {/each}
      {/each}
    </svg>
    <div class="flex flex-wrap items-center gap-3">
      <button type="button" class={button.primary} onclick={touch}>Chạm vào lá</button>
      <span class="text-sm text-slate-700">Số lần chạm: {touches}</span>
    </div>
    <FeedbackNote tone={stage === 'cup' ? 'ok' : 'info'} text={MIMOSA_TEXT[stage]} />
    <p class="text-xs text-slate-600">
      Mô phỏng đã rút ngắn thời gian: ngoài thực tế, lá cụp lại sau vài giây và phải sau vài phút
      mới xoè ra trở lại.
    </p>
  {/if}
</div>

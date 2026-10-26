<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import Seedling from '../_shared/seedling.svelte';
  import { FULL_DAYS, bentOrgan, shootLength } from '../_shared/tropism.js';
  import { MAX_DAYS, coilPoints, contactOutcome, lightOutcome, waterOutcome } from './engine.js';

  let tab = $state('sang');
  let days = $state(0);

  // Phototropism
  let hole = $state('ben');
  const light = $derived(lightOutcome(/** @type {import('./engine.js').BoxHole} */ (hole), days));

  // Hydrotropism
  let lifted = $state(false);
  const water = $derived(waterOutcome(days));

  // Thigmotropism
  let stake = $state('co');
  const contact = $derived(contactOutcome(stake === 'co', days));
  const climbLength = $derived(30 + 22 * Math.min(days, MAX_DAYS));
  const fallen = $derived(bentOrgan(110, 170, climbLength, contact.sprawl, -1));

  function restart() {
    days = 0;
    lifted = false;
  }

  function addDay() {
    days = Math.min(MAX_DAYS, days + 1);
    lifted = false;
  }

  const text = $derived(
    tab === 'sang'
      ? light.text
      : tab === 'nuoc'
        ? lifted
          ? water.text
          : `Ngày ${days}: rễ nằm trong đất nên chưa nhìn thấy. Bấm "Nhấc cây ra xem rễ" để quan sát.`
        : contact.text,
  );
  const good = $derived(
    days >= FULL_DAYS &&
      ((tab === 'sang' && hole === 'ben') ||
        (tab === 'nuoc' && lifted) ||
        (tab === 'tiep-xuc' && stake === 'co')),
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Thí nghiệm"
    options={[
      { value: 'sang', label: 'Hướng sáng' },
      { value: 'nuoc', label: 'Hướng nước' },
      { value: 'tiep-xuc', label: 'Hướng tiếp xúc' },
    ]}
    bind:value={tab}
    onchange={restart}
  />

  {#if tab === 'sang'}
    <SegmentedControl
      label="Hộp carton úp lên chậu"
      options={[
        { value: 'nap', label: 'Lỗ trên nắp' },
        { value: 'ben', label: 'Lỗ ở thành bên' },
        { value: 'xoay', label: 'Lỗ bên, xoay chậu mỗi ngày' },
      ]}
      bind:value={hole}
      onchange={restart}
    />
    <svg
      viewBox="0 0 240 200"
      class="mx-auto block w-full max-w-sm"
      role="img"
      aria-label="Chậu đỗ trong hộp carton, ngày {days}: thân cây {light.bend === 0
        ? 'mọc thẳng'
        : 'cong về phía lỗ thủng bên phải'}"
    >
      <rect width="240" height="200" rx="12" fill="#f8fafc" />
      {#if hole === 'nap'}
        <circle cx="120" cy="14" r="10" fill="#facc15" />
        {#each [110, 120, 130] as x (x)}
          <line x1={x} y1="26" x2={x} y2="58" stroke="#eab308" stroke-width="2.5" />
        {/each}
      {:else}
        <circle cx="226" cy="85" r="10" fill="#facc15" />
        {#each [77, 85, 93] as y (y)}
          <line x1="214" y1={y} x2="168" y2={y} stroke="#eab308" stroke-width="2.5" />
        {/each}
      {/if}
      <g transform="translate(120 150)">
        <Seedling shoot={light.bend} length={shootLength(days)} />
      </g>
      <path d="M 92 150 h 56 l -6 26 h -44 z" fill="#c2410c" />
      <rect x="90" y="146" width="60" height="7" rx="3" fill="#78350f" />
      <!-- Cardboard box drawn as a cut-away outline, with its opening left blank. -->
      <path
        d={hole === 'nap'
          ? 'M 60 176 V 40 H 105 M 135 40 H 180 V 176'
          : 'M 60 176 V 40 H 180 V 70 M 180 100 V 176'}
        fill="none"
        stroke="#92400e"
        stroke-width="5"
      />
      <line x1="40" y1="178" x2="200" y2="178" stroke="#64748b" stroke-width="3" />
      {#if hole === 'xoay'}
        <text x="120" y="196" font-size="10" text-anchor="middle" fill="#334155"
          >xoay chậu mỗi ngày ↻</text
        >
      {/if}
    </svg>
  {:else if tab === 'nuoc'}
    <svg
      viewBox="0 0 260 200"
      class="mx-auto block w-full max-w-md"
      role="img"
      aria-label={lifted
        ? `Ngày ${days}: rễ cây chậu thí nghiệm ${water.test > 10 ? 'lệch về phía chai nước' : 'gần như thẳng'}, rễ cây chậu đối chứng mọc thẳng`
        : `Hai chậu đỗ ngày ${days}, chậu thí nghiệm có chai nước đục lỗ đặt bên phải`}
    >
      <rect width="260" height="200" rx="12" fill="#f8fafc" />
      {#each [{ x: 70, bend: water.test, test: true }, { x: 190, bend: water.control, test: false }] as pot (pot.x)}
        <rect x={pot.x - 46} y="90" width="92" height="92" rx="4" fill="#a16207" />
        {#if pot.test}
          <rect x={pot.x + 6} y="90" width="40" height="92" fill="#1e3a8a" opacity="0.25" />
        {:else}
          <rect x={pot.x - 46} y="90" width="92" height="92" fill="#1e3a8a" opacity="0.1" />
        {/if}
        {#if lifted}
          <rect x={pot.x - 40} y="93" width="80" height="70" rx="6" fill="#fef3c7" opacity="0.9" />
        {/if}
        <g transform="translate({pot.x} 92)">
          <Seedling shoot={0} length={0.6} root={lifted ? pot.bend : null} />
        </g>
        <text x={pot.x} y="196" font-size="10" text-anchor="middle" fill="#334155"
          >{pot.test ? 'Chậu thí nghiệm' : 'Chậu đối chứng'}</text
        >
      {/each}
      <rect x="120" y="70" width="14" height="60" rx="4" fill="#bae6fd" stroke="#0369a1" />
      <circle cx="119" cy="122" r="2" fill="#0369a1" />
      <circle cx="117" cy="130" r="2" fill="#0369a1" />
    </svg>
    <button type="button" class={button.secondary} onclick={() => (lifted = !lifted)}
      >{lifted ? 'Trồng cây lại vào chậu' : 'Nhấc cây ra xem rễ'}</button
    >
  {:else}
    <SegmentedControl
      label="Cắm cọc cạnh cây"
      options={[
        { value: 'co', label: 'Có cọc' },
        { value: 'khong', label: 'Không có cọc' },
      ]}
      bind:value={stake}
      onchange={restart}
    />
    <svg
      viewBox="0 0 240 200"
      class="mx-auto block w-full max-w-sm"
      role="img"
      aria-label={stake === 'co'
        ? `Ngày ${days}: cây leo có cọc, tua cuốn quấn ${contact.turns >= 3 ? 'chặt' : 'một phần'} quanh cọc`
        : `Ngày ${days}: cây leo không có cọc, thân ${contact.sprawl > 40 ? 'bò lan trên mặt đất' : 'đang ngả xuống'}`}
    >
      <rect width="240" height="200" rx="12" fill="#f0fdf4" />
      <rect x="0" y="170" width="240" height="30" fill="#a16207" />
      {#if stake === 'co'}
        <rect x="128" y="30" width="6" height="142" fill="#92400e" />
        <path
          d="M 110 170 Q 116 {170 - climbLength / 2} 126 {170 - climbLength}"
          fill="none"
          stroke="#15803d"
          stroke-width="4"
          stroke-linecap="round"
        />
        <polyline
          points={coilPoints(131, 170 - climbLength, 170 - climbLength * 0.45, contact.turns)}
          fill="none"
          stroke="#65a30d"
          stroke-width="2"
        />
        <ellipse cx="118" cy={170 - climbLength * 0.6} rx="10" ry="5" fill="#22c55e" />
        <ellipse cx="122" cy={168 - climbLength} rx="9" ry="5" fill="#16a34a" />
      {:else}
        <path
          d={fallen.path}
          fill="none"
          stroke="#15803d"
          stroke-width="4"
          stroke-linecap="round"
        />
        <ellipse cx={fallen.tip.x} cy={fallen.tip.y - 3} rx="9" ry="5" fill="#16a34a" />
      {/if}
    </svg>
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    <button type="button" class={button.primary} disabled={days >= MAX_DAYS} onclick={addDay}
      >Thêm 1 ngày</button
    >
    <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
    <span class="text-sm font-semibold text-slate-700">Ngày {days} / {MAX_DAYS}</span>
  </div>
  <FeedbackNote tone={good ? 'ok' : 'info'} {text} />
</div>

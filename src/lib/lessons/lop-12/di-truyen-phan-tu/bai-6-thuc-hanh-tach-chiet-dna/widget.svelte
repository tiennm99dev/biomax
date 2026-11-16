<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import OrderInput from '#lib/core/order-input.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { SAMPLES, STEPS, describe, describeWind, extract, firstWrong } from './engine.js';

  /** @type {'order' | 'run'} */
  let mode = $state('order');

  // ---- Order the steps ----
  const items = STEPS.map((s) => s.text);
  const START = [2, 0, 4, 1, 5, 3];
  let order = $state([...START]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let orderNote = $state(null);
  let orderDone = $state(false);

  function checkOrder() {
    const at = firstWrong(order);
    if (at === -1) {
      orderDone = true;
      orderNote = {
        tone: 'ok',
        text: 'Đúng trình tự: nghiền, lọc, phá màng bằng nước rửa bát, phân giải protein bằng nước dứa, kết tủa bằng cồn lạnh, quấn DNA.',
      };
      return;
    }
    orderNote = {
      tone: 'warn',
      text: `Vị trí ${at + 1} chưa đúng. ${STEPS[at].why}`,
    };
  }

  function resetOrder() {
    order = [...START];
    orderNote = null;
    orderDone = false;
  }

  // ---- Virtual tube ----
  /** @type {import('./engine.js').SampleId} */
  let sample = $state('gan');
  let detergent = $state(true);
  /** @type {import('./engine.js').JuiceId} */
  let juice = $state('tuoi');
  let cold = $state(true);
  let gentle = $state(true);
  let stage = $state(/** @type {'chuan-bi' | 'rot' | 'ket-tua' | 'quan'} */ ('chuan-bi'));
  let progress = $state(0);
  let windGentle = $state(true);

  const setup = $derived({ sample, detergent, juice, cold, gentle });
  const result = $derived(extract(setup));
  const note = $derived(
    stage === 'chuan-bi'
      ? {
          tone: /** @type {const} */ ('info'),
          text: 'Chọn mẫu vật và cách làm, rồi rót cồn vào ống nghiệm đã có dịch tế bào.',
        }
      : stage === 'rot'
        ? { tone: /** @type {const} */ ('info'), text: 'Đang rót cồn và chờ DNA kết tủa…' }
        : stage === 'ket-tua'
          ? describe(setup)
          : describeWind(result, windGentle),
  );

  $effect(() => {
    if (stage !== 'rot') return;
    return frameLoop((dt) => {
      progress = Math.min(1, progress + dt / 3);
      if (progress >= 1) stage = 'ket-tua';
    });
  });

  function pour() {
    progress = 0;
    if (reducedMotion()) {
      progress = 1;
      stage = 'ket-tua';
      return;
    }
    stage = 'rot';
  }

  /** @param {boolean} soft */
  function wind(soft) {
    windGentle = soft;
    stage = 'quan';
  }

  function resetTube() {
    stage = 'chuan-bi';
    progress = 0;
  }

  // Tube geometry.
  const TOP = 40;
  const BOTTOM = 232;
  const LEFT = 52;
  const RIGHT = 108;
  const LYSATE_TOP = 160;
  const ETHANOL_TOP = 64;
  const ethanolTop = $derived(LYSATE_TOP - (LYSATE_TOP - ETHANOL_TOP) * progress);

  /** Fixed spots and shapes of the DNA threads, so every visit looks the same. */
  const WISPS = [
    { x: 60, h: 46, bend: 5 },
    { x: 66, h: 70, bend: -4 },
    { x: 72, h: 38, bend: 7 },
    { x: 78, h: 82, bend: -6 },
    { x: 84, h: 56, bend: 4 },
    { x: 90, h: 74, bend: -5 },
    { x: 96, h: 42, bend: 6 },
    { x: 101, h: 60, bend: -3 },
  ];
  const shown = $derived(Math.round(WISPS.length * Math.min(1, result.amount)));
  const grow = $derived(Math.max(0, (progress - 0.3) / 0.7));
  const showPrecipitate = $derived(stage !== 'chuan-bi' && result.look !== 'khong');
  const wound = $derived(stage === 'quan' && windGentle && result.layer);
  const broken = $derived(stage === 'quan' && !windGentle && result.layer);

  /** @param {{ x: number, h: number, bend: number }} w */
  function wispPath(w) {
    const top = LYSATE_TOP - w.h * grow;
    const mid = (LYSATE_TOP + top) / 2;
    return `M ${w.x} ${LYSATE_TOP} Q ${w.x + w.bend} ${mid} ${w.x - w.bend / 2} ${top}`;
  }

  const lysate = $derived(SAMPLES[sample].lysate);
  const tubeLabel = $derived(
    stage === 'chuan-bi'
      ? 'Ống nghiệm chứa dịch tế bào, chưa có cồn'
      : result.look === 'khong'
        ? 'Ống nghiệm có lớp cồn trên dịch, không thấy kết tủa'
        : result.look === 'lo-lung'
          ? 'Cồn trộn lẫn với dịch, kết tủa trắng lơ lửng khắp ống'
          : broken
            ? 'Đũa trong lớp cồn, các sợi DNA đứt thành đoạn vụn'
            : wound
              ? 'Kết tủa quấn quanh đầu đũa'
              : result.look === 'von'
                ? 'Kết tủa vón cục đục ở ranh giới dịch và lớp cồn'
                : 'Các sợi DNA trắng nổi lên lớp cồn',
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hoạt động"
    options={[
      { value: 'order', label: 'Sắp xếp các bước' },
      { value: 'run', label: 'Tách chiết ảo' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'order'}
    <p id="dna-order-label" class="text-sm text-slate-700">
      Đưa các bước tách chiết DNA từ gan gà về đúng trình tự bằng các nút mũi tên.
    </p>
    <OrderInput
      {items}
      bind:value={order}
      labelledby="dna-order-label"
      disabled={orderDone}
      onchange={() => (orderNote = null)}
    />
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} disabled={orderDone} onclick={checkOrder}>
        Kiểm tra
      </button>
      <button type="button" class={button.quiet} onclick={resetOrder}>Làm lại</button>
      {#if orderDone}
        <button type="button" class={button.secondary} onclick={() => (mode = 'run')}>
          Sang tách chiết ảo
        </button>
      {/if}
    </div>
    {#if orderNote}
      <FeedbackNote tone={orderNote.tone} text={orderNote.text} />
    {/if}
  {:else}
    <div class="grid gap-4 sm:grid-cols-[160px_1fr]">
      <svg viewBox="0 0 160 250" class="mx-auto h-72 w-auto" role="img" aria-label={tubeLabel}>
        <path
          d="M {LEFT} {TOP} L {LEFT} {BOTTOM -
            20} Q {LEFT} {BOTTOM} 80 {BOTTOM} Q {RIGHT} {BOTTOM} {RIGHT} {BOTTOM -
            20} L {RIGHT} {TOP}"
          fill="#f8fafc"
          stroke="#475569"
          stroke-width="2"
        />
        {#if stage !== 'chuan-bi' && !result.layer}
          <path
            d="M {LEFT + 1} {ethanolTop} L {LEFT + 1} {BOTTOM - 20} Q {LEFT + 1} {BOTTOM -
              1} 80 {BOTTOM - 1} Q {RIGHT - 1} {BOTTOM - 1} {RIGHT - 1} {BOTTOM - 20} L {RIGHT -
              1} {ethanolTop} Z"
            fill={lysate}
            opacity="0.55"
          />
        {:else}
          <path
            d="M {LEFT + 1} {LYSATE_TOP} L {LEFT + 1} {BOTTOM - 20} Q {LEFT + 1} {BOTTOM -
              1} 80 {BOTTOM - 1} Q {RIGHT - 1} {BOTTOM - 1} {RIGHT - 1} {BOTTOM - 20} L {RIGHT -
              1} {LYSATE_TOP} Z"
            fill={lysate}
          />
          {#if stage !== 'chuan-bi'}
            <rect
              x={LEFT + 1}
              y={ethanolTop}
              width={RIGHT - LEFT - 2}
              height={LYSATE_TOP - ethanolTop}
              fill="#e0f2fe"
              opacity="0.8"
            />
          {/if}
        {/if}

        {#if showPrecipitate && !wound && !broken}
          {#if result.look === 'lo-lung'}
            {#each WISPS as w, i (w.x)}
              {#if i < shown}
                <circle
                  cx={w.x}
                  cy={LYSATE_TOP - w.h + 40 + (i % 3) * 18}
                  r="1.8"
                  fill="#ffffff"
                  stroke="#94a3b8"
                  stroke-width="0.4"
                  opacity={grow}
                />
              {/if}
            {/each}
          {:else if result.look === 'von'}
            {#each WISPS as w, i (w.x)}
              {#if i < shown && i % 2 === 0}
                <ellipse
                  cx={w.x + 3}
                  cy={LYSATE_TOP - 6 * grow}
                  rx={5 * grow}
                  ry={3.5 * grow}
                  fill="#e7e5e4"
                  stroke="#a8a29e"
                  stroke-width="0.6"
                />
              {/if}
            {/each}
          {:else}
            {#each WISPS as w, i (w.x)}
              {#if i < shown}
                <path
                  d={wispPath(w)}
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2.2"
                  stroke-linecap="round"
                />
                <path
                  d={wispPath(w)}
                  fill="none"
                  stroke="#cbd5e1"
                  stroke-width="0.6"
                  stroke-linecap="round"
                />
              {/if}
            {/each}
          {/if}
        {/if}

        {#if stage === 'quan'}
          <line x1="80" y1="6" x2="80" y2="150" stroke="#a16207" stroke-width="3" />
          {#if wound && result.look !== 'khong'}
            {#each [0, 1, 2] as k (k)}
              <ellipse
                cx="80"
                cy={128 + k * 7}
                rx={result.look === 'von' ? 7 : 5 + 4 * Math.min(1, result.amount)}
                ry="3"
                fill={result.look === 'von' ? '#e7e5e4' : '#ffffff'}
                stroke="#94a3b8"
                stroke-width="0.6"
              />
            {/each}
          {/if}
          {#if broken && result.look !== 'khong'}
            {#each WISPS as w, i (w.x)}
              {#if i < shown}
                <line
                  x1={w.x}
                  y1={LYSATE_TOP - 10 - (i % 4) * 14}
                  x2={w.x + 3}
                  y2={LYSATE_TOP - 13 - (i % 4) * 14}
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              {/if}
            {/each}
          {/if}
        {/if}

        <text x="122" y={LYSATE_TOP + 30} font-size="9" fill="#475569">dịch</text>
        {#if stage !== 'chuan-bi' && result.layer}
          <text x="122" y={ETHANOL_TOP + 30} font-size="9" fill="#475569">cồn</text>
        {/if}
      </svg>

      <div class="space-y-3">
        <SegmentedControl
          label="Mẫu vật"
          value={sample}
          onchange={(v) => {
            sample = v === 'chuoi' ? 'chuoi' : v === 'chuoi-it' ? 'chuoi-it' : 'gan';
            resetTube();
          }}
          options={[
            { value: 'gan', label: SAMPLES.gan.label },
            { value: 'chuoi-it', label: SAMPLES['chuoi-it'].label },
            { value: 'chuoi', label: SAMPLES.chuoi.label },
          ]}
        />
        <SegmentedControl
          label="Nước rửa bát pha loãng"
          value={detergent ? 'co' : 'khong'}
          onchange={(v) => {
            detergent = v === 'co';
            resetTube();
          }}
          options={[
            { value: 'co', label: 'Có cho' },
            { value: 'khong', label: 'Bỏ qua' },
          ]}
        />
        <SegmentedControl
          label="Nước dứa"
          value={juice}
          onchange={(v) => {
            juice = v === 'dun-soi' ? 'dun-soi' : v === 'khong' ? 'khong' : 'tuoi';
            resetTube();
          }}
          options={[
            { value: 'tuoi', label: 'Dứa tươi' },
            { value: 'dun-soi', label: 'Đã đun sôi' },
            { value: 'khong', label: 'Không cho' },
          ]}
        />
        <SegmentedControl
          label="Cồn"
          value={cold ? 'lanh' : 'am'}
          onchange={(v) => {
            cold = v === 'lanh';
            resetTube();
          }}
          options={[
            { value: 'lanh', label: 'Cồn lạnh' },
            { value: 'am', label: 'Cồn không làm lạnh' },
          ]}
        />
        <SegmentedControl
          label="Cách rót cồn"
          value={gentle ? 'nhe' : 'manh'}
          onchange={(v) => {
            gentle = v === 'nhe';
            resetTube();
          }}
          options={[
            { value: 'nhe', label: 'Rót nhẹ theo thành ống' },
            { value: 'manh', label: 'Đổ mạnh rồi lắc' },
          ]}
        />
        <div class="flex flex-wrap gap-2">
          <button type="button" class={button.primary} disabled={stage === 'rot'} onclick={pour}>
            {stage === 'rot' ? 'Đang rót…' : 'Rót cồn'}
          </button>
          {#if stage === 'ket-tua' || stage === 'quan'}
            <button type="button" class={button.secondary} onclick={() => wind(true)}>
              Xoay nhẹ đũa
            </button>
            <button type="button" class={button.quiet} onclick={() => wind(false)}>
              Khuấy mạnh
            </button>
          {/if}
          <button type="button" class={button.quiet} onclick={resetTube}>Làm lại</button>
        </div>
      </div>
    </div>
    <FeedbackNote tone={note.tone} text={note.text} />
  {/if}
</div>

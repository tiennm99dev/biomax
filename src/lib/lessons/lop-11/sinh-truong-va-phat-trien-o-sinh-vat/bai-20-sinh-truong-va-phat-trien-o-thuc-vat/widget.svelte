<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import {
    CRITICAL_NIGHT,
    FLASHES,
    PLANTS,
    flashForm,
    flowers,
    hoursText,
    plant,
    verdict,
  } from './engine.js';

  /** @type {import('./engine.js').PlantId} */
  let id = $state('ngay-ngan');
  let day = $state(10);
  /** @type {import('./engine.js').FlashId} */
  let flash = $state('khong');

  const p = $derived(plant(id));
  const blooms = $derived(flowers(id, day, flash));
  const note = $derived(verdict(id, day, flash));

  const LEFT = 20;
  const W = 300;
  /** @param {number} h */
  const hx = (h) => LEFT + (W * h) / 24;
  const midNight = $derived(day + (24 - day) / 2);
  const leaves = $derived(blooms ? 4 : 6);

  /** @param {string | number} v @returns {import('./engine.js').PlantId} */
  const asPlant = (v) => PLANTS.find((x) => x.id === v)?.id ?? 'ngay-ngan';
  /** @param {string | number} v @returns {import('./engine.js').FlashId} */
  const asFlash = (v) => FLASHES.find((x) => x.id === v)?.id ?? 'khong';
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Nhóm cây"
    value={id}
    options={PLANTS.map((x) => ({ value: x.id, label: `${x.group} (${x.name})` }))}
    onchange={(v) => (id = asPlant(v))}
  />
  <SliderField
    label="Độ dài ngày (thời gian chiếu sáng)"
    bind:value={day}
    min={6}
    max={18}
    step={1}
    format={(v) => `${hoursText(v)} sáng, ${hoursText(24 - v)} tối`}
  />
  <SegmentedControl
    label="Chiếu sáng giữa đêm"
    value={flash}
    options={FLASHES.map((x) => ({ value: x.id, label: x.label }))}
    onchange={(v) => (flash = asFlash(v))}
  />

  <svg
    viewBox="0 0 340 210"
    class="mx-auto block w-full max-w-lg rounded-xl bg-sky-50"
    role="img"
    aria-label="Một ngày đêm: {hoursText(day)} sáng, {hoursText(
      24 - day,
    )} tối. {p.group} {p.name}: {blooms ? 'ra hoa' : 'không ra hoa'}."
  >
    <rect x={hx(0)} y="14" width={hx(day) - hx(0)} height="22" fill="#fde047" />
    <rect x={hx(day)} y="14" width={hx(24) - hx(day)} height="22" fill="#1e293b" />
    {#if flash !== 'khong'}
      <rect x={hx(midNight) - 3} y="10" width="6" height="30" fill="#ef4444" />
      {#if flash === 'do-do-xa'}
        <rect x={hx(midNight) + 3} y="10" width="5" height="30" fill="#7f1d1d" />
      {/if}
      <text x={hx(midNight)} y="52" font-size="9" fill="#b91c1c" text-anchor="middle">
        {flash === 'do' ? 'Pr → Pfr' : 'Pr → Pfr → Pr'}
      </text>
    {/if}
    <line
      x1={hx(24 - CRITICAL_NIGHT)}
      y1="8"
      x2={hx(24 - CRITICAL_NIGHT)}
      y2="42"
      stroke="#6366f1"
      stroke-dasharray="3 2"
    />
    <text x={hx(0)} y="8" font-size="9" fill="#475569">0 h</text>
    <text x={hx(24)} y="8" font-size="9" fill="#475569" text-anchor="end">24 h</text>
    <text x={(hx(0) + hx(day)) / 2} y="29" font-size="10" fill="#713f12" text-anchor="middle">
      ngày
    </text>
    <text x={(hx(day) + hx(24)) / 2} y="29" font-size="10" fill="#e2e8f0" text-anchor="middle">
      đêm
    </text>

    <rect x="120" y="186" width="100" height="18" rx="3" fill="#a16207" />
    <path d="M 170 186 L 170 {blooms ? 92 : 100}" stroke="#15803d" stroke-width="4" />
    {#each Array.from({ length: leaves }, (_, i) => i) as i (i)}
      {@const y = 176 - i * 13}
      {@const side = i % 2 === 0 ? 1 : -1}
      <ellipse
        cx={170 + side * 16}
        cy={y}
        rx="15"
        ry="6"
        fill="#22c55e"
        transform="rotate({side * -20} {170 + side * 16} {y})"
      />
    {/each}
    {#if blooms}
      {#each [-14, 0, 14] as dx (dx)}
        {@const cy = dx === 0 ? 82 : 92}
        {#each [0, 72, 144, 216, 288] as a (a)}
          <ellipse
            cx={170 + dx}
            cy={cy - 6}
            rx="3.5"
            ry="6"
            fill={id === 'ngay-dai' ? '#fef9c3' : id === 'trung-tinh' ? '#fde047' : '#f472b6'}
            stroke="#a16207"
            stroke-width="0.5"
            transform="rotate({a} {170 + dx} {cy})"
          />
        {/each}
        <circle cx={170 + dx} {cy} r="3" fill="#ca8a04" />
      {/each}
    {:else}
      <circle cx="170" cy="96" r="4" fill="#16a34a" />
    {/if}
    <text x="250" y="150" font-size="11" fill={blooms ? '#047857' : '#b45309'} font-weight="700">
      {blooms ? 'Ra hoa' : 'Chưa ra hoa'}
    </text>
  </svg>
  <p class="text-center text-xs text-slate-600">
    Vạch đứt: ranh giới khi đêm dài đúng {CRITICAL_NIGHT} giờ (đêm tới hạn trong mô hình này).
    {#if flash !== 'khong'}
      Sau lần chiếu, phytochrome chủ yếu ở dạng {flashForm(flash)}.
    {/if}
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />

  <table class="w-full text-sm">
    <caption class="pb-1 text-left text-slate-600">
      Cùng điều kiện chiếu sáng, ba nhóm cây phản ứng thế nào?
    </caption>
    <thead>
      <tr class="text-left">
        <th class="py-1 pr-2">Nhóm cây</th>
        <th class="py-1 pr-2">Ví dụ khác</th>
        <th class="py-1">Kết quả</th>
      </tr>
    </thead>
    <tbody>
      {#each PLANTS as x (x.id)}
        {@const ok = flowers(x.id, day, flash)}
        <tr class={x.id === id ? 'bg-indigo-50 font-semibold' : ''}>
          <td class="py-1 pr-2">{x.group}</td>
          <td class="py-1 pr-2 font-normal text-slate-600">{x.others}</td>
          <td class="py-1 {ok ? 'text-emerald-700' : 'text-amber-700'}">
            {ok ? 'Ra hoa' : 'Không'}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

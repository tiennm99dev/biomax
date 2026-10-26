<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { CONTENT_NAME, WAIT_MIN, looks, verdict } from './engine.js';

  /** @type {import('./engine.js').JarContent} */
  let content = $state('nay-mam');
  let minutes = $state(0);
  let opened = $state(false);

  const v = $derived(verdict(content, minutes));

  const W = 360;
  const H = 230;
  const JARS = [
    { id: 'A', x: 95, label: 'Chuông A' },
    { id: 'B', x: 265, label: 'Chuông B' },
  ];

  /** Limewater colour: clear blue-grey to milky white. @param {number} c */
  const water = (c) =>
    `rgb(${Math.round(214 + 34 * c)}, ${Math.round(234 + 14 * c)}, ${Math.round(254 - 8 * c)})`;

  /** Seeds in the dish, fixed positions. */
  const SEEDS = [-30, -18, -6, 6, 18, 30].map((dx, i) => ({ dx, dy: i % 2 ? -2 : 1 }));

  function reset() {
    minutes = 0;
    opened = false;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Trong chuông A đặt"
    options={[
      { value: 'nay-mam', label: 'Hạt đang nảy mầm' },
      { value: 'kho', label: 'Hạt khô' },
      { value: 'luoc', label: 'Hạt đã luộc chín' },
    ]}
    bind:value={content}
    onchange={reset}
  />

  <SliderField
    label="Thời gian để hai chuông"
    bind:value={minutes}
    min={0}
    max={90}
    step={5}
    unit="phút"
    oninput={() => (opened = false)}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="block w-full"
    role="img"
    aria-label="Hai chuông thuỷ tinh: chuông A có {CONTENT_NAME[
      content
    ]} và cốc nước vôi trong, chuông B chỉ có cốc nước vôi trong; sau {minutes} phút"
  >
    <rect x="0" y="200" width={W} height="10" fill="#cbd5e1" />
    {#each JARS as jar (jar.id)}
      {@const c = jar.id === 'A' ? v.a : v.b}
      <!-- bell jar -->
      <path
        d="M {jar.x - 75} 200 L {jar.x - 75} 70 Q {jar.x - 75} 25 {jar.x} 25 Q {jar.x +
          75} 25 {jar.x + 75} 70 L {jar.x + 75} 200"
        fill="#f0f9ff"
        fill-opacity="0.5"
        stroke="#7dd3fc"
        stroke-width="3"
      />
      <rect x={jar.x - 6} y="12" width="12" height="14" rx="4" fill="#7dd3fc" />
      <!-- beaker of limewater -->
      {@const bx = jar.id === 'A' ? jar.x + 18 : jar.x - 22}
      <rect x={bx} y="130" width="44" height="68" fill={water(c)} />
      <rect
        x={bx}
        y="130"
        width="44"
        height={Math.max(1.5, 8 * c)}
        fill="#ffffff"
        opacity={Math.min(1, 0.3 + c)}
      />
      {#each [0, 1, 2, 3, 4, 5, 6, 7] as k (k)}
        <circle
          cx={bx + 6 + ((k * 13) % 34)}
          cy={146 + ((k * 17) % 48)}
          r="2.2"
          fill="#ffffff"
          opacity={Math.max(0, c - 0.25 - k * 0.06)}
        />
      {/each}
      <path
        d="M {bx - 2} 112 L {bx - 2} 198 L {bx + 46} 198 L {bx + 46} 112"
        fill="none"
        stroke="#64748b"
        stroke-width="2"
      />
      <text x={bx + 22} y="106" font-size="10" text-anchor="middle" fill="#334155"
        >nước vôi trong</text
      >
      {#if jar.id === 'A'}
        <!-- Petri dish with seeds -->
        {@const dx = jar.x - 38}
        <ellipse cx={dx} cy="194" rx="36" ry="6" fill="#e2e8f0" stroke="#64748b" />
        {#each SEEDS as s, i (i)}
          <ellipse
            cx={dx + s.dx}
            cy={189 + s.dy}
            rx="5"
            ry="3.6"
            fill={content === 'luoc' ? '#d6c7a1' : content === 'kho' ? '#3f6212' : '#65a30d'}
          />
          {#if content === 'nay-mam'}
            <path
              d="M {dx + s.dx} {186 + s.dy} q 3 -8 -1 -14"
              stroke="#f5f5dc"
              stroke-width="2"
              fill="none"
            />
          {/if}
        {/each}
        <text x={dx} y="168" font-size="10" text-anchor="middle" fill="#334155">
          {content === 'nay-mam' ? 'hạt nảy mầm' : content === 'kho' ? 'hạt khô' : 'hạt luộc'}
        </text>
      {/if}
      <text x={jar.x} y="225" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a"
        >{jar.label}</text
      >
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={() => (opened = true)}
      >Mở chuông, quan sát</button
    >
    <button type="button" class={button.quiet} onclick={() => (minutes = WAIT_MIN)}>Để 1 giờ</button
    >
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  <div class="min-h-16 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
    {#if opened}
      <p><strong>Chuông A:</strong> nước vôi trong {looks(v.a)}.</p>
      <p><strong>Chuông B:</strong> nước vôi trong {looks(v.b)}.</p>
      <p class="mt-2">{v.text}</p>
    {:else}
      <p>
        Kéo thời gian (sách để khoảng 1 giờ), rồi bấm "Mở chuông, quan sát" để ghi kết quả ở hai
        chuông.
      </p>
    {/if}
  </div>
</div>

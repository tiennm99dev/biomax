<script>
  import { button } from '#lib/core/ui.js';
  import { STAGES, nutrientsAfter } from './engine.js';

  let i = $state(0);
  const stage = $derived(STAGES[i]);
  const after = $derived(nutrientsAfter(i));

  /** @param {number} next */
  function go(next) {
    i = Math.min(STAGES.length - 1, Math.max(0, next));
  }

  /** @param {KeyboardEvent} e @param {number} k */
  function key(e, k) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      go(k);
    }
  }

  /** Outline of each organ, in the same order as the stages. */
  const SHAPES = [
    'M 96 30 Q 120 18 144 30 Q 150 46 120 54 Q 90 46 96 30 Z',
    'M 116 56 L 116 140 L 124 140 L 124 56 Z',
    'M 122 140 Q 182 130 186 170 Q 184 204 140 200 Q 122 196 124 182 Q 150 186 156 172 Q 150 150 122 152 Z',
    'M 96 222 Q 150 210 150 232 Q 150 250 98 250 Q 92 266 146 268 Q 152 282 108 286 Q 96 286 98 274 Q 132 274 136 268',
    'M 70 300 L 70 212 L 172 212 L 172 300 Q 172 316 124 318',
    'M 114 316 L 126 316 L 126 384 L 114 384 Z',
  ];
  /** Organs drawn as a thick tube rather than a filled shape. */
  const TUBES = [3, 4];
</script>

<div class="space-y-4">
  <div class="grid items-start gap-4 sm:grid-cols-[minmax(0,14rem)_1fr]">
    <svg
      viewBox="0 0 240 400"
      class="mx-auto block w-full max-w-56"
      role="group"
      aria-label="Ống tiêu hóa người; thức ăn đang ở {stage.organ.toLowerCase()}"
    >
      <rect x="0" y="0" width="240" height="400" rx="14" fill="#fff7ed" />
      <!-- liver and pancreas (digestive glands) -->
      <path
        d="M 60 150 Q 110 128 132 150 Q 120 182 74 180 Q 54 170 60 150 Z"
        fill="#a16207"
        opacity="0.45"
      />
      <text x="70" y="166" font-size="10" fill="#422006">gan</text>
      <ellipse cx="150" cy="208" rx="24" ry="5" fill="#fde68a" stroke="#ca8a04" />
      <text x="178" y="212" font-size="10" fill="#713f12">tụy</text>
      {#each STAGES as st, k (st.id)}
        {@const active = k === i}
        <g
          role="button"
          tabindex="0"
          aria-label={st.organ}
          aria-pressed={active}
          class="cursor-pointer outline-none focus-visible:opacity-70"
          onclick={() => go(k)}
          onkeydown={(e) => key(e, k)}
        >
          <path
            d={SHAPES[k]}
            fill={TUBES.includes(k) ? 'none' : active ? '#fb923c' : '#fed7aa'}
            stroke={TUBES.includes(k)
              ? active
                ? '#ea580c'
                : '#fdba74'
              : active
                ? '#9a3412'
                : '#c2410c'}
            stroke-width={TUBES.includes(k) ? (k === 4 ? 14 : 8) : active ? 2.5 : 1.5}
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </g>
      {/each}
      <circle
        cx={stage.x}
        cy={stage.y}
        r="9"
        fill="#65a30d"
        stroke="#14532d"
        stroke-width="2"
        class="pointer-events-none motion-safe:transition-all motion-safe:duration-500"
      />
    </svg>

    <div class="space-y-3 text-sm" aria-live="polite">
      <p class="text-base font-semibold text-orange-900">
        {i + 1}. {stage.organ}
      </p>
      <dl class="space-y-2">
        <div>
          <dt class="font-semibold text-slate-700">Tiêu hóa cơ học</dt>
          <dd>{stage.mechanical}</dd>
        </div>
        <div>
          <dt class="font-semibold text-slate-700">Tiêu hóa hóa học</dt>
          <dd>{stage.chemical}</dd>
        </div>
        <div>
          <dt class="font-semibold text-slate-700">Hấp thụ</dt>
          <dd>{stage.absorption}</dd>
        </div>
      </dl>
      <table class="w-full text-left text-xs">
        <caption class="mb-1 text-left font-semibold text-slate-700"
          >Các chất trong thức ăn sau khi qua {stage.organ.toLowerCase()}</caption
        >
        <tbody>
          {#each Object.entries(after) as [k, v] (k)}
            <tr class="border-t border-slate-200">
              <th class="py-1 pr-2 font-semibold">{k}</th>
              <td class="py-1">{v}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} disabled={i === 0} onclick={() => go(i - 1)}
      >← Trước</button
    >
    <button
      type="button"
      class={button.primary}
      disabled={i === STAGES.length - 1}
      onclick={() => go(i + 1)}>Đưa thức ăn đi tiếp →</button
    >
    <button type="button" class={button.quiet} onclick={() => go(0)}>Bắt đầu lại</button>
  </div>
</div>

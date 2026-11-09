<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { cellOxygen, describeGill, describeTrachea, exchange, uptake } from './engine.js';

  /** @type {'mang' | 'ong-khi'} */
  let organ = $state('mang');
  /** @type {import('./engine.js').FlowId} */
  let flow = $state('nguoc');
  let segments = $state(8);
  let open = $state(true);
  let pump = $state(true);

  const gill = $derived(exchange(flow, segments));
  const gillNote = $derived(describeGill(flow, segments));
  const both = $derived({ nguoc: uptake('nguoc', segments), cung: uptake('cung', segments) });
  const trachea = $derived({ open, pump });
  const cells = $derived(cellOxygen(trachea));
  const tracheaNote = $derived(describeTrachea(trachea));

  /** Blue (no O2) to red (rich in O2). @param {number} v */
  const shade = (v) =>
    `hsl(${Math.round(220 + (v / 100) * 140)}, 75%, ${Math.round(70 - v * 0.2)}%)`;

  const X0 = 30;
  const W = 280;
  const segW = $derived(W / segments);
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Cơ quan trao đổi khí"
    value={organ}
    onchange={(v) => (organ = v === 'ong-khi' ? 'ong-khi' : 'mang')}
    options={[
      { value: 'mang', label: 'Mang cá' },
      { value: 'ong-khi', label: 'Ống khí côn trùng' },
    ]}
  />

  {#if organ === 'mang'}
    <svg
      viewBox="0 0 340 150"
      class="mx-auto w-full max-w-lg"
      role="img"
      aria-label="Phiến mang: nước chảy từ trái sang phải, máu chảy {flow === 'nguoc'
        ? 'ngược chiều'
        : 'cùng chiều'}; máu rời phiến mang mang theo {formatNumber(gill.bloodOut, 0)} phần trăm O2"
    >
      <text x={X0} y="16" font-size="12" fill="#0369a1">Nước → (O₂ vào: 100)</text>
      {#each gill.water as w, i (i)}
        <rect x={X0 + i * segW} y="24" width={segW - 1} height="40" fill={shade(w)} />
        <text x={X0 + i * segW + segW / 2} y="49" text-anchor="middle" font-size="10" fill="#0f172a"
          >{formatNumber(w, 0)}</text
        >
      {/each}
      <rect x={X0} y="66" width={W} height="6" fill="#e2e8f0" />
      {#each gill.blood as b, i (i)}
        <rect x={X0 + i * segW} y="74" width={segW - 1} height="40" fill={shade(b)} />
        <text x={X0 + i * segW + segW / 2} y="99" text-anchor="middle" font-size="10" fill="#0f172a"
          >{formatNumber(b, 0)}</text
        >
      {/each}
      <text
        x={flow === 'nguoc' ? X0 + W : X0}
        y="132"
        text-anchor={flow === 'nguoc' ? 'end' : 'start'}
        font-size="12"
        fill="#b91c1c"
      >
        {flow === 'nguoc' ? '← Máu (O₂ vào: 0)' : 'Máu → (O₂ vào: 0)'}
      </text>
      <text x="170" y="146" text-anchor="middle" font-size="11" fill="#334155">
        Số trong ô: lượng O₂ tương đối
      </text>
    </svg>

    <div class="grid gap-3 sm:grid-cols-2">
      <SegmentedControl
        label="Chiều dòng máu so với dòng nước"
        value={flow}
        onchange={(v) => (flow = v === 'cung' ? 'cung' : 'nguoc')}
        options={[
          { value: 'nguoc', label: 'Ngược chiều' },
          { value: 'cung', label: 'Cùng chiều' },
        ]}
      />
      <SliderField label="Độ dài phiến mang (số đoạn)" bind:value={segments} min={2} max={12} />
    </div>

    <div class="space-y-1 text-sm" aria-live="polite">
      {#each [{ id: 'nguoc', name: 'Ngược chiều', p: both.nguoc }, { id: 'cung', name: 'Cùng chiều', p: both.cung }] as row (row.id)}
        <div class="flex items-center gap-2">
          <span class="w-24 shrink-0">{row.name}</span>
          <div class="h-3 flex-1 overflow-hidden rounded bg-slate-200">
            <div
              class="h-3 rounded {row.id === 'nguoc' ? 'bg-red-600' : 'bg-blue-500'}"
              style="width: {row.p}%"
            ></div>
          </div>
          <span class="shrink-0 text-right whitespace-nowrap tabular-nums">máu lấy {row.p}% O₂</span
          >
        </div>
      {/each}
    </div>
    <FeedbackNote tone={gillNote.tone} text={gillNote.text} />
  {:else}
    <svg
      viewBox="0 0 340 170"
      class="mx-auto w-full max-w-lg"
      role="img"
      aria-label="Hệ thống ống khí của côn trùng; lỗ thở {open
        ? 'mở'
        : 'đóng'}, O2 ở tế bào {cells} phần trăm so với không khí"
    >
      <ellipse cx="170" cy="85" rx="160" ry="62" fill="#fef9c3" stroke="#a16207" stroke-width="2" />
      {#each [70, 130, 190, 250] as x (x)}
        <circle
          cx={x}
          cy="25"
          r="6"
          fill={open ? '#ffffff' : '#78350f'}
          stroke="#78350f"
          stroke-width="2"
        />
        <path
          d="M {x} 31 L {x} 70 M {x} 70 L {x - 18} 110 M {x} 70 L {x + 18} 110 M {x} 70 L {x} 120"
          stroke={open ? '#0284c7' : '#94a3b8'}
          stroke-width="3"
          fill="none"
        />
        {#each [-18, 0, 18] as dx (dx)}
          <circle
            cx={x + dx}
            cy={dx === 0 ? 128 : 118}
            r="8"
            fill={shade(cells)}
            stroke="#475569"
          />
        {/each}
        {#if open && pump}
          <path
            d="M {x - 10} 8 L {x} 16 L {x + 10} 8"
            stroke="#0284c7"
            stroke-width="2"
            fill="none"
          />
        {/if}
      {/each}
      <text x="170" y="160" text-anchor="middle" font-size="11" fill="#334155"
        >lỗ thở → ống khí → ống khí nhỏ → tế bào (ô tròn)</text
      >
    </svg>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.secondary}
        aria-pressed={open}
        onclick={() => (open = !open)}
      >
        {open ? 'Lỗ thở đang mở: bấm để đóng' : 'Lỗ thở đang đóng: bấm để mở'}
      </button>
      <button
        type="button"
        class={button.secondary}
        aria-pressed={pump}
        onclick={() => (pump = !pump)}
      >
        {pump ? 'Cơ thân đang co dãn: bấm để dừng' : 'Cơ thân nghỉ: bấm để co dãn'}
      </button>
    </div>
    <p class="text-sm tabular-nums" aria-live="polite">O₂ ở tế bào: {cells}% so với không khí.</p>
    <FeedbackNote tone={tracheaNote.tone} text={tracheaNote.text} />
  {/if}
</div>

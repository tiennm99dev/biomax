<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { STAGES, TASKS, checkTask, egested } from './engine.js';

  let mode = $state('theo-doi');
  let step = $state(0);
  let task = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);
  /** @type {string | null} */
  let picked = $state(null);

  const stage = $derived(STAGES[step]);
  const out = $derived(egested(step));

  /** Where the bite sits at each stage. */
  const SPOT = {
    mieng: { x: 150, y: 42 },
    'thuc-quan': { x: 163, y: 104 },
    'da-day': { x: 196, y: 172 },
    'ruot-non': { x: 140, y: 262 },
    'ruot-gia': { x: 222, y: 268 },
    'hau-mon': { x: 150, y: 372 },
  };

  /** Clickable organ shapes. */
  const ORGANS = [
    {
      id: 'mieng',
      d: 'M 118 42 Q 150 14 182 42 Q 150 62 118 42 Z',
      fill: '#fecaca',
      label: { x: 196, y: 36, t: 'khoang miệng' },
    },
    {
      id: 'thuc-quan',
      d: 'M 146 58 L 156 58 L 182 150 L 170 152 Z',
      fill: '#fed7aa',
      label: { x: 112, y: 108, t: 'thực quản' },
    },
    {
      id: 'da-day',
      d: 'M 172 150 Q 230 128 238 170 Q 242 206 196 204 Q 172 202 168 182 Q 184 176 176 158 Z',
      fill: '#fda4af',
      label: { x: 246, y: 150, t: 'dạ dày' },
    },
    {
      id: 'ruot-non',
      d: 'M 104 238 h 92 v 14 h -92 v 14 h 92 v 14 h -92 v 14 h 92 v 14 h -92',
      fill: 'none',
      stroke: '#f472b6',
      label: { x: 150, y: 330, t: 'ruột non' },
    },
    {
      id: 'ruot-gia',
      d: 'M 82 318 V 218 H 222 V 318 Q 220 342 150 350 V 364',
      fill: 'none',
      stroke: '#c084fc',
      label: { x: 262, y: 262, t: 'ruột già' },
    },
    {
      id: 'hau-mon',
      d: 'M 142 364 h 16 v 16 h -16 Z',
      fill: '#a8a29e',
      label: { x: 190, y: 378, t: 'hậu môn' },
    },
  ];

  /** @param {string} id */
  function pick(id) {
    if (mode === 'theo-doi') {
      step = STAGES.findIndex((s) => s.id === id);
      return;
    }
    picked = id;
    feedback = checkTask(task, id);
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function key(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pick(id);
    }
  }

  function nextTask() {
    task = (task + 1) % TASKS.length;
    feedback = null;
    picked = null;
  }

  /** @param {string} id */
  const nameOf = (id) => STAGES.find((s) => s.id === id)?.name ?? '';
  const bite = $derived(
    mode === 'theo-doi' ? SPOT[/** @type {keyof typeof SPOT} */ (stage.id)] : null,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chế độ"
    options={[
      { value: 'theo-doi', label: 'Theo dõi miếng ăn' },
      { value: 'tim', label: 'Tìm cơ quan' },
    ]}
    bind:value={mode}
    onchange={() => {
      feedback = null;
      picked = null;
    }}
  />

  <div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
    <svg
      viewBox="0 0 300 392"
      class="mx-auto block w-full max-w-sm"
      role="group"
      aria-label="Sơ đồ ống tiêu hoá người: khoang miệng, thực quản, dạ dày, ruột non, ruột già, hậu môn; gan và tuỵ đổ dịch tiêu hoá vào ruột non"
    >
      <!-- digestive glands -->
      <path
        d="M 70 150 Q 120 128 168 150 Q 150 196 84 194 Q 60 180 70 150 Z"
        fill="#a16207"
        opacity="0.55"
      />
      <text x="96" y="176" font-size="10" fill="#422006">gan</text>
      <ellipse cx="142" cy="205" rx="26" ry="6" fill="#fde68a" stroke="#ca8a04" />
      <text x="98" y="209" font-size="10" fill="#713f12">tuỵ</text>

      {#each ORGANS as o (o.id)}
        {@const active = mode === 'theo-doi' ? stage.id === o.id : picked === o.id}
        <g
          role="button"
          tabindex="0"
          aria-label={nameOf(o.id)}
          aria-pressed={active}
          class="cursor-pointer focus-visible:outline-2 focus-visible:outline-indigo-500"
          onclick={() => pick(o.id)}
          onkeydown={(e) => key(e, o.id)}
        >
          <path
            d={o.d}
            fill={o.fill}
            stroke={o.stroke ?? (active ? '#4338ca' : '#475569')}
            stroke-width={o.stroke ? (active ? 12 : 9) : active ? 3 : 1.5}
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <text
            x={o.label.x}
            y={o.label.y}
            font-size="11"
            text-anchor="middle"
            font-weight={active ? 700 : 500}
            fill={active ? '#4338ca' : '#0f172a'}>{o.label.t}</text
          >
        </g>
      {/each}

      {#if bite}
        <circle
          cx={bite.x}
          cy={bite.y}
          r="8"
          fill="#f59e0b"
          stroke="#78350f"
          stroke-width="2"
          class="pointer-events-none motion-safe:transition-all motion-safe:duration-500"
        />
      {/if}
    </svg>

    <div class="space-y-3 text-sm">
      {#if mode === 'theo-doi'}
        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class={button.quiet}
            disabled={step === 0}
            onclick={() => (step -= 1)}>Quay lại</button
          >
          <button
            type="button"
            class={button.primary}
            disabled={step === STAGES.length - 1}
            onclick={() => (step += 1)}>Đi tiếp</button
          >
          <button type="button" class={button.quiet} onclick={() => (step = 0)}>Làm lại</button>
        </div>
        <div class="rounded-xl bg-amber-50 px-4 py-3 text-amber-950" aria-live="polite">
          <p class="font-bold">Bước {step + 1}/{STAGES.length}: {stage.name}</p>
          <p><strong>Biến đổi cơ học:</strong> {stage.mech}</p>
          <p><strong>Biến đổi hoá học:</strong> {stage.chem}</p>
          <p><strong>Hấp thụ:</strong> {stage.absorb}</p>
        </div>
        <div>
          <p class="font-semibold text-slate-700">Trong ống tiêu hoá</p>
          <ul class="mt-1 flex flex-wrap gap-1" aria-label="Các chất còn trong ống tiêu hoá">
            {#each stage.tract as x (x.id)}
              <li
                class="rounded-full px-2 py-0.5 {x.simple
                  ? 'bg-emerald-100 text-emerald-900'
                  : 'bg-orange-100 text-orange-900'}"
              >
                {x.label}: {x.amount} phần
              </li>
            {:else}
              <li class="text-slate-500">trống</li>
            {/each}
          </ul>
        </div>
        <div>
          <p class="font-semibold text-slate-700">Đã hấp thụ vào máu</p>
          <ul class="mt-1 flex flex-wrap gap-1" aria-label="Các chất đã hấp thụ vào máu">
            {#each stage.blood as x (x.id)}
              <li class="rounded-full bg-red-100 px-2 py-0.5 text-red-900">
                {x.label}: {x.amount} phần
              </li>
            {:else}
              <li class="text-slate-500">chưa có</li>
            {/each}
          </ul>
        </div>
        {#if out > 0}
          <p class="text-slate-700">
            Thải ra ngoài thành phân: {out} phần (chất xơ và một ít nước).
          </p>
        {/if}
        <p class="text-xs text-slate-500">
          Miếng ăn gồm 20 phần. Màu cam: chất phức tạp; màu xanh: chất đơn giản cơ thể hấp thụ được.
        </p>
      {:else}
        <p class="rounded-xl bg-indigo-50 px-4 py-3 font-semibold text-indigo-950">
          Câu {task + 1}/{TASKS.length}: {TASKS[task].q} Chạm vào cơ quan trên sơ đồ.
        </p>
        <p
          class="min-h-12 rounded-xl px-4 py-3 {feedback?.ok
            ? 'bg-emerald-50 text-emerald-900'
            : feedback
              ? 'bg-red-50 text-red-900'
              : 'bg-slate-50 text-slate-600'}"
          aria-live="polite"
        >
          {feedback?.text ?? 'Chưa chọn cơ quan nào.'}
        </p>
        <button type="button" class={button.secondary} onclick={nextTask}>Câu tiếp theo</button>
      {/if}
    </div>
  </div>
</div>

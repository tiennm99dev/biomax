<script>
  import { shuffled } from '#lib/core/card-sorter.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    FACE_NAMES,
    FUNNEL,
    STEPS,
    attempt,
    funnelShare,
    judgeFace,
    lambFace,
    otherFace,
  } from './engine.js';

  /** @typedef {import('./engine.js').Face} Face */

  const START = 'Kéo một thẻ vào bàn thí nghiệm, hoặc chạm vào thẻ, để làm bước đó.';
  const faceOptions = [
    { value: 'trang', label: 'Mặt trắng' },
    { value: 'den', label: 'Mặt đen' },
  ];
  /** Cells of the early embryo, as [x, y]. */
  const EMBRYO = [
    [176, 158],
    [190, 158],
    [183, 146],
    [183, 170],
    [169, 146],
    [197, 170],
  ];

  const deck = shuffled(STEPS, 11);

  /** @type {string[]} */
  let done = $state([]);
  let message = $state(START);
  let lastOk = $state(true);
  /** @type {Face} */
  let nucleusFace = $state('trang');
  /** @type {Face | null} */
  let predicted = $state(null);

  const pool = $derived(deck.filter((s) => !done.includes(s.id)));
  const eggFace = $derived(otherFace(nucleusFace));
  const has = $derived((/** @type {string} */ id) => done.includes(id));
  const born = $derived(done.includes('sinh-con'));
  const verdict = $derived(predicted ? judgeFace(predicted, nucleusFace) : null);
  /** The empty egg and the nucleus leave the bench once they are fused. */
  const fused = $derived(done.includes('dung-hop'));
  const lambColor = $derived(faceColor(lambFace(nucleusFace)));

  /** @param {Face} face */
  function faceColor(face) {
    return face === 'den' ? '#1e293b' : '#fef3c7';
  }

  /** @param {string} id */
  function doStep(id) {
    const out = attempt(done, id);
    done = out.done;
    message = out.text;
    lastOk = out.ok;
  }

  function restart() {
    done = [];
    message = START;
    lastOk = true;
    predicted = null;
  }

  function changeFace() {
    predicted = null;
  }
</script>

{#snippet sheep(
  /** @type {number} */ x,
  /** @type {string} */ face,
  /** @type {string} */ name,
  /** @type {string} */ role,
)}
  <g>
    <ellipse cx={x} cy="48" rx="28" ry="17" fill="#f8fafc" stroke="#94a3b8" />
    <rect x={x - 16} y="62" width="5" height="14" fill="#64748b" />
    <rect x={x + 11} y="62" width="5" height="14" fill="#64748b" />
    <ellipse cx={x - 28} cy="38" rx="11" ry="9" fill={face} stroke="#475569" />
    <circle cx={x - 31} cy="36" r="1.6" fill={face === '#1e293b' ? '#f8fafc' : '#1e293b'} />
    <text {x} y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b"
      >{name}</text
    >
    <text {x} y="104" text-anchor="middle" font-size="11" fill="#475569">{role}</text>
  </g>
{/snippet}

<div class="space-y-3">
  <div class="flex flex-wrap items-end gap-3">
    <SegmentedControl
      label="Cừu cho nhân có"
      options={faceOptions}
      bind:value={nucleusFace}
      onchange={changeFace}
    />
    <p class="text-xs text-slate-600">
      Thí nghiệm thật dùng cừu cho nhân mặt trắng. Đổi màu để kiểm tra dự đoán của em.
    </p>
  </div>

  <svg
    viewBox="0 0 360 250"
    class="block w-full rounded-xl bg-emerald-50"
    role="img"
    aria-label="Bàn thí nghiệm: {done.length} trong {STEPS.length} bước đã xong. {message}"
  >
    {@render sheep(60, faceColor(nucleusFace), 'Cừu A', 'cho nhân')}
    {@render sheep(180, faceColor(eggFace), 'Cừu B', 'cho trứng')}
    {@render sheep(300, faceColor(eggFace), 'Cừu C', 'mang thai hộ')}

    <rect x="8" y="114" width="344" height="128" rx="10" fill="#ffffff" stroke="#cbd5e1" />

    {#if has('lay-nhan') && !fused}
      <circle cx="60" cy="168" r="11" fill="#7c3aed" />
      <text x="60" y="198" text-anchor="middle" font-size="11" fill="#334155">Nhân tuyến vú</text>
    {/if}
    {#if has('lay-trung') && !fused}
      <circle
        cx="300"
        cy="168"
        r="26"
        fill="#fef9c3"
        stroke="#ca8a04"
        stroke-width="2"
        stroke-dasharray={has('loai-nhan') ? '5 3' : undefined}
      />
      {#if !has('loai-nhan')}
        <circle cx="300" cy="168" r="9" fill="#ca8a04" />
      {/if}
      <text x="300" y="210" text-anchor="middle" font-size="11" fill="#334155">
        {has('loai-nhan') ? 'Trứng đã loại nhân' : 'Trứng còn nhân'}
      </text>
    {/if}

    {#if fused && !has('nuoi-phoi')}
      <circle cx="183" cy="168" r="26" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" />
      <circle cx="183" cy="168" r="10" fill="#7c3aed" />
      <text x="183" y="210" text-anchor="middle" font-size="11" fill="#334155">
        Tế bào chuyển nhân
      </text>
    {/if}

    {#if has('nuoi-phoi') && !has('cay-phoi')}
      {#each EMBRYO as [x, y] (`${x}-${y}`)}
        <circle cx={x} cy={y} r="9" fill="#fef9c3" stroke="#ca8a04" />
        <circle cx={x} cy={y} r="3" fill="#7c3aed" />
      {/each}
      <text x="183" y="202" text-anchor="middle" font-size="11" fill="#334155">Phôi sớm</text>
    {/if}

    {#if has('cay-phoi') && !born}
      <path
        d="M 262 132 q 38 -14 76 0 q 6 46 -38 66 q -44 -20 -38 -66 z"
        fill="#fecdd3"
        stroke="#e11d48"
      />
      <circle cx="300" cy="164" r="12" fill="#fef9c3" stroke="#ca8a04" />
      <circle cx="300" cy="164" r="4" fill="#7c3aed" />
      <text x="300" y="216" text-anchor="middle" font-size="11" fill="#334155">
        Phôi trong tử cung cừu C
      </text>
    {/if}

    {#if born}
      <ellipse cx="190" cy="168" rx="28" ry="16" fill="#f8fafc" stroke="#94a3b8" />
      <rect x="174" y="181" width="5" height="16" fill="#64748b" />
      <rect x="201" y="181" width="5" height="16" fill="#64748b" />
      <ellipse
        cx="162"
        cy="158"
        rx="11"
        ry="9"
        fill={predicted ? lambColor : '#e2e8f0'}
        stroke="#475569"
      />
      {#if !predicted}
        <text x="162" y="162" text-anchor="middle" font-size="12" font-weight="700" fill="#334155"
          >?</text
        >
      {/if}
      <text x="183" y="220" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">
        Cừu con
      </text>
    {/if}

    {#if done.length === 0}
      <text x="180" y="180" text-anchor="middle" font-size="12" fill="#64748b">
        Bàn thí nghiệm còn trống
      </text>
    {/if}
  </svg>

  <button
    type="button"
    class="min-h-14 w-full rounded-xl border-2 border-dashed border-indigo-400 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-800 {focusRing}"
    onclick={() => {
      message = 'Hãy chạm vào một thẻ bên dưới, hoặc kéo thẻ vào ô này.';
      lastOk = true;
    }}
    ondragover={(e) => e.preventDefault()}
    ondrop={(e) => {
      e.preventDefault();
      const id = e.dataTransfer?.getData('text/plain');
      if (id) doStep(id);
    }}
  >
    Bàn thí nghiệm: thả thẻ vào đây
  </button>

  <FeedbackNote tone={lastOk ? 'info' : 'warn'} text={message} />

  {#if !born}
    <ul class="grid gap-2" aria-label="Các bước chưa làm">
      {#each pool as s (s.id)}
        <li>
          <button
            type="button"
            draggable="true"
            class="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-800 transition hover:bg-slate-50 {focusRing}"
            ondragstart={(e) => e.dataTransfer?.setData('text/plain', s.id)}
            onclick={() => doStep(s.id)}
          >
            {s.text}
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Dự đoán mặt cừu con">
      <span class="text-sm font-semibold text-slate-800">Mặt cừu con có màu gì?</span>
      {#each faceOptions as o (o.value)}
        <button
          type="button"
          class="{button.secondary} {predicted === o.value ? 'ring-2 ring-indigo-600' : ''}"
          aria-pressed={predicted === o.value}
          onclick={() => (predicted = /** @type {Face} */ (o.value))}
        >
          {o.label}
        </button>
      {/each}
    </div>
    {#if verdict}
      <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
    {/if}
    <p class="text-xs text-slate-600">
      Cừu cho nhân đang có {FACE_NAMES[nucleusFace]}; hai cừu còn lại có {FACE_NAMES[eggFace]}. Đổi
      màu ở trên rồi dự đoán lại.
    </p>
    <div class="rounded-xl bg-slate-50 p-3">
      <p class="mb-2 text-sm font-semibold text-slate-800">Tỉ lệ thành công của thí nghiệm</p>
      <ul class="space-y-2 text-sm">
        {#each FUNNEL as f (f.count)}
          <li>
            <div class="flex justify-between gap-3 text-slate-700">
              <span>{f.label}</span>
              <span class="shrink-0 font-semibold tabular-nums"
                >{f.count} ({funnelShare(f.count)})</span
              >
            </div>
            <div class="mt-1 h-2 rounded bg-slate-200" aria-hidden="true">
              <div
                class="h-2 rounded bg-emerald-600"
                style:width="{Math.max(1, (f.count / FUNNEL[0].count) * 100)}%"
              ></div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
</div>

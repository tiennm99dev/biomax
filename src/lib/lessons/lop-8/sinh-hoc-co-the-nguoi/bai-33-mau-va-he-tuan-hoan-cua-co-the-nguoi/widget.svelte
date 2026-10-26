<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { ABO, BLOOD_GROUPS, canGive, clumpingAntibodies, explainTransfusion } from './engine.js';

  /** @typedef {import('./engine.js').BloodGroup} BloodGroup */

  /** @type {BloodGroup} */
  let donor = $state('A');
  /** @type {BloodGroup} */
  let recipient = $state('B');
  /** @type {string[]} */
  let tried = $state([]);
  let mixed = $state(false);

  const ok = $derived(canGive(donor, recipient));
  const bad = $derived(clumpingAntibodies(donor, recipient));

  const OPTIONS = BLOOD_GROUPS.map((g) => ({ value: g, label: `Nhóm ${g}` }));

  function transfuse() {
    mixed = true;
    const key = `${donor}>${recipient}`;
    if (!tried.includes(key)) tried = [...tried, key];
  }

  /** Red cells of the donor in the recipient's blood: scattered or clumped. */
  const CELLS = [
    [40, 50],
    [90, 40],
    [140, 60],
    [60, 100],
    [115, 105],
    [160, 95],
  ];
  const CLUMP = [
    [88, 66],
    [104, 60],
    [96, 78],
    [112, 76],
    [82, 84],
    [104, 92],
  ];
  /** @param {number} k */
  const cellAt = (k) => (mixed && !ok ? CLUMP[k] : CELLS[k]);
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Người cho"
      options={OPTIONS}
      bind:value={donor}
      onchange={() => (mixed = false)}
    />
    <SegmentedControl
      label="Người nhận"
      options={OPTIONS}
      bind:value={recipient}
      onchange={() => (mixed = false)}
    />
  </div>

  <div class="grid gap-4 sm:grid-cols-2">
    <div class="rounded-xl bg-rose-50 p-3 text-sm">
      <p class="font-semibold text-rose-900">Máu người cho (nhóm {donor})</p>
      <p>
        Hồng cầu có kháng nguyên: <strong
          >{ABO[donor].antigens.length ? ABO[donor].antigens.join(', ') : 'không có'}</strong
        >
      </p>
    </div>
    <div class="rounded-xl bg-amber-50 p-3 text-sm">
      <p class="font-semibold text-amber-900">Máu người nhận (nhóm {recipient})</p>
      <p>
        Huyết tương có kháng thể: <strong
          >{ABO[recipient].antibodies.length
            ? ABO[recipient].antibodies.join(', ')
            : 'không có'}</strong
        >
      </p>
    </div>
  </div>

  <svg
    viewBox="0 0 200 140"
    class="mx-auto block w-full max-w-sm"
    role="img"
    aria-label={mixed
      ? ok
        ? 'Hồng cầu người cho trôi tự do trong máu người nhận'
        : 'Hồng cầu người cho bị kết dính thành cục trong máu người nhận'
      : 'Chưa truyền máu'}
  >
    <rect x="0" y="0" width="200" height="140" rx="12" fill="#fffbeb" stroke="#fcd34d" />
    {#if mixed}
      {#each ABO[recipient].antibodies as ab, k (ab)}
        {#each [0, 1, 2] as j (j)}
          <text
            x={20 + 60 * j + 30 * k}
            y={128 - 6 * k}
            font-size="12"
            font-weight="700"
            fill={bad.includes(ab) ? '#b91c1c' : '#92400e'}>{ab}</text
          >
        {/each}
      {/each}
    {/if}
    {#each CELLS.map((c, k) => k) as k (k)}
      {@const [x, y] = cellAt(k)}
      <g
        class="motion-safe:transition-transform motion-safe:duration-700"
        style="transform: translate({x}px, {y}px)"
      >
        <circle r="13" fill={mixed ? '#dc2626' : '#f87171'} stroke="#7f1d1d" stroke-width="1.5" />
        <circle r="6" fill="#b91c1c" opacity="0.5" />
        {#each ABO[donor].antigens as ag, n (ag)}
          <text x={n ? 4 : -10} y="-14" font-size="9" font-weight="700" fill="#1e3a8a">{ag}</text>
        {/each}
      </g>
    {/each}
    {#if !mixed}
      <text x="100" y="134" font-size="10" text-anchor="middle" fill="#78350f"
        >Bấm "Truyền máu" để trộn</text
      >
    {/if}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={transfuse}>Truyền máu</button>
    <button
      type="button"
      class={button.quiet}
      onclick={() => {
        tried = [];
        mixed = false;
      }}>Xóa bảng</button
    >
  </div>

  <p
    class="rounded-xl px-4 py-3 text-sm font-semibold {!mixed
      ? 'bg-slate-100 text-slate-700'
      : ok
        ? 'bg-emerald-50 text-emerald-800'
        : 'bg-rose-50 text-rose-800'}"
    aria-live="polite"
  >
    {mixed
      ? explainTransfusion(donor, recipient)
      : 'Chọn nhóm máu người cho, người nhận rồi bấm "Truyền máu".'}
  </p>

  <div class="overflow-x-auto">
    <table class="w-full min-w-72 text-center text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700"
        >Bảng kết quả em đã thử ({tried.length}/16)</caption
      >
      <thead>
        <tr>
          <th class="p-1 text-left">Cho ↓ / Nhận →</th>
          {#each BLOOD_GROUPS as r (r)}<th class="p-1">{r}</th>{/each}
        </tr>
      </thead>
      <tbody>
        {#each BLOOD_GROUPS as d (d)}
          <tr class="border-t border-slate-200">
            <th class="p-1 text-left">{d}</th>
            {#each BLOOD_GROUPS as r (r)}
              {@const seen = tried.includes(`${d}>${r}`)}
              <td
                class="p-1 font-semibold {seen
                  ? canGive(d, r)
                    ? 'text-emerald-700'
                    : 'text-rose-700'
                  : 'text-slate-400'}"
                aria-label="{d} cho {r}: {seen
                  ? canGive(d, r)
                    ? 'truyền được'
                    : 'không truyền được'
                  : 'chưa thử'}">{seen ? (canGive(d, r) ? '✓' : '✗') : '?'}</td
              >
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  {#if tried.length === 16}
    <p class="rounded-xl bg-sky-50 px-4 py-3 text-sm text-sky-950">
      Em đã thử đủ 16 trường hợp. Nhóm O cho được cả bốn nhóm nhưng chỉ nhận được nhóm O; nhóm AB
      nhận được cả bốn nhóm nhưng chỉ cho được nhóm AB.
    </p>
  {/if}
  <p class="text-xs text-slate-600">
    Mô hình chỉ xét hệ nhóm máu ABO. Trong thực tế, trước khi truyền máu còn phải xét nghiệm kĩ (hệ
    Rh, mầm bệnh) và ưu tiên truyền cùng nhóm máu.
  </p>
</div>

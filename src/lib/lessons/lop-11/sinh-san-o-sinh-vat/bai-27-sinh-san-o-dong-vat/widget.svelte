<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { AXIS, CHANGES, CHANGE_NAMES, explain, levels, word } from './engine.js';

  /** @typedef {import('./engine.js').Sex} Sex */
  /** @typedef {import('./engine.js').Change} Change */

  const uid = $props.id();

  /** @type {Sex} */
  let sex = $state('nam');
  /** @type {Change[]} */
  let changes = $state([]);

  const l = $derived(levels(sex, changes));
  const axis = $derived(AXIS[sex]);
  const text = $derived(explain(sex, changes));

  /** @param {Change} c */
  function toggle(c) {
    changes = changes.includes(c) ? changes.filter((x) => x !== c) : [...changes, c];
  }

  /** @param {number} v */
  const width = (v) => 1 + 3 * Math.min(v, 2);

  const meters = $derived([
    { name: 'GnRH (vùng dưới đồi)', v: l.gnrh },
    { name: 'FSH (tuyến yên)', v: l.fsh },
    { name: 'LH (tuyến yên)', v: l.lh },
    { name: `${axis.hormone} trong máu`, v: l.blood },
    { name: axis.product, v: l.product },
  ]);
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Trục hormone"
    options={[
      { value: 'nam', label: 'Điều hoà sinh tinh' },
      { value: 'nu', label: 'Điều hoà sinh trứng' },
    ]}
    bind:value={sex}
    onchange={() => (changes = [])}
  />

  <fieldset class="space-y-1">
    <legend class="mb-1 text-sm font-semibold text-slate-700">Thay đổi (chọn một hoặc nhiều)</legend
    >
    {#each CHANGES as c (c)}
      <label class="flex min-h-11 cursor-pointer items-center gap-2 text-sm">
        <input
          type="checkbox"
          class="h-5 w-5 {focusRing}"
          checked={changes.includes(c)}
          onchange={() => toggle(c)}
        />
        {CHANGE_NAMES[sex][c]}
      </label>
    {/each}
  </fieldset>

  <svg
    viewBox="0 0 320 250"
    class="mx-auto block w-full max-w-md"
    role="img"
    aria-label="Sơ đồ: vùng dưới đồi tiết GnRH {word(l.gnrh)}, tuyến yên tiết FSH và LH {word(
      l.fsh,
    )}, {axis.gonad.toLowerCase()} {l.gonad
      ? ''
      : 'đã cắt bỏ, '}{axis.hormone.toLowerCase()} trong máu {word(l.blood)}{l.blood < 0.05
      ? ', không còn ức chế ngược'
      : ', ức chế ngược vùng dưới đồi và tuyến yên'}"
  >
    <defs>
      <marker
        id="{uid}-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerUnits="userSpaceOnUse"
        markerWidth="14"
        markerHeight="14"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#334155" />
      </marker>
    </defs>
    <rect x="20" y="10" width="160" height="34" rx="8" fill="#e0e7ff" stroke="#3730a3" />
    <text x="100" y="31" font-size="12" text-anchor="middle">Vùng dưới đồi</text>
    <rect x="20" y="100" width="160" height="34" rx="8" fill="#e0f2fe" stroke="#075985" />
    <text x="100" y="121" font-size="12" text-anchor="middle">Tuyến yên</text>
    <rect
      x="20"
      y="190"
      width="160"
      height="44"
      rx="8"
      fill={l.gonad ? '#fce7f3' : '#f1f5f9'}
      stroke={l.gonad ? '#9d174d' : '#94a3b8'}
      stroke-dasharray={l.gonad ? undefined : '4 3'}
    />
    <text x="100" y="208" font-size="12" text-anchor="middle">{axis.gonad}</text>
    <text x="100" y="225" font-size="9" text-anchor="middle">
      {l.gonad ? axis.cells : 'đã cắt bỏ'}
    </text>

    <line
      x1="100"
      y1="44"
      x2="100"
      y2="98"
      stroke="#334155"
      stroke-width={width(l.gnrh)}
      opacity={l.gnrh < 0.05 ? 0.15 : 1}
      marker-end="url(#{uid}-arrow)"
    />
    <text x="110" y="74" font-size="9">GnRH: {word(l.gnrh)}</text>
    <line
      x1="100"
      y1="134"
      x2="100"
      y2="188"
      stroke="#334155"
      stroke-width={width(l.fsh)}
      opacity={l.fsh < 0.05 ? 0.15 : 1}
      marker-end="url(#{uid}-arrow)"
    />
    <text x="110" y="164" font-size="9">FSH, LH: {word(l.fsh)}</text>

    <!-- điều hoà ngược âm -->
    <path
      d="M 180 212 L 240 212 L 240 27 L 184 27"
      fill="none"
      stroke="#dc2626"
      stroke-dasharray="5 3"
      stroke-width={width(l.blood)}
      opacity={l.blood < 0.05 ? 0.15 : 1}
    />
    <path
      d="M 240 117 L 184 117"
      fill="none"
      stroke="#dc2626"
      stroke-dasharray="5 3"
      stroke-width={width(l.blood)}
      opacity={l.blood < 0.05 ? 0.15 : 1}
    />
    <text x="190" y="22" font-size="14" fill="#dc2626" font-weight="bold">−</text>
    <text x="190" y="112" font-size="14" fill="#dc2626" font-weight="bold">−</text>
    <text x="246" y="160" font-size="9" fill="#991b1b"
      >{sex === 'nam' ? 'Testosterone' : 'Pro., estro.'}</text
    >
    {#each word(l.blood).split(/(?<=như) /) as line, i (i)}
      <text x="246" y={172 + 11 * i} font-size="9" fill="#991b1b">{line}</text>
    {/each}
    {#if changes.includes('ngoai')}
      <rect x="268" y="190" width="46" height="30" rx="6" fill="#fef3c7" stroke="#b45309" />
      <text x="291" y="203" font-size="8" text-anchor="middle"
        >{sex === 'nam' ? 'Tiêm' : 'Thuốc'}</text
      >
      <text x="291" y="214" font-size="8" text-anchor="middle">từ ngoài</text>
      <line x1="280" y1="190" x2="244" y2="178" stroke="#b45309" stroke-width="2" />
    {/if}
  </svg>

  <ul class="space-y-1 text-sm">
    {#each meters as m (m.name)}
      <li class="grid grid-cols-[minmax(0,1fr)_6rem] items-center gap-2">
        <span>{m.name}: <strong>{word(m.v)}</strong></span>
        <span class="block h-2.5 rounded-full bg-slate-200" aria-hidden="true">
          <span
            class="block h-2.5 rounded-full bg-indigo-500"
            style="width: {Math.min(100, (m.v / 2) * 100)}%"
          ></span>
        </span>
      </li>
    {/each}
  </ul>

  <FeedbackNote tone={changes.length === 0 ? 'info' : 'ok'} {text} />
</div>

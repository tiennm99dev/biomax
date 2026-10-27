<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import FoodWeb from '#lib/domain/food-web.svelte';
  import { WEB, chainsText, judgeLink, linkKey, nameOf } from './engine.js';

  const W = 340;
  const ROW = 64;
  const NODE_W = 84;
  const NODE_H = 30;
  const markerId = $props.id();

  // Columns and rows (row 0 at the bottom) chosen so that no arrow crosses a node.
  /** @type {Record<string, [number, number]>} */
  const GRID = {
    co: [170, 0],
    'chau-chau': [60, 1],
    tho: [170, 1],
    chuot: [280, 1],
    ech: [60, 2],
    ran: [170, 3],
    'dai-bang': [280, 4],
  };
  const H = 4 * ROW + NODE_H + 20;
  /** @type {Map<string, { x: number, y: number }>} */
  const pos = new Map(
    Object.entries(GRID).map(([id, [x, k]]) => [id, { x, y: H - 10 - NODE_H / 2 - k * ROW }]),
  );
  const total = WEB.links.length;

  /** @type {'build' | 'remove'} */
  let mode = $state('build');
  /** @type {string | null} */
  let from = $state(null);
  /** @type {string[]} */
  let found = $state([]);
  let message = $state('Chọn một sinh vật làm thức ăn, rồi chọn sinh vật ăn nó để vẽ mũi tên.');
  let ok = $state(true);

  const done = $derived(found.length === total);

  /** @param {string} id */
  function tap(id) {
    if (from === null) {
      from = id;
      message = `Đã chọn ${nameOf(id)}. Sinh vật nào ăn ${nameOf(id).toLowerCase()}?`;
      ok = true;
      return;
    }
    if (from === id) {
      from = null;
      message = 'Đã bỏ chọn.';
      return;
    }
    const r = judgeLink(from, id);
    ok = r.ok;
    if (r.ok && !found.includes(linkKey(from, id))) found = [...found, linkKey(from, id)];
    message =
      r.ok && found.length === total
        ? `${r.text} Em đã dựng xong lưới thức ăn với ${total} mũi tên.`
        : r.text;
    from = null;
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tap(id);
    }
  }

  function reset() {
    found = [];
    from = null;
    ok = true;
    message = 'Chọn một sinh vật làm thức ăn, rồi chọn sinh vật ăn nó để vẽ mũi tên.';
  }

  /** Arrow from the edge of node a to the edge of node b. @param {string} key */
  function arrow(key) {
    const [a, b] = key.split('>');
    const p = pos.get(a);
    const q = pos.get(b);
    if (!p || !q) return { x1: 0, y1: 0, x2: 0, y2: 0 };
    const dx = q.x - p.x;
    const dy = q.y - p.y;
    const len = Math.hypot(dx, dy) || 1;
    const cut = (/** @type {number} */ ux, /** @type {number} */ uy) =>
      Math.min(
        Math.abs((NODE_W / 2 + 2) / (ux || 1e-9)),
        Math.abs((NODE_H / 2 + 2) / (uy || 1e-9)),
      );
    const ux = dx / len;
    const uy = dy / len;
    const c = cut(ux, uy);
    return { x1: p.x + ux * c, y1: p.y + uy * c, x2: q.x - ux * (c + 2), y2: q.y - uy * (c + 2) };
  }

  /** @param {string} role */
  const fillOf = (role) =>
    role === 'producer' ? '#dcfce7' : role === 'decomposer' ? '#f5f5f4' : '#e0e7ff';
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hoạt động"
    options={[
      { value: 'build', label: 'Dựng lưới thức ăn' },
      { value: 'remove', label: 'Loại bỏ một loài' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'build'}
    <p class="text-sm text-slate-700">
      Thức ăn của mỗi loài: châu chấu, thỏ, chuột ăn cỏ; ếch ăn châu chấu; rắn ăn ếch và chuột; đại
      bàng ăn chuột, thỏ và rắn.
    </p>
    <svg
      viewBox="0 0 {W} {H}"
      class="mx-auto block w-full max-w-lg select-none"
      role="group"
      aria-label="Bảng dựng lưới thức ăn, đã vẽ {found.length} trên {total} mũi tên"
    >
      <defs>
        <marker
          id="{markerId}-head"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
      </defs>
      <rect x="0" y="0" width={W} height={H} rx="12" fill="#f8fafc" />
      {#each found as key (key)}
        <line
          {...arrow(key)}
          stroke="#475569"
          stroke-width="2"
          marker-end="url(#{markerId}-head)"
        />
      {/each}
      {#each WEB.species.filter((s) => pos.has(s.id)) as s (s.id)}
        {@const p = pos.get(s.id) ?? { x: 0, y: 0 }}
        <g
          role="button"
          tabindex="0"
          aria-pressed={from === s.id}
          aria-label="{s.name}{from === s.id ? ', đang chọn làm thức ăn' : ''}"
          class="cursor-pointer outline-none"
          onclick={() => tap(s.id)}
          onkeydown={(e) => onKey(e, s.id)}
        >
          <rect
            x={p.x - NODE_W / 2}
            y={p.y - NODE_H / 2}
            width={NODE_W}
            height={NODE_H}
            rx="10"
            fill={fillOf(s.role)}
            stroke={from === s.id ? '#4f46e5' : '#94a3b8'}
            stroke-width={from === s.id ? 3 : 1.5}
          />
          <text x={p.x} y={p.y + 4} font-size="12" text-anchor="middle" fill="#0f172a"
            >{s.name}</text
          >
        </g>
      {/each}
    </svg>
    <p class="text-center text-sm font-semibold tabular-nums">
      Đã vẽ đúng {found.length} / {total} mũi tên
    </p>
    <FeedbackNote tone={ok ? (done ? 'ok' : 'info') : 'warn'} text={message} />
    {#if done}
      <div class="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
        <p class="font-semibold">Lưới thức ăn gồm {chainsText().length} chuỗi thức ăn:</p>
        <ul class="list-disc pl-5">
          {#each chainsText() as c (c)}
            <li>{c}</li>
          {/each}
        </ul>
        <p>Vi khuẩn, nấm phân giải xác và chất thải của mọi sinh vật trong lưới.</p>
      </div>
    {/if}
    <button type="button" class={button.quiet} onclick={reset}>Xóa các mũi tên</button>
  {:else}
    <p class="text-sm text-slate-700">
      Chọn "Loại bỏ loài" rồi bấm vào một loài để loại nó khỏi hệ sinh thái; các loài mất hết nguồn
      thức ăn sẽ bị đánh dấu.
    </p>
    <FoodWeb web={WEB} label="Lưới thức ăn đồng cỏ" />
  {/if}
</div>

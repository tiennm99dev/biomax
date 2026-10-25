<script>
  import { button } from '#lib/core/ui.js';
  import { PARTS, SPECIMENS, decide, observe, warningSigns } from './engine.js';

  let index = $state(0);
  /** @type {import('./engine.js').PartId[]} */
  let seen = $state([]);
  /** @type {{ ok: boolean, text: string } | null} */
  let result = $state(null);
  let score = $state(0);
  let answered = $state(0);
  let message = $state('Bấm vào các số trên hình để quan sát từng phần của mẫu nấm.');

  const s = $derived(SPECIMENS[index]);
  const signs = $derived(warningSigns(s));
  const seenAll = $derived(seen.length === PARTS.length);
  const finished = $derived(answered === SPECIMENS.length);

  /** @param {import('./engine.js').PartId} part */
  function inspect(part) {
    if (!seen.includes(part)) seen = [...seen, part];
    const name = PARTS.find((p) => p.id === part)?.name ?? '';
    message = `${name}: ${observe(s, part)}`;
  }

  /** @param {import('./engine.js').Choice} choice */
  function choose(choice) {
    if (result) return;
    result = decide(s, choice);
    answered += 1;
    if (result.ok) score += 1;
  }

  function next() {
    index = (index + 1) % SPECIMENS.length;
    if (index === 0) {
      score = 0;
      answered = 0;
    }
    seen = [];
    result = null;
    message = 'Mẫu mới. Bấm vào các số trên hình để quan sát từng phần.';
  }

  /** @param {KeyboardEvent} e @param {import('./engine.js').PartId} part */
  function onKey(e, part) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inspect(part);
    }
  }

  const capPath = $derived(
    s.cap.shape === 'vom'
      ? 'M 52 98 Q 52 30 120 30 Q 188 30 188 98 Z'
      : s.cap.shape === 'det'
        ? 'M 38 98 Q 60 52 120 50 Q 180 52 202 98 Z'
        : s.cap.shape === 'trung'
          ? 'M 82 100 Q 74 38 120 34 Q 166 38 158 100 Z'
          : 'M 112 104 Q 112 44 196 50 Q 216 88 194 110 Q 152 118 112 104 Z',
  );
  const capLeft = $derived(
    s.cap.shape === 'det' ? 38 : s.cap.shape === 'trung' ? 82 : s.cap.shape === 'so' ? 112 : 52,
  );
  const capRight = $derived(
    s.cap.shape === 'det' ? 202 : s.cap.shape === 'trung' ? 158 : s.cap.shape === 'so' ? 200 : 188,
  );
  /** Hotspot positions on the drawing. */
  const spot = $derived({
    mu: [s.cap.shape === 'so' ? 160 : 120, s.cap.shape === 'det' ? 72 : 60],
    phien: [capRight - 16, 116],
    vong: [s.cap.shape === 'so' ? 150 : 152, 140],
    'bao-goc': [84, 186],
  });
</script>

<div class="space-y-4">
  <p class="text-sm text-slate-700">
    <strong>Mẫu {index + 1}/{SPECIMENS.length}.</strong>
    {s.place}
  </p>

  <svg
    viewBox="0 0 240 220"
    class="mx-auto block w-full max-w-xs rounded-xl border border-slate-200 bg-emerald-50"
    role="group"
    aria-label="Hình mẫu nấm {index + 1}"
  >
    <rect x="0" y="196" width="240" height="24" fill="#a16207" opacity="0.35" />
    <path
      d={s.cap.shape === 'so'
        ? 'M 112 196 Q 104 150 120 104 L 132 106 Q 120 150 128 196 Z'
        : 'M 110 196 L 112 100 L 128 100 L 130 196 Z'}
      fill="#fafaf9"
      stroke="#a8a29e"
      stroke-width="1.5"
    />
    {#if s.ring}
      <path
        d="M 104 124 Q 120 116 136 124 L 140 136 Q 120 128 100 136 Z"
        fill="#f5f5f4"
        stroke="#78716c"
        stroke-width="1.5"
      />
    {/if}
    {#if s.volva}
      <path
        d="M 98 198 Q 94 172 108 168 L 132 168 Q 146 172 142 198 Z"
        fill="#f5f5f4"
        stroke="#78716c"
        stroke-width="2"
      />
    {/if}
    <rect
      x={capLeft + 6}
      y="96"
      width={capRight - capLeft - 12}
      height="8"
      rx="3"
      fill={s.gills}
      stroke="#57534e"
      stroke-width="0.8"
    />
    {#each Array.from({ length: 12 }, (_, i) => capLeft + 10 + ((capRight - capLeft - 20) * i) / 11) as gx (gx)}
      <line x1={gx} y1="97" x2={gx} y2="103" stroke="#57534e" stroke-width="0.6" />
    {/each}
    <path d={capPath} fill={s.cap.color} stroke="#44403c" stroke-width="2" />
    {#if s.cap.marks === 'dom-trang'}
      {#each [[86, 70], [110, 48], [140, 56], [164, 78], [122, 78], [96, 90]] as [x, y] (`${x}-${y}`)}
        <circle cx={x} cy={y} r="5" fill="#fff7ed" />
      {/each}
    {:else if s.cap.marks === 'vay'}
      {#each [[70, 86], [96, 68], [124, 62], [152, 70], [176, 86], [110, 82], [140, 84]] as [x, y] (`${x}-${y}`)}
        <path
          d="M {x - 4} {y + 3} L {x} {y - 3} L {x + 4} {y + 3} Z"
          fill={s.cap.color === '#92400e' ? '#fef3c7' : '#a16207'}
        />
      {/each}
    {/if}

    {#each PARTS as part, i (part.id)}
      {@const [x, y] = spot[part.id]}
      {@const done = seen.includes(part.id)}
      <g
        role="button"
        tabindex="0"
        class="cursor-pointer outline-none [&:focus-visible_.knob]:stroke-indigo-900 [&:focus-visible_.knob]:stroke-[3]"
        aria-label="{i + 1}. {part.name}{done ? `: ${observe(s, part.id)}` : ''}"
        onclick={() => inspect(part.id)}
        onkeydown={(e) => onKey(e, part.id)}
      >
        <circle cx={x} cy={y} r="18" fill="transparent" />
        <circle
          class="knob"
          cx={x}
          cy={y}
          r="11"
          fill={done ? '#059669' : '#4f46e5'}
          stroke="white"
          stroke-width="2"
        />
        <text {x} y={y + 4} text-anchor="middle" font-size="12" font-weight="700" fill="white"
          >{i + 1}</text
        >
      </g>
    {/each}
  </svg>

  <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {message}
  </p>

  {#if seenAll}
    <p class="text-sm text-slate-700">
      <strong>Dấu hiệu cảnh báo em thấy:</strong>
      {signs.length ? signs.join('; ') : 'không có dấu hiệu nào rõ ràng'}.
    </p>
  {/if}

  <div class="flex flex-wrap gap-2" role="group" aria-label="Quyết định về mẫu nấm">
    <button
      type="button"
      class={button.secondary}
      disabled={!seenAll || result !== null}
      onclick={() => choose('an-duoc')}>Nấm ăn được</button
    >
    <button
      type="button"
      class={button.secondary}
      disabled={!seenAll || result !== null}
      onclick={() => choose('khong-an')}>Không được ăn</button
    >
    <button type="button" class={button.quiet} disabled={result === null} onclick={next}
      >{index === SPECIMENS.length - 1 ? 'Chơi lại' : 'Mẫu tiếp theo'}</button
    >
  </div>
  {#if !seenAll}
    <p class="text-xs text-slate-600">Quan sát đủ 4 phần rồi mới quyết định.</p>
  {/if}

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {result === null
      ? 'bg-slate-50 text-slate-600'
      : result.ok
        ? 'bg-emerald-50 text-emerald-900'
        : 'bg-rose-50 text-rose-900'}"
    aria-live="polite"
  >
    {result ? result.text : `Đã trả lời ${answered}/${SPECIMENS.length} mẫu, đúng ${score}.`}
  </p>

  {#if finished}
    <p class="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
      Đúng {score}/{SPECIMENS.length} mẫu. Bài học: các dấu hiệu chỉ giúp nghi ngờ nấm độc, không có dấu
      hiệu nào chắc chắn. Chỉ ăn nấm trồng, biết rõ loài và nguồn gốc; không hái, không ăn nấm mọc hoang.
    </p>
  {/if}
</div>

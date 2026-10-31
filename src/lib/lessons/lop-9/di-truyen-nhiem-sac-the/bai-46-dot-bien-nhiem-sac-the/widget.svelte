<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { colorAt } from '#lib/core/visuals/svg-math.js';
  import {
    CENTROMERE,
    MAX_COPIES,
    NORMAL,
    START,
    STRUCT_LABEL,
    applyStruct,
    blockReason,
    changeCopies,
    chromText,
    classifyNumber,
    euploid,
    structEffect,
  } from './engine.js';

  let mode = $state('cau-truc');

  // Structural mutations.
  /** @type {import('./engine.js').Pair} */
  let pair = $state({ a: [...START.a], m: [...START.m] });
  /** @type {number | null} */
  let from = $state(null);
  /** @type {number | null} */
  let to = $state(null);
  /** @type {import('./engine.js').StructKind | null} */
  let applied = $state(null);
  /** @type {string[]} */
  let structDone = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let structNote = $state({
    tone: 'info',
    text: 'Chạm đoạn gene đầu tiên rồi chạm đoạn gene cuối cùng để chọn một đoạn NST, sau đó chọn một dạng đột biến.',
  });

  const KINDS = /** @type {import('./engine.js').StructKind[]} */ (['mat', 'lap', 'dao', 'chuyen']);
  const lo = $derived(from === null ? null : Math.min(from, to ?? from));
  const hi = $derived(from === null ? null : Math.max(from, to ?? from));

  /** @param {number} i */
  function tapSegment(i) {
    if (applied) return;
    if (from === null || to !== null) {
      from = i;
      to = null;
    } else {
      to = i;
    }
    const seg = pair.a.slice(lo ?? 0, (hi ?? 0) + 1);
    structNote = {
      tone: 'info',
      text: `Đã chọn đoạn ${chromText(seg)}. Chọn một dạng đột biến bên dưới.`,
    };
  }

  /** @param {import('./engine.js').StructKind} kind */
  function mutate(kind) {
    if (lo === null || hi === null) {
      structNote = { tone: 'warn', text: 'Hãy chọn một đoạn trên NST thứ nhất trước.' };
      return;
    }
    const reason = blockReason(kind, pair.a, lo, hi);
    if (reason) {
      structNote = { tone: 'warn', text: reason };
      return;
    }
    const before = pair;
    pair = applyStruct(kind, pair, lo, hi);
    applied = kind;
    from = null;
    to = null;
    if (!structDone.includes(kind)) structDone = [...structDone, kind];
    structNote = {
      tone: 'ok',
      text: `${STRUCT_LABEL[kind]}: ${chromText(before.a)} → ${chromText(pair.a)}. ${structEffect(kind, before, pair)}`,
    };
  }

  function restore() {
    pair = { a: [...START.a], m: [...START.m] };
    applied = null;
    from = null;
    to = null;
    structNote = {
      tone: 'info',
      text: 'Đã khôi phục hai NST ban đầu. Chọn một đoạn để tạo dạng đột biến khác.',
    };
  }

  /** Colour of a gene segment, the same wherever it moves; genes of the second chromosome are grey. @param {string} g */
  const tint = (g) => ('ABCDEFGH'.includes(g) ? colorAt('ABCDEFGH'.indexOf(g)) : '#94a3b8');

  // Numerical mutations.
  let counts = $state([...NORMAL]);
  /** @type {string[]} */
  let numberDone = $state([]);
  const type = $derived(classifyNumber(counts));
  const PAIR_LENGTHS = [40, 32, 24, 14];

  const NUMBER_MISSIONS = [
    {
      id: 'the-ba',
      label: 'Thể ba (2n + 1)',
      test: (/** @type {string} */ f) => f.startsWith('2n + 1'),
    },
    {
      id: 'the-mot',
      label: 'Thể một (2n − 1)',
      test: (/** @type {string} */ f) => f.startsWith('2n − 1'),
    },
    {
      id: 'tam-boi',
      label: 'Thể tam bội (3n)',
      test: (/** @type {string} */ f) => f.startsWith('3n'),
    },
    {
      id: 'tu-boi',
      label: 'Thể tứ bội (4n)',
      test: (/** @type {string} */ f) => f.startsWith('4n'),
    },
  ];

  const numberText = $derived.by(() => {
    const head = `${type.name}: ${type.formula}.`;
    if (type.kind === 'binh-thuong') return `${head} Mỗi cặp có đúng hai NST tương đồng.`;
    if (type.kind === 'don-boi')
      return `${head} Mỗi cặp chỉ còn một chiếc, như bộ NST của giao tử.`;
    if (type.kind === 'da-boi') {
      return `${head} Mọi cặp đều tăng số NST như nhau: tế bào to, cơ quan sinh dưỡng lớn, sinh trưởng mạnh; thể đa bội lẻ (như $3n$) thường không có hạt.`;
    }
    return `${head} Số NST chỉ thay đổi ở một hoặc một số cặp; thể lệch bội thường giảm sức sống, giảm khả năng sinh sản hoặc chết. Ở người, ba NST số 21 gây hội chứng Down.`;
  });

  /** @param {number[]} next */
  function setCounts(next) {
    counts = next;
    const f = classifyNumber(next).formula;
    const fresh = NUMBER_MISSIONS.filter((m) => m.test(f) && !numberDone.includes(m.id));
    if (fresh.length) numberDone = [...numberDone, ...fresh.map((m) => m.id)];
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Loại đột biến"
    options={[
      { value: 'cau-truc', label: 'Đột biến cấu trúc NST' },
      { value: 'so-luong', label: 'Đột biến số lượng NST' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'cau-truc'}
    <section class="space-y-3" aria-label="Đột biến cấu trúc NST">
      <div>
        <p class="mb-1 text-sm font-semibold text-slate-700">NST thứ nhất: {chromText(pair.a)}</p>
        <div
          class="flex flex-wrap items-center gap-1"
          role="group"
          aria-label="Các đoạn của NST thứ nhất"
        >
          {#each pair.a as g, i (i)}
            {@const inRange = lo !== null && hi !== null && i >= lo && i <= hi}
            {#if g === CENTROMERE}
              <button
                type="button"
                class="flex h-11 w-9 items-center justify-center rounded-full border-2 {inRange
                  ? 'border-amber-500 bg-amber-100'
                  : 'border-slate-300 bg-white'} {focusRing}"
                aria-pressed={inRange}
                aria-label="Tâm động"
                disabled={applied !== null}
                onclick={() => tapSegment(i)}
              >
                <span class="h-3 w-3 rounded-full bg-slate-800" aria-hidden="true"></span>
              </button>
            {:else}
              <button
                type="button"
                class="h-11 min-w-10 rounded-lg border-2 px-2 text-lg font-bold text-slate-900 {inRange
                  ? 'border-amber-500 bg-amber-100'
                  : 'border-slate-200 bg-white'} {focusRing}"
                style="border-bottom: 6px solid {tint(g)}"
                aria-pressed={inRange}
                aria-label="Đoạn {g}"
                disabled={applied !== null}
                onclick={() => tapSegment(i)}>{g}</button
              >
            {/if}
          {/each}
        </div>
      </div>
      <div>
        <p class="mb-1 text-sm font-semibold text-slate-700">
          NST thứ hai (không tương đồng): {chromText(pair.m)}
        </p>
        <div class="flex flex-wrap items-center gap-1" aria-hidden="true">
          {#each pair.m as g, i (i)}
            {#if g === CENTROMERE}
              <span class="flex h-11 w-9 items-center justify-center"
                ><span class="h-3 w-3 rounded-full bg-slate-800"></span></span
              >
            {:else}
              <span
                class="flex h-11 min-w-10 items-center justify-center rounded-lg border-2 border-slate-200 bg-slate-50 px-2 text-lg font-bold text-slate-900"
                style="border-bottom: 6px solid {tint(g)}">{g}</span
              >
            {/if}
          {/each}
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        {#each KINDS as k (k)}
          <button
            type="button"
            class={button.secondary}
            disabled={applied !== null}
            onclick={() => mutate(k)}
          >
            {STRUCT_LABEL[k]}
          </button>
        {/each}
        <button type="button" class={button.quiet} onclick={restore}>Khôi phục NST ban đầu</button>
      </div>
      <p class="text-xs text-slate-600">
        Chuyển đoạn ở đây đưa đoạn đã chọn sang cuối NST thứ hai (chuyển đoạn không tương hỗ). Mỗi
        lần chỉ tạo một đột biến; bấm "Khôi phục" để thử dạng khác.
      </p>

      <FeedbackNote tone={structNote.tone} text={structNote.text} />

      <ul class="grid gap-1 text-sm sm:grid-cols-2" aria-label="Nhiệm vụ: tạo đủ bốn dạng">
        {#each KINDS as k (k)}
          {@const ok = structDone.includes(k)}
          <li
            class="rounded-lg border px-3 py-2 {ok
              ? 'border-emerald-300 bg-emerald-50'
              : 'border-slate-200'}"
          >
            <span aria-hidden="true">{ok ? '✓' : '○'}</span>
            <span class="sr-only">{ok ? 'Đã tạo:' : 'Chưa tạo:'}</span>
            {STRUCT_LABEL[k]}
          </li>
        {/each}
      </ul>
    </section>
  {:else}
    <section class="space-y-3" aria-label="Đột biến số lượng NST">
      <p class="text-sm text-slate-600">
        Tế bào lưỡng bội 2n = 8 có 4 cặp NST tương đồng. Thêm hoặc bớt NST ở từng cặp, hoặc tăng đều
        mọi cặp.
      </p>
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {#each counts as c, p (p)}
          <div class="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-2">
            <svg viewBox="0 0 64 48" class="h-14 w-full" aria-hidden="true">
              {#each Array.from({ length: c }, (_, k) => k) as k (k)}
                <rect
                  x={32 - (c * 12) / 2 + k * 12 + 3}
                  y={24 - PAIR_LENGTHS[p] / 2}
                  width="6"
                  height={PAIR_LENGTHS[p]}
                  rx="3"
                  fill={k >= 2 ? '#d97706' : colorAt(p)}
                />
              {/each}
            </svg>
            <p class="text-xs font-semibold text-slate-700">Cặp {p + 1}: {c} NST</p>
            <div class="mt-1 flex gap-1">
              <button
                type="button"
                class="h-11 w-11 rounded-lg border border-slate-300 text-lg font-bold {focusRing}"
                aria-label="Bớt một NST ở cặp {p + 1}"
                disabled={c === 0}
                onclick={() => setCounts(changeCopies(counts, p, -1))}>−</button
              >
              <button
                type="button"
                class="h-11 w-11 rounded-lg border border-slate-300 text-lg font-bold {focusRing}"
                aria-label="Thêm một NST ở cặp {p + 1}"
                disabled={c === MAX_COPIES}
                onclick={() => setCounts(changeCopies(counts, p, 1))}>+</button
              >
            </div>
          </div>
        {/each}
      </div>
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.quiet} onclick={() => setCounts(euploid(2))}
          >Bình thường (2n)</button
        >
        <button type="button" class={button.secondary} onclick={() => setCounts(euploid(3))}
          >Tam bội (3n)</button
        >
        <button type="button" class={button.secondary} onclick={() => setCounts(euploid(4))}
          >Tứ bội (4n)</button
        >
      </div>

      <FeedbackNote
        tone={type.kind === 'binh-thuong' ? 'info' : type.kind === 'lech-boi' ? 'warn' : 'ok'}
        text={numberText}
      />

      <ul class="grid gap-1 text-sm sm:grid-cols-2" aria-label="Nhiệm vụ: tạo các thể đột biến">
        {#each NUMBER_MISSIONS as m (m.id)}
          {@const ok = numberDone.includes(m.id)}
          <li
            class="rounded-lg border px-3 py-2 {ok
              ? 'border-emerald-300 bg-emerald-50'
              : 'border-slate-200'}"
          >
            <span aria-hidden="true">{ok ? '✓' : '○'}</span>
            <span class="sr-only">{ok ? 'Đã tạo:' : 'Chưa tạo:'}</span>
            {m.label}
          </li>
        {/each}
      </ul>
    </section>
  {/if}
</div>

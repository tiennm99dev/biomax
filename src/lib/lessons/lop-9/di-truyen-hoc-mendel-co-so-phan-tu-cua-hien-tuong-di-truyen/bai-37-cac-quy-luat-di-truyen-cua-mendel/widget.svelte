<script>
  import { untrack } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { rng } from '#lib/core/drill.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import PunnettSquare from '#lib/domain/punnett-square.svelte';
  import Pea from '../_shared/pea.svelte';
  import {
    ONE_GENE,
    TRAITS,
    TWO_GENES,
    expected,
    observedRatio,
    offspring,
    phenotypeName,
    sample,
    seedLook,
    testCrossVerdict,
  } from './engine.js';

  let mode = $state('mot');
  let seed = $state(1);

  // Cross modes.
  let mother = $state('Aa');
  let father = $state('Aa');
  const options = $derived(mode === 'hai' ? TWO_GENES : ONE_GENE);
  const presets = $derived(
    mode === 'hai'
      ? [
          { label: 'P thuần chủng', m: 'AABB', f: 'aabb' },
          { label: 'F₁ × F₁', m: 'AaBb', f: 'AaBb' },
          { label: 'Lai phân tích F₁', m: 'AaBb', f: 'aabb' },
        ]
      : [
          { label: 'P thuần chủng', m: 'AA', f: 'aa' },
          { label: 'F₁ × F₁', m: 'Aa', f: 'Aa' },
          { label: 'Lai phân tích F₁', m: 'Aa', f: 'aa' },
        ],
  );
  const classes = $derived(expected(mother, father));
  /** @type {number[] | null} */
  let counts = $state(null);
  const N = 400;

  /** @param {string} next */
  function setMode(next) {
    counts = null;
    if (next === 'hai') {
      mother = 'AaBb';
      father = 'AaBb';
    } else if (next === 'mot') {
      mother = 'Aa';
      father = 'Aa';
    }
  }

  /** @param {string} m @param {string} f */
  function preset(m, f) {
    mother = m;
    father = f;
    counts = null;
  }

  function sow() {
    seed += 1;
    counts = sample(mother, father, N, rng(seed));
  }

  const sowText = $derived.by(() => {
    if (!counts) {
      return `Bảng Punnett cho tỉ lệ lí thuyết. Bấm "Gieo ${N} hạt" để xem số hạt thực tế dao động quanh tỉ lệ đó, như số liệu Mendel đếm được.`;
    }
    const raw = classes.map((c) => c.count);
    const g = raw.reduce((a, b) => (b ? gcdOf(a, b) : a), 0) || 1;
    const theory = raw.map((t) => t / g);
    const r = observedRatio(counts, theory);
    return `Thu được ${counts.map((c, i) => `${c} ${classes[i].name}`).join(', ')}: tỉ lệ ≈ ${r.map((x) => formatNumber(x, 1)).join(' : ')}, gần với tỉ lệ lí thuyết ${theory.join(' : ')}.`;
  });

  /** @param {number} a @param {number} b @returns {number} */
  function gcdOf(a, b) {
    return b === 0 ? a : gcdOf(b, a % b);
  }

  // Test-cross game.
  let hidden = $state('Aa');
  // Pick the hidden plant and the sampling seed in the browser only, so the
  // prerendered page and the first client render agree.
  $effect(() => {
    untrack(() => {
      seed = Math.floor(Math.random() * 100000);
      hidden = Math.random() < 0.5 ? 'AA' : 'Aa';
    });
  });
  /** @type {string[]} */
  let children = $state([]);
  /** @type {string | null} */
  let guess = $state(null);

  function testCross() {
    seed += 1;
    const r = rng(seed);
    children = Array.from({ length: 20 }, () => offspring(hidden, 'aa', r));
    guess = null;
  }

  function newPlant() {
    hidden = Math.random() < 0.5 ? 'AA' : 'Aa';
    children = [];
    guess = null;
  }

  const greens = $derived(children.filter((g) => seedLook(g).color === 'xanh').length);
  const testFeedback = $derived.by(() => {
    if (!children.length) {
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Cây hạt vàng này có kiểu gene $AA$ hay $Aa$? Hãy lai nó với cây hạt xanh $aa$ rồi quan sát đời con.',
      };
    }
    if (!guess) {
      return {
        tone: /** @type {const} */ ('info'),
        text: `Đời con có ${children.length - greens} hạt vàng và ${greens} hạt xanh. Cây cần kiểm tra có kiểu gene nào?`,
      };
    }
    const verdict = testCrossVerdict(children);
    const right = guess === verdict;
    if (right) {
      return {
        tone: /** @type {const} */ ('ok'),
        text:
          verdict === 'AA'
            ? 'Đúng: đời con đồng tính hạt vàng ($Aa$), nên cây cần kiểm tra chỉ cho một loại giao tử $A$, tức là đồng hợp $AA$.'
            : 'Đúng: đời con phân tính xấp xỉ $1$ vàng $: 1$ xanh, nên cây cần kiểm tra cho hai loại giao tử $A$ và $a$, tức là dị hợp $Aa$.',
      };
    }
    return {
      tone: /** @type {const} */ ('warn'),
      text:
        greens > 0
          ? 'Chưa đúng: đời con có hạt xanh $aa$, mà cây $aa$ chỉ cho giao tử $a$, nên cây cần kiểm tra phải cho được giao tử $a$.'
          : 'Chưa đúng: không có hạt xanh nào, nên cây cần kiểm tra chỉ cho giao tử $A$.',
    };
  });
</script>

{#snippet picker(
  /** @type {string} */ who,
  /** @type {string} */ g,
  /** @type {(v: string) => void} */ set,
)}
  <label class="flex flex-col gap-1 text-sm font-semibold text-slate-700">
    {who}
    <span class="flex items-center gap-2">
      <select
        class="min-h-11 rounded-lg border border-slate-300 bg-white px-2 font-mono text-base {focusRing}"
        value={g}
        onchange={(e) => {
          set(e.currentTarget.value);
          counts = null;
        }}
      >
        {#each options as o (o)}
          <option value={o}>{o}</option>
        {/each}
      </select>
      <Pea kind="seed" {...seedLook(g)} size={32} />
    </span>
    <span class="text-xs font-normal text-slate-600">{phenotypeName(g)}</span>
  </label>
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Phép lai"
    bind:value={mode}
    onchange={(v) => setMode(String(v))}
    options={[
      { value: 'mot', label: 'Một cặp tính trạng' },
      { value: 'hai', label: 'Hai cặp tính trạng' },
      { value: 'phan-tich', label: 'Lai phân tích' },
    ]}
  />

  {#if mode !== 'phan-tich'}
    <p class="text-sm text-slate-600">
      Allele A (hạt vàng) trội hoàn toàn so với a (hạt xanh){mode === 'hai'
        ? '; allele B (hạt trơn) trội hoàn toàn so với b (hạt nhăn)'
        : ''}. Chọn kiểu gene của cây mẹ và cây bố.
    </p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Phép lai mẫu">
      {#each presets as p (p.label)}
        <button type="button" class={button.quiet} onclick={() => preset(p.m, p.f)}
          >{p.label}: {p.m} × {p.f}</button
        >
      {/each}
    </div>
    <div class="grid grid-cols-2 gap-3">
      {@render picker('Cây mẹ ♀', mother, (v) => (mother = v))}
      {@render picker('Cây bố ♂', father, (v) => (father = v))}
    </div>

    {#key mode}
      <PunnettSquare
        {mother}
        {father}
        editable={false}
        traits={TRAITS}
        label="Bảng Punnett {mother} × {father}"
      />
    {/key}

    <div class="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div class="flex flex-wrap items-center gap-2">
        <button type="button" class={button.primary} onclick={sow}>Gieo {N} hạt</button>
        <span class="text-sm text-slate-600"
          >Mỗi hạt nhận ngẫu nhiên một giao tử của bố, một của mẹ.</span
        >
      </div>
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left text-slate-600">
            <th class="py-1 font-semibold">Kiểu hình</th>
            <th class="py-1 text-right font-semibold">Lí thuyết</th>
            <th class="py-1 text-right font-semibold">Thực tế</th>
          </tr>
        </thead>
        <tbody>
          {#each classes as c, i (c.name)}
            <tr class="border-t border-slate-200">
              <td class="py-1">
                <span class="flex items-center gap-2"
                  ><Pea kind="seed" {...c.look} size={22} />{c.name}</span
                >
              </td>
              <td class="py-1 text-right tabular-nums">{formatNumber(c.p * N, 1)}</td>
              <td class="py-1 text-right font-semibold tabular-nums">{counts ? counts[i] : '–'}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <FeedbackNote tone={counts ? 'ok' : 'info'} text={sowText} />
  {:else}
    <div class="flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
      <span class="relative">
        <Pea kind="seed" color="vang" size={48} />
        <span
          class="absolute inset-0 flex items-center justify-center text-xl font-bold text-amber-900"
          aria-hidden="true">?</span
        >
      </span>
      <p class="text-sm text-indigo-950">
        Cây hạt vàng, chưa biết kiểu gene. Phép lai phân tích: lai nó với cây hạt xanh aa (mang tính
        trạng lặn).
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={testCross}
        >Lai với cây hạt xanh (aa)</button
      >
      <button type="button" class={button.quiet} onclick={newPlant}>Cây khác</button>
    </div>
    {#if children.length}
      <div>
        <p class="mb-1 text-sm font-semibold text-slate-700">Đời con ({children.length} hạt):</p>
        <ul
          class="flex flex-wrap gap-1"
          aria-label="Đời con: {children.length - greens} hạt vàng, {greens} hạt xanh"
        >
          {#each children as g, i (i)}
            <li><Pea kind="seed" {...seedLook(g)} size={28} /></li>
          {/each}
        </ul>
      </div>
      <div class="flex flex-wrap gap-2" role="group" aria-label="Kiểu gene cây cần kiểm tra">
        {#each ['AA', 'Aa'] as g (g)}
          <button
            type="button"
            class="{guess === g ? button.primary : button.secondary} font-mono"
            aria-pressed={guess === g}
            onclick={() => (guess = g)}>{g}</button
          >
        {/each}
      </div>
    {/if}
    <FeedbackNote tone={testFeedback.tone} text={testFeedback.text} />
  {/if}
</div>

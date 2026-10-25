<script>
  import { button, textInput } from '#lib/core/ui.js';
  import { formatNumber, parseNumber } from '#lib/units-engine/format.js';
  import { MAX_DIVISIONS, MAX_DRAWN, cellsAfter, gridLayout } from './engine.js';

  let n = $state(0);
  let guess = $state('');
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);

  const count = $derived(cellsAfter(n));
  const W = 320;
  const H = 200;
  const layout = $derived(n <= MAX_DRAWN ? gridLayout(count, W, H) : null);
  const history = $derived(Array.from({ length: n + 1 }, (_, i) => i));

  function divide() {
    if (n >= MAX_DIVISIONS) return;
    const next = cellsAfter(n + 1);
    const g = parseNumber(guess);
    if (guess.trim() === '') {
      feedback = {
        ok: true,
        text: `Lần phân chia thứ ${n + 1}: mỗi tế bào chia thành 2, nên ${formatNumber(count)} tế bào tạo ra ${formatNumber(next)} tế bào.`,
      };
    } else if (g === next) {
      feedback = {
        ok: true,
        text: `Đúng! ${formatNumber(count)} · 2 = ${formatNumber(next)} tế bào sau ${n + 1} lần phân chia.`,
      };
    } else {
      feedback = {
        ok: false,
        text: `Em đoán ${guess.trim()}, nhưng có ${formatNumber(next)} tế bào: mỗi tế bào trong ${formatNumber(count)} tế bào đều chia đôi, nên số tế bào gấp đôi chứ không cộng thêm.`,
      };
    }
    n += 1;
    guess = '';
  }

  function reset() {
    n = 0;
    guess = '';
    feedback = null;
  }
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl border border-slate-200 bg-emerald-50/40"
    role="img"
    aria-label="Có {count} tế bào sau {n} lần phân chia"
  >
    {#if layout}
      {#each layout.points as p, i (i)}
        <circle
          cx={p.x}
          cy={p.y}
          r={layout.r}
          fill="#fce7f3"
          stroke="#be185d"
          stroke-width={Math.max(1, layout.r / 12)}
        />
        <circle cx={p.x} cy={p.y} r={layout.r * 0.3} fill="#7c3aed" />
      {/each}
    {:else}
      <text
        x={W / 2}
        y={H / 2 - 6}
        font-size="40"
        font-weight="700"
        text-anchor="middle"
        fill="#be185d">{formatNumber(count)}</text
      >
      <text x={W / 2} y={H / 2 + 22} font-size="13" text-anchor="middle" fill="#475569"
        >tế bào: quá nhiều để vẽ từng cái</text
      >
    {/if}
  </svg>

  <p class="text-center text-lg font-semibold text-slate-800">
    Sau {n} lần phân chia: {formatNumber(count)} tế bào
    <span class="text-slate-500">= 2<sup>{n}</sup></span>
  </p>

  {#if n < MAX_DIVISIONS}
    <div class="flex flex-wrap items-end gap-2">
      <label class="min-w-0 flex-1 text-sm font-semibold text-slate-700">
        Dự đoán số tế bào sau lần phân chia thứ {n + 1} (có thể bỏ trống)
        <input
          class="{textInput} mt-1"
          inputmode="numeric"
          bind:value={guess}
          onkeydown={(e) => {
            if (e.key === 'Enter') divide();
          }}
        />
      </label>
      <button type="button" class={button.primary} onclick={divide}>Phân chia</button>
    </div>
  {/if}

  <p
    class="min-h-6 text-sm {feedback
      ? feedback.ok
        ? 'text-emerald-800'
        : 'font-semibold text-amber-800'
      : 'text-slate-600'}"
    aria-live="polite"
  >
    {#if feedback}
      {feedback.text}
    {:else}
      Bắt đầu từ 1 tế bào. Hãy đoán trước rồi bấm "Phân chia".
    {/if}
    {#if n >= MAX_DIVISIONS}
      Sau {MAX_DIVISIONS} lần phân chia, từ 1 tế bào đã có hơn một nghìn tế bào.
    {/if}
  </p>

  <div class="overflow-x-auto">
    <table class="text-sm">
      <thead>
        <tr class="text-slate-600">
          <th scope="row" class="pr-3 text-left font-semibold">Số lần phân chia</th>
          {#each history as i (i)}
            <td class="px-2 text-center tabular-nums">{i}</td>
          {/each}
        </tr>
      </thead>
      <tbody>
        <tr class="text-slate-800">
          <th scope="row" class="pr-3 text-left font-semibold">Số tế bào</th>
          {#each history as i (i)}
            <td class="px-2 text-center font-semibold tabular-nums"
              >{formatNumber(cellsAfter(i))}</td
            >
          {/each}
        </tr>
      </tbody>
    </table>
  </div>

  <button type="button" class={button.quiet} onclick={reset}>Bắt đầu lại</button>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, numTex } from '#lib/core/number-format.js';
  import { button, textInput } from '#lib/core/ui.js';
  import { FACTORS, factorOf, measure, percentRight, readPercent } from './engine.js';

  let factorId = $state('nuoc');
  /** @type {'cung-khom' | 'khac-giong'} */
  let source = $state('cung-khom');
  let weeks = $state(3);
  let seed = $state(1);
  let planted = $state(false);
  let typed = $state('');
  /** @type {'idle' | 'right' | 'wrong'} */
  let checked = $state('idle');

  const factor = $derived(factorOf(factorId));
  const result = $derived(measure(factor, source, weeks, seed));
  const inputId = $props.id();

  function reset() {
    planted = false;
    typed = '';
    checked = 'idle';
  }

  function again() {
    seed += 1;
    reset();
    planted = true;
  }

  function check() {
    if (readPercent(typed) === null) return;
    checked = percentRight(typed, result.heightRatio) ? 'right' : 'wrong';
  }

  const MAX = 70;
  /** @param {number} h */
  const barH = (h) => (h / MAX) * 90;

  const note = $derived.by(() => {
    if (!planted)
      return {
        tone: /** @type {const} */ ('info'),
        text: `Lô đối chứng: ${factor.control}. Lô thí nghiệm: ${factor.test}. Mọi điều kiện khác như nhau. Bấm "Trồng và đo".`,
      };
    if (checked === 'idle')
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Tính chiều cao trung bình của lô thí nghiệm bằng bao nhiêu phần trăm lô đối chứng, rồi bấm "Kiểm tra".',
      };
    const calc = `$\\dfrac{${numTex(result.test.mean, 1)}}{${numTex(result.control.mean, 1)}} \\cdot 100\\% \\approx ${numTex(result.heightRatio, 1)}\\%$`;
    const conclusion =
      source === 'cung-khom'
        ? 'Hai lô cùng kiểu gene (cuống từ cùng một khóm), chỉ khác một yếu tố môi trường, nên sự khác nhau về kiểu hình là thường biến.'
        : 'Nhưng hai lô trồng hai giống khác nhau: khác cả kiểu gene lẫn môi trường, nên không thể kết luận sự khác nhau là do môi trường. Hãy dùng cuống từ cùng một khóm.';
    return {
      tone:
        checked === 'right' && source === 'cung-khom'
          ? /** @type {const} */ ('ok')
          : /** @type {const} */ ('warn'),
      text: `${checked === 'right' ? 'Đúng' : 'Chưa đúng'}: ${calc}. ${conclusion}`,
    };
  });
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Yếu tố môi trường khác nhau giữa hai lô"
      options={FACTORS.map((f) => ({ value: f.id, label: f.label }))}
      bind:value={factorId}
      onchange={reset}
    />
    <SegmentedControl
      label="Nguồn cây trồng"
      options={[
        { value: 'cung-khom', label: 'Cuống từ cùng một khóm' },
        { value: 'khac-giong', label: 'Mỗi lô một giống' },
      ]}
      bind:value={source}
      onchange={reset}
    />
  </div>
  <SliderField label="Đo sau" bind:value={weeks} min={1} max={4} unit="tuần" oninput={reset} />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={planted} onclick={() => (planted = true)}
      >Trồng và đo</button
    >
    {#if planted}
      <button type="button" class={button.secondary} onclick={again}>Làm lại với luống mới</button>
    {/if}
  </div>

  {#if planted}
    <svg
      viewBox="0 0 320 120"
      class="w-full max-w-lg"
      role="img"
      aria-label="Chiều cao từng cây: lô đối chứng {result.control.heights.join(
        ', ',
      )} cm; lô thí nghiệm {result.test.heights.join(', ')} cm."
    >
      {#each [{ plot: result.control, x0: 10, name: 'Lô đối chứng' }, { plot: result.test, x0: 170, name: 'Lô thí nghiệm' }] as g (g.name)}
        <rect x={g.x0 - 4} y="96" width="148" height="8" rx="2" fill="#a16207" opacity="0.5" />
        {#each g.plot.heights as h, i (i)}
          <rect
            x={g.x0 + i * 14}
            y={96 - barH(h)}
            width="9"
            height={barH(h)}
            rx="3"
            fill="#16a34a"
          />
        {/each}
        <text x={g.x0 + 70} y="116" text-anchor="middle" font-size="10" fill="#334155"
          >{g.name}</text
        >
      {/each}
    </svg>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-slate-100 text-left">
            <th class="p-2">Sau {weeks} tuần</th>
            <th class="p-2">Đối chứng</th>
            <th class="p-2">Thí nghiệm</th>
            <th class="p-2">TN so với ĐC</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="p-2">Chiều cao trung bình (cm)</td>
            <td class="p-2 tabular-nums">{formatFixed(result.control.mean, 1)}</td>
            <td class="p-2 tabular-nums">{formatFixed(result.test.mean, 1)}</td>
            <td class="p-2 tabular-nums"
              >{checked === 'idle' ? '?' : `${formatFixed(result.heightRatio, 1)}%`}</td
            >
          </tr>
          <tr>
            <td class="p-2">Khối lượng rau thu hoạch (kg/luống)</td>
            <td class="p-2 tabular-nums">{formatFixed(result.control.mass, 1)}</td>
            <td class="p-2 tabular-nums">{formatFixed(result.test.mass, 1)}</td>
            <td class="p-2 tabular-nums"
              >{checked === 'idle' ? '?' : `${formatFixed(result.massRatio, 1)}%`}</td
            >
          </tr>
        </tbody>
      </table>
    </div>

    <form
      class="flex flex-wrap items-end gap-2"
      onsubmit={(e) => {
        e.preventDefault();
        check();
      }}
    >
      <div class="min-w-0 flex-1">
        <label for={inputId} class="mb-1 block text-sm font-semibold text-slate-700"
          >Chiều cao TN so với ĐC (%)</label
        >
        <input
          id={inputId}
          class={textInput}
          inputmode="decimal"
          autocomplete="off"
          bind:value={typed}
          disabled={checked !== 'idle'}
        />
      </div>
      <button
        type="submit"
        class={button.primary}
        disabled={checked !== 'idle' || readPercent(typed) === null}>Kiểm tra</button
      >
    </form>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

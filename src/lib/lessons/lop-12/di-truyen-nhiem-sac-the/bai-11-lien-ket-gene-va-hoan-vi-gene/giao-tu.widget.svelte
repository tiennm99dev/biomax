<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { gametesOf } from './engine.js';

  let phase = $state('cis');
  let f = $state(20);
  const gametes = $derived(gametesOf(phase === 'cis' ? 'cis' : 'trans', f));
  const parental = $derived(gametes.filter((g) => !g.recombinant).map((g) => g.gamete));

  const note = $derived(
    f === 0
      ? {
          tone: /** @type {const} */ ('info'),
          text: `Liên kết hoàn toàn: chỉ có hai loại giao tử liên kết ${parental.join(' và ')}, mỗi loại $50\\%$; lai phân tích cho tỉ lệ $1 : 1$.`,
        }
      : {
          tone: f === 50 ? /** @type {const} */ ('warn') : /** @type {const} */ ('ok'),
          text: `Giao tử hoán vị chiếm tổng cộng $${formatNumber(f)}\\%$ (mỗi loại $${formatNumber(f / 2)}\\%$), giao tử liên kết ${parental.join(' và ')} mỗi loại $${formatNumber((100 - f) / 2)}\\%$.${f === 50 ? ' Với $f = 50\\%$, bốn loại giao tử bằng nhau, giống như hai gene phân li độc lập: tần số hoán vị không vượt quá $50\\%$.' : ' Giao tử hoán vị luôn ít hơn giao tử liên kết.'}`,
        },
  );
</script>

<div class="space-y-3 rounded-xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">
    Tần số hoán vị và tỉ lệ giao tử của cơ thể dị hợp hai cặp gene
  </p>
  <SegmentedControl
    label="Kiểu gene"
    bind:value={phase}
    options={[
      { value: 'cis', label: 'AB/ab (dị hợp tử đều)' },
      { value: 'trans', label: 'Ab/aB (dị hợp tử chéo)' },
    ]}
  />
  <SliderField label="Tần số hoán vị f" bind:value={f} min={0} max={50} unit="%" />
  <ul class="space-y-1" aria-label="Tỉ lệ các loại giao tử">
    {#each gametes as g (g.gamete)}
      <li class="flex items-center gap-2 text-sm">
        <span class="w-8 font-mono font-semibold">{g.gamete}</span>
        <span class="h-4 flex-1 rounded bg-slate-100">
          <span
            class="block h-4 rounded {g.recombinant ? 'bg-amber-400' : 'bg-indigo-500'}"
            style="width: {g.percent * 2}%"
          ></span>
        </span>
        <span class="w-24 text-right tabular-nums"
          >{formatNumber(g.percent)}% · {g.recombinant ? 'hoán vị' : 'liên kết'}</span
        >
      </li>
    {/each}
  </ul>
  <p class="text-xs text-slate-600">
    Lai phân tích với cơ thể ab/ab: tỉ lệ kiểu hình đời con bằng đúng tỉ lệ các loại giao tử trên.
  </p>
  <FeedbackNote tone={note.tone} text={note.text} />
</div>

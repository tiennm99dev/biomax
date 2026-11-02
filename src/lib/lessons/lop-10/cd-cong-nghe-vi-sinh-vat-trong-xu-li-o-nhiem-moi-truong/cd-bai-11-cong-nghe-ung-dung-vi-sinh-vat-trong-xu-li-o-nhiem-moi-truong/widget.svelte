<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { AIR_MAX, BOD_LIMIT, FLOWS, TANKS, WASTES, lineNote, runLine } from './engine.js';

  const wasteOptions = WASTES.map((w) => ({ value: w.id, label: w.name }));
  const AIR_NAMES = ['Tắt', 'Thấp', 'Vừa', 'Cao'];

  let wasteId = $state(WASTES[0].id);
  /** @type {'cham' | 'nhanh'} */
  let flow = $state('cham');
  let air = $state(1);
  /** @type {Record<import('./engine.js').TankId, boolean>} */
  let on = $state({ 'loc-lang': true, 'ki-khi': false, 'hieu-khi': true, 'lang-cuoi': true });

  const waste = $derived(WASTES.find((w) => w.id === wasteId) ?? WASTES[0]);
  const line = $derived({ bod: waste.bod, on: { ...on }, air, flow });
  const run = $derived(runLine(line));
  const verdict = $derived(lineNote(line, run));
  const scale = $derived(Math.max(waste.bod, 100));

  /** @param {number} value */
  function share(value) {
    return Math.min(100, (value / scale) * 100);
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Loại nước thải" options={wasteOptions} bind:value={wasteId} />
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl label="Tốc độ dòng chảy" options={FLOWS} bind:value={flow} />
    <SliderField
      label="Sục khí ở bể hiếu khí"
      bind:value={air}
      min={0}
      max={AIR_MAX}
      format={(v) => AIR_NAMES[v]}
    />
  </div>

  <p class="rounded-lg bg-lime-50 p-2 text-sm font-semibold text-lime-900">
    Nước thải vào: BOD {formatNumber(waste.bod)} mg/L
  </p>

  <ol class="space-y-2">
    {#each TANKS as tank, i (tank.id)}
      {@const stage = run.stages[i]}
      <li
        class="rounded-xl border p-3 {on[tank.id]
          ? 'border-slate-300 bg-white'
          : 'border-dashed border-slate-300 bg-slate-50'}"
      >
        <label class="flex min-h-11 cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            class="size-5 shrink-0 accent-indigo-600 {focusRing}"
            bind:checked={on[tank.id]}
          />
          <span class="min-w-0 text-sm font-bold text-slate-900">{i + 1}. {tank.name}</span>
          <span class="ml-auto shrink-0 text-xs font-semibold text-slate-600">{tank.air}</span>
        </label>
        <p class="mt-1 text-sm text-slate-700">{tank.does}</p>
        <div class="mt-2 flex items-center gap-2 text-xs text-slate-700">
          <span class="h-3 min-w-0 flex-1 rounded bg-slate-200" aria-hidden="true">
            <span
              class="block h-3 rounded {tank.tint}"
              style:width="{share(stage.out)}%"
              class:opacity-40={!on[tank.id]}
            ></span>
          </span>
          <span class="w-28 shrink-0 text-right font-semibold tabular-nums">
            ra {formatNumber(stage.out, 1)} mg/L
          </span>
        </div>
      </li>
    {/each}
  </ol>

  <dl class="grid grid-cols-2 gap-2 text-center text-sm">
    <div class="rounded-lg p-2 {run.pass ? 'bg-emerald-50' : 'bg-amber-50'}">
      <dt class="text-xs text-slate-700">BOD đầu ra (ngưỡng {BOD_LIMIT} mg/L)</dt>
      <dd class="font-bold tabular-nums">{formatNumber(run.out, 1)} mg/L</dd>
    </div>
    <div class="rounded-lg bg-violet-50 p-2">
      <dt class="text-xs text-slate-700">Phần BOD chuyển thành khí sinh học</dt>
      <dd class="font-bold tabular-nums">{formatNumber(run.biogas, 1)} mg/L</dd>
    </div>
  </dl>
  <FeedbackNote tone={verdict.tone} text={verdict.text} />
  <p class="text-xs text-slate-600">
    BOD cho biết lượng oxygen vi sinh vật cần để phân giải chất hữu cơ trong nước: càng lớn thì nước
    càng ô nhiễm. Các tỉ lệ xử lí và ngưỡng ở đây là mô hình minh hoạ.
  </p>
</div>

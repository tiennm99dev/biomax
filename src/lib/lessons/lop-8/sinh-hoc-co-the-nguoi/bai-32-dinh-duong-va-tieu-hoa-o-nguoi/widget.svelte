<script>
  import SliderField from '#lib/core/slider-field.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { fmt, formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { BANDS, FOODS, GROUPS, START_PLAN, advice, assess, shares, totals } from './engine.js';

  let need = $state(2200);
  /** @type {Record<string, number>} */
  let plan = $state({ ...START_PLAN });

  const t = $derived(totals(plan));
  const s = $derived(shares(plan));
  const a = $derived(assess(plan, need));
  const tips = $derived(advice(plan, need));
  const groups = /** @type {Array<keyof typeof GROUPS>} */ (Object.keys(GROUPS));

  /** @param {string} id @param {number} v */
  function setServings(id, v) {
    plan = { ...plan, [id]: v };
  }

  const PARTS = /** @type {const} */ ([
    { key: 'glucid', label: 'Carbohydrate', color: '#f59e0b' },
    { key: 'protein', label: 'Protein', color: '#dc2626' },
    { key: 'lipid', label: 'Lipid', color: '#0ea5e9' },
  ]);

  const pctOfNeed = $derived(Math.round((100 * t.kcal) / need));
</script>

<div class="space-y-4">
  <SliderField
    label="Nhu cầu năng lượng một ngày"
    bind:value={need}
    min={1600}
    max={3000}
    step={100}
    unit="kcal"
    format={(v) => fmt(v)}
  />

  <div class="grid gap-3 md:grid-cols-2">
    {#each groups as g (g)}
      <fieldset class="min-w-0 space-y-2 rounded-xl border border-slate-200 p-3">
        <legend class="px-1 text-sm font-semibold text-slate-700">{GROUPS[g]}</legend>
        {#each FOODS.filter((f) => f.group === g) as f (f.id)}
          <Stepper
            label="{f.name} ({fmt(f.grams)} g/{f.unit})"
            value={plan[f.id] ?? 0}
            min={0}
            max={8}
            onchange={(v) => setServings(f.id, v)}
          />
        {/each}
      </fieldset>
    {/each}
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={() => (plan = {})}>Xóa hết</button>
    <button type="button" class={button.quiet} onclick={() => (plan = { ...START_PLAN })}
      >Khẩu phần ban đầu</button
    >
  </div>

  <div class="space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
    <p>
      <strong>Năng lượng:</strong>
      {fmt(Math.round(t.kcal))} kcal / {fmt(need)} kcal ({pctOfNeed}% nhu cầu) — protein
      {formatNumber(t.protein, 0)} g, lipid {formatNumber(t.lipid, 0)} g, carbohydrate
      {formatNumber(t.glucid, 0)} g.
    </p>
    <div
      class="h-4 overflow-hidden rounded-full bg-slate-200"
      role="img"
      aria-label="Khẩu phần đạt {pctOfNeed}% nhu cầu năng lượng"
    >
      <div
        class="h-full rounded-full motion-safe:transition-[width] {a.energy === 'du'
          ? 'bg-emerald-500'
          : a.energy === 'thieu'
            ? 'bg-amber-500'
            : 'bg-rose-500'}"
        style="width: {Math.min(100, pctOfNeed)}%"
      ></div>
    </div>
    <p class="font-semibold text-slate-700">Tỉ lệ năng lượng từ các chất</p>
    <div
      class="flex h-5 overflow-hidden rounded-full bg-slate-200"
      role="img"
      aria-label={PARTS.map((p) => `${p.label} ${Math.round(s[p.key])}%`).join(', ')}
    >
      {#each PARTS as p (p.key)}
        <div style="width: {s[p.key]}%; background: {p.color}"></div>
      {/each}
    </div>
    <ul class="grid gap-1 sm:grid-cols-3">
      {#each PARTS as p (p.key)}
        <li class="flex items-center gap-2">
          <span class="inline-block h-3 w-3 rounded-full" style="background: {p.color}"></span>
          {p.label}: {Math.round(s[p.key])}%
          <span class="text-slate-500">(nên {BANDS[p.key][0]}–{BANDS[p.key][1]}%)</span>
        </li>
      {/each}
    </ul>
  </div>

  <ul
    class="space-y-1 rounded-xl px-4 py-3 text-sm {a.ok
      ? 'bg-emerald-50 text-emerald-900'
      : 'bg-amber-50 text-amber-950'}"
    aria-live="polite"
  >
    {#each tips as tip (tip)}
      <li>{tip}</li>
    {/each}
  </ul>
  <p class="text-xs text-slate-600">
    Số liệu làm tròn từ bảng thành phần thực phẩm Việt Nam; năng lượng tính gần đúng: 1 g protein
    hoặc carbohydrate cho khoảng 4 kcal, 1 g lipid cho khoảng 9 kcal. Tỉ lệ khuyến nghị chỉ để tham
    khảo.
  </p>
</div>

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { formatNumber, powText } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import {
    DANGER,
    START,
    behaviourAt,
    countAfter,
    countWords,
    dangerTime,
    divisions,
    timeWords,
  } from './engine.js';

  const MAX_H = 8;
  const W = 340;
  const H = 210;
  const L = 52;
  const R = 12;
  const TOP = 12;
  const BOT = 30;
  const MAX_EXP = 11;
  const TICKS = [
    { e: 0, label: '1' },
    { e: 2, label: '100' },
    { e: 4, label: countWords(10_000) },
    { e: 6, label: '1 triệu' },
    { e: 8, label: '100 triệu' },
    { e: 10, label: '10 tỉ' },
  ];

  let temp = $state(30);
  let hours = $state(4);
  let hygiene = $state(/** @type {'sach' | 'ban'} */ ('sach'));

  const PRESETS = [
    { t: 4, label: 'Tủ lạnh 4 °C' },
    { t: 30, label: 'Để ngoài 30 °C' },
    { t: 37, label: 'Cơ thể người 37 °C' },
    { t: 100, label: 'Đun sôi 100 °C' },
  ];

  const n0 = $derived(START[hygiene]);
  const behaviour = $derived(behaviourAt(temp));
  const n = $derived(countAfter(n0, temp, hours));
  const danger = $derived(dangerTime(n0, temp, MAX_H));

  const x = linear(0, MAX_H, L, W - R).map;
  const y = linear(0, MAX_EXP, H - BOT, TOP).map;
  /** @param {number} count */
  const yOf = (count) => y(count < 1 ? 0 : Math.min(MAX_EXP, Math.log10(count)));

  const path = $derived.by(() => {
    let d = '';
    for (let i = 0; i <= MAX_H * 20; i++) {
      const h = i / 20;
      d += `${i ? ' L' : 'M'} ${Math.round(x(h) * 10) / 10} ${Math.round(yOf(countAfter(n0, temp, h)) * 10) / 10}`;
    }
    return d;
  });

  const rule = $derived.by(() => {
    if (behaviour.kind === 'grow')
      return `Ở ${formatNumber(temp)} °C, cứ khoảng ${timeWords(behaviour.minutes / 60)} mỗi vi khuẩn phân đôi một lần.`;
    if (behaviour.kind === 'stop')
      return temp < 5
        ? `Ở ${formatNumber(temp)} °C, vi khuẩn gần như ngừng sinh sản, nhưng chưa bị tiêu diệt.`
        : `Ở ${formatNumber(temp)} °C, vi khuẩn ngừng sinh sản.`;
    return `Ở ${formatNumber(temp)} °C, vi khuẩn bị tiêu diệt dần: cứ ${timeWords(behaviour.halfMinutes / 60)} số vi khuẩn giảm một nửa.`;
  });

  const verdict = $derived.by(() => {
    const now = `Sau ${timeWords(hours)}: khoảng ${countWords(n)} vi khuẩn (ban đầu ${countWords(n0)}).`;
    if (behaviour.kind === 'grow') {
      const k = divisions(temp, hours);
      const tail =
        n >= DANGER
          ? ' Đã vượt ngưỡng nguy hiểm: thức ăn dễ gây ngộ độc.'
          : danger !== null
            ? ` Sẽ vượt ngưỡng nguy hiểm sau ${timeWords(danger)}.`
            : ` Chưa vượt ngưỡng nguy hiểm trong ${MAX_H} giờ.`;
      return `${now} Đã phân đôi ${k} lần, số vi khuẩn gấp ${powText(2, k)} = ${countWords(2 ** k)} lần ban đầu.${tail}`;
    }
    if (behaviour.kind === 'stop') return `${now} Số vi khuẩn không tăng.`;
    return `${now} ${n === 0 ? 'Vi khuẩn đã bị tiêu diệt hết.' : 'Vi khuẩn đang bị tiêu diệt.'}`;
  });
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn nhanh nơi để thức ăn">
    {#each PRESETS as p (p.t)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 text-sm font-semibold {temp === p.t
          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} {focusRing}"
        aria-pressed={temp === p.t}
        onclick={() => (temp = p.t)}>{p.label}</button
      >
    {/each}
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Nhiệt độ" bind:value={temp} min={0} max={100} unit="°C" />
    <SliderField
      label="Thời gian để thức ăn"
      bind:value={hours}
      min={0}
      max={MAX_H}
      step={0.5}
      format={(v) => timeWords(v)}
    />
  </div>

  <SegmentedControl
    label="Vệ sinh khi chế biến"
    options={[
      { value: 'sach', label: 'Rửa tay, dụng cụ sạch, đậy kín' },
      { value: 'ban', label: 'Tay bẩn, để hở' },
    ]}
    bind:value={hygiene}
  />

  <p class="text-sm text-slate-700">{rule}</p>

  <svg
    viewBox="0 0 {W} {H}"
    class="w-full max-w-xl rounded-xl border border-slate-200 bg-white"
    role="img"
    aria-label="Đồ thị số vi khuẩn theo thời gian. {verdict}"
  >
    {#each TICKS as t (t.e)}
      <line x1={L} x2={W - R} y1={y(t.e)} y2={y(t.e)} stroke="#e2e8f0" />
      <text x={L - 4} y={y(t.e) + 4} text-anchor="end" font-size="10" fill="#475569">{t.label}</text
      >
    {/each}
    <line
      x1={L}
      x2={W - R}
      y1={y(6)}
      y2={y(6)}
      stroke="#dc2626"
      stroke-dasharray="5 4"
      stroke-width="1.5"
    />
    <text x={W - R - 2} y={y(6) - 4} text-anchor="end" font-size="10" fill="#b91c1c"
      >ngưỡng nguy hiểm</text
    >
    {#each [0, 2, 4, 6, 8] as h (h)}
      <text x={x(h)} y={H - BOT + 14} text-anchor="middle" font-size="10" fill="#475569">{h} h</text
      >
    {/each}
    <line x1={L} x2={L} y1={TOP} y2={H - BOT} stroke="#94a3b8" />
    <line x1={L} x2={W - R} y1={H - BOT} y2={H - BOT} stroke="#94a3b8" />
    <path d={path} fill="none" stroke="#4f46e5" stroke-width="2.5" />
    <circle cx={x(hours)} cy={yOf(n)} r="5" fill="#4f46e5" stroke="white" stroke-width="2" />
    <text x={L + (W - L - R) / 2} y={H - 4} text-anchor="middle" font-size="10" fill="#475569"
      >thời gian (giờ)</text
    >
  </svg>
  <p class="text-xs text-slate-600">
    Trục dọc: số vi khuẩn, mỗi vạch gấp 100 lần vạch ngay dưới nó. Đây là mô hình đơn giản để so
    sánh, không phải số liệu của một loài vi khuẩn cụ thể.
  </p>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {n >= DANGER
      ? 'bg-rose-50 font-semibold text-rose-900'
      : 'bg-emerald-50 text-emerald-900'}"
    aria-live="polite"
  >
    {verdict}
  </p>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import TraceChart from '#lib/domain/trace-chart.svelte';
  import { K, MAX, START, afterDisaster, explain, nextYear, trendOf } from './engine.js';

  const RELEASE = 600;

  let sizes = $state([START]);
  let event = $state('');
  const n = $derived(sizes[sizes.length - 1]);
  const trend = $derived(trendOf(n));
  const text = $derived(
    `${event}Năm thứ ${sizes.length - 1}: N = ${formatNumber(n)} cá thể. ${explain(n)}`,
  );

  function step() {
    event = '';
    sizes = [...sizes, nextYear(n)];
  }
  function fire() {
    event = `Cháy rừng làm chết 70% số cá thể, bất kể mật độ (nhân tố không phụ thuộc mật độ). `;
    sizes = [...sizes, afterDisaster(n, 0.7)];
  }
  function release() {
    event = `Thả thêm ${formatNumber(RELEASE)} cá thể vào khu vực. `;
    sizes = [...sizes, Math.min(MAX, n + RELEASE)];
  }
  function reset() {
    event = '';
    sizes = [START];
  }
</script>

<div class="space-y-4">
  <TraceChart
    values={sizes}
    max={MAX}
    minDays={15}
    level={K}
    levelLabel="Sức chứa K = {formatNumber(K)}"
    unit="năm"
    label="Số lượng cá thể qua các năm: hiện tại {formatNumber(n)} cá thể, sức chứa {formatNumber(
      K,
    )}"
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={step}>Năm tiếp theo</button>
    <button type="button" class={button.secondary} onclick={fire} disabled={n === 0}
      >Cháy rừng (−70%)</button
    >
    <button type="button" class={button.secondary} onclick={release} disabled={n >= MAX}
      >Thả thêm {formatNumber(RELEASE)} cá thể</button
    >
    <button type="button" class={button.quiet} onclick={reset}>Đặt lại</button>
  </div>
  <FeedbackNote tone={trend === 'can-bang' ? 'ok' : 'info'} {text} />
</div>

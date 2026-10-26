<script>
  import { button } from '#lib/core/ui.js';

  /**
   * Step buttons for a widget that plays a process stage by stage:
   * "Bước trước", "Bước tiếp", "Tự chạy" (one stage every `interval` ms,
   * stopping at the last one) and "Làm lại". The current stage is bindable.
   *
   * @type {{
   *   stage: number;
   *   count: number;
   *   interval?: number;
   *   label?: string;
   * }}
   */
  let { stage = $bindable(), count, interval = 1800, label = 'Giai đoạn' } = $props();

  let playing = $state(false);
  /** @type {ReturnType<typeof setInterval> | undefined} */
  let timer;

  function stop() {
    playing = false;
    clearInterval(timer);
  }

  function play() {
    if (playing) {
      stop();
      return;
    }
    if (stage >= count - 1) stage = 0;
    playing = true;
    timer = setInterval(() => {
      if (stage >= count - 1) stop();
      else stage += 1;
    }, interval);
  }

  $effect(() => stop);
</script>

<div class="flex flex-wrap items-center gap-2">
  <button
    type="button"
    class={button.quiet}
    disabled={stage <= 0}
    onclick={() => {
      stop();
      stage -= 1;
    }}>Bước trước</button
  >
  <button
    type="button"
    class={button.primary}
    disabled={stage >= count - 1}
    onclick={() => {
      stop();
      stage += 1;
    }}>Bước tiếp</button
  >
  <button type="button" class={button.secondary} aria-pressed={playing} onclick={play}
    >{playing ? 'Dừng' : 'Tự chạy'}</button
  >
  <button
    type="button"
    class={button.quiet}
    onclick={() => {
      stop();
      stage = 0;
    }}>Làm lại</button
  >
  <span class="text-sm font-semibold text-slate-700">{label} {stage + 1} / {count}</span>
</div>

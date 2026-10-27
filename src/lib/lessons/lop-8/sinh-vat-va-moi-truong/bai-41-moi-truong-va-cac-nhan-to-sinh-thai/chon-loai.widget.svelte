<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { FARM_FISH, verdict } from './engine.js';

  const T_MIN = 0;
  const T_MAX = 45;
  const W = 320;
  const LEFT = 10;
  const RIGHT = 310;
  /** @param {number} t */
  const xOf = (t) => LEFT + ((t - T_MIN) / (T_MAX - T_MIN)) * (RIGHT - LEFT);

  let low = $state(14);
  let high = $state(31);

  /** @param {number} v */
  function setLow(v) {
    low = Math.min(v, high);
  }
  /** @param {number} v */
  function setHigh(v) {
    high = Math.max(v, low);
  }

  const VERDICT_TEXT = {
    chet: 'không nuôi được: có lúc nhiệt độ nước vượt ra ngoài giới hạn sinh thái, cá chết',
    'chong-chiu': 'sống được nhưng có lúc rơi vào khoảng chống chịu, cá lớn chậm',
    'thuan-loi': 'phù hợp nhất: quanh năm nhiệt độ nước nằm trong khoảng thuận lợi',
  };
  const results = $derived(FARM_FISH.map((f) => ({ f, v: verdict(f, low, high) })));
  const best = $derived(results.filter((r) => r.v === 'thuan-loi').map((r) => r.f.name));
  const summary = $derived(
    best.length
      ? `Với nước từ ${low} °C đến ${high} °C, nên chọn: ${best.join(', ')}.`
      : `Với nước từ ${low} °C đến ${high} °C, không loài nào luôn ở khoảng thuận lợi; chọn loài sống được và chăm sóc thêm.`,
  );
</script>

<div class="space-y-4">
  <p class="text-sm text-slate-700">
    Đặt nhiệt độ nước thấp nhất và cao nhất trong năm của địa phương. Mỗi thanh là giới hạn sinh
    thái về nhiệt độ của một loài cá (đỏ: chết; vàng: chống chịu; xanh: thuận lợi); dải viền đen là
    nhiệt độ nước của địa phương.
  </p>
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Nhiệt độ nước thấp nhất"
      value={low}
      min={T_MIN}
      max={T_MAX}
      unit="°C"
      oninput={setLow}
    />
    <SliderField
      label="Nhiệt độ nước cao nhất"
      value={high}
      min={T_MIN}
      max={T_MAX}
      unit="°C"
      oninput={setHigh}
    />
  </div>

  <ul class="space-y-3">
    {#each results as { f, v } (f.id)}
      <li>
        <svg
          viewBox="0 0 {W} 34"
          class="block w-full"
          role="img"
          aria-label="{f.name}: giới hạn {f.lower} đến {f.upper} °C, khoảng thuận lợi {f.favLow} đến {f.favHigh} °C"
        >
          <rect x={LEFT} y="8" width={RIGHT - LEFT} height="16" fill="#fecaca" />
          <rect
            x={xOf(f.lower)}
            y="8"
            width={xOf(f.upper) - xOf(f.lower)}
            height="16"
            fill="#fef3c7"
          />
          <rect
            x={xOf(f.favLow)}
            y="8"
            width={xOf(f.favHigh) - xOf(f.favLow)}
            height="16"
            fill="#bbf7d0"
          />
          <rect
            x={xOf(low)}
            y="4"
            width={Math.max(2, xOf(high) - xOf(low))}
            height="24"
            fill="none"
            stroke="#0f172a"
            stroke-width="2"
          />
          <g font-size="8" fill="#334155" text-anchor="middle">
            <text x={xOf(f.lower)} y="33">{f.lower}</text>
            <text x={xOf(f.upper)} y="33">{f.upper}</text>
          </g>
        </svg>
        <p class="text-sm">
          <span class="font-semibold">{f.name}</span>:
          <span class={v === 'chet' ? 'text-rose-700' : v === 'thuan-loi' ? 'text-emerald-700' : ''}
            >{VERDICT_TEXT[v]}</span
          >
        </p>
      </li>
    {/each}
  </ul>
  <FeedbackNote tone={best.length ? 'ok' : 'info'} text={summary} />
</div>

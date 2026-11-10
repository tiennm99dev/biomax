<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, textInput } from '#lib/core/ui.js';
  import DoubleBarChart from '#lib/core/visuals/double-bar-chart.svelte';
  import { SAMPLE, WINDOWS, judgeGroup, mean, rowsOf } from './engine.js';

  /** @type {Array<'rest' | 'after'>} */
  const KEYS = ['rest', 'after'];

  let seconds = $state(15);
  /** @type {import('./engine.js').Member[]} */
  let members = $state(SAMPLE.map((m) => ({ ...m })));

  const rows = $derived(rowsOf(members, seconds));
  const note = $derived(judgeGroup(rows));
  const restMean = $derived(mean(rows.map((r) => r.rest)));
  const afterMean = $derived(mean(rows.map((r) => r.after)));

  /**
   * @param {number} i @param {'rest' | 'after'} key @param {string} text
   */
  function setCount(i, key, text) {
    const n = Number.parseInt(text, 10);
    members[i][key] = Number.isFinite(n) && n >= 0 ? Math.min(n, 300) : null;
  }

  function clear() {
    members = SAMPLE.map((m) => ({ name: m.name, rest: null, after: null }));
  }

  function sample() {
    seconds = 15;
    members = SAMPLE.map((m) => ({ ...m }));
  }

  /** @param {number} v */
  const bpm = (v) => formatNumber(v, 0);
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Thời gian đếm mạch"
    value={seconds}
    options={WINDOWS.map((w) => ({ value: w, label: `${w} s` }))}
    onchange={(v) => (seconds = Number(v))}
  />

  <div class="overflow-x-auto">
    <table class="w-full min-w-[20rem] text-sm tabular-nums">
      <caption class="pb-1 text-left text-slate-600">
        Số nhịp đếm được trong {seconds} s; máy tính đổi ra lần/phút.
      </caption>
      <thead>
        <tr class="text-left">
          <th class="py-1 pr-2">Bạn</th>
          <th class="py-1 pr-2">Lúc nghỉ</th>
          <th class="py-1 pr-2">Ngay sau vận động</th>
        </tr>
      </thead>
      <tbody>
        {#each members as m, i (m.name)}
          {@const row = rows.find((r) => r.name === m.name)}
          <tr class="align-top">
            <th class="py-1 pr-2 text-left font-semibold">{m.name}</th>
            {#each KEYS as key (key)}
              <td class="py-1 pr-2">
                <input
                  type="number"
                  inputmode="numeric"
                  min="0"
                  max="300"
                  class="{textInput} max-w-24"
                  aria-label="{m.name}, số nhịp {key === 'rest'
                    ? 'lúc nghỉ'
                    : 'ngay sau vận động'} trong {seconds} giây"
                  value={m[key] ?? ''}
                  oninput={(e) => setCount(i, key, e.currentTarget.value)}
                />
                <span class="block text-xs text-slate-600">
                  {row ? `${bpm(row[key])} lần/phút` : '…'}
                </span>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={clear}>Xoá để nhập số đo của nhóm</button>
    <button type="button" class={button.quiet} onclick={sample}>Dùng số liệu mẫu</button>
  </div>

  {#if rows.length > 0}
    <DoubleBarChart
      title="Nhịp tim (lần/phút)"
      unit="lần/phút"
      categories={rows.map((r) => r.name)}
      series={[
        { name: 'Lúc nghỉ', color: '#60a5fa', values: rows.map((r) => Math.round(r.rest)) },
        {
          name: 'Ngay sau vận động',
          color: '#ef4444',
          values: rows.map((r) => Math.round(r.after)),
        },
      ]}
      height={260}
    />
    <p class="text-sm tabular-nums" aria-live="polite">
      Trung bình nhóm: lúc nghỉ {bpm(restMean)} lần/phút, sau vận động {bpm(afterMean)} lần/phút, tăng
      {bpm(afterMean - restMean)} lần/phút (khoảng {formatNumber(
        ((afterMean - restMean) / restMean) * 100,
        0,
      )}%).
    </p>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>

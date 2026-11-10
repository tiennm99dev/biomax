<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { FROG_TESTS, RECORD, STIMULUS, beatTimes, countBetween, frogStrength } from './engine.js';

  /** @type {import('./engine.js').FrogId} */
  let id = $state('that-chi');

  const test = $derived(FROG_TESTS.find((f) => f.id === id) ?? FROG_TESTS[0]);
  const sinus = $derived(beatTimes(id, 'xoang'));
  const ventricle = $derived(beatTimes(id, 'that'));

  const LEFT = 64;
  const RIGHT = 332;
  const x = linear(0, RECORD, LEFT, RIGHT).map;

  /** @type {Array<[number, number, string]>} */
  const SPANS = [
    [0, 20, '0–20 s'],
    [20, 50, '20–50 s'],
    [50, 90, '50–90 s'],
  ];

  /**
   * Spikes of a record line.
   * @param {number[]} beats @param {number} base @param {(t: number) => number} height
   */
  const spikes = (beats, base, height) =>
    `M ${LEFT} ${base} ` +
    beats
      .map((b) => `L ${x(b)} ${base} L ${x(b) + 1.5} ${base - height(b)} L ${x(b) + 3} ${base}`)
      .join(' ') +
    ` L ${RIGHT} ${base}`;

  const sinusPath = $derived(spikes(sinus, 50, () => 14));
  const ventPath = $derived(spikes(ventricle, 112, (t) => 26 * frogStrength(id, t)));

  /** @param {number[]} beats @param {number} a @param {number} b */
  const perMin = (beats, a, b) => formatNumber((countBetween(beats, a, b) * 60) / (b - a), 0);

  /** @param {string | number} v @returns {import('./engine.js').FrogId} */
  const asId = (v) => FROG_TESTS.find((f) => f.id === v)?.id ?? 'binh-thuong';
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Thí nghiệm trên tim ếch"
    value={id}
    options={FROG_TESTS.map((f) => ({ value: f.id, label: f.name }))}
    onchange={(v) => (id = asId(v))}
  />

  <svg
    viewBox="0 0 340 140"
    class="mx-auto block w-full max-w-lg rounded-xl bg-amber-50"
    role="img"
    aria-label="Đồ ghi nhịp đập trong {RECORD} giây: xoang tĩnh mạch {sinus.length} nhịp, tâm thất {ventricle.length} nhịp"
  >
    {#if test.event < RECORD}
      <rect
        x={x(test.event)}
        y="14"
        width={id === 'kich-thich' ? x(test.event + STIMULUS) - x(test.event) : 2}
        height="104"
        fill="#fde68a"
      />
      <text x={x(test.event) + 3} y="12" font-size="11" fill="#92400e">{test.name}</text>
    {/if}
    <text x="4" y="46" font-size="11" fill="#334155">Xoang TM</text>
    <text x="4" y="104" font-size="11" fill="#334155">Tâm thất</text>
    <path d={sinusPath} fill="none" stroke="#2563eb" stroke-width="1.5" />
    <path d={ventPath} fill="none" stroke="#dc2626" stroke-width="1.5" />
    <line x1={LEFT} y1="124" x2={RIGHT} y2="124" stroke="#94a3b8" />
    {#each [0, 30, 60, 90] as s (s)}
      <text x={x(s)} y="136" text-anchor="middle" font-size="10" fill="#334155">{s} s</text>
    {/each}
  </svg>

  <table class="w-full text-sm tabular-nums" aria-live="polite">
    <caption class="sr-only">Nhịp đập quy ra lần/phút theo từng đoạn</caption>
    <thead>
      <tr class="text-left">
        <th class="py-1">Lần/phút</th>
        {#each SPANS as s (s[2])}<th class="py-1 text-right">{s[2]}</th>{/each}
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="py-1 text-left font-normal">Xoang tĩnh mạch</th>
        {#each SPANS as s (s[2])}<td class="text-right">{perMin(sinus, s[0], s[1])}</td>{/each}
      </tr>
      <tr>
        <th class="py-1 text-left font-normal">Tâm thất</th>
        {#each SPANS as s (s[2])}<td class="text-right">{perMin(ventricle, s[0], s[1])}</td>{/each}
      </tr>
    </tbody>
  </table>

  <FeedbackNote tone="info" text={test.result} />
</div>

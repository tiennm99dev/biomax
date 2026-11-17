<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import PunnettSquare from '#lib/domain/punnett-square.svelte';
  import { FATHERS, MOTHERS, quarterText, risk } from './engine.js';

  /** @type {import('./engine.js').RiskMode} */
  let mode = $state('AR');
  let mother = $state('Aa');
  let father = $state('Aa');

  /** @param {string | number} m */
  function setMode(m) {
    mode = m === 'XR' ? 'XR' : 'AR';
    mother = MOTHERS[mode][1].g;
    father = FATHERS[mode][0].g;
  }

  const r = $derived(risk(mode, mother, father));
  const text = $derived.by(() => {
    const all = `Xác suất sinh một đứa con mắc bệnh: ${quarterText(r.child)}.`;
    if (mode === 'AR')
      return `${all} ${
        r.child === 0
          ? 'Con có thể mang allele bệnh nhưng không biểu hiện.'
          : 'Bệnh do gene lặn trên NST thường nên con trai và con gái có nguy cơ như nhau.'
      }`;
    return `${all} Nếu sinh con trai: ${quarterText(r.son)}; nếu sinh con gái: ${quarterText(r.daughter)}. Con trai nhận NST X từ mẹ, nên nguy cơ của con trai phụ thuộc vào mẹ.`;
  });
</script>

<div class="space-y-4 rounded-xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">Tính nguy cơ sinh con mắc bệnh di truyền</p>
  <SegmentedControl
    label="Bệnh"
    options={[
      { value: 'AR', label: 'Tan máu bẩm sinh (gene lặn, NST thường)' },
      { value: 'XR', label: 'Máu khó đông (gene lặn trên X)' },
    ]}
    value={mode}
    onchange={setMode}
  />
  <SegmentedControl
    label="Người vợ"
    options={MOTHERS[mode].map((o) => ({ value: o.g, label: o.label }))}
    bind:value={mother}
  />
  <SegmentedControl
    label="Người chồng"
    options={FATHERS[mode].map((o) => ({ value: o.g, label: o.label }))}
    bind:value={father}
  />
  <PunnettSquare
    {mother}
    {father}
    editable={false}
    traits={{ A: 'bình thường', a: 'mắc bệnh' }}
    label="Sơ đồ lai của cặp vợ chồng"
  />
  <FeedbackNote tone={r.child === 0 ? 'ok' : 'warn'} {text} />
</div>

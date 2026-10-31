<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import PedigreeChart from '#lib/domain/pedigree-chart.svelte';
  import { possibleGenotypes } from '#lib/domain/pedigree.js';
  import {
    SCENARIOS,
    alleleTokens,
    check,
    choicesFor,
    dominance,
    genotypeSpeech,
    keyFamily,
    labels,
    readingOrder,
    reasonFor,
    scenarioById,
  } from './engine.js';

  let scenarioId = $state(SCENARIOS[0].id);
  /** @type {string | number} */
  let guess = $state('');
  /** @type {Record<string, string[]>} */
  let picks = $state({});
  /** @type {ReturnType<typeof check> | null} */
  let result = $state(null);
  let revealed = $state(false);

  const scenario = $derived(scenarioById(scenarioId));
  const pedigree = $derived(scenario.pedigree);
  const name = $derived(labels(pedigree));
  const people = $derived(readingOrder(pedigree));
  const truth = $derived(dominance(pedigree));
  const key = $derived(keyFamily(pedigree));

  const guessText = $derived.by(() => {
    if (!guess)
      return 'Bước 1: quan sát phả hệ và chọn tính trạng bệnh do allele trội hay lặn quy định.';
    if (!key) return 'Phả hệ này chưa đủ để kết luận.';
    const pair = `${name[key.father]} và ${name[key.mother]}`;
    const why =
      key.kind === 'lặn'
        ? `bố mẹ ${pair} đều bình thường nhưng sinh con ${name[key.child]} mắc bệnh, nên bố mẹ mang allele gây bệnh ở trạng thái ẩn`
        : `bố mẹ ${pair} đều mắc bệnh nhưng sinh con ${name[key.child]} bình thường, nên allele bình thường bị che lấp ở bố mẹ`;
    return guess === truth
      ? `Đúng: bệnh do allele ${truth} quy định, vì ${why}. Bước 2: chọn kiểu gene cho từng người.`
      : `Chưa đúng. Gợi ý: xem cặp bố mẹ ${name[key.father]}, ${name[key.mother]} và người con ${name[key.child]}.`;
  });

  /** @param {string | number} id */
  function chooseScenario(id) {
    scenarioId = String(id);
    guess = '';
    picks = {};
    result = null;
    revealed = false;
  }

  /** @param {string} id @param {string} g */
  function togglePick(id, g) {
    const now = picks[id] ?? [];
    picks = { ...picks, [id]: now.includes(g) ? now.filter((x) => x !== g) : [...now, g] };
    result = null;
  }

  function runCheck() {
    result = check(pedigree, scenario.mode, picks);
  }

  function showAnswer() {
    picks = possibleGenotypes(pedigree, scenario.mode);
    result = check(pedigree, scenario.mode, picks);
    revealed = true;
  }

  const summary = $derived.by(() => {
    if (!result)
      return 'Chạm vào các kiểu gene có thể có của mỗi người (có thể chọn hai kiểu gene khi chưa biết chắc), rồi bấm "Kiểm tra".';
    const n = pedigree.people.length;
    if (result.right.length === n)
      return `Chính xác cả ${n} người! Người có hai kiểu gene có thể là người mà phả hệ chưa đủ dữ kiện để biết chắc.`;
    const parts = [`Đúng ${result.right.length}/${n} người.`];
    if (result.missing.length)
      parts.push(`Chưa chọn: ${result.missing.map((id) => name[id]).join(', ')}.`);
    if (result.wrong.length)
      parts.push(`Xem lại: ${result.wrong.map((id) => name[id]).join(', ')}.`);
    return parts.join(' ');
  });

  /** @param {string} id */
  const status = (id) =>
    !result ? '' : result.right.includes(id) ? 'right' : result.wrong.includes(id) ? 'wrong' : '';
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Phả hệ"
    options={SCENARIOS.map((s) => ({ value: s.id, label: s.label }))}
    value={scenarioId}
    onchange={chooseScenario}
  />

  <p class="text-sm text-slate-700">{scenario.given}</p>

  {#key scenarioId}
    <PedigreeChart
      {pedigree}
      analysis={false}
      trait={scenario.trait}
      label="Phả hệ {scenario.trait}"
    />
  {/key}

  <div class="space-y-2">
    <SegmentedControl
      label="Bước 1. Bệnh do allele nào quy định?"
      options={[
        { value: 'trội', label: 'Allele trội' },
        { value: 'lặn', label: 'Allele lặn' },
      ]}
      bind:value={guess}
    />
    <FeedbackNote tone={!guess ? 'info' : guess === truth ? 'ok' : 'warn'} text={guessText} />
  </div>

  {#if guess === truth}
    <div class="space-y-3">
      <p class="text-sm font-semibold text-slate-700">Bước 2. Kiểu gene của từng người</p>
      <ul class="space-y-2">
        {#each people as x (x.id)}
          {@const st = status(x.id)}
          <li
            class="rounded-xl border p-3 {st === 'right'
              ? 'border-emerald-300 bg-emerald-50'
              : st === 'wrong'
                ? 'border-amber-300 bg-amber-50'
                : 'border-slate-200 bg-white'}"
          >
            <div class="flex flex-wrap items-center gap-2">
              <span class="min-w-32 text-sm text-slate-700">
                <strong>{name[x.id]}</strong>
                {x.sex === 'M' ? 'nam' : 'nữ'}, {x.affected ? 'mắc bệnh' : 'bình thường'}
              </span>
              <span
                class="flex flex-wrap gap-1"
                role="group"
                aria-label="Kiểu gene của {name[x.id]}"
              >
                {#each choicesFor(scenario.mode, x) as g (g)}
                  {@const on = (picks[x.id] ?? []).includes(g)}
                  <button
                    type="button"
                    class="min-h-11 min-w-14 rounded-lg border px-3 font-mono text-base font-semibold focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none {on
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}"
                    aria-pressed={on}
                    aria-label={genotypeSpeech(g)}
                    onclick={() => togglePick(x.id, g)}
                  >
                    {#each alleleTokens(g) as t, i (i)}{#if t.length === 2}X<sup>{t[1]}</sup
                        >{:else}{t}{/if}{/each}
                  </button>
                {/each}
              </span>
            </div>
            {#if st === 'wrong' || revealed}
              <p class="mt-2 text-sm {st === 'wrong' ? 'text-amber-900' : 'text-slate-600'}">
                <LiveRichText text={reasonFor(pedigree, scenario.mode, x.id)} />
              </p>
            {/if}
          </li>
        {/each}
      </ul>
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} onclick={runCheck}>Kiểm tra</button>
        <button type="button" class={button.quiet} onclick={showAnswer}>Xem đáp án</button>
      </div>
      <FeedbackNote
        tone={!result ? 'info' : result.right.length === pedigree.people.length ? 'ok' : 'warn'}
        text={summary}
      />
    </div>
  {/if}
</div>

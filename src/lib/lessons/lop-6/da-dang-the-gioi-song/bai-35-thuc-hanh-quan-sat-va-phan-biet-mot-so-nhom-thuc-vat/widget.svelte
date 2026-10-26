<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { GROUPS, SAMPLES, checkGroup, checkSign, groupById } from './engine.js';

  let index = $state(0);
  /** @type {import('./engine.js').GroupId | null} */
  let filed = $state(null);
  /** @type {number | null} */
  let proof = $state(null);
  /** @type {number[]} */
  let rejected = $state([]);
  let message = $state('Đọc các quan sát về mẫu, rồi chọn nhóm thực vật của mẫu.');
  /** @type {Record<string, { group: string, sign: string }>} */
  let report = $state({});

  const sample = $derived(SAMPLES[index]);
  const doneCount = $derived(Object.keys(report).length);

  /** @param {number} i */
  function choose(i) {
    index = i;
    filed = null;
    proof = null;
    rejected = [];
    message = 'Đọc các quan sát về mẫu, rồi chọn nhóm thực vật của mẫu.';
  }

  /** @param {import('./engine.js').GroupId} id */
  function fileInto(id) {
    const r = checkGroup(index, id);
    message = r.text;
    if (r.ok) filed = id;
  }

  /** @param {number} i */
  function pickProof(i) {
    const r = checkSign(index, i);
    message = r.text;
    if (!r.ok) {
      if (!rejected.includes(i)) rejected = [...rejected, i];
      return;
    }
    proof = i;
    report = {
      ...report,
      [sample.id]: { group: groupById(sample.group).name, sign: sample.observations[i].text },
    };
    if (Object.keys(report).length === SAMPLES.length)
      message += ` Hoàn thành phiếu thu hoạch: cả ${SAMPLES.length} mẫu đã được xếp nhóm.`;
  }
</script>

<div class="space-y-4">
  <div>
    <p class="mb-1 text-sm font-semibold text-slate-700">
      Khay mẫu vật (đã xếp {doneCount}/{SAMPLES.length})
    </p>
    <ul class="flex flex-wrap gap-2">
      {#each SAMPLES as s, i (s.id)}
        <li>
          <button
            type="button"
            class="min-h-11 rounded-lg border px-3 py-2 text-sm font-medium {focusRing} {i === index
              ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            aria-pressed={i === index}
            onclick={() => choose(i)}
          >
            {#if report[s.id]}<span aria-label="đã xếp">✓</span>{/if}
            {s.name}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <article class="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm">
    <h3 class="font-bold text-amber-950">
      {sample.name} <span class="font-normal">(lấy ở {sample.place})</span>
    </h3>
    <p class="mt-1 text-amber-900">Quan sát bằng mắt thường và kính lúp:</p>
    <ol class="mt-1 space-y-1">
      {#each sample.observations as o, i (o.text)}
        <li>
          {#if filed}
            <button
              type="button"
              class="min-h-11 w-full rounded-lg border px-3 py-2 text-left {focusRing} {proof === i
                ? 'border-emerald-500 bg-emerald-50 font-semibold text-emerald-900'
                : rejected.includes(i)
                  ? 'border-rose-300 bg-rose-50 text-rose-900'
                  : 'border-amber-300 bg-white text-slate-800 hover:bg-amber-100'}"
              disabled={proof !== null}
              aria-label="Chọn làm dấu hiệu: {o.text}"
              onclick={() => pickProof(i)}
            >
              {i + 1}. {o.text}
            </button>
          {:else}
            <p class="px-1 text-slate-800">{i + 1}. {o.text}</p>
          {/if}
        </li>
      {/each}
    </ol>
  </article>

  {#if !filed}
    <div role="group" aria-label="Bước 1: chọn nhóm thực vật">
      <p class="mb-1 text-sm font-semibold text-slate-700">Bước 1: mẫu này thuộc nhóm nào?</p>
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {#each GROUPS as g (g.id)}
          <button
            type="button"
            class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 {focusRing}"
            onclick={() => fileInto(g.id)}>{g.name}</button
          >
        {/each}
      </div>
    </div>
  {:else if proof === null}
    <p class="text-sm font-semibold text-slate-700">
      Bước 2: bấm vào quan sát chứng minh mẫu thuộc nhóm {groupById(filed).name}.
    </p>
  {/if}

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {proof !== null
      ? 'bg-emerald-50 font-semibold text-emerald-900'
      : 'bg-slate-100 text-slate-800'}"
    aria-live="polite"
  >
    {message}
  </p>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.secondary}
      onclick={() => choose((index + 1) % SAMPLES.length)}>Mẫu tiếp theo</button
    >
    <button
      type="button"
      class={button.quiet}
      disabled={doneCount === 0}
      onclick={() => {
        report = {};
        choose(0);
      }}>Làm lại phiếu</button
    >
  </div>

  {#if doneCount > 0}
    <div class="overflow-x-auto">
      <table class="w-full min-w-80 border-collapse text-left text-sm">
        <caption class="mb-1 text-left font-semibold text-slate-700">Phiếu thu hoạch</caption>
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-200 px-2 py-1">Mẫu</th>
            <th class="border border-slate-200 px-2 py-1">Nhóm</th>
            <th class="border border-slate-200 px-2 py-1">Dấu hiệu nhận biết</th>
          </tr>
        </thead>
        <tbody>
          {#each SAMPLES.filter((s) => report[s.id]) as s (s.id)}
            <tr>
              <td class="border border-slate-200 px-2 py-1">{s.name}</td>
              <td class="border border-slate-200 px-2 py-1">{report[s.id].group}</td>
              <td class="border border-slate-200 px-2 py-1">{report[s.id].sign}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { BRANCHES, groupsOf } from '../_shared/animal-groups.js';
  import {
    SIGHTINGS,
    SITES,
    branchTally,
    fileFeedback,
    sightingById,
    sightingsAt,
    tally,
  } from './engine.js';

  let site = $state(SITES[0].id);
  /** @type {import('./engine.js').Journal} */
  let journal = $state({});
  /** @type {Record<string, string>} */
  let picks = $state({});
  let mistakes = $state(0);
  let message = $state(
    'Chọn một điểm quan sát, đọc ghi chép về từng con vật và chọn nhóm của nó để ghi vào nhật kí.',
  );

  const here = $derived(sightingsAt(site));
  const siteInfo = $derived(SITES.find((s) => s.id === site) ?? SITES[0]);
  const counts = $derived(tally(journal));
  const branches = $derived(branchTally(journal));
  const recorded = $derived(Object.keys(journal).length);
  const most = $derived(Math.max(1, ...counts.map((c) => c.count)));

  /** @param {string} id */
  function record(id) {
    const group = /** @type {import('./engine.js').GroupId | ''} */ (picks[id] ?? '');
    if (!group) {
      message = 'Hãy chọn một nhóm trong danh sách trước khi ghi.';
      return;
    }
    const r = fileFeedback(id, group);
    message = r.text;
    if (r.ok) {
      journal = { ...journal, [id]: group };
      if (Object.keys(journal).length === SIGHTINGS.length)
        message += ` Nhật kí hoàn thành: ${SIGHTINGS.length} con vật ở ${SITES.length} điểm quan sát.`;
    } else mistakes++;
  }

  function reset() {
    journal = {};
    picks = {};
    mistakes = 0;
    message = 'Đã xóa nhật kí. Bắt đầu lại từ điểm quan sát đầu tiên.';
    site = SITES[0].id;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Điểm quan sát"
    options={SITES.map((s) => ({ value: s.id, label: s.name }))}
    bind:value={site}
  />
  <p class="text-sm text-slate-700"><strong>Môi trường:</strong> {siteInfo.habitat}.</p>

  <ul class="grid gap-3 sm:grid-cols-2">
    {#each here as s (s.id)}
      {@const done = journal[s.id] !== undefined}
      <li
        class="rounded-xl border p-3 text-sm {done
          ? 'border-emerald-400 bg-emerald-50'
          : 'border-slate-200 bg-white'}"
      >
        <p class="font-bold text-slate-900">
          {#if done}<span aria-label="đã ghi">✓</span>{/if}
          {s.name}
          <span
            class="ml-1 rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700"
            >{s.tool}</span
          >
        </p>
        <p class="mt-1 text-slate-700">{s.note}</p>
        {#if !done}
          <div class="mt-2 flex flex-wrap items-end gap-2">
            <label class="flex-1 text-xs font-semibold text-slate-700">
              Nhóm phân loại
              <select
                class="mt-1 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-2 text-sm {focusRing}"
                bind:value={picks[s.id]}
              >
                <option value="">Chọn nhóm…</option>
                {#each BRANCHES as b (b.id)}
                  <optgroup label={b.name}>
                    {#each groupsOf(b.id) as g (g.id)}
                      <option value={g.id}>{g.name}</option>
                    {/each}
                  </optgroup>
                {/each}
              </select>
            </label>
            <button
              type="button"
              class={button.primary}
              aria-label="Ghi {s.name} vào nhật kí"
              onclick={() => record(s.id)}>Ghi</button
            >
          </div>
        {/if}
      </li>
    {/each}
  </ul>

  <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {message}
  </p>

  <section class="space-y-2 rounded-xl border border-slate-200 p-3">
    <h3 class="font-bold text-slate-900">
      Nhật kí thực địa: {recorded}/{SIGHTINGS.length} con vật · ghi sai {mistakes} lần
    </h3>
    <p class="text-sm text-slate-700">
      Không xương sống: <strong>{branches.invertebrates}</strong> · Có xương sống:
      <strong>{branches.vertebrates}</strong>
    </p>
    {#if recorded > 0}
      <div class="overflow-x-auto">
        <table class="w-full min-w-80 border-collapse text-left text-sm">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-200 px-2 py-1">Tên</th>
              <th class="border border-slate-200 px-2 py-1">Nơi gặp</th>
              <th class="border border-slate-200 px-2 py-1">Quan sát bằng</th>
              <th class="border border-slate-200 px-2 py-1">Nhóm</th>
            </tr>
          </thead>
          <tbody>
            {#each Object.keys(journal) as id (id)}
              {@const s = sightingById(id)}
              <tr>
                <td class="border border-slate-200 px-2 py-1">{s.name}</td>
                <td class="border border-slate-200 px-2 py-1"
                  >{SITES.find((x) => x.id === s.site)?.name}</td
                >
                <td class="border border-slate-200 px-2 py-1">{s.tool}</td>
                <td class="border border-slate-200 px-2 py-1"
                  >{counts.find((c) => c.id === journal[id])?.name}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <figure>
        <figcaption class="mb-1 text-sm font-semibold text-slate-700">
          Số loài ghi nhận theo nhóm
        </figcaption>
        <ul class="space-y-1 text-sm">
          {#each counts as c (c.id)}
            <li class="grid grid-cols-[8rem_1fr_1.5rem] items-center gap-2">
              <span class="truncate text-slate-700">{c.name}</span>
              <span class="h-4 rounded bg-slate-100">
                <span
                  class="block h-4 rounded bg-emerald-500"
                  style="width: {(c.count / most) * 100}%"
                ></span>
              </span>
              <span class="text-right tabular-nums">{c.count}</span>
            </li>
          {/each}
        </ul>
      </figure>
    {/if}
    <button type="button" class={button.quiet} disabled={recorded === 0} onclick={reset}
      >Xóa nhật kí</button
    >
  </section>
</div>

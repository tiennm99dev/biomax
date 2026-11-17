<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    FIELDS,
    GROUPS,
    REGIONS,
    SAMPLES,
    blankEntry,
    countByRegion,
    mapText,
    missing,
    region,
    reportText,
  } from './engine.js';

  /** @typedef {import('./engine.js').Entry} Entry */

  /** @type {Entry[]} */
  let own = $state([]);
  let showSamples = $state(true);
  let form = $state(blankEntry());
  let selectedRegion = $state('dbscl');
  /** @type {string | null} */
  let focusedRegion = $state(null);
  let next = 1;
  let note = $state({
    tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
    text: 'Điền phiếu cho mỗi ví dụ em sưu tầm được; các ô có dấu * là bắt buộc.',
  });
  let copied = $state('');

  const entries = $derived(showSamples ? [...SAMPLES, ...own] : own);
  const counts = $derived(countByRegion(entries));
  const inRegion = $derived(entries.filter((e) => e.region === selectedRegion));
  const report = $derived(reportText(entries));
  const textFields = FIELDS.filter((f) => f.key !== 'group' && f.key !== 'region');

  function add() {
    const gaps = missing(form);
    if (gaps.length > 0) {
      note = { tone: 'warn', text: `Còn thiếu: ${gaps.join('; ')}.` };
      return;
    }
    const entry = { ...form, id: `vd-${next++}` };
    own = [...own, entry];
    selectedRegion = entry.region;
    note = {
      tone: 'ok',
      text: `Đã thêm "${entry.name}" vào ${region(entry.region).name}.`,
    };
    form = blankEntry();
  }

  /** @type {SVGSVGElement | undefined} */
  let map = $state();

  /**
   * Removes an own entry; its button goes with it, so keyboard focus moves
   * to the region on the map instead of dropping to the page.
   * @param {string} id
   */
  async function remove(id) {
    own = own.filter((e) => e.id !== id);
    await tick();
    const spot = map?.querySelector(`[data-region="${selectedRegion}"]`);
    if (spot instanceof SVGElement) spot.focus();
  }

  /** @param {string} id @param {KeyboardEvent} event */
  function keyRegion(id, event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectedRegion = id;
    }
  }

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(report);
      copied = 'Đã sao chép bản tóm tắt.';
    } catch {
      copied = 'Không sao chép tự động được; hãy chọn văn bản trong ô và sao chép.';
    }
  }

  const input = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm ${focusRing}`;
</script>

<div class="space-y-4">
  <section class="space-y-2" aria-label="Phiếu thu thập ví dụ">
    <h3 class="text-sm font-semibold text-slate-900">1. Phiếu thu thập ví dụ</h3>
    <div class="grid gap-2 sm:grid-cols-2">
      {#each textFields as f (f.key)}
        <label class="block text-sm text-slate-700">
          {f.label}{f.required ? ' *' : ''}
          <input type="text" class={input} bind:value={form[f.key]} />
        </label>
      {/each}
      <label class="block text-sm text-slate-700">
        Nhóm biện pháp *
        <select class={input} bind:value={form.group}>
          <option value="">Chọn nhóm</option>
          {#each GROUPS as g (g.id)}
            <option value={g.id}>{g.label}</option>
          {/each}
        </select>
      </label>
      <label class="block text-sm text-slate-700">
        Vùng *
        <select class={input} bind:value={form.region}>
          <option value="">Chọn vùng</option>
          {#each REGIONS as r (r.id)}
            <option value={r.id}>{r.name}</option>
          {/each}
        </select>
      </label>
    </div>
    <button type="button" class={button.primary} onclick={add}>Thêm vào bản đồ</button>
    <FeedbackNote tone={note.tone} text={note.text} />
  </section>

  <section class="space-y-2" aria-label="Bản đồ điểm áp dụng">
    <h3 class="text-sm font-semibold text-slate-900">2. Bản đồ điểm áp dụng</h3>
    <label class="flex min-h-11 cursor-pointer items-center gap-2 text-sm text-slate-800">
      <input type="checkbox" class="h-5 w-5 rounded {focusRing}" bind:checked={showSamples} />
      Hiện các ví dụ gợi ý
    </label>
    <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <svg
        bind:this={map}
        viewBox="0 0 184 362"
        class="mx-auto block w-full max-w-xs rounded-xl bg-sky-50"
        role="group"
        aria-label="Sơ đồ sáu vùng kinh tế – xã hội của Việt Nam"
      >
        {#each REGIONS as r (r.id)}
          {@const n = counts[r.id]}
          <g
            data-region={r.id}
            role="button"
            tabindex="0"
            aria-pressed={r.id === selectedRegion}
            aria-label="{r.name}: {n} ví dụ"
            class="cursor-pointer outline-none"
            onclick={() => (selectedRegion = r.id)}
            onkeydown={(e) => keyRegion(r.id, e)}
            onfocus={() => (focusedRegion = r.id)}
            onblur={() => (focusedRegion = null)}
          >
            <rect
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              rx="8"
              fill={n > 0 ? '#bbf7d0' : '#f1f5f9'}
              stroke={r.id === selectedRegion || r.id === focusedRegion ? '#4f46e5' : '#94a3b8'}
              stroke-width={r.id === selectedRegion || r.id === focusedRegion ? 3 : 1}
              stroke-dasharray={r.id === focusedRegion && r.id !== selectedRegion
                ? '4 3'
                : undefined}
            />
            {#each r.lines as line, i (i)}
              <text
                x={r.x + r.w / 2}
                y={r.y + r.h / 2 - (r.lines.length - 1) * 5.5 + i * 11 - 4}
                text-anchor="middle"
                font-size="9"
                fill="#1e293b">{line}</text
              >
            {/each}
            <circle
              cx={r.x + r.w / 2}
              cy={r.y + r.h / 2 + r.lines.length * 5.5 + 6}
              r="8"
              fill={n > 0 ? '#16a34a' : '#cbd5e1'}
            />
            <text
              x={r.x + r.w / 2}
              y={r.y + r.h / 2 + r.lines.length * 5.5 + 9.5}
              text-anchor="middle"
              font-size="10"
              font-weight="700"
              fill="white">{n}</text
            >
          </g>
        {/each}
      </svg>

      <div class="space-y-2" aria-live="polite">
        <p class="text-sm text-slate-700">{mapText(entries)}</p>
        <h4 class="text-sm font-semibold text-slate-900">{region(selectedRegion).name}</h4>
        {#if inRegion.length === 0}
          <p class="text-sm text-slate-600">Chưa có ví dụ ở vùng này.</p>
        {:else}
          <ul class="space-y-2">
            {#each inRegion as e (e.id)}
              <li class="rounded-lg border border-slate-200 bg-white p-2 text-sm text-slate-800">
                <p class="font-semibold">
                  {e.name}{#if e.sample}<span class="font-normal text-slate-500">
                      (ví dụ gợi ý)</span
                    >{/if}
                </p>
                <p>{e.pest} ← {e.agent}</p>
                {#if e.place}<p class="text-slate-600">{e.place}</p>{/if}
                {#if !e.sample}
                  <button
                    type="button"
                    class="mt-1 inline-flex min-h-11 items-center text-xs text-rose-700 underline {focusRing}"
                    onclick={() => remove(e.id)}>Xoá ví dụ này</button
                  >
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </section>

  <section class="space-y-2" aria-label="Bản tóm tắt">
    <h3 class="text-sm font-semibold text-slate-900">3. Bản tóm tắt để đưa vào báo cáo</h3>
    <textarea
      readonly
      rows="8"
      class="w-full rounded-lg border border-slate-300 bg-white p-2 font-mono text-xs text-slate-800 {focusRing}"
      aria-label="Bản tóm tắt các ví dụ đã thu thập"
      value={report}></textarea>
    <div class="flex flex-wrap items-center gap-3">
      <button type="button" class={button.secondary} onclick={copyReport}>Sao chép</button>
      <span class="text-sm text-slate-600" aria-live="polite">{copied}</span>
    </div>
  </section>
</div>

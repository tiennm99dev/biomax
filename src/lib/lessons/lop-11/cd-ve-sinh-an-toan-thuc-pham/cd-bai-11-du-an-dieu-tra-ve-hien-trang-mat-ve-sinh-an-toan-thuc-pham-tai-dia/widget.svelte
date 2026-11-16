<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    CRITERIA,
    PLACES,
    compareWithNotes,
    placeOf,
    rate,
    sampleForms,
    summary,
  } from './engine.js';

  /** @type {import('./engine.js').Forms} */
  let forms = $state({});
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {string[]} */
  let draft = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let note = $state(null);

  const place = $derived(selected ? placeOf(selected) : null);
  const result = $derived(summary(forms));

  const PIN = {
    dat: 'bg-emerald-600 text-white',
    'can-cai-thien': 'bg-amber-400 text-slate-900',
    'khong-dat': 'bg-rose-600 text-white',
  };

  /** @param {string} id */
  function open(id) {
    selected = id;
    draft = forms[id] ? [...forms[id]] : [];
    note = null;
  }

  /** @param {string} id */
  function toggle(id) {
    draft = draft.includes(id) ? draft.filter((x) => x !== id) : [...draft, id];
  }

  function save() {
    if (!selected) return;
    forms = { ...forms, [selected]: [...draft] };
    const r = rate(draft);
    const c = compareWithNotes(selected, draft);
    note = {
      tone: c.tone,
      text: `Đã lưu phiếu: đạt ${r.met}/${CRITERIA.length} tiêu chí (${r.percent}%), xếp loại "${r.rating.name}". ${c.text}`,
    };
  }

  function useSample() {
    forms = sampleForms();
    if (selected) draft = [...forms[selected]];
    note = null;
  }

  function clear() {
    forms = {};
    draft = [];
    note = null;
  }

  /** @param {string} id */
  function pinLabel(id) {
    const p = /** @type {import('./engine.js').Place} */ (placeOf(id));
    const f = forms[id];
    return f ? `${p.name}: ${rate(f).rating.name}` : `${p.name}: chưa đánh giá`;
  }
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={useSample}>
      Điền phiếu theo ghi chép mẫu
    </button>
    <button type="button" class={button.quiet} onclick={clear}>Xoá các phiếu</button>
  </div>

  <div
    class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-lime-50"
    role="group"
    aria-label="Bản đồ khu dân cư với các điểm bán thực phẩm"
  >
    <svg viewBox="0 0 100 75" class="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect x="0" y="33" width="100" height="7" fill="#e2e8f0" />
      <rect x="36" y="0" width="7" height="75" fill="#e2e8f0" />
      <rect x="64" y="40" width="5" height="35" fill="#e2e8f0" />
      <path d="M0 62 Q30 55 60 66 T100 60" stroke="#93c5fd" stroke-width="3" fill="none" />
      <rect x="46" y="22" width="12" height="9" rx="1" fill="#c7d2fe" />
      <text x="52" y="20" font-size="3" text-anchor="middle" fill="#475569">Trường học</text>
    </svg>
    {#each PLACES as p, k (p.id)}
      {@const f = forms[p.id]}
      <button
        type="button"
        class="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 font-bold shadow {selected ===
        p.id
          ? 'border-indigo-700 ring-2 ring-indigo-400'
          : 'border-white'} {f ? PIN[rate(f).rating.id] : 'bg-slate-500 text-white'} {focusRing}"
        style="left: {p.x}%; top: {p.y}%"
        aria-pressed={selected === p.id}
        aria-label={pinLabel(p.id)}
        onclick={() => open(p.id)}
      >
        {k + 1}
      </button>
    {/each}
  </div>
  <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
    <li><span class="inline-block h-3 w-3 rounded-full bg-slate-500"></span> Chưa đánh giá</li>
    <li><span class="inline-block h-3 w-3 rounded-full bg-emerald-600"></span> Đạt</li>
    <li><span class="inline-block h-3 w-3 rounded-full bg-amber-400"></span> Cần cải thiện</li>
    <li><span class="inline-block h-3 w-3 rounded-full bg-rose-600"></span> Không đạt</li>
  </ul>

  {#if place}
    <section class="space-y-2 rounded-xl border border-slate-200 p-3" aria-label="Phiếu đánh giá">
      <h4 class="font-bold text-slate-900">
        {PLACES.indexOf(place) + 1}. {place.name}
        <span class="text-sm font-normal text-slate-600">({place.kind})</span>
      </h4>
      <p class="rounded-lg bg-slate-50 p-2 text-sm text-slate-800">
        <strong>Ghi chép quan sát:</strong>
        {place.notes}
      </p>
      <fieldset>
        <legend class="mb-1 text-sm font-semibold text-slate-700">
          Đánh dấu các tiêu chí điểm bán đạt
        </legend>
        <ul class="space-y-1">
          {#each CRITERIA as c (c.id)}
            <li>
              <label
                class="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2 py-1 text-sm text-slate-800 hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  class="h-5 w-5 shrink-0 {focusRing}"
                  checked={draft.includes(c.id)}
                  onchange={() => toggle(c.id)}
                />
                {c.text}
              </label>
            </li>
          {/each}
        </ul>
      </fieldset>
      <button type="button" class={button.primary} onclick={save}>Lưu phiếu</button>
      {#if note}
        <FeedbackNote tone={note.tone} text={note.text} />
      {/if}
    </section>
  {:else}
    <FeedbackNote tone="info" text="Chạm vào một điểm trên bản đồ để mở phiếu đánh giá." />
  {/if}

  <section class="space-y-2" aria-label="Tổng hợp kết quả">
    <h4 class="text-sm font-bold text-slate-800">
      Tổng hợp: {result.evaluated}/{PLACES.length} điểm đã đánh giá
    </h4>
    {#if result.evaluated}
      <p class="text-sm text-slate-700">
        {result.byRating.map((r) => `${r.name}: ${r.count}`).join(' · ')}
      </p>
      <ul class="space-y-1" aria-label="Tỉ lệ điểm bán đạt từng tiêu chí">
        {#each result.byCriterion as c (c.id)}
          <li class="text-xs text-slate-700">
            <div class="flex justify-between gap-2">
              <span>{c.text}</span>
              <span class="shrink-0 font-semibold">{c.met}/{result.evaluated} ({c.percent}%)</span>
            </div>
            <div class="h-2 rounded bg-slate-100">
              <div class="h-2 rounded bg-indigo-500" style="width: {c.percent}%"></div>
            </div>
          </li>
        {/each}
      </ul>
      {#if result.weakest}
        <FeedbackNote
          tone="info"
          text="Tiêu chí ít điểm bán đạt nhất: {result.weakest.text.toLowerCase()} ({result.weakest
            .percent}%). Đề xuất: {result.weakest.fix}"
        />
      {:else}
        <FeedbackNote
          tone="ok"
          text="Mọi điểm đã đánh giá đều đạt tất cả tiêu chí; hãy khảo sát thêm điểm khác."
        />
      {/if}
    {/if}
  </section>
  <p class="text-xs text-slate-600">
    Các điểm bán và ghi chép là tình huống tự đặt để luyện cách đánh giá; hãy thay bằng kết quả khảo
    sát thật của nhóm.
  </p>
</div>

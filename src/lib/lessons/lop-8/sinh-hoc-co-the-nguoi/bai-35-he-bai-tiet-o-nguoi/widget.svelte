<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { STAGES, SUBSTANCES, describeStage, inUrine, placesAfter, substance } from './engine.js';

  let chosen = $state('glucose');
  let stage = $state(0);
  /** @type {boolean | null} */
  let guess = $state(null);
  /** @type {string[]} */
  let done = $state([]);

  const s = $derived(substance(chosen));
  const places = $derived(placesAfter(chosen, stage));
  const result = $derived(inUrine(chosen));

  /** Where each place is drawn in the 320 × 230 picture. */
  const XY = {
    mau: [62, 62],
    nang: [86, 64],
    'ong-than': [160, 98],
    'mao-mach': [160, 132],
    'be-than': [282, 200],
  };

  /** @param {string} id */
  function choose(id) {
    chosen = id;
    stage = 0;
    guess = null;
  }

  function next() {
    if (stage < 3) stage += 1;
    if (stage === 3 && !done.includes(chosen)) done = [...done, chosen];
  }

  const guessNote = $derived(
    guess === null
      ? null
      : stage < 3
        ? {
            tone: /** @type {'info'} */ ('info'),
            text: `Em dự đoán: ${guess ? 'có' : 'không có'} trong nước tiểu chính thức. Bấm "Bước tiếp" để kiểm tra.`,
          }
        : guess === result.final
          ? {
              tone: /** @type {'ok'} */ ('ok'),
              text: `Đúng! ${s.why}`,
            }
          : {
              tone: /** @type {'warn'} */ ('warn'),
              text: `Chưa đúng. ${s.why}`,
            },
  );
</script>

<div class="space-y-4">
  <fieldset>
    <legend class="mb-1 text-sm font-semibold text-slate-700">Chọn chất cần theo dõi</legend>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {#each SUBSTANCES as x (x.id)}
        <button
          type="button"
          class="{chosen === x.id ? button.primary : button.quiet} text-sm"
          aria-pressed={chosen === x.id}
          onclick={() => choose(x.id)}>{x.name}{done.includes(x.id) ? ' ✓' : ''}</button
        >
      {/each}
    </div>
  </fieldset>

  <div class="grid items-start gap-4 sm:grid-cols-[3fr_2fr]">
    <svg
      viewBox="0 0 320 230"
      class="block w-full"
      role="img"
      aria-label="Sơ đồ một đơn vị chức năng của thận. {s.name} đang ở: {places
        .map((p) =>
          p === 'mau'
            ? 'máu trong cầu thận'
            : p === 'nang'
              ? 'nang cầu thận'
              : p === 'ong-than'
                ? 'ống thận'
                : p === 'mao-mach'
                  ? 'máu trong mao mạch quanh ống thận'
                  : 'bể thận',
        )
        .join(' và ')}"
    >
      <rect x="0" y="0" width="320" height="230" rx="14" fill="#fffbeb" />
      <!-- blood in and out -->
      <path d="M 8 26 L 48 50" stroke="#dc2626" stroke-width="6" stroke-linecap="round" />
      <path
        d="M 60 80 C 64 150, 120 140, 160 132 S 214 112, 236 140 L 312 150"
        stroke="#b91c1c"
        stroke-width="5"
        fill="none"
        stroke-linecap="round"
      />
      <!-- capsule and glomerulus -->
      <circle cx="62" cy="62" r="27" fill="#fef9c3" stroke="#ca8a04" stroke-width="3" />
      <path
        d="M 50 54 q 6 -14 12 0 q 6 14 12 0 q -6 14 -12 8 q -10 -2 -12 -8 Z M 52 66 q 10 10 20 0"
        stroke="#dc2626"
        stroke-width="3"
        fill="#fecaca"
      />
      <!-- tubule and collecting duct -->
      <path
        d="M 88 70 C 130 58, 118 112, 160 98 S 206 60, 232 92 L 256 120 L 278 186"
        stroke="#facc15"
        stroke-width="11"
        fill="none"
        stroke-linecap="round"
      />
      <rect
        x="252"
        y="186"
        width="62"
        height="34"
        rx="12"
        fill="#fde68a"
        stroke="#ca8a04"
        stroke-width="2"
      />
      <g font-size="9" fill="#334155">
        <text x="6" y="14">máu đến</text>
        <text x="98" y="120">cầu thận, nang cầu thận</text>
        <text x="132" y="78">ống thận</text>
        <text x="110" y="156">mao mạch quanh ống thận</text>
        <text x="272" y="168">máu đi</text>
        <text x="260" y="226">bể thận</text>
      </g>
      {#each places as p, k (k)}
        {@const [x, y] = XY[p]}
        <g
          class="motion-safe:transition-transform motion-safe:duration-700"
          style="transform: translate({x}px, {y}px)"
        >
          <circle
            r={places.length > 1 && p !== 'mao-mach' ? 5 : 8}
            fill={p === 'mau' || p === 'mao-mach' ? '#7c3aed' : '#0369a1'}
            stroke="#ffffff"
            stroke-width="2"
          />
          {#if k === 0 && places.length === 1}
            <text y="-11" font-size="9" font-weight="700" text-anchor="middle" fill="#1e293b"
              >{s.name.split(' (')[0]}</text
            >
          {/if}
        </g>
      {/each}
    </svg>

    <div class="space-y-3">
      <ol class="space-y-1 text-sm">
        {#each STAGES as st, k (st.id)}
          <li
            class="rounded-lg px-3 py-2 ring-1 {stage > k
              ? 'bg-emerald-50 ring-emerald-200'
              : stage === k
                ? 'bg-white ring-indigo-300'
                : 'bg-white ring-slate-200'}"
          >
            <span class="font-semibold">{k + 1}. {st.name}</span>
            <span class="text-slate-600">ở {st.where}</span>
          </li>
        {/each}
      </ol>
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} disabled={stage >= 3} onclick={next}
          >Bước tiếp</button
        >
        <button type="button" class={button.quiet} onclick={() => choose(chosen)}>Làm lại</button>
      </div>
      {#if stage === 0}
        <div class="space-y-1">
          <p class="text-sm font-semibold text-slate-700">
            Dự đoán: nước tiểu chính thức có {s.name.charAt(0).toLowerCase() + s.name.slice(1)} không?
          </p>
          <div class="flex gap-2">
            <button
              type="button"
              class={guess === true ? button.secondary : button.quiet}
              aria-pressed={guess === true}
              onclick={() => (guess = true)}>Có</button
            >
            <button
              type="button"
              class={guess === false ? button.secondary : button.quiet}
              aria-pressed={guess === false}
              onclick={() => (guess = false)}>Không</button
            >
          </div>
        </div>
      {/if}
    </div>
  </div>

  <p class="min-h-12 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
    {describeStage(chosen, stage)}
  </p>
  {#if guessNote}
    <FeedbackNote tone={guessNote.tone} text={guessNote.text} />
  {/if}

  {#if done.length}
    <table class="w-full text-left text-sm">
      <caption class="mb-1 text-left font-semibold text-slate-700"
        >Kết quả đã theo dõi ({done.length}/{SUBSTANCES.length} chất)</caption
      >
      <thead>
        <tr class="text-slate-600">
          <th class="py-1 pr-2">Chất</th>
          <th class="py-1 pr-2">Nước tiểu đầu</th>
          <th class="py-1">Nước tiểu chính thức</th>
        </tr>
      </thead>
      <tbody>
        {#each SUBSTANCES.filter((x) => done.includes(x.id)) as x (x.id)}
          {@const r = inUrine(x.id)}
          <tr class="border-t border-slate-200">
            <td class="py-1 pr-2">{x.name}</td>
            <td class="py-1 pr-2">{r.primary ? 'Có' : 'Không'}</td>
            <td class="py-1">{r.final ? 'Có' : 'Không'}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
  <p class="text-xs text-slate-600">
    Sơ đồ vẽ sơ lược, ở người khỏe mạnh. Chấm tím: chất ở trong máu; chấm xanh: chất ở trong nước
    tiểu.
  </p>
</div>

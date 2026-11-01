<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    AMINO_ACIDS,
    MAX_AMINO,
    MAX_GLUCOSE,
    MISSIONS,
    POLYSACCHARIDES,
    TARGET_CHAIN,
    bondCount,
    chainLayout,
    compareSequence,
    polymerMass,
    sequenceCount,
    sugarStage,
  } from './engine.js';

  const MODES = [
    { value: 'duong', label: 'Glucose → đường đa' },
    { value: 'protein', label: 'Amino acid → protein' },
  ];
  const KINDS = POLYSACCHARIDES.map((p) => ({ value: p.id, label: p.name }));

  let mode = $state('duong');
  /** @type {HTMLDivElement | undefined} */
  let sizeBox = $state();
  /** @type {HTMLDivElement | undefined} */
  let missionBox = $state();
  /** @type {HTMLDivElement | undefined} */
  let chainBox = $state();

  /**
   * A button that locks or vanishes after its own press hands focus to the next
   * control, or a keyboard user loses their place.
   * @param {Event} event
   * @param {HTMLElement | undefined} box
   */
  async function keepFocus(event, box) {
    const pressed = /** @type {HTMLButtonElement} */ (event.currentTarget);
    await tick();
    if (pressed.disabled || !pressed.isConnected) {
      box?.querySelector(/** @type {'button'} */ ('button:not(:disabled)'))?.focus();
    }
  }

  /** @type {string} */
  let kind = $state('tinh-bot');
  let count = $state(9);
  let missionAt = $state(0);
  /** @type {{ tone: 'ok' | 'warn', text: string } | null} */
  let missionNote = $state(null);

  const sugar = $derived(POLYSACCHARIDES.find((p) => p.id === kind) ?? POLYSACCHARIDES[0]);
  const units = $derived(chainLayout(sugar.id, count));
  const mission = $derived(MISSIONS[missionAt] ?? null);

  /** @param {number} col */
  const unitX = (col) => 32 + col * 42;
  /** @param {number} row */
  const unitY = (row) => 28 + row * 44;
  // Height for the full chain of this kind, so the board keeps its size as it grows.
  const boardHeight = $derived(
    56 + 44 * Math.max(...chainLayout(sugar.id, MAX_GLUCOSE).map((u) => u.row)),
  );
  const HEX = '14,0 7,12.1 -7,12.1 -14,0 -7,-12.1 7,-12.1';

  /** @param {Event} event */
  function answerMission(event) {
    if (!mission) return;
    keepFocus(event, missionBox);
    if (mission.answer === sugar.id) {
      missionNote = { tone: 'ok', text: `Đúng: ${sugar.name} có vai trò ${lower(sugar.role)}.` };
      missionAt += 1;
    } else {
      missionNote = {
        tone: 'warn',
        text: `${sugar.name} có vai trò ${lower(sugar.role)}. Hãy thử dạng khác.`,
      };
    }
  }

  /** @param {string} text */
  const lower = (text) => text.charAt(0).toLowerCase() + text.slice(1);

  /** @type {string[]} */
  let chain = $state(['Gly', 'Ala', 'Lys']);
  const relation = $derived(compareSequence(chain));
  const beadX = (/** @type {number} */ i) => 26 + i * 44;
  const aminoOf = (/** @type {string} */ id) => AMINO_ACIDS.find((a) => a.id === id);

  /** @type {'ok' | 'warn' | 'info'} */
  const chainTone = $derived(
    relation === 'same' ? 'ok' : relation === 'reordered' ? 'warn' : 'info',
  );
  const chainText = $derived(
    chain.length === 0
      ? 'Chuỗi đang trống: hãy chọn một amino acid để bắt đầu nối.'
      : relation === 'same'
        ? 'Trùng với chuỗi mẫu: cùng thành phần, cùng trình tự.'
        : relation === 'reordered'
          ? 'Cùng thành phần với chuỗi mẫu nhưng khác trình tự: đây là một chuỗi polypeptide khác.'
          : `Chuỗi có ${chain.length} amino acid, khác chuỗi mẫu về số lượng hoặc thành phần.`,
  );

  /** @param {string} id */
  function addAmino(id) {
    if (chain.length < MAX_AMINO) chain = [...chain, id];
  }

  function swapFirstTwo() {
    if (chain.length >= 2) chain = [chain[1], chain[0], ...chain.slice(2)];
  }
</script>

<div class="space-y-4">
  <SegmentedControl label="Loại phân tử" hideLabel options={MODES} bind:value={mode} />

  {#if mode === 'duong'}
    <SegmentedControl
      label="Dạng đường đa"
      options={KINDS}
      bind:value={kind}
      onchange={() => (missionNote = null)}
    />

    <svg
      viewBox="0 0 360 {boardHeight}"
      class="block w-full rounded-xl bg-slate-50"
      role="img"
      aria-label="{sugar.name} gồm {count} đơn phân glucose, {bondCount(count)} liên kết glycosidic"
    >
      {#each units as u, i (i)}
        {#if u.parent >= 0}
          <line
            x1={unitX(units[u.parent].col)}
            y1={unitY(units[u.parent].row)}
            x2={unitX(u.col)}
            y2={unitY(u.row)}
            stroke="#64748b"
            stroke-width="3"
          />
        {/if}
      {/each}
      {#each units as u, i (i)}
        <g transform="translate({unitX(u.col)} {unitY(u.row)}) rotate({u.flip ? 180 : 0})">
          <polygon points={HEX} fill="#fde68a" stroke="#b45309" stroke-width="1.5" />
          <circle cx="0" cy="-8" r="2.6" fill="#b45309" />
        </g>
      {/each}
    </svg>

    <div class="flex flex-wrap items-center gap-2" bind:this={sizeBox}>
      <button
        type="button"
        class={button.primary}
        disabled={count >= MAX_GLUCOSE}
        onclick={(e) => {
          count += 1;
          keepFocus(e, sizeBox);
        }}>Nối thêm glucose</button
      >
      <button
        type="button"
        class={button.quiet}
        disabled={count <= 1}
        onclick={(e) => {
          count -= 1;
          keepFocus(e, sizeBox);
        }}>Bớt một glucose</button
      >
    </div>

    <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Đơn phân</dt>
        <dd class="font-bold text-slate-900">{count} glucose</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Liên kết glycosidic</dt>
        <dd class="font-bold text-slate-900">{bondCount(count)}</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Nước tách ra</dt>
        <dd class="font-bold text-slate-900">{bondCount(count)} phân tử</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Khối lượng phân tử</dt>
        <dd class="font-bold text-slate-900">{fmt(polymerMass(count))} amu</dd>
      </div>
    </dl>

    <p class="text-sm text-slate-700" aria-live="polite">
      <strong>{sugarStage(count)}.</strong>
      {sugar.name}: {lower(sugar.shape)}; có ở {lower(sugar.where)}. Đường đa thật gồm hàng trăm đến
      hàng nghìn đơn phân.
    </p>

    <div
      class="space-y-2 rounded-xl border border-indigo-200 bg-indigo-50 p-3"
      bind:this={missionBox}
    >
      {#if mission}
        <p class="text-sm font-semibold text-indigo-950">
          Tình huống {missionAt + 1}/{MISSIONS.length}: {mission.text} Cần dạng đường đa nào?
        </p>
        <button type="button" class={button.secondary} onclick={answerMission}
          >Chọn {sugar.name}</button
        >
      {:else}
        <p class="text-sm font-semibold text-indigo-950">
          Em đã ghép đúng cả ba tình huống: cùng một đơn phân glucose, cách nối khác nhau tạo ra các
          đường đa có vai trò khác nhau.
        </p>
        <button
          type="button"
          class={button.quiet}
          onclick={(e) => {
            missionAt = 0;
            missionNote = null;
            keepFocus(e, missionBox);
          }}>Làm lại</button
        >
      {/if}
    </div>
    {#if missionNote}
      <FeedbackNote tone={missionNote.tone} text={missionNote.text} />
    {/if}
  {:else}
    <div class="space-y-4" bind:this={chainBox}>
      <p class="text-sm text-slate-700">
        Chuỗi mẫu: <strong>{TARGET_CHAIN.join(' – ')}</strong>
      </p>

      <div
        class="grid grid-cols-3 gap-2"
        role="group"
        aria-label="Chọn amino acid để nối vào chuỗi"
      >
        {#each AMINO_ACIDS as a (a.id)}
          <button
            type="button"
            class="{button.quiet} flex-col !gap-0 !px-1"
            disabled={chain.length >= MAX_AMINO}
            aria-label="Nối {a.name}"
            onclick={(e) => {
              addAmino(a.id);
              keepFocus(e, chainBox);
            }}
          >
            <span class="font-bold" style="color: {a.color}">{a.id}</span>
            <span class="text-[10px] font-normal leading-tight">{a.name}</span>
          </button>
        {/each}
      </div>

      <svg
        viewBox="0 0 360 76"
        class="block w-full rounded-xl bg-slate-50"
        role="img"
        aria-label="Chuỗi polypeptide: {chain.join(', ') || 'chưa có amino acid'}"
      >
        {#each chain as _, i (i)}
          {#if i > 0}
            <line
              x1={beadX(i - 1)}
              y1="38"
              x2={beadX(i)}
              y2="38"
              stroke="#64748b"
              stroke-width="3"
            />
          {/if}
        {/each}
        {#each chain as a, i (i)}
          <circle cx={beadX(i)} cy="38" r="19" fill={aminoOf(a)?.color} />
          <text
            x={beadX(i)}
            y="42"
            font-size="12"
            font-weight="700"
            text-anchor="middle"
            fill="#fff">{a}</text
          >
        {/each}
      </svg>

      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class={button.quiet}
          disabled={chain.length < 2}
          onclick={swapFirstTwo}>Đổi chỗ hai amino acid đầu</button
        >
        <button
          type="button"
          class={button.quiet}
          disabled={chain.length === 0}
          onclick={(e) => {
            chain = chain.slice(0, -1);
            keepFocus(e, chainBox);
          }}>Bỏ amino acid cuối</button
        >
        <button
          type="button"
          class={button.quiet}
          disabled={chain.length === 0}
          onclick={(e) => {
            chain = [];
            keepFocus(e, chainBox);
          }}>Làm lại</button
        >
      </div>

      {#if chain.length > 0}
        <p class="text-sm text-slate-700">
          {chain.length} amino acid nối bằng <strong>{bondCount(chain.length)}</strong> liên kết
          peptide, tách ra {bondCount(chain.length)} phân tử nước. Với 20 loại amino acid, chuỗi dài {chain.length}
          có thể có <strong>{fmt(sequenceCount(chain.length))}</strong> trình tự khác nhau.
        </p>
      {/if}
      <FeedbackNote tone={chainTone} text={chainText} />
    </div>
  {/if}
</div>

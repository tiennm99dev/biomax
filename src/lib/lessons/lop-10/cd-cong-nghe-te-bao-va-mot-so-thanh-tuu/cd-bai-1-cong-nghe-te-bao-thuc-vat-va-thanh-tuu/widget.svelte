<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { MAX_LEVEL, PICTURE_TEXT, STAGES, isHormoneStage, readHormones } from './engine.js';

  let index = $state(0);
  /** @type {string | null} */
  let pickedId = $state(null);
  let auxin = $state(0);
  let cytokinin = $state(0);
  let finished = $state(false);

  const stage = $derived(STAGES[index]);
  const hormone = $derived(isHormoneStage(stage) ? readHormones(stage, auxin, cytokinin) : null);
  const picked = $derived(
    isHormoneStage(stage) ? null : (stage.options.find((o) => o.id === pickedId) ?? null),
  );
  const stageOk = $derived(hormone ? hormone.ok : picked?.ok === true);
  const picture = $derived(hormone ? hormone.picture : (picked?.picture ?? stage.picture));

  const note = $derived.by(() => {
    if (finished) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: 'Hoàn thành quy trình: mọi cây con tạo ra từ một mẫu qua nguyên phân nên có kiểu gene giống nhau và giống cây mẹ. Đó là một dòng vô tính.',
      };
    }
    if (hormone) return { tone: hormone.ok ? 'ok' : 'warn', text: hormone.text };
    if (picked) return { tone: picked.ok ? 'ok' : 'warn', text: picked.why };
    return { tone: 'info', text: 'Chọn một cách làm và quan sát bình nuôi cấy.' };
  });
  const noteTone = $derived(/** @type {'ok' | 'warn' | 'info'} */ (note.tone));

  function next() {
    if (index === STAGES.length - 1) {
      finished = true;
      return;
    }
    index += 1;
    pickedId = null;
  }

  function restart() {
    index = 0;
    pickedId = null;
    auxin = 0;
    cytokinin = 0;
    finished = false;
  }

  /** @param {number} i */
  function chipClass(i) {
    if (finished || i < index) return 'bg-emerald-100 text-emerald-900';
    if (i === index) return 'bg-indigo-600 text-white';
    return 'bg-slate-100 text-slate-500';
  }

  /** Small circles of the callus clump, as [x, y]. */
  const CLUMP = [
    [146, 136],
    [160, 130],
    [174, 136],
    [152, 124],
    [168, 122],
    [140, 128],
    [180, 128],
  ];
  const SHOOTS = [136, 160, 184];
  /** Shoots exist from the rooting stage on, so roots before it grow from bare tissue. */
  const ROOT_STAGE = STAGES.findIndex((s) => s.id === 'tao-re');
  const inFlask = $derived(!['cay', 'heo'].includes(picture));
</script>

<div class="space-y-3">
  <ol class="flex flex-wrap gap-1 text-xs font-semibold" aria-label="Các giai đoạn">
    {#each STAGES as s, i (s.id)}
      <li
        class="rounded-full px-2.5 py-1 {chipClass(i)}"
        aria-current={!finished && i === index ? 'step' : undefined}
      >
        {i + 1}. {s.name}
      </li>
    {/each}
  </ol>

  <svg
    viewBox="0 0 320 190"
    class="mx-auto block w-full max-w-sm rounded-xl bg-sky-50"
    role="img"
    aria-label={PICTURE_TEXT[picture]}
  >
    {#if inFlask}
      <path
        d="M 138 22 h 44 v 36 l 52 96 q 6 16 -12 16 h -124 q -18 0 -12 -16 l 52 -96 z"
        fill="#ffffff"
        stroke="#64748b"
        stroke-width="3"
      />
      <path
        d="M 95 136 h 130 l 9 18 q 6 16 -12 16 h -124 q -18 0 -12 -16 z"
        fill="#fde68a"
        stroke="none"
      />
      <rect x="132" y="12" width="56" height="12" rx="4" fill="#94a3b8" />
    {/if}

    {#if picture === 'mau' || picture === 'nguyen'}
      <ellipse cx="160" cy="132" rx="14" ry="7" fill="#22c55e" stroke="#15803d" />
    {:else if picture === 'chet'}
      <ellipse cx="160" cy="132" rx="14" ry="6" fill="#78350f" />
    {:else if picture === 'nhiem'}
      <ellipse cx="160" cy="132" rx="14" ry="6" fill="#a16207" />
      {#each [[118, 142], [136, 150], [186, 146], [204, 152], [160, 156], [176, 124], [142, 122]] as [x, y] (`${x}-${y}`)}
        <circle cx={x} cy={y} r="9" fill="#64748b" opacity="0.65" />
        <circle cx={x + 3} cy={y - 2} r="4" fill="#1e293b" opacity="0.55" />
      {/each}
    {:else if picture === 'mo-seo' || picture === 'choi' || picture === 're'}
      {#each CLUMP as [x, y] (`${x}-${y}`)}
        <circle cx={x} cy={y} r="10" fill="#bef264" stroke="#65a30d" />
      {/each}
    {/if}

    {#if picture === 'choi' || (picture === 're' && index >= ROOT_STAGE)}
      {#each SHOOTS as x (x)}
        <path
          d="M {x} 122 q -1 -22 {(x - 160) / 3} -40"
          fill="none"
          stroke="#15803d"
          stroke-width="4"
        />
        <ellipse
          cx={x + (x - 160) / 3 - 7}
          cy="88"
          rx="9"
          ry="4"
          fill="#22c55e"
          transform="rotate(25 {x + (x - 160) / 3 - 7} 88)"
        />
        <ellipse
          cx={x + (x - 160) / 3 + 7}
          cy="88"
          rx="9"
          ry="4"
          fill="#16a34a"
          transform="rotate(-25 {x + (x - 160) / 3 + 7} 88)"
        />
      {/each}
    {/if}
    {#if picture === 're'}
      {#each [-24, -10, 6, 22] as dx (dx)}
        <path
          d="M {160 + dx} 138 q {dx / 2} 14 {dx} 28"
          fill="none"
          stroke="#fafaf9"
          stroke-width="3"
        />
        <path
          d="M {160 + dx} 138 q {dx / 2} 14 {dx} 28"
          fill="none"
          stroke="#a8a29e"
          stroke-width="1.2"
        />
      {/each}
    {/if}

    {#if !inFlask}
      <rect x="0" y="160" width="320" height="30" fill="#d9f99d" />
      <path d="M 122 120 h 76 l -10 52 h -56 z" fill="#c2410c" />
      <ellipse cx="160" cy="120" rx="38" ry="7" fill="#57534e" />
      {#if picture === 'cay'}
        <path d="M 160 120 V 50" stroke="#15803d" stroke-width="5" />
        {#each [[128, 82, 25], [192, 82, -25], [132, 58, 20], [188, 58, -20]] as [x, y, turn] (`${x}-${y}`)}
          <ellipse cx={x} cy={y} rx="30" ry="9" fill="#22c55e" transform="rotate({turn} {x} {y})" />
        {/each}
      {:else}
        <path d="M 160 120 q -2 -34 -30 -30" fill="none" stroke="#a3a33a" stroke-width="5" />
        <ellipse cx="122" cy="104" rx="22" ry="6" fill="#a3a33a" transform="rotate(70 122 104)" />
        <ellipse cx="146" cy="104" rx="20" ry="5" fill="#ca8a04" transform="rotate(80 146 104)" />
      {/if}
    {/if}
  </svg>

  {#if !finished}
    <p class="text-sm font-semibold text-slate-800">{stage.task}</p>

    {#if isHormoneStage(stage)}
      <div class="flex flex-wrap gap-x-6 gap-y-2">
        <Stepper label="Auxin" min={0} max={MAX_LEVEL} bind:value={auxin} />
        <Stepper label="Cytokinin" min={0} max={MAX_LEVEL} bind:value={cytokinin} />
      </div>
      <p class="text-xs text-slate-600">
        Các mức là tương đối, chỉ để so sánh hai hormone; tỉ lệ thật phụ thuộc vào từng loài cây.
      </p>
    {:else}
      <div class="grid gap-2" role="group" aria-label="Các cách làm">
        {#each stage.options as o (o.id)}
          <button
            type="button"
            aria-pressed={pickedId === o.id}
            class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm font-medium transition {focusRing} {pickedId ===
            o.id
              ? o.ok
                ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                : 'border-rose-400 bg-rose-50 text-rose-900'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            onclick={() => (pickedId = o.id)}
          >
            {o.text}
          </button>
        {/each}
      </div>
    {/if}
  {/if}

  <FeedbackNote tone={noteTone} text={note.text} />

  <div class="flex flex-wrap gap-3">
    {#if !finished}
      <button type="button" class={button.primary} disabled={!stageOk} onclick={next}>
        {index === STAGES.length - 1 ? 'Hoàn thành' : 'Sang giai đoạn sau'}
      </button>
    {/if}
    <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
  </div>
</div>

<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { CHUNK, LENGTH, act, isDone, start, strands, suggest, tally } from './engine.js';

  /** @typedef {import('./engine.js').Enzyme} Enzyme */

  /** @type {Array<{ id: Enzyme, label: string }>} */
  const ENZYMES = [
    { id: 'helicase', label: 'Enzyme tháo xoắn' },
    { id: 'primase', label: 'Tổng hợp đoạn mồi' },
    { id: 'polymerase', label: 'DNA polymerase' },
    { id: 'ligase', label: 'DNA ligase' },
  ];
  /** @type {Record<Enzyme, string>} */
  const NAME = {
    helicase: 'Enzyme tháo xoắn',
    primase: 'Tổng hợp đoạn mồi',
    polymerase: 'DNA polymerase',
    ligase: 'DNA ligase',
  };

  const CELL = 14;
  const X0 = 30;
  const W = X0 + LENGTH * CELL + 26;
  const OLD = '#1e3a8a';
  const NEW = '#f97316';
  const RNA = '#7c3aed';

  let fork = $state(start());
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Phân tử DNA mẹ còn xoắn kép. Chọn enzyme đầu tiên để bắt đầu tái bản tại điểm khởi đầu (bên trái).',
  });

  const s = $derived(strands(fork));
  const count = $derived(tally(fork));
  const finished = $derived(isDone(fork));

  /** @param {Enzyme} e */
  function use(e) {
    const r = act(fork, e);
    fork = r.state;
    if (!r.ok) {
      note = { tone: 'warn', text: `${NAME[e]} chưa làm được: ${r.text}` };
      return;
    }
    note = isDone(r.state)
      ? {
          tone: 'ok',
          text: `${r.text} Hoàn thành: mạch dẫn đầu được tổng hợp liên tục, mạch ra chậm gồm ${tally(r.state).okazaki} đoạn Okazaki đã nối liền. Mỗi phân tử DNA con có một mạch cũ (xanh) và một mạch mới (cam): nguyên tắc bán bảo toàn.`,
        }
      : { tone: 'ok', text: r.text };
  }

  function hint() {
    const e = suggest(fork);
    note = e
      ? { tone: 'info', text: `Gợi ý: lúc này nên dùng "${NAME[e]}".` }
      : { tone: 'ok', text: 'Đoạn DNA đã tái bản xong.' };
  }

  function reset() {
    fork = start();
    note = { tone: 'info', text: 'Bắt đầu lại từ phân tử DNA mẹ còn xoắn kép.' };
  }

  /** @param {'none' | 'primer' | 'dna'} b */
  const fill = (b) => (b === 'primer' ? RNA : b === 'dna' ? NEW : '#ffffff');
  /** @param {number} i */
  const x = (i) => X0 + i * CELL;
  const opened = $derived(fork.open);

  const summary = $derived(
    `Chạc tái bản đã mở ${opened} trên ${LENGTH} cặp nucleotide. Mạch dẫn đầu dài ${s.leading.filter((b) => b !== 'none').length} nucleotide. Mạch ra chậm có ${count.okazaki} đoạn Okazaki, ${count.primers} đoạn mồi đã đặt, ${count.nicks} chỗ hở chưa nối.`,
  );
</script>

<div class="space-y-4">
  <figure class="rounded-xl border border-slate-200 bg-white p-2">
    <svg viewBox="0 0 {W} 170" class="h-auto w-full" role="img" aria-label={summary}>
      <!-- origin -->
      <line x1={X0} y1="4" x2={X0} y2="166" stroke="#94a3b8" stroke-dasharray="3 3" />
      <text x={X0 - 4} y="84" font-size="11" text-anchor="end" fill="#475569">Ori</text>

      {#each Array.from({ length: LENGTH }, (_, i) => i) as i (i)}
        {@const open = i < opened}
        <!-- parent strands: apart where unwound, paired where still a helix -->
        <rect x={x(i) + 0.5} y={open ? 8 : 60} width={CELL - 1} height="12" rx="2" fill={OLD} />
        <rect x={x(i) + 0.5} y={open ? 150 : 92} width={CELL - 1} height="12" rx="2" fill={OLD} />
        {#if !open}
          <line x1={x(i) + CELL / 2} y1="72" x2={x(i) + CELL / 2} y2="92" stroke="#94a3b8" />
        {:else}
          <!-- new strands -->
          <rect
            x={x(i) + 0.5}
            y="26"
            width={CELL - 1}
            height="12"
            rx="2"
            fill={fill(s.leading[i])}
            stroke={s.leading[i] === 'none' ? '#cbd5e1' : 'none'}
            stroke-dasharray="2 2"
          />
          <rect
            x={x(i) + 0.5}
            y="132"
            width={CELL - 1}
            height="12"
            rx="2"
            fill={fill(s.lagging[i])}
            stroke={s.lagging[i] === 'none' ? '#cbd5e1' : 'none'}
            stroke-dasharray="2 2"
          />
        {/if}
      {/each}

      <!-- nicks between Okazaki fragments not yet sealed -->
      {#each fork.frags as f, k (k)}
        {#if k > 0 && f.filled && fork.frags[k - 1].filled && !f.joined}
          <rect x={x(k * CHUNK) - 1.5} y="129" width="3" height="18" fill="#ffffff" />
          <text x={x(k * CHUNK)} y="126" font-size="10" text-anchor="middle" fill="#b91c1c">hở</text
          >
        {/if}
        {#if f.filled}
          <text
            x={x(k * CHUNK + CHUNK / 2)}
            y="116"
            font-size="11"
            text-anchor="middle"
            fill="#9a3412">← Okazaki {k + 1}</text
          >
        {/if}
      {/each}
      {#if s.leading.some((b) => b !== 'none')}
        <text x={x(1)} y="50" font-size="11" fill="#9a3412">mạch dẫn đầu →</text>
      {/if}

      <!-- strand ends -->
      <text x={X0 - 4} y="18" font-size="11" text-anchor="end" fill={OLD}>3'</text>
      <text x={X0 - 4} y="160" font-size="11" text-anchor="end" fill={OLD}>5'</text>
      {#if opened > 0}
        <text x={X0 - 4} y="36" font-size="11" text-anchor="end" fill="#9a3412">5'</text>
        <text x={X0 - 4} y="142" font-size="11" text-anchor="end" fill="#9a3412">3'</text>
      {/if}
      <text x={x(LENGTH) + 3} y={opened < LENGTH ? 70 : 18} font-size="11" fill={OLD}>5'</text>
      <text x={x(LENGTH) + 3} y={opened < LENGTH ? 102 : 160} font-size="11" fill={OLD}>3'</text>
      {#if opened > 0 && opened < LENGTH}
        <text x={x(opened) + 4} y="56" font-size="11" fill="#475569">chạc tái bản</text>
      {/if}
    </svg>
    <figcaption class="flex flex-wrap gap-x-4 gap-y-1 px-1 pt-1 text-xs text-slate-600">
      <span
        ><span class="inline-block h-3 w-3 rounded-sm align-middle" style="background:{OLD}"></span>
        mạch cũ (khuôn)</span
      >
      <span
        ><span class="inline-block h-3 w-3 rounded-sm align-middle" style="background:{NEW}"></span>
        DNA mới</span
      >
      <span
        ><span class="inline-block h-3 w-3 rounded-sm align-middle" style="background:{RNA}"></span>
        đoạn mồi RNA</span
      >
      <span>Trên: khuôn 3' → 5'; dưới: khuôn 5' → 3'.</span>
    </figcaption>
  </figure>

  <div class="grid grid-cols-2 gap-2" role="group" aria-label="Chọn enzyme">
    {#each ENZYMES as e (e.id)}
      <button type="button" class={button.secondary} onclick={() => use(e.id)} disabled={finished}
        >{e.label}</button
      >
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <dl class="grid grid-cols-3 gap-2 text-center text-sm">
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-500">Đoạn Okazaki</dt>
      <dd class="text-lg font-bold">{count.okazaki}</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-500">Đoạn mồi đã đặt</dt>
      <dd class="text-lg font-bold">{count.primers}</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-500">Chỗ hở chưa nối</dt>
      <dd class="text-lg font-bold">{count.nicks}</dd>
    </div>
  </dl>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={hint} disabled={finished}
      >Gợi ý bước tiếp</button
    >
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
</div>

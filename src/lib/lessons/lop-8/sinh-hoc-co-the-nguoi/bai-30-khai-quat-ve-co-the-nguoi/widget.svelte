<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { ACTIVITY, SYSTEMS, coordination, organOf, systemOf } from './engine.js';

  /** @type {string[]} */
  let shown = $state(['tuan-hoan', 'ho-hap']);
  /** @type {string | null} */
  let picked = $state(null);
  /** @type {'nghi' | 'chay'} */
  let phase = $state(/** @type {'nghi' | 'chay'} */ ('nghi'));

  const organ = $derived(picked ? organOf(picked) : null);
  const owner = $derived(picked ? systemOf(picked) : null);
  const visible = $derived(SYSTEMS.filter((s) => shown.includes(s.id)));
  // The heart sits between the lungs: draw the circulatory system last so it stays on top.
  const drawn = $derived(
    [...visible].sort((a, b) => +(a.id === 'tuan-hoan') - +(b.id === 'tuan-hoan')),
  );
  const busy = $derived(phase === 'chay' ? ACTIVITY.filter((a) => a.up).map((a) => a.id) : []);

  /** @param {string} id */
  function toggle(id) {
    shown = shown.includes(id) ? shown.filter((x) => x !== id) : [...shown, id];
    if (owner && !shown.includes(owner.id)) picked = null;
  }

  /** @param {string} id */
  function pick(id) {
    picked = picked === id ? null : id;
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function key(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pick(id);
    }
  }

  const BODY =
    'M 108 62 L 108 80 L 78 86 Q 66 90 64 102 L 40 250 L 56 254 L 78 146 L 80 284 L 90 432 L 112 432 L 118 304 L 122 304 L 128 432 L 150 432 L 160 284 L 162 146 L 184 254 L 200 250 L 176 102 Q 174 90 162 86 L 132 80 L 132 62 Z';
</script>

<div class="space-y-4">
  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-700">Bật hoặc tắt từng hệ cơ quan</p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Các hệ cơ quan">
      {#each SYSTEMS as s (s.id)}
        {@const on = shown.includes(s.id)}
        <button
          type="button"
          aria-pressed={on}
          class="inline-flex min-h-11 items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold transition {focusRing} {on
            ? 'border-transparent text-white'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}"
          style={on ? `background: ${s.color}` : ''}
          onclick={() => toggle(s.id)}
        >
          <span
            class="inline-block h-3 w-3 rounded-full border border-white"
            style="background: {s.color}"
            aria-hidden="true"
          ></span>
          {s.name}
        </button>
      {/each}
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.quiet} onclick={() => (shown = SYSTEMS.map((s) => s.id))}
        >Hiện tất cả</button
      >
      <button
        type="button"
        class={button.quiet}
        onclick={() => {
          shown = [];
          picked = null;
        }}>Ẩn tất cả</button
      >
    </div>
  </div>

  <div class="grid items-start gap-4 sm:grid-cols-[minmax(0,15rem)_1fr]">
    <svg
      viewBox="0 0 240 440"
      class="mx-auto block w-full max-w-60"
      role="group"
      aria-label="Hình cơ thể người, đang hiện: {visible.map((s) => s.name).join(', ') ||
        'chưa hệ nào'}"
    >
      <circle cx="120" cy="36" r="27" fill="#fde7d4" stroke="#b45309" stroke-width="1.5" />
      <path d={BODY} fill="#fde7d4" stroke="#b45309" stroke-width="1.5" stroke-linejoin="round" />
      {#each drawn as s (s.id)}
        {#each s.organs as o (o.id)}
          {@const active = picked === o.id}
          {@const pulse = busy.includes(s.id)}
          <g
            role="button"
            tabindex="0"
            aria-label="{o.name} ({s.name})"
            aria-pressed={active}
            class="cursor-pointer outline-none focus-visible:opacity-80 {pulse
              ? 'motion-safe:animate-pulse'
              : ''}"
            onclick={() => pick(o.id)}
            onkeydown={(e) => key(e, o.id)}
          >
            {#each o.shapes as sh, i (i)}
              {#if sh.kind === 'ellipse'}
                <ellipse
                  cx={sh.cx}
                  cy={sh.cy}
                  rx={sh.rx}
                  ry={sh.ry}
                  fill={s.color}
                  fill-opacity={active ? 0.95 : 0.6}
                  stroke={active ? '#0f172a' : s.color}
                  stroke-width={active ? 2.5 : 1}
                />
              {:else if sh.line}
                <path
                  d={sh.d}
                  fill="none"
                  stroke={s.color}
                  stroke-width={active ? 6 : 4}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-opacity={active ? 1 : 0.75}
                />
              {:else}
                <path
                  d={sh.d}
                  fill={s.color}
                  fill-opacity={active ? 0.95 : 0.6}
                  stroke={active ? '#0f172a' : s.color}
                  stroke-width={active ? 2.5 : 1}
                />
              {/if}
            {/each}
          </g>
        {/each}
      {/each}
    </svg>

    <div class="space-y-3">
      <div
        class="min-h-24 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-800"
        aria-live="polite"
      >
        {#if organ && owner}
          <p class="font-semibold" style="color: {owner.color}">{organ.name} — {owner.name}</p>
          <p class="mt-1">{organ.info}</p>
          <p class="mt-2 text-slate-600">
            <strong>Chức năng của {owner.name.toLowerCase()}:</strong>
            {owner.role}
          </p>
        {:else if visible.length}
          <p>Chạm vào một cơ quan có màu trên hình để xem tên, vị trí và chức năng của nó.</p>
        {:else}
          <p>Hãy bật ít nhất một hệ cơ quan để thấy các cơ quan của hệ đó trên hình.</p>
        {/if}
      </div>

      <SegmentedControl
        label="Cơ thể đang"
        options={[
          { value: 'nghi', label: 'Nghỉ ngơi' },
          { value: 'chay', label: 'Chạy' },
        ]}
        bind:value={phase}
      />
      <ul class="space-y-1 text-sm" aria-label="Hoạt động của các hệ cơ quan">
        {#each ACTIVITY as a (a.id)}
          {@const sys = SYSTEMS.find((s) => s.id === a.id)}
          <li class="flex gap-2">
            <span
              class="mt-1 inline-block h-3 w-3 shrink-0 rounded-full"
              style="background: {sys?.color}"
              aria-hidden="true"
            ></span>
            <span
              ><strong>{sys?.name}:</strong>
              {phase === 'chay' ? a.run : a.rest}
              {#if phase === 'chay' && a.up}<span class="font-semibold text-rose-700">
                  ↑</span
                >{/if}</span
            >
          </li>
        {/each}
      </ul>
      <p class="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
        {coordination(phase)}
      </p>
    </div>
  </div>
  <p class="text-xs text-slate-600">
    Hình vẽ sơ lược để xác định vị trí, nhìn cơ thể từ phía trước (bên trái cơ thể nằm ở bên phải
    hình). Nhịp tim, nhịp thở là số liệu gần đúng.
  </p>
</div>

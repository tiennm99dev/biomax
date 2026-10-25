<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { CELL_TYPES, FEATURES, cellKey, scoreTable } from './engine.js';

  /** @type {string[]} */
  let ticked = $state([]);
  let checked = $state(false);

  const result = $derived(scoreTable(ticked));

  /** @param {string} key */
  function toggle(key) {
    ticked = ticked.includes(key) ? ticked.filter((k) => k !== key) : [...ticked, key];
    checked = false;
  }

  function reset() {
    ticked = [];
    checked = false;
  }
</script>

<div class="space-y-3">
  <p class="text-sm text-slate-700">
    Bấm vào ô để đánh dấu tế bào <strong>có</strong> thành phần đó (bấm lần nữa để bỏ), rồi bấm "Kiểm
    tra".
  </p>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[20rem] border-collapse text-sm">
      <thead>
        <tr class="text-left text-slate-600">
          <th scope="col" class="py-2 pr-2 font-semibold">Thành phần</th>
          {#each CELL_TYPES as t (t.value)}
            <th scope="col" class="px-1 py-2 text-center font-semibold">{t.label}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each FEATURES as f (f.id)}
          <tr class="border-t border-slate-200">
            <th scope="row" class="py-1 pr-2 text-left font-normal text-slate-800">{f.name}</th>
            {#each CELL_TYPES as t (t.value)}
              {@const key = cellKey(f.id, t.value)}
              {@const on = ticked.includes(key)}
              {@const bad = checked && result.wrong.includes(key)}
              <td class="px-1 py-1 text-center">
                <button
                  type="button"
                  class="min-h-11 w-full min-w-12 rounded-lg border-2 font-bold {bad
                    ? 'border-amber-500 bg-amber-50 text-amber-900'
                    : on
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 bg-white text-slate-400'} {focusRing}"
                  aria-pressed={on}
                  aria-label="{f.name}, {t.label}: {on ? 'có' : 'không'}{bad ? ', chưa đúng' : ''}"
                  onclick={() => toggle(key)}>{on ? '✓' : '–'}</button
                >
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={() => (checked = true)}>Kiểm tra</button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
  <p
    class="min-h-6 text-sm {checked && result.done
      ? 'font-semibold text-emerald-800'
      : checked
        ? 'text-amber-800'
        : 'text-slate-600'}"
    aria-live="polite"
  >
    {#if !checked}
      Đã đánh dấu {ticked.length} ô.
    {:else if result.done}
      Chính xác cả bảng! Mọi tế bào đều có màng, tế bào chất và nhân hoặc vùng nhân; chỉ tế bào thực
      vật có lục lạp và không bào lớn.
    {:else}
      Đúng {result.right}/{result.total} ô. Các ô viền cam chưa đúng: xem lại sơ đồ ở trên rồi sửa.
    {/if}
  </p>
</div>

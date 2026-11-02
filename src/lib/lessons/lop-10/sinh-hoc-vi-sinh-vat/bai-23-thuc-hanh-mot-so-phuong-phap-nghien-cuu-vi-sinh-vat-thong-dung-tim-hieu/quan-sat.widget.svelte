<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { OBJECTIVES, fieldOf, magnification } from './engine.js';

  const options = OBJECTIVES.map((o) => ({ value: o.id, label: o.name }));
  const rods = fieldOf(23);

  let objectiveId = $state(OBJECTIVES[0].id);
  let stained = $state(false);

  const objective = $derived(OBJECTIVES.find((o) => o.id === objectiveId) ?? OBJECTIVES[0]);
  const total = $derived(magnification(10, objective.times));
  const color = $derived(stained ? '#1d4ed8' : '#cbd5e1');
  const text = $derived(
    `Thị kính 10×. ${objective.text} Độ phóng đại ${total} lần. ${stained ? 'Mẫu nhuộm xanh methylene: vi khuẩn bắt màu, nổi rõ trên nền sáng.' : 'Mẫu không nhuộm: vi khuẩn gần như trong suốt, rất khó thấy.'}`,
  );
</script>

<div class="space-y-3 rounded-2xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">Quan sát vi khuẩn trong sữa chua</p>

  <div class="grid gap-3 sm:grid-cols-[minmax(0,14rem)_1fr]">
    <svg
      viewBox="-50 -50 100 100"
      class="mx-auto block w-full max-w-56 rounded-full bg-amber-50 ring-4 ring-slate-800"
      role="img"
      aria-label="Vi trường ở độ phóng đại {total} lần; {stained
        ? 'vi khuẩn màu xanh'
        : 'vi khuẩn gần như không màu'}"
    >
      <clipPath id="vi-truong"><circle r="50" /></clipPath>
      <g clip-path="url(#vi-truong)">
        {#each rods as r, i (i)}
          {@const sx = r.x * objective.scale}
          {@const sy = r.y * objective.scale}
          {@const len = objective.times === 10 ? 0.8 : r.length * objective.scale}
          <rect
            x={sx - len / 2}
            y={sy - len / 5}
            width={len}
            height={len / 2.5}
            rx={len / 5}
            fill={color}
            transform="rotate({r.angle} {sx} {sy})"
          />
        {/each}
      </g>
    </svg>
    <div class="space-y-3">
      <SegmentedControl label="Vật kính" {options} bind:value={objectiveId} />
      <label class="flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-700">
        <input type="checkbox" class="size-5 {focusRing}" bind:checked={stained} />
        Nhuộm mẫu bằng xanh methylene
      </label>
    </div>
  </div>

  <FeedbackNote tone={stained && objective.times === 100 ? 'ok' : 'info'} {text} />
  <p class="text-sm text-slate-600">Hình vẽ mô phỏng, không phải ảnh chụp.</p>
</div>

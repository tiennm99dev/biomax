<script>
  import { armsOf, cellOutline } from './frames.js';

  /**
   * Draws one stage of cell division: cells, nuclei, spindle fibres and
   * chromatids, each chromatid with an arm in its own colour.
   * @type {{
   *   frame: import('./frames.js').Frame;
   *   width: number;
   *   height: number;
   * }}
   */
  let { frame, width, height } = $props();

  const drawn = $derived(frame.chromatids.map((c) => ({ c, ...armsOf(c) })));
</script>

<svg
  viewBox="0 0 {width} {height}"
  class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
  role="img"
  aria-label="{frame.name}: {frame.counts.cells} tế bào, mỗi tế bào {frame.counts.nst} NST {frame
    .counts.state}"
>
  {#each frame.cells as c, i (i)}
    {#if c.wall}
      <rect
        x={c.cx - c.rx}
        y={c.cy - c.ry}
        width={c.rx * 2}
        height={c.ry * 2}
        rx="6"
        fill="#ecfccb"
        stroke="#4d7c0f"
        stroke-width="4"
      />
    {:else}
      <path d={cellOutline(c)} fill="#fef3c7" stroke="#b45309" stroke-width="2.5" />
    {/if}
  {/each}

  {#if frame.plate > 0}
    {@const half = frame.cells[0].ry * frame.plate}
    <line
      x1={frame.cells[0].cx}
      y1={frame.cells[0].cy - half}
      x2={frame.cells[0].cx}
      y2={frame.cells[0].cy + half}
      stroke="#4d7c0f"
      stroke-width="4"
      stroke-linecap="round"
    />
  {/if}

  {#each frame.nuclei as n, i (i)}
    <circle
      cx={n.cx}
      cy={n.cy}
      r={n.r}
      fill="#e0e7ff"
      fill-opacity={n.o * 0.8}
      stroke="#4338ca"
      stroke-width="1.5"
      stroke-opacity={n.o}
      stroke-dasharray={n.o < 0.5 ? '4 4' : undefined}
    />
    {#if n.nucleolus}
      <circle
        cx={n.cx + n.r * 0.5}
        cy={n.cy + n.r * 0.5}
        r="5"
        fill="#4338ca"
        opacity={n.o * 0.7}
      />
    {/if}
  {/each}

  {#each drawn as d (d.c.id)}
    {#if d.c.pole}
      <line
        x1={d.c.pole.x}
        y1={d.c.pole.y}
        x2={d.mid.x}
        y2={d.mid.y}
        stroke="#94a3b8"
        stroke-width="1"
      />
    {/if}
  {/each}

  {#each frame.poles as p, i (i)}
    {#if frame.star}
      <g stroke="#475569" stroke-width="1.5" stroke-linecap="round">
        <line x1={p.x - 6} y1={p.y} x2={p.x + 6} y2={p.y} />
        <line x1={p.x} y1={p.y - 6} x2={p.x} y2={p.y + 6} />
        <line x1={p.x - 4} y1={p.y - 4} x2={p.x + 4} y2={p.y + 4} />
        <line x1={p.x - 4} y1={p.y + 4} x2={p.x + 4} y2={p.y - 4} />
      </g>
    {:else}
      <circle cx={p.x} cy={p.y} r="2.5" fill="#475569" />
    {/if}
  {/each}

  {#each drawn as d (d.c.id)}
    <g stroke-width={d.c.w} stroke-linecap="round">
      <line x1={d.mid.x} y1={d.mid.y} x2={d.arms[0].x} y2={d.arms[0].y} stroke={d.c.colors[0]} />
      <line x1={d.mid.x} y1={d.mid.y} x2={d.arms[1].x} y2={d.arms[1].y} stroke={d.c.colors[1]} />
    </g>
    <circle cx={d.mid.x} cy={d.mid.y} r={Math.max(1, d.c.w * 0.5)} fill="#0f172a" />
  {/each}

  {#each frame.chiasmata as p, i (i)}
    <circle
      cx={p.x}
      cy={p.y}
      r="15"
      fill="none"
      stroke="#7c3aed"
      stroke-width="2"
      stroke-dasharray="3 3"
    />
  {/each}
</svg>

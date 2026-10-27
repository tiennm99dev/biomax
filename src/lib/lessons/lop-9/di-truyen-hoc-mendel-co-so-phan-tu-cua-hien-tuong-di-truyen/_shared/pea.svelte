<script>
  /**
   * A small garden-pea (đậu Hà Lan) picture for one trait, drawn in a 48×48
   * box: a seed (yellow or green, smooth or wrinkled), a flower (purple or
   * white) or a whole plant (tall or short). The picture is decorative; the
   * caller names it in its own text or `aria-label`.
   *
   * - `kind`: 'seed', 'flower' or 'plant'.
   * - `color`: for a seed 'vang' | 'xanh'; for a flower 'tim' | 'trang'.
   * - `shape`: for a seed 'tron' | 'nhan'.
   * - `tall`: for a plant, tall (true) or short (false).
   * - `size`: rendered size in CSS px.
   *
   * @type {{
   *   kind: 'seed' | 'flower' | 'plant';
   *   color?: 'vang' | 'xanh' | 'tim' | 'trang';
   *   shape?: 'tron' | 'nhan';
   *   tall?: boolean;
   *   size?: number;
   * }}
   */
  let { kind, color = 'vang', shape = 'tron', tall = true, size = 48 } = $props();

  const SEED = { vang: '#facc15', xanh: '#65a30d' };
  const SEED_EDGE = { vang: '#a16207', xanh: '#365314' };

  /** Outline of a seed: a circle, or a wavy wrinkled circle. */
  const seedPath = $derived.by(() => {
    const n = 72;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2;
      const r = shape === 'nhan' ? 17 * (1 + 0.09 * Math.sin(9 * t)) : 17;
      pts.push(`${(24 + r * Math.cos(t)).toFixed(2)} ${(24 + r * Math.sin(t)).toFixed(2)}`);
    }
    return `M ${pts.join(' L ')} Z`;
  });

  const seedFill = $derived(color === 'xanh' ? SEED.xanh : SEED.vang);
  const seedEdge = $derived(color === 'xanh' ? SEED_EDGE.xanh : SEED_EDGE.vang);
  const petal = $derived(color === 'trang' ? '#f8fafc' : '#7e22ce');
  const petalEdge = $derived(color === 'trang' ? '#94a3b8' : '#581c87');
  const stemTop = $derived(tall ? 6 : 26);
</script>

<svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" class="shrink-0">
  {#if kind === 'seed'}
    <path d={seedPath} fill={seedFill} stroke={seedEdge} stroke-width="1.5" />
    <ellipse cx="18" cy="17" rx="5" ry="3" fill="#ffffff" opacity="0.45" />
  {:else if kind === 'flower'}
    {#each [0, 72, 144, 216, 288] as a (a)}
      <ellipse
        cx="24"
        cy="13"
        rx="7"
        ry="10"
        fill={petal}
        stroke={petalEdge}
        stroke-width="1.2"
        transform="rotate({a} 24 24)"
      />
    {/each}
    <circle cx="24" cy="24" r="5" fill="#facc15" stroke="#a16207" />
  {:else}
    <line x1="4" y1="45" x2="44" y2="45" stroke="#92400e" stroke-width="3" />
    <line
      x1="24"
      y1="44"
      x2="24"
      y2={stemTop}
      stroke="#15803d"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    {#each tall ? [12, 22, 32] : [32, 38] as y, i (y)}
      <ellipse
        cx={i % 2 ? 30 : 18}
        cy={y}
        rx="6"
        ry="3"
        fill="#22c55e"
        stroke="#15803d"
        stroke-width="0.8"
        transform="rotate({i % 2 ? 20 : -20} {i % 2 ? 30 : 18} {y})"
      />
    {/each}
    <circle cx="24" cy={stemTop} r="3.5" fill="#7e22ce" />
  {/if}
</svg>

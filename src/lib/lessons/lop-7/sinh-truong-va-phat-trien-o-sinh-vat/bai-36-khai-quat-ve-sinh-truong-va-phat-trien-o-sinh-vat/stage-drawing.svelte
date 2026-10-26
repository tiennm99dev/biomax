<script>
  /**
   * A schematic drawing of one life-cycle stage, centred on (0, 0) and about
   * 160 × 110 units, for the life-cycle widget. Decorative: the widget names
   * the stage in text.
   * @type {{ stage: string }}
   */
  let { stage } = $props();

  const GREEN = '#16a34a';
  const LEAF = '#4ade80';
  const FROG = '#65a30d';
  const BROWN = '#92400e';
</script>

<g aria-hidden="true">
  {#if stage === 'ech-trung'}
    <ellipse cx="0" cy="0" rx="62" ry="38" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2" />
    {#each [-36, -12, 12, 36, -24, 0, 24] as x, i (i)}
      <circle cx={x} cy={i < 4 ? -10 : 14} r="10" fill="#f8fafc" stroke="#94a3b8" />
      <circle cx={x} cy={i < 4 ? -10 : 14} r="4" fill="#1e293b" />
    {/each}
  {:else if stage === 'ech-nong-noc' || stage === 'ech-chan-sau' || stage === 'ech-chan-truoc'}
    <path d="M 10 0 C 40 -18, 64 -10, 78 0 C 64 10, 40 18, 10 0 Z" fill="#a3a3a3" opacity="0.8" />
    {#if stage === 'ech-chan-sau' || stage === 'ech-chan-truoc'}
      <path
        d="M 4 14 l 14 22 l 10 -2"
        fill="none"
        stroke={FROG}
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M 4 -14 l 14 -22 l 10 2"
        fill="none"
        stroke={FROG}
        stroke-width="5"
        stroke-linecap="round"
      />
    {/if}
    {#if stage === 'ech-chan-truoc'}
      <path
        d="M -26 16 l -8 18"
        fill="none"
        stroke={FROG}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M -26 -16 l -8 -18"
        fill="none"
        stroke={FROG}
        stroke-width="4"
        stroke-linecap="round"
      />
    {/if}
    <ellipse cx="-16" cy="0" rx="32" ry="22" fill="#57534e" />
    <circle cx="-34" cy="-8" r="4" fill="#fafaf9" />
    <circle cx="-34" cy="8" r="4" fill="#fafaf9" />
  {:else if stage === 'ech-con' || stage === 'ech-truong-thanh'}
    {@const s = stage === 'ech-con' ? 0.7 : 1}
    <g transform="scale({s})">
      <path
        d="M -30 20 q -30 10 -36 34 M 30 20 q 30 10 36 34"
        fill="none"
        stroke={FROG}
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        d="M -20 -10 l -26 -10 M 20 -10 l 26 -10"
        fill="none"
        stroke={FROG}
        stroke-width="6"
        stroke-linecap="round"
      />
      <ellipse cx="0" cy="8" rx="36" ry="30" fill={FROG} />
      <ellipse cx="0" cy="-20" rx="28" ry="18" fill="#84cc16" />
      <circle cx="-16" cy="-34" r="8" fill="#ecfccb" stroke={FROG} stroke-width="2" />
      <circle cx="16" cy="-34" r="8" fill="#ecfccb" stroke={FROG} stroke-width="2" />
      <circle cx="-16" cy="-34" r="3.5" fill="#1e293b" />
      <circle cx="16" cy="-34" r="3.5" fill="#1e293b" />
    </g>
  {:else if stage === 'buom-trung'}
    <path d="M -70 30 Q 0 -50 70 30 Z" fill={LEAF} stroke={GREEN} stroke-width="2" />
    {#each [-24, -8, 8, 24] as x (x)}
      <ellipse cx={x} cy="14" rx="4" ry="7" fill="#fde047" stroke="#ca8a04" />
    {/each}
  {:else if stage === 'buom-sau'}
    <path d="M -76 40 Q 0 -20 76 40 Z" fill={LEAF} stroke={GREEN} stroke-width="2" />
    {#each [-48, -32, -16, 0, 16, 32] as x, i (x)}
      <circle cx={x} cy={i % 2 ? 0 : 2} r="11" fill="#22c55e" stroke="#15803d" stroke-width="2" />
    {/each}
    <circle cx="50" cy="-2" r="12" fill="#15803d" />
    <circle cx="55" cy="-6" r="2.5" fill="#f8fafc" />
  {:else if stage === 'buom-nhong'}
    <line x1="0" y1="-56" x2="0" y2="-36" stroke={BROWN} stroke-width="3" />
    <path
      d="M 0 -38 C 26 -30, 22 30, 0 46 C -22 30, -26 -30, 0 -38 Z"
      fill="#a3e635"
      stroke="#4d7c0f"
      stroke-width="2"
    />
    <path
      d="M -10 -14 Q 0 -6 10 -14 M -12 4 Q 0 12 12 4 M -10 22 Q 0 28 10 22"
      fill="none"
      stroke="#4d7c0f"
      stroke-width="1.5"
    />
  {:else if stage === 'buom-truong-thanh'}
    <path
      d="M 0 -6 C -30 -60, -80 -40, -66 -6 C -60 10, -20 6, 0 0 Z"
      fill="#f8fafc"
      stroke="#64748b"
      stroke-width="2"
    />
    <path
      d="M 0 -6 C 30 -60, 80 -40, 66 -6 C 60 10, 20 6, 0 0 Z"
      fill="#f8fafc"
      stroke="#64748b"
      stroke-width="2"
    />
    <path
      d="M 0 2 C -24 10, -56 30, -36 44 C -20 48, -6 24, 0 8 Z"
      fill="#f1f5f9"
      stroke="#64748b"
      stroke-width="2"
    />
    <path
      d="M 0 2 C 24 10, 56 30, 36 44 C 20 48, 6 24, 0 8 Z"
      fill="#f1f5f9"
      stroke="#64748b"
      stroke-width="2"
    />
    <circle cx="-44" cy="-30" r="6" fill="#334155" />
    <circle cx="44" cy="-30" r="6" fill="#334155" />
    <ellipse cx="0" cy="4" rx="4" ry="28" fill="#334155" />
    <path
      d="M -2 -22 q -8 -16 -16 -20 M 2 -22 q 8 -16 16 -20"
      fill="none"
      stroke="#334155"
      stroke-width="1.5"
    />
  {:else}
    <!-- Mung bean stages, drawn above a soil line. -->
    <rect x="-80" y="30" width="160" height="24" fill="#a16207" opacity="0.35" />
    {#if stage === 'dau-hat'}
      <ellipse cx="0" cy="24" rx="12" ry="8" fill="#15803d" />
    {:else if stage === 'dau-nay-mam'}
      <ellipse cx="0" cy="24" rx="12" ry="8" fill="#15803d" />
      <path d="M 4 30 q 4 12 0 22" fill="none" stroke="#fef3c7" stroke-width="3" />
      <path d="M -2 18 q -4 -6 2 -10" fill="none" stroke="#bef264" stroke-width="3" />
    {:else}
      {@const h = stage === 'dau-cay-mam' ? 30 : 70}
      <path d="M 0 30 V {30 - h}" stroke={GREEN} stroke-width="4" />
      <path
        d="M 0 30 q -6 10 -2 22 M 0 30 q 8 12 4 22"
        fill="none"
        stroke="#fef3c7"
        stroke-width="2"
      />
      {#if stage === 'dau-cay-mam'}
        <ellipse cx="-10" cy="-2" rx="10" ry="6" fill="#bef264" />
        <ellipse cx="10" cy="-2" rx="10" ry="6" fill="#bef264" />
        <path d="M 0 0 q -6 -8 0 -14 q 6 6 0 14" fill={LEAF} />
      {:else}
        {#each [10, -10, -30] as y, i (y)}
          <ellipse cx={i % 2 ? -16 : 16} {y} rx="16" ry="7" fill={LEAF} stroke={GREEN} />
        {/each}
        <ellipse cx="0" cy="-44" rx="8" ry="10" fill={LEAF} stroke={GREEN} />
        {#if stage === 'dau-ra-hoa'}
          <circle cx="22" cy="-20" r="6" fill="#facc15" />
          <circle cx="-22" cy="0" r="6" fill="#facc15" />
        {:else if stage === 'dau-qua'}
          <path
            d="M 18 -18 q 10 20 6 38"
            fill="none"
            stroke="#166534"
            stroke-width="6"
            stroke-linecap="round"
          />
          <path
            d="M -18 2 q -10 16 -6 30"
            fill="none"
            stroke="#166534"
            stroke-width="6"
            stroke-linecap="round"
          />
        {/if}
      {/if}
    {/if}
  {/if}
</g>

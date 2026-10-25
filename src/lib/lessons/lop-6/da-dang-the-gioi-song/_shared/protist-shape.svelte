<script>
  import {
    amoebaPath,
    ciliaPath,
    debrisPath,
    diatomPath,
    euglenaBody,
    flagellumPath,
    slipperBody,
  } from './protist-paths.js';

  /**
   * One object of a pond-water drop drawn at the origin, front end towards
   * +x, `L` px long. Below `dotBelow` px it is only a dot, as through a weak
   * objective. Place it with a transform on a parent `<g>`.
   *
   * @type {{
   *   kind: 'trung-roi' | 'trung-giay' | 'trung-bien-hinh' | 'tao-luc' | 'tao-silic' | 'bot-khi' | 'manh-vun';
   *   L: number;
   *   t?: number;
   *   dotBelow?: number;
   * }}
   */
  let { kind, L, t = 0, dotBelow = 0 } = $props();

  const GREEN = new Set(['trung-roi', 'tao-luc', 'tao-silic']);
</script>

{#if L < dotBelow}
  <circle
    r={Math.max(2, L / 2)}
    fill={kind === 'bot-khi' ? 'none' : GREEN.has(kind) ? '#16a34a' : '#78716c'}
    stroke={kind === 'bot-khi' ? '#334155' : 'none'}
  />
{:else if kind === 'trung-roi'}
  <path d={flagellumPath(L, t)} fill="none" stroke="#166534" stroke-width="1.5" />
  <path d={euglenaBody(L)} fill="#bbf7d0" stroke="#15803d" stroke-width="2" />
  {#each [-0.24, -0.06, 0.12] as f (f)}
    <ellipse cx={L * f} cy="0" rx={L * 0.07} ry={L * 0.04} fill="#16a34a" />
  {/each}
  <circle cx={L * 0.38} cy={-L * 0.03} r={Math.max(1.2, L * 0.035)} fill="#dc2626" />
{:else if kind === 'trung-giay'}
  <path d={ciliaPath(L, t)} stroke="#64748b" stroke-width="1" />
  <path d={slipperBody(L)} fill="#e0e7ff" stroke="#4338ca" stroke-width="2" />
  <circle cx={-L * 0.04} cy={-L * 0.04} r={L * 0.075} fill="#7c3aed" opacity="0.7" />
  <circle cx={L * 0.28} cy={-L * 0.06} r={L * 0.04} fill="none" stroke="#4338ca" />
  <circle cx={-L * 0.3} cy={-L * 0.04} r={L * 0.04} fill="none" stroke="#4338ca" />
{:else if kind === 'trung-bien-hinh'}
  <path d={amoebaPath(L, t)} fill="#fef3c7" stroke="#b45309" stroke-width="2" />
  <circle cx={-L * 0.08} cy={L * 0.03} r={L * 0.08} fill="#7c3aed" opacity="0.7" />
  <circle cx={L * 0.15} cy={-L * 0.1} r={L * 0.05} fill="#fde68a" stroke="#b45309" />
{:else if kind === 'tao-luc'}
  <circle r={L / 2} fill="#dcfce7" stroke="#15803d" stroke-width="1.5" />
  <path
    d="M {-L * 0.35} {-L * 0.1} A {L * 0.36} {L * 0.36} 0 0 0 {L * 0.35} {-L * 0.1} L {L *
      0.2} {-L * 0.05} A {L * 0.22} {L * 0.22} 0 0 1 {-L * 0.2} {-L * 0.05} Z"
    fill="#16a34a"
  />
{:else if kind === 'tao-silic'}
  <path d={diatomPath(L)} fill="#fef9c3" stroke="#a16207" stroke-width="1.2" />
{:else if kind === 'bot-khi'}
  <circle r={L / 2} fill="#f8fafc" stroke="#1e293b" stroke-width={Math.max(2, L * 0.14)} />
  <circle cx={-L * 0.14} cy={-L * 0.14} r={L * 0.08} fill="white" />
{:else}
  <path d={debrisPath(L)} fill="#57534e" opacity="0.85" />
{/if}

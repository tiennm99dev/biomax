<script>
  import { bentOrgan } from './tropism.js';

  /**
   * A bean seedling drawn in SVG units with the soil surface at y = 0 and the
   * stem base at x = 0. The stem bends by `shoot` degrees and the main root by
   * `root` degrees (positive to the right). Place it with a transform on a
   * parent `<g>`; it draws no soil or pot itself.
   *
   * - `length`: shoot length as a fraction of `SHOOT_PX` (0-1).
   * - `root`: null hides the roots (they are under the soil).
   *
   * @type {{ shoot: number; length: number; root?: number | null }}
   */
  let { shoot, length, root = null } = $props();

  const SHOOT_PX = 96;
  const ROOT_PX = 56;

  const stem = $derived(bentOrgan(0, 0, SHOOT_PX * length, shoot, -1));
  const mainRoot = $derived(root === null ? null : bentOrgan(0, 0, ROOT_PX, root, 1));
  // Two side roots follow the main root's lean a little.
  const sideRoots = $derived(
    root === null
      ? []
      : [
          bentOrgan(-2, 10, ROOT_PX * 0.45, root * 0.6 - 35, 1),
          bentOrgan(2, 10, ROOT_PX * 0.45, root * 0.6 + 35, 1),
        ],
  );
</script>

{#if mainRoot}
  {#each sideRoots as r, i (i)}
    <path d={r.path} fill="none" stroke="#a16207" stroke-width="2" stroke-linecap="round" />
  {/each}
  <path d={mainRoot.path} fill="none" stroke="#854d0e" stroke-width="3.5" stroke-linecap="round" />
{/if}
<path d={stem.path} fill="none" stroke="#15803d" stroke-width="5" stroke-linecap="round" />
<g transform="translate({stem.tip.x} {stem.tip.y}) rotate({shoot})">
  <ellipse cx="-11" cy="-3" rx="12" ry="5.5" transform="rotate(-25)" fill="#22c55e" />
  <ellipse cx="11" cy="-3" rx="12" ry="5.5" transform="rotate(25)" fill="#16a34a" />
</g>

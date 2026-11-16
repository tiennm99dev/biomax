import { describe, expect, it } from 'vitest';
import {
  FRAGMENTS,
  LENGTH,
  act,
  copiedAt,
  isDone,
  originsAt,
  start,
  stepsToCopy,
  strands,
  suggest,
  tally,
} from './engine.js';

/** @param {import('./engine.js').Enzyme[]} steps */
function run(steps) {
  let s = start();
  for (const e of steps) s = act(s, e).state;
  return s;
}

describe('replication fork', () => {
  it('needs the helix opened before anything else', () => {
    const s = start();
    expect(act(s, 'primase').ok).toBe(false);
    expect(act(s, 'polymerase').ok).toBe(false);
    expect(act(s, 'ligase').ok).toBe(false);
    expect(suggest(s)).toBe('helicase');
  });

  it('refuses DNA polymerase without a primer', () => {
    const r = act(run(['helicase']), 'polymerase');
    expect(r.ok).toBe(false);
    expect(r.text).toContain('đoạn mồi');
  });

  it('makes the leading strand continuously and the lagging one in fragments', () => {
    const s = run(['helicase', 'primase', 'polymerase', 'helicase', 'primase', 'polymerase']);
    const { leading, lagging } = strands(s);
    expect(leading.slice(0, 12).every((b) => b !== 'none')).toBe(true);
    expect(leading[0]).toBe('primer');
    // The first fragment's primer is replaced once the second fragment reaches it.
    expect(lagging.slice(0, 6)).toEqual(['dna', 'dna', 'dna', 'dna', 'dna', 'dna']);
    expect(lagging.slice(10, 12)).toEqual(['primer', 'primer']);
    expect(tally(s)).toEqual({ okazaki: 2, primers: 3, nicks: 1 });
  });

  it('only seals nicks once the primer between fragments is gone', () => {
    let s = run(['helicase', 'primase', 'polymerase']);
    expect(act(s, 'ligase').ok).toBe(false);
    s = run(['helicase', 'primase', 'polymerase', 'helicase', 'primase', 'polymerase']);
    const r = act(s, 'ligase');
    expect(r.ok).toBe(true);
    expect(tally(r.state).nicks).toBe(0);
  });

  it('finishes when following the suggested enzymes', () => {
    let s = start();
    let guard = 0;
    for (let e = suggest(s); e && guard < 50; e = suggest(s), guard++) s = act(s, e).state;
    expect(isDone(s)).toBe(true);
    expect(s.open).toBe(LENGTH);
    expect(tally(s)).toEqual({ okazaki: FRAGMENTS, primers: FRAGMENTS + 1, nicks: 0 });
    expect(strands(s).leading.every((b) => b === 'dna')).toBe(true);
    expect(strands(s).lagging.every((b) => b === 'dna')).toBe(true);
    expect(act(s, 'helicase').ok).toBe(false);
  });
});

describe('origins of replication', () => {
  it('copies faster with more origins', () => {
    expect(originsAt(60, 1)).toEqual([30]);
    expect(originsAt(60, 3)).toEqual([10, 30, 50]);
    expect(copiedAt(10, 1, 0).some(Boolean)).toBe(false);
    expect(stepsToCopy(60, 1)).toBe(31);
    expect(stepsToCopy(60, 3)).toBe(11);
    expect(stepsToCopy(60, 6)).toBe(6);
  });
});

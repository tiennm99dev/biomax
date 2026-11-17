import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { classifyCounts, isCen } from '../_shared/mutations.js';
import { ANSWERS, ROUND_COUNT, buildGame, structuralRound } from './engine.js';

/** @param {import('./engine.js').Round} r */
function check(r) {
  if (r.view.type === 'karyotype') {
    const groups = r.view.groups;
    const sex = groups.find((g) => g.items.some((c) => c.tag));
    const auto = groups.filter((g) => g !== sex).map((g) => g.items.length);
    if (!sex)
      return classifyCounts(auto).kind === 'binh-thuong'
        ? 'binh-thuong'
        : classifyCounts(auto).kind;
    const sexText = sex.items.map((c) => c.tag).join('');
    const odd = auto.some((c) => c !== 2) || !['XX', 'XY'].includes(sexText);
    return odd ? 'lech-boi' : 'binh-thuong';
  }
  const [normal, mutant] =
    r.view.strips.length === 2 ? r.view.strips : [r.view.strips[0], r.view.strips[2]];
  const n = normal.genes.filter((g) => !isCen(g));
  const m = mutant.genes.filter((g) => !isCen(g));
  if (m.some((g) => g.home !== 'A')) return 'chuyen';
  if (m.length < n.length) return 'mat';
  if (m.length > n.length) return 'lap';
  return m.map((g) => g.label).join('') === n.map((g) => g.label).join('') ? 'binh-thuong' : 'dao';
}

describe('game', () => {
  it('stores answers that match what each specimen shows', () => {
    const bad = [];
    for (let seed = 1; seed <= 40; seed++) {
      const game = buildGame(seed);
      if (game.length !== ROUND_COUNT) bad.push(`seed ${seed}: ${game.length} rounds`);
      for (const r of game) {
        const seen = check(r);
        if (seen !== r.answer) bad.push(`seed ${seed}: ${r.answer} shows as ${seen}`);
        if (!ANSWERS.some((a) => a.id === r.answer)) bad.push(`unknown ${r.answer}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('builds every structural change without error', () => {
    const rand = rng(7);
    for (let k = 0; k < 30; k++) {
      for (const op of /** @type {const} */ (['mat', 'lap', 'dao', 'chuyen'])) {
        expect(structuralRound(rand, op).answer).toBe(op);
      }
    }
  });

  it('is the same game for the same seed', () => {
    expect(buildGame(5).map((r) => r.reveal)).toEqual(buildGame(5).map((r) => r.reveal));
  });
});

import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  CYCLE_BINS,
  CYCLE_CARDS,
  ENVELOPED_DIAGRAM,
  PHAGE_DIAGRAM,
  SCENE,
  STAGES,
  clueFor,
  isNext,
  mixedStages,
  sceneAt,
} from './engine.js';

/** @typedef {import('./engine.js').Scene} Scene */

/** @param {Scene} scene @param {string} type */
const count = (scene, type) => scene.items.filter((i) => i.type === type).length;

describe('the stages', () => {
  it('runs in the order of the book', () => {
    expect(STAGES.map((s) => s.name)).toEqual([
      'Hấp phụ',
      'Xâm nhập',
      'Tổng hợp',
      'Lắp ráp',
      'Giải phóng',
    ]);
  });

  it('accepts only the next stage', () => {
    expect(isNext(0, 'hap-phu')).toBe(true);
    expect(isNext(0, 'xam-nhap')).toBe(false);
    expect(isNext(4, 'giai-phong')).toBe(true);
    expect(isNext(5, 'giai-phong')).toBe(false);
  });

  it('never names the awaited stage in its clue', () => {
    const named = STAGES.filter((s, i) => clueFor(i).toLowerCase().includes(s.name.toLowerCase()));
    expect(named.map((s) => s.id)).toEqual([]);
  });

  it('mixes the stages without ever leaving them sorted', () => {
    const bad = [];
    for (let seed = 1; seed < 60; seed++) {
      const ids = mixedStages(seed).map((s) => s.id);
      if (ids.join() === STAGES.map((s) => s.id).join()) bad.push(seed);
      if (new Set(ids).size !== STAGES.length) bad.push(seed);
    }
    expect(bad).toEqual([]);
  });
});

describe('the scene', () => {
  it('lands the virus on the surface during adsorption', () => {
    const start = sceneAt('phage', 0, 0).items[0];
    const end = sceneAt('phage', 0, 1).items[0];
    expect(start.y).toBeLessThan(end.y);
    expect(end.y).toBe(SCENE.surface);
    expect(sceneAt('vo-ngoai', 0, 1).items[0].y).toBeLessThan(SCENE.surface);
  });

  it('leaves the phage shell outside and sends only its genome in', () => {
    const scene = sceneAt('phage', 1, 1);
    expect(count(scene, 'shell')).toBe(1);
    expect(count(scene, 'capsid')).toBe(0);
    const genome = scene.items.find((i) => i.type === 'genome');
    expect(genome?.y).toBeGreaterThan(SCENE.surface);
  });

  it('takes the whole enveloped virus in, then frees its nucleic acid', () => {
    expect(sceneAt('vo-ngoai', 1, 0.2).items[0].type).toBe('virion');
    expect(count(sceneAt('vo-ngoai', 1, 0.6), 'capsid')).toBe(1);
    expect(count(sceneAt('vo-ngoai', 1, 0.6), 'genome')).toBe(0);
    const end = sceneAt('vo-ngoai', 1, 1);
    expect(end.items.find((i) => i.type === 'capsid')?.opacity).toBe(0);
    expect(count(end, 'genome')).toBe(1);
    expect(count(end, 'shell')).toBe(0);
  });

  it('builds up parts during synthesis, then assembles all of them', () => {
    expect(count(sceneAt('phage', 2, 0), 'genome')).toBe(1);
    expect(count(sceneAt('phage', 2, 0), 'protein')).toBe(0);
    expect(count(sceneAt('phage', 2, 1), 'genome')).toBe(6);
    expect(count(sceneAt('phage', 2, 1), 'protein')).toBe(6);
    expect(count(sceneAt('phage', 3, 0), 'mature')).toBe(0);
    expect(count(sceneAt('phage', 3, 1), 'mature')).toBe(6);
    expect(count(sceneAt('phage', 3, 1), 'genome')).toBe(0);
  });

  it('bursts the bacterium but lets enveloped viruses out through a whole membrane', () => {
    expect(sceneAt('phage', 4, 1).burst).toBe(true);
    expect(sceneAt('vo-ngoai', 4, 1).burst).toBe(false);
    const outside = sceneAt('vo-ngoai', 4, 1).items;
    expect(outside.filter((i) => i.type !== 'virion' || i.y >= SCENE.surface)).toEqual([]);
    expect(sceneAt('vo-ngoai', 4, 0).items.filter((i) => i.type !== 'mature')).toEqual([]);
  });

  it('keeps every item on the scene for every kind, stage and moment', () => {
    const bad = [];
    for (const kind of /** @type {const} */ (['phage', 'vo-ngoai'])) {
      for (let stage = 0; stage < STAGES.length; stage++) {
        for (const t of [0, 0.25, 0.5, 0.75, 1]) {
          for (const item of sceneAt(kind, stage, t).items) {
            const off = item.x < 0 || item.x > SCENE.width || item.y < 0 || item.y > SCENE.height;
            if (off) bad.push(`${kind} ${stage} ${t} ${item.type}`);
          }
        }
      }
    }
    expect(bad).toEqual([]);
  });
});

describe('the data', () => {
  it('draws both diagrams with parts that do not overlap', () => {
    expect(validateDiagram(ENVELOPED_DIAGRAM)).toEqual([]);
    expect(validateDiagram(PHAGE_DIAGRAM)).toEqual([]);
  });

  it('gives each cycle its share of cards', () => {
    const bins = CYCLE_BINS.map((b) => CYCLE_CARDS.filter((c) => c.bin === b.id).length);
    expect(bins).toEqual([4, 4]);
    expect(new Set(CYCLE_CARDS.map((c) => c.id)).size).toBe(CYCLE_CARDS.length);
  });
});

import { describe, expect, it } from 'vitest';
import {
  RICE_FIELD,
  cascade,
  chainText,
  eatersOf,
  efficiencyPercent,
  energyAlong,
  foodChains,
  foodOf,
  levelRows,
  trophicLevels,
  validate,
} from './food-web.js';

/** @type {import('./food-web.js').FoodWeb} */
const pond = {
  species: [
    { id: 'tao', name: 'Tảo', role: 'producer' },
    { id: 'giap-xac', name: 'Giáp xác', role: 'consumer' },
    { id: 'ca-nho', name: 'Cá nhỏ', role: 'consumer' },
    { id: 'ca-lon', name: 'Cá lớn', role: 'consumer' },
    { id: 'vk', name: 'Vi khuẩn', role: 'decomposer' },
  ],
  links: [
    ['tao', 'giap-xac'],
    ['giap-xac', 'ca-nho'],
    ['ca-nho', 'ca-lon'],
    ['tao', 'ca-nho'],
    ['ca-lon', 'vk'],
  ],
};

describe('food web structure', () => {
  it('accepts the sample webs', () => {
    expect(validate(RICE_FIELD)).toEqual([]);
    expect(validate(pond)).toEqual([]);
  });

  it('reports bad links and roles', () => {
    expect(
      validate({
        species: [
          { id: 'a', name: 'A', role: 'producer' },
          { id: 'b', name: 'B', role: 'consumer' },
        ],
        links: [['b', 'a']],
      }),
    ).toEqual(['producer a eats something', 'consumer b eats nothing']);
    expect(validate({ species: [], links: [['x', 'y']] })).toEqual([
      'link x → y names an unknown species',
    ]);
  });

  it('lists food and eaters', () => {
    expect(foodOf(RICE_FIELD, 'ech').sort()).toEqual(['chau-chau', 'sau']);
    expect(eatersOf(RICE_FIELD, 'chuot').sort()).toEqual(['dai-bang', 'ran']);
  });
});

describe('food chains', () => {
  it('lists every chain from a producer to a top consumer, without decomposers', () => {
    const chains = foodChains(pond).map((c) => chainText(pond, c));
    expect(chains).toEqual(['Tảo → Giáp xác → Cá nhỏ → Cá lớn', 'Tảo → Cá nhỏ → Cá lớn']);
  });

  it('counts the chains of the rice field', () => {
    const chains = foodChains(RICE_FIELD).map((c) => chainText(RICE_FIELD, c));
    expect(chains).toContain('Lúa → Chuột → Đại bàng');
    expect(chains).toContain('Cỏ → Châu chấu → Ếch → Rắn → Đại bàng');
    expect(chains).toContain('Lúa → Sâu → Chim sâu → Đại bàng');
    expect(chains).toHaveLength(6);
  });

  it('gives species every trophic level they occupy', () => {
    expect(trophicLevels(pond, 'tao')).toEqual([1]);
    expect(trophicLevels(pond, 'ca-nho')).toEqual([2, 3]);
    expect(trophicLevels(pond, 'ca-lon')).toEqual([3, 4]);
    expect(trophicLevels(RICE_FIELD, 'dai-bang')).toEqual([3, 4, 5]);
    expect(trophicLevels(pond, 'vk')).toEqual([]);
  });

  it('rows species by their highest level, decomposers last', () => {
    expect(levelRows(pond)).toEqual([['tao'], ['giap-xac'], ['ca-nho'], ['ca-lon'], ['vk']]);
  });
});

describe('removing a species', () => {
  it('starves consumers that lose all their food', () => {
    expect(cascade(pond, ['tao'])).toEqual(['giap-xac', 'ca-nho', 'ca-lon']);
    expect(cascade(pond, ['giap-xac'])).toEqual([]);
  });

  it('leaves consumers with other food', () => {
    expect(cascade(RICE_FIELD, ['chuot'])).toEqual([]);
    expect(cascade(RICE_FIELD, ['sau'])).toEqual(['chim-sau']);
    expect(cascade(RICE_FIELD, ['sau', 'chau-chau'])).toEqual(['ech', 'chim-sau']);
    expect(cascade(RICE_FIELD, ['lua'])).toEqual(['sau', 'chuot', 'chim-sau']);
  });
});

describe('energy', () => {
  it('passes about a tenth of the energy up each level', () => {
    const e = energyAlong(4, 1_000_000);
    expect(e.map((x) => Math.round(x))).toEqual([1_000_000, 100_000, 10_000, 1_000]);
    expect(energyAlong(3, 500, 0.2).map((x) => Math.round(x * 100) / 100)).toEqual([500, 100, 20]);
  });

  it('computes the ecological efficiency in percent', () => {
    expect(efficiencyPercent(2_000_000, 180_000)).toBeCloseTo(9);
  });
});

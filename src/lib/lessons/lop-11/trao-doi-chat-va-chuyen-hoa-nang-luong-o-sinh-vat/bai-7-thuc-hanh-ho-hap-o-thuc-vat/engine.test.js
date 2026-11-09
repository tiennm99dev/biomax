import { describe, expect, it } from 'vitest';
import { ROOM, cloudiness, describeHeat, describeJar, temperature, trace } from './engine.js';

describe('heat from respiring seeds', () => {
  it('starts every flask at room temperature', () => {
    expect(temperature('nay-mam', 'phich', 200, 0)).toBe(ROOM);
    expect(trace('kho', 'coc', 100, 3)).toHaveLength(4);
  });

  it('warms germinating seeds by about 7 °C in a day in a vacuum flask', () => {
    const t = temperature('nay-mam', 'phich', 200, 24);
    expect(t).toBeGreaterThan(31.5);
    expect(t).toBeLessThan(32.5);
  });

  it('keeps boiled seeds at room temperature and dry seeds near it', () => {
    expect(temperature('luoc', 'phich', 250, 24)).toBe(ROOM);
    expect(temperature('kho', 'phich', 250, 24) - ROOM).toBeLessThan(0.3);
  });

  it('loses most of the heat in an open beaker', () => {
    expect(temperature('nay-mam', 'coc', 200, 24) - ROOM).toBeLessThan(1);
  });

  it('warms more with more seeds and never cools', () => {
    expect(temperature('nay-mam', 'phich', 250, 12)).toBeGreaterThan(
      temperature('nay-mam', 'phich', 100, 12),
    );
    const t = trace('nay-mam', 'phich', 200, 24);
    expect(t.filter((v, i) => i > 0 && v < t[i - 1])).toEqual([]);
  });

  it('judges the design of the experiment', () => {
    const book = {
      test: /** @type {const} */ ('nay-mam'),
      control: /** @type {const} */ ('luoc'),
      flask: /** @type {const} */ ('phich'),
      grams: 200,
    };
    expect(describeHeat(book, 24).tone).toBe('ok');
    expect(describeHeat({ ...book, control: 'nay-mam' }, 24).tone).toBe('warn');
    expect(describeHeat({ ...book, flask: 'coc' }, 24).tone).toBe('warn');
  });
});

describe('lime water under the bell jars', () => {
  it('clouds only with germinating seeds', () => {
    expect(cloudiness('nay-mam', 60)).toBeGreaterThan(0.7);
    expect(cloudiness('luoc', 60)).toBeLessThan(0.05);
    expect(cloudiness('trong', 0)).toBe(0);
    expect(describeJar('nay-mam', 60).tone).toBe('ok');
    expect(describeJar('luoc', 60).tone).toBe('warn');
  });
});

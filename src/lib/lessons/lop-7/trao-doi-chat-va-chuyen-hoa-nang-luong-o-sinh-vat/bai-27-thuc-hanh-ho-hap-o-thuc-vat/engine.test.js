import { describe, expect, it } from 'vitest';
import { WAIT_MIN, cloudiness, looks, verdict } from './engine.js';

describe('germinating seeds and limewater', () => {
  it('starts clear in both jars', () => {
    expect(cloudiness('nay-mam', 0)).toBe(0);
    expect(cloudiness('trong', 0)).toBe(0);
  });

  it('turns the limewater of germinating seeds very cloudy within an hour', () => {
    expect(looks(cloudiness('nay-mam', WAIT_MIN))).toContain('váng dày');
    expect(looks(cloudiness('trong', WAIT_MIN))).toContain('hầu như không có váng');
  });

  it('shows dry seeds respire weakly and boiled seeds not at all', () => {
    const dry = cloudiness('kho', WAIT_MIN);
    expect(dry).toBeGreaterThan(cloudiness('trong', WAIT_MIN));
    expect(dry).toBeLessThan(0.4);
    expect(cloudiness('luoc', WAIT_MIN)).toBe(cloudiness('trong', WAIT_MIN));
  });

  it('never goes past full cloudiness', () => {
    expect(cloudiness('nay-mam', 500)).toBe(1);
  });

  it('draws the right conclusion for each set-up', () => {
    expect(verdict('nay-mam', 10).text).toContain('Chờ');
    expect(verdict('nay-mam', WAIT_MIN).text).toContain('carbon dioxide');
    expect(verdict('luoc', WAIT_MIN).text).toContain('không hô hấp');
    expect(verdict('kho', WAIT_MIN).text).toContain('rất yếu');
    expect(verdict('trong', WAIT_MIN).a).toBe(verdict('trong', WAIT_MIN).b);
  });
});

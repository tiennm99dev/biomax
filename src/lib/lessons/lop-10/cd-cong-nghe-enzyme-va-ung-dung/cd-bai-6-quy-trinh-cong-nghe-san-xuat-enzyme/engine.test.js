import { describe, expect, it } from 'vitest';
import { ROUTES, STAGES, attempt, batchReport, keptShare, lineShare } from './engine.js';

describe('the production line', () => {
  it('runs every route in order to the end, stage by stage', () => {
    const bad = ROUTES.filter((route) => {
      /** @type {string[]} */
      let done = [];
      for (const step of route.steps) {
        const out = attempt(route, done, step.id);
        if (!out.ok) return true;
        done = out.done;
      }
      const order = route.steps.map((s) => STAGES.indexOf(s.stage));
      const sorted = [...order].sort((a, b) => a - b);
      return (
        lineShare(route, done) !== 1 ||
        order.join() !== sorted.join() ||
        STAGES.some((stage) => !route.steps.some((s) => s.stage === stage))
      );
    });
    expect(bad).toEqual([]);
  });

  it('refuses a step tried too early and names what is missing', () => {
    const route = ROUTES[0];
    const out = attempt(route, [], route.steps[2].id);
    expect(out.ok).toBe(false);
    expect(out.done).toEqual([]);
    expect(out.text).toContain(route.steps[1].product);
  });

  it('refuses a finished step and every trap', () => {
    const route = ROUTES[1];
    const first = attempt(route, [], route.steps[0].id);
    expect(attempt(route, first.done, route.steps[0].id).ok).toBe(false);
    const passed = route.traps.filter((t) => attempt(route, [], t.id).ok);
    expect(passed).toEqual([]);
  });
});

describe('the batch', () => {
  it('keeps all the activity only when worked cold', () => {
    expect(keptShare(3)).toBe(100);
    expect(keptShare(5)).toBe(100);
    expect(keptShare(30)).toBe(50);
    expect(keptShare(45)).toBe(20);
  });

  it('reports a cold batch as good and a warm one as a warning', () => {
    expect(batchReport(4, 0).tone).toBe('ok');
    expect(batchReport(30, 2).tone).toBe('warn');
    expect(batchReport(30, 2).text).toContain('50%');
  });
});

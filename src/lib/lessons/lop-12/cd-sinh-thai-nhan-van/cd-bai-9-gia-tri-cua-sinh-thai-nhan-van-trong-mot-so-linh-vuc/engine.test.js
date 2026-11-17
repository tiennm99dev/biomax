import { describe, expect, it } from 'vitest';
import { NOW, advice, greenPerPerson, heatIsland, lifeIndex, planText, scores } from './engine.js';

describe('the green city model', () => {
  it('turns the green share into space per person', () => {
    expect(greenPerPerson(10)).toBe(10);
    expect(greenPerPerson(25)).toBe(25);
    expect(heatIsland(0)).toBe(4);
    expect(heatIsland(40)).toBe(2);
  });

  it('scores the city as it is now', () => {
    expect(scores(NOW).map((s) => s.value)).toEqual([40, 35, 25, 100]);
    expect(lifeIndex(NOW)).toBe(50);
    expect(advice(NOW).text).toContain('xử lí rác thải');
  });

  it('reaches full marks only with a balanced plan', () => {
    const best = { green: 28, transit: 80, recycle: 80 };
    expect(lifeIndex(best)).toBe(100);
    expect(advice(best).tone).toBe('ok');
  });

  it('warns that too much green land squeezes housing', () => {
    const tooGreen = { green: 50, transit: 80, recycle: 80 };
    expect(scores(tooGreen)[3].value).toBe(0);
    expect(lifeIndex(tooGreen)).toBe(75);
    expect(advice(tooGreen).tone).toBe('warn');
  });

  it('writes the plan with a decimal comma', () => {
    expect(planText({ green: 16, transit: 0, recycle: 0 })).toBe(
      'Cây xanh, mặt nước 16% diện tích, tức 16\u00a0m²/người; trung tâm nóng hơn ngoại ô khoảng 3,2\u00a0°C.',
    );
  });
});

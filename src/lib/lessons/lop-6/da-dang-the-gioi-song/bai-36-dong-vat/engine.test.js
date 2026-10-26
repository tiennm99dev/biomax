import { describe, expect, it } from 'vitest';
import { ANIMALS } from '../_shared/animal-groups.js';
import { QUIZ, checkBranch, checkGroup } from './engine.js';

describe('animal quiz', () => {
  it('asks about every animal once', () => {
    expect([...QUIZ].sort()).toEqual(ANIMALS.map((a) => a.id).sort());
  });

  it('checks the backbone step', () => {
    expect(checkBranch('ca-voi', 'co-xuong-song').ok).toBe(true);
    const wrong = checkBranch('tom', 'co-xuong-song');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('không có xương sống');
    expect(checkBranch('ran', 'khong-xuong-song').text).toContain('có bộ xương trong');
  });

  it('checks the group step and explains a wrong pick', () => {
    expect(checkGroup('ech', 'luong-cu').ok).toBe(true);
    const wrong = checkGroup('ca-voi', 'ca');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('thở bằng phổi');
  });
});

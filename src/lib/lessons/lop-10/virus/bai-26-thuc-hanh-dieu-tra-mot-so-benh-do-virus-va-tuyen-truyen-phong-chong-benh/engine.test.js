import { describe, expect, it } from 'vitest';
import {
  BAD_QUESTIONS,
  LEAFLET_BINS,
  LEAFLET_CARDS,
  TOPICS,
  countsFit,
  percentText,
  questionsFor,
  readCount,
  readResult,
  reviewForm,
  reviewNote,
  sampleCounts,
} from './engine.js';

const cum = TOPICS[0];
const questions = questionsFor(cum);
/** @param {string} id */
const question = (id) => {
  const q = questions.find((x) => x.id === id);
  if (!q) throw new Error(id);
  return q;
};

describe('the topics', () => {
  it('asks about each topic, with at least one true and one false route', () => {
    const bad = TOPICS.filter(
      (t) => !t.routes.some((r) => r.right === true) || !t.routes.some((r) => r.right === false),
    );
    expect(bad.map((t) => t.id)).toEqual([]);
  });

  it('never repeats a question id, in a topic or against the bad questions', () => {
    const bad = [];
    for (const t of TOPICS) {
      const ids = [...questionsFor(t).map((q) => q.id), ...BAD_QUESTIONS.map((q) => q.id)];
      if (new Set(ids).size !== ids.length) bad.push(t.id);
    }
    expect(bad).toEqual([]);
  });

  it('asks a plant topic about the field, not the family', () => {
    const plant = TOPICS.find((t) => t.subject === 'cay-trong');
    if (!plant) throw new Error('no plant topic');
    expect(questionsFor(plant).find((q) => q.id === 'da-mac')?.text).toContain('ruộng');
  });
});

describe('the form review', () => {
  const good = ['da-mac', 'trieu-chung', 'duong-lay', 'phong-chong'];

  it('passes a form that covers every required group', () => {
    const review = reviewForm(good, questions);
    expect(review.ready).toBe(true);
    expect(reviewNote(review).tone).toBe('ok');
  });

  it('names what a form misses', () => {
    const review = reviewForm(['da-mac'], questions);
    expect(review.missing).toEqual(['trieu-chung', 'duong-lay', 'phong-chong']);
    expect(reviewNote(review).text).toContain('đường lây');
  });

  it('rejects a complete form holding a badly written question', () => {
    const review = reviewForm([...good, 'mo-ho'], questions);
    expect(review.ready).toBe(false);
    const note = reviewNote(review);
    expect(note.tone).toBe('warn');
    expect(note.text).toContain('mơ hồ');
  });
});

describe('the tally', () => {
  it('reads a typed count as a whole number within the forms', () => {
    expect(readCount('34', 40)).toBe(34);
    expect(readCount('55', 40)).toBe(40);
    expect(readCount('-3', 40)).toBe(0);
    expect(readCount('7.9', 40)).toBe(7);
    expect(readCount('', 40)).toBe(0);
    expect(readCount('e', 40)).toBe(0);
  });

  it('writes percentages with a decimal comma', () => {
    expect(percentText(1, 3)).toBe('33,3%');
    expect(percentText(10, 40)).toBe('25%');
    expect(percentText(0, 0)).toBe('0%');
  });

  it('demands a single-choice question to add up to the forms', () => {
    expect(countsFit(question('da-mac'), [10, 25, 5], 40)).toBe(true);
    expect(countsFit(question('da-mac'), [10, 25, 4], 40)).toBe(false);
    expect(countsFit(question('trieu-chung'), [40, 30, 20, 10], 40)).toBe(true);
    expect(countsFit(question('trieu-chung'), [41, 30, 20, 10], 40)).toBe(false);
  });

  it('reads the top answer and flags a false belief', () => {
    const read = readResult(question('duong-lay'), [32, 20, 8], 40);
    expect(read.text).toContain('"Giọt dịch khi ho, hắt hơi": 32/40 phiếu, chiếm 80%');
    expect(read.text).toContain('20% phiếu hiểu sai');
    expect(read.text).toContain('chọn đường lây "Muỗi đốt"');
  });

  it('does not flag anything when nobody holds the false belief', () => {
    const read = readResult(question('duong-lay'), [32, 20, 0], 40);
    expect(read.tone).toBe('ok');
    expect(read.text).not.toContain('hiểu sai');
  });

  it('asks for data before reading', () => {
    expect(readResult(question('da-mac'), [0, 0, 0], 0).tone).toBe('info');
    expect(readResult(question('trieu-chung'), [0, 0, 0, 0], 40).tone).toBe('info');
    expect(readResult(question('da-mac'), [1, 1, 1], 40).tone).toBe('warn');
  });
});

describe('the sample answers', () => {
  it('fits every question of every topic at several sizes', () => {
    const bad = [];
    for (const t of TOPICS) {
      for (const q of questionsFor(t)) {
        for (const forms of [7, 20, 40, 100]) {
          const counts = sampleCounts(q, forms);
          if (counts.length !== q.options.length) bad.push(`${t.id} ${q.id} length`);
          if (!countsFit(q, counts, forms)) bad.push(`${t.id} ${q.id} ${forms}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });
});

describe('the leaflet cards', () => {
  it('fills both bins', () => {
    const sizes = LEAFLET_BINS.map((b) => LEAFLET_CARDS.filter((c) => c.bin === b.id).length);
    expect(sizes).toEqual([4, 4]);
  });
});

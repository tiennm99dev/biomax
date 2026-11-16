import { describe, expect, it } from 'vitest';
import {
  AGENTS,
  ITEMS,
  VIOLATIONS,
  ZONES,
  classify,
  inspect,
  progress,
  tallyByAgent,
} from './engine.js';

describe('the kitchen game', () => {
  it('puts every thing in a known area, with a reason, and a fix for each violation', () => {
    const zones = ZONES.map((z) => z.id);
    const bad = ITEMS.filter((i) => !zones.includes(i.zone) || !i.why || (i.agent && !i.fix));
    expect(bad).toEqual([]);
    expect(new Set(ITEMS.map((i) => i.id)).size).toBe(ITEMS.length);
  });

  it('has violations of every group of agents and things done right in every area', () => {
    expect(AGENTS.filter((a) => !VIOLATIONS.some((v) => v.agent === a.id))).toEqual([]);
    expect(ZONES.filter((z) => !ITEMS.some((i) => i.zone === z.id && !i.agent))).toEqual([]);
  });

  it('asks for the group only when the thing is a violation', () => {
    expect(inspect('rua-rau')).toMatchObject({ tone: 'ok', needsAgent: false });
    expect(inspect('ruoi-bau')).toMatchObject({ needsAgent: true });
  });

  it('accepts only the right group of agents', () => {
    expect(classify('coc-vo', 'vat-li').ok).toBe(true);
    expect(classify('coc-vo', 'hoa-hoc')).toMatchObject({ ok: false, tone: 'warn' });
    expect(classify('khoai-mam', 'hoa-hoc').ok).toBe(true);
    expect(classify('rua-rau', 'sinh-hoc').ok).toBe(false);
  });

  it('counts the violations found and ends when all are found', () => {
    expect(progress(['ruoi-bau'], 0).text).toContain(`1 trên ${VIOLATIONS.length}`);
    const all = VIOLATIONS.map((v) => v.id);
    expect(progress(all, 2)).toMatchObject({ tone: 'ok' });
    expect(progress(all, 2).text).toContain('2 lần chọn chưa đúng');
    const sum = tallyByAgent(all).reduce((s, a) => s + a.found, 0);
    expect(sum).toBe(VIOLATIONS.length);
  });
});

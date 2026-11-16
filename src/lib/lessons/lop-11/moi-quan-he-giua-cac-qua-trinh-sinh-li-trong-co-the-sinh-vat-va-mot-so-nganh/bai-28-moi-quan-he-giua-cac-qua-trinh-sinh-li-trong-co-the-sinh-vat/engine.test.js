import { describe, expect, it } from 'vitest';
import { BOX, NETWORKS, cascade, depth, hitText, linkCurve, summary } from './engine.js';

describe('the network of physiological processes', () => {
  it('links only processes that exist', () => {
    const bad = [];
    for (const net of Object.values(NETWORKS)) {
      const ids = new Set(net.processes.map((p) => p.id));
      for (const l of net.links) if (!ids.has(l.from) || !ids.has(l.to)) bad.push(l);
    }
    expect(bad).toEqual([]);
  });

  it('lets any stopped process reach every other one', () => {
    const short = [];
    for (const [org, net] of Object.entries(NETWORKS)) {
      for (const p of net.processes) {
        if (cascade(net, p.id).length !== net.processes.length - 1) short.push(`${org}/${p.id}`);
      }
    }
    expect(short).toEqual([]);
  });

  it('hits the processes a stopped root supplies first', () => {
    const net = NETWORKS['thuc-vat'];
    const hits = cascade(net, 'hap-thu');
    expect(hits[0]).toMatchObject({ id: 'van-chuyen', step: 1 });
    const step2 = hits
      .filter((h) => h.step === 2)
      .map((h) => h.id)
      .sort();
    expect(step2).toEqual(['ho-hap', 'quang-hop', 'sinh-truong', 'thoat-hoi-nuoc']);
    expect(hits.find((h) => h.id === 'sinh-san')?.step).toBe(3);
    expect(depth(hits)).toBe(3);
  });

  it('gives each hit its causes from the step before', () => {
    const net = NETWORKS['dong-vat'];
    const hits = cascade(net, 'tieu-hoa');
    const circ = hits.find((h) => h.id === 'tuan-hoan');
    expect(circ?.step).toBe(1);
    expect(hitText(net, /** @type {any} */ (circ))).toContain('chất dinh dưỡng');
    expect(hits.find((h) => h.id === 'chuyen-hoa')?.causes.map((l) => l.from)).toEqual([
      'tuan-hoan',
    ]);
  });

  it('reports partial and full spread', () => {
    const net = NETWORKS['dong-vat'];
    expect(summary(net, 'tieu-hoa', 1)).toContain('1/7');
    expect(summary(net, 'tieu-hoa', 9)).toContain('7/7');
  });
});

describe('link drawing', () => {
  it('starts and ends outside the two boxes', () => {
    const { start, end } = linkCurve({ x: 0, y: 0 }, { x: 200, y: 0 });
    expect(start.x).toBeGreaterThanOrEqual(BOX.w / 2);
    expect(end.x).toBeLessThanOrEqual(200 - BOX.w / 2);
  });

  it('never runs a link through a third process box', () => {
    const crossings = [];
    for (const [org, net] of Object.entries(NETWORKS)) {
      for (const l of net.links) {
        const { start, c, end } = linkCurve(
          net.processes.find((p) => p.id === l.from) ?? { x: 0, y: 0 },
          net.processes.find((p) => p.id === l.to) ?? { x: 0, y: 0 },
        );
        for (const p of net.processes) {
          if (p.id === l.from || p.id === l.to) continue;
          for (let i = 0; i <= 50; i++) {
            const t = i / 50;
            const x = (1 - t) ** 2 * start.x + 2 * (1 - t) * t * c.x + t * t * end.x;
            const y = (1 - t) ** 2 * start.y + 2 * (1 - t) * t * c.y + t * t * end.y;
            if (Math.abs(x - p.x) < BOX.w / 2 && Math.abs(y - p.y) < BOX.h / 2) {
              crossings.push(`${org}: ${l.from} → ${l.to} qua ${p.id}`);
              break;
            }
          }
        }
      }
    }
    expect(crossings).toEqual([]);
  });

  it('keeps boxes apart', () => {
    const overlaps = [];
    for (const [org, net] of Object.entries(NETWORKS)) {
      for (const p of net.processes) {
        for (const q of net.processes) {
          if (p.id < q.id && Math.abs(p.x - q.x) < BOX.w && Math.abs(p.y - q.y) < BOX.h + 8) {
            overlaps.push(`${org}: ${p.id}, ${q.id}`);
          }
        }
      }
    }
    expect(overlaps).toEqual([]);
  });
});

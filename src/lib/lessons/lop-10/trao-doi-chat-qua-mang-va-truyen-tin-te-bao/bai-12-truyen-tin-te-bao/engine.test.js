import { describe, expect, it } from 'vitest';
import {
  FORMS,
  FORM_CARDS,
  NO_BLOCKS,
  SCENARIOS,
  STAGES,
  outcome,
  pointAt,
  reachOf,
  scenarioOf,
  stageAt,
  stopPoint,
  stoppedStage,
} from './engine.js';

describe('a signal along its route', () => {
  it('passes the three stages in order on every route', () => {
    for (const s of SCENARIOS) {
      const seen = s.nodes.map((n) => n.stage).filter((v) => v !== null);
      const order = STAGES.map((st) => st.id);
      expect([...new Set(seen)]).toEqual(order);
      expect(s.nodes[0].stage).toBe(null);
    }
  });

  it('reaches the end with nothing blocked', () => {
    for (const s of SCENARIOS) {
      expect(reachOf(s.nodes, NO_BLOCKS)).toBe(s.nodes.length - 1);
      expect(outcome(s, NO_BLOCKS)).toEqual({ tone: 'ok', text: s.response });
    }
  });

  it('stops before the first blocked stage', () => {
    const { nodes } = scenarioOf('gan');
    expect(reachOf(nodes, { ...NO_BLOCKS, 'tiep-nhan': true })).toBe(0);
    expect(reachOf(nodes, { ...NO_BLOCKS, 'truyen-tin': true })).toBe(1);
    expect(reachOf(nodes, { ...NO_BLOCKS, 'dap-ung': true })).toBe(4);
    expect(reachOf(nodes, { ...NO_BLOCKS, 'truyen-tin': true, 'dap-ung': true })).toBe(1);
  });

  it('rests just short of a blocked node, outside the cell for a blocked membrane receptor', () => {
    const gan = scenarioOf('gan').nodes;
    expect(stopPoint(gan, NO_BLOCKS)).toBe(gan.length - 1);
    const blocked = { ...NO_BLOCKS, 'tiep-nhan': true };
    expect(pointAt(gan, stopPoint(gan, blocked)).y).toBeLessThan(gan[1].y);
    const than = scenarioOf('than').nodes;
    expect(pointAt(than, stopPoint(than, blocked)).y).toBeGreaterThan(gan[1].y);
  });

  it('explains the earliest block when several are set', () => {
    const blocks = { ...NO_BLOCKS, 'truyen-tin': true, 'dap-ung': true };
    const s = scenarioOf('than');
    expect(stoppedStage(blocks)).toBe('truyen-tin');
    expect(outcome(s, blocks).text).toBe(s.blockedTexts['truyen-tin']);
  });

  it('gives different responses to the same signal in different cells', () => {
    expect(scenarioOf('gan').response).not.toBe(scenarioOf('tim').response);
  });
});

describe('moving along the route', () => {
  const { nodes } = scenarioOf('gan');

  it('walks from node to node and stays on the route', () => {
    expect(pointAt(nodes, 0)).toEqual({ x: nodes[0].x, y: nodes[0].y });
    expect(pointAt(nodes, 99)).toEqual({ x: nodes[5].x, y: nodes[5].y });
    expect(pointAt(nodes, 0.5).y).toBe((nodes[0].y + nodes[1].y) / 2);
  });

  it('reports the stage at each point', () => {
    expect(stageAt(nodes, 0.5)).toBe(null);
    expect(stageAt(nodes, 1)).toBe('tiep-nhan');
    expect(stageAt(nodes, 3)).toBe('truyen-tin');
    expect(stageAt(nodes, 5)).toBe('dap-ung');
  });
});

describe('forms of signalling', () => {
  it('puts every card in a real bin and uses every bin', () => {
    const bins = FORMS.map((f) => f.id);
    expect(FORM_CARDS.filter((c) => !bins.includes(c.bin))).toEqual([]);
    expect(bins.filter((b) => !FORM_CARDS.some((c) => c.bin === b))).toEqual([]);
  });
});

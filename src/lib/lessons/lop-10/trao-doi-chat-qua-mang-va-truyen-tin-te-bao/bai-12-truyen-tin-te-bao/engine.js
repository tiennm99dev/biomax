/**
 * The three stages of signalling inside a cell as a route of molecules, which
 * a signal follows until it reaches a blocked stage, and the bins of the
 * forms of cell-to-cell signalling. No DOM here, so all of it is tested in Node.
 */

/** @typedef {'tiep-nhan' | 'truyen-tin' | 'dap-ung'} StageId */

/** @type {{ id: StageId, name: string }[]} */
export const STAGES = [
  { id: 'tiep-nhan', name: 'Tiếp nhận' },
  { id: 'truyen-tin', name: 'Truyền tin nội bào' },
  { id: 'dap-ung', name: 'Đáp ứng' },
];

/**
 * @typedef {{ name: string, x: number, y: number, stage: StageId | null }} RouteNode
 * @typedef {{
 *   id: string;
 *   name: string;
 *   signal: string;
 *   receptor: string;
 *   hasNucleus: boolean;
 *   nodes: RouteNode[];
 *   blockLabels: Record<StageId, string>;
 *   blockedTexts: Record<StageId, string>;
 *   response: string;
 * }} Scenario
 */

/** @param {string} target @returns {RouteNode[]} */
const surfaceRoute = (target) => [
  { name: 'Tín hiệu', x: 60, y: 14, stage: null },
  { name: 'Thụ thể', x: 60, y: 58, stage: 'tiep-nhan' },
  { name: 'Protein 1', x: 120, y: 122, stage: 'truyen-tin' },
  { name: 'Protein 2', x: 190, y: 150, stage: 'truyen-tin' },
  { name: 'Protein 3', x: 250, y: 118, stage: 'truyen-tin' },
  { name: target, x: 305, y: 180, stage: 'dap-ung' },
];

const SURFACE_LABELS = {
  'tiep-nhan': 'Khoá thụ thể',
  'truyen-tin': 'Hỏng protein truyền tin',
  'dap-ung': 'Hỏng protein đích',
};

const SURFACE_TEXTS = {
  'tiep-nhan':
    'Tín hiệu không gắn được với thụ thể nên không đi vào được tế bào. Tế bào không có thụ thể phù hợp cũng không nhận được tín hiệu.',
  'truyen-tin':
    'Thụ thể đã nhận tín hiệu nhưng chuỗi protein bị đứt, thông tin không đến được protein đích nên tế bào không đáp ứng.',
  'dap-ung': 'Thông tin đã đi hết chuỗi nhưng protein đích bị hỏng, tế bào không tạo ra đáp ứng.',
};

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'gan',
    name: 'Adrenaline, tế bào gan',
    signal: 'Adrenaline tan trong nước, không đi qua được lớp kép phospholipid.',
    receptor: 'Thụ thể màng',
    hasNucleus: false,
    nodes: surfaceRoute('Enzyme'),
    blockLabels: SURFACE_LABELS,
    blockedTexts: SURFACE_TEXTS,
    response:
      'Tế bào gan đáp ứng: enzyme được hoạt hoá, phân giải glycogen thành glucose đưa vào máu.',
  },
  {
    id: 'tim',
    name: 'Adrenaline, tế bào cơ tim',
    signal: 'Cùng là adrenaline, thụ thể vẫn nằm trên màng.',
    receptor: 'Thụ thể màng',
    hasNucleus: false,
    nodes: surfaceRoute('Protein đích'),
    blockLabels: SURFACE_LABELS,
    blockedTexts: SURFACE_TEXTS,
    response:
      'Tế bào cơ tim đáp ứng: co mạnh và nhanh hơn. Cùng một tín hiệu nhưng đáp ứng khác tế bào gan, vì mỗi loại tế bào có protein truyền tin và protein đáp ứng riêng.',
  },
  {
    id: 'than',
    name: 'Aldosterone, tế bào thận',
    signal: 'Aldosterone là hormone steroid tan trong lipid, đi thẳng qua lớp kép phospholipid.',
    receptor: 'Thụ thể nội bào',
    hasNucleus: true,
    nodes: [
      { name: 'Tín hiệu', x: 60, y: 14, stage: null },
      { name: 'Thụ thể', x: 95, y: 122, stage: 'tiep-nhan' },
      { name: 'Vào nhân', x: 180, y: 158, stage: 'truyen-tin' },
      { name: 'Gene', x: 210, y: 200, stage: 'truyen-tin' },
      { name: 'mRNA', x: 280, y: 170, stage: 'dap-ung' },
      { name: 'Ribosome', x: 305, y: 110, stage: 'dap-ung' },
    ],
    blockLabels: {
      'tiep-nhan': 'Khoá thụ thể nội bào',
      'truyen-tin': 'Chặn phức hợp vào nhân',
      'dap-ung': 'Chặn tổng hợp protein',
    },
    blockedTexts: {
      'tiep-nhan':
        'Aldosterone đã đi qua màng nhưng không gắn được với thụ thể trong tế bào chất, nên không tạo được phức hợp.',
      'truyen-tin': 'Phức hợp đã được tạo ra nhưng không vào được nhân, gene không được hoạt hoá.',
      'dap-ung':
        'Gene đã được hoạt hoá nhưng quá trình tổng hợp protein bị chặn, tế bào không có đáp ứng.',
    },
    response:
      'Tế bào thận đáp ứng: gene được hoạt hoá, mRNA ra tế bào chất và ribosome dùng mRNA để tổng hợp protein.',
  },
];

/**
 * @param {string} id
 * @returns {Scenario}
 */
export function scenarioOf(id) {
  const s = SCENARIOS.find((v) => v.id === id);
  if (!s) throw new Error(`unknown scenario ${id}`);
  return s;
}

/** @typedef {Record<StageId, boolean>} Blocks */

/** @type {Blocks} */
export const NO_BLOCKS = { 'tiep-nhan': false, 'truyen-tin': false, 'dap-ung': false };

/**
 * The index of the last node the signal reaches.
 * @param {RouteNode[]} nodes
 * @param {Blocks} blocks
 */
export function reachOf(nodes, blocks) {
  const stop = nodes.findIndex((n) => n.stage !== null && blocks[n.stage]);
  return stop < 0 ? nodes.length - 1 : stop - 1;
}

/**
 * Where the moving signal comes to rest, in nodes from the start: at the end
 * of the route, or just short of the first blocked node.
 * @param {RouteNode[]} nodes
 * @param {Blocks} blocks
 */
export function stopPoint(nodes, blocks) {
  const reach = reachOf(nodes, blocks);
  return reach === nodes.length - 1 ? reach : reach + 0.7;
}

/**
 * The stage that stopped the signal, or null when it ran the whole route.
 * @param {Blocks} blocks
 * @returns {StageId | null}
 */
export function stoppedStage(blocks) {
  return STAGES.find((s) => blocks[s.id])?.id ?? null;
}

/**
 * The result of a finished run.
 * @param {Scenario} scenario
 * @param {Blocks} blocks
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function outcome(scenario, blocks) {
  const stage = stoppedStage(blocks);
  if (stage) return { tone: 'warn', text: scenario.blockedTexts[stage] };
  return { tone: 'ok', text: scenario.response };
}

/**
 * The point along the route at `progress` nodes from the start.
 * @param {RouteNode[]} nodes
 * @param {number} progress
 * @returns {{ x: number, y: number }}
 */
export function pointAt(nodes, progress) {
  const p = Math.max(0, Math.min(nodes.length - 1, progress));
  const i = Math.min(nodes.length - 2, Math.floor(p));
  const t = p - i;
  return {
    x: nodes[i].x + (nodes[i + 1].x - nodes[i].x) * t,
    y: nodes[i].y + (nodes[i + 1].y - nodes[i].y) * t,
  };
}

/**
 * The stage the signal is in at `progress`: null before it meets a receptor.
 * @param {RouteNode[]} nodes
 * @param {number} progress
 * @returns {StageId | null}
 */
export function stageAt(nodes, progress) {
  const i = Math.max(0, Math.min(nodes.length - 1, Math.floor(progress)));
  return nodes[i].stage;
}

export const FORMS = [
  { id: 'truc-tiep', label: 'Trực tiếp' },
  { id: 'can-tiet', label: 'Cận tiết' },
  { id: 'noi-tiet', label: 'Nội tiết' },
  { id: 'synapse', label: 'Qua synapse' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const FORM_CARDS = [
  {
    id: 'cau-sinh-chat',
    label: 'Chất đi qua cầu sinh chất giữa hai tế bào lá cây',
    bin: 'truc-tiep',
    why: 'Cầu sinh chất nối thẳng hai tế bào thực vật liền nhau: truyền tin trực tiếp.',
  },
  {
    id: 'moi-noi',
    label: 'Ion đi qua mối nối giữa hai tế bào cơ tim sát nhau',
    bin: 'truc-tiep',
    why: 'Mối nối giữa hai tế bào động vật tiếp xúc nhau: truyền tin trực tiếp.',
  },
  {
    id: 'yeu-to-tang-truong',
    label: 'Yếu tố tăng trưởng do một tế bào tiết ra, tác động lên các tế bào ở gần',
    bin: 'can-tiet',
    why: 'Tín hiệu chỉ khuếch tán đến các tế bào lân cận: truyền tin cận tiết.',
  },
  {
    id: 'insulin',
    label: 'Insulin từ tuyến tuỵ theo máu đến tế bào gan',
    bin: 'noi-tiet',
    why: 'Hormone đi theo máu đến tế bào đích ở xa: truyền tin nội tiết.',
  },
  {
    id: 'aldosterone',
    label: 'Aldosterone từ tuyến thượng thận theo máu đến thận',
    bin: 'noi-tiet',
    why: 'Hormone đi theo máu đến tế bào đích ở xa: truyền tin nội tiết.',
  },
  {
    id: 'neuron',
    label: 'Chất dẫn truyền thần kinh đi từ neuron sang tế bào cơ',
    bin: 'synapse',
    why: 'Chất dẫn truyền thần kinh đi qua khe synapse đến tế bào đích.',
  },
];

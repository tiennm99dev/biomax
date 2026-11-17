/**
 * Phylogenetic trees (cây phát sinh chủng loại) drawn against geological
 * time, at three zoom levels: vertebrates over the last 450 million years,
 * the apes over the last 22 million years and the human lineage over the
 * last 7 million years. Times are in millions of years ago (triệu năm
 * trước) and rounded; divergence times are estimates from molecular and
 * fossil evidence.
 */

import { fmt, formatNumber, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {object} TreeNode
 * @property {string} id
 * @property {number} time when the lineage splits (internal node) or, for a tip, when its branch leaves the parent
 * @property {string} [name] tip name
 * @property {number} [start] first appearance of an extinct tip, drawn as a bar
 * @property {number} [end] when the tip ended; 0 for a living species
 * @property {string} [info] what the tip is known for
 * @property {TreeNode[]} [children]
 */

/**
 * @typedef {object} Tree
 * @property {string} id
 * @property {string} label
 * @property {number} span oldest time on the axis
 * @property {number[]} ticks
 * @property {TreeNode} root
 */

/** The eras of the last 541 million years, oldest first. */
export const ERAS = [
  { id: 'co-sinh', name: 'Đại Cổ sinh', from: 541, to: 252, color: '#e0e7ff' },
  { id: 'trung-sinh', name: 'Đại Trung sinh', from: 252, to: 66, color: '#dcfce7' },
  { id: 'tan-sinh', name: 'Đại Tân sinh', from: 66, to: 0, color: '#fef3c7' },
];

/**
 * A tip: a species or group at the end of a branch.
 * @param {string} id @param {string} name @param {number} time @param {string} info
 * @param {{ start?: number, end?: number }} [life]
 * @returns {TreeNode}
 */
const tip = (id, name, time, info, life = {}) => ({
  id,
  name,
  time,
  start: life.start ?? time,
  end: life.end ?? 0,
  info,
});

/**
 * @param {string} id @param {number} time @param {TreeNode[]} children
 * @returns {TreeNode}
 */
const split = (id, time, children) => ({ id, time, children });

/** @type {Tree[]} */
export const TREES = [
  {
    id: 'xuong-song',
    label: 'Động vật có xương sống',
    span: 450,
    ticks: [400, 300, 200, 100, 0],
    root: split('r0', 430, [
      tip(
        'ca-chep',
        'Cá chép',
        430,
        'Cá vây tia: vây là các tia xương mảnh, sống hoàn toàn dưới nước.',
      ),
      split('r1', 415, [
        tip(
          'ca-vay-tay',
          'Cá vây tay',
          415,
          'Cá vây thuỳ: gốc vây có xương và cơ khoẻ, họ hàng gần với tổ tiên của động vật bốn chân.',
        ),
        split('r2', 352, [
          tip(
            'ech',
            'Ếch',
            352,
            'Lưỡng cư: sống ở cạn nhưng sinh sản trong nước, trứng không có vỏ.',
          ),
          split('r3', 312, [
            split('r4', 280, [
              tip(
                'than-lan',
                'Thằn lằn',
                280,
                'Bò sát: trứng có vỏ, da phủ vảy sừng, hoàn toàn sống ở cạn.',
              ),
              split('r6', 245, [
                tip('ca-sau', 'Cá sấu', 245, 'Bò sát có họ hàng gần với chim hơn với thằn lằn.'),
                split('r7', 170, [
                  tip(
                    'khung-long',
                    'Khủng long bạo chúa †',
                    170,
                    'Khủng long ăn thịt cuối kỉ Phấn trắng; tuyệt chủng trong đợt tuyệt chủng hàng loạt cách đây khoảng 66 triệu năm.',
                    { start: 68, end: 66 },
                  ),
                  tip(
                    'chim',
                    'Chim',
                    170,
                    'Chim là nhánh khủng long còn sống sót: có lông vũ, chi trước biến thành cánh.',
                  ),
                ]),
              ]),
            ]),
            split('r5', 90, [
              tip('chuot', 'Chuột', 90, 'Thú gặm nhấm: có lông mao, nuôi con bằng sữa.'),
              tip('nguoi', 'Người', 90, 'Thú linh trưởng: não phát triển, đi thẳng bằng hai chân.'),
            ]),
          ]),
        ]),
      ]),
    ]),
  },
  {
    id: 'linh-truong',
    label: 'Vượn người và người',
    span: 22,
    ticks: [20, 15, 10, 5, 0],
    root: split('p0', 20, [
      tip('vuon', 'Vượn', 20, 'Vượn (họ Vượn): tay rất dài, chuyền cành; sống ở Đông Nam Á.'),
      split('p1', 16, [
        tip(
          'duoi-uoi',
          'Đười ươi',
          16,
          'Vượn người lớn ở Đông Nam Á (Borneo, Sumatra), sống trên cây.',
        ),
        split('p2', 9, [
          tip('khi-dot', 'Khỉ đột', 9, 'Vượn người lớn nhất, sống ở rừng châu Phi.'),
          split('p3', 6, [
            tip(
              'tinh-tinh',
              'Tinh tinh',
              6,
              'Họ hàng gần nhất của người: hệ gene giống người khoảng 98 – 99%, cytochrome c giống hệt.',
            ),
            tip(
              'nguoi',
              'Người',
              6,
              'Đi thẳng bằng hai chân, não lớn, có tiếng nói và tư duy trừu tượng.',
            ),
          ]),
        ]),
      ]),
    ]),
  },
  {
    id: 'loai-nguoi',
    label: 'Phát sinh loài người',
    span: 7,
    ticks: [6, 5, 4, 3, 2, 1, 0],
    root: split('h0', 6, [
      tip(
        'tinh-tinh',
        'Tinh tinh',
        6,
        'Tinh tinh và người có chung tổ tiên khoảng 6 triệu năm trước.',
      ),
      split('h1', 5, [
        tip(
          'ardi',
          'Ardipithecus †',
          5,
          'Ardipithecus ramidus, hoá thạch khoảng 4,4 triệu năm: ăn tạp, đi thẳng nhưng vẫn leo trèo giỏi, ngón chân cái cầm nắm được.',
          { start: 4.5, end: 4.3 },
        ),
        split('h2', 4.2, [
          tip(
            'aus',
            'Australopithecus †',
            4.2,
            'Người vượn phương Nam (4 – 2,5 triệu năm trước), nổi tiếng là "Lucy" (A. afarensis): đi thẳng bằng hai chân, ngón tay cái linh hoạt, dùng cành cây, hòn đá có sẵn làm công cụ.',
            { start: 4, end: 2.5 },
          ),
          split('h3', 2.8, [
            tip(
              'habilis',
              'H. habilis †',
              2.8,
              'Người khéo léo (khoảng 2,5 triệu năm trước): hộp sọ 600 – 800 cm³, biết chế tác công cụ bằng đá, sống thành đàn, săn bắt và hái lượm.',
              { start: 2.5, end: 1.5 },
            ),
            split('h4', 2, [
              tip(
                'erectus',
                'H. erectus †',
                2,
                'Người đứng thẳng (từ khoảng 1,9 triệu năm trước, tồn tại khoảng 1,8 triệu năm): đi thẳng nhanh nhẹn, biết dùng lửa, di cư khỏi châu Phi sang châu Á, châu Âu.',
                { start: 1.9, end: 0.1 },
              ),
              split('h5', 0.65, [
                tip(
                  'neanderthal',
                  'H. neanderthalensis †',
                  0.65,
                  'Người Neanderthal ở châu Âu, Tây Á: hộp sọ trung bình khoảng 1 450 cm³, công cụ đá silic, biết dùng lửa, sống trong hang; là nhánh riêng, không phải tổ tiên của người hiện đại.',
                  { start: 0.4, end: 0.03 },
                ),
                tip(
                  'sapiens',
                  'H. sapiens',
                  0.65,
                  'Người hiện đại xuất hiện ở châu Phi cách đây khoảng 300 000 – 200 000 năm, rời châu Phi khoảng 60 000 năm trước: công cụ tinh xảo, tiếng nói, văn hoá, nghệ thuật.',
                  { start: 0.3, end: 0 },
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  },
];

/** @param {TreeNode} node @returns {TreeNode[]} */
export function tipsOf(node) {
  return node.children ? node.children.flatMap(tipsOf) : [node];
}

/**
 * The nodes from the root down to the node with `id`, both included.
 * @param {TreeNode} root @param {string} id
 * @returns {TreeNode[]}
 */
export function pathTo(root, id) {
  if (root.id === id) return [root];
  for (const c of root.children ?? []) {
    const p = pathTo(c, id);
    if (p.length) return [root, ...p];
  }
  return [];
}

/**
 * The most recent common ancestor of two tips.
 * @param {TreeNode} root @param {string} a @param {string} b
 */
export function commonAncestor(root, a, b) {
  const pa = pathTo(root, a);
  const pb = pathTo(root, b);
  if (!pa.length || !pb.length) throw new RangeError('unknown tip');
  let i = 0;
  while (i < pa.length && i < pb.length && pa[i] === pb[i]) i++;
  return pa[i - 1];
}

/**
 * @typedef {object} Placed
 * @property {TreeNode} node
 * @property {number} x where the node sits (a tip: where its branch reaches its start)
 * @property {number} y
 * @property {number} px x of the parent node (the node's own x for the root)
 * @property {number} [endX] a tip's end
 */

/**
 * Positions of every node: time runs left (old) to right (now), tips one
 * row each, an internal node half-way between its first and last child.
 * @param {Tree} tree
 * @param {{ left: number, right: number, top: number, row: number }} box
 * @returns {Placed[]}
 */
export function layoutTree(tree, box) {
  const xOf = (/** @type {number} */ t) =>
    tidy(box.left + ((tree.span - t) / tree.span) * (box.right - box.left), 3);
  /** @type {Placed[]} */
  const out = [];
  let row = 0;
  /** @param {TreeNode} node @param {number} px @returns {number} y */
  const visit = (node, px) => {
    if (!node.children) {
      const y = box.top + row * box.row;
      row++;
      out.push({ node, x: xOf(node.start ?? node.time), y, px, endX: xOf(node.end ?? 0) });
      return y;
    }
    const x = xOf(node.time);
    const at = out.length;
    const ys = node.children.map((c) => visit(c, x));
    const y = (ys[0] + ys[ys.length - 1]) / 2;
    out.splice(at, 0, { node, x, y, px });
    return y;
  };
  visit(tree.root, xOf(tree.root.time));
  return out;
}

/**
 * A time written for people: "90 triệu năm", "650 nghìn năm", "30 nghìn năm".
 * @param {number} t millions of years
 */
export function timeText(t) {
  if (t >= 1) return `${formatNumber(t, 1)} triệu năm`;
  return `${fmt(Math.round(t * 1000))} nghìn năm`;
}

/**
 * The era a time falls in.
 * @param {number} t millions of years ago
 */
export function eraOf(t) {
  if (t > 541) return 'đại Nguyên sinh';
  const era = ERAS.find((e) => t <= e.from && t > e.to) ?? ERAS[ERAS.length - 1];
  return era.name.replace('Đại', 'đại');
}

/**
 * What the widget says about the chosen tips.
 * @param {Tree} tree
 * @param {string[]} chosen one or two tip ids
 */
export function treeNote(tree, chosen) {
  const tips = tipsOf(tree.root);
  const named = chosen.map((id) => tips.find((t) => t.id === id)).filter((t) => t !== undefined);
  if (named.length === 0)
    return 'Chạm vào tên hai loài để tìm tổ tiên chung gần nhất của chúng trên cây phát sinh chủng loại.';
  if (named.length === 1) {
    const t = named[0];
    const gone = (t.end ?? 0) > 0 ? ` Đã tuyệt chủng cách đây khoảng ${timeText(t.end ?? 0)}.` : '';
    return `${t.name}: ${t.info}${gone} Chạm thêm một loài nữa để so sánh.`;
  }
  const [a, b] = named;
  const anc = commonAncestor(tree.root, a.id, b.id);
  const closer = tips.filter((t) => t.id !== a.id && t.id !== b.id && pathTo(anc, t.id).length > 0);
  const tail =
    closer.length === 0
      ? `Không có loài nào khác trên cây thuộc nhánh này: ${a.name} và ${b.name} là họ hàng gần nhất của nhau.`
      : `Cùng nhánh này còn ${closer.map((t) => t.name).join(', ')}.`;
  return `Tổ tiên chung gần nhất của ${a.name} và ${b.name} sống cách đây khoảng ${timeText(anc.time)} (${eraOf(anc.time)}). ${tail} Hai loài tách nhau càng muộn thì quan hệ họ hàng càng gần.`;
}

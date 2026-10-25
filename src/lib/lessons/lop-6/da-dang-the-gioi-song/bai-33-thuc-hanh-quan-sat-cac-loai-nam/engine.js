/**
 * Logic for the fungi practical: the labelled diagrams of a cap mushroom and
 * of black bread mould for the hotspot viewer, and a simple model of how fast
 * mould covers a slice of bread kept moist or dry, warm or in the fridge.
 */

/** @typedef {import('#lib/domain/diagrams.js').Diagram} Diagram */
/** @typedef {import('#lib/domain/diagrams.js').Shape} Shape */

/** @param {number} cx @param {number} cy @param {number} r @param {string} fill @returns {Shape} */
const dot = (cx, cy, r, fill) => ({ kind: 'circle', cx, cy, r, fill });

/** @type {Diagram} */
export const MUSHROOM = {
  id: 'nam-mu',
  title: 'Cấu tạo nấm mũ (nấm đảm)',
  width: 420,
  height: 300,
  shapes: [
    { kind: 'rect', x: 0, y: 212, w: 420, h: 88, fill: '#d6b88a' },
    ...[
      'M 210 214 Q 180 236 150 250 Q 120 262 90 258',
      'M 210 214 Q 230 240 270 252 Q 300 262 330 256',
      'M 205 216 Q 200 250 190 285',
      'M 150 250 Q 140 270 150 290',
      'M 270 252 Q 280 274 262 292',
    ].map(
      (d) =>
        /** @type {Shape} */ ({ kind: 'path', d, fill: 'none', stroke: '#fafaf9', width: 2.5 }),
    ),
    {
      kind: 'rect',
      x: 194,
      y: 124,
      w: 32,
      h: 92,
      rx: 10,
      fill: '#fafaf9',
      stroke: '#a8a29e',
      width: 2,
    },
    {
      kind: 'rect',
      x: 108,
      y: 118,
      w: 204,
      h: 16,
      rx: 6,
      fill: '#fbcfe8',
      stroke: '#78716c',
      width: 1.5,
    },
    ...Array.from({ length: 17 }, (_, i) => {
      const x = 116 + i * 11.6;
      return /** @type {Shape} */ ({
        kind: 'line',
        x1: x,
        y1: 120,
        x2: x,
        y2: 132,
        stroke: '#78716c',
        width: 1,
      });
    }),
    {
      kind: 'path',
      d: 'M 98 124 Q 108 40 210 38 Q 312 40 322 124 Z',
      fill: '#8b5e34',
      stroke: '#5b3a1e',
      width: 3,
    },
    dot(282, 146, 2.5, '#7c2d12'),
    dot(292, 156, 2.5, '#7c2d12'),
    dot(286, 168, 2.5, '#7c2d12'),
    dot(298, 176, 2.5, '#7c2d12'),
    dot(276, 160, 2.5, '#7c2d12'),
  ],
  parts: [
    {
      id: 'mu-nam',
      name: 'Mũ nấm',
      accept: ['mũ'],
      info: 'Phần trên cùng, hình ô hoặc hình nón, che chở cho phiến nấm ở mặt dưới.',
      x: 210,
      y: 72,
    },
    {
      id: 'phien-nam',
      name: 'Phiến nấm',
      accept: ['phiến', 'lá nấm'],
      info: 'Những lá mỏng xếp tỏa tròn ở mặt dưới mũ nấm; đây là nơi tạo ra bào tử.',
      x: 140,
      y: 126,
    },
    {
      id: 'cuong-nam',
      name: 'Cuống nấm',
      accept: ['cuống', 'chân nấm'],
      info: 'Nâng mũ nấm lên cao để bào tử phát tán đi xa.',
      x: 210,
      y: 178,
    },
    {
      id: 'soi-nam',
      name: 'Sợi nấm',
      accept: ['hệ sợi nấm', 'hệ sợi'],
      info: 'Hệ sợi nấm mảnh, phân nhánh, ăn sâu vào đất hoặc giá thể để hút chất dinh dưỡng; đây mới là phần sống lâu dài của nấm.',
      x: 150,
      y: 252,
    },
    {
      id: 'bao-tu',
      name: 'Bào tử',
      info: 'Rất nhỏ, rơi ra từ phiến nấm, gặp nơi ẩm sẽ nảy mầm thành sợi nấm mới: nấm sinh sản bằng bào tử.',
      x: 312,
      y: 164,
    },
  ],
};

/** @type {Diagram} */
export const BREAD_MOULD = {
  id: 'moc-den',
  title: 'Mốc đen trên bánh mì (nhìn qua kính lúp, kính hiển vi)',
  width: 420,
  height: 300,
  shapes: [
    { kind: 'rect', x: 0, y: 222, w: 420, h: 78, fill: '#f5deb3', stroke: '#d6b88a', width: 2 },
    {
      kind: 'path',
      d: 'M 30 218 Q 120 204 200 216 Q 280 230 390 212',
      fill: 'none',
      stroke: '#94a3b8',
      width: 3,
    },
    ...[
      [120, 212],
      [200, 216],
      [282, 224],
    ].flatMap(([x, y]) => [
      /** @type {Shape} */ ({
        kind: 'line',
        x1: x,
        y1: y,
        x2: x - 10,
        y2: y + 30,
        stroke: '#94a3b8',
        width: 2,
      }),
      /** @type {Shape} */ ({
        kind: 'line',
        x1: x,
        y1: y,
        x2: x + 2,
        y2: y + 34,
        stroke: '#94a3b8',
        width: 2,
      }),
      /** @type {Shape} */ ({
        kind: 'line',
        x1: x,
        y1: y,
        x2: x + 12,
        y2: y + 28,
        stroke: '#94a3b8',
        width: 2,
      }),
    ]),
    { kind: 'line', x1: 120, y1: 210, x2: 120, y2: 104, stroke: '#94a3b8', width: 3 },
    { kind: 'line', x1: 200, y1: 214, x2: 200, y2: 134, stroke: '#94a3b8', width: 3 },
    { kind: 'line', x1: 282, y1: 222, x2: 282, y2: 112, stroke: '#94a3b8', width: 3 },
    dot(120, 88, 18, '#1e293b'),
    dot(200, 118, 16, '#334155'),
    dot(282, 96, 18, '#1e293b'),
    ...[
      [306, 80],
      [314, 92],
      [322, 74],
      [330, 88],
      [312, 66],
    ].map(([x, y]) => dot(x, y, 2.5, '#0f172a')),
  ],
  parts: [
    {
      id: 'soi-ngang',
      name: 'Sợi nấm',
      accept: ['sợi nấm ngang', 'hệ sợi nấm'],
      info: 'Sợi mảnh, trắng, bò lan trên bề mặt bánh mì; lớp mốc trắng như bông là do rất nhiều sợi nấm tạo nên.',
      x: 244,
      y: 222,
    },
    {
      id: 're-gia',
      name: 'Rễ giả',
      info: 'Các sợi ngắn đâm xuống bánh mì, giúp mốc bám chắc và hút chất dinh dưỡng.',
      x: 120,
      y: 254,
    },
    {
      id: 'cuong-tui',
      name: 'Cuống túi bào tử',
      accept: ['cuống bào tử'],
      info: 'Sợi mọc thẳng đứng, nâng túi bào tử lên khỏi bề mặt.',
      x: 200,
      y: 172,
    },
    {
      id: 'tui-bao-tu',
      name: 'Túi bào tử',
      info: 'Khối tròn ở đầu cuống, chứa rất nhiều bào tử; khi chín có màu đen nên ta thấy lớp mốc chuyển sang đen.',
      x: 120,
      y: 88,
    },
    {
      id: 'bao-tu-moc',
      name: 'Bào tử',
      info: 'Túi bào tử vỡ ra giải phóng bào tử bay trong không khí; rơi vào thức ăn ẩm, chúng mọc thành mốc mới.',
      x: 340,
      y: 62,
    },
  ],
};

/** @typedef {'tu-lanh' | 'phong'} PlaceId */
/** @typedef {'kho' | 'am'} MoistureId */

/** Growth days before any mould shows. */
export const LAG_DAYS = 2;

/**
 * Growth per day once mould shows: moist bread at room temperature passes the
 * white-threads stage on day 3 and turns dark from day 4.
 */
export const GROWTH = 0.35;

/** How fast mould grows, relative to a moist slice at room temperature. */
export const PLACE_RATE = { 'tu-lanh': 0.15, phong: 1 };
export const MOISTURE_RATE = { kho: 0.1, am: 1 };

/**
 * Percent of the slice covered by mould after `days`, in a simple model:
 * nothing shows during the first LAG_DAYS growth days, then the cover closes in on
 * 100 %. Spores are always in the air, so a sealed bag does not help unless
 * the bread is dry or cold.
 * @param {PlaceId} place @param {MoistureId} moisture @param {number} days
 */
export function mouldCover(place, moisture, days) {
  const e = PLACE_RATE[place] * MOISTURE_RATE[moisture] * days;
  if (e <= LAG_DAYS) return 0;
  return Math.min(100, Math.round(100 * (1 - Math.exp(-GROWTH * (e - LAG_DAYS)))));
}

/** Cover (%) from which mould is seen by eye. */
export const VISIBLE = 5;

/**
 * What the learner sees on the slice and what it means.
 * @param {PlaceId} place @param {MoistureId} moisture @param {number} days
 */
export function mouldStage(place, moisture, days) {
  const c = mouldCover(place, moisture, days);
  if (c < VISIBLE)
    return {
      cover: c,
      text:
        place === 'tu-lanh' || moisture === 'kho'
          ? 'Chưa thấy mốc: lạnh hoặc khô làm bào tử nấm mốc khó nảy mầm và sợi nấm mọc rất chậm.'
          : 'Chưa thấy mốc bằng mắt thường, nhưng bào tử trong không khí đã rơi xuống và bắt đầu nảy mầm.',
    };
  if (c < 40)
    return {
      cover: c,
      text: 'Xuất hiện các đốm mốc trắng như bông: đó là hệ sợi nấm. Có thể lấy mẫu để quan sát.',
    };
  return {
    cover: c,
    text: 'Mốc phủ rộng và chuyển sang màu đen, xanh: các túi bào tử đã chín. Lấy mẫu quan sát được rõ cả sợi nấm và túi bào tử.',
  };
}

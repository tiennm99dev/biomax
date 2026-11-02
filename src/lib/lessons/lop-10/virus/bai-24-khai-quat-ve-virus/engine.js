/**
 * The five stages of virus multiplication, drawn as a scene for each moment of
 * each stage, the structure diagrams and the two lytic and lysogenic card sets.
 * No DOM here, so all of it is tested in Node.
 */
import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {'phage' | 'vo-ngoai'} VirusKind
 * @typedef {'virion' | 'shell' | 'capsid' | 'genome' | 'protein' | 'mature'} ItemType
 * `virion` is a finished virus outside the cell, `shell` the empty phage left on
 * the bacterium, `mature` a finished virus particle still inside the cell.
 * @typedef {{ type: ItemType, x: number, y: number, opacity?: number }} SceneItem
 * @typedef {{ burst: boolean, items: SceneItem[] }} Scene
 * @typedef {{
 *   id: string,
 *   name: string,
 *   clue: string,
 *   text: Record<VirusKind, string>,
 * }} Stage
 */

/** Scene size, and the top of the host cell where a virus lands. */
export const SCENE = { width: 320, height: 210, surface: 90 };

/** @type {Record<VirusKind, { name: string, host: string }>} */
export const VIRUSES = {
  phage: { name: 'Thực khuẩn thể (phage)', host: 'vi khuẩn' },
  'vo-ngoai': { name: 'Virus có vỏ ngoài', host: 'tế bào động vật' },
};

/** @type {Stage[]} */
export const STAGES = [
  {
    id: 'hap-phu',
    name: 'Hấp phụ',
    clue: 'Mọi việc bắt đầu từ bên ngoài tế bào: virus phải bám được vào đúng thụ thể đã.',
    text: {
      phage:
        'Protein bề mặt ở đuôi phage tương tác đặc hiệu với thụ thể trên thành vi khuẩn, nên phage bám chặt vào đó.',
      'vo-ngoai':
        'Gai glycoprotein của virus tương tác đặc hiệu với thụ thể trên màng tế bào, nên virus bám chặt vào đó.',
    },
  },
  {
    id: 'xam-nhap',
    name: 'Xâm nhập',
    clue: 'Virus đã bám vào tế bào. Vật chất di truyền của nó phải vào bên trong rồi mới làm được gì khác.',
    text: {
      phage:
        'Phage tiêm vật chất di truyền vào vi khuẩn qua bộ phận chuyên biệt ở đuôi; vỏ protein ở lại bên ngoài.',
      'vo-ngoai':
        'Cả capsid và vật chất di truyền đi vào tế bào; sau đó nucleic acid được giải phóng khỏi vỏ protein.',
    },
  },
  {
    id: 'tong-hop',
    name: 'Tổng hợp',
    clue: 'Vật chất di truyền đã vào tế bào. Trước khi có virus mới, cần có đủ nguyên liệu để làm chúng.',
    text: {
      phage:
        'Dùng enzyme, nguyên liệu và năng lượng của vi khuẩn, phage nhân bản vật chất di truyền và tổng hợp protein của mình.',
      'vo-ngoai':
        'Dùng bộ máy của tế bào chủ, virus nhân bản vật chất di truyền và tổng hợp protein của mình.',
    },
  },
  {
    id: 'lap-rap',
    name: 'Lắp ráp',
    clue: 'Đã có sẵn nucleic acid và protein rời trong tế bào. Chúng cần được ghép lại thành các hạt virus.',
    text: {
      phage: 'Lõi nucleic acid được lắp vào vỏ protein, tạo thành các hạt phage hoàn chỉnh.',
      'vo-ngoai': 'Lõi nucleic acid được lắp vào vỏ capsid, tạo thành các hạt virus trong tế bào.',
    },
  },
  {
    id: 'giai-phong',
    name: 'Giải phóng',
    clue: 'Các hạt virus mới đã hoàn chỉnh trong tế bào. Chỉ còn việc đi ra ngoài để lây sang tế bào khác.',
    text: {
      phage: 'Phage phá vỡ tế bào vi khuẩn và ồ ạt thoát ra ngoài, vi khuẩn bị tan.',
      'vo-ngoai':
        'Virus rời tế bào theo kiểu xuất bào, mang theo một phần màng tế bào làm vỏ ngoài của mình.',
    },
  },
];

/**
 * The stages in a mixed order, never already sorted.
 * @param {number} seed
 * @returns {Stage[]}
 */
export function mixedStages(seed) {
  const mixed = shuffle(rng(seed), STAGES);
  return mixed.every((s, i) => s === STAGES[i]) ? [...mixed.slice(1), mixed[0]] : mixed;
}

/**
 * Whether a stage is the next one after `done` stages are in place.
 * @param {number} done @param {string} id
 */
export const isNext = (done, id) => STAGES[done]?.id === id;

/**
 * The feedback for a wrong pick, which points at the stage that comes next
 * without naming it.
 * @param {number} done
 */
export const clueFor = (done) => STAGES[done]?.clue ?? '';

/** Where new virus parts appear inside the host. */
const SLOTS = [
  { x: 80, y: 122 },
  { x: 160, y: 122 },
  { x: 240, y: 122 },
  { x: 80, y: 168 },
  { x: 160, y: 168 },
  { x: 240, y: 168 },
];

/** Where each new virus ends up outside the host. */
const EXITS = [
  { x: 82, y: 66 },
  { x: 134, y: 46 },
  { x: 238, y: 66 },
  { x: 30, y: 46 },
  { x: 186, y: 66 },
  { x: 290, y: 46 },
];

/** How far above the surface a landed virus sits: a phage stands on its tail. */
const DOCK = { phage: SCENE.surface, 'vo-ngoai': SCENE.surface - 16 };
const START = { phage: 44, 'vo-ngoai': 24 };

/**
 * @param {number} a @param {number} b @param {number} t
 */
const mix = (a, b, t) => a + (b - a) * t;

/** @param {number} t */
const ease = (t) => t * t * (3 - 2 * t);

/** @param {number} t */
const unit = (t) => Math.min(1, Math.max(0, t));

/** Where the nucleic acid or capsid ends up after entering the cell. */
const INSIDE = 146;

/**
 * @param {ItemType} type @param {number} x @param {number} y
 * @returns {SceneItem}
 */
const item = (type, x, y) => ({ type, x, y });

/**
 * What is on the scene at a moment of a stage.
 * @param {VirusKind} kind
 * @param {number} stage index in `STAGES`
 * @param {number} progress 0 at the start of the stage, 1 at its end
 * @returns {Scene}
 */
export function sceneAt(kind, stage, progress) {
  const t = unit(progress);
  const dock = DOCK[kind];
  const shell = kind === 'phage' ? [item('shell', 160, dock)] : [];
  if (stage === 0) {
    return { burst: false, items: [item('virion', 160, mix(START[kind], dock, ease(t)))] };
  }
  if (stage === 1) {
    if (kind === 'phage') {
      return {
        burst: false,
        items: [...shell, item('genome', 160, mix(SCENE.surface, INSIDE, ease(t)))],
      };
    }
    if (t < 0.5) {
      return { burst: false, items: [item('virion', 160, mix(dock, INSIDE, ease(t * 2)))] };
    }
    return {
      burst: false,
      items: [
        { ...item('capsid', 160, INSIDE), opacity: 1 - unit((t - 0.75) * 4) },
        ...(t >= 0.75 ? [item('genome', 160, INSIDE)] : []),
      ],
    };
  }
  if (stage === 2) {
    const genomes = 1 + Math.floor(t * 5);
    const proteins = Math.floor(t * 6);
    return {
      burst: false,
      items: [
        ...shell,
        ...SLOTS.slice(0, genomes).map((s) => item('genome', s.x, s.y)),
        ...SLOTS.slice(0, proteins).map((s) => item('protein', s.x + 22, s.y + 8)),
      ],
    };
  }
  if (stage === 3) {
    const made = Math.round(t * 6);
    return {
      burst: false,
      items: [
        ...shell,
        ...SLOTS.flatMap((s, i) =>
          i < made
            ? [item('mature', s.x, s.y)]
            : [item('genome', s.x, s.y), item('protein', s.x + 22, s.y + 8)],
        ),
      ],
    };
  }
  return {
    burst: kind === 'phage',
    items: SLOTS.map((s, i) => {
      // They leave one after another, each taking a third of the stage.
      const own = ease(unit((t - (i / 6) * 0.66) / 0.34));
      const y = mix(s.y, EXITS[i].y, own);
      // A virus with an envelope takes it from the membrane as it crosses.
      const type = kind === 'vo-ngoai' && y >= SCENE.surface ? 'mature' : 'virion';
      return item(type, mix(s.x, EXITS[i].x, own), y);
    }),
  };
}

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const ENVELOPED_DIAGRAM = {
  id: 'virus-vo-ngoai',
  title: 'Cấu tạo virus có vỏ ngoài',
  width: 300,
  height: 240,
  shapes: [
    ...[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return /** @type {import('#lib/domain/diagrams.js').Shape} */ ({
        kind: 'line',
        x1: 150 + Math.cos(a) * 82,
        y1: 120 + Math.sin(a) * 82,
        x2: 150 + Math.cos(a) * 100,
        y2: 120 + Math.sin(a) * 100,
        stroke: '#b45309',
        width: 6,
      });
    }),
    { kind: 'circle', cx: 150, cy: 120, r: 82, fill: '#fef3c7', stroke: '#b45309', width: 5 },
    {
      kind: 'path',
      d: 'M150 66 L197 93 L197 147 L150 174 L103 147 L103 93 Z',
      fill: '#e0e7ff',
      stroke: '#4338ca',
      width: 4,
    },
    {
      kind: 'path',
      d: 'M122 120 q9 -22 18 0 t18 0 t18 0',
      fill: 'none',
      stroke: '#be123c',
      width: 4,
    },
  ],
  parts: [
    {
      id: 'gai',
      name: 'Gai glycoprotein',
      accept: ['gai', 'gai glycoprotein'],
      info: 'Nằm trên vỏ ngoài; giúp virus bám vào thụ thể đặc hiệu trên bề mặt tế bào chủ.',
      x: 150,
      y: 26,
    },
    {
      id: 'vo-ngoai',
      name: 'Vỏ ngoài',
      info: 'Lớp màng kép phospholipid bọc ngoài capsid, chỉ có ở một số virus, chủ yếu là virus ở động vật.',
      x: 208,
      y: 178,
    },
    {
      id: 'capsid',
      name: 'Vỏ capsid',
      accept: ['capsid', 'vo capsid', 'vo protein'],
      info: 'Vỏ cấu tạo từ protein, bao bọc và bảo vệ lõi nucleic acid.',
      x: 112,
      y: 96,
    },
    {
      id: 'loi',
      name: 'Lõi nucleic acid',
      accept: ['loi', 'nucleic acid', 'loi nucleic acid'],
      info: 'DNA hoặc RNA, mạch đơn hoặc mạch kép, mang thông tin di truyền quy định các đặc điểm của virus.',
      x: 150,
      y: 136,
    },
  ],
};

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const PHAGE_DIAGRAM = {
  id: 'phage',
  title: 'Cấu tạo thực khuẩn thể (phage)',
  width: 300,
  height: 260,
  shapes: [
    {
      kind: 'path',
      d: 'M150 12 L196 38 L196 90 L150 116 L104 90 L104 38 Z',
      fill: '#e0e7ff',
      stroke: '#4338ca',
      width: 4,
    },
    {
      kind: 'path',
      d: 'M122 64 q9 -22 18 0 t18 0 t18 0',
      fill: 'none',
      stroke: '#be123c',
      width: 4,
    },
    { kind: 'rect', x: 140, y: 116, w: 20, h: 76, rx: 3, fill: '#c7d2fe', stroke: '#4338ca' },
    { kind: 'rect', x: 118, y: 192, w: 64, h: 10, rx: 3, fill: '#818cf8', stroke: '#4338ca' },
    { kind: 'path', d: 'M122 200 L84 176 L60 246', fill: 'none', stroke: '#4338ca', width: 3 },
    { kind: 'path', d: 'M178 200 L216 176 L240 246', fill: 'none', stroke: '#4338ca', width: 3 },
    { kind: 'path', d: 'M132 202 L112 222 L100 250', fill: 'none', stroke: '#4338ca', width: 3 },
    { kind: 'path', d: 'M168 202 L188 222 L200 250', fill: 'none', stroke: '#4338ca', width: 3 },
  ],
  parts: [
    {
      id: 'dau',
      name: 'Đầu (vỏ capsid)',
      accept: ['dau', 'capsid', 'vo capsid', 'dau capsid'],
      info: 'Vỏ protein hình đa diện chứa vật chất di truyền; sau khi tiêm, vỏ này ở lại bên ngoài vi khuẩn.',
      x: 116,
      y: 36,
    },
    {
      id: 'loi',
      name: 'Lõi nucleic acid',
      accept: ['loi', 'nucleic acid', 'loi nucleic acid'],
      info: 'Vật chất di truyền của phage, được tiêm vào vi khuẩn khi xâm nhập.',
      x: 150,
      y: 84,
    },
    {
      id: 'duoi',
      name: 'Đuôi',
      info: 'Phần phage dùng để tiêm vật chất di truyền vào vi khuẩn.',
      x: 150,
      y: 156,
    },
    {
      id: 'soi-duoi',
      name: 'Sợi đuôi',
      accept: ['soi duoi'],
      info: 'Mang protein bề mặt, giúp phage bám đặc hiệu vào thụ thể trên thành vi khuẩn.',
      x: 72,
      y: 210,
    },
  ],
};

export const CYCLE_BINS = [
  { id: 'sinh-tan', label: 'Chu kì sinh tan' },
  { id: 'tiem-tan', label: 'Chu kì tiềm tan' },
];

export const CYCLE_CARDS = [
  {
    id: 'tan',
    label: 'Làm tan tế bào chủ',
    bin: 'sinh-tan',
    why: 'Nhiều virus mới thoát ra bằng cách phá vỡ tế bào.',
  },
  {
    id: 'doc',
    label: 'Do virus độc thực hiện',
    bin: 'sinh-tan',
    why: 'Virus thực hiện chu kì sinh tan được gọi là virus độc.',
  },
  {
    id: 'doc-lap',
    label: 'Vật chất di truyền của virus nhân lên độc lập với tế bào chủ',
    bin: 'sinh-tan',
    why: 'Nhờ đó, rất nhiều thế hệ virus mới được tạo ra trong một tế bào.',
  },
  {
    id: 'moi',
    label: 'Tạo ra nhiều thế hệ virus mới rồi giải phóng chúng',
    bin: 'sinh-tan',
    why: 'Đây là kết quả của chu kì đi đủ năm giai đoạn đến giải phóng.',
  },
  {
    id: 'tich-hop',
    label: 'Vật chất di truyền của virus tích hợp vào hệ gene tế bào chủ',
    bin: 'tiem-tan',
    why: 'Nằm trong hệ gene của tế bào chủ, nó chưa tạo ra virus mới.',
  },
  {
    id: 'on-hoa',
    label: 'Do virus ôn hoà thực hiện',
    bin: 'tiem-tan',
    why: 'Virus thực hiện chu kì tiềm tan được gọi là virus ôn hoà.',
  },
  {
    id: 'song',
    label: 'Tế bào chủ vẫn sống, nhân lên và truyền gene virus cho tế bào con',
    bin: 'tiem-tan',
    why: 'Gene virus được nhân đôi cùng hệ gene của tế bào chủ.',
  },
  {
    id: 'chuyen',
    label: 'Có thể chuyển sang chu kì kia khi điều kiện thích hợp',
    bin: 'tiem-tan',
    why: 'Chu kì tiềm tan có thể chuyển thành chu kì sinh tan; virus độc thì không đi theo chiều ngược lại.',
  },
];

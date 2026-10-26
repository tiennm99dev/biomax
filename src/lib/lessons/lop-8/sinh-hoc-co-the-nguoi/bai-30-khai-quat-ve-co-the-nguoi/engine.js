/**
 * The organ systems of the human body as the book lists them, drawn as plain
 * SVG shapes on one body outline (view box 240 × 440, the body facing the
 * viewer, so its left side is on the viewer's right), plus a simple
 * rest-or-run model of how the systems work together.
 *
 * Shapes are schematic, for locating organs, not anatomical drawings.
 */

/**
 * @typedef {(
 *   | { kind: 'ellipse', cx: number, cy: number, rx: number, ry: number }
 *   | { kind: 'path', d: string, line?: boolean }
 * )} OrganShape
 * @typedef {{ id: string, name: string, info: string, shapes: OrganShape[] }} Organ
 * @typedef {{ id: string, name: string, color: string, role: string, organs: Organ[] }} OrganSystem
 */

/** @type {OrganSystem[]} */
export const SYSTEMS = [
  {
    id: 'van-dong',
    name: 'Hệ vận động',
    color: '#a16207',
    role: 'Định hình cơ thể, bảo vệ các nội quan, giúp cơ thể cử động và di chuyển.',
    organs: [
      {
        id: 'xuong',
        name: 'Xương',
        info: 'Các xương nối với nhau qua khớp tạo thành bộ xương, làm khung nâng đỡ và bảo vệ nội quan.',
        shapes: [
          { kind: 'path', d: 'M 74 96 L 52 176 L 48 248 M 166 96 L 188 176 L 192 248', line: true },
          {
            kind: 'path',
            d: 'M 104 290 L 100 360 L 98 424 M 136 290 L 140 360 L 142 424',
            line: true,
          },
          { kind: 'path', d: 'M 92 112 Q 120 104 148 112 M 90 126 Q 120 118 150 126', line: true },
        ],
      },
      {
        id: 'co',
        name: 'Cơ',
        info: 'Cơ bám vào xương; cơ co và dãn kéo xương chuyển động, giúp cơ thể cử động.',
        shapes: [
          { kind: 'ellipse', cx: 64, cy: 140, rx: 8, ry: 24 },
          { kind: 'ellipse', cx: 176, cy: 140, rx: 8, ry: 24 },
          { kind: 'ellipse', cx: 106, cy: 324, rx: 10, ry: 28 },
          { kind: 'ellipse', cx: 134, cy: 324, rx: 10, ry: 28 },
        ],
      },
    ],
  },
  {
    id: 'tuan-hoan',
    name: 'Hệ tuần hoàn',
    color: '#dc2626',
    role: 'Vận chuyển chất dinh dưỡng, oxygen, hormone đến các tế bào và đưa chất thải đến cơ quan bài tiết.',
    organs: [
      {
        id: 'tim',
        name: 'Tim',
        info: 'Tim co bóp như một chiếc bơm, đẩy máu đi khắp cơ thể. Tim nằm trong lồng ngực, hơi lệch về bên trái.',
        shapes: [
          { kind: 'path', d: 'M 128 140 Q 140 128 148 140 Q 150 156 132 170 Q 120 152 128 140 Z' },
        ],
      },
      {
        id: 'mach-mau',
        name: 'Mạch máu',
        info: 'Động mạch đưa máu từ tim đi, tĩnh mạch đưa máu về tim, mao mạch là nơi máu trao đổi chất với tế bào.',
        shapes: [
          { kind: 'path', d: 'M 132 140 L 132 96 L 80 102 L 58 200 L 54 244', line: true },
          { kind: 'path', d: 'M 132 96 L 160 102 L 182 200 L 186 244', line: true },
          { kind: 'path', d: 'M 132 170 L 124 280 L 110 360 L 106 420', line: true },
          { kind: 'path', d: 'M 124 280 L 132 360 L 136 420', line: true },
        ],
      },
    ],
  },
  {
    id: 'ho-hap',
    name: 'Hệ hô hấp',
    color: '#0284c7',
    role: 'Lấy oxygen từ môi trường vào cơ thể và thải khí carbon dioxide ra ngoài.',
    organs: [
      {
        id: 'duong-dan-khi',
        name: 'Đường dẫn khí',
        info: 'Mũi, họng, thanh quản, khí quản, phế quản dẫn không khí vào và ra khỏi phổi.',
        shapes: [
          {
            kind: 'path',
            d: 'M 120 56 L 120 116 M 120 116 L 106 128 M 120 116 L 134 128',
            line: true,
          },
        ],
      },
      {
        id: 'phoi',
        name: 'Hai lá phổi',
        info: 'Phổi gồm rất nhiều phế nang, là nơi trao đổi khí giữa không khí và máu.',
        shapes: [
          { kind: 'ellipse', cx: 102, cy: 140, rx: 16, ry: 28 },
          { kind: 'ellipse', cx: 140, cy: 140, rx: 14, ry: 26 },
        ],
      },
    ],
  },
  {
    id: 'tieu-hoa',
    name: 'Hệ tiêu hóa',
    color: '#ea580c',
    role: 'Biến đổi thức ăn thành các chất dinh dưỡng mà cơ thể hấp thụ được và thải chất cặn bã ra ngoài.',
    organs: [
      {
        id: 'ong-tieu-hoa',
        name: 'Ống tiêu hóa',
        info: 'Gồm miệng, hầu, thực quản, dạ dày, ruột non, ruột già, hậu môn; thức ăn đi qua và được biến đổi dần.',
        shapes: [
          { kind: 'path', d: 'M 120 60 L 120 176 Q 146 172 148 190 Q 146 206 124 206', line: true },
          {
            kind: 'path',
            d: 'M 124 206 Q 104 214 112 226 Q 134 232 124 244 Q 104 250 116 260 L 120 274',
            line: true,
          },
        ],
      },
      {
        id: 'gan',
        name: 'Gan',
        info: 'Gan là tuyến tiêu hóa lớn nhất, tiết dịch mật đổ vào ruột non.',
        shapes: [{ kind: 'path', d: 'M 88 178 Q 110 170 126 180 Q 116 198 92 196 Z' }],
      },
    ],
  },
  {
    id: 'bai-tiet',
    name: 'Hệ bài tiết',
    color: '#7c3aed',
    role: 'Lọc các chất thải có hại cho cơ thể từ máu và thải chúng ra môi trường.',
    organs: [
      {
        id: 'than',
        name: 'Thận',
        info: 'Hai quả thận lọc máu, tạo nước tiểu; nước tiểu theo ống dẫn nước tiểu xuống bóng đái.',
        shapes: [
          { kind: 'ellipse', cx: 100, cy: 222, rx: 8, ry: 13 },
          { kind: 'ellipse', cx: 140, cy: 222, rx: 8, ry: 13 },
          { kind: 'path', d: 'M 102 234 L 116 262 M 138 234 L 124 262', line: true },
        ],
      },
      {
        id: 'bong-dai',
        name: 'Bóng đái',
        info: 'Bóng đái (bàng quang) chứa nước tiểu trước khi thải ra ngoài.',
        shapes: [{ kind: 'ellipse', cx: 120, cy: 268, rx: 11, ry: 8 }],
      },
    ],
  },
  {
    id: 'than-kinh',
    name: 'Hệ thần kinh và giác quan',
    color: '#4f46e5',
    role: 'Thu nhận kích thích từ môi trường, điều khiển và điều hòa hoạt động của các cơ quan, giúp cơ thể thích nghi với môi trường.',
    organs: [
      {
        id: 'nao',
        name: 'Não',
        info: 'Não nằm trong hộp sọ, là trung ương thần kinh điều khiển mọi hoạt động của cơ thể.',
        shapes: [{ kind: 'ellipse', cx: 120, cy: 34, rx: 20, ry: 14 }],
      },
      {
        id: 'tuy-song',
        name: 'Tủy sống và dây thần kinh',
        info: 'Tủy sống nằm trong cột sống; các dây thần kinh nối trung ương thần kinh với các cơ quan.',
        shapes: [
          { kind: 'path', d: 'M 116 48 L 116 270', line: true },
          {
            kind: 'path',
            d: 'M 116 100 L 70 110 L 50 240 M 116 100 L 170 110 L 190 240',
            line: true,
          },
          {
            kind: 'path',
            d: 'M 116 270 L 102 350 L 100 420 M 116 270 L 138 350 L 140 420',
            line: true,
          },
        ],
      },
    ],
  },
  {
    id: 'noi-tiet',
    name: 'Hệ nội tiết',
    color: '#059669',
    role: 'Các tuyến nội tiết tiết hormone vào máu để điều hòa hoạt động của các cơ quan.',
    organs: [
      {
        id: 'tuyen-yen',
        name: 'Tuyến yên',
        info: 'Tuyến yên nằm ở nền não, tiết nhiều hormone điều khiển hoạt động của các tuyến nội tiết khác.',
        shapes: [{ kind: 'ellipse', cx: 120, cy: 44, rx: 5, ry: 5 }],
      },
      {
        id: 'tuyen-giap',
        name: 'Tuyến giáp',
        info: 'Tuyến giáp nằm ở cổ, tiết hormone điều hòa quá trình trao đổi chất.',
        shapes: [{ kind: 'path', d: 'M 110 78 Q 120 90 130 78 Q 126 72 120 80 Q 114 72 110 78 Z' }],
      },
      {
        id: 'tuyen-tuy',
        name: 'Tuyến tụy và tuyến trên thận',
        info: 'Tuyến tụy tiết hormone điều hòa lượng đường trong máu; tuyến trên thận nằm trên hai quả thận.',
        shapes: [
          { kind: 'ellipse', cx: 126, cy: 204, rx: 16, ry: 4 },
          { kind: 'ellipse', cx: 100, cy: 207, rx: 6, ry: 3 },
          { kind: 'ellipse', cx: 140, cy: 207, rx: 6, ry: 3 },
        ],
      },
    ],
  },
  {
    id: 'sinh-duc',
    name: 'Hệ sinh dục',
    color: '#db2777',
    role: 'Sinh sản, duy trì nòi giống.',
    organs: [
      {
        id: 'co-quan-sinh-duc',
        name: 'Cơ quan sinh dục',
        info: 'Ở nam có tinh hoàn, ống dẫn tinh, túi tinh, dương vật; ở nữ có buồng trứng, ống dẫn trứng, tử cung, âm đạo.',
        shapes: [
          { kind: 'ellipse', cx: 106, cy: 258, rx: 5, ry: 4 },
          { kind: 'ellipse', cx: 134, cy: 258, rx: 5, ry: 4 },
          { kind: 'path', d: 'M 111 258 Q 120 250 129 258 M 120 256 L 120 284', line: true },
        ],
      },
    ],
  },
];

/** @param {string} id */
export function systemOf(id) {
  return SYSTEMS.find((s) => s.organs.some((o) => o.id === id)) ?? null;
}

/** @param {string} id */
export function organOf(id) {
  for (const s of SYSTEMS) {
    const o = s.organs.find((x) => x.id === id);
    if (o) return o;
  }
  return null;
}

/**
 * What one organ system does at rest and while running; `up` marks the
 * systems whose activity rises when the body runs. Rates are typical values
 * for a healthy teenager, for teaching only.
 * @typedef {{ id: string, rest: string, run: string, up: boolean }} Activity
 */

/** @type {Activity[]} */
export const ACTIVITY = [
  {
    id: 'van-dong',
    rest: 'Cơ nghỉ, co nhẹ giữ tư thế.',
    run: 'Cơ chân, tay co dãn liên tục.',
    up: true,
  },
  {
    id: 'tuan-hoan',
    rest: 'Tim đập khoảng 75 lần/phút.',
    run: 'Tim đập nhanh, mạnh (có thể trên 150 lần/phút), mạch máu ở cơ giãn ra.',
    up: true,
  },
  {
    id: 'ho-hap',
    rest: 'Thở khoảng 16 lần/phút.',
    run: 'Thở nhanh và sâu (khoảng 40 lần/phút).',
    up: true,
  },
  {
    id: 'bai-tiet',
    rest: 'Da tiết ít mồ hôi.',
    run: 'Da tiết nhiều mồ hôi, phổi thải nhiều CO₂.',
    up: true,
  },
  {
    id: 'than-kinh',
    rest: 'Điều hòa hoạt động các cơ quan.',
    run: 'Điều khiển, phối hợp hoạt động của các hệ cơ quan.',
    up: true,
  },
];

/**
 * The sentence about the whole body in one state.
 * @param {'nghi' | 'chay'} state
 */
export function coordination(state) {
  if (state === 'nghi')
    return 'Lúc nghỉ ngơi, các hệ cơ quan hoạt động nhịp nhàng ở mức thấp: tim đập chậm, thở đều, ít mồ hôi.';
  return 'Khi chạy, hệ vận động hoạt động mạnh nên cần nhiều oxygen và chất dinh dưỡng: hệ tuần hoàn và hệ hô hấp cùng tăng hoạt động, da tiết nhiều mồ hôi. Hệ thần kinh điều khiển sự phối hợp đó.';
}

/** Organ cards for sorting into their systems. */
/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const ORGAN_CARDS = [
  { id: 'khop', label: 'Khớp', bin: 'van-dong', why: 'Khớp nối các xương, thuộc hệ vận động.' },
  { id: 'xuong-dui', label: 'Xương đùi', bin: 'van-dong', why: 'Xương thuộc hệ vận động.' },
  { id: 'tim', label: 'Tim', bin: 'tuan-hoan', why: 'Tim bơm máu, thuộc hệ tuần hoàn.' },
  {
    id: 'mao-mach',
    label: 'Mao mạch',
    bin: 'tuan-hoan',
    why: 'Mao mạch là một loại mạch máu, thuộc hệ tuần hoàn.',
  },
  { id: 'khi-quan', label: 'Khí quản', bin: 'ho-hap', why: 'Khí quản dẫn khí, thuộc hệ hô hấp.' },
  { id: 'phoi', label: 'Phổi', bin: 'ho-hap', why: 'Phổi trao đổi khí, thuộc hệ hô hấp.' },
  {
    id: 'da-day',
    label: 'Dạ dày',
    bin: 'tieu-hoa',
    why: 'Dạ dày là một đoạn của ống tiêu hóa.',
  },
  { id: 'ruot-non', label: 'Ruột non', bin: 'tieu-hoa', why: 'Ruột non thuộc hệ tiêu hóa.' },
  {
    id: 'than',
    label: 'Thận',
    bin: 'bai-tiet',
    why: 'Thận lọc máu tạo nước tiểu, thuộc hệ bài tiết.',
  },
  {
    id: 'bong-dai',
    label: 'Bóng đái',
    bin: 'bai-tiet',
    why: 'Bóng đái chứa nước tiểu, thuộc hệ bài tiết.',
  },
  {
    id: 'tuy-song',
    label: 'Tủy sống',
    bin: 'than-kinh',
    why: 'Tủy sống cùng với não là trung ương thần kinh.',
  },
  {
    id: 'mat',
    label: 'Mắt',
    bin: 'than-kinh',
    why: 'Mắt là cơ quan thị giác, thuộc hệ thần kinh và giác quan.',
  },
  {
    id: 'tuyen-giap',
    label: 'Tuyến giáp',
    bin: 'noi-tiet',
    why: 'Tuyến giáp tiết hormone vào máu, thuộc hệ nội tiết.',
  },
  {
    id: 'tuyen-yen',
    label: 'Tuyến yên',
    bin: 'noi-tiet',
    why: 'Tuyến yên tiết hormone, thuộc hệ nội tiết.',
  },
  {
    id: 'tu-cung',
    label: 'Tử cung',
    bin: 'sinh-duc',
    why: 'Tử cung là nơi thai phát triển, thuộc hệ sinh dục nữ.',
  },
  {
    id: 'ong-dan-tinh',
    label: 'Ống dẫn tinh',
    bin: 'sinh-duc',
    why: 'Ống dẫn tinh dẫn tinh trùng, thuộc hệ sinh dục nam.',
  },
];

/** The systems as sorter bins (short names). */
/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const SYSTEM_BINS = SYSTEMS.map((s) => ({
  id: s.id,
  label: s.id === 'than-kinh' ? 'Thần kinh, giác quan' : capitalize(s.name.replace('Hệ ', '')),
}));

/** @param {string} s */
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

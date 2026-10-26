/**
 * Data for the "Khóa lưỡng phân" lesson: two groups of organisms described
 * by yes/no traits, each with a ready-made dichotomous key. Reading and
 * building keys lives in `../_shared/dichotomous-key.js`.
 */

export {
  buildKey,
  countPairs,
  describe,
  hasTrait,
  identify,
  keyTable,
  nameOf,
  split,
  traitById,
} from '../_shared/dichotomous-key.js';

/** @typedef {import('../_shared/dichotomous-key.js').OrganismSet} OrganismSet */
/** @typedef {import('../_shared/dichotomous-key.js').Group} Group */

/** @type {OrganismSet[]} */
export const SETS = [
  {
    id: 'dong-vat',
    label: 'Một số động vật',
    organisms: [
      { id: 'meo', name: 'Con mèo' },
      { id: 'chim', name: 'Chim bồ câu' },
      { id: 'ca', name: 'Cá chép' },
      { id: 'giun', name: 'Giun đất' },
      { id: 'chau-chau', name: 'Châu chấu' },
    ],
    traits: [
      { id: 'xuong-song', yes: 'Có xương sống', no: 'Không có xương sống' },
      { id: 'chan', yes: 'Có chân', no: 'Không có chân' },
      { id: 'canh', yes: 'Có cánh', no: 'Không có cánh' },
      { id: 'long-vu', yes: 'Cơ thể phủ lông vũ', no: 'Cơ thể không phủ lông vũ' },
      { id: 'long-mao', yes: 'Cơ thể phủ lông mao', no: 'Cơ thể không phủ lông mao' },
      { id: 'vay', yes: 'Có vây, sống dưới nước', no: 'Không có vây' },
    ],
    has: {
      meo: ['xuong-song', 'chan', 'long-mao'],
      chim: ['xuong-song', 'chan', 'canh', 'long-vu'],
      ca: ['xuong-song', 'vay'],
      giun: [],
      'chau-chau': ['chan', 'canh'],
    },
    key: {
      trait: 'xuong-song',
      yes: { trait: 'vay', yes: 'ca', no: { trait: 'long-vu', yes: 'chim', no: 'meo' } },
      no: { trait: 'chan', yes: 'chau-chau', no: 'giun' },
    },
  },
  {
    id: 'thuc-vat',
    label: 'Một số thực vật',
    organisms: [
      { id: 'reu', name: 'Cây rêu' },
      { id: 'duong-xi', name: 'Cây dương xỉ' },
      { id: 'thong', name: 'Cây thông' },
      { id: 'lua', name: 'Cây lúa' },
      { id: 'buoi', name: 'Cây bưởi' },
    ],
    traits: [
      { id: 'hoa', yes: 'Có hoa', no: 'Không có hoa' },
      { id: 'hat', yes: 'Có hạt', no: 'Không có hạt' },
      { id: 're-that', yes: 'Có rễ thật', no: 'Chưa có rễ thật (rễ giả)' },
      { id: 'than-go', yes: 'Thân gỗ', no: 'Không phải thân gỗ' },
    ],
    has: {
      reu: [],
      'duong-xi': ['re-that'],
      thong: ['re-that', 'hat', 'than-go'],
      lua: ['re-that', 'hat', 'hoa'],
      buoi: ['re-that', 'hat', 'hoa', 'than-go'],
    },
    key: {
      trait: 'hoa',
      yes: { trait: 'than-go', yes: 'buoi', no: 'lua' },
      no: { trait: 'hat', yes: 'thong', no: { trait: 're-that', yes: 'duong-xi', no: 'reu' } },
    },
  },
];

/** @param {string} id */
export function setById(id) {
  const s = SETS.find((x) => x.id === id);
  if (!s) throw new Error(`unknown set ${id}`);
  return s;
}

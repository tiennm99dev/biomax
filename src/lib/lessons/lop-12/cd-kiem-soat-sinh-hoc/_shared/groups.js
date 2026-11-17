/**
 * The three groups of biological control measures the chapter uses.
 * @typedef {'thien-dich' | 'che-pham' | 'di-truyen'} Group
 */

/** @type {{ id: Group, label: string }[]} */
export const GROUPS = [
  { id: 'thien-dich', label: 'Sử dụng thiên địch' },
  { id: 'che-pham', label: 'Chế phẩm sinh học' },
  { id: 'di-truyen', label: 'Kĩ thuật di truyền, tạo giống' },
];

/**
 * The label of a group.
 * @param {Group} g
 */
export function groupLabel(g) {
  const found = GROUPS.find((x) => x.id === g);
  return found ? found.label : g;
}

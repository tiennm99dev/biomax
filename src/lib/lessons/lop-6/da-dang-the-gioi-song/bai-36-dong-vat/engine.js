/**
 * Logic for the animal diversity lesson: the classification tree (two
 * branches, nine groups) the learner opens node by node, and the "find the
 * group" quiz where an animal is filed in two steps, first by its backbone,
 * then by the features of its group.
 */
import { shuffled } from '#lib/core/card-sorter.js';
import { ANIMALS, animalById, branchById, groupById } from '../_shared/animal-groups.js';

/** @typedef {import('../_shared/animal-groups.js').BranchId} BranchId */
/** @typedef {import('../_shared/animal-groups.js').GroupId} GroupId */

/** The quiz animals in a fixed mixed order. */
export const QUIZ = shuffled(
  ANIMALS.map((a) => a.id),
  36,
);

/**
 * Feedback on the first step: which branch the animal belongs to.
 * @param {string} animalId @param {BranchId} branch
 * @returns {{ ok: boolean, text: string }}
 */
export function checkBranch(animalId, branch) {
  const a = animalById(animalId);
  const right = groupById(a.group).branch;
  if (branch === right)
    return {
      ok: true,
      text: `Đúng: ${a.name.toLowerCase()} thuộc ${branchById(right).name.toLowerCase()}. Bây giờ chọn nhóm.`,
    };
  return {
    ok: false,
    text:
      right === 'co-xuong-song'
        ? `Chưa đúng: ${a.name.toLowerCase()} có bộ xương trong với xương sống. Gợi ý: ${a.clue}`
        : `Chưa đúng: ${a.name.toLowerCase()} không có xương sống. Gợi ý: ${a.clue}`,
  };
}

/**
 * Feedback on the second step: which group the animal belongs to.
 * @param {string} animalId @param {GroupId} group
 * @returns {{ ok: boolean, text: string }}
 */
export function checkGroup(animalId, group) {
  const a = animalById(animalId);
  const right = groupById(a.group);
  if (group === a.group)
    return { ok: true, text: `Đúng: ${a.name} thuộc nhóm ${right.name}. ${a.clue}` };
  const picked = groupById(group);
  return {
    ok: false,
    text: `Chưa đúng: nhóm ${picked.name} có đặc điểm "${picked.features}" Gợi ý về ${a.name.toLowerCase()}: ${a.clue}`,
  };
}

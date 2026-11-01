/**
 * The ladder of organisation levels of the living world, from molecule to
 * biosphere, the descriptions a learner places on it, and a small model of
 * self-regulation: body temperature against the temperature outside.
 */

/** @typedef {'chua-song' | 'to-chuc' | 'co-ban'} LevelKind */
/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   kind: LevelKind;
 *   example: string;
 *   made: string;
 *   trait: string;
 * }} Level
 */

export const KIND_LABELS = /** @type {Record<LevelKind, string>} */ ({
  'chua-song': 'Chưa có đủ đặc tính sống',
  'to-chuc': 'Cấp độ tổ chức sống',
  'co-ban': 'Cấp độ tổ chức sống cơ bản',
});

/** @type {Level[]} */
export const LEVELS = [
  {
    id: 'phan-tu',
    name: 'Phân tử',
    kind: 'chua-song',
    example: 'DNA, protein, carbohydrate, nước.',
    made: 'Do các nguyên tử liên kết với nhau tạo thành.',
    trait:
      'DNA mang thông tin di truyền, nhưng một phân tử DNA riêng lẻ không tự sinh trưởng hay sinh sản.',
  },
  {
    id: 'bao-quan',
    name: 'Bào quan',
    kind: 'chua-song',
    example: 'Ti thể, lục lạp, ribosome.',
    made: 'Do các phân tử kết hợp lại tạo thành.',
    trait:
      'Mỗi bào quan đảm nhận một chức năng trong tế bào, nhưng tách riêng thì không có đủ đặc tính sống.',
  },
  {
    id: 'te-bao',
    name: 'Tế bào',
    kind: 'co-ban',
    example: 'Một vi khuẩn, một tế bào thần kinh.',
    made: 'Do các phân tử và bào quan phối hợp với nhau tạo thành.',
    trait: 'Là đơn vị cơ sở của mọi sinh vật và là cấp nhỏ nhất có đủ các đặc tính sống.',
  },
  {
    id: 'mo',
    name: 'Mô',
    kind: 'to-chuc',
    example: 'Mô cơ, mô biểu bì, mô dẫn của cây.',
    made: 'Do các tế bào giống nhau về hình dạng và chức năng tập hợp lại.',
    trait: 'Các tế bào của mô cùng nhau thực hiện một chức năng, như cơ co rút, biểu bì che chở.',
  },
  {
    id: 'co-quan',
    name: 'Cơ quan',
    kind: 'to-chuc',
    example: 'Tim, phổi, lá cây, rễ cây.',
    made: 'Do nhiều mô khác nhau cùng thực hiện một chức năng tạo thành.',
    trait: 'Tim bơm được máu nhờ sự phối hợp của mô cơ, mô liên kết và mô thần kinh.',
  },
  {
    id: 'he-co-quan',
    name: 'Hệ cơ quan',
    kind: 'to-chuc',
    example: 'Hệ tuần hoàn, hệ tiêu hoá, hệ thần kinh.',
    made: 'Do các cơ quan phối hợp thực hiện một chức năng chung tạo thành.',
    trait:
      'Hệ tuần hoàn vận chuyển các chất khắp cơ thể, điều mà riêng tim hay mạch máu không làm được.',
  },
  {
    id: 'co-the',
    name: 'Cơ thể',
    kind: 'co-ban',
    example: 'Một con người, một cây lúa, một con cá.',
    made: 'Do các hệ cơ quan phối hợp nhịp nhàng tạo thành (sinh vật đơn bào chỉ gồm một tế bào).',
    trait: 'Là một cá thể sống độc lập: trao đổi chất với môi trường, sinh sản và tự điều chỉnh.',
  },
  {
    id: 'quan-the',
    name: 'Quần thể',
    kind: 'co-ban',
    example: 'Một đàn voi, một rừng thông, một đồng lúa.',
    made: 'Do các cá thể cùng loài sống trong một khu vực, vào một thời điểm, tạo thành.',
    trait: 'Có mật độ và tỉ lệ giới tính: những đặc điểm mà một cá thể riêng lẻ không có.',
  },
  {
    id: 'quan-xa',
    name: 'Quần xã',
    kind: 'co-ban',
    example: 'Mọi loài sinh vật trong một cái ao hay một khu rừng.',
    made: 'Do các quần thể khác loài cùng sống trong một khu vực tạo thành.',
    trait: 'Có chuỗi và lưới thức ăn, có sự khống chế sinh học giữa các loài.',
  },
  {
    id: 'he-sinh-thai',
    name: 'Hệ sinh thái',
    kind: 'co-ban',
    example: 'Một cái ao, một khu rừng, một rạn san hô cùng nước, đất, ánh sáng ở đó.',
    made: 'Do quần xã và môi trường sống của nó tương tác với nhau tạo thành.',
    trait: 'Có các chu trình vật chất và dòng năng lượng đi qua cả sinh vật lẫn môi trường.',
  },
  {
    id: 'sinh-quyen',
    name: 'Sinh quyển',
    kind: 'to-chuc',
    example: 'Toàn bộ sinh vật và môi trường sống của chúng trên Trái Đất.',
    made: 'Do mọi hệ sinh thái trên Trái Đất hợp lại, là hệ sinh thái lớn nhất.',
    trait:
      'Các chu trình vật chất diễn ra trên quy mô toàn hành tinh, nhờ năng lượng chủ yếu từ Mặt Trời.',
  },
];

/** @type {{ text: string, level: string }[]} */
export const CHALLENGES = [
  { text: 'Cấp nhỏ nhất có đủ các đặc tính sống.', level: 'te-bao' },
  { text: 'Nhiều tế bào giống nhau cùng thực hiện một chức năng.', level: 'mo' },
  { text: 'Các cơ quan phối hợp thực hiện một chức năng chung.', level: 'he-co-quan' },
  { text: 'Các cá thể cùng loài sống trong một khu vực.', level: 'quan-the' },
  { text: 'Các quần thể khác loài cùng sống trong một khu vực.', level: 'quan-xa' },
  { text: 'Quần xã và môi trường sống của nó.', level: 'he-sinh-thai' },
  { text: 'Toàn bộ sinh vật và môi trường sống trên Trái Đất.', level: 'sinh-quyen' },
];

/**
 * Whether the slider sits on the level a description names; a miss says which
 * way to move, so the learner climbs the ladder rather than guesses.
 * @param {string} target level id @param {number} index the chosen level's place
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeLevel(target, index) {
  const want = LEVELS.findIndex((l) => l.id === target);
  const name = LEVELS[index].name;
  if (index === want)
    return { ok: true, text: `Đúng, đó là cấp ${name.toLowerCase()}. ${LEVELS[want].made}` };
  return {
    ok: false,
    text:
      index < want
        ? `${name} còn nhỏ hơn cấp được mô tả. Hãy kéo lên cấp cao hơn.`
        : `${name} lớn hơn cấp được mô tả. Hãy kéo xuống cấp thấp hơn.`,
  };
}

/** The normal core body temperature, °C. */
export const NORMAL_BODY = 37;
const RANGE_LOW = 35;
const RANGE_HIGH = 38.5;

/**
 * An illustrative model of body temperature against the outside air. With
 * regulation the body stays near 37 °C; without it the body follows the air.
 * @param {number} outside °C @param {boolean} regulated
 * @returns {{ body: number, response: string, danger: boolean }}
 */
export function bodyState(outside, regulated) {
  if (regulated) {
    const shift = Math.max(-0.3, Math.min(0.3, (outside - 25) * 0.01));
    let response = 'Nhiệt độ ngoài trời vừa phải, cơ thể không cần phản ứng mạnh.';
    if (outside >= 30) response = 'Mạch máu dưới da dãn, đổ mồ hôi để toả bớt nhiệt.';
    if (outside <= 20) response = 'Mạch máu dưới da co lại, cơ run để giữ và sinh thêm nhiệt.';
    return { body: NORMAL_BODY + shift, response, danger: false };
  }
  const body = NORMAL_BODY + (outside - 25) * 0.15;
  const danger = body < RANGE_LOW || body > RANGE_HIGH;
  return {
    body,
    response: danger
      ? 'Cơ chế tự điều chỉnh bị rối loạn: thân nhiệt lệch xa mức ổn định, cơ thể có thể mắc bệnh, thậm chí tử vong.'
      : 'Cơ chế tự điều chỉnh bị rối loạn: thân nhiệt đang trôi theo nhiệt độ bên ngoài.',
    danger,
  };
}

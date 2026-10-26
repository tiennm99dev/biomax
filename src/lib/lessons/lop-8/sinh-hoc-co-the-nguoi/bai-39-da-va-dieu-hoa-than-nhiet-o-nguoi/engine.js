/**
 * Teaching models for the skin lesson: a labelled section of the skin for
 * the hotspot diagram, and how the skin responds to the temperature around
 * the body to keep body temperature near 37 °C.
 *
 * The heat load is the air temperature, plus 8 °C when the body is working
 * hard (working muscles release heat). Bands of the heat load decide the
 * response: cold makes the skin's blood vessels narrow, the hair-raising
 * muscles contract and, when very cold, the muscles shiver; heat widens the
 * vessels and makes the sweat glands secrete more sweat.
 */

/** Extra heat load from strong exercise, in °C. */
export const EXERCISE_HEAT = 8;

/**
 * @typedef {{
 *   band: 'rat-lanh' | 'lanh' | 'de-chiu' | 'am' | 'nong';
 *   vessel: 'co' | 'binh-thuong' | 'dan';
 *   vesselWidth: number;
 *   sweat: 0 | 1 | 2;
 *   hairErect: boolean;
 *   shiver: boolean;
 *   text: string;
 * }} SkinResponse
 */

/**
 * @param {number} air air temperature in °C
 * @param {boolean} [exercising]
 * @returns {SkinResponse}
 */
export function skinResponse(air, exercising = false) {
  const load = air + (exercising ? EXERCISE_HEAT : 0);
  if (load < 10)
    return {
      band: 'rat-lanh',
      vessel: 'co',
      vesselWidth: 0.4,
      sweat: 0,
      hairErect: true,
      shiver: true,
      text: 'Rất lạnh: mạch máu dưới da co mạnh, giảm lượng máu qua da để giảm tỏa nhiệt; cơ co chân lông co (sởn gai ốc); cơ run lên để sinh thêm nhiệt; gần như không tiết mồ hôi.',
    };
  if (load < 20)
    return {
      band: 'lanh',
      vessel: 'co',
      vesselWidth: 0.7,
      sweat: 0,
      hairErect: true,
      shiver: false,
      text: 'Lạnh: mạch máu dưới da co lại, da tái đi, nhiệt ít bị mất qua da; cơ co chân lông co làm lông dựng lên (sởn gai ốc); tuyến mồ hôi giảm tiết.',
    };
  if (load <= 28)
    return {
      band: 'de-chiu',
      vessel: 'binh-thuong',
      vesselWidth: 1,
      sweat: 0,
      hairErect: false,
      shiver: false,
      text: 'Dễ chịu: lượng nhiệt sinh ra cân bằng với lượng nhiệt tỏa ra, mạch máu dưới da và tuyến mồ hôi hoạt động bình thường.',
    };
  if (load <= 34)
    return {
      band: 'am',
      vessel: 'dan',
      vesselWidth: 1.5,
      sweat: 1,
      hairErect: false,
      shiver: false,
      text: 'Nóng: mạch máu dưới da dãn ra, nhiều máu qua da để tỏa nhiệt, da hồng hào; tuyến mồ hôi bắt đầu tiết mồ hôi.',
    };
  return {
    band: 'nong',
    vessel: 'dan',
    vesselWidth: 1.9,
    sweat: 2,
    hairErect: false,
    shiver: false,
    text: 'Rất nóng: mạch máu dưới da dãn rộng, da đỏ lên; tuyến mồ hôi tiết nhiều mồ hôi, mồ hôi bay hơi lấy đi nhiệt của cơ thể.',
  };
}

const LAYER = { stroke: '#92400e', width: 1.5 };

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const SKIN_SECTION = {
  id: 'cau-tao-da',
  title: 'Lát cắt da người',
  width: 300,
  height: 290,
  shapes: [
    { kind: 'rect', x: 10, y: 28, w: 280, h: 14, fill: '#e7e5e4', ...LAYER },
    { kind: 'rect', x: 10, y: 42, w: 280, h: 30, fill: '#fed7aa', ...LAYER },
    { kind: 'rect', x: 10, y: 72, w: 280, h: 140, fill: '#fde7d7', ...LAYER },
    { kind: 'rect', x: 10, y: 212, w: 280, h: 64, fill: '#fef08a', ...LAYER },
    // fat cells
    {
      kind: 'path',
      d: 'M 30 230 a 10 10 0 1 0 0.1 0 M 70 250 a 10 10 0 1 0 0.1 0 M 120 232 a 10 10 0 1 0 0.1 0 M 200 250 a 10 10 0 1 0 0.1 0 M 250 232 a 10 10 0 1 0 0.1 0',
      fill: 'none',
      stroke: '#ca8a04',
      width: 1.2,
    },
    // hair, follicle, hair-raising muscle, oil gland
    { kind: 'path', d: 'M 108 160 L 100 4', stroke: '#422006', width: 3, fill: 'none' },
    {
      kind: 'ellipse',
      cx: 108,
      cy: 150,
      rx: 9,
      ry: 16,
      fill: '#fcd34d',
      stroke: '#92400e',
      width: 1.5,
    },
    { kind: 'path', d: 'M 106 120 L 72 104', stroke: '#be123c', width: 4, fill: 'none' },
    {
      kind: 'ellipse',
      cx: 128,
      cy: 106,
      rx: 10,
      ry: 7,
      fill: '#fef3c7',
      stroke: '#a16207',
      width: 1.5,
    },
    // sweat gland and duct
    {
      kind: 'path',
      d: 'M 236 176 q 12 -6 0 -12 q -12 -6 0 -12 L 230 28',
      stroke: '#0284c7',
      width: 2.5,
      fill: 'none',
    },
    { kind: 'circle', cx: 236, cy: 176, r: 9, fill: '#bae6fd', stroke: '#0284c7', width: 1.5 },
    // blood vessel and nerve ending
    {
      kind: 'path',
      d: 'M 10 160 C 80 176, 150 132, 290 158',
      stroke: '#dc2626',
      width: 5,
      fill: 'none',
    },
    { kind: 'path', d: 'M 190 96 L 196 200', stroke: '#7c3aed', width: 2, fill: 'none' },
    { kind: 'circle', cx: 190, cy: 96, r: 5, fill: '#ddd6fe', stroke: '#7c3aed', width: 1.5 },
  ],
  parts: [
    {
      id: 'tang-sung',
      name: 'Tầng sừng',
      info: 'Lớp ngoài cùng của biểu bì, gồm những tế bào đã chết hóa sừng, xếp sít nhau, dễ bong ra; giúp chống thấm nước, ngăn vi khuẩn.',
      x: 40,
      y: 34,
    },
    {
      id: 'tang-te-bao-song',
      name: 'Tầng tế bào sống',
      info: 'Nằm dưới tầng sừng, các tế bào liên tục phân chia tạo tế bào mới thay thế tế bào bong ra; có chứa sắc tố tạo màu da.',
      x: 40,
      y: 62,
    },
    {
      id: 'long',
      name: 'Lông',
      accept: ['sợi lông'],
      info: 'Mọc từ bao lông; lông giúp giữ ấm và cản bụi. Khi lạnh, cơ co chân lông co làm lông dựng đứng.',
      x: 104,
      y: 18,
    },
    {
      id: 'co-chan-long',
      name: 'Cơ co chân lông',
      info: 'Bó cơ nhỏ nối bao lông với lớp bì. Khi trời lạnh, cơ co lại làm lông dựng lên, da sởn gai ốc, giảm mất nhiệt.',
      x: 80,
      y: 116,
    },
    {
      id: 'tuyen-nhon',
      name: 'Tuyến nhờn',
      info: 'Tiết chất nhờn lên bề mặt da qua bao lông, giúp da và lông mềm mại, không thấm nước, hạn chế vi khuẩn.',
      x: 136,
      y: 96,
    },
    {
      id: 'bao-long',
      name: 'Bao lông',
      accept: ['nang lông'],
      info: 'Nơi lông mọc ra, nằm trong lớp bì. Bao lông bị bít tắc, viêm có thể gây mụn trứng cá.',
      x: 108,
      y: 152,
    },
    {
      id: 'mach-mau',
      name: 'Mạch máu',
      info: 'Mạch máu trong lớp bì nuôi dưỡng da. Mạch dãn khi nóng để tỏa nhiệt, co khi lạnh để giữ nhiệt.',
      x: 160,
      y: 156,
    },
    {
      id: 'thu-quan',
      name: 'Thụ quan',
      accept: ['đầu mút dây thần kinh', 'thụ quan cảm giác'],
      info: 'Đầu mút của dây thần kinh trong lớp bì, tiếp nhận kích thích nóng, lạnh, đau, áp lực, giúp da thực hiện chức năng cảm giác.',
      x: 200,
      y: 92,
    },
    {
      id: 'tuyen-mo-hoi',
      name: 'Tuyến mồ hôi',
      info: 'Tiết mồ hôi theo ống dẫn ra bề mặt da: bài tiết nước, muối, urea và tỏa nhiệt khi mồ hôi bay hơi.',
      x: 258,
      y: 180,
    },
    {
      id: 'mo-duoi-da',
      name: 'Lớp mỡ dưới da',
      accept: ['mỡ dưới da'],
      info: 'Lớp trong cùng, chứa mỡ dự trữ; giúp cách nhiệt, giữ ấm và đệm, giảm tác động cơ học lên cơ thể.',
      x: 160,
      y: 254,
    },
  ],
};

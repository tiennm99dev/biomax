/**
 * Levels of organisation of a multicellular body (cell, tissue, organ, organ
 * system, body) as two trees, a green plant and the human body, which the
 * widget opens level by level, plus the helpers for the "which level?" quiz.
 */

/** @typedef {0 | 1 | 2 | 3 | 4} Level 0 = cơ thể, 4 = tế bào */
/**
 * @typedef {{ id: string, name: string, info: string, children?: OrgNode[] }} OrgNode
 */

/** Level names from the body down to the cell. */
export const LEVELS = ['Cơ thể', 'Hệ cơ quan', 'Cơ quan', 'Mô', 'Tế bào'];

/** @type {OrgNode} */
const PLANT = {
  id: 'cay-cai',
  name: 'Cây cải',
  info: 'Cơ thể thực vật gồm hai hệ cơ quan: hệ chồi ở trên mặt đất và hệ rễ ở dưới mặt đất.',
  children: [
    {
      id: 'he-choi',
      name: 'Hệ chồi',
      info: 'Gồm thân, lá (cơ quan sinh dưỡng) và hoa, quả, hạt (cơ quan sinh sản).',
      children: [
        {
          id: 'la',
          name: 'Lá',
          info: 'Cơ quan quang hợp, tạo chất hữu cơ nuôi cây; được cấu tạo từ nhiều mô.',
          children: [
            {
              id: 'mo-bieu-bi-la',
              name: 'Mô biểu bì',
              info: 'Lớp tế bào xếp sát nhau phủ ngoài lá, bảo vệ lá.',
              children: [
                {
                  id: 'tb-bieu-bi-la',
                  name: 'Tế bào biểu bì',
                  info: 'Tế bào dẹt, trong suốt, xếp khít nhau.',
                },
              ],
            },
            {
              id: 'mo-mem-la',
              name: 'Mô mềm (thịt lá)',
              info: 'Phần lớn của phiến lá, nơi diễn ra quang hợp.',
              children: [
                {
                  id: 'tb-thit-la',
                  name: 'Tế bào thịt lá',
                  info: 'Chứa nhiều lục lạp, thực hiện quang hợp.',
                },
              ],
            },
            {
              id: 'mo-dan-la',
              name: 'Mô dẫn (gân lá)',
              info: 'Vận chuyển nước, muối khoáng và chất hữu cơ.',
              children: [
                {
                  id: 'tb-mach-la',
                  name: 'Tế bào mạch dẫn',
                  info: 'Tế bào dài, nối với nhau thành ống dẫn.',
                },
              ],
            },
          ],
        },
        {
          id: 'than',
          name: 'Thân',
          info: 'Nâng đỡ cây, vận chuyển nước, muối khoáng và chất hữu cơ.',
          children: [
            {
              id: 'mo-dan-than',
              name: 'Mô dẫn',
              info: 'Gồm mạch gỗ dẫn nước, muối khoáng và mạch rây dẫn chất hữu cơ.',
              children: [
                {
                  id: 'tb-mach-than',
                  name: 'Tế bào mạch gỗ',
                  info: 'Tế bào dài, vách dày, xếp nối tiếp thành ống dẫn nước.',
                },
              ],
            },
            {
              id: 'mo-bieu-bi-than',
              name: 'Mô biểu bì',
              info: 'Bao bọc, bảo vệ thân.',
              children: [
                {
                  id: 'tb-bieu-bi-than',
                  name: 'Tế bào biểu bì',
                  info: 'Xếp sát nhau thành lớp ngoài cùng của thân non.',
                },
              ],
            },
          ],
        },
        {
          id: 'hoa',
          name: 'Hoa',
          info: 'Cơ quan sinh sản; sau khi thụ phấn, hoa tạo thành quả và hạt.',
          children: [
            {
              id: 'mo-mem-hoa',
              name: 'Mô mềm (cánh hoa)',
              info: 'Tạo nên cánh hoa, thường có màu sắc thu hút côn trùng.',
              children: [
                {
                  id: 'tb-canh-hoa',
                  name: 'Tế bào cánh hoa',
                  info: 'Chứa sắc tố tạo màu cho cánh hoa.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'he-re',
      name: 'Hệ rễ',
      info: 'Gồm rễ chính và các rễ con, giữ cây đứng vững và hút nước, muối khoáng.',
      children: [
        {
          id: 're',
          name: 'Rễ',
          info: 'Bám vào đất, hút nước và muối khoáng cho cây.',
          children: [
            {
              id: 'mo-bieu-bi-re',
              name: 'Mô biểu bì',
              info: 'Lớp ngoài cùng của rễ, có nhiều lông hút.',
              children: [
                {
                  id: 'tb-long-hut',
                  name: 'Tế bào lông hút',
                  info: 'Tế bào biểu bì kéo dài thành lông hút, len lỏi trong đất để hút nước.',
                },
              ],
            },
            {
              id: 'mo-dan-re',
              name: 'Mô dẫn',
              info: 'Đưa nước và muối khoáng từ rễ lên thân.',
              children: [
                {
                  id: 'tb-mach-re',
                  name: 'Tế bào mạch gỗ',
                  info: 'Xếp nối tiếp thành ống dẫn nước lên thân.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/** @type {OrgNode} */
const HUMAN = {
  id: 'nguoi',
  name: 'Cơ thể người',
  info: 'Gồm nhiều hệ cơ quan phối hợp với nhau: hệ tiêu hoá, tuần hoàn, hô hấp, thần kinh, bài tiết, vận động...',
  children: [
    {
      id: 'he-tieu-hoa',
      name: 'Hệ tiêu hoá',
      info: 'Biến đổi thức ăn thành chất dinh dưỡng cho cơ thể và thải chất bã.',
      children: [
        {
          id: 'da-day',
          name: 'Dạ dày',
          info: 'Co bóp, nghiền trộn thức ăn và tiết dịch vị để tiêu hoá thức ăn.',
          children: [
            {
              id: 'mo-co-da-day',
              name: 'Mô cơ',
              info: 'Các lớp cơ co bóp để nhào trộn thức ăn.',
              children: [
                {
                  id: 'tb-co-tron',
                  name: 'Tế bào cơ trơn',
                  info: 'Tế bào hình thoi, có khả năng co rút.',
                },
              ],
            },
            {
              id: 'mo-bieu-bi-da-day',
              name: 'Mô biểu bì',
              info: 'Lót mặt trong dạ dày, tiết dịch vị.',
              children: [
                {
                  id: 'tb-bieu-bi-da-day',
                  name: 'Tế bào biểu bì',
                  info: 'Xếp sát nhau, một số tế bào tiết dịch vị.',
                },
              ],
            },
          ],
        },
        {
          id: 'ruot-non',
          name: 'Ruột non',
          info: 'Tiêu hoá tiếp thức ăn và hấp thụ chất dinh dưỡng vào máu.',
          children: [
            {
              id: 'mo-bieu-bi-ruot',
              name: 'Mô biểu bì',
              info: 'Lót mặt trong ruột, hấp thụ chất dinh dưỡng.',
              children: [
                {
                  id: 'tb-bieu-bi-ruot',
                  name: 'Tế bào biểu bì ruột',
                  info: 'Bề mặt có nhiều nếp gấp nhỏ, làm tăng diện tích hấp thụ.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'he-tuan-hoan',
      name: 'Hệ tuần hoàn',
      info: 'Vận chuyển chất dinh dưỡng, khí oxygen tới các tế bào và mang chất thải đi.',
      children: [
        {
          id: 'tim',
          name: 'Tim',
          info: 'Co bóp đẩy máu đi khắp cơ thể.',
          children: [
            {
              id: 'mo-co-tim',
              name: 'Mô cơ tim',
              info: 'Thành tim, co bóp liên tục suốt đời.',
              children: [
                {
                  id: 'tb-co-tim',
                  name: 'Tế bào cơ tim',
                  info: 'Tế bào phân nhánh, nối với nhau thành mạng, co rút nhịp nhàng.',
                },
              ],
            },
          ],
        },
        {
          id: 'mach-mau',
          name: 'Mạch máu',
          info: 'Động mạch, tĩnh mạch và mao mạch dẫn máu đi khắp cơ thể.',
          children: [
            {
              id: 'mo-co-mach',
              name: 'Mô cơ trơn',
              info: 'Nằm trong thành mạch, co giãn giúp điều chỉnh lượng máu chảy qua.',
              children: [
                {
                  id: 'tb-co-tron-mach',
                  name: 'Tế bào cơ trơn',
                  info: 'Tế bào hình thoi, có khả năng co rút.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'he-ho-hap',
      name: 'Hệ hô hấp',
      info: 'Lấy khí oxygen từ không khí vào cơ thể và thải khí carbon dioxide ra ngoài.',
      children: [
        {
          id: 'phoi',
          name: 'Phổi',
          info: 'Nơi trao đổi khí giữa không khí và máu.',
          children: [
            {
              id: 'mo-bieu-bi-phoi',
              name: 'Mô biểu bì',
              info: 'Thành các phế nang rất mỏng, cho khí đi qua dễ dàng.',
              children: [
                {
                  id: 'tb-phe-nang',
                  name: 'Tế bào biểu bì phế nang',
                  info: 'Tế bào dẹt, rất mỏng, giúp trao đổi khí nhanh.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'he-than-kinh',
      name: 'Hệ thần kinh',
      info: 'Điều khiển, điều hoà và phối hợp hoạt động của các cơ quan.',
      children: [
        {
          id: 'nao',
          name: 'Não',
          info: 'Trung ương thần kinh, tiếp nhận và xử lí thông tin.',
          children: [
            {
              id: 'mo-than-kinh',
              name: 'Mô thần kinh',
              info: 'Gồm các tế bào thần kinh liên hệ với nhau.',
              children: [
                {
                  id: 'tb-than-kinh',
                  name: 'Tế bào thần kinh',
                  info: 'Hình sao, có nhiều tua và một sợi dài, dẫn truyền xung thần kinh.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'he-van-dong',
      name: 'Hệ vận động',
      info: 'Gồm xương và cơ, giúp cơ thể đứng vững và cử động.',
      children: [
        {
          id: 'co-bap-tay',
          name: 'Cơ bắp tay',
          info: 'Co lại để kéo xương cẳng tay, giúp gập tay.',
          children: [
            {
              id: 'mo-co-van',
              name: 'Mô cơ vân',
              info: 'Gồm các tế bào cơ dài, co rút theo ý muốn.',
              children: [
                {
                  id: 'tb-co-van',
                  name: 'Tế bào cơ vân',
                  info: 'Tế bào dài như sợi, có vân ngang, co rút mạnh.',
                },
              ],
            },
          ],
        },
        {
          id: 'xuong-dui',
          name: 'Xương đùi',
          info: 'Nâng đỡ cơ thể, là chỗ bám của cơ.',
          children: [
            {
              id: 'mo-xuong',
              name: 'Mô xương',
              info: 'Mô cứng, chắc, chứa nhiều chất khoáng.',
              children: [
                {
                  id: 'tb-xuong',
                  name: 'Tế bào xương',
                  info: 'Nằm trong chất nền cứng của xương, nuôi dưỡng xương.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'he-bai-tiet',
      name: 'Hệ bài tiết',
      info: 'Lọc máu, tạo nước tiểu và thải chất độc, chất thừa ra ngoài.',
      children: [
        {
          id: 'than',
          name: 'Thận',
          info: 'Lọc máu, tạo thành nước tiểu.',
          children: [
            {
              id: 'mo-bieu-bi-than',
              name: 'Mô biểu bì',
              info: 'Lót các ống thận, tham gia tạo nước tiểu.',
              children: [
                {
                  id: 'tb-ong-than',
                  name: 'Tế bào biểu bì ống thận',
                  info: 'Hút lại các chất cần thiết, thải chất thừa vào nước tiểu.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/** @typedef {'thuc-vat' | 'nguoi'} BodyId */

/** @type {Record<BodyId, OrgNode>} */
export const BODIES = { 'thuc-vat': PLANT, nguoi: HUMAN };

/**
 * Nodes along a path of child ids, starting at the root.
 * @param {OrgNode} root @param {string[]} path child ids, one per level below the root
 * @returns {OrgNode[]}
 */
export function nodesAlong(root, path) {
  /** @type {OrgNode[]} */
  const out = [root];
  let node = root;
  for (const id of path) {
    const next = node.children?.find((c) => c.id === id);
    if (!next) break;
    out.push(next);
    node = next;
  }
  return out;
}

/**
 * Every node with its level and its chain of ancestors, depth first.
 * @param {OrgNode} root
 * @returns {Array<{ node: OrgNode, level: number, chain: OrgNode[] }>}
 */
export function flatten(root) {
  /** @type {Array<{ node: OrgNode, level: number, chain: OrgNode[] }>} */
  const out = [];
  /** @param {OrgNode} n @param {OrgNode[]} chain */
  const walk = (n, chain) => {
    const here = [...chain, n];
    out.push({ node: n, level: chain.length, chain: here });
    for (const c of n.children ?? []) walk(c, here);
  };
  walk(root, []);
  return out;
}

/**
 * The chain from cell up to body, written with arrows, as the book does.
 * @param {OrgNode[]} chain nodes from the body down
 */
export function chainText(chain) {
  return [...chain]
    .reverse()
    .map((n) => n.name)
    .join(' → ');
}

/**
 * Quiz items for one body: every node below the root, ordered by a seeded
 * shuffle so the order is the same on server and client.
 * @param {OrgNode} root @param {number} seed
 */
export function quizItems(root, seed) {
  const items = flatten(root).filter((x) => x.level > 0);
  let s = seed >>> 0 || 1;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

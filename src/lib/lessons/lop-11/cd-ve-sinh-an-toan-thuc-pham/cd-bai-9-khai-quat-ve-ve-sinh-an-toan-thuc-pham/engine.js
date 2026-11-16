/**
 * The kitchen game of the lesson: a kitchen split into areas holds things
 * done right and food safety violations. The learner taps a thing; a
 * violation is then named by the group of the agent that makes the food
 * unsafe (biological, chemical or physical), and the game explains the
 * risk and the fix. No DOM here, so it is tested in Node.
 */

/**
 * @typedef {'sinh-hoc' | 'hoa-hoc' | 'vat-li'} AgentId
 * @typedef {{ id: string, name: string, examples: string }} Agent
 * @typedef {{ id: string, name: string }} Zone
 * @typedef {{
 *   id: string, zone: string, icon: string, label: string,
 *   agent: AgentId | null, why: string, fix?: string,
 * }} Item
 * @typedef {{ tone: 'ok' | 'warn' | 'info', text: string }} Note
 */

/** @type {Agent[]} */
export const AGENTS = [
  {
    id: 'sinh-hoc',
    name: 'Sinh học',
    examples: 'vi khuẩn, virus, nấm mốc, kí sinh trùng',
  },
  {
    id: 'hoa-hoc',
    name: 'Hoá học',
    examples: 'thuốc bảo vệ thực vật, chất tẩy rửa, kim loại nặng, chất độc có sẵn',
  },
  { id: 'vat-li', name: 'Vật lí', examples: 'mảnh thuỷ tinh, kim loại, sạn, xương' },
];

/** @type {Zone[]} */
export const ZONES = [
  { id: 'so-che', name: 'Khu sơ chế' },
  { id: 'bep', name: 'Bếp nấu' },
  { id: 'ke', name: 'Kệ và tủ' },
  { id: 'ban-an', name: 'Bàn ăn' },
];

/** @type {Item[]} */
export const ITEMS = [
  {
    id: 'thot-chung',
    zone: 'so-che',
    icon: '🔪',
    label: 'Thái thịt sống xong, dùng luôn thớt và dao đó để thái thịt luộc',
    agent: 'sinh-hoc',
    why: 'Vi khuẩn từ thịt sống bám trên thớt, dao truyền sang thịt chín (ô nhiễm chéo), mà thịt chín không được nấu lại.',
    fix: 'Dùng thớt, dao riêng cho thực phẩm sống và chín; rửa kĩ, tráng nước sôi và để khô.',
  },
  {
    id: 'rau-thuoc',
    zone: 'so-che',
    icon: '🥬',
    label: 'Rau cải hái ngay hôm sau khi phun thuốc trừ sâu',
    agent: 'hoa-hoc',
    why: 'Chưa đủ thời gian cách li nên thuốc bảo vệ thực vật còn tồn dư trên rau.',
    fix: 'Chỉ thu hoạch sau thời gian cách li ghi trên bao bì thuốc; mua rau có nguồn gốc rõ ràng, ngâm rửa kĩ.',
  },
  {
    id: 'gao-san',
    zone: 'so-che',
    icon: '🍚',
    label: 'Gạo còn lẫn sạn, đá nhỏ, đổ thẳng vào nồi nấu',
    agent: 'vat-li',
    why: 'Sạn, đá nhỏ là dị vật: có thể làm gãy răng, tổn thương miệng, đường tiêu hoá.',
    fix: 'Nhặt sạn, vo gạo cẩn thận; mua gạo có nhãn mác, nguồn gốc rõ ràng.',
  },
  {
    id: 'rua-rau',
    zone: 'so-che',
    icon: '🚰',
    label: 'Rửa rau nhiều lần dưới vòi nước sạch',
    agent: null,
    why: 'Rửa dưới vòi nước sạch chảy liên tục cuốn trôi đất, cát, phần lớn vi sinh vật và một phần hoá chất bám trên rau.',
  },
  {
    id: 'nguoi-nau',
    zone: 'bep',
    icon: '🧑‍🍳',
    label:
      'Người nấu đang bị tiêu chảy, không rửa tay sau khi đi vệ sinh vẫn chia thức ăn bằng tay',
    agent: 'sinh-hoc',
    why: 'Mầm bệnh đường tiêu hoá trên tay người bệnh dính vào thức ăn đã nấu chín.',
    fix: 'Người đang mắc bệnh truyền nhiễm không chế biến thực phẩm; rửa tay bằng xà phòng, dùng kẹp, đũa, găng tay khi chia thức ăn.',
  },
  {
    id: 'khoai-mam',
    zone: 'bep',
    icon: '🥔',
    label: 'Luộc khoai tây đã mọc mầm, vỏ xanh',
    agent: 'hoa-hoc',
    why: 'Khoai tây mọc mầm, vỏ xanh chứa nhiều solanin, một chất độc có sẵn trong củ; đun nấu không phá huỷ hết chất này.',
    fix: 'Không dùng củ khoai tây đã mọc mầm hoặc có vỏ xanh.',
  },
  {
    id: 'coc-vo',
    zone: 'bep',
    icon: '🥛',
    label: 'Cốc thuỷ tinh vỡ cạnh nồi canh, chưa thu dọn mảnh vỡ',
    agent: 'vat-li',
    why: 'Mảnh thuỷ tinh có thể rơi vào thức ăn, gây tổn thương miệng, thực quản, dạ dày.',
    fix: 'Thu dọn ngay mảnh vỡ, bỏ thức ăn có thể đã lẫn mảnh vỡ.',
  },
  {
    id: 'nau-chin',
    zone: 'bep',
    icon: '🍲',
    label: 'Nấu canh sôi kĩ và ăn ngay sau khi nấu',
    agent: null,
    why: 'Nhiệt độ sôi diệt phần lớn vi khuẩn; ăn ngay không để vi khuẩn kịp sinh sôi trở lại.',
  },
  {
    id: 'thuoc-chuot',
    zone: 'ke',
    icon: '🧴',
    label: 'Chai nước tẩy rửa và gói thuốc diệt chuột để chung kệ với lọ muối, đường',
    agent: 'hoa-hoc',
    why: 'Hoá chất có thể đổ, rò rỉ hoặc bị lấy nhầm vào thức ăn, gây ngộ độc.',
    fix: 'Cất hoá chất ở chỗ riêng, xa khu chế biến và nơi để thực phẩm, có nhãn rõ ràng.',
  },
  {
    id: 'lac-moc',
    zone: 'ke',
    icon: '🥜',
    label: 'Lạc (đậu phộng) bị mốc xanh vàng vẫn giữ lại để rang',
    agent: 'sinh-hoc',
    why: 'Nấm mốc trên lạc sinh độc tố aflatoxin, chất có thể gây ung thư gan; rang không phá huỷ hết độc tố.',
    fix: 'Bỏ lạc, ngô, hạt bị mốc; bảo quản hạt khô ráo, kín.',
  },
  {
    id: 'tu-lanh',
    zone: 'ke',
    icon: '🧊',
    label: 'Ngăn mát tủ lạnh khoảng 4 °C; thịt sống bọc kín, để ngăn dưới, tách khỏi đồ chín',
    agent: null,
    why: 'Nhiệt độ thấp làm vi khuẩn chậm sinh sôi; bọc kín và để riêng tránh nước thịt sống nhỏ xuống đồ chín.',
  },
  {
    id: 'mi-goi',
    zone: 'ke',
    icon: '📦',
    label: 'Gói mì có nhãn mác đầy đủ, còn hạn sử dụng',
    agent: null,
    why: 'Nhãn mác cho biết nơi sản xuất, thành phần và hạn sử dụng: thực phẩm có nguồn gốc rõ ràng.',
  },
  {
    id: 'ruoi-bau',
    zone: 'ban-an',
    icon: '🪰',
    label: 'Đĩa thịt luộc để trên bàn từ sáng, không đậy, ruồi bâu',
    agent: 'sinh-hoc',
    why: 'Ruồi mang vi khuẩn từ rác, phân tới thức ăn; thức ăn để lâu ở nhiệt độ phòng là môi trường cho vi khuẩn sinh sôi.',
    fix: 'Đậy kín thức ăn bằng lồng bàn; ăn trong vòng vài giờ hoặc cất tủ lạnh, đun kĩ lại trước khi ăn.',
  },
  {
    id: 'dua-xo-son',
    zone: 'ban-an',
    icon: '🪣',
    label: 'Muối dưa chua trong xô đựng sơn cũ',
    agent: 'hoa-hoc',
    why: 'Axit trong nước dưa hoà tan kim loại nặng (như chì) và hoá chất trong cặn sơn, làm chúng thôi nhiễm vào thực phẩm.',
    fix: 'Muối dưa trong chum, vại sành hoặc hộp chuyên dùng cho thực phẩm.',
  },
  {
    id: 'thung-rac',
    zone: 'ban-an',
    icon: '🗑️',
    label: 'Thùng rác không nắp đặt sát bàn ăn',
    agent: 'sinh-hoc',
    why: 'Rác hở thu hút ruồi, gián, chuột: chúng mang vi sinh vật gây bệnh tới thức ăn.',
    fix: 'Dùng thùng rác có nắp, đặt xa nơi chế biến và ăn uống, đổ rác hằng ngày.',
  },
  {
    id: 'long-ban',
    zone: 'ban-an',
    icon: '🍽️',
    label: 'Thức ăn chín được đậy bằng lồng bàn',
    agent: null,
    why: 'Lồng bàn ngăn ruồi, gián và bụi bám vào thức ăn đã nấu chín.',
  },
];

export const VIOLATIONS = ITEMS.filter((i) => i.agent);

/** @param {string} id */
export const itemOf = (id) => ITEMS.find((i) => i.id === id) ?? null;
/** @param {string} id */
export const agentOf = (id) => AGENTS.find((a) => a.id === id) ?? null;

/**
 * What tapping a thing in the kitchen tells the learner.
 * @param {string} id
 * @returns {Note & { needsAgent: boolean }}
 */
export function inspect(id) {
  const item = itemOf(id);
  if (!item) return { tone: 'info', text: 'Chọn một vật trong bếp.', needsAgent: false };
  if (!item.agent) {
    return { tone: 'ok', text: `Đây là việc làm đúng. ${item.why}`, needsAgent: false };
  }
  return {
    tone: 'info',
    text: 'Đúng là vi phạm vệ sinh an toàn thực phẩm. Tác nhân gây mất an toàn ở đây thuộc nhóm nào?',
    needsAgent: true,
  };
}

/**
 * Checks the group of agent named for a violation.
 * @param {string} id @param {string} agentId
 * @returns {Note & { ok: boolean }}
 */
export function classify(id, agentId) {
  const item = itemOf(id);
  const agent = agentOf(agentId);
  if (!item || !item.agent || !agent) {
    return { ok: false, tone: 'info', text: 'Chọn một vi phạm trước.' };
  }
  const right = /** @type {Agent} */ (agentOf(item.agent));
  if (agentId === item.agent) {
    return {
      ok: true,
      tone: 'ok',
      text: `Đúng, tác nhân ${right.name.toLowerCase()}. ${item.why} Cách khắc phục: ${item.fix?.charAt(0).toLowerCase()}${item.fix?.slice(1)}`,
    };
  }
  return {
    ok: false,
    tone: 'warn',
    text: `Chưa đúng. Tác nhân ${agent.name.toLowerCase()} gồm ${agent.examples}. Hãy nghĩ xem điều gì trong tình huống này trực tiếp làm thực phẩm mất an toàn.`,
  };
}

/**
 * The score line once some violations are found.
 * @param {string[]} found ids classified right
 * @param {number} slips wrong taps and wrong groups
 * @returns {Note}
 */
export function progress(found, slips) {
  const total = VIOLATIONS.length;
  const n = found.filter((id) => itemOf(id)?.agent).length;
  if (n === total) {
    return {
      tone: 'ok',
      text: `Em đã tìm đủ ${total} vi phạm${slips ? ` (${slips} lần chọn chưa đúng)` : ' mà không chọn sai lần nào'}. Ô nhiễm có thể xảy ra ở mọi khâu: nguyên liệu, sơ chế, chế biến, bảo quản và khi ăn.`,
    };
  }
  return { tone: 'info', text: `Đã tìm được ${n} trên ${total} vi phạm.` };
}

/**
 * How many found violations fall in each group of agents.
 * @param {string[]} found
 */
export function tallyByAgent(found) {
  return AGENTS.map((a) => ({
    ...a,
    found: found.filter((id) => itemOf(id)?.agent === a.id).length,
    total: VIOLATIONS.filter((v) => v.agent === a.id).length,
  }));
}

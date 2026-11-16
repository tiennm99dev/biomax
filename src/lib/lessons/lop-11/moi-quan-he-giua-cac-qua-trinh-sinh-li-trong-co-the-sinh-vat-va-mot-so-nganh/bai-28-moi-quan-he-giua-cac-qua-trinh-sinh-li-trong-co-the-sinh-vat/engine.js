/**
 * The network of physiological processes in a plant and in an animal. Each
 * link says that one process supplies another (`from` → `to`) and why. When
 * one process stops, the processes it supplies are hit first, then the ones
 * those supply, and so on: the knock-on chain the lesson is about.
 */

/** @typedef {'thuc-vat' | 'dong-vat'} Organism */
/** @typedef {{ id: string, name: string, short: [string, string], x: number, y: number }} Process */
/** @typedef {{ from: string, to: string, why: string }} Link */
/** @typedef {{ processes: Process[], links: Link[] }} Network */
/** @typedef {{ id: string, step: number, causes: Link[] }} Hit */

/** @type {Record<Organism, string>} */
export const ORGANISM_NAMES = { 'thuc-vat': 'Thực vật', 'dong-vat': 'Động vật' };

/** @type {Record<Organism, Network>} */
export const NETWORKS = {
  'thuc-vat': {
    processes: [
      {
        id: 'hap-thu',
        name: 'Hấp thụ nước và khoáng',
        short: ['Hấp thụ', 'nước, khoáng'],
        x: 300,
        y: 330,
      },
      {
        id: 'van-chuyen',
        name: 'Vận chuyển các chất',
        short: ['Vận chuyển', 'các chất'],
        x: 180,
        y: 180,
      },
      {
        id: 'thoat-hoi-nuoc',
        name: 'Thoát hơi nước',
        short: ['Thoát', 'hơi nước'],
        x: 300,
        y: 180,
      },
      { id: 'quang-hop', name: 'Quang hợp', short: ['Quang hợp', ''], x: 60, y: 330 },
      { id: 'ho-hap', name: 'Hô hấp', short: ['Hô hấp', ''], x: 180, y: 330 },
      {
        id: 'sinh-truong',
        name: 'Sinh trưởng và phát triển',
        short: ['Sinh trưởng,', 'phát triển'],
        x: 60,
        y: 180,
      },
      { id: 'sinh-san', name: 'Sinh sản', short: ['Sinh sản', ''], x: 60, y: 30 },
    ],
    links: [
      {
        from: 'hap-thu',
        to: 'van-chuyen',
        why: 'nước và khoáng rễ hút vào mới đi lên được mạch gỗ',
      },
      {
        from: 'van-chuyen',
        to: 'quang-hop',
        why: 'mạch gỗ đưa nước và khoáng lên lá làm nguyên liệu quang hợp',
      },
      {
        from: 'van-chuyen',
        to: 'thoat-hoi-nuoc',
        why: 'nước thoát qua lá là nước do mạch gỗ đưa lên',
      },
      {
        from: 'van-chuyen',
        to: 'ho-hap',
        why: 'mạch rây đưa chất hữu cơ tới rễ, thân, củ làm nguyên liệu hô hấp',
      },
      {
        from: 'van-chuyen',
        to: 'sinh-truong',
        why: 'mạch gỗ và mạch rây đưa nước, khoáng, chất hữu cơ tới các mô đang lớn',
      },
      {
        from: 'thoat-hoi-nuoc',
        to: 'hap-thu',
        why: 'thoát hơi nước là động lực kéo nước từ rễ lên lá, nhờ đó rễ hút được nước',
      },
      {
        from: 'thoat-hoi-nuoc',
        to: 'quang-hop',
        why: 'khí khổng mở để thoát hơi nước cũng là đường CO₂ vào lá; thoát hơi nước còn hạ nhiệt độ lá',
      },
      {
        from: 'quang-hop',
        to: 'ho-hap',
        why: 'quang hợp tạo chất hữu cơ và O₂, nguyên liệu của hô hấp',
      },
      {
        from: 'quang-hop',
        to: 'van-chuyen',
        why: 'chất hữu cơ do lá tổng hợp được đưa vào mạch rây',
      },
      {
        from: 'ho-hap',
        to: 'quang-hop',
        why: 'hô hấp giải phóng CO₂ và năng lượng (ATP) cho các hoạt động của tế bào lá',
      },
      {
        from: 'ho-hap',
        to: 'hap-thu',
        why: 'hô hấp cung cấp ATP để rễ hút khoáng chủ động và tạo chất làm tăng áp suất thẩm thấu của tế bào rễ',
      },
      {
        from: 'ho-hap',
        to: 'sinh-truong',
        why: 'hô hấp cung cấp năng lượng và sản phẩm trung gian để tổng hợp chất, phân chia tế bào',
      },
      {
        from: 'sinh-truong',
        to: 'hap-thu',
        why: 'rễ mọc dài, lông hút mới làm tăng bề mặt hấp thụ',
      },
      { from: 'sinh-truong', to: 'quang-hop', why: 'lá mới làm tăng diện tích quang hợp' },
      {
        from: 'sinh-truong',
        to: 'sinh-san',
        why: 'cây phải sinh trưởng, phát triển tới giai đoạn trưởng thành mới ra hoa, kết quả',
      },
      {
        from: 'sinh-san',
        to: 'van-chuyen',
        why: 'hoa, quả, hạt đang lớn là nơi nhận chất hữu cơ, quyết định chiều vận chuyển trong mạch rây',
      },
    ],
  },
  'dong-vat': {
    processes: [
      { id: 'tieu-hoa', name: 'Tiêu hoá', short: ['Tiêu hoá', ''], x: 300, y: 330 },
      {
        id: 'ho-hap',
        name: 'Hô hấp (trao đổi khí)',
        short: ['Hô hấp', '(trao đổi khí)'],
        x: 240,
        y: 105,
      },
      { id: 'tuan-hoan', name: 'Tuần hoàn', short: ['Tuần hoàn', ''], x: 300, y: 180 },
      { id: 'bai-tiet', name: 'Bài tiết', short: ['Bài tiết', ''], x: 60, y: 330 },
      {
        id: 'chuyen-hoa',
        name: 'Chuyển hoá ở tế bào',
        short: ['Chuyển hoá', 'ở tế bào'],
        x: 180,
        y: 330,
      },
      {
        id: 'dieu-hoa',
        name: 'Điều hoà thần kinh và nội tiết',
        short: ['Thần kinh,', 'nội tiết'],
        x: 60,
        y: 180,
      },
      {
        id: 'sinh-truong',
        name: 'Sinh trưởng và phát triển',
        short: ['Sinh trưởng,', 'phát triển'],
        x: 60,
        y: 30,
      },
      { id: 'sinh-san', name: 'Sinh sản', short: ['Sinh sản', ''], x: 180, y: 30 },
    ],
    links: [
      { from: 'tieu-hoa', to: 'tuan-hoan', why: 'chất dinh dưỡng hấp thụ ở ruột non đi vào máu' },
      { from: 'ho-hap', to: 'tuan-hoan', why: 'O₂ từ phổi khuếch tán vào máu' },
      { from: 'tuan-hoan', to: 'ho-hap', why: 'máu đưa CO₂ tới phổi để thải ra ngoài' },
      { from: 'tuan-hoan', to: 'chuyen-hoa', why: 'máu đưa O₂ và chất dinh dưỡng tới từng tế bào' },
      {
        from: 'tuan-hoan',
        to: 'bai-tiet',
        why: 'máu đưa chất thải (urea, CO₂...) tới cơ quan bài tiết',
      },
      {
        from: 'chuyen-hoa',
        to: 'tieu-hoa',
        why: 'cơ ống tiêu hoá co bóp, tuyến tiêu hoá tiết dịch nhờ ATP của tế bào',
      },
      { from: 'chuyen-hoa', to: 'ho-hap', why: 'cơ hô hấp co dãn nhờ ATP của tế bào' },
      { from: 'chuyen-hoa', to: 'tuan-hoan', why: 'tim co bóp nhờ ATP của tế bào cơ tim' },
      {
        from: 'chuyen-hoa',
        to: 'bai-tiet',
        why: 'thận lọc máu, tái hấp thu và tiết chủ động nhờ ATP',
      },
      {
        from: 'chuyen-hoa',
        to: 'dieu-hoa',
        why: 'tế bào thần kinh và tuyến nội tiết cần năng lượng để hoạt động',
      },
      {
        from: 'chuyen-hoa',
        to: 'sinh-truong',
        why: 'chuyển hoá cung cấp vật chất và năng lượng để tế bào lớn lên, phân chia',
      },
      {
        from: 'bai-tiet',
        to: 'chuyen-hoa',
        why: 'bài tiết thải chất độc, giữ ổn định pH và áp suất thẩm thấu cho tế bào hoạt động',
      },
      {
        from: 'bai-tiet',
        to: 'tuan-hoan',
        why: 'thận điều chỉnh lượng nước, muối nên giữ ổn định thể tích và áp suất thẩm thấu của máu',
      },
      {
        from: 'dieu-hoa',
        to: 'tuan-hoan',
        why: 'thần kinh và hormone điều hoà nhịp tim, huyết áp',
      },
      { from: 'dieu-hoa', to: 'ho-hap', why: 'trung khu hô hấp điều hoà nhịp thở' },
      {
        from: 'dieu-hoa',
        to: 'tieu-hoa',
        why: 'thần kinh và hormone điều hoà co bóp, tiết dịch tiêu hoá',
      },
      {
        from: 'dieu-hoa',
        to: 'bai-tiet',
        why: 'hormone ADH, aldosterone điều hoà tái hấp thu nước, muối ở thận',
      },
      {
        from: 'dieu-hoa',
        to: 'sinh-truong',
        why: 'hormone sinh trưởng, thyroxine điều hoà sinh trưởng, phát triển',
      },
      { from: 'dieu-hoa', to: 'sinh-san', why: 'FSH, LH, hormone sinh dục điều hoà tạo giao tử' },
      {
        from: 'sinh-truong',
        to: 'sinh-san',
        why: 'cơ thể phải phát triển tới tuổi trưởng thành sinh dục mới sinh sản được',
      },
      {
        from: 'sinh-san',
        to: 'sinh-truong',
        why: 'tinh hoàn, buồng trứng tiết testosterone, estrogen thúc đẩy phát triển ở tuổi dậy thì',
      },
      {
        from: 'sinh-san',
        to: 'dieu-hoa',
        why: 'hormone sinh dục điều hoà ngược vùng dưới đồi và tuyến yên',
      },
    ],
  },
};

/**
 * One process of a network by id.
 * @param {Network} net @param {string} id
 */
export function processOf(net, id) {
  const p = net.processes.find((q) => q.id === id);
  if (!p) throw new Error(`Không có quá trình ${id}`);
  return p;
}

/**
 * The knock-on chain when one process stops: every process the stopped one
 * reaches along the links, by breadth-first search. A process hit at step k
 * lists as causes its links from the stopped process or from processes hit
 * at step k − 1.
 * @param {Network} net @param {string} stopped
 * @returns {Hit[]}
 */
export function cascade(net, stopped) {
  /** @type {Map<string, number>} */
  const step = new Map([[stopped, 0]]);
  let frontier = [stopped];
  for (let k = 1; frontier.length > 0; k++) {
    /** @type {string[]} */
    const next = [];
    for (const id of frontier) {
      for (const l of net.links) {
        if (l.from === id && !step.has(l.to)) {
          step.set(l.to, k);
          next.push(l.to);
        }
      }
    }
    frontier = next;
  }
  return net.processes
    .filter((p) => p.id !== stopped && step.has(p.id))
    .map((p) => {
      const k = /** @type {number} */ (step.get(p.id));
      const causes = net.links.filter((l) => l.to === p.id && step.get(l.from) === k - 1);
      return { id: p.id, step: k, causes };
    })
    .sort((a, b) => a.step - b.step);
}

/**
 * The number of steps the chain takes to reach its last process.
 * @param {Hit[]} hits
 */
export function depth(hits) {
  return hits.reduce((m, h) => Math.max(m, h.step), 0);
}

/**
 * A sentence for one hit process: what it lost and from where.
 * @param {Network} net @param {Hit} hit
 */
export function hitText(net, hit) {
  const reasons = hit.causes.map(
    (l) => `${processOf(net, l.from).name.toLowerCase()} ngừng: ${l.why}`,
  );
  return `${processOf(net, hit.id).name} bị ảnh hưởng (${reasons.join('; ')}).`;
}

/**
 * The summary line under the network after `shown` steps of the chain.
 * @param {Network} net @param {string} stopped @param {number} shown
 */
export function summary(net, stopped, shown) {
  const hits = cascade(net, stopped);
  const name = processOf(net, stopped).name;
  const reached = hits.filter((h) => h.step <= shown).length;
  const total = net.processes.length - 1;
  if (shown < depth(hits)) {
    return `${name} ngừng. Sau ${shown} bước, ${reached}/${total} quá trình khác đã bị ảnh hưởng. Bấm "Bước tiếp" để xem ảnh hưởng lan tiếp.`;
  }
  return `${name} ngừng: sau ${depth(hits)} bước, cả ${reached}/${total} quá trình khác đều bị ảnh hưởng. Các quá trình sinh lí liên quan chặt chẽ với nhau, cơ thể là một thể thống nhất.`;
}

export const BOX = { w: 104, h: 40 };

/**
 * The curve of a link: a quadratic Bézier bent to the left of its direction,
 * so the two links of a pair going both ways stay apart, trimmed at the two
 * process boxes.
 * @param {{ x: number, y: number }} a @param {{ x: number, y: number }} b
 */
export function linkCurve(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const c = { x: (a.x + b.x) / 2 - (dy / len) * 16, y: (a.y + b.y) / 2 + (dx / len) * 16 };
  return { start: edgeOf(a, c, 2), c, end: edgeOf(b, c, 6) };
}

/**
 * The SVG path of a link.
 * @param {{ x: number, y: number }} a @param {{ x: number, y: number }} b
 */
export function linkPath(a, b) {
  const { start, c, end } = linkCurve(a, b);
  return `M ${start.x} ${start.y} Q ${c.x} ${c.y} ${end.x} ${end.y}`;
}

/**
 * Where the ray from a box centre toward `to` leaves the box, pushed out by
 * `gap`.
 * @param {{ x: number, y: number }} centre @param {{ x: number, y: number }} to
 * @param {number} gap
 */
function edgeOf(centre, to, gap) {
  const dx = to.x - centre.x;
  const dy = to.y - centre.y;
  const len = Math.hypot(dx, dy) || 1;
  const t = Math.min(
    dx === 0 ? Infinity : BOX.w / 2 / Math.abs(dx),
    dy === 0 ? Infinity : BOX.h / 2 / Math.abs(dy),
  );
  return { x: centre.x + dx * t + (dx / len) * gap, y: centre.y + dy * t + (dy / len) * gap };
}

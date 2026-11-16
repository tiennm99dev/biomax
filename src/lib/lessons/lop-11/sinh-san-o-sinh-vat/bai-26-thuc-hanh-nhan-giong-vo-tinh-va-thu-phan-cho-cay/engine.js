/**
 * The practical procedures of this lesson (cuttings, air layering, window
 * budding and supplementary pollination of maize), each a list of steps in
 * the right order with the reason for each step. The learner rebuilds a
 * procedure by picking the next step from a shuffled deck.
 */

import { rng, shuffle } from '#lib/core/drill.js';

/** @typedef {'giam' | 'chiet' | 'ghep' | 'thu-phan'} ProcId */
/** @typedef {{ text: string, why: string }} Step */

/** @type {Record<ProcId, { name: string, goal: string, steps: Step[] }>} */
export const PROCEDURES = {
  giam: {
    name: 'Giâm cành',
    goal: 'Đoạn cành ra rễ bất định thành cây mới (rau ngót, hoa hồng, dâu tằm).',
    steps: [
      {
        text: 'Chọn cành bánh tẻ (không quá non, không quá già), khoẻ, không sâu bệnh',
        why: 'Cành bánh tẻ có nhiều chất dự trữ, mô còn khả năng phân chia nên dễ ra rễ.',
      },
      {
        text: 'Cắt thành đoạn dài khoảng $10$ đến $15$ cm, có vài mắt; cắt vát gốc, tỉa bớt lá',
        why: 'Vết cắt vát tăng diện tích ra rễ; bớt lá để giảm thoát hơi nước khi cành chưa có rễ.',
      },
      {
        text: 'Nhúng gốc cành vào dung dịch chất kích thích ra rễ (có thể bỏ qua ở lô đối chứng)',
        why: 'Auxin kích thích hình thành rễ bất định.',
      },
      {
        text: 'Cắm cành nghiêng vào giá thể ẩm, nén chặt gốc',
        why: 'Gốc cành tiếp xúc tốt với giá thể ẩm để giữ nước và ra rễ.',
      },
      {
        text: 'Tưới giữ ẩm, che bớt nắng; theo dõi số cành ra rễ, ra chồi',
        why: 'Cành chưa có rễ dễ héo; cần đủ ẩm và tránh nắng gắt.',
      },
    ],
  },
  chiet: {
    name: 'Chiết cành',
    goal: 'Cành ra rễ ngay trên cây mẹ rồi mới cắt đem trồng (bưởi, cam, nhãn, vải, ổi).',
    steps: [
      {
        text: 'Chọn cành bánh tẻ, mọc khoẻ ở phía ngoài tán, nhiều ánh sáng',
        why: 'Cành khoẻ, nhiều chất dự trữ thì dễ ra rễ, cây con sinh trưởng tốt.',
      },
      {
        text: 'Khoanh hai vòng quanh cành cách nhau khoảng $2$ đến $3$ cm, bóc bỏ phần vỏ ở giữa',
        why: 'Cắt đứt mạch rây: chất hữu cơ và auxin từ lá chuyển xuống bị giữ lại ở mép trên vết khoanh.',
      },
      {
        text: 'Cạo sạch lớp tế bào còn bám trên phần gỗ ở vết khoanh',
        why: 'Để vỏ không liền lại, nối mạch rây trở lại.',
      },
      {
        text: 'Bôi chất kích thích ra rễ lên mép trên vết khoanh',
        why: 'Tăng lượng auxin, kích thích tạo mô sẹo và rễ bất định nhanh hơn.',
      },
      {
        text: 'Bó bầu đất ẩm quanh vết khoanh, bọc ni lông, buộc chặt hai đầu',
        why: 'Giữ ẩm, tối và thoáng khí cho rễ mọc ra trong bầu.',
      },
      {
        text: 'Khi rễ mọc kín bầu, cắt cành khỏi cây mẹ, tỉa bớt lá rồi đem trồng',
        why: 'Rễ đã đủ để hút nước; bớt lá giảm thoát hơi nước cho cây con.',
      },
    ],
  },
  ghep: {
    name: 'Ghép mắt cửa sổ',
    goal: 'Mắt ghép của giống tốt liền với gốc ghép khoẻ (hoa hồng trên gốc tầm xuân, bưởi trên gốc bưởi).',
    steps: [
      {
        text: 'Chọn gốc ghép khoẻ, chống chịu tốt và cành mang mắt ghép của giống tốt',
        why: 'Cây ghép kết hợp rễ khoẻ của gốc ghép với đặc tính tốt của mắt ghép.',
      },
      {
        text: 'Trên gốc ghép, cách mặt đất khoảng $15$ đến $20$ cm, rạch và bóc một miếng vỏ hình chữ nhật (mở cửa sổ)',
        why: 'Lộ ra tầng sinh mạch của gốc ghép để mắt ghép tiếp xúc.',
      },
      {
        text: 'Cắt một miếng vỏ có mắt ngủ trên cành ghép, kích thước bằng cửa sổ',
        why: 'Mắt ghép vừa khít cửa sổ thì hai tầng sinh mạch áp sát nhau, nhanh liền.',
      },
      {
        text: 'Đặt mắt ghép vào cửa sổ cho khớp, cắt gọn, không làm dập mắt',
        why: 'Vết ghép phải khớp nhau và không quá lớn; mắt bị dập sẽ không nảy chồi.',
      },
      {
        text: 'Quấn dây ni lông chặt quanh vết ghép, chừa mắt ghép ra ngoài',
        why: 'Giữ chặt và giữ ẩm vết ghép; không buộc đè lên chồi ghép.',
      },
      {
        text: 'Sau khoảng $15$ đến $20$ ngày, mắt còn xanh thì cởi dây, cắt ngọn gốc ghép phía trên mắt',
        why: 'Mắt xanh là đã liền; cắt ngọn gốc ghép để chất dinh dưỡng dồn cho mắt ghép nảy chồi.',
      },
    ],
  },
  'thu-phan': {
    name: 'Thụ phấn cho ngô',
    goal: 'Thụ phấn bổ sung khi ngô trổ cờ vào những ngày ít gió, giúp bắp đủ hạt.',
    steps: [
      {
        text: 'Chọn cây có bông cờ đang tung phấn và cây có bắp đã phun râu',
        why: 'Bông cờ (hoa đực) tung phấn trước khi bắp (hoa cái) phun râu khoảng $3$ đến $4$ ngày, nên phải chọn đúng lúc.',
      },
      {
        text: 'Buổi sáng khi hết sương, cắt nhánh bông cờ hoặc rung bông cờ để thu hạt phấn vào túi giấy',
        why: 'Buổi sáng hạt phấn tung nhiều và còn sức sống; túi giữ phấn không bay mất.',
      },
      {
        text: 'Rắc hoặc chấm hạt phấn lên râu ngô (núm nhuỵ)',
        why: 'Hạt phấn phải rơi trên râu ngô mới nảy mầm thành ống phấn.',
      },
      {
        text: 'Đánh dấu bắp đã thụ phấn; khi thu hoạch so sánh với bắp thụ phấn tự nhiên',
        why: 'So sánh khối lượng, số hạt trên bắp để đánh giá hiệu quả thụ phấn bổ sung.',
      },
    ],
  },
};

/** @type {ProcId[]} */
export const PROC_IDS = ['giam', 'chiet', 'ghep', 'thu-phan'];

/**
 * The steps of a procedure as indices, shuffled the same way for everyone.
 * @param {ProcId} id @param {number} seed
 */
export function deck(id, seed) {
  const order = PROCEDURES[id].steps.map((_, i) => i);
  let mixed = shuffle(rng(seed), order);
  for (let s = seed + 1; mixed.every((v, i) => v === i); s += 1) mixed = shuffle(rng(s), order);
  return mixed;
}

/**
 * Tries a step as the next one after `done` correct steps.
 * @param {ProcId} id @param {number} done @param {number} step
 * @returns {{ ok: boolean, text: string }}
 */
export function tryStep(id, done, step) {
  const steps = PROCEDURES[id].steps;
  if (step === done) {
    return {
      ok: true,
      text:
        done + 1 === steps.length
          ? `Đúng, đó là bước cuối. ${steps[step].why} Em đã hoàn thành quy trình ${PROCEDURES[id].name.toLowerCase()}.`
          : `Đúng, bước ${done + 1}. ${steps[step].why}`,
    };
  }
  return {
    ok: false,
    text:
      step > done
        ? `Chưa đến lúc làm việc này: còn bước cần làm trước nó. Bước ${done + 1} phải chuẩn bị cho việc gì?`
        : 'Bước này đã làm rồi.',
  };
}

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành chứng minh hạt nảy mầm hô hấp thải CO2 bằng nước vôi trong và hô hấp toả nhiệt bằng bình cách nhiệt có nhiệt kế, cách bố trí đối chứng, đọc kết quả và viết báo cáo.',
  intro:
    'Bài trước nói hô hấp thải $\\mathrm{CO_2}$ và toả nhiệt. Bài này em tự kiểm chứng điều đó với một nắm hạt đậu: một cốc nước vôi trong sẽ "tố cáo" khí $\\mathrm{CO_2}$, còn một chiếc nhiệt kế sẽ cho thấy hạt đang nảy mầm ấm lên.',
  objectives: [
    'Chuẩn bị được hạt nảy mầm cho thí nghiệm hô hấp.',
    'Thực hiện được thí nghiệm chứng minh hô hấp thải $\\mathrm{CO_2}$ và giải thích kết quả.',
    'Thực hiện được thí nghiệm chứng minh hô hấp toả nhiệt; bố trí được bình đối chứng.',
    'Ghi, xử lí số liệu và viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: hạt chắc, không vỡ, không mọt của một loại cây như đậu tương, đậu đen, đậu xanh, lạc, vừng.',
            'Dụng cụ: đĩa Petri, giấy thấm hoặc bông y tế, cốc thuỷ tinh, nước ấm khoảng $40\\,^\\circ\\mathrm{C}$, hai chuông thuỷ tinh dán nhãn A và B; hai bình cách nhiệt (phích nhỏ) có nút cao su, hai nhiệt kế; tủ ấm (nếu có).',
            'Hoá chất: nước vôi trong (dung dịch $\\mathrm{Ca(OH)_2}$).',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ngâm hạt trong nước ấm khoảng $40\\,^\\circ\\mathrm{C}$ trong khoảng $2$ giờ.',
            'Vớt hạt, rải đều lên đĩa Petri đã lót giấy thấm hoặc bông ẩm, phủ thêm một lớp giấy thấm ẩm lên trên, đậy nắp.',
            'Để ở nhiệt độ phòng (hoặc tủ ấm $30$ đến $35\\,^\\circ\\mathrm{C}$) trong $1$ đến $2$ ngày cho hạt nhú mầm.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao dùng hạt nảy mầm?',
          text: 'Hạt đang nảy mầm hô hấp rất mạnh để lấy năng lượng cho sự phát triển của phôi, lại chưa có lá xanh nên không quang hợp. Nếu dùng cây có lá, quang hợp sẽ hấp thụ $\\mathrm{CO_2}$ và làm kết quả khó quan sát.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 1: hô hấp thải CO₂',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: $\\mathrm{CO_2}$ do hạt hô hấp thải ra bị nước vôi trong hấp thụ, tạo kết tủa trắng $\\mathrm{CaCO_3}$ làm mặt nước vôi có váng đục.',
        },
        { type: 'tex', tex: '\\mathrm{CO_2 + Ca(OH)_2 \\longrightarrow CaCO_3\\downarrow + H_2O}' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuông A: đặt đĩa hạt nảy mầm và một cốc nước vôi trong.',
            'Chuông B (đối chứng): chỉ đặt một cốc nước vôi trong.',
            'Để hai chuông trong phòng thí nghiệm khoảng $1$ giờ, rồi mở chuông và quan sát mặt hai cốc nước vôi.',
          ],
        },
        { type: 'widget', name: 'nuoc-voi' },
      ],
    },
    {
      heading: 'Thí nghiệm 2: hô hấp toả nhiệt',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: một phần năng lượng giải phóng khi hô hấp mất đi dưới dạng nhiệt. Trong bình cách nhiệt, nhiệt này giữ lại được và làm nhiệt độ trong bình tăng lên.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chia hạt nảy mầm thành hai phần bằng nhau. Luộc chín một phần để làm đối chứng (hạt đã chết), để nguội bằng nhiệt độ phòng.',
            'Bình A: cho hạt đang nảy mầm; bình B: cho hạt đã luộc chín. Mỗi bình cắm một nhiệt kế qua nút, bầu nhiệt kế nằm giữa khối hạt.',
            'Ghi nhiệt độ hai bình lúc bắt đầu, rồi sau mỗi vài giờ, trong khoảng $1$ ngày.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Kết quả',
          text: 'Nhiệt độ bình A tăng dần và cao hơn hẳn bình B; bình B gần như giữ nhiệt độ phòng. Hạt sống hô hấp toả nhiệt; hạt luộc chín đã chết, không hô hấp.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Báo cáo gồm: mục đích, chuẩn bị, cách tiến hành, kết quả, giải thích và kết luận. Ghi số đo thật của nhóm; mỗi dấu … là một ô cần điền.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng theo dõi nhiệt độ',
          head: ['Thời điểm', 'Bình A (°C)', 'Bình B (°C)', 'Chênh lệch (°C)'],
          rows: [
            ['Bắt đầu', '…', '…', '…'],
            ['Sau $6$ giờ', '…', '…', '…'],
            ['Sau $12$ giờ', '…', '…', '…'],
            ['Sau $24$ giờ', '…', '…', '…'],
          ],
        },
        {
          type: 'p',
          text: 'Trả lời thêm: Tại sao phải ngâm hạt trong nước ấm khoảng $40\\,^\\circ\\mathrm{C}$? Tại sao trong thí nghiệm này dùng hạt nảy mầm mà không dùng cây?',
        },
      ],
    },
  ],
  explore: {
    title: 'Hai bình hạt và hai nhiệt kế',
    instruction:
      'Bố trí đúng như sách (A: hạt nảy mầm, B: hạt luộc chín, bình cách nhiệt) rồi bấm "Theo dõi 24 giờ". Sau đó thử thay bình bằng cốc hở, đổi hạt trong bình B, đổi khối lượng hạt. Số đo là mô hình để so sánh, không thay cho số đo của nhóm.',
  },
  examples: [
    {
      problem:
        'Nhóm em đo được: bình A (hạt nảy mầm) từ $25{,}0\\,^\\circ\\mathrm{C}$ lên $31{,}4\\,^\\circ\\mathrm{C}$ sau $24$ giờ; bình B (hạt luộc) từ $25{,}0\\,^\\circ\\mathrm{C}$ lên $25{,}2\\,^\\circ\\mathrm{C}$. Tính độ tăng nhiệt độ của mỗi bình và nêu kết luận.',
      steps: [
        'Bình A tăng $31{,}4 - 25{,}0 = 6{,}4\\,^\\circ\\mathrm{C}$.',
        'Bình B tăng $25{,}2 - 25{,}0 = 0{,}2\\,^\\circ\\mathrm{C}$, coi như không đổi (sai số đo, phòng ấm lên).',
        'Hai bình chỉ khác nhau ở chỗ hạt còn sống hay đã chết, nên phần nhiệt tăng thêm ở bình A do hạt sống hô hấp toả ra.',
      ],
      answer:
        'A tăng $6{,}4\\,^\\circ\\mathrm{C}$, B tăng $0{,}2\\,^\\circ\\mathrm{C}$: hô hấp của hạt nảy mầm toả nhiệt.',
    },
    {
      problem:
        'Một bạn đặt đĩa hạt nảy mầm và cốc nước vôi vào chuông A nhưng quên chuẩn bị chuông B. Sau $1$ giờ, nước vôi ở chuông A có váng đục. Kết luận "hạt hô hấp thải $\\mathrm{CO_2}$" đã chắc chắn chưa?',
      steps: [
        'Không khí vốn có một ít $\\mathrm{CO_2}$, có thể tự làm nước vôi hơi đục.',
        'Không có chuông B thì không biết váng đục do $\\mathrm{CO_2}$ của không khí hay của hạt.',
        'Chuông B chỉ có nước vôi giúp loại trừ khả năng đó: nếu B gần như vẫn trong mà A đục rõ thì $\\mathrm{CO_2}$ thêm vào là của hạt.',
      ],
      answer: 'Chưa chắc chắn; cần chuông đối chứng B để so sánh.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nước vôi trong ở chuông có hạt nảy mầm bị vẩn đục là do chất nào?',
      options: ['$\\mathrm{CO_2}$', '$\\mathrm{O_2}$', 'Hơi nước', '$\\mathrm{N_2}$'],
      answer: 0,
      hints: ['Chất khí nào phản ứng với $\\mathrm{Ca(OH)_2}$ tạo kết tủa trắng?'],
      solution:
        'Hạt hô hấp thải $\\mathrm{CO_2}$; $\\mathrm{CO_2 + Ca(OH)_2 \\to CaCO_3\\downarrow + H_2O}$, kết tủa $\\mathrm{CaCO_3}$ tạo váng đục.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải ngâm hạt trong nước ấm khoảng $40\\,^\\circ\\mathrm{C}$?',
      options: [
        'Cung cấp đủ nước và nhiệt độ thích hợp, kích thích hạt nảy mầm và hô hấp mạnh',
        'Để giết hạt làm đối chứng',
        'Để rửa sạch $\\mathrm{CO_2}$ trong hạt',
        'Để hạt quang hợp được',
      ],
      answer: 0,
      hints: ['Nước và nhiệt độ ảnh hưởng thế nào đến enzyme hô hấp?'],
      solution:
        'Nước hoạt hoá enzyme, nhiệt độ ấm làm enzyme hoạt động mạnh: hạt hút nước nhanh, nảy mầm và hô hấp mạnh, kết quả rõ hơn.',
    },
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm toả nhiệt, bình đối chứng nên chứa gì?',
      options: [
        'Cùng lượng hạt nảy mầm đã luộc chín',
        'Cùng lượng hạt nảy mầm còn sống',
        'Nước nóng',
        'Nước vôi trong',
      ],
      answer: 0,
      hints: ['Bình đối chứng chỉ khác bình thí nghiệm ở một yếu tố: hạt có hô hấp hay không.'],
      solution: 'Hạt luộc chín đã chết, không hô hấp, các điều kiện khác giống bình thí nghiệm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao thí nghiệm toả nhiệt dùng bình cách nhiệt (phích) mà không dùng cốc hở?',
      options: [
        'Để giữ lại nhiệt do hô hấp toả ra, nhiệt độ tăng đủ rõ để đo',
        'Để hạt không lấy được $\\mathrm{O_2}$',
        'Để hạt quang hợp mạnh hơn',
        'Vì cốc hở làm nhiệt kế hỏng',
      ],
      answer: 0,
      hints: ['Thử với cốc hở trong thí nghiệm ảo xem điều gì xảy ra.'],
      solution:
        'Ở cốc hở, nhiệt thoát ra ngoài gần hết nên nhiệt độ gần như không tăng; phích giữ nhiệt nên thấy rõ.',
    },
    {
      type: 'number',
      prompt:
        'Bình hạt nảy mầm tăng từ $24{,}5\\,^\\circ\\mathrm{C}$ lên $30{,}1\\,^\\circ\\mathrm{C}$. Nhiệt độ tăng bao nhiêu độ C?',
      answer: 5.6,
      tolerance: 0.001,
      unit: '°C',
      hints: ['Lấy nhiệt độ cuối trừ nhiệt độ đầu.'],
      solution: '$30{,}1 - 24{,}5 = 5{,}6\\,^\\circ\\mathrm{C}$.',
    },
    {
      type: 'number',
      prompt:
        'Trong $12$ giờ đầu, bình hạt nảy mầm tăng $4{,}8\\,^\\circ\\mathrm{C}$. Trung bình mỗi giờ tăng bao nhiêu độ C?',
      answer: 0.4,
      tolerance: 0.001,
      unit: '°C',
      hints: ['Chia độ tăng cho số giờ.'],
      solution: '$4{,}8 : 12 = 0{,}4\\,^\\circ\\mathrm{C}$ mỗi giờ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của thí nghiệm hô hấp thải $\\mathrm{CO_2}$.',
      items: [
        'Đặt đĩa hạt và cốc nước vôi vào chuông A, chỉ cốc nước vôi vào chuông B',
        'Ngâm hạt trong nước ấm khoảng $2$ giờ',
        'Mở chuông, quan sát mặt nước vôi',
        'Ủ hạt trên giấy thấm ẩm $1$ đến $2$ ngày',
        'Để hai chuông khoảng $1$ giờ',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Phải có hạt nảy mầm trước khi bố trí chuông.'],
      solution:
        'Ngâm hạt, ủ cho nảy mầm, bố trí hai chuông, để khoảng $1$ giờ, mở chuông quan sát.',
    },
    {
      type: 'multi',
      prompt: 'Những kết quả nào đúng khi làm thí nghiệm đúng cách?',
      options: [
        'Nước vôi ở chuông A có váng đục',
        'Nước vôi ở chuông B gần như vẫn trong',
        'Bình hạt nảy mầm nóng hơn bình hạt luộc',
        'Bình hạt luộc nóng hơn vì đã được đun',
        'Nước vôi ở cả hai chuông đục như nhau',
      ],
      answers: [0, 1, 2],
      hints: ['Hạt luộc đã được để nguội bằng nhiệt độ phòng trước khi cho vào bình.'],
      solution:
        'Chỉ hạt sống mới hô hấp: chuông A đục, chuông B gần như trong, bình hạt nảy mầm nóng hơn bình hạt luộc.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao dùng hạt nảy mầm mà không dùng cây có lá xanh?',
      options: [
        'Hạt nảy mầm hô hấp mạnh và không quang hợp, không hấp thụ lại $\\mathrm{CO_2}$',
        'Cây có lá không hô hấp',
        'Hạt nảy mầm quang hợp mạnh hơn lá',
        'Cây có lá thải ra nước vôi',
      ],
      answer: 0,
      hints: ['Lá xanh làm gì với $\\mathrm{CO_2}$ khi có ánh sáng?'],
      solution:
        'Lá xanh quang hợp hấp thụ $\\mathrm{CO_2}$, che lấp $\\mathrm{CO_2}$ do hô hấp thải ra; hạt nảy mầm chỉ hô hấp, lại hô hấp mạnh.',
    },
    {
      type: 'choice',
      prompt: 'Một đống thóc ẩm ủ lâu ngày bị nóng lên. Giải thích nào đúng?',
      options: [
        'Hạt ẩm hô hấp mạnh, toả nhiệt và tiêu hao chất hữu cơ',
        'Thóc hấp thụ nhiệt từ ánh nắng ban đêm',
        'Nước trong thóc tự sinh nhiệt',
        'Thóc quang hợp trong bao',
      ],
      answer: 0,
      hints: ['Nhớ lại thí nghiệm toả nhiệt.'],
      solution:
        'Hạt ẩm hô hấp mạnh như hạt nảy mầm, toả nhiệt trong đống thóc kín; vì vậy thóc phải phơi khô trước khi cất.',
    },
  ],
  takeaways: [
    'Hạt nảy mầm hô hấp mạnh, không quang hợp nên là mẫu vật tốt cho thí nghiệm hô hấp.',
    'Hô hấp thải $\\mathrm{CO_2}$: nước vôi trong ở chuông có hạt nảy mầm có váng đục $\\mathrm{CaCO_3}$, chuông đối chứng gần như vẫn trong.',
    'Hô hấp toả nhiệt: trong bình cách nhiệt, hạt nảy mầm làm nhiệt độ tăng, hạt luộc chín thì không.',
    'Mỗi thí nghiệm cần đối chứng chỉ khác ở một yếu tố cần kiểm tra.',
  ],
};

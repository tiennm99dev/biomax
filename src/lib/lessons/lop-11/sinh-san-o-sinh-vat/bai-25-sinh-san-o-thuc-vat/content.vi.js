/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sinh sản vô tính ở thực vật (bằng bào tử, sinh dưỡng) và ứng dụng giâm, chiết, ghép, nuôi cấy mô; cấu tạo hoa, hình thành hạt phấn và túi phôi, thụ phấn, thụ tinh kép; sự hình thành hạt, quả và sự chín của quả.',
  intro:
    'Củ khoai tây để lâu trong bếp tự mọc mầm, còn cây bưởi muốn có quả phải nở hoa và được ong bướm ghé thăm. Trong hạt ngô có một khối bột trắng nuôi phôi, khối bột ấy từ đâu mà có? Bài này đi từ những cách cây tự nhân lên đến "thụ tinh kép", nét riêng chỉ có ở thực vật hạt kín.',
  objectives: [
    'Phân biệt được sinh sản bằng bào tử và sinh sản sinh dưỡng ở thực vật; lấy được ví dụ.',
    'Trình bày được ứng dụng của sinh sản vô tính: giâm cành, chiết cành, ghép, nuôi cấy mô, tế bào; nêu được ưu điểm và hạn chế của mỗi cách.',
    'Mô tả được cấu tạo hoa, quá trình hình thành hạt phấn và túi phôi.',
    'Trình bày được quá trình thụ phấn và thụ tinh kép; giải thích sự hình thành hạt, quả và sự chín của quả.',
  ],
  sections: [
    {
      heading: 'Sinh sản vô tính ở thực vật',
      blocks: [
        {
          type: 'list',
          items: [
            'Sinh sản bằng bào tử: bào tử đơn bội ($n$) hình thành trong túi bào tử của cây mẹ; khi túi vỡ, bào tử phát tán, gặp điều kiện thuận lợi thì nguyên phân nhiều lần tạo cây mới. Đây là một giai đoạn trong vòng đời của rêu, dương xỉ.',
            'Sinh sản sinh dưỡng: cây con mọc từ cơ quan sinh dưỡng (rễ, thân, lá) của cây mẹ, có bộ gene giống cây mẹ nên giữ được kiểu gene thích nghi, phù hợp khi môi trường ổn định. Ví dụ: chuối nảy chồi từ thân ngầm, khoai tây (thân củ), gừng (thân rễ), hành (thân hành), rau má (thân bò), khoai lang (rễ củ), thuốc bỏng (lá).',
          ],
        },
        {
          type: 'p',
          text: 'Thử xếp các cách mọc cây mới theo bộ phận tạo ra cây con:',
        },
        { type: 'widget', name: 'sinh-duong' },
        {
          type: 'table',
          head: ['Cách nhân giống', 'Cách làm', 'Ưu điểm', 'Hạn chế'],
          rows: [
            [
              'Giâm cành',
              'Cắm đoạn cành bánh tẻ (hoa hồng, mía, sắn, rau ngót) vào đất ẩm cho ra rễ',
              'Nhiều cây con đồng đều trong thời gian ngắn',
              'Cành lấy từ cây lâu năm dễ già cỗi',
            ],
            [
              'Chiết cành',
              'Khoanh vỏ cành bánh tẻ, bó bầu đất; auxin và chất dinh dưỡng tích luỹ ở mép trên vết khoanh kích thích mô sẹo và rễ bất định, rồi cắt cành đem trồng (nhãn, vải, ổi, bưởi, cam)',
              'Tỉ lệ sống cao, cây thấp, tán gọn, sớm cho quả',
              'Hệ số nhân thấp, tuổi thọ cây thấp',
            ],
            [
              'Ghép',
              'Lấy cành hoặc mắt ghép của cây năng suất cao ghép lên gốc ghép có rễ khoẻ, chống chịu tốt (hoa hồng ghép lên gốc tầm xuân, cam ghép lên gốc bưởi)',
              'Kết hợp ưu điểm của cành ghép và gốc ghép',
              'Cần kĩ thuật, cành ghép và gốc ghép phải hợp nhau',
            ],
            [
              'Nuôi cấy mô, tế bào',
              'Nuôi mô, tế bào trong ống nghiệm trên môi trường dinh dưỡng, điều kiện vô trùng (hoa lan, chuối)',
              'Hệ số nhân cao, làm quanh năm, cây sạch bệnh; giữ được giống quý, có nguy cơ tuyệt chủng',
              'Chi phí cao, đòi hỏi kĩ thuật; cây đồng nhất di truyền dễ chết hàng loạt khi gặp bất lợi',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Hoa, hạt phấn và túi phôi',
      blocks: [
        {
          type: 'list',
          items: [
            'Hoa là chồi sinh sản, đính vào thân qua đế hoa. Bộ phận bất thụ: lá đài (bảo vệ) và cánh hoa (thu hút côn trùng). Bộ phận hữu thụ: nhị (chỉ nhị, bao phấn chứa hạt phấn) và nhuỵ (núm, vòi, bầu nhuỵ; bầu chứa noãn, trong noãn có túi phôi).',
            'Hoa đơn tính chỉ có nhị hoặc chỉ có nhuỵ (bí ngô, dưa chuột); hoa lưỡng tính có cả nhị và nhuỵ (chanh, bưởi).',
          ],
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Hạt phấn (giao tử đực)', 'Túi phôi (giao tử cái)'],
          rows: [
            ['Nơi hình thành', 'Bao phấn', 'Noãn trong bầu nhuỵ'],
            [
              'Giảm phân',
              'Mỗi tế bào mẹ ($2n$) giảm phân tạo $4$ tiểu bào tử ($n$)',
              'Tế bào mẹ đại bào tử ($2n$) giảm phân tạo $4$ đại bào tử ($n$); $3$ tiêu biến, $1$ sống sót',
            ],
            [
              'Nguyên phân',
              'Mỗi tiểu bào tử nguyên phân $1$ lần tạo hạt phấn có $2$ tế bào: tế bào ống phấn và tế bào sinh sản',
              'Đại bào tử sống sót nguyên phân $3$ lần liên tiếp tạo $2^3 = 8$ nhân',
            ],
            [
              'Cấu tạo',
              'Thành dày; tế bào sinh sản sau này nguyên phân tạo $2$ giao tử đực',
              '$1$ tế bào trứng, $2$ tế bào kèm, $3$ tế bào đối cực, $1$ tế bào trung tâm chứa $2$ nhân cực',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Thụ phấn và thụ tinh kép',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thụ phấn',
          text: 'Thụ phấn là quá trình hạt phấn phát tán và rơi trên núm nhuỵ phù hợp. Tự thụ phấn xảy ra trong một hoa hoặc giữa các hoa của cùng một cây; thụ phấn chéo xảy ra giữa hoa của hai cây khác nhau. Tác nhân: côn trùng (ong, bướm), dơi, gió, nước, con người.',
        },
        {
          type: 'p',
          text: 'Hạt phấn nảy mầm thành ống phấn, mọc theo vòi nhuỵ, xuyên qua lỗ noãn vào túi phôi và giải phóng $2$ giao tử đực (tinh tử).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Thụ tinh kép',
          text: 'Một giao tử đực ($n$) kết hợp với tế bào trứng ($n$) tạo hợp tử ($2n$); giao tử đực còn lại ($n$) kết hợp với tế bào trung tâm chứa $2$ nhân cực ($2n$) tạo nhân tam bội ($3n$). Cả hai giao tử đực đều tham gia thụ tinh nên gọi là thụ tinh kép; hình thức này chỉ có ở thực vật hạt kín.',
        },
        {
          type: 'p',
          text: 'Thụ phấn, thụ tinh chịu ảnh hưởng của sự tương hợp di truyền giữa hạt phấn và nhuỵ, hàm lượng auxin của hạt phấn, độ ẩm, gió, nhiệt độ. Nắm được các yếu tố này giúp tăng tỉ lệ thụ phấn, thụ tinh và năng suất cây trồng.',
        },
      ],
    },
    {
      heading: 'Hình thành hạt, quả và sự chín của quả',
      blocks: [
        {
          type: 'table',
          head: ['Thành phần trước thụ tinh', 'Trở thành'],
          rows: [
            ['Hợp tử ($2n$)', 'Phôi (lá mầm, thân mầm, rễ mầm)'],
            ['Nhân tam bội ($3n$)', 'Nội nhũ (khối tế bào giàu dinh dưỡng)'],
            ['Vỏ noãn', 'Vỏ hạt'],
            ['Noãn đã thụ tinh', 'Hạt'],
            ['Bầu nhuỵ', 'Quả'],
          ],
        },
        {
          type: 'list',
          items: [
            'Hạt có nội nhũ: cây Một lá mầm (ngô, lúa, lúa mì). Hạt không có nội nhũ: phần lớn cây Hai lá mầm (lạc, đậu đen, bí ngô), chất dinh dưỡng của nội nhũ được chuyển vào lá mầm.',
            'Hạt đang hình thành tiết auxin, cytokinin, gibberellin khuếch tán vào bầu nhuỵ, kích thích tế bào phân chia và lớn lên thành quả. Quả bảo vệ và giúp phát tán hạt.',
            'Khi quả đạt kích thước đặc trưng, quả chín (đổi màu, mềm, thơm, ngọt); quá trình chín được điều khiển bởi ethylene.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Thụ tinh kép từng bước',
    instruction:
      'Bấm "Bước tiếp" để xem hạt phấn nảy mầm và ống phấn mọc tới túi phôi. Ở bước thụ tinh kép, chọn tế bào mà mỗi giao tử đực kết hợp rồi bấm "Kiểm tra"; chỉ khi chọn đúng em mới đi tiếp được tới bước hình thành hạt và quả.',
  },
  examples: [
    {
      problem:
        'Cây lúa có bộ nhiễm sắc thể $2n = 24$. Tính số nhiễm sắc thể trong: (a) tế bào trứng; (b) tế bào của phôi; (c) tế bào nội nhũ.',
      steps: [
        'Tế bào trứng là giao tử, đơn bội: $n = 24 : 2 = 12$.',
        'Phôi phát triển từ hợp tử $2n$ (giao tử đực $n$ + trứng $n$): $2n = 24$.',
        'Nội nhũ phát triển từ nhân tam bội: giao tử đực $n$ + $2$ nhân cực $2n$ $= 3n = 3 \\cdot 12 = 36$.',
      ],
      answer: '(a) $12$; (b) $24$; (c) $36$ nhiễm sắc thể.',
    },
    {
      problem:
        'Trong một bao phấn có $50$ tế bào mẹ hạt phấn cùng giảm phân bình thường. Tính số hạt phấn tạo thành và số giao tử đực mà các hạt phấn này có thể tạo ra.',
      steps: [
        'Mỗi tế bào mẹ giảm phân tạo $4$ tiểu bào tử, mỗi tiểu bào tử thành một hạt phấn: $50 \\cdot 4 = 200$ hạt phấn.',
        'Trong mỗi hạt phấn, tế bào sinh sản nguyên phân tạo $2$ giao tử đực: $200 \\cdot 2 = 400$ giao tử đực.',
      ],
      answer: '$200$ hạt phấn, $400$ giao tử đực.',
    },
    {
      problem:
        'Vườn nhà bác Minh có một cây bưởi cho quả rất ngon. Bác muốn nhân giống để trồng nhiều cây vẫn cho quả ngon như cây mẹ và sớm thu hoạch. Nên chọn cách nào?',
      steps: [
        'Gieo hạt là sinh sản hữu tính: cây con có thể không giữ được đặc tính quả ngon của cây mẹ, lâu cho quả.',
        'Chiết cành là sinh sản vô tính: cây con giữ nguyên đặc tính của cây mẹ, tỉ lệ sống cao, cây thấp, tán gọn, sớm cho quả.',
        'Cũng có thể ghép mắt bưởi ngon lên gốc bưởi khoẻ, chống chịu tốt.',
      ],
      answer: 'Nên chiết cành (hoặc ghép), không nên gieo hạt.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Rêu và dương xỉ có hình thức sinh sản vô tính nào?',
      options: [
        'Sinh sản bằng bào tử',
        'Sinh sản bằng thân củ',
        'Sinh sản bằng rễ củ',
        'Thụ tinh kép',
      ],
      answer: 0,
      hints: ['Mặt dưới lá dương xỉ có các túi chứa gì?'],
      solution:
        'Rêu và dương xỉ sinh sản bằng bào tử đơn bội hình thành trong túi bào tử; bào tử nảy mầm tạo cây mới.',
    },
    {
      type: 'match',
      prompt:
        'Ghép mỗi cây với bộ phận được dùng để tạo cây mới trong sinh sản sinh dưỡng tự nhiên.',
      left: ['Khoai tây', 'Gừng', 'Thuốc bỏng', 'Khoai lang'],
      right: ['Thân củ', 'Thân rễ', 'Lá', 'Rễ củ', 'Hạt'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Củ khoai tây có mắt (chồi) như thân; củ khoai lang là rễ phình to.'],
      solution:
        'Khoai tây: thân củ; gừng: thân rễ; thuốc bỏng: lá; khoai lang: rễ củ. Hạt là kết quả của sinh sản hữu tính.',
    },
    {
      type: 'choice',
      prompt: 'Cách nhân giống nào cho hệ số nhân cao, cây sạch bệnh và làm được quanh năm?',
      options: ['Nuôi cấy mô, tế bào', 'Chiết cành', 'Giâm cành', 'Gieo hạt'],
      answer: 0,
      hints: ['Cách này làm trong ống nghiệm, điều kiện vô trùng.'],
      solution:
        'Nuôi cấy mô, tế bào tạo rất nhiều cây từ một mẫu nhỏ trong điều kiện vô trùng, làm quanh năm, cây sạch bệnh; nhưng chi phí cao và cây đồng nhất di truyền.',
    },
    {
      type: 'number',
      prompt: 'Túi phôi trưởng thành của thực vật hạt kín có bao nhiêu nhân?',
      answer: 8,
      hints: ['Đại bào tử sống sót nguyên phân $3$ lần liên tiếp.'],
      solution:
        'Đại bào tử ($n$) nguyên phân $3$ lần tạo $2^3 = 8$ nhân: $1$ trứng, $2$ kèm, $3$ đối cực và $2$ nhân cực trong tế bào trung tâm.',
    },
    {
      type: 'choice',
      prompt: 'Trong thụ tinh kép, giao tử đực thứ hai kết hợp với',
      options: [
        'tế bào trung tâm chứa $2$ nhân cực, tạo nhân tam bội ($3n$)',
        'tế bào trứng, tạo hợp tử ($2n$)',
        'tế bào kèm, tạo phôi phụ',
        'tế bào đối cực, tạo vỏ hạt',
      ],
      answer: 0,
      hints: ['Một giao tử đực đã kết hợp với trứng; tế bào nào tạo ra nội nhũ?'],
      solution:
        'Giao tử đực thứ nhất + trứng → hợp tử $2n$; giao tử đực thứ hai + tế bào trung tâm ($2$ nhân cực) → nhân $3n$, phát triển thành nội nhũ.',
    },
    {
      type: 'number',
      prompt: 'Cây ngô có $2n = 20$. Tế bào nội nhũ của hạt ngô có bao nhiêu nhiễm sắc thể?',
      answer: 30,
      hints: ['Nội nhũ phát triển từ nhân tam bội $3n$.'],
      solution: '$n = 10$, nên nội nhũ $3n = 3 \\cdot 10 = 30$ nhiễm sắc thể.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi thành phần với cấu trúc nó phát triển thành sau thụ tinh.',
      left: ['Hợp tử', 'Nhân tam bội', 'Noãn đã thụ tinh', 'Bầu nhuỵ', 'Vỏ noãn'],
      right: ['Phôi', 'Nội nhũ', 'Hạt', 'Quả', 'Vỏ hạt'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Quả bao lấy hạt; hạt chứa phôi và (có thể) nội nhũ.'],
      solution:
        'Hợp tử → phôi; nhân tam bội → nội nhũ; noãn đã thụ tinh → hạt; bầu nhuỵ → quả; vỏ noãn → vỏ hạt.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện từ khi hạt phấn rơi xuống đến khi có hợp tử.',
      items: [
        'Ống phấn mọc dài theo vòi nhuỵ',
        'Hạt phấn rơi trên núm nhuỵ',
        'Ống phấn qua lỗ noãn vào túi phôi, giải phóng $2$ giao tử đực',
        'Giao tử đực kết hợp với trứng tạo hợp tử',
      ],
      answer: [1, 0, 2, 3],
      hints: ['Thụ phấn xảy ra trước, thụ tinh xảy ra sau cùng.'],
      solution:
        'Hạt phấn rơi trên núm nhuỵ (thụ phấn), nảy mầm thành ống phấn mọc theo vòi nhuỵ, qua lỗ noãn vào túi phôi giải phóng $2$ giao tử đực, rồi thụ tinh tạo hợp tử.',
    },
    {
      type: 'choice',
      prompt: 'Hạt của cây nào sau đây có nội nhũ?',
      options: ['Ngô', 'Lạc', 'Đậu đen', 'Bí ngô'],
      answer: 0,
      hints: ['Hạt cây Một lá mầm thường có nội nhũ.'],
      solution:
        'Ngô là cây Một lá mầm, hạt có nội nhũ. Lạc, đậu đen, bí ngô là cây Hai lá mầm, chất dự trữ nằm trong lá mầm.',
    },
    {
      type: 'choice',
      prompt: 'Hormone nào điều khiển sự chín của quả?',
      options: ['Ethylene', 'Auxin', 'Cytokinin', 'Gibberellin'],
      answer: 0,
      hints: ['Đây là hormone ở thể khí, được dùng để thúc quả chín.'],
      solution:
        'Ethylene điều khiển sự chín của quả; auxin, cytokinin, gibberellin từ hạt kích thích bầu nhuỵ lớn lên thành quả.',
    },
  ],
  takeaways: [
    'Sinh sản vô tính ở thực vật: bằng bào tử (rêu, dương xỉ) và sinh dưỡng từ rễ, thân, lá; ứng dụng giâm, chiết, ghép, nuôi cấy mô.',
    'Hạt phấn: tế bào mẹ giảm phân → $4$ tiểu bào tử, mỗi cái nguyên phân $1$ lần. Túi phôi: $1$ đại bào tử sống sót nguyên phân $3$ lần → $8$ nhân, $7$ tế bào.',
    'Thụ tinh kép: giao tử đực + trứng → hợp tử $2n$; giao tử đực + $2$ nhân cực → nhân $3n$. Chỉ có ở thực vật hạt kín.',
    'Hợp tử → phôi, nhân $3n$ → nội nhũ, noãn → hạt, bầu nhuỵ → quả; ethylene điều khiển quả chín.',
  ],
};

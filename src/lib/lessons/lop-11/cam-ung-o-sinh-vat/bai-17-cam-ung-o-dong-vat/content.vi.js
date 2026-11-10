/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các dạng hệ thần kinh (lưới, chuỗi hạch, ống); cấu tạo neuron; điện thế nghỉ, điện thế hoạt động và sự lan truyền trên sợi thần kinh; synapse hoá học và truyền tin qua synapse; phản xạ và cung phản xạ; cơ quan cảm giác; bảo vệ hệ thần kinh.',
  intro:
    'Khi em chạm vào gai nhọn, chưa đầy một giây tay đã rụt lại và em cảm thấy đau. Trong khoảng thời gian ngắn ngủi ấy, thông tin đã chạy dọc dây thần kinh dưới dạng những "tia điện" nhỏ và nhảy qua các khe hẹp giữa các tế bào thần kinh. Các tín hiệu đó được tạo ra và truyền đi như thế nào?',
  objectives: [
    'Phân biệt được các dạng hệ thần kinh: dạng lưới, dạng chuỗi hạch, dạng ống.',
    'Mô tả được cấu tạo và chức năng của neuron.',
    'Trình bày được điện thế nghỉ, điện thế hoạt động và sự lan truyền xung thần kinh trên sợi không có và có bao myelin.',
    'Mô tả được cấu tạo synapse hoá học và quá trình truyền tin qua synapse.',
    'Phân biệt được phản xạ không điều kiện và có điều kiện; nêu được các bộ phận của cung phản xạ.',
    'Nêu được vai trò của các cơ quan cảm giác và các biện pháp bảo vệ hệ thần kinh.',
  ],
  sections: [
    {
      heading: 'Các dạng hệ thần kinh',
      blocks: [
        {
          type: 'p',
          text: 'Động vật đơn bào (trùng giày, trùng biến hình) chưa có hệ thần kinh, cảm ứng nhờ sự chuyển động của chất nguyên sinh. Ở động vật đa bào, hệ thần kinh tiến hoá theo hướng tập trung dần:',
        },
        {
          type: 'table',
          head: ['Dạng', 'Đại diện', 'Cấu tạo', 'Phản ứng'],
          rows: [
            [
              'Dạng lưới',
              'Ruột khoang (thuỷ tức, sứa)',
              'Tế bào thần kinh nằm rải rác, nối với nhau thành mạng lưới',
              'Kích thích lan khắp mạng, toàn thân phản ứng: thiếu chính xác, tốn năng lượng',
            ],
            [
              'Dạng chuỗi hạch',
              'Giun dẹp, giun tròn, giun đốt, chân khớp',
              'Tế bào thần kinh tập trung thành các hạch nối với nhau thành chuỗi; mỗi hạch điều khiển một vùng; ở chân khớp hạch đầu phát triển',
              'Phản ứng cục bộ, chính xác hơn, ít tốn năng lượng hơn',
            ],
            [
              'Dạng ống',
              'Cá, lưỡng cư, bò sát, chim, thú',
              'Ống thần kinh ở phía lưng; gồm thần kinh trung ương (não bộ, tuỷ sống) và thần kinh ngoại biên (hạch, dây thần kinh)',
              'Hoạt động theo nguyên tắc phản xạ, nhanh, chính xác, đa dạng',
            ],
          ],
        },
        { type: 'widget', name: 'he-than-kinh' },
      ],
    },
    {
      heading: 'Neuron, điện thế nghỉ và điện thế hoạt động',
      blocks: [
        {
          type: 'p',
          text: 'Neuron (tế bào thần kinh) là đơn vị cấu tạo và chức năng của hệ thần kinh, gồm thân, các sợi nhánh và một sợi trục. Sợi nhánh nhận thông tin đưa về thân; sợi trục truyền xung thần kinh đi, tận cùng phân nhánh, mỗi nhánh có chuỳ synapse. Nhiều sợi trục có bao myelin cách điện, xen giữa là các eo Ranvier. Neuron trưởng thành không có trung thể nên không phân chia.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Điện thế nghỉ',
          text: 'Điện thế nghỉ là sự chênh lệch điện thế giữa hai bên màng tế bào khi tế bào không bị kích thích: phía trong màng mang điện âm, phía ngoài mang điện dương (ở neuron khoảng $-70$ mV). Nguyên nhân: nồng độ $\\mathrm{K^+}$ bên trong cao hơn bên ngoài, $\\mathrm{Na^+}$ bên ngoài cao hơn bên trong; khi nghỉ cổng $\\mathrm{K^+}$ mở, $\\mathrm{K^+}$ khuếch tán ra và nằm sát mặt ngoài màng; bơm Na – K vận chuyển $\\mathrm{K^+}$ trở vào, duy trì chênh lệch nồng độ.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Mất phân cực: khi bị kích thích đạt ngưỡng, cổng $\\mathrm{Na^+}$ mở, $\\mathrm{Na^+}$ ồ ạt đi vào, chênh lệch điện thế hai bên màng giảm dần.',
            'Đảo cực: $\\mathrm{Na^+}$ vào nhiều làm phía trong màng mang điện dương so với phía ngoài (khoảng $+30$ mV).',
            'Tái phân cực: cổng $\\mathrm{Na^+}$ đóng, cổng $\\mathrm{K^+}$ mở rộng, $\\mathrm{K^+}$ đi ra ngoài, màng trở lại trong âm ngoài dương.',
          ],
        },
        {
          type: 'p',
          text: 'Kích thích dưới ngưỡng chỉ làm màng thay đổi cục bộ rồi tắt; kích thích từ ngưỡng trở lên luôn tạo điện thế hoạt động có cùng biên độ.',
        },
      ],
    },
    {
      heading: 'Lan truyền xung thần kinh',
      blocks: [
        {
          type: 'table',
          head: ['Sợi thần kinh', 'Cách lan truyền', 'Tốc độ'],
          rows: [
            [
              'Không có bao myelin',
              'Liên tục từ vùng này sang vùng kế bên: mất phân cực, đảo cực, tái phân cực lần lượt dọc sợi',
              'Chậm (vài m/s)',
            ],
            [
              'Có bao myelin',
              'Nhảy cóc từ eo Ranvier này sang eo Ranvier kế tiếp, vì bao myelin cách điện',
              'Nhanh (có thể hơn $100$ m/s), tiết kiệm năng lượng',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Synapse và truyền tin qua synapse',
      blocks: [
        {
          type: 'p',
          text: 'Synapse là diện tiếp xúc giữa neuron với neuron hoặc giữa neuron với tế bào khác (tế bào cơ, tế bào tuyến). Có synapse hoá học (phổ biến) và synapse điện. Synapse hoá học gồm chuỳ synapse (chứa bóng synapse đựng chất truyền tin), màng trước, khe synapse và màng sau (có thụ thể). Chất truyền tin ở thú gồm acetylcholine, noradrenaline, dopamine, serotonin…',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xung thần kinh đến chuỳ synapse làm $\\mathrm{Ca^{2+}}$ đi vào chuỳ.',
            '$\\mathrm{Ca^{2+}}$ làm bóng chứa acetylcholine gắn vào màng trước, vỡ ra, giải phóng acetylcholine vào khe synapse.',
            'Acetylcholine gắn vào thụ thể trên màng sau, mở kênh $\\mathrm{Na^+}$, xuất hiện điện thế hoạt động lan truyền tiếp.',
            'Acetylcholinesterase ở màng sau phân giải acetylcholine thành acetate và choline; choline quay lại chuỳ synapse để tổng hợp acetylcholine.',
          ],
        },
        { type: 'widget', name: 'synapse' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Truyền một chiều',
          text: 'Tin chỉ truyền qua synapse hoá học theo một chiều, từ màng trước sang màng sau, vì chỉ chuỳ synapse có chất truyền tin và chỉ màng sau có thụ thể.',
        },
      ],
    },
    {
      heading: 'Phản xạ và cơ quan cảm giác',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phản xạ',
          text: 'Phản xạ là phản ứng của cơ thể trả lời kích thích từ môi trường trong hoặc ngoài cơ thể, thông qua hệ thần kinh. Phản xạ được thực hiện nhờ cung phản xạ gồm: thụ thể cảm giác → đường dẫn truyền cảm giác (hướng tâm) → trung ương thần kinh → đường dẫn truyền vận động (li tâm) → cơ quan trả lời (cơ, tuyến). Một bộ phận bị tổn thương thì phản xạ không thực hiện được.',
        },
        {
          type: 'table',
          head: ['Phản xạ không điều kiện', 'Phản xạ có điều kiện'],
          rows: [
            [
              'Bẩm sinh, có từ khi sinh ra',
              'Hình thành trong đời sống cá thể qua học tập, rèn luyện',
            ],
            ['Di truyền, đặc trưng cho loài', 'Không di truyền, mang tính cá thể'],
            ['Bền vững', 'Dễ mất nếu không được củng cố'],
            ['Trung ương ở tuỷ sống, thân não', 'Có sự tham gia của vỏ não'],
            [
              'Ví dụ: tiết nước bọt khi thức ăn chạm lưỡi',
              'Ví dụ: chó tiết nước bọt khi nghe tiếng chuông báo giờ ăn',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Thụ thể cảm giác biến năng lượng kích thích (ánh sáng, âm thanh, nhiệt…) thành điện thế, khởi phát xung thần kinh; chúng có thể đứng riêng hoặc họp thành cơ quan cảm giác. Mắt: ánh sáng qua giác mạc, thuỷ dịch, thể thuỷ tinh, dịch kính đến tế bào que và tế bào nón ở màng lưới, xung thần kinh theo dây thần kinh thị giác về vùng thị giác ở thuỳ chẩm. Tai: sóng âm làm rung màng nhĩ, chuỗi xương tai, màng cửa sổ bầu dục, tạo sóng áp lực trong ốc tai kích thích tế bào có lông, xung theo dây thần kinh thính giác về vùng thính giác ở thuỳ thái dương; bộ phận tiền đình giúp giữ thăng bằng.',
        },
      ],
    },
    {
      heading: 'Bảo vệ hệ thần kinh',
      blocks: [
        {
          type: 'list',
          items: [
            'Tổn thương thần kinh ngoại biên (thường do tai nạn) gây mất cảm giác hoặc vận động ở vùng liên quan; tổn thương trung ương (xuất huyết não, virus…) có thể gây mất khả năng nói, liệt tay chân hoặc liệt nửa người.',
            'Thuốc giảm đau chỉ giảm đau tạm thời: morphine, codeine có cấu trúc giống chất giảm đau nội sinh (endorphin), dùng lâu gây nghiện; thuốc tê (procaine, novocaine) làm giảm tính thấm của màng với $\\mathrm{Na^+}$, ngăn điện thế hoạt động, xung đau không về được não. Chỉ dùng theo chỉ dẫn của bác sĩ.',
            'Lạm dụng chất gây nghiện (rượu, thuốc lá, heroin, cocaine…) làm thay đổi cấu trúc và hoạt động của não, gây phụ thuộc; cai nghiện cần quyết tâm cao và sự hỗ trợ của bác sĩ chuyên khoa. Cần sống lành mạnh, rèn kĩ năng tự kiểm soát và nói không với ma tuý.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Điện thế hoạt động trên neuron',
    instruction:
      'Chọn cường độ kích thích rồi bấm "Kích thích và chạy" (hoặc kéo "Xem thời điểm") để theo dõi điện thế màng và các kênh ion. Thử kích thích dưới ngưỡng $-55$ mV, vừa đủ ngưỡng và thật mạnh: đỉnh đồ thị có thay đổi không? Rồi bật "Thuốc tê".',
  },
  examples: [
    {
      problem:
        'Điện thế màng của một neuron lúc nghỉ là $-70$ mV, ở đỉnh điện thế hoạt động là $+30$ mV. Tính biên độ của điện thế hoạt động và cho biết lúc đó phía trong màng mang điện gì.',
      steps: [
        'Biên độ là độ chênh từ điện thế nghỉ đến đỉnh: $30 - (-70) = 100$ mV.',
        'Ở đỉnh, điện thế là $+30$ mV: phía trong màng mang điện dương so với phía ngoài (giai đoạn đảo cực).',
        'Nguyên nhân: kênh $\\mathrm{Na^+}$ mở, $\\mathrm{Na^+}$ tích điện dương đi vào trong nhiều.',
      ],
      answer: 'Biên độ $100$ mV; phía trong màng mang điện dương.',
    },
    {
      problem:
        'Một dây thần kinh dài $1{,}2$ m. Tính thời gian xung thần kinh đi hết dây nếu sợi có bao myelin với tốc độ $120$ m/s và nếu sợi không có bao myelin với tốc độ $2$ m/s.',
      steps: [
        'Sợi có bao myelin: $t = 1{,}2 : 120 = 0{,}01$ s $= 10$ ms.',
        'Sợi không có bao myelin: $t = 1{,}2 : 2 = 0{,}6$ s $= 600$ ms.',
        'Sợi có bao myelin nhanh hơn $600 : 10 = 60$ lần, do xung nhảy cóc qua các eo Ranvier.',
      ],
      answer: '$10$ ms so với $600$ ms; sợi có bao myelin truyền nhanh hơn $60$ lần.',
    },
    {
      problem:
        'Một số thuốc trừ sâu ức chế enzyme acetylcholinesterase. Giải thích vì sao người bị ngộ độc loại thuốc này bị co giật, co cứng cơ.',
      steps: [
        'Bình thường acetylcholinesterase phân giải acetylcholine ở khe synapse ngay sau khi truyền tin.',
        'Enzyme bị ức chế, acetylcholine không bị phân giải, còn gắn trên thụ thể màng sau.',
        'Màng sau (màng tế bào cơ) bị kích thích liên tục, cơ co liên tục: co giật, co cứng.',
      ],
      answer: 'Acetylcholine tồn tại lâu ở khe synapse, kích thích cơ liên tục.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi loài với dạng hệ thần kinh của nó.',
      left: ['Thuỷ tức', 'Châu chấu', 'Thằn lằn'],
      right: ['Dạng ống', 'Dạng lưới', 'Dạng chuỗi hạch', 'Chưa có hệ thần kinh'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Thuỷ tức thuộc ngành Ruột khoang; châu chấu thuộc Chân khớp.'],
      solution: 'Thuỷ tức: dạng lưới; châu chấu: dạng chuỗi hạch; thằn lằn (bò sát): dạng ống.',
    },
    {
      type: 'choice',
      prompt: 'Ở trạng thái nghỉ, hai bên màng neuron',
      options: [
        'phía trong mang điện âm, phía ngoài mang điện dương',
        'phía trong mang điện dương, phía ngoài mang điện âm',
        'cả hai phía đều trung hoà điện',
        'phía trong và phía ngoài cùng mang điện dương',
      ],
      answer: 0,
      hints: ['Ion nào đi ra ngoài màng khi tế bào nghỉ?'],
      solution:
        '$\\mathrm{K^+}$ khuếch tán ra ngoài và nằm sát mặt ngoài màng, nên trong âm, ngoài dương (khoảng $-70$ mV).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn của điện thế hoạt động theo thứ tự.',
      items: ['Tái phân cực', 'Mất phân cực', 'Đảo cực'],
      answer: [1, 2, 0],
      hints: ['Cổng $\\mathrm{Na^+}$ mở trước, cổng $\\mathrm{K^+}$ mở sau.'],
      solution:
        'Mất phân cực, đảo cực ($\\mathrm{Na^+}$ đi vào), rồi tái phân cực ($\\mathrm{K^+}$ đi ra).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện truyền tin qua synapse hoá học theo thứ tự.',
      items: [
        'Acetylcholine gắn vào thụ thể ở màng sau, xuất hiện điện thế hoạt động',
        '$\\mathrm{Ca^{2+}}$ đi vào chuỳ synapse',
        'Acetylcholinesterase phân giải acetylcholine',
        'Bóng synapse vỡ, giải phóng acetylcholine vào khe synapse',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Mọi việc bắt đầu khi xung thần kinh đến chuỳ synapse.'],
      solution:
        '$\\mathrm{Ca^{2+}}$ vào chuỳ → bóng vỡ, giải phóng acetylcholine → acetylcholine gắn thụ thể, màng sau xuất hiện điện thế hoạt động → acetylcholinesterase phân giải acetylcholine.',
    },
    {
      type: 'number',
      prompt:
        'Một sợi thần kinh có bao myelin dài $0{,}9$ m truyền xung với tốc độ $90$ m/s. Xung đi hết sợi trong bao nhiêu mili giây?',
      answer: 10,
      tolerance: 0.01,
      unit: 'ms',
      hints: ['$t = s : v$, rồi đổi giây ra mili giây.'],
      solution: '$t = 0{,}9 : 90 = 0{,}01$ s $= 10$ ms.',
    },
    {
      type: 'number',
      prompt:
        'Điện thế nghỉ của một tế bào là $-65$ mV, đỉnh điện thế hoạt động là $+35$ mV. Biên độ điện thế hoạt động là bao nhiêu mV?',
      answer: 100,
      tolerance: 0.01,
      unit: 'mV',
      hints: ['Biên độ là hiệu giữa đỉnh và điện thế nghỉ.'],
      solution: '$35 - (-65) = 100$ mV.',
    },
    {
      type: 'choice',
      prompt: 'Xung thần kinh lan truyền trên sợi có bao myelin nhanh hơn vì',
      options: [
        'xung nhảy cóc từ eo Ranvier này sang eo Ranvier kế tiếp',
        'sợi có bao myelin to hơn nên chứa nhiều $\\mathrm{Na^+}$ hơn',
        'bao myelin dẫn điện tốt',
        'sợi có bao myelin không cần tái phân cực',
      ],
      answer: 0,
      hints: ['Bao myelin có tính cách điện.'],
      solution:
        'Bao myelin cách điện nên điện thế hoạt động chỉ xuất hiện ở các eo Ranvier: xung nhảy cóc, nhanh và tiết kiệm năng lượng.',
    },
    {
      type: 'choice',
      prompt: 'Thuốc tê (như procaine) làm mất cảm giác đau vì',
      options: [
        'làm giảm tính thấm của màng với $\\mathrm{Na^+}$, ngăn hình thành điện thế hoạt động',
        'phá huỷ thụ thể đau',
        'làm tăng tiết acetylcholine',
        'cắt đứt dây thần kinh',
      ],
      answer: 0,
      hints: ['Giai đoạn mất phân cực cần ion nào đi vào?'],
      solution:
        'Thuốc tê làm $\\mathrm{Na^+}$ không vào được tế bào: không mất phân cực, đảo cực, nên không có xung đau truyền về não.',
    },
    {
      type: 'multi',
      prompt: 'Những phản xạ nào là phản xạ không điều kiện?',
      options: [
        'Tiết nước bọt khi thức ăn chạm vào lưỡi',
        'Rụt tay khi chạm vào vật nóng',
        'Dừng xe khi thấy đèn đỏ',
        'Chó chạy đến khi nghe tiếng gọi tên',
        'Đồng tử co khi ánh sáng mạnh chiếu vào mắt',
      ],
      answers: [0, 1, 4],
      hints: ['Phản xạ không điều kiện có sẵn từ khi sinh ra, ai cũng có.'],
      solution:
        'Tiết nước bọt khi thức ăn chạm lưỡi, rụt tay khi chạm vật nóng, co đồng tử là bẩm sinh. Dừng xe khi đèn đỏ, chó chạy đến khi nghe gọi là phản xạ có điều kiện, phải học mới có.',
    },
    {
      type: 'choice',
      prompt: 'Thông tin chỉ truyền qua synapse hoá học theo một chiều vì',
      options: [
        'chỉ chuỳ synapse có chất truyền tin, chỉ màng sau có thụ thể',
        'khe synapse quá rộng',
        'màng sau không có ion $\\mathrm{Na^+}$',
        'xung thần kinh chỉ đi từ thân đến sợi nhánh',
      ],
      answer: 0,
      hints: ['Chất truyền tin được chứa ở đâu, gắn vào đâu?'],
      solution:
        'Chất truyền tin chỉ có trong bóng synapse ở chuỳ; thụ thể chỉ có ở màng sau, nên tin truyền từ màng trước sang màng sau.',
    },
  ],
  takeaways: [
    'Hệ thần kinh tiến hoá từ dạng lưới (ruột khoang) qua dạng chuỗi hạch (giun, chân khớp) đến dạng ống (động vật có xương sống).',
    'Neuron gồm thân, sợi nhánh, sợi trục; nhiều sợi trục có bao myelin với các eo Ranvier.',
    'Điện thế nghỉ: trong âm, ngoài dương (khoảng $-70$ mV). Điện thế hoạt động: mất phân cực, đảo cực ($\\mathrm{Na^+}$ vào), tái phân cực ($\\mathrm{K^+}$ ra); có đủ ngưỡng mới xuất hiện.',
    'Xung lan truyền liên tục trên sợi không có myelin (chậm), nhảy cóc trên sợi có myelin (nhanh).',
    'Synapse hoá học: $\\mathrm{Ca^{2+}}$ vào chuỳ → giải phóng acetylcholine → gắn thụ thể màng sau → acetylcholinesterase phân giải; truyền một chiều.',
    'Phản xạ thực hiện qua cung phản xạ; phản xạ không điều kiện bẩm sinh, phản xạ có điều kiện học được, cần vỏ não.',
  ],
};

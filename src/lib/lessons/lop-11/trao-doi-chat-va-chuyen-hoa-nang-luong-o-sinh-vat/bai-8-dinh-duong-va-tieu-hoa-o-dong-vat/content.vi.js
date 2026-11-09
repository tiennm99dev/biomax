/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Quá trình dinh dưỡng ở động vật, các phương thức lấy thức ăn, ba hình thức tiêu hoá (nội bào, túi tiêu hoá, ống tiêu hoá), so sánh ống tiêu hoá thú ăn thịt và thú ăn thực vật, tiêu hoá và hấp thụ ở người, dinh dưỡng hợp lí, thực phẩm sạch và bệnh tiêu hoá.',
  intro:
    'Con hổ chỉ ăn thịt, con bò chỉ ăn cỏ, còn con người ăn được cả hai. Mỗi loài có bộ răng, dạ dày và ruột "may đo" cho đúng loại thức ăn của mình. Bài này theo chân thức ăn từ lúc được lấy vào cho đến khi trở thành chất sống của cơ thể.',
  objectives: [
    'Nêu được các giai đoạn của quá trình dinh dưỡng và các phương thức lấy thức ăn ở động vật.',
    'Phân biệt được tiêu hoá nội bào, tiêu hoá trong túi tiêu hoá và trong ống tiêu hoá.',
    'So sánh được ống tiêu hoá của thú ăn thịt và thú ăn thực vật, giải thích được sự thích nghi.',
    'Trình bày được quá trình tiêu hoá và hấp thụ ở người.',
    'Vận dụng được hiểu biết về dinh dưỡng hợp lí, thực phẩm sạch và phòng bệnh tiêu hoá.',
  ],
  sections: [
    {
      heading: 'Khái quát về dinh dưỡng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dinh dưỡng',
          text: 'Là quá trình động vật lấy các chất dinh dưỡng từ thức ăn và chuyển hoá chúng thành chất sống của cơ thể, duy trì sự sống và sinh trưởng. Quá trình gồm bốn giai đoạn: lấy thức ăn, tiêu hoá thức ăn, hấp thụ và đồng hoá các chất dinh dưỡng.',
        },
        {
          type: 'table',
          caption: 'Các phương thức lấy thức ăn',
          head: ['Phương thức', 'Cách lấy thức ăn', 'Ví dụ'],
          rows: [
            [
              'Ăn lọc',
              'Lọc nước qua cơ quan chuyên hoá để giữ lại thức ăn',
              'Trai, hến, vẹm, cá voi',
            ],
            [
              'Ăn hút',
              'Hút dịch từ cơ thể động vật hoặc thực vật nhờ miệng chọc hút',
              'Muỗi, rệp cây, nhện, ong',
            ],
            [
              'Ăn thức ăn rắn',
              'Lấy những miếng thức ăn có kích thước khác nhau',
              'Voi dùng vòi đưa cỏ vào miệng; hổ vồ mồi, xé thịt rồi nuốt',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Các hình thức tiêu hoá',
      blocks: [
        {
          type: 'p',
          text: 'Tiêu hoá là quá trình biến đổi thức ăn phức tạp thành các chất đơn giản mà cơ thể hấp thụ được.',
        },
        {
          type: 'table',
          head: ['Hình thức', 'Đặc điểm', 'Đại diện'],
          rows: [
            [
              'Tiêu hoá nội bào',
              'Tế bào thực bào mẩu thức ăn, enzyme của lysosome phân giải bên trong tế bào; chỉ tiêu hoá được mẩu thức ăn nhỏ',
              'Bọt biển',
            ],
            [
              'Túi tiêu hoá',
              'Một lỗ vừa là miệng vừa là hậu môn; tiêu hoá ngoại bào trong túi rồi tiếp tục nội bào ở tế bào thành túi',
              'Ruột khoang (thuỷ tức), giun dẹp',
            ],
            [
              'Ống tiêu hoá',
              'Có miệng và hậu môn riêng, thức ăn đi một chiều; tiêu hoá ngoại bào, gồm tiêu hoá cơ học và hoá học, được điều hoà bởi thần kinh và hormone',
              'Nhiều động vật không xương sống, mọi động vật có xương sống',
            ],
          ],
        },
        { type: 'widget', name: 'hinh-thuc' },
      ],
    },
    {
      heading: 'Ống tiêu hoá của thú ăn thịt và thú ăn thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Thịt mềm, giàu dinh dưỡng và dễ tiêu; cỏ dai, nghèo dinh dưỡng, chứa nhiều cellulose mà thú không tự tiết được enzyme phân giải. Vì vậy ống tiêu hoá của hai nhóm thú khác nhau rõ rệt.',
        },
        {
          type: 'table',
          head: ['Bộ phận', 'Thú ăn thịt', 'Thú ăn thực vật'],
          rows: [
            [
              'Răng',
              'Răng nanh dài nhọn, răng ăn thịt sắc để cắt xé',
              'Răng hàm, răng trước hàm to, nhiều gờ để nghiền',
            ],
            [
              'Dạ dày',
              'Dạ dày đơn, to',
              'Bốn ngăn ở thú nhai lại (trâu, bò); dạ dày đơn ở thỏ, ngựa',
            ],
            ['Ruột non', 'Ngắn', 'Dài'],
            [
              'Manh tràng',
              'Nhỏ, không có chức năng tiêu hoá',
              'Phát triển, có vi sinh vật cộng sinh tiêu hoá cellulose',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Dạ dày bốn ngăn của trâu, bò',
          text: 'Cỏ nuốt vào dạ cỏ, được vi sinh vật cộng sinh lên men phân giải cellulose; sau đó qua dạ tổ ong và được ợ lên miệng nhai lại kĩ, rồi xuống dạ lá sách (hấp thụ bớt nước) và dạ múi khế, nơi tiết pepsin và HCl tiêu hoá protein của cỏ và của chính vi sinh vật.',
        },
      ],
    },
    {
      heading: 'Tiêu hoá và hấp thụ ở người',
      blocks: [
        {
          type: 'table',
          head: ['Cơ quan', 'Tiêu hoá cơ học', 'Tiêu hoá hoá học'],
          rows: [
            [
              'Khoang miệng',
              'Răng nghiền, lưỡi đảo trộn thức ăn với nước bọt',
              'Amylase nước bọt biến tinh bột thành maltose',
            ],
            [
              'Dạ dày',
              'Co bóp nhào trộn thức ăn với dịch vị',
              'Pepsin (với HCl) cắt protein thành peptide',
            ],
            [
              'Ruột non',
              'Cử động phân đoạn, nhu động trộn thức ăn với dịch tuỵ, mật, dịch ruột và đẩy đi',
              'Enzyme của dịch tuỵ và dịch ruột phân giải hoàn toàn carbohydrate, lipid (được mật nhũ tương hoá), protein thành chất đơn giản',
            ],
            ['Ruột già', 'Tạo khối phân, đẩy ra hậu môn', 'Hầu như không còn'],
          ],
        },
        {
          type: 'p',
          text: 'Thức ăn đi qua thực quản nhờ nhu động. Ruột non là nơi hấp thụ chủ yếu: nhờ nếp gấp, lông ruột và vi nhung mao, diện tích bề mặt hấp thụ khoảng $250$ đến $300\\,\\mathrm{m^2}$. Amino acid, đường đơn, acid béo, glycerol, vitamin, chất khoáng, nước được hấp thụ theo cơ chế chủ động và thụ động, rồi theo máu và bạch huyết đến tế bào để đồng hoá: xây dựng tế bào mới, sửa chữa mô, cung cấp và dự trữ năng lượng.',
        },
      ],
    },
    {
      heading: 'Dinh dưỡng hợp lí và vệ sinh tiêu hoá',
      blocks: [
        {
          type: 'list',
          items: [
            'Đủ năng lượng theo lứa tuổi, giới tính, trạng thái sinh lí: $1$ g carbohydrate hoặc protein cho khoảng $4{,}1$ kcal, $1$ g lipid cho khoảng $9{,}3$ kcal.',
            'Đủ và cân đối sáu nhóm chất: carbohydrate, lipid, protein, vitamin, chất khoáng và nước.',
            'Thực phẩm sạch: đủ dinh dưỡng, không chứa tác nhân sinh học, hoá học, vật lí gây hại cho người dùng.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bệnh tiêu hoá',
          text: 'Tiêu chảy, viêm loét dạ dày, tá tràng, ung thư đại tràng… thường do ăn uống không đúng cách, khẩu phần mất cân đối, thực phẩm không an toàn, uống nhiều rượu bia, hút thuốc lá, ăn không đúng giờ. Phòng bệnh: ăn đủ chất, hạn chế đồ mặn và chiên rán, giữ vệ sinh thực phẩm, ăn chừng mực, không vận động mạnh ngay sau bữa ăn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Hai ống tiêu hoá cạnh nhau',
    instruction:
      'Chọn từng bộ phận để thấy nó trên cả hai sơ đồ và đọc so sánh. Đổi thú ăn thực vật giữa bò (nhai lại) và thỏ để thấy dạ dày bốn ngăn, manh tràng thay đổi ra sao. Xem đủ bốn bộ phận.',
  },
  examples: [
    {
      problem:
        'Vì sao ruột non của thú ăn thực vật dài hơn nhiều so với thú ăn thịt có cùng cỡ cơ thể?',
      steps: [
        'Thức ăn thực vật cứng, nhiều cellulose, nghèo chất dinh dưỡng, khó tiêu.',
        'Ruột dài làm thức ăn đi chậm, có đủ thời gian để được tiêu hoá và hấp thụ.',
        'Thịt dễ tiêu, giàu dinh dưỡng nên ruột ngắn là đủ.',
      ],
      answer:
        'Ruột dài là thích nghi giúp tiêu hoá và hấp thụ hết thức ăn thực vật khó tiêu, nghèo dinh dưỡng.',
    },
    {
      problem:
        'Một bữa ăn có $60$ g carbohydrate, $15$ g protein và $20$ g lipid. Tính năng lượng của bữa ăn, biết $1$ g carbohydrate hoặc protein cho $4{,}1$ kcal, $1$ g lipid cho $9{,}3$ kcal.',
      steps: [
        'Carbohydrate: $60 \\cdot 4{,}1 = 246$ kcal.',
        'Protein: $15 \\cdot 4{,}1 = 61{,}5$ kcal.',
        'Lipid: $20 \\cdot 9{,}3 = 186$ kcal.',
        'Tổng: $246 + 61{,}5 + 186 = 493{,}5$ kcal.',
      ],
      answer: 'Khoảng $493{,}5$ kcal.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn của quá trình dinh dưỡng ở động vật.',
      items: ['Hấp thụ', 'Lấy thức ăn', 'Đồng hoá', 'Tiêu hoá'],
      answer: [1, 3, 0, 2],
      hints: ['Thức ăn phải được biến đổi thành chất đơn giản trước khi vào máu.'],
      solution: 'Lấy thức ăn, tiêu hoá, hấp thụ, đồng hoá.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loài với phương thức lấy thức ăn.',
      left: ['Trai', 'Muỗi', 'Hổ'],
      right: ['Ăn hút', 'Ăn lọc', 'Ăn thức ăn rắn', 'Tiêu hoá nội bào'],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 2],
      ],
      hints: ['Tiêu hoá nội bào là hình thức tiêu hoá, không phải cách lấy thức ăn.'],
      solution: 'Trai: ăn lọc. Muỗi: ăn hút. Hổ: ăn thức ăn rắn.',
    },
    {
      type: 'choice',
      prompt: 'Thuỷ tức tiêu hoá thức ăn theo hình thức nào?',
      options: [
        'Tiêu hoá trong túi tiêu hoá, kết hợp ngoại bào và nội bào',
        'Chỉ tiêu hoá nội bào',
        'Tiêu hoá trong ống tiêu hoá',
        'Không cần tiêu hoá',
      ],
      answer: 0,
      hints: ['Thuỷ tức thuộc ruột khoang, có một lỗ vừa là miệng vừa là hậu môn.'],
      solution:
        'Thuỷ tức có túi tiêu hoá: thức ăn được tiêu hoá ngoại bào trong túi, rồi tiếp tục nội bào ở tế bào thành túi.',
    },
    {
      type: 'multi',
      prompt: 'Những đặc điểm nào là của thú ăn thực vật?',
      options: [
        'Răng hàm có nhiều gờ để nghiền',
        'Ruột non dài',
        'Manh tràng phát triển, có vi sinh vật cộng sinh',
        'Răng nanh dài nhọn để xé mồi',
        'Manh tràng nhỏ, không có chức năng tiêu hoá',
      ],
      answers: [0, 1, 2],
      hints: ['Thức ăn của thú ăn thực vật chứa nhiều cellulose khó tiêu.'],
      solution:
        'Thú ăn thực vật có răng nghiền, ruột non dài, manh tràng phát triển. Răng nanh sắc và manh tràng nhỏ là đặc điểm thú ăn thịt.',
    },
    {
      type: 'choice',
      prompt:
        'Ở trâu, bò, ngăn nào của dạ dày có vai trò như dạ dày đơn của thú, tiết pepsin và HCl?',
      options: ['Dạ múi khế', 'Dạ cỏ', 'Dạ tổ ong', 'Dạ lá sách'],
      answer: 0,
      hints: ['Đó là ngăn cuối cùng thức ăn đi qua trước khi xuống ruột.'],
      solution: 'Dạ múi khế tiết pepsin và HCl, tiêu hoá protein như dạ dày đơn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi enzyme với chất nó phân giải.',
      left: ['Amylase nước bọt', 'Pepsin', 'Lipase'],
      right: ['Lipid', 'Tinh bột', 'Protein', 'Cellulose'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Người không tự tiết được enzyme phân giải cellulose.'],
      solution: 'Amylase: tinh bột thành maltose. Pepsin: protein thành peptide. Lipase: lipid.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao ruột non là nơi hấp thụ chất dinh dưỡng chủ yếu?',
      options: [
        'Có nếp gấp, lông ruột, vi nhung mao tạo diện tích hấp thụ khoảng $250$ đến $300\\,\\mathrm{m^2}$',
        'Vì ruột non tiết nhiều HCl',
        'Vì ruột non là đoạn ngắn nhất',
        'Vì ruột non chứa nhiều vi sinh vật phân giải cellulose',
      ],
      answer: 0,
      hints: ['Hấp thụ càng nhanh khi bề mặt tiếp xúc càng lớn.'],
      solution:
        'Nếp gấp, lông ruột và vi nhung mao làm diện tích bề mặt rất lớn, cùng mạng mao mạch dày đặc giúp hấp thụ hiệu quả.',
    },
    {
      type: 'number',
      prompt:
        'Một bữa ăn có $50$ g carbohydrate, $20$ g protein và $10$ g lipid. Tính năng lượng (kcal), biết $1$ g carbohydrate hoặc protein cho $4{,}1$ kcal, $1$ g lipid cho $9{,}3$ kcal.',
      answer: 380,
      tolerance: 0.05,
      unit: 'kcal',
      hints: ['Nhân khối lượng mỗi chất với năng lượng của $1$ g, rồi cộng lại.'],
      solution: '$50 \\cdot 4{,}1 + 20 \\cdot 4{,}1 + 10 \\cdot 9{,}3 = 205 + 82 + 93 = 380$ kcal.',
    },
    {
      type: 'number',
      prompt:
        'Cần bao nhiêu gam carbohydrate để cho năng lượng bằng $41$ g lipid? (Carbohydrate $4{,}1$ kcal/g, lipid $9{,}3$ kcal/g.)',
      answer: 93,
      tolerance: 0.05,
      unit: 'g',
      hints: ['Tính năng lượng của $41$ g lipid trước.'],
      solution: '$41 \\cdot 9{,}3 = 381{,}3$ kcal; $381{,}3 : 4{,}1 = 93$ g carbohydrate.',
    },
    {
      type: 'multi',
      prompt: 'Thói quen nào giúp phòng bệnh tiêu hoá?',
      options: [
        'Ăn đúng giờ, ăn chừng mực',
        'Giữ vệ sinh thực phẩm, ăn chín uống sôi',
        'Chạy nhảy mạnh ngay sau bữa ăn',
        'Thường xuyên ăn đồ chiên rán, mặn',
        'Hạn chế rượu bia, không hút thuốc lá',
      ],
      answers: [0, 1, 4],
      hints: ['Ba thói quen còn lại làm hại dạ dày, ruột.'],
      solution:
        'Ăn đúng giờ, chừng mực, vệ sinh thực phẩm, hạn chế rượu bia, thuốc lá giúp phòng bệnh; vận động mạnh sau ăn và ăn nhiều đồ mặn, chiên rán gây hại.',
    },
  ],
  takeaways: [
    'Dinh dưỡng gồm lấy thức ăn, tiêu hoá, hấp thụ và đồng hoá; lấy thức ăn bằng ăn lọc, ăn hút hoặc ăn thức ăn rắn.',
    'Tiêu hoá nội bào (bọt biển), túi tiêu hoá (ruột khoang, giun dẹp), ống tiêu hoá (đa số động vật, mọi động vật có xương sống).',
    'Thú ăn thịt: răng nanh sắc, dạ dày đơn, ruột ngắn, manh tràng nhỏ. Thú ăn thực vật: răng nghiền, ruột dài, manh tràng phát triển; trâu bò có dạ dày bốn ngăn.',
    'Ở người, thức ăn được tiêu hoá cơ học và hoá học từ miệng đến ruột non; ruột non hấp thụ chủ yếu.',
    'Ăn đủ năng lượng, cân đối các nhóm chất và dùng thực phẩm sạch để phòng bệnh tiêu hoá.',
  ],
};

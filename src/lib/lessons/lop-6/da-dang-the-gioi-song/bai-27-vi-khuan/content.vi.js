/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vi khuẩn là sinh vật đơn bào nhân sơ rất nhỏ, có hình cầu, hình que, hình xoắn hoặc hình dấu phẩy, sống ở khắp nơi; nhiều vi khuẩn có ích trong tự nhiên và đời sống, một số gây bệnh cho người, động vật, thực vật và làm hỏng thực phẩm.',
  intro:
    'Một bát canh để quên trên bàn qua đêm hè sáng hôm sau đã có mùi chua, còn bát canh cất trong tủ lạnh thì vẫn ăn được. Thủ phạm là những sinh vật nhỏ đến mức không nhìn thấy bằng mắt thường: vi khuẩn. Chúng có mặt ở khắp nơi, có loại gây hại nhưng cũng có rất nhiều loại có ích cho con người.',
  objectives: [
    'Nhận biết được vi khuẩn qua hình dạng và nêu được cấu tạo đơn giản của tế bào vi khuẩn.',
    'Nêu được vai trò của vi khuẩn trong tự nhiên và trong thực tiễn.',
    'Nêu được một số bệnh do vi khuẩn gây ra và biện pháp phòng tránh.',
    'Giải thích được cơ sở của các cách bảo quản thực phẩm như làm lạnh, đun sôi, phơi khô.',
  ],
  sections: [
    {
      heading: 'Đa dạng vi khuẩn',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vi khuẩn',
          text: 'Vi khuẩn là những sinh vật đơn bào, nhân sơ, có kích thước rất nhỏ (thường chỉ vài $\\mu\\text{m}$), chỉ quan sát được bằng kính hiển vi. Vi khuẩn sống ở khắp nơi: trong đất, nước, không khí và cả trong cơ thể sinh vật khác.',
        },
        {
          type: 'table',
          caption: 'Các hình dạng thường gặp của vi khuẩn',
          head: ['Hình dạng', 'Tên gọi', 'Ví dụ'],
          rows: [
            ['Hình cầu', 'Cầu khuẩn', 'Vi khuẩn gây viêm họng, liên cầu khuẩn trong sữa chua'],
            [
              'Hình que',
              'Trực khuẩn',
              'Vi khuẩn E. coli, trực khuẩn lao, vi khuẩn lactic dạng que',
            ],
            ['Hình xoắn', 'Xoắn khuẩn', 'Xoắn khuẩn gây bệnh vàng da'],
            ['Hình dấu phẩy', 'Phẩy khuẩn', 'Phẩy khuẩn tả'],
          ],
        },
        {
          type: 'p',
          text: 'Dù hình dạng khác nhau, tế bào vi khuẩn đều có cấu tạo đơn giản: thành tế bào, màng tế bào, tế bào chất và vùng nhân (chưa có màng nhân). Một số vi khuẩn còn có roi để di chuyển và lông để bám. Hãy bấm vào các số trên hình để tìm hiểu từng phần.',
        },
        { type: 'widget', name: 'cau-tao' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vi khuẩn sinh sản rất nhanh',
          text: 'Vi khuẩn sinh sản bằng cách phân đôi: một tế bào tách thành hai tế bào con. Khi đủ ấm và đủ chất dinh dưỡng, có loài chỉ khoảng 20 phút đã phân đôi một lần. Sau $n$ lần phân đôi, một vi khuẩn tạo ra $2^n$ vi khuẩn.',
        },
      ],
    },
    {
      heading: 'Vai trò và tác hại của vi khuẩn',
      blocks: [
        {
          type: 'p',
          text: 'Phần lớn vi khuẩn có ích. Trong tự nhiên, vi khuẩn phân giải xác động vật, thực vật thành chất mùn và muối khoáng cho cây sử dụng, góp phần làm sạch môi trường; vi khuẩn sống trong nốt sần rễ cây họ Đậu cố định khí nitrogen trong không khí thành chất đạm cho cây.',
        },
        {
          type: 'list',
          items: [
            'Chế biến thực phẩm: vi khuẩn lactic dùng để làm sữa chua, muối dưa, muối cà; vi khuẩn được dùng để làm giấm, nước mắm.',
            'Sản xuất: một số vi khuẩn được dùng để sản xuất thuốc kháng sinh, vitamin; xử lí rác thải, nước thải.',
            'Trong cơ thể người: vi khuẩn sống trong ruột giúp tiêu hóa thức ăn và tổng hợp một số vitamin.',
          ],
        },
        {
          type: 'p',
          text: 'Một số vi khuẩn gây hại: chúng gây bệnh cho người, động vật, thực vật và làm hỏng thực phẩm (làm thức ăn ôi, thiu, chua, có mùi lạ).',
        },
        {
          type: 'table',
          caption: 'Một số bệnh do vi khuẩn gây ra',
          head: ['Đối tượng', 'Bệnh', 'Con đường lây truyền chủ yếu'],
          rows: [
            ['Người', 'Tả, tiêu chảy, thương hàn', 'Thức ăn, nước uống nhiễm khuẩn'],
            ['Người', 'Lao phổi', 'Đường hô hấp (giọt bắn khi ho, hắt hơi)'],
            ['Người', 'Uốn ván', 'Vết thương hở tiếp xúc với đất, vật nhiễm khuẩn'],
            [
              'Thực vật',
              'Bạc lá lúa, héo xanh cà chua',
              'Nước, đất, dụng cụ, hạt giống nhiễm khuẩn',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Phòng bệnh do vi khuẩn và bảo quản thực phẩm',
      blocks: [
        {
          type: 'list',
          items: [
            'Giữ vệ sinh cá nhân, rửa tay bằng xà phòng trước khi ăn và sau khi đi vệ sinh.',
            'Ăn chín, uống sôi; giữ vệ sinh nơi ở, nguồn nước và thực phẩm.',
            'Tiêm vaccine phòng bệnh (lao, uốn ván, bạch hầu, ho gà...).',
            'Chỉ dùng thuốc kháng sinh khi có chỉ định của bác sĩ và dùng đủ liều.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dùng kháng sinh đúng cách',
          text: 'Tự ý dùng kháng sinh, dùng không đủ liều sẽ làm vi khuẩn kháng thuốc: lần sau thuốc không còn tác dụng. Kháng sinh chỉ diệt vi khuẩn, không chữa được bệnh do virus như cảm cúm.',
        },
        {
          type: 'p',
          text: 'Các cách bảo quản thực phẩm đều nhằm ngăn vi khuẩn sinh sản hoặc tiêu diệt chúng: làm lạnh (tủ lạnh làm vi khuẩn gần như ngừng sinh sản), đun sôi (nhiệt độ cao tiêu diệt vi khuẩn), phơi khô, sấy khô (thiếu nước), ướp muối, ngâm đường, đóng hộp kín.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy thay đổi nhiệt độ, thời gian và cách giữ vệ sinh để xem số vi khuẩn trên thức ăn thay đổi như thế nào.',
        },
      ],
    },
  ],
  explore: {
    title: 'Vi khuẩn sinh sản theo thời gian',
    instruction:
      'Chọn nơi để thức ăn hoặc kéo thanh nhiệt độ, kéo thanh thời gian và chọn cách giữ vệ sinh. Quan sát đường biểu diễn số vi khuẩn và thời điểm nó vượt ngưỡng nguy hiểm.',
  },
  examples: [
    {
      problem:
        'Trong điều kiện thuận lợi, cứ 20 phút một vi khuẩn phân đôi một lần. Từ một vi khuẩn, sau 2 giờ sẽ có bao nhiêu vi khuẩn?',
      steps: [
        'Đổi $2$ giờ $= 120$ phút; số lần phân đôi là $120 : 20 = 6$ lần.',
        'Mỗi lần phân đôi, số vi khuẩn tăng gấp đôi: $1 \\to 2 \\to 4 \\to 8 \\to 16 \\to 32 \\to 64$.',
        'Viết gọn: $2^6 = 64$.',
      ],
      answer: 'Sau 2 giờ có 64 vi khuẩn.',
    },
    {
      problem:
        'Vì sao thức ăn cất trong tủ lạnh để được lâu hơn thức ăn để ngoài trời nóng, còn thức ăn đã đun sôi kĩ thì lâu bị ôi thiu hơn?',
      steps: [
        'Thức ăn bị ôi thiu là do vi khuẩn sinh sản nhanh và phân hủy thức ăn.',
        'Ở nhiệt độ thấp trong tủ lạnh, vi khuẩn gần như ngừng sinh sản (nhưng không chết), nên thức ăn lâu hỏng.',
        'Ở trời nóng (khoảng $30$ đến $40\\ ^\\circ\\text{C}$), vi khuẩn sinh sản rất nhanh nên thức ăn nhanh hỏng.',
        'Đun sôi tiêu diệt phần lớn vi khuẩn có trong thức ăn.',
      ],
      answer:
        'Vì nhiệt độ thấp kìm hãm sự sinh sản của vi khuẩn, còn nhiệt độ cao khi đun sôi tiêu diệt vi khuẩn.',
    },
    {
      problem:
        'Bạn Lan bị cảm cúm nên tự mua thuốc kháng sinh uống. Bạn Hà bị bác sĩ kê kháng sinh 7 ngày nhưng uống 3 ngày thấy đỡ thì bỏ thuốc. Em hãy nhận xét việc làm của hai bạn.',
      steps: [
        'Cảm cúm do virus gây ra; kháng sinh chỉ diệt vi khuẩn, nên Lan uống kháng sinh không có tác dụng, lại có hại.',
        'Hà bỏ thuốc giữa chừng: những vi khuẩn còn sống sót có thể trở nên kháng thuốc và bệnh dễ tái phát.',
        'Kháng sinh phải dùng theo chỉ định của bác sĩ và uống đủ liều.',
      ],
      answer:
        'Cả hai bạn đều dùng kháng sinh sai cách: chỉ dùng kháng sinh khi bác sĩ chỉ định và phải dùng đủ liều.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi hình dạng vi khuẩn với tên gọi của nó.',
      left: ['Hình cầu', 'Hình que', 'Hình xoắn', 'Hình dấu phẩy'],
      right: ['Phẩy khuẩn', 'Trực khuẩn', 'Cầu khuẩn', 'Xoắn khuẩn'],
      pairs: [
        [0, 2],
        [1, 1],
        [2, 3],
        [3, 0],
      ],
      hints: ['"Trực" nghĩa là thẳng (như cái que).'],
      solution:
        'Hình cầu: cầu khuẩn; hình que: trực khuẩn; hình xoắn: xoắn khuẩn; hình dấu phẩy: phẩy khuẩn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thành phần có ở mọi tế bào vi khuẩn.',
      options: [
        'Thành tế bào',
        'Màng tế bào',
        'Nhân có màng nhân',
        'Tế bào chất',
        'Vùng nhân',
        'Lục lạp',
      ],
      answers: [0, 1, 3, 4],
      hints: ['Vi khuẩn là tế bào nhân sơ.', 'Vi khuẩn có lục lạp không?'],
      solution:
        'Tế bào vi khuẩn có thành tế bào, màng tế bào, tế bào chất và vùng nhân. Vi khuẩn là tế bào nhân sơ nên chưa có nhân có màng bọc và không có lục lạp.',
    },
    {
      type: 'number',
      prompt:
        'Một vi khuẩn cứ 20 phút phân đôi một lần. Từ 10 vi khuẩn, sau 3 giờ trong điều kiện thuận lợi sẽ có bao nhiêu vi khuẩn?',
      answer: 5120,
      unit: 'vi khuẩn',
      hints: ['3 giờ có bao nhiêu lần 20 phút?', 'Sau 9 lần phân đôi, số vi khuẩn gấp $2^9$ lần.'],
      solution:
        '$3$ giờ $= 180$ phút, số lần phân đôi: $180 : 20 = 9$. Số vi khuẩn: $10 \\cdot 2^9 = 10 \\cdot 512 = 5\\,120$ vi khuẩn.',
    },
    {
      type: 'number',
      prompt:
        'Một vi khuẩn cứ 20 phút phân đôi một lần. Sau bao nhiêu phút thì một vi khuẩn tạo ra 1 024 vi khuẩn?',
      answer: 200,
      unit: 'phút',
      hints: ['$1\\,024 = 2^{10}$.'],
      solution: '$1\\,024 = 2^{10}$ nên cần 10 lần phân đôi: $10 \\cdot 20 = 200$ phút.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò có ích của vi khuẩn.',
      options: [
        'Phân giải xác động vật, thực vật thành chất mùn, muối khoáng',
        'Làm sữa chua, muối dưa',
        'Gây bệnh tả, bệnh lao',
        'Cố định nitrogen cho cây họ Đậu',
        'Làm thức ăn ôi thiu',
      ],
      answers: [0, 1, 3],
      hints: ['Hai ý là tác hại của vi khuẩn.'],
      solution:
        'Có ích: phân giải xác sinh vật, làm sữa chua và muối dưa (vi khuẩn lactic), cố định nitrogen ở nốt sần cây họ Đậu. Gây bệnh và làm hỏng thức ăn là tác hại.',
    },
    {
      type: 'choice',
      prompt: 'Bệnh nào sau đây do vi khuẩn gây ra?',
      options: ['Cúm', 'Thủy đậu', 'Lao phổi', 'Sởi'],
      answer: 2,
      hints: ['Ba bệnh còn lại đều do virus gây ra.'],
      solution: 'Lao phổi do trực khuẩn lao gây ra. Cúm, thủy đậu, sởi là bệnh do virus.',
    },
    {
      type: 'choice',
      prompt: 'Cất thức ăn trong tủ lạnh giúp thức ăn để được lâu hơn vì ở nhiệt độ thấp',
      options: [
        'vi khuẩn bị tiêu diệt hết',
        'vi khuẩn gần như ngừng sinh sản',
        'vi khuẩn sinh sản nhanh hơn',
        'thức ăn không còn chất dinh dưỡng',
      ],
      answer: 1,
      hints: ['Lấy thức ăn ra khỏi tủ lạnh một thời gian thì nó có bị hỏng không?'],
      solution:
        'Nhiệt độ thấp kìm hãm vi khuẩn, làm chúng gần như ngừng sinh sản nhưng không tiêu diệt chúng; lấy ra ngoài, vi khuẩn lại sinh sản.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp phòng bệnh do vi khuẩn.',
      options: [
        'Rửa tay bằng xà phòng trước khi ăn',
        'Ăn chín, uống sôi',
        'Tự mua kháng sinh uống khi bị cảm cúm',
        'Tiêm vaccine phòng lao, uốn ván',
        'Dùng chung khăn mặt với người bệnh',
      ],
      answers: [0, 1, 3],
      hints: ['Kháng sinh có chữa được cúm không?'],
      solution:
        'Rửa tay, ăn chín uống sôi, tiêm vaccine là các biện pháp phòng bệnh. Tự ý uống kháng sinh (cúm do virus) và dùng chung khăn với người bệnh là sai.',
    },
    {
      type: 'text',
      prompt: 'Vi khuẩn sinh sản bằng cách nào? (Trả lời bằng một từ)',
      accept: ['phân đôi', 'phân đôi tế bào', 'bằng cách phân đôi'],
      hints: ['Một tế bào tách thành hai tế bào con.'],
      solution: 'Vi khuẩn sinh sản bằng cách phân đôi: một tế bào tách thành hai tế bào con.',
    },
  ],
  takeaways: [
    'Vi khuẩn là sinh vật đơn bào, nhân sơ, rất nhỏ; có hình cầu, hình que, hình xoắn, hình dấu phẩy; sống ở khắp nơi.',
    'Tế bào vi khuẩn gồm thành tế bào, màng tế bào, tế bào chất, vùng nhân; một số có roi, lông.',
    'Vi khuẩn có ích: phân giải chất hữu cơ, cố định nitrogen, chế biến thực phẩm, sản xuất thuốc; có hại: gây bệnh (tả, lao, uốn ván...) và làm hỏng thực phẩm.',
    'Phòng bệnh: vệ sinh cá nhân, ăn chín uống sôi, tiêm vaccine, dùng kháng sinh đúng chỉ định; bảo quản thực phẩm bằng cách làm lạnh, đun sôi, phơi khô, ướp muối.',
  ],
};

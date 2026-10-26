/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu tạo da gồm lớp biểu bì, lớp bì và lớp mỡ dưới da; chức năng của da; một số bệnh về da, cách bảo vệ và làm đẹp da an toàn; thân nhiệt, vai trò của da và hệ thần kinh trong điều hòa thân nhiệt; biện pháp chống nóng, chống lạnh và sơ cứu người bị cảm nóng, cảm lạnh.',
  intro:
    'Mùa hè đá bóng dưới nắng, mặt em đỏ bừng và mồ hôi ướt đẫm áo; mùa đông gió bấc thổi, da tái đi và nổi da gà. Dù trời nóng hay lạnh, nhiệt độ cơ thể em vẫn giữ ở khoảng 37 °C. Làn da đã làm gì để giữ được điều đó?',
  objectives: [
    'Nêu được cấu tạo sơ lược và chức năng của da.',
    'Trình bày được một số bệnh về da, cách phòng chống và một số biện pháp chăm sóc, bảo vệ, làm đẹp da an toàn.',
    'Nêu được khái niệm thân nhiệt; vai trò của da và hệ thần kinh trong điều hòa thân nhiệt.',
    'Nêu được các biện pháp chống nóng, chống lạnh; biết cách sơ cứu khi bị cảm nóng, cảm lạnh.',
  ],
  sections: [
    {
      heading: 'Cấu tạo và chức năng của da',
      blocks: [
        {
          type: 'table',
          caption: 'Cấu tạo của da',
          head: ['Lớp', 'Thành phần chính'],
          rows: [
            [
              'Lớp biểu bì',
              'Tầng sừng (tế bào chết hóa sừng, dễ bong) và tầng tế bào sống (phân chia tạo tế bào mới, chứa sắc tố)',
            ],
            [
              'Lớp bì',
              'Mô liên kết với các sợi đàn hồi; có thụ quan, tuyến nhờn, tuyến mồ hôi, bao lông, cơ co chân lông, mạch máu, dây thần kinh',
            ],
            ['Lớp mỡ dưới da', 'Các tế bào mỡ dự trữ, cách nhiệt'],
          ],
        },
        { type: 'widget', name: 'cau-tao-da' },
        {
          type: 'list',
          items: [
            'Bảo vệ: tầng sừng, chất nhờn và sắc tố chống thấm nước, ngăn vi khuẩn, chống tia cực tím; lớp mỡ dưới da đệm, chống tác động cơ học.',
            'Cảm giác: các thụ quan tiếp nhận kích thích nóng, lạnh, đau, áp lực.',
            'Bài tiết: tuyến mồ hôi thải nước, muối khoáng, urea.',
            'Điều hòa thân nhiệt: nhờ mạch máu dưới da, tuyến mồ hôi, cơ co chân lông và lớp mỡ.',
            'Da cùng với lông, tóc, móng còn tạo nên vẻ đẹp của con người.',
          ],
        },
      ],
    },
    {
      heading: 'Bệnh về da, bảo vệ và làm đẹp da',
      blocks: [
        {
          type: 'table',
          caption: 'Một số bệnh về da',
          head: ['Bệnh', 'Nguyên nhân', 'Phòng chống'],
          rows: [
            [
              'Mụn trứng cá',
              'Tuyến nhờn tiết nhiều (thường ở tuổi dậy thì), bít tắc lỗ chân lông, vi khuẩn gây viêm',
              'Rửa mặt sạch, không nặn mụn, ăn ít đồ ngọt, nhiều dầu mỡ',
            ],
            [
              'Lang ben, hắc lào',
              'Do nấm, lây qua tiếp xúc, dùng chung đồ cá nhân',
              'Tắm rửa thường xuyên, giữ da khô thoáng, không dùng chung quần áo, khăn',
            ],
            [
              'Ghẻ',
              'Do cái ghẻ (một loài ve nhỏ) đào hang dưới da, gây ngứa',
              'Giữ vệ sinh thân thể, giặt phơi chăn màn, quần áo dưới nắng',
            ],
            [
              'Bỏng',
              'Do nhiệt, hóa chất, điện; nặng có thể tổn thương các lớp sâu của da',
              'Cẩn thận với lửa, nước sôi, hóa chất; sơ cứu bằng cách xả nước mát lên vết bỏng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chăm sóc và làm đẹp da an toàn',
          text: 'Tắm rửa thường xuyên, rèn luyện thân thể, ăn uống đủ chất và uống đủ nước, tránh tiếp xúc lâu với ánh nắng gắt (dùng kem chống nắng, mũ, áo dài tay). Không lạm dụng mĩ phẩm, không dùng mĩ phẩm không rõ nguồn gốc; không tự ý xăm, lột da… vì có thể gây tổn thương da.',
        },
      ],
    },
    {
      heading: 'Thân nhiệt và điều hòa thân nhiệt',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thân nhiệt',
          text: 'Thân nhiệt là nhiệt độ của cơ thể. Ở người khỏe mạnh, thân nhiệt luôn ổn định ở khoảng 37 °C (dao động khoảng 36,5 – 37,5 °C) nhờ sự cân bằng giữa quá trình sinh nhiệt và tỏa nhiệt.',
        },
        {
          type: 'table',
          caption: 'Vai trò của da trong điều hòa thân nhiệt',
          head: ['Khi trời nóng hoặc vận động mạnh', 'Khi trời lạnh'],
          rows: [
            [
              'Mạch máu dưới da dãn ra, máu qua da nhiều, tăng tỏa nhiệt',
              'Mạch máu dưới da co lại, giảm tỏa nhiệt',
            ],
            ['Tuyến mồ hôi tăng tiết mồ hôi; mồ hôi bay hơi lấy đi nhiệt', 'Giảm tiết mồ hôi'],
            ['Cơ co chân lông dãn', 'Cơ co chân lông co, lông dựng lên (sởn gai ốc)'],
            ['—', 'Cơ run lên để tăng sinh nhiệt khi quá lạnh'],
          ],
        },
        {
          type: 'p',
          text: 'Mọi hoạt động điều hòa thân nhiệt đều do hệ thần kinh điều khiển: các thụ quan ở da báo về trung ương thần kinh, trung ương phát lệnh làm mạch máu co, dãn, tuyến mồ hôi tiết nhiều hay ít, cơ run… Khi trời nóng ẩm, mồ hôi khó bay hơi nên cơ thể khó tỏa nhiệt, dễ bị bức bối, say nóng.',
        },
        {
          type: 'list',
          items: [
            'Chống nóng: mặc quần áo thoáng mát, đội mũ nón khi ra nắng; uống đủ nước; không tắm ngay hoặc ngồi trước quạt mạnh khi mồ hôi đang ra nhiều; trồng cây xanh, nhà ở thoáng mát.',
            'Chống lạnh: mặc đủ ấm (giữ ấm cổ, ngực, chân tay); ăn uống đủ năng lượng; rèn luyện thân thể để tăng khả năng chịu lạnh.',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Sơ cứu người bị cảm nóng (say nắng, say nóng): đưa người bệnh vào chỗ thoáng mát; cởi bớt quần áo; lau người bằng khăn ướt mát (chú ý trán, nách, bẹn); cho uống nước mát pha chút muối hoặc dung dịch bù nước; nếu không đỡ, đưa đến cơ sở y tế.',
            'Sơ cứu người bị cảm lạnh: đưa người bệnh vào chỗ ấm, kín gió; thay quần áo ướt bằng quần áo khô, ấm; ủ ấm bằng chăn; cho uống nước ấm, ăn đồ ăn nóng; nếu không đỡ, đưa đến cơ sở y tế.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Da phản ứng với nhiệt độ môi trường',
    instruction:
      'Kéo thanh trượt nhiệt độ môi trường từ $0$ °C đến $45$ °C và bật, tắt "Đang vận động mạnh". Quan sát mạch máu dưới da co hay dãn, tuyến mồ hôi tiết nhiều hay ít, lông có dựng lên không và khi nào cơ run.',
  },
  examples: [
    {
      problem:
        'Vì sao khi trời nóng, da ta hồng hào và đổ nhiều mồ hôi; còn khi trời rét, da tái đi và nổi da gà?',
      steps: [
        'Trời nóng: thụ quan ở da báo về hệ thần kinh, hệ thần kinh điều khiển mạch máu dưới da dãn ra, nhiều máu qua da nên da hồng hào và tỏa nhiều nhiệt.',
        'Đồng thời tuyến mồ hôi tăng tiết mồ hôi; mồ hôi bay hơi lấy đi nhiệt của cơ thể.',
        'Trời rét: mạch máu dưới da co lại, ít máu qua da nên da tái, giảm mất nhiệt; cơ co chân lông co làm lông dựng lên, da nổi da gà.',
      ],
      answer:
        'Đó là phản ứng điều hòa thân nhiệt của da do hệ thần kinh điều khiển: tăng tỏa nhiệt khi nóng, giảm tỏa nhiệt khi lạnh, giúp thân nhiệt ổn định khoảng 37 °C.',
    },
    {
      problem:
        'Một bạn vừa chạy bộ dưới trời nắng, mồ hôi ra nhiều liền vào phòng bật quạt mạnh thổi thẳng vào người rồi đi tắm nước lạnh. Việc làm này có đúng không? Vì sao?',
      steps: [
        'Khi vận động mạnh dưới nắng, mạch máu dưới da đang dãn, tuyến mồ hôi tiết nhiều để tỏa nhiệt.',
        'Gặp gió mạnh và nước lạnh đột ngột, mạch máu co lại nhanh, cơ thể mất nhiệt đột ngột, dễ bị cảm lạnh, viêm họng.',
        'Nên nghỉ ở chỗ thoáng mát, lau khô mồ hôi, uống nước từ từ, chờ cơ thể ổn định rồi mới tắm.',
      ],
      answer:
        'Không đúng: thay đổi nhiệt độ đột ngột dễ gây cảm lạnh. Cần nghỉ ngơi, lau mồ hôi, đợi cơ thể bớt nóng rồi mới tắm.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các lớp của da từ ngoài vào trong.',
      items: ['Lớp bì', 'Lớp mỡ dưới da', 'Tầng sừng', 'Tầng tế bào sống'],
      answer: [2, 3, 0, 1],
      hints: ['Biểu bì gồm tầng sừng ở ngoài cùng và tầng tế bào sống.'],
      solution: 'Tầng sừng → tầng tế bào sống (biểu bì) → lớp bì → lớp mỡ dưới da.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận của da với chức năng của nó.',
      left: ['Tuyến mồ hôi', 'Thụ quan', 'Lớp mỡ dưới da', 'Tuyến nhờn'],
      right: [
        'Tiếp nhận kích thích nóng, lạnh, đau',
        'Cách nhiệt, giữ ấm, đệm cơ học',
        'Bài tiết, tỏa nhiệt',
        'Làm da mềm mại, không thấm nước',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
        [3, 3],
      ],
      hints: ['Mồ hôi vừa chứa chất thải vừa lấy đi nhiệt khi bay hơi.'],
      solution:
        'Tuyến mồ hôi: bài tiết, tỏa nhiệt; thụ quan: cảm giác; lớp mỡ: cách nhiệt, đệm; tuyến nhờn: làm da mềm, không thấm nước.',
    },
    {
      type: 'choice',
      prompt: 'Khi trời lạnh, mạch máu dưới da và tuyến mồ hôi phản ứng như thế nào?',
      options: [
        'Mạch máu dãn, tăng tiết mồ hôi',
        'Mạch máu co, giảm tiết mồ hôi',
        'Mạch máu dãn, giảm tiết mồ hôi',
        'Mạch máu co, tăng tiết mồ hôi',
      ],
      answer: 1,
      hints: ['Khi lạnh, cơ thể cần giảm mất nhiệt.'],
      solution: 'Khi lạnh, mạch máu dưới da co lại và tuyến mồ hôi giảm tiết để giảm tỏa nhiệt.',
    },
    {
      type: 'choice',
      prompt: 'Hiện tượng "sởn gai ốc" khi trời lạnh là do',
      options: [
        'tuyến nhờn tiết nhiều chất nhờn',
        'cơ co chân lông co lại làm lông dựng lên',
        'mạch máu dãn ra',
        'tầng sừng bong ra',
      ],
      answer: 1,
      hints: ['Bộ phận nào nối với bao lông và có thể co lại?'],
      solution: 'Cơ co chân lông co làm lông dựng đứng, da nổi gai ốc, giúp giảm mất nhiệt.',
    },
    {
      type: 'number',
      prompt:
        'Thân nhiệt bình thường khoảng $37$ °C. Một bạn bị sốt, nhiệt kế chỉ $38{,}5$ °C. Thân nhiệt của bạn cao hơn mức bình thường bao nhiêu độ C?',
      answer: 1.5,
      tolerance: 0.001,
      unit: '°C',
      hints: ['Lấy nhiệt độ đo được trừ $37$.'],
      solution: '$38{,}5 - 37 = 1{,}5$ °C.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc nên làm khi sơ cứu người bị say nắng.',
      options: [
        'Đưa vào chỗ thoáng mát',
        'Lau người bằng khăn ướt mát',
        'Cho uống nước mát có pha chút muối',
        'Đắp chăn dày cho người bệnh',
        'Tiếp tục để người bệnh đứng ngoài nắng',
      ],
      answers: [0, 1, 2],
      hints: ['Mục tiêu là giúp cơ thể giảm nhiệt và bù nước.'],
      solution:
        'Đưa vào chỗ mát, lau khăn ướt mát và cho uống nước có pha chút muối giúp hạ nhiệt và bù nước. Đắp chăn dày, để ngoài nắng làm tình trạng nặng hơn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bệnh về da với nguyên nhân gây bệnh.',
      left: ['Hắc lào', 'Ghẻ', 'Mụn trứng cá'],
      right: [
        'Tuyến nhờn tiết nhiều, bít lỗ chân lông, vi khuẩn gây viêm',
        'Do nấm',
        'Do cái ghẻ đào hang dưới da',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Hắc lào và lang ben đều do nấm.'],
      solution:
        'Hắc lào do nấm; ghẻ do cái ghẻ; mụn trứng cá do tuyến nhờn bít tắc lỗ chân lông, vi khuẩn gây viêm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao vào ngày nóng ẩm, ta thấy bức bối, khó chịu hơn ngày nóng khô?',
      options: [
        'Vì mồ hôi khó bay hơi nên cơ thể khó tỏa nhiệt',
        'Vì da không tiết mồ hôi',
        'Vì mạch máu dưới da co lại',
        'Vì cơ run lên sinh nhiệt',
      ],
      answer: 0,
      hints: ['Mồ hôi chỉ lấy đi nhiệt khi nó bay hơi.'],
      solution: 'Không khí ẩm làm mồ hôi khó bay hơi, nhiệt khó tỏa ra ngoài nên ta thấy bức bối.',
    },
  ],
  takeaways: [
    'Da gồm lớp biểu bì (tầng sừng, tầng tế bào sống), lớp bì (thụ quan, tuyến nhờn, tuyến mồ hôi, bao lông, cơ co chân lông, mạch máu) và lớp mỡ dưới da.',
    'Da có chức năng bảo vệ, cảm giác, bài tiết, điều hòa thân nhiệt và tạo vẻ đẹp.',
    'Thân nhiệt người khỏe mạnh ổn định ở khoảng 37 °C nhờ cân bằng sinh nhiệt và tỏa nhiệt, do hệ thần kinh điều khiển.',
    'Nóng: mạch máu dưới da dãn, tăng tiết mồ hôi. Lạnh: mạch máu co, cơ co chân lông co, cơ run.',
    'Giữ vệ sinh da, ăn mặc phù hợp thời tiết; biết sơ cứu khi bị cảm nóng, cảm lạnh.',
  ],
};

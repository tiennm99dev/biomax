/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tác động của con người đối với môi trường qua các thời kì; khái niệm, nguyên nhân và biện pháp hạn chế ô nhiễm môi trường; khái niệm, biểu hiện của biến đổi khí hậu và các biện pháp thích ứng; sự cần thiết và biện pháp bảo vệ động vật hoang dã.',
  intro:
    'Mỗi ngày một người Việt Nam thải ra khoảng $1$ kg rác sinh hoạt. Những túi nilon, chai nhựa ta dùng vài phút có thể tồn tại hàng trăm năm. Mỗi việc nhỏ của em, khi cả lớp, cả trường cùng làm, có thể thay đổi môi trường đến mức nào?',
  objectives: [
    'Nêu được tác động của con người đối với môi trường qua các thời kì phát triển xã hội.',
    'Nêu được khái niệm ô nhiễm môi trường, các nguyên nhân gây ô nhiễm và biện pháp hạn chế.',
    'Nêu được khái niệm, biểu hiện của biến đổi khí hậu và một số biện pháp thích ứng.',
    'Giải thích được vì sao cần bảo vệ động vật hoang dã và nêu được các biện pháp bảo vệ.',
  ],
  sections: [
    {
      heading: 'Tác động của con người đối với môi trường',
      blocks: [
        {
          type: 'table',
          caption: 'Tác động của con người qua các thời kì phát triển xã hội',
          head: ['Thời kì', 'Hoạt động chính', 'Tác động đến môi trường'],
          rows: [
            [
              'Nguyên thuỷ',
              'Săn bắt, hái lượm; biết dùng lửa',
              'Đốt rừng để săn bắt, sưởi ấm làm giảm diện tích rừng',
            ],
            [
              'Xã hội nông nghiệp',
              'Trồng trọt, chăn nuôi; định cư',
              'Chặt phá, đốt rừng lấy đất canh tác, chăn thả gia súc; đất bị xói mòn. Mặt tích cực: tạo ra nhiều giống cây trồng, vật nuôi',
            ],
            [
              'Xã hội công nghiệp',
              'Khai thác tài nguyên, xây dựng nhà máy, đô thị hoá',
              'Thu hẹp rừng, cạn kiệt tài nguyên, thải nhiều chất thải gây ô nhiễm. Mặt tích cực: tạo nhiều giống mới, trồng rừng, cải tạo môi trường',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Hoạt động của con người đã làm suy thoái nhiều hệ sinh thái tự nhiên, nhưng con người cũng có khả năng bảo vệ và cải tạo môi trường: trồng rừng, xây dựng khu bảo tồn, xử lí chất thải.',
        },
      ],
    },
    {
      heading: 'Ô nhiễm môi trường',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ô nhiễm môi trường',
          text: 'Ô nhiễm môi trường là hiện tượng môi trường tự nhiên bị bẩn, đồng thời các tính chất vật lí, hoá học, sinh học của môi trường bị thay đổi, gây tác hại tới đời sống của con người và các sinh vật khác.',
        },
        {
          type: 'table',
          caption: 'Các nguyên nhân chủ yếu gây ô nhiễm môi trường',
          head: ['Nguyên nhân', 'Ví dụ'],
          rows: [
            [
              'Chất thải từ hoạt động công nghiệp và sinh hoạt',
              'Khói bụi nhà máy, khí thải xe cộ, nước thải, rác thải sinh hoạt, túi nilon, chai nhựa',
            ],
            [
              'Hoá chất bảo vệ thực vật và chất độc hoá học',
              'Thuốc trừ sâu, thuốc diệt cỏ dư thừa ngấm vào đất, nước, tích luỹ trong sinh vật',
            ],
            [
              'Chất phóng xạ',
              'Chất thải của nhà máy điện nguyên tử, thử vũ khí hạt nhân, sự cố rò rỉ phóng xạ',
            ],
            [
              'Sinh vật gây bệnh',
              'Phân, rác, xác động vật không được xử lí làm mầm bệnh lan vào nước, không khí',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Xử lí chất thải công nghiệp và sinh hoạt trước khi thải ra môi trường; phân loại, tái chế rác.',
            'Sử dụng năng lượng sạch, năng lượng tái tạo (gió, mặt trời); hạn chế khí thải xe cộ.',
            'Trồng nhiều cây xanh; giảm dùng túi nilon, đồ nhựa dùng một lần.',
            'Hạn chế thuốc bảo vệ thực vật hoá học, ưu tiên biện pháp sinh học.',
            'Xây dựng nhà máy xa khu dân cư; tuyên truyền, giáo dục ý thức bảo vệ môi trường.',
          ],
        },
      ],
    },
    {
      heading: 'Biến đổi khí hậu',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Biến đổi khí hậu',
          text: 'Biến đổi khí hậu là sự thay đổi của khí hậu (nhiệt độ, lượng mưa, gió…) so với trung bình nhiều năm, kéo dài trong một thời gian dài (thường vài thập kỉ hoặc lâu hơn), do tự nhiên và chủ yếu do hoạt động của con người thải khí nhà kính (như $\\mathrm{CO_2}$, $\\mathrm{CH_4}$).',
        },
        {
          type: 'list',
          items: [
            'Biểu hiện: nhiệt độ trung bình của Trái Đất tăng; băng ở hai cực và trên núi cao tan; mực nước biển dâng.',
            'Thời tiết cực đoan tăng: bão mạnh, lũ lụt, hạn hán, nắng nóng kéo dài; ở đồng bằng sông Cửu Long, xâm nhập mặn ngày càng sâu.',
          ],
        },
        {
          type: 'table',
          caption: 'Một số biện pháp thích ứng với biến đổi khí hậu',
          head: ['Lĩnh vực', 'Biện pháp'],
          rows: [
            [
              'Nông nghiệp',
              'Chuyển đổi cơ cấu cây trồng, vật nuôi; dùng giống chịu hạn, chịu mặn; thay đổi thời vụ',
            ],
            ['Ven biển', 'Trồng và bảo vệ rừng ngập mặn; xây dựng, nâng cấp đê biển'],
            [
              'Đời sống',
              'Xây nhà chống chịu bão lũ; theo dõi dự báo thời tiết; trữ nước ngọt, tiết kiệm nước',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Song song với thích ứng, cần giảm nhẹ biến đổi khí hậu bằng cách giảm phát thải khí nhà kính: tiết kiệm điện, đi bộ, đi xe đạp, dùng phương tiện công cộng, trồng cây xanh.',
        },
        { type: 'widget', name: 'thich-ung' },
      ],
    },
    {
      heading: 'Bảo vệ động vật hoang dã',
      blocks: [
        {
          type: 'p',
          text: 'Động vật hoang dã là mắt xích trong chuỗi, lưới thức ăn nên góp phần giữ cân bằng tự nhiên; chúng là nguồn gen quý, có giá trị khoa học, kinh tế, du lịch. Nhiều loài ở Việt Nam đang bị đe doạ như sao la, voọc Cát Bà, tê tê, gấu ngựa, hổ.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Nguyên nhân suy giảm',
          text: 'Săn bắt, buôn bán trái phép (sừng tê giác, ngà voi, vảy tê tê, mật gấu); phá rừng làm mất nơi sống; ô nhiễm môi trường; biến đổi khí hậu.',
        },
        {
          type: 'list',
          items: [
            'Không săn bắt, buôn bán, sử dụng động vật hoang dã và sản phẩm từ chúng.',
            'Bảo vệ môi trường sống: bảo vệ rừng, xây dựng khu bảo tồn, vườn quốc gia.',
            'Cứu hộ, nhân nuôi các loài quý hiếm rồi thả về tự nhiên (Trung tâm cứu hộ linh trưởng nguy cấp ở Cúc Phương, Trung tâm cứu hộ gấu Việt Nam ở Tam Đảo).',
            'Thực thi nghiêm pháp luật; tuyên truyền để mọi người cùng bảo vệ.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Việc nhỏ, tác động lớn',
    instruction:
      'Chọn những việc em có thể làm, rồi tăng số bạn cùng làm và kéo dài thời gian. Quan sát lượng rác và khí $\\mathrm{CO_2}$ ước tính bớt được, và so sánh với số cây xanh cần trồng để hấp thụ lượng $\\mathrm{CO_2}$ ấy.',
  },
  examples: [
    {
      problem:
        'Mỗi bạn đi xe đạp đến trường thay vì đi xe máy thì mỗi tuần bớt được $20$ km xe máy; mỗi km xe máy thải khoảng $0{,}05$ kg $\\mathrm{CO_2}$. Lớp có $40$ bạn cùng làm trong $1$ năm ($52$ tuần) thì bớt được bao nhiêu kilôgam $\\mathrm{CO_2}$? Lượng đó bằng lượng mà bao nhiêu cây xanh hấp thụ trong một năm, biết mỗi cây hấp thụ khoảng $20$ kg $\\mathrm{CO_2}$ mỗi năm?',
      steps: [
        'Một bạn trong một tuần: $20 \\cdot 0{,}05 = 1$ kg $\\mathrm{CO_2}$.',
        'Cả lớp trong một tuần: $1 \\cdot 40 = 40$ kg.',
        'Cả lớp trong một năm: $40 \\cdot 52 = 2\\,080$ kg.',
        'Số cây: $2\\,080 : 20 = 104$ cây.',
      ],
      answer:
        'Lớp bớt được khoảng $2\\,080$ kg $\\mathrm{CO_2}$ mỗi năm, bằng lượng khoảng $104$ cây xanh hấp thụ trong một năm.',
    },
    {
      problem:
        'Một nhà máy xả nước thải chưa xử lí ra sông, cá chết hàng loạt, người dân ven sông mắc bệnh ngoài da. Xác định nguyên nhân gây ô nhiễm và đề xuất biện pháp.',
      steps: [
        'Nước thải công nghiệp chứa hoá chất độc làm thay đổi tính chất hoá học của nước sông.',
        'Đây là ô nhiễm môi trường nước do chất thải từ hoạt động công nghiệp: gây hại cho sinh vật (cá chết) và con người (bệnh ngoài da).',
        'Biện pháp: buộc nhà máy xây hệ thống xử lí nước thải đạt chuẩn trước khi xả; cơ quan chức năng kiểm tra, xử phạt; người dân giám sát, báo cáo vi phạm.',
      ],
      answer:
        'Ô nhiễm nước do chất thải công nghiệp; cần xử lí nước thải trước khi thải ra môi trường.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Ô nhiễm môi trường là',
      options: [
        'hiện tượng môi trường tự nhiên bị bẩn, các tính chất vật lí, hoá học, sinh học bị thay đổi, gây tác hại tới đời sống của con người và sinh vật',
        'hiện tượng thời tiết thay đổi theo mùa trong năm',
        'hiện tượng số lượng sinh vật trong quần thể dao động',
        'hiện tượng con người khai thác tài nguyên thiên nhiên',
      ],
      answer: 0,
      hints: ['Ô nhiễm làm thay đổi tính chất của môi trường theo hướng có hại.'],
      solution:
        'Ô nhiễm môi trường là hiện tượng môi trường tự nhiên bị bẩn, đồng thời các tính chất vật lí, hoá học, sinh học bị thay đổi, gây tác hại tới đời sống con người và các sinh vật khác.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ví dụ với nguyên nhân gây ô nhiễm tương ứng.',
      left: [
        'Rau quả còn tồn dư thuốc trừ sâu',
        'Rò rỉ từ nhà máy điện nguyên tử',
        'Rác, phân không xử lí làm mầm bệnh lan vào nguồn nước',
        'Khói từ ống khói nhà máy, khí thải xe máy',
      ],
      right: [
        'Sinh vật gây bệnh',
        'Chất thải từ công nghiệp và sinh hoạt',
        'Hoá chất bảo vệ thực vật',
        'Chất phóng xạ',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Xét xem chất gây hại trong mỗi ví dụ đến từ đâu.'],
      solution:
        'Thuốc trừ sâu: hoá chất bảo vệ thực vật. Nhà máy điện nguyên tử: chất phóng xạ. Rác, phân: sinh vật gây bệnh. Khói nhà máy, xe máy: chất thải công nghiệp và sinh hoạt.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biểu hiện của biến đổi khí hậu.',
      options: [
        'Nhiệt độ trung bình của Trái Đất tăng',
        'Mực nước biển dâng',
        'Ngày và đêm luân phiên nhau',
        'Bão, lũ, hạn hán xảy ra thường xuyên và khắc nghiệt hơn',
        'Xâm nhập mặn ở đồng bằng sông Cửu Long ngày càng sâu',
      ],
      answers: [0, 1, 3, 4],
      hints: ['Ngày đêm là do Trái Đất tự quay, có từ trước đến nay.'],
      solution:
        'Nhiệt độ tăng, nước biển dâng, thời tiết cực đoan và xâm nhập mặn là biểu hiện của biến đổi khí hậu; ngày đêm luân phiên là hiện tượng tự nhiên do Trái Đất tự quay.',
    },
    {
      type: 'choice',
      prompt: 'Biện pháp nào sau đây là biện pháp thích ứng với biến đổi khí hậu ở vùng ven biển?',
      options: [
        'Trồng và bảo vệ rừng ngập mặn',
        'Phá rừng ngập mặn để nuôi tôm',
        'Xả rác thải ra biển',
        'Tăng khai thác cát ven biển',
      ],
      answer: 0,
      hints: ['Rừng ngập mặn chắn sóng, giữ đất ven biển.'],
      solution:
        'Rừng ngập mặn chắn sóng, giảm xói lở bờ biển khi nước biển dâng và bão mạnh hơn, nên trồng và bảo vệ rừng ngập mặn là biện pháp thích ứng.',
    },
    {
      type: 'number',
      prompt:
        'Một bạn mang bình nước cá nhân, mỗi tuần không mua $5$ chai nước nhựa. Trong $1$ năm ($52$ tuần), bạn đó bớt được bao nhiêu chai nhựa?',
      answer: 260,
      unit: 'chai',
      hints: ['Nhân số chai mỗi tuần với số tuần.'],
      solution: '$5 \\cdot 52 = 260$ chai.',
    },
    {
      type: 'number',
      prompt:
        'Một gia đình tắt điện khi không dùng, mỗi tuần tiết kiệm $2$ kWh. Mỗi kWh điện ứng với khoảng $0{,}7$ kg $\\mathrm{CO_2}$ thải ra. Trong $4$ tuần, gia đình bớt thải khoảng bao nhiêu kilôgam $\\mathrm{CO_2}$?',
      answer: 5.6,
      tolerance: 0.01,
      unit: 'kg',
      hints: ['Tính số kWh tiết kiệm trong $4$ tuần trước.'],
      solution:
        'Số điện tiết kiệm: $2 \\cdot 4 = 8$ kWh. Khí $\\mathrm{CO_2}$: $8 \\cdot 0{,}7 = 5{,}6$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Một trường học mỗi năm bớt được $1\\,200$ kg $\\mathrm{CO_2}$ nhờ tiết kiệm điện. Lượng này bằng lượng mà bao nhiêu cây xanh hấp thụ trong một năm, nếu mỗi cây hấp thụ khoảng $20$ kg $\\mathrm{CO_2}$ mỗi năm?',
      answer: 60,
      unit: 'cây',
      hints: ['Chia tổng lượng $\\mathrm{CO_2}$ cho lượng một cây hấp thụ.'],
      solution: '$1\\,200 : 20 = 60$ cây.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc làm góp phần bảo vệ động vật hoang dã.',
      options: [
        'Không mua, không dùng sản phẩm từ ngà voi, sừng tê giác, vảy tê tê',
        'Nuôi nhốt chim hoang dã bắt từ rừng làm cảnh',
        'Bảo vệ rừng, xây dựng khu bảo tồn và vườn quốc gia',
        'Báo cho cơ quan chức năng khi thấy buôn bán động vật hoang dã',
        'Ăn thịt thú rừng ở nhà hàng đặc sản',
      ],
      answers: [0, 2, 3],
      hints: ['Việc làm đúng phải giảm săn bắt, buôn bán hoặc giữ được nơi sống của chúng.'],
      solution:
        'Không dùng sản phẩm từ động vật hoang dã, bảo vệ nơi sống và tố giác buôn bán trái phép đều bảo vệ động vật hoang dã. Nuôi nhốt chim rừng và ăn thịt thú rừng làm tăng săn bắt.',
    },
    {
      type: 'choice',
      prompt:
        'Trong xã hội nông nghiệp, hoạt động nào của con người làm suy thoái môi trường nhiều nhất?',
      options: [
        'Chặt phá, đốt rừng lấy đất canh tác, chăn thả gia súc',
        'Xây dựng nhà máy điện nguyên tử',
        'Thải khí từ các khu công nghiệp',
        'Đô thị hoá với nhiều nhà cao tầng',
      ],
      answer: 0,
      hints: ['Nhà máy, khu công nghiệp, đô thị thuộc thời kì nào?'],
      solution:
        'Trong xã hội nông nghiệp, con người chặt phá, đốt rừng lấy đất trồng trọt, chăn thả gia súc, làm giảm diện tích rừng và gây xói mòn đất. Các phương án còn lại thuộc xã hội công nghiệp.',
    },
  ],
  takeaways: [
    'Qua các thời kì, con người ngày càng tác động mạnh tới môi trường: đốt rừng, phá rừng làm nương rẫy, khai thác tài nguyên, thải chất thải; nhưng con người cũng có thể bảo vệ, cải tạo môi trường.',
    'Ô nhiễm môi trường do chất thải công nghiệp và sinh hoạt, hoá chất bảo vệ thực vật, chất phóng xạ, sinh vật gây bệnh; hạn chế bằng xử lí chất thải, năng lượng sạch, trồng cây xanh, tuyên truyền.',
    'Biến đổi khí hậu biểu hiện qua nhiệt độ tăng, nước biển dâng, thời tiết cực đoan; cần thích ứng (giống chịu hạn, mặn; rừng ngập mặn; đê biển) và giảm phát thải khí nhà kính.',
    'Bảo vệ động vật hoang dã: không săn bắt, buôn bán, sử dụng; bảo vệ nơi sống; cứu hộ, nhân nuôi; thực thi pháp luật.',
  ],
};

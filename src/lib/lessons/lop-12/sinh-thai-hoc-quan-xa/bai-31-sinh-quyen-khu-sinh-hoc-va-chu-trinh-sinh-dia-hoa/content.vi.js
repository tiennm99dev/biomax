/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sinh quyển là hệ sinh thái lớn nhất, gồm toàn bộ các hệ sinh thái trên Trái Đất; các khu sinh học trên cạn và dưới nước; chu trình sinh - địa - hoá của carbon, nitrogen và nước; ảnh hưởng của con người và các biện pháp bảo vệ sinh quyển.',
  intro:
    'Mỗi năm, con người đốt hàng tỉ tấn than đá, dầu mỏ, khí đốt. Carbon trong các nhiên liệu ấy vốn được lắng đọng từ xác sinh vật hàng triệu năm trước. Khi trở lại khí quyển dưới dạng $\\mathrm{CO_2}$, nó đi đâu, và vì sao lại làm Trái Đất nóng lên?',
  objectives: [
    'Phát biểu được khái niệm sinh quyển; giải thích được vì sao sinh quyển là cấp độ tổ chức sống lớn nhất.',
    'Nêu được khái niệm khu sinh học; trình bày được đặc điểm chính của các khu sinh học trên cạn và dưới nước.',
    'Phát biểu được khái niệm chu trình sinh - địa - hoá; trình bày được chu trình carbon, nitrogen và nước.',
    'Phân tích được ảnh hưởng của con người tới các chu trình (đặc biệt là chu trình carbon) và đề xuất được biện pháp bảo vệ sinh quyển.',
  ],
  sections: [
    {
      heading: 'Sinh quyển',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh quyển',
          text: 'Sinh quyển là toàn bộ sinh vật sống trên Trái Đất cùng với môi trường vô sinh của chúng, gồm tất cả các hệ sinh thái trên Trái Đất. Sinh quyển là hệ sinh thái lớn nhất và là cấp độ tổ chức sống lớn nhất.',
        },
        {
          type: 'list',
          items: [
            'Sinh quyển gồm các phần của địa quyển có sinh vật sinh sống: lớp đất đá (thạch quyển), lớp nước (thuỷ quyển) và lớp không khí (khí quyển) gần bề mặt Trái Đất.',
            'Các hệ sinh thái trong sinh quyển không tách rời mà liên hệ với nhau qua trao đổi vật chất và năng lượng, qua khí hậu, dòng nước, dòng không khí và sự di chuyển của sinh vật.',
            'Sinh quyển là một hệ thống hoàn chỉnh, có khả năng tự điều chỉnh, trong đó sinh vật và môi trường tác động qua lại ở trạng thái cân bằng động.',
          ],
        },
      ],
    },
    {
      heading: 'Khu sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khu sinh học',
          text: 'Khu sinh học (biome) là những vùng rộng lớn trên Trái Đất có điều kiện khí hậu tương tự nhau và có một kiểu thảm thực vật đặc trưng cùng các loài động vật thích nghi với nó.',
        },
        {
          type: 'p',
          text: 'Sự phân bố các khu sinh học trên cạn phụ thuộc chủ yếu vào nhiệt độ và lượng mưa, nên thay đổi theo vĩ độ (từ xích đạo về hai cực) và theo độ cao.',
        },
        {
          type: 'table',
          caption: 'Một số khu sinh học trên cạn (từ vùng cực về xích đạo)',
          head: ['Khu sinh học', 'Khí hậu', 'Sinh vật đặc trưng'],
          rows: [
            [
              'Đồng rêu hàn đới',
              'Rất lạnh, băng giá gần như quanh năm, đất đóng băng vĩnh cửu',
              'Rêu, địa y, cỏ thấp, cây bụi lùn; tuần lộc, cáo bắc cực',
            ],
            [
              'Rừng lá kim phương Bắc',
              'Mùa đông dài và lạnh, mùa hè ngắn',
              'Cây lá kim (thông, vân sam, linh sam); nai sừng tấm, gấu, chó sói',
            ],
            [
              'Rừng rụng lá ôn đới',
              'Bốn mùa rõ rệt: mùa đông khoảng $0\\,^\\circ\\mathrm{C}$, mùa hè có thể tới $35\\,^\\circ\\mathrm{C}$; mưa khoảng $700$ – $2\\,000$ mm/năm',
              'Cây lá rộng rụng lá vào mùa đông (sồi, dẻ, phong); hươu, sóc, gấu',
            ],
            [
              'Thảo nguyên (đồng cỏ ôn đới)',
              'Mưa ít, mùa hè nóng, mùa đông lạnh',
              'Cỏ chiếm ưu thế; động vật ăn cỏ lớn, động vật gặm nhấm',
            ],
            [
              'Hoang mạc và sa mạc',
              'Rất khô hạn, nhiệt độ ngày và đêm chênh lệch lớn',
              'Xương rồng, cây mọng nước; bò sát, động vật gặm nhấm, lạc đà',
            ],
            [
              'Savan',
              'Nóng quanh năm, có mùa khô kéo dài',
              'Cỏ cùng cây gỗ mọc rải rác; linh dương, ngựa vằn, sư tử',
            ],
            [
              'Rừng mưa nhiệt đới',
              'Nóng ẩm quanh năm (khoảng $25$ – $29\\,^\\circ\\mathrm{C}$), mưa nhiều',
              'Nhiều tầng cây, độ đa dạng sinh học cao nhất trong các khu sinh học trên cạn',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Khu sinh học nước ngọt: nước có nồng độ muối rất thấp, gồm vùng nước chảy (suối, sông) và vùng nước đứng (ao, hồ, đầm lầy, đất ngập nước).',
            'Khu sinh học nước mặn (biển và đại dương): theo chiều ngang chia thành vùng ven bờ và vùng khơi; theo chiều thẳng đứng chia thành tầng nước mặt, tầng giữa và tầng đáy. Vùng ven bờ nông, nhiều ánh sáng và chất dinh dưỡng nên có nhiều loài sinh vật.',
          ],
        },
      ],
    },
    {
      heading: 'Chu trình sinh - địa - hoá và chu trình carbon',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chu trình sinh - địa - hoá',
          text: 'Chu trình sinh - địa - hoá là sự trao đổi liên tục của các nguyên tố hoá học giữa môi trường và quần xã sinh vật: các chất đi từ môi trường vào cơ thể sinh vật, qua các bậc dinh dưỡng rồi trở lại môi trường. Một phần vật chất có thể lắng đọng, tạm thời ra khỏi chu trình.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Carbon đi vào quần xã dưới dạng $\\mathrm{CO_2}$ qua quang hợp của thực vật, tảo, vi khuẩn lam, tạo thành chất hữu cơ.',
            'Carbon trong chất hữu cơ được truyền qua các bậc dinh dưỡng của chuỗi và lưới thức ăn.',
            'Carbon trở lại khí quyển dưới dạng $\\mathrm{CO_2}$ qua hô hấp của sinh vật và qua quá trình phân giải xác, chất thải của vi khuẩn, nấm.',
            'Một phần carbon lắng đọng lâu dài thành than đá, dầu mỏ, khí đốt, đá vôi. Đốt nhiên liệu hoá thạch và núi lửa đưa phần carbon này trở lại khí quyển. $\\mathrm{CO_2}$ còn hoà tan vào nước đại dương.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Con người làm mất cân bằng chu trình carbon',
          text: 'Đốt nhiên liệu hoá thạch và phá rừng làm lượng $\\mathrm{CO_2}$ thải vào khí quyển lớn hơn lượng được thực vật và đại dương hấp thụ. $\\mathrm{CO_2}$ trong khí quyển tăng, giữ lại nhiệt (hiệu ứng nhà kính), làm Trái Đất ấm lên.',
        },
      ],
    },
    {
      heading: 'Chu trình nitrogen và chu trình nước',
      blocks: [
        {
          type: 'p',
          text: 'Nitrogen chiếm khoảng $78\\%$ thể tích khí quyển ở dạng $\\mathrm{N_2}$, nhưng thực vật không dùng được trực tiếp; chúng chỉ hấp thụ nitrogen dạng $\\mathrm{NH_4^+}$ và $\\mathrm{NO_3^-}$ để tổng hợp protein, nucleic acid. Động vật lấy nitrogen qua thức ăn.',
        },
        {
          type: 'table',
          caption: 'Các quá trình chính của chu trình nitrogen',
          head: ['Quá trình', 'Biến đổi', 'Tác nhân'],
          rows: [
            [
              'Cố định nitrogen',
              '$\\mathrm{N_2} \\to \\mathrm{NH_4^+}$ (hoặc $\\mathrm{NO_3^-}$)',
              'Vi khuẩn cố định nitrogen (vi khuẩn nốt sần Rhizobium cộng sinh ở rễ cây họ Đậu, vi khuẩn lam Anabaena cộng sinh trong bèo hoa dâu, vi khuẩn tự do); sấm sét; sản xuất phân đạm',
            ],
            [
              'Amon hoá',
              'Chất hữu cơ trong xác, chất thải $\\to \\mathrm{NH_4^+}$',
              'Vi khuẩn, nấm phân giải',
            ],
            [
              'Nitrate hoá',
              '$\\mathrm{NH_4^+} \\to \\mathrm{NO_2^-} \\to \\mathrm{NO_3^-}$',
              'Vi khuẩn nitrite hoá (Nitrosomonas), vi khuẩn nitrate hoá (Nitrobacter)',
            ],
            [
              'Phản nitrate hoá',
              '$\\mathrm{NO_3^-} \\to \\mathrm{N_2}$',
              'Vi khuẩn phản nitrate hoá, trong đất thiếu oxygen; làm mất nitrogen của đất',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Chu trình nước: nước bốc hơi từ đại dương, mặt đất và thoát hơi nước qua lá cây, ngưng tụ thành mây rồi rơi xuống thành mưa; nước mưa thấm xuống đất thành nước ngầm hoặc chảy tràn ra sông, hồ, biển. Sinh vật lấy nước từ môi trường và trả lại qua thoát hơi nước, hô hấp, bài tiết.',
            'Rừng giữ nước, điều hoà dòng chảy, hạn chế xói mòn và tăng lượng hơi nước tạo mây, mưa. Phá rừng làm chu trình nước mất cân bằng, gây lũ lụt, hạn hán.',
            'Nước ngọt chỉ chiếm phần rất nhỏ (chưa tới $3\\%$) lượng nước trên Trái Đất, lại đang bị ô nhiễm, nên cần sử dụng tiết kiệm và bảo vệ nguồn nước.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Bảo vệ sinh quyển và các khu sinh học',
          text: 'Giảm tiêu thụ tài nguyên (nước, gỗ, kim loại), tiết kiệm và tái chế; sử dụng năng lượng hiệu quả, tăng năng lượng tái tạo (gió, mặt trời); giảm phát thải khí nhà kính; bảo vệ và trồng rừng; phân loại, xử lí rác thải, giảm xả chất độc hại. Bảo vệ sinh quyển là nhiệm vụ chung của mọi quốc gia.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chu trình carbon và CO₂ khí quyển',
    instruction:
      'Chọn từng quá trình để thấy mũi tên của nó trên sơ đồ và đọc giải thích. Kéo thanh "Đốt nhiên liệu hoá thạch" (hiện nay khoảng $10$ GtC/năm), chọn phá rừng, giữ nguyên hay trồng rừng, rồi kéo "Năm thứ" để xem $\\mathrm{CO_2}$ khí quyển thay đổi trong $80$ năm. So sánh với đường "Nếu ngừng đốt nhiên liệu".',
  },
  examples: [
    {
      problem:
        'Một năm, con người thải vào khí quyển $10$ GtC từ nhiên liệu hoá thạch và $1$ GtC do phá rừng; đại dương và thực vật hấp thụ thêm $5{,}4$ GtC. Biết $1$ ppm $\\mathrm{CO_2}$ ứng với khoảng $2{,}13$ GtC. Nồng độ $\\mathrm{CO_2}$ khí quyển tăng bao nhiêu ppm trong năm đó?',
      steps: [
        'Tổng lượng carbon thải vào: $10 + 1 = 11$ GtC.',
        'Lượng carbon ở lại khí quyển: $11 - 5{,}4 = 5{,}6$ GtC.',
        'Đổi ra ppm: $\\dfrac{5{,}6}{2{,}13} \\approx 2{,}6$ ppm.',
      ],
      answer: 'Nồng độ $\\mathrm{CO_2}$ tăng khoảng $2{,}6$ ppm.',
    },
    {
      problem:
        'Hãy trình bày con đường nitrogen từ khí quyển ($\\mathrm{N_2}$) đi vào protein của một con bò ăn cỏ ba lá (cây họ Đậu) và trở lại khí quyển.',
      steps: [
        'Vi khuẩn nốt sần Rhizobium cộng sinh ở rễ cỏ ba lá cố định $\\mathrm{N_2}$ thành $\\mathrm{NH_4^+}$, cây dùng để tổng hợp protein.',
        'Bò ăn cỏ, tiêu hoá protein của cỏ và tổng hợp protein của cơ thể bò.',
        'Phân, nước tiểu, xác bò được vi khuẩn, nấm amon hoá thành $\\mathrm{NH_4^+}$; vi khuẩn nitrate hoá chuyển thành $\\mathrm{NO_2^-}$ rồi $\\mathrm{NO_3^-}$.',
        'Trong đất thiếu oxygen, vi khuẩn phản nitrate hoá chuyển $\\mathrm{NO_3^-}$ thành $\\mathrm{N_2}$ trở lại khí quyển.',
      ],
      answer:
        '$\\mathrm{N_2}$ → (cố định) $\\mathrm{NH_4^+}$ → protein của cỏ → protein của bò → (amon hoá) $\\mathrm{NH_4^+}$ → (nitrate hoá) $\\mathrm{NO_3^-}$ → (phản nitrate hoá) $\\mathrm{N_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cấp độ tổ chức sống lớn nhất trên Trái Đất là',
      options: [
        'sinh quyển',
        'khu sinh học',
        'hệ sinh thái rừng mưa nhiệt đới',
        'quần xã sinh vật',
      ],
      answer: 0,
      hints: ['Cấp độ nào bao gồm tất cả các hệ sinh thái trên Trái Đất?'],
      solution:
        'Sinh quyển gồm toàn bộ sinh vật và môi trường vô sinh của chúng trên Trái Đất, bao gồm mọi hệ sinh thái và khu sinh học, nên là cấp độ tổ chức sống lớn nhất.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi khu sinh học trên cạn với đặc điểm phù hợp.',
      left: ['Đồng rêu hàn đới', 'Rừng lá kim phương Bắc', 'Savan', 'Rừng mưa nhiệt đới'],
      right: [
        'Rất lạnh, đất đóng băng vĩnh cửu; rêu, địa y, cây bụi lùn',
        'Mùa đông dài, lạnh; thông, vân sam chiếm ưu thế',
        'Nóng, mùa khô kéo dài; cỏ và cây gỗ mọc rải rác',
        'Nóng ẩm quanh năm, nhiều tầng cây, đa dạng sinh học cao nhất',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Đi từ vùng cực về xích đạo: nhiệt độ tăng dần.'],
      solution:
        'Đồng rêu: rất lạnh, rêu, địa y. Rừng lá kim: đông dài, lạnh, thông, vân sam. Savan: nóng, mùa khô dài, cỏ xen cây gỗ thưa. Rừng mưa nhiệt đới: nóng ẩm quanh năm, nhiều tầng, đa dạng nhất.',
    },
    {
      type: 'choice',
      prompt: 'Nhân tố chủ yếu quyết định sự phân bố của các khu sinh học trên cạn là',
      options: [
        'nhiệt độ và lượng mưa',
        'độ mặn của nước',
        'số lượng loài động vật ăn thịt',
        'thành phần khí nitrogen trong không khí',
      ],
      answer: 0,
      hints: ['Các khu sinh học thay đổi theo vĩ độ và độ cao, tức là theo khí hậu.'],
      solution:
        'Khí hậu, chủ yếu là nhiệt độ và lượng mưa, quyết định kiểu thảm thực vật đặc trưng, từ đó quyết định khu sinh học.',
    },
    {
      type: 'choice',
      prompt: 'Carbon đi từ môi trường vô sinh vào quần xã sinh vật chủ yếu qua quá trình',
      options: ['quang hợp', 'hô hấp', 'phân giải xác sinh vật', 'đốt nhiên liệu hoá thạch'],
      answer: 0,
      hints: ['Quá trình nào lấy $\\mathrm{CO_2}$ để tạo chất hữu cơ?'],
      solution:
        'Thực vật, tảo, vi khuẩn lam quang hợp, cố định $\\mathrm{CO_2}$ thành chất hữu cơ. Hô hấp, phân giải và đốt nhiên liệu đều trả $\\mathrm{CO_2}$ về khí quyển.',
    },
    {
      type: 'multi',
      prompt: 'Những hoạt động nào làm tăng lượng $\\mathrm{CO_2}$ trong khí quyển?',
      options: [
        'Đốt than đá, dầu mỏ, khí đốt',
        'Chặt phá rừng, đốt rừng làm nương rẫy',
        'Trồng rừng, phủ xanh đồi trọc',
        'Thay điện than bằng điện gió, điện mặt trời',
      ],
      answers: [0, 1],
      hints: ['Hoạt động nào thải thêm carbon, hoạt động nào giảm khả năng hấp thụ?'],
      solution:
        'Đốt nhiên liệu hoá thạch thải $\\mathrm{CO_2}$; phá rừng vừa thải carbon trong sinh khối vừa giảm quang hợp. Trồng rừng và năng lượng tái tạo làm giảm $\\mathrm{CO_2}$ hoặc giảm lượng thải.',
    },
    {
      type: 'number',
      prompt:
        'Khí quyển có nồng độ $\\mathrm{CO_2}$ là $420$ ppm. Biết $1$ ppm ứng với khoảng $2{,}13$ GtC, khí quyển chứa khoảng bao nhiêu GtC carbon ở dạng $\\mathrm{CO_2}$? (Làm tròn đến hàng phần mười.)',
      answer: 894.6,
      tolerance: 0.1,
      unit: 'GtC',
      hints: ['Nhân nồng độ (ppm) với lượng carbon ứng với $1$ ppm.'],
      solution: '$420 \\cdot 2{,}13 = 894{,}6$ GtC.',
    },
    {
      type: 'number',
      prompt:
        'Một năm con người thải $10$ GtC vào khí quyển, đại dương và thực vật hấp thụ thêm $5{,}4$ GtC. Với $1$ ppm ứng với $2{,}13$ GtC, nồng độ $\\mathrm{CO_2}$ tăng bao nhiêu ppm? (Làm tròn đến hai chữ số thập phân.)',
      answer: 2.16,
      tolerance: 0.01,
      unit: 'ppm',
      hints: [
        'Tìm lượng carbon ở lại khí quyển: thải vào trừ hấp thụ.',
        'Chia lượng carbon ở lại cho $2{,}13$.',
      ],
      solution:
        'Carbon ở lại khí quyển: $10 - 5{,}4 = 4{,}6$ GtC. Nồng độ tăng: $\\dfrac{4{,}6}{2{,}13} \\approx 2{,}16$ ppm.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các quá trình theo đúng thứ tự nitrogen đi từ xác sinh vật trở về khí quyển.',
      items: [
        'Vi khuẩn, nấm amon hoá chất hữu cơ thành $\\mathrm{NH_4^+}$',
        'Vi khuẩn nitrite hoá chuyển $\\mathrm{NH_4^+}$ thành $\\mathrm{NO_2^-}$',
        'Vi khuẩn nitrate hoá chuyển $\\mathrm{NO_2^-}$ thành $\\mathrm{NO_3^-}$',
        'Vi khuẩn phản nitrate hoá chuyển $\\mathrm{NO_3^-}$ thành $\\mathrm{N_2}$',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Chất hữu cơ phải được phân giải trước; $\\mathrm{N_2}$ là sản phẩm cuối cùng.'],
      solution:
        'Amon hoá (chất hữu cơ → $\\mathrm{NH_4^+}$) → nitrite hoá ($\\mathrm{NH_4^+}$ → $\\mathrm{NO_2^-}$) → nitrate hoá ($\\mathrm{NO_2^-}$ → $\\mathrm{NO_3^-}$) → phản nitrate hoá ($\\mathrm{NO_3^-}$ → $\\mathrm{N_2}$).',
    },
    {
      type: 'text',
      prompt:
        'Quá trình vi khuẩn chuyển $\\mathrm{NO_3^-}$ trong đất thiếu oxygen thành $\\mathrm{N_2}$ bay vào khí quyển gọi là gì?',
      accept: ['phản nitrate hoá', 'phản nitrat hoá'],
      hints: ['Đây là quá trình ngược chiều với việc tạo ra $\\mathrm{NO_3^-}$.'],
      solution:
        'Đó là quá trình phản nitrate hoá, do vi khuẩn phản nitrate hoá thực hiện, làm đất mất nitrogen. Vì vậy cần xới đất cho thoáng.',
    },
    {
      type: 'choice',
      prompt: 'Trồng cây họ Đậu (lạc, đậu tương) giúp cải tạo đất vì',
      options: [
        'rễ có vi khuẩn nốt sần cộng sinh, cố định $\\mathrm{N_2}$ thành nitrogen cây dùng được',
        'cây họ Đậu không hấp thụ nitrogen của đất',
        'rễ cây họ Đậu tiết ra $\\mathrm{N_2}$ vào đất',
        'cây họ Đậu thực hiện phản nitrate hoá',
      ],
      answer: 0,
      hints: ['Nhớ lại tác nhân cố định nitrogen sống cộng sinh với cây.'],
      solution:
        'Vi khuẩn Rhizobium trong nốt sần ở rễ cây họ Đậu cố định $\\mathrm{N_2}$ thành $\\mathrm{NH_4^+}$; khi cây chết, phần nitrogen này ở lại đất, làm đất giàu đạm.',
    },
    {
      type: 'choice',
      prompt: 'Vai trò của rừng đối với chu trình nước là',
      options: [
        'giữ nước, điều hoà dòng chảy, hạn chế xói mòn và tăng hơi nước tạo mưa',
        'làm nước bốc hơi hết, gây khô hạn',
        'không ảnh hưởng gì tới chu trình nước',
        'làm tăng dòng chảy bề mặt, gây lũ lụt',
      ],
      answer: 0,
      hints: ['So sánh vùng có rừng và vùng đồi trọc khi mưa lớn.'],
      solution:
        'Tán và rễ cây, lớp thảm mục giữ nước, nước thấm xuống đất thay vì chảy tràn, nên giảm lũ và xói mòn; thoát hơi nước qua lá tăng độ ẩm, tạo mây, mưa.',
    },
  ],
  takeaways: [
    'Sinh quyển gồm toàn bộ sinh vật và môi trường vô sinh của chúng trên Trái Đất, là hệ sinh thái và cấp độ tổ chức sống lớn nhất.',
    'Khu sinh học là vùng rộng lớn có khí hậu tương tự và kiểu thảm thực vật đặc trưng; trên cạn phân bố theo nhiệt độ và lượng mưa, dưới nước có khu nước ngọt và nước mặn.',
    'Chu trình sinh - địa - hoá: các nguyên tố đi từ môi trường vào sinh vật, qua các bậc dinh dưỡng rồi trở lại môi trường; một phần lắng đọng.',
    'Carbon vào quần xã qua quang hợp, trở lại qua hô hấp, phân giải, đốt nhiên liệu; đốt nhiên liệu hoá thạch và phá rừng làm tăng $\\mathrm{CO_2}$, gây ấm lên toàn cầu.',
    'Nitrogen: cố định $\\mathrm{N_2}$ → amon hoá → nitrate hoá → phản nitrate hoá; thực vật hấp thụ $\\mathrm{NH_4^+}$ và $\\mathrm{NO_3^-}$.',
  ],
};

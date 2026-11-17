/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành thiết kế một hệ sinh thái nhân tạo (bể cá cảnh thuỷ sinh): xác định các thành phần vô sinh và hữu sinh, chuẩn bị dụng cụ, lắp đặt bể, thả sinh vật, theo dõi và duy trì trạng thái cân bằng, viết báo cáo.',
  intro:
    'Một bể cá cảnh có cây thuỷ sinh, ốc và lớp cát sỏi là một hệ sinh thái thu nhỏ: có sinh vật sản xuất, sinh vật tiêu thụ, sinh vật phân giải và môi trường vô sinh. Thiết kế thế nào để cá sống khoẻ, nước trong và bể tự duy trì được lâu dài?',
  objectives: [
    'Xác định được các thành phần của một hệ sinh thái nhân tạo (bể cá cảnh) và vai trò của từng thành phần.',
    'Thiết kế, lắp đặt được một bể cá cảnh có đủ sinh vật sản xuất, sinh vật tiêu thụ, sinh vật phân giải.',
    'Theo dõi được các dấu hiệu cân bằng, mất cân bằng của bể và đề xuất được cách khắc phục.',
    'Viết được báo cáo thực hành kèm hình ảnh sản phẩm.',
  ],
  sections: [
    {
      heading: 'Thành phần của bể cá cảnh',
      blocks: [
        {
          type: 'table',
          head: ['Thành phần', 'Trong bể cá cảnh', 'Vai trò'],
          rows: [
            [
              'Môi trường vô sinh',
              'Nước, cát sỏi, đá, ánh sáng, nhiệt độ, khí hoà tan',
              'Nơi sống; cung cấp nước, chất khoáng, ánh sáng cho sinh vật',
            ],
            [
              'Sinh vật sản xuất',
              'Cây thuỷ sinh (rong đuôi chó, rong la hán, bèo...), tảo',
              'Quang hợp tạo chất hữu cơ và oxygen; hấp thụ $\\mathrm{CO_2}$, chất khoáng (nitrate)',
            ],
            [
              'Sinh vật tiêu thụ',
              'Cá cảnh (cá bảy màu, cá vàng nhỏ...), ốc, tôm nhỏ',
              'Sử dụng thức ăn; ốc ăn tảo, thức ăn thừa giúp nước sạch',
            ],
            [
              'Sinh vật phân giải',
              'Vi khuẩn, nấm sống trong lớp cát sỏi, nước',
              'Phân giải chất thải, thức ăn thừa, xác sinh vật; chuyển ammonia độc thành nitrate cho cây dùng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Bể cân bằng',
          text: 'Bể ở trạng thái cân bằng khi oxygen do cây tạo ra đủ cho hô hấp của cá, ốc, vi sinh vật; chất thải được phân giải kịp và chất khoáng được cây hấp thụ lại. Khi đó vật chất được trao đổi theo chu trình trong bể, chỉ cần bổ sung năng lượng (ánh sáng) và một ít thức ăn.',
        },
      ],
    },
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Bể kính hoặc bình thuỷ tinh trong suốt; cát, sỏi, đá đã rửa sạch; đèn chiếu sáng (nếu bể đặt nơi thiếu sáng).',
            'Nước sạch: nước máy để lắng $1$ – $2$ ngày cho bay bớt chlorine, hoặc nước giếng, nước mưa sạch.',
            'Sinh vật: cây thuỷ sinh dễ sống (rong đuôi chó, rong la hán), vài con cá cảnh nhỏ, vài con ốc.',
            'Thức ăn cho cá, vợt, nhiệt kế, sổ theo dõi, điện thoại để chụp ảnh.',
          ],
        },
      ],
    },
    {
      heading: 'Cách tiến hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Lên ý tưởng thiết kế: vẽ sơ đồ bể, chọn các loài sinh vật sản xuất, tiêu thụ và số lượng phù hợp với thể tích bể.',
            'Rải lớp cát sỏi dày khoảng $3$ – $5$ cm dưới đáy bể, bố trí đá trang trí.',
            'Đổ nước nhẹ nhàng vào bể (đặt đĩa hoặc tấm nilon lên cát để nước không làm xáo trộn đáy).',
            'Trồng cây thuỷ sinh: cây cao trồng phía sau, cây thấp trồng phía trước.',
            'Để bể ổn định vài ngày cho nước trong và vi sinh vật phát triển trong lớp cát sỏi.',
            'Thả ốc và cá (ngâm túi cá trong bể khoảng $15$ – $20$ phút cho cân bằng nhiệt độ rồi mới thả).',
            'Đặt bể nơi có ánh sáng vừa phải, tránh nắng chiếu trực tiếp; chiếu đèn khoảng $8$ – $10$ giờ mỗi ngày.',
          ],
        },
      ],
    },
    {
      heading: 'Duy trì cân bằng và báo cáo',
      blocks: [
        {
          type: 'list',
          items: [
            'Cho cá ăn lượng vừa đủ (cá ăn hết trong vài phút); vớt thức ăn thừa, lá cây úa, xác sinh vật chết.',
            'Theo dõi hằng ngày: màu và mùi của nước, cá có ngoi lên mặt nước thở không, cây phát triển ra sao, tảo có bám nhiều không.',
            'Thay một phần nước định kì (khoảng $20\\%$ – $30\\%$ mỗi tuần), không thay toàn bộ để giữ vi sinh vật có lợi.',
            'Khi nước xanh đục do tảo: giảm thời gian chiếu sáng, giảm thức ăn, thêm cây thuỷ sinh hoặc ốc. Khi cá ngoi lên thở: giảm số cá, thêm cây hoặc sục khí.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nội dung báo cáo',
          text: 'Mục tiêu; sơ đồ thiết kế và danh sách các thành phần (vô sinh, sản xuất, tiêu thụ, phân giải); các bước thực hiện; bảng theo dõi theo ngày (màu nước, tình trạng cá, cây, tảo) kèm ảnh chụp sản phẩm; nhận xét về trạng thái cân bằng, các sự cố gặp phải, nguyên nhân và cách khắc phục.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thiết kế bể cá cảnh ảo',
    instruction:
      'Chọn số bó rong, số cá, số ốc, thời gian chiếu sáng, có hay không lớp cát sỏi có vi khuẩn, và lượng thức ăn. Kéo "Ngày thứ" để theo dõi bể trong $30$ ngày qua đồ thị oxygen, ammonia và tảo. Thử bỏ hết cây, thả quá nhiều cá, bỏ lớp cát sỏi hay cho ăn quá nhiều để thấy bể mất cân bằng, rồi tìm thiết kế giữ được cân bằng.',
  },
  examples: [
    {
      problem:
        'Một bể kính dài $60$ cm, rộng $30$ cm, cao $40$ cm được đổ nước tới độ cao $35$ cm. Theo hướng dẫn, mỗi con cá cảnh nhỏ cần ít nhất $5$ L nước. Bể này nuôi được tối đa bao nhiêu con cá?',
      steps: [
        'Thể tích nước: $V = 60 \\cdot 30 \\cdot 35 = 63\\,000$ cm³ $= 63$ L.',
        'Số cá tối đa: $\\dfrac{63}{5} = 12{,}6$.',
        'Số cá phải là số tự nhiên và không vượt quá $12{,}6$, nên lấy $12$ con.',
      ],
      answer: 'Tối đa $12$ con cá.',
    },
    {
      problem:
        'Một bạn làm bể cá chỉ có nước, sỏi rửa sạch và $10$ con cá, không trồng cây, cho cá ăn nhiều. Sau một tuần nước đục, có mùi hôi, cá ngoi lên mặt nước rồi chết dần. Giải thích và đề xuất cách khắc phục.',
      steps: [
        'Không có sinh vật sản xuất (cây thuỷ sinh) nên không có quang hợp tạo oxygen; nhiều cá hô hấp làm oxygen giảm, cá ngoi lên thở.',
        'Thức ăn thừa và chất thải bị phân giải vừa tiêu tốn oxygen vừa tạo ammonia độc; sỏi mới rửa chưa có đủ vi khuẩn chuyển hoá ammonia.',
        'Khắc phục: trồng cây thuỷ sinh, giảm số cá cho phù hợp thể tích, cho ăn vừa đủ, vớt thức ăn thừa, thả ốc, thay một phần nước.',
      ],
      answer:
        'Bể thiếu sinh vật sản xuất và quá tải chất thải nên thiếu oxygen, tích tụ ammonia; cần thêm cây, giảm cá, giảm thức ăn và thay một phần nước.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Ghép mỗi thành phần của bể cá cảnh với nhóm phù hợp trong hệ sinh thái.',
      left: ['Rong đuôi chó', 'Cá bảy màu', 'Vi khuẩn trong lớp sỏi', 'Nước, cát sỏi, ánh sáng'],
      right: ['Sinh vật sản xuất', 'Sinh vật tiêu thụ', 'Sinh vật phân giải', 'Môi trường vô sinh'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Ai quang hợp, ai ăn sinh vật khác, ai phân giải chất thải?'],
      solution:
        'Rong quang hợp: sinh vật sản xuất. Cá ăn thức ăn: sinh vật tiêu thụ. Vi khuẩn phân giải chất thải: sinh vật phân giải. Nước, cát sỏi, ánh sáng: môi trường vô sinh.',
    },
    {
      type: 'number',
      prompt:
        'Một bể dài $60$ cm, rộng $30$ cm được đổ nước cao $35$ cm. Thể tích nước trong bể là bao nhiêu lít?',
      answer: 63,
      unit: 'L',
      hints: ['$V$ = dài × rộng × chiều cao mực nước.', '$1$ L $= 1\\,000$ cm³.'],
      solution: '$V = 60 \\cdot 30 \\cdot 35 = 63\\,000$ cm³ $= 63$ L.',
    },
    {
      type: 'number',
      prompt:
        'Bể chứa $63$ L nước, mỗi con cá cảnh nhỏ cần ít nhất $5$ L nước. Nuôi được nhiều nhất bao nhiêu con cá?',
      answer: 12,
      hints: ['Chia thể tích cho lượng nước mỗi con cần, rồi lấy phần nguyên.'],
      solution: '$\\dfrac{63}{5} = 12{,}6$, nên nuôi được nhiều nhất $12$ con.',
    },
    {
      type: 'number',
      prompt:
        'Mỗi tuần thay $20\\%$ lượng nước của bể $63$ L. Mỗi lần cần thay bao nhiêu lít nước?',
      answer: 12.6,
      tolerance: 0.05,
      unit: 'L',
      hints: ['Tính $20\\%$ của $63$ L.'],
      solution: '$63 \\cdot 20\\% = 63 \\cdot 0{,}2 = 12{,}6$ L.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước lắp đặt bể cá cảnh theo đúng thứ tự.',
      items: [
        'Rải lớp cát sỏi đã rửa sạch dưới đáy bể',
        'Đổ nước nhẹ nhàng vào bể',
        'Trồng cây thuỷ sinh',
        'Để bể ổn định vài ngày',
        'Thả ốc và cá',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Cá được thả sau cùng, khi môi trường đã ổn định.'],
      solution:
        'Rải cát sỏi → đổ nước → trồng cây → để bể ổn định cho nước trong, vi sinh vật phát triển → thả ốc và cá.',
    },
    {
      type: 'choice',
      prompt: 'Vai trò chủ yếu của cây thuỷ sinh trong bể cá cảnh là',
      options: [
        'quang hợp tạo oxygen và chất hữu cơ, hấp thụ chất khoáng trong nước',
        'phân giải xác và chất thải của cá',
        'chỉ dùng để trang trí cho đẹp',
        'tiêu thụ oxygen để nước không bị thừa oxygen',
      ],
      answer: 0,
      hints: ['Cây thuỷ sinh thuộc nhóm sinh vật nào?'],
      solution:
        'Cây thuỷ sinh là sinh vật sản xuất: quang hợp tạo oxygen cho cá, ốc hô hấp, đồng thời hấp thụ $\\mathrm{CO_2}$ và nitrate, giúp nước sạch, hạn chế tảo.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nước máy nên được để lắng $1$ – $2$ ngày trước khi đổ vào bể cá?',
      options: [
        'Để chlorine dùng khử trùng nước bay hơi bớt, không gây hại cho cá và vi sinh vật',
        'Để nước nóng lên tới $40\\,^\\circ\\mathrm{C}$',
        'Để tảo trong nước kịp phát triển',
        'Để nước hấp thụ thêm ammonia',
      ],
      answer: 0,
      hints: ['Nhà máy nước thêm chất gì để diệt vi khuẩn?'],
      solution:
        'Nước máy có chlorine để diệt vi khuẩn; chlorine cũng hại cá và vi khuẩn có lợi trong bể, nên cần để lắng cho chlorine bay hơi bớt.',
    },
    {
      type: 'choice',
      prompt: 'Không nên đặt bể cá nơi nắng chiếu trực tiếp nhiều giờ vì',
      options: [
        'tảo phát triển mạnh làm nước xanh đục và nước bị nóng lên',
        'cây thuỷ sinh không quang hợp được dưới ánh nắng',
        'ánh nắng làm cá không cần thức ăn',
        'ánh nắng diệt hết vi khuẩn có lợi trong cát sỏi',
      ],
      answer: 0,
      hints: ['Tảo cần những gì để phát triển?'],
      solution:
        'Nhiều ánh sáng cùng chất dinh dưỡng trong nước làm tảo phát triển quá mức (nước xanh, đục), nắng còn làm nước nóng, giảm oxygen hoà tan.',
    },
    {
      type: 'multi',
      prompt: 'Những dấu hiệu nào cho thấy bể cá đang mất cân bằng?',
      options: [
        'Cá thường xuyên ngoi lên mặt nước để thở',
        'Nước đục, có mùi hôi',
        'Thành bể và nước xanh đậm do tảo',
        'Cá bơi khoẻ, cây xanh tốt, nước trong',
      ],
      answers: [0, 1, 2],
      hints: ['Dấu hiệu nào cho thấy thiếu oxygen, thừa chất thải, thừa dinh dưỡng?'],
      solution:
        'Cá ngoi lên thở: thiếu oxygen. Nước đục, hôi: chất thải, thức ăn thừa phân huỷ. Tảo nhiều: thừa dinh dưỡng và ánh sáng. Cá khoẻ, cây tốt, nước trong là bể cân bằng.',
    },
    {
      type: 'choice',
      prompt: 'Khi thay nước cho bể, không nên thay toàn bộ nước và cọ rửa sạch hết sỏi vì',
      options: [
        'làm mất vi khuẩn có lợi phân giải chất thải, bể dễ mất cân bằng',
        'sỏi sạch sẽ hút hết oxygen của nước',
        'cá chỉ sống được trong nước cũ',
        'cây thuỷ sinh sẽ ngừng quang hợp',
      ],
      answer: 0,
      hints: ['Sinh vật phân giải của bể sống ở đâu?'],
      solution:
        'Vi khuẩn chuyển hoá ammonia thành nitrate sống chủ yếu trong lớp sỏi và nước; thay hết nước, rửa sạch sỏi làm mất chúng, ammonia sẽ tích tụ gây độc cho cá.',
    },
    {
      type: 'choice',
      prompt: 'Thả thêm vài con ốc vào bể cá có tác dụng gì?',
      options: [
        'Ăn tảo bám và thức ăn thừa, giúp bể sạch hơn',
        'Quang hợp tạo thêm oxygen',
        'Cố định nitrogen từ không khí',
        'Làm thức ăn bắt buộc cho mọi loài cá cảnh',
      ],
      answer: 0,
      hints: ['Ốc là sinh vật tiêu thụ; chúng ăn gì trong bể?'],
      solution:
        'Ốc ăn tảo bám trên kính, cây và thức ăn thừa dưới đáy, góp phần hạn chế tảo và giảm chất hữu cơ bị phân huỷ trong bể.',
    },
  ],
  takeaways: [
    'Bể cá cảnh là một hệ sinh thái nhân tạo gồm môi trường vô sinh, sinh vật sản xuất (cây thuỷ sinh), sinh vật tiêu thụ (cá, ốc) và sinh vật phân giải (vi khuẩn trong cát sỏi).',
    'Thiết kế bể: chọn số lượng sinh vật phù hợp thể tích; lắp theo thứ tự cát sỏi → nước → cây → để ổn định → thả ốc, cá.',
    'Bể cân bằng khi oxygen đủ, chất thải được phân giải và chất khoáng được cây hấp thụ lại; chỉ cần bổ sung ánh sáng và ít thức ăn.',
    'Duy trì: cho ăn vừa đủ, chiếu sáng vừa phải, vớt thức ăn thừa, thay một phần nước định kì; theo dõi và ghi chép để báo cáo.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án theo nhóm: tìm hiểu một ứng dụng của enzyme, làm thí nghiệm so sánh hiệu quả bột giặt có và không có enzyme, xử lí số liệu, báo cáo kết quả và đề xuất một ứng dụng đơn giản.',
  intro:
    'Trên vỏ nhiều gói bột giặt có ghi "chứa enzyme". Lời quảng cáo ấy có đúng không, và đúng với vết bẩn nào? Trong dự án này, nhóm em sẽ tự làm thí nghiệm để trả lời, rồi đề xuất cách dùng enzyme vào một việc nhỏ trong đời sống.',
  objectives: [
    'Lập được kế hoạch dự án: câu hỏi, phân công và thời hạn.',
    'Thiết kế được thí nghiệm công bằng, có đối chứng và lặp lại, để đánh giá hiệu quả của enzyme.',
    'Xử lí được số liệu bằng bảng, biểu đồ và rút ra kết luận từ bằng chứng.',
    'Đề xuất được một ứng dụng đơn giản của enzyme và trình bày cơ sở khoa học của đề xuất.',
  ],
  sections: [
    {
      heading: 'Chủ đề dự án',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm có thể chọn một trong những hướng dưới đây. Mỗi báo cáo cần nêu được: enzyme được dùng, cơ chất của enzyme, quy trình, điều kiện phù hợp, hiệu quả, ưu điểm, hạn chế và tính khả thi.',
        },
        {
          type: 'table',
          caption: 'Các hướng gợi ý',
          head: ['Hướng', 'Câu hỏi', 'Enzyme'],
          rows: [
            ['Bột giặt', 'Bột giặt có enzyme có sạch hơn không?', 'Protease, amylase, lipase'],
            ['Làm mềm thịt', 'Dứa, đu đủ xanh làm thịt mềm thế nào?', 'Bromelain, papain'],
            ['Nước quả', 'Pectinase ảnh hưởng ra sao tới lượng và độ trong?', 'Pectinase'],
            [
              'Tẩy rửa từ vỏ quả',
              'Dịch lên men từ vỏ quả tẩy rửa được đến đâu?',
              'Protease, amylase',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thí nghiệm công bằng',
          text: 'Chỉ thay đổi một yếu tố giữa các nhóm (có hay không có enzyme), giữ nguyên mọi yếu tố khác. Cần có mẫu đối chứng và mỗi nhóm lặp lại ít nhất $3$ lần, để kết quả không phụ thuộc vào một lần ngẫu nhiên.',
        },
      ],
    },
    {
      heading: 'Tiến trình dự án',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng bằng chứng từ thí nghiệm để đánh giá hiệu quả của enzyme trong bột giặt, rồi đề xuất một ứng dụng đơn giản. Mỗi nhóm khoảng $4$ đến $6$ bạn, thực hiện trong khoảng $2$ tuần.',
        },
        {
          type: 'p',
          text: 'Chuẩn bị: vải cotton trắng cắt thành các mảnh bằng nhau, lòng trắng trứng, hồ cơm, dầu ăn, bột giặt có ghi enzyme trên nhãn, bột giặt không có enzyme (nếu không có, nhờ giáo viên đun sôi dung dịch bột giặt có enzyme rồi để nguội để làm biến tính enzyme), cốc, cân, nhiệt kế, găng tay.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lập kế hoạch: nêu câu hỏi, dự đoán kết quả, phân công nhiệm vụ và thời hạn.',
            'Tạo vết bẩn: nhỏ cùng một lượng mỗi loại lên từng mảnh vải, để khô cùng thời gian. Mỗi loại vết bẩn có $3$ mảnh cho mỗi nhóm dung dịch, cùng $1$ mảnh để so sánh màu ban đầu.',
            'Pha dung dịch: hai dung dịch cùng nồng độ và thể tích, trong nước ấm khoảng $30$-$40\\,^\\circ\\mathrm{C}$.',
            'Ngâm vải khoảng $30$ phút, giũ theo cùng một cách, phơi khô.',
            'Chấm độ sạch từ $0$ đến $5$ dưới cùng một nguồn sáng. Người chấm không biết mảnh nào thuộc nhóm nào, để kết quả khách quan.',
            'Tính điểm trung bình, lập bảng và vẽ biểu đồ so sánh; đối chiếu với kiến thức về cơ chất của từng enzyme.',
            'Đề xuất một ứng dụng đơn giản, báo cáo trước lớp và trả lời câu hỏi phản biện.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không dùng máu thật làm vết bẩn. Đeo găng tay, tránh để bột giặt dính vào mắt hay hít phải bụi bột giặt, vì enzyme và chất tẩy rửa có thể gây kích ứng. Không tự đun sôi dung dịch khi không có giáo viên.',
        },
      ],
    },
    {
      heading: 'Báo cáo và đánh giá',
      blocks: [
        {
          type: 'table',
          caption: 'Tiêu chí gợi ý để đánh giá sản phẩm (thang $10$ điểm)',
          head: ['Tiêu chí', 'Điểm tối đa', 'Mức tốt nhất'],
          rows: [
            ['Thiết kế thí nghiệm', '$3$', 'Công bằng, có đối chứng và lặp lại'],
            ['Số liệu và kết luận', '$3$', 'Đúng, có biểu đồ, kết luận dựa vào số liệu'],
            ['Đề xuất ứng dụng', '$2$', 'Có cơ sở khoa học, khả thi và an toàn'],
            ['Trình bày và hợp tác', '$2$', 'Rõ ràng, đúng hạn, hợp tác tốt'],
          ],
        },
        {
          type: 'list',
          items: [
            'Nếu bột giặt có enzyme sạch hơn hẳn ở vết protein, vết tinh bột nhưng không rõ ở vết dầu, em giải thích ra sao? Bột giặt ấy có thể chứa loại enzyme nào?',
            'Vì sao nên giặt bột giặt có enzyme bằng nước ấm, không nên dùng nước sôi?',
            'Bột giặt có enzyme có phù hợp với vải lụa, len (giàu protein) không? Vì sao?',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Khung dự án và bảng so sánh',
    instruction:
      'Phân công ở bước $1$; quyết định yếu tố nào giữ nguyên, yếu tố nào thay đổi ở bước $2$; nhập điểm độ sạch của nhóm ở bước $3$ để có bảng và biểu đồ so sánh; viết đề xuất và sao chép bản tổng hợp ở bước $4$.',
  },
  examples: [
    {
      problem:
        'Với vết lòng trắng trứng, ba mảnh vải giặt bằng bột giặt có enzyme được chấm $4$, $5$, $4$ điểm; ba mảnh giặt bằng bột giặt không có enzyme được chấm $2$, $2$, $3$ điểm. Tính điểm trung bình của mỗi nhóm, độ chênh lệch và nêu kết luận.',
      steps: [
        'Có enzyme: $\\dfrac{4 + 5 + 4}{3} = \\dfrac{13}{3} \\approx 4{,}33$ điểm.',
        'Không có enzyme: $\\dfrac{2 + 2 + 3}{3} = \\dfrac{7}{3} \\approx 2{,}33$ điểm.',
        'Chênh lệch: $\\dfrac{13}{3} - \\dfrac{7}{3} = 2$ điểm.',
        'Lòng trắng trứng giàu protein; protease phân giải protein thành các đoạn nhỏ dễ hoà tan vào nước.',
      ],
      answer:
        'Hai nhóm đạt khoảng $4{,}33$ và $2{,}33$ điểm, chênh lệch $2$ điểm: bột giặt có enzyme tẩy vết này tốt hơn rõ rệt, phù hợp với vai trò của protease.',
    },
    {
      problem:
        'Một nhóm ngâm mảnh vải có enzyme trong nước $40\\,^\\circ\\mathrm{C}$ suốt $60$ phút, còn mảnh không có enzyme trong nước $20\\,^\\circ\\mathrm{C}$ trong $30$ phút, rồi kết luận enzyme giúp giặt sạch hơn. Kết luận này có đáng tin không? Hãy sửa lại thí nghiệm.',
      steps: [
        'Ngoài enzyme, nhóm còn thay đổi nhiệt độ và thời gian ngâm.',
        'Nước ấm hơn và ngâm lâu hơn cũng có thể làm vải sạch hơn, nên không biết kết quả là do yếu tố nào.',
        'Cần giữ hai nhóm cùng nhiệt độ, cùng thời gian, và chỉ khác nhau ở dung dịch giặt.',
      ],
      answer:
        'Chưa đáng tin. Cần làm lại với cùng nhiệt độ, thời gian và lặp lại ít nhất $3$ lần cho mỗi nhóm.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các việc của dự án theo đúng trình tự.',
      items: [
        'Nêu câu hỏi, lập kế hoạch và phân công',
        'Chuẩn bị vải, vết bẩn và dung dịch giặt',
        'Ngâm giặt và chấm điểm độ sạch',
        'Tính trung bình, lập bảng và biểu đồ',
        'Báo cáo, đề xuất ứng dụng và đánh giá',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có số liệu thì mới xử lí được.'],
      solution:
        'Lập kế hoạch, chuẩn bị, làm thí nghiệm và chấm điểm, xử lí số liệu, rồi báo cáo, đề xuất và đánh giá.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi vết bẩn với enzyme phân giải thành phần chính của nó.',
      left: ['Lòng trắng trứng, sữa (giàu protein)', 'Hồ cơm (tinh bột)', 'Dầu ăn (lipid)'],
      right: ['Protease', 'Amylase', 'Lipase'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Tên enzyme thường gắn với tên cơ chất.'],
      solution: 'Protease phân giải protein, amylase phân giải tinh bột, lipase phân giải lipid.',
    },
    {
      type: 'multi',
      prompt: 'Khi so sánh hai loại bột giặt, yếu tố nào phải giữ nguyên?',
      options: [
        'Loại và kích thước mảnh vải',
        'Lượng vết bẩn trên mỗi mảnh',
        'Nhiệt độ nước và thời gian ngâm',
        'Có hay không có enzyme trong dung dịch giặt',
      ],
      answers: [0, 1, 2],
      hints: ['Chỉ có một yếu tố được thay đổi, đó là yếu tố ta muốn đánh giá.'],
      solution:
        'Giữ nguyên vải, lượng vết bẩn, nhiệt độ, thời gian. Có hay không có enzyme chính là yếu tố được thay đổi để so sánh.',
    },
    {
      type: 'choice',
      prompt: 'Đun sôi dung dịch bột giặt có enzyme rồi để nguội có thể dùng làm mẫu đối chứng vì',
      options: [
        'enzyme đã bị biến tính, trong khi các thành phần khác của bột giặt vẫn còn',
        'nước sôi làm vải sạch hơn',
        'enzyme hoạt động mạnh hơn sau khi đun sôi',
        'đun sôi loại hết mọi thành phần của bột giặt',
      ],
      answer: 0,
      hints: ['Mẫu đối chứng chỉ nên khác mẫu thí nghiệm ở một yếu tố.'],
      solution:
        'Đun sôi làm enzyme biến tính, chất tẩy rửa vẫn còn. Vì vậy hai dung dịch chỉ khác nhau ở enzyme còn hoạt động hay không.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao mỗi nhóm cần giặt ít nhất $3$ mảnh vải thay vì $1$ mảnh?',
      options: [
        'Để giảm ảnh hưởng của sai số ngẫu nhiên, kết quả đáng tin hơn',
        'Để dùng hết bột giặt đã chuẩn bị',
        'Để vải mau khô hơn',
        'Để enzyme có thêm cơ chất',
      ],
      answer: 0,
      hints: ['Một mảnh vải có thể cho kết quả bất thường vì một lí do tình cờ.'],
      solution:
        'Lặp lại giúp giảm ảnh hưởng của những khác biệt ngẫu nhiên và cho biết kết quả có ổn định hay không.',
    },
    {
      type: 'number',
      prompt:
        'Ba mảnh vải dính hồ cơm giặt bằng bột giặt có enzyme được chấm $3$, $4$, $5$ điểm. Điểm trung bình là bao nhiêu?',
      answer: 4,
      hints: ['Cộng các điểm rồi chia cho số mảnh vải.'],
      solution: '$\\dfrac{3 + 4 + 5}{3} = \\dfrac{12}{3} = 4$ điểm.',
    },
    {
      type: 'number',
      prompt:
        'Điểm độ sạch của ba mảnh vải dính dầu ăn giặt bằng bột giặt không có enzyme là $2$, $3$, $3$. Điểm trung bình là bao nhiêu? (làm tròn đến hai chữ số thập phân)',
      answer: 2.67,
      tolerance: 0.01,
      hints: ['Tổng điểm bằng $8$.', 'Chia tổng điểm cho $3$ rồi làm tròn.'],
      solution: '$\\dfrac{2 + 3 + 3}{3} = \\dfrac{8}{3} \\approx 2{,}67$ điểm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không nên dùng bột giặt có protease cho vải lụa tơ tằm?',
      options: [
        'Tơ tằm là protein nên có thể bị protease phân giải, làm hỏng vải',
        'Tơ tằm chứa nhiều tinh bột nên làm hỏng protease',
        'Protease nhuộm màu tơ tằm',
        'Vải lụa ngăn protease hoạt động',
      ],
      answer: 0,
      hints: ['Thành phần chính của tơ tằm là gì?'],
      solution:
        'Tơ tằm chủ yếu là protein, nên protease có thể phân giải sợi vải làm vải mau hỏng.',
    },
    {
      type: 'choice',
      prompt: 'Đề xuất nào dưới đây là một ứng dụng enzyme đơn giản, có cơ sở khoa học và an toàn?',
      options: [
        'Ướp thịt bò với một ít dứa tươi vài chục phút trước khi nấu, để protease làm thịt mềm',
        'Đun sôi dịch dứa lâu rồi mới ướp để enzyme mạnh hơn',
        'Uống bột giặt có enzyme để tiêu hoá tốt hơn',
        'Giặt áo len trong dung dịch nhiều protease để áo thêm bền',
      ],
      answer: 0,
      hints: [
        'Hãy kiểm tra: enzyme còn hoạt động không, có an toàn không, có làm hỏng vật liệu không?',
      ],
      solution:
        'Bromelain trong dứa tươi phân giải protein thịt ở nhiệt độ thường. Đun sôi làm mất hoạt tính, bột giặt không ăn được, còn protease làm hỏng len.',
    },
  ],
  takeaways: [
    'Một thí nghiệm công bằng chỉ thay đổi một yếu tố, có đối chứng và lặp lại ít nhất $3$ lần.',
    'Bột giặt có enzyme thường tẩy vết bẩn tốt hơn nhờ tính đặc hiệu: protease với protein, amylase với tinh bột, lipase với lipid.',
    'Kết luận phải dựa vào số liệu; bảng và biểu đồ giúp so sánh kết quả rõ hơn.',
    'Một đề xuất ứng dụng enzyme tốt cần nêu rõ enzyme, cơ chất, điều kiện phù hợp, tính an toàn và tính khả thi.',
  ],
};

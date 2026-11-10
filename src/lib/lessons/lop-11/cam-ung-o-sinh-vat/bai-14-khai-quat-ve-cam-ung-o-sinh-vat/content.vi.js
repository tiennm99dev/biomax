/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm và vai trò của cảm ứng, đặc điểm cảm ứng ở thực vật và động vật, bốn khâu của cơ chế cảm ứng: tiếp nhận kích thích, dẫn truyền thông tin, xử lí thông tin và trả lời kích thích.',
  intro:
    'Lỡ chạm tay vào gai xương rồng, em rụt tay lại trước cả khi kịp nghĩ. Chạm nhẹ vào lá cây trinh nữ, lá cụp xuống. Nếu sinh vật không phản ứng kịp với những thay đổi của môi trường thì điều gì sẽ xảy ra? Những bộ phận nào giúp chúng phản ứng?',
  objectives: [
    'Phát biểu được khái niệm cảm ứng và nêu được vai trò của cảm ứng đối với sinh vật.',
    'So sánh được đặc điểm cảm ứng ở thực vật và ở động vật.',
    'Trình bày được các bộ phận tham gia cảm ứng và bốn khâu: tiếp nhận kích thích, dẫn truyền thông tin, xử lí thông tin, trả lời kích thích.',
    'Phân tích được một hiện tượng cảm ứng cụ thể theo bốn khâu.',
  ],
  sections: [
    {
      heading: 'Khái niệm và vai trò của cảm ứng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cảm ứng',
          text: 'Cảm ứng là khả năng của sinh vật tiếp nhận và phản ứng lại các kích thích từ môi trường (bên ngoài và bên trong cơ thể), đảm bảo cho sinh vật tồn tại và phát triển.',
        },
        {
          type: 'p',
          text: 'Cảm ứng là đặc điểm thích nghi của sinh vật với những thay đổi của môi trường. Ví dụ: ngọn cây hướng về phía có ánh sáng để nhận được nhiều ánh sáng cho quang hợp; ở người, đồng tử co lại khi ánh sáng mạnh chiếu vào mắt, giúp bảo vệ màng lưới; tay rụt lại khi chạm vào vật nóng giúp tránh bị bỏng.',
        },
        {
          type: 'table',
          head: ['Đặc điểm', 'Cảm ứng ở thực vật', 'Cảm ứng ở động vật'],
          rows: [
            ['Tốc độ', 'Thường diễn ra chậm, khó nhận thấy', 'Thường diễn ra nhanh, dễ nhận thấy'],
            [
              'Hình thức biểu hiện',
              'Vận động của cơ quan như hướng sáng, hướng nước, hướng hoá; vận động gắn với sinh trưởng (chồi ngủ, nảy mầm theo mùa)',
              'Đa dạng (cử động, thay đổi hoạt động của cơ, tuyến…); mức độ chính xác phụ thuộc vào bộ phận phụ trách cảm ứng',
            ],
            ['Ví dụ', 'Lá cây trinh nữ cụp lại khi bị chạm vào', 'Tay rụt lại khi bị gai đâm'],
          ],
        },
        { type: 'widget', name: 'phan-loai' },
      ],
    },
    {
      heading: 'Cơ chế cảm ứng',
      blocks: [
        {
          type: 'p',
          text: 'Cảm ứng ở sinh vật được thực hiện thông qua các bộ phận: tiếp nhận kích thích, dẫn truyền thông tin kích thích, xử lí thông tin và đáp ứng (trả lời kích thích). Bốn khâu này diễn ra theo thứ tự:',
        },
        {
          type: 'tex',
          tex: '\\text{Tiếp nhận kích thích} \\to \\text{Dẫn truyền} \\to \\text{Xử lí thông tin} \\to \\text{Trả lời kích thích}',
        },
        {
          type: 'list',
          items: [
            'Ở thực vật: bộ phận tiếp nhận (thụ thể trên màng tế bào) nhận kích thích. Thông tin truyền qua tế bào chất dưới dạng tín hiệu điện hoặc tín hiệu hoá học đến bộ phận xử lí. Bộ phận này xử lí thông tin và đưa ra đáp ứng, thường là sự thay đổi sinh trưởng hoặc sức trương nước của tế bào.',
            'Ở động vật có hệ thần kinh: cảm ứng diễn ra theo cung phản xạ. Thụ thể cảm giác tiếp nhận kích thích và tạo ra xung thần kinh; xung thần kinh theo dây thần kinh cảm giác về trung ương thần kinh; trung ương xử lí thông tin rồi gửi xung thần kinh theo dây thần kinh vận động đến cơ quan trả lời (cơ hoặc tuyến).',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Một khâu hỏng, cả quá trình dừng',
          text: 'Các bộ phận tham gia cảm ứng hoạt động phối hợp. Nếu một bộ phận bị tổn thương (thụ thể, dây thần kinh, trung ương hay cơ), thông tin không đi tiếp được và sinh vật không trả lời được kích thích.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bốn khâu của cảm ứng',
    instruction:
      'Chọn một hiện tượng cảm ứng rồi bấm "Gây kích thích" để xem thông tin đi qua từng khâu. Sau đó làm hỏng một bộ phận và thử lại: thông tin dừng ở đâu, sinh vật còn trả lời kích thích không?',
  },
  examples: [
    {
      problem:
        'Phân tích phản xạ rụt tay khi chạm vào gai xương rồng theo bốn khâu của cơ chế cảm ứng.',
      steps: [
        'Tiếp nhận: thụ thể đau ở da tay tiếp nhận kích thích và tạo xung thần kinh.',
        'Dẫn truyền: xung thần kinh theo dây thần kinh cảm giác về tuỷ sống.',
        'Xử lí: tuỷ sống xử lí thông tin, phát lệnh; đồng thời thông tin được chuyển lên não tạo cảm giác đau.',
        'Trả lời: xung thần kinh theo dây thần kinh vận động đến cơ tay, cơ co làm tay rụt lại.',
      ],
      answer: 'Thụ thể đau → dây thần kinh cảm giác → tuỷ sống → dây thần kinh vận động → cơ tay.',
    },
    {
      problem:
        'Một người bị tổn thương dây thần kinh vận động đi đến cơ tay phải. Khi kim châm vào tay phải, người đó có cảm thấy đau không và có rụt tay được không? Giải thích.',
      steps: [
        'Thụ thể đau, dây thần kinh cảm giác và trung ương thần kinh vẫn bình thường: thông tin vẫn về được tuỷ sống và lên não.',
        'Não tạo cảm giác đau, nên người đó vẫn thấy đau.',
        'Lệnh từ trung ương phải theo dây thần kinh vận động mới đến được cơ tay; dây này bị tổn thương nên cơ tay không nhận được lệnh.',
      ],
      answer: 'Vẫn thấy đau nhưng không rụt tay lại được, vì khâu trả lời bị gián đoạn.',
    },
    {
      problem:
        'Vì sao nói cảm ứng giúp sinh vật tồn tại và phát triển? Lấy một ví dụ ở thực vật để minh hoạ.',
      steps: [
        'Môi trường luôn thay đổi; sinh vật cần nhận biết và phản ứng kịp thời để thích nghi.',
        'Ví dụ: cây trồng cạnh cửa sổ có ngọn cong về phía ánh sáng.',
        'Nhờ đó lá nhận được nhiều ánh sáng, quang hợp mạnh, cây sinh trưởng tốt hơn.',
      ],
      answer:
        'Cảm ứng là đặc điểm thích nghi, giúp sinh vật đáp ứng kịp với biến đổi của môi trường.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các khâu của cơ chế cảm ứng theo đúng thứ tự.',
      items: [
        'Xử lí thông tin',
        'Trả lời kích thích',
        'Tiếp nhận kích thích',
        'Dẫn truyền thông tin',
      ],
      answer: [2, 3, 0, 1],
      hints: ['Khâu đầu tiên là nhận biết sự thay đổi của môi trường.'],
      solution: 'Tiếp nhận kích thích, dẫn truyền thông tin, xử lí thông tin, trả lời kích thích.',
    },
    {
      type: 'match',
      prompt: 'Trong phản xạ rụt tay khi chạm vào vật nóng, nối mỗi khâu với bộ phận thực hiện.',
      left: [
        'Tiếp nhận kích thích',
        'Dẫn truyền về trung ương',
        'Xử lí thông tin',
        'Trả lời kích thích',
      ],
      right: ['Tuỷ sống', 'Thụ thể nhiệt ở da', 'Cơ tay', 'Dây thần kinh cảm giác', 'Tuyến mồ hôi'],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Bộ phận nào tạo ra xung thần kinh khi da chạm vào vật nóng?'],
      solution:
        'Thụ thể nhiệt ở da tiếp nhận; dây thần kinh cảm giác dẫn truyền; tuỷ sống xử lí; cơ tay co, tay rụt lại.',
    },
    {
      type: 'choice',
      prompt: 'Cảm ứng là',
      options: [
        'khả năng sinh vật tiếp nhận và phản ứng lại các kích thích từ môi trường, đảm bảo cho sinh vật tồn tại và phát triển',
        'khả năng sinh vật lớn lên về kích thước',
        'quá trình sinh vật lấy chất dinh dưỡng từ môi trường',
        'khả năng sinh vật tạo ra cơ thể mới',
      ],
      answer: 0,
      hints: ['Cảm ứng gắn với hai việc: nhận kích thích và phản ứng lại.'],
      solution:
        'Cảm ứng là khả năng tiếp nhận và phản ứng lại các kích thích từ môi trường; các lựa chọn còn lại là sinh trưởng, dinh dưỡng, sinh sản.',
    },
    {
      type: 'multi',
      prompt: 'Những hiện tượng nào là cảm ứng?',
      options: [
        'Lá cây trinh nữ cụp lại khi bị chạm',
        'Người quay đầu lại khi nghe gọi tên mình',
        'Rễ cây mọc về phía có nước',
        'Hòn đá nóng lên khi phơi nắng',
        'Nước đá tan khi để ngoài trời',
      ],
      answers: [0, 1, 2],
      hints: ['Cảm ứng chỉ có ở sinh vật.'],
      solution:
        'Lá trinh nữ cụp, người quay đầu khi nghe gọi, rễ mọc về phía nước đều là phản ứng của sinh vật với kích thích. Đá nóng lên, nước đá tan là hiện tượng vật lí, không phải cảm ứng.',
    },
    {
      type: 'choice',
      prompt: 'So với cảm ứng ở động vật, cảm ứng ở thực vật thường',
      options: [
        'diễn ra chậm, khó nhận thấy',
        'diễn ra nhanh, dễ nhận thấy',
        'luôn có sự tham gia của hệ thần kinh',
        'không giúp thực vật thích nghi',
      ],
      answer: 0,
      hints: ['Hãy nghĩ đến thời gian để ngọn cây cong về phía ánh sáng.'],
      solution:
        'Phần lớn cảm ứng ở thực vật gắn với sinh trưởng nên diễn ra chậm, khó nhận thấy; thực vật không có hệ thần kinh.',
    },
    {
      type: 'choice',
      prompt:
        'Một người bị đứt dây thần kinh cảm giác ở ngón tay. Khi ngón tay chạm vào vật nóng thì',
      options: [
        'không thấy nóng và không rụt tay lại',
        'thấy nóng nhưng không rụt tay lại',
        'không thấy nóng nhưng vẫn rụt tay lại',
        'vẫn thấy nóng và rụt tay lại bình thường',
      ],
      answer: 0,
      hints: ['Thông tin từ thụ thể có về được trung ương thần kinh không?'],
      solution:
        'Dây thần kinh cảm giác bị đứt nên xung thần kinh không về được trung ương: não không tạo cảm giác nóng, tuỷ sống không phát lệnh, tay không rụt lại.',
    },
    {
      type: 'number',
      prompt:
        'Xung thần kinh truyền trên dây thần kinh cảm giác với tốc độ khoảng $50$ m/s. Quãng đường từ ngón tay đến tuỷ sống khoảng $1$ m. Xung thần kinh cần bao nhiêu mili giây (ms) để đi hết quãng đường này?',
      answer: 20,
      tolerance: 0.01,
      unit: 'ms',
      hints: [
        'Thời gian bằng quãng đường chia cho tốc độ.',
        'Đổi giây ra mili giây: $1$ s $= 1\\,000$ ms.',
      ],
      solution: '$t = 1 : 50 = 0{,}02$ s $= 20$ ms.',
    },
    {
      type: 'choice',
      prompt: 'Ở cây trinh nữ, thông tin kích thích từ lá chét được truyền đến thể gối nhờ',
      options: [
        'tín hiệu điện và tín hiệu hoá học truyền qua tế bào chất của các tế bào',
        'dây thần kinh cảm giác',
        'tuỷ sống',
        'máu chảy trong mạch',
      ],
      answer: 0,
      hints: ['Thực vật không có hệ thần kinh.'],
      solution:
        'Ở thực vật, thông tin kích thích truyền qua tế bào chất dưới dạng tín hiệu điện hoặc hoá học; dây thần kinh, tuỷ sống chỉ có ở động vật.',
    },
  ],
  takeaways: [
    'Cảm ứng là khả năng tiếp nhận và phản ứng lại các kích thích từ môi trường, giúp sinh vật thích nghi, tồn tại và phát triển.',
    'Cảm ứng ở thực vật thường chậm, khó nhận thấy; ở động vật thường nhanh, dễ nhận thấy và đa dạng.',
    'Cơ chế cảm ứng gồm bốn khâu: tiếp nhận kích thích → dẫn truyền thông tin → xử lí thông tin → trả lời kích thích.',
    'Ở động vật có hệ thần kinh, cảm ứng thực hiện qua cung phản xạ; ở thực vật, thông tin truyền qua tế bào chất bằng tín hiệu điện, hoá học.',
    'Một bộ phận bị tổn thương thì sinh vật không trả lời được kích thích.',
  ],
};

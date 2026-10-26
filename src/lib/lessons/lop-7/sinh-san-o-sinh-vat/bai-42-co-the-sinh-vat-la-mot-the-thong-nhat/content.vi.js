/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cơ thể sinh vật là một thể thống nhất: tế bào là đơn vị cấu trúc và chức năng của cơ thể; cơ thể liên tục trao đổi chất với môi trường; các hoạt động sống trao đổi chất và chuyển hoá năng lượng, cảm ứng, sinh trưởng và phát triển, sinh sản có quan hệ chặt chẽ với nhau.',
  intro:
    'Một cây đậu hút nước, chất khoáng và quang hợp; ngọn cây vươn về phía ánh sáng; cây lớn dần rồi ra hoa, kết quả. Một con mèo ăn, thở, nghe tiếng chuột liền rình bắt, lớn lên rồi sinh con. Các hoạt động ấy diễn ra riêng rẽ hay liên quan với nhau?',
  objectives: [
    'Nêu được mối quan hệ giữa tế bào, cơ thể và môi trường.',
    'Chứng minh được cơ thể sinh vật là một thể thống nhất thông qua mối quan hệ giữa các hoạt động sống: trao đổi chất và chuyển hoá năng lượng, cảm ứng, sinh trưởng và phát triển, sinh sản.',
  ],
  sections: [
    {
      heading: 'Mối quan hệ giữa tế bào, cơ thể và môi trường',
      blocks: [
        {
          type: 'list',
          items: [
            'Về cấu trúc: mọi cơ thể sống đều được cấu tạo từ tế bào. Cơ thể đơn bào chỉ gồm một tế bào; cơ thể đa bào gồm nhiều tế bào, phân hoá thành mô, cơ quan, hệ cơ quan phối hợp với nhau.',
            'Về chức năng: hoạt động sống của tế bào là cơ sở cho hoạt động sống của cơ thể; ngược lại, cơ thể điều khiển hoạt động của các tế bào.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Cơ thể và môi trường',
          text: 'Cơ thể lấy từ môi trường các chất dinh dưỡng, nước, chất khoáng và khí oxygen, cung cấp cho tế bào thực hiện trao đổi chất; nhờ đó tế bào lớn lên, phân chia, cảm ứng, giúp cơ thể thực hiện các hoạt động sống. Cơ thể thải ra môi trường khí carbon dioxide và các chất thải.',
        },
        {
          type: 'table',
          caption: 'Các cấp tổ chức của cơ thể đa bào (ví dụ ở người)',
          head: ['Cấp tổ chức', 'Ví dụ'],
          rows: [
            ['Tế bào', 'Tế bào cơ tim'],
            ['Mô', 'Mô cơ tim'],
            ['Cơ quan', 'Tim'],
            ['Hệ cơ quan', 'Hệ tuần hoàn (tim và mạch máu)'],
            ['Cơ thể', 'Cơ thể người'],
          ],
        },
      ],
    },
    {
      heading: 'Mối quan hệ giữa các hoạt động sống',
      blocks: [
        {
          type: 'p',
          text: 'Cơ thể sinh vật có các hoạt động sống cơ bản: trao đổi chất và chuyển hoá năng lượng, cảm ứng, sinh trưởng và phát triển, sinh sản.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Cơ thể là một thể thống nhất',
          text: 'Trao đổi chất và chuyển hoá năng lượng là cơ sở, cung cấp vật chất và năng lượng cho sinh trưởng, phát triển, cảm ứng và sinh sản. Ngược lại, sinh trưởng, phát triển, cảm ứng và sinh sản tác động trở lại trao đổi chất và chuyển hoá năng lượng. Các hoạt động sống liên quan chặt chẽ với nhau, bảo đảm cho cơ thể tồn tại và phát triển như một thể thống nhất.',
        },
        {
          type: 'table',
          caption: 'Các hoạt động sống ở cây đậu và con mèo',
          head: ['Hoạt động sống', 'Cây đậu', 'Con mèo'],
          rows: [
            [
              'Trao đổi chất và chuyển hoá năng lượng',
              'Lấy nước, chất khoáng, khí carbon dioxide và ánh sáng để quang hợp tạo chất hữu cơ; hô hấp giải phóng năng lượng',
              'Ăn thức ăn, lấy khí oxygen để hô hấp, giải phóng năng lượng',
            ],
            [
              'Cảm ứng',
              'Ngọn cây mọc hướng về phía ánh sáng, rễ mọc về phía nguồn nước',
              'Nghe tiếng chuột thì quay đầu, rình bắt',
            ],
            [
              'Sinh trưởng và phát triển',
              'Hạt nảy mầm, cây lớn lên, ra lá, ra hoa',
              'Mèo con lớn lên thành mèo trưởng thành',
            ],
            ['Sinh sản', 'Ra hoa, tạo quả và hạt', 'Mèo mẹ mang thai, đẻ con'],
          ],
        },
        {
          type: 'p',
          text: 'Ví dụ: khi ta chạy nhanh, hệ vận động hoạt động mạnh, cần nhiều năng lượng; hệ hô hấp thở nhanh, sâu để lấy thêm khí oxygen; tim đập nhanh để hệ tuần hoàn vận chuyển nhiều khí oxygen và chất dinh dưỡng tới cơ; hệ thần kinh điều khiển sự phối hợp đó. Các cơ quan, hệ cơ quan cùng hoạt động nhịp nhàng như một thể thống nhất.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mạng lưới các hoạt động sống',
    instruction:
      'Bấm vào một ô (ví dụ "Trao đổi chất và chuyển hoá năng lượng") để tô đậm các mối liên hệ và đọc ví dụ cho từng mối liên hệ. Sau đó bấm "Giả sử ô này ngừng hoạt động" để xem các hoạt động sống khác bị ảnh hưởng ra sao.',
  },
  examples: [
    {
      problem:
        'Một cây đậu được trồng trong phòng tối suốt hai tuần. Hãy giải thích vì sao cây không ra hoa, kết quả, dựa vào mối quan hệ giữa các hoạt động sống.',
      steps: [
        'Không có ánh sáng, cây không quang hợp được: trao đổi chất và chuyển hoá năng lượng bị ngừng trệ, cây không tạo được chất hữu cơ.',
        'Thiếu chất hữu cơ và năng lượng, tế bào không phân chia, lớn lên bình thường: cây sinh trưởng, phát triển kém (cây vàng, yếu).',
        'Cây không đủ chất và chưa phát triển đầy đủ thì không thể ra hoa, tạo quả: sinh sản bị ảnh hưởng.',
      ],
      answer:
        'Vì trao đổi chất (quang hợp) bị ngừng, kéo theo sinh trưởng, phát triển và sinh sản đều bị ảnh hưởng: các hoạt động sống liên quan chặt chẽ với nhau.',
    },
    {
      problem:
        'Khi chạy bộ, nhịp thở và nhịp tim của em đều tăng. Điều này chứng tỏ điều gì về cơ thể?',
      steps: [
        'Khi chạy, cơ (hệ vận động) hoạt động mạnh, cần nhiều năng lượng.',
        'Để có năng lượng, tế bào cơ cần nhiều khí oxygen và chất dinh dưỡng: hệ hô hấp tăng nhịp thở, hệ tuần hoàn tăng nhịp tim để vận chuyển chúng tới cơ nhanh hơn.',
        'Hệ thần kinh điều khiển sự phối hợp giữa các hệ cơ quan.',
      ],
      answer:
        'Các hệ cơ quan phối hợp với nhau, cùng phục vụ hoạt động của cơ thể: cơ thể là một thể thống nhất.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hoạt động sống nào cung cấp vật chất và năng lượng cho các hoạt động sống còn lại?',
      options: [
        'Cảm ứng',
        'Sinh sản',
        'Trao đổi chất và chuyển hoá năng lượng',
        'Sinh trưởng và phát triển',
      ],
      answer: 2,
      hints: ['Hoạt động nào lấy chất từ môi trường và giải phóng năng lượng?'],
      solution:
        'Trao đổi chất và chuyển hoá năng lượng cung cấp vật chất và năng lượng cho sinh trưởng, phát triển, cảm ứng và sinh sản.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hiện tượng ở cây đậu với hoạt động sống tương ứng.',
      left: [
        'Lá cây quang hợp tạo chất hữu cơ',
        'Ngọn cây mọc cong về phía ánh sáng',
        'Cây non cao thêm, ra thêm lá',
        'Cây ra hoa, tạo quả và hạt',
      ],
      right: [
        'Sinh sản',
        'Trao đổi chất và chuyển hoá năng lượng',
        'Sinh trưởng và phát triển',
        'Cảm ứng',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 2],
        [3, 0],
      ],
      hints: ['Quang hợp là một quá trình trao đổi chất; hướng sáng là phản ứng với kích thích.'],
      solution:
        'Quang hợp: trao đổi chất và chuyển hoá năng lượng; hướng sáng: cảm ứng; cao thêm, ra lá: sinh trưởng và phát triển; ra hoa, tạo quả: sinh sản.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về mối quan hệ giữa tế bào và cơ thể?',
      options: [
        'Hoạt động của tế bào không liên quan đến hoạt động của cơ thể',
        'Hoạt động sống của tế bào là cơ sở cho hoạt động sống của cơ thể, cơ thể điều khiển hoạt động của tế bào',
        'Chỉ cơ thể đơn bào mới được cấu tạo từ tế bào',
        'Cơ thể đa bào gồm các tế bào hoạt động riêng rẽ, không phối hợp',
      ],
      answer: 1,
      hints: ['Tế bào là đơn vị cấu trúc và chức năng của cơ thể.'],
      solution:
        'Mọi cơ thể đều cấu tạo từ tế bào; hoạt động sống của tế bào là cơ sở cho hoạt động của cơ thể, còn cơ thể điều khiển hoạt động của các tế bào.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các cấp tổ chức của cơ thể đa bào từ nhỏ đến lớn.',
      items: ['Cơ quan', 'Tế bào', 'Cơ thể', 'Mô', 'Hệ cơ quan'],
      answer: [1, 3, 0, 4, 2],
      hints: ['Nhiều tế bào giống nhau tạo thành mô.'],
      solution: 'Tế bào → mô → cơ quan → hệ cơ quan → cơ thể.',
    },
    {
      type: 'multi',
      prompt: 'Cơ thể lấy những gì từ môi trường để thực hiện trao đổi chất?',
      options: ['Khí oxygen', 'Nước', 'Khí carbon dioxide thải ra từ hô hấp', 'Chất dinh dưỡng'],
      answers: [0, 1, 3],
      hints: ['Một lựa chọn là chất cơ thể thải ra, không phải lấy vào.'],
      solution:
        'Cơ thể lấy khí oxygen, nước, chất dinh dưỡng (và chất khoáng) từ môi trường; khí carbon dioxide sinh ra từ hô hấp được thải ra môi trường.',
    },
    {
      type: 'choice',
      prompt:
        'Một con gà mái bị bệnh, ăn rất ít trong nhiều ngày. Điều nào dưới đây có khả năng xảy ra nhất?',
      options: [
        'Gà vẫn đẻ trứng đều như trước',
        'Gà đẻ ít trứng hoặc ngừng đẻ, gầy đi',
        'Gà lớn nhanh hơn',
        'Gà phản ứng nhanh nhẹn hơn với kích thích',
      ],
      answer: 1,
      hints: ['Ăn ít thì trao đổi chất cung cấp được ít vật chất và năng lượng.'],
      solution:
        'Ăn ít làm trao đổi chất thiếu vật chất và năng lượng, kéo theo sinh trưởng kém (gầy đi) và sinh sản giảm (đẻ ít hoặc ngừng đẻ).',
    },
    {
      type: 'choice',
      prompt: 'Cảm ứng hướng sáng của ngọn cây có lợi cho trao đổi chất vì',
      options: [
        'giúp lá nhận nhiều ánh sáng hơn để quang hợp',
        'giúp rễ hút nhiều nước hơn',
        'giúp cây ra hoa sớm hơn',
        'giúp cây không cần hô hấp',
      ],
      answer: 0,
      hints: ['Ánh sáng cần cho quá trình nào ở lá?'],
      solution:
        'Ngọn cây mọc về phía ánh sáng giúp lá nhận nhiều ánh sáng, quang hợp mạnh hơn: cảm ứng phục vụ trao đổi chất.',
    },
  ],
  takeaways: [
    'Tế bào là đơn vị cấu trúc và chức năng của cơ thể; cơ thể điều khiển hoạt động của các tế bào.',
    'Cơ thể liên tục trao đổi chất với môi trường: lấy khí oxygen, nước, chất dinh dưỡng; thải khí carbon dioxide, chất thải.',
    'Trao đổi chất và chuyển hoá năng lượng cung cấp vật chất, năng lượng cho cảm ứng, sinh trưởng, phát triển và sinh sản; các hoạt động này tác động trở lại trao đổi chất.',
    'Các hoạt động sống liên quan chặt chẽ với nhau: cơ thể sinh vật là một thể thống nhất.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cơ thể đa bào được tổ chức theo các cấp từ nhỏ đến lớn: tế bào, mô, cơ quan, hệ cơ quan, cơ thể; thực vật có hệ chồi và hệ rễ, cơ thể người có nhiều hệ cơ quan như tiêu hoá, tuần hoàn, hô hấp, thần kinh, bài tiết, vận động.',
  intro:
    'Một trường học có nhiều học sinh; học sinh xếp thành tổ, các tổ hợp thành lớp, các lớp hợp thành khối, các khối hợp thành trường. Cơ thể đa bào cũng được "xếp" như vậy: hàng tỉ tế bào không nằm lộn xộn mà hợp thành mô, cơ quan, hệ cơ quan và cuối cùng là cả cơ thể.',
  objectives: [
    'Nêu được khái niệm mô, cơ quan, hệ cơ quan và lấy được ví dụ ở thực vật và ở người.',
    'Sắp xếp được các cấp độ tổ chức của cơ thể đa bào từ thấp đến cao: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.',
    'Nhận biết được hệ chồi, hệ rễ ở thực vật và một số hệ cơ quan ở người cùng chức năng của chúng.',
  ],
  sections: [
    {
      heading: 'Từ tế bào đến mô',
      blocks: [
        {
          type: 'p',
          text: 'Trong cơ thể đa bào, các tế bào có hình dạng và chức năng khác nhau. Những tế bào giống nhau thường tập hợp lại với nhau và cùng làm một việc.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mô',
          text: 'Mô là tập hợp một nhóm tế bào giống nhau cùng thực hiện một chức năng nhất định.',
        },
        {
          type: 'table',
          caption: 'Một số loại mô',
          head: ['Mô', 'Có ở', 'Chức năng'],
          rows: [
            [
              'Mô biểu bì',
              'Thực vật (ngoài lá, thân, rễ), người (da, lót dạ dày, ruột)',
              'Che phủ, bảo vệ; ở rễ có lông hút để hút nước',
            ],
            [
              'Mô dẫn',
              'Thực vật (gân lá, thân, rễ)',
              'Vận chuyển nước, muối khoáng và chất hữu cơ',
            ],
            ['Mô mềm', 'Thực vật (thịt lá, ruột thân)', 'Quang hợp, dự trữ chất dinh dưỡng'],
            [
              'Mô cơ',
              'Động vật, người (cơ bắp, tim, dạ dày)',
              'Co rút giúp cơ thể và cơ quan cử động',
            ],
            [
              'Mô thần kinh',
              'Động vật, người (não, tuỷ sống, dây thần kinh)',
              'Tiếp nhận và dẫn truyền thông tin',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Từ mô đến cơ quan',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ quan',
          text: 'Cơ quan được cấu tạo từ nhiều mô khác nhau cùng phối hợp thực hiện một hoạt động sống nhất định.',
        },
        {
          type: 'list',
          items: [
            'Lá cây gồm mô biểu bì (bảo vệ), mô mềm (thịt lá, quang hợp) và mô dẫn (gân lá, vận chuyển các chất). Các mô cùng phối hợp để lá quang hợp.',
            'Dạ dày gồm mô cơ (co bóp, nhào trộn thức ăn), mô biểu bì (lót mặt trong, tiết dịch vị), mô thần kinh và các mô khác. Các mô cùng phối hợp để dạ dày tiêu hoá thức ăn.',
            'Một số cơ quan khác: rễ, thân, hoa, quả, hạt ở thực vật; tim, phổi, não, thận, ruột non ở người.',
          ],
        },
      ],
    },
    {
      heading: 'Từ cơ quan đến hệ cơ quan và cơ thể',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hệ cơ quan',
          text: 'Hệ cơ quan gồm một nhóm cơ quan cùng hoạt động, phối hợp với nhau để thực hiện một chức năng nhất định. Các hệ cơ quan phối hợp với nhau tạo thành cơ thể thống nhất.',
        },
        {
          type: 'p',
          text: 'Ở thực vật có hai hệ cơ quan chính:',
        },
        {
          type: 'table',
          caption: 'Hệ cơ quan ở thực vật',
          head: ['Hệ cơ quan', 'Các cơ quan', 'Chức năng'],
          rows: [
            [
              'Hệ chồi (trên mặt đất)',
              'Cơ quan sinh dưỡng: thân, lá; cơ quan sinh sản: hoa, quả, hạt',
              'Quang hợp tạo chất hữu cơ, vận chuyển các chất, sinh sản duy trì nòi giống',
            ],
            [
              'Hệ rễ (dưới mặt đất)',
              'Rễ chính, rễ con',
              'Giữ cây đứng vững, hút nước và muối khoáng',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Cơ thể người có nhiều hệ cơ quan:',
        },
        {
          type: 'table',
          caption: 'Một số hệ cơ quan ở người',
          head: ['Hệ cơ quan', 'Các cơ quan chính', 'Chức năng'],
          rows: [
            [
              'Hệ tiêu hoá',
              'Miệng, thực quản, dạ dày, ruột non, ruột già, gan, tuỵ',
              'Biến đổi thức ăn thành chất dinh dưỡng, thải chất bã',
            ],
            [
              'Hệ tuần hoàn',
              'Tim, mạch máu',
              'Vận chuyển chất dinh dưỡng, khí oxygen tới tế bào và mang chất thải đi',
            ],
            [
              'Hệ hô hấp',
              'Mũi, khí quản, phế quản, phổi',
              'Lấy khí oxygen, thải khí carbon dioxide',
            ],
            [
              'Hệ thần kinh',
              'Não, tuỷ sống, dây thần kinh',
              'Điều khiển, điều hoà và phối hợp hoạt động của các cơ quan',
            ],
            [
              'Hệ bài tiết',
              'Thận, ống dẫn nước tiểu, bóng đái',
              'Lọc máu, thải nước tiểu ra ngoài',
            ],
            ['Hệ vận động', 'Xương, cơ', 'Nâng đỡ, giúp cơ thể cử động và di chuyển'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Các cấp độ tổ chức của cơ thể đa bào',
          text: 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể. Cấp sau gồm nhiều đơn vị của cấp trước; các cấp phối hợp nhịp nhàng để cơ thể tồn tại và phát triển.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Các hệ cơ quan phối hợp với nhau',
          text: 'Khi em chạy, hệ vận động hoạt động mạnh; hệ hô hấp phải thở nhanh hơn để lấy thêm khí oxygen, hệ tuần hoàn làm tim đập nhanh hơn để đưa oxygen và chất dinh dưỡng tới cơ, còn hệ thần kinh điều khiển tất cả. Một hệ cơ quan bị tổn thương sẽ ảnh hưởng đến các hệ khác và cả cơ thể.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mở từng tầng tổ chức',
    instruction:
      'Chọn cây xanh hoặc cơ thể người. Ở chế độ "Mở từng tầng", bấm một hệ cơ quan, rồi một cơ quan, một mô, cho đến tế bào; khung dưới cùng cho biết chức năng và cả chuỗi từ tế bào lên cơ thể. Ở chế độ "Đố cấp độ", hãy cho biết mỗi bộ phận thuộc cấp tổ chức nào.',
  },
  examples: [
    {
      problem:
        'Hãy sắp xếp các cấp tổ chức sau theo thứ tự từ thấp đến cao: hệ tuần hoàn, tế bào cơ tim, tim, cơ thể người, mô cơ tim.',
      steps: [
        'Đơn vị nhỏ nhất là tế bào: tế bào cơ tim.',
        'Nhiều tế bào cơ tim giống nhau tạo thành mô cơ tim.',
        'Mô cơ tim cùng các mô khác tạo thành cơ quan tim.',
        'Tim cùng các mạch máu tạo thành hệ tuần hoàn; hệ tuần hoàn cùng các hệ khác tạo thành cơ thể người.',
      ],
      answer: 'Tế bào cơ tim → mô cơ tim → tim → hệ tuần hoàn → cơ thể người.',
    },
    {
      problem:
        'Cho các cơ quan của cây cà chua: rễ, thân, lá, hoa, quả, hạt. Cơ quan nào thuộc hệ chồi, cơ quan nào thuộc hệ rễ? Trong hệ chồi, đâu là cơ quan sinh dưỡng, đâu là cơ quan sinh sản?',
      steps: [
        'Hệ rễ nằm dưới mặt đất: rễ.',
        'Hệ chồi nằm trên mặt đất: thân, lá, hoa, quả, hạt.',
        'Thân và lá nuôi dưỡng cây nên là cơ quan sinh dưỡng; hoa, quả, hạt giúp cây sinh sản nên là cơ quan sinh sản.',
      ],
      answer:
        'Hệ rễ: rễ. Hệ chồi: thân, lá (cơ quan sinh dưỡng) và hoa, quả, hạt (cơ quan sinh sản).',
    },
    {
      problem: 'Vì sao nói dạ dày là một cơ quan, còn mô cơ trong thành dạ dày chỉ là một mô?',
      steps: [
        'Mô cơ chỉ gồm các tế bào cơ giống nhau, cùng làm một việc là co rút.',
        'Dạ dày gồm nhiều mô khác nhau: mô cơ co bóp, mô biểu bì tiết dịch vị, mô thần kinh... cùng phối hợp để tiêu hoá thức ăn.',
      ],
      answer:
        'Mô cơ là tập hợp các tế bào giống nhau; dạ dày được tạo thành từ nhiều mô khác nhau cùng thực hiện một hoạt động sống, nên dạ dày là cơ quan.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các cấp độ tổ chức của cơ thể đa bào theo thứ tự từ thấp đến cao.',
      items: ['Cơ quan', 'Tế bào', 'Cơ thể', 'Mô', 'Hệ cơ quan'],
      answer: [1, 3, 0, 4, 2],
      hints: [
        'Cấp thấp nhất là đơn vị cơ bản của sự sống.',
        'Nhiều tế bào giống nhau tạo thành gì?',
      ],
      solution: 'Tế bào → mô → cơ quan → hệ cơ quan → cơ thể.',
    },
    {
      type: 'choice',
      prompt: 'Mô là',
      options: [
        'tập hợp nhiều cơ quan cùng thực hiện một chức năng',
        'tập hợp một nhóm tế bào giống nhau cùng thực hiện một chức năng nhất định',
        'một tế bào có kích thước lớn',
        'tập hợp nhiều hệ cơ quan',
      ],
      answer: 1,
      hints: ['Mô là cấp ngay trên tế bào.'],
      solution:
        'Mô là tập hợp một nhóm tế bào giống nhau cùng thực hiện một chức năng nhất định, ví dụ mô cơ, mô biểu bì, mô dẫn.',
    },
    {
      type: 'choice',
      prompt: 'Hệ chồi của cây gồm những cơ quan nào?',
      options: [
        'Rễ, thân, lá',
        'Thân, lá, hoa, quả, hạt',
        'Chỉ có hoa và quả',
        'Rễ chính và rễ con',
      ],
      answer: 1,
      hints: ['Hệ chồi là phần cây nằm trên mặt đất.'],
      solution:
        'Hệ chồi gồm cơ quan sinh dưỡng (thân, lá) và cơ quan sinh sản (hoa, quả, hạt). Rễ thuộc hệ rễ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hệ cơ quan ở người với chức năng của nó.',
      left: ['Hệ tiêu hoá', 'Hệ tuần hoàn', 'Hệ hô hấp', 'Hệ bài tiết', 'Hệ thần kinh'],
      right: [
        'Lấy khí oxygen, thải khí carbon dioxide',
        'Biến đổi thức ăn thành chất dinh dưỡng',
        'Lọc máu, thải nước tiểu',
        'Vận chuyển các chất trong cơ thể',
        'Điều khiển, phối hợp hoạt động của các cơ quan',
        'Nâng đỡ và giúp cơ thể cử động',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
        [4, 4],
      ],
      hints: [
        'Có một chức năng thừa: đó là chức năng của hệ vận động.',
        'Tim và mạch máu vận chuyển máu; thận lọc máu.',
      ],
      solution:
        'Tiêu hoá: biến đổi thức ăn. Tuần hoàn: vận chuyển các chất. Hô hấp: trao đổi khí. Bài tiết: lọc máu, thải nước tiểu. Thần kinh: điều khiển, phối hợp. "Nâng đỡ, cử động" là của hệ vận động.',
    },
    {
      type: 'choice',
      prompt: 'Trong các bộ phận sau, đâu là một cơ quan?',
      options: ['Tế bào thần kinh', 'Mô cơ', 'Lá cây', 'Hệ rễ'],
      answer: 2,
      hints: ['Cơ quan được tạo nên từ nhiều mô khác nhau.'],
      solution:
        'Lá cây gồm mô biểu bì, mô mềm, mô dẫn nên là cơ quan. Tế bào thần kinh là tế bào, mô cơ là mô, hệ rễ là hệ cơ quan.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các cơ quan thuộc hệ tiêu hoá.',
      options: ['Dạ dày', 'Tim', 'Ruột non', 'Phổi', 'Gan', 'Thận'],
      answers: [0, 2, 4],
      hints: [
        'Hệ tiêu hoá gồm ống tiêu hoá (miệng, thực quản, dạ dày, ruột) và các tuyến tiêu hoá.',
      ],
      solution:
        'Dạ dày, ruột non và gan thuộc hệ tiêu hoá. Tim thuộc hệ tuần hoàn, phổi thuộc hệ hô hấp, thận thuộc hệ bài tiết.',
    },
    {
      type: 'text',
      prompt:
        'Hệ cơ quan nằm dưới mặt đất của cây, giúp cây đứng vững và hút nước, muối khoáng, có tên là gì?',
      accept: ['hệ rễ', 'he re', 'rễ'],
      hints: ['Cây có hai hệ cơ quan: một hệ trên mặt đất và một hệ dưới mặt đất.'],
      solution: 'Đó là hệ rễ, gồm rễ chính và rễ con.',
    },
    {
      type: 'choice',
      prompt: 'Khi chạy nhanh, em thở gấp và tim đập nhanh hơn. Điều này cho thấy',
      options: [
        'mỗi hệ cơ quan hoạt động riêng rẽ, không liên quan đến nhau',
        'chỉ hệ vận động hoạt động khi chạy',
        'các hệ cơ quan phối hợp với nhau để cơ thể hoạt động',
        'hệ hô hấp và hệ tuần hoàn bị tổn thương',
      ],
      answer: 2,
      hints: ['Cơ khi vận động cần thêm oxygen; ai đưa oxygen tới cơ?'],
      solution:
        'Hệ vận động hoạt động mạnh cần nhiều oxygen: hệ hô hấp lấy thêm oxygen, hệ tuần hoàn đưa oxygen tới cơ, hệ thần kinh điều khiển. Các hệ cơ quan phối hợp với nhau.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các cấp tổ chức của cây theo thứ tự từ thấp đến cao.',
      items: ['Lá', 'Cây cải', 'Tế bào thịt lá', 'Hệ chồi', 'Mô mềm (thịt lá)'],
      answer: [2, 4, 0, 3, 1],
      hints: ['Tìm tế bào trước, rồi mô chứa nó, rồi cơ quan.'],
      solution: 'Tế bào thịt lá → mô mềm (thịt lá) → lá → hệ chồi → cây cải.',
    },
  ],
  takeaways: [
    'Các cấp độ tổ chức của cơ thể đa bào: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.',
    'Mô là tập hợp các tế bào giống nhau cùng thực hiện một chức năng; cơ quan gồm nhiều mô; hệ cơ quan gồm nhiều cơ quan cùng thực hiện một chức năng.',
    'Thực vật có hệ chồi (thân, lá, hoa, quả, hạt) và hệ rễ.',
    'Cơ thể người có các hệ cơ quan như tiêu hoá, tuần hoàn, hô hấp, thần kinh, bài tiết, vận động; các hệ phối hợp với nhau tạo thành cơ thể thống nhất.',
  ],
};

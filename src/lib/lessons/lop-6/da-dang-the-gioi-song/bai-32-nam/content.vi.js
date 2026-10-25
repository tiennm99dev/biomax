/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nấm là sinh vật nhân thực, đơn bào hoặc đa bào, sống dị dưỡng, sinh sản bằng bào tử; nấm rất đa dạng, nhiều loài có lợi làm thực phẩm, dược liệu, phân giải chất hữu cơ, nhưng có loài gây ngộ độc, làm hỏng thực phẩm và gây bệnh.',
  intro:
    'Sau vài ngày mưa, trên gốc cây mục, bãi cỏ hay đống rơm mọc lên những chiếc "ô" xinh xắn. Có loài là món ăn ngon và bổ, có loài chỉ một chiếc cũng đủ gây chết người. Mẩu bánh mì để lâu bị phủ lớp mốc xanh, mốc đen cũng là nấm. Vậy nấm là gì và làm sao tránh được nấm độc?',
  objectives: [
    'Nêu được đặc điểm của nấm; nhận biết được sự đa dạng của nấm (nấm đơn bào, nấm đa bào, nấm túi, nấm đảm, nấm tiếp hợp).',
    'Nêu được cấu tạo của nấm mũ: mũ nấm, phiến nấm, cuống nấm, sợi nấm.',
    'Nêu được vai trò và tác hại của nấm; một số bệnh do nấm và cách phòng tránh.',
    'Biết các dấu hiệu cảnh báo nấm độc và hiểu vì sao không được ăn nấm lạ.',
  ],
  sections: [
    {
      heading: 'Đa dạng nấm',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nấm',
          text: 'Nấm là những sinh vật nhân thực, có thể đơn bào (như nấm men) hoặc đa bào (như nấm rơm, nấm mốc). Tế bào nấm có thành tế bào nhưng không có lục lạp, nên nấm không tự tổng hợp được chất hữu cơ mà sống dị dưỡng: hoại sinh (lấy chất hữu cơ từ xác sinh vật, rơm rạ, gỗ mục), kí sinh (trên cơ thể sinh vật khác) hoặc cộng sinh. Nấm sinh sản chủ yếu bằng bào tử.',
        },
        {
          type: 'p',
          text: 'Nấm sống ở nhiều nơi: đất ẩm, rơm rạ, gỗ mục, thức ăn, hoa quả, trên da người và động vật. Nấm đa bào có cơ thể là hệ sợi nấm. Ở nấm mũ, phần ta nhìn thấy trên mặt đất (quả thể) gồm mũ nấm, phiến nấm ở mặt dưới mũ (nơi tạo bào tử) và cuống nấm; bên dưới là hệ sợi nấm ăn sâu vào đất hoặc giá thể.',
        },
        {
          type: 'table',
          caption: 'Phân loại nấm dựa vào cơ quan sinh sản (nơi tạo bào tử)',
          head: ['Nhóm', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Nấm đảm',
              'Bào tử được tạo ra trên đảm (thường nằm ở phiến nấm mặt dưới mũ)',
              'Nấm rơm, nấm hương, nấm sò, nấm mỡ, nấm linh chi, mộc nhĩ',
            ],
            [
              'Nấm túi',
              'Bào tử được tạo ra trong túi',
              'Nấm men, nấm bụng dê, nấm mốc xanh, đông trùng hạ thảo',
            ],
            [
              'Nấm tiếp hợp',
              'Sợi nấm phát triển nhanh, bào tử nằm trong túi bào tử ở đầu cuống',
              'Mốc đen bánh mì, mốc trắng trên cơm',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Vai trò và tác hại của nấm',
      blocks: [
        {
          type: 'list',
          items: [
            'Trong tự nhiên: nấm phân hủy xác sinh vật, rơm rạ, gỗ mục thành chất đơn giản trả lại cho đất, làm sạch môi trường; một số nấm cộng sinh với rễ cây giúp cây hút nước và chất khoáng.',
            'Làm thực phẩm: nấm rơm, nấm hương, nấm sò, nấm mỡ, nấm kim châm, mộc nhĩ.',
            'Làm dược liệu: nấm linh chi, đông trùng hạ thảo; nấm mốc xanh dùng để sản xuất thuốc kháng sinh penicillin.',
            'Chế biến thực phẩm: nấm men dùng làm bánh mì, nấu rượu, làm bia; nấm mốc dùng làm tương.',
          ],
        },
        {
          type: 'p',
          text: 'Tác hại: một số nấm chứa chất độc, ăn phải gây ngộ độc, thậm chí tử vong; nấm mốc làm hỏng thực phẩm, quần áo, đồ dùng bằng da, gỗ. Lạc, ngô bị mốc có thể chứa chất độc aflatoxin gây ung thư gan, nên không được ăn.',
        },
        {
          type: 'table',
          caption: 'Một số bệnh do nấm gây ra',
          head: ['Đối tượng', 'Bệnh', 'Biểu hiện'],
          rows: [
            ['Người', 'Hắc lào', 'Vết đỏ hình tròn, có viền, rất ngứa'],
            ['Người', 'Lang ben', 'Vết loang màu trắng hoặc nâu trên da'],
            ['Người', 'Nấm lưỡi (tưa miệng)', 'Mảng trắng trên lưỡi, trong miệng'],
            ['Động vật', 'Nấm da ở chó, mèo', 'Da nhăn, dày, rụng lông từng đám'],
            [
              'Thực vật',
              'Đạo ôn lúa, gỉ sắt, phấn trắng',
              'Lá có vết bệnh, cây yếu, giảm năng suất',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Giữ vệ sinh cơ thể, tắm rửa thường xuyên, giữ da và quần áo khô ráo; phơi quần áo dưới nắng.',
            'Không dùng chung quần áo, khăn, mũ, lược với người bệnh; hạn chế tiếp xúc với vật nuôi bị nấm da.',
            'Không ăn thực phẩm đã bị mốc; bảo quản thực phẩm nơi khô ráo.',
            'Khi bị bệnh, đi khám và dùng thuốc kháng nấm theo chỉ dẫn của bác sĩ.',
          ],
        },
      ],
    },
    {
      heading: 'Nấm độc',
      blocks: [
        {
          type: 'p',
          text: 'Nhiều loài nấm độc mọc hoang trông rất giống nấm ăn được. Một số dấu hiệu khiến ta nghi ngờ nấm độc: màu sắc sặc sỡ; có vòng ở cuống nấm và bao gốc hình chén ở chân; phiến nấm màu lạ (xanh lục); mùi hắc khó chịu; vết cắt tiết chất trắng như sữa hoặc đổi màu.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Không có dấu hiệu nào chắc chắn',
          text: 'Nấm độc tán trắng có màu trắng, không sặc sỡ nhưng có thể gây tử vong; nấm rơm có bao gốc vẫn ăn được. Vì vậy tuyệt đối không hái, không ăn nấm mọc hoang, nấm lạ. Chỉ ăn nấm trồng, biết rõ loài và nguồn gốc. Khi nghi bị ngộ độc nấm (nôn, đau bụng, tiêu chảy sau khi ăn nấm), phải đưa ngay đến cơ sở y tế và mang theo mẫu nấm.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy quan sát mũ, phiến, vòng và gốc của từng mẫu nấm, đọc nơi tìm thấy mẫu, rồi quyết định có ăn được không.',
        },
      ],
    },
  ],
  explore: {
    title: 'Nhận diện nấm ăn được và nấm độc',
    instruction:
      'Đọc nơi tìm thấy mẫu nấm. Bấm vào 4 số trên hình để quan sát mũ nấm, phiến nấm, cuống và vòng, gốc nấm. Sau đó chọn "Nấm ăn được" hoặc "Không được ăn" và đọc giải thích. Có 7 mẫu.',
  },
  examples: [
    {
      problem:
        'Nam nói: "Nấm nào trắng, không sặc sỡ thì ăn được." Em hãy nhận xét ý kiến của Nam.',
      steps: [
        'Màu sặc sỡ chỉ là một dấu hiệu khiến ta nghi ngờ nấm độc; không có màu sặc sỡ chưa chứng minh nấm an toàn.',
        'Nấm độc tán trắng có màu trắng tinh nhưng chứa chất độc rất mạnh, có thể gây tử vong.',
        'Muốn an toàn, chỉ ăn nấm trồng, biết rõ loài và nguồn gốc.',
      ],
      answer: 'Ý kiến của Nam sai và rất nguy hiểm: có nấm trắng là nấm cực độc.',
    },
    {
      problem:
        'Vì sao nấm không được xếp vào giới Thực vật dù nhiều loài nấm sống cố định như cây?',
      steps: [
        'Thực vật có lục lạp, tự tổng hợp chất hữu cơ nhờ quang hợp.',
        'Nấm không có lục lạp, phải lấy chất hữu cơ có sẵn (sống dị dưỡng: hoại sinh, kí sinh, cộng sinh).',
        'Nấm sinh sản chủ yếu bằng bào tử, cơ thể nấm đa bào là hệ sợi nấm.',
      ],
      answer: 'Vì nấm không có lục lạp, sống dị dưỡng, nên được xếp vào một giới riêng: giới Nấm.',
    },
    {
      problem:
        'Bạn Hoa bị hắc lào. Em hãy nêu nguyên nhân và những việc Hoa nên làm để chữa bệnh và không lây cho người khác.',
      steps: [
        'Hắc lào là bệnh ngoài da do nấm, lây khi tiếp xúc trực tiếp với da người bệnh hoặc dùng chung đồ cá nhân.',
        'Hoa cần đi khám và dùng thuốc kháng nấm theo chỉ dẫn của bác sĩ, dùng đủ thời gian.',
        'Giữ da khô ráo, tắm rửa sạch, phơi quần áo dưới nắng; không dùng chung khăn, quần áo với người khác.',
      ],
      answer:
        'Bệnh do nấm gây ra; Hoa cần chữa bằng thuốc kháng nấm theo chỉ dẫn bác sĩ, giữ vệ sinh và không dùng chung đồ cá nhân.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm đúng của nấm.',
      options: [
        'Tế bào nhân thực',
        'Có lục lạp, tự quang hợp',
        'Sống dị dưỡng: hoại sinh, kí sinh hoặc cộng sinh',
        'Có loài đơn bào, có loài đa bào',
        'Sinh sản chủ yếu bằng bào tử',
      ],
      answers: [0, 2, 3, 4],
      hints: ['Nấm có tự tổng hợp được chất hữu cơ không?'],
      solution:
        'Nấm là sinh vật nhân thực, đơn bào hoặc đa bào, sống dị dưỡng và sinh sản bằng bào tử. Nấm không có lục lạp.',
    },
    {
      type: 'choice',
      prompt: 'Loài nấm nào sau đây là nấm đơn bào?',
      options: ['Nấm rơm', 'Nấm men', 'Nấm linh chi', 'Mốc đen bánh mì'],
      answer: 1,
      hints: ['Loài nấm dùng để làm bánh mì, nấu rượu.'],
      solution: 'Nấm men là nấm đơn bào. Nấm rơm, nấm linh chi, mốc đen bánh mì đều là nấm đa bào.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loài nấm với nhóm của nó.',
      left: ['Nấm rơm', 'Nấm men', 'Mốc đen bánh mì'],
      right: ['Nấm túi', 'Nấm đảm', 'Nấm tiếp hợp'],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 2],
      ],
      hints: ['Các loài nấm mũ ăn được thường là nấm đảm.'],
      solution: 'Nấm rơm là nấm đảm, nấm men là nấm túi, mốc đen bánh mì là nấm tiếp hợp.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các phần của nấm mũ theo thứ tự từ trên xuống dưới.',
      items: ['Cuống nấm', 'Mũ nấm', 'Sợi nấm (trong đất)', 'Phiến nấm'],
      answer: [1, 3, 0, 2],
      hints: ['Phiến nấm nằm ở mặt dưới của mũ nấm.'],
      solution: 'Từ trên xuống: mũ nấm, phiến nấm (mặt dưới mũ), cuống nấm, sợi nấm trong đất.',
    },
    {
      type: 'choice',
      prompt: 'Bào tử của nấm mũ được tạo ra ở bộ phận nào?',
      options: ['Mũ nấm', 'Phiến nấm', 'Cuống nấm', 'Sợi nấm trong đất'],
      answer: 1,
      hints: ['Lật mũ nấm lên, mặt dưới có những lá mỏng xếp tỏa tròn.'],
      solution: 'Bào tử được tạo ra ở phiến nấm, những lá mỏng xếp tỏa tròn ở mặt dưới mũ nấm.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò có ích của nấm.',
      options: [
        'Nấm men làm bánh mì, nấu rượu',
        'Nấm mốc xanh sản xuất penicillin',
        'Gây bệnh hắc lào',
        'Phân hủy xác sinh vật, gỗ mục',
        'Làm mốc lạc, ngô',
      ],
      answers: [0, 1, 3],
      hints: ['Hai ý là tác hại của nấm.'],
      solution:
        'Có ích: nấm men làm bánh mì, nấu rượu; nấm mốc xanh sản xuất penicillin; nấm phân hủy xác sinh vật. Gây hắc lào và làm mốc lạc, ngô là tác hại.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không được ăn lạc, ngô đã bị mốc?',
      options: [
        'Vì đã hết chất dinh dưỡng',
        'Vì nấm mốc có thể tạo chất độc aflatoxin gây ung thư gan',
        'Vì sẽ bị lây bệnh hắc lào',
        'Vì nấm mốc làm lạc, ngô bị đắng',
      ],
      answer: 1,
      hints: ['Chất độc do nấm mốc tạo ra rất bền, đun nấu không hết.'],
      solution:
        'Một số nấm mốc trên lạc, ngô tạo chất độc aflatoxin, có thể gây ung thư gan; nấu chín cũng không phá hủy hết, nên phải bỏ đi.',
    },
    {
      type: 'choice',
      prompt: 'Cách làm nào an toàn nhất để tránh ngộ độc nấm?',
      options: [
        'Chỉ ăn nấm màu trắng',
        'Chỉ ăn nấm không có vòng ở cuống',
        'Chỉ ăn nấm trồng, biết rõ loài và nguồn gốc',
        'Nấu thật kĩ nấm hái trong rừng',
      ],
      answer: 2,
      hints: ['Ở phần khám phá, các quy tắc chỉ dựa vào một đặc điểm đều có ngoại lệ.'],
      solution:
        'Nấm độc tán trắng có màu trắng, nấm ô tán trắng phiến xanh không có bao gốc, và nhiều chất độc trong nấm không bị phá hủy khi nấu. Chỉ ăn nấm trồng, biết rõ loài và nguồn gốc.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp phòng bệnh do nấm ở người.',
      options: [
        'Giữ da và quần áo khô ráo, phơi quần áo dưới nắng',
        'Dùng chung khăn tắm với người bị lang ben',
        'Tắm rửa thường xuyên, giữ vệ sinh cơ thể',
        'Không dùng chung lược, mũ với người bệnh',
      ],
      answers: [0, 2, 3],
      hints: ['Bệnh nấm da lây qua tiếp xúc và đồ dùng cá nhân.'],
      solution:
        'Giữ khô ráo, vệ sinh cơ thể và không dùng chung đồ cá nhân giúp phòng bệnh nấm; dùng chung khăn với người bệnh làm lây bệnh.',
    },
    {
      type: 'text',
      prompt: 'Cơ thể của nấm đa bào được cấu tạo từ hệ ... nấm. (Điền một từ)',
      accept: ['sợi', 'sợi nấm', 'hệ sợi nấm'],
      hints: ['Lớp mốc trắng như bông trên cơm nguội gồm nhiều cấu trúc mảnh, dài.'],
      solution: 'Cơ thể nấm đa bào là hệ sợi nấm.',
    },
  ],
  takeaways: [
    'Nấm là sinh vật nhân thực, đơn bào (nấm men) hoặc đa bào (hệ sợi nấm), không có lục lạp, sống dị dưỡng, sinh sản bằng bào tử.',
    'Dựa vào cơ quan sinh sản, nấm gồm nấm đảm (nấm rơm, nấm hương), nấm túi (nấm men, nấm mốc xanh), nấm tiếp hợp (mốc đen bánh mì).',
    'Nấm mũ gồm mũ nấm, phiến nấm (tạo bào tử), cuống nấm và sợi nấm.',
    'Có lợi: phân hủy chất hữu cơ, thực phẩm, dược liệu, kháng sinh, làm bánh mì, rượu; có hại: nấm độc, làm hỏng thực phẩm, gây bệnh hắc lào, lang ben, bệnh cây.',
    'Không hái, không ăn nấm lạ, nấm mọc hoang: chỉ ăn nấm trồng biết rõ nguồn gốc.',
  ],
};

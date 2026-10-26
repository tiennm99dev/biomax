/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sinh sản là quá trình tạo ra cá thể mới, bảo đảm sự phát triển liên tục của loài; sinh sản vô tính không có sự kết hợp giữa giao tử đực và giao tử cái, gồm sinh sản sinh dưỡng ở thực vật, phân đôi, nảy chồi, phân mảnh, trinh sản ở động vật; ứng dụng giâm cành, chiết cành, ghép cây, nuôi cấy mô.',
  intro:
    'Những "nhành cây" rực rỡ dưới đáy biển thật ra là các tập đoàn san hô, mỗi tập đoàn gồm hàng nghìn cá thể dính liền nhau. Một củ khoai tây để lâu ngày mọc mầm, trồng xuống lại thành cây khoai tây mới. Các cá thể mới ấy được tạo ra như thế nào khi không hề có sự kết hợp giữa con đực và con cái?',
  objectives: [
    'Phát biểu được khái niệm sinh sản và khái niệm sinh sản vô tính ở sinh vật.',
    'Phân biệt được các hình thức sinh sản sinh dưỡng ở thực vật và các hình thức sinh sản vô tính ở động vật (phân đôi, nảy chồi, phân mảnh, trinh sản); lấy được ví dụ.',
    'Trình bày được các ứng dụng của sinh sản vô tính vào thực tiễn: giâm cành, chiết cành, ghép cây, nuôi cấy mô; nêu được ưu điểm của từng phương pháp.',
  ],
  sections: [
    {
      heading: 'Khái niệm sinh sản và sinh sản vô tính',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh sản',
          text: 'Sinh sản là quá trình tạo ra những cá thể mới, bảo đảm sự phát triển liên tục của loài. Ví dụ: cây chuối mẹ mọc ra các cây chuối con; mèo mẹ đẻ ra mèo con.',
        },
        {
          type: 'p',
          text: 'Sinh vật có hai hình thức sinh sản: sinh sản vô tính và sinh sản hữu tính.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh sản vô tính',
          text: 'Sinh sản vô tính là hình thức sinh sản không có sự kết hợp giữa giao tử đực và giao tử cái; cơ thể con được hình thành từ một phần của cơ thể mẹ và mang các đặc điểm giống cơ thể mẹ.',
        },
        {
          type: 'list',
          items: [
            'Chỉ cần một cơ thể ban đầu, không cần con đực và con cái.',
            'Các cơ thể con giống nhau và giống cơ thể mẹ.',
            'Tạo ra nhiều cá thể con trong thời gian ngắn.',
            'Hạn chế: các cá thể con giống hệt nhau nên khi môi trường thay đổi (dịch bệnh, thời tiết bất lợi), cả loạt cá thể có thể cùng bị chết.',
          ],
        },
      ],
    },
    {
      heading: 'Sinh sản vô tính ở thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Ở thực vật, hình thức sinh sản vô tính phổ biến là sinh sản sinh dưỡng: cây mới được tạo thành từ cơ quan sinh dưỡng (rễ, thân, lá) của cây mẹ.',
        },
        {
          type: 'table',
          caption: 'Sinh sản sinh dưỡng ở một số cây',
          head: ['Cơ quan sinh dưỡng', 'Ví dụ'],
          rows: [
            ['Rễ (rễ củ)', 'Khoai lang, thược dược'],
            ['Thân (thân củ, thân rễ, thân bò)', 'Khoai tây, gừng, nghệ, cỏ gấu, dâu tây, rau má'],
            ['Lá', 'Lá bỏng, thu hải đường, sen đá'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Lá bỏng',
          text: 'Khi lá bỏng rơi xuống đất ẩm, ở các chỗ lõm trên mép lá mọc ra các chồi; mỗi chồi ra rễ, ra lá và phát triển thành một cây mới.',
        },
      ],
    },
    {
      heading: 'Sinh sản vô tính ở động vật',
      blocks: [
        {
          type: 'table',
          caption: 'Các hình thức sinh sản vô tính ở động vật',
          head: ['Hình thức', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Phân đôi',
              'Cơ thể mẹ tự chia làm hai phần, mỗi phần thành một cá thể mới',
              'Trùng roi, trùng biến hình, trùng giày',
            ],
            [
              'Nảy chồi',
              'Trên cơ thể mẹ mọc ra chồi; chồi lớn lên rồi tách ra sống độc lập hoặc dính với mẹ thành tập đoàn',
              'Thuỷ tức, san hô',
            ],
            [
              'Phân mảnh',
              'Cơ thể mẹ đứt thành nhiều mảnh, mỗi mảnh phát triển thành một cá thể mới',
              'Giun dẹp, sao biển',
            ],
            [
              'Trinh sản',
              'Trứng không qua thụ tinh vẫn phát triển thành cá thể mới',
              'Ong (trứng không thụ tinh nở thành ong đực), kiến, rệp',
            ],
          ],
        },
        { type: 'p', text: 'Thử xếp các ví dụ dưới đây vào đúng hình thức sinh sản vô tính.' },
        { type: 'widget', name: 'vi-du' },
      ],
    },
    {
      heading: 'Ứng dụng sinh sản vô tính vào thực tiễn',
      blocks: [
        {
          type: 'p',
          text: 'Dựa vào khả năng sinh sản sinh dưỡng của thực vật, con người nhân giống cây trồng bằng các phương pháp nhân giống vô tính. Cây con giữ nguyên các đặc tính tốt của cây mẹ, cho thu hoạch sớm.',
        },
        {
          type: 'table',
          caption: 'Các phương pháp nhân giống vô tính ở thực vật',
          head: ['Phương pháp', 'Cách tiến hành', 'Ưu điểm', 'Ví dụ'],
          rows: [
            [
              'Giâm cành',
              'Cắt một đoạn cành (thân) có đủ mắt, chồi rồi cắm xuống đất ẩm cho ra rễ, phát triển thành cây mới',
              'Đơn giản, nhanh, giữ được đặc tính của cây mẹ',
              'Sắn, mía, rau muống, hoa hồng',
            ],
            [
              'Chiết cành',
              'Khoanh bỏ một khoanh vỏ trên cành, bó đất ẩm để cành ra rễ ngay trên cây mẹ, rồi cắt cành đem trồng',
              'Cây con có rễ sẵn, tỉ lệ sống cao, sớm ra hoa, kết quả, giữ đặc tính của cây mẹ',
              'Bưởi, cam, chanh, vải, nhãn',
            ],
            [
              'Ghép cây',
              'Gắn mắt ghép hoặc cành ghép của cây này lên gốc ghép của cây khác để chúng liền lại thành một cây',
              'Kết hợp đặc tính tốt của cả cành ghép và gốc ghép, cây sớm cho quả',
              'Ghép bưởi lên gốc bưởi, thanh long lên gốc xương rồng ba cạnh',
            ],
            [
              'Nuôi cấy mô',
              'Lấy một mẩu mô của cây nuôi trong môi trường dinh dưỡng thích hợp, điều kiện vô trùng để tạo ra cây con',
              'Tạo ra số lượng lớn cây con sạch bệnh trong thời gian ngắn, giữ đặc tính tốt của cây mẹ',
              'Hoa lan, chuối, khoai tây, mía',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Vì sao cành giâm phải có đủ mắt, chồi?',
          text: 'Mắt, chồi chứa mô phân sinh, nơi các tế bào phân chia để cành ra lá, ra chồi mới. Cành không có mắt, chồi thì khó phát triển thành cây.',
        },
        { type: 'p', text: 'Xếp mỗi cách làm vào đúng phương pháp nhân giống.' },
        { type: 'widget', name: 'nhan-giong' },
      ],
    },
  ],
  explore: {
    title: 'Xem các hình thức sinh sản vô tính',
    instruction:
      'Chọn một hình thức sinh sản vô tính, rồi bấm "Bước tiếp" (hoặc "Tự chạy") để xem cá thể mới được tạo ra từ cơ thể mẹ như thế nào. Để ý: không có bước nào cần giao tử đực kết hợp với giao tử cái.',
  },
  examples: [
    {
      problem:
        'Củ khoai tây để lâu ngày mọc mầm ở các mắt củ. Đem trồng xuống đất, mỗi mầm phát triển thành một cây khoai tây mới. Đây là hình thức sinh sản gì? Giải thích.',
      steps: [
        'Cây mới không được tạo ra từ hạt, tức là không có sự kết hợp của giao tử đực và giao tử cái. Vậy đây là sinh sản vô tính.',
        'Củ khoai tây là thân củ, một cơ quan sinh dưỡng của cây (không phải hoa, quả, hạt).',
        'Cây mới được tạo thành từ cơ quan sinh dưỡng của cây mẹ nên đây là sinh sản sinh dưỡng.',
      ],
      answer: 'Sinh sản sinh dưỡng (một hình thức sinh sản vô tính) bằng thân củ.',
    },
    {
      problem:
        'Một nhà vườn có một cây bưởi cho quả rất ngon và muốn nhanh chóng có nhiều cây con cho quả giống hệt cây đó. Nên chọn trồng từ hạt hay chiết cành? Vì sao?',
      steps: [
        'Cây mọc từ hạt là kết quả của sinh sản hữu tính, có thể mang đặc điểm khác cây mẹ, và lâu ra quả.',
        'Chiết cành là nhân giống vô tính: cành chiết giữ nguyên đặc tính của cây mẹ.',
        'Cành chiết đã có rễ sẵn khi trồng nên tỉ lệ sống cao và sớm cho quả.',
      ],
      answer:
        'Nên chiết cành, vì cây con giữ được đặc tính quả ngon của cây mẹ, tỉ lệ sống cao và sớm cho thu hoạch.',
    },
    {
      problem:
        'Người nông dân trồng cả một cánh đồng chuối từ cây con của cùng một cây mẹ. Khi một loại bệnh mới xuất hiện, cả cánh đồng cùng bị nhiễm bệnh nặng. Hãy giải thích.',
      steps: [
        'Các cây chuối con được tạo ra bằng sinh sản vô tính nên giống hệt nhau và giống cây mẹ.',
        'Nếu cây mẹ không chống được bệnh mới thì mọi cây con cũng không chống được.',
      ],
      answer:
        'Vì các cá thể tạo ra bằng sinh sản vô tính giống hệt nhau, khi môi trường thay đổi (xuất hiện bệnh mới) chúng có thể cùng bị hại: đó là hạn chế của sinh sản vô tính.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Sinh sản vô tính là hình thức sinh sản',
      options: [
        'có sự kết hợp giữa giao tử đực và giao tử cái',
        'không có sự kết hợp giữa giao tử đực và giao tử cái, con giống cơ thể mẹ',
        'chỉ có ở thực vật, không có ở động vật',
        'luôn tạo ra con mang đặc điểm của cả bố và mẹ',
      ],
      answer: 1,
      hints: ['"Vô tính" nghĩa là không có sự tham gia của giao tử đực và giao tử cái.'],
      solution:
        'Sinh sản vô tính không có sự kết hợp giữa giao tử đực và giao tử cái; con được tạo ra từ một phần cơ thể mẹ và giống cơ thể mẹ. Hình thức này có ở cả thực vật và động vật.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sinh vật với hình thức sinh sản vô tính của nó.',
      left: ['Trùng roi', 'Thuỷ tức', 'Sao biển', 'Trứng không thụ tinh của ong chúa'],
      right: ['Nảy chồi', 'Trinh sản', 'Phân đôi', 'Phân mảnh', 'Sinh sản sinh dưỡng'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Cơ thể chia đôi, mọc chồi, đứt thành mảnh hay trứng tự phát triển?'],
      solution:
        'Trùng roi: phân đôi; thuỷ tức: nảy chồi; sao biển: phân mảnh; trứng không thụ tinh của ong chúa nở thành ong đực: trinh sản.',
    },
    {
      type: 'multi',
      prompt: 'Những cây nào dưới đây có thể sinh sản sinh dưỡng bằng thân?',
      options: ['Khoai tây', 'Lá bỏng', 'Gừng', 'Cỏ gấu', 'Khoai lang'],
      answers: [0, 2, 3],
      hints: ['Củ khoai tây là thân củ, củ gừng là thân rễ. Còn củ khoai lang là rễ hay thân?'],
      solution:
        'Khoai tây (thân củ), gừng (thân rễ), cỏ gấu (thân rễ) sinh sản bằng thân. Lá bỏng sinh sản bằng lá, khoai lang sinh sản bằng rễ củ.',
    },
    {
      type: 'choice',
      prompt:
        'Phương pháp nhân giống nào tạo ra được số lượng lớn cây con sạch bệnh trong thời gian ngắn nhất?',
      options: ['Giâm cành', 'Chiết cành', 'Ghép cây', 'Nuôi cấy mô'],
      answer: 3,
      hints: ['Phương pháp này thực hiện trong phòng thí nghiệm, điều kiện vô trùng.'],
      solution:
        'Nuôi cấy mô: từ một mẩu mô nhỏ, trong môi trường dinh dưỡng và điều kiện vô trùng, có thể tạo ra hàng nghìn cây con sạch bệnh trong thời gian ngắn.',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau cơ bản giữa chiết cành và giâm cành là',
      options: [
        'cành chiết ra rễ khi còn trên cây mẹ, cành giâm được cắt rời rồi mới ra rễ',
        'chiết cành là sinh sản hữu tính, giâm cành là sinh sản vô tính',
        'cành giâm giữ đặc tính cây mẹ, cành chiết thì không',
        'chiết cành dùng lá, giâm cành dùng rễ',
      ],
      answer: 0,
      hints: ['Hỏi: cành ra rễ ở đâu, trước hay sau khi tách khỏi cây mẹ?'],
      solution:
        'Khi chiết, cành được bó đất ẩm và ra rễ ngay trên cây mẹ, sau đó mới cắt đem trồng. Khi giâm, đoạn cành được cắt rời rồi cắm xuống đất mới ra rễ. Cả hai đều là nhân giống vô tính, giữ đặc tính cây mẹ.',
    },
    {
      type: 'text',
      prompt:
        'Gắn mắt của cây này lên gốc của một cây khác để chúng liền lại thành một cây. Phương pháp nhân giống đó gọi là gì?',
      accept: ['ghép', 'ghép cây', 'ghép mắt', 'ghép cành'],
      hints: ['Phương pháp này kết hợp hai cây: phần gốc và phần mắt (hoặc cành).'],
      solution:
        'Đó là ghép cây (ghép mắt). Cây ghép kết hợp được đặc tính tốt của gốc ghép và mắt ghép.',
    },
    {
      type: 'multi',
      prompt: 'Những nhận xét nào đúng về sinh sản vô tính?',
      options: [
        'Các cá thể con giống nhau và giống cơ thể mẹ',
        'Tạo được nhiều cá thể trong thời gian ngắn',
        'Cần có cả con đực và con cái',
        'Khi môi trường thay đổi, các cá thể con có thể cùng bị chết hàng loạt',
      ],
      answers: [0, 1, 3],
      hints: ['Nghĩ đến cả ưu điểm và hạn chế của việc con giống hệt mẹ.'],
      solution:
        'Sinh sản vô tính chỉ cần một cơ thể mẹ, tạo nhiều con giống nhau trong thời gian ngắn; vì các con giống hệt nhau nên khi môi trường thay đổi chúng dễ cùng bị chết.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao đoạn cành đem giâm phải có đủ mắt, chồi?',
      options: [
        'Vì mắt, chồi có mô phân sinh, giúp cành ra lá, ra chồi mới',
        'Vì mắt, chồi giúp cành hút nước nhanh hơn rễ',
        'Vì mắt, chồi chứa hạt phấn',
        'Vì mắt, chồi làm cho cành không bị khô',
      ],
      answer: 0,
      hints: ['Mô phân sinh là nơi các tế bào phân chia tạo ra bộ phận mới.'],
      solution:
        'Mắt, chồi chứa mô phân sinh; tế bào ở đó phân chia tạo lá, chồi mới, giúp cành phát triển thành cây.',
    },
  ],
  takeaways: [
    'Sinh sản là quá trình tạo ra cá thể mới, bảo đảm sự phát triển liên tục của loài.',
    'Sinh sản vô tính không có sự kết hợp giữa giao tử đực và giao tử cái; con giống nhau và giống mẹ.',
    'Thực vật sinh sản sinh dưỡng bằng rễ, thân, lá (khoai lang, khoai tây, gừng, lá bỏng).',
    'Động vật sinh sản vô tính bằng phân đôi (trùng roi), nảy chồi (thuỷ tức, san hô), phân mảnh (giun dẹp, sao biển), trinh sản (ong).',
    'Nhân giống vô tính: giâm cành, chiết cành, ghép cây, nuôi cấy mô; giữ đặc tính tốt của cây mẹ, cho thu hoạch sớm; nuôi cấy mô tạo nhanh nhiều cây sạch bệnh.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cơ thể sinh vật là hệ thống mở, tự điều chỉnh; các quá trình sinh lí ở thực vật và động vật liên quan chặt chẽ với nhau, một quá trình thay đổi kéo theo các quá trình khác thay đổi.',
  intro:
    'Một chậu cây bị ngập nước nhiều ngày: rễ thối, lá vàng rồi héo, dù đất thừa nước. Một người chạy nhanh: tim đập nhanh, thở gấp, đổ mồ hôi. Trong cả hai trường hợp, chỉ một quá trình thay đổi mà nhiều quá trình khác thay đổi theo. Vì sao vậy?',
  objectives: [
    'Phân tích được mối quan hệ giữa các quá trình sinh lí trong cơ thể thực vật (trao đổi nước và khoáng, quang hợp, hô hấp, thoát hơi nước, sinh trưởng, sinh sản).',
    'Phân tích được mối quan hệ giữa các quá trình sinh lí trong cơ thể động vật (tiêu hoá, hô hấp, tuần hoàn, bài tiết, chuyển hoá, điều hoà, sinh trưởng, sinh sản).',
    'Giải thích được vì sao cơ thể sinh vật là một hệ thống mở, tự điều chỉnh và là một thể thống nhất.',
    'Vận dụng mối quan hệ giữa các quá trình sinh lí để giải thích hiện tượng thực tế.',
  ],
  sections: [
    {
      heading: 'Mối quan hệ giữa các quá trình sinh lí ở thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Trong cơ thể thực vật diễn ra đồng thời nhiều quá trình sinh lí: hấp thụ nước và khoáng ở rễ, vận chuyển các chất trong mạch gỗ và mạch rây, thoát hơi nước, quang hợp, hô hấp, sinh trưởng, phát triển và sinh sản. Các quá trình này liên quan mật thiết với nhau.',
        },
        {
          type: 'list',
          items: [
            'Hấp thụ nước và khoáng cung cấp nguyên liệu cho quang hợp và các hoạt động khác. Nếu rễ không hút đủ nước, cây héo, khí khổng đóng, quang hợp giảm.',
            'Thoát hơi nước là động lực đầu trên kéo nước từ rễ lên lá, giúp rễ hút nước và khoáng; khi thoát hơi nước, khí khổng mở cho $\\mathrm{CO_2}$ đi vào lá và nhiệt độ lá giảm.',
            'Quang hợp và hô hấp là hai quá trình ngược nhau nhưng phụ thuộc nhau: quang hợp tạo chất hữu cơ và $\\mathrm{O_2}$ cho hô hấp; hô hấp giải phóng $\\mathrm{CO_2}$ và năng lượng (ATP) cho các hoạt động sống, trong đó có quang hợp.',
            'Hô hấp ở rễ cung cấp ATP cho hút khoáng chủ động và tạo các chất làm tăng áp suất thẩm thấu của tế bào rễ, giúp rễ hút nước.',
            'Trao đổi chất cung cấp vật chất và năng lượng cho sinh trưởng, phát triển, sinh sản; ngược lại, rễ mọc dài, lá mới, hoa và quả đang lớn lại tác động trở lại các quá trình trao đổi chất.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ: cây bị ngập úng',
          text: 'Đất ngập nước thiếu $\\mathrm{O_2}$ → rễ hô hấp kém, tích luỹ chất độc → lông hút chết, rễ hút nước và khoáng kém → lá thiếu nước, khí khổng đóng → quang hợp giảm, cây héo dù đất thừa nước.',
        },
      ],
    },
    {
      heading: 'Mối quan hệ giữa các quá trình sinh lí ở động vật',
      blocks: [
        {
          type: 'p',
          text: 'Ở động vật, các quá trình tiêu hoá, hô hấp, tuần hoàn, bài tiết, chuyển hoá ở tế bào, sinh trưởng, phát triển, sinh sản phối hợp nhịp nhàng dưới sự điều hoà của hệ thần kinh và hệ nội tiết. Cơ thể chỉ duy trì được sự sống khi các hoạt động này phối hợp với nhau.',
        },
        {
          type: 'table',
          head: ['Mối quan hệ', 'Biểu hiện'],
          rows: [
            [
              'Tiêu hoá – tuần hoàn',
              'Hệ tiêu hoá biến đổi thức ăn thành chất dinh dưỡng; hệ tuần hoàn đưa chất dinh dưỡng tới các tế bào.',
            ],
            [
              'Hô hấp – tuần hoàn',
              'Máu qua phổi nhận $\\mathrm{O_2}$ và thải $\\mathrm{CO_2}$; hệ tuần hoàn đưa $\\mathrm{O_2}$ tới tế bào và đưa $\\mathrm{CO_2}$ từ tế bào về phổi.',
            ],
            [
              'Tuần hoàn – bài tiết',
              'Máu đưa chất thải của quá trình trao đổi chất tới thận, phổi, da; cơ quan bài tiết lọc và thải chúng ra ngoài, giữ ổn định thành phần máu.',
            ],
            [
              'Chuyển hoá ở tế bào – các hệ cơ quan',
              'Hô hấp tế bào tạo ATP cho tim co bóp, cơ hô hấp co dãn, tế bào ống thận tái hấp thu các chất, tế bào thần kinh dẫn truyền xung.',
            ],
            [
              'Thần kinh, nội tiết – các hệ cơ quan',
              'Điều hoà nhịp tim, nhịp thở, tiêu hoá, tái hấp thu nước ở thận, sinh trưởng, sinh sản.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ: khi chạy nhanh',
          text: 'Cơ cần nhiều ATP → hô hấp tế bào tăng, cần nhiều $\\mathrm{O_2}$ và thải nhiều $\\mathrm{CO_2}$ → nồng độ $\\mathrm{CO_2}$ trong máu tăng, kích thích trung khu hô hấp và tim mạch → thở nhanh, sâu; tim đập nhanh, mạnh để đưa $\\mathrm{O_2}$ tới cơ, đưa $\\mathrm{CO_2}$ tới phổi; cơ thể toả nhiệt, đổ mồ hôi.',
        },
        {
          type: 'p',
          text: 'Bên dưới, hãy cho một quá trình ngừng hoạt động và xem ảnh hưởng lan ra theo từng bước.',
        },
      ],
    },
    {
      heading: 'Cơ thể là hệ thống mở, tự điều chỉnh',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hệ thống mở',
          text: 'Cơ thể sinh vật là hệ thống mở vì luôn trao đổi chất, năng lượng (và thông tin) với môi trường: thực vật lấy nước, khoáng, $\\mathrm{CO_2}$, ánh sáng và thải $\\mathrm{O_2}$, hơi nước; động vật lấy thức ăn, nước, $\\mathrm{O_2}$ và thải $\\mathrm{CO_2}$, chất thải. Cơ thể cũng tác động trở lại làm môi trường thay đổi.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hệ thống tự điều chỉnh',
          text: 'Cơ thể có khả năng tự điều chỉnh các hoạt động sống để duy trì cân bằng động của môi trường bên trong khi môi trường ngoài thay đổi. Ở thực vật, sự điều chỉnh nhờ sự tương tác giữa các hormone thực vật; ở động vật, nhờ hệ thần kinh và hệ nội tiết, thường theo cơ chế liên hệ ngược.',
        },
        {
          type: 'list',
          items: [
            'Ở thực vật: khi thiếu nước, lá tăng tổng hợp abscisic acid làm khí khổng đóng, giảm thoát hơi nước, giúp cây giữ nước.',
            'Ở động vật: khi cơ thể mất nhiều nước, áp suất thẩm thấu của máu tăng → vùng dưới đồi gây cảm giác khát và kích thích tuyến yên tăng tiết ADH → thận tăng tái hấp thu nước → áp suất thẩm thấu của máu trở lại bình thường, tác động ngược làm giảm tiết ADH.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Cơ thể là một thể thống nhất',
          text: 'Các cơ quan và các quá trình sinh lí trong cơ thể liên quan mật thiết, hỗ trợ lẫn nhau: bất kì quá trình sinh lí nào thay đổi đều ảnh hưởng đến các quá trình sinh lí khác. Trao đổi chất và chuyển hoá năng lượng là cơ sở của sinh trưởng, phát triển, sinh sản và cảm ứng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mạng lưới các quá trình sinh lí',
    instruction:
      'Chọn thực vật hoặc động vật. Chạm vào một quá trình để làm nó ngừng hoạt động, rồi bấm "Bước tiếp" để xem những quá trình nào bị ảnh hưởng trực tiếp (bước 1), rồi gián tiếp (bước 2, 3...). Có quá trình nào ngừng mà không ảnh hưởng tới quá trình khác không?',
  },
  examples: [
    {
      problem:
        'Vì sao cây trồng trên đất bị ngập úng lâu ngày thường bị héo và vàng lá, dù đất rất nhiều nước?',
      steps: [
        'Đất ngập nước làm các khe hở trong đất đầy nước, rễ thiếu $\\mathrm{O_2}$.',
        'Thiếu $\\mathrm{O_2}$, rễ hô hấp hiếu khí kém, chuyển sang hô hấp kị khí, tích luỹ chất độc; ATP tạo ra ít.',
        'Thiếu ATP và bị chất độc, lông hút chết, rễ giảm hút nước và khoáng (hấp thụ khoáng chủ động cần ATP).',
        'Lá thiếu nước nên héo, khí khổng đóng, quang hợp giảm; thiếu khoáng (như nitrogen, magnesium) để tổng hợp diệp lục nên lá vàng.',
      ],
      answer:
        'Ngập úng làm rễ thiếu $\\mathrm{O_2}$, hô hấp rễ giảm nên hấp thụ nước và khoáng giảm, kéo theo quang hợp giảm: cây héo, vàng lá.',
    },
    {
      problem:
        'Khi một người lao động nặng, nhịp tim và nhịp thở đều tăng. Hãy giải thích sự phối hợp giữa các quá trình sinh lí trong trường hợp này.',
      steps: [
        'Cơ hoạt động mạnh cần nhiều ATP, nên hô hấp tế bào ở cơ tăng: tiêu thụ nhiều $\\mathrm{O_2}$ và thải nhiều $\\mathrm{CO_2}$.',
        'Nồng độ $\\mathrm{CO_2}$ trong máu tăng, kích thích các thụ thể hoá học; trung khu hô hấp và trung khu điều hoà tim mạch tăng hoạt động.',
        'Hệ hô hấp: thở nhanh, sâu để lấy thêm $\\mathrm{O_2}$, thải $\\mathrm{CO_2}$. Hệ tuần hoàn: tim đập nhanh, mạnh, mạch máu tới cơ dãn để đưa nhiều $\\mathrm{O_2}$ và chất dinh dưỡng tới cơ.',
        'Nhiệt sinh ra nhiều, cơ thể tăng tiết mồ hôi để toả nhiệt; quá trình chuyển hoá sinh ra nhiều chất thải hơn để hệ bài tiết đào thải.',
      ],
      answer:
        'Hô hấp tế bào tăng kéo theo hô hấp ngoài, tuần hoàn, bài tiết và điều nhiệt thay đổi theo, dưới sự điều hoà của hệ thần kinh và nội tiết.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cơ thể sinh vật được gọi là hệ thống mở vì',
      options: [
        'luôn trao đổi chất và năng lượng với môi trường',
        'có nhiều cơ quan hoạt động độc lập với nhau',
        'không chịu tác động của môi trường',
        'có thể sống tách khỏi môi trường trong thời gian dài',
      ],
      answer: 0,
      hints: ['Nghĩ tới những gì cơ thể lấy vào và thải ra mỗi ngày.'],
      solution:
        'Cơ thể thường xuyên lấy vào và thải ra vật chất, năng lượng (thực vật lấy nước, khoáng, $\\mathrm{CO_2}$, ánh sáng; động vật lấy thức ăn, $\\mathrm{O_2}$...) nên là hệ thống mở.',
    },
    {
      type: 'choice',
      prompt: 'Ở động vật, khả năng tự điều chỉnh để duy trì cân bằng nội môi chủ yếu nhờ',
      options: [
        'hệ thần kinh và hệ nội tiết',
        'hệ tiêu hoá và hệ bài tiết',
        'hệ vận động',
        'hệ hô hấp',
      ],
      answer: 0,
      hints: ['Hệ nào nhận thông tin và phát tín hiệu điều khiển các cơ quan?'],
      solution:
        'Hệ thần kinh và hệ nội tiết tiếp nhận thông tin, điều khiển các cơ quan thực hiện (thận, tim, phổi...) theo cơ chế liên hệ ngược để duy trì cân bằng nội môi.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nhận định đúng về quan hệ giữa quang hợp và hô hấp ở thực vật.',
      options: [
        'Sản phẩm của quang hợp (chất hữu cơ, $\\mathrm{O_2}$) là nguyên liệu của hô hấp',
        'Hô hấp giải phóng $\\mathrm{CO_2}$ và năng lượng phục vụ các hoạt động sống, trong đó có quang hợp',
        'Quang hợp tích luỹ năng lượng, hô hấp giải phóng năng lượng',
        'Quang hợp và hô hấp không liên quan gì với nhau',
        'Cây chỉ hô hấp vào ban đêm, chỉ quang hợp vào ban ngày',
      ],
      answers: [0, 1, 2],
      hints: ['Cây hô hấp liên tục cả ngày lẫn đêm.'],
      solution:
        'Quang hợp tạo chất hữu cơ, $\\mathrm{O_2}$ và tích luỹ năng lượng; hô hấp dùng chất hữu cơ, $\\mathrm{O_2}$, giải phóng $\\mathrm{CO_2}$ và năng lượng. Hai quá trình ngược nhau nhưng phụ thuộc nhau. Cây hô hấp liên tục cả ngày lẫn đêm.',
    },
    {
      type: 'choice',
      prompt: 'Thoát hơi nước ở lá ảnh hưởng đến hấp thụ nước ở rễ như thế nào?',
      options: [
        'Tạo động lực đầu trên kéo nước từ rễ lên, giúp rễ hút được nước',
        'Làm rễ ngừng hút nước',
        'Không ảnh hưởng gì vì hai cơ quan ở xa nhau',
        'Làm nước chảy ngược từ lá xuống rễ',
      ],
      answer: 0,
      hints: ['Nước mất đi ở lá được bù lại bằng cách nào?'],
      solution:
        'Lá thoát hơi nước tạo lực hút kéo cột nước liên tục trong mạch gỗ đi lên; nhờ đó rễ hút nước từ đất vào để bù lại lượng nước đã mất.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi mối quan hệ ở động vật với biểu hiện đúng của nó.',
      left: [
        'Tiêu hoá – tuần hoàn',
        'Hô hấp – tuần hoàn',
        'Tuần hoàn – bài tiết',
        'Nội tiết – bài tiết',
      ],
      right: [
        'Máu nhận chất dinh dưỡng hấp thụ ở ruột non và đưa tới tế bào',
        'Máu nhận $\\mathrm{O_2}$ ở phổi và đưa $\\mathrm{CO_2}$ về phổi để thải ra',
        'Máu đưa urea và chất thải khác tới thận để lọc, thải ra ngoài',
        'ADH từ tuyến yên làm thận tăng tái hấp thu nước',
        'Cơ co làm xương cử động',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Tìm chất mà hai hệ cùng "trao tay" cho nhau.'],
      solution:
        'Tiêu hoá – tuần hoàn: chất dinh dưỡng; hô hấp – tuần hoàn: $\\mathrm{O_2}$ và $\\mathrm{CO_2}$; tuần hoàn – bài tiết: chất thải như urea; nội tiết – bài tiết: ADH điều hoà tái hấp thu nước. "Cơ co làm xương cử động" là quan hệ của hệ vận động, không thuộc các cặp trên.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp chuỗi sự kiện khi cơ thể mất nhiều nước (ví dụ ra nhiều mồ hôi) theo đúng thứ tự.',
      items: [
        'Thận tăng tái hấp thu nước, đồng thời cơ thể khát và uống nước',
        'Áp suất thẩm thấu của máu trở lại bình thường',
        'Áp suất thẩm thấu của máu tăng',
        'Vùng dưới đồi bị kích thích, tuyến yên tăng tiết ADH',
      ],
      answer: [2, 3, 0, 1],
      hints: ['Bắt đầu từ thay đổi trong máu, kết thúc khi cân bằng được lập lại.'],
      solution:
        'Mất nước → áp suất thẩm thấu máu tăng → vùng dưới đồi kích thích tuyến yên tiết ADH (và gây khát) → thận tăng tái hấp thu nước, cơ thể uống thêm nước → áp suất thẩm thấu trở lại bình thường. Đó là cơ chế tự điều chỉnh theo liên hệ ngược.',
    },
    {
      type: 'choice',
      prompt:
        'Một học sinh nhịn ăn sáng rồi chạy bền và bị chóng mặt, mệt lả. Giải thích nào phù hợp nhất?',
      options: [
        'Thiếu chất dinh dưỡng từ tiêu hoá, máu đưa ít glucose tới tế bào nên hô hấp tế bào tạo ít ATP cho cơ và não',
        'Hệ bài tiết ngừng hoạt động',
        'Phổi không lấy được $\\mathrm{O_2}$',
        'Tim ngừng đập trong lúc chạy',
      ],
      answer: 0,
      hints: ['Lần theo chuỗi: tiêu hoá → tuần hoàn → chuyển hoá ở tế bào.'],
      solution:
        'Không ăn sáng nên lượng glucose hấp thụ vào máu ít, đường huyết thấp; khi chạy, cơ và não cần nhiều năng lượng nhưng hô hấp tế bào thiếu nguyên liệu, tạo ít ATP nên chóng mặt, mệt lả. Đó là ảnh hưởng dây chuyền giữa tiêu hoá, tuần hoàn và chuyển hoá.',
    },
    {
      type: 'multi',
      prompt:
        'Rễ cây bị tổn thương nặng (ví dụ do sâu cắn). Những quá trình nào sẽ bị ảnh hưởng theo?',
      options: [
        'Hấp thụ nước và khoáng',
        'Quang hợp ở lá',
        'Sinh trưởng của cây',
        'Không quá trình nào khác bị ảnh hưởng',
      ],
      answers: [0, 1, 2],
      hints: ['Lá cần gì từ rễ để quang hợp? Cây cần gì để lớn?'],
      solution:
        'Rễ hỏng nên hấp thụ nước, khoáng giảm; lá thiếu nước và khoáng nên quang hợp giảm; thiếu nước, khoáng và chất hữu cơ nên cây sinh trưởng chậm. Một quá trình thay đổi kéo theo nhiều quá trình khác thay đổi.',
    },
  ],
  takeaways: [
    'Các quá trình sinh lí trong cơ thể liên quan chặt chẽ: một quá trình thay đổi kéo theo các quá trình khác thay đổi.',
    'Ở thực vật: hấp thụ nước và khoáng, thoát hơi nước, quang hợp, hô hấp phụ thuộc lẫn nhau và cung cấp vật chất, năng lượng cho sinh trưởng, phát triển, sinh sản.',
    'Ở động vật: tiêu hoá, hô hấp, tuần hoàn, bài tiết phối hợp với nhau dưới sự điều hoà của hệ thần kinh và nội tiết.',
    'Cơ thể là hệ thống mở (luôn trao đổi chất, năng lượng với môi trường) và tự điều chỉnh (duy trì cân bằng động nhờ hormone, thần kinh, liên hệ ngược).',
  ],
};

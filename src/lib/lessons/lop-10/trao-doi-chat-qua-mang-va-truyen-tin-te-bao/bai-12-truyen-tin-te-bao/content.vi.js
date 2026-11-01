/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Truyền tin tế bào: các hình thức truyền tin giữa các tế bào, phân tử tín hiệu và thụ thể, ba giai đoạn tiếp nhận, truyền tin nội bào và đáp ứng.',
  intro:
    'Khi em bất ngờ gặp nguy hiểm, tim đập nhanh hơn và gan đưa thêm glucose vào máu chỉ sau ít phút. Hàng tỉ tế bào phối hợp được với nhau như vậy là nhờ chúng liên tục "nói chuyện" bằng các phân tử tín hiệu.',
  objectives: [
    'Nêu được khái niệm truyền tin tế bào và vai trò của truyền tin.',
    'Phân biệt được các hình thức truyền tin giữa các tế bào.',
    'Phân biệt được thụ thể màng với thụ thể nội bào và phân tử tín hiệu tương ứng.',
    'Mô tả được ba giai đoạn truyền tin trong tế bào: tiếp nhận, truyền tin nội bào và đáp ứng.',
    'Giải thích được vì sao cùng một tín hiệu có thể gây đáp ứng khác nhau ở các tế bào khác nhau.',
  ],
  sections: [
    {
      heading: 'Truyền tin giữa các tế bào',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Truyền tin tế bào',
          text: 'Truyền tin tế bào là quá trình các tế bào phát và nhận các phân tử tín hiệu qua lại với nhau. Nhờ đó, các tế bào trong cơ thể đa bào phối hợp hoạt động và giữ được sự thống nhất của cơ thể.',
        },
        {
          type: 'p',
          text: 'Tín hiệu giữa các tế bào chủ yếu là tín hiệu hoá học. Phân tử tín hiệu có thể là amino acid, peptide, protein, nucleotide, hormone hay cả khí NO.',
        },
        {
          type: 'table',
          caption: 'Các hình thức truyền tin giữa các tế bào',
          head: ['Hình thức', 'Cách truyền', 'Ví dụ'],
          rows: [
            [
              'Trực tiếp',
              'Qua kết nối giữa hai tế bào tiếp xúc nhau',
              'Cầu sinh chất ở thực vật, mối nối ở động vật',
            ],
            [
              'Cận tiết',
              'Tín hiệu khuếch tán đến các tế bào lân cận',
              'Yếu tố tăng trưởng tác động lên tế bào ở gần',
            ],
            ['Nội tiết', 'Hormone được tiết vào máu, đến tế bào đích ở xa', 'Insulin, aldosterone'],
            [
              'Qua synapse',
              'Chất dẫn truyền thần kinh đi qua khe synapse',
              'Neuron truyền tin sang tế bào cơ',
            ],
          ],
        },
        { type: 'widget', name: 'kieu-truyen-tin' },
      ],
    },
    {
      heading: 'Thụ thể và phân tử tín hiệu',
      blocks: [
        {
          type: 'p',
          text: 'Một tế bào chỉ nhận được tín hiệu khi có thụ thể phù hợp. Phân tử tín hiệu gắn với thụ thể một cách đặc hiệu, giống như chìa khoá với ổ khoá. Vị trí của thụ thể phụ thuộc vào việc tín hiệu có đi qua được lớp kép phospholipid hay không.',
        },
        {
          type: 'table',
          caption: 'Hai loại thụ thể',
          head: ['Loại thụ thể', 'Vị trí', 'Phân tử tín hiệu', 'Ví dụ'],
          rows: [
            [
              'Thụ thể màng',
              'Trên màng, nhận tín hiệu ở mặt ngoài',
              'Tan trong nước, không qua được lớp kép',
              'Amino acid, Ca²⁺, adrenaline',
            ],
            [
              'Thụ thể nội bào',
              'Trong tế bào chất',
              'Tan trong lipid, đi qua được màng',
              'Hormone steroid (estrogen, testosterone, aldosterone), NO',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Ba giai đoạn truyền tin trong tế bào',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Tiếp nhận: phân tử tín hiệu gắn với thụ thể đặc hiệu, làm thụ thể thay đổi hình dạng và được hoạt hoá.',
            'Truyền tin nội bào: thụ thể hoạt hoá phân tử kế tiếp, cứ thế tín hiệu đi qua một chuỗi phân tử đến phân tử đích. Với thụ thể nội bào, phân tử đích có thể là một gene.',
            'Đáp ứng: tế bào thay đổi hoạt động, ví dụ enzyme được hoạt hoá, hình dạng tế bào thay đổi, tế bào tiết ra yếu tố tăng trưởng, hoặc gene được biểu hiện để tổng hợp protein.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Một tín hiệu, nhiều đáp ứng',
          text: 'Cùng một phân tử tín hiệu có thể gây đáp ứng khác nhau ở các tế bào khác nhau, vì mỗi loại tế bào có thụ thể, protein truyền tin và protein đáp ứng riêng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chuỗi truyền tin',
    instruction:
      'Chọn tín hiệu và tế bào đích, rồi phát tín hiệu và theo dõi ba giai đoạn. Sau đó thử chặn từng giai đoạn: tín hiệu dừng ở đâu, tế bào có đáp ứng không? So sánh đáp ứng của tế bào gan với tế bào cơ tim trước cùng một tín hiệu.',
  },
  examples: [
    {
      problem:
        'Mô tả quá trình hormone aldosterone truyền tin vào tế bào thận, chỉ rõ ba giai đoạn truyền tin.',
      steps: [
        'Tiếp nhận: aldosterone là hormone steroid tan trong lipid nên đi qua lớp kép phospholipid, gắn với thụ thể trong tế bào chất tạo phức hợp.',
        'Truyền tin nội bào: phức hợp đi vào nhân và hoạt hoá gene đích.',
        'Đáp ứng: gene được phiên mã thành mRNA, mRNA ra tế bào chất và ribosome dùng mRNA để tổng hợp protein.',
      ],
      answer:
        'Tiếp nhận ở thụ thể nội bào, phức hợp truyền tin vào nhân, đáp ứng là tổng hợp protein.',
    },
    {
      problem:
        'Adrenaline làm tế bào gan phân giải glycogen thành glucose, nhưng làm tế bào cơ tim co nhanh hơn. Một số tế bào khác không có đáp ứng với adrenaline. Giải thích.',
      steps: [
        'Tế bào chỉ nhận được tín hiệu khi có thụ thể phù hợp. Tế bào không có thụ thể adrenaline thì không đáp ứng.',
        'Tế bào gan và tế bào cơ tim đều có thụ thể nên đều nhận được tín hiệu.',
        'Mỗi loại tế bào có các protein truyền tin và protein đáp ứng riêng, nên cùng tín hiệu nhưng kết quả cuối cùng khác nhau.',
      ],
      answer:
        'Đáp ứng phụ thuộc vào thụ thể, con đường truyền tin và protein đáp ứng của từng loại tế bào.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp ba giai đoạn truyền tin trong tế bào theo đúng thứ tự.',
      items: ['Đáp ứng', 'Tiếp nhận', 'Truyền tin nội bào'],
      answer: [1, 2, 0],
      hints: ['Tín hiệu phải được nhận trước khi được truyền đi.'],
      solution: 'Tiếp nhận tín hiệu, truyền tin nội bào, rồi tế bào đáp ứng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hình thức truyền tin với đặc điểm của nó.',
      left: ['Trực tiếp', 'Cận tiết', 'Nội tiết', 'Qua synapse'],
      right: [
        'Hormone theo máu đến tế bào đích ở xa',
        'Chất dẫn truyền thần kinh đi qua một khe hẹp',
        'Qua cầu sinh chất hoặc mối nối',
        'Tín hiệu đến các tế bào lân cận',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['"Nội tiết" gắn với hormone; "cận" nghĩa là ở gần.'],
      solution:
        'Trực tiếp: qua cầu sinh chất hoặc mối nối. Cận tiết: đến tế bào lân cận. Nội tiết: hormone theo máu đến tế bào ở xa. Qua synapse: chất dẫn truyền thần kinh đi qua khe synapse.',
    },
    {
      type: 'choice',
      prompt: 'Hormone testosterone tan trong lipid. Thụ thể của nó thường nằm ở đâu?',
      options: [
        'Trên mặt ngoài của màng sinh chất',
        'Ngoài chất nền ngoại bào',
        'Trong tế bào chất',
        'Trên thành tế bào',
      ],
      answer: 2,
      hints: ['Chất tan trong lipid có đi qua được lớp kép phospholipid không?'],
      solution:
        'Testosterone đi qua được lớp kép phospholipid nên thụ thể của nó nằm trong tế bào chất: đó là thụ thể nội bào.',
    },
    {
      type: 'multi',
      prompt: 'Những phân tử tín hiệu nào gắn với thụ thể nằm trên màng sinh chất?',
      options: ['Estrogen', 'Amino acid', 'Ca²⁺', 'Testosterone'],
      answers: [1, 2],
      hints: ['Tín hiệu tan trong nước không đi qua được vùng kị nước của màng.'],
      solution:
        'Amino acid và Ca²⁺ tan trong nước nên gắn với thụ thể màng. Estrogen và testosterone là hormone steroid tan trong lipid, gắn với thụ thể nội bào.',
    },
    {
      type: 'text',
      prompt:
        'Protein đặc hiệu mà phân tử tín hiệu gắn vào, như chìa khoá với ổ khoá, được gọi là gì?',
      accept: ['thụ thể', 'protein thụ thể'],
      hints: ['Đó là phân tử "tiếp nhận" tín hiệu.'],
      solution: 'Đó là thụ thể.',
    },
    {
      type: 'number',
      prompt:
        'Giả sử trong một chuỗi truyền tin có $3$ bậc, mỗi phân tử được hoạt hoá lại hoạt hoá $10$ phân tử ở bậc kế tiếp. Từ $1$ thụ thể ban đầu, bậc thứ ba có bao nhiêu phân tử được hoạt hoá?',
      answer: 1000,
      hints: ['Bậc thứ nhất có $10$ phân tử, bậc thứ hai có $10 \\times 10$ phân tử.'],
      solution:
        'Bậc 1: $10$ phân tử; bậc 2: $100$ phân tử; bậc 3: $1\\,000$ phân tử. Nhờ vậy một tín hiệu nhỏ có thể tạo đáp ứng lớn.',
    },
    {
      type: 'choice',
      prompt:
        'Một thuốc làm hỏng protein đích của chuỗi truyền tin nhưng không ảnh hưởng đến thụ thể. Khi có tín hiệu, điều gì xảy ra?',
      options: [
        'Tế bào đáp ứng mạnh hơn bình thường',
        'Thụ thể vẫn nhận tín hiệu nhưng tế bào không tạo ra đáp ứng',
        'Tín hiệu không gắn được với thụ thể',
        'Tín hiệu đổi sang một thụ thể khác',
      ],
      answer: 1,
      hints: ['Giai đoạn nào đã bị ảnh hưởng? Các giai đoạn trước đó còn hoạt động không?'],
      solution:
        'Hai giai đoạn đầu vẫn diễn ra, nhưng protein đích bị hỏng nên giai đoạn đáp ứng không xảy ra.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao một hormone theo máu đi khắp cơ thể nhưng chỉ tác động lên một số loại tế bào?',
      options: [
        'Hormone chỉ tan trong máu ở một vài cơ quan',
        'Tế bào đích được hormone chọn ngẫu nhiên',
        'Các tế bào khác phân huỷ ngay hormone khi gặp',
        'Chỉ những tế bào có thụ thể phù hợp mới nhận được tín hiệu',
      ],
      answer: 3,
      hints: ['Hãy nghĩ tới hình ảnh chìa khoá và ổ khoá.'],
      solution:
        'Hormone chỉ gắn với thụ thể đặc hiệu. Tế bào có thụ thể phù hợp mới là tế bào đích và có đáp ứng.',
    },
  ],
  takeaways: [
    'Truyền tin tế bào là quá trình các tế bào phát và nhận phân tử tín hiệu, giúp cơ thể phối hợp hoạt động.',
    'Các hình thức truyền tin giữa các tế bào: trực tiếp, cận tiết, nội tiết và qua synapse.',
    'Tín hiệu tan trong nước gắn với thụ thể màng; tín hiệu tan trong lipid đi qua màng và gắn với thụ thể nội bào.',
    'Truyền tin trong tế bào gồm ba giai đoạn: tiếp nhận, truyền tin nội bào và đáp ứng.',
    'Cùng một tín hiệu có thể gây đáp ứng khác nhau, tuỳ thụ thể, con đường truyền tin và protein đáp ứng của tế bào.',
  ],
};

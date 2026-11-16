/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm sinh sản; sinh sản vô tính và sinh sản hữu tính: cơ sở tế bào học, đặc điểm di truyền, điều hoà, ý nghĩa, ví dụ; vai trò, ưu điểm và hạn chế của mỗi hình thức.',
  intro:
    'Chỉ một chiếc lá thuốc bỏng đặt trên đất ẩm đã mọc ra nhiều cây con giống hệt cây mẹ. Còn hạt bí ngô gieo xuống lại cho những cây có quả to nhỏ, màu sắc khác nhau. Vì sao con sinh ra theo hai cách này lại giống hoặc khác bố mẹ đến vậy, và mỗi cách có lợi gì cho loài?',
  objectives: [
    'Phát biểu được khái niệm sinh sản ở sinh vật.',
    'Phân biệt được sinh sản vô tính và sinh sản hữu tính theo cơ sở tế bào học, đặc điểm di truyền, điều hoà và ý nghĩa; lấy được ví dụ.',
    'Trình bày được vai trò của sinh sản đối với sinh vật.',
    'Phân tích được ưu điểm và hạn chế của mỗi hình thức sinh sản, giải thích vì sao sinh sản hữu tính giúp sinh vật thích nghi với môi trường thay đổi.',
  ],
  sections: [
    {
      heading: 'Khái niệm sinh sản',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh sản',
          text: 'Sinh sản là quá trình tạo ra những cơ thể mới, đảm bảo cho sự phát triển liên tục của loài.',
        },
        {
          type: 'p',
          text: 'Sinh vật có hai hình thức sinh sản chính: sinh sản vô tính và sinh sản hữu tính. Một số loài có thể sinh sản theo cả hai hình thức, ví dụ khoai tây vừa mọc cây mới từ củ, vừa ra hoa kết hạt; rệp cây vừa trinh sinh vừa giao phối.',
        },
        {
          type: 'list',
          items: [
            'Sinh sản vô tính: tạo ra cơ thể mới giống cá thể ban đầu, không có sự tham gia vật chất di truyền của cá thể khác (không có sự kết hợp giao tử đực và giao tử cái). Ví dụ: một lá thuốc bỏng mọc thành cây mới.',
            'Sinh sản hữu tính: giao tử đực kết hợp với giao tử cái tạo thành hợp tử, hợp tử phát triển thành cơ thể mới. Ví dụ: sinh sản ở người, ở cây bí ngô.',
          ],
        },
      ],
    },
    {
      heading: 'Dấu hiệu đặc trưng của hai hình thức sinh sản',
      blocks: [
        {
          type: 'table',
          head: ['Tiêu chí', 'Sinh sản vô tính', 'Sinh sản hữu tính'],
          rows: [
            ['Cơ sở tế bào học', 'Nguyên phân', 'Giảm phân, thụ tinh và nguyên phân'],
            [
              'Đặc điểm di truyền',
              'Các cơ thể con giống nhau và giống cơ thể mẹ',
              'Các cơ thể con mang vật chất di truyền của cả bố và mẹ, có sự sai khác nhau và khác bố mẹ',
            ],
            ['Điều hoà', 'Chủ yếu bởi hệ thống kiểm soát chu kì tế bào', 'Bởi các hormone'],
            [
              'Ý nghĩa',
              'Tạo cá thể thích nghi với môi trường ổn định',
              'Tạo cá thể đa dạng, thích nghi tốt với môi trường thay đổi',
            ],
            [
              'Ví dụ ở thực vật',
              'Chuối, gừng, hành, thuốc bỏng, rau má',
              'Bí ngô, dưa chuột, chanh, bưởi',
            ],
            [
              'Ví dụ ở động vật',
              'Hải quỳ, bọt biển, thuỷ tức, sao biển, giun dẹp',
              'Chim, ếch, cá, trâu, bò, mèo, gà',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao con sinh ra từ sinh sản hữu tính lại đa dạng?',
          text: 'Trong giảm phân, các cặp nhiễm sắc thể phân li độc lập (và có thể trao đổi chéo) nên một cơ thể tạo ra nhiều loại giao tử khác nhau. Khi thụ tinh, các giao tử kết hợp ngẫu nhiên, tạo ra nhiều tổ hợp gene mới (biến dị tổ hợp). Nguyên phân thì sao chép đúng bộ nhiễm sắc thể của tế bào mẹ.',
        },
      ],
    },
    {
      heading: 'Vai trò, ưu điểm và hạn chế',
      blocks: [
        {
          type: 'list',
          items: [
            'Cả hai hình thức đều tạo ra thế hệ con cháu, giúp loài tồn tại và phát triển liên tục.',
            'Sinh sản vô tính nhanh chóng tạo ra nhiều cá thể mới mang bộ nhiễm sắc thể đặc trưng của loài, có lợi khi môi trường ổn định.',
            'Sinh sản hữu tính tạo ra cá thể mới mang bộ nhiễm sắc thể đặc trưng của loài với các tổ hợp gene đa dạng, giúp loài thích nghi khi môi trường thay đổi.',
          ],
        },
        {
          type: 'table',
          head: ['Hình thức', 'Ưu điểm', 'Hạn chế'],
          rows: [
            [
              'Sinh sản vô tính',
              'Chỉ cần một cá thể ban đầu, có lợi khi mật độ cá thể thấp; tạo nhiều cá thể trong thời gian ngắn; con giống hệt mẹ, giữ được đặc điểm tốt, kiểu gene thích nghi của mẹ',
              'Thế hệ con ít đa dạng di truyền; khi điều kiện sống thay đổi có thể chết hàng loạt',
            ],
            [
              'Sinh sản hữu tính',
              'Tạo thế hệ con đa dạng về di truyền và tính trạng, tăng khả năng thích nghi với môi trường thay đổi',
              'Cần có giao tử đực và giao tử cái (thường của hai cá thể), nên khi mật độ cá thể quá thấp khó duy trì số lượng; con không giữ nguyên được đặc điểm tốt của bố mẹ',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Bên dưới, cùng một cây mẹ $AaBb$ sinh ra $16$ cây con theo hai hình thức. Đổi điều kiện sống và so sánh số kiểu gene, số cây sống sót.',
        },
      ],
    },
  ],
  explore: {
    title: 'So sánh con của hai hình thức sinh sản',
    instruction:
      'Chọn từng điều kiện sống, quan sát hai ô cây con và bảng so sánh. Chạm vào một cây con để xem kiểu gene của nó. Khi nào sinh sản vô tính có lợi hơn, khi nào sinh sản hữu tính có lợi hơn?',
  },
  examples: [
    {
      problem:
        'Một cây có kiểu gene $AaBb$. (a) Nhân giống cây này bằng cách giâm cành, các cây con có kiểu gene gì? (b) Cho cây này tự thụ phấn, các cây con có bao nhiêu kiểu gene? Các gene phân li độc lập.',
      steps: [
        '(a) Giâm cành là sinh sản vô tính, dựa trên nguyên phân: mọi cây con có kiểu gene $AaBb$ giống cây mẹ.',
        '(b) Tự thụ phấn là sinh sản hữu tính. Cây $AaBb$ giảm phân cho $4$ loại giao tử: $AB, Ab, aB, ab$.',
        'Xét riêng từng gene: $Aa \\times Aa$ cho $3$ kiểu gene $AA, Aa, aa$; $Bb \\times Bb$ cũng cho $3$ kiểu gene.',
        'Số kiểu gene ở đời con: $3 \\cdot 3 = 9$.',
      ],
      answer: '(a) Tất cả là $AaBb$. (b) $9$ kiểu gene.',
    },
    {
      problem:
        'Một vườn chuối trồng toàn bằng chồi lấy từ một cây mẹ. Khi một loại nấm gây bệnh mới xuất hiện, gần như cả vườn bị bệnh. Giải thích và đề xuất cách hạn chế.',
      steps: [
        'Chồi chuối mọc từ thân ngầm của cây mẹ: đó là sinh sản vô tính, các cây con có kiểu gene giống hệt nhau và giống cây mẹ.',
        'Nếu cây mẹ không có gene kháng loại nấm mới thì mọi cây con cũng không có, nên cả vườn cùng bị bệnh: đó là hạn chế của sinh sản vô tính khi môi trường thay đổi.',
        'Cách hạn chế: trồng xen nhiều giống chuối khác nhau, dùng giống kháng bệnh, vệ sinh vườn và luân canh.',
      ],
      answer:
        'Các cây có cùng kiểu gene nên cùng không kháng bệnh; cần đa dạng giống và dùng giống kháng bệnh.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Sinh sản là',
      options: [
        'quá trình tạo ra những cơ thể mới, đảm bảo cho sự phát triển liên tục của loài',
        'quá trình tăng kích thước và khối lượng của cơ thể',
        'quá trình biến đổi cấu trúc, chức năng của tế bào, mô, cơ quan',
        'quá trình phân chia một tế bào thành hai tế bào con',
      ],
      answer: 0,
      hints: ['Kết quả của sinh sản là cá thể mới, không phải cơ thể to hơn.'],
      solution:
        'Sinh sản là quá trình tạo ra những cơ thể mới, đảm bảo cho sự phát triển liên tục của loài; tăng kích thước là sinh trưởng, biến đổi cấu trúc và chức năng là phát triển.',
    },
    {
      type: 'choice',
      prompt: 'Cơ sở tế bào học của sinh sản vô tính là',
      options: ['nguyên phân', 'giảm phân', 'thụ tinh', 'giảm phân và thụ tinh'],
      answer: 0,
      hints: ['Hình thức phân bào nào giữ nguyên bộ nhiễm sắc thể của tế bào mẹ?'],
      solution:
        'Sinh sản vô tính dựa trên nguyên phân, nên các cơ thể con có bộ nhiễm sắc thể giống hệt cơ thể mẹ.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm của sinh sản hữu tính.',
      options: [
        'Có sự kết hợp giữa giao tử đực và giao tử cái',
        'Dựa trên giảm phân, thụ tinh và nguyên phân',
        'Thế hệ con đa dạng về di truyền',
        'Con giống hệt nhau và giống hệt mẹ',
        'Chỉ cần một cá thể ban đầu, không cần giao tử',
      ],
      answers: [0, 1, 2],
      hints: ['Hai đặc điểm còn lại là của sinh sản vô tính.'],
      solution:
        'Sinh sản hữu tính có sự kết hợp giao tử đực và cái tạo hợp tử, dựa trên giảm phân, thụ tinh và nguyên phân, nên con đa dạng di truyền. Con giống hệt mẹ và chỉ cần một cá thể, không cần giao tử, là đặc điểm của sinh sản vô tính.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các ví dụ về sinh sản vô tính.',
      options: [
        'Lá thuốc bỏng đặt trên đất ẩm mọc thành cây mới',
        'Thuỷ tức mọc chồi, chồi tách ra thành con mới',
        'Củ gừng mọc thành cây gừng mới',
        'Gà mái đẻ trứng đã thụ tinh, trứng nở thành gà con',
        'Hạt bí ngô nảy mầm thành cây bí',
      ],
      answers: [0, 1, 2],
      hints: ['Hỏi xem cơ thể mới có phát triển từ hợp tử của hai giao tử hay không.'],
      solution:
        'Lá thuốc bỏng, chồi thuỷ tức, củ gừng tạo cơ thể mới không qua kết hợp giao tử: sinh sản vô tính. Trứng gà đã thụ tinh và hạt bí (chứa phôi phát triển từ hợp tử) là kết quả của sinh sản hữu tính.',
    },
    {
      type: 'choice',
      prompt: 'Ở hình thức nào, sự sinh sản được điều hoà chủ yếu bởi các hormone?',
      options: [
        'Sinh sản hữu tính',
        'Sinh sản vô tính',
        'Cả hai hình thức như nhau',
        'Không hình thức nào',
      ],
      answer: 0,
      hints: ['Sinh sản vô tính được điều hoà chủ yếu bởi hệ thống kiểm soát chu kì tế bào.'],
      solution:
        'Sinh sản hữu tính được điều hoà bởi các hormone; sinh sản vô tính được điều hoà chủ yếu bởi hệ thống kiểm soát chu kì tế bào.',
    },
    {
      type: 'number',
      prompt:
        'Cho hai cây có kiểu gene $AaBb$ giao phấn với nhau (các gene phân li độc lập). Đời con có bao nhiêu kiểu gene khác nhau?',
      answer: 9,
      hints: [
        'Xét riêng từng gene: $Aa \\times Aa$ cho mấy kiểu gene?',
        'Nhân số kiểu gene của gene $A$ với số kiểu gene của gene $B$.',
      ],
      solution:
        '$Aa \\times Aa$ cho $AA, Aa, aa$ ($3$ kiểu gene); $Bb \\times Bb$ cũng cho $3$ kiểu gene. Số kiểu gene: $3 \\cdot 3 = 9$.',
    },
    {
      type: 'fraction',
      prompt:
        'Một bệnh mới chỉ tha cho cây có kiểu gene $aa$. Từ phép lai $Aa \\times Aa$, tỉ lệ cây con sống sót là bao nhiêu? Viết dưới dạng phân số tối giản.',
      answer: [1, 4],
      simplest: true,
      hints: ['Lập bảng: giao tử $A$, $a$ của mỗi cây kết hợp với nhau.'],
      solution:
        '$Aa \\times Aa$ cho $\\frac{1}{4} AA : \\frac{2}{4} Aa : \\frac{1}{4} aa$, nên $\\frac{1}{4}$ số cây sống sót. Cây giâm cành đều là $Aa$, nên không cây nào sống sót: sinh sản vô tính dễ làm chết hàng loạt khi môi trường thay đổi.',
    },
    {
      type: 'choice',
      prompt:
        'Trên một hòn đảo chỉ còn sót lại một cá thể của một loài thực vật tự bất thụ (không tự thụ phấn được). Hình thức sinh sản nào giúp loài này duy trì số lượng?',
      options: [
        'Sinh sản vô tính, vì chỉ cần một cá thể ban đầu',
        'Sinh sản hữu tính, vì tạo con đa dạng',
        'Sinh sản hữu tính, vì cần ít năng lượng hơn',
        'Không hình thức nào',
      ],
      answer: 0,
      hints: ['Sinh sản hữu tính ở loài này cần giao tử của cá thể khác.'],
      solution:
        'Loài tự bất thụ cần hạt phấn của cây khác để sinh sản hữu tính, nên khi chỉ còn một cá thể thì chỉ sinh sản vô tính mới tạo được cá thể mới. Đó là ưu điểm của sinh sản vô tính khi mật độ cá thể thấp.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao sinh sản hữu tính giúp sinh vật thích nghi tốt hơn khi môi trường thay đổi?',
      options: [
        'Vì thế hệ con có nhiều tổ hợp gene khác nhau, trong đó có thể có tổ hợp thích nghi với điều kiện mới',
        'Vì thế hệ con sinh ra nhanh hơn và nhiều hơn',
        'Vì thế hệ con giống hệt bố mẹ',
        'Vì chỉ cần một cá thể ban đầu',
      ],
      answer: 0,
      hints: ['So sánh đặc điểm di truyền của con ở hai hình thức.'],
      solution:
        'Giảm phân và thụ tinh tạo ra nhiều biến dị tổ hợp; khi môi trường thay đổi, một số cá thể mang tổ hợp gene phù hợp sẽ sống sót và duy trì loài.',
    },
  ],
  takeaways: [
    'Sinh sản là quá trình tạo ra cơ thể mới, đảm bảo sự phát triển liên tục của loài.',
    'Sinh sản vô tính: không có kết hợp giao tử, dựa trên nguyên phân; con giống nhau và giống mẹ; thích nghi với môi trường ổn định.',
    'Sinh sản hữu tính: giao tử đực kết hợp giao tử cái tạo hợp tử; dựa trên giảm phân, thụ tinh và nguyên phân; con đa dạng di truyền; thích nghi khi môi trường thay đổi.',
    'Sinh sản vô tính có lợi khi mật độ thấp nhưng dễ chết hàng loạt khi môi trường đổi; sinh sản hữu tính cần giao tử đực và cái, khó duy trì khi mật độ quá thấp.',
  ],
};

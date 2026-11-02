/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phân giải các chất qua hô hấp tế bào và lên men cung cấp ATP; tổng hợp các chất, với quang hợp là ví dụ tiêu biểu, tạo chất hữu cơ và tích luỹ năng lượng; hai quá trình trái ngược nhưng thống nhất với nhau.',
  intro:
    'Vì sao tập nặng khi thiếu oxygen thì cơ bị mỏi, vì sao bột mì ủ men lại nở, và lá cây làm thế nào "bắt" được ánh sáng Mặt Trời vào đường? Tất cả đều là những con đường biến đổi chất và năng lượng trong tế bào.',
  objectives: [
    'Phát biểu được khái niệm phân giải và tổng hợp các chất trong tế bào.',
    'Trình bày được các giai đoạn của hô hấp tế bào: nơi diễn ra, đầu vào, đầu ra và số ATP.',
    'Phân biệt được hô hấp tế bào với lên men; nêu được lên men rượu và lên men lactic.',
    'Trình bày được hai pha của quang hợp; phân biệt được quang hợp, hoá tổng hợp và quang khử.',
    'Giải thích được mối quan hệ giữa phân giải và tổng hợp.',
  ],
  sections: [
    {
      heading: 'Phân giải các chất và giải phóng năng lượng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân giải',
          text: 'Phân giải các chất trong tế bào là quá trình phá vỡ các liên kết trong phân tử sinh học để tạo thành các phân tử nhỏ hơn, đồng thời giải phóng năng lượng. Một phần năng lượng được tích luỹ trong ATP, phần còn lại toả ra dưới dạng nhiệt.',
        },
        {
          type: 'p',
          text: 'Ví dụ: tinh bột phân giải thành glucose, protein thành amino acid, lipid thành glycerol và acid béo. Tuỳ có hay không có oxygen, glucose đi theo con đường phân giải hiếu khí (hô hấp tế bào) hoặc phân giải kị khí (lên men).',
        },
      ],
    },
    {
      heading: 'Hô hấp tế bào',
      blocks: [
        {
          type: 'p',
          text: 'Hô hấp tế bào phân giải hoàn toàn glucose thành $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$ khi có $\\mathrm{O_2}$, tích luỹ khoảng $36$ đến $38$ ATP từ một phân tử glucose:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6 + 6\\,O_2 \\longrightarrow 6\\,CO_2 + 6\\,H_2O} + \\text{năng lượng}',
        },
        {
          type: 'table',
          caption: 'Các giai đoạn tính cho một phân tử glucose',
          head: ['Giai đoạn', 'Nơi diễn ra', 'Sản phẩm chính', 'ATP'],
          rows: [
            ['Đường phân', 'Tế bào chất', '$2$ pyruvate, $2$ NADH', '$2$'],
            [
              'Chu trình Krebs (cùng bước tạo acetyl-CoA trước đó)',
              'Chất nền ti thể',
              '$6\\ \\mathrm{CO_2}$, $8$ NADH, $2\\ \\mathrm{FADH_2}$',
              '$2$',
            ],
            ['Chuỗi truyền electron', 'Màng trong ti thể', '$\\mathrm{H_2O}$', '$32$ đến $34$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cách đếm ATP',
          text: 'Trên $1$ glucose có tất cả $10$ NADH và $2\\ \\mathrm{FADH_2}$. Theo cách tính quen thuộc, mỗi NADH cho khoảng $3$ ATP, mỗi $\\mathrm{FADH_2}$ cho khoảng $2$ ATP, nên tối đa $10 \\cdot 3 + 2 \\cdot 2 = 34$ ATP ở chuỗi truyền electron. Hai NADH từ đường phân phải đi vào ti thể nên có thể bị hao $2$ ATP, do đó tổng là $36$ đến $38$ ATP.',
        },
        {
          type: 'p',
          text: 'Đường phân không cần $\\mathrm{O_2}$. Có $\\mathrm{O_2}$, pyruvate đi vào ti thể, chuyển thành acetyl-CoA rồi vào chu trình Krebs. $\\mathrm{O_2}$ chỉ dùng trực tiếp ở cuối chuỗi truyền electron: nó nhận electron và tạo nước.',
        },
      ],
    },
    {
      heading: 'Lên men',
      blocks: [
        {
          type: 'p',
          text: 'Khi không có $\\mathrm{O_2}$, nhiều tế bào phân giải glucose không hoàn toàn bằng lên men. Lên men gồm đường phân và giai đoạn lên men, trong đó electron từ NADH chuyển cho phân tử hữu cơ. Giai đoạn này không tạo thêm ATP, nên cả quá trình chỉ tích luỹ $2$ ATP từ một glucose, nhưng nó trả lại $\\mathrm{NAD^+}$ để đường phân chạy tiếp.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Lên men rượu', 'Lên men lactic'],
          rows: [
            ['Sinh vật', 'Nấm men', 'Vi khuẩn lactic; tế bào cơ người khi thiếu $\\mathrm{O_2}$'],
            ['Sản phẩm', 'Ethanol và $\\mathrm{CO_2}$', 'Lactate (lactic acid)'],
            ['Ứng dụng', 'Làm bánh mì, sản xuất rượu, bia', 'Muối dưa, làm sữa chua'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao đau mỏi cơ?',
          text: 'Khi vận động mạnh, tế bào cơ không đủ $\\mathrm{O_2}$ nên tăng lên men lactic để có ATP nhanh. Lactic acid tích tụ gây mỏi cơ. Khởi động kĩ, tập thở, uống đủ nước và nghỉ ngơi hợp lí giúp hạn chế điều này.',
        },
      ],
    },
    {
      heading: 'Tổng hợp các chất và quang hợp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tổng hợp',
          text: 'Tổng hợp các chất trong tế bào là quá trình tạo thành các chất phức tạp từ các chất đơn giản, nhờ năng lượng từ ATP. Ví dụ: acid nucleic từ các nucleotide, protein từ amino acid bằng liên kết peptide, lipid từ glycerol và acid béo.',
        },
        {
          type: 'p',
          text: 'Quang hợp là quá trình cây xanh, tảo và vi khuẩn lam dùng năng lượng ánh sáng để tổng hợp carbohydrate từ $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$, giải phóng $\\mathrm{O_2}$. Ở cây xanh, quang hợp diễn ra trong lục lạp.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{6\\,CO_2 + 6\\,H_2O} \\xrightarrow[\\text{diệp lục}]{\\text{ánh sáng}} \\mathrm{C_6H_{12}O_6 + 6\\,O_2}',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Pha sáng', 'Pha tối (chu trình Calvin)'],
          rows: [
            ['Nơi diễn ra', 'Màng thylakoid', 'Chất nền lục lạp'],
            [
              'Đầu vào',
              'Ánh sáng, $\\mathrm{H_2O}$, ADP, $\\mathrm{NADP^+}$',
              '$\\mathrm{CO_2}$, ATP, NADPH',
            ],
            ['Đầu ra', '$\\mathrm{O_2}$, ATP, NADPH', 'Carbohydrate, ADP, $\\mathrm{NADP^+}$'],
            [
              'Vai trò',
              'Chuyển quang năng thành hoá năng',
              'Cố định $\\mathrm{CO_2}$ thành chất hữu cơ',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dễ nhầm',
          text: 'Toàn bộ $\\mathrm{O_2}$ thải ra trong quang hợp đến từ nước chứ không phải từ $\\mathrm{CO_2}$. "Pha tối" không có nghĩa là chỉ xảy ra ban đêm: nó không cần ánh sáng trực tiếp, nhưng cần ATP và NADPH do pha sáng tạo ra.',
        },
      ],
    },
    {
      heading: 'Hoá tổng hợp và quang khử',
      blocks: [
        {
          type: 'p',
          text: 'Một số vi khuẩn cũng tự tổng hợp chất hữu cơ từ $\\mathrm{CO_2}$ theo cách khác. Hoá tổng hợp dùng năng lượng từ phản ứng oxy hoá chất vô cơ, như vi khuẩn nitrate hoá. Quang khử dùng ánh sáng nhưng thay $\\mathrm{H_2O}$ bằng $\\mathrm{H_2S}$, S, $\\mathrm{H_2}$ hay chất hữu cơ khác nên không giải phóng $\\mathrm{O_2}$, như vi khuẩn lưu huỳnh màu tía, màu lục.',
        },
        { type: 'widget', name: 'so-sanh' },
      ],
    },
    {
      heading: 'Mối quan hệ giữa phân giải và tổng hợp',
      blocks: [
        {
          type: 'p',
          text: 'Phân giải và tổng hợp trái ngược nhau nhưng thống nhất với nhau. Phân giải cung cấp năng lượng (ATP) và nguyên liệu trung gian cho tổng hợp; tổng hợp tạo các phân tử để xây dựng tế bào và tích luỹ năng lượng, là nguyên liệu cho phân giải. Hai quá trình này giữ cho tế bào luôn đổi mới và duy trì sự sống.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đi theo một phân tử glucose',
    instruction:
      'Bấm từng giai đoạn để xem nơi diễn ra, đầu vào, đầu ra và số ATP cộng dồn trên một glucose. Tắt $\\mathrm{O_2}$ để thấy phân giải chuyển sang lên men; đổi sang quang hợp rồi tắt ánh sáng để xem hai pha phụ thuộc nhau.',
  },
  examples: [
    {
      problem:
        'Một tế bào phân giải hoàn toàn $5$ phân tử glucose bằng hô hấp tế bào (lấy $38$ ATP mỗi phân tử). Cùng lượng đó nếu lên men thì tế bào thu bao nhiêu ATP, ít hơn bao nhiêu lần?',
      steps: [
        'Hô hấp tế bào: $5 \\cdot 38 = 190$ ATP.',
        'Lên men: $2$ ATP mỗi glucose, nên $5 \\cdot 2 = 10$ ATP.',
        'So sánh: $190 : 10 = 19$ lần.',
      ],
      answer: 'Lên men thu $10$ ATP, ít hơn $19$ lần.',
    },
    {
      problem:
        'Tính số NADH tạo ra khi phân giải hoàn toàn một phân tử glucose, biết mỗi acetyl-CoA vào chu trình Krebs tạo $3$ NADH.',
      steps: [
        'Đường phân tạo $2$ NADH.',
        'Mỗi pyruvate chuyển thành acetyl-CoA tạo $1$ NADH; hai pyruvate tạo $2$ NADH.',
        'Hai acetyl-CoA vào chu trình Krebs tạo $2 \\cdot 3 = 6$ NADH.',
        'Cộng lại: $2 + 2 + 6 = 10$ NADH.',
      ],
      answer: '$10$ NADH.',
    },
    {
      problem:
        'Bột mì trộn men và đường, để nơi ấm thì khối bột nở. Giải thích bằng quá trình trong tế bào nấm men.',
      steps: [
        'Khối bột ít oxygen, nấm men lên men rượu từ đường.',
        'Lên men rượu tạo ethanol và $\\mathrm{CO_2}$.',
        'Khí $\\mathrm{CO_2}$ bị giữ trong khối bột, tạo các lỗ khí làm bột nở.',
      ],
      answer: 'Khí $\\mathrm{CO_2}$ của quá trình lên men rượu làm bột nở.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn hô hấp tế bào theo đúng thứ tự.',
      items: ['Chuỗi truyền electron', 'Đường phân', 'Chu trình Krebs'],
      answer: [1, 2, 0],
      hints: ['Giai đoạn đầu tiên xảy ra ngoài ti thể.'],
      solution: 'Đường phân, chu trình Krebs, rồi chuỗi truyền electron.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi giai đoạn với nơi diễn ra.',
      left: [
        'Đường phân',
        'Chu trình Krebs',
        'Chuỗi truyền electron',
        'Pha sáng',
        'Chu trình Calvin',
      ],
      right: [
        'Tế bào chất',
        'Chất nền ti thể',
        'Màng trong ti thể',
        'Màng thylakoid',
        'Chất nền lục lạp',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Hô hấp: tế bào chất và ti thể. Quang hợp: lục lạp.'],
      solution:
        'Đường phân ở tế bào chất; Krebs ở chất nền ti thể; chuỗi truyền electron ở màng trong ti thể; pha sáng ở màng thylakoid; chu trình Calvin ở chất nền lục lạp.',
    },
    {
      type: 'choice',
      prompt: 'Giai đoạn nào tạo nhiều ATP nhất trong hô hấp tế bào?',
      options: ['Đường phân', 'Chu trình Krebs', 'Chuỗi truyền electron', 'Tạo acetyl-CoA'],
      answer: 2,
      hints: ['Giai đoạn nào dùng NADH và $\\mathrm{FADH_2}$ từ các giai đoạn trước?'],
      solution: 'Chuỗi truyền electron tạo $32$ đến $34$ ATP, phần lớn số ATP của cả quá trình.',
    },
    {
      type: 'number',
      prompt: 'Phân giải hoàn toàn một phân tử glucose tạo bao nhiêu phân tử $\\mathrm{CO_2}$?',
      answer: 6,
      hints: [
        'Glucose có bao nhiêu nguyên tử carbon? Mọi carbon đều đi ra ở dạng $\\mathrm{CO_2}$.',
      ],
      solution:
        'Glucose có $6$ C. Có $2$ $\\mathrm{CO_2}$ khi tạo acetyl-CoA và $4$ $\\mathrm{CO_2}$ ở chu trình Krebs, tổng $6$.',
    },
    {
      type: 'number',
      prompt:
        'Trong một phân tử glucose, chuỗi truyền electron nhận $10$ NADH và $2\\ \\mathrm{FADH_2}$. Lấy $1$ NADH cho $3$ ATP và $1\\ \\mathrm{FADH_2}$ cho $2$ ATP, chuỗi tạo bao nhiêu ATP?',
      answer: 34,
      unit: 'ATP',
      hints: ['Nhân từng loại rồi cộng lại.'],
      solution: '$10 \\cdot 3 + 2 \\cdot 2 = 30 + 4 = 34$ ATP.',
    },
    {
      type: 'number',
      prompt:
        'Một tế bào cần $76$ ATP. Nếu dùng lên men, tế bào cần phân giải bao nhiêu phân tử glucose?',
      answer: 38,
      hints: ['Lên men được bao nhiêu ATP từ một glucose?'],
      solution: 'Mỗi glucose lên men cho $2$ ATP, nên cần $76 : 2 = 38$ glucose.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào là sản phẩm của pha sáng?',
      options: ['$\\mathrm{O_2}$', 'ATP', 'NADPH', 'Glucose', '$\\mathrm{CO_2}$'],
      answers: [0, 1, 2],
      hints: ['Glucose chỉ được tạo ở pha sau, còn $\\mathrm{CO_2}$ là nguyên liệu.'],
      solution: 'Pha sáng tạo $\\mathrm{O_2}$, ATP và NADPH.',
    },
    {
      type: 'choice',
      prompt: '$\\mathrm{O_2}$ thải ra trong quang hợp có nguồn gốc từ chất nào?',
      options: ['$\\mathrm{CO_2}$', 'Glucose', 'ATP', '$\\mathrm{H_2O}$'],
      answer: 3,
      hints: ['Ở pha sáng, chất nào bị phân li?'],
      solution: 'Nước bị phân li ở pha sáng và giải phóng $\\mathrm{O_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao lên men vẫn cần giai đoạn sau đường phân dù giai đoạn đó không tạo ATP?',
      options: [
        'Để tạo thêm $\\mathrm{O_2}$ cho tế bào',
        'Để trả lại $\\mathrm{NAD^+}$, giúp đường phân tiếp tục tạo ATP',
        'Để phân giải hoàn toàn glucose thành $\\mathrm{CO_2}$ và nước',
        'Để đưa pyruvate vào ti thể',
      ],
      answer: 1,
      hints: ['Đường phân cần $\\mathrm{NAD^+}$. Nếu NADH không được trả lại thì sao?'],
      solution:
        'Đường phân dùng $\\mathrm{NAD^+}$. Giai đoạn lên men oxy hoá NADH thành $\\mathrm{NAD^+}$ nên đường phân có thể chạy tiếp và tiếp tục tạo ATP.',
    },
    {
      type: 'text',
      prompt:
        'Vận động viên chạy nước rút, tế bào cơ thiếu $\\mathrm{O_2}$ và tích tụ chất gây mỏi cơ. Chất đó là gì?',
      accept: ['lactic acid', 'acid lactic', 'lactate', 'axit lactic'],
      hints: ['Đây là sản phẩm của kiểu lên men trong tế bào cơ.'],
      solution: 'Đó là lactic acid, sản phẩm của lên men lactic.',
    },
    {
      type: 'choice',
      prompt: 'Điểm nào phân biệt quang khử với quang hợp ở cây xanh?',
      options: [
        'Quang khử không cần ánh sáng',
        'Quang khử không dùng $\\mathrm{CO_2}$',
        'Quang khử không dùng $\\mathrm{H_2O}$ và không giải phóng $\\mathrm{O_2}$',
        'Quang khử chỉ xảy ra ở thực vật',
      ],
      answer: 2,
      hints: ['Hãy nghĩ về chất cho electron ở vi khuẩn lưu huỳnh.'],
      solution:
        'Quang khử dùng ánh sáng và $\\mathrm{CO_2}$ nhưng thay $\\mathrm{H_2O}$ bằng chất khác như $\\mathrm{H_2S}$, nên không thải $\\mathrm{O_2}$.',
    },
  ],
  takeaways: [
    'Phân giải tạo phân tử nhỏ hơn và giải phóng năng lượng; tổng hợp tạo chất phức tạp và tiêu thụ ATP.',
    'Hô hấp tế bào gồm đường phân, chu trình Krebs và chuỗi truyền electron, cho khoảng $36$ đến $38$ ATP mỗi glucose.',
    'Lên men không cần $\\mathrm{O_2}$, chỉ cho $2$ ATP; lên men rượu tạo ethanol và $\\mathrm{CO_2}$, lên men lactic tạo lactate.',
    'Quang hợp gồm pha sáng (tạo $\\mathrm{O_2}$, ATP, NADPH) và pha tối (dùng chúng để cố định $\\mathrm{CO_2}$).',
    'Hoá tổng hợp dùng năng lượng oxy hoá chất vô cơ; quang khử dùng ánh sáng nhưng không thải $\\mathrm{O_2}$.',
    'Phân giải và tổng hợp trái ngược nhưng thống nhất, là hai mặt của chuyển hoá trong tế bào.',
  ],
};

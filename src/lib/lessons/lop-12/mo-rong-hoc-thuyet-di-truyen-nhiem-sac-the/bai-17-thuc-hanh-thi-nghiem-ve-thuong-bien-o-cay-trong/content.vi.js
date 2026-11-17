/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành bố trí thí nghiệm trồng các cây cùng kiểu gene (rau muống, khoai lang, rau ngót…) ở lô đối chứng và lô thí nghiệm chỉ khác một yếu tố môi trường, đo chiều cao và khối lượng, so sánh kiểu hình để chứng minh thường biến.',
  intro:
    'Hai luống rau muống trồng từ cùng một khóm, một luống tưới mỗi ngày, một luống mỗi tuần mới tưới một lần. Sau một tháng, hai luống khác nhau thế nào, và sự khác nhau ấy nói lên điều gì về kiểu gene và môi trường?',
  objectives: [
    'Bố trí được thí nghiệm có lô đối chứng và lô thí nghiệm, trong đó các cây cùng kiểu gene và hai lô chỉ khác nhau một yếu tố môi trường.',
    'Theo dõi, đo và ghi được số liệu về chiều cao, khối lượng của cây ở hai lô.',
    'Xử lí số liệu bằng tỉ lệ phần trăm, so sánh kiểu hình và rút ra kết luận về thường biến.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị và nguyên lí',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: cuốc, xẻng, dụng cụ tưới (bình tưới, vòi hoặc máy bơm), thước đo, cân.',
            'Nguyên liệu: phân hữu cơ vi sinh, phân NPK.',
            'Cây thí nghiệm: loài nhân giống được bằng giâm cành, giâm ngọn hoặc chiết cành để có nhiều cây cùng kiểu gene, ví dụ rau muống, khoai lang, rau ngót, dâu tằm.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nguyên lí thí nghiệm',
          text: 'Dùng các cây có cùng kiểu gene, trồng ở hai lô: lô đối chứng và lô thí nghiệm. Hai lô giống nhau về số lượng cây, tuổi cây, loại đất, dinh dưỡng và cách chăm sóc; chỉ khác nhau một yếu tố đang nghiên cứu (nước, phân bón hoặc ánh sáng). Đơn giản nhất là cho hai lô khác nhau về chế độ tưới nước. Khi đó, mọi khác biệt về kiểu hình giữa hai lô là do yếu tố môi trường ấy gây ra.',
        },
      ],
    },
    {
      heading: 'Cách tiến hành (thí nghiệm với rau muống)',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị đất: làm sạch cỏ, xới tơi đất, bón lót trước khi trồng $7$ – $10$ ngày. Lên hai luống cao $20$ – $30$ cm, rộng $1$ m, dài $1{,}5$ m, cách nhau $1$ m.',
            'Trồng cây: cắt các đoạn cuống già dài khoảng $15$ cm từ cùng một khóm rau muống (mọc từ cùng một hạt). Cắm sâu $4$ – $5$ cm, cây cách cây $15$ cm, nén nhẹ đất; tưới đủ ẩm cho cây ra rễ, che bớt nắng nếu cần.',
            'Tạo khác biệt về chế độ tưới: khi cây đã sinh trưởng bình thường, lô đối chứng tưới mỗi ngày một lần, lô thí nghiệm tưới mỗi tuần một lần với lượng nước mỗi lần như nhau. Các khâu chăm sóc khác giữ như nhau.',
            'Theo dõi: sau khoảng $3$ tuần hoặc $1$ tháng, đo chiều cao trung bình của cây (từ gốc đến ngọn) và cân khối lượng rau thu hoạch của mỗi lô.',
            'Xử lí số liệu: tính giá trị của lô thí nghiệm bằng bao nhiêu phần trăm giá trị của lô đối chứng.',
          ],
        },
        {
          type: 'tex',
          tex: '\\text{Tỉ lệ (\\%)} = \\frac{\\text{giá trị của lô thí nghiệm}}{\\text{giá trị của lô đối chứng}} \\cdot 100\\%',
        },
      ],
    },
    {
      heading: 'Báo cáo kết quả',
      blocks: [
        {
          type: 'p',
          text: 'Báo cáo gồm: mục đích thí nghiệm; kết quả và giải thích (bảng số liệu, nhận xét, giải thích sự khác biệt giữa hai lô); trả lời câu hỏi. Ghi số liệu theo mẫu:',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng số liệu',
          head: [
            'Thời điểm đo',
            'Chiều cao TB lô ĐC (cm)',
            'Chiều cao TB lô TN (cm)',
            'TN so với ĐC (%)',
            'Khối lượng lô ĐC (kg)',
            'Khối lượng lô TN (kg)',
            'TN so với ĐC (%)',
          ],
          rows: [
            ['Sau $3$ tuần', '…', '…', '…', '…', '…', '…'],
            ['Sau $1$ tháng', '…', '…', '…', '…', '…', '…'],
          ],
        },
        {
          type: 'list',
          items: [
            'Câu hỏi a) Nếu kết quả giữa hai lô khác nhau không đáng kể, cần điều chỉnh thí nghiệm thế nào? Giải thích.',
            'Câu hỏi b) Nếu kết quả giữa hai lô về cơ bản là như nhau, có thể rút ra kết luận gì có ý nghĩa thực tiễn? Giải thích.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Thí nghiệm ảo: hai luống rau muống',
    instruction:
      'Chọn yếu tố môi trường khác nhau giữa hai lô, nguồn cây và thời điểm đo, rồi bấm "Trồng và đo". Tính chiều cao của lô thí nghiệm bằng bao nhiêu phần trăm lô đối chứng. Thử chọn "Mỗi lô một giống" để thấy vì sao phải dùng các cây cùng kiểu gene. Số liệu là minh hoạ.',
  },
  examples: [
    {
      problem:
        'Sau $1$ tháng, chiều cao trung bình của cây ở lô đối chứng là $38{,}5$ cm, lô thí nghiệm (tưới mỗi tuần một lần) là $24{,}2$ cm; khối lượng rau thu hoạch của hai lô lần lượt là $2{,}4$ kg và $1{,}3$ kg. Xử lí số liệu và rút ra kết luận.',
      steps: [
        'Chiều cao: $\\frac{24{,}2}{38{,}5} \\cdot 100\\% \\approx 62{,}9\\%$.',
        'Khối lượng: $\\frac{1{,}3}{2{,}4} \\cdot 100\\% \\approx 54{,}2\\%$.',
        'Hai lô cùng kiểu gene (cuống từ cùng một khóm) và chỉ khác chế độ tưới, nên sự giảm chiều cao và khối lượng ở lô thí nghiệm là do thiếu nước.',
      ],
      answer:
        'Lô thí nghiệm chỉ đạt khoảng $62{,}9\\%$ chiều cao và $54{,}2\\%$ khối lượng của lô đối chứng: cùng kiểu gene nhưng môi trường khác cho kiểu hình khác, đó là thường biến.',
    },
    {
      problem:
        'Một nhóm học sinh thấy chiều cao lô thí nghiệm bằng $97\\%$ lô đối chứng. Nhóm nên điều chỉnh thí nghiệm thế nào?',
      steps: [
        'Khác biệt $3\\%$ là nhỏ, có thể chỉ do sai số giữa các cây.',
        'Có thể yếu tố môi trường giữa hai lô khác nhau chưa đủ nhiều, hoặc thời gian theo dõi chưa đủ dài để kiểu hình khác biệt rõ.',
        'Điều chỉnh: tăng mức khác biệt của yếu tố nghiên cứu (ví dụ lô thí nghiệm tưới thưa hơn nữa), kéo dài thời gian theo dõi, tăng số cây mỗi lô và lặp lại thí nghiệm; vẫn giữ các điều kiện khác như nhau.',
      ],
      answer:
        'Tăng mức khác biệt của yếu tố môi trường giữa hai lô, theo dõi lâu hơn, tăng số cây và lặp lại thí nghiệm để kết quả đáng tin cậy.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Chiều cao trung bình của rau muống ở lô đối chứng là $40{,}0$ cm, ở lô thí nghiệm là $26{,}0$ cm. Chiều cao lô thí nghiệm bằng bao nhiêu phần trăm lô đối chứng?',
      answer: 65,
      tolerance: 0.05,
      unit: '%',
      hints: ['Lấy giá trị lô thí nghiệm chia cho giá trị lô đối chứng rồi nhân $100\\%$.'],
      solution: '$\\frac{26{,}0}{40{,}0} \\cdot 100\\% = 65\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Khối lượng rau thu hoạch ở lô đối chứng là $3{,}2$ kg, ở lô thí nghiệm là $2{,}4$ kg. Khối lượng lô thí nghiệm bằng bao nhiêu phần trăm lô đối chứng?',
      answer: 75,
      tolerance: 0.05,
      unit: '%',
      hints: ['Tỉ lệ $= \\frac{\\text{TN}}{\\text{ĐC}} \\cdot 100\\%$.'],
      solution: '$\\frac{2{,}4}{3{,}2} \\cdot 100\\% = 75\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Chiều cao của $5$ cây ở một lô là $32$; $35$; $30$; $34$; $29$ cm. Chiều cao trung bình của lô là bao nhiêu?',
      answer: 32,
      tolerance: 0.05,
      unit: 'cm',
      hints: ['Cộng chiều cao các cây rồi chia cho số cây.'],
      solution: '$\\frac{32 + 35 + 30 + 34 + 29}{5} = \\frac{160}{5} = 32$ cm.',
    },
    {
      type: 'number',
      prompt:
        'Trong thí nghiệm che bớt ánh sáng, cây ở lô thí nghiệm cao trung bình $36$ cm, bằng $120\\%$ chiều cao lô đối chứng. Chiều cao trung bình của lô đối chứng là bao nhiêu?',
      answer: 30,
      tolerance: 0.05,
      unit: 'cm',
      hints: ['$36$ cm ứng với $120\\%$; tìm giá trị ứng với $100\\%$.'],
      solution: 'Chiều cao lô đối chứng: $36 : 120\\% = 36 \\cdot \\frac{100}{120} = 30$ cm.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao các cây ở hai lô phải được giâm từ các đoạn cuống của cùng một khóm rau muống?',
      options: [
        'Để các cây có cùng kiểu gene, khác biệt kiểu hình giữa hai lô chỉ do môi trường',
        'Để cây mọc nhanh hơn cây trồng từ hạt',
        'Để hai lô có số lượng cây bằng nhau',
        'Để cây không bị sâu bệnh',
      ],
      answer: 0,
      hints: ['Thường biến là sự thay đổi kiểu hình của cùng một kiểu gene.'],
      solution:
        'Cây giâm từ cùng một khóm (mọc từ một hạt) có cùng kiểu gene. Khi kiểu gene như nhau, khác biệt kiểu hình giữa hai lô chỉ có thể do yếu tố môi trường khác nhau.',
    },
    {
      type: 'multi',
      prompt:
        'Trong thí nghiệm tìm hiểu ảnh hưởng của chế độ tưới nước, những điều kiện nào phải giống nhau ở hai lô?',
      options: ['Số lượng cây', 'Tuổi cây', 'Loại đất và phân bón', 'Số lần tưới nước mỗi tuần'],
      answers: [0, 1, 2],
      hints: ['Chỉ yếu tố đang nghiên cứu được phép khác nhau.'],
      solution:
        'Số lượng cây, tuổi cây, đất, phân bón và cách chăm sóc phải như nhau; chỉ số lần tưới nước (yếu tố nghiên cứu) là khác nhau giữa hai lô.',
    },
    {
      type: 'multi',
      prompt:
        'Chọn các loài phù hợp làm cây thí nghiệm về thường biến theo cách của bài thực hành.',
      options: [
        'Rau muống',
        'Khoai lang',
        'Rau ngót',
        'Dâu tằm',
        'Lúa gieo từ hạt của nhiều giống khác nhau',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Cần loài nhân giống được bằng giâm hoặc chiết cành để có nhiều cây cùng kiểu gene.'],
      solution:
        'Rau muống, khoai lang, rau ngót, dâu tằm đều giâm được để có nhiều cây cùng kiểu gene. Lúa gieo từ hạt của nhiều giống khác nhau có kiểu gene khác nhau nên không dùng được.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của thí nghiệm với rau muống theo đúng trình tự.',
      items: [
        'Làm đất, bón lót và lên hai luống',
        'Giâm các đoạn cuống từ cùng một khóm vào hai luống',
        'Tưới lô đối chứng mỗi ngày, lô thí nghiệm mỗi tuần một lần',
        'Đo chiều cao, cân khối lượng rau của mỗi lô',
        'Tính tỉ lệ phần trăm lô thí nghiệm so với lô đối chứng và rút ra kết luận',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Chỉ bắt đầu tạo khác biệt về tưới nước khi cây đã sinh trưởng bình thường.'],
      solution:
        'Làm đất → trồng cây → tạo khác biệt về chế độ tưới → đo, cân → xử lí số liệu và kết luận.',
    },
    {
      type: 'choice',
      prompt:
        'Kết quả giữa hai lô khác nhau không đáng kể. Cách điều chỉnh thí nghiệm nào hợp lí nhất?',
      options: [
        'Tăng mức khác biệt về chế độ tưới giữa hai lô, theo dõi lâu hơn và tăng số cây',
        'Bón thêm phân cho lô thí nghiệm',
        'Trồng lô thí nghiệm bằng một giống rau muống khác',
        'Chỉ đo một cây ở mỗi lô cho nhanh',
      ],
      answer: 0,
      hints: ['Vẫn phải giữ nguyên tắc: cùng kiểu gene, chỉ khác một yếu tố.'],
      solution:
        'Có thể mức khác biệt về nước chưa đủ lớn hoặc thời gian chưa đủ dài. Tăng mức khác biệt, theo dõi lâu hơn, tăng số cây và lặp lại; không được thêm yếu tố khác (phân bón) hay đổi giống.',
    },
    {
      type: 'choice',
      prompt:
        'Nếu kết quả giữa lô tưới mỗi ngày và lô tưới mỗi tuần một lần về cơ bản là như nhau, có thể rút ra kết luận thực tiễn nào?',
      options: [
        'Giống rau muống này chịu được việc tưới thưa trong điều kiện thí nghiệm, có thể giảm số lần tưới để tiết kiệm nước, công sức mà năng suất không giảm',
        'Rau muống không có thường biến',
        'Nước không cần thiết cho rau muống',
        'Kiểu gene của rau muống đã thay đổi',
      ],
      answer: 0,
      hints: ['Năng suất không giảm khi tưới ít hơn thì người trồng được lợi gì?'],
      solution:
        'Trong khoảng điều kiện đã thử, giảm tưới không làm giảm năng suất: có thể tưới thưa hơn để tiết kiệm nước và công chăm sóc. Kết luận chỉ đúng trong điều kiện thí nghiệm, không có nghĩa là cây không cần nước.',
    },
    {
      type: 'choice',
      prompt:
        'Lấy các đoạn cuống từ cây ở lô thí nghiệm (tưới thưa, cây thấp) đem trồng với chế độ tưới mỗi ngày. Các cây mới sẽ',
      options: [
        'sinh trưởng như cây ở lô đối chứng',
        'vẫn thấp như cây ở lô thí nghiệm',
        'thấp hơn nữa',
        'chết vì đã quen thiếu nước',
      ],
      answer: 0,
      hints: ['Thường biến có làm thay đổi kiểu gene không?'],
      solution:
        'Cây thấp ở lô thí nghiệm là thường biến, kiểu gene không đổi. Trồng trong điều kiện tưới đủ, cây mới phát triển như cây ở lô đối chứng: thường biến không di truyền.',
    },
    {
      type: 'choice',
      prompt:
        'Một nhóm cho lô đối chứng tưới mỗi ngày và bón phân NPK, lô thí nghiệm tưới mỗi tuần một lần và không bón phân. Thí nghiệm này mắc lỗi gì?',
      options: [
        'Hai lô khác nhau hai yếu tố nên không biết khác biệt kiểu hình do yếu tố nào',
        'Không có lô đối chứng',
        'Các cây khác kiểu gene',
        'Không có lỗi',
      ],
      answer: 0,
      hints: ['Đếm số yếu tố môi trường khác nhau giữa hai lô.'],
      solution:
        'Hai lô khác cả chế độ tưới lẫn phân bón, nên không tách được ảnh hưởng của từng yếu tố. Mỗi thí nghiệm chỉ cho hai lô khác nhau một yếu tố.',
    },
  ],
  takeaways: [
    'Thí nghiệm về thường biến dùng các cây cùng kiểu gene (giâm từ cùng một khóm hoặc một cây).',
    'Lô đối chứng và lô thí nghiệm giống nhau mọi điều kiện, chỉ khác một yếu tố môi trường (nước, phân bón, ánh sáng).',
    'Đo chiều cao, khối lượng; tính tỉ lệ $\\frac{\\text{TN}}{\\text{ĐC}} \\cdot 100\\%$ để so sánh kiểu hình.',
    'Khác biệt kiểu hình giữa hai lô là thường biến: do môi trường, không làm đổi kiểu gene và không di truyền.',
  ],
};

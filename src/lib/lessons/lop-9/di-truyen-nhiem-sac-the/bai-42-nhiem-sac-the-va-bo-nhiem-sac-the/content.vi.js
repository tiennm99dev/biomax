/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nhiễm sắc thể là cấu trúc mang gene trong nhân tế bào, gồm DNA và protein histone; bộ NST lưỡng bội 2n, đơn bội n và tính đặc trưng của bộ NST ở mỗi loài.',
  intro:
    'Nếu nối toàn bộ các phân tử DNA trong nhân một tế bào người thành một sợi, sợi đó dài khoảng $2$ m, vậy mà nhân tế bào chỉ có đường kính khoảng $5$ µm. Bằng cách nào DNA dài như vậy được xếp gọn trong nhân? Và vì sao người ta có thể nhận ra một loài chỉ bằng cách quan sát nhiễm sắc thể của nó? Trong bài này, em sẽ tự xếp bộ nhiễm sắc thể của ruồi giấm và của người thành từng cặp.',
  objectives: [
    'Nêu được khái niệm nhiễm sắc thể; mô tả được cấu trúc của nhiễm sắc thể (chromatid, tâm động, DNA và protein histone).',
    'Phân biệt được nhiễm sắc thể đơn và nhiễm sắc thể kép; nêu được ba loại nhiễm sắc thể theo vị trí tâm động.',
    'Nêu được khái niệm cặp nhiễm sắc thể tương đồng, bộ nhiễm sắc thể lưỡng bội ($2n$) và đơn bội ($n$).',
    'Trình bày được tính đặc trưng của bộ nhiễm sắc thể ở mỗi loài, lấy được ví dụ về số lượng nhiễm sắc thể của một số loài.',
  ],
  sections: [
    {
      heading: 'Nhiễm sắc thể',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiễm sắc thể (NST)',
          text: 'Nhiễm sắc thể là cấu trúc mang gene nằm trong nhân tế bào, dễ bắt màu khi được nhuộm bằng thuốc nhuộm kiềm tính. NST là cơ sở vật chất chủ yếu của tính di truyền ở cấp độ tế bào của sinh vật nhân thực. Các gene nằm dọc theo NST, mỗi gene ở một vị trí xác định gọi là locus.',
        },
        {
          type: 'p',
          text: 'NST thay đổi hình dạng qua các kì của quá trình phân bào. Ở kì giữa, NST ở trạng thái kép, đóng xoắn cực đại nên có hình dạng đặc trưng và quan sát rõ nhất dưới kính hiển vi; thường gặp dạng hình que, hình chữ V, hình chữ X hoặc hình hạt.',
        },
        {
          type: 'list',
          items: [
            'Thành phần: NST được cấu tạo từ DNA và protein, chủ yếu là histone. Phân tử DNA quấn quanh các khối protein histone tạo thành chuỗi nucleosome; chuỗi này tiếp tục cuộn xoắn nhiều bậc, nhờ vậy DNA rất dài được xếp gọn trong nhân.',
            'NST đơn gồm một phân tử DNA liên kết với protein histone (một sợi nhiễm sắc).',
            'NST kép được tạo thành khi NST đơn nhân đôi, gồm hai chromatid (nhiễm sắc tử chị em) giống hệt nhau, gắn với nhau ở tâm động.',
            'Tâm động là nơi NST đính vào thoi phân bào, giúp NST di chuyển về các cực của tế bào khi phân bào. Mỗi NST có một tâm động.',
          ],
        },
        {
          type: 'table',
          caption: 'Phân loại NST theo vị trí tâm động',
          head: ['Loại NST', 'Vị trí tâm động', 'Hai cánh của NST'],
          rows: [
            ['Tâm giữa (tâm cân)', 'Ở giữa NST', 'Dài gần bằng nhau'],
            ['Tâm lệch', 'Lệch về một phía', 'Một cánh ngắn, một cánh dài'],
            ['Tâm mút', 'Ở gần một đầu mút', 'Gần như chỉ có một cánh'],
          ],
        },
      ],
    },
    {
      heading: 'Bộ nhiễm sắc thể',
      blocks: [
        {
          type: 'p',
          text: 'Bộ NST của một tế bào là toàn bộ các NST có trong tế bào đó. Trong tế bào sinh dưỡng (tế bào xôma), NST tồn tại thành từng cặp.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cặp NST tương đồng',
          text: 'Cặp NST tương đồng gồm hai NST giống nhau về hình dạng, kích thước và trình tự phân bố các gene; một chiếc có nguồn gốc từ bố, một chiếc có nguồn gốc từ mẹ.',
        },
        {
          type: 'table',
          caption: 'Bộ NST đơn bội và bộ NST lưỡng bội',
          head: ['Đặc điểm', 'Bộ NST đơn bội ($n$)', 'Bộ NST lưỡng bội ($2n$)'],
          rows: [
            [
              'Có trong',
              'Giao tử (trứng, tinh trùng)',
              'Tế bào sinh dưỡng, tế bào sinh dục sơ khai',
            ],
            ['Số lượng NST', 'Bằng một nửa bộ lưỡng bội', 'Gấp đôi bộ đơn bội'],
            [
              'Cách tồn tại của NST',
              'Từng chiếc, có một nguồn gốc (từ bố hoặc từ mẹ)',
              'Từng cặp tương đồng, một chiếc từ bố, một chiếc từ mẹ',
            ],
            ['Cách tồn tại của gene', 'Từng allele', 'Từng cặp allele'],
          ],
        },
      ],
    },
    {
      heading: 'Tính đặc trưng của bộ nhiễm sắc thể',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Bộ NST đặc trưng cho loài',
          text: 'Mỗi loài sinh vật có bộ NST đặc trưng về số lượng, hình dạng và cấu trúc. Mọi cá thể bình thường của cùng một loài đều có bộ NST như vậy.',
        },
        {
          type: 'table',
          caption: 'Số lượng NST trong tế bào của một số loài',
          head: ['Loài', '$2n$', '$n$'],
          rows: [
            ['Người', '$46$', '$23$'],
            ['Tinh tinh', '$48$', '$24$'],
            ['Gà', '$78$', '$39$'],
            ['Chó nhà', '$78$', '$39$'],
            ['Ruồi giấm', '$8$', '$4$'],
            ['Đậu Hà Lan', '$14$', '$7$'],
            ['Ngô', '$20$', '$10$'],
            ['Lúa', '$24$', '$12$'],
            ['Cà chua', '$24$', '$12$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Số lượng NST không nói lên mức độ tiến hoá',
          text: 'Gà và chó nhà có $2n = 78$, nhiều hơn người ($2n = 46$); lúa và cà chua cùng có $2n = 24$. Vì vậy số lượng NST nhiều hay ít không phản ánh mức độ tiến hoá của loài. Các loài có cùng số lượng NST vẫn khác nhau về hình dạng và cấu trúc NST.',
        },
        {
          type: 'p',
          text: 'Để quan sát bộ NST, người ta làm tiêu bản tế bào đang phân chia và soi dưới kính hiển vi quang học, lần lượt ở vật kính $10\\times$, $40\\times$ rồi $100\\times$ (nhỏ dầu soi kính lên tiêu bản khi dùng vật kính $100\\times$). NST thấy rõ nhất ở kì giữa, khi chúng xếp thành một hàng ở giữa tế bào. Ảnh chụp các NST ở kì giữa được cắt ra và xếp thành từng cặp tương đồng theo kích thước, vị trí tâm động và cách phân bố các băng, như em làm trong phần khám phá.',
        },
      ],
    },
  ],
  explore: {
    title: 'Xếp bộ NST thành từng cặp tương đồng',
    instruction:
      'Mỗi NST ở kì giữa được vẽ là hai chromatid nối ở tâm động (chấm đỏ), với các băng đậm màu. Chạm một NST rồi chạm NST giống hệt nó để ghép thành một cặp tương đồng. Bắt đầu với ruồi giấm ($2n = 8$), rồi thử bộ NST của người ($2n = 46$). Bật gợi ý nếu cần xem số thứ tự của NST. Với bộ NST của giới đực, chú ý cặp X và Y.',
  },
  examples: [
    {
      problem:
        'Ngô có bộ NST $2n = 20$. Tế bào lá ngô có bao nhiêu NST và bao nhiêu cặp NST tương đồng? Giao tử (hạt phấn, noãn) của ngô có bao nhiêu NST?',
      steps: [
        'Tế bào lá là tế bào sinh dưỡng, mang bộ NST lưỡng bội $2n = 20$.',
        'NST trong tế bào sinh dưỡng tồn tại thành từng cặp tương đồng: số cặp là $20 : 2 = 10$.',
        'Giao tử mang bộ NST đơn bội: $n = 20 : 2 = 10$, mỗi cặp tương đồng chỉ còn một chiếc.',
      ],
      answer: 'Tế bào lá có $20$ NST xếp thành $10$ cặp tương đồng; giao tử có $n = 10$ NST.',
    },
    {
      problem:
        'Ở kì giữa của quá trình phân bào, một tế bào sinh dưỡng của ruồi giấm ($2n = 8$) có $8$ NST kép. Tế bào đó có bao nhiêu chromatid và bao nhiêu tâm động?',
      steps: [
        'Mỗi NST kép gồm $2$ chromatid gắn với nhau ở tâm động.',
        'Số chromatid: $8 \\cdot 2 = 16$.',
        'Mỗi NST (dù đơn hay kép) chỉ có một tâm động, nên có $8$ tâm động.',
      ],
      answer: 'Tế bào có $16$ chromatid và $8$ tâm động.',
    },
    {
      problem:
        'Gà và chó nhà đều có $2n = 78$, người có $2n = 46$. Có thể kết luận gà tiến hoá hơn người không? Dựa vào đâu để phân biệt bộ NST của gà và của chó?',
      steps: [
        'Gà có nhiều NST hơn người, nhưng người là loài có tổ chức cơ thể phức tạp hơn, nên số lượng NST không phản ánh mức độ tiến hoá.',
        'Gà và chó có cùng số lượng NST nhưng là hai loài khác nhau.',
        'Bộ NST đặc trưng cho loài không chỉ về số lượng mà còn về hình dạng và cấu trúc từng NST.',
      ],
      answer:
        'Không thể kết luận như vậy. Bộ NST của gà và chó phân biệt được nhờ hình dạng và cấu trúc của các NST.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhiễm sắc thể là',
      options: [
        'cấu trúc mang gene nằm trong nhân tế bào',
        'bào quan tổng hợp protein trong tế bào chất',
        'một đoạn DNA mang thông tin quy định một chuỗi polypeptide',
        'lớp màng bao bọc nhân tế bào',
      ],
      answer: 0,
      hints: ['NST bắt màu khi nhuộm bằng thuốc nhuộm kiềm tính và nằm trong nhân.'],
      solution:
        'NST là cấu trúc mang gene nằm trong nhân tế bào. Một đoạn DNA mang thông tin quy định một chuỗi polypeptide là gene, không phải NST.',
    },
    {
      type: 'number',
      prompt: 'Lúa có bộ NST $2n = 24$. Một tinh tử (giao tử đực) của lúa có bao nhiêu NST?',
      answer: 12,
      hints: ['Giao tử mang bộ NST đơn bội.'],
      solution: 'Giao tử có bộ NST đơn bội $n = 24 : 2 = 12$.',
    },
    {
      type: 'number',
      prompt: 'Tế bào sinh dưỡng của đậu Hà Lan có $14$ NST. Có bao nhiêu cặp NST tương đồng?',
      answer: 7,
      hints: ['Mỗi cặp tương đồng gồm $2$ chiếc.'],
      solution: '$14 : 2 = 7$ cặp NST tương đồng.',
    },
    {
      type: 'choice',
      prompt: 'Cặp NST tương đồng là cặp NST',
      options: [
        'giống nhau về hình dạng, kích thước, trình tự gene; một chiếc từ bố, một chiếc từ mẹ',
        'gồm hai chromatid giống hệt nhau gắn với nhau ở tâm động',
        'giống nhau về hình dạng, kích thước và cùng có nguồn gốc từ bố',
        'có trong giao tử, mỗi chiếc mang một allele',
      ],
      answer: 0,
      hints: ['Đừng nhầm cặp tương đồng với hai chromatid của một NST kép.'],
      solution:
        'Cặp NST tương đồng gồm hai NST giống nhau về hình dạng, kích thước và trình tự phân bố gene, một chiếc có nguồn gốc từ bố, một chiếc từ mẹ. Hai chromatid gắn ở tâm động là hai nửa của một NST kép.',
    },
    {
      type: 'number',
      prompt:
        'Tế bào sinh dưỡng của người ($2n = 46$) đang ở kì giữa, các NST đều ở trạng thái kép. Tế bào có bao nhiêu chromatid?',
      answer: 92,
      hints: ['Mỗi NST kép có mấy chromatid?'],
      solution: 'Có $46$ NST kép, mỗi NST kép gồm $2$ chromatid: $46 \\cdot 2 = 92$ chromatid.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần với mô tả đúng.',
      left: ['Chromatid', 'Tâm động', 'Histone', 'Locus'],
      right: [
        'Một trong hai nửa giống hệt nhau của NST kép',
        'Nơi NST đính vào thoi phân bào',
        'Loại protein chủ yếu cấu tạo nên NST cùng với DNA',
        'Vị trí xác định của một gene trên NST',
        'Bộ NST có trong giao tử',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['DNA quấn quanh histone tạo thành nucleosome.', 'Mỗi gene nằm ở một locus.'],
      solution:
        'Chromatid: một nửa của NST kép; tâm động: nơi đính vào thoi phân bào; histone: protein cấu tạo NST cùng DNA; locus: vị trí của gene trên NST.',
    },
    {
      type: 'choice',
      prompt:
        'Một NST có tâm động nằm lệch về một phía, chia NST thành một cánh ngắn và một cánh dài. Đó là NST',
      options: ['tâm giữa', 'tâm lệch', 'tâm mút', 'không có tâm động'],
      answer: 1,
      hints: ['Tên gọi của NST theo vị trí tâm động.'],
      solution: 'Tâm động lệch về một phía, hai cánh dài khác nhau: đó là NST tâm lệch.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao người ta thường quan sát hình dạng NST ở kì giữa của quá trình phân bào?',
      options: [
        'Vì ở kì giữa NST ở trạng thái kép, đóng xoắn cực đại nên có hình dạng đặc trưng, rõ nhất',
        'Vì chỉ ở kì giữa tế bào mới có NST',
        'Vì ở kì giữa NST dãn xoắn hoàn toàn nên dài nhất',
        'Vì ở kì giữa NST ở trạng thái đơn',
      ],
      answer: 0,
      hints: ['NST co ngắn và dày nhất khi nào?'],
      solution:
        'Ở kì giữa, NST kép đóng xoắn cực đại, co ngắn nhất nên có hình dạng đặc trưng và quan sát rõ nhất. Ở các kì khác NST vẫn tồn tại nhưng dãn xoắn, khó quan sát.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng về bộ NST.',
      options: [
        'Mỗi loài có bộ NST đặc trưng về số lượng, hình dạng và cấu trúc.',
        'Loài có nhiều NST hơn thì tiến hoá hơn.',
        'Hai loài khác nhau có thể có cùng số lượng NST.',
        'Trong tế bào sinh dưỡng, NST tồn tại thành từng cặp tương đồng.',
        'Giao tử mang bộ NST lưỡng bội.',
      ],
      answers: [0, 2, 3],
      hints: ['So sánh gà ($2n = 78$) với người ($2n = 46$), lúa với cà chua.'],
      solution:
        'Đúng: bộ NST đặc trưng cho loài; hai loài có thể cùng số lượng NST (lúa và cà chua $2n = 24$); NST trong tế bào sinh dưỡng xếp thành cặp tương đồng. Sai: số lượng NST không phản ánh mức độ tiến hoá; giao tử mang bộ NST đơn bội.',
    },
    {
      type: 'text',
      prompt:
        'Bộ NST trong giao tử, chỉ chứa một chiếc của mỗi cặp tương đồng, được gọi là bộ NST gì?',
      accept: ['đơn bội', 'bộ NST đơn bội', 'bộ đơn bội', 'đơn bội n', 'n'],
      hints: ['Kí hiệu của bộ NST này là $n$.'],
      solution: 'Đó là bộ NST đơn bội, kí hiệu $n$.',
    },
  ],
  takeaways: [
    'NST là cấu trúc mang gene trong nhân tế bào, cấu tạo từ DNA và protein histone; các gene nằm ở các locus xác định dọc theo NST.',
    'NST kép gồm hai chromatid giống hệt nhau gắn ở tâm động; theo vị trí tâm động có NST tâm giữa, tâm lệch, tâm mút.',
    'Tế bào sinh dưỡng mang bộ NST lưỡng bội $2n$ xếp thành từng cặp tương đồng (một chiếc từ bố, một từ mẹ); giao tử mang bộ NST đơn bội $n$.',
    'Mỗi loài có bộ NST đặc trưng về số lượng, hình dạng, cấu trúc (người $2n = 46$, ruồi giấm $2n = 8$); số lượng NST không phản ánh mức độ tiến hoá.',
  ],
};

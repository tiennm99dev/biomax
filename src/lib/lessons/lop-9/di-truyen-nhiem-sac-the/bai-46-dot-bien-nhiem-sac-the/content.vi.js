/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đột biến NST là những biến đổi về cấu trúc hoặc số lượng NST: mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn; lệch bội và đa bội; nguyên nhân, ý nghĩa và tác hại.',
  intro:
    'Dưa hấu không hạt, chuối nhà quả to không hạt, tôm sú tam bội lớn nhanh, nhưng cũng có những em bé mắc hội chứng Down vì thừa một NST số 21. Tất cả đều bắt nguồn từ những biến đổi của NST. Ở bài trước, đột biến gene chỉ liên quan đến một cặp nucleotide; đột biến NST làm thay đổi cả một đoạn NST hoặc cả những NST nguyên vẹn. Trong bài này, em sẽ tự cắt, lặp, đảo, chuyển các đoạn NST và thêm, bớt NST trong một tế bào.',
  objectives: [
    'Nêu được khái niệm đột biến NST và nguyên nhân phát sinh.',
    'Phân biệt được các dạng đột biến cấu trúc NST: mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn; lấy được ví dụ.',
    'Phân biệt được đột biến lệch bội và đột biến đa bội; tính được số NST của các thể đột biến.',
    'Trình bày được ý nghĩa và tác hại của đột biến NST.',
  ],
  sections: [
    {
      heading: 'Khái niệm đột biến NST',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đột biến nhiễm sắc thể',
          text: 'Đột biến NST là những biến đổi về cấu trúc hoặc số lượng NST. Đột biến có thể xảy ra ở một hoặc một số NST trong bộ NST.',
        },
        {
          type: 'p',
          text: 'Đột biến NST phát sinh do tác động của các tác nhân gây đột biến (các tia phóng xạ, một số hoá chất như colchicine, …) hoặc do rối loạn trong quá trình nhân đôi, phân li của NST khi phân bào.',
        },
      ],
    },
    {
      heading: 'Đột biến cấu trúc NST',
      blocks: [
        {
          type: 'p',
          text: 'Đột biến cấu trúc NST làm thay đổi cấu trúc của một hoặc một số NST, từ đó làm thay đổi số lượng hoặc cách sắp xếp các gene trên NST. Xét NST có các đoạn ABC•DEFGH (• là tâm động):',
        },
        {
          type: 'table',
          caption: 'Các dạng đột biến cấu trúc NST',
          head: ['Dạng', 'Cơ chế', 'Ví dụ trên NST ABC•DEFGH', 'Hậu quả, ví dụ'],
          rows: [
            [
              'Mất đoạn',
              'Một đoạn NST bị đứt ra và tiêu biến',
              'ABC•DGH (mất EF)',
              'Giảm số lượng gene, thường giảm sức sống hoặc gây chết. Mất một đoạn ở cánh ngắn NST số $5$ ở người gây hội chứng tiếng mèo kêu (cri-du-chat).',
            ],
            [
              'Lặp đoạn',
              'Một đoạn NST lặp lại một hay nhiều lần',
              'ABCBC•DEFGH (lặp BC)',
              'Tăng số lượng gene. Ở một giống lúa mạch, lặp đoạn làm tăng hoạt tính enzyme thuỷ phân tinh bột, có ý nghĩa trong sản xuất bia.',
            ],
            [
              'Đảo đoạn',
              'Một đoạn NST đứt ra, quay ngược $180^\\circ$ rồi gắn lại',
              'ABC•FEDGH (đảo DEF)',
              'Không đổi số lượng gene nhưng đổi trật tự gene; đoạn đảo mang tâm động có thể làm đổi hình dạng NST.',
            ],
            [
              'Chuyển đoạn',
              'Một đoạn NST chuyển sang vị trí khác trên cùng NST hoặc sang NST khác (tương hỗ hoặc không tương hỗ)',
              'ABC•DEF và MN•OPQRGH (GH chuyển sang NST khác)',
              'Thay đổi nhóm gene liên kết. Chuyển đoạn giữa NST số $9$ và số $22$ ở người gây ung thư máu (bệnh bạch cầu).',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ý nghĩa và tác hại',
          text: 'Đột biến cấu trúc NST thường có hại: làm mất hoặc hỏng gene, mất cân bằng hệ gene, làm giảm sức sống, giảm khả năng sinh sản hoặc gây chết. Tuy vậy, chúng cũng cung cấp nguyên liệu cho tiến hoá và chọn giống. Người ta dùng mất đoạn để xác định vị trí của gene trên NST và loại bỏ gene không mong muốn; ở tằm dâu, chuyển đoạn mang gene quy định màu trứng sang NST giới tính giúp phân biệt sớm trứng nở ra tằm đực hay tằm cái.',
        },
      ],
    },
    {
      heading: 'Đột biến số lượng NST',
      blocks: [
        {
          type: 'p',
          text: 'Đột biến số lượng NST làm thay đổi số lượng NST trong bộ NST, gồm hai dạng: lệch bội và đa bội.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đột biến lệch bội',
          text: 'Đột biến lệch bội làm tăng hoặc giảm số lượng NST ở một hoặc một số cặp NST tương đồng. Ví dụ: thể ba ($2n + 1$) có một cặp mang $3$ NST; thể một ($2n - 1$) có một cặp chỉ còn $1$ NST.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đột biến đa bội',
          text: 'Đột biến đa bội làm tăng đều số lượng NST ở tất cả các cặp, tạo ra bộ NST là bội số của $n$ và lớn hơn $2n$, như $3n$ (tam bội), $4n$ (tứ bội), $6n$ (lục bội). Đa bội phổ biến ở thực vật, ít gặp ở động vật.',
        },
        {
          type: 'table',
          caption: 'Số NST của các thể đột biến ở ruồi giấm ($2n = 8$, $n = 4$)',
          head: ['Thể', 'Kí hiệu', 'Số NST'],
          rows: [
            ['Lưỡng bội bình thường', '$2n$', '$8$'],
            ['Thể ba', '$2n + 1$', '$9$'],
            ['Thể một', '$2n - 1$', '$7$'],
            ['Tam bội', '$3n$', '$12$'],
            ['Tứ bội', '$4n$', '$16$'],
          ],
        },
        {
          type: 'list',
          items: [
            'Ví dụ lệch bội: người có $3$ NST số $21$ (tổng $47$ NST) mắc hội chứng Down: cơ thể chậm phát triển, có nhiều dị tật, thường vô sinh.',
            'Ví dụ đa bội: cam, dưa hấu, nho, chuối, tôm sú tam bội ($3n$); bông tứ bội ($4n$); lúa mì trồng hiện nay là lục bội ($6n$). Tôm sú tam bội sinh trưởng nhanh, năng suất cao hơn tôm $2n$.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ý nghĩa và tác hại của đột biến số lượng NST',
          text: 'Đột biến số lượng NST cung cấp nguyên liệu cho tiến hoá; ở thực vật, đa bội góp phần hình thành loài mới. Tế bào đa bội có hàm lượng DNA tăng, nên cơ quan sinh dưỡng to, sinh trưởng nhanh, chống chịu tốt, được dùng trong chọn giống cây trồng; thể đa bội lẻ ($3n$, $5n$) thường không tạo được giao tử bình thường nên được dùng để tạo quả không hạt. Ngược lại, đột biến lệch bội thường có hại (giảm sức sống, giảm khả năng sinh sản, gây chết), nhất là ở người và động vật.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm đột biến NST',
    instruction:
      'Ở chế độ "Đột biến cấu trúc", chạm đoạn gene đầu và đoạn gene cuối để chọn một đoạn của NST thứ nhất, rồi chọn mất, lặp, đảo hoặc chuyển đoạn; quan sát số lượng và trật tự gene thay đổi, rồi khôi phục để thử dạng khác. Ở chế độ "Đột biến số lượng", thêm hoặc bớt NST ở từng cặp của tế bào $2n = 8$, hoặc tăng đều mọi cặp, và đọc tên thể đột biến tạo thành.',
  },
  examples: [
    {
      problem:
        'NST ban đầu có trình tự các đoạn ABC•DEFGH. Xác định dạng đột biến trong mỗi trường hợp: a) ABC•DGH; b) ABC•FEDGH; c) ABCBC•DEFGH.',
      steps: [
        'a) Mất các đoạn E, F, NST ngắn đi và ít gene hơn: mất đoạn.',
        'b) Số đoạn không đổi, đoạn DEF được đọc ngược thành FED: đảo đoạn.',
        'c) Đoạn BC xuất hiện hai lần, NST dài thêm: lặp đoạn.',
      ],
      answer: 'a) Mất đoạn; b) đảo đoạn; c) lặp đoạn.',
    },
    {
      problem:
        'Ngô có $2n = 20$. Tính số NST trong tế bào sinh dưỡng của thể ba, thể một, thể tam bội và thể tứ bội ở ngô.',
      steps: [
        'Bộ đơn bội: $n = 20 : 2 = 10$.',
        'Thể ba: $2n + 1 = 21$; thể một: $2n - 1 = 19$.',
        'Tam bội: $3n = 3 \\cdot 10 = 30$; tứ bội: $4n = 4 \\cdot 10 = 40$.',
      ],
      answer: 'Thể ba $21$, thể một $19$, tam bội $30$, tứ bội $40$ NST.',
    },
    {
      problem:
        'Tế bào sinh dưỡng của một bệnh nhân có $47$ NST, trong đó có $3$ NST số $21$. Đây là dạng đột biến gì? Người này mắc hội chứng gì?',
      steps: [
        'Người bình thường có $2n = 46$; bệnh nhân có $47 = 2n + 1$ NST.',
        'Chỉ cặp NST số $21$ thừa một chiếc, các cặp khác bình thường: đột biến lệch bội, thể ba.',
        'Thể ba NST số $21$ ở người gây hội chứng Down.',
      ],
      answer: 'Đột biến lệch bội dạng thể ba ($2n + 1$) ở cặp NST số $21$, gây hội chứng Down.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đột biến NST là',
      options: [
        'những biến đổi về cấu trúc hoặc số lượng NST',
        'những biến đổi liên quan đến một cặp nucleotide của gene',
        'những biến đổi kiểu hình do môi trường, không liên quan đến vật chất di truyền',
        'sự trao đổi chéo bình thường giữa hai NST tương đồng',
      ],
      answer: 0,
      hints: ['Biến đổi liên quan đến một cặp nucleotide là đột biến gene.'],
      solution: 'Đột biến NST là những biến đổi về cấu trúc hoặc số lượng NST.',
    },
    {
      type: 'match',
      prompt: 'NST ban đầu là ABC•DEFGH. Nối mỗi NST đột biến với dạng đột biến.',
      left: ['AB•DEFGH', 'ABC•DEDEFGH', 'AD•CBEFGH', 'ABC•DEFGHMN (MN từ NST khác)'],
      right: ['Mất đoạn', 'Lặp đoạn', 'Đảo đoạn', 'Chuyển đoạn', 'Lệch bội'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['So sánh số đoạn và trật tự các đoạn với NST ban đầu.'],
      solution:
        'AB•DEFGH mất đoạn C; ABC•DEDEFGH lặp đoạn DE; AD•CBEFGH đảo đoạn BC•D (đoạn đảo mang tâm động); ABC•DEFGHMN nhận đoạn MN từ NST khác: chuyển đoạn.',
    },
    {
      type: 'choice',
      prompt:
        'Dạng đột biến cấu trúc NST nào không làm thay đổi số lượng gene mà chỉ làm thay đổi trật tự gene trên NST?',
      options: ['Đảo đoạn', 'Mất đoạn', 'Lặp đoạn', 'Thể ba'],
      answer: 0,
      hints: ['Đoạn bị đứt rồi quay ngược $180^\\circ$ và gắn lại vào chỗ cũ.'],
      solution: 'Đảo đoạn giữ nguyên các gene, chỉ quay ngược một đoạn nên trật tự gene thay đổi.',
    },
    {
      type: 'number',
      prompt: 'Lúa có $2n = 24$. Thể ba ở lúa có bao nhiêu NST trong tế bào sinh dưỡng?',
      answer: 25,
      hints: ['Thể ba có kí hiệu $2n + 1$.'],
      solution: '$2n + 1 = 24 + 1 = 25$ NST.',
    },
    {
      type: 'number',
      prompt: 'Lúa có $2n = 24$. Thể tam bội ở lúa có bao nhiêu NST trong tế bào sinh dưỡng?',
      answer: 36,
      hints: ['Tính $n$ trước, rồi nhân với $3$.'],
      solution: '$n = 12$; $3n = 36$ NST.',
    },
    {
      type: 'number',
      prompt: 'Cà chua có $2n = 24$. Thể một ở cà chua có bao nhiêu NST?',
      answer: 23,
      hints: ['Thể một có kí hiệu $2n - 1$.'],
      solution: '$2n - 1 = 24 - 1 = 23$ NST.',
    },
    {
      type: 'number',
      prompt: 'Tế bào sinh dưỡng của người mắc hội chứng Down có bao nhiêu NST?',
      answer: 47,
      hints: ['Người mắc hội chứng Down có ba NST số $21$.'],
      solution: 'Thừa một NST số $21$: $46 + 1 = 47$ NST.',
    },
    {
      type: 'choice',
      prompt: 'Hội chứng tiếng mèo kêu (cri-du-chat) ở người là do',
      options: [
        'mất một đoạn ở cánh ngắn của NST số $5$',
        'thừa một NST số $21$',
        'chuyển đoạn giữa NST số $9$ và số $22$',
        'tăng đều số NST ở mọi cặp',
      ],
      answer: 0,
      hints: ['Đây là một dạng đột biến cấu trúc làm giảm số lượng gene.'],
      solution:
        'Hội chứng tiếng mèo kêu do mất đoạn ở cánh ngắn NST số $5$. Thừa NST số $21$ gây hội chứng Down; chuyển đoạn $9$ – $22$ gây ung thư máu.',
    },
    {
      type: 'choice',
      prompt:
        'Một tế bào của loài có $2n = 8$ chứa $9$ NST, trong đó cặp số $2$ có $3$ chiếc. Đây là',
      options: [
        'thể ba, một dạng lệch bội',
        'thể tam bội, một dạng đa bội',
        'thể một, một dạng lệch bội',
        'đột biến lặp đoạn',
      ],
      answer: 0,
      hints: ['Đa bội tăng đều số NST ở tất cả các cặp.'],
      solution:
        'Chỉ cặp số $2$ thừa một chiếc: $2n + 1 = 9$, là thể ba (lệch bội). Tam bội phải có $3n = 12$ NST, mỗi cặp $3$ chiếc.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các ví dụ cho thấy đột biến NST có ích trong sản xuất.',
      options: [
        'Dưa hấu tam bội cho quả không hạt',
        'Lặp đoạn ở lúa mạch làm tăng hoạt tính enzyme thuỷ phân tinh bột, dùng sản xuất bia',
        'Tôm sú tam bội sinh trưởng nhanh, năng suất cao',
        'Hội chứng Down ở người',
        'Ung thư máu do chuyển đoạn NST $9$ và $22$',
      ],
      answers: [0, 1, 2],
      hints: ['Một hội chứng hay một bệnh ở người không phải là lợi ích trong sản xuất.'],
      solution:
        'Dưa hấu tam bội không hạt, lúa mạch lặp đoạn và tôm sú tam bội là các ứng dụng có ích. Hội chứng Down và ung thư máu là tác hại của đột biến NST.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao cây đa bội thường được dùng trong chọn giống cây trồng lấy thân, lá, củ, quả?',
      options: [
        'Vì tế bào đa bội có hàm lượng DNA tăng, cơ quan sinh dưỡng to, sinh trưởng nhanh, chống chịu tốt',
        'Vì cây đa bội luôn cho nhiều hạt hơn cây lưỡng bội',
        'Vì cây đa bội có ít NST hơn nên dễ chăm sóc',
        'Vì đa bội luôn làm giảm sức sống của cây',
      ],
      answer: 0,
      hints: ['Đa bội làm tăng số NST trong mọi tế bào.'],
      solution:
        'Số NST tăng nên hàm lượng DNA và kích thước tế bào tăng, cơ quan sinh dưỡng to, sinh trưởng mạnh, chống chịu tốt. Thể đa bội lẻ còn thường không có hạt.',
    },
  ],
  takeaways: [
    'Đột biến NST là biến đổi về cấu trúc hoặc số lượng NST, do tác nhân gây đột biến hoặc rối loạn nhân đôi, phân li NST.',
    'Đột biến cấu trúc: mất đoạn, lặp đoạn (đổi số lượng gene), đảo đoạn (đổi trật tự gene), chuyển đoạn (đổi nhóm gene liên kết).',
    'Lệch bội: thay đổi số NST ở một hoặc một số cặp ($2n + 1$, $2n - 1$, …); ví dụ ba NST số $21$ gây hội chứng Down.',
    'Đa bội: tăng đều số NST ở mọi cặp ($3n$, $4n$, $6n$), phổ biến ở thực vật; cây đa bội to, khoẻ, thể $3n$ thường không hạt.',
    'Đột biến NST thường có hại, nhất là lệch bội ở người và động vật, nhưng là nguyên liệu cho tiến hoá và chọn giống.',
  ],
};

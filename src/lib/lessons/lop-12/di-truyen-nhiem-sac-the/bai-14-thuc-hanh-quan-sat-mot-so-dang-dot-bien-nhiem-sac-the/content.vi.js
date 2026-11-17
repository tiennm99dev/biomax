/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành quan sát tiêu bản cố định và ảnh chụp bộ nhiễm sắc thể để nhận dạng một số dạng đột biến nhiễm sắc thể: lệch bội, đa bội và đột biến cấu trúc.',
  intro:
    'Bác sĩ nhìn vào ảnh bộ NST của một thai nhi và kết luận em bé mắc hội chứng Down. Họ đã thấy gì trên ảnh? Trong bài thực hành này, em sẽ tự quan sát, đếm và so sánh để nhận ra các dạng đột biến NST.',
  objectives: [
    'Quan sát được tiêu bản cố định (hoặc ảnh chụp) bộ NST bình thường và bộ NST đột biến dưới kính hiển vi.',
    'Nhận dạng được một số dạng đột biến NST bằng cách so sánh với bộ NST bình thường của loài.',
    'Ghi kết quả quan sát và rút ra kết luận về dạng đột biến.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Kính hiển vi quang học có vật kính $10\\times$, $40\\times$ (và $100\\times$ nếu có), dầu soi kính.',
            'Tiêu bản cố định bộ NST người bình thường và người mắc hội chứng Down (hoặc ảnh chụp bộ NST đồ).',
            'Tiêu bản cố định hoặc ảnh chụp NST của một số dạng đột biến khác: đột biến cấu trúc, thể lệch bội, thể đa bội ở thực vật.',
            'Vở ghi, bút chì để vẽ và ghi kết quả.',
          ],
        },
      ],
    },
    {
      heading: 'Cách tiến hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Đặt tiêu bản lên bàn kính, quan sát bằng vật kính $10\\times$ để tìm vùng có tế bào đang ở kì giữa (NST co xoắn cực đại, tách rời nhau).',
            'Chuyển sang vật kính $40\\times$ (hoặc $100\\times$ với dầu soi) để quan sát rõ bộ NST của một tế bào.',
            'Đếm số lượng NST, quan sát hình dạng, kích thước từng NST; với ảnh chụp bộ NST đồ, so sánh từng cặp NST tương đồng.',
            'So sánh với bộ NST bình thường của loài (người: $2n = 46$) và xác định dạng đột biến.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mẹo nhận dạng',
          text: 'Thay đổi số lượng NST ở một hoặc vài cặp: lệch bội. Mọi nhóm NST tương đồng đều tăng thành $3$, $4$… chiếc: đa bội. Số lượng NST không đổi nhưng một NST dài hơn, ngắn hơn hoặc có hình dạng, trật tự các đoạn khác thường: đột biến cấu trúc.',
        },
      ],
    },
    {
      heading: 'Báo cáo kết quả',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi nhóm học sinh ghi kết quả quan sát vào bảng theo mẫu, vẽ hình NST quan sát được và trả lời các câu hỏi cuối bài.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng báo cáo (dòng đầu là ví dụ)',
          head: [
            'Loài',
            'Hình ảnh trên tiêu bản bình thường và tiêu bản đột biến',
            'Nhận xét khi so sánh với bộ NST bình thường',
            'Kết luận về dạng đột biến',
          ],
          rows: [
            [
              'Người',
              'Tiêu bản đột biến có $47$ NST',
              'Thừa một NST số 21 (cặp 21 có $3$ chiếc)',
              'Đột biến lệch bội (thể ba, hội chứng Down)',
            ],
            ['…', '…', '…', '…'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Nhận dạng đột biến qua tiêu bản',
    instruction:
      'Mỗi lượt là một tiêu bản: bộ NST đồ của người, bộ NST của một loài cây hoặc trình tự gene trên NST trước và sau đột biến. Quan sát, đếm, so sánh rồi chọn dạng đột biến. Chọn sai lần đầu em được gợi ý và thử lại.',
  },
  examples: [
    {
      problem:
        'Ảnh bộ NST đồ của một người có $47$ NST: cặp số 21 có $3$ chiếc, cặp NST giới tính là XY, các cặp khác đều có $2$ chiếc. Kết luận về dạng đột biến.',
      steps: [
        'Bộ NST bình thường của người: $2n = 46$. Tiêu bản có $47 = 46 + 1$ NST.',
        'Chỉ cặp số 21 thay đổi (có $3$ chiếc), các cặp khác bình thường: đột biến lệch bội dạng thể ba ($2n + 1$).',
        'Ba NST số 21 gây hội chứng Down; người này là nam (XY).',
      ],
      answer: 'Đột biến lệch bội, thể ba NST 21: nam mắc hội chứng Down.',
    },
    {
      problem:
        'Tiêu bản tế bào rễ của một loài cây có $2n = 8$. Một tế bào ở kì giữa có $16$ NST, xếp được thành $4$ nhóm, mỗi nhóm gồm $4$ NST giống nhau về hình dạng và kích thước. Đây là dạng đột biến nào?',
      steps: [
        'Bộ đơn bội của loài: $n = 4$.',
        'Mọi nhóm NST tương đồng đều có $4$ chiếc, tổng $16 = 4 \\cdot 4 = 4n$ NST.',
        'Cả bộ NST tăng lên thành bội số chẵn của $n$: thể tứ bội.',
      ],
      answer: 'Đột biến đa bội, thể tứ bội $4n = 16$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Một ảnh bộ NST đồ của người có $46$ NST, mỗi cặp từ 1 đến 22 đều có $2$ chiếc và cặp NST giới tính là XX. Kết luận nào đúng?',
      options: [
        'Bộ NST của nữ bình thường',
        'Bộ NST của người mắc hội chứng Turner',
        'Bộ NST của người mắc hội chứng Down',
        'Bộ NST của nam bình thường',
      ],
      answer: 0,
      hints: ['So với bộ NST bình thường $2n = 46$.', 'XX là nữ hay nam?'],
      solution: 'Đủ $46$ NST, mỗi cặp có $2$ chiếc, cặp giới tính XX: bộ NST của nữ bình thường.',
    },
    {
      type: 'choice',
      prompt:
        'Ảnh bộ NST đồ của một người có $45$ NST, các cặp NST thường đều có $2$ chiếc, nhóm NST giới tính chỉ có một NST X. Người này mắc hội chứng nào?',
      options: ['Hội chứng Turner', 'Hội chứng Klinefelter', 'Hội chứng Down', 'Hội chứng mèo kêu'],
      answer: 0,
      hints: ['Thiếu một NST giới tính: kí hiệu XO.'],
      solution: 'Bộ NST $45$, XO là thể một ($2n - 1$) ở cặp NST giới tính: hội chứng Turner.',
    },
    {
      type: 'choice',
      prompt:
        'Tế bào của một cây có $2n = 8$ có $12$ NST, xếp thành $4$ nhóm, mỗi nhóm $3$ NST tương đồng. Cây này là',
      options: ['Thể tam bội', 'Thể ba', 'Thể tứ bội', 'Thể ba kép'],
      answer: 0,
      hints: ['Một nhóm thay đổi hay mọi nhóm cùng thay đổi?'],
      solution:
        'Mọi nhóm đều có $3$ chiếc, tổng $12 = 3 \\cdot 4 = 3n$: thể tam bội (đa bội lẻ). Thể ba chỉ thừa một NST ở một cặp, có $9$ NST.',
    },
    {
      type: 'number',
      prompt:
        'Quan sát tiêu bản của một loài có $2n = 24$, thấy tế bào có $23$ NST, chỉ một cặp còn $1$ chiếc. Thể bốn của loài này có bao nhiêu NST?',
      answer: 26,
      unit: 'NST',
      hints: ['Thể bốn có kí hiệu $2n + 2$.'],
      solution:
        'Thể bốn: $2n + 2 = 24 + 2 = 26$ NST. (Tế bào quan sát được là thể một, $2n - 1 = 23$.)',
    },
    {
      type: 'number',
      prompt:
        'Tế bào sinh dưỡng của một thể tam bội có $36$ NST. Bộ NST lưỡng bội $2n$ của loài là bao nhiêu?',
      answer: 24,
      hints: ['Tam bội là $3n$, hãy tìm $n$ trước.'],
      solution: '$3n = 36$ nên $n = 12$ và $2n = 24$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nên quan sát và đếm NST ở tế bào đang ở kì giữa?',
      options: [
        'NST co xoắn cực đại, có hình dạng đặc trưng và dễ quan sát nhất',
        'NST tháo xoắn hoàn toàn nên dễ đếm',
        'Ở kì giữa mỗi NST chỉ còn một chromatid',
        'Ở kì giữa màng nhân bao quanh NST nên NST bắt màu rõ',
      ],
      answer: 0,
      hints: ['Ở kì nào NST ngắn và dày nhất?'],
      solution:
        'Ở kì giữa NST co xoắn cực đại, tách rời nhau và xếp trên mặt phẳng xích đạo nên dễ đếm, dễ so sánh hình dạng, kích thước.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước quan sát tiêu bản NST đột biến theo đúng thứ tự.',
      items: [
        'Đếm số lượng NST và quan sát hình dạng NST ở tế bào đã chọn',
        'Đặt tiêu bản lên bàn kính, dùng vật kính $10\\times$ tìm vùng có tế bào ở kì giữa',
        'So sánh với bộ NST bình thường của loài và kết luận dạng đột biến',
        'Chuyển sang vật kính $40\\times$ để quan sát rõ NST của một tế bào',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Luôn tìm tế bào bằng vật kính nhỏ trước, rồi mới phóng to.'],
      solution:
        'Tìm tế bào kì giữa bằng vật kính $10\\times$ → chuyển sang $40\\times$ → đếm, quan sát NST → so sánh với bộ NST bình thường và kết luận.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi kết quả quan sát với kết luận về dạng đột biến.',
      left: [
        'Cặp NST số 21 có $3$ chiếc',
        'Mọi nhóm NST tương đồng đều có $4$ chiếc',
        'Một NST ngắn hơn chiếc tương đồng của nó do thiếu một đoạn',
        'Một đoạn NST có trật tự gene ngược lại, số gene không đổi',
      ],
      right: ['Lệch bội', 'Đa bội', 'Mất đoạn', 'Đảo đoạn', 'Lặp đoạn'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Phân biệt thay đổi ở một cặp với thay đổi ở mọi cặp.'],
      solution:
        'Ba NST 21: lệch bội (thể ba). Mọi nhóm có 4 chiếc: đa bội (tứ bội). Thiếu một đoạn: mất đoạn. Trật tự gene ngược lại: đảo đoạn.',
    },
    {
      type: 'choice',
      prompt:
        'NST bình thường có trình tự ABC•DEFGH. Trên tiêu bản đột biến, NST này có trình tự ABC•DEFQR, đồng thời một NST không tương đồng MN•OPQR trở thành MN•OPGH. Đây là dạng đột biến nào?',
      options: ['Chuyển đoạn tương hỗ', 'Mất đoạn', 'Lặp đoạn', 'Đảo đoạn'],
      answer: 0,
      hints: ['Đoạn GH và đoạn QR đã đi đâu?'],
      solution: 'Hai NST không tương đồng đổi đoạn GH và QR cho nhau: chuyển đoạn tương hỗ.',
    },
    {
      type: 'multi',
      prompt:
        'Một cây trồng có thân, lá và các cơ quan sinh dưỡng to hơn hẳn các cây cùng loài. Những nhận định nào đúng?',
      options: [
        'Cây có thể là thể đa bội',
        'Cần quan sát và đếm NST trong tế bào dưới kính hiển vi để kiểm chứng',
        'Chắc chắn cây là thể lệch bội',
        'Kích thước lớn chứng tỏ cây chắc chắn có bộ NST bình thường',
      ],
      answers: [0, 1],
      hints: [
        'Thể đa bội có tế bào to, cơ quan sinh dưỡng lớn.',
        'Muốn khẳng định cần bằng chứng tế bào học.',
      ],
      solution:
        'Cơ quan sinh dưỡng to gợi ý thể đa bội; muốn khẳng định phải làm tiêu bản, đếm NST trong tế bào và so với bộ NST của loài.',
    },
    {
      type: 'choice',
      prompt: 'Tại sao phần lớn các đột biến NST là có hại cho thể đột biến?',
      options: [
        'Chúng làm thay đổi số lượng, vị trí hoặc trật tự của nhiều gene, phá vỡ cân bằng hệ gene',
        'Chúng chỉ xảy ra ở tế bào sinh dục',
        'Chúng luôn làm mất toàn bộ một NST',
        'Chúng làm thay đổi một cặp nucleotide trong gene',
      ],
      answer: 0,
      hints: ['Một NST mang rất nhiều gene.'],
      solution:
        'Mỗi đột biến NST ảnh hưởng đồng thời nhiều gene, làm mất cân bằng hệ gene, rối loạn phân li NST, nên thường giảm sức sống, khả năng sinh sản.',
    },
  ],
  takeaways: [
    'Quan sát NST ở kì giữa, khi NST co xoắn cực đại.',
    'Nhận dạng đột biến bằng cách đếm NST từng cặp và so sánh hình dạng, kích thước, trình tự với bộ NST bình thường của loài.',
    'Thay đổi ở một hay vài cặp: lệch bội; tăng đều ở mọi nhóm: đa bội; thay đổi hình dạng, độ dài, trật tự gene: đột biến cấu trúc.',
  ],
};

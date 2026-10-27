/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Mã di truyền là mã bộ ba trên mRNA (64 bộ ba, AUG mở đầu, UAA, UAG, UGA kết thúc); dịch mã trên ribosome với mRNA, tRNA và amino acid tạo chuỗi polypeptide; mối quan hệ gene → mRNA → protein → tính trạng.',
  intro:
    'mRNA chỉ có bốn "chữ cái" A, U, G, C, còn protein được xây từ $20$ loại amino acid. Làm sao một chuỗi bốn chữ cái lại "viết" ra được chuỗi amino acid? Tế bào dùng một bộ từ điển gọi là mã di truyền, và một "cỗ máy đọc" là ribosome. Trong bài này, em sẽ tự tra bảng mã di truyền để dịch một mRNA thành chuỗi polypeptide, rồi thấy gene quyết định tính trạng như thế nào.',
  objectives: [
    'Nêu được khái niệm mã di truyền; giải thích được vì sao mã di truyền là mã bộ ba; nêu được bộ ba mở đầu và các bộ ba kết thúc.',
    'Dùng bảng mã di truyền xác định được trình tự amino acid từ trình tự mRNA.',
    'Nêu được khái niệm dịch mã và mô tả được quá trình dịch mã trên ribosome.',
    'Trình bày được mối quan hệ gene (DNA) → mRNA → protein → tính trạng qua phiên mã và dịch mã.',
  ],
  sections: [
    {
      heading: 'Mã di truyền',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mã di truyền',
          text: 'Mã di truyền là trình tự các nucleotide trên gene (qua mRNA) quy định trình tự các amino acid trên chuỗi polypeptide. Cứ ba nucleotide liền nhau trên mRNA mã hoá một amino acid; bộ ba này gọi là codon. Mã di truyền là mã bộ ba.',
        },
        {
          type: 'p',
          text: 'Vì sao lại là bộ ba? mRNA có $4$ loại nucleotide. Nếu một nucleotide mã hoá một amino acid thì chỉ có $4^1 = 4$ mã; nếu hai nucleotide thì có $4^2 = 16$ mã, vẫn ít hơn $20$ loại amino acid. Với ba nucleotide, có $4^3 = 64$ bộ ba, đủ để mã hoá $20$ loại amino acid.',
        },
        {
          type: 'list',
          items: [
            'Trong $64$ bộ ba, có $61$ bộ ba mã hoá $20$ loại amino acid, nên nhiều amino acid được mã hoá bởi nhiều bộ ba khác nhau (ví dụ Leu có $6$ bộ ba).',
            'Bộ ba AUG là bộ ba mở đầu: báo hiệu điểm bắt đầu dịch mã và mã hoá amino acid methionine (Met).',
            'Ba bộ ba UAA, UAG, UGA là bộ ba kết thúc: không mã hoá amino acid nào, báo hiệu kết thúc dịch mã.',
            'Mã di truyền được đọc từ bộ ba mở đầu, liên tục theo từng bộ ba, không gối lên nhau; mỗi bộ ba chỉ mã hoá một loại amino acid.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Mã di truyền quy định cấu trúc protein',
          text: 'Trình tự các bộ ba trên mRNA (do trình tự nucleotide trên mạch khuôn của gene quy định) quyết định thành phần và trình tự các amino acid trên chuỗi polypeptide, từ đó quyết định cấu trúc của protein.',
        },
      ],
    },
    {
      heading: 'Dịch mã',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Dịch mã',
          text: 'Dịch mã là quá trình tổng hợp chuỗi polypeptide dựa trên trình tự các bộ ba trên mRNA. Dịch mã diễn ra ở tế bào chất, trên ribosome.',
        },
        {
          type: 'table',
          caption: 'Các thành phần tham gia dịch mã',
          head: ['Thành phần', 'Vai trò'],
          rows: [
            ['mRNA', 'Làm khuôn, mang thông tin mã hoá trình tự amino acid'],
            [
              'tRNA',
              'Mang amino acid tới ribosome; có bộ ba đối mã (anticodon) khớp bổ sung với bộ ba trên mRNA',
            ],
            ['Ribosome', 'Nơi diễn ra dịch mã; trượt trên mRNA từng bộ ba một'],
            ['Amino acid tự do', 'Nguyên liệu để tạo chuỗi polypeptide'],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Khởi đầu: ribosome gắn vào mRNA ở vị trí bộ ba mở đầu AUG. tRNA mang amino acid mở đầu Met có bộ ba đối mã UAC khớp bổ sung với AUG.',
            'Kéo dài: tRNA mang amino acid tiếp theo có bộ ba đối mã khớp với bộ ba kế tiếp trên mRNA theo nguyên tắc bổ sung (A – U, G – C). Liên kết peptide được hình thành giữa hai amino acid. Ribosome dịch chuyển một bộ ba, quá trình lặp lại, chuỗi polypeptide dài dần.',
            'Kết thúc: khi ribosome gặp bộ ba kết thúc (UAA, UAG hoặc UGA), không có tRNA nào khớp; ribosome tách khỏi mRNA, chuỗi polypeptide được giải phóng. Amino acid mở đầu thường bị cắt bỏ; chuỗi polypeptide gấp nếp tạo thành protein có cấu trúc và chức năng.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bộ ba kết thúc không mã hoá amino acid',
          text: 'Khi đếm số amino acid, đừng tính bộ ba kết thúc. Một mRNA có $n$ bộ ba từ bộ ba mở đầu đến hết bộ ba kết thúc thì quy định chuỗi polypeptide gồm $n - 1$ amino acid (tính cả amino acid mở đầu).',
        },
      ],
    },
    {
      heading: 'Mối quan hệ từ gene đến tính trạng',
      blocks: [
        {
          type: 'p',
          text: 'Gene không trực tiếp tạo ra tính trạng. Thông tin di truyền trên gene được biểu hiện thành tính trạng qua hai quá trình: phiên mã (trong nhân) và dịch mã (ở tế bào chất).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Từ gene đến tính trạng',
          text: 'Gene (DNA) → (phiên mã) → mRNA → (dịch mã) → chuỗi polypeptide → protein → tính trạng.',
        },
        {
          type: 'p',
          text: 'Trình tự nucleotide trên mạch khuôn của gene quy định trình tự nucleotide trên mRNA; trình tự nucleotide trên mRNA quy định trình tự amino acid của chuỗi polypeptide; chuỗi polypeptide tạo nên protein. Protein trực tiếp tham gia cấu tạo và hoạt động của tế bào (enzyme, hormone, protein cấu trúc, ...), từ đó biểu hiện thành tính trạng của cơ thể.',
        },
        { type: 'widget', name: 'gen-den-protein' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ',
          text: 'Ở người, một gene quy định enzyme tham gia tổng hợp sắc tố melanin. Khi gene bình thường, enzyme được tạo ra, da và tóc có sắc tố. Khi gene bị biến đổi, enzyme không hoạt động, cơ thể không tạo được melanin: da, tóc rất trắng (bệnh bạch tạng). Tương tự, ở đậu Hà Lan, hoa tím hay hoa trắng phụ thuộc vào việc gene có tạo ra enzyme tổng hợp sắc tố hay không.',
        },
        {
          type: 'p',
          text: 'Vì vậy, muốn thay đổi một tính trạng, người ta có thể tác động vào gene quy định tính trạng đó (thay đổi trình tự nucleotide, đưa gene mới vào), dẫn đến thay đổi protein và thay đổi tính trạng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bộ giải mã: từ mRNA đến chuỗi polypeptide',
    instruction:
      'Chọn một mRNA mẫu hoặc tự nhập (chỉ A, U, G, C). Ribosome dừng ở bộ ba mở đầu AUG; với mỗi bộ ba đang sáng, em tìm nó trong bảng mã di truyền (khối hàng theo chữ cái thứ nhất, cột theo chữ cái thứ hai, dòng trong khối theo chữ cái thứ ba) và chạm vào để gắn amino acid vào chuỗi, cho tới bộ ba kết thúc.',
  },
  examples: [
    {
      problem:
        "Dùng bảng mã di truyền, xác định chuỗi amino acid do mRNA $5'$-GCAUGUUUGGCAAAUGGUAAGC-$3'$ quy định.",
      steps: [
        'Tìm bộ ba mở đầu AUG đầu tiên: bắt đầu ở nucleotide thứ $3$ (bỏ qua GC phía trước).',
        'Chia thành từng bộ ba từ AUG: AUG – UUU – GGC – AAA – UGG – UAA.',
        'Tra bảng: AUG → Met, UUU → Phe, GGC → Gly, AAA → Lys, UGG → Trp, UAA → kết thúc.',
        'Bộ ba kết thúc không mã hoá amino acid; các nucleotide sau đó không được dịch.',
      ],
      answer: 'Chuỗi polypeptide: Met – Phe – Gly – Lys – Trp ($5$ amino acid).',
    },
    {
      problem:
        "Mạch khuôn của một gene có trình tự $3'$-TACCGGTTTACT-$5'$. Xác định trình tự mRNA và chuỗi amino acid tương ứng.",
      steps: [
        "Phiên mã theo nguyên tắc bổ sung (A – U, T – A, G – C, C – G): mRNA $5'$-AUGGCCAAAUGA-$3'$.",
        'Chia bộ ba: AUG – GCC – AAA – UGA.',
        'Tra bảng: AUG → Met, GCC → Ala, AAA → Lys, UGA → kết thúc.',
      ],
      answer: "mRNA: $5'$-AUGGCCAAAUGA-$3'$; chuỗi polypeptide: Met – Ala – Lys.",
    },
    {
      problem:
        'Vùng mã hoá của một mRNA, tính từ bộ ba mở đầu đến hết bộ ba kết thúc, có $450$ nucleotide. Chuỗi polypeptide do mRNA này quy định có bao nhiêu amino acid (tính cả amino acid mở đầu)?',
      steps: [
        'Số bộ ba: $450 : 3 = 150$ bộ ba.',
        'Bộ ba kết thúc không mã hoá amino acid, nên số amino acid là $150 - 1 = 149$.',
      ],
      answer: 'Chuỗi polypeptide có $149$ amino acid.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Trong $64$ bộ ba của mã di truyền, có bao nhiêu bộ ba mã hoá amino acid?',
      answer: 61,
      hints: ['Có bao nhiêu bộ ba kết thúc?'],
      solution:
        'Có $3$ bộ ba kết thúc (UAA, UAG, UGA) không mã hoá amino acid, nên $64 - 3 = 61$ bộ ba mã hoá amino acid.',
    },
    {
      type: 'choice',
      prompt: 'Các bộ ba kết thúc trên mRNA là',
      options: ['AUG, UAA, UGA', 'UAA, UAG, UGA', 'UAA, UGG, UAG', 'AUG, GUA, AGU'],
      answer: 1,
      hints: ['AUG là bộ ba mở đầu; UGG mã hoá tryptophan.'],
      solution: 'Ba bộ ba kết thúc là UAA, UAG, UGA. AUG là bộ ba mở đầu (Met), UGG mã hoá Trp.',
    },
    {
      type: 'number',
      prompt:
        'Nếu mã di truyền là mã bộ hai (hai nucleotide mã hoá một amino acid) thì có tất cả bao nhiêu bộ hai khác nhau?',
      answer: 16,
      hints: ['Mỗi vị trí có $4$ khả năng.'],
      solution:
        '$4^2 = 16$ bộ hai, ít hơn $20$ loại amino acid; vì vậy mã di truyền phải là mã bộ ba ($4^3 = 64$).',
    },
    {
      type: 'text',
      prompt:
        "Dùng bảng mã di truyền, viết chuỗi amino acid do mRNA $5'$-AUGGCUUGGUAA-$3'$ quy định (viết tên viết tắt, nối bằng dấu gạch, ví dụ Met-Gly).",
      accept: ['Met-Ala-Trp', 'Met - Ala - Trp', 'Met – Ala – Trp', 'Met Ala Trp'],
      hints: ['Chia thành các bộ ba: AUG, GCU, UGG, UAA.', 'GCU: khối hàng G, cột C, dòng U.'],
      solution: 'AUG → Met, GCU → Ala, UGG → Trp, UAA → kết thúc: chuỗi Met – Ala – Trp.',
    },
    {
      type: 'number',
      prompt:
        'Vùng mã hoá của một mRNA, tính từ bộ ba mở đầu đến hết bộ ba kết thúc, gồm $900$ nucleotide. Chuỗi polypeptide được tổng hợp (tính cả amino acid mở đầu) có bao nhiêu amino acid?',
      answer: 299,
      hints: ['Tính số bộ ba trước.', 'Bộ ba kết thúc không mã hoá amino acid.'],
      solution: '$900 : 3 = 300$ bộ ba; trừ bộ ba kết thúc: $300 - 1 = 299$ amino acid.',
    },
    {
      type: 'choice',
      prompt: 'Một bộ ba trên mRNA là GCA. Bộ ba đối mã trên tRNA khớp với nó là',
      options: ['GCA', 'CGT', 'CGU', 'UGC'],
      answer: 2,
      hints: [
        'Bộ ba đối mã khớp bổ sung với bộ ba trên mRNA: A – U, G – C.',
        'tRNA là RNA nên không có T.',
      ],
      solution: 'G – C, C – G, A – U: bộ ba đối mã là CGU. Đáp án CGT sai vì RNA không có T.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp theo đúng trình tự biểu hiện thông tin di truyền từ gene đến tính trạng.',
      items: ['Protein', 'mRNA', 'Tính trạng', 'Gene (DNA)', 'Chuỗi polypeptide'],
      answer: [3, 1, 4, 0, 2],
      hints: ['Phiên mã tạo ra gì? Dịch mã tạo ra gì?'],
      solution:
        'Gene (DNA) → (phiên mã) mRNA → (dịch mã) chuỗi polypeptide → protein → tính trạng.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thành phần trực tiếp tham gia quá trình dịch mã.',
      options: [
        'mRNA',
        'tRNA',
        'Ribosome',
        'Amino acid tự do',
        'Enzyme RNA polymerase',
        'Mạch khuôn của gene',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Dịch mã diễn ra ở tế bào chất; gene ở trong nhân.'],
      solution:
        'Dịch mã cần mRNA (khuôn), tRNA (mang amino acid), ribosome và amino acid tự do. RNA polymerase và mạch khuôn của gene tham gia phiên mã trong nhân.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi quá trình với đặc điểm của nó.',
      left: ['Phiên mã', 'Dịch mã'],
      right: [
        'Diễn ra ở tế bào chất, trên ribosome, tạo chuỗi polypeptide',
        'Diễn ra trong nhân, tạo mRNA từ mạch khuôn của gene',
        'Diễn ra trên màng tế bào, tạo DNA',
      ],
      pairs: [
        [0, 1],
        [1, 0],
      ],
      hints: ['Một quá trình "chép" gene sang RNA, quá trình kia "dịch" RNA thành amino acid.'],
      solution:
        'Phiên mã: trong nhân, tạo mRNA. Dịch mã: ở tế bào chất, trên ribosome, tạo chuỗi polypeptide.',
    },
    {
      type: 'choice',
      prompt:
        'Người bị bệnh bạch tạng có gene quy định enzyme tổng hợp melanin bị biến đổi. Cách giải thích nào đúng nhất?',
      options: [
        'Gene biến đổi → mRNA biến đổi → enzyme (protein) không hoạt động → không tạo melanin → da, tóc trắng',
        'Gene trực tiếp tạo ra melanin, gene hỏng nên không có melanin',
        'Thiếu ánh nắng nên cơ thể không tạo được melanin',
        'mRNA không được tạo ra vì tế bào không có ribosome',
      ],
      answer: 0,
      hints: ['Gene biểu hiện thành tính trạng qua mRNA và protein.'],
      solution:
        'Gene không trực tiếp tạo ra tính trạng: gene biến đổi làm mRNA và enzyme biến đổi, enzyme không hoạt động nên không tổng hợp được melanin, biểu hiện thành tính trạng bạch tạng.',
    },
  ],
  takeaways: [
    'Mã di truyền là mã bộ ba: ba nucleotide liền nhau trên mRNA (codon) mã hoá một amino acid; có $4^3 = 64$ bộ ba.',
    '$61$ bộ ba mã hoá $20$ loại amino acid; AUG là bộ ba mở đầu (Met); UAA, UAG, UGA là bộ ba kết thúc.',
    'Dịch mã diễn ra ở tế bào chất trên ribosome: tRNA mang amino acid có bộ ba đối mã khớp bổ sung với bộ ba trên mRNA; ribosome đọc từ AUG đến bộ ba kết thúc, tạo chuỗi polypeptide.',
    'Gene (DNA) → mRNA → chuỗi polypeptide → protein → tính trạng: trình tự nucleotide của gene quy định trình tự amino acid của protein, protein biểu hiện thành tính trạng.',
  ],
};

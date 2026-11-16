/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm, cấu trúc và phân loại gene; phiên mã, chế biến mRNA, phiên mã ngược, mã di truyền và dịch mã; mối quan hệ DNA – RNA – protein; hệ gene và thành tựu giải trình tự hệ gene người.',
  intro:
    'Hệ gene người dài hơn 3,2 tỉ cặp nucleotide, nhưng phần mã hoá protein chỉ chiếm khoảng 1,5%. Phần còn lại làm gì? Một gene nằm trong nhân làm thế nào để chỉ huy việc tạo protein ở tế bào chất? Bài này đi theo dòng thông tin di truyền từ gene qua RNA đến protein.',
  objectives: [
    'Nêu được khái niệm gene; trình bày được cấu trúc của gene (vùng điều hoà, vùng mã hoá, vùng kết thúc) và phân loại gene.',
    'Trình bày được diễn biến phiên mã, quá trình chế biến mRNA ở sinh vật nhân thực và phiên mã ngược.',
    'Nêu được khái niệm và các đặc điểm của mã di truyền; trình bày được diễn biến dịch mã.',
    'Giải thích được mối quan hệ DNA – RNA – protein – tính trạng; nêu được khái niệm hệ gene và ứng dụng của việc giải trình tự hệ gene người.',
  ],
  sections: [
    {
      heading: 'Gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Gene',
          text: "Gene là một đoạn phân tử DNA mang thông tin quy định một sản phẩm nhất định là chuỗi polypeptide hoặc phân tử RNA. Trong hai mạch của gene, chỉ mạch có chiều $3' \\to 5'$ (mạch khuôn) được dùng để tổng hợp RNA; mạch còn lại là mạch mã hoá.",
        },
        {
          type: 'table',
          caption: 'Cấu trúc của một gene mã hoá protein',
          head: ['Vùng', 'Vị trí', 'Chức năng'],
          rows: [
            [
              'Vùng điều hoà',
              "Đầu $3'$ của mạch khuôn",
              'Có trình tự promoter để RNA polymerase nhận biết, liên kết và khởi động phiên mã; có trình tự liên kết với protein điều hoà',
            ],
            ['Vùng mã hoá', 'Ở giữa gene', 'Mang thông tin mã hoá chuỗi polypeptide hoặc RNA'],
            ['Vùng kết thúc', "Đầu $5'$ của mạch khuôn", 'Mang tín hiệu kết thúc phiên mã'],
          ],
        },
        {
          type: 'p',
          text: 'Ở sinh vật nhân sơ, vùng mã hoá liên tục (gene không phân mảnh); các gene có chức năng liên quan thường nằm thành nhóm, dùng chung một vùng điều hoà. Ở sinh vật nhân thực, phần lớn gene có vùng mã hoá không liên tục: các đoạn mã hoá amino acid (exon) xen kẽ các đoạn không mã hoá amino acid (intron); đó là gene phân mảnh.',
        },
        {
          type: 'list',
          items: [
            'Theo chức năng của sản phẩm: gene cấu trúc (sản phẩm tham gia cấu tạo, hoạt động của tế bào) và gene điều hoà (sản phẩm điều hoà sự biểu hiện của gene khác).',
            'Theo cấu trúc vùng mã hoá: gene phân mảnh (có intron) và gene không phân mảnh (không có intron).',
          ],
        },
      ],
    },
    {
      heading: 'Truyền đạt thông tin di truyền từ gene đến protein',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phiên mã',
          text: "Phiên mã là quá trình tổng hợp RNA dựa trên mạch khuôn của gene. Enzyme RNA polymerase bám vào promoter, tháo xoắn để lộ mạch khuôn, trượt theo chiều $3' \\to 5'$ và lắp các ribonucleotide theo nguyên tắc bổ sung A – U, T – A, G – C, C – G, tạo RNA theo chiều $5' \\to 3'$; gặp tín hiệu kết thúc thì RNA polymerase và RNA rời khỏi DNA.",
        },
        {
          type: 'p',
          text: "Ở sinh vật nhân thực, sản phẩm phiên mã là tiền mRNA. Tiền mRNA được chế biến thành mRNA trưởng thành: gắn mũ 7-methyl guanine ở đầu $5'$, gắn đuôi poly A ở đầu $3'$, cắt bỏ các intron và nối các exon lại. mRNA trưởng thành đi qua lỗ màng nhân ra tế bào chất. Ở sinh vật nhân sơ, mRNA được dịch mã ngay khi đang phiên mã.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Phiên mã ngược',
          text: 'Phiên mã ngược là quá trình tổng hợp DNA từ khuôn RNA nhờ enzyme phiên mã ngược. Nhờ đó, virus có vật chất di truyền là RNA (như HIV) cài được hệ gene vào DNA tế bào chủ; con người dùng phiên mã ngược để tạo cDNA (không có intron) và xét nghiệm virus RNA.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mã di truyền',
          text: 'Mã di truyền là trình tự các bộ ba nucleotide trên mRNA (codon) quy định trình tự amino acid trên chuỗi polypeptide. Có $4^3 = 64$ bộ ba: bộ ba AUG là bộ ba mở đầu (mã hoá Met), ba bộ ba UAA, UAG, UGA là bộ ba kết thúc (không mã hoá amino acid); $61$ bộ ba mã hoá $20$ loại amino acid.',
        },
        {
          type: 'list',
          items: [
            'Mã bộ ba, được đọc liên tục từ bộ ba mở đầu theo từng bộ ba, không gối lên nhau.',
            'Tính phổ biến: hầu hết các loài dùng chung một bộ mã (có vài ngoại lệ, như ở ti thể người UGA mã hoá tryptophan).',
            'Tính đặc hiệu: mỗi bộ ba chỉ mã hoá một loại amino acid.',
            'Tính thoái hoá: nhiều bộ ba khác nhau cùng mã hoá một loại amino acid (trừ AUG và UGG).',
          ],
        },
        {
          type: 'p',
          text: 'Dịch mã diễn ra ở tế bào chất, trên ribosome, với mRNA làm khuôn, amino acid làm nguyên liệu, tRNA vận chuyển amino acid, ATP và các enzyme. Nguyên tắc bổ sung giữa bộ ba mã sao trên mRNA và bộ ba đối mã (anticodon) trên tRNA quyết định amino acid nào được lắp vào.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Hoạt hoá amino acid: nhờ enzyme và năng lượng ATP, mỗi amino acid gắn với tRNA tương ứng.',
            'Khởi đầu: tiểu phần nhỏ của ribosome gắn với mRNA tại bộ ba mở đầu AUG; tRNA mang Met có bộ ba đối mã UAC khớp với AUG; tiểu phần lớn gắn vào tạo ribosome hoàn chỉnh.',
            "Kéo dài: tRNA mang amino acid tiếp theo vào ribosome, liên kết peptide hình thành giữa hai amino acid; ribosome dịch chuyển từng bộ ba theo chiều $5' \\to 3'$ trên mRNA, tRNA đã trao amino acid rời ribosome.",
            'Kết thúc: ribosome gặp bộ ba kết thúc, không có tRNA tương ứng nên dịch mã dừng; hai tiểu phần tách ra, chuỗi polypeptide được giải phóng, amino acid mở đầu bị cắt bỏ và chuỗi được biến đổi để có chức năng.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Mối quan hệ DNA – RNA – protein – tính trạng',
          text: 'Thông tin di truyền trên DNA được truyền cho thế hệ sau qua tái bản, và được biểu hiện thành tính trạng qua phiên mã và dịch mã: DNA → mRNA → protein → tính trạng. Trình tự nucleotide trên gene quy định trình tự amino acid trên chuỗi polypeptide. Nhiều ribosome có thể cùng dịch mã một mRNA (polyribosome).',
        },
      ],
    },
    {
      heading: 'Hệ gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hệ gene',
          text: 'Hệ gene là toàn bộ vật chất di truyền (DNA) trong tế bào của một sinh vật. Mỗi loài có kích thước hệ gene và số lượng gene đặc trưng.',
        },
        {
          type: 'table',
          caption: 'Hệ gene nhân sơ và nhân thực',
          head: ['Đặc điểm', 'Nhân sơ', 'Nhân thực'],
          rows: [
            [
              'Vị trí gene',
              'DNA vùng nhân và plasmid',
              'Phần lớn trên nhiễm sắc thể trong nhân, một ít trong ti thể, lục lạp',
            ],
            [
              'Cấu trúc gene',
              'Không có intron; gene chức năng liên quan thường tập trung thành operon',
              'Phần lớn có intron; các gene nằm rải rác trên các nhiễm sắc thể',
            ],
            [
              'Phần không mã hoá',
              'Rất ít, phần lớn DNA mã hoá RNA hoặc protein',
              'Phần lớn DNA không mã hoá, chứa nhiều trình tự điều hoà',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Dự án giải trình tự hệ gene người đã đọc được hơn $3{,}2$ tỉ cặp nucleotide trên $23$ cặp nhiễm sắc thể. Hệ gene người có gần $21\\,000$ gene mã hoá protein; exon cùng các vùng mã hoá rRNA, tRNA chỉ chiếm khoảng $1{,}5\\%$, vùng điều hoà khoảng $5\\%$, intron khoảng $20\\%$.',
        },
        {
          type: 'list',
          items: [
            'Y học: phát hiện người mang gene bệnh, tư vấn di truyền, phát triển thuốc đích nhắm vào protein đặc trưng của tế bào ung thư, liệu pháp gene.',
            'Pháp y: giám định quan hệ huyết thống, xác định danh tính nhờ các trình tự DNA đặc trưng cho từng người.',
            'Tiến hoá: so sánh hệ gene để xác định quan hệ họ hàng giữa các loài (tinh tinh là loài có hệ gene gần với người nhất).',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Từ gene phân mảnh đến chuỗi polypeptide',
    instruction:
      "Phiên mã gene thành tiền mRNA, rồi chế biến: chạm vào từng intron để cắt bỏ, gắn mũ $5'$ và đuôi poly A. Thử đưa ra tế bào chất khi chưa cắt hết intron để xem chuỗi polypeptide sai thế nào. Cuối cùng cho ribosome dịch từng bộ ba và dò bảng mã di truyền.",
  },
  examples: [
    {
      problem:
        "Mạch khuôn của một đoạn gene có trình tự $3'$-TAC GGT AAA ATC-$5'$. Viết trình tự mRNA và trình tự amino acid tương ứng.",
      steps: [
        'Phiên mã theo nguyên tắc bổ sung: T → A, A → U, G → C, C → G.',
        "mRNA: $5'$-AUG CCA UUU UAG-$3'$.",
        'Tra bảng mã di truyền: AUG → Met, CCA → Pro, UUU → Phe, UAG là bộ ba kết thúc.',
      ],
      answer: "mRNA $5'$-AUG CCA UUU UAG-$3'$; chuỗi Met – Pro – Phe (dừng tại UAG).",
    },
    {
      problem:
        'Vùng mã hoá của một gene nhân thực gồm $3$ exon dài $120$, $90$, $93$ nucleotide và $2$ intron dài $200$, $150$ nucleotide; exon đầu bắt đầu bằng bộ ba mở đầu, exon cuối kết thúc bằng bộ ba kết thúc. Tính số nucleotide của tiền mRNA, của mRNA trưởng thành (chỉ tính vùng mã hoá) và số amino acid của chuỗi polypeptide hoàn chỉnh.',
      steps: [
        'Tiền mRNA gồm cả exon và intron: $120 + 200 + 90 + 150 + 93 = 653$ nucleotide.',
        'mRNA trưởng thành chỉ còn các exon: $120 + 90 + 93 = 303$ nucleotide, tức $303 : 3 = 101$ bộ ba.',
        'Bộ ba kết thúc không mã hoá amino acid: $101 - 1 = 100$ amino acid được lắp vào chuỗi.',
        'Amino acid mở đầu bị cắt bỏ: chuỗi hoàn chỉnh có $100 - 1 = 99$ amino acid.',
      ],
      answer:
        'Tiền mRNA $653$ nucleotide; mRNA trưởng thành $303$ nucleotide; chuỗi hoàn chỉnh $99$ amino acid.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi vùng của gene với chức năng của nó.',
      left: ['Vùng điều hoà', 'Vùng mã hoá', 'Vùng kết thúc'],
      right: [
        'Có promoter để RNA polymerase nhận biết và khởi động phiên mã',
        'Mang thông tin mã hoá chuỗi polypeptide hoặc RNA',
        'Mang tín hiệu kết thúc phiên mã',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ["Vùng điều hoà nằm ở đầu $3'$ của mạch khuôn, nơi phiên mã bắt đầu."],
      solution:
        'Vùng điều hoà chứa promoter khởi động phiên mã; vùng mã hoá mang thông tin; vùng kết thúc mang tín hiệu dừng phiên mã.',
    },
    {
      type: 'choice',
      prompt:
        'Một amino acid được mã hoá bởi nhiều bộ ba khác nhau. Đây là đặc điểm nào của mã di truyền?',
      options: ['Tính thoái hoá', 'Tính đặc hiệu', 'Tính phổ biến', 'Mã đọc liên tục'],
      answer: 0,
      hints: ['Đặc hiệu là chiều ngược lại: một bộ ba chỉ mã hoá một loại amino acid.'],
      solution:
        'Nhiều bộ ba cùng mã hoá một amino acid là tính thoái hoá (ví dụ Leu có $6$ bộ ba). Tính đặc hiệu: mỗi bộ ba chỉ mã hoá một amino acid; tính phổ biến: các loài dùng chung bộ mã.',
    },
    {
      type: 'text',
      prompt:
        "Bộ ba mã sao trên mRNA là $5'$-GCU-$3'$. Viết bộ ba đối mã của tRNA tương ứng theo chiều $3' \\to 5'$ (chỉ ghi ba chữ cái).",
      accept: ['CGA', "3'-CGA-5'"],
      hints: ['Bộ ba đối mã bổ sung với bộ ba mã sao: A – U, G – C.'],
      solution: "G → C, C → G, U → A, nên bộ ba đối mã là $3'$-CGA-$5'$.",
    },
    {
      type: 'number',
      prompt:
        'Vùng mã hoá của một mRNA trưởng thành có $300$ bộ ba, kể cả bộ ba mở đầu và bộ ba kết thúc. Chuỗi polypeptide hoàn chỉnh (đã cắt amino acid mở đầu) có bao nhiêu amino acid?',
      answer: 298,
      hints: ['Bộ ba kết thúc không mã hoá amino acid.', 'Amino acid mở đầu bị cắt sau dịch mã.'],
      solution: '$300 - 1$ (bộ ba kết thúc) $- 1$ (Met mở đầu bị cắt) $= 298$ amino acid.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện của dịch mã theo đúng thứ tự.',
      items: [
        'Amino acid được gắn với tRNA tương ứng nhờ ATP và enzyme',
        'Tiểu phần nhỏ ribosome gắn với mRNA tại bộ ba mở đầu AUG',
        'tRNA mang Met khớp với AUG, tiểu phần lớn gắn vào',
        'Liên kết peptide hình thành, ribosome dịch chuyển từng bộ ba',
        'Ribosome gặp bộ ba kết thúc, chuỗi polypeptide được giải phóng',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Amino acid phải được hoạt hoá trước khi được đưa tới ribosome.'],
      solution:
        'Hoạt hoá amino acid → khởi đầu (tiểu phần nhỏ gắn mRNA, tRNA mang Met, tiểu phần lớn) → kéo dài → kết thúc.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các quá trình chế biến tiền mRNA thành mRNA trưởng thành ở sinh vật nhân thực.',
      options: [
        'Cắt bỏ intron, nối các exon',
        "Gắn mũ 7-methyl guanine ở đầu $5'$",
        "Gắn đuôi poly A ở đầu $3'$",
        'Cắt bỏ các exon, nối các intron',
        'Thay U bằng T',
      ],
      answers: [0, 1, 2],
      hints: ['Exon là đoạn mang thông tin mã hoá amino acid nên phải được giữ lại.'],
      solution:
        "Tiền mRNA được gắn mũ ở đầu $5'$, đuôi poly A ở đầu $3'$, cắt bỏ intron và nối exon; RNA vẫn chứa U, không có T.",
    },
    {
      type: 'choice',
      prompt: 'Quá trình tổng hợp DNA từ khuôn RNA gọi là',
      options: ['phiên mã ngược', 'phiên mã', 'tái bản DNA', 'dịch mã'],
      answer: 0,
      hints: ['Thông tin đi ngược chiều với phiên mã thông thường.'],
      solution:
        'Đó là phiên mã ngược, do enzyme phiên mã ngược xúc tác; gặp ở virus như HIV và được dùng để tạo cDNA.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về hệ gene người?',
      options: [
        'Phần mã hoá protein chỉ chiếm một tỉ lệ nhỏ của hệ gene',
        'Hầu hết DNA của hệ gene đều mã hoá protein',
        'Hệ gene chỉ gồm DNA trong nhân, không có DNA ti thể',
        'Mọi gene của người đều không có intron',
      ],
      answer: 0,
      hints: ['Nhớ lại tỉ lệ của exon trong hệ gene người.'],
      solution:
        'Exon và các vùng mã hoá rRNA, tRNA chỉ chiếm khoảng $1{,}5\\%$ hệ gene; hệ gene gồm cả DNA ti thể; phần lớn gene người là gene phân mảnh.',
    },
  ],
  takeaways: [
    'Gene là đoạn DNA mang thông tin quy định một chuỗi polypeptide hoặc một RNA; gồm vùng điều hoà, vùng mã hoá, vùng kết thúc.',
    'Gene nhân thực phần lớn là gene phân mảnh (exon xen intron); tiền mRNA được cắt intron, nối exon, gắn mũ và đuôi poly A.',
    'Mã di truyền là mã bộ ba, đọc liên tục, có tính phổ biến, đặc hiệu và thoái hoá; AUG mở đầu, UAA, UAG, UGA kết thúc.',
    'Dịch mã theo nguyên tắc bổ sung giữa bộ ba mã sao và bộ ba đối mã: DNA → mRNA → protein → tính trạng.',
    'Hệ gene là toàn bộ DNA của tế bào; giải trình tự hệ gene người được ứng dụng trong y học, pháp y và nghiên cứu tiến hoá.',
  ],
};

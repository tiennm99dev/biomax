/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm công nghệ di truyền; công nghệ DNA tái tổ hợp: thể truyền, enzyme cắt giới hạn, ligase, các bước tạo và đưa DNA tái tổ hợp vào tế bào nhận, sàng lọc; tạo sinh vật biến đổi gene, thành tựu, rủi ro và đạo đức sinh học.',
  intro:
    'Trước những năm 1980, insulin chữa bệnh tiểu đường được chiết từ tuỵ lợn và bò, vừa đắt vừa dễ gây dị ứng. Ngày nay, phần lớn insulin được sản xuất từ vi khuẩn E. coli mang gene insulin người. Làm thế nào để "cắt" một gene từ người và "dán" vào vi khuẩn?',
  objectives: [
    'Nêu được khái niệm công nghệ di truyền, công nghệ DNA tái tổ hợp và sinh vật biến đổi gene.',
    'Trình bày được các bước tạo DNA tái tổ hợp và đưa vào tế bào nhận; nêu được vai trò của thể truyền, enzyme cắt giới hạn và DNA ligase.',
    'Trình bày được nguyên lí tạo động vật, thực vật biến đổi gene; kể được một số thành tựu.',
    'Nêu được các rủi ro và vấn đề đạo đức sinh học của công nghệ di truyền.',
  ],
  sections: [
    {
      heading: 'Công nghệ DNA tái tổ hợp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công nghệ di truyền',
          text: 'Công nghệ di truyền (công nghệ gene) là quy trình kĩ thuật tác động lên phân tử DNA (tách chiết, nhân bản, cắt, nối) nhằm thay đổi kiểu gene, kiểu hình của sinh vật hoặc tạo ra sản phẩm của gene phục vụ con người. Công nghệ di truyền gồm công nghệ DNA tái tổ hợp và công nghệ tạo sinh vật biến đổi gene.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'DNA tái tổ hợp',
          text: 'DNA tái tổ hợp là phân tử DNA được tạo ra bằng cách ghép các đoạn DNA từ hai nguồn khác nhau (thường của hai loài), gồm gene cần chuyển và DNA làm thể truyền (vector). Thể truyền phải tự tái bản được trong tế bào nhận và bảo đảm cho gene chuyển được phiên mã, dịch mã.',
        },
        {
          type: 'table',
          caption: 'Công cụ của công nghệ DNA tái tổ hợp',
          head: ['Công cụ', 'Vai trò'],
          rows: [
            [
              'Thể truyền',
              'Plasmid của vi khuẩn, DNA virus, nhiễm sắc thể nhân tạo của nấm men…; mang gene vào tế bào nhận',
            ],
            [
              'Enzyme cắt giới hạn (restrictase)',
              'Nhận biết và cắt DNA tại trình tự nucleotide xác định, tạo các đầu dính',
            ],
            ['DNA ligase', 'Nối các đoạn DNA bằng liên kết phosphodiester, tạo DNA tái tổ hợp'],
            [
              'Tế bào nhận',
              'Thường là E. coli, B. subtilis, nấm men S. cerevisiae…; sinh sản nhanh, dễ nuôi',
            ],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tách chiết thể truyền (ví dụ plasmid) và DNA chứa gene cần chuyển.',
            'Cắt thể truyền và DNA chứa gene bằng cùng một loại enzyme cắt giới hạn, tạo ra các đầu dính bổ sung với nhau.',
            'Nối gene vào thể truyền bằng DNA ligase, tạo DNA tái tổ hợp.',
            'Đưa DNA tái tổ hợp vào tế bào nhận: biến nạp (dùng $\\mathrm{CaCl_2}$ hoặc xung điện làm dãn màng sinh chất để DNA đi vào) hoặc tải nạp (nhờ thể thực khuẩn mang gene xâm nhiễm vi khuẩn).',
            'Sàng lọc tế bào mang DNA tái tổ hợp (bằng PCR, lai phân tử), nuôi cấy cho gene biểu hiện, tách chiết và kiểm tra protein tái tổ hợp rồi sản xuất ở quy mô lớn.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Vi khuẩn không cắt được intron, nên gene nhân thực đưa vào vi khuẩn thường là cDNA (DNA không có intron, tạo từ mRNA trưởng thành nhờ phiên mã ngược).',
        },
        {
          type: 'p',
          text: 'Thành tựu: vi khuẩn, nấm men mang DNA tái tổ hợp sản xuất insulin, hormone sinh trưởng, somatostatin, interferon, kháng thể, enzyme, vaccine; vi sinh vật biến đổi gene dùng để sản xuất ethanol, xử lí nước thải và chất độc, thu hồi kim loại nặng; liệu pháp gene đưa gene lành vào người bệnh (như bệnh suy giảm miễn dịch SCID).',
        },
      ],
    },
    {
      heading: 'Sinh vật biến đổi gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh vật biến đổi gene',
          text: 'Sinh vật biến đổi gene là sinh vật có hệ gene đã được con người biến đổi cho phù hợp với mục đích của mình, chủ yếu bằng cách đưa thêm gene của loài khác vào. Động vật, thực vật mang gene ngoại lai còn gọi là sinh vật chuyển gene.',
        },
        {
          type: 'table',
          caption: 'Tạo động vật và thực vật biến đổi gene',
          head: ['Đặc điểm', 'Động vật', 'Thực vật'],
          rows: [
            [
              'Tế bào nhận',
              'Trứng vừa thụ tinh (nhân trứng và nhân tinh trùng chưa hợp nhất), tế bào gốc phôi',
              'Tế bào thực vật, tế bào trần',
            ],
            [
              'Cách đưa gene vào',
              'Vi tiêm DNA vào hợp tử; dùng thể truyền virus',
              'Thể truyền Ti plasmid (đã bỏ khả năng gây bệnh); súng bắn gene; qua ống phấn',
            ],
            [
              'Tạo cá thể',
              'Nuôi hợp tử thành phôi, cấy vào tử cung con cái nhận ("mẹ nuôi")',
              'Nuôi cấy tế bào chuyển gene, tái sinh thành cây',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Thực vật: lúa vàng tổng hợp tiền chất vitamin A (β-carotene); bông Bt, ngô Bt mang gene của vi khuẩn Bacillus thuringiensis kháng sâu, giảm thuốc trừ sâu; đậu tương giàu methionine.',
            'Động vật: cừu tiết sữa chứa protein antithrombin chống đông máu; cá hồi lớn nhanh; chuột mang gene người dùng làm mô hình nghiên cứu bệnh.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Rủi ro và đạo đức sinh học',
          text: 'Gene chuyển có thể phát tán sang loài hoang dại (tạo "siêu cỏ dại"), ảnh hưởng đến đa dạng sinh học; sản phẩm biến đổi gene cần được đánh giá lâu dài về nguy cơ gây dị ứng. Nhiều nước cấm chỉnh sửa hệ gene người. Nghiên cứu, sản xuất và sử dụng sinh vật biến đổi gene phải tuân thủ pháp luật và đạo đức; thực phẩm biến đổi gene cần được ghi nhãn để người tiêu dùng lựa chọn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng lab ảo: cắt, nối plasmid và biến nạp',
    instruction:
      'Chọn enzyme cắt plasmid và enzyme cắt DNA chứa gene insulin, nối bằng ligase, biến nạp vào E. coli rồi sàng lọc bằng PCR. Thử cả các lựa chọn sai: hai enzyme khác nhau, enzyme cắt vào vùng khởi đầu tái bản (Ori) của plasmid hoặc cắt vào giữa gene.',
  },
  examples: [
    {
      problem:
        "Enzyme EcoRI nhận biết trình tự $5'$-GAATTC-$3'$ và cắt giữa G và A trên cả hai mạch. Một đoạn DNA mạch kép có trình tự $5'$-TAGAATTCGC-$3'$ ở một mạch. Viết các đầu dính tạo thành và giải thích vì sao gene và plasmid phải cắt bằng cùng enzyme.",
      steps: [
        "Mạch đã cho: $5'$-TAG | AATTCGC-$3'$ (cắt sau G).",
        "Mạch bổ sung đọc $5' \\to 3'$ là GCGAATTCTA, cũng có trình tự GAATTC nên bị cắt: $5'$-GCG | AATTCTA-$3'$.",
        'Mỗi đầu cắt có một đoạn mạch đơn AATT nhô ra: đó là đầu dính.',
        'Các đầu dính AATT bổ sung với nhau, nên mọi đoạn DNA cắt bằng EcoRI đều ghép được với nhau; đầu dính của enzyme khác (như GATC của BamHI) không bổ sung với AATT.',
      ],
      answer:
        'Hai đầu dính đều là AATT; dùng cùng một enzyme để đầu dính của gene và của plasmid bổ sung, ligase mới nối được.',
    },
    {
      problem: 'Nêu các bước để tạo dòng vi khuẩn E. coli sản xuất insulin người.',
      steps: [
        'Tạo gene insulin dạng cDNA từ mRNA của tế bào tuỵ (nhờ phiên mã ngược) và tách plasmid từ vi khuẩn.',
        'Cắt plasmid và DNA chứa gene bằng cùng một enzyme cắt giới hạn; nối bằng DNA ligase tạo plasmid tái tổ hợp.',
        'Biến nạp plasmid tái tổ hợp vào E. coli (xử lí $\\mathrm{CaCl_2}$ hoặc xung điện).',
        'Sàng lọc bằng PCR để tìm tế bào mang gene insulin; nuôi cấy dòng đó, tách chiết và tinh sạch insulin.',
      ],
      answer:
        'Tách gene và thể truyền → cắt bằng cùng enzyme → nối bằng ligase → biến nạp → sàng lọc, nuôi cấy, thu insulin.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Enzyme dùng để nối gene cần chuyển vào thể truyền là',
      options: ['DNA ligase', 'enzyme cắt giới hạn', 'RNA polymerase', 'enzyme phiên mã ngược'],
      answer: 0,
      hints: ['Enzyme này cũng nối các đoạn Okazaki trong tái bản DNA.'],
      solution:
        'DNA ligase tạo liên kết phosphodiester, nối gene vào thể truyền thành DNA tái tổ hợp.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải cắt thể truyền và DNA chứa gene bằng cùng một loại enzyme cắt giới hạn?',
      options: [
        'Để tạo các đầu dính bổ sung với nhau, giúp gene ghép được vào thể truyền',
        'Vì mỗi tế bào chỉ có một loại enzyme cắt giới hạn',
        'Để gene không bị phiên mã trong tế bào nhận',
        'Để thể truyền không tự tái bản được',
      ],
      answer: 0,
      hints: ['Hãy nghĩ đến các đoạn mạch đơn nhô ra ở chỗ cắt.'],
      solution:
        'Cùng một enzyme tạo ra các đầu dính giống nhau, bổ sung với nhau, nên gene và thể truyền bắt cặp được để ligase nối lại.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tạo vi khuẩn mang gene người.',
      items: [
        'Tách plasmid và DNA chứa gene cần chuyển',
        'Cắt plasmid và DNA bằng cùng một enzyme cắt giới hạn',
        'Nối gene vào plasmid bằng DNA ligase',
        'Đưa DNA tái tổ hợp vào vi khuẩn',
        'Sàng lọc và nuôi cấy tế bào mang DNA tái tổ hợp',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có DNA tái tổ hợp trước rồi mới đưa vào tế bào nhận.'],
      solution: 'Tách → cắt → nối → đưa vào tế bào nhận → sàng lọc, nuôi cấy.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các yêu cầu đối với một thể truyền.',
      options: [
        'Tự tái bản được trong tế bào nhận',
        'Bảo đảm cho gene chuyển được phiên mã, dịch mã',
        'Có trình tự nhận biết của enzyme cắt giới hạn',
        'Phải có nguồn gốc từ cùng loài với gene cần chuyển',
      ],
      answers: [0, 1, 2],
      hints: ['Gene chuyển và thể truyền thường thuộc hai loài khác nhau.'],
      solution:
        'Thể truyền phải tự tái bản, giúp gene biểu hiện và có vị trí cắt của enzyme giới hạn để gắn gene vào. Thể truyền thường là plasmid vi khuẩn, khác loài với gene chuyển.',
    },
    {
      type: 'text',
      prompt:
        'Phương pháp dùng $\\mathrm{CaCl_2}$ hoặc xung điện làm dãn màng sinh chất để DNA tái tổ hợp đi vào tế bào vi khuẩn gọi là gì?',
      accept: ['biến nạp', 'phương pháp biến nạp'],
      hints: ['Phân biệt với cách dùng thể thực khuẩn (tải nạp).'],
      solution: 'Đó là biến nạp. Dùng thể thực khuẩn mang gene xâm nhiễm vi khuẩn là tải nạp.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sinh vật biến đổi gene với đặc điểm mới của nó.',
      left: ['Lúa vàng', 'Bông Bt', 'Cừu chuyển gene', 'Vi khuẩn E. coli chuyển gene'],
      right: [
        'Tổng hợp tiền chất vitamin A (β-carotene)',
        'Tạo protein độc với sâu hại',
        'Tiết sữa chứa protein antithrombin',
        'Sản xuất insulin người',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Bt là viết tắt tên vi khuẩn Bacillus thuringiensis, nguồn gene kháng sâu.'],
      solution:
        'Lúa vàng: β-carotene; bông Bt: protein diệt sâu; cừu: antithrombin trong sữa; E. coli: insulin người.',
    },
    {
      type: 'number',
      prompt:
        'Giả sử bốn loại nucleotide phân bố ngẫu nhiên với tỉ lệ bằng nhau. Trung bình trên một mạch, cứ bao nhiêu nucleotide thì gặp một trình tự $6$ nucleotide xác định như GAATTC (vị trí cắt của EcoRI)?',
      answer: 4096,
      hints: [
        'Mỗi vị trí là một nucleotide cụ thể với xác suất $\\dfrac{1}{4}$.',
        'Xác suất gặp đúng $6$ nucleotide liên tiếp là $\\left(\\dfrac{1}{4}\\right)^6$.',
      ],
      solution:
        '$\\left(\\dfrac{1}{4}\\right)^6 = \\dfrac{1}{4096}$, nên trung bình cứ $4096$ nucleotide gặp một trình tự GAATTC.',
    },
    {
      type: 'choice',
      prompt: 'Nguy cơ nào sau đây là rủi ro môi trường của cây trồng biến đổi gene?',
      options: [
        'Gene kháng thuốc diệt cỏ phát tán sang loài hoang dại, tạo "siêu cỏ dại"',
        'Cây biến đổi gene luôn cho năng suất thấp hơn',
        'Cây biến đổi gene không ra hoa được',
        'Gene chuyển làm thay đổi bảng mã di truyền của cây',
      ],
      answer: 0,
      hints: ['Cây trồng có thể giao phấn với các loài họ hàng hoang dại.'],
      solution:
        'Gene chuyển có thể phát tán qua lai với loài hoang dại, tạo cỏ dại khó diệt, ảnh hưởng đa dạng sinh học. Bảng mã di truyền không thay đổi.',
    },
  ],
  takeaways: [
    'Công nghệ di truyền tác động lên DNA để thay đổi kiểu gene, kiểu hình hoặc thu sản phẩm của gene; gồm công nghệ DNA tái tổ hợp và tạo sinh vật biến đổi gene.',
    'DNA tái tổ hợp = gene cần chuyển + thể truyền, cắt bằng cùng một enzyme cắt giới hạn (đầu dính bổ sung) và nối bằng DNA ligase.',
    'DNA tái tổ hợp được đưa vào tế bào nhận bằng biến nạp hoặc tải nạp, rồi sàng lọc bằng PCR, lai phân tử.',
    'Sinh vật biến đổi gene: lúa vàng, bông Bt, cừu sản xuất antithrombin, vi khuẩn sản xuất insulin…',
    'Cần đánh giá rủi ro và tuân thủ pháp luật, đạo đức sinh học khi tạo và sử dụng sinh vật biến đổi gene.',
  ],
};

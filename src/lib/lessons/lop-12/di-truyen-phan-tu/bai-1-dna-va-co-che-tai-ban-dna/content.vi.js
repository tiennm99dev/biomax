/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu trúc và chức năng của DNA; cơ chế tái bản DNA theo nguyên tắc bổ sung và bán bảo toàn: chạc tái bản, đoạn mồi, mạch dẫn đầu, mạch ra chậm với các đoạn Okazaki, vai trò của các enzyme và ý nghĩa.',
  intro:
    'Một tế bào người có khoảng 6 tỉ cặp nucleotide, vậy mà trước mỗi lần phân bào, toàn bộ lượng DNA ấy được sao chép chỉ trong vài giờ và gần như không sai sót. Vì sao DNA vừa bền vững để lưu giữ thông tin, vừa dễ tách mạch để sao chép? Và vì sao hai mạch mới lại được tổng hợp theo hai cách khác nhau?',
  objectives: [
    'Phân tích được cấu trúc hoá học của DNA và mối liên hệ giữa cấu trúc với chức năng mang, bảo quản và truyền đạt thông tin di truyền.',
    'Trình bày được cơ chế tái bản DNA: các thành phần tham gia, nguyên tắc bổ sung và bán bảo toàn, sự tổng hợp mạch dẫn đầu và mạch ra chậm.',
    'Phân biệt được tái bản DNA ở sinh vật nhân sơ và nhân thực; nêu được ý nghĩa và ứng dụng của tái bản DNA.',
    'Vận dụng được các mối liên hệ về số nucleotide, chiều dài, liên kết hydrogen và số phân tử DNA con sau tái bản.',
  ],
  sections: [
    {
      heading: 'Cấu trúc và chức năng của DNA',
      blocks: [
        {
          type: 'p',
          text: 'DNA (deoxyribonucleic acid) là đại phân tử được cấu tạo theo nguyên tắc đa phân, đơn phân là nucleotide. Mỗi nucleotide gồm ba thành phần: đường deoxyribose ($\\mathrm{C_5H_{10}O_4}$), nhóm phosphate và một trong bốn loại base: adenine (A), thymine (T), guanine (G), cytosine (C).',
        },
        {
          type: 'list',
          items: [
            "Trên mỗi mạch, các nucleotide nối với nhau bằng liên kết phosphodiester (liên kết cộng hoá trị bền vững) giữa nhóm phosphate của nucleotide này với đường của nucleotide kế tiếp, nên mỗi mạch có một đầu $5'$ và một đầu $3'$.",
            'Hai mạch liên kết với nhau bằng liên kết hydrogen giữa các base theo nguyên tắc bổ sung: A liên kết với T bằng $2$ liên kết hydrogen, G liên kết với C bằng $3$ liên kết hydrogen.',
            "Hai mạch song song và ngược chiều nhau ($5' \\to 3'$ và $3' \\to 5'$), xoắn quanh một trục tạo thành chuỗi xoắn kép. Theo mô hình Watson – Crick, đường kính chuỗi xoắn khoảng $2$ nm, mỗi chu kì xoắn dài $3{,}4$ nm gồm $10$ cặp nucleotide.",
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hệ quả của nguyên tắc bổ sung',
          text: 'Trong phân tử DNA mạch kép: $A = T$, $G = C$. Gọi $N$ là tổng số nucleotide thì $N = 2A + 2G$; chiều dài $L = \\dfrac{N}{2} \\cdot 0{,}34$ nm; số liên kết hydrogen $H = 2A + 3G$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Chức năng của DNA',
          text: 'DNA mang, bảo quản và truyền đạt thông tin di truyền. Thông tin di truyền được mã hoá dưới dạng trình tự các nucleotide.',
        },
        {
          type: 'table',
          caption: 'Cấu trúc phù hợp với chức năng',
          head: ['Đặc điểm cấu trúc', 'Ý nghĩa'],
          rows: [
            [
              'Bốn loại nucleotide sắp xếp theo vô số trình tự khác nhau',
              'Lưu giữ được lượng thông tin di truyền rất lớn, đặc trưng cho từng loài',
            ],
            [
              'Liên kết phosphodiester bền, cấu trúc mạch kép',
              'DNA ổn định; khi một mạch bị hư hỏng, mạch còn lại làm khuôn để sửa chữa',
            ],
            [
              'Liên kết hydrogen yếu nhưng số lượng lớn',
              'Hai mạch dễ tách ra khi tái bản, phiên mã nhưng phân tử vẫn bền vững',
            ],
            [
              'Nguyên tắc bổ sung giữa hai mạch',
              'Thông tin được sao chép gần như nguyên vẹn qua tái bản',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Cơ chế tái bản DNA',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tái bản DNA',
          text: 'Tái bản DNA (tự nhân đôi DNA) là quá trình tạo ra hai phân tử DNA con giống nhau và giống phân tử DNA mẹ. Ở sinh vật nhân thực, tái bản diễn ra chủ yếu trong nhân tế bào (ngoài ra ở ti thể, lục lạp), vào pha S của kì trung gian; ở sinh vật nhân sơ, diễn ra ở tế bào chất (vùng nhân).',
        },
        {
          type: 'table',
          caption: 'Các thành phần tham gia tái bản DNA',
          head: ['Thành phần', 'Vai trò'],
          rows: [
            ['DNA mẹ', 'Cả hai mạch đều làm khuôn'],
            [
              'Nucleotide tự do',
              'A, T, G, C để tổng hợp mạch DNA mới; A, U, G, C để tổng hợp đoạn mồi RNA',
            ],
            [
              'Enzyme tháo xoắn, enzyme tách mạch',
              'Tháo xoắn, cắt liên kết hydrogen, tách hai mạch',
            ],
            [
              'RNA polymerase (tổng hợp đoạn mồi)',
              "Tổng hợp đoạn mồi RNA ngắn, tạo đầu $3'$-OH tự do",
            ],
            [
              'DNA polymerase',
              "Gắn nucleotide vào đầu $3'$-OH, kéo dài mạch mới theo chiều $5' \\to 3'$; thay đoạn mồi bằng DNA",
            ],
            ['DNA ligase', 'Nối các đoạn Okazaki thành mạch hoàn chỉnh'],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Khởi đầu: tái bản bắt đầu tại điểm khởi đầu tái bản (Ori). Enzyme tháo xoắn và tách hai mạch về hai phía, tạo hai chạc tái bản hình chữ Y; vùng tách mạch giữa hai chạc gọi là đơn vị tái bản. Enzyme RNA polymerase tổng hợp đoạn mồi.',
            "Tổng hợp mạch mới: DNA polymerase chỉ gắn nucleotide vào đầu $3'$-OH, nên mạch mới luôn kéo dài theo chiều $5' \\to 3'$. Trên mạch khuôn $3' \\to 5'$, mạch mới được tổng hợp liên tục cùng chiều tháo xoắn: mạch dẫn đầu. Trên mạch khuôn $5' \\to 3'$, mạch mới được tổng hợp ngược chiều tháo xoắn, gián đoạn thành từng đoạn ngắn gọi là đoạn Okazaki, mỗi đoạn bắt đầu từ một đoạn mồi riêng: mạch ra chậm.",
            'Kết thúc: các đoạn mồi được thay bằng DNA, DNA ligase nối các đoạn Okazaki. Mỗi mạch mới cùng mạch khuôn của nó xoắn lại, tạo thành hai phân tử DNA con.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc tái bản',
          text: 'Nguyên tắc bổ sung: nucleotide tự do liên kết với nucleotide trên mạch khuôn theo A – T, G – C. Nguyên tắc bán bảo toàn: mỗi phân tử DNA con gồm một mạch của DNA mẹ và một mạch mới tổng hợp.',
        },
        { type: 'widget', name: 'nhan-so-nhan-thuc' },
        {
          type: 'p',
          text: 'Kết quả: từ một phân tử DNA mẹ tạo ra hai phân tử DNA con giống nhau và giống mẹ (nếu không có sai sót). Sau $k$ lần tái bản, một phân tử DNA tạo ra $2^k$ phân tử con, trong đó luôn chỉ có $2$ phân tử còn mang một mạch của DNA mẹ; số nucleotide tự do môi trường cung cấp là $N(2^k - 1)$.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ý nghĩa và ứng dụng',
          text: 'Nhờ tái bản DNA kết hợp với phân bào, thông tin di truyền được truyền đạt ổn định qua các thế hệ tế bào và cơ thể. Con người mô phỏng tái bản DNA trong ống nghiệm bằng kĩ thuật PCR để nhân bản DNA, phục vụ pháp y, chẩn đoán tác nhân gây bệnh, giải trình tự gene và công nghệ di truyền.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tự điều khiển chạc tái bản',
    instruction:
      'Chọn lần lượt các enzyme để tái bản đoạn DNA: tháo xoắn, đặt đoạn mồi, kéo dài mạch mới, nối các đoạn. Quan sát vì sao mạch trên được tổng hợp liên tục còn mạch dưới thành từng đoạn Okazaki. Chọn sai thứ tự, em sẽ nhận được lời giải thích; bấm "Gợi ý bước tiếp" nếu cần.',
  },
  examples: [
    {
      problem:
        'Một phân tử DNA có $3000$ nucleotide, trong đó có $600$ nucleotide loại A. Tính số nucleotide mỗi loại, chiều dài và số liên kết hydrogen của phân tử DNA.',
      steps: [
        'Theo nguyên tắc bổ sung: $T = A = 600$.',
        '$G = C = \\dfrac{N}{2} - A = 1500 - 600 = 900$.',
        'Chiều dài: $L = \\dfrac{N}{2} \\cdot 0{,}34 = 1500 \\cdot 0{,}34 = 510$ nm.',
        'Số liên kết hydrogen: $H = 2A + 3G = 2 \\cdot 600 + 3 \\cdot 900 = 3900$.',
      ],
      answer: '$A = T = 600$, $G = C = 900$; $L = 510$ nm; $H = 3900$.',
    },
    {
      problem:
        'Một phân tử DNA chỉ chứa $^{15}\\mathrm{N}$ được chuyển sang môi trường chỉ có $^{14}\\mathrm{N}$ và tái bản liên tiếp $3$ lần. Có bao nhiêu phân tử DNA con? Bao nhiêu phân tử còn chứa $^{15}\\mathrm{N}$?',
      steps: [
        'Số phân tử DNA con sau $3$ lần tái bản: $2^3 = 8$.',
        'Theo nguyên tắc bán bảo toàn, hai mạch chứa $^{15}\\mathrm{N}$ của DNA mẹ không bị phá vỡ mà nằm ở hai phân tử con khác nhau.',
        'Vậy có $2$ phân tử chứa $^{15}\\mathrm{N}$ (mỗi phân tử một mạch), $8 - 2 = 6$ phân tử chỉ chứa $^{14}\\mathrm{N}$.',
      ],
      answer: '$8$ phân tử DNA con; $2$ phân tử còn chứa $^{15}\\mathrm{N}$.',
    },
    {
      problem:
        "Trên một chạc tái bản, mạch khuôn thứ nhất có chiều $3' \\to 5'$ theo hướng tháo xoắn, mạch khuôn thứ hai có chiều $5' \\to 3'$. Mạch mới nào được tổng hợp liên tục? Giải thích.",
      steps: [
        "DNA polymerase chỉ kéo dài mạch mới theo chiều $5' \\to 3'$, tức là mạch mới luôn ngược chiều với mạch khuôn.",
        "Trên mạch khuôn $3' \\to 5'$, mạch mới có chiều $5' \\to 3'$ trùng với hướng tháo xoắn, nên được kéo dài liên tục theo chạc: mạch dẫn đầu.",
        'Trên mạch khuôn còn lại, mạch mới phải được tổng hợp ngược hướng tháo xoắn; mỗi lần chạc mở thêm, một đoạn mồi mới được đặt và một đoạn Okazaki được tổng hợp: mạch ra chậm.',
      ],
      answer:
        "Mạch mới trên khuôn $3' \\to 5'$ được tổng hợp liên tục; mạch trên khuôn $5' \\to 3'$ được tổng hợp gián đoạn.",
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Liên kết giữa các nucleotide trên cùng một mạch DNA là',
      options: ['liên kết phosphodiester', 'liên kết hydrogen', 'liên kết peptide', 'liên kết ion'],
      answer: 0,
      hints: ['Liên kết này là liên kết cộng hoá trị, rất bền, nối nhóm phosphate với đường.'],
      solution:
        'Trên mỗi mạch, các nucleotide nối với nhau bằng liên kết phosphodiester; liên kết hydrogen nối hai mạch với nhau, liên kết peptide nối các amino acid.',
    },
    {
      type: 'number',
      prompt:
        'Một phân tử DNA có $2400$ nucleotide, trong đó A chiếm $20\\%$. Tính số liên kết hydrogen của phân tử DNA.',
      answer: 3120,
      hints: [
        'Tính số nucleotide loại A, rồi suy ra G bằng nguyên tắc bổ sung.',
        '$A = 20\\% \\cdot 2400$; $G = 1200 - A$; $H = 2A + 3G$.',
      ],
      solution:
        '$A = T = 0{,}2 \\cdot 2400 = 480$; $G = C = 1200 - 480 = 720$; $H = 2 \\cdot 480 + 3 \\cdot 720 = 960 + 2160 = 3120$.',
    },
    {
      type: 'number',
      prompt: 'Một gene dài $408$ nm. Gene này có bao nhiêu nucleotide?',
      answer: 2400,
      hints: [
        'Mỗi cặp nucleotide dài $0{,}34$ nm.',
        'Số cặp nucleotide $= 408 : 0{,}34$; nhân đôi để có số nucleotide.',
      ],
      solution:
        'Số cặp nucleotide: $408 : 0{,}34 = 1200$; số nucleotide: $N = 2 \\cdot 1200 = 2400$.',
    },
    {
      type: 'choice',
      prompt: 'Trong tái bản DNA, mạch mới được tổng hợp liên tục (mạch dẫn đầu) là mạch',
      options: [
        "bổ sung với mạch khuôn có chiều $3' \\to 5'$ theo hướng tháo xoắn",
        "bổ sung với mạch khuôn có chiều $5' \\to 3'$ theo hướng tháo xoắn",
        'được tổng hợp từ nhiều đoạn mồi',
        'được nối bởi DNA ligase',
      ],
      answer: 0,
      hints: [
        "DNA polymerase chỉ kéo dài mạch mới theo chiều $5' \\to 3'$, ngược chiều mạch khuôn.",
      ],
      solution:
        "Mạch khuôn $3' \\to 5'$ cho mạch mới $5' \\to 3'$ cùng hướng với chạc tái bản, nên mạch này được tổng hợp liên tục từ một đoạn mồi. Mạch dùng nhiều đoạn mồi và cần ligase nối là mạch ra chậm.",
    },
    {
      type: 'match',
      prompt: 'Nối mỗi enzyme với vai trò của nó trong tái bản DNA.',
      left: ['Enzyme tháo xoắn', 'RNA polymerase', 'DNA polymerase', 'DNA ligase'],
      right: [
        'Tháo xoắn, tách hai mạch DNA',
        'Tổng hợp đoạn mồi RNA',
        "Gắn nucleotide vào đầu $3'$-OH, kéo dài mạch mới",
        'Nối các đoạn Okazaki',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Đoạn mồi là RNA nên do một RNA polymerase tổng hợp.'],
      solution:
        "Enzyme tháo xoắn tách mạch; RNA polymerase tổng hợp đoạn mồi; DNA polymerase kéo dài mạch mới theo chiều $5' \\to 3'$; DNA ligase nối các đoạn Okazaki.",
    },
    {
      type: 'number',
      prompt:
        'Một phân tử DNA có $3000$ nucleotide tái bản liên tiếp $3$ lần. Môi trường nội bào cung cấp bao nhiêu nucleotide tự do?',
      answer: 21000,
      hints: ['Số phân tử con là $2^3$; trừ phân tử mẹ đã có sẵn.', '$N_{mt} = N(2^k - 1)$.'],
      solution: '$N_{mt} = 3000 \\cdot (2^3 - 1) = 3000 \\cdot 7 = 21\\,000$ nucleotide.',
    },
    {
      type: 'number',
      prompt:
        'Trong một đơn vị tái bản, hai chạc tái bản tổng hợp tổng cộng $15$ đoạn Okazaki. Cần bao nhiêu đoạn mồi cho đơn vị tái bản này?',
      answer: 17,
      hints: [
        'Mỗi đoạn Okazaki cần một đoạn mồi.',
        'Mỗi chạc còn có một mạch dẫn đầu, mỗi mạch dẫn đầu cần một đoạn mồi.',
      ],
      solution:
        'Số đoạn mồi = số đoạn Okazaki + $2$ (hai mạch dẫn đầu của hai chạc) $= 15 + 2 = 17$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các điểm khác nhau đúng giữa tái bản DNA ở sinh vật nhân thực và nhân sơ.',
      options: [
        'Nhân thực có nhiều điểm khởi đầu tái bản trên mỗi phân tử DNA, nhân sơ chỉ có một',
        'Nhân thực có nhiều loại DNA polymerase hơn',
        'Nhân sơ tái bản theo nguyên tắc bảo toàn, nhân thực theo nguyên tắc bán bảo toàn',
        'Nhân sơ không cần đoạn mồi',
      ],
      answers: [0, 1],
      hints: ['Nguyên tắc bổ sung, bán bảo toàn và việc cần đoạn mồi là chung cho mọi sinh vật.'],
      solution:
        'DNA nhân thực rất dài nên có nhiều điểm khởi đầu (nhiều đơn vị tái bản) để rút ngắn thời gian, và có nhiều loại DNA polymerase hơn. Cả hai nhóm đều tái bản theo nguyên tắc bổ sung, bán bảo toàn và đều cần đoạn mồi.',
    },
    {
      type: 'text',
      prompt: 'Các đoạn DNA ngắn được tổng hợp gián đoạn trên mạch ra chậm gọi là đoạn gì?',
      accept: ['Okazaki', 'đoạn Okazaki', 'các đoạn Okazaki'],
      hints: ['Đoạn này mang tên nhà khoa học Nhật Bản phát hiện ra nó.'],
      solution: 'Đó là các đoạn Okazaki; sau khi thay đoạn mồi, DNA ligase nối chúng lại.',
    },
  ],
  takeaways: [
    'DNA gồm hai mạch polynucleotide song song, ngược chiều, liên kết bổ sung A – T ($2$ liên kết hydrogen), G – C ($3$ liên kết hydrogen).',
    'DNA mang, bảo quản và truyền đạt thông tin di truyền dưới dạng trình tự nucleotide.',
    'Tái bản DNA theo nguyên tắc bổ sung và bán bảo toàn: mỗi DNA con có một mạch cũ, một mạch mới.',
    "DNA polymerase chỉ kéo dài mạch theo chiều $5' \\to 3'$ từ đầu $3'$-OH của đoạn mồi: mạch dẫn đầu liên tục, mạch ra chậm gián đoạn thành các đoạn Okazaki được ligase nối lại.",
    'Nhân sơ có một điểm khởi đầu tái bản; nhân thực có nhiều đơn vị tái bản trên mỗi phân tử DNA.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tái bản DNA: diễn biến, nguyên tắc bổ sung và bán bảo toàn, kết quả và ý nghĩa; phiên mã tạo RNA: mạch khuôn, enzyme RNA polymerase, nguyên tắc bổ sung A – U, T – A, G – C, C – G và kết quả.',
  intro:
    'Mỗi ngày, cơ thể em tạo ra hàng tỉ tế bào mới, và tế bào nào cũng nhận được một bản sao đầy đủ, chính xác của DNA. Đồng thời, trong từng tế bào, thông tin trên các gene liên tục được "chép" sang RNA để mang ra ngoài nhân sử dụng. Hai quá trình sao chép ấy, tái bản DNA và phiên mã, đều dựa trên cùng một quy tắc em đã biết: nguyên tắc bổ sung.',
  objectives: [
    'Mô tả được các bước của quá trình tái bản DNA; nêu được nguyên tắc bổ sung và nguyên tắc bán bảo toàn.',
    'Nêu được kết quả và ý nghĩa của tái bản DNA; tính được số phân tử DNA con và số nucleotide môi trường cung cấp sau một số lần tái bản.',
    'Nêu được khái niệm phiên mã; mô tả được quá trình phiên mã tạo mRNA.',
    'Viết được trình tự mRNA được phiên mã từ một mạch khuôn cho trước.',
  ],
  sections: [
    {
      heading: 'Tái bản DNA',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tái bản DNA',
          text: 'Tái bản DNA (nhân đôi DNA) là quá trình tạo ra hai phân tử DNA con giống nhau và giống phân tử DNA mẹ. Quá trình diễn ra trong nhân tế bào ở sinh vật nhân thực (ở vùng nhân của sinh vật nhân sơ), trước khi tế bào bước vào phân chia.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tháo xoắn: phân tử DNA tháo xoắn, các liên kết hydrogen giữa hai mạch đứt dần, hai mạch đơn tách nhau ra.',
            'Tổng hợp mạch mới: mỗi mạch đơn làm khuôn; các nucleotide tự do trong tế bào liên kết với nucleotide trên mạch khuôn theo nguyên tắc bổ sung: A liên kết với T bằng $2$ liên kết hydrogen, G liên kết với C bằng $3$ liên kết hydrogen. Các nucleotide mới được nối với nhau nhờ enzyme (DNA polymerase), tạo thành mạch mới.',
            'Đóng xoắn: mỗi mạch mới cùng mạch khuôn của nó xoắn lại, tạo thành hai phân tử DNA con.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc của tái bản DNA',
          text: 'Nguyên tắc bổ sung: A – T, G – C, nên trình tự mạch mới được quy định bởi mạch khuôn. Nguyên tắc bán bảo toàn (giữ lại một nửa): trong mỗi phân tử DNA con có một mạch là mạch cũ của DNA mẹ, mạch còn lại được tổng hợp mới.',
        },
        {
          type: 'p',
          text: 'Kết quả: từ một phân tử DNA mẹ tạo ra hai phân tử DNA con có trình tự nucleotide giống hệt nhau và giống DNA mẹ. Ý nghĩa: nhờ tái bản DNA, thông tin di truyền được truyền đạt nguyên vẹn, ổn định qua các thế hệ tế bào và cơ thể.',
        },
        {
          type: 'p',
          text: 'Sau $k$ lần tái bản liên tiếp, một phân tử DNA tạo ra $2^k$ phân tử DNA con; trong đó luôn chỉ có $2$ phân tử còn mang một mạch cũ của DNA mẹ. Nếu DNA mẹ có $N$ nucleotide thì số nucleotide tự do môi trường cung cấp là:',
        },
        {
          type: 'tex',
          tex: 'N_{mt} = N \\cdot (2^k - 1)',
        },
      ],
    },
    {
      heading: 'Phiên mã tạo RNA',
      blocks: [
        {
          type: 'p',
          text: 'Ở mọi sinh vật, thông tin di truyền trên gene không được chuyển trực tiếp thành protein mà phải qua hai quá trình: phiên mã (tạo RNA) và dịch mã (tạo chuỗi polypeptide, học ở Bài 40).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phiên mã',
          text: 'Phiên mã là quá trình tổng hợp phân tử RNA dựa trên trình tự nucleotide của một mạch của gene (mạch khuôn). Quá trình diễn ra trong nhân tế bào ở sinh vật nhân thực (ở vùng nhân của sinh vật nhân sơ).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "Khởi đầu: enzyme RNA polymerase bám vào vùng điều hoà của gene; gene tháo xoắn để lộ mạch khuôn có chiều $3' \\to 5'$; quá trình tổng hợp RNA bắt đầu tại vị trí đặc hiệu.",
            "Kéo dài: RNA polymerase trượt dọc mạch khuôn theo chiều $3' \\to 5'$, gắn các ribonucleotide tự do theo nguyên tắc bổ sung A – U, T – A, G – C, C – G, tạo mạch RNA theo chiều $5' \\to 3'$. Vùng gene đã phiên mã xong đóng xoắn lại.",
            'Kết thúc: khi gặp tín hiệu kết thúc ở cuối gene, quá trình phiên mã dừng lại, phân tử RNA được giải phóng.',
          ],
        },
        {
          type: 'table',
          caption: 'Nguyên tắc bổ sung trong phiên mã',
          head: ['Mạch khuôn của gene', 'A', 'T', 'G', 'C'],
          rows: [['Ribonucleotide trên RNA', 'U', 'A', 'C', 'G']],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Vì mạch khuôn bổ sung với mạch còn lại của gene (mạch mã hoá), mRNA có trình tự giống mạch mã hoá, chỉ khác là U thay cho T. Chỉ một mạch của gene được dùng làm khuôn, khác với tái bản DNA dùng cả hai mạch.',
        },
        {
          type: 'p',
          text: 'Kết quả: tạo ra phân tử RNA (mRNA, tRNA, rRNA) có trình tự do mạch khuôn của gene quy định. Các RNA rời nhân ra tế bào chất để thực hiện chức năng. Ý nghĩa: phiên mã truyền thông tin di truyền từ gene sang mRNA, chuẩn bị cho tổng hợp protein.',
        },
        {
          type: 'table',
          caption: 'So sánh tái bản DNA và phiên mã',
          head: ['Đặc điểm', 'Tái bản DNA', 'Phiên mã'],
          rows: [
            ['Khuôn', 'Cả hai mạch của DNA', 'Một mạch của gene'],
            ['Nguyên liệu', 'Nucleotide tự do (A, T, G, C)', 'Ribonucleotide tự do (A, U, G, C)'],
            ['Nguyên tắc bổ sung', 'A – T, G – C', 'A – U, T – A, G – C, C – G'],
            ['Kết quả', 'Hai phân tử DNA con giống DNA mẹ', 'Một phân tử RNA mạch đơn'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Tái bản và phiên mã từng nucleotide',
    instruction:
      'Ở "Tái bản DNA", bấm "Tháo xoắn" rồi chọn hoặc kéo các nucleotide tự do vào vị trí đang sáng trên hai mạch mới; quan sát hai phân tử DNA con và đổi số lần tái bản $k$. Ở "Phiên mã", dựng mRNA từ mạch khuôn rồi so mRNA với mạch mã hoá.',
  },
  examples: [
    {
      problem:
        "Một đoạn DNA có mạch 1: $5'$-ATGCTA-$3'$ và mạch 2: $3'$-TACGAT-$5'$. Viết hai phân tử DNA con được tạo ra sau một lần tái bản.",
      steps: [
        "Mạch 1 làm khuôn: mạch mới bổ sung với nó là $3'$-TACGAT-$5'$.",
        "Mạch 2 làm khuôn: mạch mới bổ sung với nó là $5'$-ATGCTA-$3'$.",
        'Mỗi mạch mới xoắn lại với mạch khuôn của nó (nguyên tắc bán bảo toàn).',
      ],
      answer:
        "DNA con thứ nhất: mạch cũ $5'$-ATGCTA-$3'$ + mạch mới $3'$-TACGAT-$5'$; DNA con thứ hai: mạch mới $5'$-ATGCTA-$3'$ + mạch cũ $3'$-TACGAT-$5'$. Hai DNA con giống hệt nhau và giống DNA mẹ.",
    },
    {
      problem:
        'Một phân tử DNA có $2400$ nucleotide tái bản liên tiếp $3$ lần. Tính số phân tử DNA con, số phân tử DNA con có mạch hoàn toàn mới và số nucleotide tự do môi trường cung cấp.',
      steps: [
        'Số phân tử DNA con: $2^3 = 8$.',
        'Chỉ $2$ phân tử còn mang một mạch cũ, nên có $8 - 2 = 6$ phân tử gồm hai mạch hoàn toàn mới.',
        'Nucleotide môi trường cung cấp: $N \\cdot (2^3 - 1) = 2400 \\cdot 7 = 16\\,800$.',
      ],
      answer: '$8$ phân tử DNA con, $6$ phân tử hoàn toàn mới, $16\\,800$ nucleotide tự do.',
    },
    {
      problem:
        "Mạch khuôn của một gene có trình tự $3'$-TACCGATTC-$5'$. Viết trình tự mRNA được phiên mã và trình tự mạch mã hoá của gene.",
      steps: [
        'Áp dụng nguyên tắc bổ sung trong phiên mã: T → A, A → U, C → G, G → C.',
        "T A C C G A T T C → A U G G C U A A G, nên mRNA: $5'$-AUGGCUAAG-$3'$.",
        "Mạch mã hoá bổ sung với mạch khuôn (A – T, G – C): $5'$-ATGGCTAAG-$3'$, giống mRNA nhưng có T thay cho U.",
      ],
      answer: "mRNA: $5'$-AUGGCUAAG-$3'$; mạch mã hoá: $5'$-ATGGCTAAG-$3'$.",
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Ở sinh vật nhân thực, quá trình tái bản DNA diễn ra',
      options: [
        'trong tế bào chất, sau khi tế bào phân chia',
        'trong nhân tế bào, trước khi tế bào bước vào phân chia',
        'trên ribosome',
        'trong nhân tế bào, chỉ ở tế bào sinh dục',
      ],
      answer: 1,
      hints: ['Mỗi tế bào con phải nhận đủ DNA, nên DNA phải nhân đôi trước khi tế bào chia.'],
      solution:
        'Tái bản DNA diễn ra trong nhân tế bào (vùng nhân ở sinh vật nhân sơ), trước khi tế bào bước vào phân chia, ở mọi tế bào phân chia chứ không chỉ tế bào sinh dục.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên tắc bán bảo toàn trong tái bản DNA có nghĩa là',
      options: [
        'mỗi phân tử DNA con có một mạch cũ của DNA mẹ và một mạch mới',
        'một DNA con gồm hai mạch cũ, DNA con kia gồm hai mạch mới',
        'chỉ một nửa phân tử DNA mẹ được tái bản',
        'A liên kết với T, G liên kết với C',
      ],
      answer: 0,
      hints: ['"Bán" là một nửa: mỗi DNA con giữ lại một nửa của DNA mẹ.'],
      solution:
        'Mỗi DNA con giữ một mạch của DNA mẹ và có một mạch mới tổng hợp. Câu "A liên kết với T, G liên kết với C" là nguyên tắc bổ sung.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện của quá trình tái bản DNA theo đúng thứ tự.',
      items: [
        'Các nucleotide tự do liên kết với nucleotide trên mạch khuôn theo nguyên tắc bổ sung',
        'Phân tử DNA tháo xoắn, hai mạch đơn tách nhau',
        'Hai phân tử DNA con được tạo thành',
        'Mỗi mạch mới xoắn lại với mạch khuôn của nó',
      ],
      answer: [1, 0, 3, 2],
      hints: ['Phải tách hai mạch trước thì mới có mạch khuôn.'],
      solution:
        'Tháo xoắn, tách mạch → nucleotide tự do liên kết bổ sung → mạch mới xoắn lại với mạch khuôn → hai DNA con.',
    },
    {
      type: 'number',
      prompt:
        'Một phân tử DNA tái bản liên tiếp $4$ lần. Có bao nhiêu phân tử DNA con được tạo ra?',
      answer: 16,
      hints: ['Mỗi lần tái bản, số phân tử DNA tăng gấp đôi.'],
      solution: 'Số phân tử DNA con: $2^4 = 16$.',
    },
    {
      type: 'number',
      prompt:
        'Trong các phân tử DNA con tạo ra sau $4$ lần tái bản của một phân tử DNA, có bao nhiêu phân tử còn chứa mạch cũ của DNA mẹ?',
      answer: 2,
      hints: ['DNA mẹ chỉ có hai mạch, và mạch cũ không bao giờ bị phá bỏ.'],
      solution:
        'DNA mẹ có $2$ mạch; theo nguyên tắc bán bảo toàn, mỗi mạch cũ nằm trong một DNA con, nên luôn chỉ có $2$ phân tử chứa mạch cũ, dù tái bản bao nhiêu lần.',
    },
    {
      type: 'number',
      prompt:
        'Một gene có $3000$ nucleotide tái bản liên tiếp $2$ lần. Môi trường nội bào cung cấp bao nhiêu nucleotide tự do?',
      answer: 9000,
      unit: 'nucleotide',
      hints: ['Dùng $N_{mt} = N \\cdot (2^k - 1)$.'],
      solution: '$N_{mt} = 3000 \\cdot (2^2 - 1) = 3000 \\cdot 3 = 9000$ nucleotide.',
    },
    {
      type: 'text',
      prompt:
        "Mạch khuôn của một gene có trình tự $3'$-TACGGA-$5'$. Viết trình tự mRNA (chiều $5' \\to 3'$, chỉ ghi các chữ cái).",
      accept: ['AUGCCU', "5'-AUGCCU-3'", "5' AUGCCU 3'", 'AUG CCU', 'AUG-CCU'],
      hints: ['Trong phiên mã: A – U, T – A, G – C, C – G.', 'RNA không có T.'],
      solution: "T → A, A → U, C → G, G → C, G → C, A → U: mRNA là $5'$-AUGCCU-$3'$.",
    },
    {
      type: 'choice',
      prompt:
        'Enzyme trượt dọc mạch khuôn và lắp ráp các ribonucleotide trong quá trình phiên mã là',
      options: ['DNA polymerase', 'RNA polymerase', 'amylase', 'ribosome'],
      answer: 1,
      hints: ['Sản phẩm của phiên mã là RNA.'],
      solution:
        'RNA polymerase bám vào vùng điều hoà của gene và tổng hợp RNA. DNA polymerase tham gia tái bản DNA; ribosome là nơi dịch mã.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các điểm khác nhau đúng giữa phiên mã và tái bản DNA.',
      options: [
        'Phiên mã chỉ dùng một mạch của gene làm khuôn',
        'Phiên mã dùng ribonucleotide có U thay cho T',
        'Phiên mã tạo ra hai phân tử DNA con',
        'Trong phiên mã, A của mạch khuôn liên kết với U',
        'Phiên mã diễn ra trên ribosome',
      ],
      answers: [0, 1, 3],
      hints: ['Hãy so khuôn, nguyên liệu, nguyên tắc bổ sung và kết quả của hai quá trình.'],
      solution:
        'Phiên mã dùng một mạch khuôn, ribonucleotide A, U, G, C, A của mạch khuôn liên kết với U; kết quả là một phân tử RNA. Phiên mã diễn ra trong nhân, không phải trên ribosome; tạo hai DNA con là kết quả của tái bản.',
    },
  ],
  takeaways: [
    'Tái bản DNA diễn ra trong nhân, trước khi tế bào phân chia: tháo xoắn, tách mạch → nucleotide tự do liên kết bổ sung với hai mạch khuôn → đóng xoắn.',
    'Tái bản theo nguyên tắc bổ sung (A – T, G – C) và bán bảo toàn (mỗi DNA con có một mạch cũ, một mạch mới); tạo hai DNA con giống hệt DNA mẹ.',
    'Sau $k$ lần tái bản: $2^k$ DNA con, chỉ $2$ phân tử còn mạch cũ; môi trường cung cấp $N \\cdot (2^k - 1)$ nucleotide.',
    "Phiên mã: RNA polymerase dùng một mạch của gene làm khuôn ($3' \\to 5'$), lắp ráp ribonucleotide theo nguyên tắc A – U, T – A, G – C, C – G, tạo RNA theo chiều $5' \\to 3'$.",
    'mRNA có trình tự giống mạch mã hoá của gene, chỉ khác U thay cho T; RNA ra tế bào chất thực hiện chức năng.',
  ],
};

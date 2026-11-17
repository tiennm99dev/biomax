/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sinh học phân tử nghiên cứu sự sống ở cấp độ phân tử, chủ yếu là cấu trúc và chức năng của DNA, RNA, protein trong truyền đạt thông tin di truyền. Bài điểm lại các thành tựu lí thuyết, ứng dụng và nguyên tắc an toàn, đạo đức sinh học.',
  intro:
    'Năm 1953, mô hình chuỗi xoắn kép DNA được công bố trên một trang báo khoa học. Chưa đầy 70 năm sau, các nhà khoa học đã đọc được toàn bộ hệ gene người, sửa được từng gene bằng CRISPR và làm ra vaccine mRNA chỉ trong vài tháng. Điều gì đã giúp sinh học phân tử tiến nhanh đến vậy?',
  objectives: [
    'Nêu được khái niệm và đối tượng nghiên cứu của sinh học phân tử.',
    'Trình bày được một số thành tựu nổi bật về lí thuyết của sinh học phân tử.',
    'Trình bày được một số thành tựu ứng dụng của sinh học phân tử trong y học, nông nghiệp, công nghiệp, môi trường và pháp y.',
    'Nêu được các nguyên tắc an toàn sinh học và đạo đức sinh học khi ứng dụng sinh học phân tử.',
  ],
  sections: [
    {
      heading: 'Sinh học phân tử là gì?',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh học phân tử',
          text: 'Sinh học phân tử là ngành khoa học nghiên cứu các hiện tượng sống ở cấp độ phân tử, chủ yếu là cấu trúc, chức năng và tương tác của các đại phân tử sinh học (DNA, RNA, protein) trong quá trình lưu giữ, truyền đạt và biểu hiện thông tin di truyền.',
        },
        {
          type: 'p',
          text: 'Đối tượng nghiên cứu của sinh học phân tử là các phân tử mang và thể hiện thông tin di truyền cùng các cơ chế liên quan:',
        },
        {
          type: 'list',
          items: [
            'Cấu trúc và chức năng của gene, hệ gene; các nucleic acid (DNA, RNA) và protein.',
            'Các cơ chế di truyền ở cấp độ phân tử: tái bản DNA, phiên mã, dịch mã.',
            'Điều hoà biểu hiện gene, đột biến gene và sửa chữa DNA.',
            'Tương tác giữa các phân tử trong tế bào, ví dụ giữa enzyme và DNA.',
          ],
        },
        {
          type: 'p',
          text: 'Sinh học phân tử là nền tảng của công nghệ gene (công nghệ DNA tái tổ hợp) và nhiều ngành công nghệ sinh học hiện đại. Các thành tựu của nó gồm hai nhóm: thành tựu về lí thuyết, giúp hiểu cơ chế của sự sống, và thành tựu về ứng dụng, đưa hiểu biết đó vào sản xuất và đời sống.',
        },
      ],
    },
    {
      heading: 'Thành tựu về lí thuyết',
      blocks: [
        {
          type: 'table',
          caption: 'Một số thành tựu lí thuyết nổi bật',
          head: ['Năm', 'Thành tựu', 'Ý nghĩa'],
          rows: [
            [
              '$1953$',
              'Watson và Crick xây dựng mô hình chuỗi xoắn kép DNA',
              'Giải thích cách DNA lưu giữ và sao chép thông tin di truyền',
            ],
            [
              '$1958$',
              'Meselson và Stahl chứng minh DNA tái bản theo nguyên tắc bán bảo toàn',
              'Mỗi DNA con có một mạch cũ và một mạch mới',
            ],
            [
              '$1961$',
              'Jacob và Monod đưa ra mô hình operon Lac',
              'Giải thích cách tế bào điều hoà biểu hiện gene',
            ],
            [
              '$1961$–$1966$',
              'Giải mã toàn bộ mã di truyền',
              'Biết amino acid ứng với từng bộ ba; mã di truyền gần như chung cho mọi loài',
            ],
            [
              '$1970$',
              'Phát hiện enzyme cắt giới hạn và enzyme phiên mã ngược',
              'Có công cụ cắt DNA và tổng hợp DNA từ RNA',
            ],
            [
              '$1990$–$2003$',
              'Dự án hệ gene người giải trình tự khoảng $3$ tỉ cặp nucleotide',
              'Nền tảng cho xét nghiệm di truyền, y học cá thể hoá',
            ],
            [
              '$1998$',
              'Fire và Mello phát hiện cơ chế can thiệp RNA (RNAi)',
              'Có thể "tắt" một gene đặc hiệu; giải Nobel năm $2006$',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Những hiểu biết này nối tiếp nhau: biết cấu trúc DNA mới hiểu được tái bản, phiên mã, dịch mã; có enzyme cắt giới hạn và kĩ thuật giải trình tự mới đọc được hệ gene. Các công nghệ giải trình tự gene và hệ gene giúp xét nghiệm di truyền, xác định đột biến gene ở người và phát hiện DNA của tế bào ung thư dễ dàng hơn.',
        },
        { type: 'widget', name: 'phan-loai' },
      ],
    },
    {
      heading: 'Thành tựu về ứng dụng',
      blocks: [
        {
          type: 'table',
          caption: 'Thành tựu ứng dụng trong các lĩnh vực',
          head: ['Lĩnh vực', 'Ví dụ'],
          rows: [
            [
              'Y học, dược phẩm',
              'Sản xuất insulin, hormone sinh trưởng người (HGH) nhờ vi khuẩn chuyển gene; chẩn đoán bệnh bằng PCR; liệu pháp gene; vaccine mRNA phòng COVID-19',
            ],
            [
              'Nông nghiệp',
              'Cây trồng biến đổi gene kháng sâu bệnh, kháng thuốc diệt cỏ, giàu dinh dưỡng; vật nuôi chuyển gene: cừu cho lông tốt hơn, lợn nhiều nạc hơn',
            ],
            [
              'Công nghiệp thực phẩm',
              'Enzyme tái tổ hợp dùng trong chế biến sữa, bánh mì, nước quả',
            ],
            [
              'Bảo vệ môi trường',
              'Chủng vi khuẩn Pseudomonas phân giải dầu mỏ do A. Chakrabarty tạo ra; vi sinh vật phân giải thuốc trừ sâu chứa chlorine, PCB',
            ],
            [
              'Pháp y, an ninh',
              'Giám định DNA để xác định danh tính, quan hệ huyết thống, truy tìm tội phạm',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Mốc khởi đầu của công nghệ gene là năm $1972$, khi P. Berg tạo phân tử DNA tái tổ hợp đầu tiên. Năm $1973$, S. Cohen và H. Boyer dùng plasmid đưa DNA tái tổ hợp vào vi khuẩn E. coli; năm sau, họ chuyển được cả gene của ếch vào vi khuẩn này. Năm $2012$, công cụ CRISPR-Cas9 ra đời, cho phép chỉnh sửa gene chính xác đến từng nucleotide.',
        },
        {
          type: 'p',
          text: 'Ở Việt Nam, công nghệ sinh học nằm trong chiến lược phát triển khoa học, công nghệ: các phòng xét nghiệm sinh học phân tử dùng PCR để chẩn đoán bệnh, chỉ thị phân tử (mã vạch DNA) giúp định danh loài, các viện nghiên cứu chuyển gene vào cây trồng và sản xuất vaccine, chế phẩm sinh học.',
        },
      ],
    },
    {
      heading: 'An toàn sinh học và đạo đức sinh học',
      blocks: [
        {
          type: 'list',
          items: [
            'Nhà nước ban hành quy chế quản lí an toàn sinh học; sinh vật biến đổi gene phải được đánh giá rủi ro trước khi được phép sử dụng.',
            'Phòng thí nghiệm phải tuân thủ quy trình nghiêm ngặt để bảo vệ người làm việc và ngăn sinh vật biến đổi gene phát tán ra môi trường.',
            'Các chủng vi sinh vật dùng trong công nghệ DNA thường được làm "yếu" về mặt di truyền để không sống được ngoài phòng thí nghiệm.',
            'Một số thí nghiệm có nguy cơ cao bị cấm thực hiện.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đạo đức sinh học',
          text: 'Ứng dụng sinh học phân tử phải thận trọng và nhân văn: bảo mật thông tin di truyền của mỗi người, không phân biệt đối xử vì kiểu gene, không chỉnh sửa gene ở phôi người để sinh con, chỉ thử nghiệm trên người khi được đồng ý và được cơ quan có thẩm quyền cho phép.',
        },
      ],
    },
    {
      heading: 'Nhiệm vụ: Thành tựu sinh học phân tử đoạt giải Nobel',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tìm hiểu một thành tựu sinh học phân tử được trao giải Nobel trong khoảng $20$ năm gần đây và giới thiệu với cả lớp. Làm theo nhóm $3$ đến $5$ bạn trong khoảng $1$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn một thành tựu, ví dụ: cơ chế can thiệp RNA (Nobel $2006$), công cụ CRISPR-Cas9 (Nobel Hoá học $2020$), sửa đổi nucleoside cho vaccine mRNA (Nobel $2023$).',
            'Thu thập thông tin từ nguồn tin cậy (trang của giải Nobel, sách, báo khoa học); ghi lại tên nguồn.',
            'Trả lời: ai phát hiện, năm nào; thành tựu thuộc lí thuyết hay ứng dụng; nó dựa trên những hiểu biết nào có trước; nó đã hoặc sẽ được ứng dụng ra sao.',
            'Liên hệ: một ví dụ ứng dụng sinh học phân tử ở Việt Nam.',
            'Trình bày trong $5$ phút bằng áp phích hoặc bài trình chiếu, kèm một dòng thời gian ngắn.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Báo cáo gồm: tên thành tựu và tác giả, nội dung khoa học viết bằng lời của nhóm, dòng thời gian các mốc liên quan, ứng dụng, một câu hỏi về an toàn hoặc đạo đức sinh học mà nhóm muốn cả lớp thảo luận, và danh sách nguồn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Dòng thời gian sinh học phân tử',
    instruction:
      'Ở chế độ "Dòng thời gian", chọn từng mốc để đọc nội dung và xem nó dựa trên những thành tựu nào có trước (viền xanh lá). Ở chế độ "Thử thách", xếp các thẻ theo thứ tự thời gian bằng cách lần lượt chọn mốc sớm nhất còn lại.',
  },
  examples: [
    {
      problem:
        'Vì sao kĩ thuật PCR ($1983$) và công cụ CRISPR-Cas9 ($2012$) không thể ra đời trước mô hình chuỗi xoắn kép DNA ($1953$)?',
      steps: [
        'PCR nhân bản DNA bằng cách tách hai mạch rồi tổng hợp mạch mới bổ sung với từng mạch khuôn, nhờ cặp mồi bắt cặp bổ sung.',
        'CRISPR-Cas9 dùng một RNA dẫn đường bắt cặp bổ sung với trình tự đích trên DNA rồi cắt đúng chỗ.',
        'Cả hai đều dựa trên hiểu biết DNA gồm hai mạch liên kết theo nguyên tắc bổ sung, chính là nội dung của mô hình chuỗi xoắn kép.',
      ],
      answer:
        'Vì cả hai kĩ thuật đều vận dụng cấu trúc hai mạch và nguyên tắc bổ sung của DNA, điều chỉ được biết từ mô hình năm $1953$.',
    },
    {
      problem:
        'Xếp các thành tựu sau vào nhóm lí thuyết hoặc ứng dụng: (1) giải mã di truyền; (2) sản xuất insulin nhờ E. coli chuyển gene; (3) mô hình operon Lac; (4) giám định DNA trong pháp y.',
      steps: [
        'Thành tựu lí thuyết làm rõ cơ chế của sự sống: mã di truyền cho biết bộ ba nào ứng với amino acid nào; operon Lac cho biết cách gene được bật, tắt.',
        'Thành tựu ứng dụng tạo ra sản phẩm, dịch vụ: insulin dùng làm thuốc; giám định DNA phục vụ pháp y.',
      ],
      answer: 'Lí thuyết: (1), (3). Ứng dụng: (2), (4).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đối tượng nghiên cứu chủ yếu của sinh học phân tử là',
      options: [
        'cấu trúc, chức năng của DNA, RNA, protein trong truyền đạt thông tin di truyền',
        'hình thái và giải phẫu của các cơ quan trong cơ thể',
        'quan hệ giữa các loài trong quần xã',
        'quá trình hình thành loài mới qua các thế hệ',
      ],
      answer: 0,
      hints: ['Chú ý chữ "phân tử" trong tên ngành.'],
      solution:
        'Sinh học phân tử nghiên cứu sự sống ở cấp độ phân tử, chủ yếu là cấu trúc và chức năng của DNA, RNA, protein trong lưu giữ, truyền đạt và biểu hiện thông tin di truyền.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các thành tựu sau theo thứ tự thời gian, từ sớm đến muộn.',
      items: [
        'Mô hình chuỗi xoắn kép DNA',
        'Phát hiện enzyme cắt giới hạn',
        'Tạo phân tử DNA tái tổ hợp đầu tiên',
        'Phát minh kĩ thuật PCR',
        'Hoàn thành giải trình tự hệ gene người',
        'Công cụ chỉnh sửa gene CRISPR-Cas9',
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hints: [
        'Phải có enzyme cắt giới hạn thì mới tạo được DNA tái tổ hợp.',
        'Các mốc lần lượt là $1953$, $1970$, $1972$, $1983$, $2003$, $2012$; hãy ghép năm với thành tựu.',
      ],
      solution:
        'Xoắn kép DNA ($1953$) → enzyme cắt giới hạn ($1970$) → DNA tái tổ hợp ($1972$) → PCR ($1983$) → hệ gene người ($2003$) → CRISPR-Cas9 ($2012$).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thành tựu về lí thuyết của sinh học phân tử.',
      options: [
        'Chứng minh DNA tái bản theo nguyên tắc bán bảo toàn',
        'Mô hình operon Lac điều hoà biểu hiện gene',
        'Sản xuất hormone sinh trưởng người nhờ vi khuẩn chuyển gene',
        'Giải mã toàn bộ mã di truyền',
        'Tạo cây bông kháng sâu',
      ],
      answers: [0, 1, 3],
      hints: ['Thành tựu lí thuyết giúp hiểu một cơ chế, chưa tạo ra sản phẩm.'],
      solution:
        'Tái bản bán bảo toàn, operon Lac, mã di truyền là các hiểu biết về cơ chế (lí thuyết). Sản xuất hormone sinh trưởng và tạo bông kháng sâu là ứng dụng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành tựu ứng dụng với lĩnh vực của nó.',
      left: [
        'Vi khuẩn Pseudomonas phân giải dầu mỏ',
        'Giám định DNA xác định quan hệ huyết thống',
        'Lợn chuyển gene có tỉ lệ nạc cao',
        'Vaccine mRNA phòng COVID-19',
      ],
      right: ['Bảo vệ môi trường', 'Pháp y', 'Nông nghiệp', 'Y học', 'Khảo cổ học'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Mỗi thành tựu thuộc đúng một lĩnh vực; có một lĩnh vực thừa.'],
      solution:
        'Phân giải dầu mỏ: môi trường. Xác định huyết thống: pháp y. Lợn nhiều nạc: nông nghiệp. Vaccine mRNA: y học.',
    },
    {
      type: 'choice',
      prompt:
        'Phát hiện nào là điều kiện trực tiếp để P. Berg tạo được phân tử DNA tái tổ hợp đầu tiên năm $1972$?',
      options: [
        'Enzyme cắt giới hạn cắt DNA tại trình tự xác định',
        'Kĩ thuật PCR nhân bản DNA',
        'Bản đồ hệ gene người hoàn chỉnh',
        'Công cụ CRISPR-Cas9',
      ],
      answer: 0,
      hints: [
        'Thành tựu đó phải có trước năm $1972$.',
        'Muốn ghép hai đoạn DNA, trước hết phải cắt được chúng.',
      ],
      solution:
        'Enzyme cắt giới hạn (phát hiện năm $1970$) cho phép cắt DNA tại vị trí xác định để ghép với DNA khác. PCR ($1983$), hệ gene người ($2003$), CRISPR-Cas9 ($2012$) đều có sau.',
    },
    {
      type: 'number',
      prompt:
        'Mô hình chuỗi xoắn kép DNA được công bố năm $1953$, Dự án hệ gene người hoàn thành năm $2003$. Hai mốc cách nhau bao nhiêu năm?',
      answer: 50,
      unit: 'năm',
      hints: ['Lấy năm sau trừ năm trước.'],
      solution: '$2003 - 1953 = 50$ năm.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc làm đúng nguyên tắc an toàn sinh học và đạo đức sinh học.',
      options: [
        'Đánh giá rủi ro của sinh vật biến đổi gene trước khi cho phép sử dụng',
        'Dùng chủng vi khuẩn đã làm yếu về di truyền, không sống được ngoài phòng thí nghiệm',
        'Bảo mật kết quả xét nghiệm di truyền của người bệnh',
        'Công khai kiểu gene của người lao động để nhà tuyển dụng chọn người',
        'Thả sinh vật biến đổi gene ra tự nhiên để theo dõi khả năng sống',
      ],
      answers: [0, 1, 2],
      hints: [
        'An toàn sinh học: ngăn sinh vật biến đổi gene phát tán ra môi trường.',
        'Đạo đức sinh học: tôn trọng quyền riêng tư, không phân biệt đối xử.',
      ],
      solution:
        'Đánh giá rủi ro, dùng chủng đã làm yếu, bảo mật thông tin di truyền là đúng. Công khai kiểu gene để tuyển dụng là phân biệt đối xử; thả sinh vật biến đổi gene ra tự nhiên vi phạm an toàn sinh học.',
    },
    {
      type: 'text',
      prompt:
        'Kĩ thuật do K. Mullis phát minh năm $1983$, dùng để nhân bản một đoạn DNA thành hàng triệu bản sao trong ống nghiệm, có tên viết tắt là gì?',
      accept: ['PCR', 'phản ứng chuỗi polymerase', 'PCR (phản ứng chuỗi polymerase)'],
      hints: ['Viết tắt của "Polymerase Chain Reaction".'],
      solution: 'Đó là PCR (phản ứng chuỗi polymerase).',
    },
  ],
  takeaways: [
    'Sinh học phân tử nghiên cứu sự sống ở cấp độ phân tử: cấu trúc, chức năng của DNA, RNA, protein trong lưu giữ, truyền đạt và biểu hiện thông tin di truyền.',
    'Thành tựu lí thuyết: xoắn kép DNA, tái bản bán bảo toàn, operon, mã di truyền, enzyme cắt giới hạn, RNAi, giải trình tự hệ gene người.',
    'Thành tựu ứng dụng: DNA tái tổ hợp, PCR, sinh vật biến đổi gene, thuốc và vaccine tái tổ hợp, giám định DNA, CRISPR-Cas9.',
    'Mọi ứng dụng phải tuân thủ an toàn sinh học và đạo đức sinh học.',
  ],
};

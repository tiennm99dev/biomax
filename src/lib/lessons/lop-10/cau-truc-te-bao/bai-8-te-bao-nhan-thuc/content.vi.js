/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tế bào nhân thực có nhân hoàn chỉnh, hệ thống nội màng, nhiều bào quan và khung xương tế bào. Bài học trình bày cấu trúc, chức năng của nhân và các bào quan, đường đi của protein tiết, và so sánh tế bào động vật với tế bào thực vật.',
  intro:
    'Màng tế bào niêm mạc ruột non có diện tích rất lớn nhờ nhiều nếp gấp. Ở những người có màng tế bào này bất thường, việc hấp thụ thức ăn trở nên khó khăn, nên ăn nhiều vẫn khó tăng cân. Mỗi thành phần trong tế bào đều có cấu trúc phù hợp với chức năng của nó. Tế bào nhân thực được tổ chức như thế nào để duy trì sự sống?',
  objectives: [
    'Nêu được đặc điểm chung của tế bào nhân thực.',
    'Trình bày được cấu trúc và chức năng của nhân và các bào quan.',
    'Mô tả được hệ thống nội màng và đường đi của protein được tiết ra khỏi tế bào.',
    'So sánh được tế bào động vật với tế bào thực vật.',
  ],
  sections: [
    {
      heading: 'Đặc điểm chung của tế bào nhân thực',
      blocks: [
        {
          type: 'p',
          text: 'Tế bào nhân thực thường có kích thước khoảng $10 - 100$ µm, lớn hơn nhiều so với tế bào nhân sơ. Tế bào có nhân hoàn chỉnh với màng nhân bao bọc, có hệ thống nội màng chia tế bào chất thành các xoang riêng, có nhiều bào quan và có khung xương tế bào.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao tế bào cần chia khoang?',
          text: 'Tế bào lớn có tỉ lệ $S/V$ nhỏ. Các bào quan có màng tạo ra những khoang riêng, trong mỗi khoang có enzyme và điều kiện phù hợp, nhờ vậy nhiều quá trình khác nhau có thể diễn ra cùng lúc mà không cản trở nhau.',
        },
      ],
    },
    {
      heading: 'Nhân và ribosome',
      blocks: [
        {
          type: 'p',
          text: 'Nhân thường có hình cầu, đường kính khoảng $5$ µm. Màng nhân là màng kép, trên có nhiều lỗ nhân để các chất đi vào và đi ra. Bên trong nhân có chất nhiễm sắc gồm DNA và protein, và một hoặc vài nhân con (hạch nhân).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chức năng của nhân',
          text: 'Nhân lưu giữ thông tin di truyền và là trung tâm điều khiển mọi hoạt động sống của tế bào, thông qua việc điều khiển tổng hợp protein: DNA được phiên mã thành RNA, RNA đi ra tế bào chất để làm khuôn tổng hợp protein.',
        },
        {
          type: 'p',
          text: 'Ribosome là bào quan không có màng, gồm rRNA và protein, có một tiểu phần lớn và một tiểu phần nhỏ. Ribosome nằm tự do trong tế bào chất hoặc bám trên lưới nội chất, là nơi tổng hợp protein. Tế bào tổng hợp protein càng mạnh thì càng có nhiều ribosome.',
        },
      ],
    },
    {
      heading: 'Hệ thống nội màng',
      blocks: [
        {
          type: 'p',
          text: 'Hệ thống nội màng gồm màng nhân, lưới nội chất, bộ máy Golgi, lysosome, không bào và các túi vận chuyển. Các thành phần này liên hệ với nhau trực tiếp qua màng hoặc gián tiếp qua các túi.',
        },
        {
          type: 'table',
          caption: 'Các thành phần của hệ thống nội màng',
          head: ['Bào quan', 'Cấu trúc', 'Chức năng'],
          rows: [
            [
              'Lưới nội chất hạt',
              'Túi dẹp thông nhau, nối với màng ngoài của nhân, có ribosome bám',
              'Tổng hợp protein, đưa protein vào túi vận chuyển',
            ],
            [
              'Lưới nội chất trơn',
              'Hệ thống ống, ít hoặc không có ribosome',
              'Tổng hợp lipid, chuyển hoá đường, khử độc, dự trữ $\\mathrm{Ca^{2+}}$',
            ],
            [
              'Bộ máy Golgi',
              'Các túi màng dẹp xếp song song, tách rời nhau',
              'Chế biến, lắp ráp, đóng gói và phân phối protein, lipid',
            ],
            [
              'Lysosome',
              'Túi màng đơn chứa nhiều enzyme thuỷ phân',
              'Phân giải chất, bào quan già hỏng để tái sử dụng',
            ],
            [
              'Không bào',
              'Túi màng đơn chứa dịch',
              'Dự trữ, điều hoà áp suất thẩm thấu, tiêu hoá, tuỳ loại tế bào',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Protein được tiết ra ngoài tế bào là ví dụ rõ nhất về sự phối hợp của hệ thống nội màng. Hãy dẫn protein đi đúng đường trong trò chơi dưới đây.',
        },
        { type: 'widget', name: 'duong-di-protein' },
      ],
    },
    {
      heading: 'Peroxisome, ti thể và lục lạp',
      blocks: [
        {
          type: 'p',
          text: 'Peroxisome là túi màng đơn nhỏ, chứa enzyme phân giải $\\mathrm{H_2O_2}$ thành nước và oxygen, phân giải acid béo và khử độc. Tế bào gan, thận có nhiều peroxisome.',
        },
        {
          type: 'table',
          caption: 'So sánh ti thể và lục lạp',
          head: ['Đặc điểm', 'Ti thể', 'Lục lạp'],
          rows: [
            [
              'Màng',
              'Màng kép; màng trong gấp nếp chứa enzyme tổng hợp ATP',
              'Màng kép; cả hai màng trơn nhẵn',
            ],
            [
              'Bên trong',
              'Chất nền chứa enzyme',
              'Thylakoid chứa diệp lục, xếp chồng thành granum; chất nền (stroma)',
            ],
            ['Chức năng', 'Hô hấp tế bào, tạo ATP', 'Quang hợp, chuyển quang năng thành hoá năng'],
            ['Có ở', 'Hầu hết tế bào nhân thực', 'Thực vật và một số nguyên sinh vật như tảo'],
            ['DNA và ribosome', 'Có DNA và ribosome 70S riêng', 'Có DNA và ribosome 70S riêng'],
          ],
        },
        {
          type: 'p',
          text: 'Vì có DNA và ribosome riêng, ti thể và lục lạp có thể tự nhân lên trong tế bào. Tế bào càng cần nhiều năng lượng thì càng có nhiều ti thể, ví dụ tế bào cơ tim.',
        },
      ],
    },
    {
      heading: 'Khung xương tế bào, màng sinh chất và các cấu trúc bên ngoài',
      blocks: [
        {
          type: 'p',
          text: 'Khung xương tế bào là mạng lưới gồm vi ống, sợi trung gian và vi sợi, có vai trò nâng đỡ, giữ hình dạng tế bào và neo giữ các bào quan. Trung thể ở tế bào động vật gồm hai trung tử xếp vuông góc, tham gia hình thành thoi phân bào.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Màng sinh chất: cấu trúc khảm động',
          text: 'Màng gồm lớp kép phospholipid xen các phân tử protein. Các phân tử này có thể di chuyển, nên màng linh hoạt. Ở tế bào động vật, cholesterol xen trong lớp kép giúp điều chỉnh độ linh hoạt của màng. Màng ngăn cách tế bào với môi trường, kiểm soát có chọn lọc các chất ra vào, tiếp nhận và truyền tín hiệu.',
        },
        {
          type: 'list',
          items: [
            'Thành tế bào nằm ngoài màng sinh chất, có ở thực vật (chủ yếu là cellulose) và nấm (chủ yếu là chitin); có vai trò bảo vệ và định hình tế bào.',
            'Chất nền ngoại bào chỉ có ở tế bào động vật, gồm chủ yếu là sợi collagen và proteoglycan, giúp các tế bào trong mô liên kết và phối hợp hoạt động.',
          ],
        },
      ],
    },
    {
      heading: 'So sánh tế bào động vật và tế bào thực vật',
      blocks: [
        {
          type: 'table',
          head: ['Đặc điểm', 'Tế bào động vật', 'Tế bào thực vật'],
          rows: [
            ['Thành cellulose', 'Không', 'Có'],
            ['Lục lạp', 'Không', 'Có'],
            ['Trung thể', 'Có', 'Thường không có'],
            ['Lysosome', 'Có', 'Thường không có'],
            ['Không bào', 'Nhỏ hoặc không có', 'Không bào trung tâm lớn'],
            ['Chất dự trữ', 'Glycogen, mỡ', 'Tinh bột, dầu'],
          ],
        },
        {
          type: 'p',
          text: 'Cả hai đều có màng sinh chất, nhân, ribosome, lưới nội chất, bộ máy Golgi, ti thể, peroxisome và khung xương tế bào.',
        },
      ],
    },
  ],
  explore: {
    title: 'Khám phá tế bào ba chiều',
    instruction:
      'Xoay mô hình và chạm vào từng bộ phận để đọc cấu trúc, chức năng. Đổi giữa tế bào động vật và thực vật, bật chế độ làm nổi để thấy điểm khác nhau, rồi thử chế độ "Tìm bào quan" khi đã nắm được.',
  },
  examples: [
    {
      problem:
        'Một tế bào tuyến tuỵ tiết nhiều enzyme tiêu hoá (bản chất là protein). Hãy dự đoán bào quan nào phát triển mạnh ở tế bào này và nêu đường đi của enzyme.',
      steps: [
        'Enzyme là protein tiết nên tế bào cần nhiều ribosome và lưới nội chất hạt để tổng hợp, bộ máy Golgi phát triển để đóng gói.',
        'Trên ribosome bám lưới nội chất hạt, chuỗi polypeptide được tổng hợp rồi đi vào xoang lưới nội chất.',
        'Túi vận chuyển đưa protein đến Golgi; tại đây protein được chế biến, đóng gói vào túi tiết.',
        'Túi tiết di chuyển đến màng sinh chất, hoà với màng và giải phóng enzyme ra ngoài.',
      ],
      answer:
        'Tế bào có nhiều ribosome, lưới nội chất hạt, bộ máy Golgi; đường đi: ribosome → lưới nội chất hạt → túi vận chuyển → Golgi → túi tiết → màng sinh chất → ra ngoài.',
    },
    {
      problem:
        'Trong các tế bào sau: tế bào cơ tim và tế bào biểu bì da của cùng một người, tế bào nào có nhiều ti thể hơn? Vì sao?',
      steps: [
        'Ti thể là nơi hô hấp tế bào tạo ATP.',
        'Tế bào cơ tim co bóp liên tục nên có nhu cầu năng lượng rất cao.',
        'Tế bào biểu bì da có nhu cầu năng lượng thấp hơn nhiều.',
      ],
      answer: 'Tế bào cơ tim có nhiều ti thể hơn, vì số lượng ti thể tỉ lệ với nhu cầu năng lượng.',
    },
    {
      problem:
        'Quan sát dưới kính hiển vi điện tử, một tế bào có thành tế bào, không bào trung tâm lớn nhưng không có lục lạp. Tế bào này có thể là tế bào động vật không? Có thể là tế bào nào?',
      steps: [
        'Tế bào động vật không có thành tế bào và không có không bào trung tâm lớn, nên tế bào này không phải tế bào động vật.',
        'Thành tế bào và không bào lớn phù hợp với tế bào thực vật.',
        'Không có lục lạp cho thấy tế bào này không quang hợp, ví dụ tế bào rễ cây hoặc tế bào vảy hành.',
      ],
      answer:
        'Không phải tế bào động vật; có thể là tế bào thực vật không quang hợp, như tế bào rễ cây.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi bào quan với chức năng chính của nó.',
      left: ['Ribosome', 'Bộ máy Golgi', 'Ti thể', 'Lục lạp', 'Lysosome'],
      right: [
        'Quang hợp',
        'Tổng hợp protein',
        'Phân giải bào quan già, hỏng',
        'Đóng gói và phân phối protein',
        'Hô hấp tế bào, tạo ATP',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 4],
        [3, 0],
        [4, 2],
      ],
      hints: ['Bào quan nào chứa diệp lục? Bào quan nào chứa enzyme thuỷ phân?'],
      solution:
        'Ribosome: tổng hợp protein. Golgi: đóng gói, phân phối. Ti thể: hô hấp tạo ATP. Lục lạp: quang hợp. Lysosome: phân giải bào quan già, hỏng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp đường đi của một protein được tiết ra khỏi tế bào.',
      items: [
        'Bộ máy Golgi',
        'Ribosome trên lưới nội chất hạt',
        'Màng sinh chất',
        'Túi vận chuyển',
        'Túi tiết',
        'Xoang lưới nội chất hạt',
      ],
      answer: [1, 5, 3, 0, 4, 2],
      hints: ['Protein được tổng hợp trước, rồi lần lượt được vận chuyển bằng các túi màng.'],
      solution:
        'Ribosome trên lưới nội chất hạt → xoang lưới nội chất hạt → túi vận chuyển → bộ máy Golgi → túi tiết → màng sinh chất.',
    },
    {
      type: 'choice',
      prompt: 'Bào quan nào có màng kép?',
      options: [
        'Lysosome và peroxisome',
        'Ribosome và trung thể',
        'Golgi và không bào',
        'Ti thể và lục lạp',
      ],
      answer: 3,
      hints: [
        'Hai bào quan này đều có DNA và ribosome riêng, đều liên quan đến chuyển hoá năng lượng.',
      ],
      solution:
        'Ti thể và lục lạp có màng kép. Lysosome, peroxisome, Golgi và không bào có màng đơn; ribosome và trung thể không có màng.',
    },
    {
      type: 'choice',
      prompt:
        'Tế bào gan của người nghiện rượu thường có bào quan nào phát triển mạnh hơn bình thường để khử độc?',
      options: ['Lưới nội chất trơn', 'Lục lạp', 'Lưới nội chất hạt', 'Trung thể'],
      answer: 0,
      hints: ['Tìm bào quan có chức năng khử độc.'],
      solution:
        'Lưới nội chất trơn có chức năng khử độc, nên phát triển mạnh ở tế bào gan khi phải xử lí nhiều rượu, thuốc.',
    },
    {
      type: 'multi',
      prompt: 'Những cấu trúc nào thường có ở tế bào thực vật nhưng không có ở tế bào động vật?',
      options: ['Ti thể', 'Thành cellulose', 'Lưới nội chất', 'Lục lạp', 'Không bào trung tâm lớn'],
      answers: [1, 3, 4],
      hints: ['Ti thể và lưới nội chất có ở cả hai loại tế bào.'],
      solution:
        'Tế bào thực vật có thành cellulose, lục lạp và không bào trung tâm lớn, các cấu trúc này không có ở tế bào động vật. Ti thể và lưới nội chất có ở cả hai.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nói nhân là trung tâm điều khiển mọi hoạt động sống của tế bào?',
      options: [
        'Vì nhân chiếm thể tích lớn nhất trong tế bào',
        'Vì nhân chứa nhiều ribosome trực tiếp tổng hợp protein',
        'Vì nhân chứa DNA, điều khiển việc tổng hợp protein quyết định hoạt động của tế bào',
        'Vì nhân tạo ra phần lớn ATP cho tế bào',
      ],
      answer: 2,
      hints: [
        'Hoạt động của tế bào chủ yếu do protein thực hiện. Thông tin về protein được lưu ở đâu?',
      ],
      solution:
        'DNA trong nhân mang thông tin di truyền quy định protein; protein thực hiện hầu hết chức năng của tế bào. Vì vậy nhân điều khiển mọi hoạt động sống.',
    },
    {
      type: 'text',
      prompt: 'Ba loại sợi của khung xương tế bào là vi ống, sợi trung gian và loại sợi nào?',
      accept: ['vi sợi', 'vi soi', 'sợi actin'],
      hints: ['Tên gồm hai tiếng, tiếng đầu giống "vi ống".'],
      solution: 'Khung xương tế bào gồm vi ống, sợi trung gian và vi sợi.',
    },
    {
      type: 'number',
      prompt:
        'Một tế bào nhân thực hình cầu có đường kính $30$ µm. Tính tỉ lệ $S/V$ của nó theo đơn vị µm⁻¹ và so sánh với vi khuẩn ở Bài 7.',
      answer: 0.2,
      tolerance: 0.001,
      hints: ['Với tế bào hình cầu, $S/V = 6/d$.'],
      solution:
        '$S/V = 6/30 = 0{,}2$ µm⁻¹, nhỏ hơn nhiều so với vi khuẩn đường kính $1$ µm ($S/V = 6$ µm⁻¹). Các khoang và bào quan bù đắp cho nhược điểm này.',
    },
    {
      type: 'choice',
      prompt: 'Nếu lysosome của một tế bào không có enzyme phân giải, điều gì dễ xảy ra nhất?',
      options: [
        'Tế bào không tổng hợp được protein',
        'Chất thải và bào quan hỏng tích tụ trong tế bào',
        'Tế bào không tạo được ATP',
        'Tế bào mất hoàn toàn màng sinh chất',
      ],
      answer: 1,
      hints: ['Lysosome làm công việc gì đối với bào quan già, hỏng?'],
      solution:
        'Lysosome phân giải chất và bào quan già hỏng. Thiếu enzyme, các chất này không được phân giải nên tích tụ trong tế bào, gây rối loạn hoạt động.',
    },
    {
      type: 'multi',
      prompt: 'Những đặc điểm nào đúng với màng sinh chất?',
      options: [
        'Gồm lớp kép phospholipid xen protein',
        'Cấu tạo chủ yếu từ cellulose',
        'Có tính linh hoạt do các phân tử có thể di chuyển',
        'Chỉ có ở tế bào động vật',
        'Kiểm soát có chọn lọc các chất ra vào tế bào',
      ],
      answers: [0, 2, 4],
      hints: ['Mọi tế bào đều có màng sinh chất. Cellulose thuộc về thành tế bào.'],
      solution:
        'Màng sinh chất là lớp kép phospholipid xen protein theo mô hình khảm động, kiểm soát có chọn lọc các chất. Cellulose là của thành tế bào thực vật; màng sinh chất có ở mọi tế bào.',
    },
  ],
  takeaways: [
    'Tế bào nhân thực ($10 - 100$ µm) có nhân hoàn chỉnh, hệ thống nội màng, nhiều bào quan và khung xương tế bào.',
    'Nhân chứa DNA, lưu giữ thông tin di truyền và điều khiển hoạt động sống của tế bào; ribosome là nơi tổng hợp protein.',
    'Protein tiết đi từ ribosome → lưới nội chất hạt → túi vận chuyển → Golgi → túi tiết → màng sinh chất.',
    'Ti thể (hô hấp, tạo ATP) và lục lạp (quang hợp) có màng kép, có DNA và ribosome riêng.',
    'Màng sinh chất có cấu trúc khảm động và kiểm soát có chọn lọc các chất ra vào tế bào.',
    'Tế bào thực vật có thành cellulose, lục lạp, không bào trung tâm lớn; tế bào động vật có trung thể và lysosome.',
  ],
};

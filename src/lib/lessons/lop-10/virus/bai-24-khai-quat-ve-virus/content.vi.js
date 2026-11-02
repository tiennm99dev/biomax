/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Virus là thực thể không có cấu tạo tế bào, chỉ gồm lõi nucleic acid và vỏ protein (một số có thêm vỏ ngoài), chỉ nhân lên được trong tế bào sống qua năm giai đoạn: hấp phụ, xâm nhập, tổng hợp, lắp ráp, giải phóng.',
  intro:
    'Một thực thể nhỏ tới mức kính hiển vi quang học không nhìn thấy, không có tế bào, không tự trao đổi chất, vậy mà có thể làm cả thế giới đảo lộn như đại dịch COVID-19. Virus có cấu tạo như thế nào, và chúng làm cách nào để sinh sôi khi tự mình không làm được gì?',
  objectives: [
    'Nêu được khái niệm và các đặc điểm của virus.',
    'Trình bày được cấu tạo của virus và phân biệt được virus DNA với virus RNA.',
    'Trình bày được năm giai đoạn nhân lên của virus trong tế bào chủ.',
    'Phân biệt được chu kì sinh tan và chu kì tiềm tan.',
  ],
  sections: [
    {
      heading: 'Khái niệm và đặc điểm của virus',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Virus',
          text: 'Virus là thực thể không có cấu tạo tế bào, có kích thước rất nhỏ và chỉ nhân lên được trong tế bào của sinh vật sống.',
        },
        {
          type: 'list',
          items: [
            'Kích thước khoảng $20$ đến $300$ nm, chỉ quan sát được dưới kính hiển vi điện tử.',
            'Ở ngoài tế bào chủ, virus không tự sinh sản, không chuyển hoá vật chất, nên không được coi là một cơ thể sống hoàn chỉnh. Chúng phải kí sinh nội bào bắt buộc.',
            'Hình dạng đa dạng: xoắn, đa diện, hình cầu hoặc phức tạp (như thực khuẩn thể).',
            'Mỗi loại virus chỉ lây nhiễm một phổ vật chủ nhất định, có loại rộng, có loại hẹp. Vật chủ có thể là vi khuẩn, thực vật, động vật và con người.',
            'Nơi virus tồn tại ngoài tự nhiên gọi là ổ chứa. Tìm ra ổ chứa và vật trung gian truyền bệnh giúp khống chế dịch bệnh.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thực khuẩn thể',
          text: 'Thực khuẩn thể, còn gọi là phage, là virus kí sinh ở vi khuẩn.',
        },
      ],
    },
    {
      heading: 'Cấu tạo của virus',
      blocks: [
        {
          type: 'p',
          text: 'Mọi virus đều có hai thành phần chính là lõi nucleic acid và vỏ protein. Một số virus, chủ yếu ở động vật, có thêm vỏ ngoài.',
        },
        {
          type: 'table',
          caption: 'Các thành phần của virus',
          head: ['Thành phần', 'Cấu tạo', 'Vai trò'],
          rows: [
            [
              'Lõi nucleic acid',
              'DNA hoặc RNA, mạch đơn hoặc mạch kép',
              'Mang thông tin di truyền, quy định các đặc điểm của virus',
            ],
            ['Vỏ capsid', 'Protein', 'Bao bọc và bảo vệ lõi nucleic acid'],
            [
              'Vỏ ngoài (ở một số virus)',
              'Lớp màng kép phospholipid, trên đó có gai glycoprotein',
              'Gai glycoprotein giúp virus bám vào tế bào chủ',
            ],
          ],
        },
        { type: 'widget', name: 'cau-tao' },
        {
          type: 'p',
          text: 'Dựa vào vật chất di truyền, virus được chia thành virus DNA và virus RNA. Virus RNA thường mang theo một số enzyme mà tế bào chủ không có, như enzyme phiên mã ngược (ở HIV), enzyme giúp tích hợp gene của virus vào hệ gene của tế bào chủ, enzyme giúp lắp ráp và giải phóng virus khỏi tế bào.',
        },
      ],
    },
    {
      heading: 'Quá trình nhân lên của virus',
      blocks: [
        {
          type: 'p',
          text: 'Nhân lên là sự gia tăng số lượng virus trong tế bào chủ. Quá trình này trải qua năm giai đoạn.',
        },
        {
          type: 'table',
          caption: 'Năm giai đoạn nhân lên',
          head: ['Giai đoạn', 'Diễn biến'],
          rows: [
            [
              '1. Hấp phụ',
              'Virus bám vào tế bào chủ nhờ gai glycoprotein hoặc protein bề mặt, tương tác đặc hiệu với thụ thể trên bề mặt tế bào.',
            ],
            [
              '2. Xâm nhập',
              'Vật chất di truyền của virus đi vào tế bào chủ. Phage tiêm vật chất di truyền vào vi khuẩn, vỏ protein ở lại bên ngoài. Virus động vật có vỏ ngoài đưa cả capsid và vật chất di truyền vào, sau đó nucleic acid mới được giải phóng khỏi vỏ.',
            ],
            [
              '3. Tổng hợp',
              'Nhân bản vật chất di truyền và tổng hợp protein của virus nhờ enzyme, nguyên liệu và năng lượng của tế bào chủ. Virus DNA dùng enzyme của tế bào chủ để phiên mã, dịch mã. Một số virus RNA dịch mã trực tiếp; số khác mang enzyme phiên mã ngược để tạo DNA trước, rồi từ DNA phiên mã thành RNA.',
            ],
            [
              '4. Lắp ráp',
              'Lõi nucleic acid được lắp vào vỏ protein, tạo thành hạt virus hoàn chỉnh.',
            ],
            [
              '5. Giải phóng',
              'Virus rời khỏi tế bào chủ. Phage phá vỡ tế bào rồi thoát ra ồ ạt. Virus có vỏ ngoài thường rời tế bào theo kiểu xuất bào, mang theo một phần màng tế bào làm vỏ ngoài.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao virus chỉ lây nhiễm một số loại tế bào?',
          text: 'Giai đoạn hấp phụ có tính đặc hiệu: gai glycoprotein hoặc protein bề mặt của virus chỉ bám được vào những thụ thể phù hợp. Tế bào không có thụ thể đó thì virus không vào được.',
        },
      ],
    },
    {
      heading: 'Chu kì sinh tan và chu kì tiềm tan',
      blocks: [
        {
          type: 'table',
          head: ['Tiêu chí', 'Chu kì sinh tan (virus độc)', 'Chu kì tiềm tan (virus ôn hoà)'],
          rows: [
            [
              'Vật chất di truyền',
              'Tồn tại và nhân lên độc lập với tế bào chủ, tạo nhiều thế hệ virus mới',
              'Tích hợp vào hệ gene của tế bào chủ, nhân lên cùng tế bào, chưa tạo virus mới',
            ],
            ['Tế bào chủ', 'Bị tan', 'Không bị tan ngay, vẫn sinh trưởng và phân chia'],
            [
              'Chuyển đổi',
              'Không chuyển thành chu kì tiềm tan',
              'Có thể chuyển thành chu kì sinh tan',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Một số virus có thể sử dụng cả hai chu kì, ví dụ một số thực khuẩn thể.',
        },
        { type: 'widget', name: 'chu-ki' },
      ],
    },
  ],
  explore: {
    title: 'Xếp năm giai đoạn nhân lên',
    instruction:
      'Chọn giai đoạn em cho là diễn ra tiếp theo. Chọn đúng thì hình sẽ diễn ra giai đoạn đó. Đổi loại virus để so sánh phage với virus có vỏ ngoài, nhất là ở hai giai đoạn xâm nhập và giải phóng.',
  },
  examples: [
    {
      problem:
        'Một loại virus chỉ gây bệnh ở tế bào niêm mạc đường hô hấp mà không gây bệnh ở tế bào cơ. Giải thích hiện tượng này.',
      steps: [
        'Để nhân lên, virus phải bám được vào tế bào chủ ở giai đoạn hấp phụ.',
        'Sự bám này dựa trên tương tác đặc hiệu giữa gai glycoprotein (hoặc protein bề mặt) của virus với thụ thể trên bề mặt tế bào.',
        'Tế bào niêm mạc đường hô hấp có loại thụ thể phù hợp, còn tế bào cơ thì không, nên virus không xâm nhập được vào tế bào cơ.',
      ],
      answer: 'Vì tế bào cơ không có thụ thể đặc hiệu để virus bám vào ở giai đoạn hấp phụ.',
    },
    {
      problem:
        'Một phage xâm nhiễm một vi khuẩn. Mỗi vi khuẩn bị tan giải phóng $100$ phage mới, và mỗi phage mới lại xâm nhiễm một vi khuẩn khác. Giả sử không phage nào bị mất, sau $3$ đợt xâm nhiễm liên tiếp sẽ có bao nhiêu phage?',
      steps: [
        'Sau đợt $1$: $1 \\cdot 100 = 100$ phage.',
        'Sau đợt $2$: $100 \\cdot 100 = 10\\,000$ phage.',
        'Sau đợt $3$: $10\\,000 \\cdot 100 = 1\\,000\\,000$ phage.',
      ],
      answer:
        'Có $1\\,000\\,000$ phage. Đây là lí do chu kì sinh tan có thể làm tan cả một quần thể vi khuẩn trong thời gian ngắn.',
    },
    {
      problem:
        'Một vi khuẩn mang gene của phage trong hệ gene nhưng vẫn sinh trưởng bình thường. Vi khuẩn này đang ở chu kì nào? Sau này nó có chắc chắn an toàn không?',
      steps: [
        'Gene của phage nằm trong hệ gene của vi khuẩn và tế bào không bị tan: đó là chu kì tiềm tan.',
        'Chu kì tiềm tan có thể chuyển thành chu kì sinh tan khi điều kiện thích hợp.',
      ],
      answer:
        'Vi khuẩn ở chu kì tiềm tan và không chắc chắn an toàn, vì phage có thể chuyển sang chu kì sinh tan và làm tan vi khuẩn.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn nhân lên của virus theo đúng thứ tự.',
      items: ['Lắp ráp', 'Hấp phụ', 'Giải phóng', 'Xâm nhập', 'Tổng hợp'],
      answer: [1, 3, 4, 0, 2],
      hints: [
        'Virus phải bám vào tế bào trước khi đi vào trong.',
        'Phải có đủ nucleic acid và protein thì mới ghép được thành virus.',
      ],
      solution: 'Hấp phụ, xâm nhập, tổng hợp, lắp ráp, giải phóng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao virus được xem là kí sinh nội bào bắt buộc?',
      options: [
        'Vì virus không có cấu tạo tế bào, không tự sinh sản và chuyển hoá được khi ở ngoài tế bào chủ',
        'Vì virus có kích thước lớn hơn vi khuẩn',
        'Vì virus có đầy đủ bào quan như tế bào nhân thực',
        'Vì virus chỉ gây bệnh cho con người',
      ],
      answer: 0,
      hints: ['Nghĩ xem virus thiếu những gì để tự nhân lên.'],
      solution:
        'Virus không có cấu tạo tế bào, không có bộ máy tổng hợp riêng nên phải dùng enzyme, nguyên liệu và năng lượng của tế bào chủ.',
    },
    {
      type: 'multi',
      prompt: 'Những thành phần nào có ở mọi virus?',
      options: [
        'Lõi nucleic acid',
        'Vỏ protein (capsid)',
        'Vỏ ngoài',
        'Gai glycoprotein',
        'Ribosome',
      ],
      answers: [0, 1],
      hints: ['Vỏ ngoài chỉ có ở một số virus, và gai glycoprotein nằm trên đó.'],
      solution:
        'Mọi virus đều có lõi nucleic acid và vỏ protein. Vỏ ngoài với gai glycoprotein chỉ có ở một số virus, còn virus không có ribosome.',
    },
    {
      type: 'choice',
      prompt: 'Người ta chia virus thành virus DNA và virus RNA dựa vào đặc điểm nào?',
      options: [
        'Loại vật chất di truyền trong lõi',
        'Có hay không có vỏ ngoài',
        'Hình dạng của vỏ capsid',
        'Loại sinh vật mà virus kí sinh',
      ],
      answer: 0,
      hints: ['Hai tên gọi này chính là tên của hai loại nucleic acid.'],
      solution:
        'Lõi của virus chứa DNA hoặc RNA, nên vật chất di truyền là căn cứ để chia thành virus DNA và virus RNA.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi giai đoạn với diễn biến của nó.',
      left: ['Hấp phụ', 'Xâm nhập', 'Tổng hợp', 'Lắp ráp', 'Giải phóng'],
      right: [
        'Virus bám vào thụ thể đặc hiệu trên bề mặt tế bào',
        'Vật chất di truyền của virus đi vào tế bào chủ',
        'Nhân bản nucleic acid và tạo protein của virus',
        'Lõi nucleic acid được lắp vào vỏ protein',
        'Virus rời khỏi tế bào chủ',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Giai đoạn nào cần có sẵn cả nucleic acid lẫn protein?'],
      solution:
        'Hấp phụ là bám vào thụ thể; xâm nhập là đưa vật chất di truyền vào tế bào; tổng hợp là tạo nucleic acid và protein; lắp ráp là ghép chúng lại; giải phóng là rời khỏi tế bào.',
    },
    {
      type: 'choice',
      prompt: 'Khi phage xâm nhập vào vi khuẩn, phần nào ở lại bên ngoài tế bào?',
      options: [
        'Vỏ protein',
        'Vật chất di truyền',
        'Toàn bộ phage đi vào trong, không có gì ở lại',
        'Thành tế bào vi khuẩn',
      ],
      answer: 0,
      hints: ['Phage hoạt động giống một chiếc ống tiêm.'],
      solution:
        'Phage tiêm vật chất di truyền vào vi khuẩn qua đuôi, còn vỏ protein ở lại bên ngoài. Khác với virus động vật có vỏ ngoài, đưa cả capsid vào tế bào.',
    },
    {
      type: 'text',
      prompt:
        'Giai đoạn nào của quá trình nhân lên quyết định tính đặc hiệu về vật chủ của virus? (Viết tên giai đoạn.)',
      accept: ['hấp phụ', 'giai đoạn hấp phụ'],
      hints: ['Đó là lúc virus gặp thụ thể trên bề mặt tế bào.'],
      solution:
        'Hấp phụ: gai glycoprotein hoặc protein bề mặt của virus chỉ bám vào những thụ thể phù hợp, nên mỗi virus chỉ lây nhiễm một số loại tế bào.',
    },
    {
      type: 'choice',
      prompt: 'Đặc điểm nào đúng với chu kì tiềm tan?',
      options: [
        'Vật chất di truyền của virus tích hợp vào hệ gene của tế bào chủ, tế bào chưa bị tan',
        'Tế bào chủ bị phá vỡ ngay sau khi virus xâm nhập',
        'Virus mới được tạo ra hàng loạt rồi thoát ra ồ ạt',
        'Không bao giờ có thể chuyển thành chu kì khác',
      ],
      answer: 0,
      hints: ['"Tiềm" nghĩa là tiềm ẩn, chưa biểu hiện ra ngay.'],
      solution:
        'Ở chu kì tiềm tan, gene của virus nằm trong hệ gene tế bào chủ và được nhân đôi cùng tế bào. Chu kì này có thể chuyển thành chu kì sinh tan.',
    },
    {
      type: 'number',
      prompt:
        'Một vi khuẩn dài $2$ µm, một virus có đường kính $100$ nm. Vi khuẩn dài gấp bao nhiêu lần đường kính virus? (Biết $1$ µm $= 1000$ nm.)',
      answer: 20,
      unit: 'lần',
      hints: ['Đổi độ dài vi khuẩn sang nm trước.'],
      solution: '$2$ µm $= 2000$ nm. Tỉ số là $2000 : 100 = 20$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Mỗi vi khuẩn bị tan giải phóng $50$ phage mới. Mỗi phage mới lại xâm nhiễm một vi khuẩn khác. Bắt đầu từ $1$ phage và không phage nào bị mất, sau $2$ đợt xâm nhiễm có bao nhiêu phage?',
      answer: 2500,
      unit: 'phage',
      hints: ['Mỗi đợt, số phage được nhân lên $50$ lần.'],
      solution: 'Sau đợt $1$ có $50$ phage; sau đợt $2$ có $50 \\cdot 50 = 2500$ phage.',
    },
    {
      type: 'choice',
      prompt:
        'Một loại thuốc làm hỏng thụ thể mà virus dùng để bám vào tế bào. Thuốc này chặn trực tiếp giai đoạn nào?',
      options: ['Hấp phụ', 'Tổng hợp', 'Lắp ráp', 'Giải phóng'],
      answer: 0,
      hints: ['Thụ thể được dùng ở lúc virus mới tiếp xúc với tế bào.'],
      solution:
        'Không có thụ thể phù hợp, virus không bám được vào tế bào, nên giai đoạn hấp phụ bị chặn, và những giai đoạn sau cũng không xảy ra.',
    },
  ],
  takeaways: [
    'Virus không có cấu tạo tế bào, kích thước khoảng $20$ đến $300$ nm, chỉ nhân lên trong tế bào sống.',
    'Cấu tạo: lõi nucleic acid (DNA hoặc RNA) và vỏ capsid bằng protein; một số virus có thêm vỏ ngoài với gai glycoprotein.',
    'Năm giai đoạn nhân lên: hấp phụ, xâm nhập, tổng hợp, lắp ráp, giải phóng.',
    'Chu kì sinh tan làm tan tế bào chủ; chu kì tiềm tan đưa gene virus vào hệ gene của tế bào chủ và có thể chuyển thành chu kì sinh tan.',
  ],
};

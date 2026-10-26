/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cảm ứng là khả năng sinh vật tiếp nhận và phản ứng lại các kích thích của môi trường; ví dụ ở thực vật (hướng sáng, hướng nước, cây trinh nữ cụp lá) và ở động vật; tập tính ở động vật gồm tập tính bẩm sinh và tập tính học được.',
  intro:
    'Khi ta chạm tay vào lá cây trinh nữ (cây xấu hổ), lá cây cụp lại. Chậu cây đặt cạnh cửa sổ lâu ngày thì ngọn cây nghiêng ra phía cửa sổ. Con mèo vừa nghe tiếng động đã quay đầu về phía phát ra âm thanh. Vì sao sinh vật lại có những phản ứng như vậy, và chúng có ý nghĩa gì đối với sự sống của sinh vật?',
  objectives: [
    'Phát biểu được khái niệm cảm ứng ở sinh vật và vai trò của cảm ứng.',
    'Lấy được ví dụ về các hiện tượng cảm ứng ở thực vật và ở động vật, chỉ ra tác nhân kích thích và phản ứng của sinh vật.',
    'Phát biểu được khái niệm tập tính ở động vật, phân biệt tập tính bẩm sinh với tập tính học được và nêu được vai trò của tập tính.',
  ],
  sections: [
    {
      heading: 'Cảm ứng và vai trò của cảm ứng ở sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cảm ứng',
          text: 'Cảm ứng ở sinh vật là khả năng tiếp nhận và phản ứng lại các kích thích từ môi trường (bên trong và bên ngoài cơ thể), đảm bảo cho sinh vật tồn tại và phát triển.',
        },
        {
          type: 'p',
          text: 'Mỗi hiện tượng cảm ứng gồm hai phần: tác nhân kích thích (ánh sáng, nước, chất hoá học, nhiệt độ, sự va chạm, âm thanh, ...) và phản ứng của sinh vật trả lời kích thích đó.',
        },
        {
          type: 'table',
          caption: 'Một số hiện tượng cảm ứng',
          head: ['Hiện tượng', 'Tác nhân kích thích', 'Phản ứng của sinh vật'],
          rows: [
            ['Cây trinh nữ cụp lá', 'Sự va chạm', 'Các lá chét cụp lại, cuống lá rủ xuống'],
            ['Cây trồng cạnh cửa sổ', 'Ánh sáng', 'Ngọn cây mọc cong về phía ánh sáng'],
            ['Rễ cây mọc lan về chỗ đất ẩm', 'Nước', 'Rễ cây mọc hướng về phía nguồn nước'],
            ['Tay chạm vào vật nóng', 'Nhiệt độ cao', 'Rụt tay lại ngay để không bị bỏng'],
            ['Con cuốn chiếu bị chạm vào', 'Sự va chạm', 'Cuộn tròn cơ thể lại'],
            ['Mèo nghe tiếng chuột kêu', 'Âm thanh', 'Quay đầu, rình về phía có tiếng động'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vai trò của cảm ứng',
          text: 'Cảm ứng giúp sinh vật thích nghi với những thay đổi của môi trường sống, nhờ đó sinh vật tồn tại và phát triển. Nếu không phản ứng được với kích thích, sinh vật khó tìm được thức ăn, nước, ánh sáng và dễ bị tổn thương hoặc bị kẻ thù tiêu diệt.',
        },
      ],
    },
    {
      heading: 'Cảm ứng ở thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Ở thực vật, phản ứng trả lời kích thích thường diễn ra chậm, khó nhận thấy ngay (phải sau nhiều giờ hoặc nhiều ngày), trừ một số trường hợp như cây trinh nữ. Phản ứng thường là sự mọc cong, hướng về phía có kích thích hoặc tránh xa kích thích, hay sự cử động của lá, hoa.',
        },
        {
          type: 'list',
          items: [
            'Hướng sáng: ngọn cây mọc hướng về phía có ánh sáng. Nhờ đó lá nhận được nhiều ánh sáng để quang hợp.',
            'Hướng nước: rễ cây mọc hướng về phía nguồn nước, giúp cây hút được nước.',
            'Hướng tiếp xúc: tua cuốn hoặc thân của cây leo (mướp, bầu, bí, đậu, ...) quấn quanh vật mà nó chạm vào (cọc, giàn) để vươn lên cao.',
            'Hướng hoá: rễ cây mọc hướng tới nơi có chất dinh dưỡng (phân bón) và tránh xa nơi có chất độc hại.',
            'Cử động của lá, hoa: lá cây trinh nữ cụp lại khi bị chạm; hoa của nhiều loài nở hay khép lại theo ánh sáng và nhiệt độ trong ngày.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cây trinh nữ',
          text: 'Khi bị chạm, sau vài giây các lá chét cây trinh nữ khép lại và cuống lá rủ xuống. Một thời gian sau (thường vài phút) lá lại xoè ra như cũ. Phản ứng này giúp cây giảm bớt tổn thương khi bị động vật va chạm.',
        },
      ],
    },
    {
      heading: 'Cảm ứng ở động vật',
      blocks: [
        {
          type: 'p',
          text: 'Ở động vật, phản ứng trả lời kích thích thường diễn ra nhanh và dễ nhận thấy, thể hiện bằng các cử động của cơ thể như chạy, bay, co mình, quay đầu, tiết nước bọt, ...',
        },
        {
          type: 'list',
          items: [
            'Con thằn lằn nằm phơi nắng vào buổi sáng, buổi trưa nắng gắt thì chui vào bóng râm (tác nhân: nhiệt độ).',
            'Con giun đất bị chạm vào thì co mình lại (tác nhân: sự va chạm).',
            'Ruồi bay đi khi ta vung tay xua (tác nhân: sự chuyển động của tay).',
            'Chó tiết nước bọt khi ngửi thấy mùi thức ăn (tác nhân: mùi thức ăn).',
          ],
        },
        {
          type: 'table',
          caption: 'So sánh cảm ứng ở thực vật và động vật',
          head: ['Tiêu chí', 'Thực vật', 'Động vật'],
          rows: [
            ['Tốc độ phản ứng', 'Thường chậm, khó nhận thấy', 'Thường nhanh, dễ nhận thấy'],
            [
              'Hình thức phản ứng',
              'Mọc cong của thân, rễ; cử động của lá, hoa',
              'Cử động của cơ thể (chạy, bay, co mình, ...)',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Tập tính ở động vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tập tính',
          text: 'Tập tính là một chuỗi những phản ứng của động vật trả lời các kích thích đến từ môi trường bên trong hoặc bên ngoài cơ thể, nhờ đó động vật thích nghi với môi trường sống và tồn tại.',
        },
        {
          type: 'p',
          text: 'Một số dạng tập tính phổ biến: tập tính kiếm ăn (mèo rình bắt chuột), tập tính sinh sản (chim xây tổ, ấp trứng), tập tính di cư (chim én bay về phương nam tránh rét), tập tính sống bầy đàn hay tập tính xã hội (trâu rừng sống thành đàn), tập tính bảo vệ lãnh thổ (chó sủa người lạ), tập tính chăm sóc con non (gà mẹ che chở đàn con).',
        },
        {
          type: 'table',
          caption: 'Hai loại tập tính',
          head: ['Tiêu chí', 'Tập tính bẩm sinh', 'Tập tính học được'],
          rows: [
            [
              'Đặc điểm',
              'Sinh ra đã có, được di truyền từ bố mẹ, đặc trưng cho loài',
              'Hình thành trong quá trình sống của cá thể, thông qua học tập và rút kinh nghiệm',
            ],
            [
              'Ví dụ',
              'Nhện chăng tơ, ve sầu kêu vào mùa hè, thú con bú mẹ',
              'Trâu bò về chuồng khi nghe tiếng kẻng, khỉ làm xiếc, người dừng xe khi gặp đèn đỏ',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vai trò của tập tính',
          text: 'Tập tính giúp động vật thích nghi với môi trường sống: tìm được thức ăn, tránh được kẻ thù, sinh sản và nuôi con, nhờ đó động vật tồn tại và phát triển.',
        },
        { type: 'p', text: 'Thử xếp các tập tính dưới đây vào đúng nhóm.' },
        { type: 'widget', name: 'tap-tinh' },
      ],
    },
  ],
  explore: {
    title: 'Quan sát cảm ứng ở thực vật',
    instruction:
      'Cây hướng sáng: chọn hướng ánh sáng chiếu tới rồi bấm "Thêm 1 ngày" để theo dõi ngọn cây; so sánh khi ánh sáng chiếu từ một bên và từ phía trên. Cây trinh nữ: bấm "Chạm vào lá" và quan sát các lá chét cụp lại rồi xoè ra.',
  },
  examples: [
    {
      problem:
        'Bạn Hà để một chậu cây cạnh cửa sổ. Sau một tuần, ngọn cây nghiêng hẳn ra phía cửa sổ. Hãy chỉ ra tác nhân kích thích, phản ứng của cây và cho biết phản ứng đó có lợi gì cho cây.',
      steps: [
        'Ánh sáng chủ yếu chiếu vào chậu cây từ phía cửa sổ. Vậy tác nhân kích thích là ánh sáng.',
        'Ngọn cây mọc cong về phía cửa sổ, tức là về phía có ánh sáng. Đây là phản ứng của cây: tính hướng sáng.',
        'Ngọn cây và lá hướng về phía ánh sáng thì lá nhận được nhiều ánh sáng hơn để quang hợp, giúp cây sinh trưởng tốt.',
      ],
      answer:
        'Tác nhân kích thích là ánh sáng; phản ứng là ngọn cây mọc cong về phía ánh sáng (hướng sáng), giúp lá nhận đủ ánh sáng để quang hợp.',
    },
    {
      problem:
        'Cho hai tập tính: (a) nhện chăng tơ để bắt mồi; (b) chó cảnh đưa chân "bắt tay" khi chủ ra lệnh. Mỗi tập tính thuộc loại nào? Giải thích.',
      steps: [
        'Nhện con mới nở, không ai dạy, vẫn biết chăng tơ; mọi con nhện cùng loài đều chăng tơ theo một kiểu. Vậy (a) là tập tính sinh ra đã có, đặc trưng cho loài.',
        'Chó chỉ đưa chân "bắt tay" sau khi được chủ huấn luyện nhiều lần; con chó không được dạy thì không làm. Vậy (b) được hình thành trong đời sống của cá thể qua học tập.',
      ],
      answer: '(a) là tập tính bẩm sinh; (b) là tập tính học được.',
    },
    {
      problem:
        'Điều gì sẽ xảy ra với một con thằn lằn nếu nó không phản ứng được với nhiệt độ của môi trường?',
      steps: [
        'Bình thường, thằn lằn phơi nắng khi trời lạnh và tìm chỗ râm mát khi trời quá nóng; đó là phản ứng cảm ứng với nhiệt độ.',
        'Nếu không có phản ứng đó, khi trời lạnh cơ thể nó quá lạnh để hoạt động, khi nắng gắt nó có thể bị quá nóng.',
      ],
      answer:
        'Thằn lằn khó thích nghi với sự thay đổi nhiệt độ, dễ bị chết; điều đó cho thấy cảm ứng giúp sinh vật tồn tại.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Cảm ứng ở sinh vật là',
      options: [
        'khả năng sinh vật lấy các chất từ môi trường để xây dựng cơ thể',
        'khả năng sinh vật tiếp nhận và phản ứng lại các kích thích từ môi trường',
        'khả năng sinh vật tạo ra con non giống mình',
        'sự lớn lên về kích thước của sinh vật',
      ],
      answer: 1,
      hints: ['Cảm ứng luôn gồm một kích thích và một phản ứng.'],
      solution:
        'Cảm ứng là khả năng sinh vật tiếp nhận và phản ứng lại các kích thích từ môi trường (bên trong và bên ngoài cơ thể), đảm bảo cho sinh vật tồn tại và phát triển.',
    },
    {
      type: 'multi',
      prompt: 'Những hiện tượng nào dưới đây là cảm ứng ở thực vật?',
      options: [
        'Ngọn cây trồng trong nhà mọc cong về phía cửa sổ',
        'Rễ cây mọc lan về phía rãnh nước',
        'Tua cuốn của cây mướp quấn vào giàn',
        'Con giun đất co mình khi bị chạm',
        'Lá cây trinh nữ cụp lại khi bị chạm',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Chọn các hiện tượng xảy ra ở cây, không chọn hiện tượng ở động vật.'],
      solution:
        'Hướng sáng (ngọn cây), hướng nước (rễ), hướng tiếp xúc (tua cuốn) và cây trinh nữ cụp lá đều là cảm ứng ở thực vật. Giun đất co mình là cảm ứng ở động vật.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hiện tượng cảm ứng với tác nhân kích thích của nó.',
      left: [
        'Ngọn cây mọc cong về phía cửa sổ',
        'Rễ cây mọc về phía chỗ đất ẩm',
        'Lá cây trinh nữ cụp lại',
        'Thằn lằn bò vào bóng râm buổi trưa',
      ],
      right: ['Sự va chạm', 'Ánh sáng', 'Nhiệt độ', 'Nước', 'Âm thanh'],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Với mỗi hiện tượng, hỏi: sinh vật đang phản ứng lại điều gì của môi trường?'],
      solution:
        'Ngọn cây mọc cong về phía ánh sáng (ánh sáng); rễ mọc về chỗ ẩm (nước); lá trinh nữ cụp khi bị chạm (sự va chạm); thằn lằn tránh nắng gắt (nhiệt độ).',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau chủ yếu giữa cảm ứng ở thực vật và cảm ứng ở động vật là',
      options: [
        'thực vật không có cảm ứng, chỉ động vật mới có',
        'phản ứng ở thực vật thường chậm, khó thấy; ở động vật thường nhanh, dễ thấy',
        'phản ứng ở thực vật luôn nhanh hơn ở động vật',
        'thực vật chỉ phản ứng với ánh sáng, động vật phản ứng với mọi kích thích',
      ],
      answer: 1,
      hints: [
        'Ngọn cây phải mất nhiều ngày mới cong về phía ánh sáng; con ruồi bay đi ngay khi bị xua.',
      ],
      solution:
        'Cả thực vật và động vật đều có cảm ứng. Ở thực vật phản ứng thường diễn ra chậm, khó nhận thấy; ở động vật phản ứng thường nhanh và dễ nhận thấy.',
    },
    {
      type: 'text',
      prompt:
        'Tập tính sinh ra đã có, được di truyền từ bố mẹ và đặc trưng cho loài được gọi là tập tính gì?',
      accept: ['bẩm sinh', 'tập tính bẩm sinh'],
      hints: ['Trái nghĩa với "học được".'],
      solution: 'Đó là tập tính bẩm sinh, ví dụ nhện chăng tơ, thú con bú mẹ.',
    },
    {
      type: 'multi',
      prompt: 'Những tập tính nào dưới đây là tập tính học được?',
      options: [
        'Vẹt nói được tiếng người',
        'Ve sầu kêu vào mùa hè',
        'Trâu bò về chuồng khi nghe tiếng kẻng',
        'Thú con mới sinh bú mẹ',
        'Học sinh xếp hàng khi nghe trống vào lớp',
      ],
      answers: [0, 2, 4],
      hints: ['Tập tính học được chỉ có sau khi cá thể được dạy hoặc tự rút kinh nghiệm.'],
      solution:
        'Vẹt nói, trâu bò về chuồng theo tiếng kẻng, học sinh xếp hàng khi nghe trống đều hình thành qua tập luyện: là tập tính học được. Ve kêu và thú con bú mẹ là tập tính bẩm sinh.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hành động của động vật với dạng tập tính tương ứng.',
      left: [
        'Chim én bay về phương nam khi trời rét',
        'Mèo rình bắt chuột',
        'Chim xây tổ, đẻ trứng và ấp trứng',
        'Chó sủa khi có người lạ vào nhà',
      ],
      right: [
        'Tập tính kiếm ăn',
        'Tập tính di cư',
        'Tập tính bảo vệ lãnh thổ',
        'Tập tính sinh sản',
      ],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 3],
        [3, 2],
      ],
      hints: ['Hỏi mục đích của mỗi hành động: tìm thức ăn, tránh rét, đẻ con hay giữ chỗ ở?'],
      solution:
        'Chim én bay về phương nam: di cư; mèo rình chuột: kiếm ăn; chim xây tổ, ấp trứng: sinh sản; chó sủa người lạ: bảo vệ lãnh thổ.',
    },
    {
      type: 'choice',
      prompt: 'Vai trò của tập tính đối với động vật là',
      options: [
        'giúp động vật thích nghi với môi trường sống, nhờ đó tồn tại và phát triển',
        'giúp động vật quang hợp tạo chất hữu cơ',
        'làm cho động vật lớn nhanh hơn',
        'chỉ giúp con người dễ huấn luyện động vật',
      ],
      answer: 0,
      hints: ['Tập tính giúp động vật tìm thức ăn, tránh kẻ thù, sinh sản.'],
      solution:
        'Tập tính giúp động vật kiếm được thức ăn, tránh kẻ thù, sinh sản và nuôi con, tức là thích nghi với môi trường sống để tồn tại và phát triển.',
    },
  ],
  takeaways: [
    'Cảm ứng là khả năng sinh vật tiếp nhận và phản ứng lại các kích thích từ môi trường, giúp sinh vật thích nghi, tồn tại và phát triển.',
    'Ở thực vật, phản ứng thường chậm: hướng sáng (ngọn), hướng nước (rễ), hướng tiếp xúc (tua cuốn), hướng hoá; cây trinh nữ cụp lá khi bị chạm.',
    'Ở động vật, phản ứng thường nhanh, dễ thấy: chạy, bay, co mình, quay đầu, ...',
    'Tập tính là chuỗi phản ứng của động vật trả lời kích thích từ môi trường bên trong hoặc bên ngoài cơ thể.',
    'Tập tính bẩm sinh: sinh ra đã có, đặc trưng cho loài. Tập tính học được: hình thành trong quá trình sống qua học tập, rút kinh nghiệm.',
  ],
};

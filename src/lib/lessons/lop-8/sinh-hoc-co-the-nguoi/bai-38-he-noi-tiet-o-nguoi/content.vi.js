/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tuyến nội tiết và hormone; vị trí, hormone và vai trò của các tuyến nội tiết chính ở người (tuyến yên, tuyến tùng, tuyến giáp, tuyến cận giáp, tuyến ức, tuyến tụy, tuyến trên thận, tuyến sinh dục); một số bệnh nội tiết như tiểu đường, bướu cổ và cách phòng tránh.',
  intro:
    'Vì sao khi sợ hãi, tim em đập thình thịch và tay chân run lên? Vì sao ở tuổi dậy thì, cơ thể bạn nam và bạn nữ thay đổi rất nhanh? Đằng sau những thay đổi ấy là những "sứ giả hóa học" nhỏ bé gọi là hormone, do các tuyến nội tiết tiết ra.',
  objectives: [
    'Phân biệt được tuyến nội tiết và tuyến ngoại tiết; nêu được hormone là gì.',
    'Kể tên được các tuyến nội tiết chính, nêu được vị trí, hormone và vai trò của chúng.',
    'Trình bày được một số bệnh liên quan đến hệ nội tiết (tiểu đường, bướu cổ) và cách phòng chống.',
  ],
  sections: [
    {
      heading: 'Tuyến nội tiết và hormone',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tuyến nội tiết, tuyến ngoại tiết',
          text: 'Tuyến nội tiết tiết hormone ngấm thẳng vào máu, theo máu đến các cơ quan (không có ống dẫn). Tuyến ngoại tiết tiết chất theo ống dẫn ra ngoài hoặc vào một khoang của cơ thể (tuyến nước bọt, tuyến mồ hôi, tuyến lệ…). Tuyến tụy và tuyến sinh dục vừa có chức năng nội tiết vừa có chức năng ngoại tiết.',
        },
        {
          type: 'list',
          items: [
            'Hormone là chất hóa học do tuyến nội tiết tiết ra, theo máu đến tác động lên cơ quan đích (cơ quan chịu tác động của hormone).',
            'Hormone có hoạt tính sinh học rất cao: chỉ một lượng rất nhỏ đã gây tác dụng rõ rệt.',
            'Mỗi hormone chỉ tác động lên một hoặc một số cơ quan đích xác định.',
            'Hệ nội tiết cùng với hệ thần kinh điều hòa các quá trình sinh lí, giữ cân bằng môi trường trong cơ thể.',
          ],
        },
        { type: 'widget', name: 'phan-loai-tuyen' },
      ],
    },
    {
      heading: 'Các tuyến nội tiết chính',
      blocks: [
        {
          type: 'table',
          caption: 'Vị trí, hormone và vai trò của một số tuyến nội tiết',
          head: ['Tuyến', 'Vị trí', 'Hormone và vai trò chính'],
          rows: [
            [
              'Tuyến yên',
              'Nền sọ',
              'GH kích thích sinh trưởng; các hormone điều khiển tuyến giáp, tuyến trên thận, tuyến sinh dục',
            ],
            ['Tuyến tùng', 'Trong não', 'Melatonin điều hòa nhịp thức – ngủ'],
            [
              'Tuyến giáp',
              'Cổ, trước khí quản',
              'Thyroxine tăng trao đổi chất, ảnh hưởng sinh trưởng, phát triển; calcitonin giảm calcium máu',
            ],
            ['Tuyến cận giáp', 'Mặt sau tuyến giáp', 'PTH tăng calcium máu'],
            [
              'Tuyến ức',
              'Trong lồng ngực',
              'Hormone giúp phát triển tế bào lympho T (miễn dịch); hoạt động mạnh ở trẻ em',
            ],
            ['Tuyến tụy', 'Sau dạ dày', 'Insulin giảm đường huyết; glucagon tăng đường huyết'],
            [
              'Tuyến trên thận',
              'Trên hai quả thận',
              'Adrenaline tăng nhịp tim, huyết áp, đường huyết khi căng thẳng; cortisol, aldosterone',
            ],
            [
              'Tuyến sinh dục',
              'Buồng trứng (nữ), tinh hoàn (nam)',
              'Estrogen, progesterone; testosterone: gây biến đổi ở tuổi dậy thì',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Điều hòa đường huyết',
          text: 'Sau bữa ăn, đường huyết tăng: tuyến tụy tiết insulin, giúp tế bào nhận glucose và gan, cơ chuyển glucose thành glycogen dự trữ, đường huyết giảm về mức bình thường. Lúc đói, đường huyết giảm: tuyến tụy tiết glucagon, gan phân giải glycogen thành glucose đưa vào máu, đường huyết tăng lên. Hai hormone tác dụng ngược chiều giữ đường huyết ổn định.',
        },
      ],
    },
    {
      heading: 'Một số bệnh nội tiết',
      blocks: [
        {
          type: 'table',
          caption: 'Bệnh tiểu đường và bệnh bướu cổ',
          head: ['Bệnh', 'Nguyên nhân', 'Biểu hiện', 'Phòng chống'],
          rows: [
            [
              'Tiểu đường (đái tháo đường)',
              'Tuyến tụy tiết không đủ insulin hoặc tế bào giảm đáp ứng với insulin, làm glucose trong máu cao kéo dài',
              'Khát nhiều, tiểu nhiều, ăn nhiều nhưng sút cân, mệt mỏi; về lâu dài gây tổn thương mắt, thận, tim mạch, thần kinh',
              'Ăn uống hợp lí, hạn chế đồ ngọt, tinh bột tinh chế, đồ uống có đường; tập thể dục, giữ cân nặng hợp lí; kiểm tra đường huyết định kì',
            ],
            [
              'Bướu cổ (do thiếu iodine)',
              'Khẩu phần thiếu iodine, tuyến giáp không tổng hợp đủ thyroxine nên tăng kích thước',
              'Tuyến giáp phình to ở cổ; trẻ em chậm lớn, trí tuệ kém phát triển; người lớn mệt mỏi, giảm trí nhớ',
              'Dùng muối iodine, ăn hải sản (cá biển, rong biển…)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tiết quá nhiều cũng gây bệnh',
          text: 'Tuyến giáp hoạt động quá mạnh (bệnh Basedow) làm tăng trao đổi chất: người bệnh nóng nảy, mất ngủ, sút cân, tim đập nhanh, mắt lồi. Tuyến yên tiết quá nhiều hoặc quá ít GH ở tuổi trẻ có thể gây bệnh khổng lồ hoặc lùn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ tuyến nội tiết',
    instruction:
      'Ở chế độ "Tìm hiểu", bấm vào từng số trên cơ thể để xem tên tuyến, hormone tiết ra và cơ quan đích. Sau đó chuyển sang "Gọi tên" hoặc "Tìm vị trí" để tự kiểm tra.',
  },
  examples: [
    {
      problem:
        'Vì sao Nhà nước khuyến khích người dân dùng muối iodine? Nếu thiếu iodine kéo dài, cơ thể bị ảnh hưởng thế nào?',
      steps: [
        'Iodine là thành phần cấu tạo của hormone thyroxine do tuyến giáp tiết ra.',
        'Thiếu iodine, tuyến giáp không tổng hợp đủ thyroxine; tuyến yên tăng tiết hormone kích thích tuyến giáp làm tuyến giáp phình to, gây bướu cổ.',
        'Thiếu thyroxine làm giảm trao đổi chất: trẻ em chậm lớn, trí tuệ kém phát triển; người lớn mệt mỏi, giảm trí nhớ.',
      ],
      answer:
        'Dùng muối iodine giúp tuyến giáp tổng hợp đủ thyroxine, phòng bệnh bướu cổ và các rối loạn sinh trưởng, phát triển do thiếu iodine.',
    },
    {
      problem:
        'Một người bị bệnh tiểu đường do tuyến tụy không tiết đủ insulin. Hãy giải thích vì sao đường huyết của người này luôn cao và vì sao trong nước tiểu có thể có glucose.',
      steps: [
        'Insulin giúp tế bào nhận glucose và giúp gan, cơ chuyển glucose thành glycogen dự trữ, làm giảm đường huyết.',
        'Thiếu insulin, glucose không được đưa vào tế bào và dự trữ, nên tồn lại trong máu: đường huyết luôn cao.',
        'Lượng glucose lọc vào nước tiểu đầu quá nhiều, ống thận không hấp thụ lại hết, nên glucose xuất hiện trong nước tiểu chính thức.',
      ],
      answer:
        'Thiếu insulin nên glucose không vào được tế bào và không được dự trữ, đường huyết cao; ống thận không hấp thụ lại hết lượng glucose quá lớn nên glucose có trong nước tiểu.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đặc điểm nào phân biệt tuyến nội tiết với tuyến ngoại tiết?',
      options: [
        'Tuyến nội tiết tiết hormone thẳng vào máu, không có ống dẫn',
        'Tuyến nội tiết luôn có kích thước lớn hơn',
        'Tuyến nội tiết tiết chất ra bề mặt da',
        'Tuyến nội tiết chỉ có ở nữ giới',
      ],
      answer: 0,
      hints: ['Tuyến nước bọt đưa nước bọt vào miệng bằng gì?'],
      solution:
        'Tuyến nội tiết không có ống dẫn, hormone ngấm thẳng vào máu; tuyến ngoại tiết đưa chất tiết theo ống dẫn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tuyến nội tiết với hormone mà nó tiết ra.',
      left: ['Tuyến tụy', 'Tuyến giáp', 'Tuyến trên thận', 'Tuyến tùng'],
      right: ['Melatonin', 'Adrenaline', 'Insulin', 'Thyroxine'],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 1],
        [3, 0],
      ],
      hints: ['Thyroxine chứa iodine; adrenaline tiết ra khi căng thẳng, sợ hãi.'],
      solution:
        'Tuyến tụy: insulin; tuyến giáp: thyroxine; tuyến trên thận: adrenaline; tuyến tùng: melatonin.',
    },
    {
      type: 'choice',
      prompt: 'Hormone nào làm giảm nồng độ glucose trong máu?',
      options: ['Glucagon', 'Insulin', 'Adrenaline', 'Testosterone'],
      answer: 1,
      hints: ['Hormone này giúp gan và cơ dự trữ glycogen.'],
      solution:
        'Insulin làm giảm đường huyết. Glucagon và adrenaline làm tăng đường huyết; testosterone là hormone sinh dục nam.',
    },
    {
      type: 'text',
      prompt:
        'Tuyến nội tiết nào tiết hormone tăng trưởng (GH) và điều khiển hoạt động của nhiều tuyến nội tiết khác?',
      accept: ['tuyến yên', 'tuyen yen'],
      hints: ['Tuyến này nằm ở nền sọ, có kích thước chỉ bằng hạt đậu.'],
      solution: 'Đó là tuyến yên, tuyến nội tiết quan trọng nhất.',
    },
    {
      type: 'choice',
      prompt: 'Bệnh bướu cổ do thiếu iodine liên quan đến tuyến nội tiết nào?',
      options: ['Tuyến yên', 'Tuyến tụy', 'Tuyến giáp', 'Tuyến trên thận'],
      answer: 2,
      hints: ['Tuyến này nằm ở cổ và dùng iodine để tạo hormone.'],
      solution: 'Thiếu iodine, tuyến giáp không tạo đủ thyroxine và phình to, gây bướu cổ.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp giúp phòng bệnh tiểu đường.',
      options: [
        'Hạn chế đồ ngọt, nước ngọt có đường',
        'Tập thể dục thường xuyên',
        'Giữ cân nặng hợp lí',
        'Ăn thật nhiều bánh kẹo',
        'Ngồi xem điện thoại cả ngày',
      ],
      answers: [0, 1, 2],
      hints: ['Biện pháp nào giúp đường huyết không tăng cao kéo dài?'],
      solution:
        'Hạn chế đồ ngọt, tập thể dục và giữ cân nặng hợp lí giúp phòng tiểu đường. Ăn nhiều bánh kẹo, ít vận động làm tăng nguy cơ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tuyến với vị trí của nó trong cơ thể.',
      left: ['Tuyến yên', 'Tuyến giáp', 'Tuyến trên thận', 'Tuyến tụy'],
      right: ['Ở cổ, trước khí quản', 'Sau dạ dày', 'Ở nền sọ', 'Trên hai quả thận'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Tên "trên thận" đã gợi ý vị trí của tuyến.'],
      solution:
        'Tuyến yên ở nền sọ; tuyến giáp ở cổ; tuyến trên thận trên hai quả thận; tuyến tụy sau dạ dày.',
    },
    {
      type: 'choice',
      prompt:
        'Khi bất ngờ gặp một con chó dữ, tim em đập nhanh, thở gấp. Hormone nào chủ yếu gây ra phản ứng này?',
      options: ['Insulin', 'Melatonin', 'Adrenaline', 'Thyroxine'],
      answer: 2,
      hints: ['Hormone này do tuyến trên thận tiết ra khi căng thẳng, sợ hãi.'],
      solution:
        'Adrenaline của tuyến trên thận làm tim đập nhanh, tăng huyết áp, tăng đường huyết, giúp cơ thể sẵn sàng phản ứng.',
    },
  ],
  takeaways: [
    'Tuyến nội tiết tiết hormone thẳng vào máu; hormone có hoạt tính cao, tác động lên cơ quan đích xác định.',
    'Các tuyến nội tiết chính: tuyến yên, tuyến tùng, tuyến giáp, tuyến cận giáp, tuyến ức, tuyến tụy, tuyến trên thận, tuyến sinh dục; tuyến tụy và tuyến sinh dục vừa nội tiết vừa ngoại tiết.',
    'Insulin (giảm) và glucagon (tăng) của tuyến tụy giữ đường huyết ổn định.',
    'Tiểu đường do thiếu insulin hoặc tế bào kém đáp ứng insulin; bướu cổ do thiếu iodine. Phòng bệnh: ăn uống hợp lí, dùng muối iodine, tập thể dục.',
  ],
};

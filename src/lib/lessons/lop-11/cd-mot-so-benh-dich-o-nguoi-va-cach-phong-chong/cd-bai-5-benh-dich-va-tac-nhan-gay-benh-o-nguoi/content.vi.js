/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bệnh dịch là sự lây lan nhanh chóng của một bệnh truyền nhiễm trong cộng đồng. Tác nhân gây bệnh dịch ở người là virus, vi khuẩn, nấm và kí sinh trùng; ví dụ cúm và COVID-19 do virus, tả do vi khuẩn, sốt rét do kí sinh trùng Plasmodium.',
  intro:
    'Mùa đông xuân, chỉ trong vài tuần, cả lớp em có thể lần lượt bị cúm. Đại dịch COVID-19 từ năm 2020 lan khắp các châu lục. Vì sao một bệnh có thể lây sang nhiều người nhanh như vậy, và những sinh vật nhỏ bé nào gây ra các bệnh dịch đó?',
  objectives: [
    'Nêu được khái niệm bệnh truyền nhiễm, bệnh dịch và đại dịch.',
    'Kể được các nhóm tác nhân gây bệnh dịch ở người: virus, vi khuẩn, nấm, kí sinh trùng, kèm ví dụ.',
    'Trình bày được tác nhân, triệu chứng và hậu quả của một số bệnh dịch như cúm và sốt rét.',
    'Giải thích được vì sao các bệnh do vi sinh vật, kí sinh trùng gây ra dễ phát triển thành dịch.',
  ],
  sections: [
    {
      heading: 'Khái niệm bệnh dịch',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bệnh truyền nhiễm',
          text: 'Bệnh truyền nhiễm là bệnh do virus, vi khuẩn, vi nấm hoặc kí sinh trùng gây ra, có khả năng lây truyền từ người này sang người khác hoặc từ động vật sang người.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bệnh dịch',
          text: 'Bệnh dịch là sự lây lan nhanh chóng của một bệnh truyền nhiễm: bệnh xuất hiện ở nhiều người trong một cộng đồng hoặc một vùng trong một thời gian ngắn, thường từ hai tuần trở xuống.',
        },
        {
          type: 'table',
          caption: 'Các mức lây lan của một bệnh truyền nhiễm',
          head: ['Mức', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Bệnh truyền nhiễm',
              'Bệnh do mầm bệnh gây ra, lây được từ người sang người hoặc từ động vật sang người; có thể chỉ xuất hiện lẻ tẻ',
              'Vài ca thuỷ đậu rải rác trong năm ở một xã',
            ],
            [
              'Dịch',
              'Bệnh lây lan mạnh trong một cộng đồng, số ca tăng nhanh, vượt khỏi tầm kiểm soát ở địa phương',
              'Dịch sốt xuất huyết ở một thành phố vào mùa mưa',
            ],
            [
              'Đại dịch',
              'Dịch bệnh mới lan rộng sang nhiều châu lục hoặc khắp thế giới; do Tổ chức Y tế Thế giới (WHO) tuyên bố',
              'Đại dịch COVID-19 (WHO tuyên bố tháng 3 năm 2020)',
            ],
          ],
        },
        { type: 'widget', name: 'muc-do' },
      ],
    },
    {
      heading: 'Tác nhân gây bệnh dịch',
      blocks: [
        {
          type: 'p',
          text: 'Tác nhân gây bệnh (mầm bệnh) là những sinh vật hoặc thực thể nhỏ bé xâm nhập vào cơ thể, sinh sản ở đó và gây hại. Có bốn nhóm tác nhân gây bệnh dịch ở người.',
        },
        {
          type: 'table',
          caption: 'Các nhóm tác nhân gây bệnh dịch ở người',
          head: ['Nhóm', 'Đặc điểm', 'Ví dụ bệnh'],
          rows: [
            [
              'Virus',
              'Chưa có cấu tạo tế bào, kí sinh nội bào bắt buộc; nhân lên trong tế bào chủ và phá huỷ tế bào. Kháng sinh không có tác dụng với virus',
              'Cúm, COVID-19, sởi, sốt xuất huyết, tay chân miệng, AIDS',
            ],
            [
              'Vi khuẩn',
              'Sinh vật đơn bào nhân sơ; nhiều loài tiết độc tố. Điều trị bằng kháng sinh, nhưng vi khuẩn có thể kháng kháng sinh',
              'Tả, lao, lị trực khuẩn, dịch hạch, bạch hầu',
            ],
            [
              'Nấm',
              'Vi nấm (nấm men, nấm sợi) gây bệnh ở da, niêm mạc, phổi; dễ gây bệnh ở người có sức đề kháng yếu',
              'Hắc lào, lang ben, tưa miệng (nấm Candida)',
            ],
            [
              'Kí sinh trùng',
              'Động vật nguyên sinh (trùng sốt rét, trùng kiết lị), giun sán, hoặc kí sinh ngoài da (cái ghẻ); sống nhờ và lấy chất dinh dưỡng của người',
              'Sốt rét, lị amip, ghẻ',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Khả năng gây bệnh của mầm bệnh phụ thuộc vào cả mầm bệnh lẫn cơ thể người:',
        },
        {
          type: 'list',
          items: [
            'Yếu tố độc lực: các đặc tính giúp mầm bệnh gây hại cho vật chủ, ví dụ độc tố của vi khuẩn tả.',
            'Sự bám dính: mầm bệnh bám được vào tế bào, mô của vật chủ (niêm mạc ruột, đường hô hấp) mới sinh sản và gây bệnh được.',
            'Sự đề kháng kháng sinh: vi khuẩn kháng thuốc sống sót sau điều trị và tiếp tục lây lan.',
            'Khiếm khuyết trong cơ chế bảo vệ của vật chủ: người suy giảm miễn dịch, trẻ nhỏ, người già dễ mắc bệnh và bệnh nặng hơn.',
          ],
        },
      ],
    },
    {
      heading: 'Một số bệnh dịch ở người',
      blocks: [
        {
          type: 'table',
          caption: 'Tác nhân, triệu chứng và hậu quả của hai bệnh dịch',
          head: ['Nội dung', 'Bệnh cúm', 'Bệnh sốt rét'],
          rows: [
            [
              'Tác nhân',
              'Virus cúm, gồm các chủng A, B, C, D',
              'Kí sinh trùng Plasmodium; ở nước ta có P. falciparum, P. vivax và P. malariae',
            ],
            [
              'Lây truyền',
              'Qua đường hô hấp (giọt bắn khi ho, hắt hơi)',
              'Muỗi Anopheles cái đốt người bệnh rồi đốt người lành',
            ],
            [
              'Triệu chứng',
              'Sốt, ớn lạnh, đau đầu, chóng mặt, đau mỏi cơ, mệt mỏi, có thể buồn nôn, tiêu chảy',
              'Sốt, rét run, đau đầu, đau bụng, mệt mỏi, thở nhanh, đau cơ khớp',
            ],
            [
              'Hậu quả',
              'Viêm phổi, suy hô hấp; nguy hiểm cho phụ nữ mang thai; hội chứng Reye hiếm gặp nhưng rất nặng ở trẻ $2$ đến $16$ tuổi',
              'Sốt rét thể não (hôn mê, co giật), phù phổi, suy thận, suy gan, thiếu máu, hạ đường huyết; có thể tử vong',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đừng chủ quan với cúm',
          text: 'Triệu chứng cúm dễ nhầm với cảm lạnh thông thường nên nhiều người chủ quan, không nghỉ ngơi và điều trị kịp thời, vừa dễ biến chứng vừa làm bệnh lây sang người xung quanh.',
        },
      ],
    },
    {
      heading: 'Vì sao các bệnh này dễ phát triển thành dịch?',
      blocks: [
        {
          type: 'list',
          items: [
            'Nhiều mầm bệnh được thải ra môi trường (qua giọt bắn, phân, máu) và tồn tại ngoài cơ thể một thời gian; gặp điều kiện thuận lợi, chúng sinh sản và lây sang nhiều người.',
            'Mầm bệnh lây từ người sang người hoặc từ động vật sang người, nhiều bệnh lây qua những tiếp xúc rất bình thường hằng ngày.',
            'Bệnh có thời gian ủ bệnh: người đã nhiễm nhưng chưa có triệu chứng vẫn đi lại và làm lây bệnh.',
            'Có người mang mầm bệnh mà không có triệu chứng: đây là nguồn lây khó phát hiện.',
            'Nhiều virus biến chủng nhanh, làm cho việc phòng bệnh bằng vắc-xin và điều trị khó khăn hơn.',
          ],
        },
      ],
    },
    {
      heading: 'Hoạt động: Lập hồ sơ một bệnh dịch',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: mỗi nhóm $3$ đến $4$ bạn lập một "hồ sơ" về một bệnh dịch từng xuất hiện ở địa phương (cúm, sốt xuất huyết, tay chân miệng, tả, sốt rét...).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tìm thông tin từ sách, trang web của Bộ Y tế, trạm y tế xã, phường; ghi rõ nguồn.',
            'Ghi tên bệnh, tác nhân gây bệnh và nhóm của tác nhân (virus, vi khuẩn, nấm, kí sinh trùng).',
            'Mô tả triệu chứng, biến chứng và những đối tượng dễ mắc bệnh nặng.',
            'Tìm hiểu bệnh đã từng thành dịch ở địa phương vào thời gian nào, với khoảng bao nhiêu ca.',
            'Giải thích vì sao bệnh này dễ phát triển thành dịch.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: một trang hồ sơ (hoặc một slide) có hình ảnh minh hoạ, trình bày trước lớp trong $3$ phút. Lưu lại hồ sơ để dùng cho dự án điều tra bệnh dịch ở cuối chuyên đề.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thẻ tác nhân gây bệnh',
    instruction:
      'Chọn một thẻ bệnh, rồi chọn nhóm tác nhân gây ra bệnh đó: virus, vi khuẩn, nấm hay kí sinh trùng. Mỗi lần đặt, em sẽ thấy tên tác nhân cụ thể và cách bệnh lây.',
  },
  examples: [
    {
      problem:
        'Đầu tháng $7$, một phường có $3$ ca sốt xuất huyết. Hai tuần sau, phường ghi nhận thêm $120$ ca và số ca vẫn đang tăng nhanh. Tình hình này là bệnh lẻ tẻ, dịch hay đại dịch?',
      steps: [
        'Sốt xuất huyết là bệnh truyền nhiễm do virus Dengue, lây từ người bệnh sang người lành qua muỗi vằn.',
        'Trong khoảng hai tuần, số ca tăng từ $3$ lên hơn $120$ ca trong cùng một cộng đồng: bệnh lây lan nhanh, ở nhiều người, trong thời gian ngắn.',
        'Bệnh chỉ lan trong một địa phương, không lan sang nhiều châu lục, và không do WHO tuyên bố nên không phải đại dịch.',
      ],
      answer: 'Đây là một dịch sốt xuất huyết ở phường đó.',
    },
    {
      problem:
        'Bạn An bị cúm, sốt và đau mỏi người. Mẹ bạn định mua kháng sinh cho An uống để khỏi nhanh. Em có đồng ý không? Giải thích.',
      steps: [
        'Cúm do virus cúm gây ra.',
        'Kháng sinh tác động lên vi khuẩn (thành tế bào, ribosome của vi khuẩn); virus không có cấu tạo tế bào nên kháng sinh không có tác dụng với virus.',
        'Dùng kháng sinh không đúng chỉ định còn làm vi khuẩn trong cơ thể quen thuốc, dẫn đến kháng kháng sinh.',
        'Người bệnh cúm cần nghỉ ngơi, uống đủ nước, hạ sốt và đi khám khi sốt cao, khó thở; chỉ dùng thuốc theo chỉ định của bác sĩ.',
      ],
      answer:
        'Không đồng ý: kháng sinh không diệt được virus cúm; chỉ dùng thuốc theo chỉ định của bác sĩ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về bệnh truyền nhiễm?',
      options: [
        'Là bệnh do virus, vi khuẩn, vi nấm hoặc kí sinh trùng gây ra, có thể lây từ người sang người hoặc từ động vật sang người',
        'Là mọi bệnh xuất hiện ở nhiều người cùng lúc, kể cả bệnh di truyền',
        'Là bệnh chỉ lây từ động vật sang người, không lây giữa người với người',
        'Là bệnh do ăn uống thiếu chất gây ra',
      ],
      answer: 0,
      hints: ['Bệnh truyền nhiễm phải có một mầm bệnh có thể truyền đi.'],
      solution:
        'Bệnh truyền nhiễm do virus, vi khuẩn, vi nấm hoặc kí sinh trùng gây ra và có khả năng lây từ người sang người hoặc từ động vật sang người. Bệnh di truyền, bệnh do thiếu chất không lây.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tình huống với mức lây lan phù hợp.',
      left: [
        'Một xã có vài ca thuỷ đậu rải rác trong năm',
        'Một thành phố có hàng nghìn ca sốt xuất huyết trong vài tuần mùa mưa',
        'Một bệnh mới lan ra nhiều châu lục, WHO tuyên bố tình trạng toàn cầu',
      ],
      right: ['Bệnh truyền nhiễm xuất hiện lẻ tẻ', 'Dịch', 'Đại dịch'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['So sánh số ca, thời gian và phạm vi lan của bệnh trong mỗi tình huống.'],
      solution:
        'Vài ca rải rác là bệnh truyền nhiễm xuất hiện lẻ tẻ; nhiều ca trong thời gian ngắn ở một cộng đồng là dịch; lan ra nhiều châu lục, do WHO tuyên bố là đại dịch.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bệnh với tác nhân gây bệnh.',
      left: ['Cúm', 'Tả', 'Sốt rét', 'Tưa miệng'],
      right: ['Virus', 'Vi khuẩn', 'Kí sinh trùng (động vật nguyên sinh)', 'Nấm'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Nhớ lại: phẩy khuẩn tả, trùng sốt rét Plasmodium, nấm men Candida.'],
      solution:
        'Cúm do virus cúm; tả do phẩy khuẩn tả (vi khuẩn); sốt rét do Plasmodium (kí sinh trùng thuộc động vật nguyên sinh); tưa miệng do nấm Candida.',
    },
    {
      type: 'multi',
      prompt: 'Những bệnh nào dưới đây do virus gây ra?',
      options: ['COVID-19', 'Sốt xuất huyết', 'Sởi', 'Lao phổi', 'Sốt rét', 'Tay chân miệng'],
      answers: [0, 1, 2, 5],
      hints: ['Lao do trực khuẩn; sốt rét do trùng Plasmodium.'],
      solution:
        'COVID-19 (virus SARS-CoV-2), sốt xuất huyết (virus Dengue), sởi (virus sởi) và tay chân miệng (enterovirus) do virus. Lao phổi do vi khuẩn, sốt rét do kí sinh trùng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao kháng sinh không dùng để chữa bệnh do virus như cúm?',
      options: [
        'Virus chưa có cấu tạo tế bào, nhân lên bên trong tế bào chủ, nên kháng sinh (tác động lên cấu trúc tế bào vi khuẩn) không diệt được virus',
        'Virus quá lớn nên thuốc không ngấm vào được',
        'Cúm tự khỏi nên không bao giờ cần thuốc',
        'Kháng sinh chỉ dùng cho bệnh của động vật',
      ],
      answer: 0,
      hints: [
        'Kháng sinh nhắm vào thành tế bào, ribosome... của vi khuẩn. Virus có những cấu trúc đó không?',
      ],
      solution:
        'Virus không có cấu tạo tế bào và nhân lên bên trong tế bào người, nên kháng sinh không tác động được. Dùng kháng sinh sai chỉ định còn gây kháng kháng sinh.',
    },
    {
      type: 'text',
      prompt: 'Bệnh sốt rét do kí sinh trùng thuộc chi nào gây ra? (Viết tên chi bằng chữ Latin.)',
      accept: ['Plasmodium', 'chi Plasmodium'],
      hints: ['Chi này có các loài P. falciparum, P. vivax, P. malariae...'],
      solution:
        'Sốt rét do kí sinh trùng thuộc chi Plasmodium gây ra, được muỗi Anopheles cái truyền từ người bệnh sang người lành.',
    },
    {
      type: 'multi',
      prompt:
        'Những lí do nào khiến các bệnh do vi sinh vật, kí sinh trùng gây ra dễ phát triển thành dịch?',
      options: [
        'Mầm bệnh được thải ra môi trường và tồn tại ngoài cơ thể một thời gian',
        'Có thời gian ủ bệnh: người đã nhiễm nhưng chưa có triệu chứng vẫn lây cho người khác',
        'Có người mang mầm bệnh không triệu chứng',
        'Nhiều virus biến chủng nhanh',
        'Mầm bệnh chỉ sống được trong cơ thể một người duy nhất',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Nghĩ về những điều làm cho việc phát hiện và ngăn mầm bệnh trở nên khó khăn.'],
      solution:
        'Mầm bệnh tồn tại ngoài môi trường, người trong thời gian ủ bệnh và người mang mầm bệnh không triệu chứng vẫn làm lây bệnh, virus biến chủng nhanh khiến phòng và chữa khó hơn. Nếu mầm bệnh chỉ sống trong một người thì không thể thành dịch.',
    },
    {
      type: 'choice',
      prompt: 'Biến chứng nào là của bệnh sốt rét nặng?',
      options: [
        'Sốt rét thể não: hồng cầu nhiễm kí sinh trùng làm tắc mạch máu nhỏ ở não, gây co giật, hôn mê',
        'Hội chứng Reye ở trẻ $2$ đến $16$ tuổi',
        'Mất khứu giác kéo dài',
        'Nổi mụn nước ở tay, chân và miệng',
      ],
      answer: 0,
      hints: ['Plasmodium kí sinh trong hồng cầu người.'],
      solution:
        'Plasmodium kí sinh và phá huỷ hồng cầu; hồng cầu nhiễm kí sinh trùng có thể làm tắc mạch máu nhỏ ở não gây sốt rét thể não. Hội chứng Reye là biến chứng hiếm của cúm; mụn nước ở tay, chân, miệng là dấu hiệu bệnh tay chân miệng.',
    },
  ],
  takeaways: [
    'Bệnh truyền nhiễm do virus, vi khuẩn, vi nấm, kí sinh trùng gây ra và lây từ người sang người hoặc từ động vật sang người.',
    'Bệnh dịch là sự lây lan nhanh của một bệnh truyền nhiễm trong cộng đồng; đại dịch là dịch lan ra nhiều châu lục, do WHO tuyên bố.',
    'Cúm, COVID-19, sốt xuất huyết do virus; tả, lao do vi khuẩn; hắc lào, tưa miệng do nấm; sốt rét, lị amip, ghẻ do kí sinh trùng.',
    'Bệnh dễ thành dịch vì mầm bệnh tồn tại ngoài môi trường, có thời gian ủ bệnh, có người mang mầm bệnh không triệu chứng và virus biến chủng nhanh.',
  ],
};

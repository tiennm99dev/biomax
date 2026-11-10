/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành đếm nhịp tim lúc nghỉ và ngay sau vận động, đo huyết áp bằng máy đo điện tử, và các thí nghiệm trên tim ếch về tính tự động của tim, tác dụng của dây thần kinh và adrenaline; ghi kết quả và viết báo cáo.',
  intro:
    'Đặt ba ngón tay lên cổ tay, em sẽ cảm thấy những nhịp đập đều đặn: đó là nhịp tim truyền theo thành động mạch. Chạy tại chỗ hai phút rồi đếm lại, nhịp ấy thay đổi thế nào? Bài này em tự đo nhịp tim, huyết áp và tìm hiểu tim ếch để kiểm chứng những điều đã học ở bài Tuần hoàn ở động vật.',
  objectives: [
    'Đếm được nhịp tim ở cổ tay lúc nghỉ và ngay sau vận động; giải thích được sự thay đổi.',
    'Đo được huyết áp bằng máy đo điện tử và đánh giá được tình trạng huyết áp.',
    'Mô tả và giải thích được kết quả thí nghiệm trên tim ếch: tính tự động của tim, tác dụng của dây thần kinh và adrenaline.',
    'Ghi, xử lí số liệu và viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: đồng hồ bấm giây, máy đo huyết áp điện tử; bộ đồ mổ (kéo, dao mổ, kẹp, kim mũi mác), khay mổ, ghim, bông thấm nước, móc thuỷ tinh, chỉ khâu, máy kích thích điện, nguồn điện $6$ V, cốc thuỷ tinh $250$ mL.',
            'Hoá chất: dung dịch sinh lí dành cho động vật biến nhiệt; dung dịch sinh lí có adrenaline nồng độ $1/50\\,000$ hoặc $1/100\\,000$.',
            'Mẫu vật: ếch.',
          ],
        },
      ],
    },
    {
      heading: 'Đếm nhịp tim lúc nghỉ và sau vận động',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Ngửa bàn tay người được đếm, đặt ba ngón tay (trỏ, giữa, áp út) lên rãnh quay ở cổ tay, phía ngón cái, ấn nhẹ để cảm nhận mạch đập.',
            'Ngồi nghỉ yên lặng, đếm số nhịp trong $1$ phút (hoặc đếm trong $15$ s rồi nhân $4$). Ghi kết quả.',
            'Vận động mạnh trong thời gian ngắn: chạy tại chỗ khoảng $2$ phút hoặc đứng lên ngồi xuống liên tục.',
            'Đếm ngay số nhịp tim sau khi dừng vận động. Ghi kết quả.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao bắt mạch ở cổ tay lại biết nhịp tim?',
          text: 'Ở cổ tay có động mạch quay nằm sát da. Mỗi lần tim co, máu được đẩy vào động mạch thành từng đợt, làm thành động mạch dãn ra rồi co lại nhịp nhàng theo chu kì tim. Mỗi nhịp mạch ứng với một lần tâm thất co.',
        },
        {
          type: 'p',
          text: 'Ngay sau vận động, cơ tiêu thụ nhiều $\\mathrm{O_2}$, thải nhiều $\\mathrm{CO_2}$, pH máu giảm. Thụ thể hoá học ở cung động mạch chủ và xoang động mạch cảnh báo về trung khu điều hoà tim mạch ở hành não, dây thần kinh giao cảm làm tim đập nhanh, mạnh hơn, đưa nhiều máu giàu $\\mathrm{O_2}$ đến cơ và thải $\\mathrm{CO_2}$. Khi nghỉ, nhịp tim giảm dần về mức cũ.',
        },
      ],
    },
    {
      heading: 'Đo huyết áp bằng máy đo điện tử',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Người được đo ngồi trên ghế, tay duỗi trên mặt bàn sao cho cánh tay ngang với vị trí của tim; kéo tay áo lên sát nách.',
            'Quấn túi khí (vòng bít) vừa đủ chặt quanh bắp tay, phía trên khuỷu tay khoảng $1$ cm.',
            'Bấm nút khởi động; máy tự bơm khí rồi xả khí. Ngồi yên, không nói chuyện trong khi đo.',
            'Đọc trên màn hình huyết áp tối đa (tâm thu), huyết áp tối thiểu (tâm trương) và nhịp tim. Nếu màn hình hiện "Err" thì đo lại.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Để số đo chính xác',
          text: 'Người vừa đi từ nơi khác đến cần ngồi nghỉ vài phút; không căng thẳng, không nói chuyện khi đo; giữa hai lần đo cách nhau khoảng $3$ phút. Vận động hay căng thẳng đều làm huyết áp tăng. Máy điện tử có sai số khoảng $5\\%$.',
        },
        {
          type: 'table',
          caption: 'Đánh giá huyết áp lúc nghỉ ở người trưởng thành',
          head: ['Tình trạng', 'Huyết áp tối đa', 'Huyết áp tối thiểu'],
          rows: [
            ['Huyết áp thấp', 'dưới $90$ mmHg', 'hoặc dưới $60$ mmHg'],
            ['Bình thường', 'từ $90$ đến dưới $140$ mmHg', 'và từ $60$ đến dưới $90$ mmHg'],
            ['Cao huyết áp', 'từ $140$ mmHg trở lên', 'hoặc từ $90$ mmHg trở lên'],
          ],
        },
        { type: 'widget', name: 'huyet-ap' },
      ],
    },
    {
      heading: 'Thí nghiệm trên tim ếch',
      blocks: [
        {
          type: 'p',
          text: 'Huỷ tuỷ sống ếch để ếch không cử động mà tim vẫn hoạt động, ghim ếch nằm ngửa trên khay mổ, cắt da và thành ngực, mở màng tim để lộ tim. Tim ếch có ba ngăn (hai tâm nhĩ, một tâm thất); xoang tĩnh mạch nằm phía sau tâm nhĩ phải, là nơi khởi phát nhịp tim ở ếch.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tính tự động của tim: đếm nhịp tim trong $1$ phút. Buộc một sợi chỉ thắt chặt giữa xoang tĩnh mạch và tâm nhĩ, đếm nhịp đập của xoang tĩnh mạch và của tâm thất.',
            'Tác dụng của dây thần kinh: tìm dây thần kinh hỗn hợp (gồm cả sợi giao cảm và sợi đối giao cảm) chạy song song với mạch máu lớn, vùng góc hàm và chi trước, tách khỏi mạch máu, đặt lên điện cực. Đếm nhịp tim lúc bình thường, kích thích khoảng $5$ s, đếm nhịp tim trong và sau khi kích thích.',
            'Tác dụng của adrenaline: cắt các mạch máu ra vào tim, giữ lại xoang tĩnh mạch, lấy tim ra (tim rời) đặt vào cốc $100$ mL dung dịch sinh lí, đếm nhịp tim. Thay bằng dung dịch sinh lí có adrenaline, đếm lại.',
          ],
        },
        { type: 'widget', name: 'tim-ech' },
        {
          type: 'table',
          caption: 'Kết quả và giải thích',
          head: ['Thí nghiệm', 'Kết quả', 'Giải thích'],
          rows: [
            [
              'Thắt chỉ giữa xoang tĩnh mạch và tâm nhĩ',
              'Xoang tĩnh mạch vẫn đập; tâm thất ngừng đập một lúc rồi đập lại chậm hơn',
              'Tim có tính tự động; xung từ xoang không truyền xuống, phần dưới tự phát xung nhưng chậm hơn',
            ],
            [
              'Kích thích dây thần kinh',
              'Tim đập chậm lại, có thể ngừng ở thì dãn; thôi kích thích thì tim đập lại dần',
              'Sợi đối giao cảm làm giảm nhịp và lực co tim',
            ],
            [
              'Adrenaline',
              'Tim rời đập nhanh hơn, co mạnh hơn',
              'Adrenaline làm tăng nhịp tim và lực co cơ tim',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao dùng tim rời khi thử adrenaline?',
          text: 'Tim còn trong cơ thể chịu sự điều hoà của dây thần kinh và các chất trong máu. Tách tim ra loại bỏ các yếu tố đó, nên thay đổi nhịp tim chỉ còn do adrenaline.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Báo cáo gồm mục đích, kết quả kèm giải thích, và trả lời câu hỏi. Ghi số đo thật của nhóm; mỗi dấu … là một ô cần điền.',
        },
        {
          type: 'table',
          caption: 'Nhịp tim và huyết áp của các bạn trong nhóm',
          head: [
            'Họ tên',
            'Nhịp tim lúc nghỉ (lần/phút)',
            'Nhịp tim sau vận động (lần/phút)',
            'Huyết áp (mmHg)',
          ],
          rows: [
            ['…', '…', '…', '…/…'],
            ['…', '…', '…', '…/…'],
            ['…', '…', '…', '…/…'],
          ],
        },
        {
          type: 'list',
          items: [
            'Vì sao có thể đếm nhịp tim ở cổ tay?',
            'Vì sao khi đo huyết áp cần tránh căng thẳng, không nói chuyện, và phải nghỉ vài phút nếu vừa đi từ nơi khác đến?',
            'Vì sao phải huỷ tuỷ sống ếch trong thí nghiệm về tính tự động và tác dụng của dây thần kinh?',
            'Vì sao phải dùng tim rời khi tìm hiểu tác dụng của adrenaline?',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Sổ ghi nhịp tim của nhóm',
    instruction:
      'Chọn thời gian đếm mạch, nhập số nhịp mỗi bạn đếm được lúc nghỉ và ngay sau vận động. Bảng tự đổi ra lần/phút và vẽ biểu đồ cột kép để so sánh. Số liệu ban đầu là số liệu mẫu đếm trong $15$ s; xoá đi để nhập số đo của nhóm em.',
  },
  examples: [
    {
      problem:
        'Lúc nghỉ, Lan đếm được $19$ nhịp mạch trong $15$ s. Ngay sau khi chạy tại chỗ $2$ phút, Lan đếm được $32$ nhịp trong $15$ s. Tính nhịp tim lúc nghỉ, sau vận động và nhịp tim tăng thêm bao nhiêu phần trăm.',
      steps: [
        '$1$ phút $= 60$ s gấp $4$ lần $15$ s, nên nhân số nhịp đếm được với $4$.',
        'Lúc nghỉ: $19 \\cdot 4 = 76$ lần/phút. Sau vận động: $32 \\cdot 4 = 128$ lần/phút.',
        'Tăng thêm $128 - 76 = 52$ lần/phút, tức $52 : 76 \\cdot 100\\% \\approx 68\\%$.',
        'Giải thích: cơ hoạt động mạnh cần nhiều $\\mathrm{O_2}$, thải nhiều $\\mathrm{CO_2}$; thần kinh giao cảm làm tim đập nhanh, mạnh hơn.',
      ],
      answer: 'Lúc nghỉ $76$ lần/phút, sau vận động $128$ lần/phút, tăng khoảng $68\\%$.',
    },
    {
      problem:
        'Máy đo huyết áp của ba bạn hiện: Minh $118/76$, Hoa $145/88$, Tùng $86/58$ (mmHg; số trước là huyết áp tối đa). Đánh giá huyết áp của từng bạn.',
      steps: [
        'Bình thường: tối đa từ $90$ đến dưới $140$ mmHg và tối thiểu từ $60$ đến dưới $90$ mmHg.',
        'Minh: $118$ và $76$ đều trong khoảng bình thường.',
        'Hoa: tối đa $145 \\geq 140$, nên là cao huyết áp (dù tối thiểu $88$ vẫn dưới $90$).',
        'Tùng: tối đa $86 < 90$ và tối thiểu $58 < 60$, nên huyết áp thấp.',
        'Một lần đo chưa đủ để kết luận bệnh: cần nghỉ ngơi, đo lại nhiều lần.',
      ],
      answer: 'Minh bình thường, Hoa cao huyết áp, Tùng huyết áp thấp.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Một bạn đếm được $21$ nhịp mạch trong $15$ s. Nhịp tim của bạn đó là bao nhiêu lần/phút?',
      answer: 84,
      unit: 'lần/phút',
      hints: ['$60$ s gấp mấy lần $15$ s?'],
      solution: '$21 \\cdot 4 = 84$ lần/phút.',
    },
    {
      type: 'number',
      prompt: 'Đếm mạch trong $30$ s được $36$ nhịp. Nhịp tim là bao nhiêu lần/phút?',
      answer: 72,
      unit: 'lần/phút',
      hints: ['Nhân số nhịp với $60 : 30$.'],
      solution: '$36 \\cdot 2 = 72$ lần/phút.',
    },
    {
      type: 'number',
      prompt:
        'Nhịp tim lúc nghỉ $70$ lần/phút, ngay sau vận động $119$ lần/phút. Nhịp tim tăng bao nhiêu phần trăm so với lúc nghỉ?',
      answer: 70,
      tolerance: 0.5,
      unit: '%',
      hints: ['Tính phần tăng rồi chia cho nhịp lúc nghỉ.'],
      solution: 'Tăng $119 - 70 = 49$ lần/phút; $49 : 70 = 0{,}7 = 70\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao có thể đếm nhịp tim bằng cách bắt mạch ở cổ tay?',
      options: [
        'Mỗi lần tim co đẩy máu vào động mạch làm thành động mạch quay ở cổ tay dãn ra theo nhịp tim',
        'Ở cổ tay có một quả tim phụ',
        'Tĩnh mạch ở cổ tay có van đóng mở theo nhịp',
        'Máu ở mao mạch cổ tay chảy nhanh nhất',
      ],
      answer: 0,
      hints: ['Mạch đập là dao động của loại mạch nào, nằm sát da?'],
      solution:
        'Động mạch quay nằm sát da ở cổ tay; mỗi lần tâm thất co, máu được đẩy vào động mạch thành đợt, thành mạch dãn ra theo nhịp tim.',
    },
    {
      type: 'choice',
      prompt: 'Ngay sau khi chạy tại chỗ $2$ phút, nhịp tim tăng chủ yếu vì sao?',
      options: [
        'Cơ cần nhiều $\\mathrm{O_2}$, thải nhiều $\\mathrm{CO_2}$; thần kinh giao cảm làm tim đập nhanh, mạnh',
        'Dây đối giao cảm được kích thích mạnh',
        'Huyết áp giảm mạnh khi chạy',
        'Tim nghỉ nhiều hơn khi vận động',
      ],
      answer: 0,
      hints: ['Hoạt động của cơ làm thay đổi nồng độ khí nào trong máu?'],
      solution:
        '$\\mathrm{CO_2}$ tăng, pH máu giảm; thụ thể hoá học báo về hành não, dây giao cảm làm tim đập nhanh, mạnh hơn để cung cấp $\\mathrm{O_2}$ cho cơ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước đo huyết áp bằng máy điện tử.',
      items: [
        'Bấm nút khởi động, ngồi yên chờ máy bơm và xả khí',
        'Ngồi nghỉ vài phút, đặt tay trên bàn ngang với tim',
        'Đọc huyết áp tối đa, tối thiểu và nhịp tim trên màn hình',
        'Quấn túi khí vừa đủ chặt quanh bắp tay',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Túi khí phải quấn xong trước khi máy bơm khí.'],
      solution:
        'Ngồi nghỉ, đặt tay ngang tim; quấn túi khí; bấm nút khởi động; đọc kết quả trên màn hình.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi số đo huyết áp lúc nghỉ (mmHg) của người trưởng thành với đánh giá đúng.',
      left: ['$115/75$', '$150/95$', '$85/55$'],
      right: ['Cao huyết áp', 'Bình thường', 'Huyết áp thấp', 'Số đo không hợp lí'],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 2],
      ],
      hints: ['Bình thường: tối đa $90$ đến dưới $140$, tối thiểu $60$ đến dưới $90$.'],
      solution:
        '$115/75$: bình thường. $150/95$: cả hai số vượt ngưỡng, cao huyết áp. $85/55$: cả hai dưới ngưỡng, huyết áp thấp.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào giúp số đo huyết áp chính xác?',
      options: [
        'Ngồi nghỉ vài phút trước khi đo nếu vừa đi từ nơi khác đến',
        'Không nói chuyện trong khi đo',
        'Đặt cánh tay ngang với vị trí của tim',
        'Đo ngay sau khi chạy lên cầu thang',
        'Đo lại liên tục, không cần nghỉ giữa hai lần',
      ],
      answers: [0, 1, 2],
      hints: ['Vận động và căng thẳng làm huyết áp thay đổi thế nào?'],
      solution:
        'Nghỉ trước khi đo, giữ yên lặng, tay ngang tim; vận động làm huyết áp tăng, và giữa hai lần đo cần cách nhau khoảng $3$ phút.',
    },
    {
      type: 'choice',
      prompt:
        'Thắt chỉ giữa xoang tĩnh mạch và tâm nhĩ ếch, thấy xoang tĩnh mạch vẫn đập, tâm thất ngừng một lúc rồi đập lại chậm hơn. Kết quả này chứng tỏ điều gì?',
      options: [
        'Tim có tính tự động; nhịp tim ếch khởi phát ở xoang tĩnh mạch',
        'Tim chỉ đập khi có xung từ não',
        'Adrenaline làm tim đập chậm',
        'Tâm thất không có khả năng tự phát xung',
      ],
      answer: 0,
      hints: ['Sau khi thắt, tâm thất vẫn tự đập lại dù không nhận xung từ đâu?'],
      solution:
        'Cả xoang tĩnh mạch và phần tim dưới chỗ thắt đều tự đập: tim có tính tự động. Xoang tĩnh mạch phát nhịp nhanh nhất nên bình thường dẫn nhịp cho cả tim.',
    },
    {
      type: 'choice',
      prompt:
        'Kích thích mạnh dây thần kinh hỗn hợp (có sợi đối giao cảm) đến tim ếch thì tim thế nào?',
      options: [
        'Tim đập chậm lại, có thể ngừng ở thì dãn, thôi kích thích thì đập lại',
        'Tim đập nhanh gấp đôi',
        'Tim co cứng và ngừng hẳn',
        'Nhịp tim không thay đổi',
      ],
      answer: 0,
      hints: ['Dây đối giao cảm làm nhịp tim tăng hay giảm?'],
      solution:
        'Sợi đối giao cảm làm giảm nhịp tim, giảm lực co và tốc độ dẫn truyền; kích thích đủ mạnh làm tim ngừng ở thì dãn, rồi tim đập lại sau khi thôi kích thích.',
    },
    {
      type: 'number',
      prompt:
        'Tim rời của ếch đập $12$ nhịp trong $15$ s ở dung dịch sinh lí, và $18$ nhịp trong $15$ s ở dung dịch có adrenaline. Adrenaline làm nhịp tim tăng thêm bao nhiêu lần/phút?',
      answer: 24,
      unit: 'lần/phút',
      hints: ['Đổi cả hai số đo ra lần/phút trước khi trừ.'],
      solution:
        '$12 \\cdot 4 = 48$ lần/phút; $18 \\cdot 4 = 72$ lần/phút; tăng $72 - 48 = 24$ lần/phút.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải huỷ tuỷ sống ếch trước khi làm thí nghiệm về tính tự động của tim?',
      options: [
        'Để ếch không cử động, dễ thao tác, mà tim vẫn hoạt động',
        'Để tim ngừng đập',
        'Để tăng nhịp tim của ếch',
        'Để loại bỏ xoang tĩnh mạch',
      ],
      answer: 0,
      hints: ['Tim có cần tuỷ sống để đập không?'],
      solution:
        'Huỷ tuỷ làm ếch mất cử động nhưng không ảnh hưởng đến tim, nhờ tính tự động tim vẫn đập, thao tác thí nghiệm dễ dàng.',
    },
  ],
  takeaways: [
    'Nhịp tim đếm ở động mạch quay cổ tay; đếm trong $15$ s thì nhân $4$ để ra lần/phút.',
    'Ngay sau vận động nhịp tim tăng, do cơ cần nhiều $\\mathrm{O_2}$ và thần kinh giao cảm làm tim đập nhanh, mạnh; khi nghỉ nhịp tim giảm dần.',
    'Đo huyết áp khi đã nghỉ, tay ngang tim, không nói chuyện; người trưởng thành bình thường: tối đa $90$ đến dưới $140$ mmHg, tối thiểu $60$ đến dưới $90$ mmHg.',
    'Thắt chỉ tim ếch chứng minh tim có tính tự động; dây đối giao cảm làm tim đập chậm; adrenaline làm tim đập nhanh, mạnh.',
  ],
};

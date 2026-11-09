/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu tạo và chức năng của hệ tuần hoàn, hệ tuần hoàn hở và kín (đơn, kép), cấu tạo tim, tính tự động và chu kì tim, cấu tạo mạch máu, huyết áp, vận tốc máu, điều hoà tim mạch và phòng bệnh tim mạch.',
  intro:
    'Lấy một quả tim ếch ra khỏi cơ thể, ngâm trong dung dịch sinh lí, nó vẫn tiếp tục đập thêm một thời gian. Điều gì giữ nhịp cho tim khi không còn dây thần kinh nào nối với não? Và vì sao bác sĩ đo huyết áp ở cánh tay mà không đo ở đầu ngón tay?',
  objectives: [
    'Nêu được cấu tạo và chức năng của hệ tuần hoàn.',
    'Phân biệt được hệ tuần hoàn hở và hệ tuần hoàn kín, tuần hoàn đơn và tuần hoàn kép.',
    'Giải thích được tính tự động của tim và các pha của chu kì tim.',
    'Mô tả được cấu tạo phù hợp với chức năng của động mạch, tĩnh mạch, mao mạch.',
    'Giải thích được sự biến động của huyết áp và vận tốc máu trong hệ mạch.',
    'Nêu được cơ chế điều hoà tim mạch, một số bệnh tim mạch và biện pháp phòng.',
  ],
  sections: [
    {
      heading: 'Cấu tạo và chức năng của hệ tuần hoàn',
      blocks: [
        {
          type: 'list',
          items: [
            'Dịch tuần hoàn: máu hoặc hỗn hợp máu và dịch mô.',
            'Tim: bơm hút và đẩy máu chảy trong hệ mạch.',
            'Hệ mạch: động mạch dẫn máu từ tim đến các cơ quan; tĩnh mạch dẫn máu từ các cơ quan về tim; mao mạch nối tiểu động mạch với tiểu tĩnh mạch, là nơi trao đổi chất giữa máu và tế bào.',
          ],
        },
        {
          type: 'p',
          text: 'Chức năng: vận chuyển các chất từ bộ phận này đến bộ phận khác, đáp ứng cho các hoạt động sống của cơ thể.',
        },
      ],
    },
    {
      heading: 'Các dạng hệ tuần hoàn',
      blocks: [
        {
          type: 'table',
          head: ['Đặc điểm', 'Hệ tuần hoàn hở', 'Hệ tuần hoàn kín'],
          rows: [
            [
              'Đại diện',
              'Đa số chân khớp, một số thân mềm',
              'Giun đốt, một số thân mềm (mực, bạch tuộc), động vật có xương sống',
            ],
            ['Áp lực máu', 'Thấp', 'Cao hoặc trung bình'],
            [
              'Đường đi của máu',
              'Tim bơm máu vào động mạch, máu tràn vào khoang cơ thể, trộn với dịch mô, trao đổi chất trực tiếp với tế bào, rồi về tim qua các lỗ',
              'Máu chảy liên tục trong mạch kín: động mạch, mao mạch, tĩnh mạch, về tim; trao đổi chất với tế bào qua dịch mô',
            ],
            ['Tốc độ máu', 'Chậm, máu về tim chậm', 'Nhanh, máu về tim nhanh'],
          ],
        },
        {
          type: 'p',
          text: 'Hệ tuần hoàn kín gồm hai dạng. Tuần hoàn đơn (cá sụn, cá xương) chỉ có một vòng: máu từ tim qua mao mạch mang trao đổi khí, rồi qua mao mạch các cơ quan, mới về tim. Tuần hoàn kép (lưỡng cư, bò sát, chim, thú) có hai vòng: vòng tuần hoàn phổi trao đổi khí ở phổi và vòng tuần hoàn hệ thống trao đổi chất với tế bào các cơ quan.',
        },
      ],
    },
    {
      heading: 'Hoạt động của tim',
      blocks: [
        {
          type: 'p',
          text: 'Tim người có bốn ngăn: hai tâm nhĩ ở trên, thành mỏng, nhận máu từ tĩnh mạch; hai tâm thất ở dưới, thành dày, bơm máu đi. Thành tâm thất trái dày nhất vì bơm máu vào động mạch chủ đi khắp cơ thể (khoảng $120$ mmHg), còn tâm thất phải chỉ bơm máu lên phổi (khoảng $30$ mmHg). Van nhĩ thất (van ba lá bên phải, van hai lá bên trái) và van động mạch giúp máu chảy theo một chiều.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tính tự động của tim',
          text: 'Là khả năng tim tự co dãn nhịp nhàng không cần kích thích từ bên ngoài, nhờ hệ dẫn truyền tim gồm nút xoang nhĩ, nút nhĩ thất, bó His và mạng Purkinje. Nút xoang nhĩ tự phát xung theo chu kì; xung lan khắp hai tâm nhĩ làm tâm nhĩ co, rồi đến nút nhĩ thất, theo bó His và mạng Purkinje lan khắp hai tâm thất làm tâm thất co.',
        },
        {
          type: 'table',
          caption: 'Chu kì tim ở người trưởng thành (khoảng $0{,}8$ s)',
          head: ['Pha', 'Thời gian', 'Hoạt động'],
          rows: [
            ['Tâm nhĩ co', '$0{,}1$ s', 'Đẩy máu từ tâm nhĩ xuống tâm thất'],
            [
              'Tâm thất co',
              '$0{,}3$ s',
              'Van nhĩ thất đóng, van động mạch mở; máu vào động mạch phổi và động mạch chủ',
            ],
            ['Dãn chung', '$0{,}4$ s', 'Máu từ tĩnh mạch về tâm nhĩ và xuống tâm thất'],
          ],
        },
        {
          type: 'p',
          text: 'Mỗi phút có $60 : 0{,}8 = 75$ chu kì, tức nhịp tim khoảng $75$ lần/phút. Trong mỗi chu kì, tâm nhĩ co $0{,}1$ s và nghỉ $0{,}7$ s, tâm thất co $0{,}3$ s và nghỉ $0{,}5$ s, nên tim làm việc suốt đời mà không mỏi.',
        },
      ],
    },
    {
      heading: 'Hoạt động của hệ mạch',
      blocks: [
        {
          type: 'table',
          head: ['Mạch', 'Cấu tạo', 'Phù hợp với chức năng'],
          rows: [
            [
              'Động mạch',
              'Ba lớp, lớp mô liên kết và cơ trơn dày, nhiều sợi đàn hồi; lòng hẹp',
              'Chịu được áp lực máu lớn; cơ trơn điều chỉnh lượng máu đến cơ quan',
            ],
            [
              'Tĩnh mạch',
              'Ba lớp nhưng mỏng hơn; lòng rộng; tĩnh mạch phía dưới tim có van',
              'Giảm lực cản, chứa nhiều máu; van giữ máu chảy về tim',
            ],
            [
              'Mao mạch',
              'Một lớp tế bào biểu mô dẹt, có lỗ nhỏ; số lượng rất lớn',
              'Diện tích trao đổi khoảng $500$ đến $700\\,\\mathrm{m^2}$, trao đổi chất dễ dàng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Huyết áp',
          text: 'Là áp lực của máu tác dụng lên thành mạch. Tim co tạo huyết áp tâm thu (cực đại), tim dãn ứng với huyết áp tâm trương (cực tiểu). Ở người trưởng thành bình thường, huyết áp tâm thu khoảng $110$ đến $120$ mmHg, huyết áp tâm trương khoảng $70$ đến $80$ mmHg (đo ở động mạch cánh tay).',
        },
        {
          type: 'p',
          text: 'Huyết áp cao nhất ở động mạch chủ, giảm dần qua động mạch nhỏ, mao mạch và thấp nhất ở tĩnh mạch, do ma sát của máu với thành mạch và giữa các phân tử máu. Vận tốc máu là quãng đường máu chảy trong một giây; nó tỉ lệ nghịch với tổng tiết diện của mạch: lớn nhất ở động mạch lớn, giảm dần ở động mạch nhỏ, thấp nhất ở mao mạch (tổng tiết diện lớn nhất), rồi tăng dần từ tiểu tĩnh mạch đến tĩnh mạch lớn.',
        },
        { type: 'widget', name: 'mach-mau' },
      ],
    },
    {
      heading: 'Điều hoà tim mạch và phòng bệnh',
      blocks: [
        {
          type: 'p',
          text: 'Hoạt động tim mạch được điều hoà theo cơ chế thần kinh và thể dịch. Thụ thể áp lực ở xoang động mạch cảnh và cung động mạch chủ báo về trung khu tim mạch ở hành não. Khi huyết áp giảm, dây giao cảm tăng hoạt động: tim đập nhanh, mạnh, mạch máu nhỏ co, tuyến thượng thận tiết adrenaline và noradrenaline, huyết áp tăng trở lại. Khi huyết áp tăng, dây đối giao cảm làm tim đập chậm, mạch ngoại vi dãn, huyết áp trở về bình thường.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bệnh tim mạch',
          text: 'Cao huyết áp, xơ vữa động mạch, nhồi máu cơ tim, suy tim… do di truyền, bẩm sinh (hở van, hẹp van) hoặc lối sống (ăn nhiều chất béo gây xơ vữa động mạch). Rượu bia làm tim đập nhanh, tăng huyết áp; cao huyết áp lâu ngày làm suy tim, tổn thương mạch, có thể gây xuất huyết não.',
        },
        {
          type: 'list',
          items: [
            'Ăn uống cân đối: giảm chất béo, tăng rau quả, sữa, ngũ cốc nguyên hạt.',
            'Luyện tập thể dục đều đặn: tim khoẻ, thể tích tâm thu tăng, nhịp tim lúc nghỉ giảm (từ khoảng $75$ xuống khoảng $50$ lần/phút) mà lưu lượng tim vẫn đủ.',
            'Giữ cân nặng ổn định; không hút thuốc lá, hạn chế rượu bia; giữ tinh thần lạc quan.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Mô hình chu kì tim',
    instruction:
      'Cho tim đập (chậm $4$ lần) hoặc bấm "Sang pha tiếp" để đi từng pha: xem ngăn nào co, van nào mở, xung đi đến đâu trong hệ dẫn truyền. Rồi kéo nhịp tim lên $150$ lần/phút và xem pha nào bị rút ngắn nhiều nhất. Thời gian các pha khác $75$ lần/phút là mô hình.',
  },
  examples: [
    {
      problem: 'Một người có chu kì tim kéo dài $0{,}6$ s. Tính nhịp tim của người đó.',
      steps: [
        'Nhịp tim là số chu kì tim trong một phút ($60$ s).',
        'Nhịp tim $= 60 : 0{,}6 = 100$ lần/phút.',
      ],
      answer: '$100$ lần/phút.',
    },
    {
      problem:
        'Tổng tiết diện các mao mạch lớn gấp $1\\,000$ lần tiết diện động mạch chủ. Máu ở động mạch chủ chảy với vận tốc $400$ mm/s. Ước tính vận tốc máu ở mao mạch.',
      steps: [
        'Cùng một lượng máu chảy qua mỗi đoạn trong một giây, nên vận tốc tỉ lệ nghịch với tổng tiết diện.',
        'Tổng tiết diện tăng $1\\,000$ lần thì vận tốc giảm $1\\,000$ lần.',
        '$400 : 1\\,000 = 0{,}4$ mm/s.',
      ],
      answer: 'Khoảng $0{,}4$ mm/s: máu chảy rất chậm ở mao mạch, đủ thời gian trao đổi chất.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi loài với dạng hệ tuần hoàn của nó.',
      left: ['Châu chấu', 'Cá chép', 'Chim bồ câu'],
      right: ['Tuần hoàn kép', 'Hệ tuần hoàn hở', 'Tuần hoàn đơn', 'Không có hệ tuần hoàn'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Chân khớp có hệ tuần hoàn hở; cá chỉ có một vòng tuần hoàn.'],
      solution: 'Châu chấu: hệ tuần hoàn hở. Cá chép: tuần hoàn đơn. Chim bồ câu: tuần hoàn kép.',
    },
    {
      type: 'multi',
      prompt: 'Những đặc điểm nào là của hệ tuần hoàn kín?',
      options: [
        'Máu chảy liên tục trong mạch kín',
        'Máu chảy dưới áp lực cao hoặc trung bình',
        'Máu trao đổi chất với tế bào qua dịch mô',
        'Máu tràn vào khoang cơ thể, trộn với dịch mô',
        'Máu chảy chậm, về tim chậm',
      ],
      answers: [0, 1, 2],
      hints: ['Hai đặc điểm còn lại thuộc hệ tuần hoàn hở.'],
      solution:
        'Hệ tuần hoàn kín: máu trong mạch kín, áp lực cao hoặc trung bình, trao đổi qua dịch mô, chảy nhanh.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp đường đi của xung thần kinh trong hệ dẫn truyền tim.',
      items: ['Bó His', 'Nút nhĩ thất', 'Mạng Purkinje', 'Nút xoang nhĩ'],
      answer: [3, 1, 0, 2],
      hints: ['Xung bắt đầu ở tâm nhĩ phải và kết thúc ở thành tâm thất.'],
      solution: 'Nút xoang nhĩ, nút nhĩ thất, bó His, mạng Purkinje.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao tim lấy ra khỏi cơ thể vẫn có thể đập thêm một thời gian?',
      options: [
        'Vì tim có tính tự động nhờ hệ dẫn truyền tim',
        'Vì não vẫn gửi xung đến tim',
        'Vì máu trong tim tự co bóp',
        'Vì tim nhận adrenaline từ tuyến thượng thận',
      ],
      answer: 0,
      hints: ['Bộ phận nào của tim tự phát xung theo chu kì?'],
      solution:
        'Nút xoang nhĩ tự phát xung, hệ dẫn truyền lan xung khắp tim, nên tim co dãn tự động khi có điều kiện thích hợp.',
    },
    {
      type: 'number',
      prompt:
        'Chu kì tim của một vận động viên lúc nghỉ dài $1{,}2$ s. Nhịp tim của người đó là bao nhiêu lần/phút?',
      answer: 50,
      unit: 'lần/phút',
      hints: ['Một phút có $60$ s.'],
      solution: '$60 : 1{,}2 = 50$ lần/phút.',
    },
    {
      type: 'number',
      prompt:
        'Trong chu kì tim $0{,}8$ s, tâm thất co $0{,}3$ s. Mỗi chu kì tâm thất được nghỉ bao nhiêu giây?',
      answer: 0.5,
      tolerance: 0.001,
      unit: 's',
      hints: ['Tâm thất nghỉ trong toàn bộ thời gian nó không co.'],
      solution: '$0{,}8 - 0{,}3 = 0{,}5$ s.',
    },
    {
      type: 'number',
      prompt:
        'Nhịp tim $75$ lần/phút, mỗi lần tâm thất trái co đẩy đi $70$ mL máu. Tính lưu lượng tim (lít/phút).',
      answer: 5.25,
      tolerance: 0.001,
      unit: 'L/phút',
      hints: ['Lưu lượng tim bằng nhịp tim nhân thể tích máu mỗi lần co; đổi mL sang L.'],
      solution: '$75 \\cdot 70 = 5\\,250$ mL $= 5{,}25$ L mỗi phút.',
    },
    {
      type: 'choice',
      prompt: 'Trong hệ mạch, huyết áp thấp nhất ở đâu?',
      options: ['Tĩnh mạch chủ', 'Động mạch chủ', 'Mao mạch', 'Tiểu động mạch'],
      answer: 0,
      hints: ['Huyết áp giảm dần trên đường máu đi từ tim.'],
      solution:
        'Huyết áp giảm dần từ động mạch chủ, qua mao mạch đến tĩnh mạch; thấp nhất ở tĩnh mạch chủ, gần tim.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao máu chảy chậm nhất ở mao mạch?',
      options: [
        'Vì tổng tiết diện của mao mạch lớn nhất',
        'Vì mao mạch có thành dày nhất',
        'Vì mao mạch ở xa tim nhất',
        'Vì mao mạch có van',
      ],
      answer: 0,
      hints: ['Vận tốc máu tỉ lệ nghịch với đại lượng nào?'],
      solution:
        'Vận tốc máu tỉ lệ nghịch với tổng tiết diện mạch; tổng tiết diện mao mạch lớn nhất nên máu chảy chậm nhất, thuận lợi cho trao đổi chất.',
    },
    {
      type: 'choice',
      prompt: 'Khi huyết áp giảm đột ngột, cơ thể phản ứng thế nào?',
      options: [
        'Dây giao cảm hoạt động: tim đập nhanh, mạnh, mạch máu nhỏ co',
        'Dây đối giao cảm hoạt động: tim đập chậm, mạch dãn',
        'Tim ngừng đập để tiết kiệm máu',
        'Mao mạch dãn rộng toàn thân',
      ],
      answer: 0,
      hints: ['Cơ thể cần làm huyết áp tăng trở lại.'],
      solution:
        'Thụ thể áp lực báo về hành não; dây giao cảm làm tim đập nhanh, mạnh, co mạch nhỏ, kèm adrenaline, huyết áp tăng trở lại.',
    },
  ],
  takeaways: [
    'Hệ tuần hoàn gồm dịch tuần hoàn, tim và hệ mạch; vận chuyển các chất trong cơ thể.',
    'Hệ tuần hoàn hở (đa số chân khớp, một số thân mềm): áp lực thấp, máu chảy chậm. Hệ kín: đơn ở cá, kép ở lưỡng cư, bò sát, chim, thú.',
    'Tim có tính tự động nhờ nút xoang nhĩ, nút nhĩ thất, bó His, mạng Purkinje; chu kì $0{,}8$ s: nhĩ co $0{,}1$ s, thất co $0{,}3$ s, dãn chung $0{,}4$ s.',
    'Huyết áp giảm dần từ động mạch đến tĩnh mạch; vận tốc máu tỉ lệ nghịch với tổng tiết diện, chậm nhất ở mao mạch.',
    'Tim mạch được điều hoà bằng thần kinh và thể dịch; phòng bệnh bằng ăn uống cân đối, luyện tập, tránh thuốc lá, rượu bia.',
  ],
};

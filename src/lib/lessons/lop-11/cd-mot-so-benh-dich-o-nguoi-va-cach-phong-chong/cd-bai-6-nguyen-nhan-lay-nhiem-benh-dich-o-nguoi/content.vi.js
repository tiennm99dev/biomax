/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bệnh dịch lây từ nguồn bệnh sang người lành qua bốn con đường: đường tiêu hoá, đường hô hấp, đường máu (kể cả qua muỗi đốt) và đường da. Thời tiết nóng ẩm, vệ sinh môi trường kém, dân cư đông đúc và kinh tế kém phát triển là những yếu tố làm dịch dễ bùng phát.',
  intro:
    'Cùng một lớp học, bệnh cúm có thể lây cho cả lớp trong hai tuần, còn bệnh viêm gan B thì hầu như không lây khi ngồi học cạnh nhau. Vì sao vậy? Mỗi bệnh dịch có con đường lây riêng, và chỉ khi gặp điều kiện thuận lợi, bệnh mới bùng phát thành dịch.',
  objectives: [
    'Trình bày được các con đường lây nhiễm bệnh dịch ở người: qua đường tiêu hoá, đường hô hấp, đường máu và đường da.',
    'Nêu được ví dụ về bệnh và những việc làm dẫn đến lây nhiễm theo mỗi con đường.',
    'Phân tích được các yếu tố thuận lợi làm bùng phát dịch: thời tiết, khí hậu, vệ sinh môi trường, mật độ dân cư, điều kiện kinh tế.',
    'Đề xuất được một số việc làm giảm nguy cơ bùng phát dịch ở địa phương.',
  ],
  sections: [
    {
      heading: 'Bệnh dịch lây nhiễm như thế nào?',
      blocks: [
        {
          type: 'p',
          text: 'Nhiều mầm bệnh được thải ra ngoài môi trường cùng giọt bắn, phân, máu của người bệnh và tồn tại ngoài cơ thể một thời gian. Gặp điều kiện thích hợp, chúng sinh sôi và xâm nhập vào người lành. Một bệnh dịch lây lan khi có đủ ba khâu:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Nguồn bệnh: người bệnh, người mang mầm bệnh không triệu chứng hoặc động vật mang mầm bệnh.',
            'Con đường lây truyền: mầm bệnh đi từ nguồn bệnh tới người lành qua không khí, thức ăn, nước uống, máu, động vật trung gian.',
            'Người cảm nhiễm: người chưa có miễn dịch với bệnh.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mỗi người bệnh lây cho bao nhiêu người?',
          text: 'Số người trung bình mà một người bệnh làm lây trong cộng đồng chưa ai có miễn dịch kí hiệu là $R_0$. Nếu mỗi ngày người bệnh lây cho $\\beta$ người và lây bệnh trong $d$ ngày thì $R_0 = \\beta \\cdot d$. Khi $R_0 > 1$, số ca tăng dần và dịch bùng phát; khi $R_0 < 1$, bệnh chỉ xuất hiện lẻ tẻ rồi tắt dần.',
        },
      ],
    },
    {
      heading: 'Các con đường lây truyền',
      blocks: [
        {
          type: 'table',
          caption: 'Bốn con đường lây nhiễm bệnh dịch ở người',
          head: ['Con đường', 'Mầm bệnh xâm nhập thế nào', 'Ví dụ bệnh'],
          rows: [
            [
              'Đường hô hấp',
              'Người bệnh ho, hắt hơi, nói chuyện làm bắn ra giọt bắn chứa mầm bệnh; người lành hít phải, hoặc chạm tay vào đồ vật có mầm bệnh rồi đưa lên mắt, mũi, miệng',
              'Cúm, COVID-19, sởi, lao phổi, bạch hầu',
            ],
            [
              'Đường tiêu hoá',
              'Ăn, uống thức ăn, nước có mầm bệnh: thực phẩm chế biến sai cách, ăn sống, gỏi, tái; dụng cụ chứa đựng, chế biến bẩn; ruồi, gián, chuột mang mầm bệnh tới thức ăn không đậy kín',
              'Tả, lị, thương hàn, tiêu chảy cấp',
            ],
            [
              'Đường máu',
              'Truyền máu chưa kiểm tra, dùng chung kim tiêm, vết thương hở tiếp xúc với máu người bệnh; mẹ truyền sang thai nhi qua nhau thai; bị muỗi mang mầm bệnh đốt',
              'Sốt xuất huyết, sốt rét, AIDS, viêm gan B',
            ],
            [
              'Đường da',
              'Da, niêm mạc tiếp xúc trực tiếp với người bệnh, vết loét, dịch tiết của họ; dùng chung khăn, quần áo, chăn chiếu; mầm bệnh vào qua vết thương hở, vết xước; ấu trùng giun móc chui qua da khi đi chân đất',
              'Ghẻ, hắc lào, nấm da, uốn ván, bệnh giun móc',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Động vật trung gian truyền bệnh qua đường máu',
          text: 'Muỗi Anopheles cái truyền kí sinh trùng sốt rét; muỗi vằn Aedes aegypti truyền virus Dengue gây sốt xuất huyết. Muỗi hút máu người bệnh, mầm bệnh phát triển trong cơ thể muỗi, rồi muỗi đốt người lành và truyền mầm bệnh vào máu.',
        },
        {
          type: 'p',
          text: 'Một số bệnh lây theo nhiều con đường. Ví dụ, HIV lây qua đường máu, qua quan hệ tình dục không an toàn và từ mẹ sang con; bệnh tay chân miệng lây qua đường tiêu hoá và tiếp xúc trực tiếp với dịch tiết của người bệnh.',
        },
      ],
    },
    {
      heading: 'Các yếu tố thuận lợi cho dịch bùng phát',
      blocks: [
        {
          type: 'table',
          caption: 'Những yếu tố làm bệnh dễ bùng phát thành dịch',
          head: ['Yếu tố', 'Vì sao thuận lợi cho dịch'],
          rows: [
            [
              'Thời tiết, khí hậu',
              'Lúc giao mùa, thời tiết nóng ẩm, mưa nhiều: vi sinh vật sinh sản mạnh, muỗi phát triển, sức đề kháng của nhiều người giảm; dịch tả, lị, sốt xuất huyết hay bùng phát',
            ],
            [
              'Vệ sinh môi trường kém',
              'Rác thải, phân, nước thải không được xử lí làm mầm bệnh phát tán; nước đọng là nơi muỗi đẻ trứng; ruồi, gián, chuột sinh sôi',
            ],
            [
              'Mật độ dân cư cao, tụ tập đông người',
              'Người tiếp xúc gần nhau nhiều nên bệnh lây qua giọt bắn rất nhanh',
            ],
            [
              'Kinh tế kém phát triển',
              'Người dân khó tiếp cận dịch vụ y tế, nước sạch; người bệnh được phát hiện, cách li, điều trị muộn nên lây bệnh lâu hơn',
            ],
            [
              'Thói quen, hiểu biết của người dân',
              'Ăn sống, uống nước chưa đun sôi, dùng chung kim tiêm, chủ quan khi có triệu chứng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mỗi yếu tố tác động lên những con đường lây phù hợp',
          text: 'Nước đọng làm muỗi sinh sôi nên thúc đẩy sốt xuất huyết, sốt rét, nhưng không làm HIV lây nhanh hơn. Vì vậy, để đánh giá nguy cơ, cần biết bệnh lây qua con đường nào.',
        },
      ],
    },
    {
      heading: 'Hoạt động: Vẽ sơ đồ lây nhiễm một bệnh dịch ở địa phương',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: theo nhóm, chọn một bệnh dịch từng xảy ra ở địa phương (sốt xuất huyết, tay chân miệng, cúm, tiêu chảy cấp...) và vẽ sơ đồ con đường lây nhiễm của bệnh đó.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định tác nhân gây bệnh và nguồn bệnh.',
            'Vẽ sơ đồ mũi tên: nguồn bệnh → con đường lây (vật trung gian, thức ăn, giọt bắn...) → người lành.',
            'Quan sát khu dân cư, ghi lại những yếu tố thuận lợi cho bệnh lây lan (vật chứa nước đọng, bãi rác, quán ăn không đậy thức ăn, nơi đông người...).',
            'Đề xuất ít nhất ba việc làm giảm nguy cơ bùng phát dịch, mỗi việc cắt đứt một mũi tên trong sơ đồ.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: sơ đồ trên khổ giấy A3 kèm ảnh chụp các yếu tố thuận lợi đã quan sát được và các đề xuất.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng dịch theo con đường lây',
    instruction:
      'Chọn một con đường lây, rồi bật hoặc tắt các yếu tố thuận lợi. Đường đỏ là số người đang mắc bệnh; đường xám đứt nét là khi không có yếu tố thuận lợi. Yếu tố nào làm bệnh của con đường này bùng phát, yếu tố nào không?',
  },
  examples: [
    {
      problem:
        'Một bạn bị cúm vẫn đi học, ho không che miệng. Hãy mô tả con đường virus cúm lây sang các bạn khác trong lớp.',
      steps: [
        'Nguồn bệnh: bạn bị cúm, trong đường hô hấp có virus cúm.',
        'Khi bạn ho, hắt hơi, nói chuyện, các giọt bắn chứa virus bay ra không khí và bám lên bàn, tay nắm cửa, đồ dùng học tập.',
        'Các bạn ngồi gần hít phải giọt bắn, hoặc chạm tay vào đồ vật có virus rồi đưa lên mắt, mũi, miệng.',
        'Lớp học đông người, ít thông thoáng làm bệnh lây nhanh hơn.',
      ],
      answer:
        'Cúm lây qua đường hô hấp: giọt bắn từ người bệnh → không khí, đồ vật → mũi, miệng, mắt người lành.',
    },
    {
      problem:
        'Ở một khu dân cư, mỗi ngày một người bệnh làm lây trung bình $0{,}5$ người và lây bệnh trong $6$ ngày. Tính $R_0$. Nếu ban đầu có $2$ người bệnh và mỗi người bệnh lây cho đúng $R_0$ người, lứa lây thứ hai có bao nhiêu người mới mắc?',
      steps: [
        '$R_0 = \\beta \\cdot d = 0{,}5 \\cdot 6 = 3$: mỗi người bệnh lây cho $3$ người.',
        'Lứa lây thứ nhất: $2 \\cdot 3 = 6$ người mới mắc.',
        'Lứa lây thứ hai: $6 \\cdot 3 = 18$ người mới mắc.',
        'Vì $R_0 > 1$, số ca tăng theo cấp số nhân: dịch bùng phát nếu không có biện pháp ngăn chặn.',
      ],
      answer: '$R_0 = 3$; lứa lây thứ hai có $18$ người mới mắc.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi bệnh với con đường lây truyền chính của bệnh.',
      left: ['Cúm', 'Tả', 'Sốt xuất huyết', 'Viêm gan B'],
      right: [
        'Đường hô hấp',
        'Đường tiêu hoá',
        'Đường máu, qua muỗi vằn đốt',
        'Đường máu, qua truyền máu, kim tiêm, mẹ sang con',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Vi khuẩn tả ở trong phân người bệnh; virus Dengue do muỗi vằn truyền; virus viêm gan B có trong máu người bệnh.',
      ],
      solution:
        'Cúm lây qua đường hô hấp; tả qua đường tiêu hoá; sốt xuất huyết qua đường máu do muỗi vằn đốt; viêm gan B qua đường máu khi truyền máu, dùng chung kim tiêm hoặc từ mẹ sang con.',
    },
    {
      type: 'multi',
      prompt: 'Những hoạt động nào làm tăng nguy cơ lây bệnh qua đường máu?',
      options: [
        'Dùng chung bơm, kim tiêm',
        'Truyền máu chưa được kiểm tra',
        'Bị muỗi vằn mang virus Dengue đốt',
        'Xăm hình bằng dụng cụ không được tiệt trùng',
        'Ngồi học cùng bàn với người bị viêm gan B',
        'Ăn chung mâm cơm với người bị sốt rét',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Mầm bệnh phải đi được vào máu người lành.'],
      solution:
        'Dùng chung kim tiêm, truyền máu chưa kiểm tra, dụng cụ xăm không tiệt trùng và muỗi đốt đều đưa mầm bệnh vào máu. Ngồi cạnh nhau hay ăn chung không đưa máu người bệnh sang người lành.',
    },
    {
      type: 'choice',
      prompt:
        'Một gia đình ăn gỏi cá và uống nước giếng chưa đun sôi, sau đó cả nhà bị tiêu chảy cấp. Bệnh lây theo con đường nào?',
      options: ['Đường tiêu hoá', 'Đường hô hấp', 'Đường máu', 'Đường da'],
      answer: 0,
      hints: ['Mầm bệnh đi vào cơ thể qua cửa nào?'],
      solution:
        'Mầm bệnh trong cá sống và nước chưa đun sôi đi vào cơ thể qua miệng, xuống ruột: đó là con đường tiêu hoá.',
    },
    {
      type: 'choice',
      prompt:
        'Ở một kí túc xá, nhiều bạn nằm chung chăn chiếu, dùng chung khăn tắm với một bạn bị ghẻ; sau vài tuần, các bạn đó cũng bị ngứa, nổi mụn nước ở kẽ tay. Bệnh lây theo con đường nào?',
      options: ['Đường da', 'Đường hô hấp', 'Đường tiêu hoá', 'Đường máu'],
      answer: 0,
      hints: ['Cái ghẻ kí sinh ở đâu trên cơ thể người, và đi sang người khác bằng cách nào?'],
      solution:
        'Cái ghẻ kí sinh dưới da, lây khi da tiếp xúc trực tiếp với người bệnh hoặc với chăn chiếu, khăn, quần áo dùng chung: đó là con đường lây qua da.',
    },
    {
      type: 'multi',
      prompt: 'Những yếu tố nào thuận lợi cho dịch sốt xuất huyết bùng phát?',
      options: [
        'Mùa mưa, thời tiết nóng ẩm',
        'Nhiều vật chứa nước đọng quanh nhà (lốp xe cũ, chum vại không đậy)',
        'Dân cư đông đúc',
        'Dùng chung bàn chải đánh răng',
        'Ngủ màn, mặc quần áo dài',
      ],
      answers: [0, 1, 2],
      hints: [
        'Sốt xuất huyết do muỗi vằn truyền. Điều gì giúp muỗi sinh sôi và đốt được nhiều người?',
      ],
      solution:
        'Nóng ẩm, mưa nhiều và nước đọng giúp muỗi vằn sinh sản; dân cư đông đúc giúp muỗi đốt được nhiều người. Dùng chung bàn chải không liên quan đến muỗi; ngủ màn, mặc quần áo dài là biện pháp phòng bệnh.',
    },
    {
      type: 'number',
      prompt:
        'Mỗi ngày, một người bệnh làm lây trung bình $0{,}4$ người và lây bệnh trong $5$ ngày. Tính $R_0$.',
      answer: 2,
      hints: ['$R_0 = \\beta \\cdot d$.'],
      solution:
        '$R_0 = 0{,}4 \\cdot 5 = 2$: mỗi người bệnh lây cho trung bình $2$ người, nên dịch lan rộng.',
    },
    {
      type: 'number',
      prompt:
        'Ban đầu có $5$ người bệnh, mỗi người bệnh lây cho $3$ người. Lứa lây thứ ba có bao nhiêu người mới mắc?',
      answer: 135,
      unit: 'người',
      hints: [
        'Mỗi lứa lây, số người mới mắc gấp $3$ lần lứa trước.',
        'Tính $5 \\cdot 3 \\cdot 3 \\cdot 3$.',
      ],
      solution:
        'Lứa thứ nhất: $5 \\cdot 3 = 15$; lứa thứ hai: $15 \\cdot 3 = 45$; lứa thứ ba: $45 \\cdot 3 = 135$ người mới mắc.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao dịch tả, lị thường bùng phát sau lũ lụt và vào lúc giao mùa?',
      options: [
        'Nóng ẩm giúp vi khuẩn sinh sản mạnh; nước lũ cuốn phân, rác làm nhiễm bẩn nguồn nước sinh hoạt',
        'Lũ lụt làm muỗi Anopheles chết hết',
        'Vi khuẩn tả lây qua giọt bắn khi trời lạnh',
        'Lúc giao mùa con người không ăn uống gì',
      ],
      answer: 0,
      hints: ['Tả, lị lây qua đường tiêu hoá. Lũ làm gì với nguồn nước?'],
      solution:
        'Tả, lị lây qua thức ăn, nước uống nhiễm bẩn. Nước lũ cuốn phân, rác vào giếng, ao; thời tiết nóng ẩm giúp vi khuẩn sinh sản nhanh, nên dịch dễ bùng phát.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước để virus Dengue lây từ người bệnh sang người lành.',
      items: [
        'Muỗi vằn cái hút máu người bị sốt xuất huyết',
        'Virus nhân lên trong cơ thể muỗi',
        'Muỗi đốt người lành',
        'Virus vào máu người lành, người đó phát bệnh sau thời gian ủ bệnh',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Muỗi phải mang virus trước khi truyền cho người khác.'],
      solution:
        'Muỗi hút máu người bệnh → virus nhân lên trong muỗi → muỗi đốt người lành → virus vào máu, người lành phát bệnh sau thời gian ủ bệnh.',
    },
  ],
  takeaways: [
    'Bệnh dịch lây khi có nguồn bệnh, con đường lây truyền và người cảm nhiễm.',
    'Bốn con đường lây: đường tiêu hoá (thức ăn, nước uống, ruồi, gián), đường hô hấp (giọt bắn, đồ vật), đường máu (truyền máu, kim tiêm, mẹ sang con, muỗi đốt), đường da (tiếp xúc với người bệnh, đồ dùng chung, vết thương hở).',
    'Thời tiết nóng ẩm, giao mùa, vệ sinh môi trường kém, dân cư đông đúc, kinh tế kém phát triển làm dịch dễ bùng phát; mỗi yếu tố tác động lên những con đường lây phù hợp.',
    'Mỗi người bệnh lây cho trung bình $R_0$ người; $R_0 > 1$ thì dịch bùng phát, $R_0 < 1$ thì bệnh tắt dần.',
  ],
};

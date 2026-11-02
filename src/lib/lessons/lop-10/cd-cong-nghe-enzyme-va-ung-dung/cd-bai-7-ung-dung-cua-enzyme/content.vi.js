/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Enzyme được ứng dụng trong chế biến thực phẩm, y dược, công nghệ gene, công nghiệp và xử lí ô nhiễm môi trường; công nghệ enzyme còn nhiều triển vọng trong chẩn đoán, chữa bệnh, tổng hợp thuốc và xử lí chất thải.',
  intro:
    'Vì sao người ta hay hầm xương với dứa hay đu đủ xanh? Vì sao nước ép quả đóng hộp thường rất trong? Vì sao chỉ từ một mẫu rất nhỏ, phòng xét nghiệm vẫn phát hiện được virus? Câu trả lời đều liên quan đến enzyme.',
  objectives: [
    'Trình bày được vai trò của enzyme trong chế biến thực phẩm, y dược và công nghệ gene.',
    'Nêu được ứng dụng của enzyme trong công nghiệp và xử lí ô nhiễm môi trường.',
    'Giải thích được một số hiện tượng trong đời sống bằng kiến thức về enzyme.',
    'Nêu được triển vọng của công nghệ enzyme trong tương lai.',
  ],
  sections: [
    {
      heading: 'Ứng dụng trong chế biến thực phẩm',
      blocks: [
        {
          type: 'p',
          text: 'Trong thực phẩm, enzyme giúp tăng giá trị sản phẩm và hiệu quả sản xuất. Nhóm hay dùng nhất là protease, amylase, cellulase và pectinase.',
        },
        {
          type: 'table',
          caption: 'Một số enzyme dùng trong chế biến thực phẩm',
          head: ['Enzyme', 'Tác dụng', 'Sản phẩm'],
          rows: [
            [
              'Protease',
              'Phân giải protein',
              'Làm mềm thịt, đồ hộp thịt cá, nước mắm; renin làm đông sữa khi làm phô mai',
            ],
            ['Amylase', 'Phân giải tinh bột thành đường', 'Mạch nha, bánh mì, bánh kẹo, rượu, bia'],
            ['Cellulase', 'Phân giải cellulose', 'Làm mềm thực phẩm từ thực vật, sản xuất bia'],
            ['Pectinase', 'Phân giải pectin', 'Nước ép quả trong và nhiều dịch hơn, mứt quả'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao hầm xương với dứa hoặc đu đủ xanh?',
          text: 'Dứa chứa bromelain, đu đủ xanh chứa papain. Cả hai đều là protease, phân giải protein làm thịt mềm và nước dùng thêm vị ngọt đậm. Dứa đã đóng hộp qua xử lí nhiệt thì enzyme đã bị biến tính, nên không còn tác dụng này.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong y dược và công nghệ gene',
      blocks: [
        {
          type: 'table',
          caption: 'Một số enzyme trong y dược',
          head: ['Mục đích', 'Enzyme', 'Vai trò'],
          rows: [
            ['Chẩn đoán', 'Enzyme đo glucose máu', 'Giúp phát hiện và theo dõi bệnh tiểu đường'],
            ['Chẩn đoán', 'Enzyme đo acid uric máu', 'Giúp phát hiện và theo dõi bệnh gout'],
            ['Điều trị', 'Enzyme tiêu hoá', 'Bổ sung cho người thiếu enzyme, hỗ trợ tiêu hoá'],
            ['Điều trị', 'Bromelain', 'Giảm đau, giảm viêm sau phẫu thuật, khi viêm khớp'],
            ['Điều trị', 'Trypsin, chymotrypsin', 'Chống viêm, giúp vết thương mau lành'],
            ['Điều trị', 'Penicillinase', 'Phân giải penicillin khi người bệnh dị ứng thuốc'],
          ],
        },
        {
          type: 'list',
          items: [
            'Taq polymerase: nhân bản DNA trong phản ứng PCR, dùng để phát hiện virus. Enzyme này chịu được nhiệt độ cao của mỗi chu kì PCR.',
            'Enzyme cắt giới hạn: cắt DNA tại những trình tự xác định.',
            'Ligase: nối các đoạn DNA, tạo DNA tái tổ hợp để chuyển gene giữa các loài.',
          ],
        },
      ],
    },
    {
      heading: 'Ứng dụng trong công nghiệp và xử lí môi trường',
      blocks: [
        {
          type: 'p',
          text: 'Trong bột giặt, protease tẩy vết bẩn protein, lipase tẩy dầu mỡ, amylase tẩy vết tinh bột. Enzyme làm được ở nhiệt độ thấp nên tiết kiệm năng lượng. Cellulase còn giúp tạo nhiên liệu sinh học từ bã mía, rơm, cỏ.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công nghệ cuối đường ống',
          text: 'Trong xử lí ô nhiễm, enzyme thường được dùng ở khâu sau cùng, sau các phương pháp hoá học, vật lí, sinh học, để xử lí phần chất thải còn khó xử lí. Enzyme có thể làm kết tủa chất thải, đổi tính chất của chúng để dễ xử lí, hoặc biến chúng thành sản phẩm có giá trị hơn mà ít ảnh hưởng đến môi trường.',
        },
        {
          type: 'list',
          items: [
            'Rác thải nhựa: một số vi khuẩn tạo enzyme phân giải nhựa; các nhà khoa học đang tạo những chủng đột biến để enzyme hoạt động mạnh hơn.',
            'Nước ngầm: enzyme oxy hoá của vi khuẩn biến đổi chất ô nhiễm thành chất không độc, vi khuẩn dùng chúng làm chất dinh dưỡng.',
          ],
        },
      ],
    },
    {
      heading: 'Triển vọng của công nghệ enzyme',
      blocks: [
        {
          type: 'list',
          items: [
            'Tìm thêm nguồn enzyme mới và sản xuất ở quy mô công nghiệp với chi phí thấp hơn.',
            'Dùng enzyme để phân tích, chẩn đoán, cảnh báo và điều trị bệnh.',
            'Tổng hợp thuốc bằng xúc tác enzyme, tạo ít tạp chất hơn.',
            'Xử lí chất ô nhiễm như rác thải nhựa, nước ngầm bị nhiễm bẩn.',
          ],
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Làm nước tẩy rửa từ vỏ quả',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tận dụng rác nhà bếp để làm nước tẩy rửa thân thiện với môi trường và kiểm tra tác dụng của nó. Làm theo nhóm trong $2$ đến $3$ tháng. Chuẩn bị: vỏ quả họ cam, chanh, sả, đường mía hoặc đường nâu, nước sạch, chai nhựa miệng rộng.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Rửa sạch, cắt nhỏ vỏ quả. Cho vào chai theo tỉ lệ thường dùng: $1$ phần đường, $3$ phần vỏ quả, $10$ phần nước (theo khối lượng), chừa khoảng trống phía trên.',
            'Đậy nắp, để nơi thoáng mát. Trong những tuần đầu mở nắp mỗi ngày cho khí thoát ra, để tránh nổ chai.',
            'Sau $2$ đến $3$ tháng, lọc bỏ bã, thu dịch có mùi thơm chua nhẹ.',
            'Pha loãng dịch, thử lau một mặt bàn hoặc giặt một vết bẩn nhỏ, so với nước sạch.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không uống, không dùng dịch này để chữa bệnh và không đưa vào mắt. Dừng lại và bỏ đi nếu dịch có mùi hôi hoặc mốc đen.',
        },
        {
          type: 'p',
          text: 'Báo cáo: nhật kí theo dõi, ảnh kết quả, giải thích vai trò của vi sinh vật, enzyme (như protease, amylase) và của các acid hữu cơ, rượu tạo ra trong quá trình lên men; nêu một hạn chế của sản phẩm tự làm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thẻ ứng dụng enzyme',
    instruction:
      'Chọn một thẻ, rồi chọn ô phù hợp. Ở kiểu đầu, ghép sản phẩm với enzyme tạo nên nó (amylase cho mạch nha, protease cho bột giặt tẩy vết máu). Ở kiểu sau, xếp mỗi ứng dụng vào đúng lĩnh vực.',
  },
  examples: [
    {
      problem:
        'Khi ép $100$ kg táo không dùng enzyme, một cơ sở thu được $60$ lít nước quả. Khi xử lí bằng pectinase, cùng khối lượng táo cho $72$ lít. Lượng nước quả tăng bao nhiêu phần trăm? Vì sao có sự tăng này?',
      steps: [
        'Lượng tăng thêm: $72 - 60 = 12$ lít.',
        'Tỉ lệ tăng: $\\dfrac{12}{60} \\cdot 100\\% = 20\\%$.',
        'Pectinase phân giải pectin ở thành tế bào quả, nên dịch dễ thoát ra và dễ lọc hơn.',
      ],
      answer: 'Lượng nước quả tăng $20\\%$, nhờ pectinase phân giải pectin.',
    },
    {
      problem:
        'Mỗi chu kì PCR nhân đôi số phân tử DNA, trong đó có bước đun nóng tới khoảng $95\\,^\\circ\\mathrm{C}$ để tách mạch. Từ $1$ phân tử DNA, sau $5$ chu kì có bao nhiêu phân tử? Vì sao PCR cần Taq polymerase, không dùng DNA polymerase của người?',
      steps: [
        'Số phân tử sau $5$ chu kì: $2^5 = 32$.',
        'Enzyme của người bị biến tính ở $95\\,^\\circ\\mathrm{C}$, nên phải thêm enzyme mới ở mỗi chu kì.',
        'Taq polymerase lấy từ vi khuẩn suối nước nóng, chịu được nhiệt độ này và vẫn hoạt động sau mỗi lần đun nóng.',
      ],
      answer: '$32$ phân tử; Taq polymerase bền với nhiệt nên dùng được qua nhiều chu kì.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi enzyme với sản phẩm hoặc ứng dụng phù hợp.',
      left: ['Amylase', 'Protease', 'Pectinase', 'Taq polymerase'],
      right: [
        'Mạch nha từ tinh bột',
        'Bột giặt tẩy vết máu',
        'Nước ép quả trong hơn',
        'Nhân bản DNA bằng PCR',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Hãy xem cơ chất của mỗi enzyme: tinh bột, protein, pectin, DNA.'],
      solution:
        'Amylase phân giải tinh bột cho mạch nha, protease phân giải protein ở vết máu, pectinase phân giải pectin ở quả, Taq polymerase tổng hợp DNA trong PCR.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao dứa tươi làm thịt nhanh mềm, còn dứa đóng hộp đã xử lí nhiệt lại gần như không?',
      options: [
        'Nhiệt làm bromelain biến tính nên không còn phân giải được protein',
        'Dứa đóng hộp không chứa protein',
        'Đường trong hộp làm thịt cứng lại',
        'Dứa tươi chứa nhiều amylase hơn',
      ],
      answer: 0,
      hints: ['Enzyme trong dứa là protease; hoạt tính enzyme đòi hỏi điều gì?'],
      solution:
        'Bromelain trong dứa tươi là protease phân giải protein trong thịt. Khi đóng hộp qua nhiệt, enzyme đã bị biến tính.',
    },
    {
      type: 'multi',
      prompt: 'Trong những ứng dụng sau, ứng dụng nào dùng protease?',
      options: [
        'Làm mềm thịt',
        'Bột giặt tẩy vết máu, vết sữa',
        'Nước mắm',
        'Làm trong nước ép quả',
        'Tạo đường từ tinh bột',
      ],
      answers: [0, 1, 2],
      hints: ['Protease tác động lên cơ chất protein.'],
      solution:
        'Thịt, vết máu, vết sữa và cá đều giàu protein. Nước quả được làm trong nhờ pectinase; đường từ tinh bột là việc của amylase.',
    },
    {
      type: 'choice',
      prompt: 'Bột giặt có enzyme giúp tiết kiệm năng lượng vì',
      options: [
        'enzyme phân giải vết bẩn hiệu quả ở nhiệt độ thấp, không cần nước nóng',
        'enzyme sinh ra nhiệt làm nóng nước giặt',
        'enzyme làm quần áo mau khô hơn',
        'enzyme thay thế hoàn toàn việc dùng nước',
      ],
      answer: 0,
      hints: ['Nhớ tới đặc tính hoạt động ở điều kiện êm dịu của enzyme.'],
      solution:
        'Enzyme xúc tác hiệu quả ở điều kiện êm dịu, nên giặt ở nhiệt độ thấp vẫn sạch và tiết kiệm năng lượng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao việc dùng enzyme trong xử lí ô nhiễm được gọi là "công nghệ cuối đường ống"?',
      options: [
        'Enzyme thường dùng ở khâu cuối, sau các phương pháp khác, để xử lí phần chất thải còn khó xử lí',
        'Enzyme được lắp ở cuối đường ống nước sinh hoạt của mỗi gia đình',
        'Enzyme chỉ hoạt động ở trong các đường ống kim loại',
        'Enzyme được dùng đầu tiên, trước mọi phương pháp xử lí',
      ],
      answer: 0,
      hints: ['"Cuối" ở đây nói về vị trí trong chuỗi các bước xử lí.'],
      solution:
        'Sau các phương pháp hoá học, vật lí, sinh học, enzyme được dùng ở khâu sau cùng cho phần chất thải còn khó xử lí.',
    },
    {
      type: 'number',
      prompt:
        'Mỗi chu kì PCR nhân đôi số phân tử DNA. Từ $1$ phân tử DNA, sau $10$ chu kì có bao nhiêu phân tử?',
      answer: 1024,
      hints: ['Sau $n$ chu kì có $2^n$ phân tử.'],
      solution: '$2^{10} = 1\\,024$ phân tử.',
    },
    {
      type: 'number',
      prompt:
        'Ép $200$ kg quả không dùng enzyme thu được $120$ lít nước quả, còn khi xử lí pectinase thu được $138$ lít. Lượng nước quả tăng bao nhiêu phần trăm?',
      answer: 15,
      unit: '%',
      hints: ['Tính lượng tăng thêm.', 'Chia lượng tăng cho $120$ rồi nhân với $100\\%$.'],
      solution: 'Tăng $138 - 120 = 18$ lít; $\\dfrac{18}{120} \\cdot 100\\% = 15\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Đâu là triển vọng của công nghệ enzyme trong tương lai?',
      options: [
        'Tìm nguồn enzyme mới, giảm chi phí sản xuất',
        'Chẩn đoán, cảnh báo và điều trị bệnh',
        'Tổng hợp thuốc với ít tạp chất hơn',
        'Xử lí rác thải nhựa, nước ngầm ô nhiễm',
        'Thay thế mọi chất xúc tác hoá học trong mọi phản ứng',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Enzyme chỉ làm việc trong những điều kiện phù hợp, nên có thay được mọi thứ không?'],
      solution:
        'Bốn hướng đầu là những triển vọng được nêu. Enzyme đặc hiệu và dễ biến tính nên không thể thay thế mọi chất xúc tác trong mọi phản ứng.',
    },
    {
      type: 'text',
      prompt: 'Enzyme nào trong đu đủ xanh giúp phân giải protein, làm thịt mau mềm?',
      accept: ['papain'],
      hints: ['Tên enzyme này gần với tên tiếng Anh của quả đu đủ, papaya.'],
      solution: 'Đó là papain, một loại protease có trong nhựa đu đủ xanh.',
    },
  ],
  takeaways: [
    'Thực phẩm: protease làm mềm thịt, nước mắm; amylase cho mạch nha, bia; pectinase làm trong nước quả; cellulase làm mềm rau củ.',
    'Y dược: enzyme dùng để chẩn đoán và điều trị; công nghệ gene dùng Taq polymerase, enzyme cắt giới hạn, ligase.',
    'Công nghiệp: enzyme trong bột giặt, nhiên liệu sinh học; giúp tiết kiệm năng lượng.',
    'Xử lí môi trường: enzyme là công nghệ cuối đường ống, có triển vọng phân giải rác thải nhựa, chất ô nhiễm nước ngầm.',
  ],
};

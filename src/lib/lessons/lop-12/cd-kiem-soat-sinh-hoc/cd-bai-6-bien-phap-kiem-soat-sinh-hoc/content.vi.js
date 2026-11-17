/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các biện pháp kiểm soát sinh học: bảo vệ, nhân nuôi, thả và nhập nội thiên địch; dùng chế phẩm vi khuẩn, nấm, virus và chất có nguồn gốc sinh vật; thả côn trùng đực bất dục, muỗi mang Wolbachia, tạo giống kháng sâu bệnh; cùng các biện pháp canh tác hỗ trợ.',
  intro:
    'Ở Đồng bằng sông Cửu Long, nhiều nhà vườn bắc cầu tre nối các cây cam, bưởi để đàn kiến vàng đi tuần, bắt sâu và bọ xít. Ở Nha Trang, người ta thả muỗi để phòng bệnh sốt xuất huyết. Những cách làm tưởng ngược đời ấy đều là biện pháp kiểm soát sinh học.',
  objectives: [
    'Trình bày được các biện pháp sử dụng thiên địch: bảo vệ, phục hồi, nhân nuôi và thả, nhập nội thiên địch.',
    'Nêu được một số chế phẩm sinh học từ vi khuẩn, nấm, virus và cách chúng tiêu diệt sinh vật gây hại.',
    'Trình bày được các biện pháp kiểm soát sinh học dựa trên kĩ thuật di truyền, tạo giống.',
    'Chọn được biện pháp kiểm soát sinh học phù hợp với một đối tượng gây hại cụ thể.',
  ],
  sections: [
    {
      heading: 'Sử dụng thiên địch',
      blocks: [
        {
          type: 'list',
          items: [
            'Bảo vệ và phục hồi thiên địch có sẵn: hạn chế phun thuốc hoá học phổ rộng, không đốt rơm rạ, giữ bờ cỏ, trồng hoa trên bờ ruộng làm nơi trú và nguồn mật cho thiên địch. Thiên địch suy giảm chủ yếu do mất nơi ở và do thuốc trừ sâu giết cả chúng.',
            'Nhân nuôi và thả bổ sung: nuôi thiên địch hàng loạt rồi thả ra đồng khi sâu hại mới xuất hiện, ví dụ thả ong mắt đỏ Trichogramma trừ trứng sâu đục thân, sâu cuốn lá; nuôi kiến vàng trong vườn cây có múi.',
            'Nhập nội thiên địch: đưa thiên địch từ vùng gốc của một loài gây hại xâm lấn về, ví dụ bọ rùa Rodolia nhập từ Úc trừ rệp sáp bông hại cam ở California. Phải đánh giá kĩ để thiên địch không trở thành loài xâm lấn.',
          ],
        },
        {
          type: 'table',
          caption: 'Một số thiên địch thường gặp',
          head: ['Thiên địch', 'Kiểu quan hệ', 'Đối tượng kiểm soát'],
          rows: [
            ['Ong mắt đỏ', 'Kí sinh trứng', 'Trứng sâu đục thân, sâu cuốn lá'],
            ['Bọ rùa', 'Vật ăn thịt', 'Rệp muội, rệp sáp'],
            ['Kiến vàng', 'Vật ăn thịt', 'Sâu, bọ xít hại cam, quýt, bưởi'],
            ['Nhện, bọ xít mù xanh', 'Vật ăn thịt', 'Rầy nâu, rầy lưng trắng hại lúa'],
            ['Cá ăn bọ gậy (cá bảy màu, cá cờ)', 'Vật ăn thịt', 'Bọ gậy (ấu trùng muỗi)'],
          ],
        },
      ],
    },
    {
      heading: 'Chế phẩm sinh học',
      blocks: [
        {
          type: 'p',
          text: 'Chế phẩm sinh học là sản phẩm chứa vi sinh vật có ích hoặc chất do sinh vật tạo ra, được sản xuất hàng loạt để phun, rải, bón như thuốc nhưng không để lại chất độc tồn dư lâu.',
        },
        {
          type: 'table',
          caption: 'Một số chế phẩm sinh học',
          head: ['Nhóm', 'Ví dụ', 'Cách tác động'],
          rows: [
            [
              'Vi khuẩn',
              'Bacillus thuringiensis (chế phẩm Bt)',
              'Tạo tinh thể protein độc, phá huỷ ruột sâu non bộ cánh vảy (sâu tơ, sâu xanh)',
            ],
            [
              'Nấm',
              'Nấm xanh Metarhizium, nấm trắng Beauveria',
              'Bào tử bám vỏ côn trùng, sợi nấm xuyên vào làm chết rầy, bọ cánh cứng, sâu',
            ],
            [
              'Nấm đối kháng',
              'Trichoderma',
              'Cạnh tranh, tiết chất ức chế, kí sinh nấm gây bệnh vùng rễ',
            ],
            [
              'Virus',
              'Virus nhân đa diện (NPV)',
              'Gây bệnh, làm chết sâu khoang, sâu xanh; rất chuyên hoá, không hại sinh vật khác',
            ],
            [
              'Chất có nguồn gốc sinh vật',
              'Pheromone giới tính',
              'Dẫn dụ con đực vào bẫy, làm con cái khó gặp con đực để giao phối',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Chế phẩm sinh học là sinh vật sống hoặc chất dễ phân huỷ, nên cần bảo quản đúng cách, phun vào lúc sâu non còn nhỏ, chiều mát, khi độ ẩm thích hợp thì mới đạt hiệu quả.',
        },
      ],
    },
    {
      heading: 'Kĩ thuật di truyền và tạo giống',
      blocks: [
        {
          type: 'list',
          items: [
            'Côn trùng đực bất dục: nuôi hàng loạt, chiếu xạ cho con đực bất dục rồi thả với số lượng lớn hơn nhiều con đực tự nhiên. Con cái giao phối với đực bất dục đẻ trứng không nở. Nhờ cách này, ruồi xoắn hại gia súc từng được loại trừ khỏi nước Mỹ. Con đực bất dục không sinh sản nên không tồn tại lâu và không trở thành loài xâm lấn.',
            'Muỗi mang vi khuẩn Wolbachia: vi khuẩn sống trong tế bào muỗi Aedes, được truyền từ mẹ sang con và làm virus Dengue khó nhân lên trong muỗi, nên muỗi khó truyền bệnh sốt xuất huyết. Biện pháp này đã được thử nghiệm ở Việt Nam, ví dụ tại Nha Trang (Khánh Hoà).',
            'Muỗi biến đổi gene: con đực mang gene làm con non chết trước khi trưởng thành, thả ra để giảm quần thể muỗi truyền bệnh.',
            'Giống kháng sâu bệnh: chọn tạo giống lúa kháng rầy nâu, cây chuyển gene Bt tự tạo protein diệt sâu. Nếu trồng một giống kháng trên diện rộng quá lâu, sâu hại có thể tiến hoá vượt qua tính kháng, vì vậy cần luân phiên giống.',
          ],
        },
        { type: 'widget', name: 'phan-nhom' },
      ],
    },
    {
      heading: 'Biện pháp canh tác hỗ trợ',
      blocks: [
        {
          type: 'p',
          text: 'Các biện pháp canh tác tạo điều kiện cho thiên địch và cây trồng khoẻ, hỗ trợ kiểm soát sinh học:',
        },
        {
          type: 'list',
          items: [
            'Bón phân hợp lí, ưu tiên phân hữu cơ: đất tơi xốp, nuôi hệ vi sinh vật đất trong đó có vi sinh vật đối kháng; cây khoẻ, ít bệnh.',
            'Xen canh: tăng đa dạng sinh học, thu hút thiên địch; một số cây xua đuổi sâu hại.',
            'Luân canh: cắt nguồn thức ăn của sâu bệnh chỉ hại một loại cây, không để chúng tích luỹ qua nhiều vụ.',
          ],
        },
      ],
    },
    {
      heading: 'Nhiệm vụ: Thử nghiệm chế phẩm nấm Trichoderma',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: so sánh tỉ lệ cây con bị bệnh thối gốc giữa đất có và không có bón nấm Trichoderma. Làm theo nhóm trong $3$ đến $4$ tuần, dưới sự hướng dẫn của giáo viên.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: hạt giống (cải, đậu), $2$ khay đất giống nhau, phân hữu cơ hoai mục, chế phẩm Trichoderma mua ở cửa hàng vật tư nông nghiệp, găng tay, khẩu trang.',
            'Khay thí nghiệm: trộn chế phẩm với phân hữu cơ theo hướng dẫn trên bao bì, ủ ẩm vài ngày rồi trộn vào đất. Khay đối chứng: chỉ trộn phân hữu cơ.',
            'Gieo cùng số hạt (ví dụ $50$ hạt) vào mỗi khay, tưới và đặt ở cùng điều kiện.',
            'Mỗi $3$ ngày đếm số cây mọc, số cây héo, thối gốc ở mỗi khay; chụp ảnh.',
            'Tính tỉ lệ cây bị bệnh của mỗi khay và so sánh.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Báo cáo gồm: mục tiêu, giả thuyết, cách bố trí thí nghiệm, bảng số liệu và biểu đồ tỉ lệ cây bệnh theo thời gian, ảnh minh hoạ, kết luận về tác dụng của Trichoderma và giải thích bằng quan hệ cạnh tranh, ức chế, kí sinh giữa các loài nấm. Rửa tay sau khi làm thí nghiệm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ghép biện pháp với loài gây hại',
    instruction:
      'Chọn một loài gây hại ở cột trái để đọc cách nó gây hại, rồi chọn biện pháp kiểm soát sinh học phù hợp ở cột phải. Chọn sai, em sẽ biết biện pháp đó dùng cho đối tượng nào. Mỗi biện pháp chỉ dùng một lần.',
  },
  examples: [
    {
      problem:
        'Một vùng trồng bắp cải bị sâu tơ phá hại; người trồng phun nhiều loại thuốc hoá học mà sâu vẫn không giảm. Hãy đề xuất một biện pháp kiểm soát sinh học và giải thích.',
      steps: [
        'Sâu tơ có vòng đời ngắn, nhiều lứa một năm nên rất nhanh hình thành tính kháng thuốc hoá học.',
        'Sâu tơ là sâu non bộ cánh vảy, ăn lá; vi khuẩn Bacillus thuringiensis tạo protein độc phá huỷ ruột của nhóm sâu này.',
        'Phun chế phẩm Bt lên lá khi sâu non còn nhỏ, vào chiều mát; kết hợp bảo vệ ong kí sinh sâu tơ bằng cách giảm phun thuốc phổ rộng.',
      ],
      answer:
        'Dùng chế phẩm Bt (kết hợp bảo vệ thiên địch). Bt diệt sâu non bộ cánh vảy mà ít hại sinh vật khác, không để lại dư lượng độc trên rau.',
    },
    {
      problem:
        'Một vùng thả $9$ triệu con ruồi đực bất dục, trong khi vùng đó có $1$ triệu con ruồi đực tự nhiên. Giả sử ruồi cái giao phối ngẫu nhiên một lần với một con đực bất kì. Tính tỉ lệ ruồi cái đẻ được trứng nở.',
      steps: [
        'Tổng số con đực: $9 + 1 = 10$ triệu con.',
        'Xác suất ruồi cái giao phối với đực tự nhiên: $\\dfrac{1}{10} = 10\\%$.',
        'Chỉ những con cái này đẻ được trứng nở; $90\\%$ còn lại đẻ trứng không nở.',
      ],
      answer:
        'Chỉ khoảng $10\\%$ ruồi cái sinh được con, nên thế hệ sau giảm mạnh; thả lặp lại nhiều thế hệ thì quần thể giảm dần.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi đối tượng gây hại với biện pháp kiểm soát sinh học phù hợp.',
      left: [
        'Trứng sâu đục thân lúa',
        'Rệp muội hại rau',
        'Muỗi Aedes truyền sốt xuất huyết',
        'Nấm gây thối rễ trong đất',
      ],
      right: [
        'Thả ong mắt đỏ',
        'Thả bọ rùa',
        'Thả muỗi mang Wolbachia',
        'Bón nấm Trichoderma',
        'Phun chế phẩm Bt',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Ong mắt đỏ kí sinh trứng; bọ rùa ăn rệp.',
        'Chế phẩm Bt diệt sâu non ăn lá nên là lựa chọn thừa ở đây.',
      ],
      solution:
        'Trứng sâu đục thân: ong mắt đỏ. Rệp muội: bọ rùa. Muỗi Aedes: muỗi mang Wolbachia. Nấm gây thối rễ: Trichoderma.',
    },
    {
      type: 'choice',
      prompt: 'Chế phẩm Bt diệt sâu hại nhờ',
      options: [
        'tinh thể protein độc do vi khuẩn tạo ra, phá huỷ ruột sâu non khi sâu ăn phải',
        'sợi nấm xuyên qua vỏ cơ thể côn trùng',
        'chất dẫn dụ con đực vào bẫy',
        'làm con đực bất dục',
      ],
      answer: 0,
      hints: ['Bt là viết tắt tên một loài vi khuẩn: Bacillus thuringiensis.'],
      solution:
        'Vi khuẩn Bacillus thuringiensis tạo tinh thể protein độc; sâu non ăn phải thì ruột bị phá huỷ và chết. Sợi nấm xuyên vỏ là cách của nấm xanh, nấm trắng.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc làm giúp bảo vệ và phục hồi thiên địch trên đồng ruộng.',
      options: [
        'Không đốt rơm rạ sau thu hoạch',
        'Giữ bờ cỏ, trồng hoa trên bờ ruộng',
        'Chỉ phun thuốc khi sâu vượt ngưỡng gây hại, ưu tiên thuốc chọn lọc',
        'Phun thuốc trừ sâu phổ rộng định kì mỗi tuần',
        'Phát quang toàn bộ bụi cây quanh ruộng',
      ],
      answers: [0, 1, 2],
      hints: ['Thiên địch suy giảm chủ yếu do mất nơi ở và do thuốc hoá học.'],
      solution:
        'Không đốt rơm rạ, giữ bờ cỏ, trồng hoa giữ nơi ở và nguồn thức ăn cho thiên địch; phun thuốc đúng lúc, chọn lọc giảm số thiên địch bị giết. Phun định kì phổ rộng và phát quang bụi cây làm thiên địch giảm.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao thả côn trùng đực bất dục không làm xuất hiện một loài ngoại lai xâm lấn mới?',
      options: [
        'Vì chúng là cùng loài với sinh vật gây hại và không sinh sản được nên không tạo thế hệ sau',
        'Vì chúng bị thiên địch ăn hết ngay sau khi thả',
        'Vì chúng chỉ sống được trong phòng thí nghiệm',
        'Vì chúng ăn thịt con cái của loài gây hại',
      ],
      answer: 0,
      hints: ['Một loài muốn xâm lấn thì phải sinh sản và tăng số lượng.'],
      solution:
        'Đực bất dục thuộc chính loài gây hại, không phải loài mới, và không sinh sản được nên chết đi sau một thời gian mà không để lại con cháu.',
    },
    {
      type: 'number',
      prompt:
        'Một vùng có $2$ triệu con đực tự nhiên của một loài ruồi. Người ta thả $8$ triệu con đực bất dục. Nếu con cái giao phối ngẫu nhiên một lần, bao nhiêu phần trăm con cái đẻ được trứng nở?',
      answer: 20,
      unit: '%',
      hints: [
        'Tổng số con đực là bao nhiêu?',
        'Chỉ con cái gặp đực tự nhiên mới đẻ được trứng nở.',
      ],
      solution:
        'Tổng số đực: $2 + 8 = 10$ triệu. Tỉ lệ con cái gặp đực tự nhiên: $\\dfrac{2}{10} = 20\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Thả muỗi Aedes mang vi khuẩn Wolbachia giúp giảm bệnh sốt xuất huyết chủ yếu vì',
      options: [
        'Wolbachia làm virus Dengue khó nhân lên trong muỗi nên muỗi khó truyền bệnh',
        'Wolbachia giết toàn bộ muỗi trong vài ngày',
        'Wolbachia làm muỗi không đốt người',
        'Wolbachia diệt virus Dengue trong máu người',
      ],
      answer: 0,
      hints: ['Vi khuẩn sống trong tế bào muỗi, không vào người.'],
      solution:
        'Wolbachia sống trong tế bào muỗi, truyền từ mẹ sang con và cản trở virus Dengue nhân lên, nên muỗi mang Wolbachia khó truyền virus cho người.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của kĩ thuật côn trùng đực bất dục theo đúng thứ tự.',
      items: [
        'Nuôi hàng loạt côn trùng gây hại trong cơ sở sản xuất',
        'Tách con đực và chiếu xạ làm chúng bất dục',
        'Thả số lượng lớn con đực bất dục ra vùng cần kiểm soát',
        'Con cái giao phối với đực bất dục, đẻ trứng không nở',
        'Thả lặp lại qua nhiều thế hệ, quần thể giảm dần',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có thật nhiều con đực trước khi làm chúng bất dục.'],
      solution:
        'Nuôi hàng loạt → tách đực, chiếu xạ → thả số lượng lớn → con cái đẻ trứng không nở → thả lặp lại, quần thể giảm dần.',
    },
    {
      type: 'choice',
      prompt:
        'Một giống lúa kháng rầy được trồng trên toàn vùng nhiều năm liền; sau vài năm giống này bị rầy phá mạnh. Nguyên nhân chủ yếu là',
      options: [
        'giống kháng tạo áp lực chọn lọc, những con rầy vượt qua được tính kháng sống sót và tăng dần',
        'giống lúa tự mất gene kháng sau vài vụ',
        'rầy chuyển sang ăn loài cây khác',
        'thiên địch của rầy tăng quá nhiều',
      ],
      answer: 0,
      hints: ['Nghĩ đến chọn lọc tự nhiên tác động lên quần thể rầy.'],
      solution:
        'Trồng một giống kháng trên diện rộng chọn lọc những cá thể rầy có thể vượt qua tính kháng; chúng sống sót, sinh sản nên quần thể rầy "thích nghi". Vì vậy cần luân phiên giống và kết hợp nhiều biện pháp.',
    },
  ],
  takeaways: [
    'Sử dụng thiên địch: bảo vệ, phục hồi thiên địch có sẵn; nhân nuôi và thả bổ sung; nhập nội thiên địch sau khi đánh giá rủi ro.',
    'Chế phẩm sinh học: vi khuẩn Bt, nấm xanh, nấm trắng, nấm Trichoderma, virus NPV, pheromone giới tính.',
    'Kĩ thuật di truyền, tạo giống: côn trùng đực bất dục, muỗi mang Wolbachia, muỗi biến đổi gene, giống kháng sâu bệnh.',
    'Biện pháp canh tác (bón phân hợp lí, xen canh, luân canh) hỗ trợ; chọn biện pháp phải dựa trên đặc điểm của đối tượng gây hại.',
  ],
};

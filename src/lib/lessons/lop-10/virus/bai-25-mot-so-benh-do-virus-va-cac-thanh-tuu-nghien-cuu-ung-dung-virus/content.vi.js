/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Virus gây bệnh bằng cách phá huỷ tế bào, tạo độc tố hoặc gây đột biến dẫn tới ung thư; bệnh do virus ở người, động vật, thực vật lan nhanh và nhiều biến thể, được phòng bằng vaccine và chặn đường lây; virus cũng được ứng dụng để làm vaccine, thuốc trừ sâu và vector chuyển gene.',
  intro:
    'Mỗi năm có những đợt cúm mới dù nhiều người đã từng bị cúm. HIV đến nay vẫn chưa có thuốc chữa khỏi. Vì sao virus khó phòng trị đến vậy, và cũng chính loại tác nhân ấy đã được con người biến thành công cụ hữu ích như thế nào?',
  objectives: [
    'Nêu được cơ chế gây bệnh chung của virus.',
    'Giải thích được vì sao bệnh do virus thường lây lan nhanh, rộng và có nhiều biến thể.',
    'Trình bày được đường lây và cách phòng chống một số bệnh do virus ở người, động vật và thực vật.',
    'Nêu được một số thành tựu ứng dụng virus: sản xuất vaccine, thuốc trừ sâu, vector chuyển gene.',
  ],
  sections: [
    {
      heading: 'Cơ chế gây bệnh chung của virus',
      blocks: [
        {
          type: 'list',
          items: [
            'Phá huỷ tế bào: virus nhân lên theo kiểu sinh tan làm chết các tế bào và tổn thương mô. Bệnh nặng hay nhẹ tuỳ vào số tế bào bị phá huỷ và khả năng tái sinh của loại tế bào đó.',
            'Tạo độc tố: một số virus khi xâm nhập vào tế bào tạo ra độc tố, gây ra các triệu chứng bệnh. Một số thành phần của virus như protein vỏ cũng có thể gây bệnh.',
            'Gây đột biến: virus tồn tại trong tế bào theo kiểu tiềm tan có thể gây đột biến gene của tế bào chủ, dẫn tới ung thư.',
          ],
        },
        {
          type: 'p',
          text: 'Các triệu chứng chung như sốt cao, đau nhức cơ thể phần lớn là đáp ứng của hệ miễn dịch khi chống lại virus.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao bệnh do virus có nhiều biến thể?',
          text: 'Khoảng $70\\%$ virus có vật chất di truyền là RNA. Enzyme nhân bản RNA thường sao chép thiếu chính xác và ít có khả năng sửa sai, nên phát sinh nhiều đột biến và tạo ra các chủng mới mà miễn dịch cũ không nhận ra. Hơn nữa, virus nhân lên rất nhanh và phát tán dễ dàng trong cộng đồng, do đó bệnh lây lan nhanh và rộng, thậm chí thành đại dịch.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Kháng sinh không diệt được virus',
          text: 'Kháng sinh tác động lên các cấu trúc và quá trình của tế bào vi khuẩn như thành tế bào, ribosome. Virus không có những thứ đó và nhân lên nhờ bộ máy của tế bào chủ, nên dùng kháng sinh để trị cúm là vô ích và làm tăng vi khuẩn kháng thuốc.',
        },
      ],
    },
    {
      heading: 'Một số bệnh do virus ở người và động vật',
      blocks: [
        {
          type: 'table',
          caption: 'HIV/AIDS và cúm',
          head: ['Tiêu chí', 'HIV/AIDS', 'Cúm'],
          rows: [
            [
              'Virus',
              'HIV có vật chất di truyền là $2$ phân tử RNA cùng các enzyme, có vỏ ngoài và gai glycoprotein bám vào thụ thể của tế bào bạch cầu T',
              'Virus cúm gồm $7$ đến $8$ đoạn RNA ngắn, có vỏ ngoài và hai nhóm gai: gai H nhận biết, bám vào thụ thể; gai N là enzyme giúp virus giải phóng khỏi tế bào. Tên như H5N1 cho biết loại gai H và gai N',
            ],
            [
              'Vật chủ',
              'Người',
              'Người, gà, ngan, vịt, chim, lợn. Có ba loại A, B, C; loại A là tác nhân chủ yếu gây dịch cúm ở người',
            ],
            [
              'Đường lây',
              'Ba đường: máu, tình dục, mẹ sang con',
              'Giọt dịch khi ho, hắt hơi; dịch tiết của người hoặc động vật bệnh',
            ],
            [
              'Diễn biến',
              'Sơ nhiễm (cửa sổ, khoảng $2$ tuần đến $3$ tháng), không triệu chứng (khoảng $1$ đến $10$ năm), AIDS với các bệnh cơ hội. Bạch cầu T bị phá huỷ làm suy giảm miễn dịch',
              'Nhân lên theo chu kì sinh tan ở niêm mạc đường hô hấp; sốt, đau nhức, ho, có thể viêm phổi',
            ],
            [
              'Phòng tránh',
              'Tình dục an toàn, không dùng chung bơm kim tiêm, truyền máu an toàn, phát hiện sớm và quản lí tốt người nhiễm',
              'Tránh tiếp xúc gần với người bệnh, không ăn gia cầm chết vì dịch, nấu chín thức ăn, không săn bắt và buôn bán động vật hoang dã, tiêm vaccine',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Bệnh sởi cũng do virus RNA gây ra, lây qua đường hô hấp và có vaccine phòng bệnh hiệu quả. Ở vật nuôi, ngoài cúm gia cầm còn có các dịch như dịch tả lợn châu Phi, lở mồm long móng, gây thiệt hại lớn. Vì thế, cần tiêm vaccine cho vật nuôi, vệ sinh chuồng trại và tiêu huỷ vật nuôi bị bệnh theo quy định.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao khó trị HIV?',
          text: 'HIV thường tạo ra nhiều biến thể mới và gene của nó có thể tích hợp vào hệ gene của tế bào chủ. Hiện nay thuốc kháng virus chỉ kìm hãm sự nhân lên của HIV chứ chưa chữa khỏi hoàn toàn, vì vậy phòng lây nhiễm vẫn là biện pháp quan trọng nhất.',
        },
      ],
    },
    {
      heading: 'Bệnh do virus ở thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Cây bị nhiễm virus thường có lá xoăn, có vết nâu, trắng hoặc vàng trên lá và quả, cây sinh trưởng chậm, nhưng ít khi chết. Virus thực vật thường chỉ có vỏ capsid, không có vỏ ngoài và gai glycoprotein như virus ở động vật.',
        },
        {
          type: 'table',
          caption: 'Hai cách lan truyền của virus thực vật',
          head: ['Cách lan truyền', 'Diễn ra', 'Phòng chống'],
          rows: [
            [
              'Theo hàng ngang',
              'Từ cây này sang cây khác, qua côn trùng chích hút, dụng cụ làm vườn, vết thương trên cây',
              'Diệt côn trùng truyền bệnh, khử trùng dụng cụ làm vườn',
            ],
            [
              'Theo hàng dọc',
              'Từ cây mẹ sang cây con, qua hạt hoặc cành giâm',
              'Tiêu huỷ cây bị bệnh, không lấy giống từ cây bệnh',
            ],
          ],
        },
        { type: 'widget', name: 'phong-benh' },
      ],
    },
    {
      heading: 'Các thành tựu nghiên cứu, ứng dụng virus',
      blocks: [
        {
          type: 'table',
          head: ['Ứng dụng', 'Cách làm', 'Lợi ích'],
          rows: [
            [
              'Sản xuất vaccine',
              'Làm biến đổi hoặc làm yếu chủng virus gây bệnh rồi đưa vào người hay vật nuôi',
              'Cơ thể tạo kháng thể và trí nhớ miễn dịch chống lại virus đó',
            ],
            [
              'Thuốc trừ sâu sinh học',
              'Cho virus nhiễm vào côn trùng nuôi, thu sinh khối virus làm chế phẩm',
              'Diệt côn trùng gây hại đặc hiệu, an toàn hơn với người và môi trường so với thuốc hoá học',
            ],
            [
              'Vector trong công nghệ di truyền',
              'Dùng virus đã biến đổi làm thể truyền gene',
              'Đưa gene có lợi từ loài này sang loài khác, tạo chế phẩm sinh học, tế bào và sinh vật chuyển gene',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Các ứng dụng này đều dựa trên những đặc điểm đã học: virus nhân lên trong tế bào sống, có tính đặc hiệu về vật chủ, và đưa được vật chất di truyền của mình vào tế bào chủ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng một vụ dịch',
    instruction:
      'Chọn mức lây của virus rồi kéo hai thanh trượt. Quan sát đường cong số người đang mắc bệnh so với đường đứt nét, và tìm tổ hợp tiêm vaccine, đeo khẩu trang khiến mỗi ca bệnh lây cho ít hơn $1$ người.',
  },
  examples: [
    {
      problem:
        'Một người đã bị cúm năm ngoái nhưng năm nay vẫn có thể bị cúm lại. Giải thích dựa vào đặc điểm của virus cúm.',
      steps: [
        'Virus cúm có vật chất di truyền là RNA, enzyme nhân bản RNA thường sao chép thiếu chính xác và ít sửa sai.',
        'Do đó nhiều đột biến xuất hiện, làm thay đổi các gai H và N trên bề mặt virus.',
        'Kháng thể tạo ra từ lần bị cúm trước không còn nhận ra chủng mới.',
      ],
      answer: 'Vì virus cúm biến đổi nhanh, tạo chủng mới mà miễn dịch cũ không nhận ra được.',
    },
    {
      problem:
        'Một người mẹ mang thai nhiễm HIV muốn biết vì sao con có thể bị lây và cần làm gì. Hãy xác định đường lây và nêu cách phòng.',
      steps: [
        'HIV lây theo ba đường: máu, tình dục, mẹ sang con.',
        'Từ mẹ sang con, virus có thể truyền qua nhau thai, khi sinh và qua sữa mẹ.',
        'Cần khám thai sớm, điều trị theo chỉ định của bác sĩ và được tư vấn về cách sinh, cách nuôi con.',
      ],
      answer:
        'Đường lây là từ mẹ sang con; có thể giảm nguy cơ rất nhiều nếu phát hiện sớm và điều trị đúng chỉ định.',
    },
    {
      problem:
        'Trong mô phỏng, mỗi ca bệnh lây cho $4$ người khi chưa ai có miễn dịch. Nếu $60\\%$ dân số đã có miễn dịch, mỗi ca lây cho bao nhiêu người? Dịch có lan rộng không?',
      steps: [
        'Chỉ người chưa có miễn dịch mới mắc được, tức $100\\% - 60\\% = 40\\%$ dân số.',
        'Số người mỗi ca lây được là $4 \\cdot 0{,}4 = 1{,}6$ người.',
        'Vì $1{,}6 > 1$ nên số ca vẫn tăng.',
      ],
      answer: 'Mỗi ca lây cho $1{,}6$ người, nên dịch vẫn lan rộng, dù chậm hơn.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Virus có thể gây bệnh theo những cách nào sau đây?',
      options: [
        'Nhân lên kiểu sinh tan, phá huỷ tế bào và mô',
        'Tạo độc tố khi xâm nhập vào tế bào',
        'Gây đột biến gene của tế bào chủ, dẫn tới ung thư',
        'Tiết kháng sinh tiêu diệt vi khuẩn có lợi',
      ],
      answers: [0, 1, 2],
      hints: ['Virus không có bộ máy trao đổi chất để sản xuất kháng sinh.'],
      solution:
        'Ba cơ chế là phá huỷ tế bào, tạo độc tố và gây đột biến dẫn tới ung thư. Kháng sinh là sản phẩm của vi sinh vật, không phải của virus.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao virus RNA dễ tạo ra chủng mới hơn virus DNA?',
      options: [
        'Vì enzyme nhân bản RNA thường sao chép thiếu chính xác và ít có khả năng sửa sai',
        'Vì virus RNA có kích thước lớn hơn virus DNA',
        'Vì virus RNA chỉ kí sinh ở vi khuẩn',
        'Vì RNA luôn có cấu trúc mạch kép',
      ],
      answer: 0,
      hints: ['Chủng mới xuất hiện do đột biến. Đột biến phát sinh khi nào?'],
      solution:
        'Enzyme nhân bản RNA hay sai và ít sửa sai, nên có nhiều đột biến được giữ lại, sinh ra nhiều chủng mới.',
    },
    {
      type: 'multi',
      prompt: 'HIV lây truyền qua những đường nào?',
      options: [
        'Đường máu',
        'Đường tình dục',
        'Từ mẹ sang con',
        'Ăn chung, uống chung',
        'Muỗi đốt',
        'Bắt tay, ôm hôn xã giao',
      ],
      answers: [0, 1, 2],
      hints: [
        'HIV có ba đường lây, đều đưa máu hoặc dịch cơ thể của người nhiễm vào cơ thể người khác.',
      ],
      solution:
        'HIV lây qua ba đường: máu, tình dục và từ mẹ sang con. Ăn uống chung, muỗi đốt hay tiếp xúc xã giao không làm lây HIV, nên không cần kì thị người nhiễm.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn phát triển của bệnh do HIV theo đúng thứ tự.',
      items: [
        'Giai đoạn AIDS, có các bệnh cơ hội',
        'Giai đoạn sơ nhiễm (cửa sổ)',
        'Giai đoạn không triệu chứng',
      ],
      answer: [1, 2, 0],
      hints: ['AIDS là giai đoạn cuối, khi hệ miễn dịch đã suy giảm nặng.'],
      solution:
        'Sơ nhiễm (cửa sổ), không triệu chứng, rồi AIDS. Vì hai giai đoạn đầu ít biểu hiện rõ nên nhiều người không biết mình đã nhiễm.',
    },
    {
      type: 'choice',
      prompt: 'Ở người nhiễm HIV giai đoạn AIDS, vì sao các bệnh cơ hội dễ xuất hiện?',
      options: [
        'Vì HIV phá huỷ bạch cầu T làm suy giảm hệ miễn dịch',
        'Vì HIV trực tiếp gây ra các bệnh lao, viêm phổi',
        'Vì người bệnh dùng quá nhiều kháng sinh',
        'Vì HIV tạo ra độc tố nuôi vi khuẩn',
      ],
      answer: 0,
      hints: ['"Cơ hội" là gì mà các tác nhân gây bệnh khác được hưởng?'],
      solution:
        'Hệ miễn dịch suy giảm khiến các vi sinh vật vốn ít gây hại có cơ hội phát triển và gây bệnh.',
    },
    {
      type: 'text',
      prompt:
        'Trên virus cúm có hai nhóm gai, H và N. Nhóm gai nào giúp virus nhận biết và bám vào thụ thể của tế bào chủ? (Viết một chữ cái.)',
      accept: ['H', 'gai H'],
      hints: ['Nhóm gai còn lại là một enzyme hoạt động ở lúc virus rời tế bào.'],
      solution:
        'Gai H nhận biết và bám vào thụ thể của tế bào chủ; gai N là enzyme giúp virus giải phóng khỏi tế bào.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tình huống ở cây trồng với cách lan truyền và biện pháp phù hợp.',
      left: [
        'Rệp chích hút mang virus từ cây bệnh sang cây lành',
        'Dao cắt cành dùng cho cây bệnh rồi dùng ngay cho cây lành',
        'Giâm cành từ cây mẹ bị bệnh',
      ],
      right: [
        'Hàng ngang, cần diệt côn trùng truyền bệnh',
        'Hàng ngang, cần khử trùng dụng cụ',
        'Hàng dọc, cần tiêu huỷ cây bệnh, không lấy giống từ cây đó',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Hàng dọc là từ thế hệ trước sang thế hệ sau.'],
      solution:
        'Rệp và dao đều làm virus lan từ cây này sang cây khác, theo hàng ngang. Giâm cành từ cây bệnh truyền từ cây mẹ sang cây con, theo hàng dọc.',
    },
    {
      type: 'choice',
      prompt: 'Khi bị cúm thông thường, vì sao không nên tự mua kháng sinh để uống?',
      options: [
        'Vì kháng sinh không tác động lên virus và dùng sai còn làm tăng vi khuẩn kháng thuốc',
        'Vì kháng sinh chỉ dùng được cho vật nuôi',
        'Vì virus cúm là một loại vi khuẩn đã kháng thuốc',
        'Vì kháng sinh làm virus cúm nhân lên nhanh hơn',
      ],
      answer: 0,
      hints: ['Kháng sinh nhằm vào những cấu trúc nào của vi khuẩn? Virus có chúng không?'],
      solution:
        'Virus không có thành tế bào, ribosome nên kháng sinh không có tác dụng; lạm dụng kháng sinh còn tạo áp lực chọn lọc làm tăng vi khuẩn kháng thuốc.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ứng dụng của virus với cơ sở khoa học của nó.',
      left: ['Vaccine', 'Thuốc trừ sâu sinh học', 'Vector chuyển gene'],
      right: [
        'Virus đã biến đổi hoặc làm yếu kích thích cơ thể tạo miễn dịch',
        'Virus đặc hiệu với côn trùng gây hại, làm chúng chết',
        'Virus đưa được vật chất di truyền vào tế bào chủ',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Mỗi ứng dụng khai thác một khả năng riêng của virus.'],
      solution:
        'Vaccine dựa vào đáp ứng miễn dịch; thuốc trừ sâu dựa vào tính đặc hiệu với côn trùng; vector dựa vào khả năng đưa gene vào tế bào.',
    },
    {
      type: 'number',
      prompt:
        'Theo mô phỏng ở bài, nếu mỗi ca lây cho $5$ người khi chưa ai có miễn dịch và $70\\%$ dân số đã có miễn dịch, mỗi ca sẽ lây cho bao nhiêu người?',
      answer: 1.5,
      unit: 'người',
      hints: ['Tìm tỉ lệ người chưa có miễn dịch, rồi nhân với $5$.'],
      solution:
        'Tỉ lệ chưa có miễn dịch là $30\\%$, nên mỗi ca lây cho $5 \\cdot 0{,}3 = 1{,}5$ người.',
    },
  ],
  takeaways: [
    'Virus gây bệnh bằng cách phá huỷ tế bào, tạo độc tố hoặc gây đột biến dẫn tới ung thư.',
    'Khoảng $70\\%$ virus là virus RNA, enzyme nhân bản hay sai và ít sửa sai, nên có nhiều biến thể; bệnh lây nhanh, rộng và khó trị.',
    'Phòng bệnh do virus bằng cách tiêm vaccine và chặn đường lây; kháng sinh không có tác dụng với virus.',
    'HIV lây qua máu, tình dục và từ mẹ sang con; cúm lây qua giọt dịch; virus thực vật lây theo hàng ngang và hàng dọc.',
    'Virus được ứng dụng để sản xuất vaccine, thuốc trừ sâu sinh học và làm vector chuyển gene.',
  ],
};

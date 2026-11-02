/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vi sinh vật sinh trưởng, trao đổi chất và sinh sản nhanh nên được dùng để xử lí ô nhiễm: chúng phân giải chất thải hữu cơ thành chất đơn giản, còn với kim loại nặng thì hấp thụ, lưu giữ và chuyển sang dạng ít độc.',
  intro:
    'Nước thải chưa qua xử lí đổ vào một cái hồ khiến nước đục và bốc mùi, cá chết dần. Những sinh vật bé đến mức mắt thường không thấy lại có thể làm sạch cả hồ nước đó. Chúng làm được điều này bằng cách nào, và có chất nào chúng không "ăn" được không?',
  objectives: [
    'Nêu được khái niệm ô nhiễm môi trường và các tiêu chí xác định một môi trường bị ô nhiễm.',
    'Giải thích được vì sao vi sinh vật là giải pháp hiệu quả để xử lí ô nhiễm.',
    'Trình bày được cách vi sinh vật xử lí kim loại nặng và phân giải chất thải hữu cơ.',
    'Kể được một số ứng dụng thực tế của vi sinh vật trong xử lí ô nhiễm.',
  ],
  sections: [
    {
      heading: 'Ô nhiễm môi trường',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ô nhiễm môi trường',
          text: 'Là sự biến đổi tính chất vật lí, hoá học, sinh học của thành phần môi trường, vượt mức cho phép và gây ảnh hưởng xấu đến sức khoẻ con người, sinh vật và tự nhiên.',
        },
        {
          type: 'p',
          text: 'Để xác định một môi trường có bị ô nhiễm hay không, người ta xét nguồn gây ô nhiễm, khả năng lan truyền và đối tượng chịu tác động. Ví dụ, với đất nghi nhiễm kim loại nặng, cần đo hàm lượng kim loại xem có vượt giới hạn cho phép không, và mức độ ảnh hưởng đến sinh vật sống trên đất đó.',
        },
        {
          type: 'p',
          text: 'Vi sinh vật là giải pháp hiệu quả vì chúng sinh trưởng, trao đổi chất và sinh sản rất nhanh, lại nuôi cấy được để tạo lượng sinh khối lớn. Mỗi nhóm vi sinh vật có khả năng chuyển hoá những chất khác nhau, nên có thể chọn nhóm phù hợp với từng loại chất ô nhiễm.',
        },
      ],
    },
    {
      heading: 'Vi sinh vật xử lí kim loại nặng',
      blocks: [
        {
          type: 'p',
          text: 'Kim loại nặng vào môi trường chủ yếu từ nước thải công nghiệp chưa được xử lí đúng quy trình, rác thải sinh hoạt không được xử lí đúng cách và lượng thuốc trừ sâu dư thừa trong nông nghiệp.',
        },
        {
          type: 'p',
          text: 'Một số vi sinh vật có khả năng hấp thụ, lưu giữ và thay đổi trạng thái điện tích của kim loại. Chúng chuyển ion kim loại thành dạng không độc hoặc kết tủa, hoặc tích tụ kim loại trong màng nhầy. Ví dụ điển hình: vi khuẩn Bacillus cereus, Enterobacter cloacae và nấm Penicillium chrysogenum.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Kim loại không bị "phân huỷ"',
          text: 'Kim loại là nguyên tố nên không thể bị phân giải thành chất khác. Vi sinh vật chỉ chuyển nó sang dạng ít độc hoặc giữ nó lại, nên muốn loại kim loại khỏi môi trường thì phải thu sinh khối và cặn kết tủa để xử lí riêng.',
        },
      ],
    },
    {
      heading: 'Vi sinh vật phân giải chất thải hữu cơ',
      blocks: [
        {
          type: 'p',
          text: 'Chất thải hữu cơ đến từ rác sinh hoạt, chế biến thực phẩm, trồng trọt, chăn nuôi và nước thải của nhiều ngành sản xuất.',
        },
        {
          type: 'p',
          text: 'Vi sinh vật tiết enzyme ra môi trường để thuỷ phân các chất có phân tử lớn. Chẳng hạn, cellulase thuỷ phân polysaccharide trong rơm rạ thành đường đơn. Đường đơn là nguồn carbon cho hô hấp và lên men của vi sinh vật; nhờ đó chất thải được chuyển hoá thành chất đơn giản, còn vi sinh vật có năng lượng để sinh sản.',
        },
        {
          type: 'table',
          caption: 'Một số ứng dụng của vi sinh vật trong xử lí ô nhiễm',
          head: ['Đối tượng', 'Vi sinh vật, sản phẩm', 'Kết quả'],
          rows: [
            [
              'Mùi hôi chuồng trại',
              'Chế phẩm Sagi Bio, chứa Bacillus và xạ khuẩn Streptomyces',
              'Giảm mùi, phân giải chất thải',
            ],
            [
              'Nước thải y tế',
              'Nhóm vi khuẩn Betaproteobacteria',
              'Giảm chất ô nhiễm trong nước thải',
            ],
            ['Rơm rạ', 'Vi sinh vật phân giải cellulose', 'Phân bón hữu cơ'],
            [
              'Chất thải chăn nuôi, sinh khối thực vật',
              'Vi sinh vật kị khí',
              'Khí sinh học (biogas)',
            ],
          ],
        },
        {
          type: 'p',
          text: 'So với đốt rơm rạ, ủ rơm rạ bằng vi sinh vật không tạo khói và bụi mịn gây ô nhiễm không khí, lại cho sản phẩm hữu ích như phân bón hữu cơ, tuy cần nhiều thời gian hơn.',
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Nhật kí chất thải của gia đình',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: biết gia đình em thải ra những gì và phần nào có thể nhờ vi sinh vật xử lí. Làm cá nhân hoặc theo nhóm $2$ bạn, trong $1$ tuần. Chuẩn bị: cân nhà bếp, sổ ghi chép, găng tay, túi đựng riêng cho từng loại rác.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Mỗi ngày, đeo găng tay, phân rác trong nhà thành: rác hữu cơ dễ phân giải (vỏ rau, thức ăn thừa); rác khó phân huỷ (nhựa, kim loại, thuỷ tinh); rác nguy hại (pin, thuốc hết hạn).',
            'Cân từng loại rồi ghi vào bảng. Không mở hay tự xử lí rác nguy hại.',
            'Cuối tuần, tính tỉ lệ phần trăm của mỗi loại và vẽ biểu đồ.',
            'Đề xuất cách xử lí rác hữu cơ bằng vi sinh vật phù hợp với gia đình em.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng số liệu $7$ ngày, biểu đồ tỉ lệ các loại rác, một đoạn ngắn nêu đề xuất và lí do. Rửa tay sạch sau mỗi lần phân loại rác.',
        },
      ],
    },
  ],
  explore: {
    title: 'Hồ ô nhiễm',
    instruction:
      'Thêm vi sinh vật, bật hoặc tắt sục khí, rồi cho thời gian trôi và xem đồ thị. Sau đó đổi sang kim loại nặng: kim loại có mất đi không, hay chỉ chuyển sang nơi khác?',
  },
  examples: [
    {
      problem:
        'Sau khi xử lí bằng vi sinh vật, lượng ion kim loại nặng trong một mẫu nước giảm từ $5$ mg/L xuống $0{,}5$ mg/L. Tính hiệu suất loại ion kim loại khỏi nước. Có thể kết luận vi sinh vật đã phân huỷ $4{,}5$ mg kim loại trong mỗi lít nước không?',
      steps: [
        'Lượng ion đã rời khỏi nước: $5 - 0{,}5 = 4{,}5$ mg/L.',
        'Hiệu suất: $\\dfrac{4{,}5}{5} \\cdot 100\\% = 90\\%$.',
        'Kim loại là nguyên tố nên không bị phân huỷ. $4{,}5$ mg đó đã chuyển vào sinh khối, màng nhầy hoặc cặn kết tủa.',
      ],
      answer:
        'Hiệu suất là $90\\%$. Không thể kết luận như vậy: kim loại chỉ chuyển dạng và chuyển chỗ, nên cần thu sinh khối và cặn để xử lí tiếp.',
    },
    {
      problem:
        'Một xã có hai phương án xử lí rơm rạ sau mùa gặt: đốt ngay tại ruộng, hoặc ủ với chế phẩm vi sinh vật. Hãy so sánh và chọn phương án phù hợp về lâu dài.',
      steps: [
        'Đốt: nhanh và đơn giản, nhưng tạo khói, bụi mịn gây ô nhiễm không khí và không thu được sản phẩm nào đáng kể.',
        'Ủ: vi sinh vật tiết cellulase thuỷ phân cellulose trong rơm rạ, rồi chuyển hoá dần thành chất mùn. Cách này chậm hơn nhưng không tạo khói và cho phân bón hữu cơ.',
      ],
      answer:
        'Nên chọn ủ với chế phẩm vi sinh vật: tốn nhiều thời gian hơn, nhưng không gây ô nhiễm không khí và tạo được phân bón hữu cơ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Vì sao vi sinh vật là giải pháp hiệu quả để xử lí ô nhiễm môi trường?',
      options: [
        'Chúng sinh trưởng, trao đổi chất và sinh sản nhanh, nuôi cấy được để có sinh khối lớn',
        'Chúng có kích thước nhỏ nên không cần chất dinh dưỡng để tồn tại trong môi trường',
        'Mọi loài vi sinh vật đều phân giải được mọi loại chất gây ô nhiễm trong tự nhiên',
        'Chúng phân huỷ được kim loại nặng thành các nguyên tố nhẹ và không độc',
      ],
      answer: 0,
      hints: ['Nghĩ đến tốc độ tăng số lượng của một quần thể vi khuẩn.'],
      solution:
        'Vi sinh vật sinh trưởng, trao đổi chất và sinh sản nhanh, có thể nuôi cấy để tạo sinh khối lớn. Mỗi nhóm chỉ chuyển hoá một số chất nhất định, và kim loại không bị phân huỷ.',
    },
    {
      type: 'multi',
      prompt: 'Những nguyên nhân nào gây ô nhiễm kim loại nặng?',
      options: [
        'Nước thải công nghiệp chưa được xử lí đúng quy trình',
        'Rác thải sinh hoạt không được xử lí đúng cách',
        'Lượng thuốc trừ sâu dư thừa trong nông nghiệp',
        'Ủ rơm rạ thành phân bón hữu cơ',
      ],
      answers: [0, 1, 2],
      hints: ['Rơm rạ chủ yếu chứa chất hữu cơ như cellulose.'],
      solution:
        'Nước thải công nghiệp, rác sinh hoạt và thuốc trừ sâu dư thừa đều có thể đưa kim loại nặng vào môi trường. Ủ rơm rạ là cách xử lí chất thải hữu cơ.',
    },
    {
      type: 'choice',
      prompt: 'Vi sinh vật xử lí kim loại nặng bằng cách nào?',
      options: [
        'Hấp thụ, lưu giữ, thay đổi điện tích, chuyển ion thành dạng không độc hoặc kết tủa',
        'Thuỷ phân kim loại thành đường đơn rồi dùng làm nguồn carbon cho hô hấp',
        'Lên men kim loại thành ethanol và khí $\\mathrm{CO_2}$ rồi thải ra ngoài',
        'Oxi hoá hoàn toàn kim loại thành khí $\\mathrm{CO_2}$ và nước',
      ],
      answer: 0,
      hints: ['Kim loại là nguyên tố, không chứa carbon để làm nguồn năng lượng.'],
      solution:
        'Vi sinh vật hấp thụ, lưu giữ và thay đổi trạng thái điện tích của kim loại, chuyển ion thành dạng không độc, kết tủa hoặc tích tụ trong màng nhầy.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đối tượng cần xử lí với cách dùng vi sinh vật phù hợp.',
      left: ['Mùi hôi chuồng trại', 'Nước thải y tế', 'Rơm rạ sau mùa gặt'],
      right: [
        'Chế phẩm chứa Bacillus và Streptomyces',
        'Nhóm vi khuẩn Betaproteobacteria',
        'Ủ với vi sinh vật phân giải cellulose',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Rơm rạ giàu cellulose, nên cần vi sinh vật có cellulase.'],
      solution:
        'Mùi chuồng trại: chế phẩm chứa Bacillus và Streptomyces. Nước thải y tế: Betaproteobacteria. Rơm rạ: ủ với vi sinh vật phân giải cellulose.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp quá trình vi sinh vật sử dụng cellulose trong rơm rạ.',
      items: [
        'Vi sinh vật tiết cellulase ra môi trường',
        'Cellulose bị thuỷ phân thành đường đơn',
        'Vi sinh vật hấp thụ đường đơn',
        'Đường đơn được dùng cho hô hấp và lên men',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Cellulose có phân tử rất lớn, không đi qua màng tế bào được.'],
      solution:
        'Enzyme được tiết ra trước, thuỷ phân cellulose thành đường đơn; đường đơn đi vào tế bào, làm nguồn carbon cho hô hấp và lên men.',
    },
    {
      type: 'number',
      prompt:
        'Một mẫu nước thải có lượng chất hữu cơ tương ứng $200$ mg/L. Sau xử lí bằng vi sinh vật còn $30$ mg/L. Hiệu suất xử lí bằng bao nhiêu phần trăm?',
      answer: 85,
      unit: '%',
      hints: ['Tính lượng đã giảm.', 'Lấy lượng đã giảm chia cho lượng ban đầu.'],
      solution:
        'Đã giảm $200 - 30 = 170$ mg/L. Hiệu suất: $\\dfrac{170}{200} \\cdot 100\\% = 85\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Nồng độ ion kim loại nặng trong một mẫu nước giảm từ $1{,}2$ mg/L xuống $0{,}3$ mg/L nhờ vi sinh vật. Hiệu suất loại ion khỏi nước bằng bao nhiêu phần trăm?',
      answer: 75,
      unit: '%',
      hints: ['Lượng đã giảm bằng $1{,}2 - 0{,}3$.'],
      solution:
        'Đã giảm $1{,}2 - 0{,}3 = 0{,}9$ mg/L. Hiệu suất: $\\dfrac{0{,}9}{1{,}2} \\cdot 100\\% = 75\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Thêm thật nhiều vi sinh vật hiếu khí vào một hồ giàu chất hữu cơ mà không sục khí. Điều gì dễ xảy ra nhất?',
      options: [
        'Oxygen hoà tan cạn dần, tốc độ phân giải chậm lại',
        'Oxygen hoà tan tăng lên, vì vi sinh vật tạo ra oxygen',
        'Chất hữu cơ biến mất ngay trong ngày đầu tiên',
        'Vi sinh vật chuyển sang phân huỷ cả kim loại nặng',
      ],
      answer: 0,
      hints: ['Vi sinh vật hiếu khí cần gì để hô hấp?'],
      solution:
        'Vi sinh vật hiếu khí dùng oxygen để hô hấp. Càng nhiều vi sinh vật, oxygen càng nhanh cạn nếu không được bổ sung, nên phân giải chậm lại.',
    },
  ],
  takeaways: [
    'Ô nhiễm môi trường được xác định qua nguồn gây ô nhiễm, khả năng lan truyền và đối tượng chịu tác động.',
    'Vi sinh vật sinh trưởng, trao đổi chất và sinh sản nhanh, nên là giải pháp xử lí ô nhiễm hiệu quả.',
    'Với kim loại nặng, vi sinh vật hấp thụ, lưu giữ, chuyển sang dạng ít độc; kim loại không bị phân huỷ.',
    'Với chất hữu cơ, vi sinh vật tiết enzyme thuỷ phân chất lớn thành chất đơn giản rồi dùng cho hô hấp, lên men.',
  ],
};

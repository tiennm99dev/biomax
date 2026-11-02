/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vi sinh vật tổng hợp và phân giải các chất rất nhanh; quần thể sinh trưởng theo thời gian thế hệ, đi qua bốn pha trong nuôi cấy không liên tục, chịu ảnh hưởng của yếu tố vật lí, hoá học, và sinh sản bằng phân đôi, bào tử hay nảy chồi.',
  intro:
    'Một vi khuẩn E. coli cứ khoảng 20 phút lại phân chia một lần. Nếu không có gì cản trở, từ một tế bào, sau một ngày số con cháu của nó sẽ là một con số khổng lồ. Vì sao trong thực tế điều đó không xảy ra, và ta có thể làm gì để kiểm soát vi sinh vật?',
  objectives: [
    'Trình bày được quá trình tổng hợp, phân giải các chất ở vi sinh vật và ứng dụng.',
    'Nêu được khái niệm sinh trưởng, thời gian thế hệ và tính được số tế bào theo công thức.',
    'Mô tả được bốn pha sinh trưởng trong nuôi cấy không liên tục và phân biệt với nuôi cấy liên tục.',
    'Nêu được các yếu tố ảnh hưởng đến sinh trưởng, ý nghĩa của kháng sinh và tác hại của việc lạm dụng kháng sinh.',
    'Phân biệt được các hình thức sinh sản ở vi sinh vật.',
  ],
  sections: [
    {
      heading: 'Tổng hợp và phân giải các chất',
      blocks: [
        {
          type: 'p',
          text: 'Trong quá trình tổng hợp, tế bào dùng năng lượng để liên kết các phân tử đơn giản thành các phân tử hữu cơ phức tạp. Vi sinh vật tổng hợp được carbohydrate, protein, lipid và nucleic acid; nhiều loài tổng hợp đường đơn bằng quang hợp hoặc hoá tổng hợp.',
        },
        {
          type: 'p',
          text: 'Trong quá trình phân giải, chất hữu cơ phức tạp được biến đổi thành chất đơn giản, cung cấp nguyên liệu và năng lượng cho tế bào. Vi sinh vật dị dưỡng hoại sinh thường tiết enzyme ngoại bào phân giải các phân tử lớn ở môi trường rồi mới hấp thụ sản phẩm.',
        },
        {
          type: 'table',
          caption: 'Ứng dụng quá trình phân giải',
          head: ['Phân giải', 'Sản phẩm'],
          rows: [
            ['Protein', 'Nước mắm, nước tương'],
            ['Carbohydrate', 'Bánh mì, rượu, sữa chua, rau củ muối chua'],
            ['Chất thải hữu cơ, dầu loang, nước thải', 'Xử lí ô nhiễm môi trường'],
          ],
        },
      ],
    },
    {
      heading: 'Sinh trưởng của quần thể vi sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh trưởng và thời gian thế hệ',
          text: 'Sinh trưởng của quần thể vi sinh vật là sự tăng số lượng tế bào trong quần thể. Thời gian thế hệ ($g$) là thời gian từ khi một tế bào sinh ra đến khi tế bào đó phân chia, cũng là thời gian để số tế bào trong quần thể tăng gấp đôi.',
        },
        {
          type: 'p',
          text: 'Trong điều kiện lí tưởng, từ $N_0$ tế bào ban đầu, sau $n$ lần phân chia trong thời gian $t$, số tế bào là:',
        },
        { type: 'tex', tex: 'N_t = N_0 \\cdot 2^{n}, \\qquad n = \\dfrac{t}{g}' },
        {
          type: 'table',
          caption: 'Bốn pha sinh trưởng trong nuôi cấy không liên tục',
          head: ['Pha', 'Đặc điểm', 'Môi trường'],
          rows: [
            [
              'Tiềm phát (lag)',
              'Vi khuẩn thích ứng, tổng hợp vật chất chuẩn bị phân chia; số tế bào gần như không đổi',
              'Dinh dưỡng đầy đủ',
            ],
            [
              'Luỹ thừa (log)',
              'Phân chia mạnh mẽ, số tế bào tăng theo luỹ thừa, đạt cực đại ở cuối pha',
              'Dinh dưỡng đầy đủ nhưng tiêu hao nhanh',
            ],
            [
              'Cân bằng',
              'Tốc độ sinh trưởng giảm; số tế bào sinh ra cân bằng với số chết đi',
              'Dinh dưỡng giảm, chất độc hại tăng',
            ],
            [
              'Suy vong',
              'Số tế bào trong quần thể ngày càng giảm',
              'Dinh dưỡng cạn kiệt, chất độc hại tích luỹ nhiều',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Trong nuôi cấy liên tục, môi trường thường xuyên được bổ sung chất dinh dưỡng và loại bỏ sản phẩm trao đổi chất, nên không có pha suy vong; quần thể được duy trì ở mức cân bằng để năng suất cao nhất. Cách này dùng để sản xuất sinh khối, tách chiết vitamin, enzyme, chất kháng sinh.',
        },
      ],
    },
    {
      heading: 'Các yếu tố ảnh hưởng đến sinh trưởng',
      blocks: [
        {
          type: 'table',
          caption: 'Các yếu tố vật lí và cách con người vận dụng',
          head: ['Yếu tố', 'Ảnh hưởng', 'Vận dụng'],
          rows: [
            [
              'Nhiệt độ',
              'Tác động đến tốc độ phản ứng sinh hoá trong tế bào',
              'Nhiệt độ cao để thanh trùng, nhiệt độ thấp để kìm hãm',
            ],
            [
              'Độ ẩm',
              'Nước hoà tan dinh dưỡng; phần lớn vi sinh vật cần độ ẩm trên $90\\%$, xạ khuẩn và nấm sợi chịu được độ ẩm thấp hơn',
              'Phơi khô, sấy khô để bảo quản',
            ],
            [
              'pH',
              'Tác động đến tính thấm qua màng, hoạt hoá enzyme, hình thành ATP. Có nhóm ưa acid, ưa kiềm và ưa pH trung tính',
              'Điều chỉnh pH để ức chế vi sinh vật gây hại, kích thích vi sinh vật có lợi',
            ],
            [
              'Ánh sáng',
              'Cần cho vi sinh vật quang tự dưỡng; tác động đến bào tử, tổng hợp sắc tố, hướng sáng',
              'Dùng bức xạ điện từ để ức chế, tiêu diệt vi sinh vật',
            ],
            [
              'Áp suất thẩm thấu',
              'Áp suất cao gây co nguyên sinh, tế bào không phân chia được; áp suất thấp làm tế bào trương nước, có thể vỡ',
              'Ướp muối, ướp đường để bảo quản thực phẩm',
            ],
          ],
        },
        { type: 'widget', name: 'nhiet-do' },
        {
          type: 'p',
          text: 'Các yếu tố hoá học gồm chất dinh dưỡng và chất ức chế. Protein, carbohydrate, lipid, ion khoáng là chất dinh dưỡng. Nhân tố sinh trưởng là những chất vi sinh vật cần với lượng rất ít như một số amino acid, vitamin, nguyên tố vi lượng; vi sinh vật không tự tổng hợp được chúng gọi là khuyết dưỡng, tự tổng hợp được gọi là nguyên dưỡng.',
        },
        {
          type: 'p',
          text: 'Một số chất hoá học ức chế sinh trưởng như cồn, hợp chất phenol, iodine, chlorine, aldehyde, kim loại nặng nên được dùng để khử trùng, tẩy uế.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Kháng sinh và kháng kháng sinh',
          text: 'Kháng sinh ức chế hoặc tiêu diệt vi khuẩn một cách có chọn lọc, chiết xuất từ vi sinh vật hoặc tổng hợp nhân tạo. Dùng kháng sinh không đúng chỉ định, tự ý dùng thuốc, lạm dụng trong chăn nuôi làm tăng vi khuẩn kháng thuốc, khiến việc điều trị khó khăn, tốn kém, thậm chí không thể chữa được. Kháng sinh không có tác dụng với virus.',
        },
      ],
    },
    {
      heading: 'Các hình thức sinh sản',
      blocks: [
        {
          type: 'table',
          caption: 'Ba hình thức sinh sản chính',
          head: ['Hình thức', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Phân đôi',
              'Một tế bào mẹ chia thành hai tế bào con giống nhau; phổ biến nhất. Nhân thực có thể tiếp hợp rồi mới phân đôi',
              'Vi khuẩn, trùng biến hình, trùng giày',
            ],
            [
              'Bào tử',
              'Nấm tạo bào tử vô tính hoặc hữu tính, một số vi khuẩn tạo ngoại bào tử; bào tử phát tán thành cá thể mới',
              'Bào tử đính ở nấm mốc, bào tử tiếp hợp ở nấm tiếp hợp, bào tử đốt ở xạ khuẩn',
            ],
            [
              'Nảy chồi',
              'Cá thể con hình thành ở một phía của cá thể mẹ rồi tách ra; một mẹ có thể nảy nhiều chồi',
              'Nấm men Saccharomyces cerevisiae',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nội bào tử không phải để sinh sản',
          text: 'Nội bào tử (ở các chi Bacillus, Clostridium) không có chức năng sinh sản mà giúp vi khuẩn sống tiềm sinh khi môi trường bất lợi.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đồ thị sinh trưởng quần thể vi khuẩn',
    instruction:
      'Kéo thanh thời gian thế hệ và pha tiềm phát để xem đường cong thay đổi, kéo thanh thời điểm để đọc số tế bào và pha. Đổi sang nuôi cấy liên tục và so sánh; đổi thang trục để thấy vì sao người ta vẽ theo luỹ thừa.',
  },
  examples: [
    {
      problem:
        'Trong điều kiện lí tưởng, vi khuẩn E. coli có $g = 20$ phút. Từ $100$ tế bào, sau $2$ giờ có bao nhiêu tế bào?',
      steps: [
        'Đổi đơn vị: $t = 2$ giờ $= 120$ phút.',
        'Số lần phân chia: $n = \\dfrac{t}{g} = \\dfrac{120}{20} = 6$.',
        'Số tế bào: $N_t = 100 \\cdot 2^{6} = 100 \\cdot 64 = 6\\,400$.',
      ],
      answer: '$6\\,400$ tế bào.',
    },
    {
      problem:
        'Một quần thể ban đầu có $500$ tế bào, sau $3$ giờ có $16\\,000$ tế bào, quần thể vẫn ở pha luỹ thừa suốt thời gian đó. Tính thời gian thế hệ.',
      steps: [
        'Từ $N_t = N_0 \\cdot 2^{n}$: $2^{n} = \\dfrac{16\\,000}{500} = 32$, nên $n = 5$.',
        'Thời gian: $t = 3$ giờ $= 180$ phút.',
        '$g = \\dfrac{t}{n} = \\dfrac{180}{5} = 36$ phút.',
      ],
      answer: '$g = 36$ phút.',
    },
    {
      problem:
        'Để thu nhiều sinh khối nhất khi nuôi cấy không liên tục, nên thu hoạch ở thời điểm nào? Vì sao muối dưa, ướp thịt lại giữ được thực phẩm lâu hơn?',
      steps: [
        'Số tế bào đạt cực đại ở cuối pha luỹ thừa và đầu pha cân bằng, nên thu hoạch lúc đó.',
        'Muối tạo áp suất thẩm thấu cao, làm vi sinh vật gây hỏng co nguyên sinh, không phân chia được.',
      ],
      answer:
        'Thu ở cuối pha luỹ thừa, đầu pha cân bằng; muối tạo áp suất thẩm thấu cao, ức chế vi sinh vật gây hỏng.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Từ $50$ tế bào vi khuẩn có $g = 30$ phút, trong điều kiện lí tưởng, sau $3$ giờ có bao nhiêu tế bào?',
      answer: 3200,
      unit: 'tế bào',
      hints: ['Đổi $3$ giờ ra phút, rồi tính $n = t / g$.', '$n = 6$; hãy tính $50 \\cdot 2^{6}$.'],
      solution:
        '$n = \\dfrac{180}{30} = 6$. $N_t = 50 \\cdot 2^{6} = 50 \\cdot 64 = 3\\,200$ tế bào.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể tăng từ $200$ lên $25\\,600$ tế bào. Quần thể đã phân chia bao nhiêu lần?',
      answer: 7,
      unit: 'lần',
      hints: ['Tính $2^{n} = N_t / N_0$.', 'Tìm $n$ sao cho $2^{n} = 128$.'],
      solution: '$2^{n} = \\dfrac{25\\,600}{200} = 128 = 2^{7}$, nên $n = 7$.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể ở pha luỹ thừa có $g$ không đổi. Sau $100$ phút, số tế bào tăng gấp $32$ lần. Thời gian thế hệ là bao nhiêu phút?',
      answer: 20,
      unit: 'phút',
      hints: ['Gấp $32$ lần nghĩa là $2^{n} = 32$.'],
      solution: '$2^{n} = 32$ nên $n = 5$. $g = \\dfrac{100}{5} = 20$ phút.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp bốn pha sinh trưởng trong nuôi cấy không liên tục theo thứ tự thời gian.',
      items: ['Pha cân bằng', 'Pha luỹ thừa', 'Pha suy vong', 'Pha tiềm phát'],
      answer: [3, 1, 0, 2],
      hints: ['Vi khuẩn cần thích ứng với môi trường trước khi phân chia mạnh.'],
      solution: 'Pha tiềm phát, pha luỹ thừa, pha cân bằng, pha suy vong.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi pha với đặc điểm của nó.',
      left: ['Pha tiềm phát', 'Pha luỹ thừa', 'Pha cân bằng', 'Pha suy vong'],
      right: [
        'Tế bào thích ứng, số lượng gần như không đổi',
        'Số tế bào tăng nhanh nhất',
        'Số tế bào sinh ra bằng số tế bào chết đi',
        'Số tế bào giảm dần',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Nhớ lại hình dạng đồ thị ở mỗi pha.'],
      solution:
        'Tiềm phát: thích ứng. Luỹ thừa: tăng nhanh nhất. Cân bằng: sinh ra bằng chết đi. Suy vong: giảm dần.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trong nuôi cấy liên tục không có pha suy vong?',
      options: [
        'Vì dinh dưỡng được bổ sung và sản phẩm trao đổi chất được lấy đi thường xuyên',
        'Vì vi khuẩn trong môi trường này không bao giờ phân chia',
        'Vì thời gian thế hệ của vi khuẩn dài ra rất nhiều',
        'Vì có thêm kháng sinh vào môi trường',
      ],
      answer: 0,
      hints: ['Pha suy vong xảy ra do cạn dinh dưỡng và tích luỹ chất độc.'],
      solution:
        'Khi dinh dưỡng luôn đủ và chất độc hại được lấy đi, nguyên nhân gây suy vong không còn, quần thể duy trì ở mức cân bằng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nhóm vi sinh vật với khoảng nhiệt độ thích hợp.',
      left: ['Ưa lạnh', 'Ưa ấm', 'Ưa nhiệt', 'Ưa siêu nhiệt'],
      right: ['Dưới $15$ °C', '$20$ đến $40$ °C', '$55$ đến $65$ °C', '$75$ đến $100$ °C'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Nhiệt độ cơ thể người thuộc nhóm ưa ấm.'],
      solution:
        'Ưa lạnh: dưới $15$ °C. Ưa ấm: $20$ đến $40$ °C. Ưa nhiệt: $55$ đến $65$ °C. Ưa siêu nhiệt: $75$ đến $100$ °C.',
    },
    {
      type: 'choice',
      prompt: 'Ướp muối thịt, cá giữ được lâu là do yếu tố nào ức chế vi sinh vật gây hỏng?',
      options: ['Áp suất thẩm thấu cao', 'pH kiềm', 'Ánh sáng mạnh', 'Nhiệt độ cao'],
      answer: 0,
      hints: ['Nghĩ tới nước đi ra khỏi tế bào trong môi trường rất mặn.'],
      solution:
        'Muối tạo áp suất thẩm thấu cao, tế bào mất nước, co nguyên sinh và không phân chia được.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào góp phần gây ra hiện tượng kháng kháng sinh?',
      options: [
        'Tự ý mua và dùng kháng sinh khi chưa có chỉ định',
        'Lạm dụng kháng sinh trong chăn nuôi',
        'Dùng kháng sinh đúng liều, đúng thời gian theo chỉ định của bác sĩ',
        'Dùng kháng sinh để chữa bệnh do virus',
      ],
      answers: [0, 1, 3],
      hints: [
        'Kháng sinh dùng sai mục đích hoặc thừa đều tạo điều kiện chọn lọc vi khuẩn kháng thuốc.',
      ],
      solution:
        'Dùng theo chỉ định của bác sĩ là đúng cách. Tự ý dùng, lạm dụng trong chăn nuôi và dùng cho bệnh do virus (kháng sinh không có tác dụng) đều làm tăng vi khuẩn kháng thuốc.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hình thức sinh sản với sinh vật điển hình.',
      left: ['Phân đôi', 'Nảy chồi', 'Bào tử đính'],
      right: ['Vi khuẩn', 'Nấm men', 'Nấm mốc'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Nấm men Saccharomyces là ví dụ quen thuộc của nảy chồi.'],
      solution: 'Vi khuẩn phân đôi, nấm men nảy chồi, nấm mốc tạo bào tử đính.',
    },
    {
      type: 'choice',
      prompt: 'Nội bào tử ở vi khuẩn Bacillus có vai trò gì?',
      options: [
        'Giúp vi khuẩn sống tiềm sinh khi môi trường bất lợi',
        'Giúp vi khuẩn sinh sản nhanh hơn',
        'Giúp vi khuẩn quang hợp',
        'Giúp vi khuẩn tiếp hợp với nhau',
      ],
      answer: 0,
      hints: ['Nội bào tử không có chức năng sinh sản.'],
      solution: 'Nội bào tử giúp vi khuẩn sống tiềm sinh khi gặp điều kiện bất lợi.',
    },
  ],
  takeaways: [
    'Vi sinh vật tổng hợp các chất cần thiết và phân giải chất phức tạp để lấy nguyên liệu, năng lượng; nhiều quá trình đó được ứng dụng trong đời sống.',
    'Sinh trưởng là tăng số tế bào: $N_t = N_0 \\cdot 2^{n}$ với $n = t / g$.',
    'Nuôi cấy không liên tục có bốn pha: tiềm phát, luỹ thừa, cân bằng, suy vong; nuôi cấy liên tục không có pha suy vong.',
    'Sinh trưởng chịu ảnh hưởng của yếu tố vật lí (nhiệt độ, độ ẩm, pH, ánh sáng, áp suất thẩm thấu) và hoá học (dinh dưỡng, chất ức chế, kháng sinh).',
    'Vi sinh vật sinh sản bằng phân đôi, bào tử hoặc nảy chồi; lạm dụng kháng sinh làm tăng vi khuẩn kháng thuốc.',
  ],
};

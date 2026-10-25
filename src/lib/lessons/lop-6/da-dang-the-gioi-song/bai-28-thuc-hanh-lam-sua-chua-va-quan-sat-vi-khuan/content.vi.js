/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: làm tiêu bản sữa chua để quan sát vi khuẩn lactic dưới kính hiển vi và tự làm sữa chua từ sữa đặc, nước ấm khoảng 50 °C và sữa chua giống, ủ ấm 10 đến 12 giờ.',
  intro:
    'Sữa chua là món ăn quen thuộc, nhưng ít ai nghĩ rằng mỗi thìa sữa chua chứa hàng triệu vi khuẩn còn sống. Chính những vi khuẩn lactic này đã biến sữa lỏng, ngọt thành sữa chua đông mịn, chua dịu. Trong bài thực hành này, em sẽ nhìn tận mắt chúng dưới kính hiển vi và tự tay làm sữa chua.',
  objectives: [
    'Làm được tiêu bản và quan sát được vi khuẩn trong sữa chua bằng kính hiển vi; vẽ được hình dạng vi khuẩn quan sát được.',
    'Thực hiện được các bước làm sữa chua.',
    'Giải thích được vai trò của vi khuẩn lactic và lí do của từng bước: nước ấm vừa, ủ ấm, cất tủ lạnh.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: kính hiển vi có vật kính $10\\times$ và $40\\times$, lam kính, lamen, ống nhỏ giọt, giấy thấm, nhiệt kế, cốc thủy tinh $1{,}2$ lít, thìa khuấy, ấm đun nước, thùng xốp có nắp, các lọ thủy tinh nhỏ có nắp.',
            'Nguyên liệu: hai hộp sữa chua không đường (để ở nhiệt độ phòng khoảng $25\\ ^\\circ\\text{C}$ từ 1 đến 2 giờ trước khi làm), một hộp sữa đặc có đường $380$ g, $1$ lít nước uống, nước cất.',
            'Tiêu bản cố định một số loài vi khuẩn khác (nếu có).',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn và vệ sinh',
          text: 'Cẩn thận khi đun và rót nước nóng. Rửa sạch, tráng nước sôi các cốc, thìa, lọ trước khi làm để không lẫn vi khuẩn gây hỏng sữa. Sữa chua dùng làm tiêu bản không được ăn. Lam kính, lamen dễ vỡ, cầm nhẹ tay.',
        },
      ],
    },
    {
      heading: 'Quan sát vi khuẩn trong sữa chua',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Hòa khoảng một thìa sữa chua không đường với $10$ mL nước cất.',
            'Dùng ống nhỏ giọt nhỏ một giọt hỗn hợp lên lam kính, đậy lamen lại.',
            'Dùng giấy thấm hút phần nước tràn ra xung quanh lamen.',
            'Đặt tiêu bản lên bàn kính, điều chỉnh cho mẫu vật nằm đúng giữa đường đi của ánh sáng.',
            'Quan sát ở vật kính $10\\times$ để tìm vùng có nhiều vi khuẩn.',
            'Đưa vùng đó vào giữa trường nhìn rồi chuyển sang vật kính $40\\times$ để thấy rõ hình dạng vi khuẩn.',
          ],
        },
        {
          type: 'p',
          text: 'Với thị kính $10\\times$, vật kính $40\\times$ cho ảnh phóng to $10 \\cdot 40 = 400$ lần. Vi khuẩn lactic trong sữa chua chủ yếu có dạng hình que, đứng riêng lẻ hoặc xếp thành chuỗi; có loại hình cầu xếp thành chuỗi. Em vẽ hình vi khuẩn quan sát được ở mỗi vật kính vào vở.',
        },
        {
          type: 'p',
          text: 'Nếu có tiêu bản cố định của các loài vi khuẩn khác, em quan sát chúng ở vật kính $10\\times$ rồi $40\\times$ và so sánh hình dạng với vi khuẩn trong sữa chua.',
        },
      ],
    },
    {
      heading: 'Làm sữa chua',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Đun sôi $1$ lít nước, để nguội đến khoảng $50\\ ^\\circ\\text{C}$ (dùng nhiệt kế để đo).',
            'Cho sữa đặc vào cốc thủy tinh, thêm nước ấm cho đủ $1$ lít, khuấy cho sữa tan hết.',
            'Cho hai hộp sữa chua không đường vào, khuấy đều.',
            'Rót hỗn hợp vào các lọ thủy tinh, đậy nắp, xếp vào thùng xốp, đậy kín nắp thùng và ủ trong 10 đến 12 giờ.',
            'Lấy các lọ sữa chua ra và cho vào tủ lạnh.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao sữa thành sữa chua?',
          text: 'Vi khuẩn lactic trong sữa chua giống sinh sản rất nhanh khi được ủ ấm. Chúng biến đường trong sữa thành acid lactic: acid làm sữa đông lại và có vị chua. Sữa chua giống chính là nguồn vi khuẩn lactic ban đầu.',
        },
        {
          type: 'table',
          caption: 'Lí do của các bước quan trọng',
          head: ['Việc làm', 'Lí do'],
          rows: [
            [
              'Chỉ cho sữa chua giống khi hỗn hợp ấm khoảng $50\\ ^\\circ\\text{C}$, không dùng nước sôi',
              'Nhiệt độ cao tiêu diệt vi khuẩn lactic, sữa sẽ không đông',
            ],
            ['Ủ kín trong thùng xốp', 'Giữ ấm để vi khuẩn lactic hoạt động mạnh, sinh sản nhanh'],
            [
              'Cho vào tủ lạnh khi sữa đã đông',
              'Nhiệt độ thấp làm vi khuẩn lactic hoạt động chậm lại, sữa chua không bị chua quá',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em sắp xếp lại các bước làm sữa chua và thử thay đổi nhiệt độ hỗn hợp, thời gian ủ để xem kết quả.',
        },
      ],
    },
    {
      heading: 'Báo cáo kết quả',
      blocks: [
        {
          type: 'list',
          items: [
            'Vẽ hình dạng vi khuẩn trong sữa chua quan sát được ở vật kính $10\\times$ và $40\\times$; ghi rõ độ phóng đại.',
            'Mô tả sữa chua nhóm em làm được: độ đông, màu, mùi, vị sau khi ủ.',
            'Trả lời: vì sao không dùng nước sôi để pha sữa chua giống; vì sao phải cho sữa chua vào tủ lạnh sau khi ủ.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Làm sữa chua ảo',
    instruction:
      'Phần 1: dùng các nút mũi tên đưa các bước làm sữa chua về đúng thứ tự rồi bấm "Kiểm tra". Phần 2: kéo thanh nhiệt độ hỗn hợp khi cho sữa chua giống và thanh thời gian ủ, quan sát lọ sữa chua và đọc nhận xét.',
  },
  examples: [
    {
      problem:
        'Nhóm của Bình đun sôi nước rồi pha ngay sữa đặc và sữa chua giống khi nước còn khoảng $90\\ ^\\circ\\text{C}$, ủ 12 giờ. Sữa vẫn lỏng và có mùi lạ. Hãy giải thích và nêu cách sửa.',
      steps: [
        'Sữa chỉ đông và chua được nhờ vi khuẩn lactic có trong sữa chua giống.',
        'Ở khoảng $90\\ ^\\circ\\text{C}$, nhiệt độ cao đã tiêu diệt vi khuẩn lactic, nên không có acid lactic để làm sữa đông.',
        'Sữa ngọt để ấm lâu lại là môi trường tốt cho các vi khuẩn gây hỏng lọt vào, nên có mùi lạ.',
        'Cách sửa: để nước nguội đến khoảng $50\\ ^\\circ\\text{C}$ (đo bằng nhiệt kế) rồi mới pha sữa đặc và cho sữa chua giống.',
      ],
      answer:
        'Nước quá nóng đã giết vi khuẩn lactic; cần để nước nguội đến khoảng $50\\ ^\\circ\\text{C}$ trước khi pha.',
    },
    {
      problem:
        'Khi quan sát tiêu bản sữa chua bằng kính hiển vi có thị kính $10\\times$, em lần lượt dùng vật kính $10\\times$ và $40\\times$. Tính độ phóng đại ở mỗi lần quan sát và cho biết vì sao phải dùng vật kính $10\\times$ trước.',
      steps: [
        'Độ phóng đại bằng độ phóng đại của thị kính nhân với độ phóng đại của vật kính.',
        'Vật kính $10\\times$: $10 \\cdot 10 = 100$ lần; vật kính $40\\times$: $10 \\cdot 40 = 400$ lần.',
        'Vật kính $10\\times$ có trường nhìn rộng nên dễ tìm vùng có nhiều vi khuẩn; vật kính $40\\times$ trường nhìn hẹp nhưng thấy rõ hình dạng vi khuẩn.',
      ],
      answer:
        '100 lần và 400 lần; dùng vật kính $10\\times$ trước để dễ tìm mẫu, rồi mới chuyển sang $40\\times$ để quan sát rõ.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm tiêu bản và quan sát vi khuẩn trong sữa chua theo đúng thứ tự.',
      items: [
        'Chuyển sang vật kính $40\\times$ để quan sát rõ hình dạng vi khuẩn',
        'Hòa một thìa sữa chua với $10$ mL nước cất',
        'Đậy lamen, dùng giấy thấm hút nước tràn ra',
        'Quan sát ở vật kính $10\\times$ để tìm vùng có nhiều vi khuẩn',
        'Nhỏ một giọt hỗn hợp lên lam kính',
      ],
      answer: [1, 4, 2, 3, 0],
      hints: [
        'Phải có hỗn hợp loãng trước khi nhỏ lên lam kính.',
        'Luôn tìm mẫu ở vật kính nhỏ trước, rồi mới chuyển sang vật kính lớn.',
      ],
      solution:
        'Hòa sữa chua với nước cất → nhỏ một giọt lên lam kính → đậy lamen, thấm nước thừa → quan sát ở vật kính $10\\times$ → chuyển sang vật kính $40\\times$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không dùng nước sôi để pha sữa chua dùng làm giống?',
      options: [
        'Vì nước sôi làm sữa chua bị loãng',
        'Vì nhiệt độ cao tiêu diệt vi khuẩn lactic có trong sữa chua giống',
        'Vì nước sôi làm sữa đặc không tan',
        'Vì nước sôi làm vi khuẩn sinh sản quá nhanh',
      ],
      answer: 1,
      hints: ['Ở bài Vi khuẩn, đun sôi được dùng để làm gì?'],
      solution:
        'Nhiệt độ cao của nước sôi tiêu diệt vi khuẩn lactic trong sữa chua giống, nên sữa sẽ không lên men và không đông.',
    },
    {
      type: 'choice',
      prompt: 'Sau khi ủ xong, cần cho sữa chua vào tủ lạnh để',
      options: [
        'tiêu diệt hết vi khuẩn lactic',
        'hạn chế sự hoạt động quá mức của vi khuẩn lactic, sữa chua không bị chua quá',
        'làm sữa chua đông nhanh hơn trong tủ lạnh',
        'làm vi khuẩn lactic sinh sản nhanh hơn',
      ],
      answer: 1,
      hints: ['Nhiệt độ thấp ảnh hưởng thế nào đến sự sinh sản của vi khuẩn?'],
      solution:
        'Nhiệt độ thấp làm vi khuẩn lactic hoạt động chậm lại (nhưng không chết), sữa chua giữ được vị chua dịu và để được lâu hơn.',
    },
    {
      type: 'number',
      prompt:
        'Kính hiển vi có thị kính $10\\times$. Khi quan sát vi khuẩn bằng vật kính $40\\times$, ảnh được phóng to bao nhiêu lần?',
      answer: 400,
      unit: 'lần',
      hints: ['Độ phóng đại của kính bằng tích độ phóng đại của thị kính và vật kính.'],
      solution: 'Độ phóng đại: $10 \\cdot 40 = 400$ lần.',
    },
    {
      type: 'choice',
      prompt: 'Loại vi khuẩn chủ yếu biến sữa thành sữa chua là',
      options: ['vi khuẩn lactic', 'vi khuẩn lao', 'vi khuẩn E. coli', 'phẩy khuẩn tả'],
      answer: 0,
      hints: ['Tên của vi khuẩn gắn với tên acid làm sữa chua có vị chua.'],
      solution:
        'Vi khuẩn lactic biến đường trong sữa thành acid lactic, làm sữa đông và có vị chua.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các hình dạng vi khuẩn có thể quan sát được trong tiêu bản sữa chua.',
      options: ['Hình que', 'Hình cầu xếp thành chuỗi', 'Hình dấu phẩy', 'Hình xoắn'],
      answers: [0, 1],
      hints: ['Vi khuẩn lactic có hai dạng chính.'],
      solution:
        'Vi khuẩn lactic trong sữa chua chủ yếu có hình que (đứng riêng hoặc xếp thành chuỗi), ngoài ra có loại hình cầu xếp thành chuỗi. Phẩy khuẩn và xoắn khuẩn không có trong sữa chua.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào làm sữa chua đông lại và có vị chua?',
      options: ['Đường', 'Acid lactic', 'Muối ăn', 'Nước'],
      answer: 1,
      hints: ['Vi khuẩn lactic tạo ra chất này từ đường trong sữa.'],
      solution:
        'Vi khuẩn lactic biến đường thành acid lactic; acid lactic làm sữa đông lại và có vị chua.',
    },
    {
      type: 'number',
      prompt:
        'Nhóm của An bắt đầu ủ sữa chua lúc 20 giờ và ủ đúng 10 giờ. Nhóm An lấy sữa chua ra lúc mấy giờ sáng hôm sau?',
      answer: 6,
      unit: 'giờ',
      hints: ['Từ 20 giờ đến 24 giờ là 4 giờ; còn lại bao nhiêu giờ nữa?'],
      solution:
        'Từ 20 giờ đến 24 giờ là 4 giờ, còn $10 - 4 = 6$ giờ: lấy sữa chua ra lúc 6 giờ sáng hôm sau.',
    },
    {
      type: 'text',
      prompt: 'Dụng cụ nào dùng để kiểm tra nước đã nguội đến khoảng 50 °C?',
      accept: ['nhiệt kế', 'cái nhiệt kế', 'nhiệt kế thủy ngân', 'nhiệt kế điện tử'],
      hints: ['Dụng cụ đo nhiệt độ.'],
      solution: 'Dùng nhiệt kế để đo nhiệt độ của nước.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải ủ các lọ sữa chua trong thùng xốp đậy kín?',
      options: [
        'Để tránh ánh sáng làm chết vi khuẩn',
        'Để giữ ấm, giúp vi khuẩn lactic hoạt động mạnh và sinh sản nhanh',
        'Để sữa chua nguội nhanh',
        'Để không khí lọt vào nuôi vi khuẩn',
      ],
      answer: 1,
      hints: ['Thùng xốp giữ nhiệt rất tốt.'],
      solution:
        'Thùng xốp đậy kín giữ cho hỗn hợp ấm lâu, nhờ đó vi khuẩn lactic hoạt động mạnh, sinh sản nhanh và sữa đông lại.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thực phẩm được làm nhờ vi khuẩn lactic.',
      options: ['Sữa chua', 'Dưa cải muối', 'Cà pháo muối', 'Bánh mì', 'Nước mía'],
      answers: [0, 1, 2],
      hints: ['Bánh mì nở nhờ một loại nấm.'],
      solution:
        'Sữa chua, dưa cải muối, cà muối đều được làm nhờ vi khuẩn lactic. Bánh mì nở nhờ nấm men; nước mía không qua lên men.',
    },
    {
      type: 'choice',
      prompt: 'Khi quan sát tiêu bản, em tìm vùng có nhiều vi khuẩn ở vật kính nào trước?',
      options: [
        'Vật kính $10\\times$',
        'Vật kính $40\\times$',
        'Vật kính nào cũng được',
        'Không cần vật kính',
      ],
      answer: 0,
      hints: ['Vật kính nào cho trường nhìn rộng hơn?'],
      solution:
        'Vật kính $10\\times$ có trường nhìn rộng nên dễ tìm mẫu; sau đó mới chuyển sang vật kính $40\\times$ để thấy rõ hình dạng.',
    },
  ],
  takeaways: [
    'Tiêu bản sữa chua: hòa sữa chua với nước cất, nhỏ giọt lên lam kính, đậy lamen, tìm mẫu ở vật kính $10\\times$ rồi quan sát ở $40\\times$.',
    'Vi khuẩn lactic trong sữa chua có hình que hoặc hình cầu, thường xếp thành chuỗi.',
    'Làm sữa chua: nước nguội đến khoảng $50\\ ^\\circ\\text{C}$, pha sữa đặc, cho sữa chua giống, ủ ấm 10 đến 12 giờ, rồi cất tủ lạnh.',
    'Vi khuẩn lactic biến đường thành acid lactic làm sữa đông và chua; nước sôi giết vi khuẩn, tủ lạnh làm chúng hoạt động chậm lại.',
  ],
};

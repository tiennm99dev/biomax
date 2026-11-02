/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành quan sát vi khuẩn trong sữa chua, làm sữa chua, muối dưa chua và tìm hiểu các sản phẩm của công nghệ vi sinh vật, từ đó giải thích các biến đổi nhờ quá trình lên men lactic.',
  intro:
    'Một hộp sữa chua nhỏ có thể biến cả lít sữa thành sữa chua, còn rổ rau cải trở thành vại dưa vàng ươm chỉ sau vài ngày. Hãy tự tay làm các sản phẩm đó và giải thích điều đang diễn ra trong lọ.',
  objectives: [
    'Thực hiện được một số phương pháp nghiên cứu vi sinh vật thông dụng: làm tiêu bản, quan sát vi khuẩn trong sữa chua.',
    'Thực hiện được đúng các bước làm sữa chua và dưa chua, tạo ra sản phẩm đảm bảo chất lượng.',
    'Giải thích được các biến đổi của sản phẩm và vai trò của từng thao tác.',
    'Nêu được nguyên lí lên men rượu ethylic nhờ nấm men.',
    'Thu thập thông tin, làm tập san về sản phẩm của công nghệ vi sinh vật.',
  ],
  sections: [
    {
      heading: 'Nhuộm và quan sát vi khuẩn trong sữa chua',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Lấy một thìa sữa chua không đường đã để ở khoảng $40$ đến $45$ °C trong $1$ đến $2$ giờ, pha loãng với $10$ mL nước cất.',
            'Hút một ít dịch đã pha loãng, nhỏ một giọt lên lam kính, đậy lamen, dùng giấy thấm nhẹ quanh viền lamen để loại nước thừa.',
            'Đặt lam kính lên bàn kính hiển vi, điều chỉnh để nhìn rõ mẫu vật.',
            'Quan sát ở vật kính $10\\times$, chỉnh vùng quan sát vào nơi có nhiều vi khuẩn, rồi chuyển sang vật kính lớn hơn.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nhuộm đơn',
          text: 'Vi khuẩn gần như trong suốt nên khó thấy khi soi tươi. Muốn chúng nổi rõ hơn, phết giọt dịch thành lớp mỏng trên lam kính, để khô, nhỏ xanh methylene phủ lên trong khoảng $1$ phút, rửa nhẹ bằng nước, thấm khô rồi đem quan sát.',
        },
        {
          type: 'p',
          text: 'Kết quả: vi khuẩn lactic trong sữa chua có dạng hình que, đứng riêng lẻ hoặc tạo thành chuỗi.',
        },
        { type: 'widget', name: 'quan-sat' },
      ],
    },
    {
      heading: 'Làm sữa chua',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng $1$ lít nước ấm khoảng $50$ đến $55$ °C, cho sữa đặc có đường vào khuấy đều.',
            'Cho hộp sữa chua làm men giống vào hỗn hợp, tiếp tục khuấy đều.',
            'Đổ hỗn hợp vào các lọ, không đổ quá đầy, đậy kín.',
            'Ủ các lọ ở nhiệt độ ổn định khoảng $40$ °C.',
            'Sau khoảng $8$ đến $10$ giờ, lấy các lọ ra và để vào ngăn mát tủ lạnh.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Giải thích',
          text: 'Vi khuẩn lactic biến đường thành lactic acid. Acid làm protein sữa đông tụ, nên sữa từ lỏng thành sệt, màu trắng ngà, vị ngọt giảm, vị chua tăng và có hương thơm nhẹ. Nước không được quá nóng vì nhiệt độ cao sẽ làm chết vi khuẩn lactic.',
        },
      ],
    },
    {
      heading: 'Làm dưa chua',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Phơi cải ngoài nắng cho héo. Rửa sạch hành củ, hành lá. Cắt cải và hành thành khúc dài khoảng $3$ cm.',
            'Pha nước muối dưa bằng nước đun sôi để ấm: $1$ lít nước, $3$ thìa muối hạt và $1$ thìa đường, khuấy đều.',
            'Xếp dưa vào lọ, cọng xuống trước, lá phủ lên trên, rồi thêm hành. Dùng vật nặng nén dưa xuống, đổ nước muối ngập quá mặt rau, đậy chặt.',
            'Để ở nơi thoáng mát hai ngày rồi kiểm tra màu, mùi, vị.',
          ],
        },
        {
          type: 'table',
          caption: 'Vì sao làm như vậy?',
          head: ['Thao tác', 'Lí do'],
          rows: [
            ['Phơi héo rau', 'Giảm lượng nước trong rau, dưa giòn hơn, ít bị khú'],
            ['Thêm đường', 'Cung cấp thêm thức ăn cho vi khuẩn lactic'],
            [
              'Nén chặt, đổ ngập nước',
              'Tạo điều kiện yếm khí cho vi khuẩn lactic, hạn chế vi khuẩn lên men thối',
            ],
            [
              'Dùng nước muối',
              'Nồng độ khoảng $5$ đến $6\\%$ ức chế vi sinh vật gây thối; vi khuẩn lactic vẫn hoạt động được',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Kết quả: rau chuyển từ xanh sang vàng, có vị chua thơm nhẹ đặc trưng, do vi khuẩn lactic phân giải đường trong rau thành lactic acid.',
        },
      ],
    },
    {
      heading: 'Lên men rượu ethylic',
      blocks: [
        {
          type: 'p',
          text: 'Rượu cũng là một sản phẩm lên men. Trong điều kiện yếm khí, nấm men chuyển đường thành ethanol và khí $\\mathrm{CO_2}$:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6} \\xrightarrow{\\text{nấm men}} 2\\,\\mathrm{C_2H_5OH} + 2\\,\\mathrm{CO_2}',
        },
        {
          type: 'p',
          text: 'Bình lên men vì vậy được đậy kín để hạn chế không khí, và có bọt khí nổi lên trong khi nấm men hoạt động. Sản phẩm khác với sữa chua và dưa chua, nơi vi khuẩn lactic tạo lactic acid.',
        },
      ],
    },
    {
      heading: 'Báo cáo và tập san',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mỗi nhóm thu thập hình ảnh, thông tin về một số sản phẩm của công nghệ vi sinh vật như rượu, bia, sữa chua, chất kháng sinh, vaccine qua thực tế, internet và tài liệu tham khảo, rồi sắp xếp thành báo cáo và tập san.',
        },
        {
          type: 'list',
          items: [
            'Mục đích: rèn kĩ năng thực hành, tổ chức thông tin, làm việc nhóm và trình bày.',
            'Nội dung thực hành: vẽ vi khuẩn trong sữa chua kèm độ phóng đại; ghi màu, trạng thái, mùi vị của sữa chua và dưa chua trước và sau khi lên men.',
            'Trả lời: nhận xét và giải thích sự biến đổi của sữa; vì sao phải phơi héo rau, thêm đường, đổ ngập nước và nén chặt khi làm dưa chua.',
            'Tập san: tranh ảnh và bài viết về sản phẩm, quy trình tạo ra và vi sinh vật liên quan.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Muối dưa ảo',
    instruction:
      'Chỉnh nồng độ muối, nhiệt độ và số ngày, bật hoặc tắt việc nén rau và thêm đường, rồi xem lọ dưa thay đổi. Hãy thử tìm điều kiện làm dưa đạt, rồi làm dưa hỏng để hiểu vì sao.',
  },
  examples: [
    {
      problem:
        'Một bạn cho sữa chua giống vào sữa vừa đun sôi, ủ đủ thời gian mà sữa vẫn lỏng. Hãy giải thích và cho biết cách khắc phục.',
      steps: [
        'Sữa đông tụ nhờ lactic acid do vi khuẩn lactic tạo ra.',
        'Sữa quá nóng đã làm chết phần lớn vi khuẩn lactic trong sữa chua giống.',
        'Cần để hỗn hợp nguội còn khoảng $50$ °C rồi mới cho men giống, sau đó ủ ở khoảng $40$ °C.',
      ],
      answer: 'Nhiệt độ cao làm chết vi khuẩn lactic; phải cho men khi hỗn hợp đã nguội bớt.',
    },
    {
      problem:
        'Lọ dưa của một nhóm có lớp váng trắng trên mặt và rau nổi lên khỏi nước. Hãy nêu nguyên nhân và cách làm đúng.',
      steps: [
        'Phần rau nổi tiếp xúc với không khí, tạo điều kiện cho vi sinh vật hiếu khí gây hỏng phát triển.',
        'Vi khuẩn lactic cần điều kiện yếm khí.',
        'Phải đổ nước muối ngập mặt rau và dùng vật nặng nén rau xuống.',
      ],
      answer: 'Rau tiếp xúc với không khí; cần nén chặt và đổ ngập nước muối.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm sữa chua theo đúng thứ tự.',
      items: [
        'Cho sữa chua giống vào, khuấy đều',
        'Ủ ở khoảng $40$ °C trong $8$ đến $10$ giờ',
        'Pha sữa đặc với nước ấm khoảng $50$ đến $55$ °C',
        'Đổ hỗn hợp vào các lọ, đậy kín',
        'Để vào ngăn mát tủ lạnh',
      ],
      answer: [2, 0, 3, 1, 4],
      hints: ['Pha sữa trước; tủ lạnh ở cuối để dừng quá trình lên men mạnh.'],
      solution: 'Pha sữa, cho men giống, đổ lọ, ủ ấm rồi để ngăn mát.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm dưa chua theo đúng thứ tự.',
      items: [
        'Xếp dưa vào lọ, nén bằng vật nặng, đổ nước muối ngập mặt rau',
        'Phơi héo cải, cắt khúc khoảng $3$ cm',
        'Để nơi thoáng mát hai ngày',
        'Pha nước muối với đường bằng nước đun sôi để ấm',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Rau và nước muối cần được chuẩn bị trước khi xếp vào lọ.'],
      solution: 'Sơ chế rau, pha nước muối, xếp và nén dưa, rồi để nơi thoáng mát.',
    },
    {
      type: 'choice',
      prompt: 'Vi khuẩn lactic trong sữa chua có hình dạng như thế nào dưới kính hiển vi?',
      options: [
        'Hình que, đứng riêng lẻ hoặc thành chuỗi',
        'Hình xoắn, luôn đứng riêng lẻ',
        'Hình tròn, xếp thành các tấm phẳng',
        'Dạng sợi phân nhánh',
      ],
      answer: 0,
      hints: ['Nhìn lại kết quả quan sát ở vật kính lớn.'],
      solution: 'Vi khuẩn lactic có dạng hình que, đứng riêng lẻ hoặc tạo thành chuỗi.',
    },
    {
      type: 'number',
      prompt:
        'Quan sát với thị kính $10\\times$ và vật kính $40\\times$ thì độ phóng đại của ảnh là bao nhiêu lần?',
      answer: 400,
      unit: 'lần',
      hints: ['Độ phóng đại bằng tích độ phóng đại của thị kính và vật kính.'],
      solution: '$10 \\cdot 40 = 400$ lần.',
    },
    {
      type: 'choice',
      prompt: 'Nhuộm đơn vi khuẩn trong sữa chua bằng xanh methylene nhằm mục đích gì?',
      options: [
        'Làm vi khuẩn bắt màu, nổi rõ trên nền để dễ quan sát',
        'Giữ vi khuẩn sống để xem khả năng di động',
        'Phân biệt vi khuẩn Gram dương và Gram âm',
        'Làm vi khuẩn sinh sản nhanh hơn',
      ],
      answer: 0,
      hints: ['Vi khuẩn chưa nhuộm gần như trong suốt dưới kính hiển vi.'],
      solution:
        'Nhuộm đơn dùng một thuốc nhuộm để tăng độ tương phản, nhờ đó thấy rõ hình dạng và cách sắp xếp của vi khuẩn.',
    },
    {
      type: 'choice',
      prompt:
        'Trong lên men rượu ethylic, vi sinh vật nào chuyển đường thành ethanol và $\\mathrm{CO_2}$?',
      options: ['Nấm men', 'Vi khuẩn lactic', 'Nấm mốc', 'Vi khuẩn lam'],
      answer: 0,
      hints: ['Đây cũng là vi sinh vật làm nở bột bánh mì.'],
      solution: 'Nấm men lên men đường trong điều kiện yếm khí, tạo ethanol và $\\mathrm{CO_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Khi làm sữa chua, sữa từ lỏng chuyển thành sệt là do đâu?',
      options: [
        'Lactic acid làm protein trong sữa đông tụ',
        'Đường trong sữa kết tinh lại',
        'Nước trong sữa bay hơi hết',
        'Vi khuẩn lactic tạo ra chất béo',
      ],
      answer: 0,
      hints: ['Sản phẩm chính của vi khuẩn lactic là gì?'],
      solution: 'Vi khuẩn lactic tạo lactic acid; môi trường acid làm protein sữa đông tụ.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi muối dưa phải đổ ngập nước và nén chặt rau?',
      options: [
        'Tạo điều kiện yếm khí cho vi khuẩn lactic, hạn chế vi khuẩn lên men thối',
        'Để rau hấp thụ được nhiều ánh sáng',
        'Để giảm lượng muối cần dùng',
        'Để rau không chuyển sang màu vàng',
      ],
      answer: 0,
      hints: ['Hãy nghĩ tới lượng không khí chỗ rau tiếp xúc.'],
      solution:
        'Khi rau ngập nước và được nén chặt, môi trường yếm khí giúp vi khuẩn lactic phát triển và hạn chế vi sinh vật gây thối.',
    },
    {
      type: 'choice',
      prompt: 'Thêm một ít đường vào nước muối dưa nhằm mục đích gì?',
      options: [
        'Cung cấp thêm thức ăn cho vi khuẩn lactic',
        'Tiêu diệt vi khuẩn lactic',
        'Làm dưa ngọt thay cho vị chua',
        'Làm rau chậm chuyển màu',
      ],
      answer: 0,
      hints: ['Vi khuẩn lactic lên men chất nào?'],
      solution: 'Đường là nguyên liệu để vi khuẩn lactic lên men tạo lactic acid.',
    },
    {
      type: 'choice',
      prompt:
        'Nếu muối dưa với nồng độ muối rất cao, ví dụ $15\\%$, kết quả có khả năng nhất là gì?',
      options: [
        'Dưa rất mặn, ít chua vì vi khuẩn lactic cũng bị kìm hãm',
        'Dưa chua nhanh hơn nhiều lần',
        'Dưa nhanh hỏng hơn do vi sinh vật gây thối phát triển mạnh',
        'Dưa không có gì thay đổi về vị',
      ],
      answer: 0,
      hints: ['Áp suất thẩm thấu cao ảnh hưởng đến cả vi khuẩn có lợi.'],
      solution:
        'Nồng độ muối quá cao gây áp suất thẩm thấu lớn, kìm hãm cả vi khuẩn lactic, nên dưa mặn và ít chua.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thao tác với lí do của nó.',
      left: [
        'Phơi héo rau',
        'Thêm đường',
        'Dùng nước muối đúng nồng độ',
        'Dùng nước vừa ấm khi pha sữa',
      ],
      right: [
        'Giảm nước trong rau, dưa giòn hơn, ít bị khú',
        'Cung cấp nguyên liệu lên men',
        'Ức chế vi sinh vật gây thối',
        'Giữ cho vi khuẩn lactic không bị chết',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Mỗi thao tác nhắm tới một đối tượng: rau, vi khuẩn lactic hoặc vi sinh vật gây thối.',
      ],
      solution:
        'Phơi héo giảm nước; đường là nguyên liệu lên men; muối ức chế vi sinh vật gây thối; nước vừa ấm giữ vi khuẩn lactic sống.',
    },
    {
      type: 'multi',
      prompt: 'Những sản phẩm nào sau đây là sản phẩm của công nghệ vi sinh vật?',
      options: ['Sữa chua', 'Vaccine', 'Chất kháng sinh', 'Muối ăn', 'Bia'],
      answers: [0, 1, 2, 4],
      hints: ['Một lựa chọn được khai thác từ nước biển hoặc mỏ, không liên quan đến vi sinh vật.'],
      solution:
        'Sữa chua, vaccine, chất kháng sinh và bia đều có sự tham gia của vi sinh vật; muối ăn thì không.',
    },
  ],
  takeaways: [
    'Quan sát mẫu từ vật kính nhỏ đến vật kính lớn; vi khuẩn lactic có dạng que, đứng riêng lẻ hoặc thành chuỗi.',
    'Sữa chua và dưa chua đều nhờ vi khuẩn lactic chuyển đường thành lactic acid.',
    'Làm sữa chua cần nhiệt độ ấm ổn định; làm dưa chua cần nước muối vừa phải, đường và điều kiện yếm khí.',
    'Sai một điều kiện như quá nóng, thiếu muối hay rau nổi lên đều có thể làm sản phẩm hỏng.',
  ],
};

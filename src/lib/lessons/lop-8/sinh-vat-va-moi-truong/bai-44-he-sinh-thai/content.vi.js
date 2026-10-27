/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm hệ sinh thái và các thành phần vô sinh, hữu sinh (sinh vật sản xuất, tiêu thụ, phân giải); các kiểu hệ sinh thái; chuỗi thức ăn, lưới thức ăn, tháp sinh thái; bảo vệ hệ sinh thái.',
  intro:
    'Một khu rừng hay một bể cá cảnh đều được xem là một hệ sinh thái. Trong đó, sinh vật này làm thức ăn cho sinh vật kia, xác sinh vật lại được phân giải trả về đất, nước. Nếu một loài biến mất, những loài nào sẽ bị ảnh hưởng?',
  objectives: [
    'Phát biểu được khái niệm hệ sinh thái; phân tích được các thành phần của hệ sinh thái.',
    'Lấy được ví dụ về các kiểu hệ sinh thái tự nhiên (trên cạn, dưới nước) và nhân tạo.',
    'Nêu được khái niệm chuỗi thức ăn, lưới thức ăn, sinh vật sản xuất, tiêu thụ, phân giải, tháp sinh thái; vẽ được lưới thức ăn đơn giản.',
    'Nêu được một số biện pháp bảo vệ hệ sinh thái.',
  ],
  sections: [
    {
      heading: 'Hệ sinh thái',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hệ sinh thái',
          text: 'Hệ sinh thái bao gồm quần xã sinh vật và môi trường sống của quần xã (sinh cảnh). Trong hệ sinh thái, các sinh vật luôn tác động lẫn nhau và tác động qua lại với các nhân tố vô sinh của môi trường, tạo thành một hệ thống hoàn chỉnh và tương đối ổn định.',
        },
        {
          type: 'table',
          caption: 'Các thành phần của hệ sinh thái',
          head: ['Thành phần', 'Gồm', 'Ví dụ ở hệ sinh thái rừng'],
          rows: [
            [
              'Thành phần vô sinh',
              'Ánh sáng, nhiệt độ, nước, không khí, đất, xác sinh vật…',
              'Đất rừng, lá rụng, ánh sáng, độ ẩm',
            ],
            [
              'Sinh vật sản xuất',
              'Sinh vật tự tổng hợp chất hữu cơ, chủ yếu là thực vật',
              'Cây gỗ, cỏ, dương xỉ',
            ],
            [
              'Sinh vật tiêu thụ',
              'Động vật ăn thực vật, động vật ăn thịt (tiêu thụ bậc 1, bậc 2, bậc 3…)',
              'Hươu, châu chấu, ếch, rắn, hổ',
            ],
            [
              'Sinh vật phân giải',
              'Vi khuẩn, nấm… phân giải xác và chất thải thành chất vô cơ',
              'Nấm, vi khuẩn trong đất',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Các kiểu hệ sinh thái: hệ sinh thái tự nhiên gồm hệ sinh thái trên cạn (rừng nhiệt đới, đồng cỏ, hoang mạc…) và hệ sinh thái dưới nước (nước mặn như rạn san hô, vùng biển khơi, rừng ngập mặn ven biển; nước ngọt như ao, hồ, sông, suối); hệ sinh thái nhân tạo do con người tạo ra như đồng ruộng, ao nuôi cá, rừng trồng, thành phố.',
        },
      ],
    },
    {
      heading: 'Chuỗi thức ăn và lưới thức ăn',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chuỗi thức ăn',
          text: 'Chuỗi thức ăn là một dãy nhiều loài sinh vật có quan hệ dinh dưỡng với nhau. Mỗi loài là một mắt xích: vừa là sinh vật tiêu thụ mắt xích phía trước, vừa là sinh vật bị mắt xích phía sau tiêu thụ.',
        },
        {
          type: 'p',
          text: 'Ví dụ: Cỏ → Châu chấu → Ếch → Rắn → Đại bàng. Mũi tên chỉ từ thức ăn sang sinh vật ăn nó, cũng là chiều truyền của chất và năng lượng. Mắt xích đầu tiên là sinh vật sản xuất (cỏ), tiếp theo là sinh vật tiêu thụ bậc 1 (châu chấu), bậc 2 (ếch)…',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lưới thức ăn',
          text: 'Lưới thức ăn gồm các chuỗi thức ăn có nhiều mắt xích chung. Một lưới thức ăn hoàn chỉnh gồm ba thành phần chủ yếu: sinh vật sản xuất, sinh vật tiêu thụ và sinh vật phân giải.',
        },
        {
          type: 'p',
          text: 'Trong lưới thức ăn, một loài có thể ăn nhiều loài và bị nhiều loài ăn. Khi một loài bị mất đi, các loài ăn nó thiếu thức ăn, các loài làm thức ăn cho nó có thể tăng số lượng: cả hệ sinh thái bị ảnh hưởng.',
        },
      ],
    },
    {
      heading: 'Tháp sinh thái',
      blocks: [
        {
          type: 'p',
          text: 'Tháp sinh thái gồm nhiều hình chữ nhật xếp chồng lên nhau; các hình chữ nhật có chiều cao bằng nhau, còn chiều dài khác nhau biểu thị độ lớn của các bậc dinh dưỡng. Bậc sinh vật sản xuất nằm ở đáy tháp.',
        },
        {
          type: 'table',
          head: ['Loại tháp', 'Độ lớn của mỗi bậc dinh dưỡng được tính bằng'],
          rows: [
            ['Tháp số lượng', 'Số lượng cá thể'],
            [
              'Tháp sinh khối',
              'Khối lượng tổng số của các sinh vật trên một đơn vị diện tích hoặc thể tích',
            ],
            [
              'Tháp năng lượng',
              'Năng lượng tích lũy trên một đơn vị diện tích hoặc thể tích, trong một đơn vị thời gian',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Qua mỗi bậc dinh dưỡng, phần lớn năng lượng bị mất đi qua hô hấp, chất thải và các bộ phận rơi rụng; chỉ một phần nhỏ được chuyển lên bậc trên. Vì vậy tháp năng lượng luôn có đáy rộng, đỉnh hẹp và chuỗi thức ăn thường không quá dài.',
        },
      ],
    },
    {
      heading: 'Bảo vệ các hệ sinh thái',
      blocks: [
        {
          type: 'list',
          items: [
            'Bảo vệ rừng, nhất là rừng đầu nguồn; trồng rừng, chống cháy rừng, không chặt phá rừng.',
            'Không săn bắt động vật hoang dã; xây dựng khu bảo tồn, vườn quốc gia.',
            'Khai thác tài nguyên hợp lí: không đánh bắt bằng chất nổ, xung điện; không đánh bắt cá con.',
            'Chống ô nhiễm đất, nước, không khí; xử lí rác thải, nước thải; hạn chế dùng thuốc bảo vệ thực vật.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thực hành',
          text: 'Điều tra thành phần quần xã sinh vật trong một hệ sinh thái gần trường (vườn trường, ao, ruộng): ghi tên các loài, xếp vào sinh vật sản xuất, tiêu thụ, phân giải, rồi vẽ lưới thức ăn từ các loài quan sát được.',
        },
      ],
    },
  ],
  explore: {
    title: 'Dựng lưới thức ăn đồng cỏ',
    instruction:
      'Chọn một sinh vật làm thức ăn rồi chọn sinh vật ăn nó để vẽ mũi tên; dựng đủ 9 mũi tên của lưới. Sau đó chuyển sang "Xem và loại bỏ loài", chọn "Loại bỏ loài" rồi bấm vào một loài để loại nó và xem những loài nào mất nguồn thức ăn.',
  },
  examples: [
    {
      problem:
        'Từ các sinh vật: cỏ, thỏ, chuột, đại bàng, vi khuẩn. Hãy xếp chúng vào các thành phần của hệ sinh thái và viết các chuỗi thức ăn có thể có (biết thỏ, chuột ăn cỏ; đại bàng ăn thỏ, chuột).',
      steps: [
        'Sinh vật sản xuất: cỏ. Sinh vật tiêu thụ: thỏ, chuột (bậc 1), đại bàng (bậc 2). Sinh vật phân giải: vi khuẩn.',
        'Chuỗi 1: Cỏ → Thỏ → Đại bàng.',
        'Chuỗi 2: Cỏ → Chuột → Đại bàng.',
        'Hai chuỗi có chung mắt xích cỏ và đại bàng nên tạo thành một lưới thức ăn đơn giản; vi khuẩn phân giải xác của cả ba bậc.',
      ],
      answer: 'Có hai chuỗi thức ăn: Cỏ → Thỏ → Đại bàng và Cỏ → Chuột → Đại bàng.',
    },
    {
      problem:
        'Trong lưới thức ăn ở phần khám phá, nếu châu chấu bị diệt hết bằng thuốc trừ sâu thì ếch, rắn và cỏ thay đổi thế nào?',
      steps: [
        'Ếch chỉ ăn châu chấu: mất nguồn thức ăn duy nhất, số lượng ếch giảm mạnh, có thể biến mất khỏi hệ.',
        'Rắn ăn ếch và chuột: mất một nguồn thức ăn, rắn phải ăn nhiều chuột hơn; số lượng rắn có thể giảm.',
        'Cỏ bớt một loài ăn nó nên có thể phát triển mạnh hơn trong thời gian đầu.',
      ],
      answer:
        'Ếch giảm mạnh, rắn có thể giảm và săn chuột nhiều hơn, cỏ có thể tăng: mất một loài ảnh hưởng tới cả lưới thức ăn.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hệ sinh thái bao gồm:',
      options: [
        'Quần xã sinh vật và môi trường sống của quần xã (sinh cảnh)',
        'Chỉ các quần thể động vật',
        'Một quần thể sinh vật và nơi sống của nó',
        'Các nhân tố vô sinh của môi trường',
      ],
      answer: 0,
      hints: ['Hệ sinh thái gồm cả thành phần hữu sinh và vô sinh.'],
      solution: 'Hệ sinh thái = quần xã sinh vật + sinh cảnh.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần của hệ sinh thái với ví dụ phù hợp.',
      left: ['Sinh vật sản xuất', 'Sinh vật tiêu thụ', 'Sinh vật phân giải', 'Thành phần vô sinh'],
      right: ['Nấm mốc', 'Ánh sáng mặt trời', 'Cây ngô', 'Sâu ăn lá ngô'],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Sinh vật sản xuất tự tổng hợp chất hữu cơ nhờ quang hợp.'],
      solution:
        'Cây ngô: sản xuất; sâu ăn lá: tiêu thụ; nấm mốc: phân giải; ánh sáng: thành phần vô sinh.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sinh vật thành một chuỗi thức ăn ở hệ sinh thái ao.',
      items: ['Cá', 'Chim bói cá', 'Tảo', 'Tôm'],
      answer: [2, 3, 0, 1],
      hints: ['Bắt đầu từ sinh vật sản xuất.'],
      solution: 'Tảo → Tôm → Cá → Chim bói cá.',
    },
    {
      type: 'text',
      prompt: 'Tập hợp các chuỗi thức ăn có nhiều mắt xích chung được gọi là gì?',
      accept: ['lưới thức ăn'],
      hints: ['Các chuỗi đan xen với nhau như một tấm lưới.'],
      solution: 'Đó là lưới thức ăn.',
    },
    {
      type: 'number',
      prompt:
        'Lưới thức ăn: cỏ bị châu chấu, thỏ, chuột ăn; ếch ăn châu chấu; rắn ăn ếch và chuột; đại bàng ăn chuột, thỏ và rắn. Lưới này có bao nhiêu chuỗi thức ăn?',
      answer: 4,
      unit: 'chuỗi',
      hints: [
        'Bắt đầu từ cỏ, đi theo từng nhánh tới đại bàng.',
        'Từ chuột có hai nhánh: lên rắn hoặc lên thẳng đại bàng.',
      ],
      solution:
        'Cỏ → Châu chấu → Ếch → Rắn → Đại bàng; Cỏ → Thỏ → Đại bàng; Cỏ → Chuột → Rắn → Đại bàng; Cỏ → Chuột → Đại bàng: $4$ chuỗi.',
    },
    {
      type: 'choice',
      prompt: 'Hệ sinh thái nào sau đây là hệ sinh thái nhân tạo?',
      options: ['Rừng mưa nhiệt đới', 'Rạn san hô', 'Đồng ruộng trồng lúa', 'Suối trên núi'],
      answer: 2,
      hints: ['Hệ sinh thái nhân tạo do con người tạo ra và duy trì.'],
      solution:
        'Đồng ruộng do con người tạo ra, chăm sóc: hệ sinh thái nhân tạo. Ba hệ còn lại là hệ sinh thái tự nhiên.',
    },
    {
      type: 'choice',
      prompt: 'Trong tháp sinh thái, bậc dinh dưỡng nào luôn nằm ở đáy tháp?',
      options: [
        'Sinh vật sản xuất',
        'Sinh vật tiêu thụ bậc 1',
        'Sinh vật tiêu thụ bậc cao nhất',
        'Sinh vật phân giải',
      ],
      answer: 0,
      hints: ['Đáy tháp là mắt xích đầu tiên của chuỗi thức ăn.'],
      solution: 'Sinh vật sản xuất là bậc dinh dưỡng thứ nhất, nằm ở đáy tháp.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp bảo vệ hệ sinh thái.',
      options: [
        'Trồng và bảo vệ rừng đầu nguồn',
        'Đánh bắt cá bằng chất nổ',
        'Xử lí nước thải trước khi thải ra môi trường',
        'Xây dựng khu bảo tồn thiên nhiên',
        'Phun thật nhiều thuốc trừ sâu',
      ],
      answers: [0, 2, 3],
      hints: ['Chọn các việc giữ cho sinh vật và môi trường sống của chúng ổn định.'],
      solution:
        'Trồng rừng, xử lí nước thải, lập khu bảo tồn giúp bảo vệ hệ sinh thái; chất nổ và lạm dụng thuốc trừ sâu phá hủy hệ sinh thái.',
    },
  ],
  takeaways: [
    'Hệ sinh thái gồm quần xã sinh vật và sinh cảnh; thành phần gồm vô sinh và hữu sinh (sinh vật sản xuất, tiêu thụ, phân giải).',
    'Hệ sinh thái tự nhiên (trên cạn, dưới nước) và nhân tạo (đồng ruộng, ao nuôi, thành phố…).',
    'Chuỗi thức ăn là dãy các loài có quan hệ dinh dưỡng; lưới thức ăn gồm các chuỗi có nhiều mắt xích chung.',
    'Tháp sinh thái (số lượng, sinh khối, năng lượng) có đáy là sinh vật sản xuất; năng lượng giảm dần qua các bậc.',
    'Bảo vệ hệ sinh thái: bảo vệ rừng, khu bảo tồn, khai thác hợp lí, chống ô nhiễm.',
  ],
};

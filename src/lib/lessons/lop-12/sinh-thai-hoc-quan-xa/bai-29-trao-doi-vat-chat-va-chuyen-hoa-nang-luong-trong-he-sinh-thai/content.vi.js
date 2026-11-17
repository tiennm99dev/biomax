/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Trao đổi vật chất trong hệ sinh thái qua chuỗi thức ăn và lưới thức ăn, các bậc dinh dưỡng; dòng năng lượng đi từ ánh sáng mặt trời qua các bậc dinh dưỡng và bị thất thoát dần; hiệu suất sinh thái khoảng 10%; tháp số lượng, tháp sinh khối, tháp năng lượng; hiện tượng tích tụ chất độc ở bậc dinh dưỡng cao.',
  intro:
    'Một cánh đồng cỏ nuôi được hàng trăm con thỏ, nhưng chỉ đủ nuôi vài con cáo, và hiếm khi có một loài nào chuyên ăn cáo. Vì sao càng lên cao trong chuỗi thức ăn, số lượng và sinh khối sinh vật càng giảm? Năng lượng đi đâu mất trên đường từ cỏ tới cáo?',
  objectives: [
    'Phân biệt được chuỗi thức ăn, lưới thức ăn; nêu được hai loại chuỗi thức ăn; xác định được các bậc dinh dưỡng.',
    'Trình bày được dòng năng lượng trong hệ sinh thái: nguồn năng lượng, sự chuyển hoá và thất thoát năng lượng qua các bậc dinh dưỡng.',
    'Tính được hiệu suất sinh thái $H = \\dfrac{E_{n+1}}{E_n} \\cdot 100\\%$ và vận dụng được quy luật hiệu suất khoảng $10\\%$.',
    'Phân biệt được tháp số lượng, tháp sinh khối, tháp năng lượng; giải thích được vì sao chất độc tích tụ nhiều nhất ở bậc dinh dưỡng cao nhất.',
  ],
  sections: [
    {
      heading: 'Chuỗi thức ăn, lưới thức ăn và bậc dinh dưỡng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chuỗi thức ăn',
          text: 'Chuỗi thức ăn là một dãy gồm nhiều loài sinh vật có quan hệ dinh dưỡng với nhau, mỗi loài là một mắt xích: loài đứng trước là thức ăn của loài đứng sau. Mũi tên trong chuỗi thức ăn chỉ chiều của dòng vật chất và năng lượng.',
        },
        {
          type: 'list',
          items: [
            'Chuỗi thức ăn mở đầu bằng sinh vật sản xuất: Cỏ → Châu chấu → Ếch → Rắn → Đại bàng.',
            'Chuỗi thức ăn mở đầu bằng sinh vật ăn mùn bã hữu cơ (chuỗi phân giải): Mùn bã hữu cơ → Giun đất → Gà → Cáo.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lưới thức ăn',
          text: 'Lưới thức ăn là tập hợp các chuỗi thức ăn trong quần xã có nhiều mắt xích chung. Quần xã càng đa dạng thì lưới thức ăn càng phức tạp và quần xã càng ổn định.',
        },
        {
          type: 'p',
          text: 'Bậc dinh dưỡng là tập hợp các loài cùng có một mức năng lượng (cùng vị trí) trong chuỗi thức ăn. Bậc dinh dưỡng cấp 1 là sinh vật sản xuất; bậc dinh dưỡng cấp 2 là sinh vật tiêu thụ bậc 1 (động vật ăn thực vật); bậc dinh dưỡng cấp 3 là sinh vật tiêu thụ bậc 2; ... Bậc dinh dưỡng cuối cùng là bậc dinh dưỡng cao nhất. Trong lưới thức ăn, một loài có thể thuộc nhiều bậc dinh dưỡng khác nhau.',
        },
        { type: 'widget', name: 'luoi-thuc-an' },
      ],
    },
    {
      heading: 'Dòng năng lượng trong hệ sinh thái',
      blocks: [
        {
          type: 'p',
          text: 'Năng lượng cung cấp cho hầu hết hệ sinh thái trên Trái Đất là ánh sáng mặt trời. Sinh vật sản xuất chỉ sử dụng được khoảng $1\\%$ năng lượng ánh sáng nhìn thấy chiếu tới bề mặt Trái Đất để quang hợp, chuyển thành năng lượng hoá học trong chất hữu cơ.',
        },
        {
          type: 'p',
          text: 'Năng lượng được truyền theo một chiều: từ sinh vật sản xuất qua các bậc dinh dưỡng rồi trở lại môi trường dưới dạng nhiệt. Ở mỗi bậc, phần lớn năng lượng bị thất thoát: khoảng $70\\%$ dùng cho hô hấp, tạo nhiệt và hoạt động sống; khoảng $10\\%$ mất qua chất thải (phân, nước tiểu) và bộ phận rơi rụng (lá, lông, xác...); chỉ khoảng $10\\%$ năng lượng được tích luỹ thành sinh khối và chuyển lên bậc dinh dưỡng cao hơn. Khác với năng lượng, vật chất được trao đổi theo chu trình: sinh vật phân giải trả chất vô cơ lại môi trường để sinh vật sản xuất dùng lại.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hiệu suất sinh thái',
          text: 'Hiệu suất sinh thái là tỉ lệ phần trăm năng lượng được chuyển hoá giữa các bậc dinh dưỡng trong hệ sinh thái. Hiệu suất sinh thái giữa hai bậc dinh dưỡng kế tiếp trung bình khoảng $10\\%$; vì vậy năng lượng ở bậc dinh dưỡng càng cao càng ít, và chuỗi thức ăn không thể kéo dài mãi.',
        },
        {
          type: 'tex',
          tex: 'H = \\dfrac{E_{n+1}}{E_n} \\cdot 100\\%',
        },
        {
          type: 'p',
          text: 'Trong đó $E_n$ và $E_{n+1}$ là năng lượng tích luỹ ở bậc dinh dưỡng thứ $n$ và bậc dinh dưỡng kế tiếp $n + 1$.',
        },
      ],
    },
    {
      heading: 'Tháp sinh thái',
      blocks: [
        {
          type: 'p',
          text: 'Tháp sinh thái là biểu đồ hình tháp gồm các hình chữ nhật xếp chồng lên nhau, mỗi hình biểu thị một bậc dinh dưỡng (bậc 1 ở đáy), chiều rộng tỉ lệ với số lượng, sinh khối hoặc năng lượng của bậc đó.',
        },
        {
          type: 'table',
          head: ['Loại tháp', 'Biểu thị', 'Đặc điểm'],
          rows: [
            [
              'Tháp số lượng',
              'Số lượng cá thể sinh vật ở mỗi bậc trên một đơn vị diện tích hoặc thể tích',
              'Dễ xây dựng nhưng ít giá trị; có thể bị ngược (một cây to nuôi hàng nghìn con sâu)',
            ],
            [
              'Tháp sinh khối',
              'Khối lượng chất sống ở mỗi bậc trên một đơn vị diện tích hoặc thể tích',
              'Có giá trị hơn tháp số lượng; có thể bị ngược ở hệ sinh thái dưới nước (thực vật phù du có sinh khối nhỏ nhưng sinh sản rất nhanh)',
            ],
            [
              'Tháp năng lượng',
              'Năng lượng tích luỹ ở mỗi bậc trên một đơn vị diện tích hoặc thể tích, trong một đơn vị thời gian',
              'Hoàn thiện nhất, luôn có dạng chuẩn: đáy rộng, đỉnh hẹp',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tích tụ chất độc qua chuỗi thức ăn',
          text: 'Các chất độc khó phân huỷ (thuốc trừ sâu DDT, thuỷ ngân, chì...) không bị thải ra theo năng lượng mà tích luỹ trong cơ thể. Mỗi sinh vật ở bậc trên ăn rất nhiều sinh vật ở bậc dưới, nên nồng độ chất độc tăng dần qua các bậc dinh dưỡng và cao nhất ở bậc dinh dưỡng cao nhất. Vì vậy cần hạn chế sử dụng hoá chất độc hại trong sản xuất.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tháp năng lượng và quy tắc 10%',
    instruction:
      'Chỉnh năng lượng ở sinh vật sản xuất, hiệu suất sinh thái và số bậc dinh dưỡng; đọc năng lượng mỗi bậc trong tháp và trong bảng. Đổi sang thang tuyến tính để thấy các bậc trên nhỏ tới mức gần như biến mất.',
  },
  examples: [
    {
      problem:
        'Trong chuỗi thức ăn Cỏ → Châu chấu → Ếch → Rắn, năng lượng tích luỹ ở mỗi bậc lần lượt là $2\\,000\\,000$; $200\\,000$; $15\\,000$ và $1\\,200$ kcal. Xác định bậc dinh dưỡng của mỗi loài và tính hiệu suất sinh thái giữa các bậc kế tiếp.',
      steps: [
        'Cỏ: bậc dinh dưỡng cấp 1; châu chấu: cấp 2; ếch: cấp 3; rắn: cấp 4.',
        '$H_{2/1} = \\dfrac{200\\,000}{2\\,000\\,000} \\cdot 100\\% = 10\\%$.',
        '$H_{3/2} = \\dfrac{15\\,000}{200\\,000} \\cdot 100\\% = 7{,}5\\%$.',
        '$H_{4/3} = \\dfrac{1\\,200}{15\\,000} \\cdot 100\\% = 8\\%$.',
      ],
      answer: 'Hiệu suất lần lượt là $10\\%$, $7{,}5\\%$ và $8\\%$.',
    },
    {
      problem:
        'Sinh vật sản xuất của một hệ sinh thái tích luỹ $1\\,200\\,000$ kcal/m²/năm. Với hiệu suất sinh thái $10\\%$ giữa các bậc, sinh vật tiêu thụ bậc 3 nhận được bao nhiêu năng lượng?',
      steps: [
        'Sinh vật tiêu thụ bậc 3 ở bậc dinh dưỡng cấp 4, cách sinh vật sản xuất $3$ lần chuyển.',
        'Mỗi lần chuyển giữ lại $10\\% = 0{,}1$ năng lượng.',
        '$E_4 = 1\\,200\\,000 \\cdot 0{,}1^3 = 1\\,200$ kcal/m²/năm.',
      ],
      answer: '$1\\,200$ kcal/m²/năm (chỉ bằng $0{,}1\\%$ năng lượng của sinh vật sản xuất).',
    },
    {
      problem:
        'Ở một vùng biển, tại một thời điểm, sinh khối thực vật phù du là $4$ g/m², còn sinh khối động vật phù du ăn chúng là $21$ g/m². Tháp sinh khối có dạng gì? Điều đó có mâu thuẫn với dòng năng lượng không?',
      steps: [
        'Sinh khối bậc 2 ($21$ g/m²) lớn hơn bậc 1 ($4$ g/m²): đáy hẹp hơn đỉnh, tháp sinh khối bị ngược.',
        'Thực vật phù du có kích thước nhỏ, sinh sản rất nhanh và bị ăn liên tục, nên sinh khối đo tại một thời điểm nhỏ.',
        'Tính trong cả một khoảng thời gian, năng lượng do thực vật phù du tạo ra vẫn lớn hơn nhiều năng lượng của động vật phù du.',
      ],
      answer:
        'Tháp sinh khối ngược; không mâu thuẫn, vì tháp năng lượng (tính theo thời gian) vẫn luôn có đáy rộng.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Sinh vật sản xuất tích luỹ $2\\,000\\,000$ kcal, sinh vật tiêu thụ bậc 1 tích luỹ $180\\,000$ kcal. Hiệu suất sinh thái giữa hai bậc dinh dưỡng này là bao nhiêu phần trăm?',
      answer: 9,
      unit: '%',
      hints: ['$H = \\dfrac{E_{n+1}}{E_n} \\cdot 100\\%$.'],
      solution: '$H = \\dfrac{180\\,000}{2\\,000\\,000} \\cdot 100\\% = 9\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Năng lượng ở bậc dinh dưỡng cấp 2 là $12\\,000$ kcal/m²/năm, ở bậc cấp 3 là $960$ kcal/m²/năm. Tính hiệu suất sinh thái giữa bậc 3 và bậc 2 (%).',
      answer: 8,
      unit: '%',
      hints: ['Lấy năng lượng bậc trên chia cho bậc dưới.'],
      solution: '$H = \\dfrac{960}{12\\,000} \\cdot 100\\% = 8\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Sinh vật sản xuất tích luỹ $50\\,000$ kcal. Với hiệu suất sinh thái $10\\%$ ở mọi bậc, sinh vật tiêu thụ bậc 2 nhận được bao nhiêu kcal?',
      answer: 500,
      unit: 'kcal',
      hints: [
        'Sinh vật tiêu thụ bậc 2 ở bậc dinh dưỡng cấp 3.',
        'Từ bậc 1 lên bậc 3 có $2$ lần chuyển, mỗi lần nhân $0{,}1$.',
      ],
      solution: '$50\\,000 \\cdot 0{,}1 \\cdot 0{,}1 = 500$ kcal.',
    },
    {
      type: 'number',
      prompt:
        'Trong chuỗi thức ăn Cỏ → Châu chấu → Ếch → Rắn → Đại bàng, rắn thuộc bậc dinh dưỡng cấp mấy?',
      answer: 4,
      hints: ['Sinh vật sản xuất là bậc dinh dưỡng cấp 1.'],
      solution: 'Cỏ cấp 1, châu chấu cấp 2, ếch cấp 3, rắn cấp 4 (sinh vật tiêu thụ bậc 3).',
    },
    {
      type: 'choice',
      prompt: 'Chuỗi thức ăn nào sau đây mở đầu bằng sinh vật ăn mùn bã hữu cơ?',
      options: [
        'Mùn bã hữu cơ → Giun đất → Ếch → Rắn',
        'Lúa → Chuột → Rắn → Đại bàng',
        'Tảo → Giáp xác → Cá nhỏ → Cá lớn',
        'Cỏ → Thỏ → Cáo',
      ],
      answer: 0,
      hints: ['Mắt xích đầu tiên không phải là sinh vật quang hợp.'],
      solution:
        'Chuỗi mở đầu bằng mùn bã hữu cơ rồi đến giun đất (sinh vật ăn mùn bã). Ba chuỗi còn lại mở đầu bằng sinh vật sản xuất (lúa, tảo, cỏ).',
    },
    {
      type: 'multi',
      prompt: 'Ở mỗi bậc dinh dưỡng, năng lượng bị thất thoát qua những con đường nào?',
      options: [
        'Hô hấp, tạo nhiệt và hoạt động sống',
        'Chất thải như phân, nước tiểu',
        'Bộ phận rơi rụng như lá, lông, sừng, xác',
        'Truyền ngược lại cho sinh vật sản xuất',
      ],
      answers: [0, 1, 2],
      hints: ['Năng lượng chỉ đi theo một chiều.'],
      solution:
        'Năng lượng mất qua hô hấp (dạng nhiệt), chất thải và phần rơi rụng. Năng lượng không bao giờ truyền ngược lại sinh vật sản xuất: dòng năng lượng đi một chiều.',
    },
    {
      type: 'choice',
      prompt: 'Loại tháp sinh thái nào luôn có dạng chuẩn (đáy rộng, đỉnh hẹp)?',
      options: ['Tháp năng lượng', 'Tháp số lượng', 'Tháp sinh khối', 'Cả ba loại tháp'],
      answer: 0,
      hints: ['Năng lượng luôn giảm dần qua các bậc.'],
      solution:
        'Tháp năng lượng luôn có dạng chuẩn vì năng lượng mất đi ở mỗi bậc. Tháp số lượng có thể ngược (một cây – nhiều sâu), tháp sinh khối có thể ngược ở hệ sinh thái dưới nước.',
    },
    {
      type: 'choice',
      prompt:
        'Sau nhiều năm phun DDT trên đồng ruộng, nồng độ DDT trong cơ thể sinh vật nào thường cao nhất?',
      options: ['Chim ăn cá (bậc dinh dưỡng cao nhất)', 'Lúa', 'Sâu ăn lá lúa', 'Cá nhỏ ăn sâu'],
      answer: 0,
      hints: ['Mỗi con vật ở bậc trên ăn rất nhiều con ở bậc dưới.'],
      solution:
        'DDT khó phân huỷ, tích luỹ trong cơ thể và tăng dần qua mỗi bậc dinh dưỡng, nên cao nhất ở bậc dinh dưỡng cao nhất (chim ăn cá).',
    },
    {
      type: 'choice',
      prompt:
        'Trong lưới thức ăn ruộng lúa, nếu rắn bị bắt gần hết, số lượng loài nào có khả năng tăng lên đầu tiên?',
      options: ['Chuột và ếch', 'Lúa', 'Đại bàng', 'Vi khuẩn phân giải'],
      answer: 0,
      hints: ['Rắn ăn những loài nào?', 'Dùng chế độ "Loại bỏ" của lưới thức ăn để kiểm tra.'],
      solution:
        'Rắn ăn chuột và ếch; mất rắn, chuột và ếch ít bị ăn nên tăng số lượng. Chuột tăng lại làm hại lúa nhiều hơn.',
    },
    {
      type: 'text',
      prompt:
        'Trong lưới thức ăn, một loài tham gia vào nhiều chuỗi thức ăn khác nhau được gọi là gì?',
      accept: ['mắt xích chung', 'mat xich chung'],
      hints: ['Các chuỗi thức ăn nối với nhau qua loài này.'],
      solution: 'Đó là mắt xích chung: các chuỗi thức ăn có chung mắt xích tạo thành lưới thức ăn.',
    },
  ],
  takeaways: [
    'Chuỗi thức ăn: dãy loài có quan hệ dinh dưỡng, mở đầu bằng sinh vật sản xuất hoặc sinh vật ăn mùn bã; các chuỗi có mắt xích chung tạo thành lưới thức ăn.',
    'Bậc dinh dưỡng cấp 1 là sinh vật sản xuất, cấp 2 là sinh vật tiêu thụ bậc 1, cấp 3 là sinh vật tiêu thụ bậc 2...',
    'Năng lượng đi một chiều từ mặt trời qua các bậc dinh dưỡng và mất dần qua hô hấp, chất thải, rơi rụng; vật chất được trao đổi theo chu trình.',
    'Hiệu suất sinh thái $H = \\dfrac{E_{n+1}}{E_n} \\cdot 100\\%$, trung bình khoảng $10\\%$; tháp năng lượng luôn có đáy rộng, tháp số lượng và tháp sinh khối có thể bị ngược.',
    'Chất độc khó phân huỷ tích tụ nhiều nhất ở bậc dinh dưỡng cao nhất.',
  ],
};

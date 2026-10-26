/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: gieo hạt đậu, theo dõi sự nảy mầm, đo chiều cao cây và đếm số lá mỗi ngày, ghi vào bảng và vẽ đồ thị sinh trưởng; quan sát tranh ảnh, video về các giai đoạn sinh trưởng và phát triển của một số động vật.',
  intro:
    'Ở hai bài trước, em đã biết sinh trưởng là cơ thể lớn lên, phát triển là những biến đổi về tế bào, cơ quan, hình thái. Trong bài thực hành này, em sẽ tự gieo hạt, đo và ghi chép mỗi ngày để có số liệu chứng minh cây có sinh trưởng, đồng thời quan sát vòng đời của một số động vật để so sánh sự sinh trưởng và phát triển của chúng.',
  objectives: [
    'Tiến hành được thí nghiệm chứng minh cây có sự sinh trưởng: gieo hạt, theo dõi, đo và ghi chép số liệu.',
    'Biểu diễn được số liệu chiều cao cây theo ngày bằng bảng và đồ thị; nhận xét được tốc độ sinh trưởng.',
    'Quan sát, mô tả được các giai đoạn sinh trưởng và phát triển của một số động vật; so sánh được các loài với nhau.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: chai nhựa đã qua sử dụng, đất trồng cây, bình tưới có vòi phun sương, nước ấm, dao hoặc kéo, thước đo chia đến milimét, nhiệt kế.',
            'Mẫu vật: hạt đậu (đậu xanh, đậu đen hoặc đậu tương), hạt ngô hoặc hạt lạc. Chọn loại hạt có thời gian nảy mầm ngắn, phù hợp với mùa vụ ở địa phương; chọn hạt to, mẩy, không bị sâu, bệnh.',
            'Tranh ảnh, video về quá trình sinh trưởng, phát triển của một số động vật: muỗi, bướm, ếch đồng, cá, gà, lợn, ...',
          ],
        },
      ],
    },
    {
      heading: 'Thí nghiệm chứng minh cây có sự sinh trưởng',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng dao hoặc kéo cắt chai nhựa theo chiều dọc hoặc chiều ngang, cho đất vào để làm chậu (khay) trồng cây.',
            'Ngâm hạt trong nước ấm khoảng $35$ đến $40\\ ^\\circ\\mathrm{C}$ trong $5$ đến $10$ giờ, tuỳ loại hạt.',
            'Gieo hạt đã ngâm vào chậu, dùng bình phun sương làm ẩm đất.',
            'Đặt chậu ở nơi có đủ ánh sáng, tưới nước hằng ngày.',
            'Trong $5$ đến $7$ ngày, mỗi ngày quan sát sự nảy mầm của hạt, đo chiều cao cây (từ mặt đất đến đỉnh ngọn), đếm số lá, đo kích thước lá và ghi vào sổ theo dõi.',
          ],
        },
        {
          type: 'table',
          caption: 'Ví dụ sổ theo dõi một cây đậu xanh (tính từ ngày cây nhú khỏi mặt đất)',
          head: ['Ngày', 'Tình trạng cây', 'Chiều cao (cm)', 'Số lá'],
          rows: [
            ['1', 'Thân mầm nhú khỏi mặt đất', '0,5', '0'],
            ['2', 'Hai lá mầm nhô lên', '1,8', '0'],
            ['3', 'Hai lá mầm xoè ra', '3,5', '0'],
            ['4', 'Hai lá đơn đầu tiên xuất hiện', '5,6', '2'],
            ['5', 'Lá đơn to dần', '7,4', '2'],
            ['6', 'Nhú lá kép đầu tiên', '9,0', '3'],
            ['7', 'Lá kép mở rộng', '10,2', '3'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vẽ đồ thị sinh trưởng',
          text: 'Trục ngang ghi các ngày quan sát, trục đứng ghi chiều cao cây (cm). Mỗi ngày là một điểm; nối các điểm liên tiếp bằng đoạn thẳng. Đoạn càng dốc thì trong khoảng thời gian đó cây cao lên càng nhanh.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Chiều cao cây và số lá tăng dần theo ngày: cây có sự sinh trưởng. Hạt nảy mầm, lá mầm rồi lá thật lần lượt xuất hiện: cây có sự phát triển.',
        },
      ],
    },
    {
      heading: 'Quan sát sự sinh trưởng và phát triển ở động vật',
      blocks: [
        {
          type: 'p',
          text: 'Xem tranh ảnh, video về vòng đời của một số động vật. Ghi lại: các giai đoạn; hình thái, kích thước cơ thể ở mỗi giai đoạn; biểu hiện của mối quan hệ giữa sinh trưởng và phát triển; điểm giống và khác nhau giữa các loài.',
        },
        {
          type: 'table',
          caption: 'Gợi ý kết quả quan sát',
          head: ['Loài', 'Các giai đoạn', 'Nhận xét về hình thái'],
          rows: [
            [
              'Bướm',
              'Trứng → sâu → nhộng → bướm',
              'Sâu, nhộng khác hẳn bướm trưởng thành; sâu lớn nhanh, nhộng không lớn nhưng biến đổi thành bướm',
            ],
            [
              'Muỗi',
              'Trứng → bọ gậy → cung quăng → muỗi',
              'Bọ gậy, cung quăng sống trong nước, khác hẳn muỗi trưởng thành',
            ],
            [
              'Ếch đồng',
              'Trứng → nòng nọc → ếch con → ếch trưởng thành',
              'Nòng nọc sống trong nước, có đuôi; mọc chân, mất đuôi rồi lên cạn',
            ],
            [
              'Gà',
              'Trứng → gà con → gà trưởng thành',
              'Gà con mới nở đã có hình dạng gần giống gà trưởng thành, chủ yếu lớn lên, thay lông tơ bằng lông vũ',
            ],
            [
              'Lợn',
              'Phôi (trong cơ thể mẹ) → lợn con → lợn trưởng thành',
              'Lợn con có hình dạng giống lợn trưởng thành, chủ yếu lớn lên về kích thước',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'So sánh',
          text: 'Ở mọi loài, sinh trưởng và phát triển diễn ra đan xen. Có loài con non khác hẳn con trưởng thành (bướm, muỗi, ếch), phải trải qua những biến đổi lớn về hình thái; có loài con non gần giống con trưởng thành (gà, lợn), chủ yếu lớn lên về kích thước và khối lượng.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      project: true,
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Mục đích: chứng minh cây có sự sinh trưởng; mô tả sự sinh trưởng và phát triển ở một số động vật.',
            'Kết quả: bảng theo dõi cây (ngày, tình trạng cây, chiều cao, số lá, kích thước lá) và đồ thị chiều cao cây theo ngày; bảng quan sát động vật (loài, giai đoạn, hình thái, kích thước).',
            'Nhận xét và kết luận: mô tả quá trình hạt nảy mầm và sinh trưởng của cây trong thời gian quan sát; tính chiều cao cây tăng thêm trung bình mỗi ngày.',
            'Trả lời câu hỏi: so sánh sự sinh trưởng và phát triển của các loài động vật đã quan sát.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Sổ theo dõi và đồ thị sinh trưởng',
    instruction:
      'Nhập chiều cao cây em đo được mỗi ngày (hoặc bấm "Dùng số liệu mẫu"). Đồ thị được vẽ ngay; cột bên phải cho biết cây cao thêm bao nhiêu so với hôm trước. Đọc nhận xét để biết cây tăng nhanh nhất vào ngày nào.',
  },
  examples: [
    {
      problem:
        'Dựa vào sổ theo dõi mẫu, tính chiều cao trung bình cây đậu tăng thêm mỗi ngày từ ngày $1$ đến ngày $7$.',
      steps: [
        'Chiều cao tăng thêm từ ngày $1$ đến ngày $7$: $10{,}2 - 0{,}5 = 9{,}7$ (cm).',
        'Từ ngày $1$ đến ngày $7$ có $7 - 1 = 6$ khoảng một ngày.',
        'Trung bình mỗi ngày: $9{,}7 : 6 \\approx 1{,}6$ (cm).',
      ],
      answer: 'Trung bình mỗi ngày cây cao thêm khoảng $1{,}6$ cm.',
    },
    {
      problem:
        'Trong sổ theo dõi mẫu, cây đậu cao thêm nhiều nhất giữa hai ngày liên tiếp nào? Đồ thị thể hiện điều đó ra sao?',
      steps: [
        'Tính mức tăng mỗi ngày: $1{,}3$; $1{,}7$; $2{,}1$; $1{,}8$; $1{,}6$; $1{,}2$ (cm).',
        'Mức tăng lớn nhất là $2{,}1$ cm, từ ngày $3$ sang ngày $4$ ($5{,}6 - 3{,}5 = 2{,}1$).',
        'Trên đồ thị, đoạn thẳng nối ngày $3$ với ngày $4$ dốc nhất.',
      ],
      answer: 'Từ ngày $3$ sang ngày $4$ (tăng $2{,}1$ cm); đoạn đồ thị ở đó dốc nhất.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của thí nghiệm chứng minh cây có sự sinh trưởng.',
      items: [
        'Gieo hạt vào chậu, phun sương làm ẩm đất',
        'Cắt chai nhựa, cho đất vào làm chậu',
        'Mỗi ngày đo chiều cao, đếm số lá và ghi vào sổ',
        'Ngâm hạt trong nước ấm',
        'Đặt chậu nơi đủ ánh sáng, tưới nước hằng ngày',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Chuẩn bị chậu và hạt trước, gieo hạt rồi mới chăm sóc và theo dõi.'],
      solution:
        'Cắt chai làm chậu → ngâm hạt trong nước ấm → gieo hạt, phun sương → đặt nơi đủ sáng, tưới hằng ngày → đo, đếm, ghi sổ mỗi ngày.',
    },
    {
      type: 'choice',
      prompt: 'Nên ngâm hạt đậu trong nước có nhiệt độ khoảng bao nhiêu trước khi gieo?',
      options: [
        '$5$ đến $10\\ ^\\circ\\mathrm{C}$',
        '$35$ đến $40\\ ^\\circ\\mathrm{C}$',
        '$70$ đến $80\\ ^\\circ\\mathrm{C}$',
        '$100\\ ^\\circ\\mathrm{C}$',
      ],
      answer: 1,
      hints: ['Nước ấm giúp hạt hút nước nhanh, nhưng nước quá nóng sẽ làm chết phôi.'],
      solution:
        'Ngâm hạt trong nước ấm khoảng $35$ đến $40\\ ^\\circ\\mathrm{C}$ trong $5$ đến $10$ giờ; nước nóng hơn có thể làm chết phôi trong hạt.',
    },
    {
      type: 'multi',
      prompt: 'Khi chọn hạt để gieo, cần chọn những hạt như thế nào?',
      options: ['Hạt to', 'Hạt mẩy (chắc)', 'Không bị sâu, bệnh', 'Hạt lép', 'Hạt đã bị mốc'],
      answers: [0, 1, 2],
      hints: ['Hạt khoẻ thì phôi khoẻ, nảy mầm tốt.'],
      solution:
        'Chọn hạt to, mẩy, không bị sâu, bệnh để hạt nảy mầm tốt; hạt lép, hạt mốc thường không nảy mầm hoặc cây yếu.',
    },
    {
      type: 'number',
      prompt:
        'Theo sổ theo dõi mẫu, cây đậu cao $3{,}5$ cm ở ngày $3$ và $7{,}4$ cm ở ngày $5$. Từ ngày $3$ đến ngày $5$ cây cao thêm bao nhiêu xăng-ti-mét?',
      answer: 3.9,
      tolerance: 0.001,
      unit: 'cm',
      hints: ['Lấy chiều cao ngày sau trừ chiều cao ngày trước.'],
      solution: '$7{,}4 - 3{,}5 = 3{,}9$ (cm).',
    },
    {
      type: 'number',
      prompt:
        'Theo sổ theo dõi mẫu, cây đậu cao $0{,}5$ cm ở ngày $1$ và $10{,}2$ cm ở ngày $7$. Trung bình mỗi ngày cây cao thêm bao nhiêu xăng-ti-mét? (Làm tròn đến hàng phần trăm.)',
      answer: 1.62,
      tolerance: 0.005,
      unit: 'cm',
      hints: [
        'Tính tổng chiều cao tăng thêm, rồi chia cho số khoảng một ngày.',
        'Từ ngày $1$ đến ngày $7$ có $6$ khoảng một ngày.',
      ],
      solution: '$(10{,}2 - 0{,}5) : 6 = 9{,}7 : 6 \\approx 1{,}62$ (cm).',
    },
    {
      type: 'number',
      prompt:
        'Bạn Mai trồng ngô: ngày $2$ cây cao $1{,}5$ cm, ngày $6$ cây cao $9{,}5$ cm. Trung bình mỗi ngày trong khoảng đó cây ngô cao thêm bao nhiêu xăng-ti-mét?',
      answer: 2,
      unit: 'cm',
      hints: ['Từ ngày $2$ đến ngày $6$ có $6 - 2 = 4$ khoảng một ngày.'],
      solution: '$(9{,}5 - 1{,}5) : 4 = 8 : 4 = 2$ (cm).',
    },
    {
      type: 'choice',
      prompt:
        'Trên đồ thị sinh trưởng của cây đậu (trục ngang là ngày, trục đứng là chiều cao), đoạn thẳng dốc nhất cho biết điều gì?',
      options: [
        'Cây cao nhất vào ngày đó',
        'Trong khoảng thời gian đó cây cao thêm nhanh nhất',
        'Cây ngừng sinh trưởng',
        'Cây bắt đầu ra hoa',
      ],
      answer: 1,
      hints: ['Độ dốc cho biết chiều cao thay đổi nhiều hay ít trong một ngày.'],
      solution:
        'Đoạn càng dốc thì trong khoảng thời gian đó chiều cao tăng càng nhiều, tức cây sinh trưởng nhanh nhất.',
    },
    {
      type: 'choice',
      prompt:
        'Bạn Nam ghi: ngày $5$ cây cao $7{,}4$ cm, ngày $6$ cây cao $6{,}9$ cm. Nam nên làm gì?',
      options: [
        'Kết luận cây đang thấp đi do sinh trưởng ngược',
        'Kiểm tra lại cách đo (đo từ mặt đất đến đỉnh ngọn) và xem ngọn cây có bị gãy không',
        'Xoá số liệu ngày $5$',
        'Ngừng tưới nước',
      ],
      answer: 1,
      hints: ['Một cây khoẻ có thể thấp đi sau một ngày không?'],
      solution:
        'Cây đang sinh trưởng không thấp đi; số liệu giảm thường do đo sai (đo không từ mặt đất, đo nghiêng) hoặc ngọn bị gãy. Cần kiểm tra lại, không tự ý xoá số liệu.',
    },
    {
      type: 'multi',
      prompt: 'Trong thí nghiệm với cây đậu, mỗi ngày em cần ghi những gì vào sổ theo dõi?',
      options: [
        'Tình trạng hạt, cây (đã nảy mầm chưa, có lá mới không)',
        'Chiều cao cây',
        'Số lá',
        'Kích thước lá',
        'Màu sắc của chai nhựa',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Ghi những gì cho biết cây lớn lên và có bộ phận mới.'],
      solution:
        'Ghi tình trạng hạt, cây; chiều cao; số lá và kích thước lá. Màu chai nhựa không liên quan đến sự sinh trưởng của cây.',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau rõ nhất giữa sự phát triển của gà và của bướm là',
      options: [
        'gà không sinh trưởng, bướm có sinh trưởng',
        'gà con mới nở đã gần giống gà trưởng thành, còn sâu (con non của bướm) khác hẳn bướm trưởng thành',
        'gà không có giai đoạn trứng',
        'bướm không có giai đoạn trứng',
      ],
      answer: 1,
      hints: ['So sánh hình dạng con non mới nở với con trưởng thành của mỗi loài.'],
      solution:
        'Gà con có hình dạng gần giống gà trưởng thành, chủ yếu lớn lên; sâu khác hẳn bướm, phải qua giai đoạn nhộng mới biến đổi thành bướm. Cả hai loài đều sinh trưởng và đều đẻ trứng.',
    },
  ],
  takeaways: [
    'Gieo hạt, theo dõi và đo hằng ngày: chiều cao, số lá tăng dần chứng tỏ cây có sinh trưởng; lá mầm, lá thật xuất hiện cho thấy cây phát triển.',
    'Đồ thị sinh trưởng: trục ngang là ngày, trục đứng là chiều cao; đoạn càng dốc cây lớn càng nhanh.',
    'Tốc độ trung bình = (chiều cao cuối − chiều cao đầu) : số ngày giữa hai lần đo.',
    'Có loài con non khác hẳn con trưởng thành (bướm, muỗi, ếch); có loài con non gần giống con trưởng thành (gà, lợn).',
  ],
};

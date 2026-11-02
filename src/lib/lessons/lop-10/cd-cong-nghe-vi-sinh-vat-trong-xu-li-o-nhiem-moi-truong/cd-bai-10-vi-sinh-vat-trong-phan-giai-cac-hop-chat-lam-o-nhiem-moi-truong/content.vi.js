/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vi sinh vật phân giải chất ô nhiễm theo ba nguyên lí chính: hô hấp hiếu khí, hô hấp kị khí và lên men. Các chất lạ (xenobiotic) như thuốc trừ sâu, nhựa phenolic rất khó phân giải, cần tìm những chủng vi sinh vật đặc biệt.',
  intro:
    'Cùng là chất thải hữu cơ, nhưng ở bể sục khí thì thành $\\mathrm{CO_2}$ và nước, ở hầm kín lại sinh ra khí đốt, còn rơm rạ có thể trở thành nhiên liệu ethanol. Điều gì quyết định số phận của chất thải? Và vì sao một túi nhựa nằm trong đất hàng chục năm vẫn còn nguyên?',
  objectives: [
    'Trình bày được nguyên lí phân giải hiếu khí, phân giải kị khí và lên men trong xử lí chất thải.',
    'Nêu được các nhóm vi sinh vật và sản phẩm của từng con đường.',
    'Giải thích được vì sao các chất lạ (xenobiotic) khó bị phân giải và gây hại.',
    'Trình bày được các bước nghiên cứu vi sinh vật phân giải chất lạ.',
  ],
  sections: [
    {
      heading: 'Phân giải các hợp chất hữu cơ',
      blocks: [
        {
          type: 'p',
          text: 'Trước hết, các chất có phân tử lớn được enzyme do vi sinh vật tiết ra thuỷ phân thành đơn phân. Sau đó, tuỳ điều kiện môi trường, các đơn phân đi theo một trong các con đường dưới đây.',
        },
        {
          type: 'table',
          caption: 'Ba con đường phân giải chất hữu cơ gây ô nhiễm',
          head: ['Con đường', 'Điều kiện', 'Sản phẩm', 'Ứng dụng'],
          rows: [
            [
              'Phân giải hiếu khí',
              'Có oxygen, thông khí liên tục',
              '$\\mathrm{CO_2}$, $\\mathrm{H_2O}$, sinh khối',
              'Nước thải chế biến sữa, sản xuất giấy, dệt vải; ao hồ nuôi cá',
            ],
            [
              'Phân giải kị khí',
              'Không có oxygen',
              '$\\mathrm{CH_4}$, $\\mathrm{CO_2}$, $\\mathrm{H_2O}$',
              'Nước thải giàu lipid, protein, polysaccharide; khí sinh học',
            ],
            [
              'Lên men',
              'Có đường đơn do thuỷ phân tạo ra',
              'Ethanol, $\\mathrm{CO_2}$',
              'Ethanol sinh học từ chất thải hữu cơ',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Trong phân giải kị khí, hai nhóm phối hợp với nhau: vi khuẩn kị khí phân giải lipid, protein, polysaccharide thành các đơn phân rồi chuyển hoá tiếp; nhóm Archaea chuyển các sản phẩm đó thành methane, $\\mathrm{CO_2}$ và nước.',
        },
        {
          type: 'p',
          text: 'Sản xuất ethanol từ chất thải hữu cơ có hai bước chính. Ở bước thuỷ phân, cellulase của vi sinh vật cắt cellulose thành đường đơn $\\mathrm{C_5}$, $\\mathrm{C_6}$. Ở bước lên men, vi sinh vật chuyển đường đơn thành ethanol và $\\mathrm{CO_2}$:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6} \\longrightarrow 2\\,\\mathrm{C_2H_5OH} + 2\\,\\mathrm{CO_2}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nước lưu thông ít ô nhiễm hơn',
          text: 'Nước chảy hoặc được phun lên liên tục nhận thêm oxygen, nên vi sinh vật hiếu khí phân giải chất hữu cơ hiệu quả hơn. Đó là lí do các ao nuôi cá thường có máy phun nước.',
        },
      ],
    },
    {
      heading: 'Phân giải các chất lạ khó phân huỷ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Xenobiotic (chất lạ)',
          text: 'Là các hợp chất nhân tạo do con người thải vào môi trường mà sinh vật khó phân giải, ví dụ thuốc trừ sâu, hydrocarbon thơm dạng vòng (PAH) và nhựa phenolic.',
        },
        {
          type: 'p',
          text: 'Các chất này chứa độc tố, gây hại cho sức khoẻ, có thể đi vào chuỗi và lưới thức ăn. Rất ít vi sinh vật có enzyme phù hợp để chuyển hoá chúng, vì trong tự nhiên chúng mới xuất hiện gần đây. Người ta vì vậy phải chủ động đi tìm những chủng có khả năng đó.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Phân lập chủng sống được trong môi trường có chất lạ, rồi giải trình tự hệ gene của chủng đó.',
            'Xác định những gene được biểu hiện và những protein được tổng hợp.',
            'Xác định các protein đó tham gia vào quá trình chuyển hoá nào.',
          ],
        },
        { type: 'widget', name: 'chat-la' },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Rác nhựa',
          text: 'Nhựa dùng một lần khó phân huỷ, làm biến đổi tính chất của đất; đốt không đúng cách gây ô nhiễm không khí; rác nhựa còn làm chết nhiều động vật biển. Vi sinh vật không giải quyết hết được, nên vẫn phải hạn chế dùng đồ nhựa, thu gom và phân loại rác.',
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Thử nghiệm chôn vật liệu trong đất',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: so sánh tốc độ phân giải của các vật liệu trong đất và giải thích bằng enzyme của vi sinh vật. Làm theo nhóm $3$ đến $4$ bạn, trong $4$ tuần. Chuẩn bị: $4$ thùng hoặc chậu có lỗ thoát nước, đất vườn, găng tay, cân; vỏ rau, giấy vụn, rơm rạ, mẩu túi nhựa cùng khối lượng.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Cân mỗi vật liệu rồi chôn riêng trong một thùng đất ở cùng độ sâu; đánh dấu vị trí.',
            'Đặt các thùng cùng một chỗ, tưới cùng một lượng nước để đất luôn ẩm.',
            'Sau $4$ tuần, đeo găng tay đào lên, rửa nhẹ, để khô và cân lại. Ghi hình ảnh trước và sau.',
            'Tính phần trăm khối lượng đã mất của mỗi vật liệu.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng khối lượng, ảnh chụp và lời giải thích. Dự đoán: vỏ rau mất nhanh nhất, giấy và rơm rạ chậm hơn vì giàu cellulose, còn túi nhựa gần như không đổi. Rửa tay sau khi làm và không đưa tay lên mặt khi đang tiếp xúc với đất ủ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Sơ đồ các con đường phân giải',
    instruction:
      'Ở chế độ "Tìm hiểu", chạm vào từng nhóm vi sinh vật để xem điều kiện, hoạt động, sản phẩm và ứng dụng. Ở chế độ "Thử sức", hãy xếp từng tình huống thực tế vào đúng con đường.',
  },
  examples: [
    {
      problem:
        'Lên men $360$ kg glucose để tạo ethanol, biết hiệu suất của quá trình là $80\\%$. Tính khối lượng ethanol thu được. Cho phân tử khối: glucose $= 180$, ethanol $= 46$.',
      steps: [
        'Phương trình: $\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\,\\mathrm{C_2H_5OH} + 2\\,\\mathrm{CO_2}$. Cứ $180$ kg glucose tạo tối đa $2 \\cdot 46 = 92$ kg ethanol.',
        'Từ $360$ kg glucose tạo tối đa $\\dfrac{360 \\cdot 92}{180} = 184$ kg ethanol.',
        'Với hiệu suất $80\\%$: $184 \\cdot 0{,}8 = 147{,}2$ kg.',
      ],
      answer: 'Thu được $147{,}2$ kg ethanol.',
    },
    {
      problem:
        'Nhà máy có nước thải giàu chất hữu cơ, muốn vừa làm sạch nước vừa thu thêm năng lượng để dùng lại. Nên ưu tiên con đường phân giải nào? Có cần sục khí không?',
      steps: [
        'Muốn thu năng lượng thì cần một sản phẩm đốt được. Phân giải hiếu khí chỉ tạo $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$, nên không thu được năng lượng.',
        'Phân giải kị khí tạo methane, thành phần cháy được của khí sinh học.',
        'Con đường này cần môi trường không có oxygen, nên bể phải kín, không sục khí.',
      ],
      answer: 'Nên ưu tiên phân giải kị khí trong bể kín, không sục khí, để thu methane.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi con đường phân giải với sản phẩm chính của nó.',
      left: ['Phân giải hiếu khí', 'Phân giải kị khí', 'Lên men đường đơn'],
      right: [
        '$\\mathrm{CO_2}$ và $\\mathrm{H_2O}$',
        '$\\mathrm{CH_4}$, $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$',
        'Ethanol và $\\mathrm{CO_2}$',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Methane chỉ được tạo ra khi không có oxygen.'],
      solution:
        'Hiếu khí: $\\mathrm{CO_2}$, $\\mathrm{H_2O}$. Kị khí: $\\mathrm{CH_4}$, $\\mathrm{CO_2}$, $\\mathrm{H_2O}$. Lên men: ethanol, $\\mathrm{CO_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Trong phân giải kị khí, nhóm nào trực tiếp tạo ra methane?',
      options: ['Archaea', 'Nấm mốc', 'Vi khuẩn lam', 'Động vật nguyên sinh'],
      answer: 0,
      hints: ['Đây là nhóm sinh vật có vai trò chuyển hoá sản phẩm của vi khuẩn kị khí.'],
      solution:
        'Vi khuẩn kị khí phân giải chất hữu cơ thành chất đơn giản hơn; nhóm Archaea chuyển các chất đó thành methane.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tạo ethanol từ rơm rạ.',
      items: [
        'Cellulase cắt cellulose trong rơm rạ',
        'Tạo ra các đường đơn $\\mathrm{C_5}$, $\\mathrm{C_6}$',
        'Vi sinh vật lên men đường đơn',
        'Thu ethanol và $\\mathrm{CO_2}$',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Vi sinh vật lên men dùng nguyên liệu là đường đơn.'],
      solution:
        'Cellulase thuỷ phân cellulose thành đường đơn; vi sinh vật lên men đường đơn thành ethanol và $\\mathrm{CO_2}$.',
    },
    {
      type: 'multi',
      prompt: 'Những chất nào là chất lạ (xenobiotic) khó phân giải?',
      options: [
        'Thuốc trừ sâu',
        'Hydrocarbon thơm dạng vòng (PAH)',
        'Nhựa phenolic',
        'Tinh bột trong cơm thừa',
        'Protein trong nước thải chế biến sữa',
      ],
      answers: [0, 1, 2],
      hints: ['Chất lạ do con người tổng hợp, không phải chất vốn có trong sinh vật.'],
      solution:
        'Thuốc trừ sâu, PAH và nhựa phenolic là chất lạ. Tinh bột, protein là chất vốn có trong sinh vật, nên nhiều vi sinh vật phân giải được.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước nghiên cứu vi sinh vật phân giải chất lạ.',
      items: [
        'Phân lập chủng sống được trong môi trường có chất lạ',
        'Giải trình tự hệ gene của chủng đó',
        'Xác định gene được biểu hiện và protein được tổng hợp',
        'Xác định protein tham gia vào quá trình chuyển hoá nào',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Phải có chủng vi sinh vật rồi mới đọc được hệ gene của nó.'],
      solution:
        'Phân lập chủng, giải trình tự hệ gene, xác định gene biểu hiện và protein, rồi xác định vai trò của protein.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao cần phân loại rác hữu cơ và rác vô cơ trước khi xử lí bằng vi sinh vật?',
      options: [
        'Mỗi nhóm vi sinh vật phân giải loại rác khác nhau, nên phân loại giúp xử lí nhanh hơn',
        'Vi sinh vật chỉ phân giải rác vô cơ, nên phải bỏ hết phần rác hữu cơ đi trước',
        'Rác vô cơ làm vi sinh vật sinh sản quá nhanh, khiến cho rác hữu cơ không kịp phân giải',
        'Phân loại rác giúp vi sinh vật không còn cần đến enzyme để phân giải rác nữa',
      ],
      answer: 0,
      hints: ['Enzyme của vi sinh vật có tính đặc hiệu với cơ chất.'],
      solution:
        'Mỗi nhóm vi sinh vật có enzyme phân giải một số chất nhất định. Phân loại rác giúp vi sinh vật tiếp xúc đúng cơ chất, nên phân giải nhanh hơn.',
    },
    {
      type: 'number',
      prompt:
        'Lên men hoàn toàn $90$ kg glucose thì thu được tối đa bao nhiêu kg ethanol? Cho phân tử khối: glucose $= 180$, ethanol $= 46$.',
      answer: 46,
      unit: 'kg',
      hints: [
        '$1$ phân tử glucose tạo $2$ phân tử ethanol.',
        'Cứ $180$ kg glucose tạo $92$ kg ethanol.',
      ],
      solution: '$\\dfrac{90 \\cdot 92}{180} = 46$ kg ethanol.',
    },
    {
      type: 'choice',
      prompt:
        'Một ao nuôi cá bị đục và có mùi hôi. Biện pháp nào phù hợp nhất để giúp vi sinh vật làm sạch ao?',
      options: [
        'Lắp máy phun nước hoặc sục khí để tăng oxygen trong ao',
        'Che kín mặt ao để tạo môi trường hoàn toàn không có oxygen',
        'Đổ thêm thật nhiều thức ăn để vi sinh vật có thêm chất dinh dưỡng',
        'Rải thuốc trừ sâu để tiêu diệt toàn bộ vi sinh vật trong ao',
      ],
      answer: 0,
      hints: ['Vi sinh vật nào phân giải thức ăn thừa nhanh và không tạo mùi hôi?'],
      solution:
        'Phun nước, sục khí đưa oxygen vào ao, giúp vi sinh vật hiếu khí phân giải nhanh thức ăn thừa và chất thải.',
    },
  ],
  takeaways: [
    'Ba nguyên lí phân giải: hiếu khí tạo $\\mathrm{CO_2}$, $\\mathrm{H_2O}$; kị khí tạo $\\mathrm{CH_4}$, $\\mathrm{CO_2}$; lên men tạo ethanol, $\\mathrm{CO_2}$.',
    'Trong phân giải kị khí, vi khuẩn kị khí phân giải trước, Archaea tạo methane sau.',
    'Chất lạ như thuốc trừ sâu, PAH, nhựa phenolic rất khó phân giải, độc và có thể đi vào chuỗi thức ăn.',
    'Để tìm vi sinh vật phân giải chất lạ: phân lập chủng, giải trình tự hệ gene, xác định gene biểu hiện và vai trò của protein.',
  ],
};

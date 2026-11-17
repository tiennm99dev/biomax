/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tách chiết DNA dựa trên nguyên lí phá vỡ tế bào để giải phóng DNA, loại bỏ protein, RNA và các chất khác rồi kết tủa DNA bằng ethanol lạnh. Bài nêu vai trò của từng hoá chất, các bước thực hiện và cách kiểm tra DNA thu được.',
  intro:
    'Mọi xét nghiệm DNA, từ chẩn đoán bệnh, giám định huyết thống đến tạo giống cây biến đổi gene, đều bắt đầu bằng một việc: lấy DNA ra khỏi tế bào và làm sạch nó. DNA nằm sâu trong nhân, quấn quanh protein, lẫn với RNA và hàng nghìn chất khác. Làm sao tách được riêng DNA mà không làm đứt nó?',
  objectives: [
    'Trình bày được nguyên lí của phương pháp tách chiết DNA.',
    'Nêu được các bước tách chiết DNA và vai trò của từng hoá chất: chất tẩy rửa, EDTA, protease, RNase, muối, ethanol lạnh.',
    'Giải thích được kết quả khi một bước bị bỏ qua hoặc làm sai.',
    'Thực hiện được tách chiết DNA từ mẫu vật quen thuộc bằng hoá chất dễ tìm.',
  ],
  sections: [
    {
      heading: 'Nguyên lí tách chiết DNA',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên lí',
          text: 'Muốn thu được DNA tinh sạch, trước hết phải phá vỡ tế bào (và màng nhân) để giải phóng DNA, sau đó tách DNA khỏi protein, RNA và các chất khác, cuối cùng làm DNA kết tủa để thu lấy.',
        },
        {
          type: 'p',
          text: 'Các bước dựa trên sự khác nhau về tính chất giữa DNA và các thành phần khác của tế bào:',
        },
        {
          type: 'list',
          items: [
            'Màng tế bào, màng nhân cấu tạo chủ yếu từ lipid và protein, nên bị chất tẩy rửa hoà tan; DNA thì không.',
            'Protein và RNA bị các enzyme đặc hiệu (protease, RNase) phân giải; các enzyme này không tác động đến DNA.',
            'DNA là phân tử rất dài, mang điện tích âm ở các nhóm phosphate; khi điện tích được ion dương của muối trung hoà, DNA không tan trong ethanol lạnh và kết tủa thành sợi.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Giữ DNA nguyên vẹn',
          text: 'Trong tế bào có enzyme DNase phân giải DNA. Khi tế bào vỡ, DNase được giải phóng, vì vậy dung dịch tách chiết thường có EDTA để ức chế DNase. DNA rất dài nên cũng dễ đứt khi lắc mạnh hoặc đun nóng; mọi thao tác phải nhẹ nhàng và giữ lạnh.',
        },
      ],
    },
    {
      heading: 'Các bước tách chiết DNA',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Phá vỡ tế bào: nghiền mẫu (mô thực vật có thành cellulose thường được nghiền trong nitrogen lỏng), cho vào dung dịch đệm có chất tẩy rửa (như SDS) và EDTA. Màng tế bào, màng nhân bị hoà tan, DNA được giải phóng. Ly tâm để loại cặn mảnh vụn tế bào.',
            'Loại bỏ protein: dùng protease (như protease K) phân giải protein, kể cả histone liên kết với DNA. Có thể dùng thêm phenol và chloroform để làm biến tính và tách protein.',
            'Loại bỏ RNA: dùng RNase (như RNase A) phân giải RNA.',
            'Kết tủa và tinh sạch DNA: thêm muối và ethanol lạnh, DNA kết tủa; ly tâm thu tủa, rửa bằng ethanol $70\\%$ rồi hoà tan DNA trong nước cất hoặc dung dịch đệm, bảo quản lạnh.',
          ],
        },
        {
          type: 'table',
          caption: 'Vai trò của các hoá chất',
          head: ['Hoá chất', 'Vai trò'],
          rows: [
            ['Chất tẩy rửa (SDS)', 'Hoà tan lipid của màng tế bào, màng nhân, giải phóng DNA'],
            ['EDTA', 'Liên kết với ion $\\mathrm{Mg^{2+}}$, làm DNase mất hoạt tính, bảo vệ DNA'],
            ['Protease K', 'Phân giải protein, tách protein khỏi DNA'],
            ['RNase A', 'Phân giải RNA'],
            [
              'Muối ($\\mathrm{NaCl}$)',
              'Ion $\\mathrm{Na^+}$ trung hoà điện tích âm của DNA, giúp DNA kết tụ',
            ],
            ['Ethanol lạnh', 'DNA không tan trong ethanol nên kết tủa'],
          ],
        },
        {
          type: 'p',
          text: 'Tách chiết DNA từ vi khuẩn cần thêm enzyme lysozyme để phá thành peptidoglycan. Quy trình tách chiết RNA cũng tương tự, nhưng phải ức chế RNase và loại bỏ DNA thay vì RNA.',
        },
      ],
    },
    {
      heading: 'Kiểm tra và sử dụng DNA',
      blocks: [
        {
          type: 'p',
          text: 'DNA thu được thường được kiểm tra bằng điện di trên gel agarose (DNA nguyên vẹn cho một băng gọn, DNA bị đứt cho vệt kéo dài) hoặc bằng máy đo quang phổ để xác định nồng độ, độ tinh sạch.',
        },
        {
          type: 'p',
          text: 'DNA tinh sạch là nguyên liệu cho PCR, giải trình tự gene, tạo DNA tái tổ hợp, xét nghiệm chẩn đoán bệnh, giám định DNA trong pháp y.',
        },
      ],
    },
    {
      heading: 'Thực hành: Tách chiết DNA từ quả chuối hoặc dâu tây',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tách chiết DNA bằng các hoá chất dễ tìm, đối chiếu từng bước với quy trình trong phòng thí nghiệm. Làm theo nhóm, khoảng $45$ phút.',
        },
        {
          type: 'table',
          caption: 'Hoá chất dễ tìm thay cho hoá chất phòng thí nghiệm',
          head: ['Dễ tìm', 'Thay cho', 'Bước'],
          rows: [
            ['Nước rửa bát pha loãng', 'SDS', 'Phá vỡ màng tế bào'],
            ['Muối ăn', '$\\mathrm{NaCl}$', 'Trung hoà điện tích DNA'],
            ['Nước dứa tươi', 'Protease (dứa có enzyme bromelain)', 'Loại bỏ protein'],
            ['Cồn $90^\\circ$ để lạnh', 'Ethanol lạnh', 'Kết tủa DNA'],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Nghiền nhuyễn nửa quả chuối (hoặc $3$ quả dâu tây) với $50$ mL nước, $1$ thìa nhỏ muối và $1$ thìa nước rửa bát. Khuấy nhẹ, để $10$ phút.',
            'Lọc qua vải hoặc giấy lọc, lấy dịch trong vào ống nghiệm đến khoảng $\\tfrac13$ ống.',
            'Thêm vài mL nước dứa tươi, đảo nhẹ, để $5$ phút.',
            'Nghiêng ống, rót thật nhẹ cồn lạnh theo thành ống, thể tích gấp khoảng $2$ lần dịch.',
            'Quan sát lớp ranh giới; dùng que tre xoay nhẹ để quấn sợi DNA trắng đục.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: ảnh chụp kết quả; bảng đối chiếu từng bước với quy trình phòng thí nghiệm; giải thích vì sao DNA thu được còn lẫn tạp chất (chưa loại RNA, protein chưa hết) và vì sao thí nghiệm này không dùng EDTA mà vẫn thấy DNA.',
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Cồn dễ cháy: để xa lửa. Không nếm mẫu và hoá chất; rửa tay sau thí nghiệm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng tách chiết ảo',
    instruction:
      'Chọn lần lượt các hoá chất và thao tác trên bàn thí nghiệm để tách DNA khỏi tế bào. Trên bàn có cả bước đúng lẫn bước sai: thử bỏ qua EDTA, thêm cồn quá sớm hoặc dùng DNase để xem ống nghiệm thay đổi thế nào và sản phẩm cuối cùng được đánh giá ra sao.',
  },
  examples: [
    {
      problem:
        'Một nhóm làm đủ các bước nhưng quên thêm RNase. Sản phẩm thu được có đặc điểm gì? Giải thích.',
      steps: [
        'RNase có vai trò phân giải RNA; thiếu nó, RNA vẫn còn nguyên trong dịch.',
        'RNA cũng là nucleic acid, có các nhóm phosphate mang điện tích âm như DNA, nên khi thêm muối và ethanol lạnh, RNA kết tủa cùng DNA.',
        'Vì vậy tủa thu được là hỗn hợp DNA và RNA.',
      ],
      answer:
        'Sản phẩm vẫn có DNA nhưng lẫn RNA, vì RNA không bị phân giải và kết tủa cùng DNA trong ethanol.',
    },
    {
      problem:
        'Một mẫu có $5 \\cdot 10^{6}$ tế bào, mỗi tế bào chứa khoảng $6$ pg DNA ($1$ pg $= 10^{-6}$ µg). Nếu hiệu suất tách chiết là $60\\%$, thu được bao nhiêu µg DNA?',
      steps: [
        'Lượng DNA trong mẫu: $5 \\cdot 10^{6} \\cdot 6 = 3 \\cdot 10^{7}$ pg.',
        'Đổi đơn vị: $3 \\cdot 10^{7}$ pg $= 3 \\cdot 10^{7} \\cdot 10^{-6} = 30$ µg.',
        'Lượng DNA thu được: $30 \\cdot 60\\% = 18$ µg.',
      ],
      answer: 'Thu được $18$ µg DNA.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tách chiết DNA theo đúng trình tự.',
      items: ['Phá vỡ tế bào', 'Loại bỏ protein', 'Loại bỏ RNA', 'Kết tủa và tinh sạch DNA'],
      answer: [0, 1, 2, 3],
      hints: ['DNA phải được giải phóng khỏi tế bào trước.', 'Bước cuối cùng là thu lấy DNA.'],
      solution: 'Phá vỡ tế bào → loại bỏ protein → loại bỏ RNA → kết tủa và tinh sạch DNA.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hoá chất với vai trò của nó trong tách chiết DNA.',
      left: ['Chất tẩy rửa (SDS)', 'EDTA', 'Protease K', 'Ethanol lạnh'],
      right: [
        'Hoà tan lipid của màng tế bào, màng nhân',
        'Ức chế DNase, bảo vệ DNA',
        'Phân giải protein',
        'Làm DNA kết tủa',
        'Nhân bản DNA',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Có một vai trò không thuộc hoá chất nào ở đây.',
        'EDTA lấy đi ion $\\mathrm{Mg^{2+}}$ mà DNase cần.',
      ],
      solution:
        'SDS hoà tan màng; EDTA ức chế DNase; protease K phân giải protein; ethanol lạnh làm DNA kết tủa. Nhân bản DNA là việc của PCR.',
    },
    {
      type: 'choice',
      prompt: 'Protease và RNase được dùng trong tách chiết DNA vì chúng',
      options: [
        'phân giải protein và RNA nhưng không tác động đến DNA',
        'cắt DNA thành các đoạn ngắn dễ thu',
        'làm DNA kết tủa nhanh hơn',
        'hoà tan màng tế bào',
      ],
      answer: 0,
      hints: ['Enzyme có tính đặc hiệu với cơ chất.'],
      solution:
        'Mỗi enzyme đặc hiệu với cơ chất của nó: protease phân giải protein, RNase phân giải RNA, cả hai không tác động đến DNA, nên loại được tạp chất mà giữ nguyên DNA.',
    },
    {
      type: 'choice',
      prompt: 'Nếu bỏ qua EDTA trong dung dịch phá vỡ tế bào, DNA thu được có thể',
      options: [
        'bị DNase cắt thành nhiều đoạn ngắn',
        'lẫn nhiều lipid của màng',
        'không kết tủa trong ethanol',
        'bị biến đổi thành RNA',
      ],
      answer: 0,
      hints: ['Khi tế bào vỡ, enzyme nào được giải phóng có thể phá DNA?'],
      solution:
        'Khi tế bào vỡ, DNase được giải phóng. EDTA liên kết với $\\mathrm{Mg^{2+}}$ làm DNase mất hoạt tính; thiếu EDTA, DNase cắt DNA thành đoạn ngắn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thao tác làm DNA dễ bị đứt gãy.',
      options: [
        'Lắc mạnh hỗn hợp sau khi phá vỡ tế bào',
        'Đun sôi mẫu',
        'Đảo nhẹ ống nghiệm',
        'Giữ mẫu và dung dịch ở nhiệt độ thấp',
        'Để DNase hoạt động khi chưa có EDTA',
      ],
      answers: [0, 1, 4],
      hints: [
        'DNA rất dài nên dễ đứt vì lực cơ học.',
        'Nhiệt độ cao và enzyme đều có thể phá DNA.',
      ],
      solution:
        'Lắc mạnh, đun sôi và để DNase hoạt động đều làm DNA đứt gãy. Đảo nhẹ và giữ lạnh là thao tác bảo vệ DNA.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi thêm muối và ethanol lạnh, DNA kết tủa?',
      options: [
        'Ion dương của muối trung hoà điện tích âm của DNA, và DNA không tan trong ethanol',
        'Ethanol phân giải các nhóm phosphate của DNA',
        'Muối cắt DNA thành đoạn ngắn nặng hơn',
        'Ethanol làm DNA biến tính thành protein',
      ],
      answer: 0,
      hints: ['Nhóm phosphate của DNA mang điện tích gì?'],
      solution:
        'Các nhóm phosphate mang điện tích âm được ion $\\mathrm{Na^+}$ trung hoà; khi đó DNA không tan trong ethanol lạnh và kết tụ thành sợi.',
    },
    {
      type: 'number',
      prompt:
        'Từ $2 \\cdot 10^{6}$ tế bào, mỗi tế bào có khoảng $6$ pg DNA, hiệu suất tách chiết $50\\%$. Thu được bao nhiêu µg DNA? Biết $1$ µg $= 10^{6}$ pg.',
      answer: 6,
      unit: 'µg',
      hints: [
        'Tính tổng lượng DNA theo pg, rồi đổi sang µg.',
        '$2 \\cdot 10^{6} \\cdot 6 = 1{,}2 \\cdot 10^{7}$ pg; sau đó nhân với $50\\%$.',
      ],
      solution:
        'Tổng DNA: $2 \\cdot 10^{6} \\cdot 6 = 1{,}2 \\cdot 10^{7}$ pg $= 12$ µg. Thu được $12 \\cdot 50\\% = 6$ µg.',
    },
    {
      type: 'text',
      prompt:
        'Enzyme được thêm vào để phá thành tế bào vi khuẩn khi tách chiết DNA từ vi khuẩn là gì?',
      accept: ['lysozyme', 'lysozim'],
      hints: ['Enzyme này cũng có trong nước mắt, nước bọt và phá được thành peptidoglycan.'],
      solution: 'Đó là lysozyme, enzyme phân giải peptidoglycan của thành tế bào vi khuẩn.',
    },
  ],
  takeaways: [
    'Nguyên lí: phá vỡ tế bào giải phóng DNA, loại protein, RNA và các chất khác, rồi kết tủa DNA.',
    'Bốn bước: phá vỡ tế bào → loại bỏ protein (protease) → loại bỏ RNA (RNase) → kết tủa (muối, ethanol lạnh) và tinh sạch DNA.',
    'EDTA ức chế DNase; thao tác nhẹ và giữ lạnh để DNA không bị đứt gãy.',
    'DNA tinh sạch được kiểm tra bằng điện di, đo quang phổ và dùng cho PCR, giải trình tự, tạo DNA tái tổ hợp.',
  ],
};

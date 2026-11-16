/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nông nghiệp sạch tạo ra nông sản an toàn và không gây hại cho môi trường. Muốn vậy phải bón phân đúng loại, đúng liều lượng, đúng thời điểm và cân đối, kết hợp các biện pháp kĩ thuật như cải tạo đất, dùng phân hữu cơ, luân canh và thuỷ canh.',
  intro:
    'Bón thật nhiều phân thì cây có lớn nhanh và cho năng suất cao hơn không? Rau xanh mướt nhờ bón nhiều đạm sát ngày thu hoạch có thật sự là rau sạch? Bài học này giúp em sử dụng dinh dưỡng khoáng vừa tăng năng suất, vừa giữ nông sản an toàn.',
  objectives: [
    'Trình bày được khái niệm nông nghiệp sạch và các tiêu chuẩn của sản phẩm nông nghiệp sạch.',
    'Giải thích được cơ sở khoa học của các nguyên tắc bón phân hợp lí: đúng loại, đúng liều lượng, đúng thời điểm, cân đối.',
    'Tính được lượng phân bón cần dùng từ nhu cầu của cây, lượng chất dinh dưỡng có trong đất và hệ số sử dụng phân bón.',
    'Nêu được một số biện pháp kĩ thuật sử dụng dinh dưỡng khoáng tạo nền nông nghiệp sạch.',
  ],
  sections: [
    {
      heading: 'Nông nghiệp sạch',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nông nghiệp sạch',
          text: 'Nông nghiệp sạch là nền nông nghiệp tạo ra sản phẩm không chứa (hoặc chứa dưới ngưỡng cho phép) dư lượng chất độc hại và sinh vật gây hại cho con người, đồng thời quá trình sản xuất không gây ảnh hưởng xấu đến đất, nước và không khí.',
        },
        {
          type: 'table',
          caption: 'Hai mức của sản phẩm nông nghiệp sạch',
          head: ['Mức', 'Yêu cầu chính'],
          rows: [
            [
              'Sản phẩm hữu cơ',
              'Không dùng phân hoá học, chất kích thích sinh trưởng, phần lớn thuốc bảo vệ thực vật hoá học và nước thải trong sản xuất',
            ],
            [
              'Sản phẩm an toàn',
              'Bón phân hợp lí; hạn chế thuốc bảo vệ thực vật và chất kích thích, dùng đúng thời gian cách li; nước tưới không bị ô nhiễm; dư lượng hoá chất, kim loại nặng, vi sinh vật gây hại dưới ngưỡng cho phép',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ví dụ về sản phẩm nông nghiệp sạch ở nước ta: gạo hữu cơ, rau quả sản xuất theo tiêu chuẩn VietGAP, nhãn, vải, thanh long, cá tra, tôm nuôi theo quy trình an toàn.',
        },
      ],
    },
    {
      heading: 'Nguyên tắc sử dụng dinh dưỡng khoáng',
      blocks: [
        {
          type: 'p',
          text: 'Cây chỉ hấp thụ được một lượng khoáng nhất định ở mỗi giai đoạn. Phân bón thừa không làm cây lớn hơn mà gây lãng phí, làm cây dễ sâu bệnh, tích luỹ nitrate trong nông sản, rửa trôi xuống nước ngầm và gây ô nhiễm. Vì vậy, bón phân phải theo các nguyên tắc sau.',
        },
        {
          type: 'table',
          caption: 'Các nguyên tắc bón phân hợp lí',
          head: ['Nguyên tắc', 'Cơ sở khoa học'],
          rows: [
            [
              'Bón đúng loại phân',
              'Mỗi loài cây cần các nguyên tố khoáng khác nhau. Có ba nhóm phân: hữu cơ, vô cơ (hoá học) và vi sinh; chọn loại phù hợp với cây và với đất',
            ],
            [
              'Bón đúng liều lượng',
              'Bón theo nhu cầu của cây: cây lấy lá cần nhiều đạm (N); cây lấy củ, quả, lấy đường cần nhiều kali (K); cây họ Đậu, cây lấy dầu, cây gia vị cần đủ lưu huỳnh (S)',
            ],
            [
              'Bón đúng thời điểm',
              'Mỗi giai đoạn sinh trưởng cần một chế độ dinh dưỡng khác nhau: giai đoạn đầu cần nhiều lân (P) và đạm (N), giai đoạn sau cần thêm kali (K) và các nguyên tố vi lượng',
            ],
            [
              'Bón cân đối',
              'Các nguyên tố phải có tỉ lệ phù hợp; thừa nguyên tố này có thể cản trở cây hấp thụ nguyên tố khác. Không bón vượt nhu cầu của cây',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bón lót và bón thúc',
          text: 'Bón lót là bón trước khi gieo trồng, thường dùng phân hữu cơ, phân lân (chậm tan) và một phần đạm, kali. Bón thúc là bón trong thời gian cây sinh trưởng, chia làm nhiều lần theo nhu cầu của từng giai đoạn. Phân có thể bón vào đất (qua rễ) hoặc phun dung dịch loãng lên lá (qua lá).',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dấu hiệu thiếu nitrogen',
          text: 'Cây thiếu nitrogen sinh trưởng chậm, còi cọc; lá già vàng và rụng sớm (nitrogen được chuyển từ lá già sang lá non).',
        },
      ],
    },
    {
      heading: 'Tính lượng phân bón',
      blocks: [
        {
          type: 'p',
          text: 'Đất đã có sẵn một phần chất dinh dưỡng, và cây chỉ sử dụng được một phần phân bón vào đất (phần còn lại bị rửa trôi, bay hơi hoặc bị đất giữ chặt). Lượng chất dinh dưỡng cần bón được tính theo công thức:',
        },
        {
          type: 'tex',
          tex: '\\text{Lượng cần bón} = \\dfrac{\\text{Nhu cầu của cây} - \\text{Lượng có trong đất}}{\\text{Hệ số sử dụng phân bón}}',
        },
        {
          type: 'p',
          text: 'Trên bao phân, hàm lượng được ghi theo $\\mathrm{N}$ (phân đạm), $\\mathrm{P_2O_5}$ (phân lân) và $\\mathrm{K_2O}$ (phân kali). Urea chứa $46\\%$ $\\mathrm{N}$, nên muốn có $46$ kg $\\mathrm{N}$ phải bón $100$ kg urea.',
        },
        {
          type: 'tex',
          tex: '\\text{Khối lượng phân} = \\dfrac{\\text{Lượng chất dinh dưỡng cần bón}}{\\text{Tỉ lệ chất dinh dưỡng trong phân}}',
        },
      ],
    },
    {
      heading: 'Biện pháp kĩ thuật tạo nền nông nghiệp sạch',
      blocks: [
        {
          type: 'list',
          items: [
            'Trồng cây trong nhà lưới, nhà kính bằng thuỷ canh, khí canh: chủ động điều chỉnh thành phần và nồng độ khoáng theo nhu cầu của cây, ít tồn dư, ít gây ô nhiễm, hạn chế sâu bệnh nên giảm thuốc bảo vệ thực vật.',
            'Cải tạo đất: bón vôi cho đất chua để nâng pH, giúp cây hấp thụ phân hiệu quả hơn.',
            'Tận dụng phân hữu cơ sẵn có (phân chuồng ủ hoai, rơm rạ, bã mía, tro trấu, vỏ cà phê) và phân vi sinh để giảm phân hoá học.',
            'Chia nhỏ liều bón, tăng số lần bón trong vụ; dùng phân tan chậm để giảm thất thoát.',
            'Luân canh, xen canh cây trồng, nhất là với cây họ Đậu (có vi khuẩn cố định nitrogen ở nốt sần) để giữ độ phì của đất.',
            'Tận dụng quan hệ cộng sinh giữa rễ cây và nấm (nấm rễ) giúp cây hấp thụ nitrate, phosphate tốt hơn ở đất nghèo dinh dưỡng.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao "khoai đất lạ"?',
          text: 'Trồng khoai lang liên tiếp nhiều vụ trên cùng một thửa ruộng làm đất cạn dần một số chất khoáng, nhất là kali, nên năng suất giảm. Luân canh, bổ sung phân hữu cơ trước mỗi vụ giúp đất phục hồi.',
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Lập kế hoạch bón phân cho một vườn rau',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: lập kế hoạch bón phân theo hướng nông nghiệp sạch cho một luống rau ở nhà hoặc ở trường. Làm theo nhóm $3$ đến $4$ bạn.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn loại rau, đo diện tích luống và tìm hiểu loại đất (đất thịt, đất cát, đất chua...).',
            'Tìm hiểu nhu cầu dinh dưỡng của loại rau đó qua sách, cán bộ khuyến nông hoặc hướng dẫn trên bao phân.',
            'Chọn loại phân (ưu tiên phân hữu cơ ủ hoai, phân vi sinh), tính lượng phân cho diện tích luống.',
            'Lập lịch bón: bón lót, các lần bón thúc, thời điểm ngừng bón đạm trước khi thu hoạch.',
            'Đề xuất các biện pháp đi kèm: cải tạo đất, luân canh, xử lí bao bì phân bón.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng kế hoạch bón phân (loại phân, lượng, thời điểm, cách bón) và giải thích mỗi lựa chọn bằng các nguyên tắc bón phân hợp lí.',
        },
      ],
    },
  ],
  explore: {
    title: 'Máy tính lượng phân bón',
    instruction:
      'Chọn cây trồng, loại đất và lần bón. Bảng tính lượng $\\mathrm{N}$, $\\mathrm{P_2O_5}$, $\\mathrm{K_2O}$ cho cả vụ và cho lần bón đó, rồi đổi ra khối lượng phân. Hãy tự ước lượng lượng urea bằng thanh trượt và xem nhận xét.',
  },
  examples: [
    {
      problem:
        'Một ruộng lúa $1$ ha trên đất phù sa. Cả vụ, cây lúa cần $90$ kg $\\mathrm{N}$; đất cung cấp được $40$ kg $\\mathrm{N}$; hệ số sử dụng phân đạm là $0{,}5$. Tính lượng $\\mathrm{N}$ cần bón và khối lượng urea ($46\\%$ $\\mathrm{N}$) tương ứng.',
      steps: [
        'Lượng $\\mathrm{N}$ cây còn thiếu: $90 - 40 = 50$ kg.',
        'Cây chỉ sử dụng được một nửa lượng đạm bón vào, nên lượng $\\mathrm{N}$ cần bón là $\\dfrac{50}{0{,}5} = 100$ kg.',
        'Khối lượng urea: $\\dfrac{100}{0{,}46} \\approx 217{,}4$ kg.',
      ],
      answer: 'Cần bón $100$ kg $\\mathrm{N}$, tức khoảng $217$ kg urea cho cả vụ.',
    },
    {
      problem:
        'Một ruộng ngô $1$ ha trên đất bạc màu. Cả vụ, cây cần $90$ kg $\\mathrm{K_2O}$, đất cung cấp $15$ kg $\\mathrm{K_2O}$, hệ số sử dụng phân kali là $0{,}6$. Lần bón thúc thứ hai chiếm $50\\%$ lượng kali cả vụ. Tính khối lượng kali clorua ($60\\%$ $\\mathrm{K_2O}$) cho lần bón đó.',
      steps: [
        'Lượng $\\mathrm{K_2O}$ cần bón cả vụ: $\\dfrac{90 - 15}{0{,}6} = \\dfrac{75}{0{,}6} = 125$ kg.',
        'Lần bón thúc thứ hai: $125 \\cdot 50\\% = 62{,}5$ kg $\\mathrm{K_2O}$.',
        'Khối lượng kali clorua: $\\dfrac{62{,}5}{0{,}6} \\approx 104{,}2$ kg.',
        'Lần bón này nhiều kali vì giai đoạn sau cây cần kali để tạo bắp, hạt chắc.',
      ],
      answer: 'Khoảng $104$ kg kali clorua cho lần bón thúc thứ hai.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về nông nghiệp sạch?',
      options: [
        'Sản phẩm không chứa (hoặc dưới ngưỡng cho phép) chất độc hại, sinh vật gây hại và việc sản xuất không làm ô nhiễm đất, nước, không khí',
        'Chỉ cần sản phẩm được rửa sạch trước khi bán',
        'Bón thật nhiều phân để cây lớn nhanh và cho năng suất tối đa',
        'Không được dùng bất kì loại phân bón nào',
      ],
      answer: 0,
      hints: ['"Sạch" nói về cả sản phẩm lẫn môi trường sản xuất.'],
      solution:
        'Nông nghiệp sạch tạo ra sản phẩm an toàn cho người dùng (không có hoặc dưới ngưỡng cho phép chất độc hại, sinh vật gây hại) và không gây ảnh hưởng xấu tới đất, nước, không khí. Nông nghiệp sạch vẫn bón phân, nhưng bón hợp lí.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào thuộc nguyên tắc bón phân hợp lí?',
      options: [
        'Bón đúng loại phân phù hợp với cây và đất',
        'Bón đúng liều lượng theo nhu cầu của cây',
        'Bón đúng thời điểm theo giai đoạn sinh trưởng',
        'Bón cân đối giữa các nguyên tố',
        'Bón thật nhiều một lần cho cả vụ để đỡ công',
        'Bón nhiều đạm ngay trước khi thu hoạch rau cho lá xanh',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Cây chỉ hấp thụ được một lượng khoáng nhất định ở mỗi giai đoạn.'],
      solution:
        'Bón phân hợp lí là bón đúng loại, đúng liều lượng, đúng thời điểm và cân đối. Bón dồn một lần gây thất thoát, cháy cây; bón đạm sát ngày thu hoạch làm rau tích luỹ nitrate.',
    },
    {
      type: 'match',
      prompt: 'Nối nhóm cây với nguyên tố khoáng cần được chú ý cung cấp nhiều.',
      left: ['Cây lấy lá', 'Cây lấy củ, quả, lấy đường', 'Cây họ Đậu, cây lấy dầu'],
      right: ['Đạm (N)', 'Kali (K)', 'Lưu huỳnh (S)'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Nitrogen là thành phần của protein, diệp lục: cần cho lá phát triển.'],
      solution:
        'Cây lấy lá cần nhiều đạm; cây lấy củ, quả, đường cần nhiều kali; cây họ Đậu, cây lấy dầu, cây gia vị cần đủ lưu huỳnh.',
    },
    {
      type: 'number',
      prompt:
        'Cây trồng cần $120$ kg $\\mathrm{N}$ cho một vụ trên $1$ ha. Đất cung cấp được $30$ kg $\\mathrm{N}$, hệ số sử dụng phân đạm là $0{,}6$. Cần bón bao nhiêu kg $\\mathrm{N}$?',
      answer: 150,
      unit: 'kg',
      hints: [
        'Trước hết tính lượng $\\mathrm{N}$ đất còn thiếu so với nhu cầu.',
        'Chia lượng thiếu cho hệ số sử dụng phân bón.',
      ],
      solution:
        'Lượng cần bón $= \\dfrac{120 - 30}{0{,}6} = \\dfrac{90}{0{,}6} = 150$ kg $\\mathrm{N}$.',
    },
    {
      type: 'number',
      prompt:
        'Cần bón $92$ kg $\\mathrm{N}$. Phải dùng bao nhiêu kg urea (chứa $46\\%$ $\\mathrm{N}$)?',
      answer: 200,
      unit: 'kg',
      hints: ['Mỗi kg urea chỉ chứa $0{,}46$ kg $\\mathrm{N}$.'],
      solution: 'Khối lượng urea $= \\dfrac{92}{0{,}46} = 200$ kg.',
    },
    {
      type: 'number',
      prompt:
        'Lần bón lót cần $48$ kg $\\mathrm{P_2O_5}$. Phải dùng bao nhiêu kg super lân (chứa $16\\%$ $\\mathrm{P_2O_5}$)?',
      answer: 300,
      unit: 'kg',
      hints: ['Chia lượng $\\mathrm{P_2O_5}$ cần bón cho tỉ lệ $\\mathrm{P_2O_5}$ trong phân.'],
      solution: 'Khối lượng super lân $= \\dfrac{48}{0{,}16} = 300$ kg.',
    },
    {
      type: 'choice',
      prompt: 'Cây trồng thiếu nitrogen thường có biểu hiện nào?',
      options: [
        'Sinh trưởng chậm, còi cọc; lá già vàng và rụng sớm',
        'Lá non có màu xanh đậm bất thường, thân mọc vống',
        'Rễ phát triển rất mạnh, quả to hơn bình thường',
        'Cây ra hoa sớm và nhiều hoa hơn',
      ],
      answer: 0,
      hints: [
        'Nitrogen là thành phần của diệp lục và protein; nó di chuyển được từ lá già sang lá non.',
      ],
      solution:
        'Thiếu nitrogen, cây không đủ nguyên liệu tổng hợp protein, diệp lục nên còi cọc; nitrogen được chuyển từ lá già sang lá non nên lá già vàng trước và rụng sớm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phân lân thường được dùng toàn bộ để bón lót?',
      options: [
        'Phân lân chậm tan, cần thời gian chuyển thành dạng cây hấp thụ được, và cây cần nhiều lân ở giai đoạn đầu để phát triển rễ',
        'Phân lân tan rất nhanh nên phải bón sớm kẻo mất',
        'Cây không cần lân ở giai đoạn đầu',
        'Bón lân vào giai đoạn sau sẽ làm cây chết ngay',
      ],
      answer: 0,
      hints: ['Nhớ lại: giai đoạn đầu cây cần nhiều những nguyên tố nào?'],
      solution:
        'Phân lân chậm tan, cần thời gian để cây hấp thụ được; giai đoạn đầu cây cần nhiều lân và đạm để phát triển rễ, lá. Vì vậy lân được bón lót.',
    },
    {
      type: 'multi',
      prompt: 'Những biện pháp nào giúp giảm lượng phân hoá học mà vẫn giữ năng suất?',
      options: [
        'Bón vôi cải tạo đất chua',
        'Dùng phân chuồng ủ hoai, rơm rạ, tro trấu',
        'Chia nhỏ liều bón và tăng số lần bón',
        'Luân canh với cây họ Đậu',
        'Tưới rau bằng nước thải chưa xử lí cho nhiều chất dinh dưỡng',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Nước thải chưa xử lí có thể chứa gì ngoài chất dinh dưỡng?'],
      solution:
        'Bón vôi giúp cây hấp thụ phân tốt hơn; phân hữu cơ thay một phần phân hoá học; chia nhỏ liều giảm thất thoát; cây họ Đậu cố định nitrogen làm giàu đất. Nước thải chưa xử lí có thể chứa kim loại nặng, vi sinh vật gây bệnh nên không được dùng.',
    },
    {
      type: 'choice',
      prompt:
        'Bà con nông dân nói "khoai đất lạ", ý là không nên trồng khoai lang liên tiếp trên một thửa ruộng. Giải thích nào đúng?',
      options: [
        'Trồng khoai nhiều vụ liền làm đất cạn dần chất khoáng (nhất là kali) và bạc màu, năng suất giảm',
        'Khoai lang chỉ mọc được trên đất chưa từng trồng cây',
        'Rễ khoai lang tiết chất làm đất có tính kiềm mạnh',
        'Khoai lang không cần chất khoáng nên làm đất thừa khoáng',
      ],
      answer: 0,
      hints: ['Củ khoai lấy đi khỏi đất những chất khoáng nào nhiều nhất?'],
      solution:
        'Mỗi vụ khoai lấy đi nhiều chất khoáng, đặc biệt là kali. Trồng liên tục làm đất nghèo dinh dưỡng; cần luân canh hoặc cải tạo đất, bổ sung phân hữu cơ trước mỗi vụ.',
    },
  ],
  takeaways: [
    'Nông nghiệp sạch: nông sản không có (hoặc dưới ngưỡng cho phép) chất độc hại, sinh vật gây hại; sản xuất không gây ô nhiễm môi trường.',
    'Bón phân hợp lí: đúng loại, đúng liều lượng, đúng thời điểm và cân đối giữa các nguyên tố.',
    'Lượng cần bón = (nhu cầu của cây − lượng có trong đất) : hệ số sử dụng phân bón; rồi chia cho tỉ lệ chất dinh dưỡng trong phân.',
    'Thuỷ canh, cải tạo đất, phân hữu cơ, chia nhỏ liều, luân canh và nấm rễ giúp dùng khoáng hiệu quả, ít tồn dư.',
  ],
};

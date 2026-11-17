/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành ước tính kích thước và mật độ quần thể bằng phương pháp ô tiêu chuẩn (N = A/a · n̄) đối với thực vật, động vật ít di chuyển và phương pháp đánh dấu – bắt lại (N = M·C/R) đối với động vật di chuyển; xử lí số liệu và viết báo cáo.',
  intro:
    'Không ai đếm được từng cây cỏ trên một quả đồi hay từng con cá trong một cái hồ. Vậy làm thế nào các nhà sinh thái học biết một quần thể có khoảng bao nhiêu cá thể? Bài thực hành này giúp em lấy mẫu đúng cách rồi dùng toán học để ước tính kích thước và mật độ quần thể.',
  objectives: [
    'Xác định được khu vực phân bố và bố trí được các ô tiêu chuẩn ngẫu nhiên để đếm cá thể của quần thể thực vật hoặc động vật ít di chuyển.',
    'Ước tính được kích thước quần thể bằng công thức $N = \\dfrac{A}{a} \\cdot \\bar{n}$ và tính được mật độ quần thể.',
    'Giải thích được nguyên tắc và thực hiện được phương pháp đánh dấu – bắt lại, ước tính $N = \\dfrac{M \\cdot C}{R}$.',
    'Xử lí số liệu, nhận xét độ tin cậy và viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Cơ sở của việc ước tính',
      blocks: [
        {
          type: 'p',
          text: 'Kích thước và mật độ là hai đặc trưng cơ bản của quần thể. Vì không thể đếm toàn bộ cá thể, người ta lấy mẫu một phần quần thể rồi suy ra cả quần thể dựa trên cơ sở toán học (xác suất, thống kê). Muốn kết quả đáng tin cậy, mẫu phải được chọn ngẫu nhiên và đủ lớn; số mẫu càng nhiều, kết quả ước tính càng sát thực tế.',
        },
        {
          type: 'p',
          text: 'Trước khi lấy mẫu phải xác định khu vực phân bố của quần thể (lập bản đồ, đo diện tích), vì công thức ước tính dùng diện tích khu vực này và các ô mẫu phải được đặt bên trong nó.',
        },
      ],
    },
    {
      heading: 'Phương pháp ô tiêu chuẩn',
      blocks: [
        {
          type: 'list',
          items: [
            'Đối tượng: thực vật hoặc động vật ít di chuyển (giun đất, ốc, cua, sò...).',
            'Dụng cụ: bản đồ khu vực (giấy hoặc điện tử), thước dây, cọc tre hoặc gỗ và dây để căng ô (hoặc khung gỗ, khung dây thép), bút, sổ ghi chép; ống nhòm, cuốc, xẻng tuỳ đối tượng.',
            'Kích thước ô phù hợp với đối tượng: khoảng $10$ m × $10$ m với cây gỗ lớn, $1$ m × $1$ m với cây thân thảo, $10$ cm × $10$ cm với địa y.',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định khu vực phân bố, lập bản đồ, chia khu vực thành các ô và đánh số; chọn ngẫu nhiên các vị trí lấy mẫu.',
            'Đặt ô tiêu chuẩn vào từng vị trí đã chọn, đếm số cá thể trong mỗi ô và ghi vào bảng.',
            'Tính số cá thể trung bình trong một ô rồi ước tính kích thước quần thể.',
            'Từ kích thước quần thể và diện tích khu vực phân bố, tính mật độ quần thể.',
          ],
        },
        {
          type: 'tex',
          tex: 'N = \\dfrac{A}{a} \\cdot \\bar{n}, \\qquad \\text{mật độ} = \\dfrac{N}{A}',
        },
        {
          type: 'p',
          text: 'Trong đó $N$ là kích thước quần thể ước tính, $A$ là diện tích khu vực khảo sát, $a$ là diện tích một ô tiêu chuẩn, $\\bar{n}$ là số cá thể trung bình trong một ô. $A$ và $a$ phải cùng đơn vị đo.',
        },
        { type: 'widget', name: 'o-tieu-chuan' },
      ],
    },
    {
      heading: 'Phương pháp đánh dấu – bắt lại',
      blocks: [
        {
          type: 'p',
          text: 'Với động vật di chuyển nhiều (cá, chim, chuột, côn trùng), các ô cố định không dùng được. Người ta bắt một số cá thể, đánh dấu rồi thả lại; sau một thời gian, khi các cá thể đã đánh dấu hoà nhập trở lại quần thể, bắt lần thứ hai và đếm số cá thể mang dấu.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lần bắt thứ nhất: bắt ngẫu nhiên $M$ cá thể, đánh dấu (cắt vây, đeo vòng, chấm sơn...) rồi thả lại đúng nơi bắt.',
            'Chờ một thời gian đủ để các cá thể đánh dấu phân bố đều trở lại trong quần thể.',
            'Lần bắt thứ hai: bắt ngẫu nhiên $C$ cá thể, đếm số cá thể mang dấu $R$.',
            'Ước tính kích thước quần thể; nên lặp lại nhiều lần và lấy trung bình.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Công thức ước tính',
          text: 'Tỉ lệ cá thể mang dấu trong lần bắt thứ hai xấp xỉ tỉ lệ cá thể mang dấu trong cả quần thể: $\\dfrac{R}{C} = \\dfrac{M}{N}$, nên $$N = \\dfrac{M \\cdot C}{R}.$$',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Điều kiện để kết quả đáng tin cậy',
          text: 'Dấu không bị mất và không làm ảnh hưởng tới sức sống, tập tính của cá thể; cá thể đánh dấu hoà nhập ngẫu nhiên vào quần thể; giữa hai lần bắt không có sinh, tử, nhập cư, xuất cư đáng kể; mỗi cá thể có cơ hội bị bắt như nhau.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Mục đích của bài thực hành; đối tượng và khu vực khảo sát (diện tích, bản đồ).',
            'Kết quả: bảng số cá thể trong từng ô hoặc từng lần bắt; số trung bình; kích thước và mật độ quần thể ước tính.',
            'Giải thích, nhận xét: kết quả có đáng tin cậy không, nguyên nhân sai số (số mẫu ít, đặt ô không ngẫu nhiên, cá thể phân bố theo nhóm, dấu bị mất...).',
            'Trả lời câu hỏi, ví dụ: vì sao phải xác định khu vực phân bố trước khi ước tính các đặc trưng của quần thể?',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Đánh dấu – bắt lại trong một hồ cá',
    instruction:
      'Chọn số cá bắt lần 1 ($M$) và lần 2 ($C$), bấm "Bắt và đánh dấu", rồi "Thả lại, rồi bắt lần 2" để đếm số cá có dấu $R$ và tính $N = \\dfrac{M \\cdot C}{R}$. Lặp lại vài lần trên cùng hồ, so sánh trung bình với số lượng thật; thử $M$, $C$ nhỏ để thấy sai số lớn hơn.',
  },
  examples: [
    {
      problem:
        'Khảo sát một quần thể cỏ trên bãi đất rộng $200$ m², dùng $5$ ô tiêu chuẩn $1$ m × $1$ m đặt ngẫu nhiên, đếm được $8$, $12$, $9$, $11$, $10$ cây. Ước tính kích thước và mật độ quần thể.',
      steps: [
        'Số cây trung bình một ô: $\\bar{n} = \\dfrac{8 + 12 + 9 + 11 + 10}{5} = \\dfrac{50}{5} = 10$ cây.',
        'Diện tích một ô $a = 1$ m², $A = 200$ m²: $N = \\dfrac{200}{1} \\cdot 10 = 2\\,000$ cây.',
        'Mật độ: $\\dfrac{2\\,000}{200} = 10$ cây/m².',
      ],
      answer: 'Khoảng $2\\,000$ cây, mật độ $10$ cây/m².',
    },
    {
      problem:
        'Một khu rừng trồng rộng $2$ ha. Đặt $4$ ô tiêu chuẩn $10$ m × $10$ m, đếm được $6$, $9$, $7$, $8$ cây keo. Ước tính số cây keo và mật độ (cây/ha).',
      steps: [
        'Đổi đơn vị: $A = 2$ ha $= 20\\,000$ m²; $a = 10 \\cdot 10 = 100$ m².',
        '$\\bar{n} = \\dfrac{6 + 9 + 7 + 8}{4} = \\dfrac{30}{4} = 7{,}5$ cây.',
        '$N = \\dfrac{20\\,000}{100} \\cdot 7{,}5 = 200 \\cdot 7{,}5 = 1\\,500$ cây.',
        'Mật độ: $\\dfrac{1\\,500}{2} = 750$ cây/ha.',
      ],
      answer: 'Khoảng $1\\,500$ cây keo, mật độ $750$ cây/ha.',
    },
    {
      problem:
        'Để ước tính số cá chép trong một hồ, người ta bắt $60$ con, đánh dấu rồi thả lại. Một tuần sau bắt $50$ con, trong đó có $12$ con mang dấu. Ước tính số cá chép trong hồ.',
      steps: [
        '$M = 60$, $C = 50$, $R = 12$.',
        'Tỉ lệ cá có dấu ở lần bắt thứ hai $\\dfrac{12}{50}$ xấp xỉ tỉ lệ $\\dfrac{60}{N}$ trong cả hồ.',
        '$N = \\dfrac{M \\cdot C}{R} = \\dfrac{60 \\cdot 50}{12} = \\dfrac{3\\,000}{12} = 250$ con.',
      ],
      answer: 'Khoảng $250$ con cá chép.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Bãi cỏ rộng $50$ m². Đặt ngẫu nhiên $4$ ô tiêu chuẩn $1$ m², đếm được $6$, $4$, $7$, $3$ cây. Ước tính số cây trên bãi.',
      answer: 250,
      unit: 'cây',
      hints: ['Tính số cây trung bình một ô.', 'Dùng $N = \\dfrac{A}{a} \\cdot \\bar{n}$.'],
      solution:
        '$\\bar{n} = \\dfrac{6 + 4 + 7 + 3}{4} = 5$; $N = \\dfrac{50}{1} \\cdot 5 = 250$ cây.',
    },
    {
      type: 'number',
      prompt:
        'Với số liệu ở bài trên ($N = 250$ cây trên $50$ m²), mật độ quần thể là bao nhiêu cây trên $1$ m²?',
      answer: 5,
      hints: ['Mật độ bằng kích thước quần thể chia cho diện tích.'],
      solution: '$\\dfrac{250}{50} = 5$ cây/m².',
    },
    {
      type: 'number',
      prompt:
        'Khu rừng rộng $3$ ha. Đặt $5$ ô tiêu chuẩn $10$ m × $10$ m, đếm được $4$, $6$, $5$, $7$, $3$ cây gỗ. Ước tính số cây gỗ trong khu rừng.',
      answer: 1500,
      unit: 'cây',
      hints: [
        'Đổi $3$ ha ra m² và tính diện tích một ô.',
        '$\\dfrac{A}{a} = \\dfrac{30\\,000}{100}$.',
      ],
      solution:
        '$A = 30\\,000$ m², $a = 100$ m²; $\\bar{n} = \\dfrac{4 + 6 + 5 + 7 + 3}{5} = 5$; $N = 300 \\cdot 5 = 1\\,500$ cây.',
    },
    {
      type: 'number',
      prompt:
        'Bắt $40$ con chuột đồng, đánh dấu rồi thả lại. Lần bắt sau được $30$ con, trong đó $6$ con có dấu. Ước tính số chuột đồng trong khu vực.',
      answer: 200,
      unit: 'con',
      hints: ['$N = \\dfrac{M \\cdot C}{R}$ với $M = 40$, $C = 30$, $R = 6$.'],
      solution: '$N = \\dfrac{40 \\cdot 30}{6} = \\dfrac{1\\,200}{6} = 200$ con.',
    },
    {
      type: 'number',
      prompt:
        'Người ta đeo vòng cho $120$ con chim sẻ rồi thả. Ít ngày sau bắt $100$ con, thấy $15$ con đeo vòng. Ước tính số chim sẻ của quần thể.',
      answer: 800,
      unit: 'con',
      hints: ['Đây là phương pháp đánh dấu – bắt lại.'],
      solution: '$N = \\dfrac{120 \\cdot 100}{15} = \\dfrac{12\\,000}{15} = 800$ con.',
    },
    {
      type: 'number',
      prompt:
        'Một hồ có khoảng $480$ con cá rô. Nếu đánh dấu $80$ con rồi thả lại, lần bắt sau bắt $60$ con thì dự kiến có bao nhiêu con mang dấu?',
      answer: 10,
      unit: 'con',
      hints: [
        'Tỉ lệ có dấu trong mẫu bằng tỉ lệ có dấu trong cả hồ: $\\dfrac{R}{C} = \\dfrac{M}{N}$.',
      ],
      solution: '$R = \\dfrac{M \\cdot C}{N} = \\dfrac{80 \\cdot 60}{480} = 10$ con.',
    },
    {
      type: 'choice',
      prompt: 'Muốn ước tính số lượng cá mè trong một hồ chứa, nên dùng phương pháp nào?',
      options: [
        'Đánh dấu – bắt lại',
        'Ô tiêu chuẩn $1$ m × $1$ m',
        'Đếm toàn bộ cá trong hồ',
        'Ô tiêu chuẩn $10$ cm × $10$ cm',
      ],
      answer: 0,
      hints: ['Cá di chuyển liên tục trong hồ.'],
      solution:
        'Cá là động vật di chuyển nhiều nên không đếm theo ô cố định được; dùng phương pháp đánh dấu – bắt lại.',
    },
    {
      type: 'choice',
      prompt:
        'Khi khảo sát quần thể cỏ mần trầu (cây thân thảo), kích thước ô tiêu chuẩn phù hợp là',
      options: ['$1$ m × $1$ m', '$10$ m × $10$ m', '$10$ cm × $10$ cm', '$100$ m × $100$ m'],
      answer: 0,
      hints: ['Ô $10$ m × $10$ m dành cho cây gỗ lớn, ô $10$ cm × $10$ cm cho địa y.'],
      solution: 'Cây thân thảo dùng ô $1$ m × $1$ m.',
    },
    {
      type: 'multi',
      prompt:
        'Những điều kiện nào cần có để phương pháp đánh dấu – bắt lại cho kết quả đáng tin cậy?',
      options: [
        'Dấu không bị mất và không làm giảm sức sống của cá thể',
        'Cá thể đánh dấu hoà nhập ngẫu nhiên vào quần thể trước lần bắt thứ hai',
        'Giữa hai lần bắt không có sinh, tử, di cư đáng kể',
        'Lần bắt thứ hai phải bắt đúng chỗ các cá thể đánh dấu tụ tập',
      ],
      answers: [0, 1, 2],
      hints: [
        'Công thức dựa trên giả định tỉ lệ có dấu trong mẫu bằng tỉ lệ có dấu trong cả quần thể.',
      ],
      solution:
        'Ba điều kiện đầu giữ cho tỉ lệ $\\dfrac{M}{N}$ không đổi và mẫu thứ hai ngẫu nhiên. Bắt đúng chỗ cá thể đánh dấu tụ tập làm $R$ lớn bất thường, $N$ ước tính nhỏ hơn thực tế.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của phương pháp ô tiêu chuẩn theo đúng thứ tự.',
      items: [
        'Tính số cá thể trung bình một ô và ước tính kích thước quần thể',
        'Tính mật độ quần thể',
        'Xác định khu vực phân bố, lập bản đồ, chọn ngẫu nhiên vị trí lấy mẫu',
        'Đặt ô tiêu chuẩn, đếm số cá thể trong mỗi ô',
      ],
      answer: [2, 3, 0, 1],
      hints: ['Cần biết diện tích khu vực trước khi lấy mẫu; mật độ cần có kích thước quần thể.'],
      solution:
        'Xác định khu vực và vị trí lấy mẫu → đặt ô, đếm → tính $\\bar{n}$ và $N$ → tính mật độ $\\dfrac{N}{A}$.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao các ô tiêu chuẩn phải được đặt ở những vị trí chọn ngẫu nhiên và với số lượng đủ lớn?',
      options: [
        'Để mẫu đại diện cho cả quần thể, giảm sai số khi cá thể phân bố không đều',
        'Để đếm được toàn bộ cá thể trong khu vực',
        'Để các ô luôn rơi vào nơi có nhiều cá thể nhất',
        'Vì công thức chỉ đúng khi có đúng $5$ ô',
      ],
      answer: 0,
      hints: ['Nghĩ tới quần thể phân bố theo nhóm: chỉ đặt ô vào một nhóm thì kết quả ra sao?'],
      solution:
        'Cá thể thường phân bố theo nhóm; chọn ô theo ý thích dễ rơi vào chỗ dày hoặc chỗ thưa, làm kết quả lệch. Đặt ngẫu nhiên và nhiều ô giúp mẫu đại diện, sai số nhỏ hơn.',
    },
  ],
  takeaways: [
    'Ước tính kích thước quần thể bằng cách lấy mẫu ngẫu nhiên, đủ nhiều, trong khu vực phân bố đã xác định.',
    'Ô tiêu chuẩn (thực vật, động vật ít di chuyển): $N = \\dfrac{A}{a} \\cdot \\bar{n}$, mật độ $= \\dfrac{N}{A}$.',
    'Đánh dấu – bắt lại (động vật di chuyển): $N = \\dfrac{M \\cdot C}{R}$, đúng khi dấu không mất, cá thể hoà nhập ngẫu nhiên và quần thể không đổi giữa hai lần bắt.',
  ],
};

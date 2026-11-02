/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công nghệ tế bào thực vật dựa trên tính toàn năng của tế bào: nuôi cấy mô trong điều kiện vô trùng, với tỉ lệ auxin và cytokinin thích hợp, để nhân nhanh cây giống. Bài nêu quy trình vi nhân giống và các thành tựu.',
  intro:
    'Những cây lan con nhỏ xíu trong bình thuỷ tinh đều được tái sinh từ vài mẩu mô của một cây mẹ. Các nhà khoa học làm thế nào để một mẩu mô bé như vậy trở thành hàng nghìn cây hoàn chỉnh, mang đúng đặc tính của cây mẹ?',
  objectives: [
    'Trình bày được nguyên lí của nuôi cấy mô, tế bào thực vật: tính toàn năng, biệt hoá và giải biệt hoá.',
    'Giải thích được vai trò của tỉ lệ auxin và cytokinin và của điều kiện vô trùng.',
    'Mô tả được quy trình vi nhân giống và nêu được ưu điểm của nó so với giâm cành, chiết cành, gieo hạt.',
    'Nêu được một số thành tựu của công nghệ tế bào thực vật, gồm cả quy trình tạo cây biến đổi gene.',
  ],
  sections: [
    {
      heading: 'Nguyên lí nuôi cấy mô, tế bào thực vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công nghệ tế bào thực vật',
          text: 'Công nghệ tế bào thực vật là quy trình nuôi cấy tế bào, mô thực vật trong điều kiện vô trùng, trên môi trường dinh dưỡng có hormone thích hợp, để tạo ra các cây có kiểu gene giống nhau hoặc các giống cây mới.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính toàn năng của tế bào',
          text: 'Tính toàn năng là khả năng một tế bào mang đủ thông tin di truyền phát triển thành một cơ thể hoàn chỉnh trong điều kiện thích hợp. Nhiều tế bào thực vật đã chuyên hoá vẫn giữ tính toàn năng, vì chúng còn đủ hệ gene, chỉ là một nhóm gene đang hoạt động.',
        },
        {
          type: 'list',
          items: [
            'Biệt hoá: tế bào chuyên hoá về cấu trúc và chức năng để làm một nhiệm vụ nhất định.',
            'Giải biệt hoá (còn gọi là phản biệt hoá): tế bào đã biệt hoá trở lại trạng thái chưa chuyên hoá và phân chia mạnh, thường tạo thành khối mô sẹo.',
            'Tái biệt hoá: tế bào của mô sẹo lại biệt hoá thành chồi, rễ, rồi thành cây hoàn chỉnh.',
          ],
        },
        {
          type: 'p',
          text: 'Hướng phát triển của mô nuôi cấy phụ thuộc nhiều vào tỉ lệ hai nhóm hormone thực vật trong môi trường: auxin và cytokinin.',
        },
        {
          type: 'table',
          caption: 'Tỉ lệ hormone và hướng phát triển của mô nuôi cấy',
          head: ['Tỉ lệ auxin : cytokinin', 'Mô nuôi cấy tạo thành'],
          rows: [
            ['Cân đối', 'Mô sẹo'],
            ['Auxin trội hơn (tỉ lệ cao)', 'Rễ'],
            ['Cytokinin trội hơn (tỉ lệ thấp)', 'Chồi'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao phải vô trùng?',
          text: 'Môi trường nuôi cấy giàu dinh dưỡng nên vi sinh vật cũng phát triển rất nhanh trong đó. Chúng cạnh tranh dinh dưỡng với tế bào thực vật, có thể tiết độc tố hoặc tấn công trực tiếp tế bào.',
        },
      ],
    },
    {
      heading: 'Quy trình vi nhân giống',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vi nhân giống',
          text: 'Vi nhân giống là nhân giống vô tính cây trồng trong ống nghiệm, bình nuôi cấy từ những mẩu mô rất nhỏ. Từ một mẫu ban đầu có thể tạo ra số lượng rất lớn cây con có kiểu gene giống nhau.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn mẫu: lấy mô non (thường là đỉnh chồi) từ cây mẹ khoẻ mạnh, mang đặc tính tốt.',
            'Khử trùng: khử trùng bề mặt mẫu, tiệt trùng môi trường và dụng cụ, thao tác trong tủ cấy vô trùng.',
            'Nuôi cấy tạo mô sẹo: đặt mẫu trên môi trường có dinh dưỡng và hormone cân đối, ở nhiệt độ và ánh sáng phù hợp.',
            'Nhân chồi: cấy chuyền sang môi trường có cytokinin trội hơn; tách các chồi và cấy tiếp nhiều lần để nhân số lượng.',
            'Tạo rễ: chuyển chồi sang môi trường có auxin trội hơn để có cây con hoàn chỉnh.',
            'Ra cây: huấn luyện cây thích nghi dần với độ ẩm và ánh sáng bên ngoài, rồi trồng vào giá thể ở vườn ươm.',
          ],
        },
        {
          type: 'p',
          text: 'Một số loài có thể tạo chồi trực tiếp từ mẫu, không qua mô sẹo. Điểm mạnh của quy trình nằm ở khâu nhân chồi: mọi chồi mới lại được cấy tiếp, nên số chồi tăng theo cấp số nhân.',
        },
        { type: 'widget', name: 'nhan-nhanh' },
        {
          type: 'table',
          caption: 'So sánh vi nhân giống với cách nhân giống thông thường',
          head: ['Tiêu chí', 'Vi nhân giống', 'Giâm cành, chiết cành', 'Gieo hạt'],
          rows: [
            [
              'Số cây từ một cây mẹ',
              'Rất lớn, từ một mẩu mô nhỏ',
              'Giới hạn bởi số cành',
              'Tuỳ số hạt',
            ],
            ['Kiểu gene so với cây mẹ', 'Giống', 'Giống', 'Có thể khác'],
            ['Sạch bệnh', 'Có thể tạo cây sạch bệnh', 'Dễ mang bệnh của cây mẹ', 'Tuỳ loại bệnh'],
            ['Mùa vụ', 'Làm quanh năm', 'Phụ thuộc mùa', 'Phụ thuộc mùa'],
            ['Yêu cầu', 'Phòng thí nghiệm, kĩ thuật cao', 'Đơn giản', 'Đơn giản'],
          ],
        },
      ],
    },
    {
      heading: 'Thành tựu của công nghệ tế bào thực vật',
      blocks: [
        {
          type: 'table',
          head: ['Thành tựu', 'Ví dụ'],
          rows: [
            [
              'Nhân nhanh cây quý hiếm, cây có giá trị kinh tế',
              'Các giống lan, chuối, mía, sâm Ngọc Linh',
            ],
            ['Tạo giống cây sạch bệnh', 'Khoai tây, chuối sạch virus từ đỉnh chồi'],
            ['Bảo tồn nguồn gene', 'Nhân giống các loài cây có nguy cơ tuyệt chủng'],
            [
              'Tạo giống cây biến đổi gene',
              'Bông kháng sâu, lúa gạo vàng giàu tiền vitamin A, ngô chịu thuốc diệt cỏ',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Cây biến đổi gene ra đời nhờ kết hợp công nghệ di truyền với nuôi cấy mô. Các bước chính:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Phân lập gene cần chuyển và nhân bản gene đó.',
            'Gắn gene vào vector (thể truyền), thường là plasmid; hoặc gắn gene lên các hạt rất nhỏ để dùng súng bắn gene.',
            'Đưa gene vào tế bào thực vật.',
            'Sàng lọc các tế bào đã nhận được gene.',
            'Nuôi cấy các tế bào đó và tái sinh thành cây hoàn chỉnh.',
          ],
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: So sánh tỉ lệ thành công khi giâm cành',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tự nhân giống vô tính một loại cây dễ trồng bằng giâm cành, ghi số liệu thật, rồi so sánh với vi nhân giống. Làm theo nhóm trong khoảng 3 tuần. Nuôi cấy mô cần phòng vô trùng nên không làm ở nhà.',
        },
        {
          type: 'list',
          items: [
            'Vật liệu: cành rau muống, khoai lang hoặc trầu bà; chậu hoặc khay; đất, xơ dừa hoặc cát sạch; dao hoặc kéo sạch; nước.',
            'Cách làm: cắt 20 đoạn cành, chia đôi 2 lô: một lô giữ ở nơi râm mát, một lô để nơi nắng gắt. Tưới như nhau, không đổi điều kiện khác.',
            'Theo dõi: mỗi 3 ngày ghi số cành sống, số cành ra rễ, chụp ảnh.',
            'Báo cáo: bảng số liệu; tỉ lệ cành ra rễ của mỗi lô; giải thích sự khác nhau; ước tính số cây thu được nếu cũng từ một cây mẹ mà dùng vi nhân giống; nêu ưu điểm và hạn chế của mỗi cách.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Cẩn thận khi dùng dao, kéo, và rửa tay sau khi làm việc với đất và cây.',
        },
      ],
    },
  ],
  explore: {
    title: 'Nuôi một mẫu lan thành cây',
    instruction:
      'Đi qua sáu giai đoạn của quy trình. Ở mỗi giai đoạn, chọn cách làm hoặc chỉnh mức auxin và cytokinin, rồi quan sát bình nuôi cấy. Chỉ khi bình cho kết quả đúng, em mới sang giai đoạn sau.',
  },
  examples: [
    {
      problem:
        'Từ $1$ chồi lan, mỗi chu kì cấy chuyền kéo dài $4$ tuần, mỗi chồi cho $4$ chồi mới. Sau $5$ chu kì, tất cả các chồi được đưa đi tạo rễ, và có $75\\%$ thành cây con sống được ở vườn ươm. Tính thời gian nhân chồi và số cây con thu được.',
      steps: [
        'Thời gian nhân chồi: $5 \\cdot 4 = 20$ tuần.',
        'Mỗi chu kì số chồi tăng $4$ lần, nên sau $5$ chu kì có $4^5 = 1024$ chồi.',
        'Số cây con sống được: $1024 \\cdot 75\\% = 768$ cây.',
      ],
      answer: 'Nhân chồi trong $20$ tuần và thu được $768$ cây con.',
    },
    {
      problem:
        'Một nhóm nuôi cấy mô lan. Mẫu không bị nhiễm và đã tạo được nhiều mô sẹo, nhưng mô sẹo không mọc chồi, rễ. Hãy nêu nguyên nhân có thể và cách khắc phục.',
      steps: [
        'Mô sẹo đã có, không bị nhiễm, nên khâu khử trùng và dinh dưỡng cơ bản đang ổn.',
        'Tạo mô sẹo xảy ra khi hai hormone ở mức cân đối, nghĩa là môi trường có thể chưa đổi để tái biệt hoá.',
        'Cần đổi tỉ lệ: cytokinin trội hơn để tạo chồi, sau đó auxin trội hơn để tạo rễ.',
      ],
      answer:
        'Có thể do tỉ lệ auxin và cytokinin chưa phù hợp. Cần chuyển mô sẹo sang môi trường có tỉ lệ hormone mới, cho từng giai đoạn tạo chồi, tạo rễ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Vì sao từ một mẩu lá thực vật có thể tái sinh được cây hoàn chỉnh?',
      options: [
        'Tế bào đã chuyên hoá vẫn có đủ hệ gene và giữ tính toàn năng',
        'Tế bào lá chứa sẵn các cây con rất nhỏ',
        'Hormone trong môi trường đã bổ sung các gene còn thiếu',
        'Mọi gene của tế bào lá đều đang hoạt động cùng lúc',
      ],
      answer: 0,
      hints: [
        'Nghĩ đến khái niệm tính toàn năng.',
        'Hormone điều khiển gene nào hoạt động, không tạo gene mới.',
      ],
      solution:
        'Tế bào đã chuyên hoá vẫn còn đủ hệ gene, chỉ một nhóm gene hoạt động. Trong điều kiện thích hợp, chúng có thể giải biệt hoá và tái sinh thành cây.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn của vi nhân giống theo đúng thứ tự.',
      items: [
        'Chọn mẫu từ cây mẹ khoẻ mạnh',
        'Khử trùng mẫu và dụng cụ',
        'Nuôi cấy tạo mô sẹo',
        'Nhân chồi',
        'Tạo rễ',
        'Huấn luyện và trồng ở vườn ươm',
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hints: ['Cần có chồi trước, rồi mới tạo rễ.', 'Cây chỉ ra ngoài khi đã có đủ thân, lá, rễ.'],
      solution:
        'Chọn mẫu, khử trùng, nuôi cấy tạo mô sẹo, nhân chồi, tạo rễ, huấn luyện rồi trồng ở vườn ươm.',
    },
    {
      type: 'match',
      prompt: 'Nối điều kiện hormone trong môi trường với kết quả thường thu được.',
      left: ['Auxin và cytokinin cân đối', 'Auxin trội hơn cytokinin', 'Cytokinin trội hơn auxin'],
      right: ['Chồi', 'Mô sẹo', 'Rễ'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Auxin thường liên quan đến sự hình thành rễ.'],
      solution: 'Cân đối tạo mô sẹo, auxin trội hơn tạo rễ, cytokinin trội hơn tạo chồi.',
    },
    {
      type: 'number',
      prompt:
        'Mỗi chồi cho $3$ chồi mới sau một chu kì cấy chuyền. Từ $1$ chồi, sau $6$ chu kì có bao nhiêu chồi?',
      answer: 729,
      hints: ['Mỗi chu kì số chồi nhân lên $3$ lần.', 'Tính $3^6$.'],
      solution: 'Sau $6$ chu kì có $3^6 = 729$ chồi.',
    },
    {
      type: 'number',
      prompt:
        'Từ $1$ chồi, mỗi chu kì mỗi chồi cho $5$ chồi mới. Sau $4$ chu kì, có $80\\%$ số chồi tạo được cây con. Hỏi thu được bao nhiêu cây con?',
      answer: 500,
      hints: ['Tính số chồi: $5^4$.', 'Lấy kết quả nhân với $80\\%$.'],
      solution: 'Số chồi là $5^4 = 625$. Số cây con là $625 \\cdot 80\\% = 500$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các ưu điểm của vi nhân giống so với giâm cành, chiết cành, gieo hạt.',
      options: [
        'Tạo số lượng cây rất lớn từ một mẩu mô nhỏ',
        'Các cây con có kiểu gene đồng nhất, giữ đặc tính của cây mẹ',
        'Có thể tạo cây giống sạch bệnh',
        'Tạo nhiều biến dị tổ hợp mới ở đời con',
        'Không cần trang thiết bị và kĩ thuật cao',
      ],
      answers: [0, 1, 2],
      hints: [
        'Nhân giống vô tính không qua giảm phân và thụ tinh.',
        'Hãy nghĩ tới điều kiện để giữ phòng nuôi cấy vô trùng.',
      ],
      solution:
        'Vi nhân giống nhân nhanh, giữ đồng nhất kiểu gene, có thể tạo cây sạch bệnh. Nó không tạo biến dị tổ hợp, và đòi hỏi thiết bị và kĩ thuật cao.',
    },
    {
      type: 'choice',
      prompt: 'Mẫu nuôi cấy bị nấm mốc phủ kín sau vài ngày. Nguyên nhân hợp lí nhất là gì?',
      options: [
        'Khâu khử trùng mẫu, môi trường hoặc dụng cụ chưa đạt',
        'Tỉ lệ auxin và cytokinin chưa cân đối',
        'Mẫu đã giải biệt hoá quá nhanh',
        'Ánh sáng trong phòng nuôi quá yếu',
      ],
      answer: 0,
      hints: ['Nấm mốc là vi sinh vật, chúng vào môi trường bằng cách nào?'],
      solution:
        'Nấm mốc có mặt do khử trùng chưa đạt. Môi trường giàu dinh dưỡng giúp chúng phát triển rất nhanh, cạnh tranh và gây hại cho mô.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tạo cây biến đổi gene theo đúng thứ tự.',
      items: [
        'Phân lập và nhân bản gene cần chuyển',
        'Gắn gene vào vector (thể truyền)',
        'Đưa gene vào tế bào thực vật',
        'Sàng lọc tế bào đã nhận gene',
        'Nuôi cấy và tái sinh thành cây',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: [
        'Phải có gene rồi mới gắn được vào vector.',
        'Chỉ đem nuôi thành cây những tế bào đã mang gene.',
      ],
      solution:
        'Phân lập và nhân bản gene, gắn vào vector, đưa vào tế bào, sàng lọc, rồi nuôi cấy tái sinh thành cây.',
    },
    {
      type: 'text',
      prompt:
        'Khối tế bào chưa chuyên hoá, được tạo thành khi tế bào giải biệt hoá và phân chia trong nuôi cấy, gọi là gì?',
      accept: ['mô sẹo', 'callus', 'mô sẹo (callus)'],
      hints: ['Tên của nó gợi đến vết thương đã lành ở người.'],
      solution: 'Đó là mô sẹo (callus).',
    },
  ],
  takeaways: [
    'Nuôi cấy mô dựa trên tính toàn năng của tế bào thực vật, qua giải biệt hoá và tái biệt hoá.',
    'Tỉ lệ auxin : cytokinin định hướng tạo mô sẹo (cân đối), rễ (auxin trội), chồi (cytokinin trội).',
    'Vi nhân giống gồm chọn mẫu, khử trùng, tạo mô sẹo, nhân chồi, tạo rễ, ra cây; phải vô trùng trong suốt quá trình nuôi cấy.',
    'Thành tựu: nhân nhanh cây quý, tạo cây sạch bệnh, bảo tồn nguồn gene, tạo cây biến đổi gene.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Môi trường trong của cơ thể gồm máu, nước mô và bạch huyết; cân bằng môi trường trong là sự duy trì ổn định các điều kiện lí, hóa của môi trường trong; vai trò của cân bằng môi trường trong; đọc kết quả xét nghiệm glucose và uric acid trong máu.',
  intro:
    'Dù em vừa ăn một bữa thật no hay đã nhịn đói cả buổi sáng, dù trời nắng 38 °C hay rét 10 °C, lượng đường trong máu và nhiệt độ cơ thể em vẫn chỉ dao động trong một khoảng rất hẹp. Cơ thể giữ các chỉ số đó ổn định bằng cách nào, và chuyện gì xảy ra khi sự ổn định ấy bị phá vỡ?',
  objectives: [
    'Nêu được khái niệm môi trường trong của cơ thể và các thành phần của môi trường trong.',
    'Nêu được khái niệm cân bằng môi trường trong và vai trò của việc duy trì ổn định môi trường trong.',
    'Đọc và hiểu được kết quả xét nghiệm nồng độ glucose và uric acid trong máu.',
  ],
  sections: [
    {
      heading: 'Môi trường trong của cơ thể',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Môi trường trong',
          text: 'Môi trường trong của cơ thể gồm máu, nước mô (dịch mô) và bạch huyết. Các tế bào của cơ thể sống trong môi trường trong và trao đổi chất với môi trường ngoài thông qua môi trường trong.',
        },
        {
          type: 'list',
          items: [
            'Máu chảy trong hệ mạch; một phần huyết tương (cùng bạch cầu) thấm qua thành mao mạch ra khe giữa các tế bào tạo thành nước mô.',
            'Nước mô bao quanh tế bào: máu mang O₂ và chất dinh dưỡng đến tế bào qua nước mô; CO₂ và chất thải của tế bào đi vào nước mô rồi vào máu.',
            'Một phần nước mô thấm vào mạch bạch huyết tạo thành bạch huyết; bạch huyết theo mạch bạch huyết đổ về tĩnh mạch, hòa vào máu.',
          ],
        },
      ],
    },
    {
      heading: 'Cân bằng môi trường trong',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cân bằng môi trường trong',
          text: 'Cân bằng môi trường trong (cân bằng nội môi) là sự duy trì ổn định các điều kiện lí, hóa của môi trường trong cơ thể như nhiệt độ, độ pH, nồng độ glucose, nồng độ các ion, áp suất thẩm thấu…',
        },
        {
          type: 'p',
          text: 'Cân bằng môi trường trong bảo đảm cho các tế bào, cơ quan hoạt động bình thường. Khi các chỉ số vượt ra ngoài ngưỡng bình thường, cơ thể bị rối loạn hoạt động, có thể dẫn đến bệnh, thậm chí tử vong. Ví dụ: nồng độ glucose trong máu cao kéo dài gây bệnh tiểu đường; nồng độ uric acid trong máu cao kéo dài có thể gây bệnh gout.',
        },
        {
          type: 'table',
          caption: 'Một số chỉ số sinh lí của người trưởng thành bình thường (giá trị tham khảo)',
          head: ['Chỉ số', 'Ngưỡng bình thường'],
          rows: [
            ['Glucose trong máu (lúc đói)', '$3{,}9$ – $6{,}4$ mmol/L'],
            ['Uric acid trong máu', 'Nam: $180$ – $420$ µmol/L; nữ: $150$ – $360$ µmol/L'],
            ['pH máu', '$7{,}35$ – $7{,}45$'],
            ['Thân nhiệt', 'Khoảng $36{,}5$ – $37{,}5$ °C'],
          ],
        },
        {
          type: 'p',
          text: 'Nhiều cơ quan cùng tham gia giữ cân bằng: thận thải nước, muối thừa và chất thải; phổi thải CO₂ giúp ổn định pH máu; gan dự trữ và giải phóng glucose; da tỏa nhiệt. Hệ thần kinh và hệ nội tiết điều khiển, phối hợp hoạt động của các cơ quan đó. Khi một chỉ số lệch khỏi ngưỡng, cơ thể phản hồi để đưa chỉ số trở về ngưỡng bình thường.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ: ăn mặn thấy khát',
          text: 'Ăn mặn làm nồng độ muối trong máu tăng. Cơ thể phản hồi bằng cảm giác khát để ta uống thêm nước, đồng thời thận tăng thải muối thừa theo nước tiểu. Nhờ vậy, nồng độ muối trong máu trở về bình thường.',
        },
      ],
    },
    {
      heading: 'Đọc kết quả xét nghiệm máu',
      blocks: [
        {
          type: 'p',
          text: 'Phiếu kết quả xét nghiệm thường có ba cột chính: tên chỉ số, kết quả của người được xét nghiệm và giá trị tham chiếu (ngưỡng bình thường). Muốn đọc kết quả, em so sánh giá trị đo được với giá trị tham chiếu: thấp hơn, nằm trong hay cao hơn ngưỡng.',
        },
        {
          type: 'table',
          caption: 'Kết quả xét nghiệm máu lúc đói của một người nam 45 tuổi',
          head: ['Chỉ số', 'Kết quả', 'Giá trị tham chiếu', 'Nhận xét'],
          rows: [
            ['Glucose', '$7{,}8$ mmol/L', '$3{,}9$ – $6{,}4$ mmol/L', 'Cao hơn ngưỡng'],
            ['Uric acid', '$480$ µmol/L', '$180$ – $420$ µmol/L', 'Cao hơn ngưỡng'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý',
          text: 'Giá trị tham chiếu có thể khác nhau đôi chút giữa các phòng xét nghiệm. Chỉ bác sĩ mới kết luận bệnh, dựa trên nhiều xét nghiệm và thăm khám.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đồng hồ chỉ số sinh lí',
    instruction:
      'Chọn đường huyết hoặc thân nhiệt, chọn một tình huống (hay tự kéo thanh trượt) để đẩy chỉ số ra khỏi ngưỡng, rồi bấm "Theo dõi cơ thể phản hồi". Sau đó bật "Cơ chế điều hòa bị rối loạn" và làm lại để thấy khi nào mất cân bằng.',
  },
  examples: [
    {
      problem:
        'Đọc phiếu xét nghiệm trong bài: người nam có glucose lúc đói $7{,}8$ mmol/L và uric acid $480$ µmol/L. Hãy nhận xét và cho biết người này có nguy cơ mắc bệnh gì.',
      steps: [
        'So sánh glucose với ngưỡng $3{,}9$ – $6{,}4$ mmol/L: $7{,}8 > 6{,}4$, cao hơn ngưỡng $7{,}8 - 6{,}4 = 1{,}4$ mmol/L.',
        'So sánh uric acid với ngưỡng của nam $180$ – $420$ µmol/L: $480 > 420$, cao hơn ngưỡng $60$ µmol/L.',
        'Glucose trong máu cao kéo dài là dấu hiệu của bệnh tiểu đường; uric acid cao kéo dài có thể gây bệnh gout.',
      ],
      answer:
        'Cả hai chỉ số đều cao hơn ngưỡng bình thường: người này có nguy cơ mắc bệnh tiểu đường và bệnh gout, cần đi khám bác sĩ, hạn chế đồ ngọt, tinh bột, thịt đỏ, nội tạng, rượu bia.',
    },
    {
      problem: 'Vì sao sau khi ăn mặn ta thấy khát nước? Điều đó có ý nghĩa gì với cơ thể?',
      steps: [
        'Muối hấp thụ vào máu làm nồng độ muối trong máu (môi trường trong) tăng lên.',
        'Cơ thể phản hồi: sinh ra cảm giác khát để ta uống nước; thận tăng thải muối thừa.',
        'Nước uống vào pha loãng máu, kết hợp thận thải muối, đưa nồng độ muối trở về bình thường.',
      ],
      answer:
        'Khát nước là phản ứng giúp cơ thể đưa nồng độ muối trong máu về mức bình thường, duy trì cân bằng môi trường trong.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thành phần của môi trường trong cơ thể.',
      options: ['Máu', 'Nước mô', 'Bạch huyết', 'Dịch vị trong dạ dày', 'Nước tiểu trong bóng đái'],
      answers: [0, 1, 2],
      hints: ['Môi trường trong bao quanh và trao đổi chất trực tiếp với các tế bào.'],
      solution:
        'Môi trường trong gồm máu, nước mô và bạch huyết. Dịch vị và nước tiểu nằm trong các khoang thông ra môi trường ngoài.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp đường đi của dịch trong cơ thể, bắt đầu từ máu trong mao mạch.',
      items: ['Bạch huyết', 'Máu trong mao mạch', 'Tĩnh mạch', 'Nước mô'],
      answer: [1, 3, 0, 2],
      hints: ['Huyết tương thấm qua thành mao mạch tạo thành nước mô trước.'],
      solution: 'Máu trong mao mạch → nước mô → bạch huyết → đổ về tĩnh mạch, hòa vào máu.',
    },
    {
      type: 'choice',
      prompt: 'Cân bằng môi trường trong là gì?',
      options: [
        'Sự duy trì ổn định các điều kiện lí, hóa của môi trường trong cơ thể',
        'Lượng máu luôn bằng lượng nước mô',
        'Nhiệt độ cơ thể luôn bằng nhiệt độ môi trường',
        'Cơ thể không trao đổi chất với môi trường',
      ],
      answer: 0,
      hints: ['Hãy nghĩ đến các chỉ số như nhiệt độ, pH, nồng độ glucose.'],
      solution:
        'Cân bằng môi trường trong là sự duy trì ổn định các điều kiện lí, hóa (nhiệt độ, pH, nồng độ các chất…) của môi trường trong.',
    },
    {
      type: 'number',
      prompt:
        'Kết quả xét nghiệm glucose lúc đói của một người là $7{,}2$ mmol/L, ngưỡng bình thường là $3{,}9$ – $6{,}4$ mmol/L. Kết quả này cao hơn giới hạn trên của ngưỡng bao nhiêu mmol/L?',
      answer: 0.8,
      tolerance: 0.001,
      unit: 'mmol/L',
      hints: ['Lấy kết quả trừ đi giới hạn trên $6{,}4$.'],
      solution: '$7{,}2 - 6{,}4 = 0{,}8$ mmol/L.',
    },
    {
      type: 'choice',
      prompt:
        'Một bạn nữ có kết quả uric acid trong máu là $320$ µmol/L (ngưỡng của nữ: $150$ – $360$ µmol/L). Nhận xét nào đúng?',
      options: [
        'Cao hơn ngưỡng, có nguy cơ bệnh gout',
        'Nằm trong ngưỡng bình thường',
        'Thấp hơn ngưỡng',
        'Không thể so sánh',
      ],
      answer: 1,
      hints: ['So sánh $320$ với $150$ và $360$.'],
      solution: '$150 < 320 < 360$ nên kết quả nằm trong ngưỡng bình thường.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tình trạng mất cân bằng kéo dài với bệnh có thể gặp.',
      left: [
        'Glucose trong máu cao',
        'Uric acid trong máu cao',
        'Thân nhiệt quá cao do ở lâu ngoài nắng',
      ],
      right: ['Bệnh gout', 'Say nắng', 'Bệnh tiểu đường'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: ['Bệnh gout liên quan đến sự lắng đọng tinh thể uric acid ở khớp.'],
      solution:
        'Glucose cao kéo dài: tiểu đường. Uric acid cao kéo dài: gout. Thân nhiệt quá cao do nắng nóng: say nắng.',
    },
    {
      type: 'choice',
      prompt: 'Khi đường huyết tăng cao sau bữa ăn, cơ thể phản hồi như thế nào?',
      options: [
        'Tuyến tụy tiết insulin, gan và cơ chuyển glucose thành glycogen dự trữ',
        'Tuyến tụy tiết glucagon, gan phân giải glycogen thành glucose',
        'Tim đập chậm lại',
        'Cơ thể run lên để sinh nhiệt',
      ],
      answer: 0,
      hints: ['Cơ thể cần làm giảm lượng glucose trong máu.'],
      solution:
        'Insulin làm giảm đường huyết: giúp tế bào nhận glucose và gan, cơ chuyển glucose thành glycogen dự trữ. Glucagon có tác dụng ngược lại.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thói quen giúp duy trì cân bằng môi trường trong.',
      options: [
        'Uống đủ nước mỗi ngày',
        'Ăn uống điều độ, hạn chế đồ ngọt và đồ ăn mặn',
        'Thường xuyên uống rượu bia',
        'Khám sức khỏe, xét nghiệm máu định kì',
        'Ăn thật nhiều nội tạng động vật',
      ],
      answers: [0, 1, 3],
      hints: ['Rượu bia và nội tạng làm tăng uric acid trong máu.'],
      solution:
        'Uống đủ nước, ăn uống điều độ và khám sức khỏe định kì giúp giữ các chỉ số ổn định. Rượu bia, nhiều nội tạng làm tăng uric acid, gây mất cân bằng.',
    },
  ],
  takeaways: [
    'Môi trường trong gồm máu, nước mô và bạch huyết; tế bào trao đổi chất với môi trường ngoài thông qua môi trường trong.',
    'Cân bằng môi trường trong là sự duy trì ổn định các điều kiện lí, hóa (nhiệt độ, pH, nồng độ glucose, ion…) của môi trường trong; nhờ đó tế bào và cơ thể hoạt động bình thường.',
    'Khi chỉ số lệch khỏi ngưỡng, cơ thể phản hồi để đưa về ngưỡng; nếu mất cân bằng kéo dài sẽ gây bệnh như tiểu đường, gout.',
    'Đọc kết quả xét nghiệm: so sánh giá trị đo được với giá trị tham chiếu để biết thấp hơn, trong hay cao hơn ngưỡng.',
  ],
};

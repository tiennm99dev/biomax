/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sinh sản của sinh vật chịu ảnh hưởng của các yếu tố bên trong (di truyền, hormone, tuổi) và bên ngoài (ánh sáng, nhiệt độ, độ ẩm, dinh dưỡng); hormone điều hoà sinh sản; con người điều khiển sinh sản để tăng năng suất cây trồng, vật nuôi: thắp đèn cho thanh long ra hoa trái vụ, thụ phấn bổ sung, dùng hormone, thụ tinh nhân tạo.',
  intro:
    'Đi qua các vườn thanh long ở Bình Thuận vào ban đêm mùa đông, ta thấy cả cánh đồng sáng rực ánh đèn. Người trồng thắp đèn để làm gì? Vì sao nhà nuôi gà lại bật đèn cho gà vào buổi tối? Hiểu các yếu tố ảnh hưởng đến sinh sản giúp con người chủ động điều khiển sinh sản của cây trồng, vật nuôi.',
  objectives: [
    'Nêu được một số yếu tố bên trong và bên ngoài ảnh hưởng đến sinh sản của sinh vật; lấy được ví dụ.',
    'Nêu được vai trò của hormone trong điều hoà sinh sản ở sinh vật.',
    'Trình bày được một số ứng dụng điều khiển sinh sản trong trồng trọt và chăn nuôi.',
  ],
  sections: [
    {
      heading: 'Một số yếu tố ảnh hưởng đến sinh sản',
      blocks: [
        {
          type: 'table',
          caption: 'Các yếu tố ảnh hưởng đến sinh sản ở sinh vật',
          head: ['Nhóm yếu tố', 'Gồm', 'Ví dụ'],
          rows: [
            [
              'Yếu tố bên trong',
              'Đặc điểm di truyền của loài, hormone, tuổi',
              'Đến tuổi dậy thì, cơ thể nữ tiết hormone FSH, LH làm trứng chín và rụng; mỗi lứa lợn đẻ nhiều con, voi thường chỉ đẻ một con',
            ],
            [
              'Yếu tố bên ngoài',
              'Ánh sáng, nhiệt độ, độ ẩm, dinh dưỡng, ...',
              'Nhiệt độ, độ ẩm quá cao hoặc quá thấp làm hoa thụ phấn, thụ tinh kém, nhiều hạt lép; gà được chiếu sáng thêm đẻ nhiều trứng hơn',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Ở thực vật: nhiệt độ thấp làm giảm hiệu quả thụ phấn, thụ tinh; độ ẩm quá cao (mưa nhiều khi lúa trổ bông) làm hạt phấn khó phát tán; thiếu nước, thiếu chất dinh dưỡng làm cây ít hoa, quả.',
            'Ở động vật: nhiệt độ quá cao hoặc quá thấp làm giảm khả năng đẻ trứng; cá rô phi nuôi ở nước dưới khoảng 16 °C đến 18 °C thì ngừng sinh sản; thức ăn thiếu chất làm vật nuôi chậm sinh sản.',
          ],
        },
        { type: 'p', text: 'Xếp mỗi yếu tố vào nhóm bên trong hoặc bên ngoài.' },
        { type: 'widget', name: 'yeu-to' },
      ],
    },
    {
      heading: 'Điều hoà sinh sản',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hormone điều hoà sinh sản',
          text: 'Sinh sản của sinh vật được điều hoà chủ yếu nhờ hormone, thông qua điều hoà quá trình hình thành giao tử.',
        },
        {
          type: 'list',
          items: [
            'Ở thực vật: sự ra hoa chịu tác động của hormone (ví dụ florigen là hormone kích thích ra hoa).',
            'Ở động vật: tuyến yên tiết các hormone (như FSH, LH) điều khiển quá trình sinh tinh trùng ở con đực và quá trình trứng chín, rụng ở con cái.',
          ],
        },
        {
          type: 'p',
          text: 'Hiểu được ảnh hưởng của hormone và của môi trường, con người có thể chủ động điều khiển sinh sản: làm cho cây ra hoa, kết quả theo ý muốn, vật nuôi đẻ nhiều con, sinh con theo giới tính mong muốn.',
        },
      ],
    },
    {
      heading: 'Ứng dụng điều khiển sinh sản trong thực tiễn',
      blocks: [
        {
          type: 'table',
          caption: 'Một số biện pháp điều khiển sinh sản',
          head: ['Lĩnh vực', 'Mục đích', 'Biện pháp, ví dụ'],
          rows: [
            [
              'Trồng trọt',
              'Cây ra hoa, tạo quả trái vụ',
              'Thắp đèn ban đêm cho thanh long ra hoa vào mùa đông; dùng hormone, điều chỉnh nhiệt độ, ánh sáng, dinh dưỡng',
            ],
            [
              'Trồng trọt',
              'Tăng số quả, hạt',
              'Thụ phấn bổ sung bằng tay; nuôi ong, bảo vệ côn trùng thụ phấn; ngắt ngọn bầu, bí để cây ra nhiều nhánh, nhiều hoa',
            ],
            [
              'Trồng trọt',
              'Tạo quả không hạt',
              'Ngăn hoa thụ phấn và dùng hormone kích thích bầu nhụy phát triển thành quả (nho, dưa hấu, chanh không hạt)',
            ],
            [
              'Chăn nuôi',
              'Tăng số con',
              'Dùng hormone kích thích trứng chín sớm, chín nhiều; thụ tinh nhân tạo; thụ tinh trong ống nghiệm rồi cấy phôi; chiếu sáng thêm cho gà đẻ nhiều trứng',
            ],
            [
              'Chăn nuôi',
              'Điều khiển giới tính đàn con',
              'Dùng hormone; lọc, tách tinh trùng để chọn loại tinh trùng thụ tinh với trứng (ví dụ tạo nhiều bê đực để lấy thịt)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao thắp đèn cho thanh long?',
          text: 'Thanh long ra hoa khi ngày dài (thời gian chiếu sáng trong ngày lớn). Mùa đông ngày ngắn nên cây không ra hoa. Thắp đèn vào ban đêm kéo dài thời gian chiếu sáng, làm cây ra hoa, cho quả trái vụ, bán được giá cao.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng: điều kiện nuôi trồng và sinh sản',
    instruction:
      'Chọn gà hoặc thanh long. Kéo thanh trượt nhiệt độ, số giờ chiếu sáng và chọn chế độ dinh dưỡng, quan sát số trứng gà đẻ mỗi tuần hoặc tỉ lệ cành thanh long ra hoa. Ô màu vàng là yếu tố đang hạn chế nhiều nhất. Thử với thanh long: để 11 giờ chiếu sáng (ngày mùa đông) rồi "thắp đèn" tăng lên 16 giờ.',
  },
  examples: [
    {
      problem:
        'Một trang trại nuôi gà đẻ thấy vào mùa đông gà đẻ ít trứng hơn hẳn so với mùa hè, dù thức ăn như nhau. Hãy giải thích và đề xuất biện pháp.',
      steps: [
        'Mùa đông ngày ngắn (ít giờ chiếu sáng) và nhiệt độ thấp. Ánh sáng và nhiệt độ là các yếu tố bên ngoài ảnh hưởng đến sinh sản của gà.',
        'Thời gian chiếu sáng ngắn làm gà đẻ ít; nhiệt độ quá thấp cũng làm giảm khả năng đẻ trứng.',
        'Biện pháp: thắp đèn chiếu sáng thêm vào buổi tối để kéo dài thời gian chiếu sáng; giữ ấm chuồng nuôi; cho ăn đủ chất.',
      ],
      answer:
        'Do ngày ngắn và trời lạnh; cần chiếu sáng bổ sung, giữ ấm chuồng và cho ăn đủ dinh dưỡng.',
    },
    {
      problem:
        'Người trồng muốn thu hoạch thanh long vào dịp Tết (mùa đông) khi giá cao. Họ cần làm gì? Dựa vào yếu tố nào?',
      steps: [
        'Thanh long tự nhiên ra hoa vào mùa hè, khi ngày dài.',
        'Mùa đông ngày ngắn nên cây không ra hoa. Yếu tố cần điều chỉnh là ánh sáng (thời gian chiếu sáng).',
        'Thắp đèn vào ban đêm vài giờ mỗi đêm để kéo dài thời gian chiếu sáng, kích thích cây ra hoa trái vụ.',
      ],
      answer: 'Thắp đèn ban đêm để kéo dài thời gian chiếu sáng, dựa vào ảnh hưởng của ánh sáng.',
    },
    {
      problem:
        'Bà con thường ngắt ngọn cây bầu, bí trước khi cây ra hoa. Việc làm này có tác dụng gì?',
      steps: [
        'Ngắt ngọn làm cây ra nhiều chồi, nhiều nhánh mới.',
        'Có nhiều nhánh thì có nhiều hoa, nhiều quả hơn.',
      ],
      answer: 'Giúp cây ra nhiều nhánh, nhiều hoa và nhiều quả, tăng năng suất.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Những yếu tố nào là yếu tố bên trong ảnh hưởng đến sinh sản?',
      options: ['Hormone', 'Nhiệt độ', 'Tuổi', 'Ánh sáng', 'Đặc điểm di truyền'],
      answers: [0, 2, 4],
      hints: ['Yếu tố bên trong thuộc về chính cơ thể sinh vật, không đến từ môi trường.'],
      solution:
        'Hormone, tuổi và đặc điểm di truyền là yếu tố bên trong. Nhiệt độ và ánh sáng là yếu tố bên ngoài (môi trường).',
    },
    {
      type: 'choice',
      prompt: 'Người trồng thanh long thắp đèn vào ban đêm mùa đông nhằm',
      options: [
        'sưởi ấm cho cây khỏi chết rét',
        'kéo dài thời gian chiếu sáng để cây ra hoa trái vụ',
        'xua đuổi côn trùng có hại',
        'giúp cây quang hợp vào ban đêm để quả to hơn',
      ],
      answer: 1,
      hints: ['Thanh long ra hoa khi ngày dài.'],
      solution:
        'Thắp đèn kéo dài thời gian chiếu sáng trong ngày, kích thích thanh long ra hoa vào mùa đông (trái vụ).',
    },
    {
      type: 'choice',
      prompt:
        'Ở động vật, hormone điều khiển quá trình sinh tinh trùng và trứng chủ yếu do tuyến nào tiết ra?',
      options: ['Tuyến nước bọt', 'Tuyến mồ hôi', 'Tuyến yên', 'Tuyến tuỵ'],
      answer: 2,
      hints: ['Tuyến này nằm ở nền não, tiết FSH và LH.'],
      solution:
        'Tuyến yên tiết các hormone (FSH, LH) điều khiển quá trình sinh tinh trùng và trứng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi biện pháp với mục đích của nó.',
      left: [
        'Thụ phấn bổ sung cho hoa',
        'Ngăn hoa thụ phấn, dùng hormone kích thích bầu nhụy',
        'Lọc, tách tinh trùng trước khi thụ tinh',
        'Thụ tinh trong ống nghiệm rồi cấy phôi',
      ],
      right: [
        'Tạo quả không hạt',
        'Tăng số quả, hạt',
        'Điều khiển giới tính đàn con',
        'Tăng số con của vật nuôi',
        'Làm cây chết sớm',
      ],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 2],
        [3, 3],
      ],
      hints: ['Quả không hạt hình thành khi noãn không được thụ tinh.'],
      solution:
        'Thụ phấn bổ sung: tăng số quả, hạt; ngăn thụ phấn và dùng hormone: tạo quả không hạt; lọc tách tinh trùng: điều khiển giới tính; thụ tinh trong ống nghiệm, cấy phôi: tăng số con.',
    },
    {
      type: 'choice',
      prompt:
        'Lúa trổ bông gặp đợt rét đậm kéo dài, nhiều bông lúa bị lép hạt. Nguyên nhân chủ yếu là',
      options: [
        'nhiệt độ thấp làm giảm hiệu quả thụ phấn và thụ tinh',
        'cây lúa thiếu hormone di truyền',
        'cây lúa đã quá tuổi sinh sản',
        'ánh sáng quá mạnh làm cháy hạt phấn',
      ],
      answer: 0,
      hints: ['Đợt rét đậm là thay đổi của yếu tố bên ngoài nào?'],
      solution:
        'Nhiệt độ quá thấp làm hạt phấn kém sức sống, thụ phấn và thụ tinh kém, nhiều hoa không tạo được hạt nên hạt lép.',
    },
    {
      type: 'multi',
      prompt: 'Những biện pháp nào giúp tăng số trứng gà đẻ?',
      options: [
        'Chiếu sáng thêm vào buổi tối',
        'Cho ăn đủ chất, cân đối',
        'Nhốt gà trong chuồng tối suốt ngày',
        'Giữ chuồng thoáng mát khi trời nóng, ấm khi trời lạnh',
      ],
      answers: [0, 1, 3],
      hints: ['Nghĩ đến ba yếu tố bên ngoài: ánh sáng, nhiệt độ, dinh dưỡng.'],
      solution:
        'Chiếu sáng thêm, cho ăn đủ chất và giữ nhiệt độ chuồng thích hợp đều giúp gà đẻ nhiều. Nhốt gà trong chuồng tối làm giảm thời gian chiếu sáng, gà đẻ ít.',
    },
    {
      type: 'number',
      prompt:
        'Theo mô hình trong bài, một con gà mái được nuôi tốt đẻ khoảng 6 quả trứng mỗi tuần. Nếu khả năng đẻ chỉ còn một nửa do trời rét, thì sau 4 tuần con gà đó đẻ được khoảng bao nhiêu quả trứng?',
      answer: 12,
      unit: 'quả',
      hints: ['Mỗi tuần còn một nửa của 6 quả.', 'Nhân số trứng mỗi tuần với 4 tuần.'],
      solution: 'Mỗi tuần gà đẻ $6 : 2 = 3$ quả; sau 4 tuần đẻ $3 \\cdot 4 = 12$ quả.',
    },
    {
      type: 'text',
      prompt:
        'Ở người, khi đến tuổi dậy thì, cơ thể nữ tiết các hormone FSH và LH làm trứng chín và rụng. Đây là ví dụ về ảnh hưởng của nhóm yếu tố nào (bên trong hay bên ngoài)?',
      accept: ['bên trong', 'yếu tố bên trong', 'trong'],
      hints: ['Hormone và tuổi do chính cơ thể quyết định.'],
      solution: 'Hormone và tuổi là yếu tố bên trong.',
    },
  ],
  takeaways: [
    'Yếu tố bên trong ảnh hưởng đến sinh sản: đặc điểm di truyền, hormone, tuổi.',
    'Yếu tố bên ngoài: ánh sáng, nhiệt độ, độ ẩm, dinh dưỡng; quá cao hay quá thấp đều làm sinh sản kém.',
    'Hormone điều hoà sinh sản thông qua quá trình hình thành giao tử; ở động vật, tuyến yên tiết FSH, LH.',
    'Trồng trọt: thắp đèn cho thanh long ra hoa trái vụ, thụ phấn bổ sung, ngắt ngọn bầu bí, tạo quả không hạt.',
    'Chăn nuôi: dùng hormone, thụ tinh nhân tạo, cấy phôi, chiếu sáng thêm, điều khiển giới tính đàn con.',
  ],
};

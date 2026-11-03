/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vai trò và dấu hiệu của trao đổi chất và chuyển hoá năng lượng ở sinh vật, ba giai đoạn chuyển hoá năng lượng trong sinh giới (tổng hợp, phân giải, huy động năng lượng) và hai phương thức tự dưỡng, dị dưỡng.',
  intro:
    'Một con voi ăn cỏ cả ngày, cỏ lớn lên nhờ nắng. Vậy năng lượng giúp voi bước đi có phải bắt nguồn từ Mặt Trời? Bài này lần theo dòng năng lượng đó qua các sinh vật, và cho thấy vì sao mọi sinh vật đều phải trao đổi chất với môi trường để sống.',
  objectives: [
    'Nêu được vai trò của trao đổi chất và chuyển hoá năng lượng đối với sinh vật.',
    'Nêu được các dấu hiệu đặc trưng của trao đổi chất và chuyển hoá năng lượng.',
    'Mô tả tóm tắt ba giai đoạn chuyển hoá năng lượng trong sinh giới.',
    'Phân biệt được phương thức tự dưỡng và dị dưỡng, phân tích được vai trò của sinh vật tự dưỡng.',
  ],
  sections: [
    {
      heading: 'Vai trò của trao đổi chất và chuyển hoá năng lượng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Trao đổi chất và chuyển hoá năng lượng',
          text: 'Trao đổi chất ở sinh vật là tập hợp các quá trình: lấy các chất từ môi trường, vận chuyển và biến đổi chúng trong cơ thể, rồi thải các chất không cần ra ngoài. Đi kèm với biến đổi chất luôn là sự chuyển hoá năng lượng từ dạng này sang dạng khác.',
        },
        {
          type: 'list',
          items: [
            'Cung cấp nguyên liệu để cấu tạo nên tế bào và cơ thể, giúp sinh vật sinh trưởng, phát triển, sinh sản.',
            'Tích luỹ và giải phóng năng lượng cho mọi hoạt động sống.',
            'Thải chất cặn bã, chất dư thừa, chất độc, giúp giữ ổn định môi trường trong cơ thể.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Trao đổi chất và chuyển hoá năng lượng là dấu hiệu cơ bản của sự sống: khi các quá trình này dừng, sinh vật sẽ chết.',
        },
      ],
    },
    {
      heading: 'Dấu hiệu đặc trưng',
      blocks: [
        {
          type: 'table',
          head: ['Dấu hiệu', 'Ở thực vật', 'Ở động vật'],
          rows: [
            [
              'Tiếp nhận chất từ môi trường và vận chuyển',
              'Hấp thụ nước, khoáng qua rễ; lấy $\\mathrm{CO_2}$ qua lá; hấp thụ ánh sáng; mạch gỗ, mạch rây vận chuyển các chất',
              'Lấy thức ăn qua tiêu hoá, $\\mathrm{O_2}$ qua hô hấp; hệ tuần hoàn đưa các chất đến tế bào',
            ],
            [
              'Biến đổi chất kèm chuyển hoá năng lượng trong tế bào',
              'Đồng hoá (quang hợp) và dị hoá (hô hấp)',
              'Đồng hoá (tổng hợp chất của cơ thể) và dị hoá (hô hấp)',
            ],
            [
              'Thải chất vào môi trường',
              'Thoát hơi nước, thải $\\mathrm{O_2}$, $\\mathrm{CO_2}$ qua lá',
              'Thải $\\mathrm{CO_2}$, phân, nước tiểu, mồ hôi',
            ],
            ['Điều hoà', 'Bằng hormone thực vật', 'Bằng hormone và hệ thần kinh'],
          ],
        },
        {
          type: 'p',
          text: 'Trong tế bào, đồng hoá tổng hợp chất hữu cơ phức tạp và tích luỹ năng lượng; dị hoá phân giải chất hữu cơ và giải phóng năng lượng. Hai quá trình này trái ngược nhưng luôn đi cùng nhau.',
        },
      ],
    },
    {
      heading: 'Các giai đoạn chuyển hoá năng lượng trong sinh giới',
      blocks: [
        {
          type: 'p',
          text: 'Năng lượng trong sinh giới chủ yếu bắt nguồn từ ánh sáng Mặt Trời. Quá trình chuyển hoá năng lượng diễn ra qua ba giai đoạn:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tổng hợp: Sinh vật tự dưỡng nhờ diệp lục hấp thụ năng lượng ánh sáng, chuyển thành năng lượng hoá học tích luỹ trong chất hữu cơ tạo từ $\\mathrm{CO_2}$ và nước. Động vật không tự tổng hợp được từ chất vô cơ mà lấy năng lượng hoá học từ thức ăn.',
            'Phân giải: Qua hô hấp tế bào, các phân tử hữu cơ lớn bị phân cắt thành phân tử nhỏ hơn, năng lượng được chuyển vào ATP, dạng năng lượng tế bào dễ sử dụng.',
            'Huy động năng lượng: Liên kết phosphate cao năng trong ATP bị phá vỡ, giải phóng năng lượng cho các hoạt động sống: tổng hợp chất, vận chuyển chất, co cơ, dẫn truyền thần kinh. Cuối cùng mọi dạng năng lượng đều chuyển thành nhiệt và toả ra môi trường.',
          ],
        },
        {
          type: 'tex',
          tex: '\\text{quang năng} \\longrightarrow \\text{hoá năng trong chất hữu cơ} \\longrightarrow \\text{hoá năng trong ATP} \\longrightarrow \\text{công} + \\text{nhiệt}',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chất quay vòng, năng lượng đi một chiều',
          text: 'Các nguyên tố như carbon được dùng đi dùng lại trong sinh giới. Năng lượng thì không: phần đã toả ra thành nhiệt không được sinh vật dùng lại để tổng hợp chất hữu cơ, nên sinh giới cần được cung cấp năng lượng liên tục.',
        },
      ],
    },
    {
      heading: 'Phương thức trao đổi chất và chuyển hoá năng lượng',
      blocks: [
        {
          type: 'table',
          head: ['Tiêu chí', 'Tự dưỡng', 'Dị dưỡng'],
          rows: [
            [
              'Nguồn carbon',
              'Chất vô cơ ($\\mathrm{CO_2}$)',
              'Chất hữu cơ có sẵn từ sinh vật khác',
            ],
            [
              'Cách lấy năng lượng',
              'Quang tự dưỡng: từ ánh sáng. Hoá tự dưỡng: từ phản ứng oxy hoá chất vô cơ',
              'Từ chất hữu cơ trong thức ăn',
            ],
            [
              'Đại diện',
              'Thực vật, tảo, vi khuẩn lam (quang tự dưỡng); vi khuẩn nitrate hoá (hoá tự dưỡng)',
              'Động vật, nấm, nhiều vi khuẩn',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Vai trò của sinh vật tự dưỡng: chúng đưa năng lượng và carbon từ môi trường vô cơ vào sinh giới, tạo ra chất hữu cơ làm thức ăn cho sinh vật dị dưỡng. Thực vật còn thải $\\mathrm{O_2}$ cần cho hô hấp của hầu hết sinh vật và góp phần cân bằng $\\mathrm{O_2}$, $\\mathrm{CO_2}$ trong khí quyển. Vì thế chúng được gọi là sinh vật sản xuất.',
        },
        { type: 'widget', name: 'phuong-thuc' },
      ],
    },
  ],
  explore: {
    title: 'Dòng năng lượng trong sinh giới',
    instruction:
      'Chọn một sinh vật, mở từng giai đoạn để xem năng lượng tồn tại ở dạng nào. Rồi tắt ánh sáng hoặc bỏ cây xanh: màu xanh là giai đoạn đang diễn ra, màu vàng là chỉ còn dùng chất dự trữ, màu xám là đã dừng.',
  },
  examples: [
    {
      problem:
        'Mô tả đường đi của năng lượng từ ánh sáng Mặt Trời đến hoạt động chạy của một con thỏ ăn cỏ.',
      steps: [
        'Tổng hợp: cỏ hấp thụ quang năng, chuyển thành hoá năng tích luỹ trong chất hữu cơ. Thỏ ăn cỏ và lấy phần hoá năng đó.',
        'Phân giải: trong tế bào thỏ, hô hấp phân giải chất hữu cơ, năng lượng chuyển vào ATP.',
        'Huy động: ATP cung cấp năng lượng cho co cơ để chạy. Năng lượng cuối cùng toả ra môi trường dưới dạng nhiệt.',
      ],
      answer:
        'Quang năng → hoá năng trong chất hữu cơ của cỏ → hoá năng trong ATP của thỏ → công co cơ và nhiệt.',
    },
    {
      problem:
        'Ở đáy biển sâu không có ánh sáng, quanh các miệng phun nước nóng vẫn có nhiều giun và cua sinh sống. Năng lượng của hệ sinh vật này có thể đến từ đâu?',
      steps: [
        'Không có ánh sáng nên không có quang tự dưỡng.',
        'Nước phun ra chứa hợp chất vô cơ của lưu huỳnh. Vi khuẩn hoá tự dưỡng oxy hoá các chất này để lấy năng lượng và tổng hợp chất hữu cơ từ $\\mathrm{CO_2}$.',
        'Giun, cua là sinh vật dị dưỡng, lấy chất hữu cơ từ những vi khuẩn đó.',
      ],
      answer: 'Từ phản ứng oxy hoá chất vô cơ do vi khuẩn hoá tự dưỡng thực hiện.',
    },
    {
      problem:
        'Giải thích vì sao gọi thực vật là sinh vật tự dưỡng, động vật là sinh vật dị dưỡng.',
      steps: [
        'Thực vật tự tổng hợp chất hữu cơ từ $\\mathrm{CO_2}$ và nước nhờ năng lượng ánh sáng, không cần lấy chất hữu cơ từ sinh vật khác.',
        'Động vật không tự tạo được chất hữu cơ từ chất vô cơ, phải lấy chất hữu cơ có sẵn từ thức ăn.',
      ],
      answer:
        'Thực vật tự tạo chất hữu cơ từ chất vô cơ nên là tự dưỡng; động vật phải lấy chất hữu cơ có sẵn nên là dị dưỡng.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn chuyển hoá năng lượng trong sinh giới theo đúng thứ tự.',
      items: ['Huy động năng lượng', 'Tổng hợp', 'Phân giải'],
      answer: [1, 2, 0],
      hints: ['Phải có chất hữu cơ trước rồi mới có gì để phân giải.'],
      solution:
        'Tổng hợp tạo chất hữu cơ; phân giải chuyển năng lượng của chất hữu cơ vào ATP; huy động dùng ATP cho hoạt động sống.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi giai đoạn với dạng năng lượng chính nó tạo ra.',
      left: ['Tổng hợp', 'Phân giải', 'Huy động năng lượng'],
      right: [
        'Hoá năng trong ATP',
        'Công cho hoạt động sống, cuối cùng là nhiệt',
        'Hoá năng trong chất hữu cơ',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: ['ATP được tạo trong hô hấp tế bào.'],
      solution:
        'Tổng hợp: hoá năng trong chất hữu cơ. Phân giải: hoá năng trong ATP. Huy động: công cho hoạt động sống rồi toả nhiệt.',
    },
    {
      type: 'choice',
      prompt: 'Trong sinh giới, năng lượng ở dạng nào được tế bào sử dụng trực tiếp?',
      options: ['Quang năng', 'Hoá năng trong ATP', 'Hoá năng trong tinh bột', 'Nhiệt năng'],
      answer: 1,
      hints: ['Đây là "đồng tiền năng lượng" của tế bào.'],
      solution:
        'ATP là dạng năng lượng tế bào dễ sử dụng; năng lượng trong tinh bột phải qua hô hấp mới chuyển vào ATP.',
    },
    {
      type: 'multi',
      prompt: 'Những dấu hiệu nào là đặc trưng của trao đổi chất và chuyển hoá năng lượng?',
      options: [
        'Tiếp nhận chất từ môi trường và vận chuyển các chất',
        'Biến đổi chất kèm theo chuyển hoá năng lượng trong tế bào',
        'Thải chất vào môi trường',
        'Điều hoà các quá trình theo nhu cầu của cơ thể',
        'Năng lượng được tạo ra từ hư không trong tế bào',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Năng lượng chỉ chuyển từ dạng này sang dạng khác.'],
      solution:
        'Có bốn dấu hiệu: tiếp nhận và vận chuyển chất; biến đổi chất kèm chuyển hoá năng lượng; thải chất; điều hoà. Năng lượng không tự sinh ra.',
    },
    {
      type: 'choice',
      prompt: 'Sinh vật nào sau đây là sinh vật hoá tự dưỡng?',
      options: ['Cây ngô', 'Tảo lục', 'Vi khuẩn nitrate hoá', 'Nấm men'],
      answer: 2,
      hints: ['Hoá tự dưỡng lấy năng lượng từ phản ứng oxy hoá chất vô cơ, không từ ánh sáng.'],
      solution:
        'Vi khuẩn nitrate hoá oxy hoá hợp chất vô cơ chứa nitrogen để lấy năng lượng. Ngô, tảo lục quang tự dưỡng; nấm men dị dưỡng.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về năng lượng cuối cùng trong sinh giới?',
      options: [
        'Được cây xanh hấp thụ lại để quang hợp',
        'Toả ra môi trường dưới dạng nhiệt',
        'Được tích luỹ mãi trong ATP',
        'Quay lại Mặt Trời',
      ],
      answer: 1,
      hints: ['Vì sao cơ thể ta luôn ấm và toả nhiệt?'],
      solution:
        'Mọi dạng năng lượng cuối cùng đều chuyển thành nhiệt và toả ra môi trường; sinh vật không dùng lại phần nhiệt này để tổng hợp chất hữu cơ.',
    },
    {
      type: 'multi',
      prompt: 'Vai trò của sinh vật tự dưỡng trong sinh giới gồm những ý nào?',
      options: [
        'Chuyển năng lượng ánh sáng hoặc năng lượng từ chất vô cơ thành năng lượng hoá học trong chất hữu cơ',
        'Tạo chất hữu cơ làm nguồn thức ăn cho sinh vật dị dưỡng',
        'Thực vật thải $\\mathrm{O_2}$, góp phần cân bằng khí quyển',
        'Biến nhiệt toả ra từ các sinh vật khác thành ánh sáng',
      ],
      answers: [0, 1, 2],
      hints: ['Hãy hỏi: nếu không có cây xanh, thức ăn và $\\mathrm{O_2}$ sẽ ra sao?'],
      solution:
        'Sinh vật tự dưỡng đưa năng lượng vào sinh giới, cung cấp chất hữu cơ, và thực vật còn cung cấp $\\mathrm{O_2}$. Không sinh vật nào đổi nhiệt thành ánh sáng.',
    },
    {
      type: 'choice',
      prompt: 'Một cây xanh để trong tối hoàn toàn nhiều ngày thì điều gì xảy ra trước tiên?',
      options: [
        'Cây ngừng hô hấp nhưng vẫn quang hợp',
        'Cây ngừng tổng hợp chất hữu cơ nhưng vẫn hô hấp bằng chất dự trữ',
        'Cây chuyển sang hoá tự dưỡng',
        'Cây vẫn tổng hợp chất hữu cơ như bình thường',
      ],
      answer: 1,
      hints: ['Quá trình nào cần ánh sáng? Quá trình nào diễn ra suốt ngày đêm?'],
      solution:
        'Quang hợp cần ánh sáng nên dừng. Hô hấp vẫn tiếp tục, dùng chất dự trữ; hết dự trữ thì cây chết.',
    },
    {
      type: 'text',
      prompt: 'Phân tử nào là dạng năng lượng tế bào dùng trực tiếp cho hoạt động sống? (viết tắt)',
      accept: ['ATP', 'adenosine triphosphate'],
      hints: ['Phân tử này có ba nhóm phosphate.'],
      solution: 'ATP (adenosine triphosphate).',
    },
  ],
  takeaways: [
    'Trao đổi chất và chuyển hoá năng lượng cung cấp vật chất và năng lượng cho sự sống; khi chúng dừng, sinh vật chết.',
    'Bốn dấu hiệu đặc trưng: tiếp nhận và vận chuyển chất, biến đổi chất kèm chuyển hoá năng lượng, thải chất, điều hoà.',
    'Ba giai đoạn chuyển hoá năng lượng: tổng hợp, phân giải, huy động năng lượng.',
    'Năng lượng trong sinh giới đi một chiều và cuối cùng toả ra thành nhiệt.',
    'Tự dưỡng tự tạo chất hữu cơ từ chất vô cơ (quang tự dưỡng, hoá tự dưỡng); dị dưỡng lấy chất hữu cơ có sẵn.',
  ],
};

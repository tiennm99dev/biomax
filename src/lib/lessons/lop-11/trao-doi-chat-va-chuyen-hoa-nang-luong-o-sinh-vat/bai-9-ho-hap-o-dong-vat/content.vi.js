/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm và vai trò của hô hấp ở động vật, đặc điểm của bề mặt trao đổi khí, các hình thức trao đổi khí qua bề mặt cơ thể, hệ thống ống khí, mang và phổi, các bệnh hô hấp, tác hại của thuốc lá và cách phòng bệnh.',
  intro:
    'Con cá ngạt thở trên cạn dù không khí giàu oxygen hơn nước rất nhiều, còn con châu chấu không có phổi mà vẫn nhảy xa gấp hàng chục lần thân mình. Mỗi loài có một "bề mặt trao đổi khí" khác nhau, nhưng chúng đều tuân theo vài nguyên tắc chung mà bài này sẽ làm rõ.',
  objectives: [
    'Nêu được khái niệm và vai trò của hô hấp ở động vật.',
    'Nêu được đặc điểm của bề mặt trao đổi khí và các yếu tố ảnh hưởng đến hiệu quả trao đổi khí.',
    'Trình bày được các hình thức trao đổi khí qua bề mặt cơ thể, hệ thống ống khí, mang, phổi.',
    'Giải thích được vì sao trao đổi khí ở mang cá và phổi chim đạt hiệu quả cao.',
    'Nêu được một số bệnh hô hấp, tác hại của thuốc lá và biện pháp phòng bệnh.',
  ],
  sections: [
    {
      heading: 'Khái quát về hô hấp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hô hấp ở động vật',
          text: 'Là quá trình cơ thể lấy $\\mathrm{O_2}$ từ môi trường cung cấp cho hô hấp tế bào tạo năng lượng cho các hoạt động sống, đồng thời thải $\\mathrm{CO_2}$ sinh ra từ chuyển hoá ra môi trường, giúp duy trì cân bằng nội môi.',
        },
        {
          type: 'p',
          text: 'Ở người và thú, hô hấp gồm năm giai đoạn liên tiếp: thông khí (hít vào, thở ra), trao đổi khí ở phổi, vận chuyển $\\mathrm{O_2}$ và $\\mathrm{CO_2}$ trong máu, trao đổi khí ở mô và hô hấp tế bào.',
        },
      ],
    },
    {
      heading: 'Bề mặt trao đổi khí',
      blocks: [
        {
          type: 'p',
          text: 'Khí trao đổi qua bề mặt hô hấp theo hai nguyên tắc: khuếch tán từ nơi có phân áp cao đến nơi có phân áp thấp, và khuếch tán qua một lớp màng mỏng, ẩm ướt.',
        },
        {
          type: 'list',
          items: [
            'Diện tích bề mặt lớn.',
            'Mỏng và ẩm ướt để khí khuếch tán dễ.',
            'Có nhiều mao mạch, máu có sắc tố hô hấp.',
            'Có sự lưu thông khí (thông khí) để duy trì chênh lệch phân áp $\\mathrm{O_2}$ và $\\mathrm{CO_2}$.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hiệu quả trao đổi khí',
          text: 'Phụ thuộc chủ yếu vào diện tích bề mặt trao đổi khí và mức độ thông khí: bề mặt càng rộng, khí được làm mới càng liên tục thì trao đổi khí càng hiệu quả.',
        },
      ],
    },
    {
      heading: 'Các hình thức trao đổi khí',
      blocks: [
        {
          type: 'table',
          head: ['Hình thức', 'Đại diện', 'Đặc điểm chính'],
          rows: [
            [
              'Qua bề mặt cơ thể',
              'Ruột khoang, giun dẹp; giun đất, ếch nhái (kết hợp)',
              '$\\mathrm{O_2}$ và $\\mathrm{CO_2}$ khuếch tán trực tiếp qua bề mặt cơ thể mỏng, ẩm',
            ],
            [
              'Hệ thống ống khí',
              'Côn trùng, một số chân khớp trên cạn',
              'Không khí vào qua lỗ thở có van, theo ống khí lớn, ống khí nhỏ dần tới tận tế bào; cơ hô hấp co dãn làm thông khí',
            ],
            [
              'Mang',
              'Thân mềm, chân khớp, cá sụn, cá xương, nòng nọc',
              'Mỗi bên có $4$ cung mang, mỗi cung nhiều sợi mang gồm nhiều phiến mang mỏng có nhiều mao mạch; dòng nước và dòng máu chảy song song, ngược chiều',
            ],
            [
              'Phổi',
              'Bò sát, chim, thú (lưỡng cư có phổi nhưng ít phế nang)',
              'Phổi thú có hàng triệu phế nang bao quanh bởi mao mạch; phổi chim có ống khí và hệ thống túi khí',
            ],
          ],
        },
        { type: 'widget', name: 'be-mat' },
        {
          type: 'p',
          text: 'Ở cá xương, khi cửa miệng mở, thềm miệng hạ xuống, nắp mang đóng: nước tràn vào miệng. Khi cửa miệng đóng, thềm miệng nâng lên, nắp mang mở: nước đi qua mang ra ngoài. Nhờ vậy dòng nước qua mang chảy gần như liên tục và một chiều.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Dòng chảy song song ngược chiều',
          text: 'Ở phiến mang, máu trong mao mạch chảy song song và ngược chiều với dòng nước. Dọc cả phiến mang, máu luôn gặp nước có nồng độ $\\mathrm{O_2}$ cao hơn nó, nên $\\mathrm{O_2}$ khuếch tán vào máu suốt đường đi; máu rời mang lấy được phần lớn (khoảng $80\\%$) $\\mathrm{O_2}$ của nước. Nếu chảy cùng chiều, máu không lấy được quá một nửa.',
        },
        {
          type: 'p',
          text: 'Ở người, thông khí theo cơ chế áp suất âm: khi hít vào, cơ liên sườn ngoài và cơ hoành co, lồng ngực và phổi dãn, không khí tràn vào; khi thở ra, các cơ này dãn, lồng ngực thu nhỏ, khí bị đẩy ra. Phổi chim không có phế nang mà có các mao mạch khí; nhờ túi khí, không khí đi qua phổi theo một chiều cả khi hít vào và thở ra, nên phổi chim không có khí cặn. Dòng máu trong mao mạch máu chảy song song và ngược chiều với dòng khí trong mao mạch khí, như ở mang cá.',
        },
      ],
    },
    {
      heading: 'Bệnh hô hấp và cách phòng',
      blocks: [
        {
          type: 'p',
          text: 'Bệnh có thể ở đường dẫn khí (viêm mũi, viêm phế quản, ung thư khí quản) hoặc ở phổi (viêm phổi, lao phổi). Nguyên nhân hàng đầu là ô nhiễm không khí và khói thuốc lá: không khí ô nhiễm chứa mầm bệnh (virus, vi khuẩn, nấm), khí độc ($\\mathrm{CO}$, $\\mathrm{SO_2}$, $\\mathrm{NO_2}$, $\\mathrm{CH_4}$…), chì và bụi từ công nghiệp, giao thông, cháy rừng.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Thuốc lá',
          text: 'Khói thuốc lá chứa nhiều chất độc, gây hại cho cả người hút và người hít phải khói thuốc (hút thuốc thụ động).',
        },
        {
          type: 'list',
          items: [
            'Hạn chế tiếp xúc với mầm bệnh và chất ô nhiễm; đeo khẩu trang khi ra đường.',
            'Tiêm vaccine phòng bệnh; giữ vệ sinh cá nhân và môi trường.',
            'Không hút thuốc lá; ăn uống đủ chất, nghỉ ngơi hợp lí.',
            'Luyện tập thể dục thể thao đều đặn: cơ hô hấp khoẻ hơn, khí lưu thông mỗi nhịp và thông khí phổi mỗi phút tăng, nhịp thở lúc nghỉ giảm.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Mang cá và ống khí côn trùng',
    instruction:
      'Với mang cá, đổi chiều dòng máu và kéo độ dài phiến mang, so sánh phần trăm $\\mathrm{O_2}$ máu lấy được. Với ống khí, đóng mở lỗ thở và bật tắt co dãn cơ thân, xem $\\mathrm{O_2}$ tới tế bào thay đổi thế nào. Số liệu là mô hình để so sánh.',
  },
  examples: [
    {
      problem:
        'Vì sao cá xương lấy được tới khoảng $80\\%$ lượng $\\mathrm{O_2}$ hoà tan trong nước đi qua mang?',
      steps: [
        'Mang có rất nhiều phiến mang mỏng, nhiều mao mạch: diện tích trao đổi khí lớn.',
        'Cử động phối hợp của miệng và nắp mang tạo dòng nước qua mang gần như liên tục, một chiều.',
        'Dòng máu chảy song song, ngược chiều với dòng nước: máu luôn gặp nước giàu $\\mathrm{O_2}$ hơn, chênh lệch nồng độ được duy trì dọc phiến mang.',
      ],
      answer:
        'Nhờ diện tích lớn, dòng nước liên tục và dòng chảy song song ngược chiều giữa máu và nước.',
    },
    {
      problem:
        'Một người có khí lưu thông mỗi nhịp thở là $500$ mL và thở $16$ nhịp mỗi phút. Tính thông khí phổi mỗi phút (theo lít).',
      steps: [
        'Thông khí phổi mỗi phút bằng khí lưu thông mỗi nhịp nhân số nhịp thở mỗi phút.',
        '$500 \\cdot 16 = 8\\,000$ mL.',
        'Đổi đơn vị: $8\\,000$ mL $= 8$ L.',
      ],
      answer: '$8$ L mỗi phút.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Bề mặt trao đổi khí hiệu quả có những đặc điểm nào?',
      options: [
        'Diện tích bề mặt lớn',
        'Mỏng và ẩm ướt',
        'Có nhiều mao mạch',
        'Dày và khô để bảo vệ',
        'Có sự lưu thông khí',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Khí khuếch tán qua màng như thế nào thì dễ nhất?'],
      solution:
        'Bề mặt lớn, mỏng, ẩm, nhiều mao mạch và có lưu thông khí để duy trì chênh lệch phân áp. Bề mặt dày, khô cản trở khuếch tán.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loài với cơ quan trao đổi khí chính của nó.',
      left: ['Giun đất', 'Châu chấu', 'Cá chép', 'Chim bồ câu'],
      right: ['Hệ thống ống khí', 'Phổi và túi khí', 'Bề mặt cơ thể', 'Mang'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Côn trùng không có phổi; giun đất trao đổi khí qua da ẩm.'],
      solution:
        'Giun đất: bề mặt cơ thể. Châu chấu: hệ thống ống khí. Cá chép: mang. Chim bồ câu: phổi và túi khí.',
    },
    {
      type: 'choice',
      prompt: 'Ở côn trùng, $\\mathrm{O_2}$ được đưa tới tế bào bằng cách nào?',
      options: [
        'Theo hệ thống ống khí phân nhánh tới tận tế bào',
        'Nhờ máu vận chuyển từ phổi',
        'Khuếch tán qua mang',
        'Nhờ hemoglobin trong dịch tuần hoàn',
      ],
      answer: 0,
      hints: ['Thử mô hình ống khí: khí đi từ lỗ thở đến đâu?'],
      solution:
        'Không khí qua lỗ thở vào ống khí lớn, ống khí nhỏ dần tới tận tế bào; máu không tham gia vận chuyển $\\mathrm{O_2}$.',
    },
    {
      type: 'choice',
      prompt: 'Khi cá hít nước vào, các bộ phận cử động thế nào?',
      options: [
        'Cửa miệng mở, thềm miệng hạ xuống, nắp mang đóng',
        'Cửa miệng đóng, thềm miệng nâng lên, nắp mang mở',
        'Cửa miệng mở, nắp mang mở cùng lúc',
        'Cửa miệng đóng, nắp mang đóng',
      ],
      answer: 0,
      hints: ['Thể tích khoang miệng phải tăng để nước tràn vào.'],
      solution:
        'Cửa miệng mở, thềm miệng hạ làm khoang miệng rộng ra, nắp mang đóng để nước không chảy ngược vào.',
    },
    {
      type: 'choice',
      prompt:
        'Trong mô hình phiến mang, nếu máu chảy cùng chiều với nước thì máu lấy được tối đa bao nhiêu $\\mathrm{O_2}$ của nước?',
      options: ['Không quá $50\\%$', 'Khoảng $80\\%$', '$100\\%$', 'Không lấy được chút nào'],
      answer: 0,
      hints: [
        'Khi chảy cùng chiều, nồng độ $\\mathrm{O_2}$ của máu và nước tiến dần về một giá trị chung.',
      ],
      solution:
        'Cùng chiều, máu và nước cân bằng ở mức giữa, nên máu lấy được không quá một nửa. Ngược chiều mới lấy được khoảng $80\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phổi chim không có khí cặn?',
      options: [
        'Nhờ hệ thống túi khí, không khí đi qua phổi theo một chiều cả khi hít vào và thở ra',
        'Vì phổi chim có rất nhiều phế nang',
        'Vì chim thở rất nhanh',
        'Vì chim trao đổi khí qua da',
      ],
      answer: 0,
      hints: ['Phổi chim nối với những túi khí ở phía trước và phía sau.'],
      solution:
        'Khi hít vào, khí giàu $\\mathrm{O_2}$ vào phổi và túi khí sau; khi thở ra, khí từ túi khí sau lại đi qua phổi. Khí qua phổi luôn một chiều nên không có khí cặn.',
    },
    {
      type: 'number',
      prompt:
        'Khí lưu thông mỗi nhịp là $450$ mL, nhịp thở $18$ lần mỗi phút. Tính thông khí phổi mỗi phút theo lít.',
      answer: 8.1,
      tolerance: 0.001,
      unit: 'L',
      hints: ['Nhân khí lưu thông với số nhịp thở, rồi đổi mL sang L.'],
      solution: '$450 \\cdot 18 = 8\\,100$ mL $= 8{,}1$ L.',
    },
    {
      type: 'number',
      prompt:
        'Sau một thời gian tập luyện, khí lưu thông của một bạn tăng lên $600$ mL mỗi nhịp. Để có cùng thông khí phổi $8{,}4$ L mỗi phút, bạn ấy chỉ cần thở bao nhiêu nhịp mỗi phút?',
      answer: 14,
      unit: 'nhịp',
      hints: ['Đổi $8{,}4$ L sang mL rồi chia cho khí lưu thông mỗi nhịp.'],
      solution: '$8{,}4$ L $= 8\\,400$ mL; $8\\,400 : 600 = 14$ nhịp mỗi phút.',
    },
    {
      type: 'multi',
      prompt: 'Biện pháp nào giúp phòng bệnh hô hấp?',
      options: [
        'Đeo khẩu trang khi ra đường',
        'Không hút thuốc lá, tránh khói thuốc',
        'Tiêm vaccine phòng bệnh',
        'Đốt rơm rạ, rác thải gần nhà',
        'Luyện tập thể dục đều đặn',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Biện pháp nào làm không khí ô nhiễm hơn?'],
      solution:
        'Khẩu trang, không hút thuốc, tiêm vaccine, tập thể dục đều giúp phòng bệnh; đốt rơm rạ, rác thải tạo khói bụi và khí độc.',
    },
  ],
  takeaways: [
    'Hô hấp ở động vật lấy $\\mathrm{O_2}$ cho hô hấp tế bào và thải $\\mathrm{CO_2}$ ra môi trường.',
    'Bề mặt trao đổi khí rộng, mỏng, ẩm, nhiều mao mạch và được thông khí liên tục.',
    'Bốn hình thức: qua bề mặt cơ thể, hệ thống ống khí (côn trùng), mang (động vật ở nước), phổi (bò sát, chim, thú).',
    'Mang cá hiệu quả nhờ dòng máu và dòng nước song song, ngược chiều; phổi chim hiệu quả nhờ túi khí và dòng khí một chiều, không có khí cặn.',
    'Ô nhiễm không khí và khói thuốc lá là nguyên nhân hàng đầu gây bệnh hô hấp; phòng bằng khẩu trang, vaccine, không hút thuốc, tập luyện.',
  ],
};

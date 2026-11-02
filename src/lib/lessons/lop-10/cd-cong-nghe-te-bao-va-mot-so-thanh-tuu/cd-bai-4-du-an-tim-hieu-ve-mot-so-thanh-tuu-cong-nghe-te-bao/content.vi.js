/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án theo nhóm: chọn một hướng thành tựu của công nghệ tế bào (y học, nông nghiệp, nhân bản động vật, thực phẩm nhân tạo), thu thập và xử lí thông tin, tạo sản phẩm, báo cáo, tranh luận và đánh giá theo tiêu chí.',
  intro:
    'Chữa ung thư máu bằng chính tế bào của người bệnh, nhân nhanh một giống lan quý, tạo lại lợn Ỉ, làm thịt mà không cần giết mổ: tất cả đều đến từ công nghệ tế bào. Trong dự án này, nhóm em sẽ chọn một hướng, tìm hiểu kĩ rồi tự trình bày trước lớp.',
  objectives: [
    'Lập được kế hoạch dự án: mục tiêu, chủ đề, phân công và thời hạn.',
    'Thu thập được thông tin từ nguồn đáng tin cậy và xử lí bằng bảng, biểu đồ.',
    'Tạo được sản phẩm và trình bày cơ sở khoa học, quy trình, ưu điểm, hạn chế của một thành tựu.',
    'Tranh luận, phản biện được về các vấn đề đạo đức của công nghệ tế bào.',
  ],
  sections: [
    {
      heading: 'Chủ đề dự án',
      blocks: [
        {
          type: 'table',
          caption: 'Các hướng gợi ý',
          head: ['Chủ đề', 'Ví dụ thành tựu'],
          rows: [
            ['Y học', 'Liệu pháp tế bào gốc, liệu pháp gene'],
            ['Nông nghiệp', 'Nhân nhanh giống cây trồng, khôi phục giống quý, tạo giống mới'],
            ['Nhân bản động vật', 'Cừu Dolly, lợn Ỉ, bảo tồn loài quý hiếm'],
            ['Thực phẩm nhân tạo', 'Sản xuất thịt nhân tạo'],
          ],
        },
        {
          type: 'p',
          text: 'Mỗi báo cáo cần nêu được: đối tượng và mục đích của ứng dụng; quy trình ứng dụng công nghệ tế bào; ưu điểm, hạn chế, tính khả thi và giá trị thực tiễn; kết luận và kiến nghị của nhóm.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chọn nguồn thông tin',
          text: 'Ưu tiên sách giáo khoa, bài báo khoa học, trang của bệnh viện lớn, viện nghiên cứu, cơ quan y tế. Quảng cáo sản phẩm là nguồn cần đối chiếu. Luôn ghi lại tên nguồn để bạn đọc kiểm tra được.',
        },
      ],
    },
    {
      heading: 'Tiến trình dự án',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tìm hiểu sâu một thành tựu của công nghệ tế bào và chia sẻ kết quả với cả lớp. Mỗi nhóm khoảng $4$ đến $6$ bạn, thực hiện trong khoảng $2$ đến $3$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lập kế hoạch: xác định mục tiêu, chọn chủ đề, lập bảng phân công gồm người thực hiện, nhiệm vụ cụ thể và thời hạn.',
            'Thu thập thông tin: từ sách, báo, internet, phim tài liệu, phỏng vấn, tham quan cơ sở thực hiện (nếu có). Lập dòng thời gian các mốc thành tựu.',
            'Xử lí thông tin: lựa chọn, đối chiếu, tổng hợp bằng bảng, biểu đồ, sơ đồ quy trình; thảo luận trong nhóm và cập nhật tiến độ cho giáo viên hằng tuần.',
            'Tạo sản phẩm: bài trình chiếu, tập san, tranh ảnh hoặc mô hình.',
            'Báo cáo trước lớp: trình bày kết quả, trả lời phản biện.',
            'Tranh luận, đánh giá thành viên, đánh giá chéo giữa các nhóm và bình chọn sản phẩm.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: 'Không tự thử nghiệm các sản phẩm "tế bào gốc" hay tự làm các thí nghiệm với tế bào người, động vật. Khi phỏng vấn, cần xin phép và tôn trọng thông tin riêng tư của người được hỏi.',
        },
      ],
    },
    {
      heading: 'Báo cáo và đánh giá',
      blocks: [
        {
          type: 'p',
          text: 'Có thể dùng phần mềm trình chiếu, nhưng chỉ đưa các ý chính lên trang chiếu. Hãy lắng nghe và tôn trọng ý kiến phản biện, thể hiện sự hợp tác với các bạn trong nhóm và nhóm khác.',
        },
        {
          type: 'table',
          caption: 'Tiêu chí gợi ý để đánh giá sản phẩm (thang $10$ điểm)',
          head: ['Tiêu chí', 'Điểm tối đa', 'Mức tốt nhất'],
          rows: [
            ['Nội dung', '$4$', 'Đầy đủ, chính xác'],
            ['Trình bày sản phẩm', '$2$', 'Bố cục rõ, có hình minh hoạ, sáng tạo'],
            ['Tác phong khi báo cáo', '$2$', 'Lưu loát, tự tin, giao tiếp tốt'],
            ['Thái độ, hợp tác', '$2$', 'Nộp đúng hạn, hợp tác tốt'],
          ],
        },
      ],
    },
    {
      heading: 'Các câu hỏi để tranh luận',
      blocks: [
        {
          type: 'list',
          items: [
            'Có nên phá huỷ phôi người thừa từ thụ tinh trong ống nghiệm để chữa bệnh hay không? Việc đó có vi phạm đạo đức xã hội không?',
            'Em có quan điểm gì về nhân bản vô tính người và hệ luỵ sinh học của nó?',
            'Những cây trồng biến đổi gene nào đang được nhập khẩu hoặc trồng ở Việt Nam? Em nghĩ gì về thực phẩm biến đổi gene?',
            'Sinh vật biến đổi gene đem lại những lợi ích và rủi ro gì về sinh học, y học?',
          ],
        },
        {
          type: 'p',
          text: 'Khi tranh luận, mỗi ý kiến phải kèm lí do và bằng chứng. Hãy phê bình lập luận của bạn, không phê bình người nói.',
        },
      ],
    },
  ],
  explore: {
    title: 'Khung dự án số',
    instruction:
      'Chọn chủ đề và phân công ở bước $1$; thêm các mốc có nguồn vào dòng thời gian ở bước $2$; tự chấm sản phẩm ở bước $3$; rồi sao chép bản tổng hợp ở bước $4$. Trang không lưu dữ liệu, nên nhớ sao chép trước khi rời đi.',
  },
  examples: [
    {
      problem:
        'Một nhóm được chấm: nội dung $3$ điểm, trình bày $1{,}5$ điểm, tác phong $2$ điểm, thái độ $2$ điểm. Tính tổng điểm và cho biết nhóm nên cải thiện tiêu chí nào trước.',
      steps: [
        'Tổng điểm: $3 + 1{,}5 + 2 + 2 = 8{,}5$ điểm.',
        'So với điểm tối đa: nội dung thiếu $4 - 3 = 1$ điểm, trình bày thiếu $2 - 1{,}5 = 0{,}5$ điểm.',
        'Tiêu chí nội dung thiếu nhiều nhất và cũng nặng điểm nhất.',
      ],
      answer: 'Nhóm đạt $8{,}5/10$ điểm, nên cải thiện tiêu chí nội dung trước.',
    },
    {
      problem:
        'Nhóm tìm được hai thông tin về tế bào gốc: một trang bán mĩ phẩm ghi "tế bào gốc làm trẻ lại $10$ tuổi", và một bài của bệnh viện lớn nêu ghép tế bào gốc tạo máu sau hoá trị. Nhóm nên dùng thông tin nào, xử lí thế nào?',
      steps: [
        'Trang bán hàng có lợi ích từ việc quảng cáo, và không cho biết nghiên cứu nào đã kiểm chứng điều đó.',
        'Bài của bệnh viện lớn nêu một ứng dụng thật, đúng với kiến thức trong bài học.',
        'Nếu vẫn muốn nêu lời quảng cáo, cần ghi rõ đó là phát biểu chưa được kiểm chứng.',
      ],
      answer:
        'Dùng bài của bệnh viện và ghi nguồn. Chỉ nhắc tới quảng cáo như một ví dụ về thông tin cần kiểm chứng.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các việc của dự án theo đúng trình tự.',
      items: [
        'Lập kế hoạch, phân công',
        'Thu thập thông tin',
        'Xử lí thông tin',
        'Tạo sản phẩm',
        'Báo cáo và tranh luận',
        'Đánh giá, tổng kết',
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hints: ['Phải có thông tin rồi mới xử lí được.', 'Đánh giá thực hiện sau khi đã báo cáo.'],
      solution:
        'Lập kế hoạch, thu thập thông tin, xử lí thông tin, tạo sản phẩm, báo cáo và tranh luận, đánh giá và tổng kết.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các thành tựu sau theo thứ tự thời gian, từ sớm đến muộn.',
      items: [
        'Tái sinh cây cà rốt từ tế bào nuôi cấy',
        'Cừu Dolly ra đời',
        'Tạo được tế bào gốc cảm ứng từ tế bào chuột',
        'Việt Nam nhân bản được lợn Ỉ',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Dolly ra đời năm $1996$.', 'Tế bào gốc cảm ứng có từ năm $2006$.'],
      solution:
        'Cây cà rốt ($1958$), cừu Dolly ($1996$), tế bào gốc cảm ứng ($2006$), lợn Ỉ ở Việt Nam ($2021$).',
    },
    {
      type: 'multi',
      prompt: 'Một báo cáo về thành tựu công nghệ tế bào cần có những nội dung nào?',
      options: [
        'Đối tượng và mục đích của ứng dụng',
        'Quy trình ứng dụng công nghệ tế bào',
        'Ưu điểm, hạn chế và tính khả thi',
        'Kết luận và kiến nghị của nhóm',
        'Thông tin riêng tư của những người được phỏng vấn',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Hãy nghĩ tới điều cần tôn trọng khi phỏng vấn.'],
      solution:
        'Báo cáo cần nêu đối tượng, mục đích, quy trình, ưu điểm, hạn chế, tính khả thi, kết luận và kiến nghị. Không đưa thông tin riêng tư của người được hỏi.',
    },
    {
      type: 'choice',
      prompt: 'Nguồn nào đáng tin cậy nhất khi tìm hiểu về liệu pháp tế bào gốc?',
      options: [
        'Bài tổng quan trên tạp chí khoa học hoặc trang của viện nghiên cứu y học',
        'Quảng cáo của một cơ sở làm đẹp',
        'Một bình luận được nhiều lượt thích trên mạng xã hội',
        'Tin nhắn chuyển tiếp không rõ tác giả',
      ],
      answer: 0,
      hints: ['Nguồn nào có người kiểm duyệt chuyên môn, không nhằm bán hàng?'],
      solution:
        'Tạp chí khoa học và viện nghiên cứu có kiểm duyệt chuyên môn. Quảng cáo, bình luận và tin nhắn chuyển tiếp cần được đối chiếu.',
    },
    {
      type: 'number',
      prompt:
        'Theo thang điểm của bài, sản phẩm đạt: nội dung $4$, trình bày $1{,}5$, tác phong $1{,}5$, thái độ $2$. Tổng số điểm là bao nhiêu?',
      answer: 9,
      hints: ['Cộng cả bốn điểm thành phần.'],
      solution: '$4 + 1{,}5 + 1{,}5 + 2 = 9$ điểm.',
    },
    {
      type: 'number',
      prompt:
        'Nhóm khảo sát $40$ bạn, có $26$ bạn sẵn sàng thử thịt nhân tạo. Tỉ lệ này bằng bao nhiêu phần trăm?',
      answer: 65,
      unit: '%',
      hints: ['Lấy $26$ chia cho $40$ rồi nhân với $100\\%$.'],
      solution: '$\\dfrac{26}{40} \\cdot 100\\% = 65\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Khi tranh luận về nhân bản vô tính người, cách làm nào là phù hợp?',
      options: [
        'Nêu lí do, dẫn bằng chứng và phản biện lập luận của bạn một cách tôn trọng',
        'Chỉ cần nói to và nói nhiều hơn nhóm khác',
        'Phê bình cá nhân người có ý kiến khác',
        'Không nghe ý kiến khác để giữ vững lập trường',
      ],
      answer: 0,
      hints: ['Mục đích của tranh luận là hiểu vấn đề sâu hơn.'],
      solution:
        'Tranh luận tốt cần có lí do, bằng chứng và thái độ tôn trọng; phê bình lập luận chứ không phê bình người nói.',
    },
  ],
  takeaways: [
    'Dự án gồm lập kế hoạch, thu thập và xử lí thông tin, tạo sản phẩm, báo cáo, tranh luận, đánh giá.',
    'Báo cáo cần nêu đối tượng, mục đích, quy trình, ưu điểm, hạn chế, tính khả thi, kết luận và kiến nghị.',
    'Mọi thông tin đều cần có nguồn tin cậy; quảng cáo phải được đối chiếu.',
    'Tranh luận về đạo đức của công nghệ tế bào phải dựa vào lí lẽ, bằng chứng và thái độ tôn trọng.',
  ],
};

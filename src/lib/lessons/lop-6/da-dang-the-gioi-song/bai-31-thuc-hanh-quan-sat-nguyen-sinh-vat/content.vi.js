/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: lấy mẫu nước ao, hồ hoặc nước ngâm rơm, làm tiêu bản và quan sát nguyên sinh vật dưới kính hiển vi ở vật kính 10× rồi 40×, nhận dạng, đếm và vẽ trùng roi, trùng giày, trùng biến hình.',
  intro:
    'Một giọt nước ao nhìn bằng mắt thường chỉ hơi đục, nhưng dưới kính hiển vi lại có hàng chục sinh vật đang bơi, bò, trôi. Trong bài thực hành này, em sẽ tự lấy mẫu nước, làm tiêu bản, tìm và gọi tên các nguyên sinh vật đã học, rồi vẽ lại chúng.',
  objectives: [
    'Lấy được mẫu nước có nguyên sinh vật và làm được tiêu bản giọt nước.',
    'Sử dụng kính hiển vi quan sát được nguyên sinh vật ở vật kính 10× và 40×.',
    'Nhận dạng, đếm và vẽ được hình một số nguyên sinh vật quan sát được; phân biệt chúng với bọt khí, mảnh vụn.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: kính hiển vi, lam kính, lamen, ống hút nhỏ giọt, giấy thấm, khăn lau, một ít bông, cốc hoặc lọ thủy tinh sạch có nắp.',
            'Mẫu vật: nước ao, hồ, mương, ruộng lúa (lấy ở lớp váng xanh trên mặt hoặc sát gốc bèo, rong, gần lớp bùn đáy).',
            'Có thể tự nuôi cấy trùng giày: cho một nắm rơm khô hoặc cỏ khô đã cắt nhỏ vào bình nước ao hay nước máy để lắng, để nơi thoáng, có ánh sáng từ 5 đến 7 ngày. Lớp váng trắng trên mặt nước có rất nhiều trùng giày.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn và vệ sinh',
          text: 'Lấy mẫu nước ở nơi an toàn, có người lớn đi cùng; không lội xuống ao, hồ sâu. Đeo găng tay khi lấy mẫu, không đưa tay lên miệng, mắt; rửa tay bằng xà phòng sau khi làm. Lam kính, lamen dễ vỡ, cầm nhẹ tay.',
        },
      ],
    },
    {
      heading: 'Cách tiến hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Lắc nhẹ lọ mẫu. Dùng ống hút lấy một giọt nước ở lớp váng (hoặc sát gốc rong, bèo), nhỏ lên giữa lam kính.',
            'Đặt vài sợi bông lên giọt nước để cản bớt tốc độ bơi của nguyên sinh vật.',
            'Đậy lamen nhẹ nhàng, nghiêng từ một cạnh xuống để không tạo bọt khí; dùng giấy thấm hút phần nước tràn ra.',
            'Đặt tiêu bản lên bàn kính, quan sát ở vật kính $10\\times$ để tìm vùng có nhiều nguyên sinh vật.',
            'Đưa vùng đó vào giữa trường nhìn, chuyển sang vật kính $40\\times$, vặn ốc vi cấp cho ảnh rõ nét để quan sát hình dạng, màu sắc, cách di chuyển.',
            'Vẽ hình các nguyên sinh vật quan sát được, ghi tên và độ phóng đại.',
          ],
        },
        {
          type: 'p',
          text: 'Độ phóng đại của kính bằng tích độ phóng đại của thị kính và vật kính. Với thị kính $10\\times$: vật kính $10\\times$ phóng đại $100$ lần, vật kính $40\\times$ phóng đại $400$ lần.',
        },
        {
          type: 'table',
          caption: 'Dấu hiệu nhận biết khi quan sát',
          head: ['Đối tượng', 'Hình dạng, màu sắc', 'Cách di chuyển'],
          rows: [
            [
              'Trùng roi xanh',
              'Hình thoi, màu xanh lục, có điểm mắt đỏ',
              'Bơi bằng roi, vừa tiến vừa xoay',
            ],
            [
              'Trùng giày',
              'Hình đế giày, trong suốt, viền lông bơi',
              'Bơi rất nhanh bằng lông bơi',
            ],
            ['Trùng biến hình', 'Khối nhầy, hình dạng luôn thay đổi', 'Bò rất chậm bằng chân giả'],
            [
              'Tảo lục, tảo silic',
              'Hình cầu xanh lục; hình thuyền vàng nâu',
              'Trôi nổi hoặc trượt chậm',
            ],
            ['Bọt khí', 'Tròn đều, viền đen dày, giữa sáng', 'Không phải sinh vật'],
            [
              'Mảnh vụn',
              'Méo mó, sẫm màu, không có nhân',
              'Không phải sinh vật, chỉ trôi theo nước',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mẹo quan sát',
          text: 'Luôn bắt đầu ở vật kính nhỏ: trường nhìn rộng, dễ tìm mẫu. Ở vật kính $40\\times$, chỉ vặn ốc vi cấp, không vặn ốc sơ cấp để vật kính không chạm làm vỡ lamen.',
        },
      ],
    },
    {
      heading: 'Báo cáo kết quả',
      blocks: [
        {
          type: 'list',
          items: [
            'Nơi lấy mẫu, thời gian lấy mẫu.',
            'Hình vẽ các nguyên sinh vật quan sát được, ghi rõ tên và độ phóng đại.',
            'Bảng đếm: số lượng mỗi loại nguyên sinh vật trong một trường nhìn (đếm ở ba trường nhìn khác nhau rồi tính trung bình).',
            'Nhận xét: mẫu nào có nhiều nguyên sinh vật nhất, loại nào có lục lạp, loại nào di chuyển nhanh nhất.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Kính hiển vi ảo: một giọt nước ao',
    instruction:
      'Chọn nơi lấy giọt nước. Ở vật kính 10×, bấm vào một đối tượng để chọn, chuyển sang 40×, kéo thanh điều chỉnh nét cho ảnh rõ rồi gọi tên. Nếu nó bơi quá nhanh, thêm vài sợi bông. Đếm hết nguyên sinh vật trong giọt nước và so sánh các nơi lấy mẫu.',
  },
  examples: [
    {
      problem:
        'Nhóm của Lan đếm số trùng giày ở ba trường nhìn khác nhau của cùng một tiêu bản, được $4$, $7$ và $4$ con. Trung bình mỗi trường nhìn có bao nhiêu trùng giày? Vì sao phải đếm ở nhiều trường nhìn?',
      steps: [
        'Tổng số trùng giày đếm được: $4 + 7 + 4 = 15$ con.',
        'Trung bình mỗi trường nhìn: $15 : 3 = 5$ con.',
        'Trùng giày phân bố không đều trong giọt nước, một trường nhìn có thể nhiều hoặc ít bất thường; lấy trung bình nhiều trường nhìn cho kết quả đáng tin hơn.',
      ],
      answer: 'Trung bình $5$ trùng giày mỗi trường nhìn; đếm nhiều lần để giảm sai lệch.',
    },
    {
      problem:
        'Bạn Nam thấy trong trường nhìn một vật tròn đều, viền đen dày, ở giữa sáng, không có nhân, không tự di chuyển. Nam cho đó là tảo lục. Em có đồng ý không?',
      steps: [
        'Tảo lục có lục lạp màu xanh lục; vật Nam thấy không có màu xanh, không có nhân.',
        'Vật tròn đều, viền đen dày, giữa sáng là đặc điểm của bọt khí, thường xuất hiện khi đậy lamen quá nhanh.',
        'Muốn tránh bọt khí, đặt một cạnh lamen chạm vào giọt nước rồi hạ từ từ xuống.',
      ],
      answer: 'Không đồng ý: đó là bọt khí, không phải sinh vật.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm tiêu bản và quan sát nguyên sinh vật theo đúng thứ tự.',
      items: [
        'Quan sát ở vật kính 10× để tìm vùng có nhiều nguyên sinh vật',
        'Nhỏ một giọt nước lớp váng lên lam kính',
        'Chuyển sang vật kính 40×, vặn ốc vi cấp cho rõ nét',
        'Đặt vài sợi bông, đậy lamen, thấm nước tràn',
        'Vẽ hình và ghi tên nguyên sinh vật',
      ],
      answer: [1, 3, 0, 2, 4],
      hints: ['Phải có tiêu bản trước khi đặt lên kính.', 'Vật kính nhỏ được dùng trước.'],
      solution:
        'Nhỏ giọt nước lên lam kính, đặt bông và đậy lamen, quan sát ở vật kính 10×, chuyển sang 40× và chỉnh nét, cuối cùng vẽ hình và ghi tên.',
    },
    {
      type: 'number',
      prompt:
        'Kính hiển vi có thị kính $15\\times$, đang dùng vật kính $40\\times$. Ảnh được phóng đại bao nhiêu lần?',
      answer: 600,
      unit: 'lần',
      hints: ['Độ phóng đại bằng tích độ phóng đại của thị kính và vật kính.'],
      solution: 'Độ phóng đại: $15 \\cdot 40 = 600$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Một trùng giày dài khoảng $0{,}2$ mm. Quan sát ở độ phóng đại $400$ lần, ảnh của nó dài bao nhiêu milimét?',
      answer: 80,
      unit: 'mm',
      hints: ['Ảnh dài gấp $400$ lần vật thật.'],
      solution: 'Chiều dài ảnh: $0{,}2 \\cdot 400 = 80$ mm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nên đặt vài sợi bông lên giọt nước trước khi đậy lamen?',
      options: [
        'Để giữ ẩm cho tiêu bản',
        'Để cản bớt tốc độ bơi của nguyên sinh vật, dễ quan sát',
        'Để làm thức ăn cho nguyên sinh vật',
        'Để nhuộm màu nguyên sinh vật',
      ],
      answer: 1,
      hints: ['Trùng giày bơi rất nhanh, vừa thấy đã ra khỏi trường nhìn.'],
      solution:
        'Các sợi bông tạo thành vật cản, làm nguyên sinh vật bơi chậm lại và ở lâu trong trường nhìn, nên quan sát được rõ hơn.',
    },
    {
      type: 'choice',
      prompt: 'Muốn quan sát được nhiều trùng giày nhất, nên lấy mẫu ở đâu?',
      options: [
        'Nước máy vừa lấy',
        'Nước đun sôi để nguội',
        'Lớp váng trên bình nước ngâm rơm khô 5 đến 7 ngày',
        'Nước mưa vừa hứng',
      ],
      answer: 2,
      hints: ['Trùng giày ăn vi khuẩn. Ở đâu có nhiều vi khuẩn phân hủy chất hữu cơ?'],
      solution:
        'Rơm ngâm nước nhiều ngày bị vi khuẩn phân hủy, vi khuẩn là thức ăn của trùng giày nên trùng giày sinh sản rất nhiều. Nước đun sôi, nước máy, nước mưa hầu như không có nguyên sinh vật.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hình ảnh quan sát được với tên đối tượng.',
      left: [
        'Hình thoi xanh lục, có điểm đỏ, bơi bằng roi',
        'Hình đế giày, bơi rất nhanh, viền lông bơi',
        'Khối nhầy thay đổi hình dạng, bò chậm',
        'Tròn đều, viền đen dày, giữa sáng',
      ],
      right: ['Trùng biến hình', 'Bọt khí', 'Trùng roi xanh', 'Trùng giày'],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Một đối tượng không phải là sinh vật.'],
      solution:
        'Hình thoi xanh có roi: trùng roi xanh; hình đế giày có lông bơi: trùng giày; khối nhầy có chân giả: trùng biến hình; tròn đều viền đen: bọt khí.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải quan sát ở vật kính $10\\times$ trước rồi mới chuyển sang $40\\times$?',
      options: [
        'Vì vật kính $10\\times$ cho ảnh to hơn',
        'Vì vật kính $10\\times$ có trường nhìn rộng, dễ tìm vùng có mẫu',
        'Vì vật kính $40\\times$ làm chết nguyên sinh vật',
        'Vì vật kính $40\\times$ chỉ dùng cho vi khuẩn',
      ],
      answer: 1,
      hints: ['Vật kính càng lớn thì trường nhìn càng hẹp.'],
      solution:
        'Ở vật kính nhỏ trường nhìn rộng nên dễ tìm thấy mẫu; đưa mẫu vào giữa rồi mới chuyển sang vật kính lớn để thấy rõ chi tiết.',
    },
    {
      type: 'number',
      prompt:
        'Đếm số trùng roi xanh ở bốn trường nhìn được $6$, $3$, $5$, $6$ con. Trung bình mỗi trường nhìn có bao nhiêu trùng roi xanh?',
      answer: 5,
      unit: 'con',
      hints: ['Cộng bốn số rồi chia cho số trường nhìn.'],
      solution: '$(6 + 3 + 5 + 6) : 4 = 20 : 4 = 5$ con.',
    },
    {
      type: 'multi',
      prompt:
        'Chọn tất cả các nguyên sinh vật có lục lạp có thể thấy trong mẫu váng xanh trên mặt ao.',
      options: ['Trùng roi xanh', 'Trùng giày', 'Tảo lục đơn bào', 'Trùng biến hình', 'Tảo silic'],
      answers: [0, 2, 4],
      hints: ['Váng có màu xanh vì nhiều sinh vật chứa diệp lục.'],
      solution:
        'Trùng roi xanh, tảo lục và tảo silic có lục lạp. Trùng giày, trùng biến hình không có lục lạp.',
    },
    {
      type: 'choice',
      prompt:
        'Nhóm của Hà soi giọt nước đun sôi để nguội và không thấy nguyên sinh vật nào. Kết luận nào đúng?',
      options: [
        'Kính hiển vi bị hỏng',
        'Đun sôi đã tiêu diệt các sinh vật, nên mẫu này dùng để so sánh với nước ao',
        'Nguyên sinh vật chỉ sống trong nước mặn',
        'Cần đổi sang vật kính 100× mới thấy',
      ],
      answer: 1,
      hints: ['Nhiệt độ sôi ảnh hưởng thế nào đến sinh vật?'],
      solution:
        'Nhiệt độ sôi tiêu diệt nguyên sinh vật nên nước đun sôi để nguội không có chúng; mẫu này là mẫu đối chứng, cho thấy nguyên sinh vật thấy được trong nước ao là sinh vật sống ở đó.',
    },
    {
      type: 'text',
      prompt: 'Ở vật kính $40\\times$, để ảnh rõ nét em chỉ được vặn ốc nào? (Trả lời: ốc ... cấp)',
      accept: ['vi cấp', 'ốc vi cấp', 'oc vi cap'],
      hints: ['Có hai ốc: ốc sơ cấp (chỉnh nhanh, nhiều) và ốc còn lại chỉnh nhẹ, ít.'],
      solution:
        'Chỉ vặn ốc vi cấp; vặn ốc sơ cấp ở vật kính lớn dễ làm vật kính chạm vào lamen, vỡ tiêu bản.',
    },
  ],
  takeaways: [
    'Lấy mẫu ở lớp váng ao, hồ, sát gốc rong bèo, hoặc nuôi cấy trùng giày bằng rơm khô ngâm nước 5 đến 7 ngày.',
    'Làm tiêu bản: nhỏ giọt nước lên lam kính, đặt vài sợi bông, đậy lamen nghiêng để không có bọt khí, thấm nước tràn.',
    'Quan sát ở vật kính $10\\times$ để tìm mẫu, rồi $40\\times$ và ốc vi cấp để thấy rõ; độ phóng đại bằng tích thị kính và vật kính.',
    'Nhận dạng qua hình dạng, màu sắc, cách di chuyển; phân biệt nguyên sinh vật với bọt khí, mảnh vụn; đếm nhiều trường nhìn rồi tính trung bình.',
  ],
};

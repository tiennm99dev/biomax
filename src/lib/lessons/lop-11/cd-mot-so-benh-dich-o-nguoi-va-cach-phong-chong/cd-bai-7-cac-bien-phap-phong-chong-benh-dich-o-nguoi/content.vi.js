/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phòng, chống bệnh dịch là kiểm soát nguồn bệnh (phát hiện sớm, cách li, điều trị), cắt đứt con đường lây truyền (khẩu trang, vệ sinh ăn uống, diệt ruồi, muỗi, truyền máu an toàn) và bảo vệ người lành (tiêm vắc-xin, nâng cao sức đề kháng); mỗi bệnh cần biện pháp phù hợp với con đường lây của nó.',
  intro:
    'Em và người thân đã từng mắc bệnh dịch nào, và cả nhà đã làm gì để không lây cho nhau? Đeo khẩu trang giúp tránh cúm nhưng không giúp tránh sốt xuất huyết. Muốn phòng, chống một bệnh dịch hiệu quả, phải biết bệnh đó lây theo con đường nào.',
  objectives: [
    'Trình bày được các biện pháp phòng, chống bệnh lây qua đường hô hấp, đường tiêu hoá và đường máu.',
    'Giải thích được cơ sở của các biện pháp: vệ sinh, tiêm vắc-xin, cách li và điều trị.',
    'Giải thích được vì sao các bệnh có chung con đường lây vẫn có thể cần biện pháp phòng, chống khác nhau.',
    'Vận dụng được các biện pháp phòng, chống bệnh dịch cho bản thân, gia đình và cộng đồng.',
  ],
  sections: [
    {
      heading: 'Ba hướng phòng, chống bệnh dịch',
      blocks: [
        {
          type: 'p',
          text: 'Bệnh dịch lây khi có nguồn bệnh, con đường lây truyền và người cảm nhiễm. Mỗi biện pháp phòng, chống tác động vào ít nhất một khâu đó.',
        },
        {
          type: 'table',
          caption: 'Các hướng phòng, chống bệnh dịch',
          head: ['Hướng', 'Biện pháp'],
          rows: [
            [
              'Kiểm soát nguồn bệnh',
              'Giám sát, phát hiện sớm ổ dịch; cách li và điều trị kịp thời người bệnh; khai báo y tế; khử trùng chất thải, đồ dùng của người bệnh',
            ],
            [
              'Cắt đứt con đường lây truyền',
              'Đeo khẩu trang, rửa tay; ăn chín, uống sôi; vệ sinh môi trường; diệt ruồi, gián, chuột, muỗi; truyền máu an toàn, không dùng chung kim tiêm',
            ],
            [
              'Bảo vệ người cảm nhiễm',
              'Tiêm vắc-xin; ăn uống đủ chất, tập thể dục, ngủ đủ giấc để nâng cao sức đề kháng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vắc-xin',
          text: 'Vắc-xin là chế phẩm chứa mầm bệnh đã chết hoặc làm yếu, hoặc một thành phần của mầm bệnh, giúp cơ thể tạo miễn dịch chủ động mà không bị mắc bệnh. Tiêm vắc-xin là biện pháp phòng bệnh chủ động và hiệu quả, như vắc-xin sởi, lao, viêm gan B, cúm, COVID-19.',
        },
      ],
    },
    {
      heading: 'Phòng, chống bệnh lây qua đường hô hấp',
      blocks: [
        {
          type: 'list',
          items: [
            'Đeo khẩu trang nơi đông người, khi ho, hắt hơi phải che miệng, mũi; hạn chế tụ tập khi có dịch.',
            'Rửa tay thường xuyên bằng xà phòng hoặc dung dịch sát khuẩn; không đưa tay lên mắt, mũi, miệng.',
            'Giữ nhà ở, lớp học thông thoáng; vệ sinh, khử khuẩn bề mặt hay chạm vào.',
            'Người bệnh được cách li, điều trị kịp thời; người tiếp xúc gần được theo dõi.',
            'Tiêm vắc-xin (cúm, sởi, COVID-19, lao...) và nâng cao sức đề kháng.',
          ],
        },
      ],
    },
    {
      heading: 'Phòng, chống bệnh lây qua đường tiêu hoá',
      blocks: [
        {
          type: 'list',
          items: [
            'Ăn chín, uống sôi; hạn chế ăn sống, gỏi, tái; rửa sạch rau quả bằng nước sạch.',
            'Rửa tay bằng xà phòng trước khi ăn, sau khi đi vệ sinh; dụng cụ chế biến sống và chín để riêng.',
            'Đậy kín thức ăn; diệt ruồi, gián, chuột vì chúng mang mầm bệnh từ phân, rác tới thức ăn.',
            'Dùng nhà tiêu hợp vệ sinh, xử lí phân, rác, nước thải để mầm bệnh không vào nguồn nước.',
            'Khử trùng chất thải và đồ dùng của người bệnh; tiêm hoặc uống vắc-xin khi có (vắc-xin tả, thương hàn).',
          ],
        },
      ],
    },
    {
      heading: 'Phòng, chống bệnh lây qua đường máu',
      blocks: [
        {
          type: 'list',
          items: [
            'Diệt muỗi và bọ gậy: phun hoá chất diệt muỗi, thả cá ăn bọ gậy, đậy kín dụng cụ chứa nước, loại bỏ vật chứa nước đọng nơi muỗi đẻ trứng.',
            'Tránh muỗi đốt: ngủ màn, dùng lưới chắn muỗi, bôi kem chống muỗi, mặc quần áo dài nhất là lúc sáng sớm và chiều tối.',
            'Chỉ truyền máu đã được kiểm tra, không mang mầm bệnh.',
            'Không dùng chung bơm, kim tiêm, dụng cụ châm cứu, xăm da, dao cạo, bàn chải đánh răng.',
            'Tiêm vắc-xin viêm gan B; quan hệ tình dục an toàn; phụ nữ mang thai nhiễm HIV, viêm gan B cần được theo dõi, điều trị để giảm lây sang con.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'AIDS và sốt rét: chung đường máu, khác biện pháp',
          text: 'Kí sinh trùng sốt rét vào máu chủ yếu do muỗi Anopheles đốt, nên trọng tâm là diệt muỗi, bọ gậy và tránh muỗi đốt. HIV không lây qua muỗi mà lây qua máu (truyền máu, kim tiêm), quan hệ tình dục không an toàn và từ mẹ sang con, nên biện pháp là truyền máu an toàn, không dùng chung kim tiêm, quan hệ tình dục an toàn và phòng lây truyền từ mẹ sang con.',
        },
      ],
    },
    {
      heading: 'Tiêm vắc-xin và miễn dịch cộng đồng',
      blocks: [
        {
          type: 'p',
          text: 'Khi đủ nhiều người có miễn dịch, mỗi người bệnh chỉ gặp ít người còn có thể nhiễm, nên số người mà một người bệnh lây cho giảm xuống:',
        },
        { type: 'tex', tex: 'R = R_0 \\cdot (1 - p)' },
        {
          type: 'p',
          text: 'trong đó $p$ là tỉ lệ người đã có miễn dịch. Dịch không bùng phát khi $R \\le 1$, tức là khi $p \\ge 1 - \\dfrac{1}{R_0}$. Bệnh lây càng mạnh ($R_0$ càng lớn) thì tỉ lệ tiêm chủng cần đạt càng cao. Người được tiêm còn bảo vệ gián tiếp những người không tiêm được như trẻ sơ sinh, người đang điều trị bệnh nặng.',
        },
      ],
    },
    {
      heading: 'Hoạt động: Kế hoạch phòng, chống dịch cho lớp học',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: theo nhóm, lập kế hoạch phòng, chống một bệnh dịch hay gặp ở trường vào một mùa trong năm (cúm mùa đông xuân, sốt xuất huyết mùa mưa, tay chân miệng, tiêu chảy mùa hè...).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định tác nhân, con đường lây và những yếu tố thuận lợi cho bệnh ở trường.',
            'Chọn biện pháp theo ba hướng: kiểm soát nguồn bệnh, cắt đường lây, bảo vệ người lành; giải thích mỗi biện pháp tác động vào khâu nào.',
            'Phân công: ai làm gì, khi nào, cần dụng cụ gì (xà phòng, khẩu trang, màn, nắp đậy bể nước...).',
            'Đề ra cách theo dõi: ghi số bạn nghỉ ốm mỗi tuần để biết kế hoạch có hiệu quả không.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng kế hoạch (biện pháp, hướng tác động, người thực hiện, thời gian) và trình bày trước lớp.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bật, tắt biện pháp phòng, chống',
    instruction:
      'Chọn một bệnh, bật các biện pháp và kéo thanh tỉ lệ tiêm vắc-xin. Đường đỏ là số người đang mắc khi có biện pháp; đường xám đứt nét là khi không phòng, chống. Tìm tổ hợp ít biện pháp nhất mà vẫn chặn được dịch.',
  },
  examples: [
    {
      problem:
        'Mùa mưa, khu phố quanh trường em có nhiều ca sốt xuất huyết. Hãy đề xuất các biện pháp phòng, chống cho trường và giải thích.',
      steps: [
        'Sốt xuất huyết do virus Dengue, lây qua đường máu khi muỗi vằn đốt; muỗi vằn đẻ trứng ở nước đọng sạch.',
        'Cắt đường lây: lật úp, thu gom vật chứa nước đọng (chai lọ, lốp xe, chậu cây); đậy kín bể nước; thả cá ăn bọ gậy; phối hợp phun thuốc diệt muỗi.',
        'Tránh muỗi đốt: mặc quần áo dài, dùng kem chống muỗi, lắp lưới chắn ở phòng ngủ bán trú.',
        'Kiểm soát nguồn bệnh: học sinh sốt cao cần đi khám sớm, nghỉ ở nhà, nằm màn để muỗi không đốt rồi truyền virus sang người khác.',
        'Đeo khẩu trang không có tác dụng với bệnh này vì virus không lây qua giọt bắn.',
      ],
      answer:
        'Trọng tâm là diệt muỗi, bọ gậy, tránh muỗi đốt và phát hiện sớm người bệnh, vì bệnh lây qua muỗi vằn.',
    },
    {
      problem:
        'Bệnh sởi lây rất mạnh: một người bệnh có thể lây cho khoảng $15$ người chưa có miễn dịch ($R_0 = 15$). Cần ít nhất bao nhiêu phần trăm cộng đồng có miễn dịch để dịch sởi không bùng phát?',
      steps: [
        'Dịch không bùng phát khi $p \\ge 1 - \\dfrac{1}{R_0}$.',
        '$1 - \\dfrac{1}{15} = \\dfrac{14}{15} \\approx 0{,}933$.',
        'Vậy cần khoảng $93{,}3\\%$ cộng đồng có miễn dịch, nên vắc-xin sởi phải được tiêm cho gần như mọi trẻ, đủ các mũi.',
      ],
      answer: 'Khoảng $93{,}3\\%$ cộng đồng (làm tròn lên: $94\\%$).',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Những biện pháp nào phòng, chống được bệnh lây qua đường hô hấp như cúm?',
      options: [
        'Đeo khẩu trang nơi đông người',
        'Che miệng, mũi khi ho, hắt hơi',
        'Giữ phòng học thông thoáng',
        'Tiêm vắc-xin cúm',
        'Thả cá ăn bọ gậy vào bể nước',
        'Không dùng chung bơm kim tiêm',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Virus cúm lây qua giọt bắn và đồ vật dính giọt bắn.'],
      solution:
        'Khẩu trang, che miệng khi ho, phòng thông thoáng cắt đường lây qua giọt bắn; vắc-xin cúm bảo vệ người lành. Diệt bọ gậy phòng bệnh do muỗi truyền; không dùng chung kim tiêm phòng bệnh lây qua máu.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao diệt ruồi, gián, chuột giúp phòng các bệnh lây qua đường tiêu hoá?',
      options: [
        'Ruồi, gián, chuột tiếp xúc với phân, rác có mầm bệnh rồi mang mầm bệnh tới thức ăn, nước uống',
        'Ruồi, gián, chuột hút máu người bệnh rồi đốt người lành',
        'Ruồi, gián, chuột tiết ra chất làm hỏng vắc-xin',
        'Ruồi, gián, chuột làm không khí có nhiều giọt bắn',
      ],
      answer: 0,
      hints: ['Những con vật này thường sống ở đâu và bò lên những gì?'],
      solution:
        'Ruồi, gián, chuột sống ở nơi bẩn, dính mầm bệnh từ phân, rác rồi bò, đậu lên thức ăn. Diệt chúng và đậy kín thức ăn cắt đứt con đường mầm bệnh vào miệng.',
    },
    {
      type: 'choice',
      prompt:
        'AIDS và sốt rét đều có thể lây qua đường máu. Vì sao biện pháp phòng hai bệnh này lại khác nhau?',
      options: [
        'Sốt rét lây chủ yếu do muỗi Anopheles đốt nên cần diệt muỗi, tránh muỗi đốt; HIV không lây qua muỗi mà qua máu, quan hệ tình dục không an toàn, mẹ sang con nên cần truyền máu an toàn, không dùng chung kim tiêm, quan hệ tình dục an toàn',
        'Sốt rét do virus còn AIDS do vi khuẩn',
        'HIV lây qua muỗi vằn còn sốt rét lây qua kim tiêm',
        'Hai bệnh có biện pháp hoàn toàn giống nhau',
      ],
      answer: 0,
      hints: ['Mầm bệnh vào máu bằng cách nào ở mỗi bệnh?'],
      solution:
        'Cùng đường máu nhưng cách mầm bệnh vào máu khác nhau: sốt rét do muỗi Anopheles truyền, HIV lây qua máu, tình dục không an toàn và mẹ sang con. Vì vậy biện pháp phải nhắm vào đúng cách lây của mỗi bệnh.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi biện pháp với khâu của quá trình lây bệnh mà nó tác động.',
      left: ['Cách li, điều trị người bệnh', 'Ăn chín, uống sôi', 'Tiêm vắc-xin'],
      right: ['Kiểm soát nguồn bệnh', 'Cắt đứt con đường lây truyền', 'Bảo vệ người cảm nhiễm'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Biện pháp tác động vào người bệnh, vào đường đi của mầm bệnh, hay vào người lành?'],
      solution:
        'Cách li, điều trị tác động vào nguồn bệnh; ăn chín, uống sôi cắt đường lây qua tiêu hoá; vắc-xin giúp người lành có miễn dịch.',
    },
    {
      type: 'number',
      prompt:
        'Một bệnh có $R_0 = 4$. Cần ít nhất bao nhiêu phần trăm cộng đồng có miễn dịch để dịch không bùng phát?',
      answer: 75,
      unit: '%',
      hints: ['Dùng $p = 1 - \\dfrac{1}{R_0}$.'],
      solution: '$p = 1 - \\dfrac{1}{4} = 0{,}75 = 75\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Bệnh cúm có $R_0 = 3$. Nếu $50\\%$ cộng đồng đã tiêm vắc-xin (coi như có miễn dịch), mỗi người bệnh lây cho trung bình bao nhiêu người?',
      answer: 1.5,
      hints: ['$R = R_0 \\cdot (1 - p)$.'],
      solution:
        '$R = 3 \\cdot (1 - 0{,}5) = 1{,}5$. Vẫn lớn hơn $1$ nên dịch vẫn lan, nhưng chậm hơn; cần kết hợp thêm biện pháp khác.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao vắc-xin cúm cần được tiêm nhắc lại hằng năm?',
      options: [
        'Virus cúm biến chủng nhanh, chủng lưu hành mỗi năm có thể khác, và miễn dịch sau tiêm giảm dần',
        'Vắc-xin cúm gây ra bệnh cúm nhẹ nên phải tiêm lại',
        'Cơ thể người không bao giờ tạo được miễn dịch với virus',
        'Vắc-xin cúm chỉ có tác dụng với vi khuẩn',
      ],
      answer: 0,
      hints: ['Nhớ lại: một lí do khiến bệnh do virus dễ thành dịch.'],
      solution:
        'Virus cúm biến chủng nhanh nên thành phần vắc-xin được cập nhật theo chủng lưu hành từng năm; miễn dịch sau tiêm cũng giảm dần theo thời gian.',
    },
    {
      type: 'multi',
      prompt:
        'Bạn Minh bị tiêu chảy cấp do vi khuẩn. Gia đình nên làm những việc nào để không lây cho người khác?',
      options: [
        'Đưa Minh đi khám, điều trị theo chỉ định của bác sĩ',
        'Khử trùng chất thải, nhà vệ sinh và đồ dùng của Minh',
        'Cả nhà rửa tay bằng xà phòng trước khi ăn, sau khi đi vệ sinh',
        'Ăn chín, uống sôi, đậy kín thức ăn',
        'Tự mua kháng sinh cho cả nhà uống để phòng bệnh',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Tiêu chảy lây qua đường tiêu hoá; dùng kháng sinh tuỳ tiện gây kháng thuốc.'],
      solution:
        'Điều trị người bệnh và khử trùng chất thải kiểm soát nguồn bệnh; rửa tay, ăn chín uống sôi, đậy thức ăn cắt đường lây. Tự ý uống kháng sinh không đúng chỉ định gây kháng kháng sinh.',
    },
  ],
  takeaways: [
    'Phòng, chống bệnh dịch theo ba hướng: kiểm soát nguồn bệnh, cắt đứt con đường lây truyền, bảo vệ người cảm nhiễm.',
    'Đường hô hấp: khẩu trang, che miệng khi ho, rửa tay, thông thoáng, cách li. Đường tiêu hoá: ăn chín uống sôi, rửa tay, diệt ruồi, gián, chuột, vệ sinh môi trường.',
    'Đường máu: diệt muỗi, bọ gậy, tránh muỗi đốt, truyền máu an toàn, không dùng chung kim tiêm.',
    'Tiêm vắc-xin tạo miễn dịch chủ động; khi tỉ lệ có miễn dịch $p \\ge 1 - \\dfrac{1}{R_0}$ thì dịch không bùng phát.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành khảo sát một quần xã trong tự nhiên bằng ô tiêu chuẩn: lập danh sách loài, đếm số cá thể, xác định loài ưu thế, độ phong phú của mỗi loài, số tầng phân bố và các nhóm sinh vật theo cấu trúc dinh dưỡng; xử lí số liệu, so sánh độ đa dạng và viết báo cáo.',
  intro:
    'Bãi cỏ sân trường, vườn cây ăn quả hay một khoảnh rừng trồng đều là những quần xã nhỏ quanh em. Có bao nhiêu loài sống ở đó, loài nào chiếm ưu thế, chúng phân bố thành mấy tầng và thuộc những nhóm dinh dưỡng nào? Bài thực hành này giúp em tự khảo sát và xử lí số liệu để trả lời các câu hỏi đó.',
  objectives: [
    'Lựa chọn được quần xã khảo sát và bố trí được các ô tiêu chuẩn phù hợp với đối tượng.',
    'Lập được danh sách loài, đếm số cá thể; xác định được loài ưu thế và số tầng phân bố của quần xã.',
    'Tính được độ phong phú của mỗi loài $\\left(\\dfrac{n_i}{N} \\cdot 100\\%\\right)$ và so sánh được độ đa dạng của các quần xã.',
    'Xếp được các loài vào nhóm sinh vật sản xuất, sinh vật tiêu thụ, sinh vật phân giải và viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Địa điểm: chọn một quần xã tương đối ổn định, dễ tiếp cận và an toàn: bãi cỏ, vườn trường, vườn cây ăn quả, rừng trồng, ven ao hồ...',
            'Dụng cụ: thước dây, cọc và dây để căng ô tiêu chuẩn (hoặc khung gỗ), kính lúp, vợt bắt côn trùng, xẻng nhỏ, túi đựng mẫu, máy ảnh hoặc điện thoại, sách tra cứu tên loài, sổ ghi chép, bút.',
            'Kích thước ô tiêu chuẩn phụ thuộc đối tượng: khoảng $1$ m² với cây cỏ nhỏ, $4$ m² với cây bụi, $100$ m² ($10$ m × $10$ m) với cây gỗ.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn và bảo vệ quần xã',
          text: 'Mặc quần áo dài, đi giày, đội mũ; không chạm vào loài lạ có gai, độc; không làm việc gần nước sâu khi không có giáo viên. Hạn chế bắt, hái sinh vật: quan sát, chụp ảnh và thả lại sau khi đếm.',
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
            'Xác định khu vực khảo sát, chọn ngẫu nhiên các vị trí và căng các ô tiêu chuẩn có cùng diện tích (ít nhất $3$ – $5$ ô).',
            'Quan sát kĩ trong từng ô, cả trên mặt đất, trong tán cây và lớp đất mặt; chụp ảnh, tra cứu để lập danh sách các loài.',
            'Đếm số cá thể của mỗi loài trong các ô và ghi vào bảng số liệu.',
            'Quan sát sự phân bố của thực vật theo chiều thẳng đứng để xác định số tầng (tầng cây gỗ, tầng cây bụi, tầng cỏ...) và các loài ở mỗi tầng.',
            'Xếp mỗi loài vào nhóm sinh vật sản xuất, sinh vật tiêu thụ hoặc sinh vật phân giải; ghi (+) nếu có, (−) nếu không có nhóm đó trong quần xã.',
            'Xử lí số liệu: tính tổng số cá thể, độ phong phú của mỗi loài, xác định loài ưu thế; vẽ sơ đồ quan hệ dinh dưỡng giữa các loài.',
          ],
        },
        {
          type: 'table',
          caption: 'Mẫu bảng ghi kết quả khảo sát',
          head: ['STT', 'Tên loài', 'Số cá thể', 'Độ phong phú (%)', 'Tầng', 'Nhóm dinh dưỡng'],
          rows: [
            ['1', '...', '...', '...', '...', '...'],
            ['2', '...', '...', '...', '...', '...'],
          ],
        },
      ],
    },
    {
      heading: 'Xử lí số liệu',
      blocks: [
        {
          type: 'tex',
          tex: '\\text{Độ phong phú của loài } i = \\dfrac{n_i}{N} \\cdot 100\\%',
        },
        {
          type: 'p',
          text: 'Trong đó $n_i$ là số cá thể của loài $i$ trong các ô khảo sát, $N$ là tổng số cá thể của tất cả các loài. Loài có số cá thể (độ phong phú) lớn nhất là loài ưu thế. Hai quần xã có cùng số loài thì quần xã có độ phong phú của các loài đồng đều hơn có độ đa dạng cao hơn.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chỉ số đa dạng Shannon (tham khảo)',
          text: "Để so sánh độ đa dạng bằng một con số, các nhà sinh thái học hay dùng chỉ số Shannon $H' = -\\sum p_i \\ln p_i$, với $p_i = \\dfrac{n_i}{N}$. $H'$ bằng $0$ khi quần xã chỉ có một loài, càng lớn khi càng nhiều loài và các loài càng đồng đều.",
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
            'Mục đích; địa điểm, thời gian khảo sát; kích thước và số ô tiêu chuẩn.',
            'Kết quả: bảng danh sách loài, số cá thể, độ phong phú; loài ưu thế; số tầng và các loài ở mỗi tầng; bảng các nhóm sinh vật theo cấu trúc dinh dưỡng; sơ đồ quan hệ dinh dưỡng.',
            'Nhận xét, giải thích: quần xã có đa dạng không, vì sao loài ưu thế chiếm ưu thế, nguyên nhân sai số (số ô ít, đặt ô không ngẫu nhiên, bỏ sót sinh vật nhỏ).',
            'Trả lời câu hỏi: nhóm sinh vật nào khó quan sát nhất khi khảo sát cấu trúc dinh dưỡng của quần xã? Vì sao?',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Xử lí số liệu khảo sát quần xã',
    instruction:
      "Chọn một quần xã, dùng nút − / + để nhập số cá thể đếm được của mỗi loài. Bảng tự tính độ phong phú, số loài, loài ưu thế, số tầng và chỉ số Shannon $H'$. Thử làm cho các loài đồng đều hơn, hoặc cho một loài chiếm gần hết, và so sánh $H'$.",
  },
  examples: [
    {
      problem:
        'Khảo sát $5$ ô tiêu chuẩn trên một bãi cỏ, một nhóm học sinh đếm được: cỏ gà $90$ cây, cỏ mần trầu $45$ cây, rau má $30$ cây, cỏ may $15$ cây. Tính độ phong phú của mỗi loài và xác định loài ưu thế.',
      steps: [
        'Tổng số cá thể: $N = 90 + 45 + 30 + 15 = 180$.',
        'Cỏ gà: $\\dfrac{90}{180} \\cdot 100\\% = 50\\%$; cỏ mần trầu: $\\dfrac{45}{180} \\cdot 100\\% = 25\\%$.',
        'Rau má: $\\dfrac{30}{180} \\cdot 100\\% \\approx 16{,}7\\%$; cỏ may: $\\dfrac{15}{180} \\cdot 100\\% \\approx 8{,}3\\%$.',
        'Cỏ gà có độ phong phú lớn nhất nên là loài ưu thế.',
      ],
      answer:
        'Cỏ gà $50\\%$, cỏ mần trầu $25\\%$, rau má khoảng $16{,}7\\%$, cỏ may khoảng $8{,}3\\%$; loài ưu thế là cỏ gà.',
    },
    {
      problem:
        'Quần xã P có $2$ loài, mỗi loài $50$ cá thể. Quần xã Q có $2$ loài với $90$ và $10$ cá thể. Tính chỉ số Shannon của mỗi quần xã (lấy $\\ln 2 \\approx 0{,}693$; $\\ln 0{,}9 \\approx -0{,}105$; $\\ln 0{,}1 \\approx -2{,}303$) và so sánh độ đa dạng.',
      steps: [
        "Quần xã P: $p_1 = p_2 = 0{,}5$, nên $H' = -2 \\cdot 0{,}5 \\cdot \\ln 0{,}5 = \\ln 2 \\approx 0{,}69$.",
        'Quần xã Q: $p_1 = 0{,}9$, $p_2 = 0{,}1$.',
        "$H' = -(0{,}9 \\cdot (-0{,}105) + 0{,}1 \\cdot (-2{,}303)) \\approx 0{,}0945 + 0{,}2303 \\approx 0{,}32$.",
        "Hai quần xã cùng số loài, P đồng đều hơn nên $H'$ lớn hơn: P đa dạng hơn Q.",
      ],
      answer: "$H'_P \\approx 0{,}69$, $H'_Q \\approx 0{,}32$; quần xã P đa dạng hơn.",
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Trong các ô khảo sát đếm được loài A $36$ cá thể, loài B $24$, loài C $15$, loài D $5$. Độ phong phú của loài A là bao nhiêu phần trăm?',
      answer: 45,
      unit: '%',
      hints: [
        'Tính tổng số cá thể của bốn loài.',
        'Độ phong phú $= \\dfrac{n_A}{N} \\cdot 100\\%$.',
      ],
      solution:
        '$N = 36 + 24 + 15 + 5 = 80$; độ phong phú của A $= \\dfrac{36}{80} \\cdot 100\\% = 45\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Với số liệu trên (A $36$, B $24$, C $15$, D $5$ cá thể), độ phong phú của loài D là bao nhiêu phần trăm?',
      answer: 6.25,
      tolerance: 0.01,
      unit: '%',
      hints: ['Tổng số cá thể vẫn là $80$.'],
      solution: '$\\dfrac{5}{80} \\cdot 100\\% = 6{,}25\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Một quần xã có tổng cộng $240$ cá thể; loài X có độ phong phú $25\\%$. Loài X có bao nhiêu cá thể?',
      answer: 60,
      hints: ['$n_X = N \\cdot$ độ phong phú.'],
      solution: '$n_X = 240 \\cdot 25\\% = 240 \\cdot 0{,}25 = 60$ cá thể.',
    },
    {
      type: 'choice',
      prompt:
        'Kết quả khảo sát một vườn trường: cỏ lá tre $12$ cây, cỏ gấu $64$ cây, cỏ mực $20$ cây, cây xấu hổ $4$ cây. Loài ưu thế của quần xã là',
      options: ['cỏ gấu', 'cỏ lá tre', 'cỏ mực', 'cây xấu hổ'],
      answer: 0,
      hints: ['Loài ưu thế có số cá thể lớn nhất.'],
      solution:
        'Cỏ gấu có $64$ trong tổng $100$ cây, độ phong phú $64\\%$, lớn nhất nên là loài ưu thế.',
    },
    {
      type: 'choice',
      prompt:
        'Hai quần xã M và N đều có $5$ loài và $100$ cá thể. Ở M mỗi loài có $20$ cá thể; ở N một loài có $80$ cá thể, bốn loài còn lại mỗi loài $5$ cá thể. Nhận xét nào đúng?',
      options: [
        'M có độ đa dạng cao hơn N',
        'N có độ đa dạng cao hơn M',
        'Hai quần xã có độ đa dạng bằng nhau vì cùng số loài',
        'Không so sánh được vì thiếu diện tích khảo sát',
      ],
      answer: 0,
      hints: ['Độ đa dạng phụ thuộc cả số loài và mức đồng đều về độ phong phú.'],
      solution:
        'Cùng số loài, nhưng ở M các loài đồng đều ($20\\%$ mỗi loài) còn ở N một loài chiếm $80\\%$. Vì vậy M đa dạng hơn N.',
    },
    {
      type: 'number',
      prompt:
        "Một quần xã có $2$ loài với số cá thể bằng nhau. Tính chỉ số Shannon $H' = -\\sum p_i \\ln p_i$ (làm tròn đến hai chữ số thập phân).",
      answer: 0.69,
      tolerance: 0.01,
      hints: ['Mỗi loài có $p_i = 0{,}5$.', "$H' = -2 \\cdot 0{,}5 \\cdot \\ln 0{,}5 = \\ln 2$."],
      solution:
        "$H' = -(0{,}5 \\ln 0{,}5 + 0{,}5 \\ln 0{,}5) = -\\ln 0{,}5 = \\ln 2 \\approx 0{,}69$.",
    },
    {
      type: 'choice',
      prompt:
        'Khi khảo sát tầng cây gỗ của một khu rừng trồng, nên dùng ô tiêu chuẩn có diện tích khoảng',
      options: ['$100$ m²', '$1$ m²', '$4$ m²', '$100$ cm²'],
      answer: 0,
      hints: ['Ô phải đủ lớn để chứa được nhiều cây gỗ.'],
      solution:
        'Cây gỗ lớn và mọc thưa nên cần ô khoảng $10$ m × $10$ m $= 100$ m²; ô $1$ m² dùng cho cây cỏ nhỏ, $4$ m² cho cây bụi.',
    },
    {
      type: 'match',
      prompt: 'Xếp mỗi sinh vật tìm thấy trong quần xã vườn trường vào nhóm dinh dưỡng phù hợp.',
      left: ['Cây cỏ gà', 'Châu chấu', 'Chim sâu', 'Nấm mọc trên lá mục'],
      right: [
        'Sinh vật sản xuất',
        'Sinh vật tiêu thụ bậc 1',
        'Sinh vật tiêu thụ bậc 2',
        'Sinh vật phân giải',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Châu chấu ăn cỏ; chim sâu ăn sâu bọ; nấm phân giải xác lá.'],
      solution:
        'Cỏ quang hợp: sinh vật sản xuất. Châu chấu ăn cỏ: tiêu thụ bậc 1. Chim sâu ăn côn trùng: tiêu thụ bậc 2. Nấm phân giải lá mục: sinh vật phân giải.',
    },
    {
      type: 'choice',
      prompt:
        'Khi khảo sát cấu trúc dinh dưỡng của quần xã ngoài thực địa, nhóm sinh vật nào thường khó quan sát nhất?',
      options: [
        'Sinh vật phân giải như vi khuẩn, nấm nhỏ trong đất',
        'Sinh vật sản xuất như cây cỏ',
        'Côn trùng ăn lá',
        'Chim ăn sâu',
      ],
      answer: 0,
      hints: ['Nhóm nào phần lớn có kích thước hiển vi và sống trong đất?'],
      solution:
        'Sinh vật phân giải chủ yếu là vi khuẩn, nấm có kích thước rất nhỏ, sống trong đất, lá mục nên mắt thường khó thấy; cần kính hiển vi hoặc nuôi cấy mới phát hiện được.',
    },
    {
      type: 'multi',
      prompt: 'Những việc làm nào giúp kết quả khảo sát quần xã đáng tin cậy hơn?',
      options: [
        'Đặt các ô tiêu chuẩn ở vị trí chọn ngẫu nhiên',
        'Khảo sát nhiều ô có cùng diện tích',
        'Quan sát cả trên tán cây, mặt đất và lớp đất mặt',
        'Chỉ đặt ô ở chỗ có nhiều loài đẹp, dễ nhận biết',
      ],
      answers: [0, 1, 2],
      hints: ['Mẫu phải đại diện cho cả quần xã.'],
      solution:
        'Ô ngẫu nhiên, đủ nhiều, cùng diện tích và quan sát đủ các tầng giúp mẫu đại diện cho quần xã. Chỉ chọn chỗ có loài đẹp, dễ thấy làm kết quả bị lệch.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước khảo sát quần xã theo đúng thứ tự.',
      items: [
        'Chọn khu vực, căng các ô tiêu chuẩn ở vị trí ngẫu nhiên',
        'Quan sát, tra cứu để lập danh sách loài',
        'Đếm số cá thể của mỗi loài, ghi vào bảng',
        'Tính độ phong phú, xác định loài ưu thế, viết báo cáo',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Phải biết có những loài nào rồi mới đếm từng loài.'],
      solution:
        'Căng ô → lập danh sách loài → đếm số cá thể mỗi loài → xử lí số liệu (độ phong phú, loài ưu thế) và báo cáo.',
    },
    {
      type: 'number',
      prompt:
        'Trong một vườn cây ăn quả, học sinh ghi nhận: tầng cây gỗ có cây nhãn, cây vải; tầng cây bụi có cây chè, cây dứa dại; tầng cỏ có cỏ gấu, cỏ mực, rau má. Quần xã này có bao nhiêu tầng thực vật?',
      answer: 3,
      hints: ['Đếm số tầng, không đếm số loài.'],
      solution:
        'Có $3$ tầng: tầng cây gỗ, tầng cây bụi và tầng cỏ ($7$ loài phân bố trong $3$ tầng).',
    },
  ],
  takeaways: [
    'Khảo sát quần xã bằng các ô tiêu chuẩn đặt ngẫu nhiên, cùng diện tích; kích thước ô phù hợp với đối tượng.',
    'Độ phong phú của loài $i$ $= \\dfrac{n_i}{N} \\cdot 100\\%$; loài có độ phong phú lớn nhất là loài ưu thế.',
    "Cùng số loài, quần xã có các loài đồng đều hơn thì đa dạng hơn; chỉ số Shannon $H'$ cho phép so sánh bằng một con số.",
    'Báo cáo gồm danh sách loài, số tầng, các nhóm sinh vật sản xuất, tiêu thụ, phân giải và sơ đồ quan hệ dinh dưỡng.',
  ],
};

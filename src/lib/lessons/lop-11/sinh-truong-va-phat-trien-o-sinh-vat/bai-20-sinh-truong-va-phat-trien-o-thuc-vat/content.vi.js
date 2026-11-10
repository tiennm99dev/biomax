/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đặc điểm sinh trưởng ở thực vật, các nhân tố ảnh hưởng, mô phân sinh, sinh trưởng sơ cấp và thứ cấp, hormone thực vật và ứng dụng, phát triển ở thực vật có hoa: tuổi, nhiệt độ thấp, quang chu kì, phytochrome và florigen.',
  intro:
    'Ở Đà Lạt, người trồng hoa cúc bật đèn cho ruộng cúc vào ban đêm; ở Bình Thuận, nông dân cũng thắp đèn cho vườn thanh long. Cùng là thắp đèn, nhưng cúc thì chậm ra hoa còn thanh long lại ra hoa trái vụ. Vì sao? Cây lớn lên nhờ đâu, và điều gì quyết định lúc cây ra hoa?',
  objectives: [
    'Nêu được đặc điểm sinh trưởng ở thực vật và các nhân tố bên ngoài ảnh hưởng đến sinh trưởng.',
    'Trình bày được vị trí, vai trò của các loại mô phân sinh; phân biệt sinh trưởng sơ cấp và sinh trưởng thứ cấp.',
    'Nêu được khái niệm, vai trò của các hormone thực vật, sự tương quan giữa chúng và ứng dụng trong thực tiễn.',
    'Trình bày được ảnh hưởng của tuổi, nhiệt độ thấp, quang chu kì, phytochrome và hormone ra hoa đến sự ra hoa; giải thích được các ứng dụng điều khiển ra hoa.',
  ],
  sections: [
    {
      heading: 'Đặc điểm sinh trưởng và các nhân tố ảnh hưởng',
      blocks: [
        {
          type: 'list',
          items: [
            'Sinh trưởng ở thực vật chỉ diễn ra ở một số vị trí nhất định có mô phân sinh: ngọn thân, đỉnh cành, chóp rễ, tầng sinh mạch…',
            'Sinh trưởng diễn ra trong suốt đời sống của cây nhờ các tế bào mô phân sinh phân chia liên tục (sinh trưởng không giới hạn).',
          ],
        },
        {
          type: 'table',
          head: ['Nhân tố', 'Ảnh hưởng'],
          rows: [
            ['Nước', 'Thiếu nước, tế bào không dãn dài được; tốc độ sinh trưởng giảm.'],
            [
              'Ánh sáng',
              'Nguồn năng lượng cho quang hợp tạo chất hữu cơ; ảnh hưởng đến phát sinh hình thái (cây trong tối mọc vống, lá vàng).',
            ],
            [
              'Nhiệt độ',
              'Mỗi loài sinh trưởng tốt trong một khoảng nhiệt độ; nhiệt độ quyết định sự phân bố của thực vật.',
            ],
            [
              'Chất khoáng',
              'Tham gia cấu tạo tế bào, điều tiết các quá trình sinh lí; thiếu khoáng cây chậm lớn.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Mô phân sinh',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mô phân sinh',
          text: 'Mô phân sinh là nhóm tế bào chưa phân hoá, có khả năng phân chia liên tục để tạo ra tế bào mới.',
        },
        {
          type: 'table',
          head: ['Loại', 'Vị trí', 'Có ở', 'Vai trò'],
          rows: [
            [
              'Mô phân sinh đỉnh',
              'Chồi ngọn, chồi nách, đỉnh rễ',
              'Cây Một lá mầm và cây Hai lá mầm',
              'Tăng chiều dài thân, cành, rễ',
            ],
            [
              'Mô phân sinh bên',
              'Tầng sinh mạch, tầng sinh bần (trong thân, rễ)',
              'Cây Hai lá mầm',
              'Tăng đường kính (độ dày) thân, rễ',
            ],
            [
              'Mô phân sinh lóng',
              'Gốc các lóng (giữa hai mấu)',
              'Cây Một lá mầm',
              'Tăng chiều dài lóng, giúp thân cao lên',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Sinh trưởng sơ cấp và sinh trưởng thứ cấp',
      blocks: [
        {
          type: 'table',
          head: ['Tiêu chí', 'Sinh trưởng sơ cấp', 'Sinh trưởng thứ cấp'],
          rows: [
            [
              'Do mô nào',
              'Mô phân sinh đỉnh (và mô phân sinh lóng)',
              'Mô phân sinh bên: tầng sinh mạch, tầng sinh bần',
            ],
            ['Kết quả', 'Tăng chiều dài thân và rễ', 'Tăng đường kính thân và rễ'],
            [
              'Có ở',
              'Cây Một lá mầm và phần non của cây Hai lá mầm',
              'Cây Hai lá mầm (chủ yếu cây thân gỗ)',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Tầng sinh mạch phân chia tạo mạch gỗ thứ cấp ở phía trong và mạch rây thứ cấp ở phía ngoài; tầng sinh bần tạo lớp bần (vỏ) bảo vệ. Hằng năm, lớp gỗ mới được thêm vào tạo thành vòng gỗ (vòng năm): gỗ tạo ra mùa mưa có tế bào to, màu sáng; gỗ tạo ra mùa khô có tế bào nhỏ, màu sẫm.',
        },
        {
          type: 'list',
          items: [
            'Gỗ lõi (gỗ ròng): ở giữa thân, màu sẫm, gồm các lớp mạch gỗ già, chỉ còn chức năng nâng đỡ.',
            'Gỗ dác: ở phía ngoài gỗ lõi, màu sáng, gồm các lớp mạch gỗ thứ cấp mới, dẫn nước và muối khoáng.',
          ],
        },
      ],
    },
    {
      heading: 'Hormone thực vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hormone thực vật',
          text: 'Hormone thực vật là các chất hữu cơ có hoạt tính sinh học cao, được tổng hợp với lượng nhỏ ở một số cơ quan, vận chuyển đến nơi khác trong cây để điều tiết các hoạt động sống: sinh trưởng, phát triển và đáp ứng của cây với môi trường.',
        },
        {
          type: 'table',
          head: ['Hormone', 'Nơi tổng hợp chủ yếu', 'Vai trò chính'],
          rows: [
            [
              'Auxin',
              'Chồi ngọn, lá non, hạt đang phát triển',
              'Kích thích dãn dài tế bào, hướng động, ưu thế ngọn, ra rễ phụ, phát triển quả',
            ],
            [
              'Gibberellin',
              'Lá non, rễ, hạt đang nảy mầm',
              'Kéo dài lóng thân, kích thích nảy mầm của hạt, củ, ra hoa, tạo quả',
            ],
            [
              'Cytokinin',
              'Chủ yếu ở rễ',
              'Kích thích phân chia tế bào, hình thành chồi, làm chậm già hoá',
            ],
            [
              'Abscisic acid',
              'Hầu hết các bộ phận, tích luỹ ở cơ quan già, hạt',
              'Ức chế sinh trưởng, gây ngủ của hạt và chồi, đóng khí khổng khi thiếu nước',
            ],
            [
              'Ethylene',
              'Quả chín, mô già, mô bị tổn thương',
              'Thúc quả chín, gây rụng lá, hoa, quả',
            ],
          ],
          caption:
            'Auxin, gibberellin, cytokinin thuộc nhóm kích thích sinh trưởng; abscisic acid, ethylene thuộc nhóm ức chế sinh trưởng.',
        },
        {
          type: 'list',
          items: [
            'Tương quan auxin/cytokinin: trong nuôi cấy mô, tỉ lệ auxin/cytokinin cao kích thích tạo rễ, tỉ lệ thấp kích thích tạo chồi.',
            'Tương quan abscisic acid/gibberellin: hạt ngủ khi abscisic acid cao hơn gibberellin; khi hạt nảy mầm, gibberellin tăng, abscisic acid giảm.',
            'Khi dùng hormone ngoại sinh phải đúng nồng độ, đúng liều lượng, đúng thời điểm và chú ý tính đối kháng, phối hợp giữa các hormone; không dùng cho nông sản làm thực phẩm quá mức cho phép.',
          ],
        },
        { type: 'widget', name: 'hormone' },
      ],
    },
    {
      heading: 'Phát triển ở thực vật có hoa',
      blocks: [
        {
          type: 'p',
          text: 'Phát triển ở thực vật có hoa trải qua các giai đoạn: nảy mầm, cây con, cây trưởng thành, ra hoa, tạo quả và hạt, già và chết. Sự chuyển sang ra hoa chịu ảnh hưởng của:',
        },
        {
          type: 'list',
          items: [
            'Tuổi của cây: cây chỉ ra hoa khi đạt đến một độ tuổi nhất định, ví dụ cà chua ra hoa khi có khoảng $14$ lá.',
            'Nhiệt độ thấp: một số cây chỉ ra hoa sau khi trải qua một thời gian nhiệt độ thấp (xuân hoá), như lúa mì mùa đông, su hào, bắp cải.',
            'Quang chu kì: sự ra hoa phụ thuộc vào tương quan độ dài ngày và đêm.',
          ],
        },
        {
          type: 'table',
          head: ['Nhóm cây', 'Ra hoa khi', 'Ví dụ'],
          rows: [
            [
              'Cây ngày ngắn',
              'Thời gian chiếu sáng ngắn hơn $12$ giờ (đêm dài)',
              'Hoa cúc, lúa, đậu tương, mía, cà phê',
            ],
            [
              'Cây ngày dài',
              'Thời gian chiếu sáng dài hơn $12$ giờ (đêm ngắn)',
              'Thanh long, lúa mì, hành, cà rốt, củ cải đường',
            ],
            ['Cây trung tính', 'Không phụ thuộc độ dài ngày', 'Cà chua, ngô, lạc, hướng dương'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Phytochrome và florigen',
          text: 'Lá cảm nhận quang chu kì nhờ sắc tố phytochrome, có hai dạng chuyển hoá cho nhau: $P_r$ hấp thụ ánh sáng đỏ ($660$ nm) chuyển thành $P_{fr}$; $P_{fr}$ hấp thụ ánh sáng đỏ xa ($730$ nm) chuyển thành $P_r$; trong tối $P_{fr}$ chuyển chậm về $P_r$. Thực chất cây "đo" độ dài đêm liên tục. Khi đủ điều kiện, lá tổng hợp hormone ra hoa (florigen), vận chuyển đến đỉnh chồi làm đỉnh chồi phân hoá thành hoa.',
        },
        {
          type: 'p',
          text: 'Ứng dụng: điều khiển ra hoa bằng chiếu sáng (thắp đèn cho cúc để cây cao, ra hoa đúng dịp Tết; thắp đèn cho thanh long ra hoa trái vụ), xử lí lạnh, dùng hormone; điều khiển trạng thái ngủ của hạt, củ giống; xác định tuổi cây.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ra hoa theo quang chu kì',
    instruction:
      'Chọn nhóm cây, kéo thanh độ dài ngày và thử chiếu sáng giữa đêm. Quan sát khi nào cây ngày ngắn, cây ngày dài, cây trung tính ra hoa, và giải thích bằng độ dài đêm liên tục.',
  },
  examples: [
    {
      problem:
        'Mùa thu ở Đà Lạt, ngày dài khoảng $11$ giờ. Người trồng hoa cúc (cây ngày ngắn) bật đèn vào giữa đêm. Tính độ dài đêm liên tục dài nhất khi có và không có đèn, rồi giải thích mục đích của việc thắp đèn.',
      steps: [
        'Không thắp đèn: đêm dài $24 - 11 = 13$ giờ, dài hơn $12$ giờ: cúc được kích thích ra hoa.',
        'Thắp đèn giữa đêm: đêm bị chia thành hai nửa, mỗi nửa $13 : 2 = 6{,}5$ giờ.',
        'Đêm liên tục chỉ $6{,}5$ giờ, ngắn hơn đêm tới hạn: cúc không ra hoa mà tiếp tục ra lá, thân cao thêm.',
        'Khi cây đủ cao, tắt đèn; cúc ra hoa đúng thời điểm cần bán (dịp Tết), cành hoa dài, đẹp.',
      ],
      answer:
        '$13$ giờ khi không có đèn, $6{,}5$ giờ khi thắp đèn; thắp đèn để kìm hãm ra hoa, kéo dài sinh trưởng.',
    },
    {
      problem:
        'Lát cắt ngang một thân cây gỗ có đường kính $36$ cm (không kể vỏ) và đếm được $18$ vòng gỗ. Ước tính tuổi cây và trung bình mỗi năm thân dày thêm bao nhiêu (theo bán kính)?',
      steps: [
        'Mỗi năm tầng sinh mạch tạo một vòng gỗ, nên cây khoảng $18$ tuổi.',
        'Bán kính phần gỗ: $36 : 2 = 18$ cm.',
        'Trung bình mỗi năm bán kính tăng: $18 : 18 = 1$ cm.',
      ],
      answer: 'Cây khoảng $18$ tuổi; bán kính tăng trung bình $1$ cm mỗi năm.',
    },
    {
      problem:
        'Trong nuôi cấy mô, người ta muốn một khối mô sẹo trước hết tạo nhiều chồi, sau đó các chồi ra rễ. Nên điều chỉnh tỉ lệ auxin/cytokinin trong môi trường nuôi cấy thế nào?',
      steps: [
        'Cytokinin kích thích phân chia tế bào và tạo chồi; auxin kích thích tạo rễ.',
        'Giai đoạn tạo chồi: dùng môi trường có tỉ lệ auxin/cytokinin thấp.',
        'Giai đoạn ra rễ: chuyển chồi sang môi trường có tỉ lệ auxin/cytokinin cao.',
      ],
      answer: 'Tỉ lệ auxin/cytokinin thấp để tạo chồi, sau đó tỉ lệ cao để tạo rễ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Mô phân sinh bên có ở nhóm cây nào?',
      options: ['Cây Hai lá mầm', 'Cây Một lá mầm', 'Cả cây Một lá mầm và Hai lá mầm', 'Rêu'],
      answer: 0,
      hints: ['Mô phân sinh bên làm thân to ra theo năm, như ở cây gỗ.'],
      solution:
        'Mô phân sinh bên (tầng sinh mạch, tầng sinh bần) chỉ có ở cây Hai lá mầm; cây Một lá mầm có mô phân sinh lóng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loại mô phân sinh với vị trí của nó.',
      left: ['Mô phân sinh đỉnh', 'Mô phân sinh bên', 'Mô phân sinh lóng'],
      right: [
        'Chồi ngọn, chồi nách, đỉnh rễ',
        'Tầng sinh mạch, tầng sinh bần',
        'Gốc các lóng của cây Một lá mầm',
        'Lớp biểu bì của lá',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Tên của mỗi loại mô gợi ý vị trí của nó.'],
      solution:
        'Đỉnh: chồi ngọn, chồi nách, đỉnh rễ; bên: tầng sinh mạch, tầng sinh bần; lóng: gốc các lóng của cây Một lá mầm.',
    },
    {
      type: 'choice',
      prompt: 'Sinh trưởng thứ cấp làm cho',
      options: [
        'thân và rễ cây Hai lá mầm to ra (tăng đường kính)',
        'thân và rễ dài ra',
        'lóng của cây lúa dài ra',
        'lá to ra',
      ],
      answer: 0,
      hints: ['Sinh trưởng thứ cấp do mô phân sinh bên.'],
      solution:
        'Sinh trưởng thứ cấp do tầng sinh mạch, tầng sinh bần hoạt động, làm tăng đường kính thân, rễ cây Hai lá mầm.',
    },
    {
      type: 'multi',
      prompt: 'Những hormone nào thuộc nhóm ức chế sinh trưởng?',
      options: ['Abscisic acid', 'Ethylene', 'Auxin', 'Gibberellin', 'Cytokinin'],
      answers: [0, 1],
      hints: ['Một hormone gây ngủ của hạt, một hormone thúc quả chín, gây rụng lá.'],
      solution:
        'Nhóm ức chế: abscisic acid và ethylene. Auxin, gibberellin, cytokinin thuộc nhóm kích thích.',
    },
    {
      type: 'choice',
      prompt: 'Bấm ngọn cây làm các chồi bên phát triển vì',
      options: [
        'mất nguồn auxin ở chồi ngọn nên chồi bên hết bị ức chế',
        'cây tổng hợp thêm ethylene',
        'chồi bên nhận được nhiều abscisic acid hơn',
        'cây ngừng hút nước',
      ],
      answer: 0,
      hints: ['Hiện tượng chồi ngọn ức chế chồi bên gọi là ưu thế ngọn.'],
      solution:
        'Auxin từ chồi ngọn gây ưu thế ngọn, ức chế chồi bên; bấm ngọn loại bỏ nguồn auxin này, chồi bên phát triển thành cành.',
    },
    {
      type: 'choice',
      prompt: 'Thắp đèn vào ban đêm cho ruộng hoa cúc (cây ngày ngắn) trong mùa thu có tác dụng',
      options: [
        'ngăn cây ra hoa, để cây tiếp tục sinh trưởng, cho cành dài',
        'làm cây ra hoa sớm hơn',
        'diệt sâu hại',
        'sưởi ấm cho cây',
      ],
      answer: 0,
      hints: ['Đèn chia đêm dài thành hai đêm ngắn.'],
      solution:
        'Ánh sáng giữa đêm làm đêm liên tục ngắn lại; cây ngày ngắn cần đêm dài nên không ra hoa, tiếp tục ra lá và cao lên. Tắt đèn đúng lúc để cúc ra hoa vào dịp cần.',
    },
    {
      type: 'number',
      prompt:
        'Ngày dài $10$ giờ, người ta chiếu một chớp sáng đỏ đúng giữa đêm. Đêm liên tục dài nhất còn bao nhiêu giờ?',
      answer: 7,
      tolerance: 0.01,
      unit: 'giờ',
      hints: ['Đêm dài $24 - 10$ giờ, rồi bị chia đôi.'],
      solution: 'Đêm: $24 - 10 = 14$ giờ; chia đôi: $14 : 2 = 7$ giờ.',
    },
    {
      type: 'choice',
      prompt:
        'Thanh long là cây ngày dài. Vào mùa đông ngày ngắn, nông dân thắp đèn cho vườn thanh long nhằm',
      options: [
        'rút ngắn đêm liên tục để cây ra hoa, cho quả trái vụ',
        'làm cây ngừng ra hoa',
        'làm quả chín nhanh nhờ ethylene',
        'tăng nhiệt độ cho đất',
      ],
      answer: 0,
      hints: ['Cây ngày dài ra hoa khi đêm ngắn.'],
      solution:
        'Đèn làm đêm liên tục ngắn hơn đêm tới hạn; thanh long là cây ngày dài nên được kích thích ra hoa ngay trong mùa đông, cho quả trái vụ.',
    },
    {
      type: 'text',
      prompt: 'Sắc tố giúp lá cảm nhận quang chu kì có tên là gì?',
      accept: ['phytochrome', 'phitocrom', 'phytocrom', 'phitochrome'],
      hints: ['Sắc tố này có hai dạng $P_r$ và $P_{fr}$.'],
      solution:
        'Phytochrome, gồm dạng $P_r$ và $P_{fr}$ chuyển hoá cho nhau dưới ánh sáng đỏ và đỏ xa.',
    },
    {
      type: 'number',
      prompt:
        'Thân một cây gỗ có đường kính $30$ cm (không kể vỏ) và $12$ vòng gỗ. Trung bình mỗi năm bán kính phần gỗ tăng bao nhiêu xentimét?',
      answer: 1.25,
      tolerance: 0.001,
      unit: 'cm',
      hints: ['Bán kính bằng nửa đường kính; mỗi vòng gỗ ứng với một năm.'],
      solution: 'Bán kính: $30 : 2 = 15$ cm; mỗi năm: $15 : 12 = 1{,}25$ cm.',
    },
  ],
  takeaways: [
    'Thực vật sinh trưởng suốt đời ở những vị trí có mô phân sinh; chịu ảnh hưởng của nước, ánh sáng, nhiệt độ, chất khoáng.',
    'Mô phân sinh đỉnh gây sinh trưởng sơ cấp (dài ra); mô phân sinh bên của cây Hai lá mầm gây sinh trưởng thứ cấp (to ra, tạo vòng gỗ).',
    'Hormone kích thích: auxin, gibberellin, cytokinin; hormone ức chế: abscisic acid, ethylene. Các hormone tác động tương quan với nhau.',
    'Ra hoa phụ thuộc tuổi cây, nhiệt độ thấp (xuân hoá) và quang chu kì; cây ngày ngắn cần đêm dài, cây ngày dài cần đêm ngắn, cây trung tính không phụ thuộc.',
    'Phytochrome ở lá cảm nhận ánh sáng ($P_r \\rightleftharpoons P_{fr}$); lá tạo florigen chuyển đến đỉnh chồi để hình thành hoa.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành ngoài thiên nhiên: quan sát động vật ở vườn trường, công viên, ao hồ, bãi biển bằng mắt thường, kính lúp, ống nhòm; chụp ảnh, ghi chép tên, nơi sống, đặc điểm nhận biết vào nhật kí và xếp mỗi con vật vào nhóm động vật không xương sống hoặc có xương sống.',
  intro:
    'Chỉ cần mười phút ngồi yên bên bờ ao, em có thể thấy chuồn chuồn lượn sát mặt nước, ốc bươu bám cọng rau, ếch nhảy tõm xuống nước và cá đớp mồi. Mỗi con vật thuộc một nhóm khác nhau. Trong bài thực hành này, em sẽ là một nhà tự nhiên học: quan sát mà không làm hại con vật, ghi chép cẩn thận và phân loại những gì mình thấy.',
  objectives: [
    'Quan sát được động vật ngoài thiên nhiên bằng mắt thường, kính lúp, ống nhòm; chụp ảnh và ghi chép được các đặc điểm nhận biết, nơi sống.',
    'Nhận biết và xếp được các động vật quan sát được vào các nhóm: ruột khoang, giun, thân mềm, chân khớp, cá, lưỡng cư, bò sát, chim, thú.',
    'Có ý thức bảo vệ động vật và môi trường sống của chúng khi quan sát.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: kính lúp, ống nhòm, máy ảnh hoặc điện thoại, sổ ghi chép, bút, găng tay, mũ, nước uống.',
            'Địa điểm: vườn trường, công viên, cánh đồng, ao hồ, bãi biển hoặc vườn quốc gia; đi theo nhóm và có thầy cô hướng dẫn.',
            'Kẻ sẵn bảng nhật kí thực địa trong sổ (xem mẫu ở phần báo cáo).',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn và bảo vệ động vật',
          text: 'Không bắt, không làm hại động vật, không phá tổ, hang. Không chạm tay vào sứa, sâu róm, ong, rắn và các con vật lạ; quan sát chim, sóc từ xa bằng ống nhòm. Không đi một mình ra gần mép nước. Rửa tay sau khi quan sát.',
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
            'Đến điểm quan sát, đứng hoặc ngồi yên, giữ trật tự để không làm động vật sợ bỏ đi.',
            'Quan sát con vật: dùng mắt thường với con vật lớn, ở gần; kính lúp với con vật nhỏ (kiến, ong, nhện, giun); ống nhòm với con vật ở xa hoặc dễ hoảng sợ (chim, sóc).',
            'Chụp ảnh con vật và nơi nó sống (không dùng đèn chớp khi chụp gần).',
            'Ghi vào nhật kí: tên con vật (nếu biết), nơi gặp, đặc điểm nhận biết (có xương sống không, lớp phủ cơ thể, chân, cánh, vây, vỏ), con vật đang làm gì.',
            'Phân loại: xác định con vật có xương sống hay không, rồi đối chiếu đặc điểm để xếp vào nhóm.',
          ],
        },
        {
          type: 'table',
          caption: 'Câu hỏi giúp phân loại nhanh ngoài thực địa',
          head: ['Quan sát thấy', 'Nghĩ tới nhóm'],
          rows: [
            ['Cơ thể đối xứng tỏa tròn, có tua, sống ở nước', 'Ruột khoang'],
            ['Cơ thể dài, mềm, không có chân', 'Giun'],
            ['Cơ thể mềm, có vỏ đá vôi', 'Thân mềm'],
            ['Chân phân đốt, có vỏ cứng hoặc cánh', 'Chân khớp'],
            ['Có vây, sống dưới nước, thở bằng mang', 'Cá'],
            ['Da trần, ẩm, sống gần nước', 'Lưỡng cư'],
            ['Da khô, có vảy sừng', 'Bò sát'],
            ['Có lông vũ, mỏ sừng', 'Chim'],
            ['Có lông mao', 'Thú'],
          ],
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy làm một chuyến thực địa số: đi qua năm điểm quan sát, đọc ghi chép và xếp từng con vật vào nhóm để hoàn thành nhật kí.',
        },
      ],
    },
    {
      heading: 'Báo cáo kết quả',
      blocks: [
        {
          type: 'table',
          caption: 'Mẫu nhật kí thực địa',
          head: ['Tên động vật', 'Nơi gặp', 'Đặc điểm nhận biết', 'Nhóm'],
          rows: [
            ['Ếch đồng', 'Bờ ao', 'Da trần, ẩm; chân sau có màng bơi', 'Lưỡng cư'],
            ['Con nhện', 'Giữa hai cành cây', 'Bốn đôi chân phân đốt, giăng tơ', 'Chân khớp'],
            ['Chim sẻ', 'Bãi cỏ', 'Lông vũ, mỏ sừng ngắn', 'Chim'],
            ['Ốc sên', 'Lá cây trong vườn', 'Cơ thể mềm, vỏ đá vôi xoắn', 'Thân mềm'],
          ],
        },
        {
          type: 'list',
          items: [
            'Bộ ảnh các động vật đã quan sát, ghi tên và nhóm dưới mỗi ảnh.',
            'Thống kê: số loài động vật không xương sống và có xương sống quan sát được; nhóm nào gặp nhiều nhất.',
            'Nhận xét: môi trường nào có nhiều loài động vật nhất; cần làm gì để bảo vệ chúng.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Nhật kí thực địa số',
    instruction:
      'Chọn một điểm quan sát. Với mỗi con vật, đọc ghi chép, chọn nhóm phân loại rồi bấm "Ghi". Ghi đúng, con vật được thêm vào nhật kí và vào bảng thống kê số loài theo nhóm; ghi sai, em nhận gợi ý để thử lại.',
  },
  examples: [
    {
      problem:
        'Ở vườn trường, nhóm em gặp: con kiến, chim chào mào, con giun đất, con thằn lằn. Hãy chọn dụng cụ quan sát phù hợp cho mỗi con và xếp chúng vào nhóm.',
      steps: [
        'Kiến rất nhỏ: quan sát bằng kính lúp; thấy cơ thể chia ba phần, ba đôi chân phân đốt: nhóm Chân khớp.',
        'Chim chào mào đậu trên cành cao, dễ bay mất: quan sát bằng ống nhòm; thấy lông vũ, mỏ sừng: lớp Chim.',
        'Giun đất: quan sát bằng kính lúp; cơ thể dài, mềm, phân đốt: nhóm Giun.',
        'Thằn lằn: quan sát bằng mắt thường từ xa; da khô, phủ vảy sừng: lớp Bò sát.',
      ],
      answer:
        'Kiến (kính lúp, Chân khớp); chào mào (ống nhòm, Chim); giun đất (kính lúp, Giun); thằn lằn (mắt thường, Bò sát).',
    },
    {
      problem:
        'Kết quả nhật kí của một nhóm: ếch, cá rô phi, chuồn chuồn, ốc bươu, con đỉa, cua, nhện, chim sẻ. Có bao nhiêu loài không xương sống và bao nhiêu loài có xương sống?',
      steps: [
        'Không xương sống: chuồn chuồn, cua, nhện (Chân khớp), ốc bươu (Thân mềm), đỉa (Giun): 5 loài.',
        'Có xương sống: ếch (Lưỡng cư), cá rô phi (Cá), chim sẻ (Chim): 3 loài.',
        'Kiểm tra: $5 + 3 = 8$ loài, bằng số loài trong nhật kí.',
      ],
      answer: '5 loài không xương sống và 3 loài có xương sống.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Muốn quan sát một con chim đang đậu trên cành cây cao, em nên dùng',
      options: ['kính lúp', 'ống nhòm', 'kính hiển vi', 'vợt bắt chim'],
      answer: 1,
      hints: ['Con vật ở xa và dễ bay mất khi em lại gần.'],
      solution: 'Ống nhòm giúp nhìn rõ con vật ở xa mà không làm nó hoảng sợ; không được bắt chim.',
    },
    {
      type: 'choice',
      prompt: 'Dụng cụ nào giúp em thấy rõ các đôi chân phân đốt của con kiến?',
      options: ['Ống nhòm', 'Kính lúp', 'Thước dây', 'Đèn pin'],
      answer: 1,
      hints: ['Con kiến rất nhỏ và ở ngay gần em.'],
      solution: 'Kính lúp phóng to vật nhỏ ở gần như kiến, ong, nhện.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc nên làm khi quan sát động vật ngoài thiên nhiên.',
      options: [
        'Giữ trật tự, đứng hoặc ngồi yên',
        'Bắt con vật bỏ vào lọ mang về nhà',
        'Chụp ảnh và ghi chép đặc điểm',
        'Dùng gậy chọc vào tổ ong',
        'Đi theo nhóm, có thầy cô hướng dẫn',
      ],
      answers: [0, 2, 4],
      hints: ['Không làm hại con vật và giữ an toàn cho bản thân.'],
      solution:
        'Nên giữ trật tự, chụp ảnh, ghi chép, đi theo nhóm. Không bắt con vật mang về và không chọc tổ ong: vừa làm hại động vật vừa nguy hiểm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ghi chép trong nhật kí với nhóm động vật phù hợp.',
      left: [
        'Da trần, ẩm; nhảy từ bờ xuống ao',
        'Cơ thể hình dù, đối xứng tỏa tròn, có tua',
        'Hai mảnh vỏ đá vôi, cơ thể mềm',
        'Lông mao, đuôi xù, gặm quả bằng răng cửa',
      ],
      right: ['Thú', 'Lưỡng cư', 'Ruột khoang', 'Thân mềm', 'Bò sát'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
      ],
      hints: ['Một nhóm ở cột phải không được dùng.'],
      solution:
        'Da trần, ẩm: Lưỡng cư (ếch). Hình dù, tỏa tròn: Ruột khoang (sứa). Hai mảnh vỏ: Thân mềm (sò, trai). Lông mao, răng cửa: Thú (sóc). Bò sát không được dùng.',
    },
    {
      type: 'choice',
      prompt:
        'Ở bãi biển, em thấy một con vật có vỏ cứng, năm đôi chân phân đốt, đôi đầu là càng, bò ngang. Con vật thuộc nhóm nào?',
      options: ['Thân mềm', 'Chân khớp', 'Ruột khoang', 'Cá'],
      answer: 1,
      hints: ['Chú ý các đôi chân phân đốt.'],
      solution: 'Đó là con cua: chân phân đốt, có bộ xương ngoài cứng, thuộc nhóm Chân khớp.',
    },
    {
      type: 'number',
      prompt:
        'Nhật kí của An có 12 loài, trong đó có 4 loài có xương sống. An đã ghi được bao nhiêu loài động vật không xương sống?',
      answer: 8,
      unit: 'loài',
      hints: ['Mỗi loài thuộc một trong hai nhóm lớn.'],
      solution: 'Số loài không xương sống: $12 - 4 = 8$ loài.',
    },
    {
      type: 'choice',
      prompt: 'Thông tin nào KHÔNG cần ghi vào nhật kí thực địa?',
      options: [
        'Nơi gặp con vật',
        'Đặc điểm nhận biết của con vật',
        'Giá bán con vật ở chợ',
        'Con vật đang làm gì',
      ],
      answer: 2,
      hints: ['Nhật kí ghi lại những gì em quan sát được ngoài thiên nhiên.'],
      solution:
        'Nhật kí ghi tên, nơi gặp, đặc điểm, hoạt động của con vật để phân loại; giá bán không phải điều quan sát được ngoài thiên nhiên.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các động vật có xương sống trong danh sách quan sát được ở ao.',
      options: ['Cá rô phi', 'Chuồn chuồn', 'Ếch đồng', 'Ốc bươu', 'Con đỉa', 'Con rắn nước'],
      answers: [0, 2, 5],
      hints: ['Cá, lưỡng cư và bò sát đều có xương sống.'],
      solution:
        'Cá rô phi (Cá), ếch đồng (Lưỡng cư), rắn nước (Bò sát) có xương sống. Chuồn chuồn, ốc bươu, đỉa không có xương sống.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của buổi quan sát động vật ngoài thiên nhiên.',
      items: [
        'Phân loại con vật vào nhóm',
        'Quan sát và chụp ảnh con vật',
        'Chuẩn bị dụng cụ, kẻ bảng nhật kí',
        'Ghi chép đặc điểm, nơi gặp vào nhật kí',
        'Báo cáo kết quả với cả lớp',
      ],
      answer: [2, 1, 3, 0, 4],
      hints: ['Phải có ghi chép thì mới phân loại được.'],
      solution:
        'Chuẩn bị, quan sát và chụp ảnh, ghi chép vào nhật kí, phân loại, rồi báo cáo kết quả.',
    },
    {
      type: 'text',
      prompt:
        'Con vật bay được, có lông vũ, mỏ sừng, gặp trên bãi cỏ thuộc lớp động vật nào? (một từ)',
      accept: ['chim', 'lớp chim'],
      hints: ['Lông vũ chỉ có ở một lớp động vật.'],
      solution: 'Có lông vũ và mỏ sừng là đặc điểm của lớp Chim.',
    },
  ],
  takeaways: [
    'Quan sát động vật bằng mắt thường, kính lúp (con nhỏ) và ống nhòm (con ở xa); chụp ảnh và ghi nhật kí: tên, nơi gặp, đặc điểm, hoạt động.',
    'Phân loại hai bước: có xương sống hay không, rồi đối chiếu đặc điểm từng nhóm.',
    'Không bắt, không làm hại động vật và nơi ở của chúng; giữ an toàn khi quan sát.',
  ],
};

/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành nhận biết đường khử bằng phép thử Benedict, tinh bột bằng Lugol, lipid bằng phép thử nhũ tương và protein bằng phép thử Biuret, cách đọc màu và viết báo cáo.',
  intro:
    'Làm sao biết một mẫu thực phẩm có đường, tinh bột, chất béo hay protein khi mắt thường không phân biệt được? Mỗi nhóm phân tử sinh học có tính chất hoá học riêng, nên khi gặp thuốc thử phù hợp, mẫu sẽ đổi màu hoặc đổi trạng thái theo một cách đặc trưng. Trong bài này, em tiến hành các phép thử đó, đọc kết quả và đưa ra kết luận từ bằng chứng thí nghiệm.',
  objectives: [
    'Giải thích được nguyên lí của các phép thử Benedict, Lugol, nhũ tương và Biuret.',
    'Thực hiện đúng quy trình nhận biết đường khử, tinh bột, lipid và protein, đảm bảo an toàn.',
    'Đọc đúng màu sắc quan sát được và vận dụng kết quả để xác định thành phần của mẫu chưa biết.',
    'Viết được báo cáo thực hành, có mẫu đối chứng.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị và an toàn',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: ống nghiệm, kẹp ống nghiệm, cốc chịu nhiệt, pipet, ống nhỏ giọt, đèn cồn.',
            'Hoá chất: thuốc thử Benedict, dung dịch Lugol, dung dịch NaOH loãng, dung dịch $\\mathrm{CuSO_4}$ $1\\%$, cồn tuyệt đối, nước cất.',
            'Mẫu thử: dung dịch glucose, hồ tinh bột, dầu ăn, dung dịch albumin $1\\%$ hoặc lòng trắng trứng, và một số mẫu thực phẩm em muốn kiểm tra.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn trong phòng thí nghiệm',
          text: 'Đeo kính và găng tay khi dùng NaOH, $\\mathrm{CuSO_4}$. Cồn rất dễ cháy: để xa đèn cồn đang cháy. Khi đun, không hướng miệng ống nghiệm về phía người khác và không để dung dịch sôi trào. Tuyệt đối không nếm hoá chất hay mẫu thử.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mẫu đối chứng',
          text: 'Luôn làm song song một ống chứa nước cất. Ống này cho biết màu của thuốc thử khi không có chất cần tìm, để em có căn cứ so sánh với ống chứa mẫu.',
        },
      ],
    },
    {
      heading: 'Bốn phép thử',
      blocks: [
        {
          type: 'table',
          caption: 'Thuốc thử đặc trưng và kết quả',
          head: ['Chất cần tìm', 'Phép thử', 'Kết quả âm tính', 'Kết quả dương tính'],
          rows: [
            [
              'Đường khử (glucose)',
              'Benedict, đun nóng',
              'Xanh lam',
              'Xanh lục → vàng → cam → kết tủa đỏ gạch',
            ],
            ['Tinh bột', 'Lugol', 'Vàng nâu', 'Xanh tím'],
            ['Lipid', 'Nhũ tương (cồn rồi nước)', 'Trong suốt', 'Trắng sữa'],
            ['Protein', 'Biuret ($\\mathrm{NaOH}$ và $\\mathrm{CuSO_4}$)', 'Xanh lam', 'Xanh tím'],
          ],
        },
        {
          type: 'p',
          text: 'Nhận biết đường khử (phép thử Benedict). Thuốc thử chứa ion $\\mathrm{Cu^{2+}}$ màu xanh trong môi trường kiềm. Khi đun nóng, đường khử như glucose khử $\\mathrm{Cu^{2+}}$ thành $\\mathrm{Cu_2O}$ kết tủa màu đỏ gạch.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Trộn dung dịch mẫu với thuốc thử Benedict theo thể tích bằng nhau trong ống nghiệm.',
            'Đun cách thuỷ hoặc hơ ống trên đèn cồn, không để dung dịch sôi.',
            'Quan sát màu: càng nhiều đường khử, màu càng tiến dần về đỏ gạch.',
          ],
        },
        {
          type: 'p',
          text: 'Nhận biết tinh bột (phép thử Lugol). Dung dịch Lugol chứa iodine, có màu vàng nâu. Iodine kết hợp với tinh bột tạo màu xanh tím, không cần đun.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Cho vài mL mẫu vào ống nghiệm.',
            'Nhỏ vài giọt dung dịch Lugol, lắc nhẹ và quan sát màu.',
          ],
        },
        {
          type: 'p',
          text: 'Nhận biết lipid (phép thử nhũ tương). Lipid không tan trong nước nhưng tan trong cồn. Khi rót dung dịch lipid trong cồn vào nước, cồn hoà vào nước, còn lipid tách thành các giọt rất nhỏ làm ống nước trắng đục như sữa.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Cho hai giọt dầu ăn vào ống nghiệm cùng $5$ mL cồn tuyệt đối, lắc mạnh đến khi dầu tan hết.',
            'Rót dung dịch sang một ống nghiệm chứa sẵn vài mL nước.',
            'Quan sát: có lipid thì ống trắng sữa; không có lipid thì ống trong suốt.',
          ],
        },
        {
          type: 'p',
          text: 'Nhận biết protein (phép thử Biuret). Trong môi trường kiềm, các liên kết peptide tạo phức màu tím với ion $\\mathrm{Cu^{2+}}$. Phép thử chỉ dương tính với phân tử có từ hai liên kết peptide trở lên.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Cho dung dịch albumin $1\\%$ hoặc lòng trắng trứng và dung dịch NaOH loãng vào ống nghiệm.',
            'Thêm dung dịch $\\mathrm{CuSO_4}$ $1\\%$, lắc nhẹ.',
            'Sau vài phút, dung dịch chuyển dần từ xanh sang xanh tím nếu có protein.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao dầu ăn được pha bằng cồn?',
          text: 'Glucose và albumin tan trong nước nên được pha bằng nước. Lipid không tan trong nước, nên phải hoà trong cồn trước, nhờ vậy mới tạo được nhũ tương khi gặp nước.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Ngọt chưa hẳn là đường khử',
          text: 'Đường mía (sucrose) rất ngọt nhưng không phải là đường khử, nên phép thử Benedict âm tính. Nếu đun sucrose với acid để thuỷ phân thành glucose và fructose rồi trung hoà, phép thử sẽ dương tính.',
        },
        {
          type: 'p',
          text: 'Phòng thí nghiệm ảo bên dưới đơn giản hoá kết quả. Với mẫu thật, màu có thể nhạt hay đậm hơn, và một số mẫu có protein hoặc tinh bột có thể hơi đục khi gặp cồn; vì vậy em cần so sánh với mẫu đối chứng.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi nhóm viết báo cáo gồm: mục đích, nguyên lí, mẫu thử và cách tiến hành, kết quả, giải thích và kết luận. Ghi kết quả vào bảng theo mẫu sau (mỗi dấu … là một ô cần điền), chụp ảnh ống nghiệm nếu có thể.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng kết quả',
          head: ['Mẫu thử', 'Phép thử', 'Màu quan sát được', 'Kết luận'],
          rows: [
            ['Glucose', 'Benedict', '…', '…'],
            ['Hồ tinh bột', 'Lugol', '…', '…'],
            ['Dầu ăn', 'Nhũ tương', '…', '…'],
            ['Albumin', 'Biuret', '…', '…'],
            ['Nước cất (đối chứng)', 'Cả bốn phép thử', '…', '…'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm ảo',
    instruction:
      'Chọn mẫu và phép thử, làm từng bước theo đúng thứ tự rồi đọc màu trong ống. Kết quả được ghi vào phiếu. Với mỗi mẫu bí ẩn, hãy làm đủ bốn phép thử rồi kết luận mẫu chứa những nhóm chất nào.',
  },
  examples: [
    {
      problem:
        'Một mẫu thử cho kết quả: Benedict giữ màu xanh lam, Lugol chuyển xanh tím, nhũ tương trong suốt, Biuret giữ màu xanh lam. Mẫu chứa nhóm chất nào?',
      steps: [
        'Benedict âm tính nên không có đường khử.',
        'Lugol chuyển xanh tím nên có tinh bột.',
        'Phép thử nhũ tương trong suốt nên không có lipid.',
        'Biuret giữ xanh lam nên không có protein.',
      ],
      answer: 'Mẫu chỉ chứa tinh bột trong bốn nhóm đã thử; đây có thể là hồ tinh bột.',
    },
    {
      problem:
        'Một học sinh cho thuốc thử Benedict vào nước ép nho, không đun, thấy dung dịch vẫn xanh nên kết luận nước nho không có đường. Kết luận này có đúng không?',
      steps: [
        'Glucose chỉ khử được $\\mathrm{Cu^{2+}}$ của thuốc thử Benedict khi đun nóng.',
        'Học sinh đã bỏ qua bước đun nên phản ứng chưa xảy ra; màu xanh là màu của thuốc thử.',
        'Cần đun cách thuỷ ống nghiệm, đồng thời làm một ống đối chứng với nước cất để so sánh.',
      ],
      answer: 'Không đúng: quy trình thiếu bước đun nên chưa thể kết luận.',
    },
    {
      problem: 'Thử một đoạn peptide gồm $4$ amino acid bằng phép thử Biuret, kết quả sẽ thế nào?',
      steps: [
        'Chuỗi có $n$ amino acid có $n - 1$ liên kết peptide, tức $4 - 1 = 3$ liên kết.',
        'Phép thử dương tính khi có từ hai liên kết peptide trở lên.',
        'Vậy đoạn peptide này tạo phức màu với ion $\\mathrm{Cu^{2+}}$ trong môi trường kiềm.',
      ],
      answer: 'Phép thử dương tính: dung dịch chuyển sang màu xanh tím.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi chất cần nhận biết với phép thử phù hợp.',
      left: ['Glucose', 'Tinh bột', 'Dầu ăn', 'Albumin'],
      right: ['Biuret', 'Nhũ tương', 'Benedict', 'Lugol'],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 1],
        [3, 0],
      ],
      hints: ['Chỉ phép thử Benedict cần đun nóng; chỉ phép thử nhũ tương dùng cồn.'],
      solution: 'Glucose: Benedict. Tinh bột: Lugol. Dầu ăn: nhũ tương. Albumin (protein): Biuret.',
    },
    {
      type: 'choice',
      prompt: 'Kết quả dương tính của phép thử Benedict với dung dịch glucose đậm đặc là',
      options: [
        'dung dịch hoá xanh tím',
        'dung dịch trắng sữa',
        'xuất hiện kết tủa đỏ gạch',
        'dung dịch mất màu hoàn toàn',
      ],
      answer: 2,
      hints: ['Nhớ lại sản phẩm $\\mathrm{Cu_2O}$ tạo thành có màu gì.'],
      solution:
        'Glucose khử $\\mathrm{Cu^{2+}}$ thành $\\mathrm{Cu_2O}$ khi đun nóng, tạo kết tủa đỏ gạch. Xanh tím là màu của phép thử Lugol hoặc Biuret; trắng sữa là của phép thử nhũ tương.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của phép thử nhũ tương theo đúng thứ tự.',
      items: [
        'Rót dung dịch sang ống nghiệm chứa nước',
        'Lắc mạnh đến khi dầu tan hết',
        'Quan sát màu của ống nghiệm',
        'Cho hai giọt dầu ăn và $5$ mL cồn vào ống nghiệm',
      ],
      answer: [3, 1, 0, 2],
      hints: ['Dầu phải tan trong cồn trước khi gặp nước.'],
      solution:
        'Cho dầu và cồn vào ống, lắc đến khi dầu tan hết, rót sang ống nước rồi quan sát: có lipid thì ống hoá trắng sữa.',
    },
    {
      type: 'choice',
      prompt: 'Phép thử nhũ tương tạo màu trắng sữa vì',
      options: [
        'lipid phản ứng với nước tạo chất kết tủa màu trắng',
        'lipid không tan trong nước nên tách ra thành các giọt rất nhỏ khi cồn hoà vào nước',
        'cồn bị biến đổi thành chất màu trắng khi gặp nước',
        'nước hoà tan lipid thành dung dịch đục',
      ],
      answer: 1,
      hints: ['Lipid có tan trong nước không? Điều gì xảy ra với cồn khi gặp nước?'],
      solution:
        'Cồn tan vào nước, để lại các phân tử lipid vốn kị nước; chúng tụ lại thành những giọt li ti lơ lửng, làm ống nghiệm trắng đục như sữa.',
    },
    {
      type: 'choice',
      prompt: 'Nước cất được dùng trong mỗi phép thử để',
      options: [
        'làm tăng tốc độ phản ứng',
        'làm mẫu thử loãng hơn',
        'làm mẫu đối chứng để so sánh màu',
        'rửa thuốc thử dư',
      ],
      answer: 2,
      hints: ['Ống chứa nước cất có chất cần tìm hay không?'],
      solution:
        'Ống nước cất không chứa chất cần tìm, nên cho biết màu thuốc thử khi phản ứng không xảy ra, làm căn cứ so sánh với ống mẫu.',
    },
    {
      type: 'multi',
      prompt: 'Mẫu sữa tươi nguyên chất dương tính với những phép thử nào?',
      options: ['Benedict', 'Lugol', 'Nhũ tương', 'Biuret'],
      answers: [0, 2, 3],
      hints: ['Sữa có đường lactose, chất béo và protein casein. Sữa tươi có tinh bột không?'],
      solution:
        'Lactose là đường khử (Benedict dương tính), sữa có chất béo (nhũ tương dương tính) và protein (Biuret dương tính). Sữa nguyên chất không chứa tinh bột, nên Lugol âm tính.',
    },
    {
      type: 'choice',
      prompt: 'Dung dịch sucrose tinh khiết cho kết quả nào với phép thử Benedict?',
      options: [
        'Giữ màu xanh lam vì sucrose không phải đường khử',
        'Có kết tủa đỏ gạch vì sucrose là đường',
        'Chuyển xanh tím vì sucrose có nhiều glucose',
        'Trắng sữa vì sucrose không tan trong nước',
      ],
      answer: 0,
      hints: ['Không phải mọi loại đường đều là đường khử.'],
      solution:
        'Sucrose không có tính khử nên không khử được $\\mathrm{Cu^{2+}}$; dung dịch giữ màu xanh của thuốc thử.',
    },
    {
      type: 'text',
      prompt:
        'Cho vài giọt Lugol vào lát khoai tây thì thấy màu xanh tím. Lát khoai chứa nhiều chất gì?',
      accept: ['tinh bột', 'tinh bot', 'starch'],
      hints: ['Lugol là thuốc thử đặc trưng của một loại đường đa dự trữ ở thực vật.'],
      solution: 'Màu xanh tím với Lugol cho thấy lát khoai tây chứa nhiều tinh bột.',
    },
    {
      type: 'number',
      prompt:
        'Một phân tử peptide cho kết quả dương tính với phép thử Biuret phải có ít nhất bao nhiêu liên kết peptide?',
      answer: 2,
      hints: ['Phép thử dương tính khi phân tử có "từ ... liên kết peptide trở lên".'],
      solution:
        'Phép thử Biuret dương tính với phân tử có từ $2$ liên kết peptide trở lên, tức ít nhất $3$ amino acid.',
    },
    {
      type: 'choice',
      prompt:
        'Một học sinh dùng nước thay cho cồn để pha dầu ăn rồi làm phép thử nhũ tương. Vì sao thí nghiệm không có kết quả đúng?',
      options: [
        'Vì nước làm dầu bị biến tính',
        'Vì dầu không tan trong nước nên không tạo thành dung dịch, không tạo được nhũ tương như quy trình',
        'Vì nước phản ứng với dầu tạo chất mới',
        'Vì phép thử nhũ tương chỉ dùng cho protein',
      ],
      answer: 1,
      hints: ['Vai trò của cồn trong phép thử là gì?'],
      solution:
        'Lipid chỉ tan trong dung môi không phân cực như cồn. Pha trong nước thì dầu nổi thành lớp riêng, không phân tán thành các giọt nhỏ khi rót sang ống nước.',
    },
    {
      type: 'multi',
      prompt:
        'Một mẫu cho kết quả: Benedict có kết tủa đỏ gạch, Lugol màu vàng nâu, nhũ tương trong suốt, Biuret màu xanh tím. Mẫu chứa những nhóm chất nào?',
      options: ['Đường khử', 'Tinh bột', 'Lipid', 'Protein'],
      answers: [0, 3],
      hints: ['Đọc từng phép thử: phép thử nào cho kết quả khác màu của thuốc thử ban đầu?'],
      solution:
        'Kết tủa đỏ gạch: có đường khử. Lugol giữ màu vàng nâu: không có tinh bột. Trong suốt: không có lipid. Xanh tím với Biuret: có protein.',
    },
  ],
  takeaways: [
    'Phép thử Benedict (đun nóng) nhận biết đường khử: từ xanh lam chuyển dần tới kết tủa đỏ gạch.',
    'Dung dịch Lugol nhận biết tinh bột: màu vàng nâu chuyển thành xanh tím.',
    'Phép thử nhũ tương nhận biết lipid: rót dung dịch trong cồn vào nước, ống hoá trắng sữa.',
    'Phép thử Biuret nhận biết protein: dung dịch chuyển từ xanh lam sang xanh tím, cần từ hai liên kết peptide trở lên.',
    'Luôn làm mẫu đối chứng với nước cất, đúng trình tự, và kết luận dựa trên màu quan sát được.',
  ],
};

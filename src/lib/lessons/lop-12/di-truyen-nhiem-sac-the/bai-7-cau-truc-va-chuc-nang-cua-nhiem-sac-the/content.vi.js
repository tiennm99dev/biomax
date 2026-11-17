/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu trúc hiển vi và siêu hiển vi của nhiễm sắc thể ở sinh vật nhân thực: nucleosome, các mức xoắn, vùng nguyên nhiễm sắc và dị nhiễm sắc; chức năng mang, bảo quản và truyền đạt thông tin di truyền của nhiễm sắc thể.',
  intro:
    'Mỗi tế bào người có $46$ phân tử DNA, nối lại dài khoảng $2$ m, vậy mà vẫn nằm gọn trong một nhân chỉ rộng vài micromet. Nhờ đâu DNA được xếp gọn như vậy mà các gene vẫn được phiên mã khi cần?',
  objectives: [
    'Mô tả được cấu trúc hiển vi của nhiễm sắc thể (NST) ở kì giữa: chromatid, tâm động, đầu mút.',
    'Trình bày được các mức cấu trúc siêu hiển vi của NST: nucleosome, sợi cơ bản, sợi nhiễm sắc, vùng xếp cuộn, chromatid.',
    'Phân biệt được vùng nguyên nhiễm sắc và vùng dị nhiễm sắc.',
    'Nêu được chức năng của NST: mang, bảo quản và truyền đạt thông tin di truyền.',
  ],
  sections: [
    {
      heading: 'Nhiễm sắc thể và bộ nhiễm sắc thể',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhiễm sắc thể',
          text: 'Nhiễm sắc thể là cấu trúc nằm trong nhân tế bào, bắt màu với thuốc nhuộm kiềm tính, được cấu tạo từ DNA và protein (chủ yếu là histone). NST là vật chất di truyền ở cấp độ tế bào.',
        },
        {
          type: 'list',
          items: [
            'Ở sinh vật nhân sơ, vật chất di truyền là một phân tử DNA kép, dạng vòng, chưa liên kết với histone như ở sinh vật nhân thực.',
            'Ở sinh vật nhân thực, mỗi loài có bộ NST đặc trưng về số lượng, hình thái và cấu trúc. Trong tế bào sinh dưỡng, NST tồn tại thành từng cặp tương đồng (bộ lưỡng bội $2n$); giao tử chỉ chứa một NST của mỗi cặp (bộ đơn bội $n$). Ví dụ: người $2n = 46$, ruồi giấm $2n = 8$, lúa $2n = 24$.',
            'Bộ NST gồm các NST thường và cặp NST giới tính.',
          ],
        },
        {
          type: 'p',
          text: 'NST quan sát rõ nhất ở kì giữa của phân bào, khi co xoắn cực đại. Lúc này mỗi NST gồm hai chromatid chị em dính nhau ở tâm động.',
        },
        {
          type: 'table',
          caption: 'Các vùng trình tự đặc biệt trên NST',
          head: ['Vùng', 'Vị trí', 'Vai trò'],
          rows: [
            [
              'Tâm động',
              'Eo thứ nhất, chia NST thành hai cánh',
              'Nơi gắn với thoi phân bào, giúp NST di chuyển về các cực của tế bào',
            ],
            [
              'Đầu mút (telomere)',
              'Hai đầu tận cùng của NST',
              'Gồm nhiều trình tự nucleotide lặp lại; bảo vệ NST, giúp các NST không dính vào nhau',
            ],
            [
              'Trình tự khởi đầu tái bản',
              'Nhiều điểm dọc theo phân tử DNA',
              'Nơi bắt đầu tái bản DNA',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Dựa vào vị trí của tâm động, NST được chia thành NST tâm cân (tâm động ở giữa, hai cánh dài bằng nhau), NST tâm lệch (hai cánh dài ngắn khác nhau) và NST tâm mút (tâm động nằm gần một đầu mút).',
        },
      ],
    },
    {
      heading: 'Cấu trúc siêu hiển vi của nhiễm sắc thể',
      blocks: [
        {
          type: 'p',
          text: 'Đơn vị cấu trúc cơ bản của NST là nucleosome: một đoạn DNA khoảng $146$ cặp nucleotide quấn quanh khối cầu gồm $8$ phân tử histone (thuộc $4$ loại). Các nucleosome nối nhau bằng đoạn DNA nối, tạo chuỗi nucleosome gọi là sợi cơ bản.',
        },
        {
          type: 'table',
          caption: 'Các mức xoắn của NST (đường kính gần đúng)',
          head: ['Mức cấu trúc', 'Đường kính', 'Đặc điểm'],
          rows: [
            ['Phân tử DNA', '$2$ nm', 'Chuỗi xoắn kép'],
            ['Sợi cơ bản (chuỗi nucleosome)', '$10$ nm', 'DNA quấn quanh các khối histone'],
            ['Sợi nhiễm sắc', '$30$ nm', 'Sợi cơ bản xoắn tiếp'],
            [
              'Vùng xếp cuộn',
              '$300$ nm',
              'Các vòng sợi nhiễm sắc gắn vào khung protein (condensin)',
            ],
            ['Chromatid', '$700$ nm', 'Vùng xếp cuộn xoắn tiếp'],
            ['NST kì giữa', '$1400$ nm', 'Hai chromatid chị em dính ở tâm động'],
          ],
        },
        {
          type: 'p',
          text: 'Ở kì đầu, các protein condensin tạo nên khung NST; sợi nhiễm sắc luồn qua các vòng protein thành những vòng nhô ra khỏi khung, làm NST ngắn lại và to ra. Đến kì giữa, NST co xoắn cực đại, ngắn hơn phân tử DNA khoảng $15\\,000$ – $20\\,000$ lần, nhờ đó di chuyển trên thoi phân bào mà không bị rối hay đứt.',
        },
        {
          type: 'table',
          caption: 'Hai loại vùng chất nhiễm sắc ở kì trung gian',
          head: ['Đặc điểm', 'Vùng nguyên nhiễm sắc', 'Vùng dị nhiễm sắc'],
          rows: [
            ['Cách xếp nucleosome', 'Các nucleosome nằm xa nhau', 'Các nucleosome xếp sát nhau'],
            [
              'Hoạt động gene',
              'Thường chứa các gene đang hoạt động',
              'Không chứa gene hoặc chứa gene bất hoạt',
            ],
            ['Ví dụ', 'Phần lớn các vùng mang gene', 'Tâm động, đầu mút'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Xoắn và tháo xoắn',
          text: 'Mức độ đóng xoắn cũng là một cách điều hoà hoạt động gene: vùng tháo xoắn để lộ DNA cho enzyme tái bản và phiên mã bám vào; vùng xoắn chặt thì gene thường không được phiên mã.',
        },
      ],
    },
    {
      heading: 'Chức năng của nhiễm sắc thể',
      blocks: [
        {
          type: 'list',
          items: [
            'Mang thông tin di truyền: các gene nằm nối tiếp nhau dọc theo NST. Vị trí xác định của một gene trên NST gọi là locus. Ở cùng một locus trên cặp NST tương đồng có thể có các phiên bản khác nhau của gene, gọi là các allele.',
            'Bảo quản thông tin di truyền: DNA liên kết với histone và xoắn chặt nên được bảo vệ; ở sinh vật lưỡng bội mỗi gene có hai bản sao, nên đột biến ở một bản thường ít gây hại.',
            'Truyền đạt thông tin di truyền: nhờ sự nhân đôi và phân li của NST trong nguyên phân, thông tin di truyền được giữ nguyên qua các thế hệ tế bào; nhờ sự vận động của NST trong giảm phân và thụ tinh, gene được truyền cho đời sau trong những tổ hợp mới.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'NST là vật chất di truyền ở cấp độ tế bào',
          text: 'Sự vận động của NST trong nguyên phân, giảm phân và thụ tinh là cơ sở tế bào học của sự di truyền các tính trạng qua các thế hệ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thu phóng nhiễm sắc thể',
    instruction:
      'Kéo thanh thu phóng từ phân tử DNA đến NST kì giữa và đọc đường kính của từng mức. Ở mức sợi cơ bản, chuyển giữa vùng nguyên nhiễm sắc và dị nhiễm sắc. Chọn một kì của chu kì tế bào để xem NST khi đó ở dạng nào.',
  },
  examples: [
    {
      problem:
        'Một đoạn sợi cơ bản bắt đầu và kết thúc bằng nucleosome, gồm $20$ nucleosome; mỗi đoạn DNA nối giữa hai nucleosome liền kề dài $50$ cặp nucleotide. Tính số cặp nucleotide của đoạn DNA, số phân tử histone trong các nucleosome và chiều dài đoạn DNA khi duỗi thẳng (mỗi cặp nucleotide dài $0{,}34$ nm).',
      steps: [
        'Số cặp nucleotide quấn trong các nucleosome: $20 \\cdot 146 = 2920$.',
        'Có $20 - 1 = 19$ đoạn nối: $19 \\cdot 50 = 950$ cặp nucleotide.',
        'Tổng: $2920 + 950 = 3870$ cặp nucleotide.',
        'Số phân tử histone: $20 \\cdot 8 = 160$.',
        'Chiều dài: $3870 \\cdot 0{,}34 = 1315{,}8$ nm.',
      ],
      answer: '$3870$ cặp nucleotide, $160$ phân tử histone, dài $1315{,}8$ nm.',
    },
    {
      problem:
        'Một NST ở kì giữa dài $5$ µm; mỗi chromatid của nó chứa một phân tử DNA dài $5$ cm. Phân tử DNA đó đã co ngắn bao nhiêu lần?',
      steps: [
        'Đổi về cùng đơn vị: $5$ cm $= 50\\,000$ µm.',
        'Số lần co ngắn: $50\\,000 : 5 = 10\\,000$.',
      ],
      answer: 'Khoảng $10\\,000$ lần.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Một đoạn sợi cơ bản bắt đầu và kết thúc bằng nucleosome, gồm $10$ nucleosome, mỗi đoạn nối dài $40$ cặp nucleotide. Đoạn DNA này có bao nhiêu cặp nucleotide?',
      answer: 1820,
      hints: [
        'Mỗi nucleosome quấn $146$ cặp nucleotide.',
        '$10$ nucleosome có $9$ đoạn nối ở giữa.',
      ],
      solution: '$10 \\cdot 146 + 9 \\cdot 40 = 1460 + 360 = 1820$ cặp nucleotide.',
    },
    {
      type: 'number',
      prompt: 'Có bao nhiêu phân tử histone trong lõi của $25$ nucleosome?',
      answer: 200,
      hints: ['Mỗi khối lõi nucleosome gồm $8$ phân tử histone.'],
      solution: '$25 \\cdot 8 = 200$ phân tử histone.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các mức cấu trúc của NST theo đường kính tăng dần.',
      items: ['Sợi nhiễm sắc', 'Chromatid', 'Phân tử DNA', 'Vùng xếp cuộn', 'Sợi cơ bản'],
      answer: [2, 4, 0, 3, 1],
      hints: ['Mức nhỏ nhất là chuỗi xoắn kép; sợi cơ bản là chuỗi nucleosome.'],
      solution:
        'Phân tử DNA ($2$ nm) → sợi cơ bản ($10$ nm) → sợi nhiễm sắc ($30$ nm) → vùng xếp cuộn ($300$ nm) → chromatid ($700$ nm).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi mức cấu trúc với đường kính gần đúng của nó.',
      left: ['Sợi cơ bản', 'Sợi nhiễm sắc', 'Vùng xếp cuộn', 'Chromatid'],
      right: ['$10$ nm', '$30$ nm', '$300$ nm', '$700$ nm'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Mỗi mức xoắn sau to hơn mức trước.'],
      solution:
        'Sợi cơ bản $10$ nm, sợi nhiễm sắc $30$ nm, vùng xếp cuộn $300$ nm, chromatid $700$ nm.',
    },
    {
      type: 'choice',
      prompt: 'Đặc điểm nào đúng với vùng dị nhiễm sắc?',
      options: [
        'Nucleosome xếp sát nhau, không chứa gene hoặc chứa gene bất hoạt',
        'Nucleosome nằm xa nhau, chứa nhiều gene đang phiên mã',
        'Chỉ gồm DNA, không có histone',
        'Chỉ xuất hiện ở sinh vật nhân sơ',
      ],
      answer: 0,
      hints: ['Ở vùng xếp chặt, enzyme khó tiếp cận DNA.'],
      solution:
        'Vùng dị nhiễm sắc có các nucleosome xếp sát nhau, không chứa gene hoặc chứa gene bất hoạt (như tâm động, đầu mút).',
    },
    {
      type: 'text',
      prompt: 'Vị trí xác định của một gene trên nhiễm sắc thể được gọi là gì?',
      accept: ['locus', 'lôcut', 'locut'],
      hints: ['Thuật ngữ gốc Latin, nghĩa là "vị trí".'],
      solution: 'Vị trí của gene trên NST gọi là locus.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về chức năng của nhiễm sắc thể.',
      options: [
        'NST mang các gene xếp nối tiếp nhau, mỗi gene ở một locus',
        'Nhờ nguyên phân, thông tin di truyền được giữ nguyên qua các thế hệ tế bào',
        'Nhờ giảm phân và thụ tinh, gene được truyền cho đời sau trong các tổ hợp mới',
        'NST trực tiếp tổng hợp protein trong tế bào chất',
      ],
      answers: [0, 1, 2],
      hints: ['Protein được tổng hợp ở ribosome.'],
      solution:
        'NST mang, bảo quản và truyền đạt thông tin di truyền qua nguyên phân, giảm phân và thụ tinh. Protein được tổng hợp ở ribosome, không phải ở NST.',
    },
    {
      type: 'number',
      prompt:
        'Một NST kì giữa dài $4$ µm chứa trong mỗi chromatid một phân tử DNA dài $6$ cm. DNA đã co ngắn bao nhiêu lần?',
      answer: 15000,
      hints: ['Đổi $6$ cm ra micromet: $1$ cm $= 10\\,000$ µm.'],
      solution: '$6$ cm $= 60\\,000$ µm; $60\\,000 : 4 = 15\\,000$ lần.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao ở kì giữa NST cần co xoắn cực đại?',
      options: [
        'Để NST gọn, di chuyển trên thoi phân bào và phân li chính xác về hai cực mà không bị rối',
        'Để các gene trên NST phiên mã mạnh nhất',
        'Để DNA dễ tái bản',
        'Để histone tách khỏi DNA',
      ],
      answer: 0,
      hints: ['Ở kì giữa, NST sắp phân li về hai cực.'],
      solution:
        'Co xoắn cực đại làm NST ngắn, gọn, nhờ đó di chuyển và phân li chính xác. Tái bản và phiên mã cần NST tháo xoắn (kì trung gian).',
    },
    {
      type: 'choice',
      prompt:
        'Một NST kì giữa có tâm động nằm ở chính giữa, hai cánh dài bằng nhau. Đó là loại NST nào?',
      options: ['NST tâm cân', 'NST tâm lệch', 'NST tâm mút', 'NST giới tính'],
      answer: 0,
      hints: ['NST được phân loại theo vị trí của tâm động.'],
      solution:
        'Tâm động ở giữa, hai cánh bằng nhau: NST tâm cân. Tâm lệch có hai cánh dài ngắn khác nhau; tâm mút có tâm động gần một đầu mút.',
    },
  ],
  takeaways: [
    'NST nhân thực gồm DNA và histone; đơn vị cơ bản là nucleosome ($8$ histone, khoảng $146$ cặp nucleotide quấn quanh).',
    'Các mức xoắn: DNA $2$ nm → sợi cơ bản $10$ nm → sợi nhiễm sắc $30$ nm → vùng xếp cuộn $300$ nm → chromatid $700$ nm.',
    'Ở kì giữa NST co xoắn cực đại, gồm hai chromatid chị em dính ở tâm động; hai đầu có đầu mút.',
    'Vùng nguyên nhiễm sắc (nucleosome thưa) chứa gene hoạt động; vùng dị nhiễm sắc (nucleosome sát) không chứa gene hoặc gene bất hoạt.',
    'NST mang, bảo quản và truyền đạt thông tin di truyền qua nguyên phân, giảm phân và thụ tinh.',
  ],
};

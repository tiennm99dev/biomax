# BioMax

Sinh học tương tác cho học sinh Việt Nam lớp 6-12, theo bộ sách Kết nối tri thức với cuộc sống (KNTT): mạch Sinh học của Khoa học tự nhiên 6-9 và Sinh học 10-12 cùng các Chuyên đề học tập. Học qua mô hình tương tác: sơ đồ tế bào và cơ quan bấm gọi tên, bảng Punnett, phả hệ, lưới thức ăn, phiên mã – dịch mã và đồ thị quần thể.

## Status

Mọi bài trong sách đều có trang; bài chưa soạn hiện dạng "Sắp ra mắt" (noindex). Bài mẫu đã soạn: Lớp 10 — Bài 4. Các nguyên tố hóa học và nước.

- `/` chọn lớp; `/lop-N/` các chương theo tập; `/lop-N/<chương>/` các bài; `/lop-N/<chương>/<bài>/` bài học.
- `/te-bao/`, `/di-truyen/`, `/sinh-thai/`, ... gom chương của một mạch kiến thức qua mọi lớp.
- `/_gallery/` (noindex) hiển thị mọi thành phần trực quan để rà soát.

Live URL: https://tiennm99dev.github.io/biomax/

## Develop

Yêu cầu: Node 24+, npm.

```sh
npm install
npm run dev           # http://localhost:5173/biomax/
npm run lint          # ESLint (eslint-plugin-svelte)
npm run format:check  # Prettier --check
npm run check         # svelte-kit sync + svelte-check --fail-on-warnings (JSDoc strict)
npm test              # Vitest
npm run build         # Static output → build/
npm run size-report   # Kích thước gzip JS của từng bài (sau build)
npm run stubs         # Đếm bài chưa soạn theo lớp, chương
npm run preview       # Serve build/
```

`npm run stubs -- lop-10/<chương>` chỉ đếm một chương và liệt kê bài còn trống; `--strict` trả mã 1 khi phạm vi đó còn bài chưa soạn.

## Deploy

CI (`.github/workflows/ci.yml`) chạy lint, format:check, check, test, build và size-report cho mỗi push/PR; deploy (`.github/workflows/deploy.yml`) chạy lại toàn bộ các bước đó rồi đưa bản build lên GitHub Pages từ `main`, với `SITE_BASE=/<tên repo>`. Xem `RUNBOOK.md` để rollback.

## Architecture

BioMax là site anh em của [MathMax](https://github.com/tiennm99dev/mathmax) và dùng chung phần lõi với nó.

- **Phần dùng chung (đồng bộ)**: `src/lib/core/`, các engine `src/lib/*-engine/`, `src/routes/`, `src/params/`, `scripts/`, config, workflow và skill soạn bài được chép từ MathMax bằng `scripts/sync-core.sh` của MathMax. Mỗi file có dòng ghi chú "Synced from tiennm99dev/mathmax"; commit nguồn nằm trong `CORE_VERSION`. Không sửa các file này ở đây: sửa ở MathMax, commit, rồi chạy `scripts/sync-core.sh <đường dẫn tới biomax>` trong MathMax.
- **Phần riêng của BioMax**: `src/lib/curriculum/lop-6.json` … `lop-12.json` và `strands.json` (sinh một lần từ manifest bằng `node scripts/import-curriculum.js --grades 6-12 <manifest>`, sau đó sửa tay), `src/lib/curriculum/curriculum.test.js`, `src/lib/curriculum/legacy-redirects.js` (rỗng), `src/lib/i18n/site.vi.js` (tên site, các mạch kiến thức), `src/lib/domain/`, `src/lib/lessons/` và `static/`.
- **Static**: SvelteKit + `@sveltejs/adapter-static`, cấu hình trong `vite.config.js`: `paths.base` là `/biomax` (tên package; đổi bằng `SITE_BASE`), CSP chế độ `hash`, Tailwind 4, Be Vietnam Pro, KaTeX render sẵn lúc prerender.
- **Language**: JavaScript only (Svelte 5 runes, JSDoc qua `jsconfig.json` với `checkJs: true`).
- **Thành phần Sinh học** (`src/lib/domain/`): mỗi thành phần có engine thuần (không DOM) kèm test Vitest và một demo `<tên>.gallery.svelte` hiện ở `/_gallery/`. Props được mô tả bằng JSDoc ở đầu mỗi file `.svelte`.

| Thành phần             | Engine          | Dùng cho                                                                                                         |
| ---------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| `diagram-hotspots`     | `diagrams.js`   | sơ đồ SVG có số: tế bào động vật, tế bào thực vật, phân tử nước, tim người; chế độ tìm hiểu, gọi tên, tìm vị trí |
| `punnett-square`       | `genetics.js`   | giao tử, bảng Punnett, tỉ lệ kiểu gene và kiểu hình; 1-3 cặp gene, trội không hoàn toàn, gene trên X             |
| `pedigree-chart`       | `pedigree.js`   | sơ đồ phả hệ chuẩn; quy luật di truyền phù hợp (trội, lặn, trên NST thường hay X) và kiểu gene có thể có         |
| `food-web`             | `food-web.js`   | lưới thức ăn theo bậc dinh dưỡng, liệt kê chuỗi thức ăn, loại bỏ loài và hệ quả, năng lượng qua các bậc          |
| `dna-codon-translator` | `codons.js`     | mạch mã hoá, mạch khuôn, mRNA, bảng mã di truyền chuẩn, dịch mã; đột biến điểm và hệ quả lên chuỗi polypeptide   |
| `population-chart`     | `population.js` | tăng trưởng chữ J và chữ S với sức chứa K, thời gian nhân đôi; tháp tuổi phát triển, ổn định, suy thoái          |

Để thêm một sơ đồ cho `diagram-hotspots`, khai báo hình và các bộ phận (toạ độ điểm bấm, tên, cách viết khác, chức năng) trong `diagrams.js`; test kiểm tra các điểm bấm nằm trong hình và không chồng nhau.

## Adding a lesson

Hợp đồng của một bài học (thư mục, schema `content.vi.js`, số lượng tối thiểu, kiểm tra trước khi merge) là của MathMax và giống hệt ở đây: xem [phần "Adding a lesson" trong README của MathMax](https://github.com/tiennm99dev/mathmax#adding-a-lesson). Agent soạn bài theo brief đồng bộ ở `.claude/skills/write-lesson/SKILL.md`.

Ở BioMax:

- Người soạn một chương chỉ thêm file trong `src/lib/lessons/lop-N/<chương>/`; slug lấy nguyên từ `src/lib/curriculum/lop-N.json`.
- Dùng thành phần Sinh học ở `src/lib/domain/` (import qua `#lib/domain/...`) trước khi tự vẽ; xem chúng chạy ở `/_gallery/`. Thành phần mới cho nhiều chương được thêm vào `src/lib/domain/` kèm engine, test và demo gallery.
- Dùng thuật ngữ của sách KNTT (DNA, RNA, amino acid, nucleotide, tên nguyên tố theo IUPAC) và không đặt chữ tiếng Việt có dấu trong TeX (KaTeX không có font cho chúng).
- Bài mẫu: `src/lib/lessons/lop-10/thanh-phan-hoa-hoc-cua-te-bao/bai-4-cac-nguyen-to-hoa-hoc-va-nuoc/` — xếp nguyên tố đa lượng, vi lượng trên thước logarit (`widget.svelte` với `engine.js` có test) và widget phụ gọi tên các phần của phân tử nước trên `diagram-hotspots`.

```sh
npx vitest run src/lib/lessons/lop-N/<chương>
npm run lint && npm run format:check && npm run check
npm test
npm run build && npm run size-report
npm run stubs -- lop-N/<chương>   # phải báo 0 stubs
```

## License

Apache-2.0. Xem `LICENSE`.

# Changelog

All notable changes to **SinhSôi** are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: 4-digit MAJOR.MINOR.PATCH.MICRO.

## [Unreleased]

### Added

- Trang "Thuật ngữ" (`/thuat-ngu/`): thuật ngữ Sinh học của từng lớp xếp theo bảng chữ cái, kèm tên tiếng Anh, định nghĩa ngắn và liên kết tới bài học; tìm kiếm không cần gõ dấu. Liên kết ở thanh đầu trang, trang chủ, trang lớp, và khối "Thuật ngữ trong bài" ở cuối mỗi bài có thuật ngữ. Dữ liệu từng lớp nằm ở `src/lib/glossary/lop-<N>.js` (lớp 6-12), hiện còn rỗng: trang hiện "Thuật ngữ đang được cập nhật." cho tới khi có dữ liệu.

### Changed

- Đổi tên site từ BioBuddy thành SinhSôi: repo `tiennm99dev/sinhsoi`, địa chỉ mới `https://tiennm99dev.github.io/sinhsoi/`. Các site anh em cũng đổi sang tên tiếng Việt: MathMate thành ToánTốt, AlgorithmAlly thành TinTưởng, PhysicsFriend thành LíLẽ, ChemCoach thành HoáHợp. Tiến độ "đã làm" lưu trong trình duyệt dưới cả hai tên cũ (BioMax và BioBuddy) được chuyển sang tên mới ở lần mở bài đầu tiên.
- Đổi tên site từ BioMax thành BioBuddy: repo `tiennm99dev/biobuddy`, địa chỉ mới `https://tiennm99dev.github.io/biobuddy/`. Site anh em MathMax đổi thành MathMate. Tiến độ "đã làm" lưu trong trình duyệt dưới tên cũ được chuyển sang tên mới ở lần mở bài đầu tiên.

## [0.0.1.0] - 2026-10-25

### Added

- Site Sinh học lớp 6-12 theo KNTT, dựng trên phần lõi đồng bộ từ MathMax: trang chọn lớp, hub lớp, chương, mạch kiến thức và trang "Sắp ra mắt" cho 201 bài trong 43 chương.
- Chương trình học `lop-6.json` … `lop-12.json` nhập từ manifest Sinh học (KHTN 6-9 mạch Sinh học, Sinh học 10-12 và Chuyên đề học tập).
- Thành phần Sinh học trong `src/lib/domain/`: `diagram-hotspots` (tế bào động vật, thực vật, phân tử nước, tim người), `punnett-square`, `pedigree-chart`, `food-web`, `dna-codon-translator`, `population-chart`, mỗi thành phần có engine thuần kèm test và demo ở `/_gallery/`.
- Bài mẫu Lớp 10 — Bài 4. Các nguyên tố hóa học và nước: xếp nguyên tố đa lượng, vi lượng trên thước logarit và sơ đồ phân tử nước bấm gọi tên.
- Apache-2.0 LICENSE, README, RUNBOOK; CI và deploy GitHub Pages từ `main`.

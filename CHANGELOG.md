# Changelog

All notable changes to **BioMax** are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: 4-digit MAJOR.MINOR.PATCH.MICRO.

## [Unreleased]

## [0.0.1.0] - 2026-10-25

### Added

- Site Sinh học lớp 6-12 theo KNTT, dựng trên phần lõi đồng bộ từ MathMax: trang chọn lớp, hub lớp, chương, mạch kiến thức và trang "Sắp ra mắt" cho 201 bài trong 43 chương.
- Chương trình học `lop-6.json` … `lop-12.json` nhập từ manifest Sinh học (KHTN 6-9 mạch Sinh học, Sinh học 10-12 và Chuyên đề học tập).
- Thành phần Sinh học trong `src/lib/domain/`: `diagram-hotspots` (tế bào động vật, thực vật, phân tử nước, tim người), `punnett-square`, `pedigree-chart`, `food-web`, `dna-codon-translator`, `population-chart`, mỗi thành phần có engine thuần kèm test và demo ở `/_gallery/`.
- Bài mẫu Lớp 10 — Bài 4. Các nguyên tố hóa học và nước: xếp nguyên tố đa lượng, vi lượng trên thước logarit và sơ đồ phân tử nước bấm gọi tên.
- Apache-2.0 LICENSE, README, RUNBOOK; CI và deploy GitHub Pages từ `main`.

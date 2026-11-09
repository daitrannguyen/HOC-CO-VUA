# Học cờ vua

Bài học cờ vua tương tác cho trẻ 6–11 tuổi.

## Bài học

- [`co-vua-khai-cuoc.html`](co-vua-khai-cuoc.html): **3 nguyên tắc khai cuộc** (Chiếm giữa – Ra quân – Giấu Vua). Có thêm mục **Mẹo**: chiếm trung tâm, bẫy chiếu hết 2 nước, bẫy Légal và các mẹo khác. Mở trực tiếp bằng trình duyệt; cần Internet để tải chess.js.

## Chương trình 27 bài

Phần 0 Nhập môn (NM1–8: bàn cờ, cách đi từng quân, chiếu – chiếu hết – nhập thành – hòa) · Phần 1 Khai cuộc (Bài 1–4) · Phần 2 Chiến thuật (Bài 5–10, 17) · Phần 3 Tàn cuộc (Bài 11–16) · Phần 4 Thực chiến (Bài 18–19). Các bài NM1–8 và 2–19 dùng bộ dựng chung, xem `lessons/README.md`.

Thứ tự học: NM1 → … → NM8 → Bài 1 → … → Bài 10 → Bài 17 → Bài 11 → … → Bài 16 → Bài 18 → Bài 19 (nút “Bài tiếp” đã nối sẵn).

## Trang web / app

Chạy tại **https://covua.dainguyen.net** (GitHub Pages, nhánh `main`, thư mục gốc).

- `index.html`: trang chủ, xếp theo thứ tự học: **Bài học → Luyện tập → Mẹo hay → Sắp có**.
- Liên kết thẳng tới từng mục: `co-vua-khai-cuoc.html#chiem-giua`, `#ra-quan`, `#giau-vua`, `#van-mau`, `#bay-4-nuoc`, `#bai-tap`, `#tu-danh-gia`, `#meo`, `#meo-trung-tam`, `#meo-bay`, `#meo-khac`.
- Cài như app (PWA): `manifest.webmanifest`, `icons/`, `sw.js`. Android/Chrome: nút “📲 Cài app” trên trang chủ; iPhone: Chia sẻ → Thêm vào MH chính. Sau lần mở đầu tiên, app mở được khi mất mạng.
- Khi cập nhật bài học, tăng `VERSION` trong `sw.js` để máy học sinh tải bản mới.
- `CNAME` giữ tên miền tùy chỉnh.

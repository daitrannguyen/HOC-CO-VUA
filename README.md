# Học cờ vua

Bài học cờ vua tương tác cho trẻ 6–11 tuổi.

## Bài học

- [`co-vua-khai-cuoc.html`](co-vua-khai-cuoc.html): **3 nguyên tắc khai cuộc** (Chiếm giữa – Ra quân – Giấu Vua). Có thêm mục **Mẹo**: chiếm trung tâm, bẫy chiếu hết 2 nước, bẫy Légal và các mẹo khác. Mở trực tiếp bằng trình duyệt; cần Internet để tải chess.js.

## Chương trình 16 bài

Phần 1 Khai cuộc (Bài 1–4) · Phần 2 Chiến thuật (Bài 5–10) · Phần 3 Tàn cuộc (Bài 11–16). Đã có đủ **16 bài**. Các bài 2–16 dùng bộ dựng chung, xem `lessons/README.md`.

## Trang web / app

Chạy tại **https://covua.dainguyen.net** (GitHub Pages, nhánh `main`, thư mục gốc).

- `index.html`: trang chủ, xếp theo thứ tự học: **Bài học → Luyện tập → Mẹo hay → Sắp có**.
- Liên kết thẳng tới từng mục: `co-vua-khai-cuoc.html#chiem-giua`, `#ra-quan`, `#giau-vua`, `#van-mau`, `#bay-4-nuoc`, `#bai-tap`, `#tu-danh-gia`, `#meo`, `#meo-trung-tam`, `#meo-bay`, `#meo-khac`.
- Cài như app (PWA): `manifest.webmanifest`, `icons/`, `sw.js`. Android/Chrome: nút “📲 Cài app” trên trang chủ; iPhone: Chia sẻ → Thêm vào MH chính. Sau lần mở đầu tiên, app mở được khi mất mạng.
- Khi cập nhật bài học, tăng `VERSION` trong `sw.js` để máy học sinh tải bản mới.
- `CNAME` giữ tên miền tùy chỉnh.

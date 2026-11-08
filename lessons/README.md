# Dữ liệu bài học

Mỗi bài = 1 file `lessons/bai-NN.js` + 1 trang `bai-N.html` (copy từ trang có sẵn, đổi số). Phần hiển thị dùng chung `assets/lesson.js` + `assets/lesson.css`.

Nước đi viết bằng **SAN tiếng Anh** (Nf3, Bxf7+, Qh4#). Trong lời giảng, `{{Nf3}}` hiện thành `Mf3`.

| Khối (`type`) | Dùng để | Trường chính |
|---|---|---|
| `text` | Lời giảng | `html` |
| `replay` | Xem ván Lùi/Tiếp/Tự chạy | `sans`, `fen` hoặc `after`, `notes{ply}`, `marks{ply}`, `bad[]`, `suffix{ply}`, `lesson` |
| `puzzle` | Câu đố kéo quân | `fen` hoặc `after`, `solution[]` (nước con + nước đối thủ xen kẽ), `accept[]`, `defend`, `hint`, `success`, `verify` |
| `explore` | Bấm quân xem nước đi | `fen`, `squares{ô: lời}`, `red[]`, `verify.zero[]` |
| `quiz` | Trắc nghiệm | `q`, `options[{label, ok, why}]` |

`verify` (chỉ để kiểm tra, không hiện): `fork[]` ô bị chĩa, `followup` nước luôn đi được, `onlyFile`, `line[]`.

**Bắt buộc trước khi đăng:** `npm i --no-save chess.js@1.4.0 && node tools/verify-lessons.mjs` phải báo 0 lỗi. Thêm file mới vào `CORE` trong `sw.js` và tăng `VERSION`.

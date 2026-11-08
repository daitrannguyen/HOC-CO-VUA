// Bài 11 · Chiếu hết bằng 2 Xe (cầu thang)
export default {
  no: 11, part: 3, icon: '♜',
  title: 'Chiếu hết bằng 2 Xe',
  sub: 'Kiểu “cầu thang”: hai Xe thay nhau chiếu',
  nextLesson: 'bai-12.html',
  sections: [
    {
      slug: 'la-gi', title: '🪜 Cầu thang 2 Xe', short: 'Cầu thang',
      blocks: [
        { type: 'text', html: `
          <p>Hai Xe giống như hai bậc thang: <b>một Xe chặn một hàng</b>, <b>Xe kia chiếu ở hàng kế tiếp</b>. Vua đối thủ phải lùi dần, lùi dần… đến mép bàn là hết đường!</p>
          <ul class="tips">
            <li>🧱 Xe thứ nhất <b>cắt</b> hàng, Vua không được bước qua.</li>
            <li>♜ Xe thứ hai <b>chiếu</b> ở hàng bên cạnh, đẩy Vua lùi 1 hàng.</li>
            <li>🔁 Hai Xe <b>thay nhau</b> làm việc, cho đến hàng cuối.</li>
            <li>⚠️ Để Xe ở xa Vua đối thủ, đừng để Vua ăn mất Xe.</li>
          </ul>` },
        {
          type: 'replay', fen: '8/8/8/8/4k3/1R6/8/R5K1 w - - 0 1',
          sans: ['Ra4+', 'Kf5', 'Rb5+', 'Kg6', 'Ra6+', 'Kg7', 'Rb7+', 'Kg8', 'Ra8#'],
          notes: {
            0: 'Xe b3 đã chặn hàng 3. Xem 2 Xe leo cầu thang! Bấm “Tiếp”.',
            1: '<b>{{Ra4+}}</b> – Chiếu ở hàng 4. Hàng 3 bị Xe b3 chặn, Vua phải lên hàng 5.',
            3: '<b>{{Rb5+}}</b> – Đổi vai: Xe b chiếu hàng 5, Xe a chặn hàng 4.',
            5: '<b>{{Ra6+}}</b> – Lên một bậc nữa…',
            7: '<b>{{Rb7+}}</b> – Vua bị đẩy tới hàng cuối.',
            9: '💥 <b>{{Ra8#}}</b> – Chiếu hết! Xe b7 chặn hàng 7, Xe a8 chiếu hàng 8.',
          },
          marks: { 9: { red: ['g8'] } },
          lesson: 'Một Xe chặn, một Xe chiếu – thay nhau đẩy Vua ra mép bàn.',
        },
      ],
    },
    {
      slug: 'thuc-hanh', title: '🧩 Thực hành', short: 'Thực hành',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '6k1/1R6/R7/8/8/8/8/6K1 w - - 0 1',
          html: 'Bậc thang cuối cùng! Hãy <b>chiếu hết</b> trong 1 nước.',
          solution: ['Ra8#'], anyMate: true, hint: 'Xe b7 đang chặn hàng 7. Xe a6 lên chiếu hàng 8.',
          success: '<b>{{Ra8#}}</b> – Chiếu hết bằng 2 Xe!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '8/6k1/R7/1R6/8/8/8/6K1 w - - 0 1',
          html: 'Chiếu hết trong <b>2 nước</b> bằng cầu thang!',
          solution: ['Rb7+', 'Kg8', 'Ra8#'], anyMate: true,
          hint: 'Xe a6 chặn hàng 6. Xe b5 lên chiếu hàng 7.',
          next: 'Giờ Xe còn lại lên chiếu hết!',
          success: 'Chiếu hết! Con đã leo xong cầu thang.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Trong cầu thang, hai Xe làm gì?', options: [
          { label: 'Một Xe chặn, một Xe chiếu, thay phiên nhau', ok: true, why: 'Đúng! Vua lùi dần ra mép bàn.' },
          { label: 'Cả hai cùng chiếu một lúc', why: 'Chưa đúng. Hai Xe thay nhau: một chặn, một chiếu.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Vì sao nên để Xe ở xa Vua đối thủ?', options: [
          { label: 'Để Vua không ăn được Xe', ok: true, why: 'Đúng! Xe đứng sát Vua mà không được bảo vệ sẽ bị ăn.' },
          { label: 'Cho đẹp', why: 'Chưa đúng. Xe đứng sát Vua có thể bị Vua ăn mất.' },
        ] },
      ],
    },
  ],
};

// Bài 12 · Chiếu hết bằng Hậu + Vua
export default {
  no: 12, part: 3, icon: '♛',
  title: 'Chiếu hết bằng Hậu + Vua',
  sub: 'Hậu nhốt Vua ở mép bàn, Vua mình tiến tới giúp',
  nextLesson: 'bai-13.html',
  sections: [
    {
      slug: 'la-gi', title: '♛ Hậu + Vua', short: 'Cách làm',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>📦 <b>Bước 1:</b> Dùng Hậu <b>nhốt</b> Vua đối thủ, ép dần ra mép bàn. Mẹo: Hậu đứng cách Vua đối thủ <b>một bước Mã</b>.</li>
            <li>🚶 <b>Bước 2:</b> Khi Vua đối thủ đã bị nhốt ở mép, đưa <b>Vua mình</b> tiến lại gần.</li>
            <li>💥 <b>Bước 3:</b> Hậu chiếu hết, có Vua mình bảo vệ.</li>
            <li>⚠️ Cẩn thận <b>hòa pat</b>: luôn chừa cho Vua đối thủ ít nhất 1 ô để đi (xem Bài 14).</li>
          </ul>` },
        {
          type: 'replay', fen: '8/7k/5Q2/8/4K3/8/8/8 b - - 0 1',
          sans: ['Kg8', 'Kf5', 'Kh7', 'Kg5', 'Kg8', 'Qe7', 'Kh8', 'Kg6', 'Kg8', 'Qg7#'],
          notes: {
            0: 'Hậu f6 đã nhốt Vua Đen ở góc. Giờ Vua Trắng tiến lại. Bấm “Tiếp”.',
            2: '<b>{{Kf5}}</b> – Vua Trắng tiến lại gần.',
            4: '<b>{{Kg5}}</b> – Vua Trắng tiến thêm.',
            5: '<b>{{Kg8}}</b> – ⚠️ Nếu Trắng đi {{Kg6}}?? lúc này thì Vua Đen hết nước đi: <b>hòa pat</b>!',
            6: '<b>{{Qe7}}</b> – Hậu chừa ô h8 cho Vua Đen, tránh hòa pat.',
            8: '<b>{{Kg6}}</b> – Vua Trắng đứng sát, sẵn sàng bảo vệ Hậu.',
            10: '💥 <b>{{Qg7#}}</b> – Chiếu hết! Hậu được Vua g6 bảo vệ.',
          },
          bad: [5],
          marks: { 10: { red: ['g8'] } },
          lesson: 'Hậu nhốt – Vua tiến – Hậu chiếu hết. Và luôn kiểm tra: Vua đối thủ còn nước đi không?',
        },
      ],
    },
    {
      slug: 'thuc-hanh', title: '🧩 Thực hành', short: 'Thực hành',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '7k/4Q3/6K1/8/8/8/8/8 w - - 0 1',
          html: 'Vua Trắng đã đứng sát. Hãy <b>chiếu hết</b> trong 1 nước!',
          solution: ['Qg7#'], anyMate: true,
          hint: 'Hậu chiếu ở ô được Vua g6 bảo vệ, hoặc chiếu theo hàng 8.',
          success: 'Chiếu hết bằng Hậu + Vua!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2 (khó)', fen: '6k1/8/5Q2/6K1/8/8/8/8 w - - 0 1',
          html: 'Chiếu hết trong <b>3 nước</b>. Cẩn thận đừng để hòa pat!',
          solution: ['Qe7', 'Kh8', 'Kg6', 'Kg8', 'Qg7#'], anyMate: true,
          verify: { stalemateMove: 'Kg6' },
          hint: 'Đừng đi Vua lên g6 ngay. Trước tiên Hậu chặn hàng 7, chừa ô h8 cho Vua Đen.',
          next: 'Giờ đưa Vua mình tới gần!',
          success: 'Chiếu hết! Con đã tránh được bẫy hòa pat.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Chỉ có Hậu (không có Vua giúp) có chiếu hết được Vua đối thủ không?', options: [
          { label: 'Không, cần Vua mình giúp', ok: true, why: 'Đúng! Hậu đứng sát Vua đối thủ cần được bảo vệ, không thì bị Vua ăn.' },
          { label: 'Được, Hậu rất mạnh', why: 'Chưa đúng. Hậu cần Vua mình giúp mới chiếu hết được.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Trước mỗi nước Hậu, con cần kiểm tra gì?', options: [
          { label: 'Vua đối thủ còn nước đi không (tránh hòa pat)', ok: true, why: 'Đúng! Hết nước đi mà không bị chiếu là hòa.' },
          { label: 'Không cần kiểm tra gì', why: 'Chưa đúng. Rất dễ vô tình để hòa pat.' },
        ] },
      ],
    },
  ],
};

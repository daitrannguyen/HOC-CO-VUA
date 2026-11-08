// Bài 13 · Chiếu hết bằng Xe + Vua
export default {
  no: 13, part: 3, icon: '♖',
  title: 'Chiếu hết bằng Xe + Vua',
  sub: 'Xe cắt hàng, Vua đối diện Vua, Xe chiếu',
  nextLesson: 'bai-14.html',
  sections: [
    {
      slug: 'la-gi', title: '♖ Xe + Vua', short: 'Cách làm',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>✂️ <b>Xe cắt hàng:</b> Xe đứng chặn một hàng (hoặc cột) để Vua đối thủ không vượt qua được.</li>
            <li>👑 <b>Đối Vua:</b> đưa Vua mình đứng <b>đối diện</b> Vua đối thủ (cách nhau 1 ô).</li>
            <li>💥 <b>Xe chiếu:</b> khi hai Vua đối diện, Xe chiếu theo hàng – Vua đối thủ không còn chỗ chạy.</li>
            <li>🔁 Nếu Vua đối thủ né sang bên, Vua mình đi theo để đối diện lại.</li>
          </ul>` },
        {
          type: 'replay', fen: '5k2/R7/4K3/8/8/8/8/8 b - - 0 1',
          sans: ['Kg8', 'Kf6', 'Kh8', 'Kg6', 'Kg8', 'Ra8#'],
          notes: {
            0: 'Xe a7 đã cắt hàng 7: Vua Đen bị nhốt ở hàng 8. Bấm “Tiếp”.',
            1: '<b>{{Kg8}}</b> – Vua Đen né sang bên.',
            2: '<b>{{Kf6}}</b> – Vua Trắng đi theo.',
            4: '<b>{{Kg6}}</b> – Vua Trắng chặn trước, Vua Đen chỉ còn ô g8.',
            5: '<b>{{Kg8}}</b> – Hai Vua đứng đối diện (g6 – g8).',
            6: '💥 <b>{{Ra8#}}</b> – Chiếu hết! Vua g6 giữ hàng 7, Xe giữ hàng 8.',
          },
          marks: { 5: { yellow: ['g6', 'g8'] }, 6: { red: ['g8'] } },
          lesson: 'Xe cắt – Vua đối diện – Xe chiếu.',
        },
      ],
    },
    {
      slug: 'thuc-hanh', title: '🧩 Thực hành', short: 'Thực hành',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '4k3/8/4K3/8/8/8/8/7R w - - 0 1',
          html: 'Hai Vua đã đối diện. Hãy <b>chiếu hết</b> trong 1 nước!',
          solution: ['Rh8#'], anyMate: true, hint: 'Xe h1 lên chiếu ở hàng 8.',
          success: '<b>{{Rh8#}}</b> – Chiếu hết bằng Xe + Vua!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '7k/R7/5K2/8/8/8/8/8 w - - 0 1',
          html: 'Chiếu hết trong <b>2 nước</b>. Cẩn thận hòa pat!',
          solution: ['Kg6', 'Kg8', 'Ra8#'], anyMate: true,
          verify: { stalemateMove: 'Rg7' },
          hint: 'Đưa Vua tới g6 để chuẩn bị đối diện với Vua Đen.',
          next: 'Hai Vua đã đối diện – Xe chiếu hết!',
          success: 'Chiếu hết! Xe cắt – Vua đối diện – Xe chiếu.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Xe “cắt hàng” để làm gì?', options: [
          { label: 'Không cho Vua đối thủ vượt qua', ok: true, why: 'Đúng! Vua đối thủ bị nhốt về một phía.' },
          { label: 'Để ăn tốt', why: 'Chưa đúng. Xe cắt hàng để nhốt Vua.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Khi nào Xe chiếu là chiếu hết?', options: [
          { label: 'Khi hai Vua đứng đối diện, Vua đối thủ ở mép bàn', ok: true, why: 'Đúng! Vua mình giữ các ô phía trước.' },
          { label: 'Bất cứ lúc nào', why: 'Chưa đúng. Cần Vua mình đứng đối diện để chặn đường thoát.' },
        ] },
      ],
    },
  ],
};

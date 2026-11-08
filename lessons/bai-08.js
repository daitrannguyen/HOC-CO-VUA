// Bài 8 · Xiên
export default {
  no: 8, part: 2, icon: '🗡️',
  title: 'Xiên',
  sub: 'Quân lớn đứng trước bị đuổi – lộ quân phía sau',
  nextLesson: 'bai-9.html',
  sections: [
    {
      slug: 'la-gi', title: '🗡️ Xiên là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Xiên</b> giống như <b>ghim ngược</b>: quân <b>quý hơn</b> đứng phía trước bị tấn công. Nó phải chạy đi – và quân phía sau bị lộ ra cho con ăn!</p>
          <ul class="tips">
            <li>📌 <b>Ghim:</b> quân rẻ đứng trước, quân quý đứng sau.</li>
            <li>🗡️ <b>Xiên:</b> quân quý (thường là Vua) đứng trước, quân khác đứng sau.</li>
            <li>📏 Chỉ quân đi đường dài mới xiên được: <b>Tượng, Xe, Hậu</b>.</li>
          </ul>` },
        {
          type: 'replay', fen: '8/8/8/4k2q/8/8/8/R3K3 w - - 0 1',
          sans: ['Ra5+', 'Ke4', 'Rxh5'],
          notes: {
            0: 'Vua e5 và Hậu h5 đứng cùng hàng 5. Bấm “Tiếp”.',
            1: '🗡️ <b>{{Ra5+}}</b> – Xe chiếu Vua theo hàng 5. Phía sau Vua là Hậu!',
            2: '<b>{{Ke4}}</b> – Vua phải chạy khỏi hàng 5…',
            3: '<b>{{Rxh5}}</b> – …nên Xe ăn được Hậu!',
          },
          marks: { 1: { red: ['e5', 'h5'] } },
          lesson: 'Tìm hai quân của đối thủ đứng <b>cùng một đường</b> (hàng, cột hoặc đường chéo).',
        },
      ],
    },
    {
      slug: 'xe-xien', title: '♖ Xe xiên', short: 'Xe xiên',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '4q3/8/8/8/4k3/8/8/K6R w - - 0 1',
          html: 'Vua e4 và Hậu e8 đứng cùng cột e. Xe hãy <b>xiên</b>!',
          solution: ['Re1+'], verify: { followup: 'Rxe8' },
          hint: 'Xe đi tới cột e, chiếu Vua từ phía dưới.',
          success: '<b>{{Re1+}}</b> – Vua phải rời cột e, Xe sẽ ăn Hậu e8!',
        },
      ],
    },
    {
      slug: 'tuong-xien', title: '♗ Tượng xiên', short: 'Tượng xiên',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '8/1q6/8/3k4/8/8/8/4KB2 w - - 0 1',
          html: 'Vua d5 và Hậu b7 đứng cùng một đường chéo. Tượng hãy <b>xiên</b>!',
          solution: ['Bg2+'], verify: { followup: 'Bxb7' },
          hint: 'Tượng đi tới ô nằm trên đường chéo h1–a8.',
          success: '<b>{{Bg2+}}</b> – Vua phải rời đường chéo, Tượng sẽ ăn Hậu b7!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Xiên khác ghim ở điểm nào?', options: [
          { label: 'Quân quý đứng phía trước', ok: true, why: 'Đúng! Xiên: quân quý đứng trước, bị đuổi đi rồi lộ quân sau.' },
          { label: 'Quân rẻ đứng phía trước', why: 'Chưa đúng. Quân rẻ đứng trước là ghim.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Quân nào xiên được?', options: [
          { label: 'Mã', why: 'Chưa đúng. Mã nhảy, không đi theo đường thẳng.' },
          { label: 'Tượng, Xe, Hậu', ok: true, why: 'Đúng! Các quân đi đường dài.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Xe chiếu Vua, phía sau Vua là Hậu. Vua chạy đi thì sao?', options: [
          { label: 'Xe ăn được Hậu', ok: true, why: 'Đúng! Đó chính là xiên.' },
          { label: 'Không có gì xảy ra', why: 'Chưa đúng. Hậu bị lộ ra phía sau.' },
        ] },
      ],
    },
  ],
};

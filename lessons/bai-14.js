// Bài 14 · Hết nước đi (hòa pat)
export default {
  no: 14, part: 3, icon: '🤝',
  title: 'Hòa pat',
  sub: 'Đang thắng mà để đối thủ hết nước đi – tiếc lắm!',
  nextLesson: 'bai-15.html',
  sections: [
    {
      slug: 'la-gi', title: '🤝 Hòa pat là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Hòa pat</b> xảy ra khi đến lượt một bên đi, Vua bên đó <b>không bị chiếu</b>, nhưng <b>không còn nước đi hợp lệ nào</b>. Ván cờ kết thúc <b>hòa</b>!</p>
          <ul class="tips">
            <li>♚ Chiếu hết: Vua <b>bị chiếu</b> và không thoát được → thua.</li>
            <li>🤝 Hòa pat: Vua <b>không bị chiếu</b> nhưng không đi được → hòa.</li>
            <li>⚠️ Khi đang thắng (có Hậu, Xe…), mỗi nước hãy hỏi: “Đối thủ còn nước đi không?”</li>
          </ul>` },
        {
          type: 'explore', fen: 'k7/2Q5/1K6/8/8/8/8/8 b - - 0 1',
          html: '<p>Đến lượt <b>Đen</b>. Vua a8 có đang bị chiếu không?</p>',
          prompt: 'Bấm vào <b>Vua a8</b> xem nó đi được ô nào.',
          squares: { a8: '🤝 Vua a8 <b>không bị chiếu</b>, nhưng mọi ô xung quanh đều bị Hậu hoặc Vua Trắng kiểm soát. Đen hết nước đi → <b>hòa pat</b>!' },
          verify: { stalemate: true },
        },
      ],
    },
    {
      slug: 'vo-tinh', title: '😱 Vô tình hòa pat', short: 'Vô tình',
      blocks: [
        {
          type: 'replay', fen: '7k/8/8/8/8/8/8/K5Q1 w - - 0 1', sans: ['Qg6'],
          notes: {
            0: 'Trắng có Hậu, Đen chỉ còn Vua. Trắng chắc thắng… Bấm “Tiếp”.',
            1: '😱 <b>{{Qg6}}??</b> – Vua h8 không bị chiếu, nhưng g8, g7, h7 đều bị Hậu kiểm soát. <b>Hòa pat!</b>',
          },
          bad: [1], verify: { stalemate: true },
          lesson: 'Hậu đứng quá gần, nhốt hết các ô của Vua mà không chiếu → hòa.',
        },
      ],
    },
    {
      slug: 'thuc-hanh', title: '🧩 Tìm chiếu hết, tránh hòa', short: 'Thực hành',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: 'k7/8/1K6/8/8/8/8/2Q5 w - - 0 1',
          html: 'Chiếu hết trong 1 nước. Có một nước trông giống nhưng lại là <b>hòa pat</b> – cẩn thận!',
          solution: ['Qc8#'], anyMate: true, verify: { stalemateMove: 'Qc7' },
          hint: 'Hậu phải <b>chiếu</b> Vua a8. Thử chiếu theo hàng 8.',
          success: 'Chiếu hết! Con đã tránh được hòa pat.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '7k/R7/6K1/8/8/8/8/8 w - - 0 1',
          html: 'Chiếu hết trong 1 nước bằng Xe. Đừng để hòa pat!',
          solution: ['Ra8#'], anyMate: true, verify: { stalemateMove: 'Rg7' },
          hint: 'Xe chiếu theo hàng 8.',
          success: '<b>{{Ra8#}}</b> – Chiếu hết!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Hòa pat là thắng, thua hay hòa?', options: [
          { label: 'Thắng', why: 'Chưa đúng. Hòa pat là hòa.' },
          { label: 'Hòa', ok: true, why: 'Đúng! Không ai thắng cả.' },
          { label: 'Thua', why: 'Chưa đúng. Hòa pat là hòa.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Hòa pat khác chiếu hết ở điểm nào?', options: [
          { label: 'Vua không bị chiếu', ok: true, why: 'Đúng! Chiếu hết thì Vua bị chiếu, hòa pat thì không.' },
          { label: 'Không khác gì', why: 'Chưa đúng. Hòa pat: Vua không bị chiếu nhưng hết nước đi.' },
        ] },
      ],
    },
  ],
};

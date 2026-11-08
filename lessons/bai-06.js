// Bài 6 · Chĩa đôi
// verify.fork = các ô quân vừa đi phải tấn công được (kiểm tra bằng tools/verify-lessons.mjs).
export default {
  no: 6, part: 2, icon: '🍴',
  title: 'Chĩa đôi',
  sub: 'Một quân tấn công hai quân cùng lúc',
  nextLesson: 'bai-7.html',
  sections: [
    {
      slug: 'la-gi', title: '🍴 Chĩa đôi là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Chĩa đôi</b> là khi <b>một quân</b> của con tấn công <b>hai quân</b> của đối thủ cùng lúc. Đối thủ chỉ cứu được một quân – quân còn lại con ăn!</p>
          <ul class="tips">
            <li>⚖️ Giá trị quân: Tốt <b>1</b> · Mã <b>3</b> · Tượng <b>3</b> · Xe <b>5</b> · Hậu <b>9</b>. Vua thì vô giá!</li>
            <li>👑 Chĩa đôi mạnh nhất khi một trong hai quân là <b>Vua</b>: đối thủ bắt buộc phải cứu Vua trước.</li>
            <li>🐴 Quân nào cũng chĩa đôi được – kể cả Tốt và Vua. Nhưng <b>Mã</b> là “vua chĩa đôi”!</li>
          </ul>` },
      ],
    },
    {
      slug: 'ma-chia', title: '🐴 Mã chĩa đôi', short: 'Mã chĩa',
      blocks: [
        {
          type: 'replay', fen: 'r3k3/8/8/1N6/8/8/8/4K3 w - - 0 1',
          sans: ['Nc7+', 'Kd7', 'Nxa8'],
          notes: {
            0: 'Mã b5 có thể nhảy tới ô nào để tấn công <b>cả Vua và Xe</b>? Bấm “Tiếp”.',
            1: '🍴 <b>{{Nc7+}}</b> – Mã chiếu Vua e8 và tấn công Xe a8 cùng lúc!',
            2: '<b>{{Kd7}}</b> – Đen phải cứu Vua trước…',
            3: '<b>{{Nxa8}}</b> – …nên Mã ăn được Xe!',
          },
          marks: { 1: { red: ['e8', 'a8'] } },
          lesson: 'Tìm ô mà Mã nhảy tới chạm được <b>cả hai</b> quân của đối thủ.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '4k3/8/q7/1N6/8/8/8/4K3 w - - 0 1',
          html: 'Mã b5 hãy <b>chĩa đôi Vua và Hậu</b> Đen!',
          solution: ['Nc7+'], verify: { fork: ['e8', 'a6'] },
          hint: 'Ô cần tìm ở hàng 7.',
          success: '<b>{{Nc7+}}</b> – Chĩa đôi Vua và Hậu! Vua phải chạy, Mã ăn Hậu.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '2r3k1/5ppp/8/3N4/8/8/5PPP/6K1 w - - 0 1',
          html: 'Mã d5 hãy <b>chĩa đôi Vua và Xe</b> Đen!',
          solution: ['Ne7+'], verify: { fork: ['g8', 'c8'] },
          hint: 'Mã nhảy tới một ô ở hàng 7.',
          success: '<b>{{Ne7+}}</b> – Chiếu Vua g8 và tấn công Xe c8!',
        },
      ],
    },
    {
      slug: 'tot-chia', title: '♙ Tốt chĩa đôi', short: 'Tốt chĩa',
      blocks: [
        { type: 'text', html: '<p>Tốt nhỏ nhưng có võ! Tốt ăn chéo, nên khi tiến lên, nó có thể tấn công <b>hai quân</b> đứng chéo hai bên.</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', fen: '4k3/8/2n1b3/8/3PP3/8/8/4K3 w - - 0 1',
          html: 'Dùng <b>một tốt</b> để tấn công cùng lúc Mã c6 và Tượng e6!',
          solution: ['d5'], verify: { fork: ['c6', 'e6'] },
          hint: 'Tốt d4 tiến lên 1 ô. Tốt e4 sẽ bảo vệ nó.',
          success: '<b>d5</b> – Tốt chĩa đôi Mã và Tượng! Tốt d5 được tốt e4 bảo vệ, Đen sẽ mất một quân.',
        },
      ],
    },
    {
      slug: 'hau-chia', title: '👑 Hậu chĩa đôi', short: 'Hậu chĩa',
      blocks: [
        { type: 'text', html: '<p>Hậu đi được cả đường thẳng lẫn đường chéo, nên rất giỏi chĩa đôi – nhất là khi có quân của đối thủ <b>không được bảo vệ</b>.</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 4', fen: 'r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1',
          html: 'Xe a8 của Đen không được bảo vệ. Hậu hãy <b>chiếu Vua và tấn công Xe</b> cùng lúc!',
          solution: ['Qd5+'], verify: { fork: ['g8', 'a8'] },
          hint: 'Hậu đi thẳng lên cột d, tới ô nằm trên hai đường chéo.',
          success: '<b>{{Qd5+}}</b> – Hậu chiếu Vua g8 theo đường chéo và nhắm Xe a8 theo đường chéo kia!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Mã chĩa đôi Vua và Xe của đối thủ. Đối thủ phải làm gì trước?', options: [
          { label: 'Cứu Xe', why: 'Chưa đúng. Khi bị chiếu, luật bắt buộc phải cứu Vua trước.' },
          { label: 'Cứu Vua', ok: true, why: 'Đúng! Bị chiếu thì phải thoát chiếu – nên con ăn được Xe.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Những quân nào có thể chĩa đôi?', options: [
          { label: 'Chỉ có Mã', why: 'Chưa đúng. Con vừa thấy Tốt và Hậu cũng chĩa đôi được.' },
          { label: 'Tất cả các quân, kể cả Tốt và Vua', ok: true, why: 'Đúng! Quân nào tấn công được 2 quân cùng lúc là chĩa đôi.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Chĩa đôi Vua và Hậu bằng Mã, con được lợi gì?', options: [
          { label: 'Ăn được Hậu (9 điểm)', ok: true, why: 'Đúng! Vua phải chạy, Mã ăn Hậu.' },
          { label: 'Không được gì', why: 'Chưa đúng. Vua phải chạy, nên Hậu bị bỏ lại.' },
        ] },
      ],
    },
  ],
};

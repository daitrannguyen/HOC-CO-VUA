// Bài 7 · Ghim
// verify.zero: quân không có nước đi · verify.followup: nước phải đi được sau MỌI nước đáp
// verify.onlyFile: quân chỉ đi được trên một cột · verify.line: chuỗi nước phải hợp lệ sau lời giải
export default {
  no: 7, part: 2, icon: '📌',
  title: 'Ghim',
  sub: 'Quân bị ghim – không dám nhúc nhích',
  sections: [
    {
      slug: 'la-gi', title: '📌 Ghim là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Ghim</b> là khi quân của con tấn công một quân của đối thủ, mà <b>phía sau</b> quân đó là một quân <b>quý hơn</b>. Quân đứng trước bị “ghim chặt” – đi thì quân phía sau bị ăn!</p>
          <ul class="tips">
            <li>📌 <b>Ghim tuyệt đối:</b> phía sau là <b>Vua</b>. Theo luật, quân bị ghim <b>không được đi</b>.</li>
            <li>🧷 <b>Ghim tương đối:</b> phía sau là Hậu hoặc Xe. Quân bị ghim đi được, nhưng sẽ mất quân quý.</li>
            <li>📏 Chỉ quân đi đường dài mới ghim được: <b>Tượng, Xe, Hậu</b>.</li>
          </ul>` },
      ],
    },
    {
      slug: 'tuyet-doi', title: '📌 Ghim tuyệt đối', short: 'Tuyệt đối',
      blocks: [
        {
          type: 'explore', fen: '4k3/8/2n5/1B6/8/8/8/4K3 b - - 0 1',
          html: '<p>Tượng b5 – Mã c6 – Vua e8 nằm trên cùng một đường chéo.</p>',
          prompt: 'Đến lượt Đen. Con bấm thử vào <b>Mã c6</b> xem nó đi được không!',
          squares: {
            c6: '📌 Mã c6 <b>không đi được</b>! Nó bị Tượng b5 ghim vào Vua e8 – nếu Mã đi, Vua bị chiếu, luật không cho.',
          },
          red: ['b5'], verify: { zero: ['c6'] },
        },
      ],
    },
    {
      slug: 'tuong-doi', title: '🧷 Ghim tương đối', short: 'Tương đối',
      blocks: [
        {
          type: 'replay', sans: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5'],
          notes: {
            0: 'Một khai cuộc quen thuộc. Xem Tượng Trắng ghim Mã Đen. Bấm “Tiếp”.',
            7: '🧷 <b>{{Bg5}}</b> – Tượng ghim Mã f6 vào Hậu d8. Nếu Mã f6 đi chỗ khác, Tượng sẽ ăn Hậu!',
          },
          marks: { 7: { red: ['f6', 'd8'] } },
          lesson: 'Ghim tương đối vẫn đi được, nhưng phải tính kỹ. Nhớ bẫy Légal ở Bài 2: Trắng “phá ghim” bằng cách bỏ Hậu để chiếu hết!',
        },
      ],
    },
    {
      slug: 'khai-thac', title: '🎯 Khai thác quân bị ghim', short: 'Khai thác',
      blocks: [
        { type: 'text', html: '<p>Quân bị ghim không chạy được, nên mẹo hay là <b>tấn công nó thêm lần nữa</b> – nhất là bằng Tốt!</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '4k3/8/2n5/1B6/3P4/8/8/4K3 w - - 0 1',
          html: 'Mã c6 đang bị ghim. Hãy dùng <b>tốt</b> tấn công nó!',
          solution: ['d5'], verify: { followup: 'dxc6' },
          hint: 'Tốt d4 tiến lên 1 ô.',
          success: '<b>d5</b> – Mã bị ghim không chạy được. Nước sau tốt ăn Mã!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '4k3/8/8/4q3/8/8/5K2/7R w - - 0 1',
          html: 'Hậu e5 và Vua e8 đứng cùng cột e. Xe hãy <b>ghim Hậu</b>!',
          solution: ['Re1'], verify: { onlyFile: { sq: 'e5', file: 'e' }, line: ['Qxe1+', 'Kxe1'] },
          hint: 'Xe đi tới cột e, ô được Vua Trắng bảo vệ.',
          success: '<b>{{Re1}}</b> – Hậu bị ghim vào Vua! Hậu chỉ còn đi trên cột e. Nếu Hậu ăn Xe, Vua Trắng ăn lại Hậu.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Quân nào <b>không</b> ghim được?', options: [
          { label: 'Tượng', why: 'Chưa đúng. Tượng đi đường chéo dài nên ghim được.' },
          { label: 'Xe', why: 'Chưa đúng. Xe đi đường thẳng dài nên ghim được.' },
          { label: 'Hậu', why: 'Chưa đúng. Hậu đi cả thẳng lẫn chéo nên ghim được.' },
          { label: 'Mã', ok: true, why: 'Đúng! Mã nhảy, không đi theo đường thẳng, nên không ghim được.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Quân bị ghim vào <b>Vua</b> có được đi không?', options: [
          { label: 'Không – luật không cho', ok: true, why: 'Đúng! Đi thì Vua bị chiếu, luật cờ không cho phép.' },
          { label: 'Được', why: 'Chưa đúng. Nhớ lại Mã c6 bị ghim: nó không có nước đi nào.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Quân của đối thủ đang bị ghim. Mẹo hay là gì?', options: [
          { label: 'Tấn công nó thêm, ví dụ bằng Tốt', ok: true, why: 'Đúng! Quân bị ghim không chạy được.' },
          { label: 'Bỏ qua, không quan tâm', why: 'Phí quá! Quân bị ghim là cơ hội để ăn quân.' },
        ] },
      ],
    },
  ],
};

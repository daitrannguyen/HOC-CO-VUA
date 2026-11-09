// Nhập môn 3 · Tượng
export default {
  no: 'NM3', label: 'Nhập môn 3', part: 0, icon: '♗',
  title: 'Quân Tượng',
  sub: 'Đi chéo, suốt ván chỉ ở một màu ô',
  nextLesson: 'nhap-mon-4.html',
  sections: [
    {
      slug: 'cach-di', title: '♗ Tượng đi thế nào?', short: 'Cách đi',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>↗️ Tượng đi <b>chéo</b>, bao nhiêu ô cũng được.</li>
            <li>🚧 Tượng <b>không nhảy qua</b> quân khác.</li>
            <li>🎨 Tượng đứng ô sáng thì <b>cả ván</b> chỉ đi ô sáng. Tượng ô tối thì chỉ đi ô tối.</li>
            <li>⚖️ Tượng đáng <b>3 điểm</b>.</li>
          </ul>` },
        {
          type: 'explore', fen: '4k3/8/8/8/3B4/8/8/4K2B w - - 0 1',
          html: '<p>Hai Tượng: một ở <b>giữa bàn (d4)</b>, một ở <b>góc (h1)</b>. Bấm từng con để so sánh.</p>',
          prompt: 'Bấm vào Tượng d4, rồi Tượng h1.',
          verify: { count: { d4: 13, h1: 7 } },
          squares: {
            d4: '♗ Tượng ở giữa đi được <b>13 ô</b>.',
            h1: '♗ Tượng ở góc chỉ đi được <b>7 ô</b> – chỉ có 1 đường chéo. Tượng ở giữa bàn mạnh hơn!',
          },
        },
      ],
    },
    {
      slug: 'an-quan', title: '🍽️ Tượng ăn quân', short: 'Ăn quân',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '6k1/8/8/8/8/2r5/8/B5K1 w - - 0 1',
          html: 'Xe c3 của Đen không ai bảo vệ. Cho Tượng <b>ăn Xe</b>!',
          solution: ['Bxc3'], verify: { free: true },
          hint: 'Tượng a1 đi chéo lên.',
          success: '<b>{{Bxc3}}</b> – Ăn Xe 5 điểm miễn phí!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '6k1/8/3p3r/4n3/5B2/8/8/6K1 w - - 0 1',
          html: 'Tượng f4 nhìn thấy Mã e5 và Xe h6. Ăn quân nào thì <b>có lợi</b> hơn?',
          solution: ['Bxh6'], verify: { free: true },
          hint: 'Mã e5 có Tốt d6 bảo vệ. Còn Xe h6 thì sao?',
          wrong: 'Ăn Mã e5 thì Tốt d6 ăn lại Tượng – chỉ đổi ngang 3 lấy 3.',
          success: '<b>{{Bxh6}}</b> – Xe h6 không ai bảo vệ: ăn miễn phí 5 điểm!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Tượng đi theo hướng nào?', options: [
          { label: 'Chéo', ok: true, why: 'Đúng!' },
          { label: 'Ngang và dọc', why: 'Chưa đúng. Ngang và dọc là Xe.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Tượng đứng ô tối có bao giờ tới được ô sáng không?', options: [
          { label: 'Có', why: 'Chưa đúng. Đi chéo thì luôn ở cùng một màu ô.' },
          { label: 'Không bao giờ', ok: true, why: 'Đúng! Tượng ô tối suốt ván chỉ ở ô tối.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Tượng ở đâu thì mạnh hơn?', options: [
          { label: 'Ở góc', why: 'Chưa đúng. Ở góc Tượng chỉ có 1 đường chéo.' },
          { label: 'Ở giữa bàn', ok: true, why: 'Đúng! Ở giữa, Tượng có 4 hướng chéo.' },
        ] },
      ],
    },
  ],
};

// Bài 16 · Đối Vua (Vua + Tốt vs Vua)
export default {
  no: 16, part: 3, icon: '♔',
  title: 'Đối Vua',
  sub: 'Vua + Tốt đấu Vua: khi nào thắng, khi nào hòa',
  sections: [
    {
      slug: 'la-gi', title: '♔ Đối Vua là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Đối Vua</b> là khi hai Vua đứng <b>đối diện</b>, cách nhau đúng 1 ô. Lúc đó, bên <b>phải đi</b> sẽ phải nhường đường – bên <b>không phải đi</b> là bên <b>giữ đối Vua</b>.</p>
          <ul class="tips">
            <li>🚶 Bên có Tốt: đưa <b>Vua đi trước Tốt</b>, mở đường cho Tốt.</li>
            <li>🛡️ Bên không có Tốt: đứng <b>chặn ngay trước Tốt</b> và <b>giữ đối Vua</b> → thường là hòa.</li>
            <li>🏆 Nếu Vua bên có Tốt lên được <b>hàng 6</b>, đứng trước Tốt (Tốt không ở cột a, h) → Trắng thắng.</li>
          </ul>` },
      ],
    },
    {
      slug: 'hoa', title: '🤝 Đen giữ đối Vua → hòa', short: 'Hòa',
      blocks: [
        {
          type: 'replay', fen: '3k4/8/3P4/3K4/8/8/8/8 w - - 0 1',
          sans: ['Ke6', 'Ke8', 'd7+', 'Kd8', 'Kd6'],
          notes: {
            0: 'Vua Đen đứng chặn trước Tốt d6. Bấm “Tiếp”.',
            1: '<b>{{Ke6}}</b> – Vua Trắng tiến lên.',
            2: '<b>{{Ke8}}</b> – Đen đứng đối diện (e6 – e8): Đen <b>giữ đối Vua</b>!',
            3: '<b>d7+</b> – Tốt chiếu…',
            4: '<b>{{Kd8}}</b> – Vua Đen chặn ngay trước Tốt.',
            5: '🤝 <b>{{Kd6}}</b> – Vua Đen không bị chiếu nhưng hết nước đi: <b>hòa pat</b>!',
          },
          marks: { 2: { yellow: ['e6', 'e8'] } },
          verify: { stalemate: true },
          lesson: 'Vua phòng thủ đứng chặn trước Tốt và giữ đối Vua → hòa.',
        },
      ],
    },
    {
      slug: 'thang', title: '🏆 Vua ở hàng 6 → thắng', short: 'Thắng',
      blocks: [
        {
          type: 'replay', fen: '3k4/8/3K4/3P4/8/8/8/8 b - - 0 1',
          sans: ['Ke8', 'Kc7', 'Kf7', 'd6', 'Ke6', 'd7', 'Ke7', 'd8=Q+'],
          notes: {
            0: 'Vua Trắng đã lên hàng 6, đứng trước Tốt. Đến lượt Đen. Bấm “Tiếp”.',
            1: '<b>{{Ke8}}</b> – Đen phải nhường đường.',
            2: '<b>{{Kc7}}</b> – Vua Trắng giữ ô d7 và d8 cho Tốt.',
            4: '<b>d6</b> – Tốt tiến lên.',
            6: '<b>d7</b> – Chỉ còn một bước!',
            8: '👑 <b>d8={{Q}}+</b> – Phong Hậu, được Vua c7 bảo vệ. Trắng thắng!',
          },
          verify: { promote: true },
          lesson: 'Vua đi trước, mở đường – Tốt theo sau về đích.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Đối Vua là gì?', options: [
          { label: 'Hai Vua đối diện, cách nhau 1 ô', ok: true, why: 'Đúng!' },
          { label: 'Hai Vua đứng sát nhau', why: 'Chưa đúng. Hai Vua không bao giờ được đứng sát nhau.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Có Vua + Tốt, Vua nên đứng ở đâu?', options: [
          { label: 'Đi trước Tốt, mở đường', ok: true, why: 'Đúng! Vua dẫn đường cho Tốt.' },
          { label: 'Đứng sau Tốt', why: 'Chưa đúng. Vua đi trước mới mở được đường.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Vua phòng thủ chặn trước Tốt và giữ đối Vua. Kết quả thường là?', options: [
          { label: 'Hòa', ok: true, why: 'Đúng! Như ví dụ Tốt d7 ở trên.' },
          { label: 'Bên có Tốt thắng', why: 'Chưa đúng. Vua phòng thủ giữ đối Vua thì thường hòa.' },
        ] },
      ],
    },
  ],
};

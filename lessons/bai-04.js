// Bài 4 · Đen đáp lại 1.e4 và 1.d4
export default {
  no: 4, part: 1, icon: '♟',
  title: 'Đen đáp 1.e4 và 1.d4',
  sub: 'Cầm quân Đen cũng theo 3 nguyên tắc',
  nextLesson: 'bai-5.html',
  sections: [
    {
      slug: 'mo-dau', title: '⚫ Cầm quân Đen', short: 'Mở đầu',
      blocks: [
        { type: 'text', html: `
          <p>Trắng đi trước, nên Đen cần <b>đáp lại</b> cho chắc. Đen cũng dùng câu thần chú <b>Chiếm giữa – Ra quân – Giấu Vua</b>.</p>
          <ul class="tips">
            <li>⚪ Trắng đi <b>1.e4</b> → Đen đáp <b>1…e5</b>.</li>
            <li>⚪ Trắng đi <b>1.d4</b> → Đen đáp <b>1…d5</b>.</li>
            <li>🛡️ Tốt giữa bị tấn công thì <b>bảo vệ</b> nó bằng Mã hoặc tốt.</li>
            <li>👑 Đừng ra Hậu sớm, nhập thành trước nước 10.</li>
          </ul>` },
      ],
    },
    {
      slug: 'dap-e4', title: '1️⃣ Khi Trắng đi 1.e4', short: 'Đáp 1.e4',
      blocks: [
        {
          type: 'replay', sans: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5'],
          notes: {
            2: '<b>1…e5</b> – Đen chiếm trung tâm ngay.',
            3: '<b>2.{{Nf3}}</b> – Trắng tấn công tốt e5.',
            4: '<b>2…{{Nc6}}</b> – Mã Đen ra trận và bảo vệ tốt e5.',
            6: '<b>3…{{Bc5}}</b> – Tượng Đen cũng ra, chuẩn bị nhập thành.',
          },
          marks: { 3: { red: ['e5'] }, 4: { green: ['e5'] } },
          lesson: 'Tốt e5 bị tấn công → ra Mã c6 bảo vệ. Vừa giữ trung tâm, vừa ra quân!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', after: ['e4', 'e5', 'Nf3'],
          html: 'Mã f3 đang tấn công tốt e5. Hãy <b>bảo vệ</b> tốt e5!',
          solution: ['Nc6'], accept: ['d6'],
          hint: 'Mã b8 ra trận và bảo vệ e5.',
          success: 'Tốt e5 đã được bảo vệ!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', after: ['e4', 'e5', 'Qh5'],
          html: 'Hậu Trắng ra sớm, tấn công tốt e5. Hãy <b>bảo vệ e5</b> và ra quân!',
          solution: ['Nc6'], accept: ['d6'],
          hint: 'Mã b8 vừa ra quân vừa bảo vệ e5.',
          success: 'Đúng rồi! Nhớ để ý ô f7 nữa – xem lại Bài 2 nhé.',
        },
      ],
    },
    {
      slug: 'dap-d4', title: '2️⃣ Khi Trắng đi 1.d4', short: 'Đáp 1.d4',
      blocks: [
        {
          type: 'replay', sans: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6'],
          notes: {
            2: '<b>1…d5</b> – Đen chiếm trung tâm.',
            3: '<b>2.c4</b> – Trắng mời Đen ăn tốt c4 để kéo tốt d5 khỏi trung tâm.',
            4: '<b>2…e6</b> – Đen không ăn, mà dùng tốt e6 bảo vệ d5. Trung tâm vẫn vững!',
            6: '<b>3…{{Nf6}}</b> – Mã ra trận, cũng bảo vệ d5.',
          },
          marks: { 3: { red: ['d5'] }, 4: { green: ['d5'] } },
          lesson: 'Đen không cần ăn tốt c4. Giữ tốt d5 và ra quân là đủ.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', after: ['d4'],
          html: 'Trắng vừa đi 1.d4. Đen hãy <b>chiếm trung tâm</b>!',
          solution: ['d5'], accept: ['Nf6'],
          hint: 'Tốt d7 tiến 2 ô, đối diện tốt d4.',
          success: 'Đen đã có chỗ đứng ở trung tâm!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 4', after: ['d4', 'd5', 'c4'],
          html: 'Tốt c4 đang tấn công d5. Hãy <b>bảo vệ d5 bằng một tốt</b>!',
          solution: ['e6'], accept: ['c6'],
          hint: 'Tốt e7 tiến 1 ô.',
          success: 'Tốt d5 được bảo vệ, trung tâm của Đen vẫn vững!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Trắng đi 1.e4. Nước đáp nào giúp Đen chiếm trung tâm?', options: [
          { label: '1…e5', ok: true, why: 'Đúng! Tốt e5 chiếm trung tâm.' },
          { label: '1…a6', why: 'Chưa đúng. Tốt rìa không giúp chiếm trung tâm.' },
          { label: '1…h5', why: 'Chưa đúng. Tốt rìa không giúp chiếm trung tâm.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Sau 1.d4 d5 2.c4, Đen có bắt buộc ăn tốt c4 không?', options: [
          { label: 'Không, có thể giữ d5 bằng 2…e6', ok: true, why: 'Đúng! Giữ trung tâm và ra quân là đủ.' },
          { label: 'Có, phải ăn ngay', why: 'Chưa đúng. Đen có thể giữ trung tâm bằng e6 hoặc c6.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Cầm quân Đen có cần nhập thành sớm không?', options: [
          { label: 'Có, giống như Trắng', ok: true, why: 'Đúng! Câu thần chú dùng cho cả hai bên.' },
          { label: 'Không cần', why: 'Chưa đúng. Vua Đen cũng cần được giấu an toàn.' },
        ] },
      ],
    },
  ],
};

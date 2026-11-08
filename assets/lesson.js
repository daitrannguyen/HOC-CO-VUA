// Bộ dựng bài học cờ vua dùng chung cho các Bài 2..16.
// Mỗi bài là một file dữ liệu trong lessons/ (xem lessons/README.md), trang HTML chỉ gọi runLesson(data).
import { Chess } from 'https://cdn.jsdelivr.net/npm/chess.js@1.4.0/+esm';

/* ================= Tiện ích ================= */
const VN_PIECE = { K: 'V', Q: 'H', R: 'X', B: 'T', N: 'M' };
export const toVN = san => san.replace(/[KQRBN]/g, c => VN_PIECE[c]);
const clean = san => san.replace(/[+#!?]/g, '');
const FILES = 'abcdefgh';
const GLYPH = {
  w: { k: '♔', q: '♕', r: '♖', b: '♗', n: '♘', p: '♙' },
  b: { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' },
};
// Thế cờ bắt đầu của một khối: b.after = [nước đi từ thế ban đầu] hoặc b.fen (bỏ trống = thế ban đầu)
export function startFen(b) {
  if (b.after) { const g = new Chess(); b.after.forEach(m => g.move(m)); return g.fen(); }
  return !b.fen || b.fen === 'start' ? new Chess().fen() : b.fen;
}
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const setMsg = (box, html, kind = '') => { box.innerHTML = html; box.className = 'bubble' + (kind ? ' ' + kind : ''); };
// Viết nước đi trong lời giảng: {{Nf3}} -> Mf3
const vnText = html => (html || '').replace(/\{\{([^}]+)\}\}/g, (_, s) => toVN(s));

export function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#ff7a59', '#facc15', '#22c55e', '#6d5dfc', '#38bdf8', '#f472b6'];
  for (let i = 0; i < 90; i++) {
    const d = el('div', 'confetti');
    d.style.left = Math.random() * 100 + 'vw';
    d.style.background = colors[i % colors.length];
    document.body.appendChild(d);
    const dx = (Math.random() - .5) * 200, rot = Math.random() * 900;
    d.animate([
      { transform: 'translate(0,0) rotate(0)', opacity: 1 },
      { transform: `translate(${dx}px, ${innerHeight + 40}px) rotate(${rot}deg)`, opacity: .9 },
    ], { duration: 1600 + Math.random() * 1400, delay: Math.random() * 300, easing: 'cubic-bezier(.25,.6,.4,1)' }).onfinish = () => d.remove();
  }
}

/* ================= Bàn cờ (CSS grid) ================= */
export function createBoard(host, opts = {}) {
  host.classList.add('board');
  if (opts.onMove) host.classList.add('interactive');
  const sqEls = {};
  for (let r = 8; r >= 1; r--) for (let f = 0; f < 8; f++) {
    const name = FILES[f] + r;
    const d = el('div', 'sq ' + ((f + r) % 2 ? 'l' : 'd'));
    d.dataset.sq = name;
    if (r === 1) d.insertAdjacentHTML('beforeend', `<span class="coord f">${FILES[f]}</span>`);
    if (f === 0) d.insertAdjacentHTML('beforeend', `<span class="coord r">${r}</span>`);
    host.appendChild(d); sqEls[name] = d;
  }
  let marks = { yellow: [], green: [], red: [], last: [], hint: [] };
  let sel = null, selTargets = [];
  const xy = s => [FILES.indexOf(s[0]), 8 - +s[1]];

  function show(fen, move = null) {
    const g = new Chess(fen, { skipValidation: true });
    for (const name in sqEls) {
      sqEls[name].querySelector('.pc')?.remove();
      const p = g.get(name);
      sqEls[name].classList.toggle('has', !!p);
      if (p) {
        const s = el('span', 'pc'); s.textContent = GLYPH[p.color][p.type] + '︎';
        if (opts.canMove && opts.canMove(name)) s.classList.add('can');
        sqEls[name].appendChild(s);
      }
    }
    if (move) {
      slide(move.from, move.to);
      const rank = move.color === 'w' ? '1' : '8';
      if (move.flags?.includes('k')) slide('h' + rank, 'f' + rank);
      if (move.flags?.includes('q')) slide('a' + rank, 'd' + rank);
    }
  }
  function slide(from, to) {
    const p = sqEls[to].querySelector('.pc'); if (!p) return;
    const s = host.clientWidth / 8, [fx, fy] = xy(from), [tx, ty] = xy(to);
    p.style.transition = 'none';
    p.style.transform = `translate(${(fx - tx) * s}px, ${(fy - ty) * s}px)`;
    p.getBoundingClientRect();
    p.style.transition = 'transform .45s cubic-bezier(.3,.7,.3,1.15)';
    p.style.transform = '';
  }
  function paint() {
    const green = new Set([...marks.green, ...selTargets]);
    for (const name in sqEls) {
      const c = sqEls[name].classList;
      c.toggle('hl-yellow', marks.yellow.includes(name));
      c.toggle('hl-red', marks.red.includes(name));
      c.toggle('last', marks.last.includes(name));
      c.toggle('hint', marks.hint.includes(name));
      c.toggle('hl-green', green.has(name));
      c.toggle('sel', name === sel);
    }
  }
  const mark = m => { marks = { ...marks, ...m }; paint(); };
  const clearSel = () => { sel = null; selTargets = []; paint(); };
  const select = s => { sel = s; selTargets = opts.targets ? opts.targets(s) : []; paint(); opts.onSelect?.(s, selTargets); };

  if (opts.onMove || opts.onSelect) {
    let drag = null;
    host.addEventListener('pointerdown', e => {
      const sqEl = e.target.closest('.sq'); if (!sqEl) return;
      const s = sqEl.dataset.sq;
      if (sel && selTargets.includes(s) && opts.onMove) { const f = sel; clearSel(); opts.onMove(f, s); return; }
      if (opts.canMove && opts.canMove(s)) {
        select(s);
        const pc = sqEl.querySelector('.pc');
        if (pc && opts.onMove) { drag = { pc, x: e.clientX, y: e.clientY, from: s, moved: false }; host.setPointerCapture(e.pointerId); }
        e.preventDefault();
      } else clearSel();
    });
    host.addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) < 6) return;
      drag.moved = true; drag.pc.classList.add('dragging');
      drag.pc.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
    });
    const end = e => {
      if (!drag) return;
      const d = drag; drag = null;
      d.pc.classList.remove('dragging'); d.pc.style.transform = '';
      if (!d.moved) return;
      const t = document.elementFromPoint(e.clientX, e.clientY)?.closest('.sq');
      if (t && host.contains(t) && t.dataset.sq !== d.from && selTargets.includes(t.dataset.sq)) {
        const to = t.dataset.sq; clearSel(); opts.onMove(d.from, to, true);
      }
    };
    host.addEventListener('pointerup', end);
    host.addEventListener('pointercancel', end);
  }
  return { show, mark, clearSel };
}

/* ================= Khối: Xem ván (Lùi / Tiếp / Tự chạy) ================= */
const stoppers = [];
function blockReplay(b) {
  const wrap = el('div', 'grid2');
  const left = el('div'), right = el('div');
  const boardEl = el('div'); left.appendChild(boardEl);
  const ctrl = el('div', 'row'); ctrl.style.justifyContent = 'center';
  const prev = el('button', 'btn ghost', '◀ Lùi'), next = el('button', 'btn', 'Tiếp ▶'), auto = el('button', 'btn orange', '⏯ Tự chạy');
  ctrl.append(prev, next, auto); left.appendChild(ctrl);
  if (b.html) right.appendChild(el('div', '', vnText(b.html)));
  const msg = el('div', 'bubble info', vnText(b.notes?.[0] || 'Bấm “Tiếp” để xem từng nước.'));
  const list = el('table', 'moves');
  right.append(msg, list);
  if (b.lesson) right.appendChild(el('div', 'bubble good', '🧠 <b>Bài học:</b> ' + vnText(b.lesson)));
  wrap.append(left, right);

  const board = createBoard(boardEl);
  const g = new Chess(startFen(b));
  const startNo = g.moveNumber(), startBlack = g.turn() === 'b';
  const fens = [g.fen()], moves = [];
  b.sans.forEach(s => { moves.push(g.move(s)); fens.push(g.fen()); });
  let i = 0, timer = null;

  // bảng nước đi
  const rows = new Map();
  let no = startNo, color = startBlack ? 'b' : 'w';
  moves.forEach((m, k) => {
    if (!rows.has(no)) rows.set(no, [color === 'b' ? '<td>…</td>' : '<td></td>', '<td></td>']);
    rows.get(no)[color === 'w' ? 0 : 1] = `<td class="mv" data-ply="${k + 1}">${toVN(m.san)}${b.suffix?.[k + 1] || ''}</td>`;
    if (color === 'b') no++;
    color = color === 'w' ? 'b' : 'w';
  });
  list.innerHTML = [...rows].map(([n, [w, bl]]) => `<tr><td>${n}.</td>${w}${bl}</tr>`).join('');
  list.addEventListener('click', e => { const td = e.target.closest('.mv'); if (td) { stop(); go(+td.dataset.ply); } });

  function go(n, animate = false) {
    n = Math.max(0, Math.min(moves.length, n));
    const m = moves[n - 1], anim = animate && n === i + 1 ? m : null;
    i = n;
    board.show(fens[i], anim);
    board.mark({ last: m ? [m.from, m.to] : [], red: [], green: [], yellow: b.yellow || [], ...(b.marks?.[i] || {}) });
    list.querySelectorAll('.mv').forEach(td => td.classList.toggle('cur', +td.dataset.ply === i));
    prev.disabled = i === 0; next.disabled = i === moves.length;
    const note = b.notes?.[i];
    if (note) setMsg(msg, vnText(note), b.bad?.includes(i) ? 'bad' : 'info');
    else if (i === 0) setMsg(msg, 'Bấm “Tiếp” để xem từng nước.', 'info');
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; auto.textContent = '⏯ Tự chạy'; } }
  stoppers.push(stop);
  prev.onclick = () => { stop(); go(i - 1); };
  next.onclick = () => { stop(); go(i + 1, true); };
  auto.onclick = () => {
    if (timer) return stop();
    if (i === moves.length) go(0);
    auto.textContent = '⏸ Dừng';
    timer = setInterval(() => { if (i >= moves.length) stop(); else go(i + 1, true); }, 1400);
  };
  go(0);
  return wrap;
}

/* ================= Khối: Câu đố trên bàn cờ ================= */
function mateInOne(g) {
  for (const m of g.moves()) { const t = new Chess(g.fen()); t.move(m); if (t.isCheckmate()) return m; }
  return null;
}
function blockPuzzle(b) {
  const wrap = el('div', 'grid2');
  const left = el('div'), right = el('div');
  const boardEl = el('div'); left.appendChild(boardEl);
  const FEN = startFen(b);
  const startTurn = new Chess(FEN).turn();
  right.appendChild(el('div', 'puzzle-tag', b.tag || '🧩 Câu đố'));
  right.appendChild(el('p', '', `<span class="turn">${startTurn === 'w' ? '⚪ Trắng' : '⚫ Đen'} đi.</span> ` + vnText(b.html || '')));
  const msg = el('div', 'bubble', 'Con kéo hoặc bấm quân, rồi bấm ô muốn đi (chấm xanh).');
  const row = el('div', 'row');
  const hintBtn = el('button', 'btn ghost', '💡 Gợi ý'), resetBtn = el('button', 'btn ghost', '↺ Làm lại');
  row.append(hintBtn, resetBtn); right.append(msg, row);
  wrap.append(left, right);

  let g, step, lock, done;
  const sol = b.solution || [];
  const board = createBoard(boardEl, {
    canMove: s => !lock && !done && g.get(s)?.color === g.turn() && g.turn() === startTurn,
    targets: s => g.moves({ square: s, verbose: true }).map(m => m.to),
    onMove: (from, to, dropped) => {
      let m; try { m = g.move({ from, to, promotion: 'q' }); } catch { return; }
      board.show(g.fen(), dropped ? null : m);
      board.mark({ last: [from, to], hint: [], red: [] });
      const ok = (sol[step] && clean(m.san) === clean(sol[step]))
        || (step === 0 && b.accept?.some(a => clean(a) === clean(m.san)))
        || (step === 0 && b.defend && !mateInOne(g));
      if (!ok) return wrong(m);
      const alt = sol[step] && clean(m.san) !== clean(sol[step]);
      step++;
      if (alt || step >= sol.length) return win(m);
      // đối thủ đáp
      lock = true;
      setMsg(msg, `👍 <b>${toVN(m.san)}</b> – đúng rồi! Xem đối thủ đáp…`, 'good');
      setTimeout(() => {
        const r = g.move(sol[step]); step++;
        board.show(g.fen(), r); board.mark({ last: [r.from, r.to] });
        lock = false;
        if (step >= sol.length) return win(r);
        setMsg(msg, `Đối thủ đi <b>${toVN(r.san)}</b>. ${vnText(b.next || 'Đến lượt con, đi tiếp nào!')}`, 'info');
      }, 700);
    },
  });
  function win(m) {
    done = true;
    if (g.isCheckmate()) { const k = kingSquare(g, g.turn()); board.mark({ red: k ? [k] : [] }); }
    setMsg(msg, '🎉 ' + vnText(b.success || `Giỏi lắm! <b>${toVN(m.san)}</b>`), 'good');
    confetti();
  }
  function wrong(m) {
    lock = true;
    const mate = mateInOne(g);
    if (mate) setMsg(msg, `❌ Sau <b>${toVN(m.san)}</b>, đối thủ đi <b>${toVN(mate)}</b> chiếu hết!`, 'bad');
    else setMsg(msg, `🤔 <b>${toVN(m.san)}</b> chưa phải nước bài học muốn tìm. Thử lại nhé! ${vnText(b.wrong || '')}`, 'bad');
    setTimeout(() => { g.undo(); board.show(g.fen()); board.mark({ last: [] }); lock = false; }, 2200);
  }
  hintBtn.onclick = () => {
    if (done) return;
    const want = sol[step] || b.accept?.[0];
    let from = [];
    if (want) { try { const t = new Chess(g.fen()); from = [t.move(want).from]; } catch {} }
    board.mark({ hint: from });
    setMsg(msg, '💡 ' + vnText(b.hint || 'Quân đang nhún nhảy là quân cần đi.'), 'info');
  };
  function reset() {
    g = new Chess(FEN); step = 0; lock = false; done = false;
    board.clearSel(); board.show(g.fen()); board.mark({ last: [], hint: [], red: [], yellow: b.yellow || [], green: [] });
    setMsg(msg, 'Con kéo hoặc bấm quân, rồi bấm ô muốn đi (chấm xanh).');
  }
  resetBtn.onclick = reset;
  reset();
  return wrap;
}
function kingSquare(g, color) {
  for (const row of g.board()) for (const p of row) if (p && p.type === 'k' && p.color === color) return p.square;
  return null;
}

/* ================= Khối: Khám phá (bấm quân xem nước đi, không đi) ================= */
function blockExplore(b) {
  const wrap = el('div', 'grid2');
  const left = el('div'), right = el('div');
  const boardEl = el('div'); left.appendChild(boardEl);
  if (b.html) right.appendChild(el('div', '', vnText(b.html)));
  const msg = el('div', 'bubble', vnText(b.prompt || 'Bấm vào một quân để xem nó đi được những ô nào.'));
  right.appendChild(msg);
  wrap.append(left, right);
  const g = new Chess(startFen(b));
  const board = createBoard(boardEl, {
    canMove: s => !!g.get(s) && g.get(s).color === g.turn(),
    targets: s => g.moves({ square: s, verbose: true }).map(m => m.to),
    onSelect: (s, t) => {
      const custom = b.squares?.[s];
      if (custom) setMsg(msg, vnText(custom), t.length ? 'info' : 'bad');
      else setMsg(msg, t.length ? `Quân này đi được <b>${t.length}</b> ô (chấm xanh).` : 'Quân này <b>không đi được</b> ô nào!', t.length ? 'info' : 'bad');
    },
  });
  board.show(g.fen());
  board.mark({ yellow: b.yellow || [], red: b.red || [], green: [] });
  return wrap;
}

/* ================= Khối: Câu hỏi trắc nghiệm ================= */
function blockQuiz(b) {
  const box = el('div', 'quiz');
  box.appendChild(el('h3', '', vnText(b.q)));
  const opts = el('div', 'opts'), msg = el('div', 'bubble', 'Bấm chọn đáp án.');
  const need = b.options.filter(o => o.ok).length, found = new Set();
  b.options.forEach((o, k) => {
    const btn = el('button', 'opt', vnText(o.label));
    btn.onclick = () => {
      btn.classList.add(o.ok ? 'right' : 'wrong');
      if (o.ok) {
        found.add(k);
        setMsg(msg, '✅ ' + vnText(o.why || 'Đúng rồi!') + (found.size < need ? `<br>Còn ${need - found.size} đáp án đúng nữa!` : ''), 'good');
        confetti();
      } else {
        setMsg(msg, '❌ ' + vnText(o.why || 'Chưa đúng, thử lại nhé!'), 'bad');
        setTimeout(() => btn.classList.remove('wrong'), 1200);
      }
    };
    opts.appendChild(btn);
  });
  box.append(opts, msg);
  return box;
}

const BLOCKS = { text: b => el('div', '', vnText(b.html)), replay: blockReplay, puzzle: blockPuzzle, explore: blockExplore, quiz: blockQuiz };

/* ================= Dựng cả bài ================= */
export function runLesson(data) {
  document.title = `Bài ${data.no} · ${data.title}`;
  const body = document.body;
  body.innerHTML = '';
  body.appendChild(el('nav', 'topbar', `<a href="./">🏠 Trang chủ</a><a href="./#phan-${data.part}">📚 Danh sách bài</a>`));
  body.appendChild(el('header', '', `<h1>${data.icon || '♞'} Bài ${data.no}: <span>${data.title}</span></h1>${data.sub ? `<p class="lesson-sub">${data.sub}</p>` : ''}`));
  const steps = el('div', 'steps'); body.appendChild(steps);
  const main = el('main'); body.appendChild(main);
  const pager = el('nav', 'pager');
  const prevBtn = el('button', 'btn ghost', '◀ Lùi'), nextBtn = el('button', 'btn', 'Tiếp ▶');
  pager.append(prevBtn, nextBtn); body.appendChild(pager);

  const sections = data.sections.map((s, i) => {
    const sec = el('section');
    sec.dataset.slug = s.slug;
    sec.appendChild(el('h2', '', vnText(s.title)));
    for (const b of s.blocks) { const w = el('div', 'block'); w.appendChild(BLOCKS[b.type](b)); sec.appendChild(w); }
    main.appendChild(sec);
    const btn = el('button', '', `${i + 1}. ${s.short || s.title.replace(/<[^>]+>/g, '')}`);
    btn.onclick = () => goStep(i);
    steps.appendChild(btn);
    return sec;
  });

  let cur = 0;
  function goStep(i) {
    stoppers.forEach(f => f());
    cur = Math.max(0, Math.min(sections.length - 1, i));
    sections.forEach((s, k) => s.classList.toggle('on', k === cur));
    [...steps.children].forEach((b, k) => { b.classList.toggle('on', k === cur); if (k < cur) b.classList.add('done'); });
    steps.children[cur].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    prevBtn.disabled = cur === 0;
    const last = cur === sections.length - 1;
    nextBtn.textContent = last ? (data.nextLesson ? `Bài tiếp ▶` : '🏠 Trang chủ') : 'Tiếp ▶';
    history.replaceState(null, '', '#' + sections[cur].dataset.slug);
    scrollTo({ top: 0, behavior: 'smooth' });
  }
  prevBtn.onclick = () => goStep(cur - 1);
  nextBtn.onclick = () => {
    if (cur < sections.length - 1) return goStep(cur + 1);
    location.href = data.nextLesson || './';
  };
  const openHash = () => {
    const i = sections.findIndex(s => s.dataset.slug === decodeURIComponent(location.hash.slice(1)));
    goStep(i < 0 ? 0 : i);
  };
  addEventListener('hashchange', openHash);
  openHash();
  window.__goStep = goStep;
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
}

// Kiểm tra mọi thế cờ, nước đi, câu đố trong lessons/*.js bằng chess.js.
// Chạy: npm i --no-save chess.js@1.4.0 && node tools/verify-lessons.mjs
import { Chess } from 'chess.js';
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'lessons');
let fails = 0, passes = 0;
const ck = (name, ok, extra = '') => { if (ok) passes++; else { fails++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const clean = s => s.replace(/[+#!?]/g, '');
const startFen = b => { if (b.after) { const g = new Chess(); b.after.forEach(m => g.move(m)); return g.fen(); } return !b.fen || b.fen === 'start' ? new Chess().fen() : b.fen; };
const tryMove = (g, m) => { try { return g.move(m); } catch { return null; } };
const mateInOne = g => g.moves().find(m => { const t = new Chess(g.fen()); t.move(m); return t.isCheckmate(); });
const sanOk = (m, want) => m && m.san === want; // so khớp cả dấu +/# để lời giảng đúng ký hiệu

for (const f of readdirSync(root).filter(f => /^(bai|nm)-\d+\.js$/.test(f)).sort()) {
  const { default: L } = await import(pathToFileURL(join(root, f)));
  console.log(`\n${f} · Bài ${L.no}: ${L.title}`);
  for (const sec of L.sections) for (const [k, b] of sec.blocks.entries()) {
    const id = `${sec.slug}#${k + 1} ${b.type}${b.tag ? ' ' + b.tag : ''}`;
    let fen;
    try { fen = startFen(b); new Chess(fen); } catch (e) { ck(id + ': thế cờ hợp lệ', false, e.message); continue; }
    if (b.type === 'replay') {
      const g = new Chess(fen); let ok = true;
      for (const s of b.sans) { const m = tryMove(g, s); if (!sanOk(m, s)) { ck(`${id}: ${s}`, false, m ? 'chess.js ghi là ' + m.san : 'không hợp lệ'); ok = false; break; } }
      ck(`${id}: ${b.sans.length} nước hợp lệ`, ok);
      const last = b.sans.at(-1);
      if (ok && last.endsWith('#')) ck(`${id}: ${last} là chiếu hết`, g.isCheckmate());
      if (ok && b.verify?.stalemate) ck(`${id}: kết thúc hòa pat`, g.isStalemate());
      if (ok && b.verify?.promote) ck(`${id}: có phong cấp`, b.sans.some(x => x.includes('=')));
    }
    if (b.type === 'puzzle') {
      const g = new Chess(fen); let ok = true;
      (b.solution ||= []).forEach((s, i) => {
        if (!ok) return;
        if (i % 2 === 1) { const n = g.moves().length; if (n > 1) console.log(`  note ${id}: nước đáp ${s} – đối thủ có ${n} lựa chọn`); }
        const m = tryMove(g, s); if (!sanOk(m, s)) { ck(`${id}: ${s}`, false, m ? 'chess.js ghi là ' + m.san : 'không hợp lệ'); ok = false; }
      });
      if (b.solution.length) ck(`${id}: lời giải ${b.solution.join(' ')} hợp lệ`, ok);
      if (ok && b.solution.at(-1)?.endsWith('#')) ck(`${id}: kết thúc chiếu hết`, g.isCheckmate());
      if (ok && b.anyMate) ck(`${id}: anyMate – lời giải kết thúc chiếu hết`, g.isCheckmate());
      if (b.solution.length === 0 && !b.accept?.length) ck(`${id}: có lời giải hoặc đáp án`, false);
      for (const a of b.accept || []) {
        const t = new Chess(fen); const m = tryMove(t, a);
        ck(`${id}: đáp án ${a} hợp lệ`, sanOk(m, a), m?.san);
        if (b.defend && m) ck(`${id}: sau ${a} không bị chiếu hết 1 nước`, !mateInOne(t), mateInOne(t));
      }
      const v = b.verify || {};
      if (v.fork) {
        const t = new Chess(fen); const m = t.move(b.solution[0]);
        for (const sq of v.fork) ck(`${id}: ${m.san} tấn công ${sq}`, t.attackers(sq, m.color).includes(m.to));
      }
      if (v.followup) {
        const t = new Chess(fen); t.move(b.solution[0]);
        const bad = t.moves().filter(r => { const u = new Chess(t.fen()); u.move(r); return !u.moves().map(clean).includes(clean(v.followup)); });
        ck(`${id}: sau mọi nước đáp, ${v.followup} vẫn đi được`, !bad.length, 'trừ ' + bad.join(','));
      }
      if (v.onlyFile) {
        const t = new Chess(fen); t.move(b.solution[0]);
        const ms = t.moves({ square: v.onlyFile.sq, verbose: true });
        ck(`${id}: quân ${v.onlyFile.sq} chỉ đi trên cột ${v.onlyFile.file} (${ms.length} nước)`, ms.length > 0 && ms.every(m => m.to[0] === v.onlyFile.file));
      }
      if (v.free) {
        const t = new Chess(fen); const m = t.move(b.solution[0]);
        const back = t.moves({ verbose: true }).filter(r => r.to === m.to);
        ck(`${id}: ${m.san} ăn quân miễn phí (đối thủ không ăn lại được)`, !!m.captured && back.length === 0, back.map(r => r.san).join(','));
      }
      if (v.stalemateMove) {
        const t = new Chess(fen); t.move(v.stalemateMove);
        ck(`${id}: ${v.stalemateMove} gây hòa pat (bẫy)`, t.isStalemate());
      }
      if (v.line) {
        const t = new Chess(fen); b.solution.forEach(s => t.move(s));
        ck(`${id}: tiếp theo ${v.line.join(' ')} hợp lệ`, v.line.every(s => sanOk(tryMove(t, s), s)));
      }
    }
    if (b.type === 'explore') {
      const t = new Chess(fen);
      for (const sq of b.verify?.zero || []) ck(`${id}: quân ${sq} không đi được`, t.get(sq) && t.moves({ square: sq }).length === 0);
      if (b.verify?.stalemate) ck(`${id}: thế cờ là hòa pat`, t.isStalemate());
      for (const [sq, n] of Object.entries(b.verify?.count || {})) ck(`${id}: quân ${sq} đi được ${n} ô`, new Set(t.moves({ square: sq, verbose: true }).map(m => m.to)).size === n, String(new Set(t.moves({ square: sq, verbose: true }).map(m => m.to)).size));
    }
  }
}
console.log(`\n${passes} đạt, ${fails} lỗi`);
process.exit(fails ? 1 : 0);

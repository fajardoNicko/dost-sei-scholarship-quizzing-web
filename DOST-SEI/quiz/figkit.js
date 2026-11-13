/* ============================================================
   figkit.js — small helpers for animated SVG / HTML figures,
   plus the generic figures that question data calls by name:
     fig flow   a|label|b|label|c ;; next row ...
     fig table  head|head ;; cell|cell ;; >highlighted|row
     fig bridge A|B|C|D|relation
     fig fix    before|wrong|right|after|note        (wrong = _ for a blank)
     fig chat   question|reply|note
     fig pairs  w1|sym|w2|note ;; >highlighted row
     fig quote  text with {{highlighted part}}
     fig punnett top1|top2 ;; left1|left2 ;; c1|c2|c3|c4 ;; 1,4   (highlight)
   Item-specific figures live in figs-1/2/3.js as FIGS.q<id>.
   ============================================================ */
(function () {
  const K = {
    ink: 'var(--ink)', mute: 'var(--muted)', line: 'var(--line)', blue: 'var(--blue)', sky: 'var(--sky)',
    navy: 'var(--navy)', gold: 'var(--gold)', red: 'var(--red)', green: 'var(--green)', violet: 'var(--violet)',
    orange: 'var(--orange)', card: 'var(--card)', ice: 'var(--ice)', water: 'var(--water)', soft: 'var(--soft)',
    pred: 'var(--palered)', pgreen: 'var(--palegreen)', pgold: 'var(--palegold)'
  };
  let uid = 0;
  const r1 = v => Math.round(v * 10) / 10;
  const fmt = v => (v < 0 ? '−' + Math.abs(v) : String(v));

  function sty(o, stroke) {
    let s = `stroke:${o.c || stroke || 'none'};fill:${o.f || 'none'};`;
    if (o.w != null) s += `stroke-width:${o.w};`;
    if (o.dash) s += `stroke-dasharray:${o.dash};`;
    if (o.op != null) s += `opacity:${o.op};`;
    if (o.dl != null) s += `--d:${o.dl}s;`;
    if (o.s) s += o.s;
    return ` style="${s}"${o.cls ? ` class="${o.cls}"` : ''}${o.at ? ' ' + o.at : ''}`;
  }
  const svg = (w, h, body, o = {}) =>
    `<svg class="fig ${o.cls || ''}" viewBox="0 0 ${w} ${h}" style="max-width:${o.max || w}px" role="img" aria-label="${o.label || 'figure'}">${body}</svg>`;
  const ln = (x1, y1, x2, y2, o = {}) =>
    `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" stroke-linecap="round"${sty({ w: 2, ...o }, K.ink)}/>`;
  const rc = (x, y, w, h, o = {}) =>
    `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${o.rx || 0}"${sty({ w: 2, ...o }, K.ink)}>${o.in || ''}</rect>`;
  const ci = (cx, cy, r, o = {}) =>
    `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r}"${sty({ w: 2, ...o }, K.ink)}>${o.in || ''}</circle>`;
  const el = (cx, cy, rx, ry, o = {}) =>
    `<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${rx}" ry="${ry}"${sty({ w: 2, ...o }, K.ink)}>${o.in || ''}</ellipse>`;
  const pa = (d, o = {}) =>
    `<path d="${d}" stroke-linejoin="round" stroke-linecap="round"${o.draw ? ' pathLength="1"' : ''}${sty({ w: 2, ...o, cls: ((o.cls || '') + (o.draw ? ' drw' : '')).trim() }, K.ink)}>${o.in || ''}</path>`;
  const poly = (pts, o = {}) =>
    `<polygon points="${pts}" stroke-linejoin="round"${sty({ w: 2, ...o }, K.ink)}>${o.in || ''}</polygon>`;
  function tx(x, y, t, o = {}) {
    return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${o.a || 'middle'}" dominant-baseline="${o.b || 'middle'}" font-size="${o.fs || 13}" font-weight="${o.fw || 800}" style="fill:${o.f || K.ink};${o.dl != null ? `--d:${o.dl}s;` : ''}${o.s || ''}"${o.cls ? ` class="${o.cls}"` : ''}${o.at ? ' ' + o.at : ''}>${t}</text>`;
  }
  const g = (inner, o = {}) =>
    `<g${o.tr ? ` transform="${o.tr}"` : ''}${o.cls ? ` class="${o.cls}"` : ''}${o.at ? ' ' + o.at : ''} style="${o.dl != null ? `--d:${o.dl}s;` : ''}${o.s || ''}">${inner}</g>`;
  function ar(x1, y1, x2, y2, o = {}) {
    const c = o.c || K.ink, w = o.w || 2.5, h = o.h || 6 + w * 1.6;
    const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - h * Math.cos(a), by = y2 - h * Math.sin(a), k = h * 0.55;
    const pts = `${r1(x2)},${r1(y2)} ${r1(bx + k * Math.sin(a))},${r1(by - k * Math.cos(a))} ${r1(bx - k * Math.sin(a))},${r1(by + k * Math.cos(a))}`;
    return g(ln(x1, y1, bx, by, { c, w, dash: o.dash }) + `<polygon points="${pts}" style="fill:${c}"/>`, o);
  }
  // SMIL helpers (each <svg> has its own clock, so re-inserting the figure replays it)
  const anim = (attr, values, dur, o = {}) =>
    `<animate attributeName="${attr}" values="${values}" dur="${dur}s" begin="${o.begin || '0s'}" fill="${o.fill || 'freeze'}" repeatCount="${o.rep || 1}"${o.kt ? ` keyTimes="${o.kt}"` : ''}${o.ks ? ` calcMode="spline" keySplines="${o.ks}"` : ''}/>`;
  const spin = (cx, cy, dur, dir = 1) =>
    `<animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="${360 * dir} ${cx} ${cy}" dur="${dur}s" repeatCount="indefinite"/>`;
  const turn = (values, dur, o = {}) =>
    `<animateTransform attributeName="transform" type="${o.type || 'rotate'}" values="${values}" dur="${dur}s" begin="${o.begin || '0s'}" fill="freeze" repeatCount="${o.rep || 1}"${o.kt ? ` keyTimes="${o.kt}"` : ''}${o.ks ? ` calcMode="spline" keySplines="${o.ks}"` : ''}/>`;
  const move = (path, dur, o = {}) =>
    `<animateMotion path="${path}" dur="${dur}s" begin="${o.begin || '0s'}" fill="${o.fill || 'freeze'}" repeatCount="${o.rep || 1}"${o.rot ? ' rotate="auto"' : ''}${o.kt ? ` keyPoints="${o.kp}" keyTimes="${o.kt}" calcMode="${o.cm || 'linear'}"` : ''}${o.ks ? ` keySplines="${o.ks}"` : ''}/>`;

  const splitRows = a => String(a || '').split(';;').map(r => r.split('|').map(s => s.trim()));
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  /* ---------- coordinate plot ---------- */
  function plot(o) {
    const W = o.W || 340, H = o.H || 260, P = o.pad ?? 30;
    const [x0, x1] = o.x, [y0, y1] = o.y;
    const X = x => r1(P + (x - x0) / (x1 - x0) * (W - 2 * P));
    const Y = y => r1(H - P - (y - y0) / (y1 - y0) * (H - 2 * P));
    const id = 'cp' + (++uid);
    let b = `<defs><clipPath id="${id}"><rect x="${P}" y="${P - 4}" width="${W - 2 * P}" height="${H - 2 * P + 8}"/></clipPath></defs>`;
    const gx = o.gx || 1, gy = o.gy || 1;
    if (o.grid !== false) {
      for (let x = Math.ceil(x0 / gx) * gx; x <= x1 + 1e-9; x += gx) b += ln(X(x), P, X(x), H - P, { c: K.line, w: 1 });
      for (let y = Math.ceil(y0 / gy) * gy; y <= y1 + 1e-9; y += gy) b += ln(P, Y(y), W - P, Y(y), { c: K.line, w: 1 });
    }
    const ax = x0 <= 0 && x1 >= 0 ? X(0) : P, ay = y0 <= 0 && y1 >= 0 ? Y(0) : H - P;
    b += ar(P - 4, ay, W - P + 12, ay, { c: K.mute, w: 1.5, h: 7 }) + ar(ax, H - P + 4, ax, P - 12, { c: K.mute, w: 1.5, h: 7 });
    b += tx(W - P + 12, ay + 13, o.xl || 'x', { fs: 12, f: K.mute, a: 'end' }) + tx(ax + 8, P - 12, o.yl || 'y', { fs: 12, f: K.mute, a: 'start' });
    (o.xt || []).forEach(v => { b += ln(X(v), ay - 3, X(v), ay + 3, { c: K.mute, w: 1.5 }) + tx(X(v), ay + 13, fmt(v), { fs: 11, f: K.mute, fw: 700 }); });
    (o.yt || []).forEach(v => { b += ln(ax - 3, Y(v), ax + 3, Y(v), { c: K.mute, w: 1.5 }) + tx(ax - 6, Y(v), fmt(v), { fs: 11, f: K.mute, fw: 700, a: 'end' }); });
    const curve = (fn) => {
      let d = '', pen = false; const N = fn.N || 260;
      const span = y1 - y0;
      for (let i = 0; i <= N; i++) {
        let x, y;
        if (fn.px) { const t = fn.t[0] + (fn.t[1] - fn.t[0]) * i / N; x = fn.px(t); y = fn.py(t); }
        else { const a = fn.dom ? fn.dom[0] : x0, bb = fn.dom ? fn.dom[1] : x1; x = a + (bb - a) * i / N; y = fn.f(x); }
        if (!isFinite(y) || y < y0 - span || y > y1 + span) { pen = false; continue; }
        d += (pen ? ' L' : ' M') + X(x) + ',' + Y(y); pen = true;
      }
      return d;
    };
    if (o.area) {
      const A = o.area; let d = `M${X(A.a)},${Y(0)}`;
      for (let i = 0; i <= 80; i++) { const x = A.a + (A.b - A.a) * i / 80; d += ` L${X(x)},${Y(A.f(x))}`; }
      d += ` L${X(A.b)},${Y(0)} Z`;
      b += pa(d, { f: A.c || K.sky, c: 'none', op: 0.32, cls: 'fi', dl: A.dl ?? 1.1, w: 0 });
    }
    (o.segs || []).forEach(s => {
      const f = s.arrow ? ar : ln;
      b += f(X(s.x1), Y(s.y1), X(s.x2), Y(s.y2), { c: s.c || K.mute, w: s.w || 1.8, dash: s.dash || (s.arrow ? null : '5 5'), cls: 'fi', dl: s.dl ?? 1 });
    });
    (o.fns || []).forEach(fn => {
      const dl = fn.dl ?? 0.2;
      b += `<g clip-path="url(#${id})">` + pa(curve(fn), { c: fn.c || K.blue, w: fn.w || 3, dash: fn.dash, draw: !fn.dash, cls: fn.dash ? 'fi' : '', dl }) + '</g>';
      if (fn.lbl) b += tx(X(fn.lbl[0]), Y(fn.lbl[1]), fn.lbl[2], { fs: 12.5, f: fn.c || K.blue, cls: 'fi', dl: dl + 0.9, a: fn.lbl[3] || 'middle' });
    });
    if (o.extra) b += o.extra(X, Y);
    (o.pts || []).forEach(p => {
      const c = p.c || K.red, dl = p.dl ?? 1.3;
      b += ci(X(p.x), Y(p.y), p.r || 5, { f: p.open ? K.card : c, c, w: 2.5, cls: 'pop', dl });
      if (p.t) b += tx(X(p.x) + (p.dx || 0), Y(p.y) + (p.dy ?? -15), p.t, { fs: 12, cls: 'fi', dl: dl + 0.2, a: p.a || 'middle' });
    });
    return svg(W, H, b, o);
  }

  /* ---------- vertical bars ---------- */
  const topRound = (x, y, w, h, r) => {
    r = Math.min(r, w / 2, h);
    return `M${r1(x)},${r1(y + h)} V${r1(y + r)} Q${r1(x)},${r1(y)} ${r1(x + r)},${r1(y)} H${r1(x + w - r)} Q${r1(x + w)},${r1(y)} ${r1(x + w)},${r1(y + r)} V${r1(y + h)} Z`;
  };
  function bars(o) {
    const data = o.data, W = o.W || 340, H = o.H || 220, P = 26, n = data.length;
    const max = o.max ?? Math.max(...data.map(d => d.v)), min = o.min ?? 0;
    const slot = (W - 2 * P) / n, bw = Math.min(o.bw || 52, slot * 0.64);
    const base = H - 30, Y = v => base - (v - min) / (max - min) * (H - 66);
    let b = ln(P - 6, base, W - P + 6, base, { c: K.mute, w: 1.5 });
    data.forEach((d, i) => {
      const cx = P + slot * (i + 0.5), top = Y(d.v), h = Math.max(base - top, 0.5), dl = (o.dl || 0) + i * (o.step ?? 0.18);
      b += `<path d="${topRound(cx - bw / 2, top, bw, h, 5)}" class="grow" style="fill:${d.c || K.blue};--d:${dl}s"/>`;
      b += tx(cx, top - 11, d.t ?? d.v, { fs: 12.5, cls: 'fi', dl: dl + 0.5 });
      b += tx(cx, base + 15, d.l, { fs: 12, f: K.mute, fw: 800 });
    });
    if (o.extra) b += o.extra({ P, slot, base, Y });
    return svg(W, H, b, o);
  }

  const FIGS = {};
  const MACROS = {};
  const delay = i => `style="--d:${(i * 0.32).toFixed(2)}s"`;

  /* ---------- generic HTML figures ---------- */
  FIGS.flow = a => {
    let k = 0;
    const rows = splitRows(a).map(cells => '<div class="frow">' + cells.map((c, i) => {
      k++;
      if (i % 2) return `<div class="farrow" ${delay(k)}>${c}</div>`;
      let cls = 'fnode';
      if (c.startsWith('^')) { cls += ' last'; c = c.slice(1); }
      else if (c.startsWith('!')) { cls += ' bad'; c = c.slice(1); }
      return `<div class="${cls}" ${delay(k)}>${c}</div>`;
    }).join('') + '</div>');
    return `<div class="hfig">${rows.join('')}</div>`;
  };
  FIGS.table = a => {
    const rows = splitRows(a), head = rows.shift();
    let k = 0;
    const body = rows.map(r => {
      let cls = '';
      if (r[0].startsWith('>')) { cls = 'hl'; r[0] = r[0].slice(1); }
      else if (r[0].startsWith('!')) { cls = 'no'; r[0] = r[0].slice(1); }
      k++;
      return `<tr class="${cls}">` + r.map(c => `<td ${delay(k)}>${c}</td>`).join('') + '</tr>';
    }).join('');
    return `<div class="hfig"><table class="ftable"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;
  };
  FIGS.bridge = a => {
    const [A, B, C, D, rel] = a.split('|').map(s => s.trim());
    return `<div class="hfig"><div class="bridge">
      <div class="w" ${delay(0)}>${A}</div><div class="rel" ${delay(1)}>${rel}</div><div class="w" ${delay(2)}>${B}</div>
      <div class="sep">SAME BRIDGE</div>
      <div class="w" ${delay(3)}>${C}</div><div class="rel" ${delay(4)}>${rel}</div><div class="w ans" ${delay(5)}>${D}</div>
    </div></div>`;
  };
  FIGS.fix = a => {
    const [pre, wrong, right, post, note] = a.split('|');
    const w = wrong.trim() === '_' ? '<span class="blank"></span>' : `<span class="wr">${wrong}</span>`;
    return `<div class="hfig"><div class="fix">${pre}${w} <span class="ok">${right}</span>${post}${note ? `<span class="note">${note}</span>` : ''}</div></div>`;
  };
  FIGS.chat = a => {
    const [q, r, n] = a.split('|');
    return `<div class="hfig"><div class="chat"><div class="bub l" ${delay(0)}>${q}</div><div class="bub r" ${delay(2)}>${r}</div>${n ? `<div class="bub n" ${delay(4)}>${n}</div>` : ''}</div></div>`;
  };
  FIGS.pairs = a => {
    const rows = splitRows(a).map((r, i) => {
      let cls = 'pr';
      if (r[0].startsWith('>')) { cls += ' hl'; r[0] = r[0].slice(1); }
      return `<div class="${cls}" ${delay(i)}><span>${r[0]}</span><span class="sym">${r[1]}</span><span>${r[2]}</span>${r[3] ? `<span class="note">${r[3]}</span>` : ''}</div>`;
    });
    return `<div class="hfig"><div class="pairs">${rows.join('')}</div></div>`;
  };
  FIGS.quote = a => `<div class="hfig"><div class="quote">${a.replace(/\{\{(.+?)\}\}/g, '<mark>$1</mark>')}</div></div>`;
  FIGS.punnett = a => {
    const [top, left, cells, hl] = splitRows(a);
    const on = (hl || []).join(',').split(',').map(Number);
    const s = 'style="width:74px;height:52px"';
    let h = `<div class="cell h" ${s}></div>` + top.map(t => `<div class="cell h" ${s}>${t}</div>`).join('');
    left.forEach((l, i) => {
      h += `<div class="cell h" ${s}>${l}</div>`;
      [0, 1].forEach(j => {
        const n = i * 2 + j + 1;
        h += `<div class="cell pp ${on.includes(n) ? 'on' : ''}" style="width:74px;height:52px;--d:${(0.3 + n * 0.3).toFixed(2)}s">${cells[n - 1]}</div>`;
      });
    });
    return `<div class="hfig"><div class="grid2" style="grid-template-columns:repeat(3,74px)">${h}</div></div>`;
  };

  window.FK = { K, r1, fmt, sty, svg, ln, rc, ci, el, pa, poly, tx, g, ar, anim, spin, turn, move, plot, bars, topRound, splitRows, esc, FIGS, MACROS };
})();

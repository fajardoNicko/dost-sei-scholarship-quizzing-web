/* Figures for Part II (items 36–70): Science. */
(function () {
  const { K, r1, svg, ln, rc, ci, el, pa, poly, tx, g, ar, anim, spin, turn, move, plot, bars, FIGS } = FK;
  const RBC = 'var(--red)';

  /* 36 — red blood cells in three solutions */
  FIGS.q36 = () => {
    let b = '';
    const panel = (ox, title, sub, kind) => {
      const cx = ox + 56, cy = 100;
      let s = rc(ox + 6, 40, 100, 118, { rx: 12, f: K.water, c: kind === 2 ? K.green : K.blue, w: kind === 2 ? 3 : 1.5, op: 0.95 });
      if (kind === 0) {
        let d = '';
        for (let i = 0; i <= 24; i++) { const t = i / 24 * 2 * Math.PI, r = i % 2 ? 12 : 17; d += (i ? 'L' : 'M') + r1(cx + r * Math.cos(t)) + ',' + r1(cy + r * Math.sin(t)); }
        s += pa(d + 'Z', { f: RBC, c: 'none', op: 0.85 });
        [0, 90, 180, 270].forEach((a, i) => { const t = (a + 45) * Math.PI / 180; s += ar(cx + 22 * Math.cos(t), cy + 22 * Math.sin(t), cx + 40 * Math.cos(t), cy + 40 * Math.sin(t), { c: K.navy, w: 2, h: 7, cls: 'fi', dl: 0.3 + i * 0.1 }); });
      } else if (kind === 1) {
        s += ci(cx, cy, 22, { f: RBC, c: 'none', op: 0.85 }) + ci(cx, cy, 9, { f: '#000', c: 'none', op: 0.12 });
      } else {
        s += `<circle cx="${cx}" cy="${cy}" r="20" style="fill:${RBC};opacity:.85">${anim('r', '20;20;36', 2.2, { kt: '0;0.2;1' })}${anim('opacity', '0.85;0.85;0.85;0', 2.8, { kt: '0;0.2;0.85;1' })}</circle>`;
        [0, 90, 180, 270].forEach((a, i) => { const t = (a + 45) * Math.PI / 180; s += ar(cx + 46 * Math.cos(t), cy + 46 * Math.sin(t), cx + 30 * Math.cos(t), cy + 30 * Math.sin(t), { c: K.navy, w: 2, h: 7, cls: 'fi', dl: 0.2 + i * 0.1 }); });
        for (let i = 0; i < 8; i++) { const t = i * Math.PI / 4; s += ln(cx + 28 * Math.cos(t), cy + 28 * Math.sin(t), cx + 42 * Math.cos(t), cy + 42 * Math.sin(t), { c: K.red, w: 2.5, cls: 'fi', dl: 2.7 }); }
        s += tx(cx, cy, 'burst!', { fs: 12, cls: 'fi', dl: 2.9 });
      }
      s += tx(cx, 20, title, { fs: 12 }) + tx(cx, 176, sub, { fs: 12, f: kind === 2 ? K.green : K.mute });
      return s;
    };
    b += panel(0, 'salty water', 'shrivels', 0) + panel(115, 'isotonic', 'no change', 1) + panel(230, 'distilled water', 'swells, bursts', 2);
    return svg(340, 188, b, { label: 'red blood cells in three solutions' });
  };

  /* 39 — transcription, base by base */
  FIGS.q39 = () => {
    const tpl = 'TACGGATTC'.split(''), pair = { T: 'A', A: 'U', C: 'G', G: 'C' };
    const cell = (c, cls, i) => `<div class="b ${cls}" style="--d:${(0.4 + i * 0.22).toFixed(2)}s">${c}</div>`;
    let h = '<div class="lab">DNA 3′</div>' + tpl.map(c => cell(c, 't', 0)).join('') + '<div class="lab">5′</div>';
    h += '<div></div>' + tpl.map(() => '<div class="bar"></div>').join('') + '<div></div>';
    h += '<div class="lab">mRNA 5′</div>' + tpl.map((c, i) => cell(pair[c], 'm', i)).join('') + '<div class="lab">3′</div>';
    return `<div class="hfig"><div class="dna" style="grid-template-columns:auto repeat(9,30px) auto">${h}</div>` +
      FIGS.flow('AUG<br><small>start codon</small>|·|CCU|·|AAG') + '</div>';
  };

  /* 40 — meiosis tree */
  FIGS.q40 = () => {
    const cell = (x, y, n, dl, c) => g(ci(x, y, 22, { f: c || K.ice, c: K.blue, w: 2 }) + tx(x, y + 1, n, { fs: 14 }), { cls: 'pop', dl });
    let b = cell(170, 34, '46', 0);
    b += ar(156, 54, 110, 84, { c: K.mute, w: 2, cls: 'fi', dl: 0.4 }) + ar(184, 54, 230, 84, { c: K.mute, w: 2, cls: 'fi', dl: 0.4 });
    b += cell(100, 104, '23', 0.6) + cell(240, 104, '23', 0.6);
    b += tx(300, 70, 'Meiosis I', { fs: 12, f: K.mute, a: 'start' }) + tx(300, 160, 'Meiosis II', { fs: 12, f: K.mute, a: 'start' });
    [[100, 60], [100, 140], [240, 200], [240, 280]].forEach(([from, to], i) => { b += ar(from + (to < from ? -10 : 10), 126, to, 160, { c: K.mute, w: 2, cls: 'fi', dl: 1.1 }); });
    [60, 140, 200, 280].forEach((x, i) => { b += cell(x, 182, '23', 1.3 + i * 0.12, K.pgreen); });
    b += tx(170, 224, '4 cells × 23 chromosomes (haploid)', { fs: 12.5, cls: 'fi', dl: 1.9 });
    return svg(340, 236, b, { label: 'meiosis' });
  };

  /* 41 — energy pyramid */
  FIGS.q41 = () => {
    const lv = [['grass', '10,000 kJ', 300, K.green], ['grasshopper', '1,000 kJ', 228, K.sky], ['frog', '100 kJ', 156, K.sky], ['snake', '10 kJ', 92, K.gold]];
    let b = '';
    lv.forEach(([n, v, w, c], i) => {
      const y = 170 - i * 44;
      b += g(rc(160 - w / 2, y, w, 36, { rx: 8, f: c, c: 'none', op: i === 3 ? 1 : 0.85 }) + tx(160, y + 18, `${n}: ${v}`, { fs: 12.5, f: i === 0 ? '#fff' : K.ink }), { cls: 'pop', dl: i * 0.45 });
      if (i < 3) b += tx(160 + w / 2 + 8, y - 4, '× 0.1', { fs: 12, a: 'start', f: K.mute, cls: 'fi', dl: i * 0.45 + 0.35 });
    });
    return svg(340, 214, b, { label: 'energy pyramid' });
  };

  /* 43 — homologous limbs */
  FIGS.q43 = () => {
    const H = K.blue, R = K.green, C = K.gold, P = K.violet;
    const bone = (x1, y1, x2, y2, c, w = 5) => ln(x1, y1, x2, y2, { c, w });
    const wrist = (x, y) => [[-6, 0], [0, -4], [6, 0], [0, 5]].map(([a, bq]) => ci(x + a, y + bq, 3.5, { f: C, c: 'none' })).join('');
    const grp = (s, dl) => g(s, { cls: 'fi', dl });
    let b = '';
    // human arm
    b += grp(bone(55, 22, 55, 82, H, 7), 0.2) + grp(bone(51, 86, 47, 136, R) + bone(60, 86, 63, 136, R), 0.6) + grp(wrist(55, 144), 1) +
      grp([-12, -6, 0, 6, 12].map((dx, i) => bone(55 + dx * 0.6, 152, 55 + dx * 1.3, i === 0 ? 172 : 186, P, 3.5)).join(''), 1.4);
    // bat wing
    const bx = 115;
    b += pa(`M${bx + 30},96 L${bx + 2},178 L${bx + 26},190 L${bx + 52},188 L${bx + 80},176 L${bx + 96},40 Z`, { f: K.soft, c: K.line, w: 1.5 });
    b += grp(bone(bx + 92, 30, bx + 70, 60, H, 6), 0.2) + grp(bone(bx + 70, 60, bx + 36, 92, R, 4) + bone(bx + 74, 64, bx + 40, 96, R, 3), 0.6) + grp(wrist(bx + 34, 98), 1) +
      grp([[2, 178], [26, 190], [52, 188], [80, 176]].map(([x, y]) => bone(bx + 32, 102, bx + x, y, P, 2.5)).join('') + bone(bx + 30, 94, bx + 22, 84, P, 3), 1.4);
    // whale flipper
    const wx = 230;
    b += pa(`M${wx + 40},56 Q${wx + 18},120 ${wx + 34},182 Q${wx + 58},200 ${wx + 80},178 Q${wx + 92},120 ${wx + 72},56 Z`, { f: K.soft, c: K.line, w: 1.5 });
    b += grp(bone(wx + 56, 30, wx + 56, 60, H, 9), 0.2) + grp(bone(wx + 50, 64, wx + 48, 92, R, 6) + bone(wx + 62, 64, wx + 64, 92, R, 6), 0.6) + grp(wrist(wx + 56, 100), 1) +
      grp([[40, 160], [50, 176], [62, 178], [74, 164]].map(([x, y], i) => bone(wx + 46 + i * 7, 110, wx + x, y, P, 3)).join(''), 1.4);
    b += tx(55, 210, 'human: grasp', { fs: 12 }) + tx(bx + 55, 210, 'bat: fly', { fs: 12 }) + tx(wx + 56, 210, 'whale: swim', { fs: 12 });
    [[H, 'upper arm'], [R, 'forearm'], [C, 'wrist'], [P, 'fingers']].forEach(([c, t], i) => {
      b += rc(22 + i * 82, 228, 12, 12, { rx: 3, f: c, c: 'none' }) + tx(38 + i * 82, 235, t, { fs: 11.5, a: 'start' });
    });
    return svg(345, 248, b, { label: 'homologous limbs' });
  };

  /* 44 — Fe-56 nucleus */
  FIGS.q44 = () => {
    let b = '';
    for (let i = 0; i < 56; i++) {
      const r = 7.4 * Math.sqrt(i + 0.5), t = i * 2.39996, p = (i * 37) % 56 < 26;
      b += ci(95 + r * Math.cos(t), 100 + r * Math.sin(t), 6.6, { f: p ? K.red : K.mute, c: K.card, w: 1.2, cls: 'pop', dl: (i * 0.025).toFixed(2) });
    }
    b += ci(186, 52, 6.6, { f: K.red, c: 'none' }) + tx(198, 53, '26 protons (Z)', { fs: 12.5, a: 'start' });
    b += ci(186, 80, 6.6, { f: K.mute, c: 'none' }) + tx(198, 81, '30 neutrons', { fs: 12.5, a: 'start' });
    b += tx(180, 122, 'mass number A = 56', { fs: 12.5, a: 'start', cls: 'fi', dl: 1.5 });
    b += tx(180, 146, 'N = 56 − 26 = 30', { fs: 13.5, a: 'start', f: K.green, cls: 'fi', dl: 1.9 });
    return svg(340, 200, b, { label: 'iron-56 nucleus' });
  };

  /* 45 — electronegativity heat map */
  FIGS.q45 = () => {
    const rows = [
      [['H', 2.2]],
      [['Li', 0.98], ['Be', 1.57], ['B', 2.04], ['C', 2.55], ['N', 3.04], ['O', 3.44], ['F', 3.98]],
      [['Na', 0.93], ['Mg', 1.31], ['Al', 1.61], ['Si', 1.9], ['P', 2.19], ['S', 2.58], ['Cl', 3.16]],
      [['K', 0.82], ['Ca', 1.0], ['Ga', 1.81], ['Ge', 2.01], ['As', 2.18], ['Se', 2.55], ['Br', 2.96]],
      [['Rb', 0.82], ['Sr', 0.95], ['In', 1.78], ['Sn', 1.96], ['Sb', 2.05], ['Te', 2.1], ['I', 2.66]]
    ];
    const W = 42, Hh = 34, x0 = 30, y0 = 34, pick = { Na: 1, Cl: 1, F: 2, I: 1 };
    let b = '';
    ['1', '2', '13', '14', '15', '16', '17'].forEach((t, i) => { b += tx(x0 + i * W + W / 2, y0 - 10, t, { fs: 10.5, f: K.mute }); });
    rows.forEach((r, ri) => r.forEach(([s, v], ci2) => {
      const x = x0 + ci2 * W, y = y0 + ri * Hh, op = Math.min(1, (v - 0.6) / 3.4);
      b += g(rc(x + 1, y + 1, W - 2, Hh - 2, { rx: 6, f: K.blue, c: 'none', op: 0.12 + op * 0.88 }) +
        (pick[s] ? rc(x + 1, y + 1, W - 2, Hh - 2, { rx: 6, c: pick[s] === 2 ? K.green : K.ink, w: pick[s] === 2 ? 3.5 : 2, dash: pick[s] === 2 ? null : '4 3' }) : '') +
        tx(x + W / 2, y + 12, s, { fs: 12.5, f: op > 0.55 ? '#fff' : K.ink }) + tx(x + W / 2, y + 25, v.toFixed(2), { fs: 9.5, fw: 700, f: op > 0.55 ? '#fff' : K.mute }),
        { cls: 'fi', dl: (ri * 0.12 + ci2 * 0.05).toFixed(2) });
    }));
    b += ar(x0 + 10, y0 + 5 * Hh + 14, x0 + 7 * W - 10, y0 + 5 * Hh + 14, { c: K.mute, w: 2 }) + tx(x0 + 3.5 * W, y0 + 5 * Hh + 28, 'increases across →', { fs: 11.5, f: K.mute });
    b += ar(x0 + 7 * W + 14, y0 + 5 * Hh - 6, x0 + 7 * W + 14, y0 + 6, { c: K.mute, w: 2 }) + tx(x0 + 7 * W + 22, y0 + 80, 'increases up', { fs: 11.5, f: K.mute, a: 'start', at: `transform="rotate(-90 ${x0 + 7 * W + 26} ${y0 + 80})"` });
    return svg(350, 250, b, { label: 'electronegativity table' });
  };

  /* 46 — ammonia pyramid */
  FIGS.q46 = () => {
    let m = '';
    const N = [110, 78], Hs = [[56, 140], [112, 160], [166, 136]];
    m += poly(Hs.map(p => p.join(',')).join(' '), { c: K.mute, w: 1.5, dash: '5 4', f: K.soft });
    Hs.forEach(([x, y]) => { m += ln(N[0], N[1], x, y, { w: 4, c: K.ink }); });
    m += `<g>${el(110, 36, 13, 20, { f: K.gold, c: 'none', op: 0.55 })}${ci(105, 32, 3, { f: K.ink, c: 'none' })}${ci(115, 32, 3, { f: K.ink, c: 'none' })}${anim('opacity', '1;0.55;1', 1.8, { rep: 'indefinite' })}</g>`;
    m += ci(N[0], N[1], 20, { f: K.blue, c: 'none' }) + tx(N[0], N[1] + 1, 'N', { fs: 16, f: '#fff' });
    Hs.forEach(([x, y]) => { m += ci(x, y, 13, { f: K.card, c: K.ink, w: 2 }) + tx(x, y + 1, 'H', { fs: 13 }); });
    m += tx(150, 24, 'lone pair', { fs: 12, a: 'start' }) + tx(110, 192, '3 bonds + 1 lone pair', { fs: 12.5 });
    return svg(230, 200, m, { max: 260, label: 'ammonia molecule' }) +
      FIGS.table('Bonds + lone pairs|Shape|Example ;; 3 + 0|trigonal planar|BF₃ ;; 4 + 0|tetrahedral|CH₄ ;; >3 + 1|trigonal pyramidal|NH₃ ;; 2 + 2|bent|H₂O');
  };

  /* 47 — criss-cross */
  FIGS.q47 = () => String.raw`<div class="hfig"><div class="cross">
    <div class="fnode" style="--d:0s;font-size:1.45rem">$\text{Al}^{\color{#D7354F}{3+}}$</div>
    <svg class="fig" viewBox="0 0 110 60" style="max-width:110px">` +
    ar(14, 8, 96, 52, { c: K.red, w: 2.5, cls: 'fi', dl: 0.5 }) + ar(96, 8, 14, 52, { c: K.blue, w: 2.5, cls: 'fi', dl: 0.8 }) + String.raw`</svg>
    <div class="fnode" style="--d:.2s;font-size:1.45rem">$\text{SO}_4^{\color{#0D6EBD}{2-}}$</div></div>
    <div class="fnode last" style="--d:1.2s;font-size:1.6rem">$\text{Al}_{\color{#0D6EBD}{2}}(\text{SO}_4)_{\color{#D7354F}{3}}$</div>
    <div class="fnode" style="--d:1.6s">$2(+3) + 3(-2) = 0$ ✓ neutral</div></div>`;

  /* 49 — Charles's law */
  FIGS.q49 = () => plot({
    x: [0, 450], y: [0, 3.2], gx: 100, gy: 1, xt: [100, 200, 300, 400], yt: [1, 2, 3], xl: 'T (K)', yl: 'V (L)', W: 340, H: 240,
    fns: [{ f: T => T / 150, dom: [0, 300], c: K.mute, w: 2, dash: '5 5' }, { f: T => T / 150, dom: [300, 440], c: K.blue, w: 3 }],
    pts: [{ x: 300, y: 2, c: K.blue, t: '27°C = 300 K: 2.0 L', a: 'end', dx: -6, dy: -14 }, { x: 400, y: 400 / 150, c: K.green, t: '127°C = 400 K: 2.7 L', a: 'end', dx: -6, dy: -14, dl: 1.7 }, { x: 0, y: 0, c: K.mute, r: 4, t: '0 K', dx: 18, dy: -10 }]
  });

  /* 50 — pH scale */
  FIGS.q50 = () => {
    const id = 'ph' + Math.random().toString(36).slice(2, 7), X = p => 20 + p * (300 / 14);
    let b = `<defs><linearGradient id="${id}"><stop offset="0" stop-color="#D7354F"/><stop offset=".25" stop-color="#F07A22"/><stop offset=".4" stop-color="#E9C40C"/><stop offset=".5" stop-color="#2FAE5F"/><stop offset=".75" stop-color="#2C7BD6"/><stop offset="1" stop-color="#7A3FC8"/></linearGradient></defs>`;
    b += `<rect x="20" y="90" width="300" height="24" rx="12" style="fill:url(#${id})"/>`;
    for (let p = 0; p <= 14; p++) b += tx(X(p), 128, p, { fs: 10.5, f: K.mute, fw: 700 });
    b += tx(X(1.5), 146, '← acidic', { fs: 11.5, f: K.mute }) + tx(X(7), 146, 'neutral', { fs: 11.5, f: K.mute }) + tx(X(12.5), 146, 'basic →', { fs: 11.5, f: K.mute });
    [[3, 'X'], [5, 'Y']].forEach(([p, n]) => { b += poly(`${X(p)},88 ${X(p) - 7},76 ${X(p) + 7},76`, { f: K.ink, c: 'none' }) + tx(X(p), 66, n, { fs: 14 }); });
    [[5, 4], [4, 3]].forEach(([a, c], i) => {
      b += pa(`M${X(a)},60 Q${(X(a) + X(c)) / 2},34 ${X(c)},60`, { c: K.navy, w: 2, draw: true, dl: 0.4 + i * 0.6 });
      b += tx((X(a) + X(c)) / 2, 30, '×10', { fs: 12, cls: 'fi', dl: 0.6 + i * 0.6 });
    });
    b += tx(170, 176, '[H⁺]: X = 10⁻³, Y = 10⁻⁵ → X has 100× more', { fs: 12.5, cls: 'fi', dl: 1.8 });
    return svg(340, 190, b, { label: 'pH scale' });
  };

  /* 51 — activity series ladder */
  FIGS.q51 = () => {
    const m = ['K', 'Na', 'Mg', 'Zn', 'Fe', '(H)', 'Cu', 'Ag'], Y = i => 22 + i * 27;
    let b = '';
    m.forEach((s, i) => { b += rc(60, Y(i) - 11, 70, 22, { rx: 6, f: s === '(H)' ? K.soft : K.ice, c: K.blue, w: 1.5 }) + tx(95, Y(i) + 1, s, { fs: 13 }); });
    b += ar(36, Y(7), 36, Y(0), { c: K.mute, w: 2 }) + tx(26, Y(3.5), 'more active', { fs: 11.5, f: K.mute, at: `transform="rotate(-90 26 ${Y(3.5)})"` });
    [[3, 6, 'A', 1], [2, 5, 'B', 1], [4, 7, 'C', 1], [6, 3, 'D', 0]].forEach(([s, t, n, ok], k) => {
      const x = 162 + k * 40, c = ok ? K.green : K.red;
      b += g(ln(130, Y(s), x, Y(s), { c, w: 1.5, dash: '3 3' }) + ar(x, Y(s), x, Y(t) + (t > s ? -4 : 4), { c, w: 3 }) + tx(x, Y(Math.max(s, t)) + 22, `${n} ${ok ? '✓' : '✕'}`, { fs: 13, f: c }), { cls: 'fi', dl: 0.3 + k * 0.45 });
    });
    return svg(340, 248, b, { label: 'activity series' });
  };

  /* 52 — S-wave shadow zone */
  FIGS.q52 = () => {
    const cx = 170, cy = 128, R = 100, Rc = 55;
    let b = ci(cx, cy, R, { f: K.soft, c: K.ink, w: 2 }) + ci(cx, cy, Rc, { f: K.orange, c: K.orange, w: 2, op: 0.55 }) + ci(cx, cy, 24, { f: K.gold, c: 'none' });
    const Fy = cy - R;
    [-72, -60, -48, -38, -28, -18, -8, 8, 18, 28, 38, 48, 60, 72].forEach((deg, i) => {
      const p = deg * Math.PI / 180, dx = Math.sin(p), dy = Math.cos(p);
      let t, c;
      if (R * Math.abs(dx) < Rc) { t = R * dy - Math.sqrt(R * R * dy * dy - (R * R - Rc * Rc)); c = K.red; }
      else { t = 2 * R * dy; c = K.blue; }
      b += pa(`M${cx},${Fy} L${r1(cx + t * dx)},${r1(Fy + t * dy)}`, { c, w: 2, draw: true, dl: 0.2 + Math.abs(deg) * 0.012 });
    });
    const P = a => `${r1(cx + R * Math.sin(a * Math.PI / 180))},${r1(cy - R * Math.cos(a * Math.PI / 180))}`;
    b += pa(`M${P(113)} A${R},${R} 0 0 1 ${P(247)}`, { c: K.red, w: 7, op: 0.75, cls: 'fi', dl: 1.6 });
    b += poly(`${cx},${Fy - 9} ${cx - 8},${Fy + 5} ${cx + 8},${Fy + 5}`, { f: K.red, c: 'none' }) + tx(cx, Fy - 18, 'earthquake', { fs: 12 });
    b += tx(cx, cy + 3, 'liquid', { fs: 11, f: K.ink }) + tx(cx, cy - 36, 'outer core', { fs: 11 });
    b += tx(cx, cy + R + 20, 'S-wave shadow zone (no S waves arrive)', { fs: 12.5, f: K.red, cls: 'fi', dl: 1.8 });
    b += tx(300, 60, 'S waves', { fs: 12, f: K.blue }) + tx(300, 76, 'stop at the', { fs: 11, f: K.mute }) + tx(300, 90, 'liquid core', { fs: 11, f: K.mute });
    return svg(345, 252, b, { label: 'S-wave shadow zone' });
  };

  /* 53 — subduction at the Philippine Trench */
  FIGS.q53 = () => {
    let b = rc(150, 58, 190, 34, { f: K.water, c: 'none', op: 0.7 });
    b += pa('M0,150 L0,62 L44,54 L60,34 L76,54 L128,68 L186,88 Q158,98 132,140 L122,150 Z', { f: K.gold, c: K.ink, w: 1.5, op: 0.9 });
    b += pa('M340,90 L190,90 Q160,94 126,156 L98,226 L122,236 L150,170 Q178,114 202,112 L340,112 Z', { f: K.navy, c: K.ink, w: 1.5 });
    b += ln(330, 101, 214, 101, { c: K.card, w: 2.5, cls: 'flow slow' }) + ar(230, 101, 210, 101, { c: K.card, w: 2.5 });
    b += ar(150, 150, 120, 214, { c: K.card, w: 2.5, cls: 'fi', dl: 0.5 });
    b += ln(112, 170, 62, 40, { c: K.red, w: 3, dash: '4 6', cls: 'flow' }) + ci(60, 34, 5, { f: K.red, c: 'none', cls: 'pulse' });
    b += `<g>${poly('148,124 152,114 156,124 166,122 158,130 162,140 152,134 142,140 146,130 138,122', { f: K.red, c: 'none' })}${anim('opacity', '1;0.2;1', 1.2, { rep: 'indefinite' })}</g>`;
    b += ar(206, 30, 190, 86, { c: K.ink, w: 1.8 }) + tx(212, 24, 'Philippine Trench', { fs: 12, a: 'start' });
    b += tx(276, 140, 'Philippine Sea Plate', { fs: 12 }) + tx(276, 156, '(oceanic, dense)', { fs: 11, f: K.mute });
    b += tx(50, 172, 'Philippine', { fs: 12 }) + tx(50, 188, 'Mobile Belt', { fs: 12 });
    b += tx(10, 14, 'W', { fs: 12, f: K.mute, a: 'start' }) + tx(332, 14, 'E', { fs: 12, f: K.mute, a: 'end' });
    return svg(340, 244, b, { label: 'subduction zone' });
  };

  /* 54 — focus, epicenter, intensity */
  FIGS.q54 = () => {
    const id = 'eq' + Math.random().toString(36).slice(2, 7);
    let b = `<defs><clipPath id="${id}"><rect x="0" y="70" width="340" height="170"/></clipPath></defs>`;
    b += rc(0, 70, 340, 160, { f: K.soft, c: 'none' }) + ln(0, 70, 340, 70, { w: 2.5 });
    let rings = '';
    [0, 0.8, 1.6].forEach(d => { rings += `<circle cx="170" cy="176" r="0" style="fill:none;stroke:${K.red};stroke-width:2">${anim('r', '0;170', 2.4, { begin: d + 's', rep: 'indefinite' })}${anim('opacity', '1;0', 2.4, { begin: d + 's', rep: 'indefinite' })}</circle>`; });
    b += `<g clip-path="url(#${id})">${rings}</g>`;
    b += poly('170,164 174,173 184,174 176,180 179,190 170,184 161,190 164,180 156,174 166,173', { f: K.red, c: 'none' }) + tx(170, 208, 'focus (underground)', { fs: 12 });
    b += ln(170, 76, 170, 160, { c: K.mute, dash: '4 4', w: 1.5 }) + ci(170, 70, 5, { f: K.red, c: 'none' });
    [[170, 'VII', 22], [250, 'V', 17], [90, 'V', 17], [322, 'III', 13], [18, 'III', 13]].forEach(([x, t, fs], i) => {
      b += poly(`${x - 9},70 ${x - 9},58 ${x},50 ${x + 9},58 ${x + 9},70`, { f: K.card, c: K.ink, w: 1.5 });
      b += tx(x, 34 - (fs - 13), t, { fs, f: K.navy, cls: 'fi', dl: 0.3 + i * 0.15 });
    });
    b += tx(170, 92, 'epicenter (surface)', { fs: 11.5, f: K.mute, a: 'start', at: 'dx="8"' });
    b += tx(170, 232, 'one magnitude · intensity (roman numerals) fades with distance', { fs: 11.5, f: K.mute });
    return svg(340, 242, b, { label: 'earthquake focus and intensity' });
  };

  /* 56 — atmosphere layers (not to scale) */
  FIGS.q56 = () => {
    const L = [['thermosphere', '85+ km', 'aurora, ISS', K.violet], ['mesosphere', '50–85 km', 'meteors burn up', K.navy], ['stratosphere', '12–50 km', 'ozone layer', K.sky], ['troposphere', '0–12 km', 'ALL the weather', K.green]];
    let b = '';
    const hs = [36, 36, 40, 74];
    let y = 12;
    L.forEach(([n, a, w, c], i) => {
      const h = hs[i], hot = i === 3;
      b += g(rc(10, y, 320, h - 3, { rx: 8, f: c, c: hot ? K.green : 'none', w: 3, op: hot ? 0.28 : 0.16 }) +
        tx(22, y + h / 2 - 1, n, { fs: 12.5, a: 'start', fw: hot ? 900 : 800 }) + tx(150, y + h / 2 - 1, a, { fs: 11.5, f: K.mute, a: 'start' }) + tx(318, y + h / 2 - 1, w, { fs: 11.5, a: 'end', fw: hot ? 900 : 700 }), { cls: 'fi', dl: (3 - i) * 0.3 });
      y += h;
    });
    b += g(ci(230, 160, 11, { f: K.card, c: K.mute, w: 1.5 }) + ci(244, 154, 13, { f: K.card, c: K.mute, w: 1.5 }) + ci(258, 161, 10, { f: K.card, c: K.mute, w: 1.5 }) + rc(226, 160, 36, 10, { f: K.card, c: 'none' }), { cls: 'fi', dl: 0.2 });
    [234, 246, 258].forEach(x => { b += ln(x, 174, x - 4, 184, { c: K.blue, w: 2, cls: 'flow fast' }); });
    b += rc(10, 198, 320, 10, { rx: 3, f: K.mute, c: 'none', op: 0.5 }) + tx(170, 222, 'ground', { fs: 11, f: K.mute });
    return svg(340, 230, b, { label: 'layers of the atmosphere' });
  };

  /* 57 — sea breeze loop */
  FIGS.q57 = () => {
    let b = rc(0, 168, 170, 40, { f: K.water, c: 'none' }) + pa('M170,164 L340,160 V208 H170 Z', { f: K.orange, c: 'none', op: 0.6 });
    b += ci(304, 32, 16, { f: K.gold, c: 'none' });
    for (let i = 0; i < 8; i++) { const t = i * Math.PI / 4; b += ln(304 + 21 * Math.cos(t), 32 + 21 * Math.sin(t), 304 + 28 * Math.cos(t), 32 + 28 * Math.sin(t), { c: K.gold, w: 2.5 }); }
    const loop = 'M70,146 L256,146 Q272,146 272,130 L272,78 Q272,62 256,62 L70,62 Q54,62 54,78 L54,130 Q54,146 70,146 Z';
    b += pa(loop, { c: K.line, w: 2, dash: '4 5' });
    b += ar(110, 146, 220, 146, { c: K.blue, w: 3 }) + ar(272, 132, 272, 82, { c: K.red, w: 3 }) + ar(220, 62, 110, 62, { c: K.mute, w: 2.5 }) + ar(54, 82, 54, 132, { c: K.blue, w: 3 });
    for (let i = 0; i < 7; i++) b += `<circle r="4" style="fill:${K.navy}">${move(loop, 7, { rep: 'indefinite', begin: `${-i}s` })}</circle>`;
    b += tx(165, 136, 'sea breeze →', { fs: 12.5 });
    b += tx(255, 188, 'warm land: air rises', { fs: 11.5, a: 'end' }) + tx(85, 190, 'cool sea: air sinks', { fs: 11.5 });
    return svg(340, 210, b, { label: 'sea breeze circulation' });
  };

  /* 59 — projectile velocity components */
  FIGS.q59 = () => {
    let b = ln(10, 190, 345, 190, { c: K.line, w: 3 }) + pa('M30,190 Q180,-90 330,190', { c: K.mute, w: 1.5, dash: '4 5' });
    const pts = [[75, 118.6, -52], [180, 50, 0], [285, 118.6, 52]];
    pts.forEach(([x, y, vy], i) => {
      let s = ar(x, y, x + 42, y, { c: K.blue, w: 3 });
      if (vy) s += ar(x, y, x, y + vy, { c: K.green, w: 3 });
      s += ar(x - 16, y + 4, x - 16, y + 34, { c: K.red, w: 2.5 });
      if (!vy) s += tx(x, y - 16, 'top: vᵧ = 0, v is horizontal', { fs: 11.5 });
      b += g(s, { cls: 'fi', dl: 0.3 + i * 0.4 });
    });
    b += `<circle r="8" style="fill:${K.gold};stroke:${K.ink};stroke-width:1.5">` +
      anim('cx', '30;330', 3, { rep: 'indefinite' }) + anim('cy', '190;50;190', 3, { rep: 'indefinite', kt: '0;0.5;1', ks: '0.333 0.667 0.667 1;0.333 0 0.667 0.333' }) + '</circle>';
    [[K.blue, 'vₓ never changes'], [K.green, 'vᵧ shrinks, flips'], [K.red, 'a = g ↓ always']].forEach(([c, t], i) => {
      b += rc(18 + i * 112, 206, 12, 12, { rx: 3, f: c, c: 'none' }) + tx(34 + i * 112, 213, t, { fs: 11.5, a: 'start' });
    });
    return svg(350, 226, b, { label: 'projectile with velocity components' });
  };

  /* 60 — free-body diagram */
  FIGS.q60 = () => {
    let b = ln(20, 150, 330, 150, { c: K.line, w: 3 });
    b += rc(120, 88, 110, 48, { rx: 8, f: K.ice, c: K.blue, w: 2 }) + ci(142, 142, 8, { f: K.ink, c: 'none' }) + ci(208, 142, 8, { f: K.ink, c: 'none' }) + tx(175, 113, '5.0 kg', { fs: 14 });
    b += g(ar(230, 108, 328, 108, { c: K.green, w: 4 }) + tx(282, 94, '30 N pull', { fs: 12.5 }), { cls: 'fi', dl: 0.2 });
    b += g(ar(140, 160, 66, 160, { c: K.red, w: 4 }) + tx(100, 176, '10 N friction', { fs: 12.5 }), { cls: 'fi', dl: 0.6 });
    b += g(ar(130, 206, 196, 206, { c: K.navy, w: 5 }) + tx(206, 207, 'net 20 N', { fs: 13, a: 'start' }), { cls: 'fi', dl: 1.2 });
    b += tx(175, 40, 'a = F_net ÷ m = 20 ÷ 5 = 4 m/s²', { fs: 13.5, cls: 'fi', dl: 1.7 });
    return svg(340, 225, b, { label: 'forces on the cart' });
  };

  /* 61 — free fall positions each second */
  FIGS.q61 = () => {
    const Y = d => 38 + d * 4;
    let b = rc(20, 18, 150, 12, { rx: 3, f: K.mute, c: 'none' }) + pa('M0,222 Q40,214 80,222 T160,222 T240,222 T340,222 V246 H0 Z', { f: K.water, c: 'none' });
    [[1, 4.9], [2, 19.6], [3, 44.1]].forEach(([t, d], i) => {
      b += g(ci(120, Y(d), 7, { f: K.mute, c: 'none', op: 0.4 }) + ln(132, Y(d), 196, Y(d), { c: K.line, w: 1.5, dash: '3 3' }) + tx(204, Y(d), `t = ${t} s: ${d} m`, { fs: 12.5, a: 'start' }), { cls: 'fi', dl: 0.4 + i * 0.4 });
    });
    b += tx(204, Y(0), 't = 0: dropped', { fs: 12, a: 'start', f: K.mute });
    b += `<circle cx="120" r="7" style="fill:${K.ink}">${anim('cy', `${Y(0)};${Y(0)};${Y(44.1)};${Y(44.1)}`, 3, { rep: 'indefinite', kt: '0;0.2;0.75;1', ks: '0 0 1 1;0.333 0 0.667 0.333;0 0 1 1' })}</circle>`;
    b += tx(204, 240, 'd = ½gt² = 4.9 × 3² = 44.1 m', { fs: 12.5, a: 'start', f: K.green, cls: 'fi', dl: 1.6 });
    return svg(345, 250, b, { label: 'stone falling from a bridge' });
  };

  /* 62 — PE turning into KE */
  FIGS.q62 = () => {
    const top = 40, bot = 186, dur = 3, o = { rep: 'indefinite', kt: '0;0.2;0.8;1', ks: '0 0 1 1;0.333 0 0.667 0.333;0 0 1 1' };
    let b = ln(20, 196, 120, 196, { c: K.line, w: 3 }) + ln(170, 196, 320, 196, { c: K.mute, w: 1.5 });
    b += `<circle cx="70" r="10" style="fill:${K.blue}">${anim('cy', `${top};${top};${bot};${bot}`, dur, o)}</circle>`;
    b += ar(40, 40, 40, 192, { c: K.mute, w: 1.5, h: 7 }) + tx(30, 116, '5 m', { fs: 12, a: 'end' });
    const H = 150;
    b += `<rect x="190" width="50" rx="5" style="fill:${K.gold}">${anim('y', `${196 - H};${196 - H};196;196`, dur, o)}${anim('height', `${H};${H};0;0`, dur, o)}</rect>`;
    b += `<rect x="260" width="50" rx="5" style="fill:${K.blue}">${anim('y', `196;196;${196 - H};${196 - H}`, dur, o)}${anim('height', `0;0;${H};${H}`, dur, o)}</rect>`;
    b += tx(215, 212, 'PE = mgh', { fs: 12 }) + tx(285, 212, 'KE = ½mv²', { fs: 12 });
    b += tx(250, 30, 'PE + KE = 100 J always', { fs: 12.5 });
    b += tx(170, 236, 'mgh = ½mv² → v = √(2gh) = √100 = 10 m/s', { fs: 12.5, f: K.green });
    return svg(340, 246, b, { label: 'energy conversion' });
  };

  /* 63 — three resistors in parallel */
  FIGS.q63 = () => {
    let b = '';
    const wire = (x1, y1, x2, y2, fast) => ln(x1, y1, x2, y2, { w: 2.5 }) + ln(x1, y1, x2, y2, { c: K.sky, w: 2.5, cls: fast ? 'flow fast' : 'flow' });
    b += wire(40, 40, 300, 40, true) + wire(300, 200, 40, 200, true) + wire(40, 200, 40, 128, true) + wire(40, 112, 40, 40, true);
    b += ln(26, 112, 54, 112, { w: 3 }) + ln(32, 128, 48, 128, { w: 5 }) + tx(14, 120, '12 V', { fs: 12, a: 'end', at: 'dx="8"' });
    [130, 215, 300].forEach((x, i) => {
      b += wire(x, 40, x, 95) + wire(x, 145, x, 200);
      b += pa(`M${x},95 l8,5 l-16,10 l16,10 l-16,10 l16,10 l-8,5`, { c: K.ink, w: 2.5 });
      b += tx(x + 14, 120, '6 Ω', { fs: 12, a: 'start' }) + tx(x + 14, 170, '2 A', { fs: 12.5, a: 'start', f: K.green, cls: 'fi', dl: 0.4 + i * 0.3 });
    });
    b += tx(85, 28, '6 A total', { fs: 13, f: K.green, cls: 'fi', dl: 1.5 });
    b += tx(170, 226, 'Each branch gets the full 12 V: 12 ÷ 6 = 2 A, × 3 = 6 A', { fs: 12, cls: 'fi', dl: 1.8 });
    return svg(345, 236, b, { label: 'parallel resistors' });
  };

  /* 64 — concave mirror ray diagram */
  FIGS.q64 = () => {
    const y0 = 110;
    let b = ln(14, y0, 332, y0, { c: K.mute, w: 1.5 }) + pa('M324,26 Q342,110 324,194', { c: K.ink, w: 4 });
    [[150, 'C'], [240, 'F']].forEach(([x, t]) => { b += ln(x, y0 - 4, x, y0 + 4, { w: 2 }) + tx(x, y0 + 16, t, { fs: 12.5 }); });
    b += ar(60, y0, 60, y0 - 40, { c: K.green, w: 3.5 }) + tx(60, y0 + 16, 'object', { fs: 11.5, f: K.mute });
    b += pa(`M60,${y0 - 40} L330,${y0 - 40}`, { c: K.gold, w: 2, draw: true, dl: 0.2 });
    b += pa(`M330,${y0 - 40} L170,${r1(y0 - 40 + 160 * 40 / 90)}`, { c: K.gold, w: 2, draw: true, dl: 1 });
    b += pa(`M60,${y0 - 40} L330,${y0 + 20}`, { c: K.blue, w: 2, draw: true, dl: 1.6 });
    b += pa(`M330,${y0 + 20} L170,${y0 + 20}`, { c: K.blue, w: 2, draw: true, dl: 2.4 });
    b += g(ar(195, y0, 195, y0 + 20, { c: K.red, w: 3.5, h: 8 }) + tx(195, y0 + 38, 'image', { fs: 11.5 }), { cls: 'pop', dl: 3 });
    b += tx(120, 22, 'd₀ = 30 cm → dᵢ = 15 cm', { fs: 12.5 }) + tx(120, 40, 'real, inverted, half-size', { fs: 12, f: K.green, cls: 'fi', dl: 3.2 });
    return svg(345, 205, b, { label: 'concave mirror ray diagram' });
  };

  /* 65 — echo off a cliff */
  FIGS.q65 = () => {
    let b = ln(10, 150, 330, 150, { c: K.line, w: 3 }) + pa('M290,150 L292,40 L310,30 L322,46 L340,36 V150 Z', { f: K.mute, c: 'none', op: 0.8 });
    b += ci(40, 98, 8, { f: K.card, c: K.ink, w: 2 }) + ln(40, 106, 40, 130, { w: 2.5 }) + ln(40, 130, 32, 148, { w: 2.5 }) + ln(40, 130, 48, 148, { w: 2.5 }) + ln(40, 114, 54, 108, { w: 2.5 });
    const wave = (d) => `<g style="opacity:0">${pa('M0,-14 Q8,0 0,14', { c: K.blue, w: 3 })}${pa('M-7,-10 Q0,0 -7,10', { c: K.blue, w: 2.5, op: 0.6 })}` +
      turn('62 104;286 104;286 104', 2.6, { type: 'translate', kt: '0;0.46;1', rep: 'indefinite', begin: d }) + anim('opacity', '1;1;0;0', 2.6, { kt: '0;0.46;0.47;1', rep: 'indefinite', begin: d }) + '</g>';
    const back = (d) => `<g style="opacity:0">${pa('M0,-14 Q-8,0 0,14', { c: K.violet, w: 3 })}` +
      turn('286 112;286 112;62 112', 2.6, { type: 'translate', kt: '0;0.5;0.96', rep: 'indefinite', begin: d }) + anim('opacity', '0;0;1;1;0', 2.6, { kt: '0;0.49;0.5;0.95;1', rep: 'indefinite', begin: d }) + '</g>';
    b += wave('0s') + back('0s');
    b += tx(170, 76, '→ 1.0 s to the cliff', { fs: 12, f: K.blue }) + tx(170, 136, '← 1.0 s back', { fs: 12, f: K.violet });
    b += ar(50, 172, 286, 172, { c: K.mute, w: 1.5, h: 7 }) + ar(286, 172, 50, 172, { c: K.mute, w: 1.5, h: 7 });
    b += tx(168, 188, 'd = 340 × 2.0 ÷ 2 = 340 m', { fs: 13, f: K.green });
    return svg(340, 198, b, { label: 'echo from a cliff' });
  };

  /* 66 — planet temperatures */
  FIGS.q66 = () => {
    const d = [['Mercury', 167], ['Venus', 464], ['Earth', 15], ['Mars', -65], ['Jupiter', -110]], base = 156, k = 0.27;
    let b = ln(20, base, 334, base, { c: K.mute, w: 1.5 }) + tx(334, base - 8, '0 °C', { fs: 10.5, f: K.mute, a: 'end' });
    d.forEach(([n, t], i) => {
      const x = 42 + i * 64, h = Math.abs(t) * k, hot = n === 'Venus';
      const y = t >= 0 ? base - h : base;
      b += `<rect x="${x}" y="${r1(y)}" width="40" height="${r1(Math.max(h, 1))}" rx="4" class="${t >= 0 ? 'grow' : 'growdn'}" style="fill:${hot ? K.gold : K.sky};--d:${i * 0.15}s"/>`;
      b += tx(x + 20, t >= 0 ? y - 10 : y + h + 12, `${t > 0 ? '' : ''}${t < 0 ? '−' + Math.abs(t) : t}°C`, { fs: 12, cls: 'fi', dl: 0.5 + i * 0.15, fw: hot ? 900 : 700 });
      b += tx(x + 20, 214, n, { fs: 12, fw: hot ? 900 : 700 });
    });
    b += ar(40, 232, 330, 232, { c: K.mute, w: 1.5, h: 7 }) + tx(185, 246, 'farther from the Sun →', { fs: 11, f: K.mute });
    return svg(345, 252, b, { label: 'planet temperatures' });
  };

  /* 67 — Moon phases and the solar eclipse */
  FIGS.q67 = () => {
    const E = [252, 108], r = 64;
    let b = ci(-6, 108, 78, { f: K.gold, c: 'none' }) + tx(26, 200, 'Sun', { fs: 12 });
    b += ci(E[0], E[1], r, { c: K.mute, w: 1.5, dash: '4 5' });
    b += poly(`${E[0] - r},${E[1] - 8} ${E[0] - 19},${E[1] - 3} ${E[0] - 19},${E[1] + 3} ${E[0] - r},${E[1] + 8}`, { f: K.ink, c: 'none', op: 0.7, cls: 'fi', dl: 0.6 });
    b += ci(E[0], E[1], 20, { f: K.blue, c: 'none' }) + pa(`M${E[0]},${E[1] - 20} A20,20 0 0 1 ${E[0]},${E[1] + 20} Z`, { f: '#000', c: 'none', op: 0.3 });
    const moon = (x, y) => ci(x, y, 9, { f: K.mute, c: 'none' }) + pa(`M${x},${y - 9} A9,9 0 0 0 ${x},${y + 9} Z`, { f: '#F4F1E6', c: 'none' });
    [[E[0] - r, E[1], 'new', -30, 1], [E[0], E[1] + r, '1st quarter', 18, 0], [E[0] + r, E[1], 'full', 18, 0], [E[0], E[1] - r, '3rd quarter', -18, 0]].forEach(([x, y, t, dy, hot]) => {
      b += moon(x, y) + tx(x, y + dy, t, { fs: 12, f: hot ? K.red : K.mute, fw: hot ? 900 : 700 });
    });
    const path = `M${E[0] - r},${E[1]} A${r},${r} 0 1,0 ${E[0] + r},${E[1]} A${r},${r} 0 1,0 ${E[0] - r},${E[1]}`;
    b += `<g>${moon(0, 0).replace(/cx="0"/g, 'cx="0"')}${move(path, 8, { rep: 'indefinite' })}</g>`;
    b += tx(130, 20, 'new moon: Sun–Moon–Earth in line', { fs: 12.5, a: 'start', f: K.red, cls: 'fi', dl: 0.8 });
    return svg(340, 212, b, { label: 'moon phases and solar eclipse' });
  };

  /* 69 — seasons from axial tilt */
  FIGS.q69 = () => {
    const S = [170, 104], d = [Math.sin(23.5 * Math.PI / 180), -Math.cos(23.5 * Math.PI / 180)];
    let b = el(S[0], S[1], 136, 56, { c: K.mute, w: 1.5, dash: '4 5' }) + ci(S[0], S[1], 24, { f: K.gold, c: 'none' }) + tx(S[0], S[1] + 1, 'Sun', { fs: 11, f: '#2A1E00' });
    const earth = (x, y, nightLeft) => ci(x, y, 17, { f: K.blue, c: 'none' }) +
      pa(nightLeft ? `M${x},${y - 17} A17,17 0 0 0 ${x},${y + 17} Z` : `M${x},${y - 17} A17,17 0 0 1 ${x},${y + 17} Z`, { f: '#000', c: 'none', op: 0.35 }) +
      ln(x - 28 * d[0], y - 28 * d[1], x + 28 * d[0], y + 28 * d[1], { w: 2.5 }) + tx(x + 34 * d[0], y + 34 * d[1], 'N', { fs: 11 });
    b += earth(34, 104, true) + earth(306, 104, false);
    b += ar(142, 104, 56, 104, { c: K.gold, w: 2, cls: 'fi', dl: 0.3 }) + ar(198, 104, 284, 104, { c: K.gold, w: 2, cls: 'fi', dl: 0.3 });
    b += tx(34, 150, 'June', { fs: 12.5 }) + tx(34, 166, 'north leans in:', { fs: 11, f: K.mute }) + tx(34, 180, 'northern summer', { fs: 11, f: K.green });
    b += tx(306, 150, 'December', { fs: 12.5 }) + tx(306, 166, 'north leans away:', { fs: 11, f: K.mute }) + tx(306, 180, 'northern winter', { fs: 11, f: K.blue });
    const orbit = `M${S[0] - 136},${S[1]} A136,56 0 1,0 ${S[0] + 136},${S[1]} A136,56 0 1,0 ${S[0] - 136},${S[1]}`;
    b += `<g style="opacity:.75">${ci(0, 0, 8, { f: K.sky, c: 'none' })}${ln(-14 * d[0], -14 * d[1], 14 * d[0], 14 * d[1], { w: 2 })}${move(orbit, 12, { rep: 'indefinite' })}</g>`;
    b += tx(170, 204, 'The axis keeps pointing the same way all year.', { fs: 12 });
    return svg(345, 214, b, { label: 'seasons and axial tilt' });
  };

  /* 70 — star color vs temperature */
  FIGS.q70 = () => {
    const X = T => 30 + (Math.log(T) - Math.log(2500)) / (Math.log(35000) - Math.log(2500)) * 290;
    const S = [[3000, '#E8503A', 'red'], [4500, '#F39C3D', 'orange'], [5800, '#F5D04A', 'yellow (Sun)'], [10000, '#F2F5FF', 'white'], [25000, '#8DB8FF', 'blue-white']];
    let b = ar(24, 130, 334, 130, { c: K.mute, w: 2 }) + tx(330, 150, 'hotter →', { fs: 11.5, f: K.mute, a: 'end' });
    S.forEach(([T, c, n], i) => {
      const x = X(T), r = 11 + i * 2.2, hot = i === 4;
      b += g(ci(x, 90, r + 8, { f: c, c: 'none', op: 0.3 }) + ci(x, 90, r, { f: c, c: K.ink, w: 1 }), { cls: 'pop', dl: i * 0.25 });
      b += ln(x, 124, x, 136, { c: K.mute, w: 1.5 });
      b += tx(x, i % 2 ? 54 : 166, n, { fs: 11.5, fw: hot ? 900 : 700 }) + tx(x, i % 2 ? 40 : 180, `${T.toLocaleString('en-US')} K`, { fs: 10.5, f: K.mute });
    });
    return svg(345, 192, b, { label: 'star colors and temperatures' });
  };
})();

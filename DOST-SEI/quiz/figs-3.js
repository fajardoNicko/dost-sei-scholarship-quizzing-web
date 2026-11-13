/* Figures for Part III (items 71–100): Mathematics. */
(function () {
  const { K, r1, svg, ln, rc, ci, el, pa, poly, tx, g, ar, anim, turn, move, plot, bars, FIGS } = FK;
  const D2R = Math.PI / 180;

  // arc between two directions at a vertex (SVG coords); returns path d
  function angArc(vx, vy, a1, a2, r) {
    let d = a2 - a1;
    while (d <= -Math.PI) d += 2 * Math.PI;
    while (d > Math.PI) d -= 2 * Math.PI;
    const x1 = vx + r * Math.cos(a1), y1 = vy + r * Math.sin(a1), x2 = vx + r * Math.cos(a1 + d), y2 = vy + r * Math.sin(a1 + d);
    return `M${r1(x1)},${r1(y1)} A${r},${r} 0 0 ${d > 0 ? 1 : 0} ${r1(x2)},${r1(y2)}`;
  }

  FIGS.q72 = () => plot({
    x: [-8, 6], y: [-4, 14], gx: 1, gy: 2, xt: [-6, -3, 3], yt: [4, 8, 12], W: 340, H: 270,
    fns: [
      { f: x => x * x + 9 * x + 9, c: K.mute, w: 2, dl: 0.2, lbl: [-6.1, -2.8, 'k = 9: two roots'] },
      { f: x => x * x + 3 * x + 9, c: K.red, w: 2.5, dash: '6 5', dl: 0.5, lbl: [-1.5, 4.9, 'k = 3: none'] },
      { f: x => (x + 3) ** 2, c: K.green, w: 3, dl: 0.8, lbl: [-0.9, 13.2, 'k = 6', 'end'] },
      { f: x => (x - 3) ** 2, c: K.green, w: 3, dl: 1.1, lbl: [4.4, 13.2, 'k = −6', 'end'] }
    ],
    pts: [{ x: -3, y: 0, c: K.green, dl: 1.8 }, { x: 3, y: 0, c: K.green, dl: 2 }]
  });

  FIGS.q73 = () => plot({
    x: [0, 30], y: [0, 30], gx: 5, gy: 5, xt: [10, 19, 30], yt: [11, 20, 30], W: 300, H: 300,
    fns: [{ f: x => 30 - x, c: K.blue, lbl: [7, 26, 'x + y = 30', 'start'] }, { f: x => x - 8, c: K.violet, dl: 0.6, lbl: [24, 21, 'x − y = 8', 'end'] }],
    segs: [{ x1: 19, y1: 11, x2: 19, y2: 0 }, { x1: 19, y1: 11, x2: 0, y2: 11 }],
    pts: [{ x: 19, y: 11, c: K.green, t: '(19, 11)', dx: 30, dy: 2 }]
  });

  FIGS.q76 = () => plot({
    x: [-7, 10], y: [-3, 7], gx: 1, gy: 1, xt: [-5, 3, 5], yt: [4], W: 340, H: 240,
    extra: (X, Y) => rc(X(-7), Y(7), X(3) - X(-7), Y(-3) - Y(7), { f: K.pred, c: 'none', op: 0.7 }) + tx(X(-2), Y(5.6), 'logs undefined (x ≤ 3)', { fs: 12, f: K.red }),
    fns: [{ f: x => 4, c: K.gold, w: 2, dash: '6 5', lbl: [9.6, 4.6, 'y = 4', 'end'] }, { f: x => x > 3 ? Math.log2(x * x - 9) : NaN, dom: [3.001, 10], N: 400, c: K.blue, dl: 0.4 }],
    pts: [{ x: 5, y: 4, c: K.green, t: 'x = 5 ✓', dx: 8, dy: -16 }, { x: -5, y: 0, c: K.red, t: 'x = −5 ✕', dy: -16, dl: 1.8 }]
  });

  FIGS.q77 = () => bars({
    data: [3, 9, 27, 81, 243].map((v, i) => ({ l: `a${'₁₂₃₄₅'[i]}`, v, c: i === 3 ? K.violet : K.blue })), max: 250, H: 220, step: 0.25,
    extra: () => tx(30, 26, '3 + 9 + 27 + 81 + 243 = 363', { fs: 13, a: 'start', f: K.green, cls: 'fi', dl: 1.6 })
  });

  FIGS.q78 = () => {
    let b = '';
    for (let i = 0; i < 7; i++) {
      const x = 30 + i * 46, a = 7 * (i + 1), c = 98 - 7 * i;
      b += g(rc(x - 19, 22, 38, 74, { rx: 8, f: K.soft, c: K.line, w: 1.5 }) + tx(x, 42, a, { fs: 13 }) + tx(x, 60, '+', { fs: 12, f: K.mute }) + tx(x, 78, c, { fs: 13 }), { cls: 'pop', dl: i * 0.15 });
      b += tx(x, 114, '105', { fs: 13, f: K.green, cls: 'fi', dl: 1.2 + i * 0.1 });
    }
    b += tx(170, 146, '7 pairs × 105 = 735', { fs: 14, cls: 'fi', dl: 2.1 });
    return svg(340, 158, b, { label: 'pairing the multiples of 7' });
  };

  FIGS.q79 = () => plot({
    x: [-4, 10], y: [-9, 5], gx: 1, gy: 1, xt: [3, 8], yt: [-2, 3], W: 300, H: 300,
    fns: [{ px: t => 3 + 5 * Math.cos(t), py: t => -2 + 5 * Math.sin(t), t: [0, 2 * Math.PI], c: K.blue }],
    segs: [{ x1: 3, y1: -2, x2: 8, y2: -2, arrow: true, c: K.green, w: 2.5, dl: 1.2 }],
    extra: (X, Y) => tx(X(5.5), Y(-2) - 10, 'r = 5', { fs: 12.5, cls: 'fi', dl: 1.4 }),
    pts: [{ x: 3, y: -2, c: K.red, t: '(3, −2)', dy: 16 }]
  });

  FIGS.q80 = () => {
    const ch = Math.cosh, sh = Math.sinh;
    return plot({
      x: [-8, 12], y: [-6, 8], gx: 2, gy: 2, xt: [-1, 2, 5], yt: [1], W: 340, H: 260,
      fns: [
        { f: x => 1 + (2 / 3) * (x - 2), c: K.mute, w: 1.5, dash: '5 5' }, { f: x => 1 - (2 / 3) * (x - 2), c: K.mute, w: 1.5, dash: '5 5' },
        { px: t => 2 + 3 * ch(t), py: t => 1 + 2 * sh(t), t: [-2, 2], c: K.blue, dl: 0.3 },
        { px: t => 2 - 3 * ch(t), py: t => 1 + 2 * sh(t), t: [-2, 2], c: K.blue, dl: 0.6 }
      ],
      pts: [{ x: 2, y: 1, c: K.red, t: 'center (2, 1)', dy: -15 }, { x: 5, y: 1, c: K.blue, r: 4 }, { x: -1, y: 1, c: K.blue, r: 4 }]
    });
  };

  FIGS.q81 = () => {
    const cx = 110, cy = 110, R = 82, V = [];
    for (let k = 0; k < 10; k++) { const a = (-90 + k * 36) * D2R; V.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]); }
    const d = 'M' + V.map(p => p.map(r1).join(',')).join(' L') + ' Z';
    let b = pa(d, { c: K.blue, w: 3, draw: true, f: K.ice });
    const [v9, v0, v1] = [V[9], V[0], V[1]];
    const e = Math.atan2(v0[1] - v9[1], v0[0] - v9[0]), s = Math.atan2(v1[1] - v0[1], v1[0] - v0[0]);
    b += ln(v0[0], v0[1], v0[0] + 48 * Math.cos(e), v0[1] + 48 * Math.sin(e), { c: K.mute, dash: '5 4', w: 2, cls: 'fi', dl: 1.2 });
    b += pa(angArc(v0[0], v0[1], e, s, 26), { c: K.red, w: 2.5, cls: 'fi', dl: 1.4 }) + tx(v0[0] + 36, v0[1] - 12, '36°', { fs: 12.5, f: K.red, cls: 'fi', dl: 1.4 });
    b += tx(cx, cy + 4, '144° each', { fs: 12.5, f: K.mute, cls: 'fi', dl: 1.2 });
    b += `<g>${poly('-7,-6 9,0 -7,6', { f: K.gold, c: K.ink, w: 1 })}${move(d, 8, { rep: 'indefinite', rot: true, begin: '1.2s' })}</g>`;
    b += tx(214, 70, 'exterior angle', { fs: 12.5, a: 'start' }) + tx(214, 88, '= 180° − 144° = 36°', { fs: 12.5, a: 'start' });
    b += tx(214, 128, '10 turns × 36°', { fs: 12.5, a: 'start' }) + tx(214, 146, '= 360° (one lap)', { fs: 12.5, a: 'start', f: K.green });
    return svg(345, 205, b, { label: 'regular decagon' });
  };

  FIGS.q82 = () => {
    const s = 14, ox = 150, oy = 152, P = (x, y) => [ox + s * x, oy - s * y];
    const sq11 = Math.sqrt(11), th = Math.atan2(sq11, 1) + Math.acos(2.5 / Math.sqrt(12)), u = [Math.cos(th), Math.sin(th)];
    const O = P(1, sq11), A = P(-4, 0), B = P(6, 0), C = P(-3 * u[0], -3 * u[1]), Dd = P(8 * u[0], 8 * u[1]), E = P(0, 0);
    let b = ci(O[0], O[1], 6 * s, { c: K.ink, w: 2 });
    b += ln(A[0], A[1], B[0], B[1], { c: K.blue, w: 3 }) + ln(C[0], C[1], E[0], E[1], { c: K.violet, w: 3 });
    b += pa(`M${r1(E[0])},${r1(E[1])} L${r1(Dd[0])},${r1(Dd[1])}`, { c: K.green, w: 3.5, draw: true, dl: 0.8 });
    [[A, 'A', -12, 0], [B, 'B', 12, 0], [C, 'C', 8, 12], [Dd, 'D', -10, -8], [E, 'E', 6, 14]].forEach(([p, t, dx, dy]) => { b += ci(p[0], p[1], 3.5, { f: K.ink, c: 'none' }) + tx(p[0] + dx, p[1] + dy, t, { fs: 13 }); });
    const mid = (p, q, dx, dy, t, c, dl) => tx((p[0] + q[0]) / 2 + dx, (p[1] + q[1]) / 2 + dy, t, { fs: 12.5, f: c || K.ink, cls: dl ? 'fi' : '', dl });
    b += mid(A, E, 0, -10, '4') + mid(E, B, 0, -10, '6') + mid(C, E, 10, 0, '3') + mid(E, Dd, -12, 4, '8', K.green, 1.6);
    b += tx(262, 80, 'AE · EB', { fs: 12, a: 'start' }) + tx(262, 96, '4 × 6 = 24', { fs: 12, a: 'start' });
    b += tx(262, 128, 'CE · ED', { fs: 12, a: 'start' }) + tx(262, 144, '3 × ED = 24', { fs: 12, a: 'start' }) + tx(262, 160, 'ED = 8', { fs: 13, a: 'start', f: K.green, cls: 'fi', dl: 1.6 });
    return svg(345, 210, b, { label: 'intersecting chords' });
  };

  FIGS.q83 = () => {
    const cx = 120, cy = 108, R = 86, p = a => [cx + R * Math.cos(a * D2R), cy + R * Math.sin(a * D2R)];
    const A = p(145), B = p(35), Pp = p(262);
    let b = ci(cx, cy, R, { c: K.ink, w: 2 });
    b += pa(`M${r1(B[0])},${r1(B[1])} A${R},${R} 0 0 1 ${r1(A[0])},${r1(A[1])}`, { c: K.green, w: 6, op: 0.85, draw: true, dl: 0.1 });
    b += g(ln(cx, cy, A[0], A[1], { c: K.gold, w: 2.5 }) + ln(cx, cy, B[0], B[1], { c: K.gold, w: 2.5 }) + pa(angArc(cx, cy, 35 * D2R, 145 * D2R, 20), { c: K.gold, w: 2.5 }) + tx(cx, cy + 34, '110°', { fs: 12.5 }), { cls: 'fi', dl: 0.7 });
    const aA = Math.atan2(A[1] - Pp[1], A[0] - Pp[0]), aB = Math.atan2(B[1] - Pp[1], B[0] - Pp[0]);
    b += g(ln(Pp[0], Pp[1], A[0], A[1], { c: K.blue, w: 2.5 }) + ln(Pp[0], Pp[1], B[0], B[1], { c: K.blue, w: 2.5 }) + pa(angArc(Pp[0], Pp[1], aB, aA, 30), { c: K.blue, w: 2.5 }) + tx(Pp[0] + 2, Pp[1] + 46, '55°', { fs: 12.5 }), { cls: 'fi', dl: 1.4 });
    b += ci(cx, cy, 3.5, { f: K.ink, c: 'none' }) + tx(cx - 10, cy - 6, 'O', { fs: 12 });
    b += tx(cx, cy + R + 16, 'arc = 110°', { fs: 12.5, f: K.green });
    b += tx(226, 70, 'central angle', { fs: 12, a: 'start' }) + tx(226, 86, '= arc = 110°', { fs: 12, a: 'start' });
    b += tx(226, 120, 'inscribed angle', { fs: 12, a: 'start' }) + tx(226, 136, '= ½ arc = 55°', { fs: 12.5, a: 'start', f: K.green });
    return svg(345, 215, b, { label: 'inscribed and central angles' });
  };

  FIGS.q84 = () => {
    const tri = (ax, ay, n, u, dl0) => {
      const h = u * Math.sqrt(3) / 2, P = (r, k) => [ax + (k - r / 2) * u, ay + r * h];
      let s = '', k2 = 0;
      for (let r = 0; r < n; r++) {
        for (let k = 0; k <= r; k++) { const pts = [P(r, k), P(r + 1, k), P(r + 1, k + 1)]; s += poly(pts.map(q => q.map(r1).join(',')).join(' '), { f: K.sky, c: K.card, w: 2, cls: 'pop', dl: dl0 + k2++ * 0.1 }); }
        for (let k = 0; k < r; k++) { const pts = [P(r, k), P(r, k + 1), P(r + 1, k + 1)]; s += poly(pts.map(q => q.map(r1).join(',')).join(' '), { f: K.blue, c: K.card, w: 2, cls: 'pop', dl: dl0 + k2++ * 0.1 }); }
      }
      return s;
    };
    let b = tri(80, 50, 2, 46, 0) + tri(240, 18, 3, 46, 0.6);
    b += tx(80, 158, 'sides ×2 → 4 tiles', { fs: 12 }) + tx(80, 174, '4 × 6 = 24 cm²', { fs: 12, f: K.mute });
    b += tx(240, 158, 'sides ×3 → 9 tiles', { fs: 12 }) + tx(240, 174, '9 × 6 = 54 cm²', { fs: 12.5, f: K.green, cls: 'fi', dl: 1.6 });
    return svg(345, 185, b, { label: 'similar triangles tiled' });
  };

  FIGS.q85 = () => {
    let b = pa('M80,40 L40,160 A40,10 0 0 0 120,160 Z', { f: K.sky, c: K.ink, w: 2, op: 0.9 }) + el(80, 160, 40, 10, { c: K.ink, w: 2 });
    b += tx(80, 186, 'cone', { fs: 12 });
    b += `<rect x="200" width="80" style="fill:${K.sky};opacity:.9">${anim('y', '160;160;120;120;80;80;40', 4.8, { kt: '0;0.12;0.27;0.42;0.57;0.72;0.87', begin: '0.3s' })}${anim('height', '0;0;40;40;80;80;120', 4.8, { kt: '0;0.12;0.27;0.42;0.57;0.72;0.87', begin: '0.3s' })}</rect>`;
    b += ln(200, 40, 200, 160, { w: 2 }) + ln(280, 40, 280, 160, { w: 2 }) + el(240, 40, 40, 10, { c: K.ink, w: 2, f: 'none' }) + pa('M200,160 A40,10 0 0 0 280,160', { c: K.ink, w: 2 });
    [120, 80, 40].forEach((y, i) => { b += ln(282, y, 296, y, { c: K.mute, w: 1.5 }) + tx(300, y + 20, `${i + 1} cone${i ? 's' : ''}`, { fs: 11.5, a: 'start', cls: 'fi', dl: 1.3 + i * 1.45 }); });
    b += pa('M120,70 Q160,20 196,56', { c: K.mute, w: 2, dash: '4 4' }) + ar(186, 46, 196, 56, { c: K.mute, w: 2 });
    b += tx(240, 186, 'cylinder', { fs: 12 }) + tx(170, 204, 'V_cone = ⅓ × 81π = 27π', { fs: 12.5, f: K.green, cls: 'fi', dl: 4.6 });
    return svg(345, 212, b, { label: 'three cones fill a cylinder' });
  };

  FIGS.q86 = () => plot({
    x: [-6, 6], y: [-3, 9], gx: 1, gy: 1, xt: [1], yt: [2, 5], W: 300, H: 300,
    fns: [{ f: x => 2 * x + 5, c: K.blue, lbl: [1.2, 8.3, 'y = 2x + 5', 'start'] }, { f: x => -x / 2 + 2.5, c: K.green, dl: 0.6, lbl: [5.8, -0.9, 'x + 2y = 5', 'end'] }],
    extra: (X, Y) => {
      const u1 = [1 / Math.sqrt(5), 2 / Math.sqrt(5)], u2 = [2 / Math.sqrt(5), -1 / Math.sqrt(5)], k = 0.7, p = [-1, 3];
      const q = (a, b2) => `${X(p[0] + a[0] * k + b2[0] * k)},${Y(p[1] + a[1] * k + b2[1] * k)}`;
      return pa(`M${X(p[0] + u1[0] * k)},${Y(p[1] + u1[1] * k)} L${q(u1, u2)} L${X(p[0] + u2[0] * k)},${Y(p[1] + u2[1] * k)}`, { c: K.red, w: 2, cls: 'fi', dl: 1.4 });
    },
    pts: [{ x: 1, y: 2, c: K.green, t: '(1, 2)', dx: 20, dy: 6 }]
  });

  FIGS.q87 = () => plot({
    x: [-6, 6], y: [-6, 6], gx: 1, gy: 1, xt: [-4, 5], yt: [3, 5], W: 290, H: 290,
    fns: [{ px: t => 5 * Math.cos(t), py: t => 5 * Math.sin(t), t: [0, 2 * Math.PI], c: K.line, w: 1.5, dash: '4 5' }],
    extra: (X, Y) => ln(X(0), Y(0), X(-4), Y(0), { c: K.red, w: 3.5, cls: 'fi', dl: 0.3 }) + ln(X(-4), Y(0), X(-4), Y(3), { c: K.green, w: 3.5, cls: 'fi', dl: 0.6 }) +
      ln(X(0), Y(0), X(-4), Y(3), { c: K.blue, w: 3, cls: 'fi', dl: 0.9 }) +
      tx(X(-2), Y(0) + 14, 'x = −4', { fs: 12, f: K.red, cls: 'fi', dl: 0.3 }) + tx(X(-4) - 8, Y(1.5), 'y = 3', { fs: 12, a: 'end', cls: 'fi', dl: 0.6 }) + tx(X(-1.6), Y(2.1), 'r = 5', { fs: 12, cls: 'fi', dl: 0.9 }) +
      tx(X(-4.5), Y(5.3), 'II: S', { fs: 12.5, f: K.green }) + tx(X(4.5), Y(5.3), 'I: A', { fs: 12.5, f: K.mute }) + tx(X(-4.5), Y(-5.3), 'III: T', { fs: 12.5, f: K.mute }) + tx(X(4.5), Y(-5.3), 'IV: C', { fs: 12.5, f: K.mute }),
    pts: [{ x: -4, y: 3, c: K.blue, t: '(−4, 3)', dy: -15, dl: 1 }]
  });

  FIGS.q89 = () => {
    const s = 24, C = [52, 196], B = [C[0] + 5 * s, C[1]], A = [C[0] + 8 * s * Math.cos(60 * D2R), C[1] - 8 * s * Math.sin(60 * D2R)];
    let b = ln(C[0], C[1], B[0], B[1], { w: 3, c: K.blue }) + ln(C[0], C[1], A[0], A[1], { w: 3, c: K.blue });
    b += pa(`M${r1(B[0])},${r1(B[1])} L${r1(A[0])},${r1(A[1])}`, { c: K.green, w: 3.5, draw: true, dl: 0.6 });
    b += pa(angArc(C[0], C[1], 0, -60 * D2R, 26), { c: K.red, w: 2.5 }) + tx(C[0] + 36, C[1] - 12, '60°', { fs: 12.5, f: K.red });
    b += tx((C[0] + B[0]) / 2, C[1] + 16, '5', { fs: 13 }) + tx((C[0] + A[0]) / 2 - 12, (C[1] + A[1]) / 2, '8', { fs: 13 }) + tx((B[0] + A[0]) / 2 + 12, (B[1] + A[1]) / 2, '7', { fs: 14, f: K.green, cls: 'fi', dl: 1.5 });
    b += tx(196, 70, 'c² = 5² + 8² − 2(5)(8)cos 60°', { fs: 12, a: 'start' }) + tx(196, 90, '   = 25 + 64 − 40 = 49', { fs: 12, a: 'start' }) + tx(196, 114, 'c = 7', { fs: 14, a: 'start', f: K.green, cls: 'fi', dl: 1.5 });
    return svg(345, 215, b, { label: 'law of cosines triangle' });
  };

  FIGS.q90 = () => {
    const k = 3, Ox = 40, gy = 204, Tx = Ox + 30 * k, Ty = gy - 30 * Math.sqrt(3) * k;
    let b = ln(10, gy, 330, gy, { c: K.line, w: 3 });
    b += rc(Tx - 5, gy - 80, 10, 80, { f: K.orange, c: 'none', op: 0.8 }) + ci(Tx, Ty + 32, 32, { f: K.green, c: 'none', op: 0.8 });
    b += pa(`M${Ox},${gy} L${r1(Tx)},${r1(Ty)}`, { c: K.blue, w: 2.5, dash: null, draw: true, dl: 0.3 });
    b += pa(angArc(Ox, gy, 0, -60 * D2R, 26), { c: K.red, w: 2.5 }) + tx(Ox + 34, gy - 14, '60°', { fs: 12, f: K.red });
    b += ci(Ox, gy - 4, 4, { f: K.ink, c: 'none' });
    b += ar(Ox + 2, gy + 14, Tx - 2, gy + 14, { c: K.mute, w: 1.5, h: 7 }) + ar(Tx - 2, gy + 14, Ox + 2, gy + 14, { c: K.mute, w: 1.5, h: 7 }) + tx((Ox + Tx) / 2, gy + 26, '30 m (adjacent)', { fs: 11.5 });
    b += ar(Tx + 42, gy - 2, Tx + 42, Ty + 2, { c: K.green, w: 2, h: 7 }) + ar(Tx + 42, Ty + 2, Tx + 42, gy - 2, { c: K.green, w: 2, h: 7 });
    b += tx(Tx + 52, (gy + Ty) / 2 - 10, 'h (opposite)', { fs: 12, a: 'start' }) + tx(Tx + 52, (gy + Ty) / 2 + 10, '= 30 tan 60°', { fs: 12, a: 'start' }) + tx(Tx + 52, (gy + Ty) / 2 + 30, '= 30√3 ≈ 52 m', { fs: 12.5, a: 'start', f: K.green, cls: 'fi', dl: 1.3 });
    return svg(340, 240, b, { label: 'angle of elevation to a treetop' });
  };

  FIGS.q91 = () => {
    let b = '';
    const row = (y, vals, label, dl0) => {
      let x = 20;
      vals.forEach((v, i) => {
        const w = v * 2.2, hot = v === 30;
        b += g(rc(x, y, w - 3, 34, { rx: 6, f: hot ? K.green : K.sky, c: 'none' }) + tx(x + w / 2 - 1.5, y + 18, v, { fs: 12.5, f: hot ? '#fff' : K.ink }), { cls: 'pop', dl: dl0 + i * 0.12 + (hot ? 0.6 : 0) });
        x += w;
      });
      b += tx(x + 8, y + 18, label, { fs: 12.5, a: 'start' });
    };
    row(30, [18, 18, 18, 18, 18], '5 × 18 = 90', 0);
    row(100, [18, 18, 18, 18, 18, 30], '6 × 20 = 120', 0.8);
    b += tx(170, 168, 'new number = 120 − 90 = 30', { fs: 13.5, f: K.green, cls: 'fi', dl: 2.2 });
    return svg(345, 182, b, { label: 'totals before and after' });
  };

  FIGS.q92 = () => {
    const X = v => 20 + (v - 65) * 10, data = [68, 72, 73, 76, 81], y = 96;
    let b = ln(15, 120, 330, 120, { c: K.mute, w: 1.5 });
    for (let v = 65; v <= 95; v += 5) b += ln(X(v), 116, X(v), 124, { c: K.mute, w: 1.5 }) + tx(X(v), 138, v, { fs: 11, f: K.mute, fw: 700 });
    data.forEach(v => { b += ci(X(v), y, 7, { f: K.line, c: 'none' }); });
    let grp = data.map(v => ci(X(v), y, 7, { f: K.blue, c: K.card, w: 1.5 })).join('');
    grp += poly(`${X(74)},152 ${X(74) - 7},164 ${X(74) + 7},164`, { f: K.red, c: 'none' }) + tx(X(74), 178, 'mean', { fs: 11.5, f: K.red });
    grp += ln(X(68), 70, X(81), 70, { c: K.navy, w: 2 }) + ln(X(68), 64, X(68), 76, { c: K.navy, w: 2 }) + ln(X(81), 64, X(81), 76, { c: K.navy, w: 2 }) + tx((X(68) + X(81)) / 2, 56, 'same spread', { fs: 11.5 });
    b += `<g>${grp}${turn('0 0;0 0;50 0', 2.4, { type: 'translate', kt: '0;0.3;1', ks: '0 0 1 1;0.4 0 0.2 1' })}</g>`;
    b += tx(170, 202, 'every score +5 → mean 74 → 79, SD unchanged', { fs: 12.5, cls: 'fi', dl: 2.4 });
    return svg(345, 212, b, { label: 'shifting every score' });
  };

  FIGS.q93 = () => {
    const pdf = z => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);
    return plot({
      x: [-3.5, 3.5], y: [0, 0.48], gx: 1, gy: 0.1, xt: [-2, -1, 0, 1, 2], yt: [], xl: 'z', yl: '', W: 340, H: 230,
      area: { f: pdf, a: 2, b: 3.5, c: K.green, dl: 1.6 },
      fns: [{ f: pdf, c: K.blue }],
      segs: [{ x1: 1, y1: 0, x2: 1, y2: pdf(1), c: K.violet, dash: '4 4', dl: 0.9 }, { x1: 2, y1: 0, x2: 2, y2: pdf(2), c: K.green, dash: '4 4', dl: 1.2 }],
      pts: [{ x: 1, y: pdf(1), c: K.violet, t: 'Ben z = 1', dx: 34, dy: -10, dl: 0.9 }, { x: 2, y: pdf(2), c: K.green, t: 'Ana z = 2', dx: 30, dy: -12, dl: 1.2 }],
      extra: (X, Y) => tx(X(2.7), Y(0.12), 'top ≈ 2%', { fs: 11.5, f: K.green, cls: 'fi', dl: 1.8 })
    });
  };

  FIGS.q94 = () => {
    const s = 'style="width:38px;height:34px"';
    let h = `<div class="cell h" ${s}>+</div>` + [1, 2, 3, 4, 5, 6].map(n => `<div class="cell h" ${s}>${n}</div>`).join('');
    for (let a = 1; a <= 6; a++) {
      h += `<div class="cell h" ${s}>${a}</div>`;
      for (let b = 1; b <= 6; b++) { const on = a + b === 9; h += `<div class="cell ${on ? 'on pp' : ''}" style="width:38px;height:34px;--d:${on ? (0.3 + (a - 3) * 0.3).toFixed(2) : 0}s">${a + b}</div>`; }
    }
    return `<div class="hfig"><div class="grid2" style="grid-template-columns:repeat(7,38px)">${h}</div></div>`;
  };

  FIGS.q96 = () => plot({
    x: [-1, 5], y: [-1, 7], gx: 1, gy: 1, xt: [2], yt: [4], W: 300, H: 280,
    fns: [{ f: x => x + 2, c: K.blue }],
    segs: [{ x1: 2, y1: 0, x2: 2, y2: 4, dl: 1 }, { x1: 0, y1: 4, x2: 2, y2: 4, dl: 1 }],
    extra: (X, Y) => {
      const dot = (from, c) => `<circle r="5" style="fill:${c}">${anim('cx', `${X(from)};${X(from)};${X(from < 2 ? 1.88 : 2.12)}`, 2.4, { kt: '0;0.3;1', rep: 'indefinite' })}${anim('cy', `${Y(from + 2)};${Y(from + 2)};${Y((from < 2 ? 1.88 : 2.12) + 2)}`, 2.4, { kt: '0;0.3;1', rep: 'indefinite' })}</circle>`;
      return dot(0, K.green) + dot(4, K.violet) + tx(X(0.3), Y(1.4), 'x → 2⁻', { fs: 12, f: K.green }) + tx(X(4), Y(5), 'x → 2⁺', { fs: 12, f: K.violet, a: 'start', at: 'dx="8"' });
    },
    pts: [{ x: 2, y: 4, open: true, c: K.red, r: 6, t: 'hole at (2, 4)', dx: -48, dy: -14 }]
  });

  FIGS.q97 = () => plot({
    x: [-1.5, 1.8], y: [-2, 20], gx: 1, gy: 4, xt: [-1, 1], yt: [4, 8, 12, 16], W: 320, H: 270,
    fns: [{ f: x => 3 * x ** 4 - 2 * x * x + 7, c: K.blue, lbl: [-1.1, 17, 'f(x)', 'middle'] }, { f: x => 8 * x, dom: [0.15, 1.75], c: K.gold, w: 2.5, dl: 1, lbl: [1.6, 9, 'slope = 8', 'start'] }],
    pts: [{ x: 1, y: 8, c: K.red, t: '(1, 8)', dx: -24, dy: -6 }]
  });

  FIGS.q98 = () => plot({
    x: [-2.5, 2.5], y: [-4, 4], gx: 1, gy: 1, xt: [-1, 1], yt: [-2, 2], W: 320, H: 270,
    fns: [{ f: x => x ** 3 - 3 * x, c: K.blue }],
    segs: [{ x1: -1.7, y1: 2, x2: -0.3, y2: 2, c: K.green, dash: '5 4', dl: 1.3 }, { x1: 0.3, y1: -2, x2: 1.7, y2: -2, c: K.red, dash: '5 4', dl: 1.5 }],
    pts: [{ x: -1, y: 2, c: K.green, t: 'max (−1, 2)', dy: -15 }, { x: 1, y: -2, c: K.red, t: 'min (1, −2)', dy: 18, dl: 1.5 }]
  });

  FIGS.q99 = () => plot({
    x: [0, 50], y: [0, 700], gx: 5, gy: 100, xt: [10, 25, 40, 50], yt: [200, 400, 625], xl: 'side x (m)', yl: 'area (m²)', W: 330, H: 260,
    fns: [{ f: x => x * (50 - x), c: K.blue }],
    pts: [{ x: 25, y: 625, c: K.green, t: '25 × 25 = 625', dy: -15 }, { x: 40, y: 400, c: K.mute, t: '40 × 10 = 400', dx: -14, dy: -16, dl: 1.6 }]
  });

  FIGS.q100 = () => plot({
    x: [-0.3, 2.4], y: [0, 18], gx: 0.5, gy: 2, xt: [1, 2], yt: [4, 8, 12, 16], W: 320, H: 260,
    area: { f: x => 3 * x * x + 2 * x, a: 0, b: 2, c: K.sky, dl: 1.1 },
    fns: [{ f: x => 3 * x * x + 2 * x, dom: [0, 2.4], c: K.blue }],
    extra: (X, Y) => tx(X(1.45), Y(3.2), 'area = 12', { fs: 14, f: K.navy, cls: 'fi', dl: 1.4 }),
    pts: [{ x: 2, y: 16, c: K.mute, t: 'f(2) = 16 is a height, not the area', dx: -96, dy: -2, dl: 1.8 }]
  });
})();

/* Figures for Part I (items 1–35). Each FIGS.q<id> returns an HTML/SVG string. */
(function () {
  const { K, r1, svg, ln, rc, ci, pa, poly, tx, g, ar, anim, spin, turn, plot, bars, FIGS, MACROS } = FK;

  /* 1 — braking car, water sloshes forward */
  FIGS.q1 = () => {
    let b = ln(10, 152, 190, 152, { c: K.line, w: 3 });
    const car = rc(30, 110, 96, 30, { rx: 10, f: K.blue, c: 'none' }) +
      pa('M50,110 L62,90 H100 L112,110 Z', { f: K.sky, c: 'none' }) +
      ci(54, 142, 9, { f: K.ink, c: 'none' }) + ci(102, 142, 9, { f: K.ink, c: 'none' });
    b += `<g>${car}${turn('0 0;48 0', 1.6, { type: 'translate', kt: '0;1', ks: '0.15 0.75 0.35 1', begin: '0.3s' })}</g>`;
    b += ar(40, 70, 120, 70, { c: K.green, w: 3 }) + tx(80, 56, 'v: moving east', { fs: 12 });
    b += ar(150, 176, 60, 176, { c: K.red, w: 3 }) + tx(105, 194, 'a: braking (west)', { fs: 12 });
    // glass
    b += pa('M225,50 L236,172 H304 L315,50', { c: K.ink, w: 3 });
    b += `<polygon points="237,170 303,170 310.4,105 229.6,105" style="fill:${K.water};stroke:${K.blue};stroke-width:2">` +
      anim('points', '237,170 303,170 310.4,105 229.6,105;237,170 303,170 312.1,84 231.2,126', 1.2, { begin: '0.5s', kt: '0;1', ks: '0.2 0.8 0.3 1' }) + '</polygon>';
    b += tx(218, 188, 'W', { fs: 13, f: K.mute }) + tx(322, 188, 'E', { fs: 13, f: K.mute });
    b += ar(250, 150, 296, 128, { c: K.navy, w: 2.5, cls: 'fi', dl: 1.6 });
    b += tx(270, 30, 'water piles up at the front (east)', { fs: 12, cls: 'fi', dl: 1.7 });
    return svg(340, 205, b, { label: 'braking car and tilting water' });
  };

  /* 2 — crowbar lever balancing */
  FIGS.q2 = () => {
    const fx = 130, by = 100;
    let b = ln(40, by + 40, 340, by + 40, { c: K.line, w: 3 });
    b += poly(`${fx},${by + 4} ${fx - 16},${by + 40} ${fx + 16},${by + 40}`, { f: K.mute, c: 'none' });
    let beam = rc(40, by - 4, 290, 8, { rx: 4, f: K.navy, c: 'none' });
    beam += pa(`M50,${by - 4} Q46,${by - 38} 70,${by - 42} Q96,${by - 44} 92,${by - 4} Z`, { f: K.mute, c: K.ink, w: 1.5 });
    beam += tx(71, by - 22, '600 N', { fs: 11, f: K.card });
    beam += ar(310, by - 62, 310, by - 8, { c: K.green, w: 3.5 }) + tx(318, by - 44, 'F', { fs: 14, a: 'start' });
    b += `<g>${beam}${turn(`6 ${fx} ${by};-3 ${fx} ${by};1.5 ${fx} ${by};0 ${fx} ${by}`, 2.2, { kt: '0;0.4;0.75;1' })}</g>`;
    const dim = (x1, x2, t) => ar(x1 + 2, by + 58, x2 - 2, by + 58, { c: K.mute, w: 1.5, h: 7 }) + ar(x2 - 2, by + 58, x1 + 2, by + 58, { c: K.mute, w: 1.5, h: 7 }) + tx((x1 + x2) / 2, by + 72, t, { fs: 12 });
    b += dim(70, fx, '0.5 m') + dim(fx, 310, '1.5 m');
    b += tx(85, 22, '600 × 0.5 = 300 N·m', { fs: 12, cls: 'fi', dl: 1.8 }) + tx(255, 22, 'F × 1.5 = 300 → F = 200 N', { fs: 12, cls: 'fi', dl: 2.3 });
    return svg(350, 185, b, { label: 'lever with rock and effort' });
  };

  /* 3 — gear train */
  function gearPath(cx, cy, rp, n) {
    const ro = rp + 4, ri = rp - 4, step = 2 * Math.PI / n;
    let d = '';
    for (let i = 0; i < n; i++) {
      const a = i * step;
      [[ri, a], [ro, a + step * 0.2], [ro, a + step * 0.5], [ri, a + step * 0.7]].forEach(([r, t], j) => {
        d += (i === 0 && j === 0 ? 'M' : 'L') + r1(cx + r * Math.cos(t)) + ',' + r1(cy + r * Math.sin(t));
      });
    }
    return d + 'Z';
  }
  FIGS.q3 = () => {
    const teeth = [40, 28, 28, 28, 20], cy = 70;
    const rp = teeth.map(t => t * 1.05);
    const xs = [48];
    for (let i = 1; i < 5; i++) xs.push(xs[i - 1] + rp[i - 1] + rp[i] + 1);
    let b = '';
    teeth.forEach((t, i) => {
      const cx = xs[i], hot = i === 0 || i === 4, dir = i % 2 ? -1 : 1;
      b += `<g>${pa(gearPath(cx, cy, rp[i], t), { f: hot ? K.pgold : K.ice, c: hot ? K.gold : K.blue, w: 1.5 })}` +
        ci(cx, cy, rp[i] * 0.32, { f: K.card, c: K.ink, w: 1.5 }) + ln(cx, cy, cx, cy - rp[i] + 7, { w: 3, c: K.ink }) +
        spin(cx, cy, t / 5, dir) + '</g>';
      b += tx(cx, 140, `Gear ${i + 1}`, { fs: 12 }) + tx(cx, 156, `${t === 28 ? '' : t + ' teeth'}`, { fs: 11, f: K.mute });
      b += tx(cx, 174, dir > 0 ? '↻ CW' : '↺ CCW', { fs: 12, f: dir > 0 ? K.green : K.mute, cls: 'fi', dl: 0.3 + i * 0.35 });
    });
    b += tx(170, 200, '40 teeth × 30 rpm = 20 teeth × 60 rpm', { fs: 12.5, cls: 'fi', dl: 2.2 });
    return svg(340, 212, b, { label: 'five meshed gears turning' });
  };

  /* 4 — block and tackle */
  FIGS.q4 = () => {
    const D = 22, dur = 2.4, begin = '0.8s';
    let b = rc(90, 8, 150, 8, { f: K.mute, c: 'none' }) + ln(160, 16, 160, 30, { w: 3 });
    b += rc(115, 30, 90, 26, { rx: 8, f: K.ice, c: K.blue });
    [125, 145, 175, 195].forEach((x, i) => {
      b += `<line x1="${x}" y1="56" x2="${x}" y2="130" style="stroke:${K.blue};stroke-width:3">${anim('y2', `130;${130 - D}`, dur, { begin })}</line>`;
      b += tx(x + (i < 2 ? -9 : 9), 92, i + 1, { fs: 12, cls: 'pop', dl: 0.2 + i * 0.15 });
    });
    const mov = rc(115, 130, 90, 26, { rx: 8, f: K.ice, c: K.blue }) + ln(160, 156, 160, 170, { w: 3 }) +
      rc(124, 170, 72, 40, { rx: 6, f: K.gold, c: 'none' }) + tx(160, 191, '800 N', { fs: 13, f: '#2A1E00' });
    b += `<g>${mov}${turn(`0 0;0 ${-D}`, dur, { type: 'translate', begin })}</g>`;
    b += `<line x1="222" y1="43" x2="222" y2="150" style="stroke:${K.blue};stroke-width:3">${anim('y2', `150;${150 + 4 * D}`, dur, { begin })}</line>`;
    b += `<g>${ci(222, 150, 7, { f: K.green, c: 'none' })}${turn(`0 0;0 ${4 * D}`, dur, { type: 'translate', begin })}</g>`;
    b += ln(205, 43, 222, 43, { c: K.blue, w: 3 });
    b += tx(70, 112, '4 ropes', { fs: 12 }) + tx(70, 128, 'hold it up', { fs: 12, f: K.mute });
    b += tx(270, 110, 'pull 200 N', { fs: 12, cls: 'fi', dl: 0.6 });
    b += tx(270, 250, 'rope: 4 m', { fs: 12.5, cls: 'fi', dl: 3.2 }) + tx(72, 196, 'load: 1 m ↑', { fs: 12.5, cls: 'fi', dl: 3.2 });
    return svg(340, 265, b, { label: 'block and tackle with four supporting ropes' });
  };

  /* 5 — bulbs before / after Q burns out */
  function bulb(cx, cy, p, name, out) {
    let s = p > 0 ? ci(cx, cy, 13 + 22 * p, { f: K.gold, c: 'none', op: 0.18 + 0.45 * p, cls: 'pulse' }) : '';
    s += ci(cx, cy, 13, { f: out ? K.card : '#FFE08A', c: K.ink, w: 2 }) + tx(cx, cy + 1, name, { fs: 12, f: out ? K.mute : '#2A1E00' });
    if (out) s += ln(cx - 9, cy - 9, cx + 9, cy + 9, { c: K.red, w: 3 }) + ln(cx + 9, cy - 9, cx - 9, cy + 9, { c: K.red, w: 3 });
    return s;
  }
  function circuitPanel(ox, title, pw, qOut, cur, notes) {
    const W = (x1, y1, x2, y2) => ln(ox + x1, y1, ox + x2, y2, { w: 2 });
    let b = W(20, 40, 20, 96) + W(20, 104, 20, 170);
    b += ln(ox + 6, 96, ox + 34, 96, { w: 3 }) + ln(ox + 13, 104, ox + 27, 104, { w: 5 });
    b += W(20, 40, 50, 40) + W(50, 20, 50, 60) + W(50, 20, 72, 20) + W(98, 20, 120, 20) + W(50, 60, 72, 60) + W(98, 60, 120, 60) + W(120, 20, 120, 60);
    b += W(120, 40, 150, 40) + W(150, 40, 150, 170) + W(20, 170, 72, 170) + W(98, 170, 150, 170);
    b += bulb(ox + 85, 20, pw[0], 'P') + bulb(ox + 85, 60, pw[1], 'Q', qOut) + bulb(ox + 85, 170, pw[2], 'R');
    b += tx(ox + 85, 94, `I = ${cur[0]}`, { fs: 11.5 }) + tx(ox + 85, 122, `I = ${cur[2]}`, { fs: 11.5 });
    b += tx(ox + 85, 222, title, { fs: 13 });
    if (notes) b += tx(ox + 85, 240, `<tspan style="fill:${K.green}">${notes[0]}</tspan>  <tspan style="fill:${K.red}">${notes[1]}</tspan>`, { fs: 11.5, cls: 'fi', dl: 1 });
    return b;
  }
  FIGS.q5 = () => svg(360, 250,
    circuitPanel(4, 'Before', [0.25, 0.25, 1], false, ['0.33', '', '0.67']) +
    circuitPanel(190, 'After Q burns out', [0.56, 0, 0.56], true, ['0.50', '', '0.50'], ['P brighter ▲', 'R dimmer ▼']) +
    ar(172, 105, 196, 105, { c: K.mute, w: 2 }), { label: 'bulb brightness before and after' });

  /* 6 — bottle with three jets */
  FIGS.q6 = () => {
    let b = rc(40, 236, 130, 8, { f: K.mute, c: 'none', rx: 2 });
    b += pa('M60,236 V60 Q60,40 80,36 H85 V20 H125 V36 H130 Q150,40 150,60 V236 Z', { f: K.card, c: K.ink, w: 2.5 });
    b += pa('M62,234 V62 Q62,48 82,46 H128 Q148,48 148,62 V234 Z', { f: K.water, c: 'none' });
    [[100, 54, 'slowest'], [150, 104, 'faster'], [200, 154, 'fastest']].forEach(([y, h, t], i) => {
      let d = `M150,${y}`;
      for (let x = 2; x <= 140; x += 4) { const yy = y + x * x / (4.4 * h); d += ` L${150 + x},${r1(yy)}`; }
      b += pa(d, { c: K.blue, w: 3.5, draw: true, dl: 0.3 + i * 0.35 });
      const len = 8 + h * 0.2;
      b += ar(146 - len, y, 146, y, { c: K.red, w: 2.5, h: 7, cls: 'fi', dl: 0.1 + i * 0.2 });
      b += tx(160, y - 12, t, { fs: 12, a: 'start', cls: 'fi', dl: 1.2 + i * 0.35 });
      b += ci(150, y, 3.5, { f: K.ink, c: 'none' });
    });
    b += tx(100, 140, 'P = ρgh', { fs: 13, f: K.navy });
    b += tx(105, 160, 'deeper →', { fs: 11, f: K.navy }) + tx(105, 174, 'more push', { fs: 11, f: K.navy });
    return svg(340, 305, b, { label: 'water jets from three holes' });
  };

  /* 7 — typhoon wind lifts a roof */
  FIGS.q7 = () => {
    let b = '';
    [34, 48, 62].forEach((y, i) => {
      b += ln(10, y, 330, y, { c: K.sky, w: 2.5, cls: 'flow fast' });
      b += ar(320, y, 345, y, { c: K.sky, w: 2.5, h: 8 });
    });
    b += tx(175, 16, 'fast wind above → LOW pressure', { fs: 12.5 });
    b += rc(110, 132, 140, 80, { f: K.card, c: K.ink, w: 2.5 }) + rc(166, 170, 28, 42, { f: K.ice, c: K.ink, w: 2 });
    const roof = poly('94,134 180,80 266,134', { f: K.orange, c: K.ink, w: 2.5 });
    b += `<g>${roof}${turn('0 0;0 0;0 -14', 2.6, { type: 'translate', kt: '0;0.35;1', ks: '0 0 1 1;0.3 0 0.2 1', begin: '0.4s' })}</g>`;
    [130, 230].forEach((x, i) => { b += ar(x, 200, x, 144, { c: K.green, w: 3, cls: 'fi', dl: 0.6 + i * 0.2 }); });
    b += tx(180, 232, 'still air inside → HIGHER pressure pushes up', { fs: 12, cls: 'fi', dl: 1 });
    return svg(350, 245, b, { label: 'roof lifted by low pressure' });
  };

  /* 8 — tipping test for two bottles */
  function bottle(o) {
    // drawn upright, base at y = 0; o.flip draws it upside down on its cap
    const shape = 'M-20,0 V-64 Q-20,-80 -8,-86 V-100 H8 V-86 Q20,-80 20,-64 V0 Z';
    let s = pa(shape, { f: K.card, c: K.ink, w: 2.2 }) + rc(-9, -108, 18, 8, { rx: 2, f: K.mute, c: 'none' });
    s += rc(-18, -24, 36, 22, { rx: 3, f: K.gold, c: 'none' });
    return o.flip ? `<g transform="translate(0,-108) scale(1,-1)">${s}</g>` : s;
  }
  FIGS.q8 = () => {
    const ground = 196, th = 14 * Math.PI / 180;
    const rot = (vx, vy) => [vx * Math.cos(th) - vy * Math.sin(th), vx * Math.sin(th) + vy * Math.cos(th)];
    let b = ln(10, ground, 340, ground, { c: K.line, w: 3 });
    const one = (ox, pivot, cg, flip, endAng, label, verdict, good) => {
      const [dx, dy] = rot(cg[0] - pivot, cg[1]);
      const px = ox + pivot + dx, py = ground + dy;
      let inner = bottle({ flip }) + ci(cg[0], cg[1], 5, { f: K.red, c: K.card, w: 1.5 });
      let s = `<g transform="translate(${ox},${ground})"><g>${inner}` +
        turn(`0 ${pivot} 0;14 ${pivot} 0;14 ${pivot} 0;${endAng} ${pivot} 0`, 3.2, { kt: '0;0.3;0.62;1', begin: '0.3s' }) + '</g></g>';
      s += `<g style="opacity:0">${ln(px, py, px, ground, { c: K.red, w: 2, dash: '4 4' })}${ci(px, ground, 3, { f: K.red, c: 'none' })}` +
        anim('opacity', '0;0;1;1;0', 3.2, { kt: '0;0.3;0.36;0.6;0.66', begin: '0.3s' }) + '</g>';
      s += tx(ox, 24, label, { fs: 12.5 });
      s += tx(ox + (good ? 0 : 40), 222, verdict, { fs: 12.5, f: good ? K.green : K.red, cls: 'fi', dl: 3.4 });
      return s;
    };
    b += one(80, 20, [0, -12], false, 0, 'A: wide base, low CG', 'rocks back ✓', true);
    b += one(220, 8, [0, -96], true, 66, 'D: tiny base, high CG', 'topples ✕', false);
    return svg(350, 232, b, { label: 'tipping test for two bottles' });
  };

  /* 9 — figure series */
  function frameBody(cx, cy, ang, fill, o = {}) {
    const s = 30, r = 19, a = ang * Math.PI / 180;
    return rc(cx - s, cy - s, 2 * s, 2 * s, { rx: 7, c: o.hl ? K.green : K.blue, w: o.hl ? 3.5 : 2, f: K.card, dash: o.dash }) +
      (o.q ? tx(cx, cy + 2, '?', { fs: 26, f: K.blue }) :
        ar(cx - r * Math.cos(a), cy + r * Math.sin(a), cx + r * Math.cos(a), cy - r * Math.sin(a), { w: 3, h: 10 }) +
        rc(cx - 25.5, cy - 25.5, 10, 10, { f: fill ? K.blue : K.card, c: K.ink, w: 1.5 }));
  }
  MACROS.frame = a => { const [ang, fill] = a.trim().split(/\s+/).map(Number); return svg(64, 64, frameBody(32, 32, ang, fill), { max: 60, label: 'figure' }); };
  FIGS.series = () => svg(300, 72, frameBody(36, 36, 90, 1) + frameBody(112, 36, 45, 0) + frameBody(188, 36, 0, 1) + frameBody(264, 36, 0, 0, { q: 1, dash: '5 4' }), { max: 330, label: 'series' });
  FIGS.q9 = () => {
    let b = '';
    [[90, 1, '90°', '■'], [45, 0, '45°', '□'], [0, 1, '0°', '■'], [-45, 0, '−45°', '□']].forEach(([a, f, t, sq], i) => {
      const cx = 44 + i * 84;
      b += g(frameBody(cx, 50, a, f, { hl: i === 3 }), { cls: 'pop', dl: i * 0.45 });
      b += tx(cx, 98, `arrow ${t}`, { fs: 12, cls: 'fi', dl: i * 0.45 + 0.2 }) + tx(cx, 116, sq === '■' ? 'filled' : 'empty', { fs: 12, f: K.mute, cls: 'fi', dl: i * 0.45 + 0.2 });
      if (i < 3) b += tx(cx + 42, 12, '↻ 45°', { fs: 11.5, f: K.blue, cls: 'fi', dl: i * 0.45 + 0.3 });
    });
    return svg(340, 128, b, { label: 'series rule' });
  };

  /* 10 — fold, punch, unfold */
  FIGS.q10 = () => {
    const cx = 170, y0 = 26, h = 140, w = 120;
    let b = rc(cx, y0, w, h, { f: K.ice, c: K.blue, w: 2 }) + ci(cx + 98, y0 + 22, 8, { f: K.card, c: K.ink, w: 2 });
    const left = rc(cx - w, y0, w, h, { f: K.pgold, c: K.gold, w: 2 }) + ci(cx - 98, y0 + 22, 8, { f: K.card, c: K.ink, w: 2 });
    b += `<g transform="translate(${cx},0)"><g>${turn('-1 1;-1 1;1 1', 2.4, { type: 'scale', kt: '0;0.35;1', ks: '0 0 1 1;0.4 0 0.2 1' })}<g transform="translate(${-cx},0)">${left}</g></g></g>`;
    b += ln(cx, y0 - 10, cx, y0 + h + 8, { c: K.mute, dash: '6 5', w: 2 }) + tx(cx, y0 + h + 22, 'fold line', { fs: 12, f: K.mute });
    b += tx(cx - 86, y0 + 56, 'mirror hole', { fs: 11.5, cls: 'fi', dl: 2.6 }) + tx(cx + 86, y0 + 56, 'punched', { fs: 11.5 });
    return svg(340, 196, b, { label: 'paper unfolding' });
  };

  /* 11 — cube net: question figure + 3D fold */
  FIGS.net = () => {
    const cells = [[0, 0, 1], [1, 0, 2], [1, 1, 3], [2, 1, 4], [3, 1, 5], [3, 2, 6]];
    return svg(180, 132, cells.map(([c, r, n]) => rc(10 + c * 40, 6 + r * 40, 40, 40, { f: K.ice, c: K.blue, w: 2 }) + tx(30 + c * 40, 27 + r * 40, n, { fs: 16 })).join(''), { max: 180, label: 'cube net' });
  };
  FIGS.q11 = () => {
    const f = (n, cls, kids = '', hot = false, dl = 0) => `<div class="face ${cls} ${hot ? 'hot' : ''}" style="transition-delay:${dl}s"><div class="sk">${n}</div>${kids}</div>`;
    const net = f(3, 'base', f(2, 'up', f(1, 'left', '', true, 0.9), false, 0) + f(4, 'right', f(5, 'right', f(6, 'down', '', false, 1.6), false, 1.2), true, 0.4));
    return `<div class="c3wrap" data-net><div class="c3stage"><div class="c3scene">${net}</div></div><button class="btn small ghost" data-fold>Fold / unfold</button></div>`;
  };
  FIGS.q11.after = root => {
    const w = root.querySelector('[data-net]');
    if (!w) return;
    const t = setTimeout(() => w.classList.add('folded', 'spin'), 700);
    w.querySelector('[data-fold]').onclick = () => { clearTimeout(t); w.classList.toggle('folded'); w.classList.toggle('spin', w.classList.contains('folded')); };
  };

  /* 12 — spinning die */
  FIGS.q12 = () => {
    const faces = [[1, 'rotateY(0deg)'], [6, 'rotateY(180deg)'], [3, 'rotateY(90deg)'], [4, 'rotateY(-90deg)'], [2, 'rotateX(90deg)'], [5, 'rotateX(-90deg)']];
    const die = faces.map(([n, t]) => `<div class="sk ${n === 3 || n === 4 ? 'hot' : ''}" style="transform:${t} translateZ(40px)">${n}</div>`).join('');
    return `<div class="c3wrap"><div class="c3stage" style="height:170px"><div class="die">${die}</div></div>` +
      '<div class="chips"><span class="chip" style="--d:.2s">1 + 6 = 7</span><span class="chip" style="--d:.5s">2 + 5 = 7</span><span class="chip hl" style="--d:.8s">3 + 4 = 7</span></div></div>';
  };

  /* 13 — word in a mirror */
  FIGS.q13 = () => `<div class="hfig"><div class="mirrorfig"><div><span class="word">GRAVITY</span><small>card</small></div><div class="mline"></div><div><span class="word mimg">GRAVITY</span><small>image</small></div></div></div>` +
    FIGS.table('Change|What it does ;; >Upright mirror (A)|flips left ↔ right ;; Water mirror (C)|flips top ↔ bottom ;; 180° turn (B)|turns it upside down ;; Reversed spelling (D)|letters still face forward');

  /* 14 — rotating F */
  const F = 'M0,0 H36 V12 H12 V24 H28 V36 H12 V60 H0 Z';
  FIGS.q14 = () => {
    let b = `<g transform="translate(62,38) scale(1.25)">${pa(F, { c: K.green, w: 2, dash: '5 4', s: 'fill:none' }).replace('<path', '<path transform="rotate(180 18 30)"')}` +
      `<g>${pa(F, { f: K.blue, c: 'none' })}${turn('0 18 30;0 18 30;180 18 30', 2.2, { kt: '0;0.25;1', ks: '0 0 1 1;0.45 0 0.25 1' })}</g></g>`;
    b += tx(85, 150, 'turn 180° → B', { fs: 13, f: K.green, cls: 'fi', dl: 2.3 }) + tx(85, 168, 'lands exactly ✓', { fs: 12, f: K.mute, cls: 'fi', dl: 2.3 });
    b += `<g transform="translate(232,38) scale(1.25)">${pa(F, { c: K.mute, w: 2, dash: '5 4' })}` +
      `<g>${spin(18, 30, 6)}<g transform="translate(36,0) scale(-1,1)">${pa(F, { f: K.red, c: 'none', op: 0.85 })}</g></g></g>`;
    b += tx(255, 150, 'mirror F (A)', { fs: 13, f: K.red }) + tx(255, 168, 'never matches ✕', { fs: 12, f: K.mute });
    return svg(340, 180, b, { label: 'rotation versus reflection' });
  };

  /* 15 — painted 4×4×4 cube */
  FIGS.q15 = () => {
    const n = 4, s = 21, cx = 120, cy = 10;
    const P = (x, y, z) => `${r1(cx + (x - y) * s * 0.866)},${r1(cy + (x + y) * s * 0.5 + (n - z) * s)}`;
    const kind = (a, b) => { const ea = a === 0 || a === n - 1, eb = b === 0 || b === n - 1; return ea && eb ? 3 : ea || eb ? 2 : 1; };
    const col = { 3: K.gold, 2: K.blue, 1: K.ice };
    let cells = '';
    let k = 0;
    const cell = (pts, t) => { k++; cells += poly(pts, { f: col[t], c: K.card, w: 1.6, cls: 'pop', dl: t === 2 ? 0.9 + k * 0.012 : t === 3 ? 0.5 : 0.1 }); };
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) cell([P(i, j, n), P(i + 1, j, n), P(i + 1, j + 1, n), P(i, j + 1, n)].join(' '), kind(i, j));
    for (let j = 0; j < n; j++) for (let z = 0; z < n; z++) cell([P(n, j, z), P(n, j + 1, z), P(n, j + 1, z + 1), P(n, j, z + 1)].join(' '), kind(j, z));
    for (let i = 0; i < n; i++) for (let z = 0; z < n; z++) cell([P(i, n, z), P(i + 1, n, z), P(i + 1, n, z + 1), P(i, n, z + 1)].join(' '), kind(i, z));
    let leg = '';
    [[K.gold, '3 faces (corners): 8'], [K.blue, '2 faces (edges): 24'], [K.ice, '1 face: 24'], [K.line, '0 faces (hidden): 8']].forEach(([c, t], i) => {
      leg += rc(232, 40 + i * 28, 14, 14, { rx: 3, f: c, c: 'none' }) + tx(252, 47 + i * 28, t, { fs: 12, a: 'start', fw: i === 1 ? 900 : 700 });
    });
    return svg(370, 196, cells + leg, { label: 'painted cube' });
  };

  /* 18 — anemometer */
  FIGS.q18 = () => {
    let arms = '';
    [0, 120, 240].forEach(a => {
      const t = a * Math.PI / 180, x = 90 + 48 * Math.cos(t), y = 90 + 48 * Math.sin(t);
      arms += ln(90, 90, x, y, { w: 3 }) + ci(x, y, 12, { f: K.blue, c: K.ink, w: 1.5 });
    });
    let b = ln(90, 90, 90, 196, { w: 4, c: K.mute }) + `<g>${arms}${spin(90, 90, 1.1)}</g>` + ci(90, 90, 6, { f: K.ink, c: 'none' });
    b += tx(90, 214, 'anemometer: wind SPEED', { fs: 12.5, f: K.green });
    b += ln(250, 90, 250, 196, { w: 4, c: K.mute }) + `<g>${ar(214, 90, 292, 90, { w: 4, h: 14 })}${poly('214,90 202,78 206,90 202,102', { f: K.ink, c: 'none' })}${turn('0 250 90;8 250 90;-6 250 90;0 250 90', 3, { rep: 'indefinite' })}</g>`;
    b += tx(250, 214, 'wind vane: DIRECTION', { fs: 12.5, f: K.mute });
    for (let i = 0; i < 3; i++) b += ln(10, 30 + i * 14, 330, 30 + i * 14, { c: K.sky, w: 2, cls: 'flow', op: 0.6 });
    return svg(340, 225, b, { label: 'anemometer and wind vane' });
  };

  /* 20 — Venn diagram */
  FIGS.q20 = () => {
    const id = 'vn' + Math.random().toString(36).slice(2, 7);
    let b = `<defs><clipPath id="${id}"><circle cx="128" cy="132" r="44"/></clipPath></defs>`;
    b += ci(150, 115, 98, { f: K.ice, c: K.blue, w: 2.5, cls: 'fi', dl: 0 }) + tx(150, 34, 'Conductors', { fs: 13, cls: 'fi', dl: 0 });
    b += ci(128, 132, 44, { f: K.card, c: K.navy, w: 2.5, cls: 'fi', dl: 0.6 }) + tx(112, 132, 'Metals', { fs: 13, cls: 'fi', dl: 0.6 });
    b += `<g clip-path="url(#${id})">${ci(200, 150, 58, { f: K.gold, c: 'none', op: 0.8, cls: 'fi', dl: 1.5 })}</g>`;
    b += ci(200, 150, 58, { c: K.green, w: 2.5, dash: '7 5', cls: 'fi', dl: 1.1 }) + tx(232, 156, 'Solids', { fs: 13, cls: 'fi', dl: 1.1 });
    b += ar(285, 214, 166, 150, { c: K.ink, w: 1.8, cls: 'fi', dl: 1.9 }) + tx(285, 226, 'some solids conduct', { fs: 12, cls: 'fi', dl: 1.9, a: 'end' });
    return svg(340, 236, b, { label: 'Venn diagram' });
  };

  /* 21 — height order */
  FIGS.q21 = () => bars({ data: [{ l: 'Dina', v: 4, t: '1st', c: K.sky }, { l: 'Ana', v: 3.3, t: '2nd ✓', c: K.green }, { l: 'Ben', v: 2.6, t: '3rd', c: K.sky }, { l: 'Carlo', v: 1.9, t: '4th', c: K.sky }], max: 4, min: 0, H: 200, step: 0.3 });

  /* 22 — letter jumps */
  FIGS.q22 = () => {
    const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', x = i => 12 + i * 12.6, y = 100;
    const on = { 1: 2, 4: 5, 8: 9, 13: 14, 19: 20 };
    let b = '';
    for (let i = 0; i < 26; i++) {
      const hot = on[i] != null;
      if (hot) b += rc(x(i) - 6.5, y - 10, 13, 20, { rx: 4, f: i === 19 ? K.pgreen : K.ice, c: i === 19 ? K.green : K.blue, w: 1.5 });
      b += tx(x(i), y + 1, A[i], { fs: 12, f: hot ? K.ink : K.mute, fw: hot ? 900 : 700 });
      if (hot) b += tx(x(i), y + 22, on[i], { fs: 11, f: K.mute });
    }
    [[1, 4, '+3'], [4, 8, '+4'], [8, 13, '+5'], [13, 19, '+6']].forEach(([a, c, t], k) => {
      const x1 = x(a), x2 = x(c), mid = (x1 + x2) / 2, top = y - 22 - (c - a) * 6;
      b += pa(`M${x1},${y - 12} Q${mid},${top} ${x2},${y - 12}`, { c: k === 3 ? K.green : K.blue, w: 2.5, draw: true, dl: 0.3 + k * 0.5 });
      b += tx(mid, top + 4 + (c - a) * 2.4, t, { fs: 12.5, cls: 'fi', dl: 0.6 + k * 0.5 });
    });
    return svg(345, 130, b, { label: 'alphabet positions' });
  };

  /* 33 — forgetting curve vs spaced review */
  FIGS.q33 = () => {
    const none = t => 20 + 80 * Math.exp(-t / 0.9);
    const rev = [[0, 1], [1, 2.5], [3, 5], [7, 14]];
    const spaced = t => { let s = rev[0]; rev.forEach(r => { if (t >= r[0]) s = r; }); return 25 + 75 * Math.exp(-(t - s[0]) / s[1]); };
    return plot({
      x: [0, 14], y: [0, 100], gx: 7, gy: 25, xt: [0, 1, 3, 7, 14], yt: [50, 100], xl: 'days', yl: '% remembered', W: 340, H: 240,
      fns: [{ f: none, c: K.red, w: 2.5, dash: '6 5', lbl: [10.5, 14, 'no review', 'middle'] },
        { f: spaced, c: K.green, w: 3, N: 600, dl: 0.4, lbl: [10.5, 84, 'spaced review'] }],
      pts: [1, 3, 7].map((d, i) => ({ x: d, y: 100, c: K.green, r: 4.5, dl: 0.8 + i * 0.3 }))
    });
  };
})();

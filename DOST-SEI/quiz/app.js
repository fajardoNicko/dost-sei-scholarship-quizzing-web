/* ============================================================
   SEI Drill — app logic
   Screens: home → quiz (question → feedback sheet → explanation card) → results
   ============================================================ */
(function () {
  'use strict';
  const { FIGS, MACROS } = window.FK;
  const L = 'ABCD';
  const TOPICS = {
    mech: { name: 'Mechanical Reasoning', part: 1, icon: '⚙️' },
    spatial: { name: 'Spatial Reasoning', part: 1, icon: '🧊' },
    verbal: { name: 'Verbal Reasoning', part: 1, icon: '🔤' },
    lang: { name: 'Language & Literature', part: 1, icon: '📖' },
    bio: { name: 'Biology', part: 2, icon: '🧬' },
    chem: { name: 'Chemistry', part: 2, icon: '⚗️' },
    earth: { name: 'Earth Science', part: 2, icon: '🌋' },
    phys: { name: 'Physics', part: 2, icon: '🚀' },
    space: { name: 'Space Science', part: 2, icon: '🪐' },
    alg: { name: 'Algebra', part: 3, icon: '🧮' },
    geo: { name: 'Geometry & Conics', part: 3, icon: '📐' },
    trig: { name: 'Trigonometry', part: 3, icon: '📏' },
    stat: { name: 'Statistics & Probability', part: 3, icon: '🎲' },
    calc: { name: 'Calculus', part: 3, icon: '📈' }
  };
  const PARTS = { 1: 'Part I · Reasoning & Language', 2: 'Part II · Science', 3: 'Part III · Mathematics' };

  /* ---------- parse the question bank ---------- */
  function parseBank(raw) {
    const qs = [], passages = {};
    let cur = null, pas = null;
    raw.split(/\r?\n/).forEach(line0 => {
      const line = line0.trim();
      if (!line || line.startsWith('//')) return;
      if (line.startsWith('%passage')) { pas = line.split(/\s+/)[1]; passages[pas] = []; cur = null; return; }
      if (line.startsWith('@')) {
        const [id, ans, topic] = line.slice(1).split(/\s+/);
        cur = { id: +id, answer: L.indexOf(ans), topic, q: '', choices: [], why: {}, steps: [], tip: '', fig: null, cap: '', qfig: null, passage: null, ref: '' };
        qs.push(cur); pas = null; return;
      }
      const sp = line.indexOf(' ');
      const key = sp < 0 ? line : line.slice(0, sp), val = sp < 0 ? '' : line.slice(sp + 1).trim();
      if (pas && key === 'p') { passages[pas].push(val); return; }
      if (!cur) return;
      if (key.length === 2 && key[0] === '!') { cur.why[L.indexOf(key[1])] = val; return; }
      switch (key) {
        case 'Q': cur.q = val; break;
        case 'A': case 'B': case 'C': case 'D': cur.choices[L.indexOf(key)] = val; break;
        case '=': cur.steps.push(val); break;
        case '*': cur.tip = val; break;
        case 'fig': { const s = val.indexOf(' '); cur.fig = s < 0 ? { name: val, args: '' } : { name: val.slice(0, s), args: val.slice(s + 1) }; break; }
        case 'qfig': cur.qfig = val; break;
        case 'cap': cur.cap = val; break;
        case 'P': cur.passage = val; break;
        case 'ref': cur.ref = val; break;
      }
    });
    qs.sort((a, b) => a.id - b.id);
    qs.forEach(q => {
      const bad = [];
      if (q.choices.length !== 4 || q.choices.some(c => !c)) bad.push('choices');
      if (q.answer < 0) bad.push('answer');
      [0, 1, 2, 3].forEach(k => { if (k !== q.answer && !q.why[k]) bad.push('why ' + L[k]); });
      if (!q.steps.length) bad.push('steps');
      if (!TOPICS[q.topic]) bad.push('topic');
      if (bad.length) console.warn('Item ' + q.id + ' is missing: ' + bad.join(', '));
    });
    return { qs, passages };
  }
  const { qs: QS, passages: PASSAGES } = parseBank(window.BANK || '');
  const byId = {};
  QS.forEach(q => { byId[q.id] = q; });

  /* ---------- saved progress (this browser only) ---------- */
  const KEY = 'seiDrill.v1';
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { store = {}; }
  store.stats = store.stats || {};   // id -> [tries, correct, lastWasCorrect]
  store.miss = store.miss || [];     // ids answered wrong most recently
  store.opts = store.opts || { shuffle: true };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* storage unavailable */ } };

  /* ---------- helpers ---------- */
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const macros = t => String(t || '').replace(/\[\[(\w+)\s*([^\]]*)\]\]/g, (m, n, a) => (MACROS[n] ? MACROS[n](a) : m));
  const plain = t => String(t).replace(/<[^>]+>/g, '').replace(/\$|\\[a-z]+|[{}]/gi, '');
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function math(el) {
    if (!window.renderMathInElement) return;
    try {
      window.renderMathInElement(el, {
        delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
        throwOnError: false, strict: 'ignore', ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'svg']
      });
    } catch (e) { console.warn(e); }
  }
  function figureHTML(q) {
    try {
      const f = q.fig ? FIGS[q.fig.name] : FIGS['q' + q.id];
      return f ? f(q.fig ? q.fig.args : '', q) : '';
    } catch (e) { console.error('Figure for item ' + q.id + ' failed', e); return ''; }
  }
  function figureAfter(q, root) {
    const f = q.fig ? FIGS[q.fig.name] : FIGS['q' + q.id];
    if (f && f.after) try { f.after(root); } catch (e) { console.error(e); }
  }
  function show(id) {
    ['home', 'quiz', 'result'].forEach(s => { $('#' + s).hidden = s !== id; });
    $('#sheet').hidden = true;
    closeExplain();
    window.scrollTo(0, 0);
  }

  /* ---------- home ---------- */
  function renderHome() {
    const ids = Object.keys(store.stats);
    const tries = ids.reduce((s, k) => s + store.stats[k][0], 0), right = ids.reduce((s, k) => s + store.stats[k][1], 0);
    const miss = store.miss.filter(id => byId[id]);
    let h = `<header class="hero">
      <svg class="atom" viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="#5CC5F0" stroke-width="4"><ellipse cx="50" cy="50" rx="44" ry="15"/><ellipse cx="50" cy="50" rx="44" ry="15" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="44" ry="15" transform="rotate(120 50 50)"/></g><circle cx="50" cy="50" r="7" fill="#F5BC3A"/></svg>
      <div class="kicker">DOST-SEI Scholarship Exam</div>
      <h1>SEI Drill</h1>
      <p>The 100 mock-exam items from your reviewer, one at a time. Miss one and you get a card that shows exactly why.</p>
      <div class="stats">
        <div class="stat"><b>${ids.length}<small style="font-size:.8rem;opacity:.7">/${QS.length}</small></b><span>items tried</span></div>
        <div class="stat"><b>${tries ? Math.round(right / tries * 100) + '%' : '–'}</b><span>accuracy</span></div>
        <div class="stat"><b>${miss.length}</b><span>to review</span></div>
      </div></header>`;
    h += `<div class="quick">
      <button class="btn" data-start="all">Full set<small>all ${QS.length} items</small></button>
      <button class="btn gold" data-start="quick">Quick 20<small>random mix</small></button>
      <button class="btn ${miss.length ? 'red' : 'ghost'}" data-start="miss" ${miss.length ? '' : 'disabled style="opacity:.55;cursor:default"'}>My mistakes<small>${miss.length} saved</small></button></div>
      <label class="opts"><span class="switch"><input type="checkbox" id="optShuffle" ${store.opts.shuffle ? 'checked' : ''}><span></span></span> Shuffle question order</label>`;
    [1, 2, 3].forEach(p => {
      const inPart = QS.filter(q => TOPICS[q.topic].part === p);
      h += `<div class="parthead"><h2>${PARTS[p]}</h2><small>${inPart.length} items</small><button class="link" data-start="part${p}">Start part →</button></div><div class="topics">`;
      Object.keys(TOPICS).filter(k => TOPICS[k].part === p).forEach(k => {
        const list = QS.filter(q => q.topic === k), ok = list.filter(q => store.stats[q.id] && store.stats[q.id][2]).length;
        h += `<button class="topic" data-start="t:${k}"><span class="ic">${TOPICS[k].icon}</span><b>${TOPICS[k].name}</b><small>${list.length} items · ${ok} right last time</small><span class="meter"><i style="width:${list.length ? ok / list.length * 100 : 0}%"></i></span></button>`;
      });
      h += '</div>';
    });
    h += `<p class="foot">Items, answers, and solutions come from <b>DOST-SEI_Scholarship_Reviewer</b> (mock exam, items 1–100).<br>Progress is saved in this browser only.${ids.length ? ' <button class="link" id="reset">Reset progress</button>' : ''}</p>`;
    $('#home').innerHTML = h;
    $$('#home [data-start]').forEach(b => { b.onclick = () => startDeck(b.dataset.start); });
    $('#optShuffle').onchange = e => { store.opts.shuffle = e.target.checked; save(); };
    const r = $('#reset');
    if (r) r.onclick = () => { if (confirm('Clear all saved progress and mistakes?')) { store.stats = {}; store.miss = []; save(); renderHome(); } };
  }
  function startDeck(key) {
    let list, title, forceShuffle = false;
    if (key === 'all') { list = QS.slice(); title = 'Full set'; }
    else if (key === 'quick') { list = shuffle(QS.slice()).slice(0, 20); title = 'Quick 20'; forceShuffle = true; }
    else if (key === 'miss') { list = store.miss.map(id => byId[id]).filter(Boolean); title = 'My mistakes'; }
    else if (key.startsWith('part')) { const p = +key.slice(4); list = QS.filter(q => TOPICS[q.topic].part === p); title = PARTS[p]; }
    else if (key.startsWith('t:')) { const t = key.slice(2); list = QS.filter(q => q.topic === t); title = TOPICS[t].name; }
    start(list, title, key, forceShuffle);
  }

  /* ---------- quiz ---------- */
  let S = null;
  function start(list, title, key, forceShuffle) {
    if (!list || !list.length) return;
    list = list.slice();
    if (store.opts.shuffle || forceShuffle) shuffle(list);
    // keep passage items together and in order
    list = groupPassages(list);
    S = { list, i: 0, results: [], streak: 0, best: 0, title, key, picked: null, armed: false };
    show('quiz');
    renderQ();
  }
  function groupPassages(list) {
    const out = [], done = new Set();
    list.forEach(q => {
      if (done.has(q.id)) return;
      if (q.passage) {
        list.filter(x => x.passage === q.passage).sort((a, b) => a.id - b.id).forEach(x => { out.push(x); done.add(x.id); });
      } else { out.push(q); done.add(q.id); }
    });
    return out;
  }
  function streakUI(bump) {
    const s = $('#streak');
    s.textContent = '🔥 ' + S.streak;
    s.classList.toggle('cold', S.streak === 0);
    if (bump && S.streak > 0) { s.classList.remove('bump'); void s.offsetWidth; s.classList.add('bump'); }
  }
  function renderQ() {
    const q = S.list[S.i], t = TOPICS[q.topic];
    S.picked = null; S.armed = false;
    $('#bar').style.width = (S.i / S.list.length * 100) + '%';
    streakUI(false);
    let h = `<div class="meta"><span class="pill p${t.part}">${t.icon} ${t.name}</span><span class="num">Item ${q.id} · ${S.i + 1} of ${S.list.length}</span></div><div class="qcard enter">`;
    if (q.passage && PASSAGES[q.passage]) {
      const prev = S.list[S.i - 1], open = !(prev && prev.passage === q.passage);
      h += `<details class="passage" ${open ? 'open' : ''}><summary>Passage (tap to ${open ? 'hide' : 'show'})</summary><div>${PASSAGES[q.passage].map(p => `<p>${p}</p>`).join('')}</div></details>`;
    }
    h += `<p class="stem">${macros(q.q)}</p>`;
    if (q.qfig && FIGS[q.qfig]) h += `<div class="qfig">${FIGS[q.qfig]()}</div>`;
    const svgChoice = q.choices.some(c => c.includes('[[') || c.includes('bigF'));
    const max = Math.max(...q.choices.map(c => plain(c).length));
    const cls = svgChoice || max <= 12 ? 'c4' : max <= 34 ? 'c2' : '';
    h += `<div class="choices ${cls}">` + q.choices.map((c, i) =>
      `<button class="choice" data-i="${i}"><span class="L">${L[i]}</span><span class="T">${macros(c)}</span></button>`).join('') + '</div></div>';
    h += '<p class="hint">Press <kbd>1</kbd>–<kbd>4</kbd> or <kbd>A</kbd>–<kbd>D</kbd> to answer</p>';
    $('#qwrap').innerHTML = h;
    math($('#qwrap'));
    $$('#qwrap .choice').forEach(b => { b.onclick = () => pick(+b.dataset.i); });
    window.scrollTo(0, 0);
  }
  function pick(i) {
    if (!S || S.picked != null) return;
    const q = S.list[S.i], ok = i === q.answer;
    S.picked = i;
    S.results.push({ q, pick: i, ok });
    const st = store.stats[q.id] || [0, 0, 0];
    st[0]++; if (ok) st[1]++; st[2] = ok ? 1 : 0;
    store.stats[q.id] = st;
    store.miss = store.miss.filter(x => x !== q.id);
    if (!ok) store.miss.push(q.id);
    save();
    const btns = $$('#qwrap .choice');
    btns.forEach((b, j) => {
      b.disabled = true;
      if (j === q.answer) b.classList.add('right');
      else if (j === i) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    if (ok) { S.streak++; S.best = Math.max(S.best, S.streak); btns[i].classList.add('pop'); confetti(btns[i]); }
    else S.streak = 0;
    streakUI(true);
    $('#bar').style.width = ((S.i + 1) / S.list.length * 100) + '%';
    sheet(ok, q, i);
  }
  const PRAISE = ['Nice!', 'Correct!', 'You got it!', 'Spot on!', 'Great job!', 'Laban!'];
  function sheet(ok, q, i) {
    const el = $('#sheet');
    el.className = 'sheet ' + (ok ? 'ok' : 'no');
    el.innerHTML = ok
      ? `<div class="in"><div class="big">✓</div><div class="msg"><b>${PRAISE[Math.floor(Math.random() * PRAISE.length)]}</b><span>${S.streak > 1 ? `🔥 ${S.streak} in a row.` : 'Keep the streak going.'} <kbd>Enter</kbd> to continue.</span></div>
         <div class="acts"><button class="btn ghost" data-a="why">Explain it</button><button class="btn green" data-a="next">Continue →</button></div></div>`
      : `<div class="in"><div class="big">✕</div><div class="msg"><b>Not quite: you picked ${L[i]}.</b><span>Tap anywhere or press any key to see why.</span></div>
         <div class="acts"><button class="link" data-a="skip">Skip</button><button class="btn red" data-a="why">See why →</button></div></div>`;
    el.hidden = false;
    el.querySelector('[data-a="why"]').onclick = e => { e.stopPropagation(); explain(q, i, false); };
    const nx = el.querySelector('[data-a="next"], [data-a="skip"]');
    nx.onclick = e => { e.stopPropagation(); next(); };
    if (!ok) setTimeout(() => { if (S && S.picked === i) S.armed = true; }, 0);
    el.querySelector(ok ? '[data-a="next"]' : '[data-a="why"]').focus({ preventScroll: true });
  }
  // after a wrong answer, a click anywhere opens the explanation
  document.addEventListener('click', e => {
    if (!S || !S.armed || !$('#explain').hidden || $('#quiz').hidden) return;
    if (e.target.closest('[data-a="skip"], #quit')) return;
    explain(S.list[S.i], S.picked, false);
  });
  function next() {
    if (!S) return;
    $('#sheet').hidden = true;
    S.armed = false;
    S.i++;
    if (S.i >= S.list.length) finish(); else renderQ();
  }
  function confetti(btn) {
    const r = btn.getBoundingClientRect(), box = document.createElement('div');
    box.className = 'burst';
    box.style.left = r.left + r.width / 2 + 'px'; box.style.top = r.top + r.height / 2 + 'px';
    const cols = ['#18995A', '#E9A40C', '#29ABE2', '#7A5AD6', '#EE7A1F'];
    for (let k = 0; k < 16; k++) {
      const p = document.createElement('i'), a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 70;
      p.style.cssText = `background:${cols[k % 5]};--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d - 30}px;--r:${Math.random() * 540}deg`;
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 900);
  }

  /* ---------- explanation card ---------- */
  let X = null;
  function explain(q, picked, review) {
    if (S) S.armed = false;
    const ok = picked === q.answer, t = TOPICS[q.topic];
    const fig = figureHTML(q);
    const others = [0, 1, 2, 3].filter(k => k !== q.answer && k !== picked);
    let h = `<div class="xcard" role="dialog" aria-modal="true" aria-label="Explanation for item ${q.id}">
      <div class="xhead"><div class="t">${ok ? '✓ You got it. Here\'s why.' : `✕ Why ${L[picked]} is wrong`}<small>Item ${q.id} · ${t.name}</small></div><button class="iconbtn" data-x aria-label="Close">✕</button></div>
      <div class="xbody">`;
    if (!ok) h += `<div class="box bad"><h3>You picked ${L[picked]}</h3><p class="yours">${macros(q.choices[picked])}</p><p>${q.why[picked] || ''}</p></div>`;
    h += `<div class="box good"><h3>Correct answer: ${L[q.answer]}</h3><p class="ans">${macros(q.choices[q.answer])}</p></div>`;
    if (fig) h += `<div class="figbox"><div class="figtop"><h3>See it</h3><button class="btn small ghost" data-replay>↻ Replay</button></div><div class="stage">${fig}</div>${q.cap ? `<div class="cap">${q.cap}</div>` : ''}</div>`;
    h += `<div class="box"><h3>Step by step</h3><ol class="steps">${q.steps.map((s, k) => `<li style="--i:${k}">${s}</li>`).join('')}</ol></div>`;
    if (q.tip) h += `<div class="box tip"><h3>💡 Remember</h3><p>${q.tip}</p></div>`;
    if (others.length) h += `<details class="others box" ${ok ? 'open' : ''}><summary>Why ${ok ? 'the other choices are' : `the other ${others.length > 1 ? 'choices are' : 'choice is'}`} wrong</summary><ul>${others.map(k => `<li><b>${L[k]}.</b> ${q.why[k] || ''}</li>`).join('')}</ul></details>`;
    h += `</div><div class="xfoot"><div class="ref">📘 Reread: reviewer ${q.ref || TOPICS[q.topic].name}</div><button class="btn ${review ? 'ghost' : 'green'}" data-go>${review ? 'Close' : 'Continue →'}</button></div></div>`;
    const ov = $('#explain');
    ov.innerHTML = h;
    ov.hidden = false;
    document.body.style.overflow = 'hidden';
    math(ov);
    figureAfter(q, ov);
    X = { q, review };
    ov.querySelector('[data-x]').onclick = closeExplain;
    ov.querySelector('[data-go]').onclick = () => { closeExplain(); if (!review) next(); };
    ov.onclick = e => { if (e.target === ov) closeExplain(); };
    const rp = ov.querySelector('[data-replay]');
    if (rp) rp.onclick = () => {
      const stage = ov.querySelector('.stage');
      stage.innerHTML = figureHTML(q); math(stage); figureAfter(q, stage);
      ov.querySelectorAll('.steps li').forEach(li => { li.style.animation = 'none'; void li.offsetWidth; li.style.animation = ''; });
    };
    ov.querySelector('[data-go]').focus({ preventScroll: true });
  }
  function closeExplain() {
    const ov = $('#explain');
    if (!ov || ov.hidden) return;
    ov.hidden = true; ov.innerHTML = ''; document.body.style.overflow = '';
    X = null;
  }

  /* ---------- results ---------- */
  function finish() {
    const res = S.results, n = res.length, c = res.filter(r => r.ok).length, pct = n ? Math.round(c / n * 100) : 0;
    show('result');
    const C = 2 * Math.PI * 82;
    const msg = pct >= 90 ? 'Iskolar material! 🎉' : pct >= 75 ? 'Strong work!' : pct >= 50 ? 'Getting there.' : 'Every miss is a lesson.';
    let h = `<div class="res"><svg class="ring" viewBox="0 0 200 200" aria-label="Score ${pct}%"><circle cx="100" cy="100" r="82" style="fill:none;stroke:var(--line);stroke-width:18"/>
      <circle id="ringfg" cx="100" cy="100" r="82" transform="rotate(-90 100 100)" style="fill:none;stroke:var(--green);stroke-width:18;stroke-linecap:round;stroke-dasharray:${C.toFixed(1)};stroke-dashoffset:${C.toFixed(1)};transition:stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1)"/>
      <text x="100" y="112" text-anchor="middle" font-size="44" font-weight="900" style="fill:var(--ink)">${pct}%</text></svg>
      <h2>${msg}</h2><p class="sub">${c} of ${n} correct · best streak 🔥 ${S.best} · ${S.title}</p>`;
    const byT = {};
    res.forEach(r => { const k = r.q.topic; byT[k] = byT[k] || [0, 0]; byT[k][0]++; if (r.ok) byT[k][1]++; });
    const keys = Object.keys(byT);
    if (keys.length > 1) {
      h += '<div class="sectitle">By topic</div><div class="tbars">' + keys.map(k => `<div class="tbar"><span>${TOPICS[k].icon} ${TOPICS[k].name}</span><span class="meter"><i style="width:${byT[k][1] / byT[k][0] * 100}%"></i></span><span>${byT[k][1]}/${byT[k][0]}</span></div>`).join('') + '</div>';
    }
    const missed = res.filter(r => !r.ok);
    h += '<div class="acts">' + (missed.length ? `<button class="btn red" id="retry">Retry the ${missed.length} I missed</button>` : '') + '<button class="btn ghost" id="again">Same set again</button><button class="btn" id="home2">Home</button></div>';
    if (missed.length) {
      h += '<div class="sectitle">Review your misses</div><div class="missed">' + missed.map((r, k) =>
        `<button data-m="${k}"><span class="n">${r.q.id}</span><span class="s">${plain(r.q.q)}</span></button>`).join('') + '</div>';
    }
    h += '</div>';
    $('#result').innerHTML = h;
    requestAnimationFrame(() => requestAnimationFrame(() => { const fg = $('#ringfg'); if (fg) fg.style.strokeDashoffset = (C * (1 - pct / 100)).toFixed(1); }));
    const list = S.list.slice(), title = S.title;
    if (missed.length) {
      $('#retry').onclick = () => start(missed.map(r => r.q), 'Retry misses', 'retry', false);
      $$('#result [data-m]').forEach(b => { b.onclick = () => { const r = missed[+b.dataset.m]; explain(r.q, r.pick, true); }; });
    }
    $('#again').onclick = () => start(list, title, 'again', false);
    $('#home2').onclick = goHome;
  }
  function goHome() { S = null; renderHome(); show('home'); }

  /* ---------- keyboard ---------- */
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
    if (['Tab', 'Shift', 'CapsLock'].includes(e.key)) return;
    if (!$('#explain').hidden) {
      if (e.key === 'Escape') closeExplain();
      else if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); $('#explain [data-go]').click(); }
      return;
    }
    if (!S || $('#quiz').hidden) return;
    if (S.picked == null) {
      const k = e.key.toUpperCase();
      let i = '1234'.indexOf(k);
      if (i < 0) i = L.indexOf(k);
      if (k.length === 1 && i >= 0) { e.preventDefault(); pick(i); }
      return;
    }
    if (!$('#sheet').hidden) {
      const ok = S.picked === S.list[S.i].answer;
      e.preventDefault();
      if (ok) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') next(); else if (e.key.toLowerCase() === 'e') explain(S.list[S.i], S.picked, false); }
      else if (e.key === 'Escape') next();
      else explain(S.list[S.i], S.picked, false);
    }
  });

  /* ---------- boot ---------- */
  $('#quit').onclick = () => { if (S && S.results.length) finish(); else goHome(); };
  renderHome();
  show('home');
  window.SEI = { QS, PASSAGES, TOPICS, explain, start, figureHTML };
})();

/**
 * Passify — Password Strength Checker
 * Core logic: analysis, entropy, crack time, UI updates
 */

(function () {
  /* ── DOM refs ── */
  const pwEl      = document.getElementById('pw');
  const tog       = document.getElementById('tog');
  const eyeIcon   = document.getElementById('eye-icon');
  const slabel    = document.getElementById('slabel');
  const bars      = ['b1', 'b2', 'b3', 'b4'].map(id => document.getElementById(id));
  const checks    = {
    len:   document.getElementById('c-len'),
    upper: document.getElementById('c-upper'),
    lower: document.getElementById('c-lower'),
    num:   document.getElementById('c-num'),
    sym:   document.getElementById('c-sym'),
    long:  document.getElementById('c-long'),
  };
  const crackEl   = document.getElementById('crack');
  const entropyEl = document.getElementById('entropy');

  /* ── State ── */
  let visible = false;

  /* ── Toggle visibility ── */
  tog.addEventListener('click', () => {
    visible = !visible;
    pwEl.type = visible ? 'text' : 'password';
    eyeIcon.innerHTML = visible
      ? `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
         <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
         <line x1="1" y1="1" x2="23" y2="23"/>`
      : `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
         <circle cx="12" cy="12" r="3"/>`;
  });

  /* ── Helpers ── */
  function setCheck(el, pass) {
    el.classList.toggle('pass', pass);
    const circle = el.querySelector('circle');
    const tick   = el.querySelector('path[d^="M5"]');
    if (circle) circle.setAttribute('fill', pass ? 'rgba(0,200,100,0.4)' : 'rgba(255,255,255,0.1)');
    if (tick)   tick.setAttribute('stroke', pass ? '#5de8a0' : 'rgba(255,255,255,0.3)');
  }

  function calcEntropy(p) {
    let pool = 0;
    if (/[a-z]/.test(p)) pool += 26;
    if (/[A-Z]/.test(p)) pool += 26;
    if (/[0-9]/.test(p)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(p)) pool += 32;
    return pool > 0 ? Math.round(p.length * Math.log2(pool)) : 0;
  }

  function crackTime(bits) {
    const g = Math.pow(2, bits) / 1e10; // 10 billion guesses/sec
    if (g < 1)             return 'instantly';
    if (g < 60)            return '< 1 minute';
    if (g < 3600)          return Math.round(g / 60) + ' min';
    if (g < 86400)         return Math.round(g / 3600) + ' hr';
    if (g < 2592000)       return Math.round(g / 86400) + ' days';
    if (g < 31536000)      return Math.round(g / 2592000) + ' months';
    if (g < 3153600000)    return Math.round(g / 31536000) + ' years';
    if (g < 3153600000000) return Math.round(g / 3153600000) + ' centuries';
    return 'millions of years';
  }

  function score(p) {
    let s = 0;
    if (p.length >= 8)          s++;
    if (/[A-Z]/.test(p))        s++;
    if (/[a-z]/.test(p))        s++;
    if (/[0-9]/.test(p))        s++;
    if (/[^a-zA-Z0-9]/.test(p)) s++;
    if (p.length >= 16)          s++;
    return s;
  }

  const LABELS = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const CLS    = ['', 'weak', 'fair', 'good', 'strong'];

  function getLevel(p) {
    const s = score(p);
    return s <= 2 ? 1 : s <= 3 ? 2 : s <= 4 ? 3 : 4;
  }

  function reset() {
    bars.forEach(b => { b.className = 'bar'; });
    slabel.textContent = '\u00a0';
    slabel.className = 'strength-label';
    crackEl.textContent = '—';
    entropyEl.textContent = '';
    Object.values(checks).forEach(el => setCheck(el, false));
  }

  /* ── Live analysis ── */
  pwEl.addEventListener('input', () => {
    const v = pwEl.value;

    setCheck(checks.len,   v.length >= 8);
    setCheck(checks.upper, /[A-Z]/.test(v));
    setCheck(checks.lower, /[a-z]/.test(v));
    setCheck(checks.num,   /[0-9]/.test(v));
    setCheck(checks.sym,   /[^a-zA-Z0-9]/.test(v));
    setCheck(checks.long,  v.length >= 16);

    if (!v) { reset(); return; }

    const level = getLevel(v);
    bars.forEach((b, i) => {
      b.className = 'bar' + (i < level ? ' ' + CLS[level] : '');
    });
    slabel.textContent = LABELS[level];
    slabel.className = 'strength-label ' + CLS[level];

    const bits = calcEntropy(v);
    crackEl.textContent = crackTime(bits);
    entropyEl.textContent = bits + ' bits';
  });

  reset();
})();

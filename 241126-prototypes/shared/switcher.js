/* Floating "prototype" pill: jump to the same screen in another direction, or back to the hub.
   Intentionally neutral-looking so it doesn't read as part of any design. */
(function () {
  const dirs = [
    { id: 'a-control-room', label: 'A · Control Room' },
    { id: 'b-nordic-calm', label: 'B · Nordic Calm' },
    { id: 'c-spatial', label: 'C · Spatial' },
    { id: 'd-refined', label: 'D · Refined' },
  ];
  const screens = ['login', 'dashboard', 'energy', 'alerts'];
  // Inside the presentation's embedded frames, the deck has its own controls.
  if (window.self !== window.top) return;
  const cur = document.body.dataset.direction;
  const screen = document.body.dataset.screen || 'login';
  const states = ['normal', 'loading', 'empty', 'error', 'offline'];
  const state = states.includes(new URLSearchParams(location.search).get('state')) ? new URLSearchParams(location.search).get('state') : 'normal';
  const q = state !== 'normal' && screen === 'dashboard' ? `?state=${state}` : '';

  const css = `
  .proto-pill{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:9999;display:flex;gap:4px;align-items:center;
    padding:5px;border-radius:999px;background:rgba(20,20,22,.88);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
    font:500 12px/1 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;color:#eee;box-shadow:0 6px 24px rgba(0,0,0,.25);
    max-width:calc(100vw - 24px);overflow-x:auto;scrollbar-width:none}
  .proto-pill::-webkit-scrollbar{display:none}
  .proto-pill a{color:inherit;text-decoration:none;padding:7px 10px;border-radius:999px;white-space:nowrap}
  .proto-pill a:hover{background:rgba(255,255,255,.12)}
  .proto-pill a[aria-current]{background:#fff;color:#111}
  .proto-pill .sep{width:1px;height:16px;background:rgba(255,255,255,.2);margin:0 2px;flex:none}
  .proto-pill .hide{opacity:.6}
  .proto-pill select{appearance:none;-webkit-appearance:none;border:0;border-radius:999px;background:rgba(255,255,255,.12);color:inherit;font:inherit;padding:7px 24px 7px 10px;cursor:pointer;
    background-image:linear-gradient(45deg,transparent 50%,#bbb 50%),linear-gradient(135deg,#bbb 50%,transparent 50%);background-position:calc(100% - 13px) 50%,calc(100% - 9px) 50%;background-size:4px 4px;background-repeat:no-repeat}
  .proto-pill select.on{background-color:#f2b33d;color:#111}
  .proto-pill option{color:#111}
  @media (max-width:560px){.proto-pill .lbl{display:none}}
  body.proto-hidden .proto-pill{opacity:0;pointer-events:none}`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const el = document.createElement('nav');
  el.className = 'proto-pill';
  el.setAttribute('aria-label', 'Prototype navigation');
  el.innerHTML =
    `<a href="../index.html" title="All directions">◎<span class="lbl"> Hub</span></a><span class="sep"></span>` +
    dirs.map((d) => `<a href="../${d.id}/${screen}.html${q}" ${d.id === cur ? 'aria-current="page"' : ''}>${d.label.split(' · ')[0]}<span class="lbl"> · ${d.label.split(' · ')[1]}</span></a>`).join('') +
    `<span class="sep"></span>` +
    screens.map((s) => `<a href="${s}.html" ${s === screen ? 'aria-current="page"' : ''}>${s[0].toUpperCase() + s.slice(1)}</a>`).join('') +
    (screen === 'dashboard' ? `<span class="sep"></span><label><span class="lbl" style="opacity:.6;padding:0 4px 0 6px">State</span><select id="proto-state" aria-label="Data state" class="${state !== 'normal' ? 'on' : ''}">${states.map((s) => `<option value="${s}" ${s === state ? 'selected' : ''}>${s[0].toUpperCase() + s.slice(1)}</option>`).join('')}</select></label>` : '') +
    `<span class="sep"></span><a href="#" class="hide" title="Hide (press H to toggle)">✕</a>`;
  document.body.appendChild(el);
  const sel = el.querySelector('#proto-state');
  if (sel) sel.addEventListener('change', () => { location.href = location.pathname + (sel.value === 'normal' ? '' : `?state=${sel.value}`); });
  el.querySelector('.hide').addEventListener('click', (e) => { e.preventDefault(); document.body.classList.add('proto-hidden'); });
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'h' || e.key === 'H') && !/input|textarea/i.test(e.target.tagName)) document.body.classList.toggle('proto-hidden');
  });
})();

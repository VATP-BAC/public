/* Palette + font presets for direction D. Remembers the choice per browser. */
(function () {
  const PRESETS = [
    { id: 'classic', name: 'Classic', fonts: 'DM Serif Display · Space Grotesk', sw: ['#f6efe2', '#173d30', '#2f5c4f', '#c65b2b', '#f0b155'] },
    { id: 'baltic', name: 'Baltic Coast', fonts: 'Instrument Serif · Inter', sw: ['#f1f4f4', '#12324a', '#1f6f8b', '#e0703a', '#f2c14e'] },
    { id: 'pine', name: 'Pine & Copper', fonts: 'Source Serif 4 · Plus Jakarta Sans', sw: ['#f3f1ec', '#1e2b26', '#2e6a57', '#b8693d', '#e9b872'] },
    { id: 'graphite', name: 'Graphite', fonts: 'Geist · Geist', sw: ['#f5f5f3', '#1c1f24', '#2f6f5e', '#d9622b', '#f0b155'] },
  ];
  const get = () => { try { return localStorage.getItem('vatp-d-palette') || 'classic'; } catch (_) { return 'classic'; } };
  const apply = (id = get()) => {
    if (id === 'classic') delete document.documentElement.dataset.palette;
    else document.documentElement.dataset.palette = id;
  };
  apply();

  // One set of document listeners for whichever picker is on the page (pages re-mount often).
  let active = null;
  const items = () => [...active.querySelectorAll('[data-id]')];
  const close = (refocus) => {
    if (!active || !active.classList.contains('open')) return;
    active.classList.remove('open');
    active.firstElementChild.setAttribute('aria-expanded', 'false');
    if (refocus) active.firstElementChild.focus();
  };
  document.addEventListener('click', (e) => { if (active && !active.contains(e.target)) close(false); });
  document.addEventListener('keydown', (e) => {
    if (!active || !active.classList.contains('open')) return;
    const list = items(), i = list.indexOf(document.activeElement);
    if (e.key === 'Escape') { e.preventDefault(); close(true); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); list[(i + 1) % list.length].focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
    else if (e.key === 'Home') { e.preventDefault(); list[0].focus(); }
    else if (e.key === 'End') { e.preventDefault(); list.at(-1).focus(); }
    else if (e.key === 'Tab') close(false);
  });

  function mount(host, onChange) {
    active = host;
    const cur = get(), p = PRESETS.find((x) => x.id === cur) || PRESETS[0];
    host.classList.add('pal');
    host.innerHTML = `<button class="ibtn" aria-haspopup="menu" aria-expanded="false" aria-label="Colours and fonts" title="Colours and fonts"><span class="sw3">${p.sw.slice(1, 4).map((c) => `<i style="background:${c}"></i>`).join('')}</span></button>
      <div class="pal-pop" role="menu" aria-label="Colours and fonts"><div class="h">Colours & fonts</div>${PRESETS.map((x) => `<button role="menuitemradio" tabindex="-1" aria-checked="${x.id === cur}" data-id="${x.id}"><span class="chips">${x.sw.map((c) => `<i style="background:${c}"></i>`).join('')}</span><span><b>${x.name}</b><small>${x.fonts}</small></span></button>`).join('')}</div>`;
    const btn = host.firstElementChild;
    const open = () => {
      host.classList.add('open'); btn.setAttribute('aria-expanded', 'true');
      (host.querySelector('[aria-checked="true"]') || items()[0]).focus();
    };
    btn.onclick = (e) => { e.stopPropagation(); host.classList.contains('open') ? close(false) : open(); };
    btn.onkeydown = (e) => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(); } };
    host.querySelectorAll('[data-id]').forEach((b) => b.onclick = () => {
      try { localStorage.setItem('vatp-d-palette', b.dataset.id); } catch (_) {}
      apply(b.dataset.id);
      onChange ? onChange() : mount(host);
      active.firstElementChild.focus(); // keep focus on the (re-rendered) swatch button
    });
  }

  window.Palette = { mount, apply, PRESETS };
})();

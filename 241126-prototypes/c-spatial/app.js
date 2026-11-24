/* Direction C — Spatial. Isometric campus map is the main navigation. */
(function () {
  const D = window.VATP, C = window.Charts, f = window.fmt;
  const ST = (window.ProtoState && ProtoState.current) || 'normal', AT = '10:42';
  const GHOST = ST === 'loading' || ST === 'empty';
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const S = 46;
  const iso = (x, y, z = 0) => [(x - y) * S * 0.866, (x + y) * S * 0.5 - z * S];
  const pts = (arr) => arr.map((p) => iso(...p).map((n) => n.toFixed(1)).join(',')).join(' ');

  // world footprints for each building
  const FP = {
    b1: { x: 2.2, y: 1.6, w: 1.6, d: 1.5, fh: 0.42 },
    b2: { x: 5.2, y: 0.4, w: 1.5, d: 1.2, fh: 0.42 },
    b3: { x: 5.0, y: 3.4, w: 2.4, d: 1.6, fh: 0.75, pv: true },
    b4: { x: 1.4, y: 4.6, w: 1.4, d: 1.2, fh: 0.42 },
  };
  const PLANT = { x: 3.5, y: 3.9, w: 0.9, d: 0.7, z: 0.35 };
  const HOME = [-360, -150, 760, 560];

  const state = { mode: 'energy', hour: 14, sel: null, compare: null, comparing: false, page: 'dashboard', theme: 'dark', alertSel: null };

  // ---------- colours ----------
  // 0 = good/low (teal), 1 = bad/high (amber). Normalised across buildings so differences are visible.
  const raw = (b) => (state.mode === 'energy' ? b.kwh / b.area : state.mode === 'comfort' ? 100 - b.comfort : b.co2);
  function metricT(b) {
    const vals = D.buildings.map(raw), lo = Math.min(...vals), hi = Math.max(...vals);
    const rel = 0.08 + ((raw(b) - lo) / (hi - lo)) * 0.9;
    if (state.mode === 'comfort') return rel;
    const load = D.series.forecast[state.hour] / Math.max(...D.series.forecast);
    return rel * (0.35 + load * 0.65);
  }
  function shade(t, face) {
    const hue = 174 - t * 152, light = state.theme === 'light';
    const L = light ? { top: 62, r: 50, l: 42 }[face] : { top: 56, r: 40, l: 30 }[face];
    return `hsl(${hue.toFixed(0)} ${light ? 62 : 78}% ${L}%)`;
  }
  const metricLabel = (b) => (ST === 'loading' && state.page === 'dashboard' ? 'loading…' : ST === 'empty' && state.page === 'dashboard' ? 'no sensors yet' : ST === 'error' && state.page === 'dashboard' ? '— unavailable' : (ST === 'offline' && state.page === 'dashboard' ? `@${AT} · ` : '') + metricLabel0(b));
  const metricLabel0 = (b) => (state.mode === 'energy' ? `${Math.round(b.kwh * (0.5 + D.series.forecast[state.hour] / 282))} kWh` : state.mode === 'comfort' ? `${b.comfort} / 100` : `${b.co2} ppm`);

  // ---------- map ----------
  function box(x, y, w, d, z, fill, extra = '') {
    const top = [[x, y, z], [x + w, y, z], [x + w, y + d, z], [x, y + d, z]];
    const right = [[x + w, y, 0], [x + w, y + d, 0], [x + w, y + d, z], [x + w, y, z]];
    const left = [[x, y + d, 0], [x + w, y + d, 0], [x + w, y + d, z], [x, y + d, z]];
    return `<polygon points="${pts(left)}" fill="${fill.l}"/><polygon points="${pts(right)}" fill="${fill.r}"/><polygon class="top" points="${pts(top)}" fill="${fill.top}"/>${extra}`;
  }

  function trees() {
    const spots = [[0.3, 2.6], [0.8, 3.4], [0.4, 6.4], [3.0, 6.6], [4.0, 6.2], [8.4, 1.2], [8.2, 2.4], [8.6, 6.0], [7.6, 6.8], [4.2, 0.2], [0.6, 0.4], [2.6, 0.3]];
    return spots.map(([x, y]) => { const [a, b] = iso(x, y); return `<g><ellipse cx="${a}" cy="${b}" rx="9" ry="4.5" fill="rgba(0,0,0,.18)"/><path d="M${a - 8},${b} L${a},${b - 26} L${a + 8},${b}Z" fill="var(--tree)"/></g>`; }).join('');
  }

  function map(opts = {}) {
    const ground = [[0, 0], [9, 0], [9, 7.5], [0, 7.5]];
    let s = `<polygon points="${pts(ground.map((p) => [...p, 0]))}" fill="var(--ground)"/>`;
    for (let i = 0; i <= 9; i++) s += `<polyline points="${pts([[i, 0, 0], [i, 7.5, 0]])}" stroke="var(--ground-line)" fill="none"/>`;
    for (let j = 0; j <= 7.5; j += 1) s += `<polyline points="${pts([[0, j, 0], [9, j, 0]])}" stroke="var(--ground-line)" fill="none"/>`;
    // roads
    s += `<polygon points="${pts([[4.55, 0, 0], [4.95, 0, 0], [4.95, 7.5, 0], [4.55, 7.5, 0]])}" fill="var(--road)"/>`;
    s += `<polygon points="${pts([[0, 3.0, 0], [9, 3.0, 0], [9, 3.35, 0], [0, 3.35, 0]])}" fill="var(--road)"/>`;
    // geothermal drill field
    for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) { const [a, b] = iso(0.5 + i * 0.3, 0.9 + j * 0.3); s += `<circle cx="${a}" cy="${b}" r="2.4" fill="var(--teal)" opacity=".55"/>`; }
    { const [a, b] = iso(0.5, 1.5); s += `<text x="${a - 12}" y="${b + 4}" fill="var(--faint)" font-size="10" font-family="var(--mono)" text-anchor="end">GEO FIELD · 15 drills</text>`; }
    s += trees();

    // energy flows from plant
    const pc = iso(PLANT.x + PLANT.w / 2, PLANT.y + PLANT.d / 2, PLANT.z);
    Object.entries(FP).forEach(([id, p]) => {
      const bc = iso(p.x + p.w / 2, p.y + p.d / 2, 0);
      s += `<path class="flow" d="M${pc[0]},${pc[1]} Q${(pc[0] + bc[0]) / 2},${Math.max(pc[1], bc[1]) + 30} ${bc[0]},${bc[1]}" stroke="var(--teal)" stroke-width="2" fill="none" opacity="${state.sel && state.sel !== id ? 0.15 : 0.55}"/>`;
    });

    // draw back-to-front
    const items = [...D.buildings.map((b) => ({ b, p: FP[b.id] })), { plant: true, p: PLANT }].sort((a, c) => a.p.x + a.p.y - (c.p.x + c.p.y));
    items.forEach(({ b, p, plant }) => {
      if (plant) {
        s += `<g>${box(p.x, p.y, p.w, p.d, p.z, { top: 'var(--road)', r: 'var(--ground)', l: 'var(--bg)' })}</g>`;
        const [a, c] = iso(p.x + p.w / 2, p.y + p.d / 2, p.z);
        const [ga, gc] = iso(p.x, p.y + p.d, 0);
        s += `<text x="${ga - 6}" y="${gc + 14}" text-anchor="end" font-size="10" fill="var(--muted)" font-family="var(--mono)">PLANT · HP COP 4.1</text>`;
        return;
      }
      const t = metricT(b), z = b.id === 'b3' ? p.fh : b.floors * p.fh;
      const fill = { top: shade(t, 'top'), r: shade(t, 'r'), l: shade(t, 'l') };
      let extra = '';
      const floors = b.id === 'b3' ? 1 : b.floors;
      for (let k = 0; k < floors; k++) {
        const zz = (k + 0.55) * (z / floors);
        extra += `<polyline points="${pts([[p.x + 0.08, p.y + p.d, zz], [p.x + p.w - 0.08, p.y + p.d, zz]])}" stroke="rgba(255,255,255,.55)" stroke-width="3" stroke-dasharray="5 4" fill="none"/>`;
        extra += `<polyline points="${pts([[p.x + p.w, p.y + 0.08, zz], [p.x + p.w, p.y + p.d - 0.08, zz]])}" stroke="rgba(255,255,255,.4)" stroke-width="3" stroke-dasharray="5 4" fill="none"/>`;
      }
      if (p.pv) for (let k = 0; k < 5; k++) extra += `<polyline points="${pts([[p.x + 0.2, p.y + 0.2 + k * 0.28, z], [p.x + p.w - 0.2, p.y + 0.2 + k * 0.28, z]])}" stroke="rgba(10,20,50,.45)" stroke-width="5" fill="none"/>`;
      s += `<g class="bldg ${GHOST && state.page === 'dashboard' ? 'ghost' : ''} ${state.sel === b.id || state.compare === b.id ? 'sel' : ''}" data-b="${b.id}">${box(p.x, p.y, p.w, p.d, z, fill, extra)}</g>`;
    });

    // label chips + alert pins (on top)
    if (opts.labels !== false) D.buildings.forEach((b) => {
      const p = FP[b.id], z = b.id === 'b3' ? p.fh : b.floors * p.fh;
      const [a, c] = iso(p.x + p.w / 2, p.y + p.d / 2, z);
      s += `<g class="label-chip bldg ${state.sel === b.id || state.compare === b.id ? 'sel' : ''}" data-b="${b.id}" transform="translate(${a - 62} ${c - 62})"><rect width="124" height="38" rx="11"/><text x="12" y="16">${b.name}</text><text class="v" x="12" y="30">${metricLabel(b)}</text></g>`;
      const active = D.alerts.filter((x) => x.bx === b.id && x.status !== 'resolved');
      if (opts.pins && active.length && !(GHOST && state.page === 'dashboard')) {
        const crit = active.some((x) => x.sev === 'critical');
        const colr = crit ? 'var(--red)' : 'var(--amber)';
        s += `<g class="pin" data-alert="${active[0].id}" transform="translate(${a + 70} ${c - 52})"><circle class="halo" r="10" fill="${colr}"/><circle r="10" fill="${colr}"/><text y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">${active.length}</text></g>`;
      }
    });
    if (ST === 'offline' && state.page === 'dashboard' && opts.labels !== false) {
      const [a, c] = iso(PLANT.x + PLANT.w / 2, PLANT.y + PLANT.d / 2, PLANT.z);
      s += `<g class="gwpin" transform="translate(${a - 30} ${c + 58})"><circle class="halo" r="12" fill="var(--red)"/><circle r="12" fill="var(--red)"/><text y="5" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">!</text><g transform="translate(-196 -15)"><rect width="176" height="30" rx="9" fill="var(--glass)" stroke="var(--red)"/><text x="10" y="19" font-size="11" font-family="var(--mono)" fill="var(--text)">gateway offline · ${AT}</text></g></g>`;
    }
    return s;
  }

  let vb = [...HOME];
  function setVB(v) { vb = v; const m = document.getElementById('map'); if (m) m.setAttribute('viewBox', v.map((n) => n.toFixed(1)).join(' ')); }
  function flyTo(target, ms = 700) {
    const from = [...vb], t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const t = Math.min(1, (now - t0) / ms);
      setVB(from.map((v, i) => v + (target[i] - v) * ease(t)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function focusBuilding(id) {
    const p = FP[id], b = D.buildings.find((x) => x.id === id);
    const [a, c] = iso(p.x + p.w / 2, p.y + p.d / 2, b.floors * p.fh * 0.5);
    const w = 640, h = 480, wide = innerWidth > 900;
    flyTo([a - w / 2 + (wide ? 130 : 0), c - h / 2 + (wide ? 0 : 230), w, h]);
  }
  function redrawMap(opts) {
    const m = document.getElementById('map');
    m.innerHTML = map(opts);
    m.classList.toggle('has-sel', !!state.sel);
  }

  // pan + zoom
  function wirePanZoom(m) {
    let drag = null;
    m.addEventListener('pointerdown', (e) => { if (e.target.closest('.bldg,.pin')) return; drag = { x: e.clientX, y: e.clientY, vb: [...vb] }; m.setPointerCapture(e.pointerId); m.style.cursor = 'grabbing'; });
    m.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const k = vb[2] / m.clientWidth;
      setVB([drag.vb[0] - (e.clientX - drag.x) * k, drag.vb[1] - (e.clientY - drag.y) * k, vb[2], vb[3]]);
    });
    m.addEventListener('pointerup', () => { drag = null; m.style.cursor = ''; });
    m.addEventListener('wheel', (e) => {
      e.preventDefault();
      const z = Math.exp(e.deltaY * 0.0015), r = m.getBoundingClientRect();
      const px = vb[0] + ((e.clientX - r.left) / r.width) * vb[2], py = vb[1] + ((e.clientY - r.top) / r.height) * vb[3];
      const w = Math.min(1400, Math.max(260, vb[2] * z)), h = (w * vb[3]) / vb[2];
      setVB([px - ((px - vb[0]) * w) / vb[2], py - ((py - vb[1]) * h) / vb[3], w, h]);
    }, { passive: false });
  }

  // ---------- shell ----------
  const ico = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const I = {
    map: ico('<path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/>'),
    bolt: ico('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>'),
    bell: ico('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>'),
    cpu: ico('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>'),
    flow: ico('<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a2 2 0 0 1 2 2v7"/>'),
    cog: ico('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'),
    sun: ico('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>'),
    search: ico('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
  };
  const activeAlerts = D.alerts.filter((a) => a.status !== 'resolved');

  function chips() {
    const k = D.kpis;
    if (ST === 'loading' || ST === 'empty') return ['Energy today', 'Load now', 'Comfort', 'Spot price'].map((l) => `<div class="glass chip"><div class="l">${l}</div><div class="v">${ST === 'loading' ? '<span class="skel"></span>' : '<span class="faint">—</span>'}</div><div class="d faint">${ST === 'loading' ? '&nbsp;' : 'no data'}</div></div>`).join('');
    const c = (l, v, u, d, good) => `<div class="glass chip"><div class="l">${l}</div><div class="v">${v}<small>${u}</small></div><div class="d ${good ? 'good' : 'bad'}">${d}</div></div>`;
    if (ST === 'error') return c('Energy today', '—', '', 'unavailable', false).replace('chip', 'chip err') + c('Load now', 129, 'kW', 'live', true) + c('Comfort', k.comfort.value, '/100', '+2 pts', true) + c('Spot price', k.price.value, '€/MWh', f.delta(k.price.delta), false);
    if (ST === 'offline') return [c('Energy today', f.n(k.energyToday.value), 'kWh', '@' + AT, true), c('Load', 118, 'kW', '@' + AT, true), c('Comfort', k.comfort.value, '/100', '@' + AT, true), c('Spot price', k.price.value, '€/MWh', 'live', false)].map((x, i) => (i < 3 ? x.replace('glass chip', 'glass chip stale') : x)).join('');
    return c('Energy today', f.n(k.energyToday.value), 'kWh', f.delta(k.energyToday.delta), true) + c('Load now', 129, 'kW', 'peak 142', true) + c('Comfort', k.comfort.value, '/100', '+2 pts', true) + c('Spot price', k.price.value, '€/MWh', f.delta(k.price.delta), false);
  }

  function shell(active, overlays) {
    const nav = [['dashboard', 'Campus', I.map], ['energy', 'Energy', I.bolt], ['alerts', 'Alerts', I.bell], ['#', 'Schematic', I.flow], ['#', 'Devices', I.cpu], ['#', 'Settings', I.cog]];
    return `
      <div class="stage"> <svg class="map ${state.page === 'dashboard' ? 'st-' + ST : ''}" id="map" viewBox="${HOME.join(' ')}" preserveAspectRatio="xMidYMid meet" aria-label="Campus map"></svg></div>
      <div class="hud-tl"><div class="glass brand"><span class="logo"></span>VATP</div><div class="glass crumb" id="crumb"></div><div class="glass search">${I.search.replace('<svg', '<svg width="16" height="16"')}Find a room or device<kbd>/</kbd></div></div>
      <div class="hud-tr">${chips()}<button class="glass iconbtn" id="theme" aria-label="Toggle light/dark">${I.sun.replace('<svg', '<svg width="18" height="18"')}</button></div>
      ${overlays}
      <div class="glass dock">
        <nav aria-label="Main">${nav.map(([id, l, i]) => `<a href="${id === '#' ? '#' : id + '.html'}" title="${l}" aria-label="${l}" ${id === active ? 'aria-current="page"' : ''}>${i}${id === 'alerts' ? `<span class="b">${activeAlerts.length}</span>` : ''}</a>`).join('')}</nav>
        <span class="sep"></span>
        <div class="scrub"><button class="play" id="play" aria-label="Play the day">▶</button><input type="range" id="hour" min="0" max="23" value="${state.hour}" aria-label="Time of day"/><span class="t" id="hour-v">${f.h(state.hour)}</span></div>
      </div>`;
  }

  function crumb() {
    const b = state.sel && D.buildings.find((x) => x.id === state.sel);
    document.getElementById('crumb').innerHTML = `<button id="home">${D.site.name}</button>${b ? ` <span class="faint">›</span> <b>${b.name}</b>` : ''}${state.floor != null && b ? ` <span class="faint">›</span> <b>Floor ${state.floor}</b>` : ''}`;
    document.getElementById('home').onclick = () => { state.sel = null; state.floor = null; state.compare = null; closePanel(); refresh(); flyTo(HOME); };
  }

  // ---------- panels ----------
  function roomColors(b, floor) {
    return Array.from({ length: 6 }, (_, i) => {
      const t = Math.min(1, Math.max(0, metricT(b) + (((floor * 7 + i * 5) % 9) - 4) / 14));
      return `<i style="background:${shade(t, 'top')}"></i>`;
    }).join('');
  }

  function buildingPanel(b) {
    const floors = Array.from({ length: b.floors }, (_, i) => i);
    return `<button class="x" id="px">✕</button>
      <div class="faint mono" style="font-size:11px">BUILDING · ${b.short}</div><h2>${b.name}</h2><div class="muted">${f.n(b.area)} m² · ${b.floors} floor${b.floors > 1 ? 's' : ''}</div>
      <div class="stats"><div><b>${b.kwh}</b><span>kWh today</span></div><div><b>${b.temp}°</b><span>indoor</span></div><div><b>${b.co2}</b><span>ppm CO₂</span></div></div>
      <h3>Floors · tap to drill in</h3>
      <div class="floors">${floors.map((k) => `<button class="floor" data-floor="${k}" ${state.floor === k ? 'style="border-color:var(--teal)"' : ''}><span class="lv">F${k}</span><span class="rooms">${roomColors(b, k)}</span></button>`).join('')}</div>
      <h3>Today · kW</h3><div style="height:70px">${C.line({ w: 340, h: 70, series: [{ values: D.series.forecast.map((v) => v * (b.kwh / 1284)), color: css('--teal'), width: 2, fill: 'rgba(46,230,200,.12)' }] })}</div>
      <div style="display:flex;gap:8px;margin-top:18px;flex-wrap:wrap"><a class="btn primary" href="energy.html?b=${b.id}">Energy for ${b.short}</a><a class="btn" href="#">Open in 3D</a><a class="btn" href="alerts.html">Alerts (${b.alerts})</a></div>`;
  }

  function energyPanel(b) {
    const share = b.kwh / D.kpis.energyToday.value;
    const short = { grid: 'Grid', pv: 'Solar', geo: 'Geothermal', heating: 'Heating', dhw: 'Hot water', vent: 'Ventilation', light: 'Lighting', cool: 'Cooling' };
    const scaled = { sources: D.distribution.sources.map((s) => ({ ...s, label: short[s.id], value: Math.round(s.value * share) })), uses: D.distribution.uses.map((u) => ({ ...u, label: short[u.id], value: Math.round(u.value * share) })), flows: D.distribution.flows.map(([a, c, v]) => [a, c, Math.round(v * share)]) };
    return `<button class="x" id="px">✕</button>
      <div class="faint mono" style="font-size:11px">ENERGY · ${b.short}</div><h2>${b.name}</h2>
      <div class="stats"><div><b>${b.kwh}</b><span>kWh today</span></div><div><b>€${Math.round(b.kwh * 0.145)}</b><span>cost</span></div><div><b>${((b.kwh / b.area) * 1000).toFixed(0)}</b><span>Wh/m²</span></div></div>
      <h3>Energy distribution</h3>
      <div style="height:200px">${C.sankey({ w: 340, h: 200, data: scaled, text: css('--text'), muted: css('--muted'), useColor: css('--blue'), colors: { grid: css('--blue'), pv: css('--amber'), geo: css('--teal') }, labelW: 84, nodeW: 6, fontSize: 11, gap: 8, flowOpacity: 0.3 })}</div>
      <h3>Load vs price · today</h3><div style="height:80px">${C.line({ w: 340, h: 80, nowIndex: state.hour, nowColor: css('--muted'), series: [{ values: D.series.forecast.map((v) => v * share), color: css('--teal'), width: 2 }, { values: D.series.price.map((v) => v * share), color: css('--amber'), width: 1.5, dash: '3 3' }] })}</div>
      <h3>Biggest consumers</h3>${D.topConsumers.slice(0, 3).map((t) => `<div class="row" style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--glass-line);font-size:13px"><span>${t.name}</span><span class="mono muted">${Math.round(t.kwh * share * 2)} kWh</span></div>`).join('')}
      <div style="display:flex;gap:8px;margin-top:18px;flex-wrap:wrap"><button class="btn primary" id="cmp">${state.comparing ? 'Pick a building on the map…' : state.compare ? 'Change comparison' : '+ Compare with…'}</button><button class="btn">Export</button></div>`;
  }

  function alertPanel(a) {
    return `<button class="x" id="px">✕</button>
      <div class="faint mono" style="font-size:11px">${a.id} · ${a.sev.toUpperCase()}</div><h2>${a.title}</h2><div class="muted">${a.where}</div>
      <div class="stats"><div><b style="color:var(--${a.sev === 'critical' ? 'red' : 'amber'})">${a.value}</b><span>now</span></div><div><b style="font-size:13px">${a.expected}</b><span>expected</span></div><div><b>${a.age}</b><span>open</span></div></div>
      <h3>Last hour</h3><div style="height:70px">${C.line({ w: 340, h: 70, series: [{ values: [18, 18.2, 17.9, 17.4, 16.8, 16.1, 15.4, 14.9, 14.4, 14.1], color: css('--red'), width: 2, fill: 'rgba(255,92,122,.12)' }] })}</div>
      <h3>Suggested</h3><p style="margin:0">${a.suggestion}</p>
      <div style="display:flex;gap:8px;margin-top:18px;flex-wrap:wrap"><button class="btn primary" data-act="ack">Acknowledge</button><button class="btn" data-act="me">Assign to me</button><button class="btn" data-act="resolved">Resolve</button></div>
      <p class="faint" style="font-size:12px;margin-top:14px">Device: ${a.device}${a.owner ? ` · Owner: ${a.owner}` : ''}</p>`;
  }

  function openPanel(html) { const p = document.getElementById('panel'); p.innerHTML = html; p.classList.add('open'); const x = document.getElementById('px'); if (x) x.onclick = () => { state.sel = null; state.floor = null; state.alertSel = null; closePanel(); refresh(); flyTo(HOME); }; }
  function closePanel() { const p = document.getElementById('panel'); if (p) p.classList.remove('open'); const t = document.getElementById('tray'); if (t) t.classList.remove('open'); }

  function compareTray() {
    const t = document.getElementById('tray');
    if (!t) return;
    if (!state.compare || !state.sel) { t.classList.remove('open'); return; }
    const col = (b) => `<div class="col"><h4>${b.name}</h4>${[['kWh today', b.kwh], ['Wh/m²', ((b.kwh / b.area) * 1000).toFixed(0)], ['Cost', '€' + Math.round(b.kwh * 0.145)], ['Comfort', b.comfort + '/100'], ['CO₂', b.co2 + ' ppm']].map(([l, v]) => `<div class="row"><span class="muted">${l}</span><span class="mono">${v}</span></div>`).join('')}</div>`;
    t.innerHTML = col(D.buildings.find((x) => x.id === state.sel)) + col(D.buildings.find((x) => x.id === state.compare));
    t.classList.add('open');
  }

  // ---------- refresh / wiring ----------
  function refresh() {
    redrawMap({ pins: state.page === 'alerts' || state.page === 'dashboard' });
    if (document.getElementById('crumb')) crumb();
    const lg = document.getElementById('legend');
    if (lg) lg.innerHTML = `<div>${{ energy: 'Energy intensity (time-aware)', comfort: 'Comfort: lime is good', co2: 'CO₂ level' }[state.mode]}</div><div class="g" style="background:linear-gradient(90deg,${shade(0, 'top')},${shade(0.5, 'top')},${shade(1, 'top')})"></div><div class="ends"><span>low</span><span>high</span></div>`;
  }

  function onBuilding(id) {
    if (state.page === 'energy' && state.comparing) { if (id !== state.sel) state.compare = id; state.comparing = false; refresh(); openPanel(energyPanel(D.buildings.find((x) => x.id === state.sel))); wireEnergyPanel(); compareTray(); return; }
    state.sel = id; state.floor = null;
    const b = D.buildings.find((x) => x.id === id);
    refresh(); focusBuilding(id);
    if (state.page === 'energy') { openPanel(energyPanel(b)); wireEnergyPanel(); compareTray(); }
    else if (state.page === 'alerts') { const a = D.alerts.find((x) => x.bx === id && x.status !== 'resolved'); if (a) selectAlert(a.id, false); }
    else { openPanel(buildingPanel(b)); wireBuildingPanel(); }
  }
  function wireBuildingPanel() {
    document.querySelectorAll('.floor').forEach((el) => el.onclick = () => { state.floor = +el.dataset.floor; crumb(); openPanel(buildingPanel(D.buildings.find((x) => x.id === state.sel))); wireBuildingPanel(); });
  }
  function wireEnergyPanel() {
    const c = document.getElementById('cmp');
    if (c) c.onclick = () => { state.comparing = true; c.textContent = 'Pick a building on the map…'; };
  }

  function selectAlert(id, fly = true) {
    const a = D.alerts.find((x) => x.id === id);
    state.alertSel = id; state.sel = a.bx;
    refresh(); if (fly) focusBuilding(a.bx);
    openPanel(alertPanel(a));
    document.querySelectorAll('.acard').forEach((c) => c.classList.toggle('on', c.dataset.id === id));
    document.querySelectorAll('#panel [data-act]').forEach((btn) => btn.onclick = () => {
      if (btn.dataset.act === 'ack') a.status = 'ack';
      if (btn.dataset.act === 'resolved') a.status = 'resolved';
      if (btn.dataset.act === 'me') a.owner = 'Elīna B.';
      drawStack(); selectAlert(id, false);
    });
  }
  function drawStack() {
    const el = document.getElementById('stack'); if (!el) return;
    const open = D.alerts.filter((a) => a.status !== 'resolved');
    el.innerHTML = `<h2>${open.length} open on the map</h2>` + open.map((a) => `<button class="glass acard ${state.alertSel === a.id ? 'on' : ''}" data-id="${a.id}"><span class="s ${a.sev}"></span><span><b>${a.title}</b><small>${a.where}</small></span><span class="mono faint" style="font-size:11px">${a.age}</span></button>`).join('');
    el.querySelectorAll('.acard').forEach((c) => c.onclick = () => selectAlert(c.dataset.id));
  }

  function wireCommon() {
    const m = document.getElementById('map');
    wirePanZoom(m);
    m.addEventListener('click', (e) => {
      const pin = e.target.closest('.pin');
      if (pin) { if (state.page !== 'alerts') location.href = 'alerts.html#' + pin.dataset.alert; else selectAlert(pin.dataset.alert); return; }
      const g = e.target.closest('.bldg'); if (g) onBuilding(g.dataset.b);
    });
    const hr = document.getElementById('hour');
    hr.oninput = () => { state.hour = +hr.value; document.getElementById('hour-v').textContent = f.h(state.hour); refresh(); };
    let timer = null;
    document.getElementById('play').onclick = (e) => {
      if (timer) { clearInterval(timer); timer = null; e.target.textContent = '▶'; return; }
      e.target.textContent = '❚❚';
      timer = setInterval(() => { state.hour = (state.hour + 1) % 24; hr.value = state.hour; document.getElementById('hour-v').textContent = f.h(state.hour); refresh(); }, 450);
    };
    document.getElementById('theme').onclick = () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = state.theme;
      try { localStorage.setItem('vatp-c-theme', state.theme); } catch (_) {}
      refresh();
    };
    document.querySelectorAll('.modes button').forEach((b) => b.onclick = () => { state.mode = b.dataset.m; document.querySelectorAll('.modes button').forEach((x) => x.setAttribute('aria-pressed', x === b)); refresh(); });
  }

  // ---------- data states (prototype) ----------
  function notice() {
    if (ST === 'loading') return `<div class="glass notice"><span class="spin"></span><div><b>Connecting to the plant server…</b><div class="bar"><i style="width:65%"></i></div><small class="mono">268 of 412 sensors</small></div></div>`;
    if (ST === 'empty') return `<div class="glass notice big"><div class="faint mono" style="font-size:11px">VATP CAMPUS · NEW SITE</div><h2>No sensors on the map yet</h2><p class="muted">Buildings stay as outlines until their devices report in. Drop devices onto rooms and the map lights up.</p>
      <ol class="steps"><li class="done"><i>✓</i>Gateway placed in the plant room</li><li class="now"><i>2</i>Drop devices onto rooms <span class="faint">0 of 218</span></li><li><i>3</i>First reading</li></ol>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary">Place devices</button><button class="btn">Import device list</button></div></div>`;
    if (ST === 'error') return `<div class="glass notice err"><span class="ico">!</span><div><b>Couldn’t load energy colours</b><small>Server error 502 · retrying in <span id="cd">12</span> s · live readings still work</small></div><button class="btn" data-retry="Retrying…">Retry</button></div>`;
    if (ST === 'offline') return `<div class="glass notice off"><span class="ico">!</span><div><b>Plant gateway offline since ${AT}</b><small>The map shows the last known values. Time after ${AT} is greyed out.</small></div><button class="btn">Diagnose</button></div>`;
    return '';
  }

  const pages = {
    dashboard: () => shell('dashboard', `
      <div class="glass modes" role="group" aria-label="Colour the map by"><button data-m="energy" aria-pressed="true">Energy</button><button data-m="comfort" aria-pressed="false">Comfort</button><button data-m="co2" aria-pressed="false">CO₂</button></div>
      <div class="glass legend-bar" id="legend"></div>
      <aside class="glass panel" id="panel" aria-label="Details"></aside>
      ${notice()}`),
    energy: () => shell('energy', `
      <div class="glass modes" role="group" aria-label="Colour the map by"><button data-m="energy" aria-pressed="true">Energy</button><button data-m="comfort" aria-pressed="false">Comfort</button><button data-m="co2" aria-pressed="false">CO₂</button></div>
      <div class="glass legend-bar" id="legend"></div>
      <div class="glass tray" id="tray"></div>
      <aside class="glass panel" id="panel" aria-label="Energy details"></aside>`),
    alerts: () => shell('alerts', `<div class="alert-stack" id="stack"></div><aside class="glass panel" id="panel" aria-label="Alert details"></aside>`),
  };

  function initTheme() {
    try { const t = localStorage.getItem('vatp-c-theme'); if (t) state.theme = t; } catch (_) {}
    document.documentElement.dataset.theme = state.theme;
  }

  window.Spatial = {
    mount(page) {
      initTheme();
      state.page = page;
      if (page === 'dashboard' && ST === 'offline') state.hour = 10;
      document.getElementById('root').innerHTML = pages[page]();
      wireCommon();
      if (page === 'dashboard' && ST !== 'normal') {
        const hr = document.getElementById('hour'), play = document.getElementById('play');
        if (ST === 'offline') { hr.style.setProperty('--cut', `${(10.7 / 23) * 100}%`); hr.classList.add('cut'); const o = hr.oninput; hr.oninput = () => { if (+hr.value > 10) hr.value = 10; o(); }; play.disabled = true; }
        else { hr.disabled = true; play.disabled = true; }
        const cd = document.getElementById('cd');
        if (cd) { let n = 12; setInterval(() => { n = n <= 1 ? 12 : n - 1; cd.textContent = n; }, 1000); }
      }
      refresh();
      if (page === 'energy') { const id = new URLSearchParams(location.search).get('b') || 'b1'; setTimeout(() => onBuilding(id), 300); }
      if (page === 'alerts') { drawStack(); const id = location.hash.slice(1) || D.alerts.find((a) => a.status === 'new').id; setTimeout(() => selectAlert(id), 300); }
    },
    // login background: just the map, slowly drifting
    backdrop() {
      initTheme();
      const m = document.getElementById('map');
      m.innerHTML = map({ pins: false, labels: false });
      const t0 = performance.now();
      const loop = (now) => { const t = (now - t0) / 1000; setVB([HOME[0] + Math.sin(t / 6) * 40, HOME[1] + Math.cos(t / 7) * 20, HOME[2] - 60, HOME[3] - 45]); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
      setInterval(() => { state.hour = (state.hour + 1) % 24; m.innerHTML = map({ pins: false, labels: false }); }, 1200);
    },
  };
})();

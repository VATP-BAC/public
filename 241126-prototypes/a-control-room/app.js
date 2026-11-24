/* Direction A — Control Room. Shell + page renderers. */
(function () {
  const D = window.VATP, C = window.Charts, f = window.fmt;
  const ST = (window.ProtoState && ProtoState.current) || 'normal', AT = '10:42';
  const col = { cyan: '#3fd0e0', amber: '#f2b33d', red: '#ff5d5d', green: '#3ddc97', violet: '#9a8cff', line: '#232a35', text: '#e6edf3', muted: '#8693a4', dim: '#5b6676' };

  const ico = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const I = {
    gauge: ico('<path d="M12 14l4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>'),
    bell: ico('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>'),
    bolt: ico('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>'),
    flow: ico('<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a2 2 0 0 1 2 2v7"/>'),
    bldg: ico('<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/>'),
    cpu: ico('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>'),
    cube: ico('<path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>'),
    shield: ico('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
    search: ico('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
    down: ico('<path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"/>'),
    cog: ico('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
    google: '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8.1z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>',
  };

  const nav = [
    { id: 'dashboard', href: 'dashboard.html', label: 'Dashboard', icon: I.gauge },
    { id: 'alerts', href: 'alerts.html', label: 'Alerts', icon: I.bell, badge: D.alerts.filter((a) => a.status === 'new').length },
    { id: 'energy', href: 'energy.html', label: 'Energy', icon: I.bolt },
    { id: 'schematic', href: '#', label: 'Schematic', icon: I.flow },
    { id: 'buildings', href: '#', label: 'Buildings', icon: I.bldg },
    { id: 'devices', href: '#', label: 'Devices', icon: I.cpu },
    { id: '3d', href: '#', label: '3D facility', icon: I.cube },
  ];

  function tickerItems() {
    const k = D.kpis;
    const items = [
      `LOAD <b>${D.series.actual.at(-1)} kW</b>`, `SPOT <b>${k.price.value} €/MWh</b>`, `COP <b>${k.cop.value}</b>`,
      `OUTDOOR <b>${D.weather.temp} °C</b>`, `BUFFER <b>44.8 °C</b>`, `DHW <b>57.3 °C</b>`, `BRINE IN <b>8.2 °C</b>`,
      `<span class="crit">AHU-2 SUPPLY <b>14.1 °C</b></span>`, `<span class="warn">R2.04 CO₂ <b>1 180 ppm</b></span>`,
      `PV <b>38 kW</b>`, `GRID IMPORT <b>91 kW</b>`, `DEVICES <b>${k.devicesOnline.value}/${k.devicesOnline.total}</b>`,
    ].map((s) => `<span>${s}</span>`).join('');
    return items + items; // duplicated for seamless loop
  }

  function shell(active, crumbs, body) {
    return `
    <div class="app">
      <nav class="rail" aria-label="Main">
        <div class="logo">VT</div>
        ${nav.map((n) => `<a href="${n.href}" ${n.id === active ? 'aria-current="page"' : ''} aria-label="${n.label}">${n.icon}${n.badge ? `<span class="badge">${n.badge}</span>` : ''}<span class="tip">${n.label}</span></a>`).join('')}
        <div class="spacer"></div>
        <a href="#" aria-label="Admin">${I.shield}<span class="tip">Admin</span></a>
        <a href="#" aria-label="Settings">${I.cog}<span class="tip">Settings</span></a>
      </nav>
      <header class="topbar">
        <div class="site-switch ${ST === 'offline' ? 'off' : ST === 'empty' ? 'new' : ''}"><span class="dot"></span><b>${ST === 'empty' ? 'Ventspils · Site 2' : D.site.name}</b>${ST === 'empty' ? '<span class="tagnew">NEW</span>' : ''}<span class="muted">▾</span></div>
        <div class="crumbs">${crumbs}</div>
        <button class="cmdk" id="cmdk-btn">${I.search}<span>Jump to device, room, command…</span><kbd>⌘K</kbd></button>
        ${{ loading: '<div class="live sync"><i></i><span>SYNC 268/412</span></div>', empty: '<div class="live none"><i></i><span>NO TELEMETRY</span></div>', offline: `<div class="live off"><i></i><span>OFFLINE · ${AT}</span></div>` }[ST] || `<div class="live"><i></i><span id="clock">LIVE ${D.now}:00</span></div>`}
        <div class="avatar" title="${D.user.name}">${D.user.initials}</div>
      </header>
      ${ST === 'loading' ? '<div class="ticker still" aria-hidden="true"><div class="track"><span>CONNECTING TO <b>vatp-gw-01</b> · SUBSCRIBING TO 412 POINTS<span class="cursor">▌</span></span></div></div>'
        : ST === 'empty' ? '<div class="ticker still" aria-hidden="true"><div class="track"><span>NO TELEMETRY · SITE NOT COMMISSIONED · 0 DEVICES</span></div></div>'
        : `<div class="ticker ${ST === 'offline' ? 'stale' : ''}" aria-hidden="true">${ST === 'offline' ? `<span class="frozen">FROZEN ${AT}</span>` : ''}<div class="track">${tickerItems()}</div></div>`}
      <main id="main">${body}</main>
    </div>
    <div class="palette" id="palette" role="dialog" aria-label="Command palette">
      <div class="box"><input id="pal-in" placeholder="Type a command or search…" autocomplete="off"/><ul id="pal-list"></ul></div>
    </div>`;
  }

  // ---------- command palette ----------
  const commands = [
    ['Go to Dashboard', 'dashboard.html', 'G D'], ['Go to Alerts', 'alerts.html', 'G A'], ['Go to Energy', 'energy.html', 'G E'],
    ['Acknowledge all new alerts', 'alerts.html', 'A'], ['Open AHU-2 (Business Incubator)', 'alerts.html', ''],
    ['Heat pump HP-1 — live readings', '#', ''], ['Room 2.04 — CO₂ trend', '#', ''], ['Export energy report (Excel)', '#', '⇧E'],
    ['Switch site: VATP Campus', '#', ''], ['Toggle TV display mode', '#', ''],
  ];
  function wirePalette() {
    const pal = document.getElementById('palette'), inp = document.getElementById('pal-in'), list = document.getElementById('pal-list');
    let sel = 0, shown = commands;
    const draw = () => { list.innerHTML = shown.map((c, i) => `<li class="${i === sel ? 'on' : ''}" data-href="${c[1]}">${c[0]}<small>${c[2]}</small></li>`).join('') || '<li class="muted">No matches</li>'; };
    const open = () => { pal.classList.add('open'); inp.value = ''; shown = commands; sel = 0; draw(); inp.focus(); };
    const close = () => pal.classList.remove('open');
    document.getElementById('cmdk-btn').addEventListener('click', open);
    pal.addEventListener('click', (e) => { if (e.target === pal) close(); const li = e.target.closest('li[data-href]'); if (li) location.href = li.dataset.href; });
    inp.addEventListener('input', () => { const q = inp.value.toLowerCase(); shown = commands.filter((c) => c[0].toLowerCase().includes(q)); sel = 0; draw(); });
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.classList.contains('open') ? close() : open(); return; }
      if (!pal.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, shown.length - 1); draw(); e.preventDefault(); }
      if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); draw(); e.preventDefault(); }
      if (e.key === 'Enter' && shown[sel]) location.href = shown[sel][1];
    });
  }

  // ---------- pieces ----------
  const kpiOrder = ['energyToday', 'peakLoad', 'cop', 'cost', 'price', 'indoor', 'co2', 'carbon'];
  const goodWhenDown = { energyToday: 1, peakLoad: 1, cost: 1, price: 1, co2: 1, carbon: 1 };
  function kpiRibbon() {
    return `<section class="kpis" aria-label="Key figures">${kpiOrder.map((key, i) => {
      const k = D.kpis[key];
      const good = goodWhenDown[key] ? k.delta < 0 : k.delta > 0;
      const sp = D.week.energy.map((v, j) => v * (1 + ((i * 3 + j) % 5) / 30));
      if (ST === 'loading') return `<div class="kpi"><div class="l">${k.label}</div><div class="v"><span class="skel" style="width:${50 + (i * 13) % 35}%">&nbsp;</span></div><div class="d"><span class="skel" style="width:70%">&nbsp;</span></div><div class="sp"></div></div>`;
      if (ST === 'empty') return `<div class="kpi"><div class="l">${k.label}</div><div class="v num dim">—</div><div class="d dim">no data</div><div class="sp"><svg viewBox="0 0 120 22" preserveAspectRatio="none" class="chart"><line x1="0" x2="120" y1="16" y2="16" stroke="${col.line}" stroke-dasharray="3 3"/></svg></div></div>`;
      return `<div class="kpi ${ST === 'offline' ? 'stale' : ''}"><div class="l">${k.label}${ST === 'offline' ? `<span class="at">@${AT}</span>` : ''}</div>
        <div class="v num" data-live="${key}">${k.unit === '€' ? '€' : ''}${k.value}${k.unit && k.unit !== '€' ? `<small>${k.unit}</small>` : ''}</div>
        <div class="d ${good ? 'down' : 'up'}">${f.delta(k.delta, key === 'cop' || key === 'comfort' ? '' : '%')} <span class="dim">vs last wk</span></div>
        <div class="sp">${C.spark(sp, good ? col.green : col.amber, 120, 22)}</div></div>`;
    }).join('')}</section>`;
  }

  function tile(span, title, body, act = '', id = '') {
    return `<section class="tile ${span}" draggable="true" ${id ? `data-id="${id}"` : ''}><div class="tile-h"><span class="grip" title="Drag to rearrange">⋮⋮</span>${title}<div class="act">${act}</div></div><div class="tile-b">${body}</div></section>`;
  }

  function loadChart(h = 210) {
    if (ST === 'offline') return `<div style="height:${h}px;position:relative">${C.line({ w: 800, h, n: 24, grid: col.line, nowIndex: 14, nowColor: col.dim, label: 'Load vs forecast',
      series: [{ values: D.series.forecast, color: col.dim, dash: '4 4', width: 1.5 }, { values: D.series.actual.slice(0, 11), color: col.cyan, width: 2, fill: 'rgba(63,208,224,.08)' }] })}
      <div class="gap" style="left:${(10.7 / 23) * 100}%;width:${(3.3 / 23) * 100}%"><span>NO DATA</span></div></div>
      <div class="axis"><span>00</span><span>06</span><span>LAST ${AT}</span><span>NOW 14</span><span>18</span><span>23</span></div>`;
    return `<div style="height:${h}px">${C.line({ w: 800, h, grid: col.line, nowIndex: 14, nowColor: col.dim, label: 'Load vs forecast',
      series: [{ values: D.series.forecast, color: col.dim, dash: '4 4', width: 1.5 }, { values: D.series.actual, color: col.cyan, width: 2, fill: 'rgba(63,208,224,.08)' }] })}</div>
      <div class="axis"><span>00</span><span>06</span><span>12</span><span>NOW 14</span><span>18</span><span>23</span></div>`;
  }

  function sankey(h = 240) {
    return C.sankey({ w: 720, h, data: D.distribution, text: col.text, muted: col.muted, useColor: '#4a5566',
      colors: { grid: col.violet, pv: col.amber, geo: col.cyan }, labelW: 170, fontSize: 12, flowOpacity: 0.32 });
  }

  function plant() {
    return `<div class="plant">${D.plant.map((n) => `<div class="node ${ST === 'offline' ? 'stale' : n.state}"><div class="n"><i></i>${n.label}</div><div class="val">${n.value}</div><div class="s">${n.sub}</div></div>`).join('')}
      <div class="node"><div class="n"><i></i>Outdoor</div><div class="val">${D.weather.temp} °C</div><div class="s">wind 8 m/s</div></div></div>`;
  }

  function stream(n = 5) {
    const gw = ST === 'offline' ? `<li><span class="sev critical"></span><div><div class="t">Gateway vatp-gw-01 unreachable</div><div class="w">Plant room · heartbeat lost</div></div><span class="mono dim">${AT}</span></li>` : '';
    return `<ul class="stream">${gw}${D.alerts.filter((a) => a.status !== 'resolved').slice(0, ST === 'offline' ? n - 1 : n).map((a) => `<li><span class="sev ${a.sev}"></span><div><div class="t">${a.title}</div><div class="w">${a.where}</div></div><span class="mono dim">${a.since}</span></li>`).join('')}</ul>`;
  }

  function buildingsTable() {
    return `<div class="table-wrap"><table class="dense"><thead><tr><th>Building</th><th class="r">kWh today</th><th class="r">kWh/m²</th><th class="r">Temp</th><th class="r">CO₂</th><th class="r">Comfort</th><th class="r">Alerts</th></tr></thead><tbody>
      ${D.buildings.map((b) => `<tr><td>${b.name}</td><td class="r num">${f.n(b.kwh)}</td><td class="r num">${(b.kwh / b.area * 1000).toFixed(0)}<span class="dim">‰</span></td><td class="r num">${b.temp} °C</td><td class="r num ${b.co2 > 700 ? 'up' : ''}">${b.co2}</td><td class="r num">${b.comfort}</td><td class="r num ${b.alerts ? 'up' : 'dim'}">${b.alerts || '—'}</td></tr>`).join('')}
    </tbody></table></div>`;
  }

  // drag-to-rearrange tiles (swap)
  function wireDrag(root) {
    let src = null;
    root.querySelectorAll('.tile[draggable]').forEach((t) => {
      t.addEventListener('dragstart', () => { src = t; t.classList.add('dragging'); });
      t.addEventListener('dragend', () => { t.classList.remove('dragging'); root.querySelectorAll('.drop').forEach((x) => x.classList.remove('drop')); });
      t.addEventListener('dragover', (e) => { e.preventDefault(); if (t !== src) t.classList.add('drop'); });
      t.addEventListener('dragleave', () => t.classList.remove('drop'));
      t.addEventListener('drop', (e) => {
        e.preventDefault(); t.classList.remove('drop');
        if (!src || src === t) return;
        const a = src.nextSibling === t ? t : src.nextSibling;
        t.parentNode.insertBefore(src, t); t.parentNode.insertBefore(t, a);
      });
    });
  }

  // live jitter so it feels connected
  function liveTick() {
    const clock = document.getElementById('clock');
    let s = 0;
    setInterval(() => {
      s = (s + 2) % 60;
      if (clock) clock.textContent = `LIVE ${D.now}:${String(s).padStart(2, '0')}`;
      const el = document.querySelector('[data-live="peakLoad"]');
      if (el) { const v = 129 + Math.round(Math.random() * 6 - 3); el.innerHTML = `${v}<small>kW</small>`; el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
    }, 2000);
  }

  // ---------- data states (prototype) ----------
  function banner() {
    if (ST === 'error') return `<div class="sbar err"><b>2 PANELS FAILED</b><span>/api/v1/energy/* returned 502 · live stream OK</span><span class="r">auto-retry in <b id="cd">12</b> s</span><button class="btn" data-retry="RETRYING…">Retry now</button></div>`;
    if (ST === 'offline') return `<div class="sbar off"><b>GATEWAY vatp-gw-01 OFFLINE</b><span>no data for 3 h 18 min · values frozen at ${AT} · setpoint writes disabled</span><span class="r">last heartbeat ${AT}:07 · 4G backup down</span><button class="btn">Run diagnostics</button></div>`;
    return '';
  }
  const skRows = (n, w = [70, 40, 20]) => Array.from({ length: n }, (_, i) => `<div class="skrow">${w.map((x) => `<span class="skel" style="width:${x - (i * 7) % 15}%">&nbsp;</span>`).join('')}</div>`).join('');
  function loadingBody() {
    const log = [
      ['14:02:11.204', 'auth ok · role=operator · site=vatp-campus', 'ok'],
      ['14:02:11.388', 'GET /api/v1/kpis?range=today', '200 · 182 ms'],
      ['14:02:11.402', 'ws connect wss://gw-01.vatp.lv/stream', 'open'],
      ['14:02:11.560', 'subscribe points', '268 / 412'],
      ['14:02:11.611', 'GET /api/v1/energy/series?range=24h', 'pending'],
    ];
    return `${kpiRibbon()}
      <div class="grid" style="margin-top:10px">
        ${tile('span-8', 'Load vs forecast · kW', `<div class="bootlog">${log.map(([t, m, r]) => `<div><span class="dim">[${t}]</span> ${m} <span class="${r === 'pending' ? 'amber' : 'ok'}">${r}</span></div>`).join('')}<div><span class="dim">[14:02:11.7··]</span> waiting for series<span class="cursor">▌</span></div></div>`)}
        ${tile('span-4', 'Live alerts', skRows(5))}
        ${tile('span-7', 'Energy distribution · today', `<div class="skel" style="height:230px">&nbsp;</div>`)}
        ${tile('span-5', 'Plant room · live', `<div class="plant">${D.plant.map((n) => `<div class="node"><div class="n">${n.label}</div><div class="val"><span class="skel" style="width:60%">&nbsp;</span></div><div class="s"><span class="skel" style="width:80%">&nbsp;</span></div></div>`).join('')}</div>`)}
        ${tile('span-12', 'Buildings', skRows(4, [30, 12, 12, 12, 12]))}
      </div>`;
  }
  function emptyBody() {
    const steps = [
      ['done', 'Site created', 'Elīna B. · today 09:12', ''],
      ['done', 'Gateway vatp-gw-02 registered', 'online · firmware 3.4.1', ''],
      ['now', 'Discover devices', 'BACnet/IP + Modbus scan · not started', '<button class="btn primary">Run discovery</button>'],
      ['todo', 'Map points to rooms', '0 of — points', '<button class="btn">Import CSV</button>'],
      ['todo', 'First reading', 'waiting for devices', ''],
    ];
    return `${kpiRibbon()}
      <div class="grid" style="margin-top:10px">
        ${tile('span-8', `Commissioning · <span style="color:${col.cyan}">2 of 5</span>`, `<ol class="commission">${steps.map(([st, t, sub, act]) => `<li class="${st}"><span class="box">${st === 'done' ? '✓' : st === 'now' ? '▸' : ''}</span><div><b>${t}</b><div class="dim mono">${sub}</div></div>${act}</li>`).join('')}</ol>`)}
        ${tile('span-4', 'What appears when', `<ul class="stream">${[['KPI ribbon', 'after the first reading'], ['Live alerts', 'after alert rules are on'], ['Energy distribution', 'after meters are mapped'], ['Load forecast', 'after 7 days of history']].map(([a, b]) => `<li><span class="sev" style="background:${col.line}"></span><div><div class="t">${a}</div><div class="w">${b}</div></div></li>`).join('')}</ul>`)}
        ${tile('span-12', 'Buildings', `<div class="emptyrow"><span class="mono dim">0 buildings</span><span>Add a building, or press <kbd>⌘K</kbd> and type “import”.</span><button class="btn">+ Add building</button></div>`)}
      </div>`;
  }

  // ---------- pages ----------
  const pages = {
    dashboard() {
      if (ST === 'loading') return shell('dashboard', `<b>Overview</b> · All buildings · Today`, loadingBody());
      if (ST === 'empty') return shell('dashboard', `<b>Overview</b> · Site 2 · Commissioning`, emptyBody());
      const err = (what) => `<div class="errbox"><div class="code">ERR 502 · GET /api/v1/energy/${what}</div><div>Upstream timeout after 10 s. Last good response 13:55.</div><div class="mono dim">req 7f3a-91c2-4be0</div><div class="row"><button class="btn primary" data-retry="RETRYING…">Retry</button><button class="btn">Copy request id</button></div></div>`;
      const isErr = ST === 'error';
      return shell('dashboard', `<b>Overview</b> · All buildings · Today`, `
        ${banner()}
        ${kpiRibbon()}
        <div class="grid" id="tiles" style="margin-top:10px">
          ${tile('span-8', 'Load vs forecast · kW', isErr ? err('series?range=24h') : loadChart(), `<div class="legend"><span><i style="background:${col.cyan}"></i>Actual</span><span><i style="background:${col.dim}"></i>Forecast</span></div><div class="seg"><button aria-pressed="true">24h</button><button>7d</button><button>30d</button></div>`)}
          ${tile('span-4', `Live alerts · <span style="color:${col.red}">${D.alerts.filter((a) => a.status === 'new').length} new</span>`, stream(), `<a href="alerts.html" class="muted">Triage →</a>`)}
          ${tile('span-7', 'Energy distribution · today', isErr ? err('distribution?day=today') : `<div style="height:250px">${sankey(240)}</div>`, `<a href="energy.html" class="muted">Analyse →</a>`)}
          ${tile('span-5', ST === 'offline' ? `Plant room · <span style="color:${col.amber}">stale @${AT}</span>` : 'Plant room · live', plant(), `<a href="#" class="muted">Schematic →</a>`)}
          ${tile('span-12', 'Buildings', buildingsTable())}
        </div>`);
    },

    energy() {
      const uses = D.distribution.uses, tot = uses.reduce((a, u) => a + u.value, 0);
      const costRows = uses.map((u) => ({ ...u, eur: (u.value * 0.145).toFixed(0), share: (u.value / tot) * 100 }));
      const heatColor = (t) => `rgba(63,208,224,${0.08 + t * 0.85})`;
      return shell('energy', `<b>Energy</b> · All buildings · 24 Nov 2026`, `
        <div class="toolbar">
          <h1>Energy workspace</h1>
          <div class="seg"><button>1h</button><button aria-pressed="true">Today</button><button>7d</button><button>30d</button><button>YTD</button></div>
          <div class="seg"><button aria-pressed="true">kWh</button><button>€</button><button>CO₂</button></div>
          <label class="scrub"><span>00:00</span><input type="range" min="0" max="23" value="14" id="scrub"/><span id="scrub-v">14:00</span></label>
          <button class="btn">Compare: last week</button>
          <button class="btn primary">${I.down}Export</button>
        </div>
        <div class="grid" id="tiles">
          ${tile('span-7', 'Distribution · sources → uses', `<div style="height:270px">${sankey(260)}</div>`)}
          ${tile('span-5', 'Cost by use', `<div class="table-wrap"><table class="dense"><thead><tr><th>Use</th><th class="r">kWh</th><th class="r">€</th><th>Share</th></tr></thead><tbody>
            ${costRows.map((r) => `<tr><td>${r.label}</td><td class="r num">${f.n(r.value)}</td><td class="r num">${r.eur}</td><td><div class="bar-in"><i style="width:${r.share}%"></i></div></td></tr>`).join('')}
            <tr><td><b>Total</b></td><td class="r num"><b>${f.n(tot)}</b></td><td class="r num"><b>186</b></td><td class="dim mono">avg 0.145 €/kWh</td></tr></tbody></table></div>`)}
          ${tile('span-8', 'Load (kW) vs spot price (€/MWh)', `<div style="height:200px">${C.line({ w: 800, h: 200, grid: col.line, nowIndex: 14, label: 'load and price',
              series: [{ values: D.series.forecast, color: col.cyan, width: 2 }, { values: D.series.price, color: col.amber, width: 1.5, dash: '2 3' }] })}</div>
              <div class="axis"><span>00</span><span>06</span><span>12</span><span>18</span><span>23</span></div>`,
            `<div class="legend"><span><i style="background:${col.cyan}"></i>Load</span><span><i style="background:${col.amber}"></i>Price</span></div>`)}
          ${tile('span-4', 'Top consumers', `<table class="dense"><tbody>${D.topConsumers.map((t) => `<tr><td>${t.name}<div class="dim" style="font-size:11px">${t.building}</div></td><td class="r num">${t.kwh}<span class="dim"> kWh</span></td><td class="r num muted">${t.share}%</td></tr>`).join('')}</tbody></table>`)}
          ${tile('span-12', 'Consumption heatmap · kWh per hour · last 7 days', `<div style="display:grid;grid-template-columns:34px 1fr;gap:6px;align-items:stretch">
              <div class="mono dim" style="display:grid;font-size:10px;align-content:space-around">${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => `<span>${d}</span>`).join('')}</div>
              <div style="height:150px">${C.heatmap({ data: D.series.heat, w: 960, h: 150, color: heatColor, gap: 2 })}</div></div>
              <div class="axis" style="margin-left:40px"><span>00</span><span>06</span><span>12</span><span>18</span><span>23</span></div>`)}
        </div>`);
    },

    alerts() {
      return shell('alerts', `<b>Alerts</b> · Triage queue`, `
        <div class="toolbar">
          <h1>Triage</h1>
          <div class="chips" id="chips">
            ${[['all', 'All'], ['new', 'New'], ['ack', 'Acknowledged'], ['watching', 'Watching'], ['resolved', 'Resolved']].map(([k, l], i) => `<button class="chip" data-f="${k}" aria-pressed="${i === 0}">${l} ${k === 'all' ? D.alerts.length : D.alerts.filter((a) => a.status === k).length}</button>`).join('')}
          </div>
          <div class="keys" style="margin:0 0 0 auto"><span><kbd>J</kbd>/<kbd>K</kbd> move</span><span><kbd>A</kbd> acknowledge</span><span><kbd>M</kbd> assign to me</span><span><kbd>R</kbd> resolve</span></div>
        </div>
        <div class="triage">
          <section class="tile list"><div class="table-wrap"><table class="dense triage-t"><thead><tr><th></th><th>ID</th><th>Alert</th><th>Location</th><th class="r">Value</th><th>Age</th><th>Owner</th><th>Status</th></tr></thead><tbody id="rows"></tbody></table></div></section>
          <aside class="tile"><div class="tile-b detail" id="detail"></div></aside>
        </div>`);
    },
  };

  function wireAlerts() {
    let filter = 'all', sel = 0;
    const rows = document.getElementById('rows'), det = document.getElementById('detail');
    const list = () => D.alerts.filter((a) => filter === 'all' || a.status === filter);
    const draw = () => {
      const L = list();
      sel = Math.min(sel, Math.max(L.length - 1, 0));
      rows.innerHTML = L.map((a, i) => `<tr class="${i === sel ? 'sel' : ''}" data-i="${i}"><td><span class="sev ${a.sev}" style="display:block"></span></td><td class="mono dim">${a.id}</td><td>${a.title}</td><td class="muted">${a.where}</td><td class="r num">${a.value}</td><td class="mono dim">${a.age}</td><td>${a.owner || '<span class="dim">—</span>'}</td><td><span class="status ${a.status}">${a.status}</span></td></tr>`).join('');
      const a = L[sel];
      det.innerHTML = a ? `
        <div class="mono dim">${a.id} · <span class="status ${a.status}">${a.status}</span></div>
        <h2>${a.title}</h2><div class="muted">${a.where}</div>
        <dl class="kv"><dt>Device</dt><dd>${a.device}</dd><dt>Value</dt><dd style="color:${a.sev === 'critical' ? col.red : col.amber}">${a.value}</dd><dt>Expected</dt><dd>${a.expected}</dd><dt>Since</dt><dd>${a.since} (${a.age})</dd><dt>Owner</dt><dd>${a.owner || '—'}</dd></dl>
        <div style="height:70px;margin-bottom:12px">${C.line({ w: 360, h: 70, grid: col.line, series: [{ values: [18, 18.2, 17.9, 17.4, 16.8, 16.1, 15.4, 14.9, 14.4, 14.1], color: col.red, width: 2, fill: 'rgba(255,93,93,.08)' }] })}</div>
        <div class="suggest"><b style="color:${col.cyan}">Suggested next step</b><br/>${a.suggestion}</div>
        <div style="display:flex;gap:6px;margin-top:12px;flex-wrap:wrap"><button class="btn primary" data-act="ack">Acknowledge</button><button class="btn" data-act="me">Assign to me</button><button class="btn" data-act="resolved">Resolve</button><button class="btn">Open device</button></div>
        <ul class="timeline"><li><b>${a.since}</b> — Rule “${a.title}” fired</li><li><span class="muted">${a.since}</span> — Notified on-call (SMS, email)</li><li><span class="muted">Earlier</span> — Value trending outside band for 12 min</li></ul>` : '<p class="muted">Nothing here.</p>';
    };
    const act = (kind) => {
      const a = list()[sel]; if (!a) return;
      if (kind === 'ack') a.status = 'ack';
      if (kind === 'resolved') a.status = 'resolved';
      if (kind === 'me') a.owner = 'Elīna B.';
      draw();
    };
    rows.addEventListener('click', (e) => { const tr = e.target.closest('tr[data-i]'); if (tr) { sel = +tr.dataset.i; draw(); } });
    det.addEventListener('click', (e) => { const b = e.target.closest('[data-act]'); if (b) act(b.dataset.act); });
    document.getElementById('chips').addEventListener('click', (e) => {
      const b = e.target.closest('.chip'); if (!b) return;
      filter = b.dataset.f; sel = 0;
      document.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c === b));
      draw();
    });
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('palette').classList.contains('open') || /input/i.test(e.target.tagName) || e.metaKey || e.ctrlKey) return;
      const k = e.key.toLowerCase();
      if (k === 'j') { sel = Math.min(sel + 1, list().length - 1); draw(); }
      if (k === 'k') { sel = Math.max(sel - 1, 0); draw(); }
      if (k === 'a') act('ack');
      if (k === 'r') act('resolved');
      if (k === 'm') act('me');
    });
    draw();
  }

  window.ControlRoom = {
    mount(page) {
      document.getElementById('root').innerHTML = pages[page]();
      wirePalette();
      const tiles = document.getElementById('tiles');
      if (tiles) wireDrag(tiles);
      if (page === 'alerts') wireAlerts();
      if (page === 'energy') {
        const s = document.getElementById('scrub');
        s.addEventListener('input', () => { document.getElementById('scrub-v').textContent = f.h(s.value); });
      }
      if (ST === 'normal' || ST === 'error') liveTick();
      const cd = document.getElementById('cd');
      if (cd) { let n = 12; setInterval(() => { n = n <= 1 ? 12 : n - 1; cd.textContent = n; }, 1000); }
    },
    icons: I,
  };
})();

/* Direction D — Refined. Same structure as today's app, polished. */
(function () {
  const D = window.VATP, C = window.Charts, f = window.fmt;
  const ST = (window.ProtoState && ProtoState.current) || 'normal', AT = '10:42';
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  let col;
  const readCols = () => (col = { fern: css('--fern'), fern2: css('--fern-2'), ember: css('--ember'), olive: css('--olive'), steel: css('--steel'), line: css('--line'), line2: css('--line-2'), ink: css('--ink'), ink2: css('--ink-2'), ink3: css('--ink-3'), card: css('--card'), surface: css('--surface'), red: css('--red'), amber: css('--amber'), green: css('--green') });

  const ico = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const I = {
    gauge: ico('<path d="M12 14l4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>'),
    bell: ico('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>'),
    chart: ico('<path d="M3 3v18h18"/><path d="M8 17V11M13 17V7M18 17v-4"/>'),
    flow: ico('<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a2 2 0 0 1 2 2v7"/>'),
    bldg: ico('<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01"/>'),
    layer: ico('<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>'),
    door: ico('<path d="M4 22h16M6 22V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v19"/><path d="M14 12h.01"/>'),
    cpu: ico('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>'),
    cube: ico('<path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>'),
    shield: ico('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
    scroll: ico('<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/>'),
    search: ico('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
    moon: ico('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
    tv: ico('<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8"/>'),
    menu: ico('<path d="M4 6h16M4 12h16M4 18h16"/>'),
    spark: ico('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'),
    down: ico('<path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"/>'),
  };
  const openNew = D.alerts.filter((a) => a.status === 'new').length;

  function shell(active, crumbs, body) {
    const groups = [
      ['Overview', [['dashboard', 'Dashboard', I.gauge], ['alerts', 'Alerts', I.bell, openNew], ['energy', 'Energy', I.chart], ['#', 'Schematic', I.flow]]],
      ['Entities', [['#', 'Buildings', I.bldg], ['#', 'Floors', I.layer], ['#', 'Rooms', I.door], ['#', 'Devices', I.cpu]]],
      ['Experiments', [['#', '3D facility', I.cube, null, 'beta']]],
      ['Administration', [['#', 'Admin', I.shield], ['#', 'Audit logs', I.scroll]]],
    ];
    return `<div class="app">
      <aside class="side" aria-label="Main navigation">
        <div class="brand"><span class="mk">V</span><div><b>VATP</b><small>Ventspils High-Tech Park</small></div></div>
        <button class="ctx"><span class="dot"></span><span>All buildings</span><i>⌄</i></button>
        ${groups.map(([g, items]) => `<div class="grp">${g}</div><nav class="nav">${items.map(([id, l, ic, b, tag]) => `<a href="${id === '#' ? '#' : id + '.html'}" ${id === active ? 'aria-current="page"' : ''}>${ic}${l}${b ? `<span class="b">${b}</span>` : ''}${tag ? `<span class="tag">${tag}</span>` : ''}</a>`).join('')}</nav>`).join('')}
        <div class="grow"></div>
        <div class="me"><span class="av">${D.user.initials}</span><div><b>${D.user.name}</b><small>${D.user.role}</small></div></div>
      </aside>
      <div class="main">
        <header class="top">
          <button class="ibtn menu" id="menu" aria-label="Open menu">${I.menu}</button>
          <div class="crumbs">${crumbs}</div>
          <div class="search">${I.search}<span>Search rooms, devices…</span><kbd>⌘K</kbd></div>
          <div id="pal"></div>
          <button class="ibtn" id="theme" aria-label="Toggle dark mode">${I.moon}</button>
          <a class="ibtn" href="#" aria-label="Open TV display" title="Open TV display">${I.tv}</a>
        </header>
        <main class="content">${body}</main>
      </div>
    </div>`;
  }

  const delta = (v, goodDown, unit = '%') => `<span class="delta ${(goodDown ? v < 0 : v > 0) ? 'good' : 'bad'}">${f.delta(v, unit)}</span>`;
  const card = (cls, title, sub, body, link = '', extra = '') => `<section class="card ${cls}" ${extra}><div class="ch"><h2>${title}</h2>${sub ? `<span class="sub">${sub}</span>` : ''}${link}</div>${body}</section>`;

  function kpiCards(keys) {
    const meta = { energyToday: [true, 'fern'], cost: [true, 'ember'], cop: [false, 'olive', ''], indoor: [false, 'steel', ' °C'], price: [true, 'ember'], carbon: [true, 'olive'], co2: [true, 'steel'] };
    return `<div class="kpis" style="--n:${keys.length}">${keys.map((k, i) => {
      const K = D.kpis[k], [gd, c, u] = meta[k];
      const sp = D.week.energy.map((v, j) => v * (1 + ((i * 3 + j) % 5) / 25));
      if (ST === 'loading') return `<div class="card kpi"><div class="l"><i style="background:${col.line2}"></i>${K.label}</div><div class="v"><span class="skel" style="width:${55 + (i * 11) % 30}%;height:30px"></span></div><div class="f"><span class="skel" style="width:70%;height:12px"></span></div><div class="sp"><span class="skel" style="width:100%;height:26px"></span></div></div>`;
      if (ST === 'empty') return `<div class="card kpi"><div class="l"><i style="background:${col.line2}"></i>${K.label}</div><div class="v" style="color:var(--ink-3)">—</div><div class="f">No data yet</div><div class="sp"><svg viewBox="0 0 160 26" preserveAspectRatio="none" class="chart"><line x1="0" x2="160" y1="20" y2="20" stroke="${col.line2}" stroke-dasharray="3 4"/></svg></div></div>`;
      if (ST === 'offline') return `<div class="card kpi stale"><div class="l"><i style="background:${col[c]}"></i>${K.label}</div>
        <div class="v">${K.unit === '€' ? '€' : ''}${K.value}${K.unit && K.unit !== '€' ? `<small>${K.unit}</small>` : ''}</div>
        <div class="f"><span class="asof">As of ${AT}</span></div><div class="sp">${C.spark(sp, col.ink3, 160, 26)}</div></div>`;
      return `<div class="card kpi"><div class="l"><i style="background:${col[c]}"></i>${K.label}</div>
        <div class="v">${K.unit === '€' ? '€' : ''}${K.value}${K.unit && K.unit !== '€' ? `<small>${K.unit}</small>` : ''}</div>
        <div class="f">${delta(K.delta, gd, u ?? '%')}<span>vs last week</span></div>
        <div class="sp">${C.spark(sp, col[c], 160, 26, col[c] + '14')}</div></div>`;
    }).join('')}</div>`;
  }

  function sankey(h = 270) {
    return `<div style="height:${h}px">${C.sankey({ w: 720, h, data: D.distribution, text: col.ink, muted: col.ink3, useColor: col.fern, colors: { grid: col.steel, pv: col.ember, geo: col.olive }, labelW: 175, nodeW: 10, nodeRadius: 4, gap: 12, flowOpacity: 0.22, fontSize: 12 })}</div>
      <div class="legend" style="margin-top:12px"><span><i style="background:${col.steel}"></i>Grid</span><span><i style="background:${col.ember}"></i>Solar PV</span><span><i style="background:${col.olive}"></i>Geothermal</span></div>`;
  }

  function loadChart(h = 210) {
    if (ST === 'offline') return `<div class="chartbox" style="height:${h}px">${C.line({ w: 800, h, n: 24, grid: col.line, nowIndex: 14, nowColor: col.ink3, series: [{ values: D.series.forecast, color: col.ink3, dash: '4 4', width: 1.5 }, { values: D.series.actual.slice(0, 11), color: col.fern, width: 2.5, fill: col.fern + '14' }] })}
      <div class="gap" style="left:${(10.7 / 23) * 100}%;width:${(3.3 / 23) * 100}%"><span>No data since ${AT}</span></div></div>
      <div class="axis"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:00</span></div>`;
    const p = D.series.price, lo = [...p].sort((a, b) => a - b)[7], hi = [...p].sort((a, b) => b - a)[7];
    return `<div class="chartbox" style="height:${h}px"><div class="bands">${p.map((v) => `<i class="${v <= lo ? 'cheap' : v >= hi ? 'dear' : ''}"></i>`).join('')}</div>
      ${C.line({ w: 800, h, grid: col.line, nowIndex: 14, nowColor: col.ink3, series: [{ values: D.series.forecast, color: col.ink3, dash: '4 4', width: 1.5 }, { values: D.series.actual, color: col.fern, width: 2.5, fill: col.fern + '14' }] })}</div>
      <div class="axis"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:00</span></div>
      <div class="legend" style="margin-top:10px"><span><i style="background:${col.fern}"></i>Actual</span><span><i style="background:${col.ink3}"></i>Forecast</span><span><i style="background:color-mix(in srgb,${col.fern} 20%,transparent)"></i>Cheap hours</span><span><i style="background:color-mix(in srgb,${col.ember} 20%,transparent)"></i>Expensive hours</span></div>`;
  }

  function attention() {
    const items = [
      ...(ST === 'offline' ? [['alert', 'Alert · ' + AT, 'Plant gateway is offline', 'vatp-gw-01 · no data for 3 h 18 min', I.bell, '#']] : []),
      ...D.alerts.filter((a) => a.status === 'new').map((a) => ['alert', 'Alert', a.title, a.where, I.bell, 'alerts.html']),
      ['energy', 'Energy check', 'AHU-2 runs at full speed after hours', 'Innovation Centre · ~€9/day', I.chart, 'energy.html'],
      ['model', 'Suggestion', 'Pre-heat hot water 01:00–05:00', 'Cheapest hours tonight', I.spark, 'energy.html'],
    ];
    return `<ul class="att">${items.map(([k, kl, t, s, ic, href]) => `<li><span class="ic ${k}">${ic}</span><div><div class="k">${kl}</div><div class="t">${t}</div><div class="mute" style="font-size:12px">${s}</div></div><a class="btn" href="${href}" style="padding:6px 10px">Open</a></li>`).join('')}</ul>`;
  }

  function priceOutlook() {
    const next = D.series.price.slice(14).concat(D.series.price.slice(0, 2));
    const max = Math.max(...next), sorted = [...next].sort((a, b) => a - b);
    return `<div class="price">${next.map((v) => `<i class="${v <= sorted[3] ? 'cheap' : v >= sorted[8] ? 'dear' : 'mid'}" style="height:${(v / max) * 100}%" title="${v} €/MWh"></i>`).join('')}</div>
      <div class="price-ax">${next.map((_, i) => `<span>${String((14 + i) % 24).padStart(2, '0')}</span>`).join('')}</div>
      <p class="mute" style="margin:12px 0 0;font-size:13px">Most expensive at <b style="color:var(--ink)">17:00 (139 €/MWh)</b>. Cheapest after midnight.</p>`;
  }

  function plant() {
    return `<div class="cop"><div class="ring">${C.ring({ size: 86, thickness: 9, pct: 4.1 / 5, color: col.fern, track: col.surface, center: '4.1', centerColor: col.ink })}</div>
      <div>${ST === 'offline' ? `<div style="font-weight:600">Last known at ${AT}</div><div class="mute" style="font-size:13px">The heat pump keeps running on its own schedule. Live readings resume when the gateway reconnects.</div>` : '<div style="font-weight:600">Heat pump is running efficiently</div><div class="mute" style="font-size:13px">COP 4.1 today, up 0.3 on last week · 9.5 run h so far</div>'}</div></div>
      <div class="plant">${D.plant.slice(0, 4).map((n) => `<div><span>${n.label}</span><b style="${n.state === 'warn' ? `color:${col.amber}` : ''}">${n.value}</b><span>${n.sub}</span></div>`).join('')}</div>`;
  }

  function buildings() {
    const max = Math.max(...D.buildings.map((b) => b.kwh));
    return `<div class="tablewrap"><table class="t"><thead><tr><th>Building</th><th>Energy today</th><th class="r">Indoor</th><th class="r">CO₂</th><th class="r">Comfort</th></tr></thead><tbody>
      ${D.buildings.map((b) => `<tr><td><b style="font-weight:600">${b.name}</b><div class="mute" style="font-size:12px">${b.floors} floors · ${f.n(b.area)} m²</div></td><td><div style="display:flex;gap:10px;align-items:center"><div class="meter" style="flex:1"><i style="width:${(b.kwh / max) * 100}%"></i></div><span class="num">${b.kwh} kWh</span></div></td><td class="r num">${b.temp} °C</td><td class="r num" style="${b.co2 > 700 ? `color:${col.ember}` : ''}">${b.co2}</td><td class="r num">${b.comfort}</td></tr>`).join('')}
    </tbody></table></div>`;
  }

  // ---------- data states (prototype) ----------
  function banner() {
    if (ST === 'error') return `<div class="banner err"><span class="ic alert">${I.bell}</span><div><b>Some data couldn’t load.</b> The forecast and the energy distribution didn’t respond. Other figures are up to date.</div><button class="btn" data-retry="Trying again…">Try again</button></div>`;
    if (ST === 'offline') return `<div class="banner off"><span class="ic energy">${I.cpu}</span><div><b>The plant gateway has been offline since ${AT}</b> (3 h 18 min). You’re seeing the last known values, and controls are paused until it reconnects.</div><a class="btn" href="#">View gateway</a></div>`;
    return '';
  }
  const sk = (w, h) => `<span class="skel" style="width:${w};height:${h}px"></span>`;
  const skCard = (cls, title, sub, body) => card(cls, title, sub, body);
  function loadingBody() {
    const rows = (n) => Array.from({ length: n }, (_, i) => `<div style="display:grid;grid-template-columns:34px 1fr;gap:12px;align-items:center;padding:10px 0">${sk('34px', 34)}<div>${sk(70 - i * 9 + '%', 13)}<div style="margin-top:6px">${sk(45 - i * 5 + '%', 11)}</div></div></div>`).join('');
    return `<div class="ph"><div><h1>Good afternoon, Elīna</h1><p>Tuesday 24 November · <span class="loading-dots">Loading live data</span></p></div></div>
      ${kpiCards(['energyToday', 'cost', 'cop', 'indoor', 'price'])}
      <div class="grid">
        ${skCard('c5', 'Needs attention', '', rows(4))}
        ${skCard('c7', 'Load forecast', 'kW · today', sk('100%', 210))}
        ${skCard('c7', 'Energy distribution', 'Where today’s energy went', sk('100%', 270))}
        ${skCard('c5', 'Heat-pump plant', 'Today so far', `<div style="display:flex;gap:16px;align-items:center">${sk('86px', 86).replace('skel', 'skel round')}<div style="flex:1">${sk('80%', 14)}<div style="margin-top:8px">${sk('60%', 12)}</div></div></div>`)}
      </div>`;
  }
  function emptyBody() {
    const steps = [['done', 'Connect the gateway', 'vatp-gw-02 is online'], ['now', 'Map devices to rooms', '3 of 18 mapped'], ['todo', 'Set comfort targets', 'Temperature and CO₂ ranges per room']];
    return `<div class="ph"><div><h1>Welcome, Elīna</h1><p>Business Incubator was added today. Figures appear here as its devices report in.</p></div></div>
      ${kpiCards(['energyToday', 'cost', 'cop', 'indoor', 'price'])}
      <div class="grid">
        ${card('c12', 'Get Business Incubator ready', '1 of 3 done', `<div class="meter" style="margin:4px 0 16px"><i style="width:33%"></i></div><ol class="setup">${steps.map(([st, t, sub], i) => `<li class="${st}"><span class="n">${st === 'done' ? '✓' : i + 1}</span><div><b>${t}</b><div class="mute" style="font-size:13px">${sub}</div></div>${st === 'now' ? '<button class="btn pri">Continue</button>' : ''}</li>`).join('')}</ol>`)}
        ${card('c5', 'Needs attention', '', `<div class="empty"><span class="ic model">${I.spark}</span><b>Nothing needs attention</b><p>Alerts and suggestions show up here once devices are reporting.</p></div>`)}
        ${card('c7', 'Load forecast', 'kW · today', `<div class="empty"><span class="ic energy">${I.chart}</span><b>The forecast needs 7 days of history</b><p>Day 1 of 7. We’ll start forecasting next Tuesday.</p><div class="meter" style="width:200px"><i style="width:14%"></i></div></div>`)}
      </div>`;
  }

  const pages = {
    dashboard() {
      if (ST === 'loading') return shell('dashboard', `<b>Dashboard</b><span class="hide-sm">· All buildings</span>`, loadingBody());
      if (ST === 'empty') return shell('dashboard', `<b>Dashboard</b><span class="hide-sm">· Business Incubator</span>`, emptyBody());
      const err = (what) => `<div class="cerr"><span class="ic alert">${I.bell}</span><div><b>Couldn’t load the ${what}</b><p>The server didn’t respond (error 502). Everything else on this page is up to date.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-retry="Trying again…">Try again</button><button class="btn ghost">Details</button></div></div></div>`;
      const isErr = ST === 'error';
      const devices = ST === 'offline' ? `<span style="color:var(--red)">●</span> Gateway offline since ${AT}` : `<span style="color:var(--green)">●</span> 212 of 218 devices online`;
      return shell('dashboard', `<b>Dashboard</b><span class="hide-sm">· All buildings</span>`, `
        ${banner()}
        <div class="ph"><div><h1>Good afternoon, Elīna</h1><p>Tuesday 24 November · Ventspils ${D.weather.temp} °C, overcast · ${devices}</p></div>
          <div class="acts"><div class="seg"><button aria-pressed="true">Today</button><button>7 days</button><button>30 days</button></div></div></div>
        ${kpiCards(['energyToday', 'cost', 'cop', 'indoor', 'price'])}
        <div class="grid">
          ${card('c5', 'Needs attention', `<span class="pill">${openNew + 2 + (ST === 'offline' ? 1 : 0)}</span>`, attention(), '<a class="lnk" href="alerts.html">All alerts →</a>')}
          ${card('c7', 'Load forecast', 'kW · today', isErr ? err('forecast') : loadChart(), '<a class="lnk" href="energy.html">Energy →</a>')}
          ${card('c7', 'Energy distribution', 'Where today’s energy went', isErr ? err('energy distribution') : sankey(), '<a class="lnk" href="energy.html">Breakdown →</a>')}
          ${card('c5' + (ST === 'offline' ? ' stale' : ''), 'Heat-pump plant', ST === 'offline' ? `Last known · ${AT}` : 'Today so far', plant(), '<a class="lnk" href="#">Schematic →</a>')}
          ${card('c5', 'Price outlook', 'Nord Pool day-ahead · next 12 h', priceOutlook())}
          ${card('c7', 'Buildings', '', buildings(), '<a class="lnk" href="#">All buildings →</a>')}
        </div>`);
    },

    energy() {
      const heat = (t) => `color-mix(in srgb, ${col.fern} ${Math.round(8 + t * 86)}%, ${col.card})`;
      return shell('energy', `<b>Energy</b><span class="hide-sm">· All buildings · Today</span>`, `
        <div class="ph"><div><h1>Energy</h1><p>1 284 kWh so far today, 8% less than last Tuesday.</p></div>
          <div class="acts"><div class="seg"><button aria-pressed="true">Day</button><button>Week</button><button>Month</button><button>Year</button></div><button class="btn">Compare</button><button class="btn pri">${I.down}Export</button></div></div>
        <div class="tabs" role="tablist" id="tabs">${['Overview', 'Breakdown', 'Cost', 'Carbon', 'Patterns'].map((t, i) => `<button role="tab" data-t="${t.toLowerCase()}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
        ${kpiCards(['energyToday', 'cost', 'carbon', 'cop'])}
        <div class="grid" id="ecards">
          ${card('c8', 'Energy distribution', 'Sources → uses · today', sankey(290), '', 'data-tabs="overview breakdown"')}
          ${card('c4', 'Source mix', 'today', `<div style="width:180px;height:180px;margin:6px auto 14px">${C.donut({ size: 180, thickness: 22, gap: 0.04, center: '1 284', centerColor: col.ink, parts: [{ value: 712, color: col.steel }, { value: 168, color: col.ember }, { value: 404, color: col.olive }] })}</div>
            <div class="legend" style="flex-direction:column;gap:8px"><span><i style="background:${col.steel}"></i>Grid · 712 kWh · 55%</span><span><i style="background:${col.ember}"></i>Solar PV · 168 kWh · 13%</span><span><i style="background:${col.olive}"></i>Geothermal · 404 kWh · 32%</span></div>`, '', 'data-tabs="overview breakdown carbon"')}
          ${card('c6', 'Cost over time', 'last 7 days · €', `<div style="height:180px">${C.bars({ w: 600, h: 180, values: D.week.cost, color: col.line2, highlight: 6, highlightColor: col.fern, radius: 6, gap: 0.4 })}</div><div class="axis">${D.week.days.map((d) => `<span>${d}</span>`).join('')}</div>`, '', 'data-tabs="overview cost"')}
          ${card('c6', 'Load vs price', 'today', loadChart(180), '', 'data-tabs="overview cost"')}
          ${card('c8', 'Consumption heat-map', 'kWh per hour · last 7 days', `<div style="display:grid;grid-template-columns:36px 1fr;gap:8px"><div class="mute" style="display:grid;font-size:11px;align-content:space-around">${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => `<span>${d}</span>`).join('')}</div><div style="height:180px">${C.heatmap({ data: D.series.heat, w: 900, h: 180, color: heat, gap: 3, radius: 3 })}</div></div><div class="axis" style="margin-left:44px"><span>00</span><span>06</span><span>12</span><span>18</span><span>23</span></div>`, '', 'data-tabs="overview patterns"')}
          ${card('c4', 'Insights', '', D.insights.map((i) => `<div class="insight"><span class="bar" style="background:${i.tone === 'good' ? col.green : i.tone === 'warn' ? col.amber : col.steel}"></span><div><b>${i.title}</b><p>${i.body}</p></div></div>`).join(''), '', 'data-tabs="overview patterns carbon"')}
          ${card('c12', 'Top consumers', 'today', `<div class="tablewrap"><table class="t"><thead><tr><th>Device</th><th>Location</th><th>Share of total</th><th class="r">kWh</th><th class="r">Cost</th></tr></thead><tbody>${D.topConsumers.map((t) => `<tr><td><b style="font-weight:600">${t.name}</b></td><td class="mute">${t.building}</td><td><div class="meter"><i style="width:${t.share * 7}%"></i></div></td><td class="r num">${t.kwh}</td><td class="r num">€${(t.kwh * 0.145).toFixed(0)}</td></tr>`).join('')}</tbody></table></div>`, '', 'data-tabs="overview breakdown cost"')}
        </div>`);
    },

    alerts() {
      const cnt = (fn) => D.alerts.filter(fn).length;
      return shell('alerts', `<b>Alerts</b><span class="hide-sm">· Triage inbox</span>`, `
        <div class="ph"><div><h1>Alerts</h1><p>${openNew} new, ${cnt((a) => ['ack', 'watching'].includes(a.status))} in progress. Sorted by severity, then age.</p></div>
          <div class="acts"><a class="btn" href="#">Alert rules</a><button class="btn pri">Acknowledge all new</button></div></div>
        <div class="sumstrip">
          ${[['Critical', cnt((a) => a.sev === 'critical' && a.status !== 'resolved'), col.red], ['Warning', cnt((a) => a.sev === 'warning' && a.status !== 'resolved'), col.amber], ['Info', cnt((a) => a.sev === 'info' && a.status !== 'resolved'), col.steel], ['Resolved this week', cnt((a) => a.status === 'resolved'), col.green]]
            .map(([l, n, c]) => `<div class="card"><span class="sw" style="background:${c}"></span><div><div class="n">${n}</div><div class="lab">${l}</div></div></div>`).join('')}
        </div>
        <div class="filters" id="filters">${[['open', 'Open'], ['new', 'New'], ['mine', 'Assigned to me'], ['resolved', 'Resolved'], ['all', 'All']].map(([k, l], i) => `<button class="chip" data-f="${k}" aria-pressed="${i === 0}">${l}</button>`).join('')}</div>
        <div class="inbox"><section class="card list" id="list"></section><aside class="card det" id="det"></aside></div>`);
    },
  };

  function wireAlerts() {
    let filter = 'open', sel = null;
    const order = { critical: 0, warning: 1, info: 2 };
    const pass = (a) => ({ open: a.status !== 'resolved', new: a.status === 'new', mine: a.owner === 'Elīna B.', resolved: a.status === 'resolved', all: true }[filter]);
    const draw = () => {
      const L = D.alerts.filter(pass).sort((a, b) => order[a.sev] - order[b.sev]);
      if (!L.find((a) => a.id === sel)) sel = L[0]?.id;
      document.getElementById('list').innerHTML = L.map((a) => `<button class="row ${a.id === sel ? 'on' : ''}" data-id="${a.id}"><span class="sv ${a.sev}"></span><span><b>${a.title}</b><small>${a.where}</small></span><span class="meta">${a.age} ago<br/><span class="st ${a.status}">${{ new: 'New', ack: 'Acknowledged', watching: 'Watching', resolved: 'Resolved' }[a.status]}</span></span></button>`).join('') || '<p class="mute" style="padding:14px">Nothing here. Nice.</p>';
      const a = D.alerts.find((x) => x.id === sel);
      document.getElementById('det').innerHTML = a ? `
        <div style="display:flex;gap:8px;align-items:center"><span class="st ${a.status}" style="margin:0">${{ new: 'New', ack: 'Acknowledged', watching: 'Watching', resolved: 'Resolved' }[a.status]}</span><span class="mute num" style="font-size:12px">${a.id}</span></div>
        <h2>${a.title}</h2><div class="mute">${a.where}</div>
        <div class="kv"><div><span>Current</span><b style="color:${a.sev === 'critical' ? col.red : col.amber}">${a.value}</b></div><div><span>Expected</span><b>${a.expected}</b></div><div><span>Device</span><b style="font-family:var(--sans);font-size:13px">${a.device}</b></div><div><span>Owner</span><b style="font-family:var(--sans);font-size:13px">${a.owner || 'Unassigned'}</b></div></div>
        <div style="height:80px;margin-bottom:14px">${C.line({ w: 380, h: 80, grid: col.line, series: [{ values: [18, 18.2, 17.9, 17.4, 16.8, 16.1, 15.4, 14.9, 14.4, 14.1], color: col.ember, width: 2, fill: col.ember + '14' }] })}</div>
        <div class="sug"><b>Suggested next step</b>${a.suggestion}</div>
        ${a.status !== 'resolved' ? `<div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap"><button class="btn pri" data-act="ack">Acknowledge</button><button class="btn" data-act="me">Assign to me</button><button class="btn" data-act="resolved">Resolve</button></div>` : ''}
        <ul class="tl"><li><b>${a.since}</b> · Rule fired: ${a.title.toLowerCase()}</li><li class="mute">${a.since} · Notified the on-call technician by email</li><li class="mute">Earlier · Value drifted outside its normal range for 12 min</li></ul>` : '';
    };
    document.getElementById('list').onclick = (e) => { const r = e.target.closest('.row'); if (r) { sel = r.dataset.id; draw(); } };
    document.getElementById('det').onclick = (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const a = D.alerts.find((x) => x.id === sel);
      if (b.dataset.act === 'ack') a.status = 'ack';
      if (b.dataset.act === 'resolved') a.status = 'resolved';
      if (b.dataset.act === 'me') a.owner = 'Elīna B.';
      draw();
    };
    document.getElementById('filters').onclick = (e) => {
      const c = e.target.closest('.chip'); if (!c) return;
      filter = c.dataset.f;
      document.querySelectorAll('.chip').forEach((x) => x.setAttribute('aria-pressed', x === c));
      draw();
    };
    draw();
  }

  function wireTabs() {
    document.getElementById('tabs').onclick = (e) => {
      const t = e.target.closest('[role=tab]'); if (!t) return;
      document.querySelectorAll('[role=tab]').forEach((x) => x.setAttribute('aria-selected', x === t));
      document.querySelectorAll('#ecards [data-tabs]').forEach((c) => { c.hidden = !c.dataset.tabs.split(' ').includes(t.dataset.t); });
    };
  }

  function applyTheme() {
    try { const t = localStorage.getItem('vatp-d-theme'); if (t) document.documentElement.dataset.theme = t; } catch (_) {}
  }

  function mount(page) {
    applyTheme();
    readCols();
    document.getElementById('root').innerHTML = pages[page]();
    document.getElementById('menu').onclick = (e) => { e.stopPropagation(); document.body.classList.toggle('nav-open'); };
    document.querySelector('.main').addEventListener('click', () => document.body.classList.remove('nav-open'));
    document.getElementById('theme').onclick = () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('vatp-d-theme', next); } catch (_) {}
      mount(page);
    };
    Palette.mount(document.getElementById('pal'), () => mount(page));
    if (page === 'alerts') wireAlerts();
    if (page === 'energy') wireTabs();
  }

  window.Refined = { mount, applyTheme };
})();

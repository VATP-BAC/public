/* Direction B — Nordic Calm. Top-nav shell + editorial page renderers. */
(function () {
  const D = window.VATP, C = window.Charts, f = window.fmt;
  const ST = (window.ProtoState && ProtoState.current) || 'normal', AT = '10:42';
  // ?theme=light|dark pins the theme (the deck pins B to light so it doesn't follow a dark OS).
  const qTheme = new URLSearchParams(location.search).get('theme');
  if (qTheme === 'light' || qTheme === 'dark') document.documentElement.dataset.theme = qTheme;
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  let col;
  const readCols = () => (col = { blue: css('--blue'), blue2: css('--blue-2'), green: css('--green'), amber: css('--amber'), red: css('--red'), line: css('--line'), birch: css('--birch'), ink: css('--ink'), muted: css('--muted'), faint: css('--faint'), paper: css('--paper') });

  const mark = `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="var(--blue)"/><path d="M5 20c4-3 7-3 11 0s7 3 11 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M16 6v9M12 10l4-4 4 4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const needs = D.alerts.filter((a) => a.status === 'new');

  function shell(active, body) {
    const links = [['dashboard', 'Today'], ['energy', 'Energy'], ['alerts', 'Alerts'], ['#', 'Buildings'], ['#', 'Comfort'], ['#', 'Reports']];
    return `
    <header class="top"><div class="top-in">
      <a class="mark" href="dashboard.html">${mark}VATP</a>
      <nav class="links" aria-label="Main">${links.map(([id, l]) => `<a href="${id === '#' ? '#' : id + '.html'}" ${id === active ? 'aria-current="page"' : ''}>${l}${id === 'alerts' ? `<span class="c">${needs.length}</span>` : ''}</a>`).join('')}</nav>
      <div class="right"><button class="pillbtn">All buildings ▾</button><button class="pillbtn" id="theme" aria-label="Toggle theme">◐</button><div class="me" title="${D.user.name}">${D.user.initials}</div></div>
    </div></header>
    <main class="page">${body}</main>`;
  }

  const story = (tone, tag, title, big, unit, viz, more, href = 'energy.html') => `
    <article class="card story ${ST === 'offline' || ST === 'error' ? 'stale' : ''}"><span class="tag ${tone}">${tag}</span>${ST === 'offline' ? `<span class="stamp">as of ${AT}</span>` : ST === 'error' ? '<span class="stamp">from 13:55</span>' : ''}<h3>${title}</h3>
    <div class="big num">${big}<small>${unit}</small></div><div class="viz">${viz}</div><a class="more" href="${href}">${more} →</a></article>`;

  function whereBars(limit) {
    const uses = [...D.distribution.uses].sort((a, b) => b.value - a.value).slice(0, limit);
    const max = uses[0].value, tot = D.distribution.uses.reduce((a, u) => a + u.value, 0);
    return `<div class="where">${uses.map((u) => `<div class="row"><span>${u.label}</span><div class="bar"><i style="width:${(u.value / max) * 100}%"></i></div><span class="num">${Math.round((u.value / tot) * 100)}%</span></div>`).join('')}</div>`;
  }

  const pages = {
    dashboard() {
      const wk = D.week, weekTot = wk.energy.reduce((a, b) => a + b, 0);
      const k = D.kpis;
      if (ST === 'loading') return shell('dashboard', loadingBody());
      if (ST === 'empty') return shell('dashboard', emptyBody());
      const hero = {
        error: `<h1>Good afternoon, Elīna. <em>We couldn’t fetch today’s numbers.</em></h1>
          <p>This one is on our side, not the buildings’. What you see below is from 13:55, and we’ll keep trying quietly in the background.</p>
          <div class="note warn"><span>Nothing for you to fix.</span><button class="btn sm primary" data-retry="Trying again…">Try again now</button><a class="btn sm ghost" href="#">Contact support</a></div>`,
        offline: `<h1>The campus went quiet at ${AT}. <em>The buildings are fine.</em></h1>
          <p>We lost the connection to the plant server, so new numbers aren’t coming in. Heating and ventilation keep running on their own schedule in the meantime.</p>
          <ol class="note steps"><li><b>${AT}</b>Connection to the plant server lost</li><li><b>10:47</b>On-call technician notified</li><li><b>Now</b>Waiting for it to reconnect. The 4G backup is down too.</li></ol>`,
      }[ST] || `<h1>Good afternoon, Elīna. The campus is <em>running calmly</em> today.</h1>
          <p>Energy use is ${Math.abs(k.energyToday.delta)}% below last Tuesday and rooms are comfortable. Two things in the Business Incubator need you before the end of the day.</p>`;
      const gw = ST === 'offline' ? `<article class="card acard"><div class="meta"><span class="dot critical"></span>Urgent · since ${AT}</div><h3>Plant server is unreachable</h3><span class="where">Plant room · gateway vatp-gw-01</span><div class="sug"><span>What we suggest</span>Nothing yet. The technician is on it. We’ll tell you when numbers are back.</div></article>` : '';
      return shell('dashboard', `
        <section class="hero">
          <div class="eyebrow">Tuesday, 24 November · ${D.site.name}</div>
          ${hero}
          ${ST === 'normal' ? `<div class="weather">☁︎ ${D.weather.temp} °C in Ventspils · ${D.weather.desc}</div>` : ''}
        </section>

        <div class="stories">
          ${story('good', '● Comfort', 'Rooms feel good: 87 of 100', k.indoor.value, '°C average', C.line({ w: 300, h: 72, pad: 4, series: [{ values: [20.8, 20.9, 21.1, 21.3, 21.5, 21.4, 21.4, 21.6, 21.4], color: col.green, width: 2.5, fill: col.green + '18' }] }), 'See rooms')}
          ${story('good', '↓ Cost', 'Spending is down 11% on last week', '€' + k.cost.value, 'so far today', C.bars({ w: 300, h: 72, values: wk.cost, color: col.birch, highlight: 6, highlightColor: col.blue, radius: 6, gap: 0.35 }), 'Where it went')}
          ${story('info', '◎ Carbon', 'Geothermal covered a third of today', k.carbon.value, 't CO₂e', `<div style="display:flex;gap:14px;align-items:center;height:72px"><div style="width:72px;height:72px">${C.donut({ size: 72, thickness: 10, gap: 0.06, parts: [{ value: 404, color: col.green }, { value: 168, color: col.amber }, { value: 712, color: col.blue2 }] })}</div><div class="legend" style="flex-direction:column;gap:2px"><span><i style="background:${col.green}"></i>Geothermal 31%</span><span><i style="background:${col.amber}"></i>Solar 13%</span><span><i style="background:${col.blue2}"></i>Grid 56%</span></div></div>`, 'Carbon story')}
        </div>

        <div class="section-h"><h2>What changed</h2><span class="faint">since yesterday</span></div>
        <div class="two">
          <div class="card"><ul class="feed">${D.insights.map((i) => `<li><span class="ic ${i.tone}">${i.tone === 'good' ? '↓' : i.tone === 'warn' ? '!' : 'i'}</span><div><b>${i.title}</b><p>${i.body}</p></div></li>`).join('')}</ul></div>
          <div class="card goal">
            <div class="eyebrow">Weekly goal</div>
            <div class="ringwrap">${C.ring({ size: 180, thickness: 14, pct: weekTot / wk.goal, color: col.blue, track: col.birch, center: Math.round((weekTot / wk.goal) * 100) + '%', centerColor: col.ink })}</div>
            <p class="muted" style="margin:0"><b class="num" style="color:var(--ink)">${f.n(weekTot)}</b> of ${f.n(wk.goal)} kWh used.<br/>On track to finish the week <b style="color:var(--green)">6% under</b>.</p>
          </div>
        </div>

        <div class="section-h"><h2>Where energy went today</h2><a href="energy.html">Read the full report →</a></div>
        <div class="card">${whereBars(5)}</div>

        <div class="section-h"><h2>Needs you</h2><a href="alerts.html">All alerts →</a></div>
        <div class="two" style="grid-template-columns:1fr 1fr;margin-top:0">${gw}${(gw ? needs.slice(0, 1) : needs).map(alertCard).join('')}</div>`);
    },

    energy() {
      const wk = D.week;
      const heatColor = (t) => `color-mix(in srgb, ${col.blue} ${Math.round(8 + t * 82)}%, ${col.paper})`;
      return shell('energy', `
        <section class="hero">
          <div class="eyebrow">Energy report · Today, 24 November</div>
          <h1>1 284 kWh, and <em>most of it kept people warm.</em></h1>
          <p>A short read on where the campus energy went, what it cost, and three things worth doing this week.</p>
        </section>
        <div class="report">
          <ol class="toc" id="toc">
            <li><a href="#where" class="on">1 · Where it went</a></li><li><a href="#cost">2 · What it cost</a></li>
            <li><a href="#carbon">3 · Carbon</a></li><li><a href="#when">4 · When we use it</a></li><li><a href="#do">5 · What to do</a></li>
          </ol>
          <div>
            <section class="chapter" id="where"><div class="n">Chapter 1</div><h2>Where it went</h2>
              <p class="lede"><b>Space heating took 42%</b>, and two-thirds of that came from the ground through the heat pump, not the grid.</p>
              <div class="card" style="padding:28px">${C.sankey({ w: 760, h: 300, data: D.distribution, text: col.ink, muted: col.faint, useColor: col.blue, colors: { grid: col.blue2, pv: col.amber, geo: col.green }, labelW: 170, nodeW: 8, nodeRadius: 4, gap: 14, flowOpacity: 0.22, fontSize: 13 })}</div>
            </section>
            <section class="chapter" id="cost"><div class="n">Chapter 2</div><h2>What it cost</h2>
              <p class="lede">Today cost <b>€186</b>. That is <b>€23 less</b> than last Tuesday, mostly because the heat pump ran during cheaper morning hours.</p>
              <div class="card"><div style="height:200px">${C.bars({ w: 700, h: 200, values: wk.cost, color: col.birch, highlight: 6, highlightColor: col.blue, radius: 8, gap: 0.45 })}</div>
              <div class="days">${wk.days.map((d) => `<span>${d}</span>`).join('')}</div></div>
            </section>
            <section class="chapter" id="carbon"><div class="n">Chapter 3</div><h2>Carbon</h2>
              <p class="lede">About <b>0.21 tonnes of CO₂e</b> today, roughly what a car emits driving Ventspils to Rīga and back. Solar added 168 kWh despite the clouds.</p>
              <div class="card" style="display:flex;gap:32px;align-items:center;flex-wrap:wrap"><div style="width:180px;height:180px">${C.donut({ size: 180, thickness: 22, gap: 0.04, center: '0.21 t', centerColor: col.ink, parts: [{ value: 404, color: col.green }, { value: 168, color: col.amber }, { value: 712, color: col.blue2 }] })}</div>
              <div class="legend" style="flex-direction:column;gap:10px;font-size:15px"><span><i style="background:${col.green}"></i>Geothermal: 404 kWh, near-zero carbon</span><span><i style="background:${col.amber}"></i>Solar PV: 168 kWh, zero carbon</span><span><i style="background:${col.blue2}"></i>Grid: 712 kWh, 0.29 kg/kWh</span></div></div>
            </section>
            <section class="chapter" id="when"><div class="n">Chapter 4</div><h2>When we use it</h2>
              <p class="lede">Weekdays look the same, ramping up at 07:00. <b>Weekend nights still run at 45%</b> of the weekday load. That base load is worth a look.</p>
              <div class="card"><div style="height:180px">${C.heatmap({ data: D.series.heat, w: 960, h: 180, color: heatColor, gap: 3, radius: 4 })}</div><div class="axis"><span>Mon–Sun · 00:00</span><span>12:00</span><span>23:00</span></div></div>
            </section>
            <section class="chapter" id="do"><div class="n">Chapter 5</div><h2>What to do this week</h2>
              <p class="lede">Three small changes, ranked by how much they would save.</p>
              <div class="recos">
                ${[['€9 / day', 'Schedule AHU-2 to stop at 19:00', 'Its fan runs at full speed for 4 hours after everyone has left.'], ['€4 / day', 'Pre-heat hot water between 01:00 and 05:00', 'The spot price is 40% lower overnight, and the tank holds heat well.'], ['3% COP', 'Widen buffer tank hysteresis to 4 K', 'This stops the heat pump short cycling and extends compressor life.']]
                  .map(([s, t, b]) => `<article class="card reco"><div class="save">${s}</div><h3>${t}</h3><p>${b}</p><button class="btn sm primary">Plan it</button> <button class="btn sm ghost">Not now</button></article>`).join('')}
              </div>
            </section>
          </div>
        </div>`);
    },

    alerts() {
      const lanes = [
        ['new', 'Needs you', 'Someone should act on these today.'],
        ['watch', 'Watching', 'Acknowledged and owned. We’ll tell you if they get worse.'],
        ['resolved', 'Resolved', 'Closed this week.'],
      ];
      const inLane = (k, a) => (k === 'new' ? a.status === 'new' : k === 'watch' ? ['ack', 'watching'].includes(a.status) : a.status === 'resolved');
      return shell('alerts', `
        <section class="hero"><div class="eyebrow">Alerts</div><h1>Two things need you. <em>Everything else is in hand.</em></h1>
        <p>Alerts are grouped by what you should do about them, not by how technical they are.</p></section>
        <div class="lanes" id="lanes">${lanes.map(([k, t, p]) => `<section class="lane ${k === 'resolved' ? 'done' : ''}" data-lane="${k}"><h2>${t}<span class="c">${D.alerts.filter((a) => inLane(k, a)).length}</span></h2><p>${p}</p>${D.alerts.filter((a) => inLane(k, a)).map(alertCard).join('')}</section>`).join('')}</div>`);
    },
  };

  // ---------- data states (prototype) ----------
  const sk = (w, h = 14, extra = '') => `<span class="skel" style="width:${w};height:${h}px;${extra}"></span>`;
  function loadingBody() {
    const card = () => `<article class="card story">${sk('90px', 22, 'border-radius:999px')}<div style="margin:16px 0 8px">${sk('85%', 20)}</div>${sk('60%', 20)}<div style="margin:22px 0 0">${sk('45%', 40)}</div><div style="margin-top:18px">${sk('100%', 72, 'border-radius:12px')}</div></article>`;
    return `<section class="hero"><div class="eyebrow">Tuesday, 24 November · ${D.site.name}</div>
        <h1>Good afternoon, Elīna. <em class="breathe">Putting today’s briefing together…</em></h1>
        <p>This usually takes a few seconds.</p></section>
      <div class="stories">${card()}${card()}${card()}</div>
      <div class="section-h"><h2>What changed</h2><span class="faint">since yesterday</span></div>
      <div class="card">${[0, 1, 2].map(() => `<div style="display:grid;grid-template-columns:34px 1fr;gap:14px;padding:12px 0">${sk('34px', 34, 'border-radius:50%')}<div>${sk('50%', 14)}<div style="margin-top:8px">${sk('80%', 12)}</div></div></div>`).join('')}</div>`;
  }
  function emptyBody() {
    const prev = [['● Comfort', 'good', 'How the rooms feel, scored out of 100', 'Ready tomorrow morning'], ['↓ Cost', 'info', 'What today cost, compared with last week', 'Ready in 7 days'], ['◎ Carbon', 'info', 'How much came from the ground and the sun', 'Ready tomorrow morning']];
    return `<section class="hero"><div class="eyebrow">Tuesday, 24 November · Business Incubator</div>
        <h1>Welcome, Elīna. <em>Your first briefing arrives tomorrow.</em></h1>
        <p>We started listening to the Business Incubator at 09:12. After a full day we can tell you how comfortable it is, what it costs and where the energy goes.</p>
        <div class="progress"><div class="bar"><i style="width:${(5 / 24) * 100}%"></i></div><span><b>5 h</b> of the first 24 h collected</span></div></section>
      <div class="stories">${prev.map(([t, tone, h, when]) => `<article class="card story ghost"><span class="tag ${tone}">${t}</span><h3>${h}</h3><div class="placeholder"></div><span class="faint" style="font-size:14px">${when}</span></article>`).join('')}</div>
      <div class="section-h"><h2>While you wait</h2></div>
      <div class="two" style="grid-template-columns:1fr 1fr;margin-top:0">
        <article class="card"><h3 style="margin:0 0 6px;font-size:20px">Set a weekly energy goal</h3><p class="muted" style="margin:0 0 16px">We’ll use it to tell you whether a week went well. You can change it any time.</p><button class="btn sm primary">Set a goal</button></article>
        <article class="card"><h3 style="margin:0 0 6px;font-size:20px">Invite a colleague</h3><p class="muted" style="margin:0 0 16px">The building manager or the technician will get the same briefing every morning.</p><button class="btn sm">Invite someone</button></article>
      </div>`;
  }

  const plain = { critical: 'Urgent', warning: 'Worth a look', info: 'For your information' };
  function alertCard(a) {
    const acts = a.status === 'new'
      ? `<button class="btn sm primary" data-act="mine">I’ll handle it</button><button class="btn sm" data-act="snooze">Snooze 1 h</button><button class="btn sm ghost" data-act="fine">It’s fine</button>`
      : a.status === 'resolved' ? '' : `<button class="btn sm" data-act="fine">Mark resolved</button><span class="faint" style="font-size:13px;align-self:center">Owner: ${a.owner}</span>`;
    return `<article class="card acard" data-id="${a.id}"><div class="meta"><span class="dot ${a.sev}"></span>${plain[a.sev]} · ${a.age} ago</div>
      <h3>${a.title}</h3><span class="where">${a.where}</span>
      ${a.status !== 'resolved' ? `<div class="val">Now <b>${a.value}</b>, should be ${a.expected}</div><div class="sug"><span>What we suggest</span>${a.suggestion}</div>` : `<div class="val muted">${a.suggestion}</div>`}
      ${acts ? `<div class="acts">${acts}</div>` : ''}</article>`;
  }

  function wireAlerts() {
    document.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const card = b.closest('.acard'), a = D.alerts.find((x) => x.id === card.dataset.id);
      if (b.dataset.act === 'mine') { a.status = 'ack'; a.owner = 'Elīna B.'; }
      if (b.dataset.act === 'fine') a.status = 'resolved';
      if (b.dataset.act === 'snooze') a.status = 'watching', (a.owner = 'Snoozed');
      card.classList.add('leaving');
      setTimeout(() => mount(current), 220);
    });
  }
  let current = 'dashboard';

  function wireToc() {
    const links = [...document.querySelectorAll('#toc a')];
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) links.forEach((l) => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.chapter').forEach((c) => io.observe(c));
  }

  let wired = false;
  function mount(page) {
    readCols();
    current = page;
    document.getElementById('root').innerHTML = pages[page]();
    document.getElementById('theme').onclick = () => {
      const root = document.documentElement;
      const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      mount(page);
    };
    if (page === 'energy') wireToc();
    if (!wired) { wireAlerts(); wired = true; }
  }

  window.NordicCalm = { mount, mark };
})();

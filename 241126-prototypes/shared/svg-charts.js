/* Tiny dependency-free SVG chart helpers. Each returns an SVG string.
   Colors are passed in, so every direction can theme them with its own tokens. */
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function scale(values, min, max) {
    const lo = min ?? Math.min(...values);
    const hi = max ?? Math.max(...values);
    return (v) => (hi === lo ? 0.5 : (v - lo) / (hi - lo));
  }

  // Multi-series line/area chart. series: [{values, color, width, dash, fill}]
  function line(o) {
    const w = o.w || 600, h = o.h || 200, pad = o.pad ?? 6;
    const n = o.n || Math.max(...o.series.map((s) => s.values.length));
    const all = o.series.flatMap((s) => s.values);
    const y = scale(all, o.min ?? Math.min(...all) * 0.9, o.max ?? Math.max(...all) * 1.05);
    const px = (i) => pad + (i / (n - 1)) * (w - pad * 2);
    const py = (v) => h - pad - y(v) * (h - pad * 2);
    let out = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" class="chart" role="img" aria-label="${esc(o.label || 'chart')}">`;
    if (o.grid) for (let g = 1; g < 4; g++) out += `<line x1="0" x2="${w}" y1="${(h / 4) * g}" y2="${(h / 4) * g}" stroke="${o.grid}" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
    if (o.nowIndex != null) out += `<line x1="${px(o.nowIndex)}" x2="${px(o.nowIndex)}" y1="0" y2="${h}" stroke="${o.nowColor || o.grid || '#888'}" stroke-dasharray="3 3" vector-effect="non-scaling-stroke"/>`;
    o.series.forEach((s) => {
      const pts = s.values.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`);
      if (s.fill) out += `<polygon points="${px(0)},${h} ${pts.join(' ')} ${px(s.values.length - 1)},${h}" fill="${s.fill}" stroke="none"/>`;
      out += `<polyline points="${pts.join(' ')}" fill="none" stroke="${s.color}" stroke-width="${s.width || 2}" ${s.dash ? `stroke-dasharray="${s.dash}"` : ''} stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`;
    });
    return out + '</svg>';
  }

  function spark(values, color, w = 120, h = 32, fill) {
    return line({ w, h, pad: 2, series: [{ values, color, width: 1.5, fill }] });
  }

  // Vertical bars. highlight = index to color differently.
  function bars(o) {
    const w = o.w || 600, h = o.h || 180, gap = o.gap ?? 0.28;
    const max = o.max || Math.max(...o.values) * 1.08;
    const bw = w / o.values.length;
    let out = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" class="chart" role="img" aria-label="${esc(o.label || 'bar chart')}">`;
    o.values.forEach((v, i) => {
      const bh = (v / max) * h;
      const r = o.radius ?? 3;
      out += `<rect x="${i * bw + (bw * gap) / 2}" y="${h - bh}" width="${bw * (1 - gap)}" height="${bh}" rx="${r}" fill="${i === o.highlight ? o.highlightColor : o.color}"/>`;
    });
    return out + '</svg>';
  }

  function arc(cx, cy, r, a0, a1) {
    const p = (a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    const [x0, y0] = p(a0), [x1, y1] = p(a1);
    return `M${x0},${y0} A${r},${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1},${y1}`;
  }

  // Donut: parts [{value, color}]
  function donut(o) {
    const s = o.size || 160, t = o.thickness || 18, r = s / 2 - t / 2, c = s / 2;
    const total = o.parts.reduce((a, p) => a + p.value, 0);
    let a = -Math.PI / 2, out = `<svg viewBox="0 0 ${s} ${s}" class="chart donut" role="img" aria-label="${esc(o.label || 'donut')}">`;
    if (o.track) out += `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${o.track}" stroke-width="${t}"/>`;
    o.parts.forEach((p) => {
      const a1 = a + (p.value / total) * Math.PI * 2 - (o.gap || 0.02);
      out += `<path d="${arc(c, c, r, a, a1)}" fill="none" stroke="${p.color}" stroke-width="${t}" stroke-linecap="${o.round ? 'round' : 'butt'}"/>`;
      a = a1 + (o.gap || 0.02);
    });
    if (o.center) out += `<text x="${c}" y="${c}" text-anchor="middle" dominant-baseline="central" class="donut-center" fill="${o.centerColor || 'currentColor'}">${esc(o.center)}</text>`;
    return out + '</svg>';
  }

  function ring(o) {
    const pct = Math.max(0, Math.min(1, o.pct));
    return donut({ size: o.size, thickness: o.thickness, track: o.track, round: true, gap: 0, center: o.center, centerColor: o.centerColor, parts: [{ value: pct, color: o.color }, { value: 1 - pct + 1e-6, color: 'transparent' }] });
  }

  // Heatmap: data[row][col], color(t) => css color, t in 0..1
  function heatmap(o) {
    const rows = o.data.length, cols = o.data[0].length;
    const w = o.w || cols * 14, h = o.h || rows * 14, g = o.gap ?? 2;
    const flat = o.data.flat(), t = scale(flat);
    const cw = w / cols, ch = h / rows;
    let out = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" class="chart" role="img" aria-label="${esc(o.label || 'heatmap')}">`;
    o.data.forEach((row, r) => row.forEach((v, c) => {
      out += `<rect x="${c * cw + g / 2}" y="${r * ch + g / 2}" width="${cw - g}" height="${ch - g}" rx="${o.radius ?? 2}" fill="${o.color(t(v))}"><title>${esc(v)} kWh</title></rect>`;
    }));
    return out + '</svg>';
  }

  // Sankey-lite for the Energy distribution concept.
  function sankey(o) {
    const w = o.w || 640, h = o.h || 300, nw = o.nodeW || 12, gap = o.gap ?? 10;
    const { sources, uses, flows } = o.data;
    const total = sources.reduce((a, s) => a + s.value, 0);
    const k = (h - gap * (Math.max(sources.length, uses.length) - 1)) / total;
    const lx = o.labelW || 150, rx = w - (o.labelW || 150) - nw;
    const pos = {};
    let yy = 0;
    sources.forEach((s) => { pos[s.id] = { x: lx, y: yy, h: s.value * k, off: 0 }; yy += s.value * k + gap; });
    const usedTotal = uses.reduce((a, u) => a + u.value, 0);
    const kr = (h - gap * (uses.length - 1)) / usedTotal;
    yy = 0;
    uses.forEach((u) => { pos[u.id] = { x: rx, y: yy, h: u.value * kr, off: 0 }; yy += u.value * kr + gap; });
    let out = `<svg viewBox="0 0 ${w} ${h}" class="chart sankey" role="img" aria-label="Energy distribution from sources to uses">`;
    flows.forEach(([a, b, v]) => {
      const s = pos[a], t = pos[b];
      const sh = v * k, th = v * kr;
      const y0 = s.y + s.off, y1 = t.y + t.off;
      s.off += sh; t.off += th;
      const x0 = s.x + nw, x1 = t.x, mx = (x0 + x1) / 2;
      out += `<path d="M${x0},${y0} C${mx},${y0} ${mx},${y1} ${x1},${y1} L${x1},${y1 + th} C${mx},${y1 + th} ${mx},${y0 + sh} ${x0},${y0 + sh} Z" fill="${o.colors[a]}" opacity="${o.flowOpacity ?? 0.35}"><title>${esc(a)} → ${esc(b)}: ${v} kWh</title></path>`;
    });
    const fs = o.fontSize || 12;
    sources.forEach((s) => {
      const p = pos[s.id];
      out += `<rect x="${p.x}" y="${p.y}" width="${nw}" height="${p.h}" rx="${o.nodeRadius ?? 2}" fill="${o.colors[s.id]}"/>`;
      out += `<text x="${p.x - 8}" y="${p.y + p.h / 2 - fs * 0.35}" text-anchor="end" font-size="${fs}" fill="${o.text}">${esc(s.label)}</text>`;
      out += `<text x="${p.x - 8}" y="${p.y + p.h / 2 + fs * 0.95}" text-anchor="end" font-size="${fs * 0.92}" fill="${o.muted || o.text}" class="num">${fmt.n(s.value)} kWh</text>`;
    });
    uses.forEach((u) => {
      const p = pos[u.id];
      out += `<rect x="${p.x}" y="${p.y}" width="${nw}" height="${p.h}" rx="${o.nodeRadius ?? 2}" fill="${o.useColor || o.text}"/>`;
      out += `<text x="${p.x + nw + 8}" y="${p.y + p.h / 2 - fs * 0.35}" font-size="${fs}" fill="${o.text}">${esc(u.label)}</text>`;
      out += `<text x="${p.x + nw + 8}" y="${p.y + p.h / 2 + fs * 0.95}" font-size="${fs * 0.92}" fill="${o.muted || o.text}" class="num">${fmt.n(u.value)} kWh</text>`;
    });
    return out + '</svg>';
  }

  window.Charts = { line, spark, bars, donut, ring, heatmap, sankey, esc };
})();

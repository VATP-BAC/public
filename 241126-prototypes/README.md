# VATP UI directions (prototypes)

These are static, clickable HTML prototypes of four UI directions (three new UX ideas plus a face-lift of today's app), made so the team can choose one. They have no build step and no real data.

## Open

You can open `index.html` directly in a browser. For the most reliable result, serve the folder:

```bash
python3 -m http.server 8765 --directory prototypes/ui-directions
```

Then go to http://localhost:8765.

## Present

`presentation.html` is a deck for the team review, in Latvian. `presentation-en.html` is the same deck in English. It has 9 slides, and each direction's slide has a live, clickable screen with pros, cons and a "pick this if" line. There is also a comparison table and a vote counter.

- **← / →**, **Space** or a clicker (Page Up/Down) moves between slides.
- **N** shows the speaker notes.
- **F** goes full screen.
- **P** prints, which you can save as PDF.

## Directions

| | Who it's for | How it works |
|---|---|---|
| **A · Control Room** (`a-control-room/`) | Operators | Dark, dense layout with an icon rail, ⌘K palette, live ticker, tiles you can drag, and keyboard alert triage |
| **B · Nordic Calm** (`b-nordic-calm/`) | Managers, occupants | Light, editorial layout with top nav, a "Today" briefing, energy told as a story, and alerts in lanes |
| **C · Spatial** (`c-spatial/`) | Mixed users, demos | An isometric campus map you navigate on, with glass panels, a time scrubber and alert pins |
| **D · Refined** (`d-refined/`) | Same users as today | Today's brand, sidebar and pages, polished: one card style, serif KPIs, energy tabs, an alerts inbox, and dark mode. A swatch button switches between 4 colour/font presets |

Each direction has the same four screens: `login.html`, `dashboard.html`, `energy.html` and `alerts.html`.

The floating pill on every screen switches direction on the same screen. Press **H** to hide it.

On the dashboard, the pill also has a **State** menu (or add `?state=` to the URL). It shows how each direction deals with missing data:

| State | What it simulates |
|---|---|
| `loading` | Data is still arriving |
| `empty` | A new site or building with no devices reporting yet |
| `error` | Part of the API failed; live readings still work. **Retry** returns to the normal state |
| `offline` | The plant gateway has been unreachable since 10:42, so values are frozen |

Switching direction keeps the chosen state.

## Files

- `shared/mock-data.js` holds the single dataset all directions use.
- `shared/svg-charts.js` has small SVG chart helpers (line, bars, donut, ring, heatmap, sankey) with no external libraries.
- `shared/switcher.js` is the prototype navigation pill.

# VATP Public Presentations

Public-facing presentations for the **VATP HVAC AI Platform** (IPCEI-CIS programme, Ventspils Augsto Tehnoloģiju Parks).

Each subfolder is a self-contained HTML presentation. The repo is deployed via GitHub Pages from `main`.

**Live site:** https://vatp-bac.github.io/public/

## Presentations

| Presentation | Audience | Language | Live | Source |
|---|---|---|---|---|
| **VATP HVAC AI Platforma** | Project overview, prototype phase | LV | [view](https://vatp-bac.github.io/public/vatp-hvac-ai-platforma/) | [`vatp-hvac-ai-platforma/`](./vatp-hvac-ai-platforma/) |
| **Partner Technical Overview** | Technical partners | EN | [view](https://vatp-bac.github.io/public/partner-overview/) | [`partner-overview/`](./partner-overview/) |
| **AI apmācība · 1. modulis — AI pamati** | Training module 1 — AI foundations | LV | [view](https://vatp-bac.github.io/public/training-module-1-ai-foundations/) | [`training-module-1-ai-foundations/`](./training-module-1-ai-foundations/) |

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Pushes to `main` trigger the GitHub Pages workflow in [`.github/workflows/`](./.github/workflows/) and publish the site automatically.

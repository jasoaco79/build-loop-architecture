# Chicago Build Loop — handoff

Static architecture microsite for Iterate Consulting’s Chicago desk. Design-only. **HOLD live.**

## How to serve (local preview only)

From the repo root:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

Any static file server works (`npx serve`, `python3 -m http.server`, nginx `root`). There is no build step, no Node toolchain, and no backend.

Entry file: `index.html`  
Styles: `css/site.css`  
Lockup B: `assets/lockup-b.svg`

## HOLD — no live, no DNS, no Duck cutover

**Do not ship this to a live host, DuckDNS, or any public DNS until Jason says yes.**

- No production deploy
- No Duck cutover
- No DNS records
- No merge to a live branch without Jason’s explicit yes
- `noindex` is set on the page as a belt-and-suspenders hold, not a substitute for keeping it off the public web

This repo is architecture documentation. It is not a product launch.

## Plate source of truth

Visual + copy lock lives on branch **`design/sot`**.

Locked files (do not invent color, thesis, roles, writers, Slack rooms, or handoff names):

- `design/BRIEF.md` — color + copy lock
- `design/lockup-b.svg` — Lockup B
- `design/plates/01-hero.png` … `07-lifecycle.png` — visual truth
- Matching plate HTML on the same branch (fixed 1440×900 / 390×844 artboards)

To refresh the SoT into a working tree:

```bash
git fetch origin design/sot
git checkout origin/design/sot -- design/
```

Site sections map 1:1 to plates 01–07:

| Plate | Section |
|-------|---------|
| 01 hero | `#thesis` |
| 02 loop | `#loop` |
| 03 writers | `#writers` |
| 04 failover | `#failover` |
| 05 Dallas | `#dallas` |
| 06 mobile | responsive compression of hero + 6-step loop |
| 07 lifecycle | `#lifecycle` |

Cyan `#22D3EE` is the only accent on `#0A0A0B`. Playfair Display + Inter. Thesis and role labels are taken verbatim from `design/BRIEF.md`.

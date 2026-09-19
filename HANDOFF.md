# HANDOFF — Chicago Build Loop architecture microsite

**Seat:** Grok Build (`gb/build-loop-arch`)  
**Repo:** https://github.com/jasoaco79/build-loop-architecture  
**Status:** DESIGN-ONLY · **HOLD live** · no DNS · no Duck cutover · no merge until Jason yes

## What this repo is

Static architecture microsite for how Iterate Consulting (Chicago desk) ships code:

1. Four concurrent writers race on separate branches  
2. Codex reviews every open PR  
3. Erlich picks the first clean PR  
4. Jason gives explicit yes before merge/deploy  

Locked plates 01–07 live on branch `design/sot` under `design/`.

## Serve statically

From this checkout:

```bash
# any static server
python3 -m http.server 8080
# or
npx --yes serve -l 8080 .
```

Open `http://localhost:8080/`. No backend, no build step.

## Files

| Path | Role |
|------|------|
| `index.html` | Single-page microsite (sections 01–07) |
| `styles.css` | Color lock + responsive (plate 06 mobile) |
| `script.js` | Nav section highlight only |
| `assets/lockup-b.svg` | Iterate lockup B |
| `design/` | SoT from `design/sot` (BRIEF + plates) |
| `HANDOFF.md` | This file |

## Color / type lock

- Void `#0A0A0B` · accent cyan `#22D3EE` only  
- Playfair Display (titles) · Inter (body)  
- Calm boutique tech · no FIGJAM · no Sophos · no secrets

## HOLD

- Do **not** merge this PR without Jason’s explicit yes  
- Do **not** point live DNS / Duck at this site  
- Do **not** deploy or cut over until Jason yes  

Plate SoT remains on `design/sot`. Product code is out of scope.

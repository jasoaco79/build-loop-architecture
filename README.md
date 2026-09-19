# Chicago Build Loop — Architecture

Static architecture microsite for how Iterate Consulting’s Chicago desk ships code.

**Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.**

Plates locked 2026-09-19 (SoT on `design/sot`). Lockup B. Accent cyan `#22D3EE`.

## HOLD

Design-only. **Do not deploy live.** No custom domain. No Cloudflare Pages/Workers cutover. **No Duck cutover.** No DNS. No merge/deploy without Jason’s explicit yes.

## Local

```bash
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/

No npm. No build. No secrets.

## Sections

| Plate | Section |
| --- | --- |
| 01 | Hero / thesis |
| 02 | Six-step loop |
| 03 | Writers — Cursor cloud · pi / terra-gpt · Antigravity · Grok Build |
| 04 | Failover |
| 05 | Dallas Slack overflow |
| 06 | Mobile compression of hero + loop |
| 07 | Lifecycle |

See `HANDOFF.md` for pickup notes.

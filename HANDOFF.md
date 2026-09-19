# HANDOFF — Chicago Build Loop architecture microsite

Harness-agnostic notes for whoever picks this up next. Clone the git repo and continue from there.

## What this is

Static architecture microsite for **how Iterate Consulting’s Chicago desk ships code**.

| | |
| --- | --- |
| Repo | https://github.com/jasoaco79/build-loop-architecture |
| Design SoT | Branch `design/sot` — plates 01–07 HTML/PNG + `design/BRIEF.md` + lockup B. Locked 2026-09-19. |
| Live host | **None.** HOLD live. Do not attach a custom domain. |
| This pass | Implement plates 01–07 as a scrollable static site on a PR against `main`. |

**Thesis (locked):** Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.

**Not this pickup**

- [jasoaco79/iterate-website](https://github.com/jasoaco79/iterate-website) — public marketing site. Different repo. Do not fold this microsite into www.
- [jasoaco79/duck](https://github.com/jasoaco79/duck) — Duck memory engine. **No Duck cutover.** Do not point Duck, popstarr, or live daemons at this site.
- LYS / Elena, Sophos, FIGJAM, Body Lab, grimstarr preview hosts — not this product.

## Jason locks

Do not merge. Do not deploy. Do not touch Cloudflare DNS, Pages, Workers, or the VPS. No `iterateconsulting.ai` cutover. **No Duck cutover.**

Plates 01–07 are locked. Copy, roles, writer harness/model labels, Slack rooms, and cyan `#22D3EE` stay exact.

| Token | Value |
| --- | --- |
| Background void | `#0A0A0B` |
| Panel | `#121214` |
| Raised | `#1A1A1E` |
| Hairline | `rgba(255,255,255,0.08)` |
| Text | `#F5F5F5` |
| Muted | `#A1A1AA` |
| **Only accent** | **cyan `#22D3EE`** |

Typography: Playfair Display (titles) · Inter (body) · Google Fonts.

Logo: lockup B (`assets/lockup-b.svg`, from `design/sot`). Site copy uses a transparent plate so the mark composites on the void; paths are the locked lockup. No backwards E. No invented mark.

Process:

1. Branch off `main`. Do not commit to `main` directly.
2. Open a pull request against `main`.
3. Codex reviews.
4. Erlich picks the first clean PR; closes the others.
5. Merge / deploy only when Jason says yes.

## This pass

Static single page matching locked plates:

| Plate | Section |
| --- | --- |
| 01 | Hero / operating thesis + five-panel overview |
| 02 | Six-step loop with phase bands + roles |
| 03 | Four concurrent writers: Cursor cloud · pi / terra-gpt · Antigravity · Grok Build |
| 04 | Failover: three keep racing; clean gate; ~80% Grok Bot → StarrClaw / popstarr / Neo |
| 05 | Dallas CoS overflow via Slack (`#iterate-ord-dfw-rsw-cos`, mirrors `#iterate-chicago-dallas-cos`) |
| 06 | Mobile compression of hero + 6-step loop (390-class viewport) |
| 07 | Lifecycle: Concept → Design → Execution → Deployment |

No product code. No backend. No analytics. No secrets. `robots: noindex`.

## Local run

```bash
git clone https://github.com/jasoaco79/build-loop-architecture.git
cd build-loop-architecture
python3 -m http.server 4173
```

Open http://127.0.0.1:4173/

No npm. No build step. No `.env`.

## Copy lock (do not rewrite)

**Writers (harness + model exact)**

1. Cursor cloud — Cursor cloud agents (account default model)
2. pi / terra-gpt — pi CLI with terra/gpt
3. Antigravity — Antigravity CLI (agy); Google AI Pro
4. Grok Build — Grok Build on SuperGrok bucket

**People**

| Name | Role |
| --- | --- |
| Erlich | Chicago PM / PR router |
| Dinesh | design-only |
| Jian-Yang | coding owner (launches four writers) |
| Codex | review-only |
| Gilfoyle | deploy / infra |
| Jason | explicit yes before merge/deploy |

**Race rules:** separate branches · first clean wins · one ship PR after pick · Codex on all · no merge without Jason yes.

Empty CI / billing skips are **not** “clean”.

Dallas is overflow, **not** the default race. `grok-desk CURRENT.md` remains the week notebook handshake.

## Leftovers / eyeball

- Eyeball desktop (~1440): hero five-panel row, 6-step loop, four writer cards, failover layers, Dallas swimlanes, lifecycle skip-design arc.
- Eyeball phone (~390): plate 06 — lockup + HOLD LIVE, thesis, stacked 6-step loop with writer tags on step 03, Jason yes in cyan.
- Eyeball tablet (~900): diagrams stack; no horizontal scroll.
- Confirm accent is only `#22D3EE`. No second brand color.
- Confirm HOLD LIVE remains visible in the header.
- Do not add wrangler / Pages / custom-domain files.
- Do not deploy Duck or change popstarr.

## Secrets

None. Do not add API keys, pixels, Formspree, or env files.

## Tip

First clean wins. Empty CI is not clean. HOLD live. No Duck cutover. Jason yes before merge.

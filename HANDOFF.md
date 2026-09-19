# HANDOFF — Chicago Build Loop architecture microsite

Harness-agnostic notes for whoever picks this up next. Clone the git repo and continue from there.

## What this is

Static architecture microsite for **how Iterate Consulting’s Chicago desk ships code**.

| | |
| --- | --- |
| Repo | https://github.com/jasoaco79/build-loop-architecture |
| Design SoT | Branch `design/sot` — plates 01–07 HTML/PNG + `design/BRIEF.md` + lockup B. Locked 2026-09-19. |
| Live host | `https://devstack.grimstarr.com` may already show tip `a9991bb`. **HOLD live restage.** Do not attach a new custom domain. |
| This pass | Optional 5th overflow writer seat (Codex **or** Astra), pi Astra config note, leftover routes to Dallas / Florida. PR against `main`. |

**Thesis (locked):** Four writers race. Codex reviews. Erlich picks the first clean PR. Jason says yes.

**Not this pickup**

- [jasoaco79/iterate-website](https://github.com/jasoaco79/iterate-website) — public marketing site. Different repo. Do not fold this microsite into www.
- [jasoaco79/duck](https://github.com/jasoaco79/duck) — Duck memory engine. **No Duck cutover.** Do not point Duck, popstarr, or live daemons at this site.
- LYS / Elena, Sophos, FIGJAM, Body Lab, grimstarr preview hosts — not this product.

## Jason locks

Do not merge. Do not restage live. Do not touch Cloudflare DNS, Pages, Workers, or the VPS. No `iterateconsulting.ai` cutover. **No Duck cutover.** Erlich picks; Jason says yes; **then Gilfoyle restages.**

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
| 03 | **Four locked. Fifth optional.** Locked seats: Cursor cloud · pi / terra-gpt · Antigravity · Grok Build. Seat 05 overflow: Codex **or** Astra — Erlich opens only. HANDOFF strip: Codex stays review-only. |
| 04 | Failover: three keep racing; clean gate; leftover handoff → StarrClaw / popstarr / Neo **and/or** Dallas (Grok Bot subscription 2) **and/or** Florida (Hermes in-house agents, when named). |
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
2. pi / terra-gpt — pi CLI · terra/gpt **default**. Can also run Astra (`gpt-6-astra` / openai-codex on popstarr). Default label stays terra-gpt.
3. Antigravity — Antigravity CLI (agy); Google AI Pro
4. Grok Build — Grok Build on SuperGrok bucket

**Optional 5th overflow writer seat (not the default race)**

Plate 03 lock (Dinesh, 2026-09-19): title **Four locked. Fifth optional.** Seat 05 is one dashed overflow row — **Codex** or **Astra**. Not default. **Erlich opens only** when a job needs a fifth race lane. Astra carries a Not default badge. Do not draw a fifth locked concurrent lane.

### Tension: Codex review-only lock vs optional 5th seat

HANDOFF strip (locked copy):

> House lock stays Codex review-only on every PR. An optional microsite writer seat for Codex or Astra does **not** change that lock — review-only remains the rule for the race.

House process lock is unchanged:

- Codex is **review-only on every PR**.
- The optional 5th writer seat on the microsite (Codex as an overflow *option*) does **not** change that process lock.
- Do not rewrite the thesis to “five writers race.”
- Do not treat Codex as a default concurrent writer. Review-only remains the house rule even if the overflow seat is pictured.

If copy ever reads as if Codex now writes by default, that is a defect. Fix the label, not the process.

**People**

| Name | Role |
| --- | --- |
| Erlich | Chicago PM / PR router |
| Dinesh | design-only |
| Jian-Yang | coding owner (launches four writers) |
| Codex | review-only |
| Gilfoyle | deploy / infra |
| Jason | explicit yes before merge/deploy |

**Race rules:** four locked default · optional 5th overflow · separate branches · first clean wins · Codex review-only on all · no merge without Jason yes.

Empty CI / billing skips are **not** “clean”.

Dallas is overflow, **not** the default race. `grok-desk CURRENT.md` remains the week notebook handshake.

**Leftover / handoff / failover routes** (Erlich routes; separate from the Chicago four-writer race):

- StarrClaw / popstarr / Neo — existing leftover path
- **Dallas** — Grok Bot subscription 2. Overflow, not default.
- **Florida** — Hermes in-house agents. Alternate overflow path **when named**.

Chicago four-writer race stays the default. Use “and/or” — leftover work may go to one or more of these, not a new default race.

## Leftovers / eyeball

- Eyeball desktop (~1440): hero five-panel row, 6-step loop, four writer cards, optional 5th overflow seat (Codex or Astra), failover leftover routes (StarrClaw / Dallas / Florida), Dallas swimlanes, lifecycle skip-design arc.
- Eyeball phone (~390): plate 06 — lockup + HOLD LIVE, thesis, stacked 6-step loop with writer tags on step 03, Jason yes in cyan.
- Eyeball tablet (~900): diagrams stack; no horizontal scroll.
- Confirm accent is only `#22D3EE`. No second brand color.
- Confirm HOLD LIVE remains visible in the header.
- Do not add wrangler / Pages / custom-domain files.
- Do not deploy Duck or change popstarr.
- Do not restage live. After Erlich/Jason merge, Gilfoyle restages.

## Secrets

None. Do not add API keys, pixels, Formspree, or env files.

## Tip

First clean wins. Empty CI is not clean. HOLD live restage. No Duck cutover. Erlich/Jason merge, then Gilfoyle restages.

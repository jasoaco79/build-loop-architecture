# Build Loop Architecture

Static Iterate Consulting Chicago Build Loop architecture microsite. The site is plain HTML and CSS; the entry point is `index.html`.

## Serve locally

From the repository root, use any static file server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Design source of truth

Architecture plates and the locked brief are on the `design/sot` branch under `design/`. The active site uses Lockup B at `assets/lockup-b.svg`.

## Release status

**HOLD live until Jason says yes.** Do not deploy, merge for release, change DNS, or perform a Duck cutover without Jason’s explicit approval.

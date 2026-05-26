---
name: run-vet-website
description: Run, build, screenshot, or smoke-test the VET Website (Veterinary Business Institute) Next.js app. Use when asked to start the dev server, take a screenshot of a page, check that routes load, or build the static export.
---

# Run the VET Website

A Next.js 16 (Turbopack) marketing site for the Veterinary Business Institute,
configured for **static export** (`output: "export"` → `out/`). Many static
routes: `/`, `/about`, `/podcast`, `/events`, `/webinars`, `/contact`, `/team`,
`/blog`, `/resources/*`, etc.

It's driven with **`driver.mjs`**, which screenshots and probes the running dev
server using the system Chrome in headless mode (no Playwright/Puppeteer
needed). All paths below are relative to the project root (the directory
containing `package.json`).

## Prerequisites

- Node (tested with v26) and npm.
- Google Chrome at `/Applications/Google Chrome.app` (macOS default). Override
  with the `CHROME` env var if elsewhere.
- `npm install` once (deps are already vendored in `node_modules`).

## Run (agent path) — dev server + driver

Start the dev server on port 3010 in the background:

```bash
npm run dev -- -p 3010
```

It prints `✓ Ready` in well under a second and serves at
`http://localhost:3010`. Then drive it:

```bash
# Check key routes return HTTP 200, then screenshot the home page
node .claude/skills/run-vet-website/driver.mjs smoke

# Screenshot one route (desktop 1440x900) → /tmp/vet-shots/<name>.png
node .claude/skills/run-vet-website/driver.mjs shot /about

# Mobile viewport (390x844)
node .claude/skills/run-vet-website/driver.mjs shot / --mobile

# Dump rendered HTML + print <title> and byte count
node .claude/skills/run-vet-website/driver.mjs dom /podcast

# Just the route status table
node .claude/skills/run-vet-website/driver.mjs check
```

Screenshots land in `/tmp/vet-shots/`. **Open the PNG and look at it** — a blank
or error page means the server isn't ready or the route is wrong.

Point the driver at a different port/host with `VET_URL`:
```bash
VET_URL=http://localhost:3000 node .claude/skills/run-vet-website/driver.mjs check
```

## Run (human path)

`npm run dev -- -p 3010` then open `http://localhost:3010` in a browser. Same
server; the driver just gives you a headless handle on it.

## Build (static export)

```bash
npm run build
```

Finishes in ~4s and writes the static site to `out/`. To preview the export
locally with a plain static server, note the flat-file layout gotcha below.

```bash
# Serve the export; reachable as /index.html, /about.html, etc.
cd out && python3 -m http.server 3011
```

For the real GitHub Pages export (base path `/VBI-Revamp`, trailing slashes):
```bash
GITHUB_PAGES=true npm run build
```

## Gotchas

- **Trailing slashes 308 in dev.** In dev mode `trailingSlash` is `false`, so
  `curl http://localhost:3010/about/` returns **308**, not 200. Use the
  no-slash form (`/about`) or `curl -L`. Chrome follows the redirect
  automatically, so `driver.mjs dom /about/` still works. `driver.mjs check`
  already uses no-slash URLs.
- **Static export is flat `.html`, not `index.html` dirs.** A normal
  `npm run build` (without `GITHUB_PAGES=true`) emits `out/about.html`, **not**
  `out/about/index.html`. So a dumb static server serves the route at
  `/about.html`; `/about/` 404s. Netlify (`netlify.toml` → publish `out`) maps
  clean URLs for you. For local browsing, prefer the dev server.
- **Chrome stderr noise.** Headless Chrome prints `SharedImageManager` /
  GPU / web-app-install warnings and may exit non-zero while still writing the
  screenshot. The driver ignores these and surfaces the file regardless.
- **GitHub Pages build differs.** `GITHUB_PAGES=true` adds the `/VBI-Revamp`
  base path and trailing slashes — assets won't resolve at `localhost` root.
  Use the plain build for local work.

## Troubleshooting

- **`driver.mjs` screenshot is blank / connection refused** → the dev server
  isn't up yet or is on another port. Confirm with
  `curl -s -o /dev/null -w '%{http_code}' http://localhost:3010/` (expect 200).
- **`spawn ... Google Chrome ENOENT`** → Chrome isn't at the default path. Set
  `CHROME=/path/to/chrome` before the command.
- **Port 3010 in use** → pick another port (`npm run dev -- -p 3012`) and pass
  `VET_URL=http://localhost:3012` to the driver.

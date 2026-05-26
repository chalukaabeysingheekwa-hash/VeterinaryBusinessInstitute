#!/usr/bin/env node
// Driver for the VET Website (Veterinary Business Institute) Next.js app.
// Drives the running dev server with headless system Chrome — no extra deps.
//
// Usage (assumes `npm run dev -- -p 3010` is already running, or pass --start):
//   node .claude/skills/run-vet-website/driver.mjs shot /about            # screenshot a route
//   node .claude/skills/run-vet-website/driver.mjs shot / --mobile        # 390x844 viewport
//   node .claude/skills/run-vet-website/driver.mjs dom /podcast           # dump rendered HTML
//   node .claude/skills/run-vet-website/driver.mjs check                  # HTTP status of key routes
//   node .claude/skills/run-vet-website/driver.mjs smoke                  # check + screenshot home
//
// Screenshots land in /tmp/vet-shots/. Override base URL with VET_URL.

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdirSync } from "node:fs";

const exec = promisify(execFile);
const BASE = process.env.VET_URL || "http://localhost:3010";
const CHROME =
  process.env.CHROME ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = "/tmp/vet-shots";
const ROUTES = ["/", "/about", "/podcast", "/events", "/webinars", "/contact"];

mkdirSync(OUT, { recursive: true });

function chromeArgs(extra) {
  // Common flags that keep headless Chrome quiet and deterministic.
  return [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--disable-extensions",
    ...extra,
  ];
}

async function runChrome(extra) {
  try {
    const { stdout } = await exec(CHROME, chromeArgs(extra), {
      maxBuffer: 64 * 1024 * 1024,
    });
    return stdout;
  } catch (e) {
    // Chrome prints harmless GPU/web-app warnings to stderr and may exit
    // non-zero while still producing the file — surface stdout regardless.
    if (e.stdout) return e.stdout;
    throw e;
  }
}

async function shot(route, mobile) {
  const name = (route === "/" ? "home" : route.replace(/\//g, "_")).replace(/^_/, "");
  const file = `${OUT}/${name}${mobile ? "-mobile" : ""}.png`;
  const size = mobile ? "390,844" : "1440,900";
  await runChrome([
    `--screenshot=${file}`,
    `--window-size=${size}`,
    `${BASE}${route}`,
  ]);
  console.log(file);
}

async function dom(route) {
  const html = await runChrome(["--dump-dom", `${BASE}${route}`]);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "(no title)";
  console.log(`title: ${title}`);
  console.log(`bytes: ${html.length}`);
}

async function check() {
  let ok = true;
  for (const r of ROUTES) {
    try {
      // Use curl for a cheap status probe; trailing-slash URLs 308 in dev.
      const { stdout } = await exec("curl", [
        "-s", "-o", "/dev/null", "-w", "%{http_code}", `${BASE}${r}`,
      ]);
      const code = stdout.trim();
      const good = code === "200";
      ok = ok && good;
      console.log(`${good ? "ok " : "BAD"} ${code}  ${r}`);
    } catch (e) {
      ok = false;
      console.log(`ERR     ${r}  ${e.message}`);
    }
  }
  if (!ok) process.exitCode = 1;
}

const [cmd, route, flag] = process.argv.slice(2);
const mobile = flag === "--mobile" || route === "--mobile";

switch (cmd) {
  case "shot":
    await shot(route && route !== "--mobile" ? route : "/", mobile);
    break;
  case "dom":
    await dom(route || "/");
    break;
  case "check":
    await check();
    break;
  case "smoke":
    await check();
    await shot("/", false);
    break;
  default:
    console.log("usage: driver.mjs <shot|dom|check|smoke> [route] [--mobile]");
    process.exitCode = 1;
}

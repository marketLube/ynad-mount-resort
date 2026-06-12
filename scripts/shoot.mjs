// Dev-only helper: full-page screenshots of the local site via system Chrome.
// Usage: node scripts/shoot.mjs [outDir]
import { chromium } from "playwright-core";

const out = process.argv[2] || "/tmp/ynad-shots";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const targets = [
  { name: "home-desktop", url: "http://localhost:3000/", width: 1440, height: 900 },
  { name: "home-mobile", url: "http://localhost:3000/", width: 390, height: 844 },
  { name: "blog-desktop", url: "http://localhost:3000/blog", width: 1440, height: 900 },
  { name: "blog-mobile", url: "http://localhost:3000/blog", width: 390, height: 844 },
  { name: "post-desktop", url: "http://localhost:3000/blog/best-resorts-in-wayanad", width: 1440, height: 900 },
  { name: "post-mobile", url: "http://localhost:3000/blog/moody-climate-resort-wayanad", width: 390, height: 844 },
];

const browser = await chromium.launch({ executablePath: CHROME, headless: true });

for (const t of targets) {
  const page = await browser.newPage({ viewport: { width: t.width, height: t.height } });
  await page.goto(t.url, { waitUntil: "networkidle" });
  // force reveal-on-scroll content visible for the capture
  await page.addStyleTag({
    content: ".reveal{opacity:1!important;transform:none!important;transition:none!important}",
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${out}/${t.name}.png`, fullPage: true });
  console.log("shot", t.name);
  await page.close();
}

await browser.close();

// Dev-only helper: per-section screenshots of the homepage.
import { chromium } from "playwright-core";

const out = process.argv[2] || "/tmp/ynad-shots";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const sections = ["#about", "#rooms", "#offers", "#testimonials", "#experience", "#journal", "#faq", ".cta-band", ".footer"];

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.addStyleTag({
  content: ".reveal{opacity:1!important;transform:none!important;transition:none!important}",
});

for (const sel of sections) {
  const el = page.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  const name = sel.replace(/[#.]/g, "");
  await el.screenshot({ path: `${out}/zoom-${name}.png` });
  console.log("shot", name);
}

await browser.close();

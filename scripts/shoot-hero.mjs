// Dev-only helper: capture each hero slide + mobile nav + console errors.
import { chromium } from "playwright-core";

const out = "/tmp/ynad-shots";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (msg) => msg.type() === "error" && errors.push(msg.text()));
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

const dots = page.locator(".hero__dots button");
const n = await dots.count();
for (let i = 0; i < n; i++) {
  await dots.nth(i).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${out}/hero-slide-${i + 1}.png` });
  console.log("slide", i + 1);
}

// mobile nav
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
mob.on("pageerror", (err) => errors.push(String(err)));
await mob.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await mob.click(".header__toggle");
await mob.waitForTimeout(800);
await mob.screenshot({ path: `${out}/mobile-nav.png` });
console.log("mobile nav");

console.log("CONSOLE ERRORS:", errors.length ? errors.join("\n") : "none");
await browser.close();

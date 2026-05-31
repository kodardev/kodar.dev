import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const url = process.env.URL ?? "http://localhost:5173/";
const outDir = new URL("../.compare/", import.meta.url);

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });

await page.screenshot({ path: new URL("full-page.png", outDir).pathname, fullPage: true });

const sections = [
  { name: "header-hero", y: 0, height: 900 },
  { name: "logos-services", y: 900, height: 1200 },
  { name: "cta-case", y: 2100, height: 900 },
  { name: "process-team", y: 3000, height: 1400 },
  { name: "testimonials-contact-footer", y: 4400, height: 2000 },
];

for (const { name, y, height } of sections) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
  await page.waitForTimeout(300);
  await page.screenshot({
    path: new URL(`${name}.png`, outDir).pathname,
    clip: { x: 0, y: 0, width: 1440, height: Math.min(height, 900) },
  });
}

await browser.close();
console.log("Screenshots saved to .compare/");

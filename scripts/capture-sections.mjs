import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const sections = [
  { id: "hero", selector: "section:first-of-type" },
  { id: "partners", selector: "section:nth-of-type(2)" },
  { id: "services", selector: "#services" },
  { id: "cta", selector: "section:nth-of-type(4)" },
  { id: "case-studies", selector: "#case-studies" },
  { id: "process", selector: "#process" },
  { id: "team", selector: "#team" },
  { id: "testimonials", selector: "#testimonials" },
  { id: "contact", selector: "#contact" },
  { id: "footer", selector: "footer" },
];

const outDir = new URL("../.compare/sections/", import.meta.url);
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });

for (const { id, selector } of sections) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await el.screenshot({ path: `${outDir.pathname}${id}.png` });
}

await page.screenshot({
  path: `${outDir.pathname}../full-page.png`,
  fullPage: true,
});

await browser.close();
console.log("Saved section screenshots to .compare/sections/");

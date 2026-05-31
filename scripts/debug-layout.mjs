import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });

const info = await page.locator("#case-studies span.inline-block").first().evaluate((el) => {
  const cs = getComputedStyle(el);
  return {
    text: el.textContent,
    className: el.className,
    width: cs.width,
    maxWidth: cs.maxWidth,
    whiteSpace: cs.whiteSpace,
    display: cs.display,
    rect: el.getBoundingClientRect(),
    parent: {
      className: el.parentElement?.className,
      rect: el.parentElement?.getBoundingClientRect(),
    },
  };
});

console.log(JSON.stringify(info, null, 2));
await browser.close();

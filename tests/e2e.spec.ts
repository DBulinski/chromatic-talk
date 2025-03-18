import { takeSnapshot, test } from "@chromatic-com/playwright";

test.use({
  ignoreSelectors: ["#rendered-at"],
});

test("can visit contact page", async ({ page }, testInfo) => {
  await page.goto("http://localhost:3000");
  await takeSnapshot(page, "homepage", testInfo);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact us" })
    .click();
  await page.waitForURL("http://localhost:3000/contact");
  await takeSnapshot(page, "contact page", testInfo);
});

import { test } from "@chromatic-com/playwright";

test("can visit contact page", async ({ page }) => {
  await page.goto("http://localhost:3000/contact");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact us" })
    .click();
  await page.waitForURL("http://localhost:3000/contact");
});

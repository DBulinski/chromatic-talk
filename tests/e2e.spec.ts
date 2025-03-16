import { test } from "playwright/test";

test("can visit contact page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact us" })
    .click();
  await page.waitForURL("http://localhost:3000/contact");
});

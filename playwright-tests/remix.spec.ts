import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Remix Form Submission Test");
});

test("get started link", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Remix Form Submission Test" }),
  ).toBeVisible();
});

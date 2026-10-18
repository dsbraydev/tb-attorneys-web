import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/sale-agreement-review",
  "/insight",
  "/insight/tips-from-tim-building-plans",
  "/pricing",
  "/contact-us",
  "/faq",
  "/privacy-policy",
];

for (const route of routes) {
  test(`${route} renders without errors or horizontal overflow`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
    expect(errors).toEqual([]);
  });
}

test("unknown pages return 404", async ({ page }) => {
  const response = await page.goto("/insight/not-a-real-post");
  expect(response?.status()).toBe(404);
});

test("calculator shows transfer duty for a purchase price", async ({ page }) => {
  await page.goto("/pricing");
  await page.getByLabel("Purchase price (R)").fill("2000000");
  await expect(page.getByText("Transfer duty (SARS)")).toBeVisible();
  await expect(page.locator("dd").first()).toHaveText(/R\s*33\s*786/);

  await page.getByRole("checkbox").check();
  await expect(page.locator("dd").first()).toHaveText(/^R\s*0$/);
});

test("contact form validates, keeps input, then submits", async ({ page }) => {
  await page.goto("/contact-us");
  const form = page.locator("main form").first();
  await form.getByLabel("Name").fill("QA Tester");
  await form.getByLabel("Email").fill("not-an-email");
  await form.getByLabel("Message").fill("Smoke test");
  await form.getByLabel("Sale agreement (optional)").setInputFiles({
    name: "otp.pdf",
    mimeType: "application/pdf",
    buffer: Buffer.from("%PDF-1.4"),
  });
  await form.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
  await expect(form.getByLabel("Name")).toHaveValue("QA Tester");
  // The attached agreement must survive a validation error.
  await expect
    .poll(() =>
      form
        .getByLabel("Sale agreement (optional)")
        .evaluate((input: HTMLInputElement) => input.files?.length),
    )
    .toBe(1);

  await form.getByLabel("Email").fill("qa@example.com");
  await form.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByRole("status")).toContainText("Thank you");
});

test("mobile menu opens and navigates", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The menu button only shows on small screens");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
});

test("testimonial cards grow to fit their quotes on narrow phones", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/");
  const overflowing = await page
    .locator("figure")
    .evaluateAll(
      (figures) => figures.filter((figure) => figure.scrollHeight > figure.clientHeight + 1).length,
    );
  expect(overflowing).toBe(0);
});

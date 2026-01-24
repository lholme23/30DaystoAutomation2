
import { test, expect } from '@playwright/test';

test('verify that the Docs link opens the Documentation page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('click docs link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Docs' }).click();

  await expect(page).toHaveURL(/docs/);
});

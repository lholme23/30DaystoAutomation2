import { test, expect } from '@playwright/test';

test('Google homepage loads correctly', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle(/Google/);
  await page.screenshot({ path: 'google-homepage.png'  })
});
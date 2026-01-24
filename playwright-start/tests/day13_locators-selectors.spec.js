import { test, expect } from '@playwright/test';

test('Day 13 - Locator Strategies Practice', async ({ page }) => {
  console.log("---Starting Day 13 Locator Practice Test---");
  await page.goto('https://mini-bank.testamplify.com/');

  // 1. By Role (Accessibility-friendly)
  const loginButton = page.getByRole('button',{name: /login/i});
  await expect(loginButton).toBeEnabled();
  console.log ('✅ Role locators working');

  //2. By Text
  console.log('\n---By Text---')
  const heading = page.getByText('Manage Your Finances Seamlessly');
  await expect(heading).toBeVisible();
  console.log ('✅ Text locators working');

  //3. By Placeholder
    console.log('\n---By Placeholder---')  
    loginButton.click(); // Open login form
    const usernameField = page.getByPlaceholder('you@example.com');
    const passwordField = page.getByPlaceholder('Enter your password');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();

    console.log("✅ Placeholder locators are working!");

    await usernameField.fill('testuser2@yopmail.com');
    await passwordField.fill('Pass2005#');
    console.log('\n Username and Password Entered')

 //4. By XPath
    console.log('\n--- By XPath (Advanced) ---');
    const loginBtnXPath = page.locator('xpath=//button[@type="submit"]');
    await loginBtnXPath.click();
    const titleByXPath = page.locator('xpath=//h2[text()="Overview"]');
    await expect(titleByXPath).toBeVisible();
    console.log("✅ XPath locators are working!");

// 5. By CSS Selector
console.log('\n ---By CSS Selector ---')
const titleByCSS = page.locator('div.flex.justify-between.items-center small.text-gray-400');
await expect(titleByCSS).toBeVisible();
console.log("✅ CSS selector locator is working!");
});

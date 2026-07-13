import { test, expect } from '@playwright/test';

test('Validate heroku app login flow', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await expect(page).toHaveTitle(/The Internet/);

  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/\/secure/);
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();

  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/\/login/);
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
});

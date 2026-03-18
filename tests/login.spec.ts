import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';

test('Login via Parkar Account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.clickParkarSignIn();
  // Add assertions for the next page
});

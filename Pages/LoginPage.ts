import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  
  // Locator for the specific button using the exact selector you provided
  get parkarSignInButton() {
    return this.page.getByRole('button', { name: "Sign in with Parkar Account 🏢" });
  }

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    // Uses the Playwright `baseURL` (set via config or BASE_URL env var).
    await this.page.goto('/login');
    // Optional: Verify we're on the login page
    await expect(this.page).toHaveURL(/.*login/);
  }

  async clickParkarSignIn() {
    await this.parkarSignInButton.click();
    // Optional: Wait for navigation or next element
  }
}

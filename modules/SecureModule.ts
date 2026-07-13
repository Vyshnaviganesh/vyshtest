import { Page, expect } from '@playwright/test';
import { SecurePage } from '../pages/SecurePage.js';

export class SecureModule {
  private page: Page;
  private securePage: SecurePage;

  constructor(page: Page) {
    this.page = page;
    this.securePage = new SecurePage(page);
  }

  async logout() {
    await this.securePage.logoutLink.click();
  }

  async assertOnPage() {
    await expect(this.page).toHaveURL(/\/secure/);
    await expect(this.page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  }
}

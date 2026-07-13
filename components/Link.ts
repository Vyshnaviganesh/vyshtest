import { Page, Locator } from '@playwright/test';

export class Link {
  private locator: Locator;

  constructor(page: Page, name: string) {
    this.locator = page.getByRole('link', { name });
  }

  async click() {
    await this.locator.click();
  }

  async isVisible(): Promise<boolean> {
    return this.locator.isVisible();
  }
}

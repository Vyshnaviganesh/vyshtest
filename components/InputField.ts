import { Page, Locator } from '@playwright/test';

export class InputField {
  private locator: Locator;

  constructor(page: Page, selector: string) {
    this.locator = page.locator(selector);
  }

  async fill(value: string) {
    await this.locator.fill(value);
  }

  async getValue(): Promise<string> {
    return this.locator.inputValue();
  }
}

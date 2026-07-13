import { Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { Users } from '../data/users.js';

export class LoginModule {
  private page: Page;
  private loginPage: LoginPage;
  private readonly url = 'https://the-internet.herokuapp.com/login';

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async login(user = Users.validUser) {
    await this.loginPage.usernameField.fill(user.username);
    await this.loginPage.passwordField.fill(user.password);
    await this.loginPage.loginButton.click();
  }

  async assertOnPage() {
    await expect(this.page).toHaveURL(/\/login/);
    await expect(this.page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  }
}

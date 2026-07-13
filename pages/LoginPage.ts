import { Page } from '@playwright/test';
import { InputField } from '../components/InputField.js';
import { Button } from '../components/Button.js';

export class LoginPage {
  readonly usernameField: InputField;
  readonly passwordField: InputField;
  readonly loginButton: Button;

  constructor(page: Page) {
    this.usernameField = new InputField(page, '#username');
    this.passwordField = new InputField(page, '#password');
    this.loginButton = new Button(page, 'button[type="submit"]');
  }
}

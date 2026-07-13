import { Page } from '@playwright/test';
import { Link } from '../components/Link.js';

export class SecurePage {
  readonly logoutLink: Link;

  constructor(page: Page) {
    this.logoutLink = new Link(page, 'Logout');
  }
}

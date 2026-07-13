import { vyshtestpractice } from '../utils/vyshtestpractice.js';
import { LoginModule } from '../modules/LoginModule.js';
import { SecureModule } from '../modules/SecureModule.js';

vyshtestpractice.describe('Heroku - Login', () => {

  vyshtestpractice({
    testId: 'TC_LOGIN_001',
    priority: 'P0',
    author: 'vyshnavihg',
    group: ['login', 'smoke'],
    title: 'Validate heroku app login flow',
  }, async ({ page }) => {
    const loginModule = new LoginModule(page);
    const secureModule = new SecureModule(page);

    await loginModule.navigate();
    await loginModule.assertOnPage();

    await loginModule.login('tomsmith', 'SuperSecretPassword!');

    await secureModule.assertOnPage();

    await secureModule.logout();

    await loginModule.assertOnPage();
  });

});

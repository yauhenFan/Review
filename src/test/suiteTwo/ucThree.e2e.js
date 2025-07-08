import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { Dashboard } from '../../POM/dashboard.page.js';
import { Helper } from '../../data/utils/helpers/helper.js';

const loginPage = new LoginPage();
const dashboard = new Dashboard();
const helper = new Helper();

describe('Test Login form with credentials by passing Username & Password', async () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });

  it('Login by passing Username & Password', async () => {
    await helper.addUserLogin(loginData.StadardUser.Login);
    await helper.addUserPswd(loginData.StadardUser.Pswd);
    await helper.clickOnLoginBtn();
    await expect(dashboard.cartIcon).toBeDisplayed();
  });
});

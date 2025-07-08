import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { Helper } from '../../data/utils/helpers/helper.js';

const loginPage = new LoginPage();
const helper = new Helper();

describe('Test Login form with credentials by passing Username', async () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });

  it('Login by passing Username', async () => {
    await helper.addUserLogin(loginData.InvalidUser.Login);
    await helper.addUserPswd(loginData.InvalidUser.Pswd);
    await helper.cleanPswd();
    await helper.clickOnLoginBtn();
    await expect(
      await loginPage.getErroByText('Password is required'),
    ).toBeDisplayed();
  });
});

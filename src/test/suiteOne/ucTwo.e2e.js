import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { Helper } from '../../utils/helpers/helper.js';

const loginPage = new LoginPage();
const helper = new Helper();

describe('Test Login form with credentials by passing Username', async () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });

  it('Login by passing Username', async () => {
    await loginPage.addLogin(loginData.InvalidUser.Login);
    await loginPage.addPassword(loginData.InvalidUser.Pswd);
    await loginPage.cleanPswdInput();
    await loginPage.clickonLoginBtn();
    await expect(
      await loginPage.getErroByText('Password is required'),
    ).toBeDisplayed();
  });
});

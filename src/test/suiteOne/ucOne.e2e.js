import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { Helper } from '../../utils/helpers/helper.js';
import logger from '../../utils/logger.js';
const loginPage = new LoginPage();
const helper = new Helper();

describe('Test Login form with empty credentials', async () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });

  it('Test Login form with empty credentials', async () => {
    await loginPage.addLogin(loginData.InvalidUser.Login);
    await loginPage.addPassword(loginData.InvalidUser.Pswd);
    await loginPage.cleanLoginInput();
    await loginPage.cleanPswdInput();
    await loginPage.clickonLoginBtn();
    await expect(
      await loginPage.getErroByText('Username is required'),
    ).toBeDisplayed();
    logger.info('Test is completed successfully');
  });

  it('Negative - Test Login form with empty and expect invalid error', async () => {
    try {
      await loginPage.addLogin(loginData.InvalidUser.Login);
      await loginPage.addPassword(loginData.InvalidUser.Pswd);
      await loginPage.cleanLoginInput();
      await loginPage.cleanPswdInput();
      await loginPage.clickonLoginBtn();
      await expect(
        await loginPage.getErroByText('Username2222 is required'),
      ).toBeDisplayed();
      logger.info('Test is completed successfully');
    } catch (err) {
      logger.error('Test is failed');
      throw err;
    }
  });
});

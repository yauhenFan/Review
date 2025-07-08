import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { Helper } from '../../data/utils/helpers/helper.js';
import logger from '../../data/utils/logger.js';

const loginPage = new LoginPage();
const helper = new Helper();

describe('Test Login form with empty credentials', async () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });

  it('Test Login form with empty credentials', async () => {
    await helper.addUserLogin(loginData.InvalidUser.Login);
    await helper.addUserPswd(loginData.InvalidUser.Pswd);
    await helper.cleanLogin();
    await helper.cleanPswd();
    await helper.clickOnLoginBtn();
    await expect(
      await loginPage.getErroByText('Username is required'),
    ).toBeDisplayed();
    logger.info('Test is completed successfully');
  });

  it('Negative - Test Login form with empty and expect invalid error', async () => {
    try {
      await helper.addUserLogin(loginData.InvalidUser.Login);
      await helper.addUserPswd(loginData.InvalidUser.Pswd);
      await helper.cleanLogin();
      await helper.cleanPswd();
      await helper.clickOnLoginBtn();
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

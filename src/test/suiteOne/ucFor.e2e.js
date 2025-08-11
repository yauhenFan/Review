import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { testObjectArr } from '../../data/testObjectArr.js';
const loginPage = new LoginPage();

describe('Test using for loop', () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });
  testObjectArr.forEach((ele) => {
    it(`Test for loop for ${ele.testName}`, async () => {
      await loginPage.addLogin(ele.login);
      await loginPage.addPassword(ele.password);
      await loginPage.cleanLoginInput();
      await loginPage.cleanPswdInput();
      await loginPage.clickonLoginBtn();
      await expect(await loginPage.isErrorVisible('Username is required')).toBe(
        ele.isPassing,
      );
    });
  });
});

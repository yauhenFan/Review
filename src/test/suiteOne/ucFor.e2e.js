import { LoginPage } from '../../POM/login.page.js';
import { testObjectArr } from '../../data/testObjectArr.js';
const loginPage = new LoginPage();

describe('Test using for loop', () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });
  for (let test of testObjectArr) {
    it(`Test for loop for ${test.testName}`, async () => {
      await loginPage.addLogin(test.login);
      await loginPage.addPassword(test.password);
      await loginPage.clickonLoginBtn();
      await expect(await loginPage.isTitle('Login page')).toBe(!test.isPassing);
      await expect(await loginPage.isTitle('Main page')).toBe(test.isPassing);
    });
  }
});

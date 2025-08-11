import { LeftMenu } from '../../POM/components/leftMenu.js';
import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { Helper } from '../../utils/helpers/helper.js';

const loginPage = new LoginPage();
const helper = new Helper();
const leftMenu = new LeftMenu();

describe('Make Logout and verify that inputs are emppty', () => {
  before(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });

  it('Login and click on "All Itmes" opption in the left side menu', async () => {
    await loginPage.addLogin(loginData.StadardUser.Login);
    await loginPage.addPassword(loginData.StadardUser.Pswd);
    await loginPage.clickonLoginBtn();
    await leftMenu.AllItemsOptionsDisplayedAfterClick();
    await expect(await leftMenu.verifyAllItemsDisplays()).toBe(true);
  });

  it('Make logout and verify and login iput fields are empty', async () => {
    await leftMenu.logOutOption.click();
    expect(await loginPage.passInput.getText()).toHaveText('');
    expect(await loginPage.passInput.getText()).toHaveText('');
    await loginPage.clickonLoginBtn();
    await expect(
      await loginPage.getErrorByText('Username is required'),
    ).toBeDisplayed();
  });
});

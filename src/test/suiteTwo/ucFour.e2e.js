import { LeftMenu } from '../../POM/components/leftMenu.js';
import { LoginPage } from '../../POM/login.page.js';
import { loginData } from '../../data/testData.js';
import { Helper } from '../../data/utils/helpers/helper.js';

const loginPage = new LoginPage();
const helper = new Helper();
const leftMenu = new LeftMenu();

describe('Make Logout and verify that inputs are emppty', async () => {
  before(async () => {
    await loginPage.open();
    await loginPage.maximizeBrowser();
  });

  it('Login and click on "All Itmes" opption in the left side menu', async () => {
    await helper.addUserLogin(loginData.StadardUser.Login);
    await helper.addUserPswd(loginData.StadardUser.Pswd);
    await helper.clickOnLoginBtn();
    await leftMenu.AllItemsOptionsDisplayedAfterClick();
    await expect(await leftMenu.verifyAllItemsDisplays()).toBe(true);
  });

  it('Make logout and verify and login iput fields are empty', async () => {
    await leftMenu.logOutOption.click();
    expect(await loginPage.passInput.getText()).toHaveText('');
    expect(await loginPage.passInput.getText()).toHaveText('');
    await helper.clickOnLoginBtn();
    await expect(
      await loginPage.getErroByText('Username is required'),
    ).toBeDisplayed();
  });
});

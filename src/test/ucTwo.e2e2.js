import { LoginPage } from "../POM/login.page.js";
import { BASE_URL } from  "../data/url.js";
import { loginData } from "../data/testData.js";

const loginPage = new LoginPage();

describe.skip('Test Login form with credentials by passing Username', async() => {
    it('Login by passing Username', async() => {
        await loginPage.openURL(BASE_URL);
        await loginPage.maximizeBrowser();
        await loginPage.addValueToInput(loginPage.loginInput, loginData[1].userName);
        await loginPage.addValueToInput(loginPage.passInput, loginData[1].userPswd);
        await loginPage.cleaInput(loginPage.passInput);
        await loginPage.clickOnBtn(loginPage.loginBtn);
        await expect(await loginPage.getErroByText('Password is required')).toBeDisplayed();
    });
});
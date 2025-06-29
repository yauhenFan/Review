import { LoginPage } from "../POM/login.page.js";
import { BASE_URL } from  "../data/url.js";
import { loginData } from "../data/testData.js";
import { Dashboard } from "../POM/dashboard.page.js"; 

const loginPage = new LoginPage();
const dashboard = new Dashboard();

describe.skip('Test Login form with credentials by passing Username & Password', async() => {
    it('Login by passing Username & Password', async() => {
        await loginPage.openURL(BASE_URL);
        await loginPage.maximizeBrowser();
        await loginPage.addValueToInput(loginPage.loginInput, loginData[2].userName);
        await loginPage.addValueToInput(loginPage.passInput, loginData[2].userPswd);
        await loginPage.clickOnBtn(loginPage.loginBtn);
        expect(dashboard.cartIcon).toBeDisplayed();
    });
});
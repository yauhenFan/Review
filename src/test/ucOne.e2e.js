import { LoginPage } from "../POM/login.page.js";
import { BASE_URL } from  "../data/url.js";
import { loginData } from "../data/testData.js";
import logger from "../data/utils/logger.js";

const loginPage = new LoginPage();

describe('Test Login form with empty credentials', async() => {
    it('Test Login form with empty credentials', async() => {
        await loginPage.openURL(BASE_URL);
        await loginPage.maximizeBrowser();
        await loginPage.addValueToInput(loginPage.loginInput, loginData[0].userName);
        await loginPage.addValueToInput(loginPage.passInput, loginData[0].userPswd);
        await loginPage.cleaInput(loginPage.loginInput);
        await loginPage.cleaInput(loginPage.passInput);
        await loginPage.clickOnBtn(loginPage.loginBtn);
        await expect(await loginPage.getErroByText('Username is required')).toBeDisplayed();
        logger.info("Test is completed successfully");
    });
});
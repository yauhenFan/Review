import { LoginPage } from '../../../POM/login.page.js';

const loginPage = new LoginPage();

export class Helper {
  async addUserLogin(text) {
    await loginPage.loginInput.setValue(text);
  }

  async addUserPswd(value) {
    await loginPage.passInput.setValue(value);
  }

  async cleanLogin() {
    await loginPage.loginInput.click();
    await browser.keys(['Control', 'a']);
    await browser.keys(['Backspace']);
  }

  async cleanPswd() {
    await loginPage.passInput.click();
    await browser.keys(['Control', 'a']);
    await browser.keys(['Backspace']);
  }

  async clickOnLoginBtn() {
    await loginPage.loginBtn.click();
  }
}

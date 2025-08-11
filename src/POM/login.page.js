import Base from './base.js';
import { Helper } from '../utils/helpers/helper.js';
import dotenv from 'dotenv';
dotenv.config();

const ENV_URL = process.env.BASE_URL;
const helper = new Helper();

export class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get loginInput() {
    return $('#user-name');
  }

  get passInput() {
    return $('#password');
  }

  get loginBtn() {
    return $('#login-button');
  }

  async getErrorByText(text) {
    return $(`//h3[@data-test = 'error'][contains(text(), '${text}')]`);
  }

  async isErrorVisible(errorText) {
    return await (await this.getErrorByText(errorText)).isDisplayed();
  }

  async open(url = ENV_URL) {
    await super.open(url);
  }

  async addLogin(text) {
    await helper.setData(this.loginInput, text);
  }

  async addPassword(text) {
    await helper.setData(this.passInput, text);
  }

  async cleanLoginInput() {
    await helper.cleanInput(this.loginInput);
  }

  async cleanPswdInput() {
    await helper.cleanInput(this.passInput);
  }

  async clickonLoginBtn() {
    await helper.clickOnBtn(this.loginBtn);
  }
}

import Base from './base.js';
import { BASE_URL } from '../data/url.js';
import dotenv from 'dotenv';
dotenv.config();

const ENV_URL = process.env.BASE_URL;

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

  async getErroByText(text) {
    return $(`//h3[@data-test = 'error'][contains(text(), '${text}')]`);
  }

  async open(url = ENV_URL || BASE_URL) {
    await super.open(url);
  }
}

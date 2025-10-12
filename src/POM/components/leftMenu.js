import Base from '../base.js';
import { Dashboard } from '../dashboard.page.js';
import { $, $$ } from '@wdio/globals';
import { HeaderPage } from './headerPage.js';
import { Helper } from '../../utils/helpers/helper.js';

const dashboard = new Dashboard();
const headerPage = new HeaderPage();
const helper = new Helper();

export class LeftMenu extends Base {
  get hamburgerMenu() {
    return $('div.bm-menu-wrap');
  }

  get allItemsOption() {
    return $('a#inventory_sidebar_link');
  }

  get elements() {
    return $$('div.bm-menu a');
  }

  get logOutOption() {
    return $('#logout_sidebar_link');
  }

  async AllItemsOptionsDisplayedAfterClick() {
    await headerPage.hamburgerBtn.isClickable();
    await helper.clickOnBtn(headerPage.hamburgerBtn);
    await this.allItemsOption.isClickable();
    await this.allItemsOption.click();
    await this.hamburgerMenu.isDisplayed();
  }

  async verifyAllItemsDisplays() {
    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      const isDisplayed = await element.isDisplayed();
      if (!isDisplayed) {
        return false;
      }
    }
    return true;
  }
}

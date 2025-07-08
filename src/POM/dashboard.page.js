import Base from './base.js';

export class Dashboard extends Base {
  constructor(page) {
    super(page);
  }

  get cartIcon() {
    return $('a.shopping_cart_link');
  }

  get hamburgerBtn() {
    return $('#react-burger-menu-btn');
  }
}

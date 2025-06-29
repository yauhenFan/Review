import Base from "./base";

export class Dashboard extends Base {
    constructor(page) {
        super(page);
    }


    get cartIcon() {
        return $('a.shopping_cart_link')
    }
}
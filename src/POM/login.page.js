import Base  from "./base";

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
        return $(`//h3[@data-test = 'error'][contains(text(), '${text}')]`)
    }

    async addValueToInput(input, value) {
        await input.setValue(value);
    }

    async cleaInput(field) {
        await field.click()
        await browser.keys(['Control', 'a']);
        await browser.keys(['Backspace']);
    }
    
    async clickOnBtn(button) {
        await button.click();
    }
    
    async getIputValue(ele, unputValue) {
        await ele.getValue(unputValue);
    }
}
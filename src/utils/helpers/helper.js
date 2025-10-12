export class Helper {
  async setData(locator, text) {
    await locator.setValue(text);
  }

  async cleanInput(locator) {
    await locator.click();
    await browser.keys(['Control', 'a']);
    await browser.keys(['Backspace']);
  }

  async clickOnBtn(locator) {
    await locator.click();
  }
}

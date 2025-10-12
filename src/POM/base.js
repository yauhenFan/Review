class Base {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    await browser.url(url);
  }

  async maximizeBrowser() {
    await browser.maximizeWindow();
  }
}

export default Base;

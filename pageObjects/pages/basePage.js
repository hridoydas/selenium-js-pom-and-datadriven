import { By, until } from "selenium-webdriver";

export default class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async findElement(locator, timeout = 10000) {
    try {
      return await this.driver.wait(
        until.elementLocated(By.xpath(locator)),
        timeout
      );
    } catch (error) {
      throw new Error(`Element not found: ${locator}\n${error.message}`);
    }
  }

  async click(locator) {
    const element = await this.findElement(locator);
    await element.click();
  }

  async sendKeys(locator, text) {
    const element = await this.findElement(locator);
    await element.clear();
    await element.sendKeys(text);
  }

  async getText(locator) {
    const element = await this.findElement(locator);
    return await element.getText();
  }
}

import BasePage from "./basePage.js";
import { RegLocators } from "../locators/regLocators.js";

export default class RegPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.locators = RegLocators;
  }

  async clickCreateAccount() {
    await this.click(this.locators.createAccount);
  }

  async enterFullName(fullName) {
    await this.sendKeys(this.locators.fullName, fullName);
  }

  async clickSignUp() {
    await this.click(this.locators.signUpButton);
  }
}

import BasePage from "./basePage.js";
import { LoginLocators } from "../locators/loginLocators.js";

export default class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.locators = LoginLocators;
  }

  async clickLoginIcon() {
    await this.click(this.locators.loginIcon);
  }

  async enterEmail(email) {
    await this.sendKeys(this.locators.emailInputField, email);
  }

  async enterPassword(password) {
    await this.sendKeys(this.locators.passwordInputField, password);
  }

  async clickSigninButton() {
    await this.click(this.locators.signInButton);
  }
}

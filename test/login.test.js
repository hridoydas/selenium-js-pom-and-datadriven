import LoginPage from "../pageObjects/pages/loginPage.js";
import testData from "../config/data.json" assert { type: "json" };
import { driver } from "../utils/hook.js";
describe("Evershop site automation", function () {
  this.timeout(300000);

  let loginPage;

  before(async function () {
    loginPage = new LoginPage(driver);
  });
  it("Successfully login with valid credentials", async function () {
    await loginPage.clickLoginIcon();
    await loginPage.enterEmail(testData.signinUser.email);
    await loginPage.enterPassword(testData.signinUser.password);
    await loginPage.clickSigninButton();
  });
});

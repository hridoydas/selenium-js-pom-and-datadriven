import LoginPage from "../pageObjects/pages/loginPage.js";
import RegPage from "../pageObjects/pages/regPage.js";
import testData from "../config/data.json" assert { type: "json" };
import { driver } from "../utils/hook.js";
describe("Evershop site automation", function () {
  this.timeout(30000);

  let loginPage;
  let regPage;

  before(async function () {
    loginPage = new LoginPage(driver);
    regPage = new RegPage(driver);
  });
  it("Successfully login with valid credentials", async function () {
    await loginPage.clickLoginIcon();
    await regPage.clickCreateAccount();
    await regPage.enterFullName(testData.signupUser.fullname);
    await loginPage.enterEmail(testData.signupUser.email);
    await loginPage.enterPassword(testData.signupUser.password);
    // await loginPage.clickSignUp();
  });
});

import LoginPage from "../pageObjects/pages/loginPage.js";
import RegPage from "../pageObjects/pages/regPage.js";
import testData from "../config/data.json" assert { type: "json" };
import { driver } from "../utils/hook.js";
import Utilities from "../utils/utilities.js";
describe("Evershop site automation", function () {
  this.timeout(30000);

  let loginPage;
  let regPage;
  let utilities;

  before(async function () {
    loginPage = new LoginPage(driver);
    regPage = new RegPage(driver);
    utilities = new Utilities();
  });

  it("Successfully Complete Registration with valid Information", async function () {
    await loginPage.clickLoginIcon();
    await regPage.clickCreateAccount();
    const utilitiesData = utilities.generateEmail();
    const email = utilitiesData.randomEmail;
    const fullname = `User ${utilitiesData.timestamp}`;
    utilities.storeSignupInfo({ email, fullname });
    await regPage.enterFullName(testData.signupUser.fullname);
    await loginPage.enterEmail(testData.signupUser.email);
    await loginPage.enterPassword(testData.signinUser.password);
    await regPage.clickSignUp();
    console.log(`Registration completed for the user ${testData.signupUser.email}`)
  });
});

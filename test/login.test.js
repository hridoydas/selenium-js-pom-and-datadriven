import { By, Builder, Browser, Key } from "selenium-webdriver";
import LoginPage from "../pageObjects/pages/loginPage.js";
import testData from "../config/data.json" assert { type: "json" };
import { driver } from "../utils/hooks.js";
describe("Evershop site automation", function () {
  this.timeout(30000);
  // let driver;
  let loginPage;

  before(function () {
    loginPage = new LoginPage(driver);
  });
  before(async function () {
    driver = new Builder().forBrowser(Browser.CHROME).build();
    driver.manage().setTimeouts({ implicit: 10000 });
    loginPage = new LoginPage(driver);
    await driver.get("https://demo.evershop.io/");
    await driver.manage().window().maximize();
  });
  it("Successfully login with valid credentials", async function () {
    await loginPage.clickLoginIcon();
    await loginPage.enterEmail(testData.signinUser.email);
    await loginPage.enterPassword(testData.signinUser.password);
    await loginPage.clickSigninButton();
  });
});

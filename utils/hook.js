import { Builder, Browser } from "selenium-webdriver";
import { config } from "../config/config.js";
import { captureScreenshot } from "./screenshots.js";

export let driver;

before(async function () {
  this.timeout(30000);
  driver = new Builder().forBrowser(Browser.CHROME).build();
  driver.manage().setTimeouts({ implicit: config.timeout });
  await driver.get(config.baseUrl);
  await driver.manage().window().maximize();
});

after(async function () {
  await driver.quit();
});

afterEach(async function () {
  if (this.currentTest.state === "failed") {
    await captureScreenshot(driver, this.currentTest.title);
  }
});

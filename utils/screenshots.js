import { Buffer } from "buffer";

export async function captureScreenshot(driver, testName) {

  try {
    const screenshot = await driver.takeScreenshot();
    if (allure) {
      allure.createAttachment(
        `${testName}-screenshot`,
        Buffer.from(screenshot, "base64"),
        "image/png"
      );
    }
  } catch (error) {
    console.log(`Unable to take screenshot: ${error}`);
  }
}

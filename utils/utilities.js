import testData from "../config/data.json" assert { type: "json" };

export default class Utilities {
  generateEmail() {
    const timestamp = new Date().getTime();
    const randomEmail = `user_${timestamp}@yopmail.com`;
    return { randomEmail, timestamp };
  }

  storeSignupInfo(data) {
    testData.signupUser.fullname = `${data.fullname}`;
    testData.signupUser.email = `${data.email}`;
  }
}

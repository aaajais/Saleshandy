import SignupPage from "../pages/SignupPage";
import users from "../fixtures/users.json";

describe("Saleshandy Test", () => {

  users.forEach((user) => {

    it(`Signup as ${user.type}`, () => {

      cy.log(`Account Type: ${user.type}`);
      cy.log(`Email: ${user.email}`)

      SignupPage.visit();
      SignupPage.click_Signup();
      SignupPage.enterFirstName(user.firstName);
      SignupPage.enterLastName(user.lastName);
      SignupPage.enterEmail(user.email);
      SignupPage.enterPassword(user.password);
      SignupPage.clickLogin();
      cy.wait(6000)
      SignupPage.selectAccountType(user.accountType);
      SignupPage.verifyLoginSuccess(user.type);

    });

  });

});
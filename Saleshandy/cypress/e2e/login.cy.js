import LoginPage from "../pages/LoginPage";
import users from "../fixtures/users.json";

describe("Saleshandy Test", () => {

  users.forEach((user) => {

    it(`Login as ${user.type}`, () => {

      cy.log(`Account Type: ${user.type}`);
      cy.log(`Email: ${user.email}`)

      LoginPage.visit();
      LoginPage.click_Signup();
      LoginPage.enterFirstName(user.firstName);
      LoginPage.enterLastName(user.lastName);
      LoginPage.enterEmail(user.email);
      LoginPage.enterPassword(user.password);
      LoginPage.clickLogin();
      cy.wait(6000)
      LoginPage.selectAccountType(user.accountType);
      LoginPage.verifyLoginSuccess(user.type);

    });

  });

});
class LoginPage {

  visit() {
    cy.visit("/login", { failOnStatusCode: false });
  }

  click_Signup() {
    cy.contains(/sign up/i).click();
  }

  selectAccountType(accountType) {
    const normalized = (accountType || "").toLowerCase().trim();
    const labelMap = {
      "personal use": ["Personal Use", "Personal"],
      personal: ["Personal Use", "Personal"],
      business: ["Business"],
      client: ["Client"],
    };
    const labels = labelMap[normalized] || [accountType];
    cy.get("body").then(($body) => {
      const matchedLabel = labels.find((label) => $body.text().includes(label));

      if (matchedLabel) {
        cy.wrap($body).contains(matchedLabel).click({ force: true });
      } else {
        cy.get('select[name="accountType"]', { timeout: 10000 }).select(accountType);
      }
    });
  }

  enterFirstName(firstName) {
    cy.get('input[name="firstName"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(firstName);
  }

  enterLastName(lastName) {
    cy.get('input[name="lastName"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(lastName);
  }

  enterEmail(email) {
    cy.get('input[name="email"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(email);
  }

  enterPassword(password) {
    cy.get('input[name="password"]', { timeout: 10000 })
      .should("be.visible")
      .clear()
      .type(password);
  }

  clickLogin() {
    cy.get("button[type='submit']", { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  selectAccountType(accountType) {
    cy.contains('span', accountType)
      .parents('label')
      .click();
  }

  signUpForAccount(accountType, user) {
    this.visit();
    this.click_Signup();
    this.selectAccountType(accountType);
    this.enterFirstName(user.firstName || "Test");
    this.enterLastName(user.lastName || "User");
    this.enterEmail(user.email);
  }

  //if select account type personal, business,or client//
  verifyLoginSuccess(accountType) {
    if (accountType === "Personal") {
      this.Personal_verifyPersonal_Freelancer_UI();
      this.Personal_verifyPrimaryGoalUI();
      this.global_verifyUsageUI();
      this.Personal_verifyMonthlyEmailsUI();
      this.Personal_verifyFindUsUI();
      this.clickLetsGetStarted();
      this.verifyPersonal_DashboardUI();
    }

    if (accountType === "Business") {
      this.Business_verifyBusinessDashboardUI();
      this.Business_verify_yes_i_have();
      this.global_verifyUsageUI();
    }

    if (accountType === "Client") {
      this.verifyClientDashboardUI();
    }
  }
  ///---------------------------for Personal account-------------------------------------------////

  Personal_verifyPersonal_Freelancer_UI() {
    cy.contains("Please select your occupation").should("be.visible");
    cy.contains("Freelancer").should("be.visible");
    cy.contains("Influencer").should("be.visible");
    cy.contains("Consultant / Advisor").should("be.visible");
    cy.contains("Other").should("be.visible");
    cy.contains("Freelancer").click();
  }
  Personal_verifyPrimaryGoalUI() {
    cy.contains("What is your primary goal for using Saleshandy?")
      .should("be.visible")
    cy.contains("Generate Leads for my Business").should("be.visible");
    cy.contains("Engage with Prospects").should("be.visible");
    cy.contains("One-time Email Outreach").should("be.visible");
    cy.contains("Recruit Talent").should("be.visible");
    cy.contains("Other").should("be.visible");
    cy.contains("Generate Leads for my Business").click();
  }
  global_verifyUsageUI() {
    cy.contains("How would you use Saleshandy?")
      .should("be.visible");
    cy.contains("Cold Outreach").should("be.visible");
    cy.contains("Lead Finder").should("be.visible");
    cy.contains("Find Leads & Cold Outreach").should("be.visible");
    cy.contains("Cold Outreach").click();
  }
  Personal_verifyMonthlyEmailsUI() {
    cy.contains("How many emails are you likely to send every month?")
      .should("be.visible");
    cy.contains("0 - 30K").should("be.visible");
    cy.contains("30K - 100K").should("be.visible");
    cy.contains("100K - 250K").should("be.visible");
    cy.contains("More than 250K").should("be.visible");
    cy.contains("0 - 30K").click();
  }
  Personal_verifyFindUsUI() {
    cy.contains("How did you find us?")
      .should("be.visible");
    cy.contains("LinkedIn").should("be.visible");
    cy.contains("Blog").should("be.visible");
    cy.contains("Google").should("be.visible");
    cy.contains("Ads").should("be.visible");
    cy.contains("YouTube").should("be.visible");
    cy.contains("Recommendation").should("be.visible");
    cy.contains("LinkedIn").click();
  }
  //click on let's get started button//
  clickLetsGetStarted() {
    cy.contains("Let's Start").click();
  }
  //verify personal dashboard UI//
  verifyPersonal_DashboardUI() {
    // Header
    cy.contains("Welcome").should('be.visible');
    cy.contains('0/4 steps completed').should('be.visible');
    // Main Actions
    cy.contains('Generate AI Sequence').should('be.visible');
    cy.contains('Add Prospects').should('be.visible');
    cy.contains('Add Email Account').should('be.visible');
    cy.contains('Launch Sequence').should('be.visible');
    // Buttons
    cy.contains('Write With AI').should('be.visible');
    cy.contains('Create Sequence').should('be.visible');
    // Table
    cy.contains('Sequence Name').should('be.visible');
    cy.contains('Draft').should('be.visible');

  }

  ///---------------------------for Business account-------------------------------------------////

  Business_verifyBusinessDashboardUI() {
    cy.contains('What is your primary goal for using Saleshandy?')
      .should('be.visible');
    cy.contains('Promote Products / Services').should('be.visible');
    cy.contains('One-time Email Outreach').should('be.visible');
    cy.contains('Outreach Candidates').should('be.visible');
    cy.contains('Link Building').should('be.visible');
    cy.contains('Other').should('be.visible');
    cy.contains('Generate B2B Leads / Book Meetings')
      .should('be.visible')
      .click()
  }
  Business_verify_yes_i_have() {
    // Verify the question
    cy.contains('Have you used a cold outreach tool like Saleshandy before?')
      .should('be.visible');
    // Verify all option buttons
    cy.contains('button', 'Yes, I have')
      .should('be.visible');
    cy.contains('button', 'No, I have not')
      .should('be.visible');
    cy.contains('button', "Not exactly, but I've used an email marketing tool")
      .should('be.visible');
    // Click "Yes, I have"
    cy.contains('button', 'Yes, I have').click();
  }

  ////---------------------------for Client account-------------------------------------------////





  verifyClientDashboardUI() {
    cy.contains("AI NOC");
    cy.contains("Topology");
    cy.contains("Fault Management");
    cy.contains("Performance Management");
    cy.contains("Traffic");
    cy.contains("Anomaly Detection");
    cy.contains("Service Management");
    cy.contains("Inventory Management");
    cy.contains("Subscriber Analytics");
    cy.contains("Audit");
    cy.contains("Roles");
    cy.contains("Admin");
  }

}

export default new LoginPage();
# Saleshandy Cypress Automation Assignment

This workspace contains a Cypress end-to-end automation project for the Saleshandy signup and onboarding flow. The tests use a simple Page Object Model approach to exercise the UI for three account types: Personal, Business, and Client.

## What the project covers

- Opens the Saleshandy login page
- Starts the signup flow
- Enters user details from fixture data
- Selects the appropriate account type
- Verifies the onboarding screens for each account type

## Automation Coverage Summary

### Test Scope
The project covers the **Saleshandy signup and onboarding flow** with automated testing for three account types: Personal, Business, and Client.

### Core Functionality Tested

| Functionality | Coverage |
|---|---|
| **Authentication Flow** | Login page navigation, Signup button click |
| **User Registration** | First name, Last name, Email, Password entry |
| **Account Type Selection** | Personal Use, Business, Client |
| **Onboarding Verification** | Account-specific onboarding screens and UI elements |

### Account Type Coverage

**Personal Account**
- Personal/Freelancer UI verification
- Primary Goal screen
- Usage information screen
- Monthly emails setup
- Find Us screen
- Personal Dashboard

**Business Account**
- Business Dashboard UI verification
- "Yes, I have..." screen
- Usage information screen
- Find Us screen
- Business Dashboard completion

**Client Account**
- Client-specific onboarding flow

### Test Data
- **3 test users** defined in fixtures (`users.json`)
- **Unique emails** required for each test run to avoid conflicts

### Test Execution Details
- **Test Cases**: 3 parameterized test cases (one per account type)
- **Approach**: Page Object Model (POM)
- **Execution Modes**: Interactive (Cypress open) and Headless

### UI Elements Tested
- Input fields: First name, Last name, email, password
- Submit button
- Account type selection buttons/dropdowns
- Onboarding screen elements and navigation

### Coverage Limitations
- No API-level validation
- No error handling scenarios (invalid credentials, duplicate emails)
- No negative test cases
- Single happy path per account type

## Project structure

```text
Saleshandy/
├── cypress/
│   ├── e2e/
│   │   └── signup.cy.js
│   ├── fixtures/
│   │   └── users.json
│   ├── pages/
│   │   └── SignupPage.js
│   └── support/
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## Project setup steps

1. Install Node.js and npm on your machine.
2. Open the project folder:

```bash
cd Saleshandy
```

3. Install the dependencies:

```bash
npm install
```

4. Update the test data in `cypress/fixtures/users.json` with valid user details for the signup flow.
5. Use a unique email address for each test run, because the signup flow may fail if the same email is used repeatedly under user.json file.
6. Confirm the application URL in `cypress.config.js` is correct for the environment you want to test.
7. Make sure the target website is accessible before running the tests.

## How to run the tests

Open Cypress in interactive mode:

```bash
npx cypress open
```

Run the spec in headless mode:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

Run the same spec in Chrome:

```bash
npx cypress run --browser chrome --spec "cypress/e2e/login.cy.js"
```

## Tools and technologies used

- Cypress for end-to-end UI automation
- JavaScript for test implementation
- Page Object Model for reusable UI interactions
- JSON fixtures for test data management
- Node.js and npm for project execution

## Assumptions made

- The application under test is accessible through the URL configured in `cypress.config.js`.
- The signup form fields and onboarding UI elements match the selectors used in `cypress/pages/SignupPage.js`.
- The test users in `cypress/fixtures/users.json` are valid and can complete the signup flow.
- The test is intended to validate the UI behavior of the signup and onboarding experience rather than API-level interactions.

## Notes

- The tests interact with the application through the browser UI.
- The spec loops through the users defined in `cypress/fixtures/users.json`.
- The page object file in `cypress/pages/SignupPage.js` contains the reusable selectors and verification steps.

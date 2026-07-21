# Cypress UI-only POM: Personal, Business, and Client Accounts

This project is a commented Cypress Page Object Model example for testing three account types with one reusable test flow:

- Personal
- Business
- Client

The example does **not** use `cy.request()` or `cy.intercept()`. Login, session validation, navigation, profile update, and logout are performed through the browser UI.

## Project structure

```text
cypress-pom-multi-account-ui-only/
├── cypress/
│   ├── e2e/
│   │   └── account-types.cy.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   ├── FeaturePage.js
│   │   └── ProfilePage.js
│   ├── test-data/
│   │   └── accountTypes.js
│   └── support/
│       └── e2e.js
├── cypress.config.js
├── cypress.env.json
├── cypress.env.example.json
├── package.json
└── .gitignore
```

## Before running

### 1. Update the application URL

Open `cypress.config.js` and replace:

```javascript
baseUrl: 'http://localhost:3000'
```

with your local, QA, or staging application URL.

### 2. Update credentials

Open `cypress.env.json` and replace the example values with real test-user credentials.

The example expects three separate users:

```text
Personal user -> PERSONAL_EMAIL / PERSONAL_PASSWORD
Business user -> BUSINESS_EMAIL / BUSINESS_PASSWORD
Client user   -> CLIENT_EMAIL / CLIENT_PASSWORD
```

### 3. Replace example selectors and routes

The project uses example `data-cy` selectors such as:

```text
login-page
login-email
login-password
login-submit
dashboard-page
dashboard-title
current-account-type
nav-dashboard
nav-profile
```

Update the selectors in the Page Object files to match your application.

Also update example routes such as:

```text
/login
/dashboard
/settings/profile
/subscription
/team
/projects
```

### 4. Check the account permissions

Update `cypress/test-data/accountTypes.js` so that each account has the correct:

- Dashboard title
- Visible menus
- Hidden menus
- Main feature
- Profile test data

## Install

```bash
npm install
```

## Run in the Cypress UI

Start your application in one terminal, then run:

```bash
npm run cy:open
```

Select:

```text
E2E Testing -> Browser -> account-types.cy.js
```

## Run from the terminal

Run only the account test:

```bash
npm run cy:accounts
```

Run it in Chrome:

```bash
npm run cy:accounts:chrome
```

Run all Cypress specs:

```bash
npm run cy:run
```

## Important note about hidden menus

The example assumes restricted menu items are removed from the DOM:

```javascript
.should('not.exist')
```

When your application keeps them in the DOM and hides them with CSS, change the assertion in `DashboardPage.js` to:

```javascript
.should('not.be.visible')
```

## Execution flow

```text
Read account configuration
        ↓
Read that account's email and password
        ↓
Create or restore its Cypress session
        ↓
Open and verify Dashboard
        ↓
Verify visible and restricted menus
        ↓
Open the account-specific feature
        ↓
Update the profile
        ↓
Log out
```

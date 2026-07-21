/*
 * Cypress loads this support file before every spec file.
 *
 * It can later contain:
 * - Custom Cypress commands
 * - Global hooks
 * - Plugin imports
 * - Global exception handling
 *
 * This example imports Page Objects directly inside the spec,
 * so no additional setup is required here.
 */

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore known React minified error 418 originating from the tested app.
  if (err.message && err.message.includes("Minified React error #418")) {
    return false;
  }

  // Let all other uncaught exceptions fail the test.
});

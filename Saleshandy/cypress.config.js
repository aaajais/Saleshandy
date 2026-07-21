const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://my.saleshandy.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 30000,
  }
});
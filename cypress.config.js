const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  watchForFileChanges: true,
  numTestKeptInMemory: 1,
  requestTimeout: 5000,
  responseTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  experimentalMemoryManagement: true,
  e2e: {
    baseUrl: "https://demoqa.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

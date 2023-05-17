const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  watchForFileChanges: true,
  numTestKeptInMemory: 1,
  requestTimeout: 15000,
  responseTimeout: 15000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://demoqa.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

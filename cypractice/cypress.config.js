const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add your event listeners or leave it empty
      return config;
    },
    specPattern: 'cypress/e2e/**/*.js', // Matches all test files in e2e folder
  },
});

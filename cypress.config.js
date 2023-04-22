const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.cy.js',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    // chromeWebSecurity: false,
    // video: false,

  },
})


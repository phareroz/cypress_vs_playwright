const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    "baseUrl": "https://ozh.github.io/cookieclicker",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

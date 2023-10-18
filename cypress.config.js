const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bj2uph",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  reporter: "mochawesome", // ✅ fora do bloco 'e2e'
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    projectId: "qe36i8",
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      // aqui vai qualquer evento de plugin se necessário
      return config;
    },
  },
});

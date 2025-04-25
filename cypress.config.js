const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    reporter: "mochawesome", // Especificar mochawesome aqui
    reporterOptions: {
      reportDir: "cypress/results", // Diretório para armazenar os relatórios
      overwrite: true,
      html: true,
      json: true,
    },
  },
});

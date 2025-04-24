// cypress/E2E/automatização.cy.js

import LoginPage from "./pages/loginPage";
import FormPage from "./pages/formPage";

describe("Testes após login no menu", () => {
  const loginPage = new LoginPage();
  const formPage = new FormPage();

  beforeEach(() => {
    cy.visit(
      "https://thayaneoliveira.github.io/formulario.github.io/login.html"
    );
    loginPage.login("thayane520.biel@gmail.com", "123456");
  });

  it("Verifica mensagem de boas-vindas", () => {
    cy.contains(
      "Bem-vindo ao meu espaço digital de inovação e qualidade!"
    ).should("be.visible");
  });

  it.only("Clica na opção Formulário e preenche formulário", () => {
    cy.contains(
      "Bem-vindo ao meu espaço digital de inovação e qualidade!"
    ).should("be.visible");

    cy.contains("Formulário").click();

    // Preencher o formulário
    formPage.fillForm(
      "Thayane Oliveira",
      "thayane520.biel@gmail.com",
      "92984240118",
      "27"
    );

    // Verificar o alerta de sucesso
    formPage.verifyAlert();

    // Submeter o formulário
    formPage.submitButton().click();
  });
});

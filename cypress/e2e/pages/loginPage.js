// cypress/E2E/pages/loginPage.js

class LoginPage {
  // Seletor para o campo de e-mail
  emailField() {
    return cy.get("#email");
  }

  // Seletor para o campo de senha
  passwordField() {
    return cy.get("#password");
  }

  // Seletor para o botão de login
  loginButton() {
    return cy.get(".signup-button");
  }

  // Método para fazer login
  login(email, password) {
    this.emailField().click().type(email);
    this.passwordField().click().type(password);
    this.loginButton().click();
  }
}

export default LoginPage;

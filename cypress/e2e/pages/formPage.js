// cypress/E2E/pages/formPage.js

class FormPage {
  // Seletor para o campo de nome
  nameField() {
    return cy.get('[type="text"]');
  }

  // Seletor para o campo de e-mail
  emailField() {
    return cy.get('[type="email"]');
  }

  // Seletor para o campo de telefone
  phoneField() {
    return cy.get('[placeholder="Telefone"]');
  }

  // Seletor para o campo de idade
  ageField() {
    return cy.get('[placeholder="Idade"]');
  }

  // Seletor para o botão de envio do formulário
  submitButton() {
    return cy.get("#loginButton");
  }

  // Método para preencher o formulário
  fillForm(name, email, phone, age) {
    this.nameField().click().type(name);
    this.emailField().click().type(email);
    this.phoneField().click().type(phone);
    this.ageField().click().type(age);
  }

  // Método para verificar o alerta de sucesso
  verifyAlert() {
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal("Formulário enviado com sucesso!");
    });
  }
}

export default FormPage;

/// <reference types="cypress" />

Cypress.Commands.add('Login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#login').click();

    /*Validar URL */
    cy.location().should((ur) => {
        expect(ur.pathname).to.eq('/login');
    })

  /* Validar se o botão esta visivel */
    cy.get('button[class="css-1nvbq2d"]').should('be.visible');
})

Cypress.Commands.add('validacaoMensagemLogin', () => {
   /* Validar se a mensagem esta visivel */
   cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');

   /*validar a mensagem esta escrita corretamente */
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', "E-mail e/ou senha inválidos");
})



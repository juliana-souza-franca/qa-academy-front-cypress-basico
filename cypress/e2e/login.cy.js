/// <reference types="cypress" />

const element = require("../fixtures/login.json")


beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
})

afterEach(() => {
    cy.screenshot();
})

describe('Longin', () => {
    it.only('Login com sucesso', () => {
   
      const email = Cypress.env("EMAIL");
      const password = Cypress.env("PASSWORD");

      cy.Login(email, password);

       
    })
    
    it('Login com email valido e com a senha inválida', () => {
    
        cy.get(element.input_email).type(Cypress.env("EMAIL"));
        cy.get(element.input_password).type(Cypress.env("PASSWORD_INVALIDO"));
        cy.get(element.btn_login).click();
     
       cy.validacaoMensagemLogin()
        
    })

    it('Login com email inválido e com a senha válida', () => {
    
        cy.get(element.input_email).type(Cypress.env("EMAIL_INVALIDO"));
        cy.get(element.input_password).type(Cypress.env("PASSWORD"));
        cy.get(element.btn_login).click();
     
        cy.validacaoMensagemLogin()
        
    })
})
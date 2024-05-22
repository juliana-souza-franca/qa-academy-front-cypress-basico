# Projeto de automação Web com Cypress- nivel básico
- Vamos escrever os primeiros casos de teste 
- Utilizamos uma ferramenta poderosa com o recurso que facilita o acesso end-to-end
- Aplicativo Web


# Pré-requisto para utilizar o projeto

##  Sistema Operacional 

-MacOs versão 10.9 ou superior com 64 bit
-Linux Ubuntu versão 20.04 ou superior com 64 bits
-Fodera Linux versão 21 com 64 bits
-Linux Debian versão 8 com 64 bits
-Windows versão 10 ou superior com 64 bits

## Hardware

- Minimo 2 CPUS para rodar o cypress
- Um CPU adicional para gravação de video 
- Um CPU adicional para processo de execução fora do cypress:
      - Servido de aplicativos de Front-End
      - Servidor de aplicativos de Back-End
- Aplicativos de Banco de Dados
-Qualquer Infraestrutura adicional, como por exemplo:
      - Redis (é um cache e banco de dados como serviço totalmente gerenciados para casos de uso em tempo real e permite que os usuários armazenem chaves que fazem o mapeamento para vários tipos de dados)
      - Kafka (é uma plataforma de fluxo de dados open source e distribuída que pode publicar, subscrever, armazenar e processar fluxos de registros em tempo real, podem ser distribuídos em ambientes locais e em nuvens públicas, privadas ou públicas, além de utilizar sistemas operacionais diferentes.)

## Armazenamento
- Memória de 4 GB ou superior para execução de teste

## Gerenciador de Dependencia
  - Node.js versão 18 ou superior 

## Linguagem de programação
- Javascript

## Ferramenta IDE
- Vscode
- Intellij
- Qualquer uma outra da sua preferencia 

## Links para instalação 
- Node.js: https://nodejs.org/en/download
- Vscode: https://code.visualstudio.com/download

##  Links para acessar a Documentação do Cypress
cypress.io: 
https://docs.cypress.io/api/commands/document
https://docs.cypress.io/examples/recipes
https://docs.cypress.io/guides/overview/why-cypress

## Configuração do ambiente 
Para iniciarmos o projeto com framework cypress é necessario utlizar: 
- IDE Vscode
- Ferramenta Only para executar bloco de código especifico que fica na Extesão da IDE Vscode
- Ferramenta Es6 Mocha Snippets que fica na Extesão da IDE Vscode
- Ferramenta Cypress Snippets que fica na Extesão da IDE Vscode

## Instalação inicial 
É necessario ter IDE, gerenciador de dependencia e o framework cypress, dica:
- Faça download nodejs com a versão compativel do seu sistema operacional
- Faça download Vscode com a versão compativel do seu sistema operacional
- Instala o framework cypress

## Comando para instalar Framework Cypress
Para instalar o cypress é necessario ter instalado no node.js.
npm install cypress --save-dev

## Configuração do cypress
Acessa o package.json e utliza o comando:
{
  "devDependencies": {
    "cypress": "^13.6.2"
  },
 "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
}

## Comando para executar o cypress
São duas maneira para executar o cypress:
   - npx cypress open
   - npm run cypress:open
   - npm run cypress:run  (handler)

# Estruturar o projeto

## Configuração para video e screenshot
Para realizar video é necessario acessar o arquivo cypress.config.js e colocar o comando:
  video: true,
  videoCompression: false,
  videosFolder: 'cypress/videos'

Para realizar screenshot é necessario acessar o arquivo cypress.config.js e colocar o comando:
 screenshotOnRunFailure: true,
 screenshotsFolder: 'cypress/screenshots'
 E na pasta e2e no arquivo nome_do_arquivo.cy.js você chamar ele, por exemplo:
  afterEach(() => {
    cy.screenshot();
})

 ## Estruturação de massa de teste e seus elementos
 Existem duas maneiras para deixar a massa de teste implicita:
    - Criar arquivo 'cypress.env.js' e dentro desse arquivo colocar os dados, por exemplo:
    {
    "EMAIL":"ju@test.com",
    "PASSWORD": "000@Test",

    "EMAIL_INVALIDO":"juliana_s@test.com.br",
    "PASSWORD_INVALIDO": "000Test"
} 
E na pasta e2e no arquivo cy.js chamar a massa usando, por exemplo:
.type(Cypress.env("EMAIL"));

   - Na pasta fixtures cria um arquivo 'login_element.json' e dentro dele você coloca os dados que quer deixar 
   implicito, por exemplo:
      {
   "input_email": "#email",
    "input_password": "#password",
    "btn_login": "#login",

   "msg_Arlet": "[class='MuiAlert-message css-1xsto0d']"

}

Depois que salvou o arquivo na fixtures, você vai na pasta e2e no arquivo cy.js estancia o arquivo, por exemplos: const element = require("../fixtures/login.json")
e no código você vai colocar, exemplo: cy.get(element.input_email)

## Deixando o código limpo
  Na pasta support no arquivo commands.js dentro dele você usar esse comando, por exemplo:

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

Depois você vai na pasta e2e no arquivo nome_do_arquivo.cy.js , por exemplo

describe('Longin', () => {
    it('Login com sucesso', () => {
   
      const email = Cypress.env("EMAIL");
      const password = Cypress.env("PASSWORD");

  cy.Login(email, password);

    })

  # Boas praticas

  Sempre quando for iniciar o projeto de automação pelo Cypress não deixa de colocar a referencia do tipo cypress:
  /// <reference types="cypress" />






           




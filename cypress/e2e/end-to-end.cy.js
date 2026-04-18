import { faker } from '@faker-js/faker';
describe('Testes End To End do fluxo de cadastro e login', () => {

    /* 
    Testes End To End ou Testes de ponta a ponta, ligam uma série de funcionalidades de um sistema,
    simulando o comportamento do usuário final. Esses testes verificam se diferentes partes do sistema
    funcionam corretamente quando integradas, garantindo que o fluxo completo de uma funcionalidade
    funcione como esperado.
    Aqui iremos criar um teste end to end que cobre o fluxo de cadastro e login de um usuário em um sistema web.
    Em apenas um teste, ou seja, em um único "it", iremos:
    1. Acessar a página de cadastro.
    2. Preencher o formulário de cadastro com dados válidos.
    3. Submeter o formulário e verificar se o cadastro foi bem-sucedido.
    4. Acessar a página de login.
    5. Preencher o formulário de login com as credenciais do usuário recém-cadastrado.
    6. Submeter o formulário de login e verificar se o login foi bem-sucedido.

    Use as boas práticas aprendidas até agora para estruturar o teste.
    */

    beforeEach(() => {
        // Configurações iniciais, se necessário
    });


    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
       cy.visit ('http://localhost:3000/register.html');
        cy.get('#name').type('Usuario Teste')
        cy.get('#email').type(faker.internet.email())
        cy.get('#password').type('senha_segura123')
        cy.get('#phone').type(faker.phone.number('##########'))
        cy.get('#confirm-password').type('senha_segura123')
       cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', '/dashboard.html')
        cy.visit('http://localhost:3000/login.html')
          
  
    cy.get('#email').type('Tanner69@yahoo.com')
    cy.get('#password').type('senha_segura123')
    cy.get('#login-btn').click()
  cy.url().should('include', '/dashboard')
    });
});
import { faker } from '@faker-js/faker';

describe('Fluxo End To End Cadastro e Login', () => {

  it('Deve cadastrar e logar com usuário criado', () => {

    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const senha = 'senha_segura123'
    const telefone = faker.phone.number('##########')

    cy.register(nome, email, senha, telefone)

    cy.url().should('include', '/dashboard.html')

    cy.login(email, senha)

    cy.url().should('include', '/dashboard')
  })

})
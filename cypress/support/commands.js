Cypress.Commands.add('addProdutoCarrinho', (productName = '') => {
    cy.visit('/categ')
    cy.get('a.nome-produto')
        .contains(productName)
        .should('be.visible')
        .click()

    cy.get('div.principal > .acoes-produto > .comprar > .botao')
        .should('be.visible')
        .click()
        .then(() => {
            cy.url().should('include', '/carrinho')
        })
})

Cypress.Commands.add('addCupomCarrinho', (cupomName = '')=> {
    cy.get('#usarCupom')
                .type(cupomName)
            cy.get('#btn-cupom')
                .click()
    
})
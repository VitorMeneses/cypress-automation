describe('Validação de Cupons de Desconto', () => {
    let dadosCupons;

    before(() => {
        cy.fixture('cupons.json').then((dados) => {
            dadosCupons = dados;
        });
    });

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    describe('Cupons válidos', () => {
        // Teste de Frete Grátis
        Cypress._.forEach(['frete-gratis'], () => {
            it('deve aplicar frete grátis ao inserir cupom "FRETEGRATIS"', () => {
                const { codigo, mensagem } = dadosCupons.cupons.freteGratis;

                cy.addProdutoCarrinho(dadosCupons.produto);
                cy.addCupomCarrinho(codigo);

                cy.get('.cupom-codigo')
                    .as('codigoCupom')
                    .should('be.visible')
                    .and('have.text', codigo);

                cy.get('.cupom-valor > .cor-secundaria')
                    .as('valorDesconto')
                    .should('be.visible')
                    .and('have.text', mensagem);
            });
        });

        // Teste de Desconto 10%
        Cypress._.forEach(['desconto-porcentagem'], () => {
            it('deve aplicar 10% de desconto ao inserir cupom "10OFF"', () => {
                const { codigo, percentual } = dadosCupons.cupons.desconto10;

                cy.addProdutoCarrinho(dadosCupons.produto);
                cy.addCupomCarrinho(codigo);

                cy.get('.cupom-codigo')
                    .as('codigoCupom')
                    .should('be.visible')
                    .and('have.text', codigo);

                cy.get('#cupom_desconto')
                    .as('descontoAplicado')
                    .should('be.visible')
                    .and('have.attr', 'data-cupom-desconto-codigo', codigo)
                    .and('have.attr', 'data-desconto-valor', percentual);

                cy.get('#cupom_valor_real')
                    .as('valorMonetario')
                    .should('be.visible')
                    .invoke('text')
                    .then(text => {
                        const valorDesconto = Number(text.replace(/[^0-9,]/g, '').replace(',', '.'));
                        expect(valorDesconto, 'Valor do desconto deve ser maior que zero').to.be.greaterThan(0);
                    });
            });
        });

        // Teste de Desconto Fixo
        Cypress._.forEach(['desconto-fixo'], () => {
            it('deve aplicar R$ 30,00 de desconto ao inserir cupom "30REAIS"', () => {
                const { codigo, valor } = dadosCupons.cupons.desconto30Reais;

                cy.addProdutoCarrinho(dadosCupons.produto);
                cy.addCupomCarrinho(codigo);

                cy.get('.cupom-codigo')
                    .as('codigoCupom')
                    .should('be.visible')
                    .and('have.text', codigo);

                cy.get('#cupom_desconto')
                    .as('descontoAplicado')
                    .should('be.visible')
                    .contains(valor);
            });
        });
    });

    describe('Cupons inválidos', () => {
        // Teste de Cupom Vencido
        Cypress._.forEach(['cupom-vencido'], () => {
            it('não deve permitir uso de cupom vencido', () => {
                const { codigo } = dadosCupons.cupons.cupomVencido;
                const { cupomInvalido } = dadosCupons.mensagens;

                cy.addProdutoCarrinho(dadosCupons.produto);
                cy.addCupomCarrinho(codigo);

                cy.get('.alert-danger')
                    .as('mensagemErro')
                    .should('be.visible')
                    .and('contain', cupomInvalido);
            });
        });
    });
});

describe('Controlled input tests for Form component', () => {
    beforeEach(() => cy.visit('http://localhost:3000'));

    it('Has a working name input', () => {
        cy.get('#nameInput')
        .type('John Jacob')
        .should('have.value','John Jacob')
    })

    it('Has working email input', () => {
        cy.get('#emailInput')
        .type('fake@notreal.com')
        .should('have.value','fake@notreal.com')
    })

    it('Has working password input', () => {
        cy.get('#passwordInput')
        .type('4567money$')
        .should('have.value','4567money$')
    })

    it('Has working terms of service checkbox', () => {
        cy.get('#tos')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked')
    })
})
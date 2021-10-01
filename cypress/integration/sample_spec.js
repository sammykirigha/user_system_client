const { Email } = require("@mui/icons-material")

describe('My First Test', function () {
    it('Find an element', function () {
        cy.visit('http://localhost:3000')
        cy.get('#appContainer').should('exist')

        cy.get('#linkId').should('exist').click()
        cy.url().should('include', '/auth/login')
        cy.get('#signup').should('exist').click()
        cy.get('#userSign').type('FakeUser').should('have.value', 'FakeUser')
        cy.get('#signupEmail').type('fake@gmail.com').should('have.value', 'fake@gmail.com')
        cy.get('#signupPass').type('Pass123.')
        cy.get('#conPass').type('Pass123.')
        cy.get('#signupSubmit').should('exist').click()
        cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com')
        cy.get('#password').type('Pass123.')
    })
})
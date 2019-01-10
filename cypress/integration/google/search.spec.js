/// <reference types="Cypress" />

context('Actions', () => {
	beforeEach(() => {
		cy.visit('https://google.com')
	})

	it('.type() - type into a DOM element', () => {
		// https://on.cypress.io/type
		cy.get('input[type=text]')
			.type('nodejs.org{enter}')
			.get('input[name="q"]').should('have.value', 'nodejs.org');
	})
});  
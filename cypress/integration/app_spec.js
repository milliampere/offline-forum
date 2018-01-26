describe('List all posts', () => {

	beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.flex-wrap').as('list'); // Alias @list för att slippa skriva hela  
  })
  
  it('should display posts', () => {
    cy.get('@list')
		.children()
		.should('have.length', 4)
  })

})

describe('Add a post', () => {
	beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('should be able to add a post', () => {
    cy.get('#title')
    .type('Title', {delay: 100})
    cy.get('#content')
    .type('Content', {delay: 100})
    cy.get('.flex-wrap > :nth-child(1) > .bg-indigo-dark')
    .click({delay: 200})
    cy.get(':nth-child(2) > article.mb-2 > h2')
    .should('contain', 'Title')
    cy.pause()
  })

})
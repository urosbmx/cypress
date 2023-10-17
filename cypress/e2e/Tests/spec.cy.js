describe('Visit link and clik on menu button', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get(".navbar-brand").click();
    cy.get(".dropdown-toggle").click(focus);
    
  })
})
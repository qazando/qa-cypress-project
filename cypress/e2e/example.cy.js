describe('Example Test', () => {
  it('should visit the page', () => {
    cy.visit('/');
    cy.get('h1').should('be.visible');
  });
});

beforeEach(() => {
  cy.visit('/')
})

it('gets and checks navigation links', () => {
  const navText = ['About', 'Timeline', 'Key Figures', 'Collections', 'Partners']
  const navLinks = ['/about', '/timeline', '/key-figures', '/collections', '/partners']
  
  cy.get('[data-cy=footer__links]')
    .find('a')
    .should('have.length', 5)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('contain.text', navText[index])
      .should('have.attr', 'href', navLinks[index])
  })
})
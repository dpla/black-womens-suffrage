beforeEach(() => {
  cy.visit('/')
})

it('Checks that footer logo navigates Home when clicked ', () => {
  cy.get('[data-cy=footer__logo]')
    .find('a')
    .should('have.attr', 'href', '/')
})


it('Gets and checks navigation links', () => {
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

it('Checks that DPLA footer logo navigates Home when clicked ', () => {
  cy.get('[data-cy=footer__logo_dpla]')
    .should('have.attr', 'href', 'http://dp.la/')
})

it('Gets and checks small footer navigation links', () => {
  const navText = ['Visit DPLA', 'Harmful Language Statement']
  const navLinks = ['http://dp.la/', '/harmful-language-statement']
  
  cy.get('[data-cy=footer__links_small]')
    .find('a')
    .should('have.length', 2)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('contain.text', navText[index])
      .should('have.attr', 'href', navLinks[index])
  })
})
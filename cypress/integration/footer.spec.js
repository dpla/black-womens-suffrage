describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Checks that footer logo navigates Home when clicked ', () => {
    cy.get('[data-cy=footer__logo]')
      .find('a')
      .should('have.attr', 'href', '/').snapshot({name: "Footer logo link"})
  })
  
  
  it('Gets and checks navigation links', () => {
    const navText = ['About', 'Timeline', 'Key Figures', 'Collections', 'Partners']
    const navLinks = ['/about', '/timeline', '/key-figures', '/collections', '/partners']
    
    cy.checkNavigationLinks('[data-cy=footer__links]', 5, navText, navLinks)
  })
  
  it('Checks that DPLA footer logo navigates Home when clicked ', () => {
    cy.get('[data-cy=footer__logo_dpla]')
      .should('have.attr', 'href', 'http://dp.la/').snapshot({name: "DPLA Footer logo link"})
  })
  
  it('Gets and checks small footer navigation links', () => {
    const navText = ['Visit DPLA', 'Harmful Language Statement']
    const navLinks = ['http://dp.la/', '/harmful-language-statement']
    
    cy.checkNavigationLinks('[data-cy=footer__links_small]', 2, navText, navLinks)
  })
})
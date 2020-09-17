// if (Cypress.config('SITE_ENV') == 'pro') {

  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully loads homepage', () => {
    cy.title().should('eq', "Black Women's Suffrage | DPLA")
  })

  it('checks that hero banner is visible', () => {
    cy.get('[data-cy=home__banner]')
      .contains('Black women’s suffrage.')
      .should('be.visible')
  })

  it('checks that search input works and returns results', () => {
    cy.get('[type="search"]').type('truth')
    cy.get('[type="submit"]').click()
    cy.location('href').should('eq', `${Cypress.config('baseUrl')}/search?q=truth`)
    cy.get('[data-cy=list__item]')
  })

  it('Checks that all Round Buttons', () => {
    const buttonText = ['LEARN MORE', 'SEARCH THE COLLECTION', 'SEE TIMELINE', 'SEE KEY FIGURES', 'SEE ALL COLLECTIONS','LEARN MORE ABOUT PARTNERS', 'SEARCH THE COLLECTION']
    const buttonLinks = ['/about', '/search', '/timeline', '/key-figures', '/collections','/partners', '/search']

    cy.get('[data-cy=round_button]')
    .should('have.length', 7)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('contain.text', buttonText[index])
      .should('have.attr', 'href', buttonLinks[index])
    })
  })
// }
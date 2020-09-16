beforeEach(() => {
  cy.visit('/')
  cy.viewport(320, 480)
})

it('Check that mobile navbar is visible', () => {
  cy.get('[data-cy=navbar]').should('not.be.visible')
  cy.get('[data-cy=navbar__mobile]').should('be.visible')
})

it('Checks that mobile navbar toggles visibility on icon click', () => {
  cy.get('[data-cy=navbar__mobile_links]').should('not.be.visible')
  cy.get('[data-cy=menuDisplayed]').should('be.visible').click()
  cy.get('[data-cy=nav__links_mobile]').should('be.visible')
})


it('Checks that mobile BWS logo navigates Home when clicked ', () => {
  cy.get('[data-cy=nav__logo_mobile]')
    .find('a')
    .should('have.attr', 'href', '/')
})

it('Gets and checks mobile navigation links', () => {
  const navText = ['About', 'Timeline', 'Key Figures', 'Collections', 'Partners', 'Visit DPLA', 'Harmful Language Statement']
  const navLinks = ['/about', '/timeline', '/key-figures', '/collections', '/partners', 'https://dp.la', '/harmful-language-statement']
  cy.get('[data-cy=menuDisplayed]').click()

  cy.get('[data-cy=nav__links_mobile]')
    .find('a')
    .should('have.length', 7)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('contain.text', navText[index])
      .should('have.attr', 'href', navLinks[index])
  })
})

it('Checks that using mobile searchbar in menu returns data', () => {
  cy.get('[data-cy=menuDisplayed]').click()

  cy.get('[data-cy=searchbar__mobile]')
  .should('be.visible')


  cy.get('[data-cy=searchbar__mobile]').within(() => {
    cy.get('[type="search"]').type('truth')
    cy.get('[data-cy=curved_button__submit]').click()
  })
  
  cy.location('href').should('eq', `${Cypress.config('baseUrl')}/search?q=truth`)
  cy.get('[data-cy=list__item]')

  cy.go(-1)
})
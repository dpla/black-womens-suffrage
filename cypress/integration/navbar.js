beforeEach(() => {
  cy.visit('/')
})

it('Check that desktop navbar is visible', () => {
  cy.get('[data-cy=navbar]').should('be.visible')
  cy.get('[data-cy=navbar__mobile]').should('not.be.visible')
})

it('Checks that BWS logo navigates Home when clicked ', () => {
  cy.get('[data-cy=nav__logo]')
    .find('a')
    .should('have.attr', 'href', '/')
})

it('Gets and checks navigation links', () => {
  const navText = ['About', 'Timeline', 'Key Figures', 'Collections', 'Partners', 'Visit DPLA']
  const navLinks = ['/about', '/timeline', '/key-figures', '/collections', '/partners', 'https://dp.la']

  cy.get('[data-cy=nav__links]')
    .find('li').find('a')
    .should('have.length', 6)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('contain.text', navText[index])
      .should('have.attr', 'href', navLinks[index])
  })
})

it('Checks that searchbar appears when icon is clicked ', () => {
  cy.get('[data-cy=searchbar__icon]')
    .click()

  cy.get('[data-cy=searchbar]')
  .should('be.visible')


  cy.get('[data-cy=searchbar]').within(() => {
    cy.get('[type="search"]').type('truth')
    cy.get('[data-cy=curved_button__submit]').click()
  })
  
  cy.location('href').should('eq', `${Cypress.config('baseUrl')}/search?q=truth`)
  cy.get('[data-cy=list__item]')

  cy.go(-1)
})
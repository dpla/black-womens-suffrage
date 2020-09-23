beforeEach(() => {
  cy.visit('/collections/ida-b-wells')
})

it('successfully loads collections page', () => {
  cy.checkTitle("Ida B. Wells Barnett Papers | DPLA")
})

it('checks that collection intro banner is visible', () => {
  cy.get('[data-cy=collection_header__name]')
  .should('be.visible')
  .contains('Ida B. Wells Barnett Papers')
})

it('checks that items are visible', () => {
  cy.get('[data-cy=collection_item]')
  .should('have.length', 69)
  .should('be.visible')
})

it('checks that when item is clicked that route leads to ItemView', () => {
  cy.get('[data-cy=collection_item]').first()
  .click()
  .location('href').should('eq', `${Cypress.config('baseUrl')}/collections/ida-b-wells/ibwells-0010-001-06`)

  cy.get('[data-cy=item_view__main]')
  .should('be.visible')
})
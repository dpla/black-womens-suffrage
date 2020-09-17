beforeEach(() => {
  cy.visit('/about')
})

it('successfully loads homepage', () => {
  cy.title().should('eq', "About Black Women's Suffrage | DPLA")
})

it('checks that hero banner is visible', () => {
  cy.get('[data-cy=banner]').should('be.visible')
  cy.get('[data-cy=banner]').contains('ABOUT')
  cy.get('[data-cy=banner]').contains("For Black women, the fight wasn't over in 1920. Their movement for gender and racial equality continues.") 
})

it('Checks that all Round Buttons have correct links', () => {
  const buttonText = ['SEE HARMFUL LANGUAGE STATEMENT', 'SEARCH THE COLLECTION']
  const buttonLinks = ['/harmful-language-statement', '/search']

  cy.get('[data-cy=round_button]')
  .should('have.length', 2)
  .each((elem, index) => {
    cy.wrap(elem)
    .should('contain.text', buttonText[index])
    .should('have.attr', 'href', buttonLinks[index])
  })
})
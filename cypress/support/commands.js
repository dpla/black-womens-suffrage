require('@cypress/snapshot').register()

Cypress.Commands.add('getTimelineNav', () => {
  cy.get('[data-cy=timeline__left]')
  .find('li > a')
})

Cypress.Commands.add('checkRoundButtonLinks', (length, text, links) => {
  cy.get('[data-cy=round_button]')
  .should('have.length', length)
  .each((elem, index) => {
    cy.wrap(elem)
    .should('contain.text', text[index])
    .should('have.attr', 'href', links[index]).snapshot({name: `Round Button ${index + 1}`})
  })
})

Cypress.Commands.add('checkTitle', (title) => {
  cy.title().should('eq', title).snapshot({name: "Page title"})
})

Cypress.Commands.add('checkBannerIsVisible', (title, text) => {
  cy.get('[data-cy=banner]').should('be.visible')
  cy.get('[data-cy=banner]').contains(title)
  cy.get('[data-cy=banner]').contains(text).snapshot({name: "Page banner"})
})

Cypress.Commands.add('checkNavigationLinks', (element, length, text, links) => {
  cy.get(element)
    .find('a')
    .should('have.length', length)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('contain.text', text[index])
      .should('have.attr', 'href', links[index]).snapshot({name: `Nav Link ${index + 1}`})
  })
})

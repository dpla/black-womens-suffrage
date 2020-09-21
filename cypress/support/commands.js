// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
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
    .should('have.attr', 'href', links[index])
  })
})

Cypress.Commands.add('checkTitle', (title) => {
  cy.title().should('eq', title)
})

Cypress.Commands.add('checkBannerIsVisible', (title, text) => {
  cy.get('[data-cy=banner]').should('be.visible')
  cy.get('[data-cy=banner]').contains(title)
  cy.get('[data-cy=banner]').contains(text)
})

Cypress.Commands.add('checkNavigationLinks', (element, length, text, links) => {
  cy.get(element)
    .find('a')
    .should('have.length', length)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('contain.text', text[index])
      .should('have.attr', 'href', links[index])
  })
})

beforeEach(() => {
  cy.visit('/timeline')
})

const timelineOptions = [
  "1820-1859",
  "1860-1869",
  "1870-1889",
  "1890-1899",
  "1900-1909",
  "1910-1919",
  "1920-1929",
  "1930-1959",
  "1960-present",
  "Sources"
]

// it('successfully loads homepage', () => {
//   cy.title().should('eq', "1820-1859 | Black Women's Suffrage Timeline | DPLA")
// })

// it('checks that hero banner is visible', () => {
//   cy.get('[data-cy=banner]').should('be.visible')
//   cy.get('[data-cy=banner]').contains('TIMELINE')
//   cy.get('[data-cy=banner]').contains("Marching toward progress: the journey to Black women’s suffrage.") 
// })

// it('Checks that left navigation has correct href', () => {
//   cy.get('[data-cy=timeline__left]')
//   .find('li > a').should('have.length', 10)
//   .each((elem, index) => {
//     cy.wrap(elem)
//     .should('contain.text', timelineOptions[index])
//     .should('have.attr', 'href', `/timeline/${timelineOptions[index]}`)
//   })
// })

// it('Checks that left navigation changes route when clicked', () => {
//  cy.get('[data-cy=timeline__left]')
//  .find('li > a')
//  .each((elem, index) => {
//    cy.wrap(elem)
//    .click()
//    .location('href').should('eq', `${Cypress.config('baseUrl')}/timeline/${timelineOptions[index]}`)
//   })
// })

// it('Checks that left navigation changes main component when clicked', () => {
//   cy.get('[data-cy=timeline__left]')
//   .find('li > a')
//   .each((elem, index) => {
//     cy.wrap(elem)
//     .click()

//     cy.get('[data-cy=timeline__title]')
//     .should('contain.text', timelineOptions[index])
//    })
//  })
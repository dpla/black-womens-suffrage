describe('Timeline Page', () => {
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
  
  const timelineLinks = [
    "/timeline/1820-1859",
    "/timeline/1860-1869",
    "/timeline/1870-1889",
    "/timeline/1890-1899",
    "/timeline/1900-1909",
    "/timeline/1910-1919",
    "/timeline/1920-1929",
    "/timeline/1930-1959",
    "/timeline/1960-present",
    "/timeline/Sources"
  ]
  
  it('successfully loads timeline page', () => {
    cy.checkTitle("1820-1859 | Black Women's Suffrage Timeline | DPLA")
  })
  
  it('checks that hero banner is visible', () => {
    cy.checkBannerIsVisible('TIMELINE', "Marching toward progress: the journey to Black women’s suffrage.")
  })
  
  it('Checks that left navigation has correct href', () => {
    cy.checkNavigationLinks('[data-cy=timeline__left]', 10, timelineOptions, timelineLinks)
  })
  
  it('Checks that left navigation changes route when clicked', () => {
    cy.getTimelineNav()
      .each((elem, index) => {
        cy.wrap(elem)
          .click()
          .location('href').should('eq', `${Cypress.config('baseUrl')}/timeline/${timelineOptions[index]}`)
      })
  })
  
  it('Checks that left navigation changes main component when clicked', () => {
    cy.getTimelineNav()
      .each((elem, index) => {
        cy.wrap(elem)
          .click()
  
        cy.get('[data-cy=timeline__title]')
          .should('contain.text', timelineOptions[index])
      })
  })
  
  // it('Tests pagination', () => {
  
  // })
})
beforeEach(() => {
  cy.visit('/about')
})

it('successfully loads about page', () => {
  cy.checkTitle("About Black Women's Suffrage | DPLA")
})

it('checks that hero banner is visible', () => {
  cy.checkBannerIsVisible('ABOUT', "For Black women, the fight wasn't over in 1920. Their movement for gender and racial equality continues.")
})

it('Checks that all Round Buttons have correct links', () => {
  const buttonText = ['SEE HARMFUL LANGUAGE STATEMENT', 'SEARCH THE COLLECTION']
  const buttonLinks = ['/harmful-language-statement', '/search']

  cy.checkRoundButtonLinks(2, buttonText, buttonLinks)
})
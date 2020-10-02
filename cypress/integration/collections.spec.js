describe('Collections Page', () => {
  beforeEach(() => {
    cy.visit('/collections')
  })

  it('Successfully loads collections page', () => {
    cy.checkTitle("Black Women's Suffrage: Collections | DPLA")
  })

  it('Checks that hero banner is visible', () => {
    cy.checkBannerIsVisible('COLLECTIONS', 'Telling the story of Black women’s suffrage, one artifact at a time.')
  })

  it('Checks that VIEW COLLECTION button leads to collection', () => {
    const collectionButtonText = ['VIEW COLLECTION']
    const collectionLinks = ['/collections/ida-b-wells']

    cy.get('[data-cy=collection__active]')
      .should('have.length', 1)
      .each((elem, index) => {
        cy.wrap(elem)
          .should('contain.text', collectionButtonText[index])
          .click()
          .location('href').should('eq', `${Cypress.config('baseUrl')}${collectionLinks[index]}`).snapshot({name: `View Collection button ${index + 1}`})
      })
  })

  it("Checks that COMING SOON button doesn't lead to collection", () => {
    cy.get('[data-cy=collection__inactive] > a')
      .should('not.exist')
  })

  it('Checks that primary source set links lead to primary source set', () => {
    const primarySourceSet = [
      "The American Abolitionist Movement",
      "Ida B. Wells and Anti-Lynching Activism",
      "Women's Suffrage: Campaign for the Nineteenth Amendment",
      "Fannie Lou Hamer and the Civil Rights Movement in Mississippi",
      "The Black Power Movement",
      "The Equal Rights Amendment"
    ]
    const primarySourceSetLinks = [
      "https://dp.la/primary-source-sets/the-american-abolitionist-movement",
      "https://dp.la/primary-source-sets/ida-b-wells-and-anti-lynching-activism",
      "https://dp.la/primary-source-sets/women-s-suffrage-the-campaign-for-the-nineteenth-amendment",
      "https://dp.la/primary-source-sets/fannie-lou-hamer-and-the-civil-rights-movement-in-rural-mississippi",
      "https://dp.la/primary-source-sets/the-black-power-movement",
      "https://dp.la/primary-source-sets/the-equal-rights-amendment"
    ]

    cy.checkNavigationLinks('[data-cy=primary_source_set]', 6, primarySourceSet, primarySourceSetLinks)
  })
})
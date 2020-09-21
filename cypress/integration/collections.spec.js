beforeEach(() => {
  cy.visit('/collections')
})

it('successfully loads homepage', () => {
  cy.checkTitle("Black Women's Suffrage: Collections | DPLA")
})

it('checks that hero banner is visible', () => {
  cy.checkBannerIsVisible('COLLECTIONS', 'Telling the story of Black women’s suffrage, one artifact at a time.')
})

// it('checks that VIEW COLLECTION button leads to collection', () => {
//   const collectionButtonText = ['VIEW COLLECTION']
//   const collectionLinks = ['/collections/ida-b-wells']

//   cy.checkNavigationLinks('[data-cy=collection__active]', 1, collectionButtonText, collectionLinks)
// })

it("checks that COMING SOON button doesn't lead to collection", () => {
  cy.get('[data-cy=collection__inactive] > a')
    .should('not.exist')
})

it('checks that primary source set links lead to primary source set', () => {
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
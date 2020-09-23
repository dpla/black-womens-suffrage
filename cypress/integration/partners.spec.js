describe('Partners Page', () => {
  beforeEach(() => {
    cy.visit('/partners')
  })
  
  it('successfully loads partners page', () => {
    cy.checkTitle("Black Women's Suffrage: Partners | DPLA")
  })
  
  it('checks that hero banner is visible', () => {
    cy.checkBannerIsVisible('PARTNERS', "Reconstructing visibility of Black women's activism together.")
  })
  
  const imageOfflinks = [
    "https://www.amistadresearchcenter.org/",
    "https://www.auctr.edu/",
    "http://www.socallib.org/",
    "https://cmlibrary.org",
    "https://avery.cofc.edu/",
    "https://www.tuskegee.edu/libraries"
  ]
  
  const textOfflinks = [
    "https://www.auctr.edu/",
    "https://www.tuskegee.edu/libraries",
    "https://avery.cofc.edu/",
    "https://www.amistadresearchcenter.org/",
    "http://www.socallib.org/",
    "https://cmlibrary.org",
    "https://dp.la/news/dpla-announces-new-partnerships-with-five-libraries-and-archives-to-build-national-digital-black-womens-suffrage-collection",
    "https://www.pivotalventures.org/",
    "mailto:shanee@dp.la"
  ]
  
  it('checks that images lead to partner\'s websites', () => {
    cy.get('[data-cy=image_offlink]')
    .should('have.length', 6)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('have.attr', 'href', imageOfflinks[index])
    })
  })
  
  it('checks that text offlinks lead to partner\'s websites', () => {
    cy.get('[data-cy=text_offlink]')
    .should('have.length', 9)
    .each((elem, index) => {
      cy.wrap(elem)
      .should('have.attr', 'href', textOfflinks[index])
    })
  })
  
  it('Checks round buttons on page', () => {
    cy.get('[data-cy=round_button]')
    .should('have.length', 1)
    .should('contain.text', 'SEE LIVE RECORDING')
    .should('have.attr', 'href', "https://dpla.zoom.us/rec/play/75Z8Ie6h_DI3T9PEtgSDVPEoW9TuJqis13BN_qIKzxmyVHMKNgamYLsWZeMsg3xlnOgP_huLHvi6gzs5?autoplay=true&startTime=1594918908000")
  })
})
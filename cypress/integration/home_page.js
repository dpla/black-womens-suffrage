// if (Cypress.config('SITE_ENV') == 'pro') {

  beforeEach(() => {
    cy.visit('/')
  })

  // it('successfully loads homepage', () => {
  //   cy.title().should('eq', "Black Women's Suffrage | DPLA")
  // })


  // it('checks that hero banner is visible', () => {
  //   cy.get('[data-cy=home__banner]')
  //     .contains('Black women’s suffrage.')
  //     .should('be.visible')
  // })

  // it('checks that search input works and returns results', () => {
  //   cy.get('[type="search"]').type('truth')
  //   cy.get('[type="submit"]').click()
  //   cy.location('href').should('eq', `${Cypress.config('baseUrl')}/search?q=truth`)
  //   cy.get('[data-cy=list__item]')
  // })



  // it('checks that NewsLane component is visible', () => {
  //   cy.get('[data-cy=NewsLane]')
  //     .should('be.visible')
  // })

  // it('checks that StayInformed component is visible', () => {
  //   cy.get('[data-cy=StayInformed]')
  //     .should('be.visible')
  // })

  // it('checks that user can signup for emails successfully', () => {
  //   cy.get('form').within(($form) => {
  //     cy.get('input[type=email]')
  //       .type('fake@email.com').should('have.value', 'fake@email.com')
  //     cy.root().submit()
  //   })

  //   cy.get('[data-cy=subscriptionConfirmation]').should('contain', "You have successfully subscribed to DPLA's general email list! We'll send you announcements about our projects and events.") 
  // })

  // it('checks that user can signup for emails successfully', () => {
  //   cy.get('input:invalid').should('have.length', 0)
  //   cy.get('[type="email"]').type('not_an_email')
  //   cy.get('[type="submit"]').click()
  //   cy.get('input:invalid').should('have.length', 1)
  //   cy.get('[type="email"]').then(($input) => {
  //     expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'not_an_email' is missing an '@'.")
  //   })
  // })
// }
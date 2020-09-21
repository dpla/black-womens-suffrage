beforeEach(() => {
  cy.visit('/key-figures/charlotteVandineForten')
})

const keyFigures = [
  "Charlotte Vandine Forten",
  "Sojourner Truth",
  "Harriet Forten Purvis",
  "Margaretta Forten",
  "Mary Ann Shadd Cary",
  "Frances Ellen Watkins Harper",
  "Sarah Remond",
  "Charlotte Forten Grimké",
  "Harriet Purvis, Jr.",
  "Josephine St. Pierre Ruffin",
  'Charlotte "Lottie" Rollin',
  "Fannie Barrier Williams",
  "Ida B. Wells Barnett",
  "Mary Church Terrell",
  "Mary Talbert",
  "Lugenia Burns Hope",
  "Nannie Helen Burroughs",
  "Angelina Weld Grimké",
  "Fannie Lou Hamer"
]

const keyFiguresLinks = [
  '/key-figures/charlotteVandineForten',
  '/key-figures/sojournerTruth',
  '/key-figures/harrietFortenPurvis',
  '/key-figures/margarettaForten',
  '/key-figures/maryAnnShaddCary',
  '/key-figures/francesEllenWatkinsHarper',
  '/key-figures/sarahRemond',
  '/key-figures/charlotteFotrenGrimke',
  '/key-figures/harrietPurvisJr',
  '/key-figures/josephineStPierreRuffin',
  '/key-figures/charlotteLottieRollin',
  '/key-figures/fannieBarrierWilliams',
  '/key-figures/idaBWellsBarnett',
  '/key-figures/maryChurchTerrell',
  '/key-figures/maryTalbert',
  '/key-figures/lugeniaBurnsHope',
  '/key-figures/nannieHelenBurroughs',
  '/key-figures/angelinaWeldGrimke',
  '/key-figures/fannieLouHamer'
]

it('successfully loads homepage', () => {
  cy.checkTitle("Charlotte Vandine Forten | DPLA")
})

it('checks that hero banner is visible', () => {
  cy.checkBannerIsVisible('KEY FIGURES', "Shining a light on Black women's activism")
})

it('Checks that left navigation has correct href', () => {
  cy.checkNavigationLinks('[data-cy=key_figures__left]', 19, keyFigures, keyFiguresLinks)
})
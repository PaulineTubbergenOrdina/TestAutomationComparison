import { basicUrl, checkZichtbaarheidEnInhoudVanVeld, englishUrl, titeltekst, typeInZoekveldEnKlikOpZoeken, welkomsttekst } from '../resources/wikipedia.po'

const zoekterm = 'Platypus'

describe('Wikipedia', () => {
  it('checks that I can visit wikipedia', () => {
      cy.visit(basicUrl)
  })

  it('Checks that I can find the Platypus page on the English Wikipedia', () => {
    cy.log('go to the English Wikipedia page')
    cy.visit(englishUrl)
    cy.log('check that the page is in English')
    checkZichtbaarheidEnInhoudVanVeld(welkomsttekst, 'Welcome to')
    cy.log('search for the Platypus')
    typeInZoekveldEnKlikOpZoeken(zoekterm)
    cy.log('check that the Platypus page was found')
    checkZichtbaarheidEnInhoudVanVeld(titeltekst, zoekterm)
  })

  it('fails on purpose', () => {
    cy.log('go to the English Wikipedia page')
    cy.visit(englishUrl)
    cy.log('check that the page is in English')
    // inhoud tekst is expres fout
    checkZichtbaarheidEnInhoudVanVeld(welkomsttekst, 'Welcom to')
    cy.log('search for the Platypus')
    typeInZoekveldEnKlikOpZoeken(zoekterm)
    cy.log('check that the Platypus page was found')
    checkZichtbaarheidEnInhoudVanVeld(titeltekst, zoekterm)
  })
})

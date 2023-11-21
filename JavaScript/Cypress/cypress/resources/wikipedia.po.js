export const basicUrl = 'https://www.wikipedia.org'
export const englishUrl = 'https://en.wikipedia.org/wiki/Main_Page'
export const welkomsttekst = 'h1 > span.mw-headline'
export const titeltekst = 'h1.firstHeading > span'

export const checkZichtbaarheidEnInhoudVanVeld = (cssSelector, tekst) => {
    cy.get(cssSelector).should('be.visible')
    cy.get(cssSelector).should('contain.text', tekst)
}

export const typeInZoekveldEnKlikOpZoeken = (zoekterm) => {
    const zoekveld = '#searchInput[aria-label="Search Wikipedia"]'
    cy.get(zoekveld).type(zoekterm)
    cy.contains('button', 'Search').click()
}

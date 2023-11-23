import { Selector } from 'testcafe'

export const basicUrl = 'https://www.wikipedia.org'
export const englishUrl = 'https://en.wikipedia.org/wiki/Main_Page'
export const welkomsttekst = 'h1 > span.mw-headline'
export const titeltekst = 'h1.firstHeading > span'

export const checkZichtbaarheidEnInhoudVanVeld = async (t, cssSelector, tekst) => {
    await t.expect(Selector(cssSelector).visible).eql(true)
    await t.expect(Selector(cssSelector).innerText).contains(tekst)
}

export const typeInZoekveldEnKlikOpZoeken = async (t, zoekterm) => {
    const zoekveld = Selector('#searchInput[aria-label="Search Wikipedia"]')
    const zoekknop = Selector('button').withText('Search')
    await t.typeText(zoekveld, zoekterm)
    await t.click(zoekknop)
}

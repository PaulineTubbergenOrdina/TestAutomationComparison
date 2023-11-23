import { checkZichtbaarheidEnInhoudVanVeld, welkomsttekst, typeInZoekveldEnKlikOpZoeken, titeltekst, englishUrl, basicUrl } from "../resources/wikipedia.po"

const zoekterm = 'Platypus'

fixture('Getting Started')
    .page(basicUrl);

test('Checks that I can visit Wikipedia', async t => {
    console.log('test has been reached');
});

fixture('Wikipedia')
    .page(englishUrl)

test('Checks that I can find the Platypus page on the English Wikipedia', async t => {
    console.log("Go to the English Wikipedia page")
    console.log("Check that the page is in English")
    await checkZichtbaarheidEnInhoudVanVeld(t, welkomsttekst, 'Welcome to')
    console.log("Search for the Platypus")
    await typeInZoekveldEnKlikOpZoeken(t, zoekterm)
    console.log("Check that the Platypus page was found")
    await checkZichtbaarheidEnInhoudVanVeld(t, titeltekst, zoekterm)
  })

test('Fails on purpose', async t => {
    console.log("Go to the English Wikipedia page")
    console.log("Check that the page is in English")
    // inhoud tekst is expres fout
    await checkZichtbaarheidEnInhoudVanVeld(t, welkomsttekst, 'Welcom to')
    console.log("Search for the Platypus")
    await typeInZoekveldEnKlikOpZoeken(t, zoekterm)
    console.log("Check that the Platypus page was found")
    await checkZichtbaarheidEnInhoudVanVeld(t, titeltekst, zoekterm)
})

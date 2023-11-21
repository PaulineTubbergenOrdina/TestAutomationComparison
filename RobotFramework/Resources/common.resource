*** Variables ***
${BASIC_URL}                https://www.wikipedia.org
${ENGLISH_URL}              https://en.wikipedia.org/wiki/Main_Page
${BROWSER_PLAYWRIGHT}       Chromium
${BROWSER_SELENIUM}         Chrome
${ZOEKVELD}                 css=#searchInput[aria-label="Search Wikipedia"]
${ZOEKKNOP}                 xpath=//button[text()='Search']
${WELKOMSTTEKST}            css=h1 > span.mw-headline
${WELKOMSTTEKST_TIKFOUT}    css=h1 > span.mh-headline
${TITELTEKST}               css=h1.firstHeading > span

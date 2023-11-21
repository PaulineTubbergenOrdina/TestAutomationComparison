*** Settings ***
Library     Browser
Resource    ./common.resource

*** Variables ***
${HEADLESS}                 False

*** Keywords ***
Open url in browser
    [Arguments]     ${url}
    New Browser     ${BROWSER_PLAYWRIGHT}     ${HEADLESS}
    New Page        ${url}

Check zichtbaarheid en inhoud van veld
    [Arguments]    ${css_selector}    ${tekst}
    Get Element States    ${css_selector}    validate    visible
    Get Text    ${css_selector}    ==    ${tekst}

Type in zoekveld en klik op zoekknop
    [Arguments]    ${tekst}
    Type Text    ${ZOEKVELD}    ${tekst}
    Click    ${ZOEKKNOP}

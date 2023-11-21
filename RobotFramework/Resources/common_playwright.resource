*** Settings ***
Library     Browser
Resource    ./common.resource

*** Variables ***
${HEADLESS}                 False

*** Keywords ***
Open url in browser
    [Arguments]     ${url}
    New Browser     ${BROWSER}     ${HEADLESS}
    New Page        ${url}

Check zichtbaarheid en inhoud van veld
    [Arguments]    ${css_selector}    ${tekst}
    Get Element States    ${css_selector}    validate    visible
    Get Text    ${css_selector}    ==    ${tekst}

Type in zoekveld
    [Arguments]    ${tekst}
    Type Text    ${ZOEKVELD}    ${tekst}

Klik zoekknop
    Click    ${ZOEKKNOP}

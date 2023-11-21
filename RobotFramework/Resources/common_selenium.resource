*** Settings ***
Library     SeleniumLibrary
Resource    ./common.resource


*** Keywords ***
Open url in browser
    [Arguments]    ${url}
    Open browser    ${url}    ${BROWSER}   
    
Check zichtbaarheid en inhoud van veld
    [Arguments]    ${css_selector}    ${tekst}
    Element Should Be Visible   ${css_selector}
    Element Text Should Be   ${css_selector}    ${tekst}
    
Type in zoekveld en klik op zoekknop
    [Arguments]    ${tekst}
    Input Text     ${ZOEKVELD}    ${tekst}
    Click Button    ${ZOEKKNOP}

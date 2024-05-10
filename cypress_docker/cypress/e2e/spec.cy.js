
const SELECTOR_LANG = "#langSelect-EN";
const SELECTOR_CARE = ".cc_btn_accept_all";
const SELECTOR_NBCOOKIES = "#cookies";
const SELECTOR_BIGCOOKIE = "#bigCookie";

describe('testing Cookie Clicker', () =>
{
  it('cookie clicker test', () =>
  {
    cy.visit('/');
    cy.get(SELECTOR_LANG).click();
    cy.get(SELECTOR_CARE).click();
    cy.get(SELECTOR_NBCOOKIES).contains('0 cookies');
  });
});

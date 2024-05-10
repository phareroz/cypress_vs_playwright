
const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';
const nbcookies = '#cookies';
const bigcookie = '#bigCookie';
const zerocookie = '0 cookie';
const onecookie = '1 cookie';

describe('test suite', () =>
{
  it('init', () =>
  {
    cy.visit(url);
    cy.get(lang).click();
    cy.get(care).click();
    cy.get(nbcookies).contains(zerocookie);
  });
  it('bake', { scrollBehavior: false }, () =>
  {
    cy.get(bigcookie).click();
    cy.get(nbcookies).contains(onecookie);
  });
});

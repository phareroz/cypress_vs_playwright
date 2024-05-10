
const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';
const nbcookies = '#cookies';
const zerocookies = '0 cookie';

describe('test suite', () =>
{
  it('test', () =>
  {
    cy.visit(url);
    cy.get(lang).click();
    cy.get(care).click();
    cy.get(nbcookies).contains(zerocookies);
  });
});


const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';
const nbcookies = '#cookies';
const bigcookie = '#bigCookie';
const zerocookie = '0 cookie';
const onecookie = '1 cookie';
const config = {screen:'samsung-s10',
                useragent:"Mozilla/5.0 (Android 9; Mobile; rv:97.0) Gecko/20100101 Firefox/97.0"};

describe('test suite', () =>
{
  it('mobile', () =>
  {
    cy.viewport(config.screen);
    cy.intercept(url, (req) => req.headers['user-agent'] = config.useragent);
    cy.visit(url);
    cy.get(lang).click();
    cy.get(care).click();
    cy.get(nbcookies).contains(zerocookie);
  });
});


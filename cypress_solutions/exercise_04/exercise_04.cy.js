
const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';

describe('test suite', () =>
{
  it('test', () =>
  {
    cy.visit(url);
    cy.get(lang).click();
    cy.get(care).click();
  });
});

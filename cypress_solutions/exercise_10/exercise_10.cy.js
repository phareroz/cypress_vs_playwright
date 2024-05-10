const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';
const nbcookies = '#cookies';
const bigcookie = '#bigCookie';
const sectionright = 'sectionRight';
const pub = ['#support','#smallSupport','#detectAds'];
const upgrades = '#upgrades';
const products = '#product';

function bake()
{
  cy.get(nbcookies, {'log':false}).then(e =>
  {
    if (parseInt(cy.$$(e).text().split(' ')[0]) > 150)
       return;
    cy.get(upgrades, {'log':false}).then(upgrade =>
    {
      let upgrades = Cypress.$(upgrade).children();
      let upgradeclasses;
      if (upgrades.length > 0)
        upgradeclasses = upgrades.first().attr("class");
      else
        upgradeclasses = [];
      if (upgradeclasses.indexOf('enabled') != -1)
      {
        cy.log('buy upgrade');
        cy.get('#' + upgrades.first().attr("id"),{"log":false}).click({"log":false}).then(() => bake() );
      }
      else
      {
        cy.get(products + '1', {"log":false}).invoke({"log":false},'attr', 'class').then(classList1 =>
        {
          let product1classes = classList1.split(' ');
          if (product1classes.indexOf('enabled') != -1)
          {
            cy.log('buy grandma');
            cy.get(products + '1', {"log":false}).click({"log":false}).then(() => bake());
          }
          else
          {
            cy.get(products + '0', {"log":false}).invoke({"log":false},'attr', 'class').then(classList0 =>
            {
              let product0classes = classList0.split(' ');
              if (product0classes.indexOf('enabled') != -1)
              {
                cy.log('buy cursor');
                cy.get(products + '0', {"log":false}).click({"log":false}).then(() => bake());
              }
              else
              {
                cy.get('#bigCookie',{"log":false}).click({"log":false}).then(() => bake());
              }
            });
          }
        });
      }
    });
  });
}

describe('test suite', () =>
{
  it('test', { scrollBehavior : false }, () =>
  {
    cy.visit(url);
    cy.get(lang).click();
    cy.get(care).click();
    cy.get(pub[0]).then(() => pub.forEach(pub => cy.$$(pub).hide()));
    cy.get(nbcookies).contains('0 cookie');
    bake();
  });
});

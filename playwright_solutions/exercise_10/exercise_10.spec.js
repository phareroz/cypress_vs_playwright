
const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';
const nbcookies = '#cookies';
const bigcookie = '#bigCookie';
const sectionright = '#sectionRight';
const pub = ['#support','#smallSupport','#detectAds'];
const upgrades = '#upgrades';
const products = '#product';

const {test, expect} = require('@playwright/test');

async function choice(page)
{
  return await page.evaluate((params) =>
  {
    const nbcookiestxt = document.querySelector(params.nbcookies).innerHTML;
    const status = { nextclicklocator: params.bigcookie, nbcookies: nbcookiestxt.split(' ')[0] };
    for (let productid=3; productid>=0; productid--)
    {
      const product = document.querySelector(params.products + productid);
      if (product)
      {
        if (product.classList.contains('enabled'))
        {
          console.log('buy', product.id);
          status.nextclicklocator = params.products + productid;
          return status;
        }
      }
    }
    for (let upgrade of document.querySelector(params.upgrades).children)
    {
      if (upgrade.classList.contains('enabled'))
      {
        console.log('buy', upgrade.id);
        status.nextclicklocator = '#' + upgrade.id;
        return status;
      }
    }
    return status;
  }, {nbcookies, bigcookie, products, upgrades});
}

test.describe('test suite', () =>
{
  test('test', async ({page}) =>
  {
    test.setTimeout(240000);
    await page.goto(url);
    await page.locator(lang).click();
    await page.locator(care).click();
    await page.evaluate(e => document.querySelector(e).style.display = 'none', pub[0]);
    await page.evaluate(e => document.querySelector(e).style.display = 'none', pub[1]);
    await page.evaluate(e => document.querySelector(e).style.display = 'none', pub[2]);
    await expect(page.locator(nbcookies)).toContainText('0 cookie');
    while (true)
    {
      await page.waitForTimeout(50);
      const status = await choice(page);
      if (status.nbcookies > 150)
        break;
      else
        await page.locator(status.nextclicklocator).click();
    }
    await page.waitForTimeout(20000);
  });
});


const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';
const nbcookies = '#cookies';
const bigcookie = '#bigCookie';
const zerocookie = '0 cookie';
const onecookie = '1 cookie';
const config = {screen:{width:360, height:760},
                useragent:"Mozilla/5.0 (Android 9; Mobile; rv:97.0) Gecko/20100101 Firefox/97.0"};
const {test, expect} = require('@playwright/test');
test.describe('test suite', () =>
{
  test.use({ userAgent: config.useragent });
  test.use({ viewport: config.screen });
  test('test', async ({page}) =>
  {
    await page.goto(url);
    await page.locator(lang).click();
    await page.locator(care).click();
    await expect(page.locator(nbcookies)).toContainText(zerocookie);
  });
});

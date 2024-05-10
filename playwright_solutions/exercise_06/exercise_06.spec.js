
const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';
const nbcookies = '#cookies';
const bigcookie = '#bigCookie';
const zerocookie = '0 cookie';
const onecookie = '1 cookie';

const {test, expect} = require('@playwright/test');
test.describe('test suite', () =>
{
  test.describe.configure({ mode: 'serial' });
  let page;

  test.beforeAll(async ({ browser }) =>
  {
    page = await browser.newPage();
  });
  test.afterAll(async () =>
  {
    await page.close();
  });

  test('init', async () =>
  {
    await page.goto(url);
    await page.locator(lang).click();
    await page.locator(care).click();
    await expect(page.locator(nbcookies)).toContainText(zerocookie);
  });
  test('bake', async () =>
  {
    await page.locator(bigcookie).click();
    await expect(page.locator(nbcookies)).toContainText(onecookie);
  });
});


const url = 'https://ozh.github.io/cookieclicker';
const lang = '#langSelect-EN';
const care = '.cc_btn_accept_all';

const {test, expect} = require('@playwright/test');
test.describe('test suite', () =>
{
  test('test', async ({ page }) =>
  {
    await page.goto(url);
    await page.locator(lang).click();
    await page.locator(care).click();
  });
});

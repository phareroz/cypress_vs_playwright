
const {test, expect} = require('@playwright/test');

const SELECTOR_LANG = "#langSelect-EN";
const SELECTOR_CARE = ".cc_btn_accept_all";
const SELECTOR_NBCOOKIES = "#cookies";
const SELECTOR_BIGCOOKIE = "#bigCookie";

test.describe('testing Cookie Clicker', () =>
{
  test('cookie clicker test', async ({page}) =>
  {
    await page.goto('/cookieclicker/');
    await page.locator(SELECTOR_LANG).click();
    await page.locator(SELECTOR_CARE).click();
    await expect(page.locator(SELECTOR_NBCOOKIES)).toContainText('0 cookie');
  });
});


const url = 'https://ozh.github.io/cookieclicker';

const {test, expect} = require('@playwright/test');
test.describe('test suite', () =>
{
  test('test', async ({ page }) =>
  {
    await page.goto(url);
  });
});

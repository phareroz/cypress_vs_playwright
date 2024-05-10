const url = 'https://jsonplaceholder.typicode.com/users';
const {test, expect} = require('@playwright/test');

test.describe('test suite', () =>
{
  test('test', async ({ request }) =>
  {
    const users = await request.get(url);
    expect(users.ok()).toBeTruthy();
    const users_json = await users.json();
    expect(users_json.length).toBeGreaterThan(1);
  });
});

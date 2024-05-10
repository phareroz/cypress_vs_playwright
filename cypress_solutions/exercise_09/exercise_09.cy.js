
const url = 'https://jsonplaceholder.typicode.com/users';

describe('test suite', () =>
{
  it('test', () =>
  {
    cy.request("GET", url).then((response) =>
    {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(1);
    });
  });
});

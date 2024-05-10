
**You must be in the root folder of the cloned Cypress solutions repo.**

`npm init playwright`

choose the following answers :  
√ Do you want to use TypeScript or JavaScript? · **JavaScript**  
√ Where to put your end-to-end tests? · **tests**  
√ Add a GitHub Actions workflow? (y/N) · **false**  
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · **true**  

`npx playwright test --ui`

and/or

`npx playwright test --debug`
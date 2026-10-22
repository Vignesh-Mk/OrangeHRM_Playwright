import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type BaseFixtures = 
{
    loginPage: LoginPage;
};

export const test = baseTest.extend<BaseFixtures>(
    {
        loginPage: async({ page }, use) =>
            {
                const loginPage = new LoginPage(page);

                await use(loginPage);
            },
    });

export { expect } from '@playwright/test';
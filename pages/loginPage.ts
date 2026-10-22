import { expect, Locator, Page } from '@playwright/test';

export class LoginPage
{
    readonly page: Page;
    readonly loginTitle: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;

    readonly dashboardTitle: Locator;
    readonly invalidPopup: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.loginTitle = page.getByRole('heading', { name: 'Login', exact: true });
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.submitButton = page.getByRole('button', { name: 'Login', exact: true });

        this.dashboardTitle = page.getByRole('heading', { name: 'Dashboard', exact: true });
        this.invalidPopup = page.getByRole('alert').filter({ hasText: 'Invalid credentials'});
    }

    async navigateTo(testURL: string)
    {
        await this.page.goto(testURL);

        await expect(this.loginTitle).toBeVisible();
    }

    async loginWithCredentials(username: string, password: string)
    {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }

    async checkForDashboardTitle()
    {
        await expect(this.dashboardTitle).toBeVisible();
    }

    async checkForInvalidPopup()
    {
        await expect(this.invalidPopup).toBeVisible();
    }
}
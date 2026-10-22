import { test } from "../../fixtures/baseFixtures";

test("Login Test: Successful outcome", async({ loginPage }) => 
    {
        const testURL = process.env.TEST_URL!;
        const username = process.env.TEST_USERNAME!;
        const password = process.env.TEST_PASSWORD!;

        await loginPage.navigateTo(testURL);

        await loginPage.loginWithCredentials(username, password);

        await loginPage.checkForDashboardTitle();
    });

test("Login Test: Failed outcome", async({ loginPage }) => 
    {
        const testURL = process.env.TEST_URL!;
        const username = 'Invalid username';
        const password = 'Invalid password';

        await loginPage.navigateTo(testURL);

        await loginPage.loginWithCredentials(username, password);

        await loginPage.checkForInvalidPopup();
    });
import { expect, test } from '@playwright/test';

test('Handle new tab ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://compendiumdev.co.uk/');

    const openlink = await page.locator('a:has-text("EvilTester.com")');

    // Start waiting for the new page before clicking
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //wait for new tab to be open
        page.click('a:has-text("EvilTester.com")')

    ]);

    // Wait until the new page is fully loaded
    await newPage.waitForLoadState('domcontentloaded');
    await newPage.bringToFront();

    console.log(await newPage.url());

    const newpageelement = await newPage.getByText('Software Development Consultancy and Training')
    console.log(await newpageelement.innerText());
});
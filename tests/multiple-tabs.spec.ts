import { test, expect } from '@playwright/test';

test('Handle new tab and validate heading', async ({ page, context }) => {
  // Step 1: Navigate to the parent page
  await page.goto('https://demo.automationtesting.in/Windows.html');

  // Step 2: Click the button with text 'click' (first occurrence)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for new tab
    page.locator('button').filter({ hasText: 'click' }).first().click()
  ]);

  // Step 3: Wait until the new tab is fully loaded
  await newPage.waitForLoadState();

  // Step 4: Locate the heading element in the new tab
  const heading = newPage.getByRole('heading', {
    name: /Selenium automates browsers\. That's it!/i
  });

  // Step 5: Assert visibility of the heading
  await expect(heading).toBeVisible();

  // Step 6: Take a screenshot of the new tab
  await newPage.screenshot({ path: 'screenShots/newTabScreenshot.png', fullPage: true });

  // Step 7: Move control back to the parent page
  await page.bringToFront();

  // Step 8: Take a screenshot of the parent page
  await page.screenshot({ path: 'screenShots/parentPageScreenshot.png', fullPage: true });
});

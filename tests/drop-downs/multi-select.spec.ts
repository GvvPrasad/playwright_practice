import { test, expect } from '@playwright/test'

test('standard Multi slect', async ({ page }) => {

    await page.goto('https://demoqa.com/select-menu');

    await page.locator('#cars').selectOption(['volvo', 'opel']);

    await page.screenshot({ path: 'screenShots/multiselect.png' });
});

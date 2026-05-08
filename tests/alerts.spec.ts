import { test } from '@playwright/test'

test('accept Alerts', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await page.locator('#alertbtn').click()
})


test('Dismiss Alerts', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    page.on('dialog', async dialog => {
        await dialog.dismiss();
    });

    await page.locator('#confirmbtn').click()
})

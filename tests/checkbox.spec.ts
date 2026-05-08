import {expect, test} from '@playwright/test';

test('checkbox', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const checkone = await page.locator('#checkBoxOption1')
    await checkone.click();
    await expect(checkone).toBeChecked();
    await checkone.screenshot({path:'screenShots/checkobx.png'});
});
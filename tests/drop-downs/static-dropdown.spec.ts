import {test} from '@playwright/test';

test('Static drop down', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#dropdown-class-example').selectOption('Option2')
    await page.locator('#dropdown-class-example').selectOption({value:'option3'})
    await page.locator('#dropdown-class-example').screenshot({path:'screenShots/staticdropdown.png'})
} )
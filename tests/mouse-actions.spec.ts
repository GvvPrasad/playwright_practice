import {test, expect} from '@playwright/test';

test('Hover', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#mousehover').hover();
    await page.screenshot({path:'screenShots/hover.png'});
})

test.skip('drag and drop', async ({page})=>{
    await page.goto('https://demoqa.com/droppable');
    const drop = await page.getByText('Drop Here', { exact: true })
    await page.locator('#draggable').dragTo(drop);
    await page.screenshot({path:'screenShots/drop.png'});
})
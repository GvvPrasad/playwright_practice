import {test, expect} from '@playwright/test';

test.skip('Hover', async ({page})=>{
    await page.goto('https://demoqa.com/droppable');
    await page.locator('#draggable').hover();
    await page.screenshot({path:'screenShots/hover.png'});
})

test('drag and drop', async ({page})=>{
    await page.goto('https://demoqa.com/droppable');
    const drop = await page.getByText('Drop Here', { exact: true })
    await page.locator('#draggable').dragTo(drop);
    await page.screenshot({path:'screenShots/drop.png'});
})
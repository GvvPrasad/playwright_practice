import {expect, test} from '@playwright/test';

test('Auto suggestion drop down', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    // Enter data in input field
    await page.locator('#autocomplete').fill('IN');

    //wait for the auto suggestion drop to be visiable
    const suggestionlist =await page.locator('#ui-id-1').waitFor({ state: 'visible' });
    await page.locator('#ui-id-1').screenshot({path:'screenShots/autosuggestiondropdown.png'})
    
    //count the no of items present in the suggestiion drop down
    const list = await page.locator('#ui-id-1 li');
    const listSize = await list.count();

    //loop through the list select the value
    for(let i=0; i < listSize; i++ ){
        const countryName = await list.nth(i).innerText();
        if(countryName.trim()==='China'){
            await list.nth(i).click()
            break;
        }
    }

    //take a screenshot
    await page.locator('#autocomplete').screenshot({path:'screenShots/selected value.png'})

    await expect(page.locator('#autocomplete')).toHaveValue('China');
})
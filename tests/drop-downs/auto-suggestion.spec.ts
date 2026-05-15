import {expect, test} from '@playwright/test';

test('Auto suggestion drop down', async ({page})=>{
    await page.goto('https://www.amazon.in/');
    
    const contshoping = await page.getByRole('button', { name: 'Continue shopping' });
    if(contshoping){
        await contshoping.click();
    }

    // Enter data in input field
    const searchbox = await page.getByRole('searchbox', { name: 'Search Amazon.in' })
    await searchbox.fill('shirt');
   

    //wait for the auto suggestion drop to be visiable
    const suggestionlist =await page.locator('.left-pane-results-container').waitFor({ state: 'visible' });
    await page.locator('.left-pane-results-container').screenshot({path:'screenShots/autosuggestiondropdown.png'})
    
    //count the no of items present in the suggestiion drop down
    const list = await page.locator('.left-pane-results-container div div div');
    const listSize = await list.count();

    //loop through the list select the value
    for(let i=0; i < listSize; i++ ){
        const countryName = await list.nth(i).innerText();
        if(countryName.trim()==='shirts for woman'){
            await list.nth(i).click()
            break;
        }
    }

    //take a screenshot
    await searchbox.screenshot({path:'screenShots/selected value.png'})

    await expect(searchbox).toHaveValue('shirts for woman');
})
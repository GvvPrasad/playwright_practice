import { test } from '@playwright/test'

test('Static Web table', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const table = await page.locator('//table[@name="courses"]');

    //Get all rows inside the table body
    const rows = await table.locator('//tbody/tr');
    const noofrows = await rows.count(); // total number of rows

    // Loop through each row
    for (let i = 1; i < noofrows; i++) {
        // Select the current row using nth(i)
        const row = rows.nth(i);

        //Get all cells inside this row
        const cells = row.locator('td');
        const noOfColumns = await cells.count(); // number of columns in this row

        //Loop through each cell in the current row
        for (let j = 0; j < noOfColumns; j++) {
            const cell = cells.nth(j); // pick the j-th cell
            console.log(await cell.textContent());
        }
    }
});
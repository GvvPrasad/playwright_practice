import { test } from '@playwright/test'

test('Static Web table', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const table = await page.locator('//table[@name="courses"]');

    //Get all rows inside the table body
    const rows = await table.locator('//tbody/tr');
    const noofrows = await rows.count(); // total number of rows

    // Loop through each row
    for (let i = 1; i < noofrows; i++) {

        //Get all cells inside this row
        const cells = await rows.nth(i).locator('td');
        const noOfColumns = await cells.count(); // number of columns in this row

        let rowData: string[] = [];

        //Loop through each cell in the current row
        for (let j = 0; j < noOfColumns; j++) {
            const cellText = await cells.nth(j).textContent();
            rowData.push(cellText?.trim() || '');
        }

        // Display complete row data
        console.log(`Row ${i + 1}:`, rowData);
    }
});
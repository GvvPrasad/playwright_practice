import { test, expect } from '@playwright/test';

test('Radio button', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

  const radioValue = page.locator('//input[@name="radioButton"]').nth(1);
  await radioValue.click();
  await page.locator('//label[@for="radio2"]').screenshot({path:'screenShots/radioButtonSelected.png'})

})
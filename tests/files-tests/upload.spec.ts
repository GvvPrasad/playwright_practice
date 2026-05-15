import { test, expect } from '@playwright/test';
import * as path from 'path';

test('Upload file and validate success alert', async ({ page }) => {
  // Navigate to the target page
  await page.goto('https://rahulshettyacademy.com/upload-download-test/');

  // Build the absolute path to the file inside your framework's "files" folder
  const filePath = path.resolve(__dirname,'../../', 'files', 'download.xlsx');

  // Upload the file using setInputFiles
  await page.setInputFiles('#fileinput', filePath);

  // Wait for the alert message to appear
  const toast = page.locator('.Toastify__toast-body');
  await expect(toast).toBeVisible();

  
});

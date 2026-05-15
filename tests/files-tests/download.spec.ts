import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('Download file and validate presence in files folder', async ({ page }) => {
  // Navigate to the target page
  await page.goto('https://rahulshettyacademy.com/upload-download-test/');

  // Ensure the "files" folder exists
  const downloadPath = path.resolve(__dirname,'../../', 'files');
  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

 // Wait for download event and click download button
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadButton'),
  ]);

  // Get downloaded file name
  const fileName = download.suggestedFilename();

  // Save file into files folder
  const filePath = path.join(downloadPath, fileName);
  await download.saveAs(filePath);

  // Validate file exists
  const fileExists = fs.existsSync(filePath);

  expect(fileExists).toBeTruthy();
});

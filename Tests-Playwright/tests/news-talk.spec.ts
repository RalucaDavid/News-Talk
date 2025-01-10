import { test, expect } from '@playwright/test';

test('redirection to the article page works correctly', async ({ page }) => {
    const initialUrl = 'http://localhost:5173'; 
    await page.goto(initialUrl);
    await expect(page).toHaveTitle(/News Talk/);

    await page.locator('._card_19bcj_1').first().click();

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('a').click(),
    ]);

    await newPage.waitForLoadState();

    await expect(newPage).not.toHaveURL(initialUrl);
});

test('form is displayed correctly', async ({ page }) => {
    const initialUrl = 'http://localhost:5173'; 
    await page.goto(initialUrl);
    await expect(page).toHaveTitle(/News Talk/);

    await page.locator('._card_19bcj_1').first().click();
    
    const writeCommentElement = await page.locator('text="Write a comment..."');
    await expect(writeCommentElement).toBeVisible();
    await writeCommentElement.click();
    
    await expect(page.locator('text="Add Comment"')).toBeVisible();
    await expect(page.locator('input[placeholder="Name"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Content"]')).toBeVisible();
    await expect(page.locator('text="Send"')).toBeVisible(); 
});
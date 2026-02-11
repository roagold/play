import { test, expect } from '@playwright/test';

test('test wiki', async ({ page }) => {
  await page.goto('https://www.wikipedia.org')

  await expect(page, 'Page title is coorect').toHaveTitle(/Wikipedia/)
})
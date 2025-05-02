import { test, expect } from '@playwright/test';
import { HomePage }    from '../pages/HomePage';

test.describe('Critical smoke tests', () => {
  test('homepage title contains Expedia', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await expect(page).toHaveTitle(/Expedia/i);
  });
});
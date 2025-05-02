import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { StaysPage } from '../pages/StaysPage';

test('Stays search on Expedia', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.selectStaysTab();

  const stays = new StaysPage(page);
  await stays.search('New York, NY', '2025-07-01', '2025-07-05');
  expect(await stays.hasResults()).toBeTruthy();
});

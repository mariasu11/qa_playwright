import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CarsPage } from '../pages/CarsPage';

test('Cars search on Expedia', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.selectCarsTab();

  const cars = new CarsPage(page);
  await cars.search('Los Angeles, CA', '2025-09-01', '2025-09-07');
  expect(await cars.hasResults()).toBeTruthy();
});

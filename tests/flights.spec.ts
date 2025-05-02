import { test, expect } from '@playwright/test';
import { HomePage }    from '../pages/HomePage';
import { FlightsPage } from '../pages/FlightsPage';

test('Flights search on Expedia', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.selectFlightsTab();

  const flights = new FlightsPage(page);
  await flights.search('SFO', 'LAX', '2025-08-10', '2025-08-15');
  expect(await flights.hasResults()).toBeTruthy();
});

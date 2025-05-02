import { BasePage } from './BasePage';

export class CarsPage extends BasePage {
  async search(loc: string, pickUp: string, dropOff: string) {
    await this.page.fill('input[id*="car-pickup"]', loc);
    await this.page.fill('input[id*="pickup-date"]', pickUp);
    await this.page.fill('input[id*="dropoff-date"]', dropOff);
    await this.page.click('button[type="submit"]');
  }

  async hasResults() {
    await this.page.waitForSelector('.car-listing', { timeout: 15000 });
    return (await this.page.$$('.car-listing')).length > 0;
  }
}

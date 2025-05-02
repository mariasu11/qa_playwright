import { BasePage } from './BasePage';

export class StaysPage extends BasePage {
  async search(dest: string, checkIn: string, checkOut: string) {
    await this.page.fill('input[id*="destination-hp-hotel"]', dest);
    await this.page.fill('input[id*="checkin-hp-hotel"]', checkIn);
    await this.page.fill('input[id*="checkout-hp-hotel"]', checkOut);
    await this.page.click('button[type="submit"]');
  }

  async hasResults() {
    await this.page.waitForSelector('.hotelListing', { timeout: 15000 });
    return (await this.page.$$('.hotelListing')).length > 0;
  }
}

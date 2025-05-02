import { BasePage } from './BasePage';

export class FlightsPage extends BasePage {
  async search(from: string, to: string, depart: string, ret: string) {
    await this.page.fill('input[id*="flight-origin"]', from);
    await this.page.fill('input[id*="flight-destination"]', to);
    await this.page.fill('input[id*="departure-date"]', depart);
    await this.page.fill('input[id*="return-date"]', ret);
    await this.page.click('button[type="submit"]');
  }

  async hasResults() {
    await this.page.waitForSelector('.flight-module', { timeout: 20000 });
    return (await this.page.$$('.flight-module')).length > 0;
  }
}

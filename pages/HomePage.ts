import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  async goto() {
    await this.navigate('/');
  }

  async selectStaysTab() {
    await this.page.click('button[aria-controls*="wizard-hotel"]');
  }

  async selectFlightsTab() {
    await this.page.click('button[aria-controls*="wizard-flight"]');
  }

  async selectCarsTab() {
    await this.page.click('button[aria-controls*="wizard-car"]');
  }
}

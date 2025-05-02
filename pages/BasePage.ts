import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;
  constructor(page: Page) { this.page = page; }

  async navigate(path = '') {
    await this.page.goto(path);
  }
}

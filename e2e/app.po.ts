import { $$, browser } from 'protractor';

export class Page {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarElement(n) {
    return $$('app-root a').get(n).getText();
  }

}

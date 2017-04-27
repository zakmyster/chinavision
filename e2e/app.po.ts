import { browser, element, by } from 'protractor';

export class ChinavisionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cv-root h1')).getText();
  }
}

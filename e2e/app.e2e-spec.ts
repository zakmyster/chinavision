import { ChinavisionPage } from './app.po';

describe('chinavision App', () => {
  let page: ChinavisionPage;

  beforeEach(() => {
    page = new ChinavisionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cv works!');
  });
});

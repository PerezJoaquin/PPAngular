import { PrimerParcialPage } from './app.po';

describe('primer-parcial App', () => {
  let page: PrimerParcialPage;

  beforeEach(() => {
    page = new PrimerParcialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

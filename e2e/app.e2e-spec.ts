import { Ng4playPage } from './app.po';

describe('ng4play App', () => {
  let page: Ng4playPage;

  beforeEach(() => {
    page = new Ng4playPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

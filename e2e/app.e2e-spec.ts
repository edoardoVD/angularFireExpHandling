import { Ang2Fire2Page } from './app.po';

describe('ang2-fire2 App', function() {
  let page: Ang2Fire2Page;

  beforeEach(() => {
    page = new Ang2Fire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

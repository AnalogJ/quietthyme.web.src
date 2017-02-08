import { QuietthymeWebPage } from './app.po';

describe('quietthyme-web App', function() {
  let page: QuietthymeWebPage;

  beforeEach(() => {
    page = new QuietthymeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

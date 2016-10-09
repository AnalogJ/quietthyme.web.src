import { QuietthymePage } from './app.po';

describe('quietthyme App', function() {
  let page: QuietthymePage;

  beforeEach(() => {
    page = new QuietthymePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

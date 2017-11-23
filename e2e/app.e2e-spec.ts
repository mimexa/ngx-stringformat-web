import { StringFormatPage } from './app.po';

describe('string-format App', () => {
  let page: StringFormatPage;

  beforeEach(() => {
    page = new StringFormatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

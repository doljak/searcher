import { SearcherPage } from './app.po';

describe('searcher App', () => {
  let page: SearcherPage;

  beforeEach(() => {
    page = new SearcherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { GithubappPage } from './app.po';

describe('githubapp App', () => {
  let page: GithubappPage;

  beforeEach(() => {
    page = new GithubappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { AppPage } from './app.po';

describe('frontend-testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todos');
  });
});

import { AppPage } from './app.po';
import { E2eHelper } from './helper';
import { browser, protractor } from 'protractor';

describe('frontend-testing-client', async () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show existing todo', async () => {
    await page.navigateTo();
    expect(await page.getOldestTodoItem()).toEqual('Learn about Unit Tests');
  });

  it('should add todo', async () => {
    await page.navigateTo();
    await page.getInput().sendKeys('Write E2E Tests');
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
    expect(await page.getNewestTodoItem()).toEqual('Write E2E Tests');
  });

  it('should complete todo', async () => {
    await page.navigateTo();
    await page.getInput().sendKeys('Write E2E Tests');
    await page.completeNewestTodoItem();

    expect(
      E2eHelper.hasClass(await page.getNewestListItem(), 'completed')
    ).toBe(true);
  });
});

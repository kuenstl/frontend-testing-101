import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNewestListItem() {
    return element.all(by.css('ft-todo-item li')).last();
  }

  getOldestTodoItem() {
    return element
      .all(by.css('ft-todo-item label'))
      .first()
      .getText();
  }

  getNewestTodoItem() {
    return element
      .all(by.css('ft-todo-item label'))
      .last()
      .getText();
  }

  completeNewestTodoItem() {
    return element
      .all(by.css('ft-todo-item input'))
      .last()
      .click();
  }

  getInput() {
    return element.all(by.css('input')).first();
  }
}

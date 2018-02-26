import { browser, protractor } from 'protractor';

export class E2eHelper {
  static hasClass(element, cls) {
    return element.getAttribute('class').then(function(classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  }
}

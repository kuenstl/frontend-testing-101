import {Todo} from './todo.model';

const localStorageKey = 'ngx-todos';

export class TodoService {
  todos: Array<Todo>;

  constructor() {
    let persistedTodos =
        JSON.parse(localStorage.getItem(localStorageKey) || '[]');

    this.todos =
        persistedTodos.map((todo: {title: string, completed: boolean}) => {
          let newTodo = new Todo(todo.title);
          newTodo.completed = todo.completed;
          return newTodo;
        });
  }

  allCompleted() {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(completed: boolean) {
    this.todos.forEach((todo: Todo) => todo.completed = completed);
    this.update();
  }

  removeCompleted() {
    this.todos = this.getWithCompleted(false);
    this.update();
  }

  getRemaining() {
    return this.getWithCompleted(false);
  }

  getCompleted() {
    return this.getWithCompleted(true);
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
    this.update();
  }

  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.update();
  }

  add(title: string) {
    this.todos.push(new Todo(title));
    this.update();
  }

  private update() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.todos));
  }

  private getWithCompleted(completed: boolean) {
    return this.todos
      .filter((todo: Todo) => todo.completed === completed);
  }
}
export class Todo {
  completed: boolean;
  editing: boolean;

  constructor(public title: string) {
    this.completed = false;
    this.editing = false;
    this.title = title.trim();
  }
}

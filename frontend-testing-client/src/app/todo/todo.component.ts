import { Component } from '@angular/core';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'ft-todo', 
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  
  newTodoText = '';

  constructor(private todoService: TodoService) { }

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoService.remove(todo);
    }

    todo.title = editedTitle;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  removeCompleted() {
    this.todoService.removeCompleted();
  }

  toggleCompletion(todo: Todo) {
    this.todoService.toggleCompletion(todo);
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoService.add(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
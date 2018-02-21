import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'ft-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  newTodoText = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(todo => {
      const idx = this.todos.findIndex(t => todo._id === t._id);
      this.todos[idx] = todo;
    });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo() {
    this.newTodoText = this.newTodoText.trim();

    if (!this.newTodoText) {
      return;
    }
    this.todoService
      .addTodo(new Todo(this.newTodoText))
      .subscribe(todo => this.todos.push(todo));

    this.newTodoText = '';
  }
}

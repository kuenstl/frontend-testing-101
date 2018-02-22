import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

const firstTestTodo = new Todo('Write unit tests');
const secondTestTodo = new Todo('Write more unit tests');

class todoServiceStub {
  getTodos() {
    return [firstTestTodo, secondTestTodo];
  }

  addTodo(todo) {
    return todo;
  }

  updateTodo(todo) {
    return todo;
  }

  deleteTodo(todo) {}
}

describe('TodoListComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule],
        providers: [{ provide: TodoService, useValue: todoServiceStub }],
        declarations: [TodoItemComponent, TodoListComponent]
      }).compileComponents();
    })
  );
  it(
    'should create the component',
    async(() => {
      const fixture = TestBed.createComponent(TodoListComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    })
  );
});

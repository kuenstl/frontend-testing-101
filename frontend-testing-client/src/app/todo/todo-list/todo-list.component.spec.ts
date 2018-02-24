import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const firstTestTodo = new Todo('Write unit tests');
const secondTestTodo = new Todo('Write more unit tests');

describe('TodoListComponent', () => {
  let fixture;
  let component;
  let todoService;
  let addTodoSpy;

  beforeEach(
    async(() => {
      const todoServiceStub = {
        getTodos() {
          return Observable.from([[firstTestTodo, secondTestTodo]]);
        },

        addTodo(todo) {
          return Observable.from([todo]);
        }
      };

      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule],
        declarations: [TodoItemComponent, TodoListComponent],
        providers: [{ provide: TodoService, useValue: todoServiceStub }]
      }).compileComponents();

      fixture = TestBed.createComponent(TodoListComponent);
      component = fixture.debugElement.componentInstance;
      todoService = fixture.debugElement.injector.get(TodoService);

      addTodoSpy = spyOn(todoService, 'addTodo').and.callThrough();
      fixture.detectChanges();
    })
  );

  it(
    'should create the component',
    async(() => {
      expect(component).toBeTruthy();
    })
  );

  it(
    'should show existing todos',
    async(() => {
      expect(component.todos).toContain(firstTestTodo);
      expect(component.todos).toContain(secondTestTodo);
    })
  );

  it(
    'should add a todo',
    fakeAsync(() => {
      const newTestTodo = new Todo('Write another unit test');
      component.newTodoText = newTestTodo.text;
      fixture.detectChanges();
      component.addTodo(newTestTodo);

      fixture.detectChanges();
      tick(10);
      fixture.detectChanges();
      expect(addTodoSpy).toHaveBeenCalledWith(newTestTodo);
    })
  );
});

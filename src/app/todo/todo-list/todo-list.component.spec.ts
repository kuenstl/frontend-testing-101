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

  beforeEach(() => {
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

    addTodoSpy = jest.spyOn(todoService, 'addTodo');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  it('should show existing todos', () => {
    expect(component.todos).toContain(firstTestTodo);
    expect(component.todos).toContain(secondTestTodo);
    expect(fixture).toMatchSnapshot();
  });

  it('should add a todo', fakeAsync(() => {
    const newTestTodo = new Todo('Write another unit test');
    component.newTodoText = newTestTodo.text;
    fixture.detectChanges();

    component.addTodo(newTestTodo);

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(addTodoSpy).toHaveBeenCalledWith(newTestTodo);
    expect(fixture).toMatchSnapshot();
  }));
});

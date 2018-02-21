import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';

describe('TodoComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule],
        providers: [TodoService],
        declarations: [TodoListComponent]
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

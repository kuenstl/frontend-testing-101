import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../todo.service';

describe('TodoItemComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule],
        providers: [TodoService],
        declarations: [
          TodoItemComponent
        ]
      }).compileComponents();
    })
  );
  it(
    'should create the component',
    async(() => {
      const fixture = TestBed.createComponent(TodoItemComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    })
  );
});

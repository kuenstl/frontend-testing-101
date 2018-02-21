import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe('TodoComponent', () => {
  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports: [
            CommonModule,
            FormsModule
          ],
          providers: [TodoService],
          declarations: [TodoComponent],
        })
        .compileComponents();
  }));
  it('should create the component', async(() => {
       const fixture = TestBed.createComponent(TodoComponent);
       const component = fixture.debugElement.componentInstance;
       expect(component).toBeTruthy();
     }));
});

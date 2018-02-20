import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [TodoService],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }

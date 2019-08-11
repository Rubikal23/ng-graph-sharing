import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list.component';

@NgModule({
  declarations: [BooksListComponent],
  exports: [
    BooksListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }

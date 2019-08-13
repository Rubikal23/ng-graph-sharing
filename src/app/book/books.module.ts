import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BooksListComponent, ChapterComponent, BookComponent],
  exports: [
    BooksListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }

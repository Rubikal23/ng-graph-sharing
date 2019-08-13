import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list.component';
import { ChapterComponent } from './chapter/chapter.component';

@NgModule({
  declarations: [BooksListComponent, ChapterComponent],
  exports: [
    BooksListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }

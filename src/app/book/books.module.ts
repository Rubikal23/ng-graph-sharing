import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookComponent} from './book/book.component';
import {BookService} from './book.service';

@NgModule({
  declarations: [BooksListComponent, BookComponent],
  exports: [
    BooksListComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BookService
  ]
})
export class BooksModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookComponent} from './book/book.component';
import {BookApiService} from './bookApi.service';
import {BookStateService} from "./bookState.service";
import {BookFacadeService} from "./book.facade";

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
    BookApiService,
    BookStateService,
    BookFacadeService
  ]
})
export class BooksModule {
}

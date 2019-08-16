import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookComponent} from './book/book.component';
import {BookApiService} from './bookApi.service';
import {BookStateService} from "./bookState.service";
import {BookFacadeService} from "./book.facade";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [BooksListComponent, BookComponent],
  exports: [
    BooksListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    BookApiService,
    BookStateService,
    BookFacadeService
  ]
})
export class BooksModule {
}

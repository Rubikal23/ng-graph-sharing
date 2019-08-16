import { Injectable } from '@angular/core';
import { StateService } from '../state/state.service';
import { Book } from '../book/book.type';

@Injectable()
export class UserStateService {

  constructor(private stateService: StateService) { }

  getAllBooks() {
    console.log('User state service');
    return this.stateService.books$;
  }

  AddNewBook(newBook: Book) {
    console.log('Adding new book');
  debugger;
    let books = this.stateService.books.getValue();
    let newBooks = [...books, newBook];
    this.stateService.books.next(newBooks);
  }

  getBookState() {
    return this.stateService.book$;
  }
}

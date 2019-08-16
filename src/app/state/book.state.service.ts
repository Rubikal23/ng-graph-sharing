import {Observable} from "rxjs";
import {Book} from "../book/book.type";
import {Injectable} from "@angular/core";
import { StateService } from './state.service';

@Injectable()
export class BookStateService {

  constructor(private stateService: StateService) {}

  getBooksState(): Observable<Book[]> {
    return this.stateService.books$;
  }

  setBooksState(books: Book[]) {
    this.stateService.books.next(books);
  }

  getCurrentBooks() {
    return this.stateService.books.getValue();
  }

  getBookState(): Observable<Book> {
    return this.stateService.book$;
  }

  setBookState(book: Book) {
    this.stateService.book.next(book);
  }

  getCurrentBook() {
    return this.stateService.book.getValue();
  }

  AddNewBook(newBook: Book) {
    console.log('Adding new book');
  debugger;
    let books = this.stateService.books.getValue();
    let newBooks = [...books, newBook];
    this.stateService.books.next(newBooks);
  }
}

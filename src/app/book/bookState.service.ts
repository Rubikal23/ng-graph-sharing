import {BehaviorSubject, Observable} from "rxjs";
import {Book} from "./book.type";
import {Injectable} from "@angular/core";
import { StateService } from '../state/state.service';

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
}

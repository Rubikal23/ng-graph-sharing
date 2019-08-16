import {BehaviorSubject, Observable} from "rxjs";
import {Book} from "./book.type";
import {Injectable} from "@angular/core";

@Injectable()
export class BookStateService {
  private books = new BehaviorSubject<Book[]>([]);
  books$ = this.books.asObservable();

  getBookState(): Observable<Book[]> {
    return this.books$;
  }

  setBookState(books: Book[]) {
    this.books.next(books);
  }

  getCurrentBooks() {
    return this.books.getValue();
  }

}

import {BehaviorSubject, Observable} from "rxjs";
import {Book} from "./book.type";
import {Injectable} from "@angular/core";

@Injectable()
export class BookStateService {
  private books = new BehaviorSubject<Book[]>([]);
  private book = new BehaviorSubject<Book>(<Book>{});

  books$ = this.books.asObservable();
  book$ = this.book.asObservable();


  getBooksState(): Observable<Book[]> {
    return this.books$;
  }

  setBooksState(books: Book[]) {
    this.books.next(books);
  }

  getCurrentBooks() {
    return this.books.getValue();
  }

  getBookState(): Observable<Book> {
    return this.book$;
  }

  setBookState(book: Book) {
    this.book.next(book);
  }

  getCurrentBook() {
    return this.book.getValue();
  }

}

import { Injectable } from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Book} from "../book/book.type";

@Injectable()
export class StateService {
  books = new BehaviorSubject<Book[]>([]);
  books$ = this.books.asObservable();

  book = new BehaviorSubject<Book>(<Book>{});
  book$ = this.book.asObservable();
}

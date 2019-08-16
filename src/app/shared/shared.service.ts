import { Injectable } from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Book} from "../book/book.type";

@Injectable()
export class SharedService {
  books = new BehaviorSubject<Book[]>([]);
  books$ = this.books.asObservable();
}

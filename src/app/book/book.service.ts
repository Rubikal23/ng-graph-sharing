import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Book, Query} from "./book.type";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SharedService} from "../shared/shared.service";

@Injectable()
export class BookService {
    allBooksQuery = gql`{
        allBooks {
            id
            price
            status
            title
        }
    }`;

    bookQuery = gql`{
        myBook {
            id
            price
            status
            title
        }
    }`;

  constructor(
    private apollo: Apollo,
    private sharedService: SharedService
  ) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.apollo.subscribe<Query>({
      query: this.allBooksQuery
    }).pipe(
      map(result => result.data.allBooks)
    );
  }

  getBook(): Observable<Book> {
    return this.apollo.subscribe<Query>({
      query: this.bookQuery
    }).pipe(
      map(results => results.data.myBook)
    );
  }

  changeBooks(books: Book[]) {
  debugger;
    // this.sharedService.books.next(books);
  }

  getBookStatusOfUser(userId: string, bookId: string) {

  }
}

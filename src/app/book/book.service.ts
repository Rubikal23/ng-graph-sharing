import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";

@Injectable()
export class BookService {
  constructor(private apollo: Apollo) {}

  getAllBooks() {

  }

  getBookById(bookId: string) {

  }

  getBookStatusOfUser(userId: string, bookId: string) {

  }
}

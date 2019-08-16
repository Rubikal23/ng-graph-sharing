import {Injectable} from '@angular/core';
import {BookApiService} from "./bookApi.service";
import {BookStateService} from "./bookState.service";
import {of} from "rxjs";
import {Book} from "./book.type";

@Injectable()
export class BookFacadeService {

  constructor(private bookApiService: BookApiService,
              private bookStateService: BookStateService) {
  }

  getAllBooks() {
    debugger;
    if (!this.bookStateService.getCurrentBooks().length) {
      this.bookApiService.getAllBooks().subscribe((data) => {
        this.bookStateService.setBookState(data);
      })
    }
    return this.bookStateService.getBookState();
  }


  getBook() {

  }

  changeBooks() {
    console.log('Hello world');
    return of({});
  }


}

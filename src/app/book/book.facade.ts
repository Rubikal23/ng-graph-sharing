import {Injectable} from '@angular/core';
import {BookApiService} from "./bookApi.service";
import {BookStateService} from "./bookState.service";
import {of} from "rxjs";

@Injectable()
export class BookFacadeService {

  constructor(private bookApiService: BookApiService,
              private bookStateService: BookStateService) {
  }

  getAllBooks() {
    if (!this.bookStateService.getCurrentBooks().length) {
      this.bookApiService.getAllBooks().subscribe((data) => {
        this.bookStateService.setBooksState(data);
      })
    }
    return this.bookStateService.getBooksState();
  }


  getBook() {
    if (!!this.bookStateService.getCurrentBook()) {
      this.bookApiService.getBook().subscribe((book) => {
        this.bookStateService.setBookState(book);
      });
    }

    return this.bookStateService.getBookState();
  }

  changeBooks() {
    console.log('Hello world');
    return of({});
  }


}

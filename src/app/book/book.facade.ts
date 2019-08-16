import {Injectable} from '@angular/core';
import {BookApiService} from './bookApi.service';
import {BookStateService} from './bookState.service';
import {Observable, of} from 'rxjs';
import {Book} from './book.type';

@Injectable()
export class BookFacadeService {

  constructor(private bookApiService: BookApiService,
              private bookStateService: BookStateService) {
  }

  getAllBooks() {
    if (!this.bookStateService.getCurrentBooks().length) {
      this.bookApiService.getAllBooks().subscribe((data) => {
        const books = this.bookStateService.getCurrentBooks();
        const newBookArray = [...books, ...data];
        this.bookStateService.setBooksState(newBookArray);
      });
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

  changeBooks(book: Book) {
    this.bookStateService.setBookState(book);
  }

  listenBookChange(): Observable<Book> {
    return this.bookStateService.getBookState();
  }
}

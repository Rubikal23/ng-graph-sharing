import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Book } from '../book/book.type';
import {Observable} from "rxjs";
import {BookStateService} from "../state/book.state.service";

@Injectable()
export class UserFacadeService {

  constructor(private userApiService: UserApiService,
              private bookStateService: BookStateService) {

  }

  showBooks() {
    this.bookStateService.getBookState().subscribe((data) => {
      console.log('User Facade Service');
      console.log(data);
    });
  }

  addBook(newBook: Book) {
    console.log('In add book user');
    this.bookStateService.AddNewBook(newBook);
  }

  listenBookChange(): Observable<Book> {
    return this.bookStateService.getBookState();
  }


}

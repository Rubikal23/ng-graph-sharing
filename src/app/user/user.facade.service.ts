import { Injectable } from '@angular/core';
import { UserStateService } from './user-state.service';
import { UserApiService } from './user-api.service';
import { Book } from '../book/book.type';
import {Observable} from "rxjs";

@Injectable()
export class UserFacadeService {

  constructor(private userApiService: UserApiService,
              private userStateService: UserStateService) {

  }

  showBooks() {
    this.userStateService.getAllBooks().subscribe((data) => {
      console.log('User Facade Service');
      console.log(data);
    });
  }

  addBook(newBook: Book) {
    console.log('In add book user');
    this.userStateService.AddNewBook(newBook);
  }

  listenBookChange(): Observable<Book> {
    return this.userStateService.getBookState();
  }


}

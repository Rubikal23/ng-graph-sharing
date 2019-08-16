import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from './user.facade.service';
import {Book} from "../book/book.type";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  newBook = {
    id: 2,
    title: "H C Verma II",
    status: "Available",
    price: 320
  };

  book: Book = this.newBook;

  constructor(private userFacadeService: UserFacadeService) { }

  ngOnInit() {
    this.userFacadeService.showBooks();
    this.userFacadeService.addBook(this.newBook);

    this.userFacadeService.listenBookChange()
      .subscribe(book => {
        this.book = book;
      })
  }

}

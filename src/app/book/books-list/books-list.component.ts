import {Component, OnInit} from '@angular/core';

import {Book} from "../book.type";
import {BookFacadeService} from "../book.facade";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(private bookFacadeService: BookFacadeService) {
  }

  ngOnInit() {
    this.bookFacadeService.getAllBooks()
      .pipe(filter(books => !!books.length))
      .subscribe(books => {
        this.books = books;
      });

    this.bookFacadeService.getBook()
      .subscribe(book => {
        this.selectedBook = book;
      })

    this.bookFacadeService.listenBookChange().subscribe(book => {
      this.selectedBook = book;
    })
  }
}

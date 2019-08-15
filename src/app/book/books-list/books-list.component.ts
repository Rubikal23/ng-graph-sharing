import {Component, OnInit} from '@angular/core';

import {Book} from "../book.type";
import {BookService} from "../book.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }
}

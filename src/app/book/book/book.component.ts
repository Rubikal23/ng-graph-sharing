import { Component, OnInit } from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {Book, Query} from "../book.type";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBook().subscribe(book => {
      this.book = book;
    });
  }

  changeTitle() {

  }

}

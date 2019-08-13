import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";

import gql from 'graphql-tag';

import {Book, Query} from "./book.type";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  book: Book;
  booksQuery = gql`{
      myBook {
          id
          price
          status
          title
      }
  }`;

  allBooksQuery = gql`{
      books {
          id
          price
          status
          title
      }
  }`;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo.watchQuery<Query>({
      query: this.booksQuery
    })
      .valueChanges.subscribe(result => {
      this.book = result.data.myBook;
    });
  }
}

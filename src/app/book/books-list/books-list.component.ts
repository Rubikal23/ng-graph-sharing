import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";

import gql from 'graphql-tag';

import {Book, Query} from "../book.type";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books: Book[];

  allBooksQuery = gql`{
      allBooks {
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
      query: this.allBooksQuery
    })
      .valueChanges.subscribe(result => {
      this.books = result.data.allBooks;
    });
  }
}

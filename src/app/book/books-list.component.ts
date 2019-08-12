import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";

import gql from 'graphql-tag';

import { Book, Query } from "./book.type";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Observable<Book>;
  booksQuery = gql`{
      myBook {
        id
        price
        status
        title
      }
  }`;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<Query>({
      query: this.booksQuery
    })
    .valueChanges.subscribe(result => {
      result.data.myBook;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";

import gql from 'graphql-tag';

import { BookType, Query } from "./book.type";
import {map} from "rxjs/operators";

const BooksQuery = gql`{
    query allBooks {
        allBooks {
            id
            title
            chapters
            status
        }
    }
}`;

@Component({
  selector: 'app-book',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Observable<BookType[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.books = this.apollo.watchQuery<Query>({
      query: BooksQuery
    })
    .valueChanges.pipe(map(result => result.data.allBooks));
  }
}

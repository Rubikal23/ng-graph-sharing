import { Component, OnInit } from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {Book, Query} from "../book.type";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookQuery = gql`{
      myBook {
          id
          price
          status
          title
      }
  }`;
  book: Book;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<Query>({
      query: this.bookQuery
    })
      .valueChanges.subscribe(results => {
        this.book = results.data.myBook;
    })
  }

  changeTitle() {

  }

}

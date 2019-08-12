import { Component, OnInit } from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {Book} from "../book/book.type";

@Component({
  selector: 'app-hoot',
  templateUrl: './hoot.component.html',
  styleUrls: ['./hoot.component.scss']
})
export class HootComponent implements OnInit {

    booksQuery = gql`{
        myBook @client {
            id
            price
            status
            title
        }
    }`;
    book: Book;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    debugger;
    this.book = this.apollo.getClient().readQuery({ query: this.booksQuery }).myBook;

    /**
     *   Hoot(user) can read or write a book while using the app.
     *   Hoot can save the write or read progress of the books that are permitted.
     */
  }

}

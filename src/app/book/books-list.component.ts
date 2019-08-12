import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  showHoot = false;
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
      let arr = new Array(this.book);
      this.apollo.getClient().writeData({
        data: {
          books: arr.push(this.book)
          // myBook: this.book
        }
      });
      debugger;
    });
  }

  changeTitle($event) {
    const newBook = {
      title: 'H C Verma II',
      price: 350,
      id: 1,
      status: 'Coming Soon',
      __typename: 'Book',
    };

    let books = this.apollo.getClient().readQuery({query: this.allBooksQuery});
    this.apollo.getClient().writeData({
      data: {
        books: books.books.push(newBook),
        myBook: newBook
      }
    });
    debugger;
    this.book = this.apollo.getClient().readQuery({query: this.booksQuery}).myBook;
    this.showHoot = true;
  }
}

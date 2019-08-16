import {Component, OnInit} from '@angular/core';
import {Book} from "../book.type";
import {BookFacadeService} from "../book.facade";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor(private bookFacadeService: BookFacadeService) {
  }

  ngOnInit() {
    this.bookFacadeService.listenBookChange().subscribe(book => {
      this.book = book;
    })
  }

  changeTitle() {
    this.bookFacadeService.changeBooks({...this.book, price: 400});
  }

}

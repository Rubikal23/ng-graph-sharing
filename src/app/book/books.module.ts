import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list.component';
import {HootModule} from "../hoot/hoot.module";

@NgModule({
  declarations: [BooksListComponent],
  exports: [
    BooksListComponent
  ],
  imports: [
    CommonModule,
    HootModule
  ]
})
export class BooksModule { }

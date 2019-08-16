import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StateService} from "./state.service";
import {BookStateService} from "./book.state.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    StateService,
    BookStateService,
  ]
})
export class StateModule {

  constructor() {
  }
}

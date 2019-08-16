import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StateService} from "./state.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    StateService
  ]
})
export class StateModule {

  constructor() {
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import { LoginModule } from "../login/login.module";

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    LoginModule,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SharedService } from "./shared.service";

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }

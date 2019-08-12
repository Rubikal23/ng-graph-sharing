import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HootComponent } from './hoot.component';

@NgModule({
  declarations: [HootComponent],
  exports: [
    HootComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HootModule { }

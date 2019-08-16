import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserApiService } from './user-api.service';
import { UserFacadeService } from './user.facade.service';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ],
  providers: [
    UserApiService,
    UserFacadeService,
  ]
})
export class UserModule { }

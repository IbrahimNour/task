import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { SearchComponent } from './search/search.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [UserComponent,
     UserListComponent,
    UserFormComponent,
    SearchComponent,
    UserCardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }

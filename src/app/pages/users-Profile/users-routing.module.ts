import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersProfileComponent
      }
    ])
  ]
})
export class UsersRoutingModule { }

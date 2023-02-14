import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersRoutingModule } from './users-routing.module';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';



@NgModule({
  declarations: [
    UsersProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class UsersModule { }

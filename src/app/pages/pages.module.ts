import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MaterialModule } from '../shared/modules/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users-Profile/users.module';



@NgModule({
  declarations: [
    CoursePageComponent,
    StudentsPageComponent,
    RegistrationPageComponent,
    UserPageComponent,
    WelcomeComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    PagesRoutingModule,
    UsersModule,
  ],
  exports:[
    CoursePageComponent,
    StudentsPageComponent,
    RegistrationPageComponent,
    UserPageComponent,
    WelcomeComponent,  
    MaterialModule,
  ]
})
export class PagesModule { }

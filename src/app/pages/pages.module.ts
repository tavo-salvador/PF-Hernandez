import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PageRoutingModule } from './page.route.mudule';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    CoursePageComponent,
    StudentsPageComponent,
    RegistrationPageComponent,
    UserPageComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PageRoutingModule,
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

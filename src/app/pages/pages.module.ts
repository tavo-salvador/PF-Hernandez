import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { PageWrapperComponent } from '../shared/layout/page-wrapper/page-wrapper.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserPageComponent } from './user-page/user-page.component';



@NgModule({
  declarations: [
    CoursePageComponent,
    StudentsPageComponent,
    RegistrationPageComponent,
    UserPageComponent,  
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    CoursePageComponent,
    StudentsPageComponent,
    RegistrationPageComponent,
    UserPageComponent,  
    MaterialModule,
  ]
})
export class PagesModule { }

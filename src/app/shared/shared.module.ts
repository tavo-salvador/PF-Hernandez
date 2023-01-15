import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from '../pages/pages.module';
import { RegistrationDialogComponent } from './components/registration-dialog/registration-dialog.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';



@NgModule({
  declarations: [
    CourseDialogComponent,
    StudentDialogComponent,
    RegistrationDialogComponent,
    UserDialogComponent,

  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    PagesModule
  ],
  exports:[
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
